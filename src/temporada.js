/* ===================== Temporada: partidos, copa, DT, cantera, estadio, sponsors, invierno, carrera ===================== */

const FECHAS = (LIGA_N - 1) * 2;                 // 22 fechas
const MULT_DIF = { facil: 1.6, medio: 1, dificil: 0.6 };
const COPA_IDX = [3, 6, 9, 11];                  // evento antes del cual se juega cada ronda
const IDX_RENOV = 4, IDX_INVIERNO = 7;

/* ---------- personajes recurrentes ---------- */
function crearPersonajes(rng, paisCode){
  const n = listaNombres(paisCode), a = listaApellidos(paisCode);
  const nombre = () => n[Math.floor(rng() * n.length)] + ' ' + a[Math.floor(rng() * a.length)];
  return { periodista: nombre(), hincha: nombre(), empresario: nombre() };
}

/* ---------- director técnico ---------- */
const DT_ESTILOS = ['ofensivo', 'defensivo', 'formador', 'motivador'];
function generarDT(rng, club){
  const base = club.dif === 'facil' ? 72 : club.dif === 'medio' ? 64 : 56;
  const rating = clamp(Math.round(base + gauss(rng) * 8), 45, 88);
  const n = listaNombres(club.paisCode), a = listaApellidos(club.paisCode);
  return {
    nombre: n[Math.floor(rng() * n.length)] + ' ' + a[Math.floor(rng() * a.length)],
    estilo: DT_ESTILOS[Math.floor(rng() * DT_ESTILOS.length)],
    rating, sueldo: Math.max(2, Math.round((rating - 40) / 6)),
  };
}
function generarDTs(rng, club){
  const out = [];
  for(let i = 0; i < 3; i++){
    let d, g = 0;
    do { d = generarDT(rng, club); } while(out.some(o => o.estilo === d.estilo) && g++ < 20);
    out.push(d);
  }
  return out;
}
function precioCambioDT(){ return Math.round(40 * (MULT_DIF[state.club.dif] || 1)); }

/* ---------- cantera ---------- */
function precioCantera(){ return Math.round([0, 30, 60, 100][Math.min(3, state.cantera + 1)] * (MULT_DIF[state.club.dif] || 1)); }
function generarJuveniles(rng){
  const out = [];
  for(let i = 0; i < state.cantera; i++){
    const j = generarJugador(rng, { paisCode: state.club.paisCode, juvenil: true, ratingBase: 48 + state.cantera * 5, ratingSpread: 8 });
    j.contrato = 3;
    out.push(j);
  }
  return out;
}

/* ---------- estadio y socios ---------- */
const CUOTA_FACTOR = { popular: 0.27, normal: 0.42, premium: 0.63 };
function iniciarEstadio(dif){
  const aforo = dif === 'facil' ? 55 : dif === 'medio' ? 28 : 9;
  return { aforo, socios: +(aforo * 0.7).toFixed(1), cuota: 'normal' };
}
function ingresoPorEvento(){ return Math.round(state.estadio.socios * CUOTA_FACTOR[state.estadio.cuota]); }
function precioObras(){ return Math.round(30 + state.estadio.aforo * 1.6); }

/* ---------- sponsors ---------- */
const MARCAS = ['Banco Horizonte','Cervezas del Sur','Seguros Alianza','Telecom Norte','Supermercados La Esquina','Aerolíneas Cóndor','Cooperativa Agraria','Energía Plus','Constructora Roca','Bebidas Vita','Fintech Nodo','Autos Meridiano'];
function generarSponsors(rng, dif){
  const m = MULT_DIF[dif] || 1;
  const marcas = MARCAS.slice();
  const pick = () => marcas.splice(Math.floor(rng() * marcas.length), 1)[0];
  return [
    { tipo:'seguro', marca:pick(), inicial:Math.round(30 * m), porEvento:Math.round(3 * m) },
    { tipo:'equilibrado', marca:pick(), inicial:Math.round(60 * m), porEvento:Math.round(6 * m), multa:Math.round(40 * m) },
    { tipo:'agresivo', marca:pick(), inicial:Math.round(100 * m), porEvento:Math.round(10 * m), multa:Math.round(120 * m) },
  ];
}
function liquidarSponsor(notas){
  const sp = state.sponsor;
  if(!sp || sp.tipo === 'seguro') return;
  const s = state.stats;
  const cumple = sp.tipo === 'equilibrado' ? s.resultado >= 0 : (s.resultado >= 4 && s.prensa >= 40);
  if(cumple){ notas.push(t('spon.cumplido', { marca: sp.marca })); return; }
  s.caja -= sp.multa;
  if(sp.tipo === 'equilibrado') s.prensa = clamp(s.prensa - 3, 0, 100); else s.gestion = clamp(s.gestion - 6, 0, 100);
  notas.push(t('spon.multa', { marca: sp.marca, n: fmtCaja(sp.multa) }));
}

/* ---------- partidos de liga ---------- */
function puntosAcumulados(){ return state.partidos.reduce((a, p) => a + p.pts, 0); }
function objetivoPuntos(prog){ return Math.max(0, Math.round(PTS_BASE * prog + PTS_POR_RESULTADO * state.stats.resultado)); }
function pesoGoleador(j){
  const base = { DEL: 5, MED: 2.5, DEF: 0.7, ARQ: 0.02 }[j.pos] || 1;
  return base * (0.6 + j.rating / 100) * (j.cualidad === 'cazagoles' ? 2 : 1);
}
function elegirGoleador(rng){
  const tit = titularesComoJugadores(state.plantel, state.titulares);
  const lista = tit.length ? tit : state.plantel;
  const w = lista.map(pesoGoleador), tot = w.reduce((a, b) => a + b, 0);
  let r = rng() * tot;
  for(let i = 0; i < lista.length; i++){ r -= w[i]; if(r <= 0) return lista[i]; }
  return lista[lista.length - 1];
}
function jugarFechasHasta(hasta){
  hasta = Math.min(FECHAS, hasta);
  if(!state.liga.calendario) state.liga = crearLiga(state.seed, state.club.nombre);
  while(state.partidos.length < hasta){
    const i = state.partidos.length;
    const need = objetivoPuntos((i + 1) / FECHAS) - puntosAcumulados();
    const pts = need >= 3 ? 3 : need >= 1 ? 1 : 0;
    const rng = mulberry32((state.seed ^ Math.imul(i + 1, 0x9E3779B1)) >>> 0);
    let gf, ga;
    if(pts === 3){ gf = 1 + Math.floor(rng() * 3); ga = Math.floor(rng() * gf); }
    else if(pts === 1){ gf = ga = Math.floor(rng() * 3); }
    else { ga = 1 + Math.floor(rng() * 3); gf = Math.floor(rng() * ga); }
    const goles = [];
    for(let g = 0; g < gf; g++){
      const j = elegirGoleador(rng);
      goles.push(j.nombreCompleto);
      state.goles[j.nombreCompleto] = (state.goles[j.nombreCompleto] || 0) + 1;
    }
    const ri = state.liga.calendario[i];
    state.partidos.push({ f: i + 1, rival: state.liga.rivales[ri].nombre, clasico: ri === 0, gf, ga, pts, goles });
  }
}
function goleadorDelEquipo(){
  const e = Object.entries(state.goles).sort((a, b) => b[1] - a[1])[0];
  return e ? { nombre: e[0], goles: e[1] } : null;
}

/* ---------- copa ---------- */
function nuevaCopa(){ return { ronda: 0, estado: 'activa', partidos: [] }; }
function copaPendiente(){
  return state.copa.estado === 'activa' && COPA_IDX[state.copa.ronda] === state.idx;
}
function jugarCopa(){
  const c = state.copa, r = c.ronda, rng = state.rng;
  const propia = ratingTitulares(state.plantel, state.titulares) + (state.stats.vestuario - 50) / 10 + (state.dt ? (state.dt.rating - 65) / 12 : 0);
  const rival = 58 + rng() * 18 + r * 4;
  const p = clamp(0.5 + (propia - rival) / 50, 0.1, 0.9);
  const rivales = state.liga.rivales;
  const nombreRival = rivales[Math.floor(rng() * rivales.length)].nombre;
  let gf, ga, pen = null, gano;
  const x = rng();
  if(x < 0.14){                                    // empate y penales
    gf = ga = Math.floor(rng() * 3);
    const a = 3 + Math.floor(rng() * 2); let b = a - 1 + Math.floor(rng() * 3); if(b === a) b = a - 1;
    gano = rng() < p; pen = gano ? [a, Math.min(b, a - 1)] : [Math.min(b, a - 1), a];
  } else {
    gano = rng() < p;
    if(gano){ gf = 1 + Math.floor(rng() * 3); ga = Math.floor(rng() * gf); } else { ga = 1 + Math.floor(rng() * 3); gf = Math.floor(rng() * ga); }
  }
  const premio = gano ? 25 * (r + 1) + (r === 3 ? 150 : 0) : 0;
  const d = gano ? { gestion: r === 3 ? 8 : 2, prensa: r === 3 ? 6 : 0, caja: premio } : { gestion: -2, prensa: 0, caja: 0 };
  state.stats.gestion = clamp(state.stats.gestion + d.gestion, 0, 100);
  state.stats.prensa = clamp(state.stats.prensa + d.prensa, 0, 100);
  state.stats.caja += d.caja;
  const m = { ronda: r, rival: nombreRival, gf, ga, pen, gano, premio };
  c.partidos.push(m);
  if(gano){ c.ronda++; if(c.ronda >= 4) c.estado = 'campeon'; } else c.estado = 'eliminado';
  state.copaUltima = m;
  return m;
}

/* ---------- invierno y renovaciones ---------- */
function generarOfertasInvierno(rng){
  const cand = state.plantel.filter(j => j.nombreCompleto !== state.capitan).sort((a, b) => b.valor - a.valor).slice(0, 6);
  const ofertas = [];
  while(ofertas.length < 3 && cand.length){
    const j = cand.splice(Math.floor(rng() * cand.length), 1)[0];
    ofertas.push({ jugador: j.nombreCompleto, club: state.liga.rivales[Math.floor(rng() * state.liga.rivales.length)].nombre, precio: Math.round(j.valor * (0.9 + rng() * 0.5)) });
  }
  return ofertas;
}
function vestuarioPorSalida(j){
  const figura = j.rating >= 75 || j.cualidad === 'idolo' || j.cualidad === 'lider' || state.capitan === j.nombreCompleto;
  return figura ? -10 : -4;
}
function quitarDelPlantel(j){
  state.plantel = state.plantel.filter(x => x !== j);
  Object.keys(state.titulares).forEach(s => { if(state.titulares[s] === j.nombreCompleto) state.titulares[s] = null; });
  if(state.capitan === j.nombreCompleto) state.capitan = elegirCapitan(state.plantel);
  if(!formacionCompleta(state.titulares)) state.titulares = formacionAutomatica(state.plantel);
}
function venderJugador(j, precio){
  const d = vestuarioPorSalida(j);
  state.vendidos.push(j); state.ventas++;
  state.stats.caja += precio;
  state.stats.vestuario = clamp(state.stats.vestuario + d, 0, 100);
  if(j.cualidad === 'idolo') state.stats.gestion = clamp(state.stats.gestion - 15, 0, 100);
  quitarDelPlantel(j);
}
function vencenContrato(){
  return state.plantel.filter(j => j.contrato <= 0).sort((a, b) => b.rating - a.rating).slice(0, 4);
}
function precioRenovacion(j){ return Math.max(6, Math.round(j.valor * 0.2)); }

function proximoHook(){
  if(!state.hooks) state.hooks = {};
  if(state.idx === IDX_RENOV && !state.hooks.renov){ state.hooks.renov = true; if(vencenContrato().length) return 'renov'; }
  if(copaPendiente() && !state.hooks['copa' + state.copa.ronda]){ state.hooks['copa' + state.copa.ronda] = true; return 'copa'; }
  if(state.idx === IDX_INVIERNO && !state.hooks.invierno){ state.hooks.invierno = true; state.invierno = { ofertas: generarOfertasInvierno(state.rng), juveniles: generarJuveniles(state.rng), dts: null, vendidos: [] }; return 'invierno'; }
  return null;
}

/* ---------- cierre de temporada y carrera ---------- */
function cerrarTemporada(){
  if(state.cerrada) return state.notasCierre || [];
  const notas = [];
  jugarFechasHasta(FECHAS);
  liquidarSponsor(notas);
  state.cerrada = true;
  state.notasCierre = notas;
  return notas;
}
function evolucionarJugador(j, rng){
  const e = j.edad;
  let dr;
  if(e <= 21) dr = 2 + Math.floor(rng() * 4);
  else if(e <= 24) dr = Math.floor(rng() * 4);
  else if(e <= 29) dr = Math.round(gauss(rng) * 1.2);
  else if(e <= 32) dr = -Math.floor(rng() * 3);
  else dr = -(1 + Math.floor(rng() * 4));
  j.rating = clamp(j.rating + dr, 35, 95);
  j.valor = valorDeMercado(j.rating, j.edad);
}
const BASE_STATS = { facil: [67, 74], medio: [52, 51], dificil: [30, 29] };
function premioTemporada(pos){
  const m = MULT_DIF[state.club.dif] || 1;
  return Math.round(({ 1: 150, 2: 80, 3: 50 }[pos] || (pos >= LIGA_N - 1 ? -20 : 0)) * m);
}
function proximaTemporada(){
  const s = state, v = veredicto(), pos = v.puesto;
  s.carrera.temporadas.push({ n: s.temporada, puesto: pos, titulo: v.titulo, score: v.score, copa: s.copa.estado });
  if(pos === 1) s.carrera.titulos++;
  if(s.copa.estado === 'campeon') s.carrera.copas++;
  const premio = premioTemporada(pos);
  s.stats.caja += premio;
  s.temporada++;
  s.seed = (Math.imul(s.seed, 1664525) + 1013904223 + s.temporada * 7919) >>> 0;
  s.rng = mulberry32(s.seed); s.rngEv = mulberry32((s.seed ^ 0x9E3779B9) >>> 0);
  const bajas = [];
  s.plantel.forEach(j => { j.edad++; j.contrato--; j.goles = 0; evolucionarJugador(j, s.rng); });
  s.plantel = s.plantel.filter(j => { if(j.contrato < 0){ bajas.push(j.nombreCompleto); return false; } return true; });
  let g = 0;
  while(s.plantel.length < 18 && g++ < 12){
    const pos2 = ['ARQ','DEF','DEF','MED','MED','DEL'][g % 6];
    const j = generarJugador(s.rng, { paisCode: s.club.paisCode, pos: pos2, ratingBase: 50, ratingSpread: 10, juvenil: true });
    j.contrato = 2; asignarDorsal(s.plantel, j, s.rng); s.plantel.push(j);
  }
  s.capitan = elegirCapitan(s.plantel);
  s.titulares = formacionAutomatica(s.plantel);
  const [bg, bp] = BASE_STATS[s.club.dif];
  s.stats = { gestion: Math.round(s.stats.gestion * 0.7 + bg * 0.3), prensa: Math.round(s.stats.prensa * 0.7 + bp * 0.3), resultado: 0, caja: s.stats.caja, vestuario: Math.round(s.stats.vestuario * 0.5 + 27) };
  s.cajaInicial = Math.max(s.stats.caja, 1);
  const m = muestrearEventos(s.club.dif, s.rngEv);
  s.eventos = m.eventos; s.reservas = m.reservas; s.idx = 0;
  s.flags = { clasico: true }; s.historial = []; s.ctx = null; s.resultado = null; s.fin = null;
  s.vendidos = []; s.ventas = 0; s.fichajes = 0; s.encadenados = 0; s.guardado = false; s.cerrada = false; s.notasCierre = [];
  s.liga = crearLiga(s.seed, s.club.nombre); s.partidos = []; s.goles = {};
  s.copa = nuevaCopa(); s.hooks = {}; s.sponsor = null; s.invierno = null; s.sponsorsOfrecidos = null;
  s.personajes = crearPersonajes(s.rng, s.club.paisCode);
  insertarClasicos();
  s.estadio.socios = +clamp(s.estadio.socios + (pos <= 3 ? 2 : pos >= LIGA_N - 1 ? -3 : 0), s.estadio.aforo * 0.3, s.estadio.aforo).toFixed(1);
  s.bajasCarrera = bajas; s.premioCarrera = premio;
  ui.mercado = []; ui.slotAbierto = null; ui.sponsors = null; ui.dts = null;
  ui.screen = 'formacion'; ui.volverA = 'presupuesto';
  guardarPartida();
}

/* ---------- finales especiales ---------- */
function finalEspecial(pos){
  const s = state, st = s.stats;
  if(s.fin === 'destituido' && st.resultado >= 5) return 'heroica';
  if(s.fin === 'quiebra') return 'refundacion';
  if(s.fin) return null;
  if(pos === 1 && s.copa.estado === 'campeon') return 'doblete';
  if(pos === 1 && st.prensa < 35) return 'campeonPolemico';
  if(pos === 1 && objetivo().cumplido && st.vestuario >= 70 && st.gestion >= 70) return 'dinastia';
  if(s.club.dif === 'dificil' && pos <= LIGA_N - 2 && st.caja >= 0 && s.cajaInicial < 100) return 'milagro';
  if(s.cajaInicial >= 50 && st.caja >= s.cajaInicial * 1.6) return 'caja';
  return null;
}
