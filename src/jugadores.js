/* ===================== Jugadores, cualidades, plantel, formación, mercado ===================== */

const POS_LABEL = { ARQ:'Arquero', DEF:'Defensor', MED:'Mediocampista', DEL:'Delantero' };
const NOMBRES_FALLBACK = ['Mateo','Lucas','Santiago','Joaquín','Thiago','Bruno','Facundo','Nicolás','Tomás','Ramiro','Gonzalo','Emiliano','Agustín','Franco','Leandro','Iván','Matías','Sebastián','Maximiliano','Federico','Daniel','Diego','Pablo','Martín','Andrés'];
const RASGOS = ['Líder nato','Polémico','Ídolo del barrio','Trabajador incansable','Talento puro','Frágil físicamente','Bromista del vestuario','Silencioso','Ambicioso','Leal al club'];

const CUALIDADES = {
  cazagoles:   { label:'Cazagoles', icon:'⚡', mod:0.25,  desc:'+15% al resultado positivo en eventos deportivos' },
  muro:        { label:'Muro', icon:'🧱', mod:0.15,  desc:'Si el evento sale mal, la pérdida de resultado se reduce a la mitad' },
  carismatico: { label:'Carismático', icon:'🎤', mod:0.10, desc:'+5 a prensa en eventos con resultado bueno' },
  idolo:       { label:'Ídolo', icon:'👑', mod:0.30,  desc:'+8 a gestión en eventos de hinchada buenos; −15 si lo vendés' },
  inquebrantable:{ label:'Inquebrantable', icon:'🛡', mod:0.20, desc:'Reduce a la mitad la probabilidad de la rama mala' },
  revalorizable:{ label:'Revalorizable', icon:'📈', mod:0.05, desc:'Su valor sube 20% cada vez que aparece en un evento bueno' },
  lider:       { label:'Líder silencioso', icon:'🤝', mod:0.10, desc:'+2 a gestión cada vez que aparece en un evento' },
  fragil:      { label:'Frágil', icon:'🩹', mod:-0.20, desc:'Duplica la probabilidad de la rama mala en eventos deportivos' },
  polemico:    { label:'Polémico de mercado', icon:'🔥', mod:-0.15, desc:'Doble chance de ser elegido en eventos de conflicto' },
};
const CUALIDAD_IDS = Object.keys(CUALIDADES);

function clamp(x, a, b){ return Math.max(a, Math.min(b, x)); }
function gauss(rng){ return (rng()+rng()+rng()+rng()-2) / 0.58; }

function clusterDePais(code){
  const p = (typeof PAISES !== 'undefined') ? PAISES.find(x => x.code === code) : null;
  return p ? p.cluster : null;
}
function listaNombres(code){
  const cl = clusterDePais(code);
  const l = (typeof NOMBRES_POR_CLUSTER !== 'undefined' && cl && NOMBRES_POR_CLUSTER[cl]) || null;
  return l && l.length ? l : NOMBRES_FALLBACK;
}
function listaApellidos(code){
  const l = (typeof APELLIDOS_POR_PAIS !== 'undefined' && APELLIDOS_POR_PAIS[code]) || null;
  if(l && l.length) return l;
  return (typeof APELLIDOS_GENERICOS !== 'undefined' && APELLIDOS_GENERICOS.length)
    ? APELLIDOS_GENERICOS
    : ['Silva','Rossi','Martin','Novak','Costa','Ferrer','Moreno','Duarte','Vega','Ortiz','Ramos','Salas'];
}
function combinacionesDePais(code){ return listaNombres(code).length * listaApellidos(code).length; }

function valorDeMercado(rating, edad){
  const f = edad < 24 ? 1.4 : edad > 31 ? 0.6 : 1;
  return Math.max(8, Math.round(((rating - 45) ** 2) / 8 * f));
}

function generarJugador(rng, opts){
  opts = opts || {};
  const pos = opts.pos || weightedPickFrom(['ARQ','DEF','MED','DEL'], { ARQ:0.6, DEF:1.4, MED:1.4, DEL:1.2 }, rng);
  const nombres = listaNombres(opts.paisCode), apellidos = listaApellidos(opts.paisCode);
  const nombre = nombres[Math.floor(rng()*nombres.length)];
  const apellido = apellidos[Math.floor(rng()*apellidos.length)];
  let edad;
  if(opts.retirado) edad = 30 + Math.floor(rng()*9);
  else if(opts.juvenil) edad = 17 + Math.floor(rng()*4);
  else edad = 19 + Math.floor(rng()*17);
  const base = opts.ratingBase !== undefined ? opts.ratingBase : 62;
  const spread = opts.ratingSpread !== undefined ? opts.ratingSpread : 12;
  let rating = Math.round(clamp(base + gauss(rng) * spread * 0.55 + (opts.juvenil ? -6 : 0), 38, 94));
  const rasgo = RASGOS[Math.floor(rng()*RASGOS.length)];
  return {
    nombre, apellido, nombreCompleto: nombre + ' ' + apellido,
    pos, edad, rating, rasgo, cualidad: opts.cualidad || null,
    valor: valorDeMercado(rating, edad), dorsal: null, paisCode: opts.paisCode || null,
    contrato: (() => { const c = rng(); return c < 0.2 ? 0 : c < 0.5 ? 1 : c < 0.8 ? 2 : 3; })(), goles: 0,
  };
}

function asignarDorsal(plantel, jugador, rng){
  const usados = new Set(plantel.map(j => j.dorsal));
  let d = jugador.pos === 'ARQ' ? 1 : 2 + Math.floor(rng()*30);
  let guard = 0;
  while(usados.has(d) && guard++ < 200) d = 1 + Math.floor(rng()*98);
  if(usados.has(d)){ for(d = 1; usados.has(d); d++); }
  jugador.dorsal = d;
  return jugador;
}

function generarPlantel(rng, club){
  const nivel = club.dif === 'facil' ? 72 : club.dif === 'medio' ? 64 : 56;
  const distrib = ['ARQ','ARQ','DEF','DEF','DEF','DEF','DEF','DEF','MED','MED','MED','MED','MED','MED','DEL','DEL','DEL','DEL','DEL','DEL'];
  const plantel = [];
  const usados = new Set();
  distrib.forEach(pos => {
    let j, guard = 0;
    do { j = generarJugador(rng, { pos, paisCode: club.paisCode, ratingBase: nivel, ratingSpread: 16 }); }
    while(usados.has(j.nombreCompleto) && guard++ < 30);
    usados.add(j.nombreCompleto);
    asignarDorsal(plantel, j, rng);
    plantel.push(j);
  });
  return plantel;
}

function elegirCapitan(plantel){
  const c = plantel.filter(j => j.pos !== 'ARQ' && j.edad >= 25);
  const lista = c.length ? c : plantel;
  return lista.slice().sort((a,b) => b.rating - a.rating)[0].nombreCompleto;
}

/* ---- formación 4-3-3 ---- */
const SLOTS = [
  { id:'ARQ',  pos:'ARQ', x:50, y:90 },
  { id:'DEF1', pos:'DEF', x:14, y:70 }, { id:'DEF2', pos:'DEF', x:38, y:74 },
  { id:'DEF3', pos:'DEF', x:62, y:74 }, { id:'DEF4', pos:'DEF', x:86, y:70 },
  { id:'MED1', pos:'MED', x:25, y:48 }, { id:'MED2', pos:'MED', x:50, y:52 }, { id:'MED3', pos:'MED', x:75, y:48 },
  { id:'DEL1', pos:'DEL', x:18, y:20 }, { id:'DEL2', pos:'DEL', x:50, y:14 }, { id:'DEL3', pos:'DEL', x:82, y:20 },
];
function titularesVacios(){ const t = {}; SLOTS.forEach(s => t[s.id] = null); return t; }
function formacionAutomatica(plantel){
  const t = titularesVacios();
  ['ARQ','DEF','MED','DEL'].forEach(pos => {
    const slots = SLOTS.filter(s => s.pos === pos);
    const cand = plantel.filter(j => j.pos === pos).sort((a,b) => b.rating - a.rating);
    slots.forEach((s, i) => { t[s.id] = cand[i] ? cand[i].nombreCompleto : null; });
  });
  // si falta alguien en una posición, completar con los mejores libres
  const usados = new Set(Object.values(t).filter(Boolean));
  SLOTS.forEach(s => {
    if(!t[s.id]){
      const libre = plantel.filter(j => !usados.has(j.nombreCompleto) && j.pos !== 'ARQ').sort((a,b) => b.rating - a.rating)[0];
      if(libre){ t[s.id] = libre.nombreCompleto; usados.add(libre.nombreCompleto); }
    }
  });
  return t;
}
function formacionCompleta(t){ return SLOTS.every(s => !!t[s.id]); }
function jugadorPorNombre(plantel, nc){ return plantel.find(j => j.nombreCompleto === nc) || null; }
function titularesComoJugadores(plantel, t){
  return SLOTS.map(s => jugadorPorNombre(plantel, t[s.id])).filter(Boolean);
}
function ratingTitulares(plantel, t){
  const tit = titularesComoJugadores(plantel, t);
  const lista = tit.length ? tit : plantel.slice().sort((a,b) => b.rating - a.rating).slice(0, 11);
  return lista.reduce((a,j) => a + j.rating, 0) / lista.length;
}

/* ---- elegirJugador: criterios joven / figura / conflictivo / cualidad:* ---- */
function elegirJugador(rng, plantel, criterio, titulares, soloDeportivo){
  let lista = plantel;
  const tit = titulares ? new Set(Object.values(titulares).filter(Boolean)) : null;
  if(criterio === 'joven'){
    lista = plantel.filter(j => j.edad <= 22);
    if(!lista.length) lista = plantel.slice().sort((a,b) => a.edad - b.edad).slice(0, 4);
  } else if(criterio === 'figura'){
    let ord = plantel.slice().sort((a,b) => b.valor - a.valor);
    if(tit && tit.size && rng() < 0.75){
      const t = ord.filter(j => tit.has(j.nombreCompleto));
      if(t.length) ord = t;
    }
    return ord[0];
  } else if(criterio === 'conflictivo'){
    const pesos = plantel.map(j => (j.rasgo === 'Polémico' ? 3 : 1) * (j.cualidad === 'polemico' ? 2 : 1));
    const total = pesos.reduce((a,b) => a+b, 0);
    let r = rng() * total;
    for(let i = 0; i < plantel.length; i++){ r -= pesos[i]; if(r <= 0) return plantel[i]; }
    return plantel[plantel.length - 1];
  } else if(criterio && criterio.indexOf('cualidad:') === 0){
    const q = criterio.split(':')[1];
    lista = plantel.filter(j => q === '*' ? !!j.cualidad : j.cualidad === q);
    if(!lista.length) lista = plantel;
  }
  if(soloDeportivo && tit && tit.size && rng() < 0.75){
    const t = lista.filter(j => tit.has(j.nombreCompleto));
    if(t.length) lista = t;
  }
  return lista[Math.floor(rng() * lista.length)];
}

/* ---- mercado ---- */
function precioJugador(j){
  const mod = j.cualidad ? CUALIDADES[j.cualidad].mod : 0;
  return Math.max(5, Math.round(j.valor * (1 + mod)));
}
function generarCandidatosMercado(rng, club, n){
  const out = [];
  for(let i = 0; i < (n || 6); i++){
    const nivel = club.dif === 'facil' ? 70 : club.dif === 'medio' ? 66 : 62;
    const cualidad = rng() < 0.45 ? CUALIDAD_IDS[Math.floor(rng() * CUALIDAD_IDS.length)] : null;
    const j = generarJugador(rng, { paisCode: club.paisCode, ratingBase: nivel, ratingSpread: 22, cualidad });
    j.contrato = 2 + Math.floor(rng() * 2);
    out.push(j);
  }
  return out;
}
