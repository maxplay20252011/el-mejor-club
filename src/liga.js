/* ===================== Liga: rivales, calendario y tabla de posiciones ===================== */

const LIGA_N = 12;
const LIGA_PREFIJOS = 12, LIGA_SUFIJOS = 18;       // cantidad de claves liga.p.N / liga.s.N

function crearLiga(seed, nombreClub){
  const rng = mulberry32((seed ^ 0x51ED27) >>> 0);
  const usados = new Set([nombreClub]);
  const rivales = [];
  let guard = 0;
  while(rivales.length < LIGA_N - 1 && guard++ < 500){
    const n = t('liga.p.' + Math.floor(rng() * LIGA_PREFIJOS)) + ' ' + t('liga.s.' + Math.floor(rng() * LIGA_SUFIJOS));
    if(usados.has(n)) continue;
    usados.add(n);
    rivales.push({ nombre: n, pts: Math.round(clamp(28 + gauss(rng) * 8, 8, 58)) });
  }
  // calendario: dos ruedas; el clásico (rival 0) cae en las fechas 8 y 19
  const ronda = () => {
    const a = rivales.map((_, i) => i).filter(i => i !== 0);
    for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    a.splice(7, 0, 0);
    return a;
  };
  return { rivales, calendario: [...ronda(), ...ronda()] };
}

const PTS_BASE = 24, PTS_POR_RESULTADO = 2.2;

function tablaLiga(){
  if(!state.liga || !state.liga.calendario) state.liga = crearLiga(state.seed, state.club.nombre);
  const p = clamp((state.partidos ? state.partidos.length : 0) / FECHAS, 0, 1);
  const filas = state.liga.rivales.map(r => ({ nombre: r.nombre, pts: Math.round(r.pts * p), yo: false }));
  filas.push({ nombre: state.club.nombre, pts: state.partidos ? puntosAcumulados() : 0, yo: true });
  filas.sort((a, b) => b.pts - a.pts || (a.yo ? 1 : b.yo ? -1 : a.nombre.localeCompare(b.nombre)));
  filas.forEach((f, i) => { f.pos = i + 1; });
  return filas;
}
function miPuesto(){ return tablaLiga().find(f => f.yo).pos; }
function zonaLiga(pos){
  if(pos === 1) return 'campeon';
  if(pos <= 3) return 'copa';
  if(pos >= LIGA_N - 1) return 'descenso';
  return 'medio';
}
const ZONA_TXT = {
  campeon: '🏆 Campeón',
  copa: '🥉 Zona de copa',
  medio: 'Mitad de tabla',
  descenso: '⚠ Zona de descenso',
};
