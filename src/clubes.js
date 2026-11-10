/* ===================== RNG + roster de 45 clubes ===================== */

function hashStr(s){
  let h = 2166136261;
  for(let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(a){
  const f = function(){
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  f.estado = () => a | 0;   // permite guardar y retomar la secuencia exacta
  return f;
}

const DIFICULTAD_INFO = {
  facil:  { label:'Fácil',  desc:'Club histórico: expectativa altísima, la prensa no perdona un mal resultado.',
            pesos:{ mediatico:1.6, hinchada:1.5, deportivo:1, institucional:1, economico:0.6 } },
  medio:  { label:'Medio',  desc:'Club de notoriedad media: todo parejo, sin extremos.',
            pesos:{ mediatico:1, hinchada:1, deportivo:1, institucional:1, economico:1 } },
  dificil:{ label:'Difícil',desc:'Club chico: poca presión mediática, pero la caja y el descenso acechan.',
            pesos:{ economico:1.8, deportivo:1.2, institucional:1, hinchada:0.8, mediatico:0.5 } },
};

function statsIniciales(dif, rng){
  const r = (a,b) => Math.round(a + rng()*(b-a));
  if(dif === 'facil') return { gestion:r(65,70), prensa:r(70,78), resultado:0, caja:r(700,850) };
  if(dif === 'medio') return { gestion:r(50,54), prensa:r(46,56), resultado:0, caja:r(300,340) };
  return { gestion:r(29,32), prensa:r(24,34), resultado:0, caja:r(55,70) };
}

/* real: [color primario real, secundario real] — solo para que el escudo generado evite esos campos */
const CLUBES_BASE = [
  // Argentina — Fácil
  ['River Plate','AR','facil',['plata','rojo']],
  ['Boca Juniors','AR','facil',['azul','oro']],
  ['Racing Club','AR','facil',['celeste','plata']],
  ['Independiente','AR','facil',['rojo','plata']],
  ['San Lorenzo','AR','facil',['azul','rojo']],
  // Argentina — Medio
  ['Estudiantes de La Plata','AR','medio',['plata','rojo']],
  ['Vélez Sarsfield','AR','medio',['plata','azul']],
  ['Huracán','AR','medio',['plata','rojo']],
  ['Newell\'s Old Boys','AR','medio',['rojo','negro']],
  ['Rosario Central','AR','medio',['azul','oro']],
  // Argentina — Difícil
  ['Defensa y Justicia','AR','dificil',['verde','purpura']],
  ['Sarmiento de Junín','AR','dificil',['verde','plata']],
  ['Barracas Central','AR','dificil',['plata','celeste']],
  ['Central Córdoba (SdE)','AR','dificil',['negro','plata']],
  ['Godoy Cruz','AR','dificil',['azul','plata']],
  // Roster global — Fácil
  ['Real Madrid','ES','facil',['plata','oro']],
  ['Manchester United','GB','facil',['rojo','negro']],
  ['Bayern Múnich','DE','facil',['rojo','plata']],
  ['Juventus','IT','facil',['plata','negro']],
  ['Paris Saint-Germain','FR','facil',['azul','rojo']],
  ['Flamengo','BR','facil',['rojo','negro']],
  ['Ajax','NL','facil',['plata','rojo']],
  ['Al Ahly','EG','facil',['rojo','plata']],
  ['Galatasaray','TR','facil',['oro','rojo']],
  ['Al Hilal','SA','facil',['azul','plata']],
  // Roster global — Medio
  ['Feyenoord','NL','medio',['rojo','plata']],
  ['Fenerbahçe','TR','medio',['oro','azul']],
  ['Club América','MX','medio',['oro','azul']],
  ['Sporting CP','PT','medio',['verde','plata']],
  ['Colo-Colo','CL','medio',['plata','negro']],
  ['Orlando Pirates','ZA','medio',['negro','plata']],
  ['Urawa Red Diamonds','JP','medio',['rojo','negro']],
  ['Persépolis','IR','medio',['rojo','plata']],
  ['Shakhtar Donetsk','UA','medio',['naranja','negro']],
  ['Melbourne Victory','AU','medio',['azul','plata']],
  // Roster global — Difícil
  ['Racing de Ferrol','ES','dificil',['verde','plata']],
  ['Stevenage FC','GB','dificil',['rojo','plata']],
  ['Örgryte IS','SE','dificil',['azul','plata']],
  ['Shirak FC','AM','dificil',null],
  ['Petrolul Ploiești','RO','dificil',['oro','azul']],
  ['Progrès Niederkorn','LU','dificil',null],
  ['Warri Wolves','NG','dificil',null],
  ['Nakhon Ratchasima FC','TH','dificil',null],
  ['South Melbourne FC','AU','dificil',['azul','plata']],
  ['Lobi Stars','NG','dificil',null],
];

function firmaCrest(c){ return [c.shapeId,c.fieldTincture,c.divisionId,c.ordinaryId,c.ordinaryTincture,c.chargeId,c.chargeTincture].join('|'); }

function construirClubes(){
  const firmas = new Set();
  return CLUBES_BASE.map(([nombre, paisCode, dif, real]) => {
    const stRng = mulberry32(hashStr('stats:' + nombre));
    let crest, sal = 0;
    do {
      const rng = mulberry32(hashStr('crest:' + nombre + ':' + sal));
      crest = randomCrest(paisCode, rng, { modo:'libre', evitarCampo: real || [] });
      crest.nombre = null;
      crest.stars = dif === 'facil' ? Math.max(crest.stars, 1) : crest.stars;
      sal++;
    } while((firmas.has(firmaCrest(crest)) || crest.atrapadoEnBloqueo) && sal < 60);
    firmas.add(firmaCrest(crest));
    return { nombre, paisCode, dif, real, stats: statsIniciales(dif, stRng), crest };
  });
}
const CLUBES = construirClubes();
