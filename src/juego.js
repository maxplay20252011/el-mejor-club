/* ===================== Motor del juego ===================== */

const NUM_EVENTOS = 13;
let POOL = [];
let state = null;
const ui = { screen:'inicio', tab:'facil', volverA:'evento', cfg:null, seed:null, slotAbierto:null, mercado:[], msg:null, dts:null, sponsors:null, panel:false, sugerencias:null };

const BANDERA_TAGS = { ENG:'gbeng', SCT:'gbsct', WLS:'gbwls' };
const BANDERA_CDN = { ENG:'gb-eng', SCT:'gb-sct', WLS:'gb-wls', NIR:'gb-nir' };
function banderaEmoji(code){
  if(BANDERA_TAGS[code]) return String.fromCodePoint(0x1F3F4, ...BANDERA_TAGS[code].split('').map(c => 0xE0000 + c.charCodeAt(0)), 0xE007F);
  if(!code || code.length !== 2) return '🏳';
  return String.fromCodePoint(...code.toUpperCase().split('').map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}
/* Imagen de bandera (Windows no dibuja los emojis de bandera); si no carga, cae al emoji. */
function bandera(code){
  const c = (BANDERA_CDN[code] || String(code || '').toLowerCase());
  if(!/^[a-z-]{2,6}$/.test(c)) return banderaEmoji(code);
  return `<img class="flag" src="https://flagcdn.com/w40/${c}.png" srcset="https://flagcdn.com/w80/${c}.png 2x" width="20" height="15" alt="${banderaEmoji(code)}" loading="lazy" onerror="this.replaceWith(document.createTextNode(this.alt))">`;
}
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmtCaja(n){ return '$' + Math.round(n).toLocaleString(localeActual()) + 'k'; }
function signo(n){ return (n > 0 ? '+' : '') + Math.round(n); }

/* ---------- pool de eventos (se regenera al cambiar de idioma) ---------- */
function inicializarPool(){
  if(typeof expandirPlantillas === 'function' && typeof PLANTILLAS_EVENTOS !== 'undefined') POOL = expandirPlantillas(PLANTILLAS_EVENTOS, LANG);
  return POOL.length;
}
/* al cambiar de idioma con una partida abierta, los eventos pendientes se reemplazan por su versión traducida */
function reidiomarPartida(){
  if(!state) return;
  const por = {}; POOL.forEach(e => { por[e.id] = e; });
  state.eventos = state.eventos.map(e => por[e.id] || e);
  state.reservas = state.reservas.map(e => por[e.id] || e);
  state.ctx = null;
}

/* ---------- sustitución de tokens ---------- */
function sustituirTexto(txt, ctx){
  if(!txt) return '';
  const j = ctx && ctx.jugador;
  const club = state ? state.club : null;
  const per = (state && state.personajes) || {};
  const rival = state && state.liga && state.liga.rivales[0] ? state.liga.rivales[0].nombre : '';
  return String(txt)
    .replace(/\{JUGADOR\}/g, j ? j.nombreCompleto : t('jugador.generico'))
    .replace(/\{JPOS\}/g, j ? t('pos.' + j.pos).toLowerCase() : t('jugador.pos.generico'))
    .replace(/\{JEDAD\}/g, j ? j.edad : '')
    .replace(/\{JRATING\}/g, j ? j.rating : '')
    .replace(/\{CUALIDAD\}/g, j && j.cualidad ? t('q.' + j.cualidad).toLowerCase() : t('cualidad.generica'))
    .replace(/\{CLUB\}/g, club ? club.nombre : t('club.generico'))
    .replace(/\{CIUDAD\}/g, club && club.ciudad ? club.ciudad : t('ciudad.generica'))
    .replace(/\{PERIODISTA\}/g, per.periodista || '')
    .replace(/\{HINCHA\}/g, per.hincha || '')
    .replace(/\{EMPRESARIO\}/g, per.empresario || '')
    .replace(/\{RIVAL\}/g, rival)
    .replace(/\{DT\}/g, state && state.dt ? state.dt.nombre : '')
    .replace(/\{PAIS\}/g, club ? nombrePais(club.paisCode) : '');
}

/* ---------- muestreo de eventos ---------- */
function baseId(e){ return String(e.id).split('#')[0]; }
function coincidePais(ev, paisCode){
  if(!ev.paises && !ev.geo && !ev.cluster) return true;
  const p = paisPorCode(paisCode) || {};
  return !!((ev.paises && ev.paises.includes(p.code)) || (ev.geo && ev.geo.some(g => (p.geoTag || []).includes(g))) || (ev.cluster && ev.cluster.includes(p.cluster)));
}
function ordenarPorFase(evs, rng){
  const n = evs.length, out = new Array(n).fill(null), libres = [];
  const rangos = { inicio: [0, 3], medio: [4, 8], cierre: [9, n - 1] };
  evs.forEach(e => {
    if(e.fase && rangos[e.fase]){
      const [a, b] = rangos[e.fase], slots = [];
      for(let i = a; i <= Math.min(b, n - 1); i++) if(out[i] === null) slots.push(i);
      if(slots.length){ out[slots[Math.floor(rng() * slots.length)]] = e; return; }
    }
    libres.push(e);
  });
  for(let i = 0; i < n; i++) if(out[i] === null) out[i] = libres.shift();
  return out;
}
function muestrearEventos(dif, rngEv, paisCode){
  const pesos = DIFICULTAD_INFO[dif].pesos;
  const candidatos = POOL.filter(e => !e.requiere && coincidePais(e, paisCode));
  const elegidos = [], usadosPlantilla = new Set(), usadosId = new Set();
  const total = NUM_EVENTOS + 6; // + reservas
  let guard = 0;
  while(elegidos.length < total && guard++ < 5000){
    const libres = candidatos.filter(e => !usadosId.has(e.id) && !usadosPlantilla.has(baseId(e)));
    if(!libres.length) break;
    const w = libres.map(e => (pesos[e.cat] || 1) * ((e.jugador && e.jugador.indexOf('cualidad:') === 0) ? 0.5 : 1) * ((e.paises || e.geo || e.cluster) ? 2.5 : 1));
    const tot = w.reduce((a, b) => a + b, 0);
    let r = rngEv() * tot, k = 0;
    for(; k < libres.length - 1; k++){ r -= w[k]; if(r <= 0) break; }
    const e = libres[k];
    elegidos.push(e); usadosId.add(e.id); usadosPlantilla.add(baseId(e));
  }
  const base = ordenarPorFase(elegidos.slice(0, NUM_EVENTOS), rngEv);
  return { eventos: base, reservas: elegidos.slice(NUM_EVENTOS) };
}
/* el clásico: dos partidos con eventos propios (semana previa y revancha) */
function insertarClasicos(){
  const poner = (flag, pos) => {
    const cand = POOL.filter(e => e.requiere === flag);
    if(!cand.length || pos >= state.eventos.length) return;
    state.eventos[pos] = cand[Math.floor(state.rngEv() * cand.length)];
  };
  poner('clasico', 7); poner('clasico_vuelta', 11);
}

/* ---------- partida ---------- */
function iniciarPartida(clubData, seed){
  const rng = mulberry32(seed >>> 0);
  const rngEv = mulberry32((seed ^ 0x9E3779B9) >>> 0);
  const plantel = generarPlantel(rng, clubData);
  const m = muestrearEventos(clubData.dif, rngEv, clubData.paisCode);
  state = {
    seed, rng, rngEv,
    club: { nombre:clubData.nombre, ciudad:clubData.ciudad || '', paisCode:clubData.paisCode, dif:clubData.dif, crest:clubData.crest },
    stats: { vestuario: 55, ...clubData.stats },
    cajaInicial: clubData.stats.caja,
    plantel, titulares: formacionAutomatica(plantel),
    capitan: elegirCapitan(plantel),
    eventos: m.eventos, reservas: m.reservas, idx: 0,
    flags: { clasico: true }, historial: [], ctx: null, resultado: null, fin: null,
    vendidos: [], ventas: 0, fichajes: 0, encadenados: 0, guardado: false,
    liga: crearLiga(seed, clubData.nombre), partidos: [], goles: {},
    copa: nuevaCopa(), hooks: {}, dt: null, cantera: 0, estadio: iniciarEstadio(clubData.dif), sponsor: null,
    temporada: 1, carrera: { temporadas: [], titulos: 0, copas: 0 },
    personajes: crearPersonajes(rng, clubData.paisCode), cerrada: false, notasCierre: [],
  };
  state.club.crest = { ...clubData.crest, nombre: clubData.crest.nombre || null };
  insertarClasicos();
  ui.mercado = []; ui.slotAbierto = null; ui.sponsors = null; ui.sugerencias = null;
  ui.dts = generarDTs(state.rng, state.club);
  ui.screen = 'dt';
  ui.volverA = 'presupuesto';
}

function probConPlantel(base){
  const avg = ratingTitulares(state.plantel, state.titulares);
  let p = base + (avg - 65) / 150 + (state.dt ? (state.dt.rating - 65) / 400 : 0);
  const tit = titularesComoJugadores(state.plantel, state.titulares);
  if(tit.some(j => j.cualidad === 'muro' || j.cualidad === 'inquebrantable')) p += 0.05;
  return clamp(p, 0.08, 0.92);
}

function eventoValido(ev){
  if(ev.cond === 'pocos_arqueros' && state.plantel.filter(j => j.pos === 'ARQ').length > 1) return false;
  if(ev.jugador === 'vendido' && !state.vendidos.length) return false;
  if(ev.jugador && ev.jugador.indexOf('cualidad:') === 0){
    const q = ev.jugador.split(':')[1];
    return state.plantel.some(j => q === '*' ? !!j.cualidad : j.cualidad === q);
  }
  return true;
}

function ctxParaEvento(ev){
  let jugador = null;
  const rng = state.rng;
  const k = ev.jugador;
  if(k === 'capitan') jugador = jugadorPorNombre(state.plantel, state.capitan);
  else if(k === 'vendido') jugador = state.vendidos[state.vendidos.length - 1] || null;
  else if(k && k.indexOf('fichaje:') === 0) jugador = generarJugador(rng, { paisCode:state.club.paisCode, ratingBase:68, ratingSpread:12, pos:k.split(':')[1] });
  else if(k === 'fichaje') jugador = generarJugador(rng, { paisCode:state.club.paisCode, ratingBase:72, ratingSpread:14 });
  else if(k === 'exJugador') jugador = generarJugador(rng, { paisCode:state.club.paisCode, ratingBase:55, ratingSpread:25, retirado:true });
  else if(k) jugador = elegirJugador(rng, state.plantel, k, state.titulares, ev.cat === 'deportivo');
  return { jugador, esNuevo: !!k && (k === 'vendido' || k === 'exJugador' || k.indexOf('fichaje') === 0) };
}

function eventoActual(){
  let ev = state.eventos[state.idx];
  let guard = 0;
  while(ev && !eventoValido(ev) && guard++ < 30){
    const rep = state.reservas.shift();
    if(!rep) break;
    state.eventos[state.idx] = rep;
    ev = rep;
  }
  return ev;
}

/* ---------- vestuario: si la opción no lo fija, se deriva de lo que hace ---------- */
function derivarVestuario(d, ev, op, r, ctx){
  const j = ctx.jugador, q = j && !ctx.esNuevo ? j.cualidad : null;
  const vende = op.vende || r.vende, ficha = op.ficha || r.ficha;
  let v = 0;
  if(ev.cat === 'deportivo') v += Math.round(d.resultado * 0.4);
  if(ev.cat === 'hinchada' && d.gestion > 2) v += 1;
  if(ev.cat === 'economico' && d.caja >= 60 && d.gestion <= 0) v -= 3;
  if(ev.cat === 'economico' && d.caja <= -60 && d.resultado > 0) v += 2;
  if(vende && j && !ctx.esNuevo){
    const figura = j.rating >= 75 || q === 'idolo' || q === 'lider' || state.capitan === j.nombreCompleto;
    v -= figura ? 10 : 4;
  }
  if(ficha && ctx.esNuevo) v += 2;
  return v;
}

/* ---------- aplicar efecto (único punto donde pesan las cualidades y el DT) ---------- */
function aplicarOpcion(op, ev, ctx){
  const j = ctx.jugador;
  const q = j && !ctx.esNuevo ? j.cualidad : null;
  let r;
  if(op.azar){
    let pOk = op.azar.p;
    if(ev.cat === 'deportivo') pOk = clamp(pOk + (probConPlantel(0.5) - 0.5), 0.05, 0.95);
    let pMal = 1 - pOk;
    if(q === 'inquebrantable') pMal /= 2;
    if(q === 'fragil' && ev.cat === 'deportivo') pMal = Math.min(0.9, pMal * 2);
    pOk = 1 - pMal;
    r = state.rng() < pOk ? op.azar.ok : op.azar.mal;
  } else r = { d: op.d, msg: op.msg };
  const d = Object.assign({ gestion:0, prensa:0, resultado:0, caja:0 }, r.d || {});
  const notas = [];
  if(state.club.dif === 'facil'){            // un grande no perdona: lo malo pega 25% más
    if(d.gestion < 0) d.gestion = Math.round(d.gestion * 1.25);
    if(d.prensa < 0) d.prensa = Math.round(d.prensa * 1.25);
  }
  if(d.vestuario == null) d.vestuario = derivarVestuario(d, ev, op, r, ctx);
  if(ev.cat === 'deportivo'){
    if(state.stats.vestuario < 15){ d.resultado -= 4; notas.push(t('nota.vestLlamas')); }
    else if(state.stats.vestuario < 30){ d.resultado -= 2; notas.push(t('nota.vestRoto')); }
    else if(state.stats.vestuario >= 75){ d.resultado += 2; notas.push(t('nota.vestUnido')); }
  }
  const dt = state.dt;
  if(dt){
    if(ev.cat === 'deportivo' && dt.estilo === 'ofensivo' && d.resultado !== 0){
      if(d.resultado > 0){ d.resultado += 1; d.prensa += 1; } else d.resultado -= 1;
      notas.push(t('nota.dtOfensivo'));
    }
    if(ev.cat === 'deportivo' && dt.estilo === 'defensivo' && d.resultado !== 0){
      d.resultado = d.resultado < 0 ? Math.min(0, d.resultado + 2) : Math.max(0, d.resultado - 1);
      notas.push(t('nota.dtDefensivo'));
    }
    if(dt.estilo === 'motivador' && state.stats.vestuario < 85){ d.vestuario += 1; notas.push(t('nota.dtMotivador')); }
  }
  const bueno = (d.gestion + d.prensa + d.resultado) > 0;
  if(q === 'cazagoles' && ev.cat === 'deportivo' && d.resultado > 0){ d.resultado = Math.round(d.resultado * 1.15); notas.push(t('nota.cazagoles')); }
  if(q === 'muro' && d.resultado < 0){ d.resultado = Math.round(d.resultado / 2); notas.push(t('nota.muro')); }
  if(q === 'carismatico' && bueno){ d.prensa += 5; notas.push(t('nota.carismatico')); }
  if(q === 'idolo' && ev.cat === 'hinchada' && bueno){ d.gestion += 8; notas.push(t('nota.idolo')); }
  if(q === 'revalorizable' && bueno){ j.valor = Math.round(j.valor * 1.2); notas.push(t('nota.revalorizable')); }
  if(q === 'lider'){ d.gestion += 2; notas.push(t('nota.lider')); }
  const vende = op.vende || r.vende, ficha = op.ficha || r.ficha;
  let vendioFigura = false;
  if(vende && j && !ctx.esNuevo){
    if(q === 'idolo'){ d.gestion -= 15; notas.push(t('nota.idoloVendido')); }
    state.vendidos.push(j); state.ventas++;
    if(j.rating >= 72 || q === 'idolo' || state.capitan === j.nombreCompleto) vendioFigura = true;
    quitarDelPlantel(j);
    notas.push(t('nota.sale', { jugador: j.nombreCompleto }));
  }
  if(ficha && j && ctx.esNuevo && state.plantel.length < 26){
    asignarDorsal(state.plantel, j, state.rng);
    j.contrato = 2;
    state.plantel.push(j); state.fichajes++;
    state.vendidos = state.vendidos.filter(x => x !== j);
    notas.push(t('nota.llega', { jugador: j.nombreCompleto, dorsal: j.dorsal }));
  }
  if(state.idx >= 5){   // la presión de la expectativa crece en la segunda mitad
    const rf = state.stats.resultado + d.resultado, dif = state.club.dif;
    if(dif === 'facil' && rf < 0){ d.gestion -= 3; notas.push(t('nota.presionFacil')); }
    else if(dif === 'medio' && rf < -6){ d.gestion -= 2; notas.push(t('nota.presionMedio')); }
  }
  /* ingresos y gastos corrientes del club */
  const sp = state.sponsor;
  if(sp){ d.caja += sp.porEvento; notas.push(t('nota.sponsor', { marca: sp.marca, n: fmtCaja(sp.porEvento) })); }
  const ing = ingresoPorEvento();
  d.caja += ing; notas.push(t('nota.socios', { n: fmtCaja(ing) }));
  if(dt){ d.caja -= dt.sueldo; notas.push(t('nota.sueldo', { n: fmtCaja(dt.sueldo) })); }
  const cuota = state.estadio.cuota;
  if(cuota === 'premium' && state.stats.resultado + d.resultado < 6){ d.gestion -= 1; notas.push(t('nota.cuotaPremium')); }
  if(cuota === 'popular' && state.idx % 2 === 1 && state.stats.resultado + d.resultado >= 0){ d.gestion += 1; notas.push(t('nota.cuotaPopular')); }
  const antes = { ...state.stats };
  state.stats.gestion = clamp(state.stats.gestion + d.gestion, 0, 100);
  state.stats.prensa = clamp(state.stats.prensa + d.prensa, 0, 100);
  state.stats.resultado += d.resultado;
  state.stats.caja += d.caja;
  state.stats.vestuario = clamp(state.stats.vestuario + d.vestuario, 0, 100);
  state.estadio.socios = +clamp(state.estadio.socios + (d.gestion + d.resultado) * 0.1, state.estadio.aforo * 0.3, state.estadio.aforo).toFixed(1);
  if(dt && dt.estilo === 'formador'){
    const jov = state.plantel.filter(x => x.edad <= 22 && x.rating < 90);
    if(jov.length && state.rng() < 0.3){
      const x = jov[Math.floor(state.rng() * jov.length)];
      x.rating++; x.valor = valorDeMercado(x.rating, x.edad);
      notas.push(t('nota.dtFormador', { jugador: x.nombreCompleto }));
    }
  }
  const setea = op.setea || r.setea;
  if(setea) state.flags[setea] = true;
  return { d, setea, vendioFigura, msg: sustituirTexto(r.msg || '', ctx), notas, antes };
}

function elegirOpcion(i){
  const ev = eventoActual();
  const ctx = state.ctx;
  const op = ev.opciones[i];
  const res = aplicarOpcion(op, ev, ctx);
  const impacto = Math.abs(res.d.gestion) + Math.abs(res.d.prensa) + Math.abs(res.d.resultado) + Math.abs(res.d.caja) / 20;
  state.historial.push({ cat: ev.cat, cons: !!ev.requiere, titulo: sustituirTexto(ev.titulo, ctx), opcion: sustituirTexto(op.texto, ctx), d: res.d, impacto, msg: res.msg });
  state.resultado = res;
  jugarFechasHasta(Math.round((state.idx + 1) / state.eventos.length * FECHAS));
  if(ev.requiere) state.encadenados++;
  if(res.setea) insertarEncadenado(res.setea);
  else {
    const d = res.d;
    const autos = [
      ['vestuario_critico', state.stats.vestuario < 20],
      ['vestuario_roto', state.stats.vestuario < 30],
      ['vestuario_oro', state.stats.vestuario >= 85],
      ['vendio_figura', res.vendioFigura],
      ['recorte', ev.cat === 'economico' && d.caja >= 60 && d.gestion <= 0],
      ['prensa_enojada', ev.cat === 'mediatico' && d.prensa <= -5],
      ['racha', ev.cat === 'deportivo' && d.resultado >= 6],
    ];
    const a = autos.find(([f, cond]) => cond && !state.flags[f]);
    if(a){ state.flags[a[0]] = true; insertarEncadenado(a[0]); }
  }
  if(state.stats.gestion <= 0) state.fin = 'destituido';
  else if(state.stats.caja <= -250) state.fin = 'quiebra';
  else if(state.stats.vestuario <= 0) state.fin = 'motin';
  if(state.fin) borrarGuardado();
  ui.screen = 'resultado';
}
function insertarEncadenado(flag){
  const usados = new Set(state.eventos.map(e => e.id));
  const cand = POOL.filter(e => e.requiere === flag && !usados.has(e.id) && coincidePais(e, state.club.paisCode));
  if(!cand.length) return;
  const ev = cand[Math.floor(state.rngEv() * cand.length)];
  let pos = Math.min(state.idx + 3, state.eventos.length);
  while(pos < state.eventos.length && state.eventos[pos].requiere) pos++;
  if(pos < state.eventos.length) state.eventos[pos] = ev; else state.eventos.push(ev);
}

/* pantallas intermedias: renovaciones, copa, mercado de invierno */
function entrarHook(h){
  if(h === 'copa') jugarCopa();
  ui.screen = h;
}
function terminarHook(){
  const h = proximoHook();
  if(h){ entrarHook(h); return; }
  guardarPartida();
  ui.screen = 'evento';
}
function siguienteEvento(){
  state.idx++;
  state.ctx = null;
  state.resultado = null;
  if(state.fin || state.idx >= state.eventos.length){ borrarGuardado(); cerrarTemporada(); ui.screen = 'diario'; return; }
  const h = proximoHook();
  if(h){ entrarHook(h); return; }
  guardarPartida();
  ui.screen = 'evento';
}

/* ---------- veredicto / titulares ---------- */
const OBJETIVOS = {
  facil:   { texto:'Pelear el campeonato: resultado de +8 o más y gestión de 60 o más.', ok: s => s.resultado >= 8 && s.gestion >= 60 },
  medio:   { texto:'Clasificar a copa: resultado de +3 o más sin gastar más del 30% de la caja.', ok: (s, ci) => s.resultado >= 3 && s.caja >= ci * 0.7 },
  dificil: { texto:'Sobrevivir: evitar el descenso (resultado de −4 o más) y cerrar con caja positiva.', ok: s => s.resultado >= -4 && s.caja >= 0 },
};
function objetivo(){
  const o = OBJETIVOS[state.club.dif];
  return { texto: t('obj.' + state.club.dif), cumplido: !!o.ok(state.stats, state.cajaInicial) };
}
function calcularScore(){
  const s = state.stats;
  const resNorm = clamp(50 + s.resultado, 0, 100);
  const cajaNorm = clamp(50 + (s.caja - state.cajaInicial) / Math.max(100, state.cajaInicial) * 50, 0, 100);
  return 0.28 * s.gestion + 0.15 * s.prensa + 0.3 * resNorm + 0.1 * cajaNorm + 0.17 * s.vestuario;
}
const VEREDICTOS = [
  { min:76, titulo:'Leyenda de la dirigencia', facil:'Gestión impecable, pero con este club era lo mínimo que se esperaba: no te alcanza para la estatua.', medio:'Una temporada redonda. Los socios piden que no te vayas nunca.', dificil:'Una hazaña. Con tan poco, lograste lo que nadie esperaba: te van a hacer un mural.' },
  { min:62, titulo:'Dirigente de respeto', facil:'Cumpliste. En un club así, cumplir es no hacer ruido, y no hiciste ruido.', medio:'Buena temporada con sus sombras. Seguís en pie y con crédito.', dificil:'Sobreviviste y encima con crédito. En tu categoría eso es una gran gestión.' },
  { min:46, titulo:'Mandato gris', facil:'Con este plantel y esta historia, un mandato gris es un fracaso silencioso.', medio:'Ni fu ni fa: la temporada pasa sin pena ni gloria.', dificil:'Gris pero entero. Para un club chico, no hundirse ya es un logro.' },
  { min:30, titulo:'Gestión cuestionada', facil:'Un desastre para un club de esta jerarquía. La prensa ya afila los lápices.', medio:'Errores de más y aciertos de menos. La asamblea se pone brava.', dificil:'Difícil de sostener, pero difícil el contexto también. Hay socios que te defienden.' },
  { min:-1, titulo:'Desastre institucional', facil:'Un desplome histórico. Se habla de tu gestión en los programas de archivo.', medio:'Te llevaste puesto al club. Se arma una comisión de crisis.', dificil:'Lo que se temía. Igual, con esa caja, pocos habrían hecho mucho mejor.' },
];
function veredicto(){
  let sc = calcularScore();
  const ob = objetivo();
  sc += ob.cumplido ? 6 : -4;
  if(state.club.dif === 'dificil') sc += 12; else if(state.club.dif === 'medio') sc += 2; else sc -= 8;
  const vi = VEREDICTOS.findIndex(x => sc >= x.min);
  const idx = vi < 0 ? VEREDICTOS.length - 1 : vi;
  const dif = state.club.dif;
  let extra = '';
  if(state.fin === 'destituido') extra = t('ver.extra.destituido');
  if(state.fin === 'motin') extra = t('ver.extra.motin');
  if(state.fin === 'quiebra') extra = t('ver.extra.quiebra');
  const pos = miPuesto();
  if(!state.fin){
    extra = (extra ? extra + ' ' : '') + (ob.cumplido ? t('ver.extra.objok') : t('ver.extra.objno'));
    extra += ' ' + t('ver.extra.cerraste', { pos: ordinal(pos), n: LIGA_N }) + (zonaLiga(pos) === 'descenso' ? t('ver.extra.desciende') : zonaLiga(pos) === 'campeon' ? t('ver.extra.campeon') : t('ver.extra.punto'));
  }
  let titulo = state.fin ? t('ver.interrumpido') : t('ver.' + idx + '.t');
  let texto = t('ver.' + idx + '.' + dif);
  const esp = finalEspecial(pos);
  if(esp){ titulo = t('fin.' + esp + '.t'); texto = t('fin.' + esp + '.d'); }
  return { titulo, texto, extra, score: Math.round(sc), puesto: pos, especial: esp };
}
function tresTitulares(){
  const top = state.historial.slice().sort((a, b) => b.impacto - a.impacto).slice(0, 3);
  const c = state.club.nombre;
  const limpio = s => String(s).replace(/[.!?]+$/, '');
  return top.map((h, i) => {
    const suma = h.d.gestion + h.d.prensa + h.d.resultado + h.d.caja / 100;
    const bueno = suma >= 0;
    const k = (hashStr(h.titulo) + i) % 3;
    return { texto: t((bueno ? 'tit.b' : 'tit.m') + k, { club: c, evento: limpio(h.titulo), opcion: limpio(h.opcion) }), bueno, cat: h.cat };
  });
}

/* ---------- escudos: ayudas de edición ---------- */
function iniciales(nombre){
  const w = String(nombre || '').split(/\s+/).filter(x => x.length > 2 || /^[A-ZÁÉÍÓÚ]/.test(x));
  const ini = w.map(x => x[0]).join('').slice(0,3).toUpperCase();
  return ini || 'CFM';
}
function normalizarTinturas(c){
  const pal = null;
  if(c.ordinaryId && c.ordinaryId !== 'ninguna'){
    if(!c.ordinaryTincture || esMetal(c.ordinaryTincture) === esMetal(c.fieldTincture)) c.ordinaryTincture = pickTincture(c.fieldTincture, () => 0.5, pal);
  } else c.ordinaryTincture = null;
  const contra = (c.ordinaryId && c.ordinaryId !== 'ninguna') ? c.ordinaryTincture : c.fieldTincture;
  if(CHARGE_NATURAL[c.chargeId]) c.chargeTincture = null;
  else if(!c.chargeTincture || esMetal(c.chargeTincture) === esMetal(contra)) c.chargeTincture = pickTincture(contra, () => 0.5, pal);
  if(c.divisionId === 'ninguna') c.divisionTincture2 = null;
  else if(!c.divisionTincture2) c.divisionTincture2 = ALL_TINCTURES.find(t => t !== c.fieldTincture);
  if(c.ornamento){ if(!c.ornamentoTincture || esMetal(c.ornamentoTincture) === esMetal(contra)) c.ornamentoTincture = pickTincture(contra, () => 0.5, pal); }
  else c.ornamentoTincture = null;
  return c;
}
function aplicarPaletaPais(c, code){
  const p = paisPorCode(code);
  if(!p) return c;
  const pal = p.paletaBandera;
  c.fieldTincture = pal[0];
  if(c.ordinaryId !== 'ninguna') c.ordinaryTincture = pickTincture(c.fieldTincture, () => 0.5, pal);
  c.chargeTincture = null;
  c.divisionTincture2 = c.divisionId !== 'ninguna' ? (pal[1] || null) : null;
  c.ornamentoTincture = null;
  return normalizarTinturas(c);
}
function nuevoCfg(){
  const pais = 'AR';
  const crest = randomCrest(pais, Math.random, { modo:'pais' });
  return { pais, modo:'pais', nombre:'', ciudad:'', dif:'medio', crest, tabCarga:'tipicas', busqueda:'', aviso:false };
}
function crestDelCfg(){
  const c = { ...ui.cfg.crest };
  c.monograma = iniciales(ui.cfg.nombre);
  if(c.cinta === 'nombre') c.nombre = ui.cfg.nombre || null;
  else if(c.cinta === 'lema') c.nombre = null;
  else { c.nombre = null; c.lema = null; }
  return c;
}
function descripcionEscudo(c){
  const ord = c.ordinaryId && c.ordinaryId !== 'ninguna' ? t('a11y.crest.ord', { ord: t('ord.' + c.ordinaryId), color: t('tint.' + c.ordinaryTincture) }) : '';
  const carga = c.chargeId ? t('a11y.crest.carga', { carga: chargeLabel(c.chargeId) }) : '';
  return t('a11y.crest', { forma: t('shape.' + c.shapeId), campo: t('tint.' + c.fieldTincture), ordinaria: ord, carga });
}

/* ---------- logros, historial local, sonido ---------- */
function logros(){
  const s = state.stats, fin = state.fin, L = [];
  const add = (ic, k) => L.push([ic, t('logro.' + k + '.t'), t('logro.' + k + '.d')]);
  const pos = miPuesto();
  if(fin) add('💥', 'caido');
  if(state.fichajes >= 3) add('💸', 'comprador');
  if(!fin && state.fichajes === 0) add('🧊', 'congelado');
  if(state.ventas >= 3) add('🏷', 'vendio');
  if(!fin && s.vestuario >= 80) add('🧑‍🤝‍🧑', 'vestuario');
  if(!fin && s.prensa >= 80) add('📰', 'prensa');
  if(!fin && state.cajaInicial > 0 && s.caja >= state.cajaInicial * 1.25) add('🏦', 'caja');
  if(!fin && s.gestion < 35) add('🧗', 'sobrev');
  if(!fin && Math.min(s.gestion, s.prensa, s.vestuario) >= 55) add('⚖️', 'equilibrista');
  if(!fin && objetivo().cumplido) add('🎯', 'objetivo');
  if(!fin && pos === 1) add('🏆', 'campeon');
  if(!fin && zonaLiga(pos) === 'descenso') add('🕳', 'descenso');
  if(state.copa.estado === 'campeon') add('🥇', 'copa');
  const g = goleadorDelEquipo();
  if(g && g.goles >= 10) add('⚽', 'goleada');
  if(state.encadenados >= 3) add('🎲', 'domino');
  if(state.temporada >= 3 && !fin) add('📆', 'carrera');
  return L;
}
const HIST_KEY = 'vd_hist_v1';
function leerHist(){ try{ return JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); }catch(e){ return []; } }
function guardarHist(){
  if(!state || state.guardado) return;
  state.guardado = true;
  const v = veredicto();
  const h = leerHist();
  h.unshift({ club: state.club.nombre, dif: state.club.dif, titulo: v.titulo, score: v.score, fin: state.fin || null, f: Date.now() });
  try{ localStorage.setItem(HIST_KEY, JSON.stringify(h.slice(0, 30))); }catch(e){}
}
const SFX = { on: (() => { try{ return localStorage.getItem('vd_mute') !== '1'; }catch(e){ return true; } })(), ctx: null };
function toggleSonido(){ SFX.on = !SFX.on; try{ localStorage.setItem('vd_mute', SFX.on ? '0' : '1'); }catch(e){} }
function feedback(bueno){
  try{ if(navigator.vibrate) navigator.vibrate(bueno ? 20 : [30, 40, 30]); }catch(e){}
  if(!SFX.on) return;
  try{
    const AC = window.AudioContext || window.webkitAudioContext; if(!AC) return;
    SFX.ctx = SFX.ctx || new AC();
    (bueno ? [523, 659] : [220, 165]).forEach((f, i) => {
      const o = SFX.ctx.createOscillator(), g = SFX.ctx.createGain(), tt = SFX.ctx.currentTime + i * 0.11;
      o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, tt);
      g.gain.exponentialRampToValueAtTime(0.12, tt + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.18);
      o.connect(g); g.connect(SFX.ctx.destination); o.start(tt); o.stop(tt + 0.2);
    });
  }catch(e){}
}

/* ---------- partida guardada (entre evento y evento) ---------- */
const SAVE_KEY = 'vd_save_v2';
function guardarPartida(){
  if(!state || state.fin) return;
  try{
    const s = Object.assign({}, state, { rng: state.rng.estado(), rngEv: state.rngEv.estado(), ctx: null, resultado: null });
    localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 2, f: Date.now(), state: s }));
  }catch(e){}
}
function hayGuardado(){
  try{ const g = JSON.parse(localStorage.getItem(SAVE_KEY)); return g && g.v === 2 && g.state && g.state.club ? g : null; }catch(e){ return null; }
}
function borrarGuardado(){ try{ localStorage.removeItem(SAVE_KEY); }catch(e){} }
function cargarPartida(){
  const g = hayGuardado();
  if(!g) return false;
  const s = g.state;
  s.rng = mulberry32(s.rng); s.rngEv = mulberry32(s.rngEv);
  state = s; ui.mercado = []; ui.slotAbierto = null; ui.screen = 'evento'; ui.volverA = 'evento';
  reidiomarPartida();
  return true;
}
