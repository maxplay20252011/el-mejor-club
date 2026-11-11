/* ===================== Motor de escudos v2 ===================== */

const TINCTURES = {
  metals: ['oro','plata'],
  colors: ['rojo','azul','verde','negro','purpura','celeste','teal','naranja'],
};
const ALL_TINCTURES = [...TINCTURES.metals, ...TINCTURES.colors];
const TINCTURE_HEX = {
  oro:'#d4af37', plata:'#e8e8e8', rojo:'#c8102e', azul:'#1f4e99', verde:'#1b7a3d',
  negro:'#1a1a1a', purpura:'#6a2c70', celeste:'#4fb5e0', teal:'#0e8c7f', naranja:'#e07a1f',
};
const TINCTURE_LABEL = {
  oro:'Oro', plata:'Plata', rojo:'Rojo', azul:'Azul', verde:'Verde', negro:'Negro',
  purpura:'Púrpura', celeste:'Celeste', teal:'Teal', naranja:'Naranja',
};

const SHAPES = ['heater','espanol','ovalo','circulo','diamante','puntas','polaco','rombo_alargado'];
const SHAPE_LABEL = {
  heater:'Heater', espanol:'Español', ovalo:'Óvalo', circulo:'Círculo', diamante:'Diamante',
  puntas:'Puntas', polaco:'Polaco', rombo_alargado:'Rombo alargado',
};
const DIVISIONS = ['ninguna','per_pale','per_fess','per_bend','quarterly','per_saltire'];
const DIVISION_LABEL = {
  ninguna:'Ninguna', per_pale:'Partido', per_fess:'Cortado', per_bend:'Tajado', quarterly:'Cuartelado', per_saltire:'Aspado',
};
const ORDINARIES = ['ninguna','palo','faja','banda','barra','cruz','aspa','cabria','bordura'];
const ORDINARY_LABEL = {
  ninguna:'Ninguna', palo:'Palo', faja:'Faja', banda:'Banda', barra:'Barra', cruz:'Cruz', aspa:'Aspa', cabria:'Cabria', bordura:'Bordura',
};
const ORDINARIAS_FRANJA = ['palo','faja','banda','barra'];

const CHARGES = [
  'estrella','sol','luna','leon','aguila','toro','caballo','ciervo','lobo','oso',
  'pez','serpiente','torre','espada','corazon','mano','llave','monograma',
  'ancla','remo','timon','herramienta',
  'fauna_condor','fauna_yacare','fauna_zorro','fauna_guanaco',
  'flora_ceibo','flora_trigo','flora_vid','flora_algarrobo',
];
const CHARGE_LABEL = {
  estrella:'Estrella', sol:'Sol', luna:'Luna', leon:'León', aguila:'Águila', toro:'Toro',
  caballo:'Caballo', ciervo:'Ciervo', lobo:'Lobo', oso:'Oso', pez:'Pez', serpiente:'Serpiente',
  torre:'Torre', espada:'Espada', corazon:'Corazón', mano:'Mano', llave:'Llave', monograma:'Monograma',
  ancla:'Ancla', remo:'Remo', timon:'Timón', herramienta:'Herramienta',
  fauna_condor:'Cóndor', fauna_yacare:'Yacaré', fauna_zorro:'Zorro', fauna_guanaco:'Guanaco',
  flora_ceibo:'Flor de ceibo', flora_trigo:'Trigo', flora_vid:'Vid', flora_algarrobo:'Algarrobo',
};
const CHARGE_NATURAL = { fauna_condor:true, fauna_yacare:true, fauna_zorro:true, fauna_guanaco:true };

const LEMAS_INVENTADOS = [
  'Fortis et Fidelis','Semper Ad Astra','Virtus Vincit Omnia','Honor Ante Omnia','Ad Victoriam Semper',
  'Fide et Labore','Unitas Facit Robur','Gloria Non Moritur','Per Aspera Ad Gloriam','Labor Omnia Superat Nostra',
];

/* ---- símbolos por país: id de carga = 'sym:CODE:id' ---- */
function simboloPorChargeId(chargeId){
  if(typeof chargeId !== 'string' || chargeId.indexOf('sym:') !== 0) return null;
  const [, code, id] = chargeId.split(':');
  const lista = (typeof SIMBOLOS_POR_PAIS !== 'undefined' && SIMBOLOS_POR_PAIS[code]) || [];
  return lista.find(s => s.id === id) || null;
}
function chargeLabel(chargeId){
  const s = simboloPorChargeId(chargeId);
  return s ? s.nombre : (CHARGE_LABEL[chargeId] || chargeId);
}
function cargasSugeridasPorPais(code){
  const lista = (typeof SIMBOLOS_POR_PAIS !== 'undefined' && SIMBOLOS_POR_PAIS[code]) || [];
  return lista.map(s => ({ id:'sym:'+code+':'+s.id, nombre:s.nombre, categoria:s.categoria, verificado:s.verificado }));
}

/* ---- temas regionales ---- */
const TEMAS = {
  argentino_clasico: { ordinaries:{palo:3}, fieldFromBandera:true, starsDefault:1, charges:{monograma:2} },
  portuario_obrero: { charges:{ancla:4, remo:4, timon:4, herramienta:4} },
  provincial_rural: { charges:{flora_trigo:3, flora_vid:3, flora_algarrobo:3, fauna_guanaco:3, fauna_zorro:3} },
  retro_con_lema: { shapes:{heater:3}, ordinaries:{cabria:3}, ornamentoForzado:'corona', lemaForzado:true },
  logo_mascota: { shapes:{ovalo:4, circulo:4}, ordinaryForzadoNinguna:true },
};
function paisPorCode(code){ return (typeof PAISES !== 'undefined') ? PAISES.find(p => p.code === code) : null; }
function tieneTag(pais, tag){ return (pais.geoTag||[]).includes(tag) || (pais.culturalTag||[]).includes(tag); }
function elegirTemaPorPais(code){
  const pais = paisPorCode(code);
  if(!pais) return null;
  if(tieneTag(pais,'sudamerica')) return 'argentino_clasico';
  if(tieneTag(pais,'costero') || tieneTag(pais,'portuario') || tieneTag(pais,'pesquero')) return 'portuario_obrero';
  if(tieneTag(pais,'rural') || tieneTag(pais,'agropecuario')) return 'provincial_rural';
  if(tieneTag(pais,'tradicion_britanica')) return 'retro_con_lema';
  if(tieneTag(pais,'norteamerica') || tieneTag(pais,'caribe')) return 'logo_mascota';
  return null;
}
function pesarCatalogoPorTema(code){
  const temaId = elegirTemaPorPais(code);
  return { temaId, pesos: temaId ? TEMAS[temaId] : null };
}

/* ---- salvaguarda anti-imitación ---- */
const REAL_COLORES = [
  ['River Plate','plata','rojo'],['Boca Juniors','azul','oro'],['Racing Club','celeste','plata'],
  ['Independiente','rojo','plata'],['San Lorenzo','azul','rojo'],['Estudiantes LP','plata','rojo'],
  ['Gimnasia LP','azul','plata'],['Vélez','plata','azul'],['Huracán','plata','rojo'],
  ['Newells','rojo','negro'],['Rosario Central','azul','oro'],['Talleres','azul','plata'],
  ['Belgrano','celeste','plata'],['Lanús','purpura','negro'],['Banfield','verde','plata'],
  ['Argentinos Jrs','rojo','plata'],['Platense','celeste','purpura'],['Tigre','azul','rojo'],
  ['Colón','rojo','negro'],['Unión SF','rojo','plata'],['Defensa y Justicia','verde','purpura'],
  ['Godoy Cruz','azul','plata'],['Barracas Central','plata','celeste'],['Central Córdoba SdE','negro','plata'],
  ['Sarmiento Junín','verde','plata'],['Barcelona','azul','purpura'],['Real Madrid','plata','oro'],
  ['Atlético Madrid','rojo','plata'],['Manchester United','rojo','negro'],['Manchester City','celeste','plata'],
  ['Liverpool','rojo','oro'],['Chelsea','azul','plata'],['Arsenal','rojo','plata'],['Juventus','plata','negro'],
  ['AC Milan','rojo','negro'],['Inter','azul','negro'],['Bayern','rojo','plata'],['Dortmund','oro','negro'],
  ['PSG','azul','rojo'],['Flamengo','rojo','negro'],['Corinthians','plata','negro'],['Palmeiras','verde','plata'],
  ['Santos','plata','negro'],['Peñarol','oro','negro'],['Nacional UY','plata','azul'],
  ['Ajax','plata','rojo'],['Al Ahly','rojo','plata'],['Galatasaray','oro','rojo'],['Al Hilal','azul','plata'],
  ['Feyenoord','rojo','plata'],['Fenerbahçe','oro','azul'],['Club América','oro','azul'],['Sporting CP','verde','plata'],
  ['Colo-Colo','plata','negro'],['Orlando Pirates','negro','plata'],['Urawa Red Diamonds','rojo','negro'],
  ['Persépolis','rojo','plata'],['Shakhtar','naranja','negro'],['Melbourne Victory','azul','plata'],
];
const BLOQUEO_MANUAL = [
  { ordinariaId:'banda', campo:'plata', ordinariaTintura:'rojo', motivo:'banda roja sobre blanco' },
  { cargaId:'monograma', campo:'azul', ordinariaId:'faja', ordinariaTintura:'oro', motivo:'monograma azul y oro con faja' },
];
function generarBloqueoDesdeClubes(lista){
  const vistos = new Set();
  const out = [];
  lista.forEach(([nombre, p, s]) => {
    const k = p + '/' + s;
    if(vistos.has(k)) return;
    vistos.add(k);
    out.push({ campo:p, secundarioEnFranja:s, motivo:'colores de ' + nombre + ' (uso interno)' });
  });
  return out;
}
const BLOQUEO_IDENTIDAD = [
  ...BLOQUEO_MANUAL,
  ...generarBloqueoDesdeClubes(REAL_COLORES.filter(c => c[0] !== 'River Plate' && c[0] !== 'Boca Juniors')),
];
function matchesBloqueo(crest, lista){
  return (lista || BLOQUEO_IDENTIDAD).some(r => {
    if(r.ordinariaId && crest.ordinaryId !== r.ordinariaId) return false;
    if(r.campo && crest.fieldTincture !== r.campo) return false;
    if(r.ordinariaTintura && crest.ordinaryTincture !== r.ordinariaTintura) return false;
    if(r.cargaId && crest.chargeId !== r.cargaId) return false;
    if(r.secundarioEnFranja){
      if(!ORDINARIAS_FRANJA.includes(crest.ordinaryId)) return false;
      if(crest.ordinaryTincture !== r.secundarioEnFranja) return false;
    }
    return true;
  });
}

/* ===================== geometría ===================== */
function ellipsePath(cx,cy,rx,ry){
  return `M${cx-rx},${cy} A${rx},${ry} 0 1,0 ${cx+rx},${cy} A${rx},${ry} 0 1,0 ${cx-rx},${cy} Z`;
}
function shapePath(id){
  switch(id){
    case 'ovalo': return ellipsePath(80,100,72,98);
    case 'circulo': return ellipsePath(80,100,80,80);
    case 'diamante': return 'M80,0 L160,100 L80,200 L0,100 Z';
    case 'rombo_alargado': return 'M80,0 L128,100 L80,200 L32,100 Z';
    case 'puntas': return 'M8,0 L152,0 L152,145 L128,125 L104,160 L80,130 L56,160 L32,125 L8,145 Z';
    case 'polaco': return 'M10,0 L150,0 L150,155 L98,155 L98,140 L62,140 L62,155 L10,155 Z';
    case 'espanol': return 'M10,8 Q10,0 20,0 L140,0 Q150,0 150,8 L150,160 Q150,200 80,200 Q10,200 10,160 Z';
    default: return 'M10,18 Q10,0 32,0 L128,0 Q150,0 150,18 L150,112 Q150,172 80,200 Q10,172 10,112 Z';
  }
}
function divisionOverlayMarkup(divisionId, hex2){
  if(!hex2) return '';
  switch(divisionId){
    case 'per_pale': return `<rect x="80" y="0" width="80" height="200" fill="${hex2}"/>`;
    case 'per_fess': return `<rect x="0" y="100" width="160" height="100" fill="${hex2}"/>`;
    case 'per_bend': return `<polygon points="160,0 160,200 0,200" fill="${hex2}"/>`;
    case 'quarterly': return `<rect x="0" y="0" width="80" height="100" fill="${hex2}"/><rect x="80" y="100" width="80" height="100" fill="${hex2}"/>`;
    case 'per_saltire': return `<polygon points="80,100 0,0 160,0" fill="${hex2}"/><polygon points="80,100 0,200 160,200" fill="${hex2}"/>`;
    default: return '';
  }
}
function ordinaryMarkup(ordinaryId, hex, shapeId){
  switch(ordinaryId){
    case 'palo': return `<rect x="65" y="0" width="30" height="200" fill="${hex}"/>`;
    case 'faja': return `<rect x="0" y="85" width="160" height="30" fill="${hex}"/>`;
    case 'banda': return `<line x1="0" y1="0" x2="160" y2="200" stroke="${hex}" stroke-width="42"/>`;
    case 'barra': return `<line x1="160" y1="0" x2="0" y2="200" stroke="${hex}" stroke-width="42"/>`;
    case 'cruz': return `<rect x="65" y="0" width="30" height="200" fill="${hex}"/><rect x="0" y="85" width="160" height="30" fill="${hex}"/>`;
    case 'aspa': return `<line x1="0" y1="0" x2="160" y2="200" stroke="${hex}" stroke-width="30"/><line x1="160" y1="0" x2="0" y2="200" stroke="${hex}" stroke-width="30"/>`;
    case 'cabria': return `<polyline points="18,200 80,110 142,200" fill="none" stroke="${hex}" stroke-width="30" stroke-linejoin="round"/>`;
    case 'bordura': return `<path d="${shapePath(shapeId)}" fill="none" stroke="${hex}" stroke-width="18"/>`;
    default: return '';
  }
}
function starPoints(cx,cy,rOuter,rInner,points){
  const pts=[];
  for(let i=0;i<points*2;i++){
    const r = i%2===0 ? rOuter : rInner;
    const a = Math.PI/points*i - Math.PI/2;
    pts.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1));
  }
  return pts.join(' ');
}
function starPath(cx,cy,rOuter,rInner,points,hex){
  return `<polygon points="${starPoints(cx,cy,rOuter,rInner,points)}" fill="${hex}"/>`;
}
function sunMarkup(cx,cy,r,hex){
  let rays='';
  for(let i=0;i<12;i++){
    const a = Math.PI/6*i;
    rays += `<line x1="${(cx+r*1.15*Math.cos(a)).toFixed(1)}" y1="${(cy+r*1.15*Math.sin(a)).toFixed(1)}" x2="${(cx+r*1.7*Math.cos(a)).toFixed(1)}" y2="${(cy+r*1.7*Math.sin(a)).toFixed(1)}" stroke="${hex}" stroke-width="5"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${hex}"/>${rays}`;
}
function fivePetalFlower(cx,cy,r,hex){
  let petals='';
  for(let i=0;i<5;i++){
    const a = (Math.PI*2/5)*i - Math.PI/2;
    const x = cx + r*Math.cos(a), y = cy + r*Math.sin(a);
    petals += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="12" ry="18" fill="${hex}" transform="rotate(${(a*180/Math.PI+90).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }
  return petals + `<circle cx="${cx}" cy="${cy}" r="8" fill="${hex}"/>`;
}
function wheatSprigs(cx, topY, bottomY, hex){
  let s='';
  for(let y=topY+6; y<bottomY-10; y+=10){
    s += `<path d="M${cx},${y} L${cx-14},${y-8} M${cx},${y} L${cx+14},${y-8}" stroke="${hex}" stroke-width="4"/>`;
  }
  return s;
}
function gearMarkup(cx,cy,r,hex){
  let teeth='';
  for(let i=0;i<8;i++) teeth += `<rect x="${cx-5}" y="${cy-r-9}" width="10" height="14" fill="${hex}" transform="rotate(${i*45} ${cx} ${cy})"/>`;
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${hex}"/>${teeth}<circle cx="${cx}" cy="${cy}" r="${r*0.4}" fill="none" stroke="#00000066" stroke-width="3"/>`;
}

const CHARGE_SHAPES = {
  estrella: hex => starPath(80,95,34,16,5,hex),
  sol: hex => sunMarkup(80,95,22,hex),
  luna: hex => `<path d="M95,70 A30,30 0 1,0 95,130 A22,22 0 1,1 95,70 Z" fill="${hex}"/>`,
  leon: hex => `<circle cx="80" cy="85" r="20" fill="${hex}"/><path d="M50,80 Q40,60 55,55 Q50,40 70,48 Q80,35 90,48 Q110,40 105,55 Q120,60 110,80 Q100,70 80,72 Q60,70 50,80 Z" fill="${hex}"/><path d="M68,100 L72,130 M80,102 L80,132 M92,100 L88,130" stroke="${hex}" stroke-width="5"/>`,
  aguila: hex => `<path d="M80,55 L95,75 L130,70 L100,90 L120,115 L85,100 L80,135 L75,100 L40,115 L60,90 L30,70 L65,75 Z" fill="${hex}"/>`,
  toro: hex => `<circle cx="80" cy="95" r="22" fill="${hex}"/><path d="M58,80 Q45,65 50,55 M102,80 Q115,65 110,55" stroke="${hex}" stroke-width="6" fill="none"/>`,
  caballo: hex => `<path d="M70,130 L72,90 Q65,70 78,55 Q95,50 98,65 L110,60 L104,72 Q112,80 108,95 L112,130 L98,130 L96,100 L84,100 L82,130 Z" fill="${hex}"/>`,
  ciervo: hex => `<path d="M80,130 L80,90 M80,90 Q65,70 55,50 M80,90 Q95,70 105,50 M55,50 L45,40 M55,50 L50,35 M105,50 L115,40 M105,50 L110,35" stroke="${hex}" stroke-width="5" fill="none"/><circle cx="80" cy="95" r="12" fill="${hex}"/>`,
  lobo: hex => `<path d="M55,120 L60,80 Q55,65 68,58 L75,65 L80,55 L85,65 L92,58 Q105,65 100,80 L105,120 Q80,135 55,120 Z" fill="${hex}"/>`,
  oso: hex => `<circle cx="80" cy="95" r="26" fill="${hex}"/><circle cx="62" cy="72" r="8" fill="${hex}"/><circle cx="98" cy="72" r="8" fill="${hex}"/>`,
  pez: hex => `<path d="M45,100 Q70,75 110,100 Q70,125 45,100 Z" fill="${hex}"/><path d="M108,100 L122,88 L122,112 Z" fill="${hex}"/>`,
  serpiente: hex => `<path d="M50,60 Q95,70 60,95 Q30,115 70,125 Q100,132 110,115" stroke="${hex}" stroke-width="7" fill="none" stroke-linecap="round"/>`,
  torre: hex => `<rect x="60" y="70" width="40" height="55" fill="${hex}"/><rect x="55" y="55" width="8" height="15" fill="${hex}"/><rect x="97" y="55" width="8" height="15" fill="${hex}"/><rect x="76" y="55" width="8" height="15" fill="${hex}"/>`,
  espada: hex => `<rect x="76" y="45" width="8" height="75" fill="${hex}"/><rect x="60" y="112" width="40" height="8" fill="${hex}"/><rect x="73" y="118" width="14" height="18" fill="${hex}"/>`,
  corazon: hex => `<path d="M80,130 C40,100 50,65 80,80 C110,65 120,100 80,130 Z" fill="${hex}"/>`,
  mano: hex => `<path d="M65,130 L65,80 Q65,70 72,70 Q78,70 78,80 L78,65 Q78,55 85,55 Q92,55 92,65 L92,80 Q92,68 99,68 Q106,68 106,80 L106,100 Q106,130 80,130 Z" fill="${hex}"/>`,
  llave: hex => `<circle cx="70" cy="70" r="14" fill="none" stroke="${hex}" stroke-width="7"/><rect x="68" y="80" width="7" height="45" fill="${hex}"/><rect x="68" y="110" width="18" height="7" fill="${hex}"/><rect x="68" y="120" width="14" height="7" fill="${hex}"/>`,
  monograma: (hex, p) => `<text x="80" y="112" font-family="Georgia,serif" font-weight="900" font-size="34" text-anchor="middle" fill="${hex}">${escapeXml(((p && p.monograma) || 'CFM').slice(0,3).toUpperCase())}</text>`,
  ancla: hex => `<circle cx="80" cy="60" r="8" fill="none" stroke="${hex}" stroke-width="5"/><rect x="77" y="68" width="6" height="55" fill="${hex}"/><path d="M55,110 Q80,140 105,110 L95,105 Q80,122 65,105 Z" fill="${hex}"/><rect x="62" y="80" width="36" height="6" fill="${hex}"/>`,
  remo: hex => `<ellipse cx="80" cy="60" rx="14" ry="22" fill="${hex}"/><rect x="76" y="80" width="8" height="55" fill="${hex}"/>`,
  timon: hex => `<circle cx="80" cy="95" r="26" fill="none" stroke="${hex}" stroke-width="7"/><circle cx="80" cy="95" r="8" fill="${hex}"/><path d="M80,69 L80,55 M80,121 L80,135 M54,95 L40,95 M106,95 L120,95 M61,76 L50,65 M99,76 L110,65 M61,114 L50,125 M99,114 L110,125" stroke="${hex}" stroke-width="6"/>`,
  herramienta: hex => `<rect x="60" y="75" width="40" height="14" rx="3" fill="${hex}" transform="rotate(-35 80 82)"/><rect x="74" y="88" width="12" height="45" fill="${hex}"/>`,
  fauna_condor: hex => `<path d="M80,80 L50,60 Q35,55 30,70 L55,75 L80,90 L105,75 L130,70 Q125,55 110,60 Z" fill="${hex}"/><circle cx="80" cy="82" r="7" fill="${hex}"/>`,
  fauna_yacare: hex => `<path d="M40,100 Q60,85 90,95 L120,90 L128,96 L120,100 L95,105 Q65,115 40,100 Z" fill="${hex}"/>`,
  fauna_zorro: hex => `<path d="M60,70 L50,55 L62,60 Q80,50 98,60 L110,55 L100,70 Q110,95 95,115 L65,115 Q50,95 60,70 Z" fill="${hex}"/>`,
  fauna_guanaco: hex => `<path d="M90,55 Q98,60 95,72 L100,100 L108,130 L98,130 L92,105 L85,130 L75,130 L78,95 Q65,90 62,75 Q58,65 65,62 Q72,68 78,72 Q82,58 90,55 Z" fill="${hex}"/>`,
  flora_ceibo: hex => fivePetalFlower(80,95,22,hex),
  flora_trigo: hex => `<rect x="77" y="60" width="6" height="70" fill="${hex}"/>${wheatSprigs(80,60,130,hex)}`,
  flora_vid: hex => `<circle cx="70" cy="90" r="9" fill="${hex}"/><circle cx="88" cy="88" r="9" fill="${hex}"/><circle cx="78" cy="102" r="9" fill="${hex}"/><circle cx="96" cy="102" r="9" fill="${hex}"/><circle cx="82" cy="115" r="9" fill="${hex}"/><path d="M80,60 Q90,75 80,80" stroke="${hex}" stroke-width="4" fill="none"/>`,
  flora_algarrobo: hex => `<path d="M80,60 Q60,75 65,100 Q55,115 65,130 Q75,118 80,105 Q85,118 95,130 Q105,115 95,100 Q100,75 80,60 Z" fill="${hex}"/>`,
};

/* siluetas genéricas para los símbolos por país (GLYPHS) */
const GLYPH_SHAPES = {
  ave: hex => `<ellipse cx="78" cy="98" rx="26" ry="17" fill="${hex}"/><circle cx="104" cy="80" r="11" fill="${hex}"/><path d="M113,79 L128,84 L113,87 Z" fill="${hex}"/><path d="M54,92 L30,78 L34,104 Z" fill="${hex}"/><path d="M72,112 L68,130 M86,112 L90,130" stroke="${hex}" stroke-width="4"/>`,
  ave_vuelo: hex => CHARGE_SHAPES.fauna_condor(hex),
  cuadrupedo: hex => `<ellipse cx="78" cy="92" rx="30" ry="15" fill="${hex}"/><path d="M58,100 L56,128 M70,104 L69,128 M88,104 L90,128 M100,100 L103,128" stroke="${hex}" stroke-width="6"/><path d="M104,86 L118,64 L128,70 L120,92 Z" fill="${hex}"/><path d="M48,88 L38,82" stroke="${hex}" stroke-width="5"/>`,
  felino: hex => `<ellipse cx="80" cy="102" rx="32" ry="14" fill="${hex}"/><circle cx="110" cy="86" r="13" fill="${hex}"/><path d="M102,76 L104,64 L112,74 Z M112,74 L120,64 L122,78 Z" fill="${hex}"/><path d="M50,100 Q32,92 36,76" stroke="${hex}" stroke-width="6" fill="none"/><path d="M62,112 L60,130 M96,112 L98,130" stroke="${hex}" stroke-width="6"/>`,
  cuernos: hex => CHARGE_SHAPES.toro(hex),
  pez: hex => CHARGE_SHAPES.pez(hex),
  reptil: hex => CHARGE_SHAPES.fauna_yacare(hex),
  mariposa: hex => `<ellipse cx="62" cy="80" rx="22" ry="18" fill="${hex}"/><ellipse cx="98" cy="80" rx="22" ry="18" fill="${hex}"/><ellipse cx="66" cy="108" rx="16" ry="13" fill="${hex}"/><ellipse cx="94" cy="108" rx="16" ry="13" fill="${hex}"/><rect x="77" y="66" width="6" height="56" rx="3" fill="${hex}"/>`,
  flor: hex => fivePetalFlower(80,95,22,hex),
  hoja: hex => `<path d="M80,130 Q40,100 52,62 Q90,56 108,88 Q106,118 80,130 Z" fill="${hex}"/><path d="M80,130 Q78,100 62,74" stroke="#00000066" stroke-width="3" fill="none"/>`,
  arbol: hex => `<rect x="76" y="96" width="9" height="36" fill="${hex}"/><circle cx="80" cy="76" r="24" fill="${hex}"/><circle cx="62" cy="92" r="16" fill="${hex}"/><circle cx="98" cy="92" r="16" fill="${hex}"/>`,
  palmera: hex => `<path d="M82,132 Q76,100 84,70" stroke="${hex}" stroke-width="8" fill="none"/><path d="M84,70 Q60,60 44,74 M84,70 Q104,56 124,70 M84,70 Q64,76 54,96 M84,70 Q102,78 112,98 M84,70 L84,52" stroke="${hex}" stroke-width="6" fill="none" stroke-linecap="round"/>`,
  espiga: hex => CHARGE_SHAPES.flora_trigo(hex),
  fruto: hex => `<circle cx="80" cy="100" r="26" fill="${hex}"/><path d="M80,74 Q82,64 86,58" stroke="${hex}" stroke-width="5" fill="none"/><path d="M84,66 Q100,56 108,66 Q96,74 84,66 Z" fill="${hex}"/>`,
  montana: hex => `<polygon points="30,128 66,70 92,108 110,84 138,128" fill="${hex}"/><polygon points="66,70 58,86 74,86" fill="#ffffff88"/>`,
  volcan: hex => `<polygon points="38,130 66,78 94,78 122,130" fill="${hex}"/><path d="M70,78 L66,60 M80,78 L80,54 M90,78 L96,62" stroke="${hex}" stroke-width="5" stroke-linecap="round"/>`,
  ola: hex => `<path d="M34,84 Q50,66 66,84 T98,84 T130,84 M34,104 Q50,86 66,104 T98,104 T130,104 M34,124 Q50,106 66,124 T98,124 T130,124" stroke="${hex}" stroke-width="7" fill="none" stroke-linecap="round"/>`,
  isla: hex => `<path d="M36,116 Q80,60 124,116 Z" fill="${hex}"/><path d="M34,122 L126,122" stroke="${hex}" stroke-width="6"/><path d="M96,90 L96,66 M96,66 Q82,58 74,66 M96,66 Q110,58 118,66" stroke="${hex}" stroke-width="4" fill="none"/>`,
  rio: hex => `<path d="M100,52 Q54,72 90,94 Q126,114 66,136" stroke="${hex}" stroke-width="13" fill="none" stroke-linecap="round"/>`,
  duna: hex => `<path d="M30,126 Q64,78 92,112 Q108,92 130,126 Z" fill="${hex}"/><circle cx="116" cy="66" r="12" fill="${hex}"/>`,
  sol: hex => sunMarkup(80,95,22,hex),
  luna: hex => CHARGE_SHAPES.luna(hex),
  estrella: hex => starPath(80,95,34,16,5,hex),
  instrumento_cuerda: hex => `<ellipse cx="72" cy="108" rx="20" ry="17" fill="${hex}"/><ellipse cx="72" cy="86" rx="14" ry="12" fill="${hex}"/><rect x="84" y="46" width="7" height="48" transform="rotate(30 88 70)" fill="${hex}"/><circle cx="72" cy="102" r="6" fill="#00000066"/>`,
  tambor: hex => `<ellipse cx="80" cy="78" rx="30" ry="10" fill="${hex}"/><rect x="50" y="78" width="60" height="38" fill="${hex}"/><ellipse cx="80" cy="116" rx="30" ry="10" fill="${hex}"/><path d="M58,82 L70,114 M80,86 L80,118 M102,82 L90,114" stroke="#00000066" stroke-width="3"/>`,
  flauta: hex => `<rect x="30" y="86" width="100" height="14" rx="7" fill="${hex}" transform="rotate(-25 80 93)"/><circle cx="64" cy="100" r="3" fill="#00000077"/><circle cx="82" cy="92" r="3" fill="#00000077"/><circle cx="100" cy="84" r="3" fill="#00000077"/>`,
  vasija: hex => `<path d="M68,60 L92,60 L90,74 Q118,86 114,108 Q108,132 80,132 Q52,132 46,108 Q42,86 70,74 Z" fill="${hex}"/>`,
  barco: hex => `<path d="M34,108 L126,108 L112,128 L48,128 Z" fill="${hex}"/><rect x="78" y="58" width="5" height="50" fill="${hex}"/><path d="M85,60 L116,104 L85,104 Z" fill="${hex}"/>`,
  herramienta: hex => CHARGE_SHAPES.herramienta(hex),
  rueda_dentada: hex => gearMarkup(80,95,24,hex),
  grano: hex => `<ellipse cx="80" cy="96" rx="22" ry="32" fill="${hex}" transform="rotate(20 80 96)"/><path d="M72,66 Q90,96 70,126" stroke="#00000077" stroke-width="4" fill="none"/>`,
  mineral: hex => `<polygon points="80,56 114,84 80,134 46,84" fill="${hex}"/><path d="M46,84 L114,84 M80,56 L66,84 L80,134 L94,84 Z" stroke="#00000066" stroke-width="3" fill="none"/>`,
  taza: hex => `<path d="M52,86 L108,86 L102,126 Q80,138 58,126 Z" fill="${hex}"/><path d="M108,92 Q130,92 128,110 Q124,122 106,118" stroke="${hex}" stroke-width="6" fill="none"/><path d="M68,76 Q62,66 70,58 M86,76 Q80,66 88,58" stroke="${hex}" stroke-width="4" fill="none"/>`,
  balon: hex => `<circle cx="80" cy="95" r="30" fill="${hex}"/><polygon points="80,80 92,89 88,103 72,103 68,89" fill="#00000077"/><path d="M80,80 L80,65 M92,89 L106,84 M88,103 L96,116 M72,103 L64,116 M68,89 L54,84" stroke="#00000077" stroke-width="3"/>`,
};

function chargeMarkup(chargeId, hex, p){
  if(CHARGE_SHAPES[chargeId]) return CHARGE_SHAPES[chargeId](hex, p);
  const s = simboloPorChargeId(chargeId);
  if(s && GLYPH_SHAPES[s.glyph]) return GLYPH_SHAPES[s.glyph](hex);
  return `<circle cx="80" cy="95" r="22" fill="${hex}"/>`;
}

function starsRowMarkup(n, hex){
  if(!n) return '';
  const spacing = 26, startX = 80 - spacing*(n-1)/2;
  let out='';
  for(let i=0;i<n;i++) out += starPath(startX+i*spacing, -14, 9, 4, 5, hex);
  return out;
}
function anioMarkup(anio, hex){
  if(!anio) return '';
  return `<text x="35" y="104" font-family="Georgia,serif" font-weight="900" font-size="20" text-anchor="middle" fill="${hex}">${anio.slice(0,2)}</text>
          <text x="125" y="104" font-family="Georgia,serif" font-weight="900" font-size="20" text-anchor="middle" fill="${hex}">${anio.slice(2,4)}</text>`;
}
function escapeXml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
const RIBBON_STYLES = 4;
function ribbonMarkup(texto, hex, estilo){
  if(!texto) return '';
  const t = escapeXml(texto);
  const txt = (y,sz) => `<text x="80" y="${y}" font-family="Georgia,serif" font-weight="700" font-size="${Math.min(sz, 205 / Math.max(String(texto).length, 1)).toFixed(1)}" text-anchor="middle" fill="#1a1a1a">${t}</text>`;
  switch((estilo||0) % RIBBON_STYLES){
    case 1: return `<g><rect x="-6" y="206" width="172" height="26" rx="13" fill="${hex}" stroke="#00000055"/>${txt(224,13)}</g>`;
    case 2: return `<g><path d="M-8,206 Q80,198 168,206 L168,232 Q80,224 -8,232 Z" fill="${hex}" stroke="#00000055"/>${txt(224,13)}</g>`;
    case 3: return `<g><path d="M-14,206 L24,206 L24,232 L-14,232 L-2,219 Z M136,206 L174,206 L162,219 L174,232 L136,232 Z" fill="${hex}" stroke="#00000055"/><rect x="24" y="206" width="112" height="26" fill="${hex}" stroke="#00000055"/>${txt(224,12)}</g>`;
    default: return `<g><path d="M-8,206 L168,206 L148,221 L168,236 L-8,236 L12,221 Z" fill="${hex}" stroke="#00000055"/>${txt(226,13)}</g>`;
  }
}
function coronaMarkup(hex, variante){
  const puntas = variante===1 ? 5 : 3;
  const w=70, baseY=-46, topY=-66;
  let picos='';
  for(let i=0;i<puntas;i++){
    const x = 80-w/2 + (w/(puntas-1))*i;
    picos += `<circle cx="${x.toFixed(1)}" cy="${topY}" r="5" fill="${hex}"/><line x1="${x.toFixed(1)}" y1="${baseY}" x2="${x.toFixed(1)}" y2="${topY+5}" stroke="${hex}" stroke-width="4"/>`;
  }
  return `<rect x="${80-w/2-4}" y="${baseY}" width="${w+8}" height="8" fill="${hex}"/>${picos}`;
}
function laurelMarkup(hex, variante){
  const hojas = variante===1 ? 7 : 5;
  let out='';
  for(let i=0;i<hojas;i++){
    const t = i/(hojas-1);
    const yL = 20 + t*170;
    const xL = 2 + Math.sin(t*Math.PI)*14, xR = 158 - Math.sin(t*Math.PI)*14;
    out += `<ellipse cx="${xL.toFixed(1)}" cy="${yL.toFixed(1)}" rx="9" ry="5" fill="${hex}" transform="rotate(${(-30+t*20).toFixed(0)} ${xL.toFixed(1)} ${yL.toFixed(1)})"/>`;
    out += `<ellipse cx="${xR.toFixed(1)}" cy="${yL.toFixed(1)}" rx="9" ry="5" fill="${hex}" transform="rotate(${(30-t*20).toFixed(0)} ${xR.toFixed(1)} ${yL.toFixed(1)})"/>`;
  }
  return out;
}

let _crestUid = 0;
function buildCrestSVG(p){
  const fieldHex = TINCTURE_HEX[p.fieldTincture] || '#888';
  const shapeD = shapePath(p.shapeId);
  const clipId = 'clip' + (++_crestUid);
  const div2Hex = p.divisionTincture2 ? TINCTURE_HEX[p.divisionTincture2] : null;
  const ordHex = p.ordinaryTincture ? TINCTURE_HEX[p.ordinaryTincture] : null;
  const chargeHex = p.chargeTincture ? TINCTURE_HEX[p.chargeTincture] : (CHARGE_NATURAL[p.chargeId] ? '#8a6d3b' : '#1a1a1a');
  const chargeGlyph = p.chargeId ? chargeMarkup(p.chargeId, chargeHex, p) : '';
  const ornamentoHex = p.ornamentoTincture ? TINCTURE_HEX[p.ornamentoTincture] : TINCTURE_HEX.oro;
  return `<svg viewBox="-20 -80 200 320" xmlns="http://www.w3.org/2000/svg">
    <defs><clipPath id="${clipId}"><path d="${shapeD}"/></clipPath></defs>
    ${p.ornamento==='laurel' ? laurelMarkup(ornamentoHex, p.ornamentoVariante||0) : ''}
    ${starsRowMarkup(p.stars||0, TINCTURE_HEX.oro)}
    ${p.ornamento==='corona' ? coronaMarkup(ornamentoHex, p.ornamentoVariante||0) : ''}
    <g clip-path="url(#${clipId})">
      <rect x="-20" y="-20" width="200" height="240" fill="${fieldHex}"/>
      ${divisionOverlayMarkup(p.divisionId, div2Hex)}
      ${p.ordinaryId && p.ordinaryId!=='ninguna' ? ordinaryMarkup(p.ordinaryId, ordHex, p.shapeId) : ''}
      ${chargeGlyph}
      ${anioMarkup(p.anio, ordHex || '#1a1a1a')}
    </g>
    <path d="${shapeD}" fill="none" stroke="#1a1a1a" stroke-width="3"/>
    ${ribbonMarkup(p.nombre || p.lema || '', '#e8d9a8', p.ribbonStyle)}
  </svg>`;
}

/* ===================== selección restringida + randomCrest ===================== */
function esMetal(t){ return TINCTURES.metals.includes(t); }
function weightedPickFrom(list, weightMap, rng){
  const r0 = rng || Math.random;
  if(!weightMap) return list[Math.floor(r0()*list.length)];
  const weights = list.map(id => (weightMap[id] !== undefined ? weightMap[id] : 1));
  const total = weights.reduce((a,b)=>a+b,0);
  let r = r0()*total;
  for(let i=0;i<list.length;i++){ r -= weights[i]; if(r<=0) return list[i]; }
  return list[list.length-1];
}
function tinturasLegales(contra, pool){
  const base = pool && pool.length ? pool : ALL_TINCTURES;
  if(!contra) return base;
  const leg = base.filter(t => esMetal(t) !== esMetal(contra));
  if(leg.length) return leg;
  return ALL_TINCTURES.filter(t => esMetal(t) !== esMetal(contra));
}
function pickTincture(contra, rng, pool){
  const leg = tinturasLegales(contra, pool);
  return leg[Math.floor((rng||Math.random)()*leg.length)];
}
function pickOne(list, rng){ return list[Math.floor((rng||Math.random)()*list.length)]; }
function anioFicticio(rng){ return String(1880 + Math.floor((rng||Math.random)()*120)); }

function randomCrest(paisCode, rng, opts){
  rng = rng || Math.random;
  opts = opts || {};
  const pais = paisPorCode(paisCode);
  const paletaPais = (opts.modo !== 'libre' && pais && pais.paletaBandera && pais.paletaBandera.length) ? pais.paletaBandera : null;
  let paleta = paletaPais;
  const { temaId, pesos } = pesarCatalogoPorTema(paisCode);
  const simbolos = cargasSugeridasPorPais(paisCode);
  let crest, intentos = 0;
  do {
    paleta = intentos < 6 ? paletaPais : null;
    const shapeId = weightedPickFrom(SHAPES, pesos && pesos.shapes, rng);
    let fieldPool = paleta || ALL_TINCTURES;
    if(opts.evitarCampo && opts.evitarCampo.length){
      const f = fieldPool.filter(t => !opts.evitarCampo.includes(t));
      fieldPool = f.length ? f : ALL_TINCTURES.filter(t => !opts.evitarCampo.includes(t));
    }
    const fieldTincture = pickOne(fieldPool, rng);

    const divisionId = weightedPickFrom(DIVISIONS, null, rng);
    const divisionTincture2 = divisionId !== 'ninguna' ? pickOne(paleta || ALL_TINCTURES, rng) : null;

    let ordinaryId = weightedPickFrom(ORDINARIES, pesos && pesos.ordinaries, rng);
    if(pesos && pesos.ordinaryForzadoNinguna) ordinaryId = 'ninguna';
    const ordinaryTincture = ordinaryId !== 'ninguna' ? pickTincture(fieldTincture, rng, paleta) : null;

    let chargeId;
    if(opts.carga) chargeId = opts.carga;
    else if(simbolos.length && rng() < 0.5) chargeId = pickOne(simbolos, rng).id;
    else chargeId = weightedPickFrom(CHARGES, pesos && pesos.charges, rng);
    const esNatural = !!CHARGE_NATURAL[chargeId];
    const contraCarga = ordinaryId !== 'ninguna' ? ordinaryTincture : fieldTincture;
    const chargeTincture = esNatural ? null : pickTincture(contraCarga, rng, paleta);

    const starsBase = (temaId === 'argentino_clasico' && pesos) ? (pesos.starsDefault || 0) : 0;
    const stars = Math.min(5, starsBase + Math.floor(rng()*3));
    const anio = rng() < 0.15 ? anioFicticio(rng) : null;
    const ornamento = (pesos && pesos.ornamentoForzado) || (rng() < 0.12 ? pickOne(['corona','laurel'], rng) : null);
    const ornamentoVariante = Math.floor(rng()*2);
    const ornamentoTincture = ornamento ? pickTincture(ordinaryId !== 'ninguna' ? ordinaryTincture : fieldTincture, rng) : null;
    const lema = ((pesos && pesos.lemaForzado) || rng() < 0.1) ? pickOne(LEMAS_INVENTADOS, rng) : null;

    crest = {
      pais: paisCode, tema: temaId, shapeId, fieldTincture, divisionId, divisionTincture2,
      ordinaryId, ordinaryTincture, chargeId, chargeTincture, naturalTincture: esNatural,
      stars, anio, ornamento, ornamentoVariante, ornamentoTincture, lema,
      ribbonStyle: Math.floor(rng()*RIBBON_STYLES),
    };
    intentos++;
  } while (matchesBloqueo(crest) && intentos < 10);
  crest.atrapadoEnBloqueo = matchesBloqueo(crest);
  return crest;
}
