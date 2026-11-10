/* ===================== Interfaz ===================== */

const app = document.getElementById('app');
function crestSvg(c, cls){ return `<div class="crest ${cls || ''}">${buildCrestSVG(c)}</div>`; }

function hud(){
  const s = state.stats;
  const cell = (k, ic, v, extra) => `<div class="hud-cell" id="hud-${k}"><span class="hud-ic">${ic}</span><span class="hud-v ${extra || ''}">${v}</span><span class="hud-l">${k === 'caja' ? 'Caja' : k[0].toUpperCase() + k.slice(1)}</span></div>`;
  return `<div class="hud">${cell('gestion','🏟', Math.round(s.gestion))}${cell('prensa','📰', Math.round(s.prensa))}${cell('resultado','⚽', signo(s.resultado))}${cell('caja','💰', fmtCaja(s.caja), s.caja < 0 ? 'neg' : '')}${cell('vestuario','🧑‍🤝‍🧑', Math.round(s.vestuario))}</div>`;
}
function flashHud(antes){
  ['gestion','prensa','resultado','caja','vestuario'].forEach(k => {
    const d = state.stats[k] - antes[k];
    const el = document.getElementById('hud-' + k);
    if(el && d !== 0){ el.classList.add(d > 0 ? 'up' : 'down'); setTimeout(() => el.classList.remove('up','down'), 900); }
  });
}
function chipDelta(k, v){
  if(!v) return '';
  const ic = { gestion:'🏟', prensa:'📰', resultado:'⚽', caja:'💰', vestuario:'🧑‍🤝‍🧑' }[k];
  const txt = k === 'caja' ? signo(v) + 'k' : signo(v);
  return `<span class="chip ${v > 0 ? 'pos' : 'neg'}">${ic} ${txt}</span>`;
}
function playerChip(j, extra){
  if(!j) return '';
  const q = j.cualidad ? `<span class="badge">${CUALIDADES[j.cualidad].icon} ${CUALIDADES[j.cualidad].label}</span>` : '';
  return `<div class="player-chip"><div class="player-avatar">${j.dorsal !== null && j.dorsal !== undefined ? j.dorsal : '★'}</div>
    <div><b>${esc(j.nombreCompleto)}</b><div class="mut">${POS_LABEL[j.pos]} · ${j.edad} años · ⭐ ${j.rating} ${q}</div></div>${extra || ''}</div>`;
}
function disclaimer(){ return '<div class="foot">Juego de ficción no oficial, sin afiliación con los clubes mencionados. Todos los escudos son generados: ninguno reproduce el de un club real.</div>'; }

/* ---------- pantallas ---------- */
function continuarHtml(){
  const g = hayGuardado();
  if(!g) return '';
  const s = g.state;
  return `<button class="btn primary" data-act="continuar">▶ Continuar: ${esc(s.club.nombre)} (evento ${s.idx + 1} de ${s.eventos.length})</button>`;
}
function pantallaInicio(){
  return `<div class="screen center">
    <div class="logo">🏟</div>
    <h1>Volvete Dirigente</h1>
    <p class="mut">Una temporada al frente de un club. Trece decisiones. Ningún final obvio.</p>
    ${continuarHtml()}
    <button class="btn primary" data-act="irCrear">Crear mi propio club</button>
    <button class="btn" data-act="irElegir">Elegir un club existente</button>
    ${historialHtml()}
    <button class="btn ghost sm" data-act="toggleSonido">${SFX.on ? '🔊 Sonido activado' : '🔇 Sonido apagado'}</button>
    ${disclaimer()}
  </div>`;
}

function pantallaElegir(){
  const lista = CLUBES.filter(c => c.dif === ui.tab);
  const tabs = ['facil','medio','dificil'].map(d => `<button class="tab ${ui.tab === d ? 'on' : ''}" data-act="tab" data-v="${d}">${DIFICULTAD_INFO[d].label}</button>`).join('');
  return `<div class="screen">
    <div class="top"><button class="btn ghost sm" data-act="irInicio">← Volver</button><h2>Elegí tu club</h2></div>
    <div class="tabs">${tabs}</div>
    <p class="mut">${DIFICULTAD_INFO[ui.tab].desc}</p>
    <div class="list">${lista.map(c => {
      const i = CLUBES.indexOf(c);
      return `<button class="club-card" data-act="elegirClub" data-v="${i}">${crestSvg(c.crest, 'sm')}
        <div class="grow"><b>${esc(c.nombre)}</b><div class="mut">${bandera(c.paisCode)} ${esc((paisPorCode(c.paisCode) || {}).nombre || c.paisCode)}</div>
        <div class="mini">🏟 ${c.stats.gestion} · 📰 ${c.stats.prensa} · 💰 ${fmtCaja(c.stats.caja)}</div></div></button>`;
    }).join('')}</div>${disclaimer()}</div>`;
}

/* ---------- editor de escudo ---------- */
function swatches(campo, actual, pool, contra){
  return pool.map(t => {
    const ilegal = contra && esMetal(t) === esMetal(contra);
    return `<button class="sw ${actual === t ? 'on' : ''} ${ilegal ? 'off' : ''}" style="background:${TINCTURE_HEX[t]}" title="${TINCTURE_LABEL[t]}${ilegal ? ' (ilegible sobre ese fondo)' : ''}" ${ilegal ? 'disabled' : ''} data-act="tint" data-k="${campo}" data-v="${t}"></button>`;
  }).join('');
}
function poolColores(){
  const p = paisPorCode(ui.cfg.pais);
  return (ui.cfg.modo === 'pais' && p) ? p.paletaBandera : ALL_TINCTURES;
}
function selectHtml(k, opts, val){
  return `<select data-in="sel" data-k="${k}">${opts.map(([v,l]) => `<option value="${v}" ${String(val) === String(v) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>`;
}
function listaPaises(){
  const q = ui.cfg.busqueda.trim().toLowerCase();
  const l = PAISES.filter(p => !q || p.nombre.toLowerCase().includes(q) || p.code.toLowerCase() === q).slice(0, 40);
  return l.map(p => `<button class="pais ${p.code === ui.cfg.pais ? 'on' : ''}" data-act="pais" data-v="${p.code}">${bandera(p.code)} ${esc(p.nombre)}</button>`).join('') || '<span class="mut">Sin resultados</span>';
}
function gridCargas(){
  const cfg = ui.cfg, c = cfg.crest;
  const pais = paisPorCode(cfg.pais) || { nombre: cfg.pais };
  const tip = cargasSugeridasPorPais(cfg.pais);
  const gen = CHARGES.map(id => ({ id, nombre: CHARGE_LABEL[id], categoria:'generica' }));
  const tabs = `<div class="tabs sm"><button class="tab ${cfg.tabCarga === 'tipicas' ? 'on' : ''}" data-act="tabCarga" data-v="tipicas">★ ${bandera(cfg.pais)} ${esc(pais.nombre)}</button><button class="tab ${cfg.tabCarga === 'gen' ? 'on' : ''}" data-act="tabCarga" data-v="gen">Genéricas</button></div>`;
  const lista = cfg.tabCarga === 'tipicas' ? tip : gen;
  const items = lista.map(s => {
    const ch = { ...c, chargeId: s.id, chargeTincture: CHARGE_NATURAL[s.id] ? null : (c.chargeTincture || 'negro'), monograma: iniciales(cfg.nombre) };
    return `<button class="carga ${c.chargeId === s.id ? 'on' : ''}" data-act="carga" data-v="${s.id}" title="${esc(s.nombre)}"><svg viewBox="20 40 120 110">${chargeMarkup(s.id, '#e8e4d8', ch)}</svg><span>${esc(s.nombre)}${s.verificado === false ? ' ·' : ''}</span></button>`;
  }).join('');
  return `<div class="label">Carga central</div>${tabs}<div class="cargas">${items}</div>`;
}
function pantallaCrear(){
  const cfg = ui.cfg, c = cfg.crest;
  const pais = paisPorCode(cfg.pais) || {};
  const pool = poolColores();
  const contraOrd = c.fieldTincture;
  const contraCarga = (c.ordinaryId !== 'ninguna') ? c.ordinaryTincture : c.fieldTincture;
  const shapes = SHAPES.map(id => `<button class="shape ${c.shapeId === id ? 'on' : ''}" data-act="forma" data-v="${id}" title="${SHAPE_LABEL[id]}"><svg viewBox="-6 -6 172 212"><path d="${shapePath(id)}" fill="#e8e4d8" stroke="#555" stroke-width="4"/></svg></button>`).join('');
  return `<div class="screen">
    <div class="top"><button class="btn ghost sm" data-act="irInicio">← Volver</button><h2>Creá tu club</h2></div>
    <div class="preview">${crestSvg(crestDelCfg(), 'lg')}<div id="avisoBloqueo" class="aviso ${cfg.aviso ? 'show' : ''}">Esta combinación se parece mucho a un club existente. Cambiá algún color o pieza para poder seguir.</div></div>
    <button class="btn" data-act="sorprender">🎲 Sorprendeme</button>

    <div class="label">País</div>
    <input class="in" data-in="busqueda" id="busqPais" placeholder="Buscar país…" value="${esc(cfg.busqueda)}">
    <div class="paises" id="listaPaises">${listaPaises()}</div>

    <div class="label">Colores</div>
    <div class="tabs sm"><button class="tab ${cfg.modo === 'pais' ? 'on' : ''}" data-act="modo" data-v="pais">Colores de ${bandera(cfg.pais)} ${esc(pais.nombre || '')}</button><button class="tab ${cfg.modo === 'libre' ? 'on' : ''}" data-act="modo" data-v="libre">Personalizado</button></div>

    <div class="label">Forma</div><div class="shapes">${shapes}</div>
    <div class="label">Campo</div><div class="sws">${swatches('fieldTincture', c.fieldTincture, pool, null)}</div>
    <div class="label">División del campo</div>
    ${selectHtml('divisionId', DIVISIONS.map(d => [d, DIVISION_LABEL[d]]), c.divisionId)}
    ${c.divisionId !== 'ninguna' ? `<div class="sws">${swatches('divisionTincture2', c.divisionTincture2, pool, null)}</div>` : ''}
    <div class="label">Ordinaria</div>
    ${selectHtml('ordinaryId', ORDINARIES.map(d => [d, ORDINARY_LABEL[d]]), c.ordinaryId)}
    ${c.ordinaryId !== 'ninguna' ? `<div class="sws">${swatches('ordinaryTincture', c.ordinaryTincture, pool, contraOrd)}</div>` : ''}
    ${gridCargas()}
    ${CHARGE_NATURAL[c.chargeId] ? '<div class="mut">Esta carga va “al natural”: no lleva tintura.</div>' : `<div class="sws">${swatches('chargeTincture', c.chargeTincture, pool, contraCarga)}</div>`}

    <div class="label">Cinta</div>
    ${selectHtml('cinta', [['ninguna','Sin cinta'],['nombre','Con el nombre del club'],['lema','Con lema']], c.cinta || 'ninguna')}
    ${c.cinta === 'lema' ? selectHtml('lema', LEMAS_INVENTADOS.map(l => [l, l]), c.lema || LEMAS_INVENTADOS[0]) : ''}
    ${c.cinta && c.cinta !== 'ninguna' ? selectHtml('ribbonStyle', [0,1,2,3].map(n => [n, 'Estilo de cinta ' + (n+1)]), c.ribbonStyle || 0) : ''}
    <div class="label">Año ficticio (4 dígitos, opcional)</div>
    <input class="in" data-in="anio" maxlength="4" inputmode="numeric" placeholder="ej. 1923" value="${esc(c.anio || '')}">
    <div class="row"><div><div class="label">Estrellas</div>${selectHtml('stars', [0,1,2,3,4,5].map(n => [n, n + ' ★']), c.stars || 0)}</div>
    <div><div class="label">Ornamento</div>${selectHtml('ornamento', [['','Ninguno'],['corona','Corona'],['laurel','Laurel']], c.ornamento || '')}</div></div>

    <div class="label">Datos del club</div>
    <input class="in" data-in="nombre" maxlength="22" placeholder="Nombre del club" value="${esc(cfg.nombre)}">
    <input class="in" data-in="ciudad" maxlength="30" placeholder="Ciudad / región (ficticia)" value="${esc(cfg.ciudad)}">
    <div class="label">Nivel de fama</div>
    <div class="tabs">${['facil','medio','dificil'].map(d => `<button class="tab ${cfg.dif === d ? 'on' : ''}" data-act="difCfg" data-v="${d}">${DIFICULTAD_INFO[d].label}</button>`).join('')}</div>
    <p class="mut">${DIFICULTAD_INFO[cfg.dif].desc}</p>
    <button class="btn primary" data-act="confirmarClub" ${cfg.nombre.trim().length < 2 ? 'disabled' : ''} id="btnConfirmarClub">Fundar el club</button>
    ${disclaimer()}</div>`;
}

/* ---------- formación ---------- */
function pantallaFormacion(){
  const t = state.titulares;
  const slots = SLOTS.map(s => {
    const j = jugadorPorNombre(state.plantel, t[s.id]);
    return `<button class="slot ${ui.slotAbierto === s.id ? 'sel' : ''}" style="left:${s.x}%;top:${s.y}%" data-act="slot" data-v="${s.id}"><span class="player-avatar">${j ? j.dorsal : '+'}</span><small>${j ? esc(j.apellido) : s.pos}</small></button>`;
  }).join('');
  let panel = '';
  if(ui.slotAbierto){
    const s = SLOTS.find(x => x.id === ui.slotAbierto);
    const ocupados = new Set(Object.entries(t).filter(([k, v]) => k !== s.id && v).map(([, v]) => v));
    const cand = state.plantel.filter(j => j.pos === s.pos).sort((a,b) => b.rating - a.rating);
    panel = `<div class="panel"><b>Elegí un ${POS_LABEL[s.pos].toLowerCase()}</b>${cand.map(j => `<button class="club-card" data-act="asignar" data-v="${esc(j.nombreCompleto)}">${playerChip(j)}${ocupados.has(j.nombreCompleto) ? '<span class="mut">ya es titular en otro puesto</span>' : ''}</button>`).join('')}
      <button class="btn ghost sm" data-act="quitarSlot">Dejar vacío</button></div>`;
  }
  const ok = formacionCompleta(t);
  const avg = Math.round(ratingTitulares(state.plantel, t));
  return `<div class="screen">
    <div class="top"><h2>Formación 4-3-3</h2></div>
    <p class="mut">Tocá un puesto para elegir quién juega. El rating promedio de tus 11 titulares mueve las chances en los eventos deportivos.</p>
    <div class="pitch">${slots}</div>
    <div class="center"><b>Rating titulares: ⭐ ${avg}</b></div>
    ${panel}
    <button class="btn" data-act="autoFormacion">⚙ Automático</button>
    <button class="btn primary" data-act="confirmarFormacion" ${ok ? '' : 'disabled'}>${ui.volverA === 'evento' ? 'Guardar formación' : 'Confirmar formación'}</button>
  </div>`;
}
function pantallaPresupuesto(){
  return `<div class="screen center">
    <h2>Presupuesto de la temporada</h2>
    <div class="big">${fmtCaja(state.stats.caja)}</div>
    <div class="nota">🎯 Objetivo: ${esc(objetivo().texto)}</div>
    <p class="mut">Con esta plata sostenés sueldos, fichajes e imprevistos durante toda la temporada. Si la caja se hunde, el club corre riesgo de quiebra.</p>
    <button class="btn" data-act="irMercado">🛒 Ir al mercado antes de arrancar</button>
    <button class="btn" data-act="irPlantel">👥 Ver plantel</button>
    <button class="btn primary" data-act="arrancar">Arrancar temporada</button>
  </div>`;
}

/* ---------- plantel / mercado ---------- */
function filaJugador(j, extra){
  const tit = Object.values(state.titulares).includes(j.nombreCompleto);
  return `<div class="club-card static">${playerChip(j, `<div class="tags">${state.capitan === j.nombreCompleto ? '<span class="badge">C</span>' : ''}${tit ? '<span class="badge on">XI</span>' : ''}</div>`)}${extra || ''}</div>`;
}
function pantallaPlantel(){
  const lista = state.plantel.slice().sort((a,b) => ['ARQ','DEF','MED','DEL'].indexOf(a.pos) - ['ARQ','DEF','MED','DEL'].indexOf(b.pos) || b.rating - a.rating);
  return `<div class="screen">${hud()}<div class="top"><button class="btn ghost sm" data-act="volver">← Volver</button><h2>Plantel (${lista.length})</h2></div>
    <div class="list">${lista.map(j => filaJugador(j)).join('')}</div></div>`;
}
function pantallaMercado(){
  if(!ui.mercado.length) ui.mercado = generarCandidatosMercado(state.rng, state.club, 6);
  const lleno = state.plantel.length >= 26;
  const items = ui.mercado.map((j, i) => {
    const precio = precioJugador(j);
    const puede = state.stats.caja >= precio && !lleno;
    return `<div class="club-card static ${puede ? '' : 'dim'}">${playerChip(j)}<div class="buy"><b>${fmtCaja(precio)}</b><button class="btn sm primary" data-act="comprar" data-v="${i}" ${puede ? '' : 'disabled'}>Comprar</button></div>
      ${j.cualidad ? `<div class="mut">${CUALIDADES[j.cualidad].desc}</div>` : ''}</div>`;
  }).join('');
  return `<div class="screen">${hud()}<div class="top"><button class="btn ghost sm" data-act="volver">← Volver</button><h2>Mercado de pases</h2></div>
    <p class="mut">${lleno ? 'Plantel lleno (26).' : 'Los jugadores con cualidad pesan en las decisiones, pero cuestan más.'}</p>
    <div class="list">${items || '<p class="mut">Sin candidatos.</p>'}</div>
    <button class="btn" data-act="actualizarMercado">🔄 Actualizar candidatos</button></div>`;
}

/* ---------- evento / resultado ---------- */
const CAT_LABEL = { deportivo:'⚽ Deportivo', economico:'💰 Económico', institucional:'🏛 Institucional', mediatico:'📰 Mediático', hinchada:'📣 Hinchada' };
function tagsOpcion(o){
  const t = [];
  if(o.azar) t.push('🎲 Riesgo');
  if(o.vende) t.push('🚪 Sale un jugador');
  if(o.ficha) t.push('✍️ Llega un jugador');
  return t.length ? ' ' + t.map(x => `<em class="tag">${x}</em>`).join('') : '';
}
function pantallaEvento(){
  const ev = eventoActual();
  if(!state.ctx) state.ctx = ctxParaEvento(ev);
  const ctx = state.ctx;
  return `<div class="screen">${hud()}
    <div class="progress"><div style="width:${(state.idx / state.eventos.length) * 100}%"></div></div>
    <div class="mut center">Evento ${state.idx + 1} de ${state.eventos.length} · ${CAT_LABEL[ev.cat] || ev.cat} · 🎯 ${objetivo().cumplido ? 'objetivo en camino' : 'objetivo en riesgo'}</div>
    <h2>${esc(sustituirTexto(ev.titulo, ctx))}</h2>
    ${playerChip(ctx.jugador)}
    <p class="ctx">${esc(sustituirTexto(ev.contexto, ctx))}</p>
    <div class="list">${ev.opciones.map((o, i) => `<button class="opt" data-act="opcion" data-v="${i}"><b>${esc(sustituirTexto(o.texto, ctx))}</b><span>${esc(sustituirTexto(o.sub || '', ctx))}${tagsOpcion(o)}</span></button>`).join('')}</div>
    <div class="row3"><button class="btn ghost sm" data-act="irPlantel">👥 Plantel</button><button class="btn ghost sm" data-act="irMercado">🛒 Mercado</button><button class="btn ghost sm" data-act="irFormacion">📋 Formación</button></div>
  </div>`;
}
function pantallaResultado(){
  const r = state.resultado, d = r.d;
  const h = state.historial[state.historial.length - 1];
  const hinchada = d.gestion > 2 ? ['😀','Hinchada contenta'] : d.gestion < -2 ? ['😠','Hinchada enojada'] : ['😐','Hinchada expectante'];
  const prensa = d.prensa > 2 ? ['👍','Prensa favorable'] : d.prensa < -2 ? ['👎','Prensa hostil'] : ['📄','Prensa neutral'];
  const warn = state.stats.caja < 0 ? '<div class="aviso show">⚠ La caja está en rojo.</div>' : '';
  return `<div class="screen" id="pantallaResultado">${hud()}
    <div class="reac"><div><span>${hinchada[0]}</span><small>${hinchada[1]}</small></div><div><span>${prensa[0]}</span><small>${prensa[1]}</small></div></div>
    <p class="ctx">${esc(r.msg)}</p>
    <div class="chips">${chipDelta('gestion', d.gestion)}${chipDelta('prensa', d.prensa)}${chipDelta('resultado', d.resultado)}${chipDelta('caja', d.caja)}${chipDelta('vestuario', d.vestuario)}</div>
    ${r.notas.map(n => `<div class="nota">${esc(n)}</div>`).join('')}${warn}
    ${state.fin ? `<div class="aviso show">${state.fin === 'destituido' ? 'La gestión llegó a 0: te destituyen.' : state.fin === 'motin' ? 'El vestuario llegó a 0: el plantel se te rebeló.' : 'La caja se hundió: el club quiebra.'}</div>` : ''}
    <button class="btn primary" data-act="siguiente">${state.fin || state.idx + 1 >= state.eventos.length ? 'Ver el cierre' : 'Siguiente'}</button>
  </div>`;
}

/* ---------- cierre ---------- */
function pantallaDiario(){
  const t = tresTitulares();
  return `<div class="screen"><div class="diario"><div class="cab">LA GACETA DEL DIRIGENTE</div>
    ${t.map(x => `<div class="tit ${x.bueno ? 'bien' : 'mal'}"><span>${x.bueno ? '▲' : '▼'}</span> ${esc(x.texto)}</div>`).join('') || '<div class="tit">Temporada sin sobresaltos.</div>'}</div>
    <button class="btn primary" data-act="irFinal">Ver mi veredicto</button></div>`;
}
function pantallaFinal(){
  const v = veredicto(), s = state.stats;
  return `<div class="screen center">
    ${crestSvg(state.club.crest, 'lg')}
    <h2>${esc(state.club.nombre)}</h2><div class="mut">${bandera(state.club.paisCode)} ${DIFICULTAD_INFO[state.club.dif].label}</div>
    <h1 class="verd">${esc(v.titulo)}</h1>
    <p>${esc(v.texto)}</p>${v.extra ? `<p class="mut">${esc(v.extra)}</p>` : ''}
    <div class="final-stats"><div><b>${signo(s.resultado)}</b><small>Resultado</small></div><div><b>${Math.round(s.gestion)}</b><small>Gestión</small></div><div><b>${Math.round(s.prensa)}</b><small>Prensa</small></div><div><b>${fmtCaja(s.caja)}</b><small>Caja</small></div><div><b>${Math.round(s.vestuario)}</b><small>Vestuario</small></div></div>
    <div class="nota">🎯 ${esc(objetivo().texto)} <b>${state.fin ? 'No cumplido' : objetivo().cumplido ? 'Cumplido ✔' : 'No cumplido ✘'}</b></div>
    ${logrosHtml()}
    <button class="btn primary" data-act="compartir">📤 Compartir mi gestión</button>
    <button class="btn" data-act="descargarTarjeta">⬇ Descargar tarjeta</button>
    <button class="btn" data-act="irInicio">Jugar de nuevo</button>
    ${disclaimer()}</div>`;
}

function logrosHtml(){
  const L = logros();
  if(!L.length) return '';
  return `<div class="logros">${L.map(([ic, t, d]) => `<div class="logro"><span>${ic}</span><div><b>${esc(t)}</b><small>${esc(d)}</small></div></div>`).join('')}</div>`;
}
function historialHtml(){
  const h = leerHist();
  if(!h.length) return '';
  const mejor = h.reduce((a, b) => (b.score > a.score ? b : a), h[0]);
  return `<div class="hist"><b>Tus últimas gestiones</b>
    ${h.slice(0, 5).map(x => `<div class="hrow"><span>${esc(x.club)}</span><span class="mut">${esc(x.titulo)} · ${x.score}</span></div>`).join('')}
    <div class="mut">Mejor: ${esc(mejor.club)} (${mejor.score})</div></div>`;
}

const PANTALLAS = {
  inicio: pantallaInicio, elegir: pantallaElegir, crear: pantallaCrear, formacion: pantallaFormacion,
  presupuesto: pantallaPresupuesto, plantel: pantallaPlantel, mercado: pantallaMercado,
  evento: pantallaEvento, resultado: pantallaResultado, diario: pantallaDiario, final: pantallaFinal,
};
function render(){
  app.innerHTML = PANTALLAS[ui.screen]();
  window.scrollTo(0, 0);
  if(ui.screen === 'resultado' && state && state.resultado) flashHud(state.resultado.antes);
}
function descargarTarjeta(){
  tarjetaCanvas(cv => {
    const a = document.createElement('a');
    a.href = cv.toDataURL('image/png'); a.download = 'volvete-dirigente.png';
    document.body.appendChild(a); a.click(); a.remove();
  });
}
function compartir(el){
  const v = veredicto();
  const texto = `Mi gestión en ${state.club.nombre}: «${v.titulo}» (${v.score}/100). ¿Podés hacerlo mejor?`;
  const copiar = () => { try{ navigator.clipboard.writeText(texto); el.textContent = '✔ Copiado'; }catch(e){ el.textContent = texto; } };
  if(!navigator.share){ copiar(); return; }
  tarjetaCanvas(cv => cv.toBlob(blob => {
    const file = blob ? new File([blob], 'volvete-dirigente.png', { type:'image/png' }) : null;
    const data = file && navigator.canShare && navigator.canShare({ files:[file] }) ? { text:texto, files:[file] } : { text:texto };
    navigator.share(data).catch(() => {});
  }, 'image/png'));
}
function refrescarPreviewCrear(){
  const p = document.querySelector('.preview');
  if(p){
    const av = document.getElementById('avisoBloqueo');
    p.innerHTML = crestSvg(crestDelCfg(), 'lg') + `<div id="avisoBloqueo" class="aviso ${ui.cfg.aviso ? 'show' : ''}">${av ? av.innerHTML : ''}</div>`;
  }
}

/* ---------- tarjeta descargable ---------- */
function tarjetaCanvas(cb){
  const v = veredicto(), s = state.stats, c = state.club;
  const W = 1080, H = 1350;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, H); grad.addColorStop(0, '#171b22'); grad.addColorStop(1, '#0b0e13');
  g.fillStyle = grad; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#d8b45a'; g.lineWidth = 6; g.strokeRect(30, 30, W - 60, H - 60);
  g.textAlign = 'center';
  const txt = (t, y, size, color, w) => { g.fillStyle = color; g.font = (w || '700') + ' ' + size + 'px Georgia, serif'; g.fillText(t, W/2, y); };
  txt('VOLVETE DIRIGENTE', 110, 44, '#d8b45a', '900');
  const svg = buildCrestSVG(c.crest).replace('<svg ', '<svg width="480" height="768" ');
  const img = new Image();
  img.onload = () => {
    g.drawImage(img, W/2 - 240, 150, 480, 768);
    txt(c.nombre, 990, 64, '#e8e4d8', '900');
    txt(DIFICULTAD_INFO[c.dif].label + ' · ' + ((paisPorCode(c.paisCode) || {}).nombre || ''), 1040, 34, '#9aa3b2', '400');
    txt(v.titulo, 1110, 52, '#d8b45a', '900');
    const stats = [['Resultado', signo(s.resultado)], ['Gestión', Math.round(s.gestion)], ['Prensa', Math.round(s.prensa)], ['Caja', fmtCaja(s.caja)], ['Vestuario', Math.round(s.vestuario)]];
    stats.forEach(([k, val], i) => {
      const x = 140 + i * 200;
      g.fillStyle = '#e8e4d8'; g.font = '900 50px Georgia'; g.fillText(String(val), x, 1190);
      g.fillStyle = '#9aa3b2'; g.font = '400 26px Georgia'; g.fillText(k, x, 1228);
    });
    txt('Juego de ficción no oficial', 1300, 24, '#6b7385', '400');
    cb(cv);
  };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* ---------- eventos de UI ---------- */
function setCrest(fn){ fn(ui.cfg.crest); normalizarTinturas(ui.cfg.crest); ui.cfg.aviso = false; render(); }
function onAct(act, v, el){
  switch(act){
    case 'irInicio': ui.screen = 'inicio'; break;
    case 'irElegir': ui.screen = 'elegir'; break;
    case 'irCrear': ui.cfg = ui.cfg || nuevoCfg(); ui.cfg.crest.cinta = ui.cfg.crest.cinta || (ui.cfg.crest.lema ? 'lema' : 'ninguna'); ui.screen = 'crear'; break;
    case 'tab': ui.tab = v; break;
    case 'elegirClub': {
      const c = CLUBES[Number(v)];
      iniciarPartida({ nombre:c.nombre, ciudad:'', paisCode:c.paisCode, dif:c.dif, stats:c.stats, crest:c.crest }, leerSeed());
      break; }
    case 'sorprender': {
      const cinta = ui.cfg.crest.cinta;
      ui.cfg.crest = randomCrest(ui.cfg.pais, Math.random, { modo: ui.cfg.modo });
      ui.cfg.crest.cinta = ui.cfg.crest.lema ? 'lema' : (cinta || 'ninguna');
      ui.cfg.aviso = false; break; }
    case 'pais': {
      ui.cfg.pais = v;
      if(ui.cfg.modo === 'pais') aplicarPaletaPais(ui.cfg.crest, v);
      ui.cfg.tabCarga = cargasSugeridasPorPais(v).length ? 'tipicas' : 'gen';
      ui.cfg.aviso = false; break; }
    case 'modo':
      ui.cfg.modo = v;
      if(v === 'pais') aplicarPaletaPais(ui.cfg.crest, ui.cfg.pais);
      break;
    case 'forma': ui.cfg.crest.shapeId = v; ui.cfg.aviso = false; break;
    case 'tint': setCrest(c => { c[el.dataset.k] = v; if(el.dataset.k === 'fieldTincture'){ c.ordinaryTincture = c.ordinaryTincture; } }); return;
    case 'carga': setCrest(c => { c.chargeId = v; if(CHARGE_NATURAL[v]) c.chargeTincture = null; }); return;
    case 'tabCarga': ui.cfg.tabCarga = v; break;
    case 'difCfg': ui.cfg.dif = v; break;
    case 'confirmarClub': {
      const cr = crestDelCfg();
      if(matchesBloqueo(cr)){ ui.cfg.aviso = true; break; }
      iniciarPartida({ nombre: ui.cfg.nombre.trim(), ciudad: ui.cfg.ciudad.trim(), paisCode: ui.cfg.pais, dif: ui.cfg.dif,
        stats: statsIniciales(ui.cfg.dif, mulberry32(hashStr(ui.cfg.nombre))), crest: { ...cr, nombre: cr.nombre || null } }, leerSeed());
      break; }
    case 'slot': ui.slotAbierto = ui.slotAbierto === v ? null : v; break;
    case 'asignar': {
      const nc = v;
      Object.keys(state.titulares).forEach(k => { if(state.titulares[k] === nc) state.titulares[k] = null; });
      state.titulares[ui.slotAbierto] = nc; ui.slotAbierto = null; break; }
    case 'quitarSlot': state.titulares[ui.slotAbierto] = null; ui.slotAbierto = null; break;
    case 'autoFormacion': state.titulares = formacionAutomatica(state.plantel); ui.slotAbierto = null; break;
    case 'confirmarFormacion': ui.slotAbierto = null; ui.screen = ui.volverA; if(ui.volverA === 'evento') {} break;
    case 'irMercado': ui.volverA = ui.screen === 'presupuesto' ? 'presupuesto' : 'evento'; ui.screen = 'mercado'; break;
    case 'irPlantel': ui.volverA = ui.screen === 'presupuesto' ? 'presupuesto' : 'evento'; ui.screen = 'plantel'; break;
    case 'irFormacion': ui.volverA = 'evento'; ui.screen = 'formacion'; break;
    case 'volver': ui.screen = ui.volverA; break;
    case 'comprar': {
      const j = ui.mercado[Number(v)];
      const precio = precioJugador(j);
      if(!j || state.stats.caja < precio || state.plantel.length >= 26) break;
      state.stats.caja -= precio;
      asignarDorsal(state.plantel, j, state.rng);
      state.plantel.push(j); state.fichajes++;
      ui.mercado.splice(Number(v), 1);
      break; }
    case 'actualizarMercado': ui.mercado = generarCandidatosMercado(state.rng, state.club, 6); break;
    case 'arrancar': guardarPartida(); ui.screen = 'evento'; ui.volverA = 'evento'; break;
    case 'continuar': cargarPartida(); break;
    case 'opcion': elegirOpcion(Number(v)); { const r = state.resultado.d; feedback((r.gestion + r.prensa + r.resultado + r.vestuario) >= 0); } break;
    case 'siguiente': siguienteEvento(); break;
    case 'irFinal': guardarHist(); ui.screen = 'final'; break;
    case 'toggleSonido': toggleSonido(); break;
    case 'compartir': compartir(el); return;
    case 'descargarTarjeta': descargarTarjeta(); return;
  }
  render();
}
function leerSeed(){
  // cada partida usa una semilla aleatoria
  const n = Number(String(ui.seed || '').replace(/\D/g, ''));
  ui.seed = null;
  return n > 0 ? n : Math.floor(Math.random() * 1e9);
}
app.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if(!el || el.disabled) return;
  onAct(el.dataset.act, el.dataset.v, el);
});
app.addEventListener('input', e => {
  const el = e.target, k = el.dataset.in;
  if(!k) return;
  if(k === 'busqueda'){ ui.cfg.busqueda = el.value; document.getElementById('listaPaises').innerHTML = listaPaises(); return; }
  if(k === 'nombre'){ ui.cfg.nombre = el.value; ui.cfg.aviso = false; const b = document.getElementById('btnConfirmarClub'); if(b) b.disabled = el.value.trim().length < 2; refrescarPreviewCrear(); return; }
  if(k === 'ciudad'){ ui.cfg.ciudad = el.value; return; }
  if(k === 'anio'){ ui.cfg.crest.anio = /^\d{4}$/.test(el.value.trim()) ? el.value.trim() : null; ui.cfg.aviso = false; refrescarPreviewCrear(); return; }
  if(k === 'sel'){
    const key = el.dataset.k, c = ui.cfg.crest;
    let val = el.value;
    if(['stars','ribbonStyle'].includes(key)) val = Number(val);
    if(key === 'ornamento') val = val || null;
    c[key] = val;
    normalizarTinturas(c);
    ui.cfg.aviso = false;
    render();
  }
});

/* ---------- arranque ---------- */
(function arranque(){
  inicializarPool();
  render();
})();
