# Volvete Dirigente

Juego de navegador: una temporada al frente de un club de fútbol, trece decisiones. Abrí `volvete-dirigente.html`.

## Estadísticas
Gestión, Prensa, Resultado, Caja y **Vestuario**. Se contradicen a propósito: recortar gastos mejora la caja pero resiente al vestuario; vender una figura lo golpea fuerte. Un vestuario bajo (<30) resta resultado; alto (≥75) suma. En 0, el plantel se rebela y termina tu mandato.

## Consecuencias
Algunas decisiones vuelven: vender una figura, recortar gastos, enojar a la prensa, una racha ganadora o un vestuario roto disparan eventos encadenados (`requiere` en `src/eventos.js`).

## Desarrollo
- Código en `src/`; `python3 src/build.py` genera `volvete-dirigente.html` (falla si falta un archivo).
- `node tools/simular.js 300` simula temporadas por dificultad y política, y audita el pool de eventos.
- CI verifica que el HTML versionado coincida con `src/`.
