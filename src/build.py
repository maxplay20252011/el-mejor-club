import os, sys
here = os.path.dirname(os.path.abspath(__file__))
order = ['paises.js', 'nombres.js', 'eventos.js', 'eventos2.js', 'i18n.js', 'i18n_es.js', 'crest.js', 'clubes.js', 'jugadores.js', 'liga.js', 'temporada.js', 'camiseta.js'] + [f % l for l in ('en', 'pt', 'fr', 'it') for f in ('i18n_%s.js', 'sim_%s.js', 'ev_%s_1.js', 'ev_%s_2.js', 'ev_%s_3.js')] + ['juego.js', 'ui2.js', 'ui.js']
parts = []
OPCIONALES = {f % l for l in ('en', 'pt', 'fr', 'it') for f in ('i18n_%s.js', 'sim_%s.js', 'ev_%s_1.js', 'ev_%s_2.js', 'ev_%s_3.js')}
faltan = [f for f in order if f not in OPCIONALES and not os.path.exists(os.path.join(here, f))]
order = [f for f in order if os.path.exists(os.path.join(here, f))]
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
open(dest, 'w', encoding='utf-8', newline='\n').write(out)
print('ok', len(out), 'bytes')

import re
open(os.path.join(here, '..', 'tools', 'prueba.html'), 'w', encoding='utf-8').write(re.sub(r'<link[^>]*fonts[^>]*>', '', out))
