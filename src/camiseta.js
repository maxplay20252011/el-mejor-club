/* ===================== Camiseta del club (se arma con los colores del escudo) ===================== */

function coloresCamiseta(c){
  const prim = c.fieldTincture;
  const cand = [c.ordinaryTincture, c.divisionTincture2, c.chargeTincture].filter(x => x && x !== prim);
  let sec = cand.find(x => esMetal(x) !== esMetal(prim)) || cand[0];
  if(!sec) sec = esMetal(prim) ? 'negro' : 'plata';
  return { prim, sec };
}
const CAMISETA_PATH = 'M62,18 L38,28 L8,58 L28,84 L44,70 L44,200 L156,200 L156,70 L172,84 L192,58 L162,28 L138,18 Q100,40 62,18 Z';

function buildCamisetaSVG(c, opciones){
  opciones = opciones || {};
  const { prim, sec } = coloresCamiseta(c);
  const A = TINCTURE_HEX[prim], B = TINCTURE_HEX[sec];
  const id = 'cam' + (++_crestUid);
  let patron = '';
  switch(c.ordinaryId){
    case 'palo': for(let i = 0; i < 5; i++) patron += `<rect x="${44 + i * 22.4}" y="0" width="11.2" height="210" fill="${B}"/>`; break;
    case 'faja': for(let i = 0; i < 4; i++) patron += `<rect x="0" y="${70 + i * 34}" width="200" height="17" fill="${B}"/>`; break;
    case 'banda': patron = `<polygon points="44,70 80,70 156,200 120,200" fill="${B}"/>`; break;
    case 'barra': patron = `<polygon points="156,70 120,70 44,200 80,200" fill="${B}"/>`; break;
    case 'cruz': patron = `<rect x="90" y="0" width="20" height="210" fill="${B}"/><rect x="0" y="100" width="200" height="22" fill="${B}"/>`; break;
    case 'cabria': patron = `<polyline points="44,150 100,96 156,150" fill="none" stroke="${B}" stroke-width="22"/>`; break;
    default:
      if(c.divisionId === 'per_pale') patron = `<rect x="100" y="0" width="100" height="210" fill="${B}"/>`;
      else if(c.divisionId === 'per_fess') patron = `<rect x="0" y="130" width="200" height="90" fill="${B}"/>`;
      else if(c.divisionId === 'per_bend') patron = `<polygon points="200,60 200,210 40,210" fill="${B}"/>`;
  }
  const escudo = buildCrestSVG(Object.assign({}, c, { nombre: null, lema: null, stars: 0, ornamento: null, anio: null })).replace('<svg ', '<svg x="76" y="76" width="30" height="48" ');
  const nombre = opciones.nombre ? `<text x="100" y="168" font-family="Georgia,serif" font-weight="900" font-size="${Math.min(12, 96 / Math.max(opciones.nombre.length, 1) * 1.7).toFixed(1)}" text-anchor="middle" fill="${B}" stroke="#00000040" stroke-width=".5">${escapeXml(opciones.nombre.toUpperCase())}</text>` : '';
  return `<svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}"><path d="${CAMISETA_PATH}"/></clipPath></defs>
    <g clip-path="url(#${id})"><rect width="200" height="210" fill="${A}"/>${patron}
      <path d="M62,18 Q100,40 138,18 L138,30 Q100,52 62,30 Z" fill="${B}"/>
      <rect x="8" y="48" width="40" height="12" fill="${B}" transform="rotate(-38 28 58)"/><rect x="152" y="48" width="40" height="12" fill="${B}" transform="rotate(38 172 58)"/></g>
    <path d="${CAMISETA_PATH}" fill="none" stroke="#00000066" stroke-width="2.5"/>
    ${escudo}${nombre}
  </svg>`;
}
function descripcionCamiseta(c){
  const { prim, sec } = coloresCamiseta(c);
  return t('tint.' + prim) + ' / ' + t('tint.' + sec);
}
