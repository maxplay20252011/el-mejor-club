/* ===================== Pantallas de club, sponsors, partidos, copa, invierno y renovaciones ===================== */

function jugadorOferta(of){ return jugadorPorNombre(state.plantel, of.jugador); }

function pantallaClub(){
  const e = state.estadio, dt = state.dt;
  const cuotas = ['popular', 'normal', 'premium'];
  const obras = precioObras(), cant = precioCantera();
  const sp = state.sponsor;
  const cambiando = ui.dts && ui.cambioDT;
  return `<div class="screen">${hud()}
    <div class="top"><button class="btn ghost sm" data-act="volver">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('club.titulo'))}</h2></div>

    <h3 class="sub">${esc(t('club.estadio'))}</h3>
    <div class="nota">${esc(t('club.aforo', { n: e.aforo }))} · ${esc(t('club.socios', { n: e.socios }))} · ${esc(t('club.ingreso', { n: fmtCaja(ingresoPorEvento()) }))}</div>
    <div class="label">${esc(t('club.cuota'))}</div>
    ${tabsHtml(cuotas.map(c => [c, esc(t('club.cuota.' + c))]), e.cuota, 'cuota', true)}
    <p class="mut">${esc(t('club.cuota.' + e.cuota + '.d'))}</p>
    <button class="btn" data-act="obras" ${state.stats.caja >= obras ? '' : 'disabled'}>${esc(t('club.obras', { precio: fmtCaja(obras) }))}</button>

    <h3 class="sub">${esc(t('club.cantera'))}</h3>
    <div class="nota">${esc(t('club.cantera.n', { n: state.cantera }))}</div>
    <p class="mut">${esc(t('club.cantera.d'))}</p>
    ${state.cantera < 3 ? `<button class="btn" data-act="canteraUp" ${state.stats.caja >= cant ? '' : 'disabled'}>${esc(t('club.cantera.sube', { precio: fmtCaja(cant) }))}</button>` : ''}

    <h3 class="sub">${esc(t('club.sponsor'))}</h3>
    ${sp ? `<div class="nota">${esc(t('club.sponsor.contrato', { marca: sp.marca, inicial: fmtCaja(sp.inicial), porEvento: fmtCaja(sp.porEvento) }))}<br><span class="mut">${esc(t('spon.' + sp.tipo + '.d'))}</span></div>`
        : `<div class="nota">${esc(t('club.sponsor.ninguno'))}</div><button class="btn" data-act="irSponsor">${esc(t('club.sponsor.elegir'))}</button>`}

    <h3 class="sub">${esc(t('club.dt'))}</h3>
    ${dt ? `<div class="nota">${esc(t('dt.actual', { nombre: dt.nombre, estilo: t('dt.estilo.' + dt.estilo), nivel: dt.rating }))}<br><span class="mut">${esc(t('dt.estilo.' + dt.estilo + '.d'))} ${esc(t('dt.sueldo', { n: fmtCaja(dt.sueldo) }))}</span></div>` : ''}
    ${cambiando ? `<div class="list">${ui.dts.map((d, i) => dtCard(d, 'hacerDT', i, t('dt.contratar'))).join('')}</div>`
      : `<button class="btn" data-act="cambiarDT" ${state.stats.caja >= precioCambioDT() ? '' : 'disabled'}>${esc(t('club.dt.cambiar', { precio: fmtCaja(precioCambioDT()) }))}</button>`}

    <h3 class="sub">${esc(t('club.camiseta'))}</h3>
    <div class="center">${camisetaSvg(state.club.crest, 'sm2', state.club.nombre)}</div>
    <button class="btn primary" data-act="volver">${esc(t('club.volver'))}</button>
  </div>`;
}

function pantallaSponsor(){
  if(!ui.sponsors) ui.sponsors = generarSponsors(state.rng, state.club.dif);
  return `<div class="screen"><div class="top"><button class="btn ghost sm" data-act="irClub">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('spon.titulo'))}</h2></div>
    <p class="mut">${esc(t('spon.desc'))}</p>
    <div class="list">${ui.sponsors.map((s, i) => `<div class="club-card static"><div class="grow"><b>${esc(s.marca)}</b> · ${esc(t('spon.' + s.tipo))}
      <div class="mut">${esc(t('spon.' + s.tipo + '.d'))}</div>
      <div class="mini">${esc(t('spon.ahora', { n: fmtCaja(s.inicial) }))} · ${esc(t('spon.poreventos', { n: fmtCaja(s.porEvento) }))}</div></div>
      <button class="btn sm primary" data-act="firmarSponsor" data-v="${i}">${esc(t('spon.firmar'))}</button></div>`).join('')}</div></div>`;
}

function pantallaPartidos(){
  const ps = state.partidos;
  const g = goleadorDelEquipo();
  const filas = ps.map(p => {
    const r = p.pts === 3 ? 'g' : p.pts === 1 ? 'e' : 'p';
    return `<div class="club-card static partido ${r}"><span class="res" aria-label="${esc(t('part.' + r))}">${esc(t('part.' + r))}</span>
      <div class="grow"><b>${esc(t('part.fecha', { n: p.f }))}: ${esc(state.club.nombre)} ${p.gf} - ${p.ga} ${esc(p.rival)}</b>${p.clasico ? ` <em class="tag">${esc(t('part.clasico'))}</em>` : ''}
      <div class="mut">${p.goles.length ? esc(t('part.goles', { lista: p.goles.map(n => n.split(' ').slice(-1)[0]).join(', ') })) : ''}</div></div>
      <b>${esc(t('part.pts', { n: p.pts }))}</b></div>`;
  }).join('');
  return `<div class="screen">${hud()}<div class="top"><button class="btn ghost sm" data-act="irTabla">${esc(t('btn.volver'))}</button><h2 tabindex="-1">${esc(t('part.titulo'))}</h2></div>
    ${g ? `<div class="nota">${esc(t('part.goleador', { jugador: g.nombre, n: g.goles }))}</div>` : ''}
    <div class="list">${filas || `<p class="mut">${esc(t('part.vacio'))}</p>`}</div></div>`;
}

function pantallaCopa(){
  const m = state.copaUltima, c = state.copa;
  const marcador = t('copa.partido', { club: state.club.nombre, a: m.gf, b: m.ga, rival: m.rival });
  return `<div class="screen center">${hud()}
    <div class="mut">🏆 ${esc(t('copa.titulo'))}</div>
    <h2 tabindex="-1">${esc(t('copa.ronda.' + m.ronda))}</h2>
    <div class="big small">${esc(marcador)}</div>
    ${m.pen ? `<div class="mut">${esc(t('copa.penales', { a: m.pen[0], b: m.pen[1] }))}</div>` : ''}
    <div class="${m.gano ? 'nota' : 'aviso show'}" role="status">${esc(m.gano ? (c.estado === 'campeon' ? t('copa.campeon') : t('copa.gana')) : t('copa.pierde'))}</div>
    ${m.premio ? `<div class="chips">${chipDelta('caja', m.premio)}</div><div class="mut">${esc(t('copa.premio', { n: fmtCaja(m.premio) }))}</div>` : ''}
    <button class="btn primary" data-act="copaSeguir">${esc(t('btn.continuar'))}</button></div>`;
}

function pantallaInvierno(){
  const inv = state.invierno;
  const lleno = state.plantel.length >= 26;
  const ofertas = inv.ofertas.map((o, i) => {
    const j = jugadorOferta(o);
    if(!j) return '';
    return `<div class="club-card static">${playerChip(j)}<div class="mut">${esc(t('inv.ofertaDe', { club: o.club, n: fmtCaja(o.precio), jugador: j.nombreCompleto }))}</div>
      <div class="buy"><button class="btn sm primary" data-act="invVender" data-v="${i}" ${state.plantel.length > 17 ? '' : 'disabled'}>${esc(t('inv.vender', { n: fmtCaja(o.precio) }))}</button><button class="btn sm ghost" data-act="invRechazar" data-v="${i}">${esc(t('inv.rechazar'))}</button></div></div>`;
  }).join('');
  const juv = inv.juveniles.map((j, i) => `<div class="club-card static">${playerChip(j)}<div class="buy"><button class="btn sm primary" data-act="invPromover" data-v="${i}" ${lleno ? 'disabled' : ''}>${esc(t('inv.promover'))}</button></div></div>`).join('');
  return `<div class="screen">${hud()}<div class="top"><h2 tabindex="-1">${esc(t('inv.titulo'))}</h2></div>
    <p class="mut">${esc(t('inv.desc'))}</p>
    ${inv.vendidos.map(n => `<div class="nota">${esc(n)}</div>`).join('')}
    <h3 class="sub">${esc(t('inv.ofertas'))}</h3>
    <div class="list">${ofertas.trim() ? ofertas : `<p class="mut">${esc(t('inv.sinofertas'))}</p>`}</div>
    <h3 class="sub">${esc(t('inv.juveniles'))}</h3>
    <div class="list">${juv || `<p class="mut">${esc(t('inv.sinjuveniles'))}</p>`}</div>
    <h3 class="sub">${esc(t('inv.dt'))}</h3>
    ${inv.dts ? `<div class="list">${inv.dts.map((d, i) => dtCard(d, 'invHacerDT', i, t('dt.contratar'))).join('')}</div>`
      : `<button class="btn" data-act="invDT" ${state.stats.caja >= precioCambioDT() ? '' : 'disabled'}>${esc(t('club.dt.cambiar', { precio: fmtCaja(precioCambioDT()) }))}</button>`}
    <button class="btn" data-act="irMercado">${esc(t('btn.mercado'))}</button>
    <button class="btn primary" data-act="invListo">${esc(t('inv.listo'))}</button></div>`;
}

function pantallaRenov(){
  const lista = vencenContrato();
  const filas = lista.map(j => `<div class="club-card static">${playerChip(j)}<div class="buy">
    <button class="btn sm primary" data-act="renovar" data-v="${esc(j.nombreCompleto)}" ${state.stats.caja >= precioRenovacion(j) ? '' : 'disabled'}>${esc(t('ren.renovar', { n: fmtCaja(precioRenovacion(j)) }))}</button>
    <button class="btn sm ghost" data-act="dejarIr" data-v="${esc(j.nombreCompleto)}" ${state.plantel.length > 17 ? '' : 'disabled'}>${esc(t('ren.dejar'))}</button></div></div>`).join('');
  return `<div class="screen">${hud()}<div class="top"><h2 tabindex="-1">${esc(t('ren.titulo'))}</h2></div>
    <p class="mut">${esc(t('ren.desc'))}</p>
    ${(ui.renovMsgs || []).map(m => `<div class="nota">${esc(m)}</div>`).join('')}
    <div class="list">${filas || `<p class="mut">${esc(t('ren.nadie'))}</p>`}</div>
    <button class="btn primary" data-act="renovListo">${esc(t('ren.listo'))}</button></div>`;
}

const PANTALLAS_EXTRA = { club: pantallaClub, sponsor: pantallaSponsor, partidos: pantallaPartidos, copa: pantallaCopa, invierno: pantallaInvierno, renov: pantallaRenov };

function onActExtra(act, v, el){
  switch(act){
    case 'irClub': ui.volverA = ui.screen === 'presupuesto' ? 'presupuesto' : (ui.screen === 'sponsor' ? ui.volverA : 'evento'); ui.cambioDT = false; ui.screen = 'club'; break;
    case 'cuota': state.estadio.cuota = v; break;
    case 'obras': { const p = precioObras(); if(state.stats.caja < p) break; state.stats.caja -= p; state.estadio.aforo += 5; state.estadio.socios = +(state.estadio.socios + 3.5).toFixed(1); state.stats.gestion = clamp(state.stats.gestion + 2, 0, 100); break; }
    case 'canteraUp': { const p = precioCantera(); if(state.stats.caja < p || state.cantera >= 3) break; state.stats.caja -= p; state.cantera++; break; }
    case 'irSponsor': ui.screen = 'sponsor'; break;
    case 'firmarSponsor': { const s = ui.sponsors[Number(v)]; state.sponsor = s; state.stats.caja += s.inicial; ui.sponsors = null; ui.screen = 'club'; break; }
    case 'cambiarDT': ui.dts = generarDTs(state.rng, state.club); ui.cambioDT = true; break;
    case 'hacerDT': { const p = precioCambioDT(); if(state.stats.caja < p) break; state.stats.caja -= p; state.dt = ui.dts[Number(v)]; ui.cambioDT = false; break; }
    case 'irPartidos': ui.screen = 'partidos'; break;
    case 'copaSeguir': terminarHook(); break;
    case 'renovar': {
      const j = jugadorPorNombre(state.plantel, v); if(!j) break;
      const p = precioRenovacion(j); if(state.stats.caja < p) break;
      state.stats.caja -= p; j.contrato = 2; state.stats.vestuario = clamp(state.stats.vestuario + 1, 0, 100);
      (ui.renovMsgs = ui.renovMsgs || []).push(t('ren.renovado', { jugador: j.nombreCompleto }));
      break; }
    case 'dejarIr': {
      const j = jugadorPorNombre(state.plantel, v); if(!j || state.plantel.length <= 17) break;
      state.stats.vestuario = clamp(state.stats.vestuario + (j.rating >= 75 ? -6 : -2), 0, 100);
      quitarDelPlantel(j);
      (ui.renovMsgs = ui.renovMsgs || []).push(t('ren.fue', { jugador: j.nombreCompleto }));
      break; }
    case 'renovListo': ui.renovMsgs = []; terminarHook(); break;
    case 'invVender': {
      const inv = state.invierno, o = inv.ofertas[Number(v)]; const j = o && jugadorOferta(o);
      if(!j || state.plantel.length <= 17) break;
      venderJugador(j, o.precio);
      inv.vendidos.push(t('inv.vendido', { jugador: j.nombreCompleto, n: fmtCaja(o.precio) }));
      inv.ofertas.splice(Number(v), 1);
      break; }
    case 'invRechazar': state.invierno.ofertas.splice(Number(v), 1); break;
    case 'invPromover': {
      const inv = state.invierno, j = inv.juveniles[Number(v)];
      if(!j || state.plantel.length >= 26) break;
      asignarDorsal(state.plantel, j, state.rng); state.plantel.push(j); inv.juveniles.splice(Number(v), 1);
      break; }
    case 'invDT': state.invierno.dts = generarDTs(state.rng, state.club); break;
    case 'invHacerDT': { const p = precioCambioDT(); if(state.stats.caja < p) break; state.stats.caja -= p; state.dt = state.invierno.dts[Number(v)]; state.invierno.dts = null; break; }
    case 'invListo': terminarHook(); break;
    default: return false;
  }
  render();
  return true;
}
