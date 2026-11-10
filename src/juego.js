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
    stats: { vestuario: 55, ...clubData.stats },
    cajaInicial: clubData.stats.caja,
    plantel, titulares: formacionAutomatica(plantel),
    capitan: elegirCapitan(plantel),
    eventos: m.eventos, reservas: m.reservas, idx: 0,
    flags: {}, historial: [], ctx: null, resultado: null, fin: null,
    vendidos: [], ventas: 0, fichajes: 0, encadenados: 0, guardado: false,
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
  if(ev.cat === 'economico' && d.caja >= 60 && d.gestion <= 0) v -= 3;          // recorte de gastos
  if(ev.cat === 'economico' && d.caja <= -60 && d.resultado > 0) v += 2;        // inversión en el plantel
  if(vende && j && !ctx.esNuevo){
    const figura = j.rating >= 75 || q === 'idolo' || q === 'lider' || state.capitan === j.nombreCompleto;
    v -= figura ? 10 : 4;
  }
  if(ficha && ctx.esNuevo) v += 2;
  return v;
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
  if(state.club.dif === 'facil'){            // un grande no perdona: lo malo pega 25% más
    if(d.gestion < 0) d.gestion = Math.round(d.gestion * 1.25);
    if(d.prensa < 0) d.prensa = Math.round(d.prensa * 1.25);
  }
  if(d.vestuario == null) d.vestuario = derivarVestuario(d, ev, op, r, ctx);
  if(ev.cat === 'deportivo'){
    if(state.stats.vestuario < 15){ d.resultado -= 4; notas.push('🔥 Vestuario en llamas: −4 al resultado'); }
    else if(state.stats.vestuario < 30){ d.resultado -= 2; notas.push('🧑‍🤝‍🧑 Vestuario roto: −2 al resultado'); }
    else if(state.stats.vestuario >= 75){ d.resultado += 2; notas.push('🧑‍🤝‍🧑 Vestuario unido: +2 al resultado'); }
  }
  const bueno = (d.gestion + d.prensa + d.resultado) > 0;
  if(q === 'cazagoles' && ev.cat === 'deportivo' && d.resultado > 0){ d.resultado = Math.round(d.resultado * 1.15); notas.push('⚡ Cazagoles: +15% al resultado'); }
  if(q === 'muro' && d.resultado < 0){ d.resultado = Math.round(d.resultado / 2); notas.push('🧱 Muro: la pérdida se reduce a la mitad'); }
  if(q === 'carismatico' && bueno){ d.prensa += 5; notas.push('🎤 Carismático: +5 a prensa'); }
  if(q === 'idolo' && ev.cat === 'hinchada' && bueno){ d.gestion += 8; notas.push('👑 Ídolo: +8 a gestión'); }
  if(q === 'revalorizable' && bueno){ j.valor = Math.round(j.valor * 1.2); notas.push('📈 Revalorizable: su valor subió 20%'); }
  if(q === 'lider'){ d.gestion += 2; notas.push('🤝 Líder silencioso: +2 a gestión'); }
  const vende = op.vende || r.vende, ficha = op.ficha || r.ficha;
  let vendioFigura = false;
  if(vende && j && !ctx.esNuevo){
    if(q === 'idolo'){ d.gestion -= 15; notas.push('👑 Vendiste a un Ídolo: −15 a gestión'); }
    state.vendidos.push(j); state.ventas++;
    if(j.rating >= 72 || q === 'idolo' || state.capitan === j.nombreCompleto) vendioFigura = true;
    state.plantel = state.plantel.filter(x => x !== j);
    Object.keys(state.titulares).forEach(s => { if(state.titulares[s] === j.nombreCompleto) state.titulares[s] = null; });
    if(state.capitan === j.nombreCompleto) state.capitan = elegirCapitan(state.plantel);
    if(!formacionCompleta(state.titulares)) state.titulares = formacionAutomatica(state.plantel);
    notas.push('🚪 ' + j.nombreCompleto + ' dejó el club');
  }
  if(ficha && j && ctx.esNuevo && state.plantel.length < 26){
    asignarDorsal(state.plantel, j, state.rng);
    state.plantel.push(j); state.fichajes++;
    state.vendidos = state.vendidos.filter(x => x !== j);
    notas.push('✍️ ' + j.nombreCompleto + ' se suma al plantel (#' + j.dorsal + ')');
  }
  if(state.idx >= 5){   // la presión de la expectativa crece en la segunda mitad
    const rf = state.stats.resultado + d.resultado, dif = state.club.dif;
    if(dif === 'facil' && rf < 0){ d.gestion -= 3; notas.push('📣 La tribuna de un grande no espera: −3 a gestión'); }
    else if(dif === 'medio' && rf < -6){ d.gestion -= 2; notas.push('📣 La tribuna se impacienta: −2 a gestión'); }
  }
  const antes = { ...state.stats };
  state.stats.gestion = clamp(state.stats.gestion + d.gestion, 0, 100);
  state.stats.prensa = clamp(state.stats.prensa + d.prensa, 0, 100);
  state.stats.resultado += d.resultado;
  state.stats.caja += d.caja;
  state.stats.vestuario = clamp(state.stats.vestuario + d.vestuario, 0, 100);
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
  const cand = POOL.filter(e => e.requiere === flag && !usados.has(e.id));
  if(!cand.length) return;
  const ev = cand[Math.floor(state.rngEv() * cand.length)];
  let pos = Math.min(state.idx + 3, state.eventos.length);
  while(pos < state.eventos.length && state.eventos[pos].requiere) pos++;
  if(pos < state.eventos.length) state.eventos[pos] = ev; else state.eventos.push(ev);
}
function siguienteEvento(){
  state.idx++;
  state.ctx = null;
  state.resultado = null;
  if(state.fin || state.idx >= state.eventos.length){ borrarGuardado(); ui.screen = 'diario'; return; }
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
  return { texto: o.texto, cumplido: !!o.ok(state.stats, state.cajaInicial) };
}
function calcularScore(){
  const s = state.stats;
  const resNorm = clamp(50 + s.resultado, 0, 100);
  const cajaNorm = clamp(50 + (s.caja - state.cajaInicial) / Math.max(100, state.cajaInicial) * 50, 0, 100);
  return 0.28 * s.gestion + 0.15 * s.prensa + 0.3 * resNorm + 0.1 * cajaNorm + 0.17 * s.vestuario;
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
  sc += objetivo().cumplido ? 6 : -4;
  if(state.club.dif === 'dificil') sc += 10; else if(state.club.dif === 'facil') sc -= 8;
  const v = VEREDICTOS.find(x => sc >= x.min) || VEREDICTOS[VEREDICTOS.length - 1];
  let extra = '';
  if(state.fin === 'destituido') extra = 'La hinchada perdió la confianza: te destituyeron antes de terminar la temporada.';
  if(state.fin === 'motin') extra = 'El plantel se declaró en rebeldía: sin vestuario no hay club que se sostenga.';
  if(state.fin === 'quiebra') extra = 'El club quebró con vos al mando: caja en rojo y sin salida.';
  const ob = objetivo();
  if(!state.fin) extra = (extra ? extra + ' ' : '') + (ob.cumplido ? 'Objetivo cumplido.' : 'Objetivo incumplido.');
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

/* ---------- logros, historial local, sonido ---------- */
function logros(){
  const s = state.stats, fin = state.fin, L = [];
  if(fin) L.push(['💥', 'Caído en combate', 'Tu mandato no llegó al final de la temporada.']);
  if(state.fichajes >= 3) L.push(['💸', 'Comprador compulsivo', 'Sumaste a 3 o más jugadores.']);
  if(!fin && state.fichajes === 0) L.push(['🧊', 'Mercado congelado', 'Terminaste sin un solo fichaje.']);
  if(state.ventas >= 3) L.push(['🏷', 'El que vendió todo', 'Vendiste a 3 o más jugadores.']);
  if(!fin && s.vestuario >= 80) L.push(['🧑‍🤝‍🧑', 'Vestuario de oro', 'Cerraste con el plantel en la palma de la mano.']);
  if(!fin && s.prensa >= 80) L.push(['📰', 'Prensa en el bolsillo', 'Prensa a 80 o más.']);
  if(!fin && state.cajaInicial > 0 && s.caja >= state.cajaInicial * 1.25) L.push(['🏦', 'Caja de hierro', 'Cerraste con 25% más de caja que al empezar.']);
  if(!fin && s.gestion < 35) L.push(['🧗', 'Sobreviviente', 'Llegaste al final con la gestión por el piso.']);
  if(!fin && Math.min(s.gestion, s.prensa, s.vestuario) >= 55) L.push(['⚖️', 'Equilibrista', 'Gestión, prensa y vestuario por encima de 55.']);
  if(!fin && objetivo().cumplido) L.push(['🎯', 'Objetivo cumplido', 'Lograste la meta de la temporada.']);
  if(state.encadenados >= 3) L.push(['🎲', 'Efecto dominó', 'Tus decisiones volvieron a buscarte 3 veces o más.']);
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
      const o = SFX.ctx.createOscillator(), g = SFX.ctx.createGain(), t = SFX.ctx.currentTime + i * 0.11;
      o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g); g.connect(SFX.ctx.destination); o.start(t); o.stop(t + 0.2);
    });
  }catch(e){}
}

/* ---------- partida guardada (entre evento y evento) ---------- */
const SAVE_KEY = 'vd_save_v1';
function guardarPartida(){
  if(!state || state.fin) return;
  try{
    const s = Object.assign({}, state, { rng: state.rng.estado(), rngEv: state.rngEv.estado(), ctx: null, resultado: null });
    localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 1, f: Date.now(), state: s }));
  }catch(e){}
}
function hayGuardado(){
  try{ const g = JSON.parse(localStorage.getItem(SAVE_KEY)); return g && g.v === 1 && g.state && g.state.club ? g : null; }catch(e){ return null; }
}
function borrarGuardado(){ try{ localStorage.removeItem(SAVE_KEY); }catch(e){} }
function cargarPartida(){
  const g = hayGuardado();
  if(!g) return false;
  const s = g.state;
  s.rng = mulberry32(s.rng); s.rngEv = mulberry32(s.rngEv);
  state = s; ui.mercado = []; ui.slotAbierto = null; ui.screen = 'evento'; ui.volverA = 'evento';
  return true;
}
