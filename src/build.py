import os, sys
here = os.path.dirname(os.path.abspath(__file__))
order = ['paises.js', 'nombres.js', 'eventos.js', 'crest.js', 'clubes.js', 'jugadores.js', 'juego.js', 'ui.js']
parts = []
faltan = [f for f in order if not os.path.exists(os.path.join(here, f))]
if faltan:
    sys.exit('ERROR: faltan archivos: ' + ', '.join(faltan))
for f in order:
    parts.append('/* ===== ' + f + ' ===== */\n' + open(os.path.join(here, f), encoding='utf-8').read())
shell = open(os.path.join(here, 'shell.html'), encoding='utf-8').read()
if '/*SCRIPTS*/' not in shell:
    sys.exit('ERROR: shell.html no tiene el marcador /*SCRIPTS*/')
js = '\n'.join(parts).replace('</script>', '<\\/script>')
out = shell.replace('/*SCRIPTS*/', js)
dest = os.path.join(here, '..', 'volvete-dirigente.html')
open(dest, 'w', encoding='utf-8').write(out)
print('ok', len(out), 'bytes')
