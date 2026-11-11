/* ===================== Liga: rivales y tabla de posiciones ===================== */

const LIGA_N = 12;
const LIGA_PREFIJOS = ['Deportivo','Atlético','Unión','Sporting','Racing','Defensores de','Juventud','Estudiantes de','Real','Club Social','Municipal','Independiente'];
const LIGA_SUFIJOS = ['Norte','del Valle','Sur','del Puerto','Alto Verde','Las Palmas','Villa Real','San Telmo','del Río','La Cumbre','Monte Alto','Costa Azul','Santa Rosa','Los Andes','Punta Este','La Loma','Barrio Nuevo','Cerro Chico'];

function crearLiga(seed, nombreClub){
  const rng = mulberry32((seed ^ 0x51ED27) >>> 0);
  const usados = new Set([nombreClub]);
  const rivales = [];
  let guard = 0;
  while(rivales.length < LIGA_N - 1 && guard++ < 500){
    const n = LIGA_PREFIJOS[Math.floor(rng() * LIGA_PREFIJOS.length)] + ' ' + LIGA_SUFIJOS[Math.floor(rng() * LIGA_SUFIJOS.length)];
    if(usados.has(n)) continue;
    usados.add(n);
    const pts = Math.round(clamp(28 + gauss(rng) * 8, 8, 58));
    rivales.push({ nombre: n, pts });
  }
  return { rivales };
}

const PTS_BASE = 24, PTS_POR_RESULTADO = 2.2;
function puntosTuyos(resultado, progreso){
  return Math.max(0, Math.round(PTS_BASE * progreso + PTS_POR_RESULTADO * resultado));
}

/* progreso: 0..1 de la temporada. Devuelve filas ordenadas con posición. */
function tablaLiga(progreso){
  if(!state.liga) state.liga = crearLiga(state.seed, state.club.nombre);
  const p = clamp(progreso === undefined ? 1 : progreso, 0, 1);
  const filas = state.liga.rivales.map(r => ({ nombre: r.nombre, pts: Math.round(r.pts * p), yo: false }));
  filas.push({ nombre: state.club.nombre, pts: puntosTuyos(state.stats.resultado, p), yo: true });
  filas.sort((a, b) => b.pts - a.pts || (a.yo ? 1 : b.yo ? -1 : a.nombre.localeCompare(b.nombre)));
  filas.forEach((f, i) => { f.pos = i + 1; });
  return filas;
}
function progresoTemporada(){
  if(state.fin || state.idx >= state.eventos.length) return 1;
  return clamp(state.idx / state.eventos.length, 0, 1);
}
function miPuesto(progreso){ return tablaLiga(progreso).find(f => f.yo).pos; }
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
function ordinal(n){ return n + 'º'; }
