/* ===================== Motor del juego ===================== */

const NUM_EVENTOS = 13;
let POOL = [];
let state = null;
const ui = { screen:'inicio', tab:'facil', volverA:'evento', cfg:null, seed:null, slotAbierto:null, mercado:[], msg:null };

function bandera(code){
  if(!code || code.length !== 2) return '🏳';
  return String.fromCodePoint(...code.toUpperCase().split('').map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmtCaja(n){ return '$' + Math.round(n).toLocaleString('es-AR') + 'k'; }
function signo(n){ return (n > 0 ? '+' : '') + Math.round(n); }

function inicializarPool(){
  if(typeof expandirPlantillas === 'function' && typeof PLANTILLAS_EVENTOS !== 'undefined') POOL = expandirPlantillas(PLANTILLAS_EVENTOS);
  return POOL.length;
}

/* ---------- sustitución de tokens ---------- */
function sustituirTexto(t, ctx){
  if(!t) return '';
  const j = ctx && ctx.jugador;
  const club = state ? state.club : null;
  return String(t)
    .replace(/\{JUGADOR\}/g, j ? j.nombreCompleto : 'un jugador')
    .replace(/\{JPOS\}/g, j ? POS_LABEL[j.pos].toLowerCase() : 'jugador')
    .replace(/\{JEDAD\}/g, j ? j.edad : '')
    .replace(/\{JRATING\}/g, j ? j.rating : '')
    .replace(/\{CUALIDAD\}/g, j && j.cualidad ? CUALIDADES[j.cualidad].label.toLowerCase() : 'jugador de peso')
    .replace(/\{CLUB\}/g, club ? club.nombre : 'el club')
    .replace(/\{CIUDAD\}/g, club && club.ciudad ? club.ciudad : 'la ciudad');
}

/* ---------- muestreo de eventos ---------- */
function baseId(e){ return String(e.id).split('#')[0]; }
function muestrearEventos(dif, rngEv){
  const pesos = DIFICULTAD_INFO[dif].pesos;
  const candidatos = POOL.filter(e => !e.requiere);
  const elegidos = [], usadosPlantilla = new Set(), usadosId = new Set();
  const total = NUM_EVENTOS + 6; // + reservas
  let guard = 0;
  while(elegidos.length < total && guard++ < 5000){
    const libres = candidatos.filter(e => !usadosId.has(e.id) && !usadosPlantilla.has(baseId(e)));
    if(!libres.length) break;
    const w = libres.map(e => (pesos[e.cat] || 1) * ((e.jugador && e.jugador.indexOf('cualidad:') === 0) ? 0.5 : 1));
    const tot = w.reduce((a,b) => a+b, 0);
    let r = rngEv() * tot, k = 0;
    for(; k < libres.length - 1; k++){ r -= w[k]; if(r <= 0) break; }
    const e = libres[k];
    elegidos.push(e); usadosId.add(e.id); usadosPlantilla.add(baseId(e));
  }
  return { eventos: elegidos.slice(0, NUM_EVENTOS), reservas: elegidos.slice(NUM_EVENTOS) };
}

/* ---------- partida ---------- */
function iniciarPartida(clubData, seed){
  const rng = mulberry32(seed >>> 0);
  const rngEv = mulberry32((seed ^ 0x9E3779B9) >>> 0);
  const plantel = generarPlantel(rng, clubData);
  const m = muestrearEventos(clubData.dif, rngEv);
  state = {
    seed, rng, rngEv,
    club: { nombre:clubData.nombre, ciudad:clubData.ciudad || '', paisCode:clubData.paisCode, dif:clubData.dif, crest:clubData.crest },
    stats: { ...clubData.stats },
    cajaInicial: clubData.stats.caja,
    plantel, titulares: formacionAutomatica(plantel),
    capitan: elegirCapitan(plantel),
    eventos: m.eventos, reservas: m.reservas, idx: 0,
    flags: {}, historial: [], ctx: null, resultado: null, fin: null,
  };
  state.club.crest = { ...clubData.crest, nombre: clubData.crest.nombre || null };
  ui.mercado = [];
  ui.slotAbierto = null;
  ui.screen = 'formacion';
  ui.volverA = 'presupuesto';
}

function probConPlantel(base){
  const avg = ratingTitulares(state.plantel, state.titulares);
  let p = base + (avg - 65) / 150;
  const tit = titularesComoJugadores(state.plantel, state.titulares);
  if(tit.some(j => j.cualidad === 'muro' || j.cualidad === 'inquebrantable')) p += 0.05;
  return clamp(p, 0.08, 0.92);
}

function eventoValido(ev){
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
  else if(k === 'fichaje') jugador = generarJugador(rng, { paisCode:state.club.paisCode, ratingBase:72, ratingSpread:14 });
  else if(k === 'exJugador') jugador = generarJugador(rng, { paisCode:state.club.paisCode, ratingBase:55, ratingSpread:25, retirado:true });
  else if(k) jugador = elegirJugador(rng, state.plantel, k, state.titulares, ev.cat === 'deportivo');
  return { jugador, esNuevo: k === 'fichaje' || k === 'exJugador' };
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

/* ---------- aplicar efecto (único punto donde pesan las cualidades) ---------- */
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
  const bueno = (d.gestion + d.prensa + d.resultado) > 0;
  if(q === 'cazagoles' && ev.cat === 'deportivo' && d.resultado > 0){ d.resultado = Math.round(d.resultado * 1.15); notas.push('⚡ Cazagoles: +15% al resultado'); }
  if(q === 'muro' && d.resultado < 0){ d.resultado = Math.round(d.resultado / 2); notas.push('🧱 Muro: la pérdida se reduce a la mitad'); }
  if(q === 'carismatico' && bueno){ d.prensa += 5; notas.push('🎤 Carismático: +5 a prensa'); }
  if(q === 'idolo' && ev.cat === 'hinchada' && bueno){ d.gestion += 8; notas.push('👑 Ídolo: +8 a gestión'); }
  if(q === 'revalorizable' && bueno){ j.valor = Math.round(j.valor * 1.2); notas.push('📈 Revalorizable: su valor subió 20%'); }
  if(q === 'lider'){ d.gestion += 2; notas.push('🤝 Líder silencioso: +2 a gestión'); }
  const vende = op.vende || r.vende, ficha = op.ficha || r.ficha;
  if(vende && j && !ctx.esNuevo){
    if(q === 'idolo'){ d.gestion -= 15; notas.push('👑 Vendiste a un Ídolo: −15 a gestión'); }
    state.plantel = state.plantel.filter(x => x !== j);
    Object.keys(state.titulares).forEach(s => { if(state.titulares[s] === j.nombreCompleto) state.titulares[s] = null; });
    if(state.capitan === j.nombreCompleto) state.capitan = elegirCapitan(state.plantel);
    if(!formacionCompleta(state.titulares)) state.titulares = formacionAutomatica(state.plantel);
    notas.push('🚪 ' + j.nombreCompleto + ' dejó el club');
  }
  if(ficha && j && ctx.esNuevo && state.plantel.length < 26){
    asignarDorsal(state.plantel, j, state.rng);
    state.plantel.push(j);
    notas.push('✍️ ' + j.nombreCompleto + ' se suma al plantel (#' + j.dorsal + ')');
  }
  const antes = { ...state.stats };
  state.stats.gestion = clamp(state.stats.gestion + d.gestion, 0, 100);
  state.stats.prensa = clamp(state.stats.prensa + d.prensa, 0, 100);
  state.stats.resultado += d.resultado;
  state.stats.caja += d.caja;
  const setea = op.setea || r.setea;
  if(setea) state.flags[setea] = true;
  return { d, setea, msg: sustituirTexto(r.msg || '', ctx), notas, antes };
}

function elegirOpcion(i){
  const ev = eventoActual();
  const ctx = state.ctx;
  const op = ev.opciones[i];
  const res = aplicarOpcion(op, ev, ctx);
  const impacto = Math.abs(res.d.gestion) + Math.abs(res.d.prensa) + Math.abs(res.d.resultado) + Math.abs(res.d.caja) / 20;
  state.historial.push({ cat: ev.cat, titulo: sustituirTexto(ev.titulo, ctx), opcion: sustituirTexto(op.texto, ctx), d: res.d, impacto, msg: res.msg });
  state.resultado = res;
  if(res.setea) insertarEncadenado(res.setea);
  if(state.stats.gestion <= 0) state.fin = 'destituido';
  else if(state.stats.caja <= -250) state.fin = 'quiebra';
  ui.screen = 'resultado';
}
function insertarEncadenado(flag){
  const usados = new Set(state.eventos.map(e => e.id));
  const cand = POOL.filter(e => e.requiere === flag && !usados.has(e.id));
  if(!cand.length) return;
  const ev = cand[Math.floor(state.rngEv() * cand.length)];
  const pos = Math.min(state.idx + 3, state.eventos.length);
  if(pos < state.eventos.length) state.eventos[pos] = ev; else state.eventos.push(ev);
}
function siguienteEvento(){
  state.idx++;
  state.ctx = null;
  state.resultado = null;
  if(state.fin || state.idx >= state.eventos.length){ ui.screen = 'diario'; return; }
  ui.screen = 'evento';
}

/* ---------- veredicto / titulares ---------- */
function calcularScore(){
  const s = state.stats;
  const resNorm = clamp(50 + s.resultado, 0, 100);
  const cajaNorm = clamp(50 + (s.caja - state.cajaInicial) / Math.max(60, state.cajaInicial * 0.6) * 50, 0, 100);
  return 0.3 * s.gestion + 0.2 * s.prensa + 0.3 * resNorm + 0.2 * cajaNorm;
}
const VEREDICTOS = [
  { min:78, titulo:'Leyenda de la dirigencia', facil:'Gestión impecable, pero con este club era lo mínimo que se esperaba: no te alcanza para la estatua.', medio:'Una temporada redonda. Los socios piden que no te vayas nunca.', dificil:'Una hazaña. Con tan poco, lograste lo que nadie esperaba: te van a hacer un mural.' },
  { min:62, titulo:'Dirigente de respeto', facil:'Cumpliste. En un club así, cumplir es no hacer ruido, y no hiciste ruido.', medio:'Buena temporada con sus sombras. Seguís en pie y con crédito.', dificil:'Sobreviviste y encima con crédito. En tu categoría eso es una gran gestión.' },
  { min:46, titulo:'Mandato gris', facil:'Con este plantel y esta historia, un mandato gris es un fracaso silencioso.', medio:'Ni fu ni fa: la temporada pasa sin pena ni gloria.', dificil:'Gris pero entero. Para un club chico, no hundirse ya es un logro.' },
  { min:30, titulo:'Gestión cuestionada', facil:'Un desastre para un club de esta jerarquía. La prensa ya afila los lápices.', medio:'Errores de más y aciertos de menos. La asamblea se pone brava.', dificil:'Difícil de sostener, pero difícil el contexto también. Hay socios que te defienden.' },
  { min:-1, titulo:'Desastre institucional', facil:'Un desplome histórico. Se habla de tu gestión en los programas de archivo.', medio:'Te llevaste puesto al club. Se arma una comisión de crisis.', dificil:'Lo que se temía. Igual, con esa caja, pocos habrían hecho mucho mejor.' },
];
function veredicto(){
  let sc = calcularScore();
  if(state.club.dif === 'dificil') sc += 10; else if(state.club.dif === 'facil') sc -= 8;
  const v = VEREDICTOS.find(x => sc >= x.min) || VEREDICTOS[VEREDICTOS.length - 1];
  let extra = '';
  if(state.fin === 'destituido') extra = 'La hinchada perdió la confianza: te destituyeron antes de terminar la temporada.';
  if(state.fin === 'quiebra') extra = 'El club quebró con vos al mando: caja en rojo y sin salida.';
  return { titulo: state.fin ? 'Mandato interrumpido' : v.titulo, texto: v[state.club.dif], extra, score: Math.round(sc) };
}
function tresTitulares(){
  const top = state.historial.slice().sort((a,b) => b.impacto - a.impacto).slice(0, 3);
  const c = state.club.nombre;
  const buenos = [
    (t, o) => `${c}: ante «${t}», el dirigente eligió «${o}» y casi todos quedaron conformes`,
    (t, o) => `Aplausos en ${c}: «${o}» como respuesta a «${t}» sorprende para bien`,
    (t, o) => `Golpe de timón en ${c}: «${t}» se resuelve con «${o}» y cambia el clima`,
  ];
  const malos = [
    (t, o) => `Escándalo en ${c}: elegir «${o}» frente a «${t}» abre una grieta`,
    (t, o) => `Críticas feroces en ${c}: «${o}» no convence a nadie tras «${t}»`,
    (t, o) => `Mala hora para ${c}: la salida «${o}» en «${t}» sale cara`,
  ];
  const limpio = s => String(s).replace(/[.!?]+$/, '');
  return top.map((h, i) => {
    const suma = h.d.gestion + h.d.prensa + h.d.resultado + h.d.caja / 100;
    const lista = suma >= 0 ? buenos : malos;
    return { texto: lista[(hashStr(h.titulo) + i) % lista.length](limpio(h.titulo), limpio(h.opcion)), bueno: suma >= 0, cat: h.cat };
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
