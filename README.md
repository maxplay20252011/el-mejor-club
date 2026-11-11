# Volvete Dirigente

Juego de navegador: una temporada al frente de un club de fútbol, trece decisiones. Abrí `volvete-dirigente.html`.

## Estadísticas
Gestión, Prensa, Resultado, Caja y **Vestuario**. Se contradicen a propósito: recortar gastos mejora la caja pero resiente al vestuario; vender una figura lo golpea fuerte. Un vestuario bajo (<30) resta resultado; alto (≥75) suma. En 0, el plantel se rebela y termina tu mandato.

## Consecuencias
Algunas decisiones vuelven: vender una figura, recortar gastos, enojar a la prensa, una racha ganadora o un vestuario roto disparan eventos encadenados (`requiere` en `src/eventos.js`).

## Liga y tabla
Hay una liga de 12 equipos (11 rivales ficticios por semilla). Tus puntos salen del resultado deportivo acumulado; la tabla se ve durante la temporada (botón **Tabla**) y al final. 1º es campeón, 2º-3º zona de copa y 11º-12º descienden. El puesto final aparece en el veredicto, los logros (Campeón, Descenso) y la tarjeta para compartir.

## Tarjeta para compartir
La tarjeta descargable suma puesto en la tabla, objetivo, puntaje y los dos titulares más fuertes de la temporada, con un desafío al pie ("¿Podés superarme?") y el link del juego.

## Tests de balance
`tools/balance.html?n=300` (abrir con un servidor estático, p. ej. `python -m http.server` en la raíz) simula temporadas con cuatro políticas por dificultad y verifica: finales prematuros, "Leyenda" alcanzable pero no regalada, objetivo y campeón dentro de rango, cobertura del pool y que **ninguna opción domine a otra** (el motor suma ahorro de caja a la opción dominada, ver `equilibrarOpciones` en `src/eventos.js`).

## Dispositivos y países
El diseño se adapta a celular (desde 320 px, vertical y horizontal), tablet y escritorio: en pantallas grandes el creador de escudo y la formación pasan a dos columnas y la lista de clubes a tres. Hay 215 países y territorios: los 193 de la ONU, Santa Sede, Palestina y 20 selecciones y territorios (Inglaterra, Escocia, Gales, Irlanda del Norte, Taiwán, Kosovo, Hong Kong, Puerto Rico y otros). Las banderas se cargan como imagen desde flagcdn.com y, si no hay conexión, caen al emoji.

## Desarrollo
- Código en `src/`; `python3 src/build.py` genera `volvete-dirigente.html` (falla si falta un archivo).
- `node tools/simular.js 300` simula temporadas por dificultad y política, y audita el pool de eventos.
- CI verifica que el HTML versionado coincida con `src/`.
