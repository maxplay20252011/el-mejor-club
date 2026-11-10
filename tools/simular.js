// Simula N temporadas por club/política y reporta finales. Uso: node tools/simular.js [N]
const fs = require('fs'), vm = require('vm'), path = require('path');
const dir = path.join(__dirname, '..', 'src');
const orden = ['paises.js','nombres.js','eventos.js','crest.js','clubes.js','jugadores.js','juego.js'];
const ctx = { console, Math, Date, window:{}, navigator:{}, localStorage:{ getItem(){return null;}, setItem(){} }, document:{ getElementById(){ return null; } } };
vm.createContext(ctx);
vm.runInContext(orden.map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n') + '\n;this.__x={get state(){return state;},iniciarPartida,inicializarPool,eventoActual,ctxParaEvento,elegirOpcion,siguienteEvento,veredicto,CLUBES,ui,get POOL(){return POOL;},mulberry32,auditarEventos};', ctx);
const X = ctx.__x;
const N = Number(process.argv[2]) || 300;
X.inicializarPool();
const suma = d => d.gestion + d.prensa + d.resultado + d.vestuario + d.caja / 100;
const politicas = {
  azar: (ops, rnd) => Math.floor(rnd() * ops.length),
  prudente: (ops) => { let b = 0, bv = -1e9; ops.forEach((o, i) => { const d = o.azar ? o.azar.mal.d : o.d; const v = suma(Object.assign({gestion:0,prensa:0,resultado:0,caja:0,vestuario:0}, d)); if(v > bv){ bv = v; b = i; } }); return b; },
  ahorrador: (ops) => { let b = 0, bv = -1e9; ops.forEach((o, i) => { const d = o.azar ? o.azar.ok.d : o.d; if((d.caja || 0) > bv){ bv = d.caja || 0; b = i; } }); return b; },
};
const res = {};
for(const dif of ['facil','medio','dificil']){
  const clubes = X.CLUBES.filter(c => c.dif === dif);
  for(const [pn, pol] of Object.entries(politicas)){
    const r = { n:0, fin:{}, score:0, largo:0, vest:0, enc:0, vmin:0 };
    for(let i = 0; i < N; i++){
      const c = clubes[i % clubes.length];
      const seed = 1000 + i * 7919, rnd = X.mulberry32(seed ^ 0xABCDEF);
      X.iniciarPartida({ nombre:c.nombre, ciudad:'', paisCode:c.paisCode, dif:c.dif, stats:c.stats, crest:c.crest }, seed);
      let guard = 0;
      while(X.ui.screen !== 'diario' && guard++ < 40){
        const ev = X.eventoActual();
        if(!ev) break;
        const st = X.state; st.ctx = X.ctxParaEvento(ev);
        X.elegirOpcion(pol(ev.opciones, rnd));
        X.siguienteEvento();
      }
      const v = X.veredicto(), st = X.state;
      const k = st.fin || 'completa'; r.fin[k] = (r.fin[k] || 0) + 1; r.score += v.score; r.n++; r.largo += st.historial.length; r.vest += st.stats.vestuario; r.enc += st.encadenados;
    }
    res[dif + ' / ' + pn] = { partidas:r.n, 'score medio':Math.round(r.score / r.n), 'eventos medios':+(r.largo / r.n).toFixed(1), 'vestuario medio':Math.round(r.vest / r.n), 'encadenados medios':+(r.enc / r.n).toFixed(2), finales:Object.entries(r.fin).map(([k, n]) => k + ' ' + Math.round(100 * n / r.n) + '%').join(', ') };
  }
}
console.table(res);
const a = X.auditarEventos(X.POOL);
console.log('Eventos:', a.total, '| dup ids:', a.idsDuplicados.length, '| tokens desconocidos:', a.tokensDesconocidos.length, '| opciones inválidas:', a.opcionesInvalidas.length, '| cadenas setea:', a.cadenas.setea.join(','), '| requiere:', a.cadenas.requiere.join(','));
