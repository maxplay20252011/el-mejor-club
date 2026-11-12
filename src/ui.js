/* ===================== Interfaz ===================== */

const app = document.getElementById('app');
function crestSvg(c, cls){ return `<div class="crest ${cls || ''}" role="img" aria-label="${esc(t('a11y.escudo', { desc: descripcionEscudo(c) }))}">${buildCrestSVG(c)}</div>`; }
function camisetaSvg(c, cls, nombre){ return `<div class="camiseta ${cls || ''}" role="img" aria-label="${esc(t('a11y.camiseta', { desc: descripcionCamiseta(c) }))}">${buildCamisetaSVG(c, { nombre })}</div>`; }

/* ---------- ajustes de accesibilidad ---------- */
const A11Y = { fs: 0, hc: false, rm: false };
(function cargarA11y(){
  try{ Object.assign(A11Y, JSON.parse(localStorage.getItem('vd_a11y') || '{}')); }catch(e){}
  try{ if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches && localStorage.getItem('vd_a11y') === null) A11Y.rm = true; }catch(e){}
})();
function aplicarA11y(){
  const h = document.documentElement;
  h.style.setProperty('--fs', [1, 1.15, 1.3, 1.5][clamp(A11Y.fs, 0, 3)]);
  h.classList.toggle('hc', !!A11Y.hc);
  h.classList.toggle('rm', !!A11Y.rm);
  try{ localStorage.setItem('vd_a11y', JSON.stringify(A11Y)); }catch(e){}
}
function anunciar(msg){
  const el = document.getElementById('live');
  if(el){ el.textContent = ''; setTimeout(() => { el.textContent = msg; }, 30); }
}

function hud(){
  const s = state.stats;
  const cell = (k, ic, v, extra) => `<div class="hud-cell" id="hud-${k}"><span class="hud-ic" aria-hidden="true">${ic}</span><span class="hud-v ${extra || ''}">${v}</span><span class="hud-l">${t('hud.' + k)}</span></div>`;
  const aria = t('a11y.hud', { g: Math.round(s.gestion), p: Math.round(s.prensa), r: signo(s.resultado), c: fmtCaja(s.caja), v: Math.round(s.vestuario) });
  return `<div class="hud" role="group" aria-label="${esc(aria)}">${cell('gestion','🏟', Math.round(s.gestion))}${cell('prensa','📰', Math.round(s.prensa))}${cell('resultado','⚽', signo(s.resultado))}${cell('caja','💰', fmtCaja(s.caja), s.caja < 0 ? 'neg' : '')}${cell('vestuario','🧑‍🤝‍🧑', Math.round(s.vestuario))}</div>`;
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
  return `<span class="chip ${v > 0 ? 'pos' : 'neg'}" aria-label="${esc(t('hud.' + k) + ' ' + txt)}"><span aria-hidden="true">${ic}</span> ${txt}</span>`;
}
function playerChip(j, extra){
  if(!j) return '';
  const q = j.cualidad ? `<span class="badge">${CUALIDADES[j.cualidad].icon} ${esc(t('q.' + j.cualidad))}</span>` : '';
  return `<div class="player-chip"><div class="player-avatar" aria-hidden="true">${j.dorsal !== null && j.dorsal !== undefined ? j.dorsal : '★'}</div>
    <div><b>${esc(j.nombreCompleto)}</b><div class="mut">${esc(t('pos.' + j.pos))} · ${t('jugador.edad', { n: j.edad })} · ⭐ ${j.rating} ${q}</div></div>${extra || ''}</div>`;
}
function disclaimer(){ return `<div class="foot">${esc(t('app.disclaimer'))}</div>`; }
function tabsHtml(items, actual, act, sm){
  return `<div class="tabs ${sm ? 'sm' : ''}" role="tablist">${items.map(([v, label]) => `<button class="tab ${actual === v ? 'on' : ''}" role="tab" aria-selected="${actual === v}" data-act="${act}" data-v="${v}">${label}</button>`).join('')}</div>`;
}
function selectHtml(k, opts, val, label){
  return `<select data-in="sel" data-k="${k}" aria-label="${esc(label || k)}">${opts.map(([v,l]) => `<option value="${v}" ${String(val) === String(v) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>`;
}
function difLabel(d){ return t('dif.' + d); }

/* ---------- inicio / elegir ---------- */
function continuarHtml(){
  const g = hayGuardado();
  if(!g) return '';
  const s = g.state;
  return `<button class="btn primary" data-act="continuar">${esc(t('inicio.continuar', { club: s.club.nombre, temp: s.temporada || 1, n: s.idx + 1, total: s.eventos.length }))}</button>`;
}
function idiomasHtml(){
  return `<div class="langs" role="group" aria-label="${esc(t('a11y.idioma'))}">${LANGS.map(l => `<button class="lang ${LANG === l.code ? 'on' : ''}" data-act="idioma" data-v="${l.code}" lang="${l.code}" aria-pressed="${LANG === l.code}">${l.label}</button>`).join('')}</div>`;
}
function historialHtml(){
  const h = leerHist();
  if(!h.length) return '';
  const mejor = h.reduce((a, b) => (b.score > a.score ? b : a), h[0]);
  return `<div class="hist"><b>${esc(t('inicio.hist.titulo'))}</b>
    ${h.slice(0, 5).map(x => `<div class="hrow"><span>${esc(x.club)}</span><span class="mut">${esc(x.titulo)} · ${x.score}</span></div>`).join('')}
    <div class="mut">${esc(t('inicio.hist.mejor', { club: mejor.club, score: mejor.score }))}</div></div>`;
}
function pantallaInicio(){
  return `<div class="screen center">
    <div class="logo" aria-hidden="true">🏟</div>
    <h1 tabindex="-1">${esc(t('app.titulo'))}</h1>
    <p class="mut">${esc(t('app.lema'))}</p>
    ${continuarHtml()}
    <button class="btn primary" data-act="irCrear">${esc(t('inicio.crear'))}</button>
    <button class="btn" data-act="irElegir">${esc(t('inicio.elegir'))}</button>
    ${idiomasHtml()}
    ${historialHtml()}
    <button class="btn ghost sm" data-act="toggleSonido">${SFX.on ? t('sonido.on') : t('sonido.off')}</button>
    ${disclaimer()}
  </div>`;
}
function pantallaElegir(){
  const lista = CLUBES.filter(c => c.dif === ui.tab);
  return `<div class="screen">
    <div class="top"><button class="btn ghost sm" data-act="irInicio">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('elegir.titulo'))}</h2></div>
    ${tabsHtml(['facil','medio','dificil'].map(d => [d, esc(difLabel(d))]), ui.tab, 'tab')}
    <p class="mut">${esc(t('difd.' + ui.tab))}</p>
    <div class="list">${lista.map(c => {
      const i = CLUBES.indexOf(c);
      return `<button class="club-card" data-act="elegirClub" data-v="${i}">${crestSvg(c.crest, 'sm')}
        <div class="grow"><b>${esc(c.nombre)}</b><div class="mut">${bandera(c.paisCode)} ${esc(nombrePais(c.paisCode))}</div>
        <div class="mini">🏟 ${c.stats.gestion} · 📰 ${c.stats.prensa} · 💰 ${fmtCaja(c.stats.caja)}</div></div></button>`;
    }).join('')}</div>${disclaimer()}</div>`;
}

/* ---------- editor de escudo ---------- */
function swatches(campo, actual, pool, contra){
  return `<div class="sws" role="group">${pool.map(c => {
    const ilegal = contra && esMetal(c) === esMetal(contra);
    const nom = t('tint.' + c) + (ilegal ? t('crear.ilegible') : '');
    return `<button class="sw ${actual === c ? 'on' : ''} ${ilegal ? 'off' : ''}" style="background:${TINCTURE_HEX[c]}" title="${esc(nom)}" aria-label="${esc(nom)}" aria-pressed="${actual === c}" ${ilegal ? 'disabled' : ''} data-act="tint" data-k="${campo}" data-v="${c}"></button>`;
  }).join('')}</div>`;
}
function poolColores(){
  const p = paisPorCode(ui.cfg.pais);
  return (ui.cfg.modo === 'pais' && p) ? p.paletaBandera : ALL_TINCTURES;
}
function listaPaises(){
  const q = ui.cfg.busqueda.trim().toLowerCase();
  const l = PAISES.filter(p => !q || nombrePais(p.code).toLowerCase().includes(q) || p.nombre.toLowerCase().includes(q) || p.code.toLowerCase() === q).sort((a, b) => nombrePais(a.code).localeCompare(nombrePais(b.code), localeActual())).slice(0, 40);
  return l.map(p => `<button class="pais ${p.code === ui.cfg.pais ? 'on' : ''}" data-act="pais" data-v="${p.code}" aria-pressed="${p.code === ui.cfg.pais}">${bandera(p.code)} ${esc(nombrePais(p.code))}</button>`).join('') || `<span class="mut">${esc(t('crear.sinresultados'))}</span>`;
}
function gridCargas(){
  const cfg = ui.cfg, c = cfg.crest;
  const tip = cargasSugeridasPorPais(cfg.pais);
  const gen = CHARGES.map(id => ({ id, nombre: chargeLabel(id), categoria:'generica' }));
  const tabs = tabsHtml([['tipicas', '★ ' + bandera(cfg.pais) + ' ' + esc(nombrePais(cfg.pais))], ['gen', esc(t('crear.genericas'))]], cfg.tabCarga, 'tabCarga', true);
  const lista = cfg.tabCarga === 'tipicas' ? tip : gen;
  const items = lista.map(s => {
    const ch = { ...c, chargeId: s.id, chargeTincture: CHARGE_NATURAL[s.id] ? null : (c.chargeTincture || 'negro'), monograma: iniciales(cfg.nombre) };
    return `<button class="carga ${c.chargeId === s.id ? 'on' : ''}" data-act="carga" data-v="${s.id}" title="${esc(s.nombre)}" aria-pressed="${c.chargeId === s.id}"><svg viewBox="20 40 120 110" aria-hidden="true">${chargeMarkup(s.id, '#e8e4d8', ch)}</svg><span>${esc(s.nombre)}${s.verificado === false ? ' ·' : ''}</span></button>`;
  }).join('');
  return `<div class="label">${esc(t('crear.carga'))}</div>${tabs}<div class="cargas">${items}</div>`;
}
function tamanosHtml(c){
  return `<div class="tamanos" aria-hidden="true"><span class="mut">${esc(t('crear.tamanos'))}</span>${[20, 32, 48].map(px => `<span class="px" style="width:${px}px">${buildCrestSVG({ ...c, nombre: null, lema: null })}</span>`).join('')}</div>`;
}
function sugerenciasHtml(){
  if(!ui.sugerencias) return '';
  return `<div class="label">${esc(t('crear.sugerencias.titulo'))}</div><div class="sugs">${ui.sugerencias.map((s, i) => `<button class="sug" data-act="usarSug" data-v="${i}" aria-label="${esc(t('a11y.escudo', { desc: descripcionEscudo(s) }))}">${crestSvg(s, 'sm')}</button>`).join('')}</div>`;
}
function pantallaCrear(){
  const cfg = ui.cfg, c = cfg.crest;
  const pais = nombrePais(cfg.pais);
  const pool = poolColores();
  const contraOrd = c.fieldTincture;
  const contraCarga = (c.ordinaryId !== 'ninguna') ? c.ordinaryTincture : c.fieldTincture;
  const shapes = SHAPES.map(id => `<button class="shape ${c.shapeId === id ? 'on' : ''}" data-act="forma" data-v="${id}" title="${esc(t('shape.' + id))}" aria-label="${esc(t('shape.' + id))}" aria-pressed="${c.shapeId === id}"><svg viewBox="-6 -6 172 212" aria-hidden="true"><path d="${shapePath(id)}" fill="#e8e4d8" stroke="#555" stroke-width="4"/></svg></button>`).join('');
  const cr = crestDelCfg();
  return `<div class="screen">
    <div class="top"><button class="btn ghost sm" data-act="irInicio">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('crear.titulo'))}</h2></div>
    <div class="preview">${crestSvg(cr, 'lg')}${tamanosHtml(cr)}<div id="avisoBloqueo" class="aviso ${cfg.aviso ? 'show' : ''}" role="alert">${esc(t('crear.aviso'))}</div></div>
    <button class="btn" data-act="sorprender">${esc(t('crear.sorprender'))}</button>
    <button class="btn ghost" data-act="sugerir">${esc(t('crear.sugerencias'))}</button>
    ${sugerenciasHtml()}

    <label class="label" for="busqPais">${esc(t('crear.pais'))}</label>
    <input class="in" data-in="busqueda" id="busqPais" placeholder="${esc(t('crear.buscar'))}" value="${esc(cfg.busqueda)}" autocomplete="off">
    <div class="paises" id="listaPaises">${listaPaises()}</div>

    <div class="label">${esc(t('crear.colores'))}</div>
    ${tabsHtml([['pais', esc(t('crear.coloresde', { pais: '' })) + bandera(cfg.pais) + ' ' + esc(pais)], ['libre', esc(t('crear.personalizado'))]], cfg.modo, 'modo', true)}

    <div class="label">${esc(t('crear.forma'))}</div><div class="shapes">${shapes}</div>
    <div class="label">${esc(t('crear.campo'))}</div>${swatches('fieldTincture', c.fieldTincture, pool, null)}
    <div class="label">${esc(t('crear.division'))}</div>
    ${selectHtml('divisionId', DIVISIONS.map(d => [d, t('div.' + d)]), c.divisionId, t('crear.division'))}
    ${c.divisionId !== 'ninguna' ? swatches('divisionTincture2', c.divisionTincture2, pool, null) : ''}
    <div class="label">${esc(t('crear.ordinaria'))}</div>
    ${selectHtml('ordinaryId', ORDINARIES.map(d => [d, t('ord.' + d)]), c.ordinaryId, t('crear.ordinaria'))}
    ${c.ordinaryId !== 'ninguna' ? swatches('ordinaryTincture', c.ordinaryTincture, pool, contraOrd) : ''}
    ${gridCargas()}
    ${CHARGE_NATURAL[c.chargeId] ? `<div class="mut">${esc(t('crear.alnatural'))}</div>` : swatches('chargeTincture', c.chargeTincture, pool, contraCarga)}

    <div class="label">${esc(t('crear.cinta'))}</div>
    ${selectHtml('cinta', [['ninguna', t('crear.cinta.ninguna')], ['nombre', t('crear.cinta.nombre')], ['lema', t('crear.cinta.lema')]], c.cinta || 'ninguna', t('crear.cinta'))}
    ${c.cinta === 'lema' ? selectHtml('lema', LEMAS_INVENTADOS.map(l => [l, l]), c.lema || LEMAS_INVENTADOS[0], t('crear.cinta.lema')) : ''}
    ${c.cinta && c.cinta !== 'ninguna' ? selectHtml('ribbonStyle', [0,1,2,3].map(n => [n, t('crear.cinta.estilo', { n: n + 1 })]), c.ribbonStyle || 0, t('crear.cinta')) : ''}
    <label class="label" for="inAnio">${esc(t('crear.anio'))}</label>
    <input class="in" id="inAnio" data-in="anio" maxlength="4" inputmode="numeric" placeholder="${esc(t('crear.anio.ph'))}" value="${esc(c.anio || '')}">
    <div class="row"><div><div class="label">${esc(t('crear.estrellas'))}</div>${selectHtml('stars', [0,1,2,3,4,5].map(n => [n, n + ' ★']), c.stars || 0, t('crear.estrellas'))}</div>
    <div><div class="label">${esc(t('crear.ornamento'))}</div>${selectHtml('ornamento', [['', t('crear.orn.ninguno')], ['corona', t('crear.orn.corona')], ['laurel', t('crear.orn.laurel')]], c.ornamento || '', t('crear.ornamento'))}</div></div>

    <div class="label">${esc(t('crear.camiseta'))}</div>
    <div class="center">${camisetaSvg(cr, 'sm2', cfg.nombre.trim())}</div>

    <div class="label">${esc(t('crear.datos'))}</div>
    <input class="in" data-in="nombre" maxlength="22" placeholder="${esc(t('crear.nombre.ph'))}" aria-label="${esc(t('crear.nombre.ph'))}" value="${esc(cfg.nombre)}">
    <input class="in" data-in="ciudad" maxlength="30" placeholder="${esc(t('crear.ciudad.ph'))}" aria-label="${esc(t('crear.ciudad.ph'))}" value="${esc(cfg.ciudad)}">
    <div class="label">${esc(t('crear.fama'))}</div>
    ${tabsHtml(['facil','medio','dificil'].map(d => [d, esc(difLabel(d))]), cfg.dif, 'difCfg')}
    <p class="mut">${esc(t('difd.' + cfg.dif))}</p>
    <button class="btn primary" data-act="confirmarClub" ${cfg.nombre.trim().length < 2 ? 'disabled' : ''} id="btnConfirmarClub">${esc(t('crear.fundar'))}</button>
    ${disclaimer()}</div>`;
}

/* ---------- director técnico ---------- */
function dtCard(d, act, idx, etiqueta){
  return `<div class="club-card static dtcard"><div class="player-avatar" aria-hidden="true">🧢</div><div class="grow"><b>${esc(d.nombre)}</b>
    <div class="mut">${esc(t('dt.estilo.' + d.estilo))} · ${esc(t('dt.nivel', { n: d.rating }))} · ${esc(t('dt.sueldo', { n: fmtCaja(d.sueldo) }))}</div>
    <div class="mut">${esc(t('dt.estilo.' + d.estilo + '.d'))}</div></div>
    <button class="btn sm primary" data-act="${act}" data-v="${idx}">${esc(etiqueta)}</button></div>`;
}
function pantallaDT(){
  return `<div class="screen"><div class="top"><h2 tabindex="-1">${esc(t('dt.titulo'))}</h2></div>
    <p class="mut">${esc(t('dt.desc'))}</p>
    <div class="list">${ui.dts.map((d, i) => dtCard(d, 'contratarDT', i, t('dt.contratar'))).join('')}</div></div>`;
}

/* ---------- formación ---------- */
function pantallaFormacion(){
  const tt = state.titulares;
  const slots = SLOTS.map(s => {
    const j = jugadorPorNombre(state.plantel, tt[s.id]);
    const aria = j ? t('form.puesto', { pos: t('pos.' + s.pos), jugador: j.nombreCompleto }) : t('form.puesto.vacio', { pos: t('pos.' + s.pos) });
    return `<button class="slot ${ui.slotAbierto === s.id ? 'sel' : ''}" style="left:${s.x}%;top:${s.y}%" data-act="slot" data-v="${s.id}" aria-label="${esc(aria)}" aria-pressed="${ui.slotAbierto === s.id}"><span class="player-avatar" aria-hidden="true">${j ? j.dorsal : '+'}</span><small aria-hidden="true">${j ? esc(j.apellido) : s.pos}</small></button>`;
  }).join('');
  let panel = '';
  if(ui.slotAbierto){
    const s = SLOTS.find(x => x.id === ui.slotAbierto);
    const ocupados = new Set(Object.entries(tt).filter(([k, v]) => k !== s.id && v).map(([, v]) => v));
    const cand = state.plantel.filter(j => j.pos === s.pos).sort((a,b) => b.rating - a.rating);
    panel = `<div class="panel"><b>${esc(t('form.elegi', { pos: t('pos.' + s.pos).toLowerCase() }))}</b>${cand.map(j => `<button class="club-card" data-act="asignar" data-v="${esc(j.nombreCompleto)}">${playerChip(j)}${ocupados.has(j.nombreCompleto) ? `<span class="mut">${esc(t('form.yatitular'))}</span>` : ''}</button>`).join('')}
      <button class="btn ghost sm" data-act="quitarSlot">${esc(t('form.vacio'))}</button></div>`;
  }
  const ok = formacionCompleta(tt);
  const avg = Math.round(ratingTitulares(state.plantel, tt));
  return `<div class="screen">
    <div class="top"><h2 tabindex="-1">${esc(t('form.titulo'))}</h2></div>
    <p class="mut">${esc(t('form.ayuda'))}</p>
    <div class="pitch" role="group" aria-label="${esc(t('form.cancha'))}">${slots}</div>
    <div class="center"><b>${esc(t('form.rating', { n: avg }))}</b></div>
    ${panel}
    <button class="btn" data-act="autoFormacion">${esc(t('form.auto'))}</button>
    <button class="btn primary" data-act="confirmarFormacion" ${ok ? '' : 'disabled'}>${esc(ui.volverA === 'evento' ? t('form.guardar') : t('form.confirmar'))}</button>
  </div>`;
}
function pantallaPresupuesto(){
  return `<div class="screen center">
    <div class="mut">${esc(t('presup.temporada', { n: state.temporada }))}</div>
    <h2 tabindex="-1">${esc(t('presup.titulo'))}</h2>
    <div class="big">${fmtCaja(state.stats.caja)}</div>
    <div class="nota">${esc(t('presup.objetivo', { texto: objetivo().texto }))}</div>
    <p class="mut">${esc(t('presup.desc'))}</p>
    <div class="center">${camisetaSvg(state.club.crest, 'sm2', state.club.nombre)}</div>
    <button class="btn" data-act="irClub">${esc(t('presup.club'))}</button>
    <button class="btn" data-act="irMercado">${esc(t('presup.mercado'))}</button>
    <button class="btn" data-act="irPlantel">${esc(t('presup.plantel'))}</button>
    <button class="btn primary" data-act="arrancar">${esc(t('presup.arrancar'))}</button>
  </div>`;
}

/* ---------- plantel / mercado ---------- */
function filaJugador(j){
  const tit = Object.values(state.titulares).includes(j.nombreCompleto);
  const g = state.goles[j.nombreCompleto];
  return `<div class="club-card static">${playerChip(j, `<div class="tags">${state.capitan === j.nombreCompleto ? '<span class="badge">C</span>' : ''}${tit ? '<span class="badge on">XI</span>' : ''}</div>`)}
    <div class="mut">${esc(t('plantel.contrato', { n: Math.max(0, j.contrato) }))}${g ? ' · ' + esc(t('plantel.goles', { n: g })) : ''}</div></div>`;
}
function pantallaPlantel(){
  const ord = ['ARQ','DEF','MED','DEL'];
  const lista = state.plantel.slice().sort((a,b) => ord.indexOf(a.pos) - ord.indexOf(b.pos) || b.rating - a.rating);
  return `<div class="screen">${hud()}<div class="top"><button class="btn ghost sm" data-act="volver">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('plantel.titulo', { n: lista.length }))}</h2></div>
    <div class="list">${lista.map(j => filaJugador(j)).join('')}</div></div>`;
}
function pantallaMercado(){
  if(!ui.mercado.length) ui.mercado = generarCandidatosMercado(state.rng, state.club, 6);
  const lleno = state.plantel.length >= 26;
  const items = ui.mercado.map((j, i) => {
    const precio = precioJugador(j);
    const puede = state.stats.caja >= precio && !lleno;
    return `<div class="club-card static ${puede ? '' : 'dim'}">${playerChip(j)}<div class="buy"><b>${fmtCaja(precio)}</b><button class="btn sm primary" data-act="comprar" data-v="${i}" ${puede ? '' : 'disabled'}>${esc(t('mercado.comprar'))}</button></div>
      ${j.cualidad ? `<div class="mut">${esc(t('qd.' + j.cualidad))}</div>` : ''}</div>`;
  }).join('');
  return `<div class="screen">${hud()}<div class="top"><button class="btn ghost sm" data-act="volver">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('mercado.titulo'))}</h2></div>
    <p class="mut">${esc(lleno ? t('mercado.lleno') : t('mercado.ayuda'))}</p>
    <div class="list">${items || `<p class="mut">${esc(t('mercado.sin'))}</p>`}</div>
    <button class="btn" data-act="actualizarMercado">${esc(t('mercado.actualizar'))}</button></div>`;
}

/* ---------- evento / resultado ---------- */
function tagsOpcion(o){
  const tg = [];
  if(o.azar) tg.push(t('tag.riesgo'));
  const vende = o.vende || (o.azar && (o.azar.ok.vende || o.azar.mal.vende));
  const ficha = o.ficha || (o.azar && (o.azar.ok.ficha || o.azar.mal.ficha));
  if(vende) tg.push(t('tag.sale'));
  if(ficha) tg.push(t('tag.llega'));
  return tg.length ? ' ' + tg.map(x => `<em class="tag">${x}</em>`).join('') : '';
}
function pantallaEvento(){
  const ev = eventoActual();
  if(!state.ctx) state.ctx = ctxParaEvento(ev);
  const ctx = state.ctx;
  return `<div class="screen">${hud()}
    <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${state.eventos.length}" aria-valuenow="${state.idx}"><div style="width:${(state.idx / state.eventos.length) * 100}%"></div></div>
    <div class="mut center">${esc(t('evento.n', { n: state.idx + 1, total: state.eventos.length }))} · ${esc(t('cat.' + ev.cat))} · 🎯 ${esc(objetivo().cumplido ? t('evento.objok') : t('evento.objmal'))} · 📊 ${ordinal(miPuesto())}</div>
    <h2 tabindex="-1">${esc(sustituirTexto(ev.titulo, ctx))}</h2>
    ${playerChip(ctx.jugador)}
    <p class="ctx">${esc(sustituirTexto(ev.contexto, ctx))}</p>
    <div class="list">${ev.opciones.map((o, i) => `<button class="opt" data-act="opcion" data-v="${i}"><b>${esc(sustituirTexto(o.texto, ctx))}</b><span>${esc(sustituirTexto(o.sub || '', ctx))}${tagsOpcion(o)}</span></button>`).join('')}</div>
    <div class="rowbtn"><button class="btn ghost sm" data-act="irPlantel">${esc(t('btn.plantel'))}</button><button class="btn ghost sm" data-act="irMercado">${esc(t('btn.mercado'))}</button><button class="btn ghost sm" data-act="irFormacion">${esc(t('btn.formacion'))}</button><button class="btn ghost sm" data-act="irTabla">${esc(t('btn.tabla'))}</button><button class="btn ghost sm" data-act="irClub">${esc(t('btn.club'))}</button></div>
  </div>`;
}
function pantallaResultado(){
  const r = state.resultado, d = r.d;
  const hinchada = d.gestion > 2 ? ['😀', t('res.hinchada.bien')] : d.gestion < -2 ? ['😠', t('res.hinchada.mal')] : ['😐', t('res.hinchada.neutra')];
  const prensa = d.prensa > 2 ? ['👍', t('res.prensa.bien')] : d.prensa < -2 ? ['👎', t('res.prensa.mal')] : ['📄', t('res.prensa.neutra')];
  const warn = state.stats.caja < 0 ? `<div class="aviso show" role="alert">${esc(t('res.cajaRojo'))}</div>` : '';
  const fin = state.fin ? `<div class="aviso show" role="alert">${esc(t('res.fin.' + state.fin))}</div>` : '';
  return `<div class="screen" id="pantallaResultado">${hud()}
    <div class="reac"><div><span aria-hidden="true">${hinchada[0]}</span><small>${esc(hinchada[1])}</small></div><div><span aria-hidden="true">${prensa[0]}</span><small>${esc(prensa[1])}</small></div></div>
    <p class="ctx" tabindex="-1" id="resMsg">${esc(r.msg)}</p>
    <div class="chips">${chipDelta('gestion', d.gestion)}${chipDelta('prensa', d.prensa)}${chipDelta('resultado', d.resultado)}${chipDelta('caja', d.caja)}${chipDelta('vestuario', d.vestuario)}</div>
    ${r.notas.map(n => `<div class="nota">${esc(n)}</div>`).join('')}${warn}${fin}
    <button class="btn primary" data-act="siguiente">${esc(state.fin || state.idx + 1 >= state.eventos.length ? t('res.cierre') : t('res.siguiente'))}</button>
  </div>`;
}

/* ---------- tabla ---------- */
function tablaHtml(){
  const filas = tablaLiga();
  return `<div class="tabla" role="table">${filas.map(f => `<div class="trow ${f.yo ? 'yo' : ''} ${zonaLiga(f.pos)}" role="row"><span class="tp">${f.pos}</span><span class="tn">${f.yo ? '⭐ ' : ''}${esc(f.nombre)}</span><b>${f.pts}</b></div>`).join('')}</div>
    <div class="mut center">${esc(t('tabla.leyenda'))}</div>`;
}
function pantallaTabla(){
  const pos = miPuesto();
  return `<div class="screen">${hud()}<div class="top"><button class="btn ghost sm" data-act="volver">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('tabla.titulo'))}</h2></div>
    <p class="mut">${esc(t('tabla.texto', { f: state.partidos.length, total: FECHAS, pos: ordinal(pos), zona: t('zona.' + zonaLiga(pos)) }))}</p>
    ${tablaHtml()}
    <button class="btn" data-act="irPartidos">${esc(t('tabla.partidos'))}</button></div>`;
}

/* ---------- cierre ---------- */
function pantallaDiario(){
  const tt = tresTitulares();
  const notas = state.notasCierre || [];
  return `<div class="screen"><div class="diario"><div class="cab">${esc(t('diario.cab'))}</div>
    ${tt.map(x => `<div class="tit ${x.bueno ? 'bien' : 'mal'}"><span aria-hidden="true">${x.bueno ? '▲' : '▼'}</span> ${esc(x.texto)}</div>`).join('') || `<div class="tit">${esc(t('diario.nada'))}</div>`}</div>
    ${notas.map(n => `<div class="nota">${esc(n)}</div>`).join('')}
    <button class="btn primary" data-act="irFinal">${esc(t('diario.ver'))}</button></div>`;
}
function logrosHtml(){
  const L = logros();
  if(!L.length) return '';
  return `<div class="logros">${L.map(([ic, tt, d]) => `<div class="logro"><span aria-hidden="true">${ic}</span><div><b>${esc(tt)}</b><small>${esc(d)}</small></div></div>`).join('')}</div>`;
}
function carreraHtml(){
  const c = state.carrera;
  if(state.temporada <= 1 && !c.temporadas.length) return '';
  const filas = c.temporadas.map(x => `<div class="hrow"><span>${esc(t('car.fila', { n: x.n, puesto: ordinal(x.puesto), titulo: x.titulo }))}</span><span class="mut">${x.score}</span></div>`).join('');
  return `<div class="hist"><b>${esc(t('car.titulo'))}</b>${filas}<div class="mut">${esc(t('car.resumen', { n: c.temporadas.length, titulos: c.titulos, copas: c.copas }))}</div></div>`;
}
function pantallaFinal(){
  const v = veredicto(), s = state.stats;
  const g = goleadorDelEquipo();
  const copa = state.copa.estado;
  return `<div class="screen center">
    <div class="mut">${esc(t('car.temporada', { n: state.temporada }))}</div>
    ${crestSvg(state.club.crest, 'lg anim')}
    <h2 tabindex="-1">${esc(state.club.nombre)}</h2><div class="mut">${bandera(state.club.paisCode)} ${esc(difLabel(state.club.dif))}</div>
    <h1 class="verd">${esc(v.titulo)}</h1>
    <p>${esc(v.texto)}</p>${v.extra ? `<p class="mut">${esc(v.extra)}</p>` : ''}
    <div class="final-stats"><div><b>${signo(s.resultado)}</b><small>${esc(t('hud.resultado'))}</small></div><div><b>${Math.round(s.gestion)}</b><small>${esc(t('hud.gestion'))}</small></div><div><b>${Math.round(s.prensa)}</b><small>${esc(t('hud.prensa'))}</small></div><div><b>${fmtCaja(s.caja)}</b><small>${esc(t('hud.caja'))}</small></div><div><b>${Math.round(s.vestuario)}</b><small>${esc(t('hud.vestuario'))}</small></div></div>
    <div class="nota">${esc(t('final.objetivo', { texto: objetivo().texto }))} <b>${esc(state.fin ? t('final.nocumplido') : objetivo().cumplido ? t('final.cumplido') : t('final.nocumplido'))}</b></div>
    ${g ? `<div class="nota">${esc(t('final.goleador', { jugador: g.nombre, n: g.goles }))}</div>` : ''}
    <div class="nota">${esc(t('final.copa', { estado: t('copa.estado.' + copa) }))}</div>
    <h3 class="sub">${esc(t('final.camiseta'))}</h3>${camisetaSvg(state.club.crest, 'sm2', state.club.nombre)}
    <h3 class="sub">${esc(t('tabla.final'))}</h3>${tablaHtml()}
    ${logrosHtml()}
    ${carreraHtml()}
    <button class="btn primary" data-act="compartir">${esc(t('final.compartir'))}</button>
    <button class="btn" data-act="descargarTarjeta">${esc(t('final.descargar'))}</button>
    ${state.fin ? '' : `<button class="btn primary" data-act="proxTemporada">${esc(t('final.siguiente', { n: state.temporada + 1 }))}</button>`}
    <button class="btn" data-act="irInicio">${esc(t('final.jugar'))}</button>
    ${disclaimer()}</div>`;
}

/* ---------- panel de ajustes y accesibilidad ---------- */
function panelHtml(){
  const fsNames = ['a11y.letra.chica', 'a11y.letra.normal', 'a11y.letra.grande', 'a11y.letra.xl'];
  const fsItems = [0, 1, 2, 3].map(i => `<button class="tab ${A11Y.fs === i ? 'on' : ''}" data-act="fs" data-v="${i}" aria-pressed="${A11Y.fs === i}">${esc(t(fsNames[i]))}</button>`).join('');
  const sw = (act, on, label) => `<button class="switch ${on ? 'on' : ''}" role="switch" aria-checked="${!!on}" data-act="${act}"><span>${esc(label)}</span><b>${esc(on ? t('a11y.on') : t('a11y.off'))}</b></button>`;
  return `<div class="overlay" id="overlay" data-act="cerrarAjustes"><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlgTit">
    <h2 id="dlgTit" tabindex="-1">${esc(t('a11y.titulo'))}</h2>
    <div class="label">${esc(t('a11y.idioma'))}</div>${idiomasHtml()}
    <div class="label">${esc(t('a11y.tamano'))}</div><div class="tabs sm">${fsItems}</div>
    ${sw('toggleContraste', A11Y.hc, t('a11y.contraste'))}
    ${sw('toggleMovimiento', A11Y.rm, t('a11y.movimiento'))}
    ${sw('toggleSonido', SFX.on, t('a11y.sonido'))}
    <button class="btn primary" data-act="cerrarAjustes" id="btnCerrarAjustes">${esc(t('a11y.cerrar'))}</button>
  </div></div>`;
}

const PANTALLAS = {
  inicio: pantallaInicio, elegir: pantallaElegir, crear: pantallaCrear, dt: pantallaDT, formacion: pantallaFormacion,
  presupuesto: pantallaPresupuesto, plantel: pantallaPlantel, mercado: pantallaMercado,
  evento: pantallaEvento, resultado: pantallaResultado, diario: pantallaDiario, final: pantallaFinal, tabla: pantallaTabla,
};
Object.assign(PANTALLAS, typeof PANTALLAS_EXTRA !== 'undefined' ? PANTALLAS_EXTRA : {});

let _pantallaPrevia = null;
function render(){
  const cambio = _pantallaPrevia !== ui.screen;
  app.dataset.screen = ui.screen;
  app.innerHTML = `<button class="ajustes" data-act="abrirAjustes" aria-label="${esc(t('a11y.abrir'))}" title="${esc(t('a11y.abrir'))}">⚙</button>` + PANTALLAS[ui.screen]() + (ui.panel ? panelHtml() : '');
  const skip = document.getElementById('skipLink'); if(skip) skip.textContent = t('a11y.saltar');
  if(cambio){
    window.scrollTo(0, 0);
    _pantallaPrevia = ui.screen;
    if(ui.screen === 'resultado' && state && state.resultado) anunciar(state.resultado.msg);
    else anunciar(t('a11y.pantalla', { nombre: t('pantalla.' + ui.screen) }));
    const h = app.querySelector('h1,h2'); if(h && !ui.panel) h.focus({ preventScroll: true });
  }
  if(ui.panel){ const b = document.getElementById('dlgTit'); if(b) b.focus({ preventScroll: true }); }
  if(ui.screen === 'resultado' && state && state.resultado) flashHud(state.resultado.antes);
}
function refrescarPreviewCrear(){
  const p = document.querySelector('.preview');
  if(p){
    const cr = crestDelCfg();
    p.innerHTML = crestSvg(cr, 'lg') + tamanosHtml(cr) + `<div id="avisoBloqueo" class="aviso ${ui.cfg.aviso ? 'show' : ''}" role="alert">${esc(t('crear.aviso'))}</div>`;
  }
}

/* ---------- tarjeta descargable y compartir ---------- */
function urlDelJuego(){
  return /^https?:$/.test(location.protocol) ? location.origin + location.pathname.replace(/index\.html$|volvete-dirigente\.html$/, '') : '';
}
function lineasAjustadas(g, texto, maxW){
  const out = []; let linea = '';
  texto.split(' ').forEach(w => {
    const tt = linea ? linea + ' ' + w : w;
    if(g.measureText(tt).width > maxW && linea){ out.push(linea); linea = w; } else linea = tt;
  });
  if(linea) out.push(linea);
  return out;
}
function cargarImagenSvg(svg, cb){
  const img = new Image();
  img.onload = () => cb(img);
  img.onerror = () => cb(null);
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function tarjetaCanvas(cb){
  const v = veredicto(), s = state.stats, c = state.club, ob = objetivo();
  const W = 1080, H = 1350;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, H); grad.addColorStop(0, '#171b22'); grad.addColorStop(1, '#0b0e13');
  g.fillStyle = grad; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#d8b45a'; g.lineWidth = 6; g.strokeRect(30, 30, W - 60, H - 60);
  g.textAlign = 'center';
  const txt = (tt, y, size, color, w) => { g.fillStyle = color; g.font = (w || '700') + ' ' + size + 'px Georgia, serif'; g.fillText(tt, W/2, y); };
  txt(t('app.titulo').toUpperCase(), 100, 40, '#d8b45a', '900');
  const svgE = buildCrestSVG(c.crest).replace('<svg ', '<svg width="330" height="528" ');
  const svgC = buildCamisetaSVG(c.crest, { nombre: c.nombre }).replace('<svg ', '<svg width="240" height="252" ');
  cargarImagenSvg(svgE, imgE => cargarImagenSvg(svgC, imgC => {
    if(imgE) g.drawImage(imgE, W/2 - 165, 125, 330, 528);
    if(imgC) g.drawImage(imgC, 50, 280, 240, 252);
    g.textAlign = 'left'; g.fillStyle = '#9aa3b2'; g.font = '700 26px Georgia';
    const G = goleadorDelEquipo();
    const lineas = [t('card.temporada', { n: state.temporada }), G ? '⚽ ' + G.nombre.split(' ').slice(-1)[0] + ' (' + G.goles + ')' : '', '🏆 ' + t('copa.estado.' + state.copa.estado)];
    lineas.forEach((l, i) => { if(l) g.fillText(l.length > 22 ? l.slice(0, 21) + '…' : l, 740, 320 + i * 44); });
    g.textAlign = 'center';
    txt(c.nombre, 718, 58, '#e8e4d8', '900');
    txt(difLabel(c.dif) + ' · ' + nombrePais(c.paisCode), 762, 30, '#9aa3b2', '400');
    txt(v.titulo, 830, 50, '#d8b45a', '900');
    const pos = v.puesto, zona = state.fin ? t('ver.interrumpido') : t('zona.' + zonaLiga(pos));
    txt((state.fin ? '' : t('card.cerre', { pos: ordinal(pos), n: LIGA_N }) + ' · ') + zona, 880, 32, '#e8e4d8', '700');
    const cumple = !state.fin && ob.cumplido;
    txt('🎯 ' + (cumple ? t('card.objok') : t('card.objno')) + ' · ' + t('card.puntaje', { n: v.score }), 926, 30, cumple ? '#3ddc84' : '#e5534b', '700');
    const stats = [['resultado', signo(s.resultado)], ['gestion', Math.round(s.gestion)], ['prensa', Math.round(s.prensa)], ['caja', fmtCaja(s.caja)], ['vestuario', Math.round(s.vestuario)]];
    stats.forEach(([k, val], i) => {
      const x = 140 + i * 200;
      g.fillStyle = '#e8e4d8'; g.font = '900 44px Georgia'; g.fillText(String(val), x, 1002);
      g.fillStyle = '#9aa3b2'; g.font = '400 24px Georgia'; g.fillText(t('hud.' + k), x, 1036);
    });
    g.textAlign = 'left';
    let y = 1096;
    tresTitulares().slice(0, 2).forEach(tt => {
      g.font = '700 27px Georgia'; g.fillStyle = tt.bueno ? '#7ddf9c' : '#f08a84';
      lineasAjustadas(g, (tt.bueno ? '▲ ' : '▼ ') + tt.texto, W - 160).slice(0, 2).forEach(l => { g.fillText(l, 80, y); y += 34; });
      y += 8;
    });
    g.textAlign = 'center';
    const url = urlDelJuego();
    txt(t('card.desafio'), 1262, 30, '#d8b45a', '700');
    txt(url ? url.replace(/^https?:\/\//, '') : t('card.ficcion'), 1300, 24, '#9aa3b2', '400');
    cb(cv);
  }));
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
  const url = urlDelJuego();
  const texto = t('share.texto', { club: state.club.nombre, titulo: v.titulo, score: v.score, puesto: state.fin ? '' : t('share.puesto', { pos: ordinal(v.puesto), n: LIGA_N }) }) + (url ? ' ' + url : '');
  const copiar = () => { try{ navigator.clipboard.writeText(texto); el.textContent = t('share.copiado'); }catch(e){ el.textContent = texto; } };
  if(!navigator.share){ copiar(); return; }
  tarjetaCanvas(cv => cv.toBlob(blob => {
    const file = blob ? new File([blob], 'volvete-dirigente.png', { type:'image/png' }) : null;
    const data = file && navigator.canShare && navigator.canShare({ files:[file] }) ? { text:texto, files:[file] } : { text:texto };
    navigator.share(data).catch(() => {});
  }, 'image/png'));
}

/* ---------- eventos de UI ---------- */
function setCrest(fn){ fn(ui.cfg.crest); normalizarTinturas(ui.cfg.crest); ui.cfg.aviso = false; render(); }
function cambiarIdioma(code){
  fijarIdioma(code);
  inicializarPool();
  reidiomarPartida();
  construirDiccionarioEs();
}
function onAct(act, v, el){
  if(typeof onActExtra === 'function' && onActExtra(act, v, el)) return;
  switch(act){
    case 'irInicio': ui.screen = 'inicio'; break;
    case 'irElegir': ui.screen = 'elegir'; break;
    case 'irCrear': ui.cfg = ui.cfg || nuevoCfg(); ui.cfg.crest.cinta = ui.cfg.crest.cinta || (ui.cfg.crest.lema ? 'lema' : 'ninguna'); ui.screen = 'crear'; break;
    case 'tab': ui.tab = v; break;
    case 'idioma': cambiarIdioma(v); break;
    case 'abrirAjustes': ui.panel = true; break;
    case 'cerrarAjustes': ui.panel = false; break;
    case 'fs': A11Y.fs = Number(v); aplicarA11y(); break;
    case 'toggleContraste': A11Y.hc = !A11Y.hc; aplicarA11y(); break;
    case 'toggleMovimiento': A11Y.rm = !A11Y.rm; aplicarA11y(); break;
    case 'elegirClub': {
      const c = CLUBES[Number(v)];
      iniciarPartida({ nombre:c.nombre, ciudad:'', paisCode:c.paisCode, dif:c.dif, stats:c.stats, crest:c.crest }, leerSeed());
      break; }
    case 'sorprender': {
      const cinta = ui.cfg.crest.cinta;
      ui.cfg.crest = randomCrest(ui.cfg.pais, Math.random, { modo: ui.cfg.modo });
      ui.cfg.crest.cinta = ui.cfg.crest.lema ? 'lema' : (cinta || 'ninguna');
      ui.cfg.aviso = false; ui.sugerencias = null; break; }
    case 'sugerir': {
      ui.sugerencias = [0, 1, 2].map(() => { const x = randomCrest(ui.cfg.pais, Math.random, { modo: ui.cfg.modo }); x.cinta = ui.cfg.crest.cinta || 'ninguna'; x.monograma = iniciales(ui.cfg.nombre); if(x.cinta === 'nombre') x.nombre = ui.cfg.nombre || null; if(x.cinta === 'ninguna') x.lema = null; return x; });
      break; }
    case 'usarSug': { const s = ui.sugerencias[Number(v)]; const cinta = ui.cfg.crest.cinta; ui.cfg.crest = { ...s, cinta }; ui.cfg.aviso = false; break; }
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
    case 'tint': setCrest(c => { c[el.dataset.k] = v; }); return;
    case 'carga': setCrest(c => { c.chargeId = v; if(CHARGE_NATURAL[v]) c.chargeTincture = null; }); return;
    case 'tabCarga': ui.cfg.tabCarga = v; break;
    case 'difCfg': ui.cfg.dif = v; break;
    case 'confirmarClub': {
      const cr = crestDelCfg();
      if(matchesBloqueo(cr)){ ui.cfg.aviso = true; break; }
      iniciarPartida({ nombre: ui.cfg.nombre.trim(), ciudad: ui.cfg.ciudad.trim(), paisCode: ui.cfg.pais, dif: ui.cfg.dif,
        stats: statsIniciales(ui.cfg.dif, mulberry32(hashStr(ui.cfg.nombre))), crest: { ...cr, nombre: cr.nombre || null } }, leerSeed());
      break; }
    case 'contratarDT': state.dt = ui.dts[Number(v)]; ui.screen = 'formacion'; ui.volverA = 'presupuesto'; break;
    case 'slot': ui.slotAbierto = ui.slotAbierto === v ? null : v; break;
    case 'asignar': {
      Object.keys(state.titulares).forEach(k => { if(state.titulares[k] === v) state.titulares[k] = null; });
      state.titulares[ui.slotAbierto] = v; ui.slotAbierto = null; break; }
    case 'quitarSlot': state.titulares[ui.slotAbierto] = null; ui.slotAbierto = null; break;
    case 'autoFormacion': state.titulares = formacionAutomatica(state.plantel); ui.slotAbierto = null; break;
    case 'confirmarFormacion': ui.slotAbierto = null; ui.screen = ui.volverA; break;
    case 'irMercado': ui.volverA = ui.screen === 'presupuesto' ? 'presupuesto' : ui.screen === 'invierno' ? 'invierno' : 'evento'; ui.screen = 'mercado'; break;
    case 'irPlantel': ui.volverA = ui.screen === 'presupuesto' ? 'presupuesto' : 'evento'; ui.screen = 'plantel'; break;
    case 'irFormacion': ui.volverA = 'evento'; ui.screen = 'formacion'; break;
    case 'irTabla': ui.volverA = 'evento'; ui.screen = 'tabla'; break;
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
    case 'proxTemporada': proximaTemporada(); break;
    case 'toggleSonido': toggleSonido(); break;
    case 'compartir': compartir(el); return;
    case 'descargarTarjeta': descargarTarjeta(); return;
  }
  render();
}
function leerSeed(){
  const n = Number(String(ui.seed || '').replace(/\D/g, ''));
  ui.seed = null;
  return n > 0 ? n : Math.floor(Math.random() * 1e9);
}
app.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if(!el || el.disabled) return;
  if(el.id === 'overlay' && e.target !== el) return;
  onAct(el.dataset.act, el.dataset.v, el);
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && ui.panel){ ui.panel = false; render(); const b = document.querySelector('.ajustes'); if(b) b.focus(); }
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
  fijarIdioma(detectarIdioma());
  construirDiccionarioEs();
  aplicarA11y();
  inicializarPool();
  render();
})();
