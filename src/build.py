import os, sys
here = os.path.dirname(os.path.abspath(__file__))
order = ['paises.js', 'nombres.js', 'eventos.js', 'crest.js', 'clubes.js', 'jugadores.js', 'juego.js', 'ui.js']
parts = []
for f in order:
    p = os.path.join(here, f)
    if os.path.exists(p):
        parts.append('/* ===== ' + f + ' ===== */\n' + open(p, encoding='utf-8').read())
    else:
        print('FALTA', f)
shell = open(os.path.join(here, 'shell.html'), encoding='utf-8').read()
js = '\n'.join(parts).replace('</script>', '<\\/script>')
out = shell.replace('/*SCRIPTS*/', js)
dest = os.path.join(here, '..', 'volvete-dirigente.html')
open(dest, 'w', encoding='utf-8').write(out)
print('ok', len(out), 'bytes')
