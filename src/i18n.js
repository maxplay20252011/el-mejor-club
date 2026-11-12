/* ===================== Idiomas (es, en, pt, fr, it) ===================== */

const LANGS = [
  { code:'es', label:'Español', locale:'es-AR' },
  { code:'en', label:'English', locale:'en-GB' },
  { code:'pt', label:'Português', locale:'pt-BR' },
  { code:'fr', label:'Français', locale:'fr-FR' },
  { code:'it', label:'Italiano', locale:'it-IT' },
];
let LANG = 'es';
const I18N = { es: {} };              // I18N.<lang>[clave] = texto  (los archivos i18n_xx.js completan en/pt/fr/it)
const EVENTOS_I18N = {};              // EVENTOS_I18N.<lang>[idPlantilla] = { titulo, contexto, variables, opciones }
const SIMBOLOS_I18N = {};             // SIMBOLOS_I18N.<lang>[CODE] = [6 nombres; '' = genérico]
const PAISES_I18N = {};               // nombres que Intl no resuelve (ENG, SCT...) por idioma

/* t('clave', {var}) — cae a español y, si falta, devuelve la clave */
function t(clave, vars){
  const d = I18N[LANG];
  let s = d && d[clave] !== undefined ? d[clave] : I18N.es[clave];
  if(s === undefined) s = clave;
  return vars ? String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m)) : s;
}
function tieneT(clave){ return I18N.es[clave] !== undefined || (I18N[LANG] && I18N[LANG][clave] !== undefined); }

function detectarIdioma(){
  try{
    const g = localStorage.getItem('vd_lang');
    if(g && LANGS.some(l => l.code === g)) return g;
  }catch(e){}
  const n = ((typeof navigator !== 'undefined' && (navigator.language || (navigator.languages || [])[0])) || 'es').slice(0, 2).toLowerCase();
  return LANGS.some(l => l.code === n) ? n : 'es';
}
function fijarIdioma(code){
  if(!LANGS.some(l => l.code === code)) code = 'es';
  LANG = code;
  try{ localStorage.setItem('vd_lang', code); }catch(e){}
  if(typeof document !== 'undefined'){
    document.documentElement.lang = code;
    document.title = t('app.titulo');
  }
}
function localeActual(){ return (LANGS.find(l => l.code === LANG) || LANGS[0]).locale; }

/* nombre de país en el idioma actual (Intl.DisplayNames + tabla propia para selecciones sin código ISO) */
const _dnCache = {};
function nombrePais(code){
  const p = paisPorCode(code);
  const especial = PAISES_I18N[LANG] && PAISES_I18N[LANG][code];
  if(especial) return especial;
  if(LANG === 'es' || !/^[A-Z]{2}$/.test(code)) return p ? p.nombre : code;
  try{
    _dnCache[LANG] = _dnCache[LANG] || new Intl.DisplayNames([LANG], { type:'region' });
    const n = _dnCache[LANG].of(code);
    if(n && n !== code) return n;
  }catch(e){}
  return p ? p.nombre : code;
}

/* nombre de un símbolo por país en el idioma actual */
function nombreSimbolo(code, idx, s){
  if(s.verificado === false) return t('sym.gen.' + s.categoria);
  const tr = SIMBOLOS_I18N[LANG] && SIMBOLOS_I18N[LANG][code] && SIMBOLOS_I18N[LANG][code][idx];
  return tr || s.nombre;
}

/* Claves automáticas a partir de las constantes en español (se llama una vez, antes del primer render). */
function construirDiccionarioEs(){
  const es = I18N.es;
  const vuelca = (pref, obj) => Object.keys(obj).forEach(k => { es[pref + k] = obj[k]; });
  vuelca('shape.', SHAPE_LABEL); vuelca('div.', DIVISION_LABEL); vuelca('ord.', ORDINARY_LABEL);
  vuelca('charge.', CHARGE_LABEL); vuelca('tint.', TINCTURE_LABEL); vuelca('pos.', POS_LABEL);
  Object.keys(CUALIDADES).forEach(q => { es['q.' + q] = CUALIDADES[q].label; es['qd.' + q] = CUALIDADES[q].desc; });
  RASGOS.forEach((r, i) => { es['rasgo.' + i] = r; });
  ['facil','medio','dificil'].forEach(d => { es['dif.' + d] = DIFICULTAD_INFO[d].label; es['difd.' + d] = DIFICULTAD_INFO[d].desc; });
  Object.keys(OBJETIVOS).forEach(d => { es['obj.' + d] = OBJETIVOS[d].texto; });
  VEREDICTOS.forEach((v, i) => { es['ver.' + i + '.t'] = v.titulo; ['facil','medio','dificil'].forEach(d => { es['ver.' + i + '.' + d] = v[d]; }); });
  Object.keys(ZONA_TXT).forEach(z => { es['zona.' + z] = ZONA_TXT[z]; });
  return es;
}

function ordinal(n){
  if(LANG === 'en'){ const r = n % 100, u = n % 10; return n + (r >= 11 && r <= 13 ? 'th' : u === 1 ? 'st' : u === 2 ? 'nd' : u === 3 ? 'rd' : 'th'); }
  if(LANG === 'fr') return n === 1 ? '1er' : n + 'e';
  return n + 'º';
}
