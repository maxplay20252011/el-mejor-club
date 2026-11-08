/* Datos de países: PAISES (195), GLYPHS, SIMBOLOS_POR_PAIS (6 por país).
   Tabla compacta decodificada al final del bloque; solo `const` globales. */

const GLYPHS = ['ave','ave_vuelo','cuadrupedo','felino','cuernos','pez','reptil','mariposa','flor','hoja','arbol','palmera','espiga','fruto','montana','volcan','ola','isla','rio','duna','sol','luna','estrella','instrumento_cuerda','tambor','flauta','vasija','barco','herramienta','rueda_dentada','grano','mineral','taza','balon'];

const PAISES = (function(){
  // code|nombre|paleta|geoTag|culturalTag|cluster
  // paleta: o=oro p=plata r=rojo a=azul v=verde n=negro u=purpura c=celeste t=teal y=naranja
  const COL = {o:'oro',p:'plata',r:'rojo',a:'azul',v:'verde',n:'negro',u:'purpura',c:'celeste',t:'teal',y:'naranja'};
  const GEO = {sa:'sudamerica',na:'norteamerica',ca:'caribe',co:'costero',is:'insular',mo:'montanoso',se:'selva',de:'desertico',ll:'llanura',ar:'artico',ui:'urbano_industrial',po:'portuario',ru:'rural'};
  const CUL = {ag:'agropecuario',pq:'pesquero',mi:'minero',in:'industrial',vi:'vitivinicola',as:'artesanal',te:'tecnologico',tb:'tradicion_britanica'};
  const CLU = {hi:'hispano',lu:'luso',an:'anglo',ec:'europa_cont',ee:'europa_este',me:'mena',af:'africa_sub',ao:'asia_oriental',as:'asia_sur',sa:'sudeste_asiatico'};
  const T = [
'AF|Afganistán|nrv|mo,de|ag,as|as','AL|Albania|rn|mo,co|ag|ee','DZ|Argelia|vpr|de,co|mi|me','AD|Andorra|aor|mo|as|ec',
'AO|Angola|rno|co|mi|lu','AG|Antigua y Barbuda|rna|ca,is,co|pq|an','AR|Argentina|cp|sa,ll,co|ag,vi|hi','AM|Armenia|ray|mo|vi,as|ee',
'AU|Australia|apr|de,co|mi,ag,tb|an','AT|Austria|rp|mo|in|ec','AZ|Azerbaiyán|crv|mo,co|mi|ee','BS|Bahamas|con|ca,is,co|pq|an',
'BH|Baréin|rp|is,de,co|mi|me','BD|Bangladés|vr|ru,co|ag,as|as','BB|Barbados|aon|ca,is,co|ag|an','BY|Bielorrusia|rv|ll|ag,in|ee',
'BE|Bélgica|nor|ui,co|in|ec','BZ|Belice|arp|ca,se,co|ag,pq|an','BJ|Benín|vor|co|ag|af','BT|Bután|oy|mo|ag,as|as',
'BO|Bolivia|rov|sa,mo|mi,ag|hi','BA|Bosnia y Herzegovina|aop|mo|in|ee','BW|Botsuana|cpn|de,ll|mi,ag|af','BR|Brasil|voa|sa,se,co|ag|lu',
'BN|Brunéi|opn|se,co|mi|sa','BG|Bulgaria|pvr|mo,co|ag|ee','BF|Burkina Faso|rvo|ru|ag|af','BI|Burundi|rvp|mo|ag|af',
'CV|Cabo Verde|apr|is,co|pq|lu','KH|Camboya|rap|se,ru|ag|sa','CM|Camerún|vro|se,co|ag|af','CA|Canadá|rp|na,ar,ll|mi,tb|an',
'CF|República Centroafricana|apv|se|mi|af','TD|Chad|aor|de|ag|af','CL|Chile|apr|sa,mo,co|mi,vi|hi','CN|China|ro|mo,ui|in,te|ao',
'CO|Colombia|oar|sa,mo,se,co|ag|hi','KM|Comoras|vp|is,co|ag|af','CG|Congo|vor|se|mi|af','CD|República Democrática del Congo|cor|se|mi|af',
'CR|Costa Rica|apr|se,co|ag|hi','CI|Costa de Marfil|ypv|se,co|ag|af','HR|Croacia|rpa|co|pq|ec','CU|Cuba|apr|ca,is,co|ag|hi',
'CY|Chipre|pyv|is,co|ag|ec','CZ|Chequia|pra|ui|in|ec','DK|Dinamarca|rp|co|pq,te|ec','DJ|Yibuti|cvp|de,co,po|pq|me',
'DM|Dominica|von|ca,is,se|ag|an','DO|República Dominicana|arp|ca,is,co|ag|hi','EC|Ecuador|oar|sa,mo,co|ag,pq|hi','EG|Egipto|rpn|de,co|ag|me',
'SV|El Salvador|ap|co,mo|ag|hi','GQ|Guinea Ecuatorial|vpr|se,co|mi|af','ER|Eritrea|vra|de,co|ag|af','EE|Estonia|anp|co|te|ee',
'SZ|Esuatini|aor|mo|ag|af','ET|Etiopía|vor|mo|ag|af','FJ|Fiyi|crp|is,co|ag|an','FI|Finlandia|pa|ar,co|in,te|ec',
'FR|Francia|apr|co|vi,in|ec','GA|Gabón|voa|se,co|mi|af','GM|Gambia|rav|co,ru|ag|af','GE|Georgia|pr|mo,co|vi|ee',
'DE|Alemania|nro|ui|in,te|ec','GH|Ghana|rov|co,se|ag,mi|af','GR|Grecia|ap|is,co,po|pq|ec','GD|Granada|rov|ca,is|ag|an',
'GT|Guatemala|cp|mo,se|ag,as|hi','GN|Guinea|rov|co|mi|af','GW|Guinea-Bisáu|rov|co|ag|lu','GY|Guyana|vor|sa,se,co|mi|an',
'HT|Haití|ar|ca,mo,co|ag|ec','HN|Honduras|ap|co,mo|ag|hi','HU|Hungría|rpv|ll|ag|ec','IS|Islandia|apr|is,ar,co|pq|ec',
'IN|India|ypv|mo,co,ui|ag,as,te|as','ID|Indonesia|rp|is,se,co|ag,mi|sa','IR|Irán|vpr|mo,de|as,mi|me','IQ|Irak|rpn|de|mi|me',
'IE|Irlanda|vpy|is,co,ru|ag,tb|an','IL|Israel|ap|co,de|te|me','IT|Italia|vpr|co,mo|vi,in|ec','JM|Jamaica|von|ca,is,co|ag|an',
'JP|Japón|pr|is,mo,co|te,in|ao','JO|Jordania|npv|de|mi|me','KZ|Kazajistán|co|ll,de|mi,ag|ee','KE|Kenia|nrv|ll,co|ag|af',
'KI|Kiribati|rao|is,co|pq|an','KP|Corea del Norte|arp|mo|in|ao','KR|Corea del Sur|pra|mo,co,ui|te,in|ao','KW|Kuwait|vpr|de,co|mi|me',
'KG|Kirguistán|ro|mo|ag|ee','LA|Laos|rap|mo,se,ru|ag|sa','LV|Letonia|rp|co|ag|ee','LB|Líbano|rpv|mo,co|vi|me',
'LS|Lesoto|apv|mo|ag|af','LR|Liberia|rpa|co,se|mi|af','LY|Libia|rnv|de,co|mi|me','LI|Liechtenstein|ar|mo|in|ec',
'LT|Lituania|ovr|co|ag|ee','LU|Luxemburgo|rpc|ui|in,te|ec','MG|Madagascar|prv|is,se,co|ag|af','MW|Malaui|nrv|ru|ag|af',
'MY|Malasia|rao|se,co|in|sa','MV|Maldivas|rv|is,co|pq|as','ML|Malí|vor|de,ru|ag,mi|af','MT|Malta|pr|is,co,po|-|ec',
'MH|Islas Marshall|ayp|is,co|pq|an','MR|Mauritania|vo|de,co|pq,mi|me','MU|Mauricio|rao|is,co|ag|af','MX|México|vpr|na,de,co|ag,as|hi',
'FM|Micronesia|cp|is,co|pq|an','MD|Moldavia|aor|ll|vi,ag|ee','MC|Mónaco|rp|co,po|-|ec','MN|Mongolia|rao|ll,de|ag,mi|ao',
'ME|Montenegro|ro|mo,co|-|ee','MA|Marruecos|rv|de,mo,co|ag,as|me','MZ|Mozambique|vno|co|ag|lu','MM|Myanmar|ovr|se,co|ag|sa',
'NA|Namibia|arv|de,co|mi|af','NR|Nauru|aop|is|mi|an','NP|Nepal|ra|mo|ag,as|as','NL|Países Bajos|rpa|ll,co,po|ag,in|ec',
'NZ|Nueva Zelanda|arp|is,mo,co|ag,tb|an','NI|Nicaragua|ap|se,co|ag|hi','NE|Níger|ypv|de|mi,ag|af','NG|Nigeria|vp|se,co|ag,mi|af',
'MK|Macedonia del Norte|ro|mo|ag|ee','NO|Noruega|rap|ar,mo,co|pq,mi|ec','OM|Omán|rpv|de,co|mi|me','PK|Pakistán|vp|mo,de|ag,as|as',
'PW|Palaos|co|is,co|pq|an','PA|Panamá|arp|se,co,po|-|hi','PG|Papúa Nueva Guinea|rno|is,se|mi|an','PY|Paraguay|rpa|sa,ll,ru|ag|hi',
'PE|Perú|rp|sa,mo,co|mi,as|hi','PH|Filipinas|aro|is,se,co|ag|sa','PL|Polonia|pr|ll|in,ag|ee','PT|Portugal|rvo|co,po|vi,pq|lu',
'QA|Catar|up|de,co|mi|me','RO|Rumania|aor|mo,ll|ag,mi|ee','RU|Rusia|par|ll,ar|mi,in|ee','RW|Ruanda|cov|mo|ag|af',
'KN|San Cristóbal y Nieves|vro|ca,is|ag|an','LC|Santa Lucía|con|ca,is|ag|an','VC|San Vicente y las Granadinas|aov|ca,is|ag|an','WS|Samoa|ra|is|ag|an',
'SM|San Marino|cp|mo|-|ec','ST|Santo Tomé y Príncipe|vor|is,co|ag|lu','SA|Arabia Saudita|vp|de|mi|me','SN|Senegal|vor|co|pq,ag|af',
'RS|Serbia|rap|ll|ag|ee','SC|Seychelles|aor|is,co|pq|af','SL|Sierra Leona|vpa|co|mi|af','SG|Singapur|rp|is,po,ui|te|sa',
'SK|Eslovaquia|par|mo|in|ec','SI|Eslovenia|par|mo|in|ec','SB|Islas Salomón|avo|is,se|pq|an','SO|Somalia|cp|de,co|pq|me',
'ZA|Sudáfrica|vor|co,ll|mi|af','SS|Sudán del Sur|nrv|ll|ag|af','ES|España|ro|co,mo|vi,ag|hi','LK|Sri Lanka|uyv|is,co|ag|as',
'SD|Sudán|rpn|de|ag|me','SR|Surinam|vro|sa,se,co|mi|ec','SE|Suecia|ao|co|in,te|ec','CH|Suiza|rp|mo|in|ec',
'SY|Siria|rpn|de,co|ag|me','TJ|Tayikistán|rpv|mo|ag|ee','TZ|Tanzania|voa|ll,co,se|ag|af','TH|Tailandia|rpa|se,co|ag|sa',
'TL|Timor Oriental|ron|is,co|ag|sa','TG|Togo|vor|co|ag|af','TO|Tonga|rp|is|ag|an','TT|Trinidad y Tobago|rpn|ca,is,co|in|an',
'TN|Túnez|rp|de,co|ag|me','TR|Turquía|rp|co,mo|in,as|me','TM|Turkmenistán|vr|de|ag,as|ee','TV|Tuvalu|co|is,co|pq|an',
'UG|Uganda|nor|ll,ru|ag|af','UA|Ucrania|ao|ll|ag,in|ee','AE|Emiratos Árabes Unidos|vrn|de,co|mi|me','GB|Reino Unido|rap|is,co,ui|in,tb|an',
'US|Estados Unidos|arp|na,ll,ui|in,te|an','UY|Uruguay|cpo|sa,ll,co|ag|hi','UZ|Uzbekistán|cpv|de|ag,as|ee','VU|Vanuatu|rvo|is|ag|an',
'VE|Venezuela|oar|sa,co,se|mi|hi','VN|Vietnam|ro|se,co|ag|sa','YE|Yemen|rpn|de,co|ag|me','ZM|Zambia|vrn|ll|mi|af',
'ZW|Zimbabue|vor|ll|ag,mi|af','VA|Santa Sede|op|ui|as|ec','PS|Palestina|npv|mo|ag|me'
  ];
  const dec = (s, map) => s === '-' ? [] : s.split(',').map(k => map[k]);
  return T.map(row => {
    const [code, nombre, pal, geo, cul, clu] = row.split('|');
    return { code, nombre, paletaBandera: pal.split('').map(k => COL[k]), geoTag: dec(geo, GEO), culturalTag: dec(cul, CUL), cluster: CLU[clu] };
  });
})();

const SIMBOLOS_POR_PAIS = (function(){
  const CATS = ['fauna','flora','geografico','cultural','economico','libre'];
  const GEN = {
    fauna:['fauna_regional','Fauna regional','cuadrupedo'], flora:['flora_regional','Flora regional','hoja'],
    geografico:['paisaje_regional','Paisaje regional','montana'], cultural:['instrumento_regional','Instrumento tradicional','tambor'],
    economico:['oficio_regional','Oficio tradicional','herramienta'], libre:['emblema_regional','Emblema regional','estrella'],
  };
  // Orden: fauna, flora, geografico, cultural, economico, libre. '' = genérico (verificado:false). Formato 'id|Nombre|glyph'.
  const T = {
AR:['hornero|Hornero|ave','ceibo|Flor del ceibo|flor','cataratas|Cataratas del Iguazú|ola','mate|Mate|taza','ganaderia|Ganadería|cuernos','futbol|Fútbol|balon'],
BR:['jaguar|Jaguar|felino','ipe|Ipê amarelo|arbol','amazonia|Selva amazónica|rio','berimbau|Berimbau|instrumento_cuerda','cafe|Café|grano','futbol|Fútbol|balon'],
UY:['tero|Tero|ave','ceibo|Flor del ceibo|flor','','mate|Mate|taza','ganaderia|Ganadería|cuernos','futbol|Fútbol|balon'],
PY:['puma|Puma|felino','lapacho|Lapacho|arbol','','arpa|Arpa paraguaya|instrumento_cuerda','',''],
CL:['condor|Cóndor andino|ave_vuelo','copihue|Copihue|flor','cordillera|Cordillera de los Andes|montana','guitarron|Guitarrón chileno|instrumento_cuerda','cobre|Minería del cobre|mineral',''],
PE:['llama|Llama|cuadrupedo','cantuta|Cantuta|flor','andes|Andes|montana','quena|Quena|flauta','papa|Papa|fruto','condor|Cóndor andino|ave_vuelo'],
CO:['condor|Cóndor andino|ave_vuelo','orquidea|Orquídea|flor','andes|Andes|montana','tambor_alegre|Tambor alegre|tambor','cafe|Café|grano','palma_cera|Palma de cera del Quindío|palmera'],
MX:['aguila_real|Águila real|ave_vuelo','dalia|Dalia|flor','volcan|Volcán|volcan','guitarra|Guitarra de mariachi|instrumento_cuerda','maiz|Maíz|espiga','agave|Agave|hoja'],
EC:['condor|Cóndor andino|ave_vuelo','rosa|Rosa|flor','volcan|Volcán andino|volcan','','banano|Banano|fruto','tortuga|Tortuga gigante|reptil'],
VE:['turpial|Turpial|ave','orquidea|Orquídea|flor','tepui|Tepuy|montana','cuatro|Cuatro venezolano|instrumento_cuerda','petroleo|Petróleo|rueda_dentada','salto_angel|Salto Ángel|ola'],
BO:['llama|Llama|cuadrupedo','kantuta|Kantuta|flor','altiplano|Altiplano|montana','charango|Charango|instrumento_cuerda','mineria|Minería|mineral','quinua|Quinua|grano'],
CR:['yigüirro|Yigüirro|ave','guaria_morada|Guaria morada|flor','volcan|Volcán|volcan','carreta|Carreta típica|rueda_dentada','cafe|Café|grano',''],
PA:['aguila_harpia|Águila harpía|ave_vuelo','','','','canal|Canal interoceánico|barco',''],
GT:['quetzal|Quetzal|ave','monja_blanca|Monja blanca|flor','volcan|Volcán|volcan','marimba|Marimba|tambor','cafe|Café|grano','ceiba|Ceiba|arbol'],
SV:['torogoz|Torogoz|ave','izote|Flor de izote|flor','','','',''],
NI:['guardabarranco|Guardabarranco|ave','sacuanjoche|Sacuanjoche|flor','','','',''],
HN:['guara_roja|Guara roja|ave','','','','',''],
CU:['tocororo|Tocororo|ave','mariposa|Flor de mariposa|flor','','tambor_bata|Tambor batá|tambor','cana|Caña de azúcar|espiga','palma_real|Palma real|palmera'],
DO:['cigua_palmera|Cigua palmera|ave','','','tambora|Tambora|tambor','',''],
JM:['colibri|Colibrí cola de gaviota|ave','','blue_mountains|Montañas Azules|montana','','cafe|Café Blue Mountain|grano',''],
TT:['ibis_escarlata|Ibis escarlata|ave','chaconia|Chaconia|flor','','steelpan|Steelpan|tambor','',''],
BB:['','orgullo_barbados|Orgullo de Barbados|flor','','','cana|Caña de azúcar|espiga',''],
LC:['amazona|Amazona de Santa Lucía|ave','','pitons|Pitons|montana','','',''],
BS:['flamenco|Flamenco|ave_vuelo','','cayos|Cayos e islas|isla','','',''],
US:['aguila_calva|Águila calva|ave_vuelo','rosa|Rosa|flor','gran_canon|Gran Cañón|montana','banjo|Banjo|instrumento_cuerda','maiz|Maíz|espiga','bisonte|Bisonte|cuernos'],
CA:['castor|Castor|cuadrupedo','arce|Arce|arbol','rocosas|Montañas Rocosas|montana','canoa|Canoa|barco','trigo|Trigo|espiga',''],
ES:['toro|Toro bravo|cuernos','olivo|Olivo|arbol','','guitarra|Guitarra española|instrumento_cuerda','vid|Viñedo|fruto','futbol|Fútbol|balon'],
PT:['lince|Lince ibérico|felino','alcornoque|Alcornoque|arbol','atlantico|Costa atlántica|ola','guitarra_portuguesa|Guitarra portuguesa|instrumento_cuerda','vid|Viñedo|fruto','carabela|Carabela|barco'],
IT:['lobo_apenino|Lobo apenino|cuadrupedo','olivo|Olivo|arbol','vesubio|Volcán|volcan','mandolina|Mandolina|instrumento_cuerda','vid|Viñedo|fruto','futbol|Fútbol|balon'],
FR:['gallo|Gallo|ave','iris|Iris|flor','alpes|Alpes|montana','acordeon|Acordeón|instrumento_cuerda','vid|Viñedo|fruto',''],
DE:['aguila|Águila|ave_vuelo','aciano|Aciano|flor','bosque_negro|Selva Negra|arbol','jarra|Jarra cervecera|taza','industria|Industria automotriz|rueda_dentada','futbol|Fútbol|balon'],
GB:['petirrojo|Petirrojo|ave','rosa|Rosa|flor','','gaita|Gaita|flauta','industria|Revolución industrial|rueda_dentada','futbol|Fútbol|balon'],
IE:['liebre|Liebre irlandesa|cuadrupedo','trebol|Trébol|hoja','','arpa|Arpa celta|instrumento_cuerda','',''],
NL:['','tulipan|Tulipán|flor','diques|Diques y polders|ola','molino|Molino de viento|rueda_dentada','',''],
BE:['','','','cerveza|Cerveza|taza','chocolate|Chocolate|grano',''],
CH:['marmota|Marmota alpina|cuadrupedo','edelweiss|Edelweiss|flor','alpes|Alpes|montana','cuerno_alpino|Cuerno alpino|flauta','reloj|Relojería|rueda_dentada',''],
AT:['','edelweiss|Edelweiss|flor','alpes|Alpes|montana','violin|Violín|instrumento_cuerda','',''],
SE:['alce|Alce|cuernos','abedul|Abedul|arbol','','caballo_dala|Caballo de Dalarna|cuadrupedo','',''],
NO:['alce|Alce|cuernos','','fiordo|Fiordo|ola','violin_hardanger|Violín de Hardanger|instrumento_cuerda','bacalao|Pesca de bacalao|pez',''],
FI:['cisne_cantor|Cisne cantor|ave','lirio_valle|Lirio de los valles|flor','lagos|Lagos|ola','kantele|Kantele|instrumento_cuerda','madera|Bosques|arbol',''],
DK:['cisne_mudo|Cisne vulgar|ave','haya|Haya|arbol','','barco_vikingo|Barco vikingo|barco','',''],
IS:['frailecillo|Frailecillo|ave','','volcan|Volcán|volcan','','bacalao|Pesca|pez','caballo_islandes|Caballo islandés|cuadrupedo'],
PL:['bisonte|Bisonte europeo|cuernos','','tatras|Montes Tatras|montana','','carbon|Minería del carbón|mineral',''],
GR:['delfin|Delfín|pez','olivo|Olivo|arbol','islas|Islas del Egeo|isla','bouzouki|Bouzouki|instrumento_cuerda','marina|Marina mercante|barco','laurel|Laurel|hoja'],
TR:['kangal|Perro kangal|cuadrupedo','tulipan|Tulipán|flor','capadocia|Capadocia|montana','saz|Saz|instrumento_cuerda','avellana|Avellana|fruto','te|Té|taza'],
RU:['oso_pardo|Oso pardo|cuadrupedo','abedul|Abedul|arbol','lago_baikal|Lago Baikal|ola','balalaika|Balalaika|instrumento_cuerda','','matrioska|Matrioska|vasija'],
UA:['','girasol|Girasol|flor','estepa|Estepa|sol','bandura|Bandura|instrumento_cuerda','trigo|Trigo|espiga',''],
BY:['bisonte|Bisonte europeo|cuernos','lino|Lino|hoja','','','',''],
BG:['','rosa|Rosa búlgara|flor','','gaida|Gaida|flauta','',''],
RS:['','','','gusle|Gusle|instrumento_cuerda','',''],
HR:['dalmata|Dálmata|cuadrupedo','','adriatico|Costa adriática|ola','','',''],
SI:['','tilo|Tilo|arbol','','','',''],
SK:['','','','fujara|Fujara|flauta','',''],
LT:['','','','','ambar|Ámbar|mineral',''],
EE:['golondrina|Golondrina común|ave','aciano|Aciano|flor','','','',''],
MD:['','','','','vid|Viñedo|fruto',''],
MT:['','','','','',''],
AD:['isard|Rebeco|cuernos','','','','',''],
GE:['','','caucaso|Cáucaso|montana','qvevri|Qvevri|vasija','vid|Viñedo|fruto',''],
AM:['','albaricoque|Albaricoque|fruto','ararat|Monte Ararat|montana','duduk|Duduk|flauta','',''],
AZ:['','granada|Granada|fruto','','tar|Tar|instrumento_cuerda','',''],
KZ:['aguila_real|Águila real|ave_vuelo','','estepa|Estepa|sol','dombra|Dombra|instrumento_cuerda','trigo|Trigo|espiga','caballo|Caballo|cuadrupedo'],
UZ:['','','','dutar|Dutar|instrumento_cuerda','algodon|Algodón|fruto',''],
MN:['caballo|Caballo mongol|cuadrupedo','','estepa|Estepa|sol','morin_khuur|Morin khuur|instrumento_cuerda','ganaderia|Ganadería|cuernos',''],
CN:['panda|Panda gigante|cuadrupedo','peonia|Peonía|flor','yangtse|Río Yangtsé|rio','guzheng|Guzheng|instrumento_cuerda','te|Té|taza','bambu|Bambú|hoja'],
JP:['grulla|Grulla de Manchuria|ave_vuelo','cerezo|Cerezo en flor|flor','monte_fuji|Monte Fuji|volcan','taiko|Taiko|tambor','arroz|Arroz|espiga','koi|Carpa koi|pez'],
KR:['tigre|Tigre siberiano|felino','rosa_sharon|Rosa de Sharon|flor','','gayageum|Gayageum|instrumento_cuerda','',''],
KP:['','magnolia|Magnolia|flor','','','',''],
IN:['tigre_bengala|Tigre de Bengala|felino','loto|Flor de loto|flor','himalaya|Himalaya|montana','sitar|Sitar|instrumento_cuerda','te|Té|taza','pavo_real|Pavo real|ave'],
PK:['markhor|Markhor|cuernos','jazmin|Jazmín|flor','karakoram|Karakórum|montana','','algodon|Algodón|fruto',''],
BD:['tigre_bengala|Tigre de Bengala|felino','nenufar|Nenúfar|flor','delta|Delta del Ganges|rio','','yute|Yute|grano','hilsa|Pez hilsa|pez'],
LK:['elefante|Elefante asiático|cuadrupedo','loto_azul|Loto azul|flor','','','te|Té de Ceilán|taza',''],
NP:['','rododendro|Rododendro|flor','himalaya|Himalaya|montana','','',''],
ID:['dragon_komodo|Dragón de Komodo|reptil','orquidea_luna|Orquídea luna|flor','volcan|Volcán|volcan','gamelan|Gamelán|tambor','arroz|Arroz|espiga',''],
TH:['elefante|Elefante|cuadrupedo','caña_fistula|Caña fístula|flor','','','arroz|Arroz|espiga','barco_cola_larga|Barco de cola larga|barco'],
VN:['bufalo|Búfalo de agua|cuernos','loto|Flor de loto|flor','mekong|Delta del Mekong|rio','dan_bau|Đàn bầu|instrumento_cuerda','arroz|Arroz|espiga','sombrero_non|Sombrero cónico|vasija'],
PH:['aguila_filipina|Águila filipina|ave_vuelo','sampaguita|Sampaguita|flor','archipielago|Archipiélago|isla','kulintang|Kulintang|tambor','coco|Coco|fruto','carabao|Carabao|cuernos'],
MY:['tigre_malayo|Tigre malayo|felino','hibisco|Hibisco|flor','','','palma_aceite|Palma de aceite|palmera',''],
SG:['','orquidea|Orquídea Vanda|flor','','','puerto|Puerto|barco',''],
AU:['canguro|Canguro|cuadrupedo','acacia|Acacia dorada|flor','outback|Outback|duna','didgeridu|Didjeridú|flauta','ovejas|Ganadería ovina|cuernos','koala|Koala|cuadrupedo'],
NZ:['kiwi|Kiwi|ave','kowhai|Kōwhai|flor','volcan|Volcán|volcan','','ovejas|Ganadería ovina|cuernos',''],
FJ:['','tagimaucia|Tagimaucia|flor','','','',''],
PG:['ave_paraiso|Ave del paraíso|ave','','','kundu|Tambor kundu|tambor','',''],
EG:['halcon|Halcón|ave_vuelo','loto|Loto del Nilo|flor','nilo|Río Nilo|rio','oud|Laúd|instrumento_cuerda','algodon|Algodón|fruto',''],
MA:['leon_atlas|León del Atlas|felino','arganero|Árbol de argán|arbol','atlas|Montes Atlas|montana','te_menta|Té de menta|taza','fosfato|Fosfatos|mineral',''],
DZ:['fenec|Zorro fenec|cuadrupedo','','sahara|Sáhara|duna','','datil|Dátil|fruto',''],
TN:['','jazmin|Jazmín|flor','sahara|Sáhara|duna','','olivo|Olivo|arbol',''],
NG:['','','niger|Río Níger|rio','tambor_parlante|Tambor parlante|tambor','cacao|Cacao|grano',''],
GH:['','','volta|Río Volta|rio','atumpan|Tambor atumpan|tambor','cacao|Cacao|grano',''],
SN:['','baobab|Baobab|arbol','','kora|Kora|instrumento_cuerda','mani|Maní|grano',''],
CI:['elefante|Elefante|cuadrupedo','','','','cacao|Cacao|grano',''],
ML:['','','','kora|Kora|instrumento_cuerda','',''],
ZA:['springbok|Springbok|cuadrupedo','protea|Protea real|flor','montana_mesa|Montaña de la Mesa|montana','vuvuzela|Vuvuzela|flauta','mineria|Minería|mineral',''],
KE:['leon|León|felino','acacia|Acacia|arbol','rift|Gran Valle del Rift|montana','','te|Té|taza',''],
ET:['lobo_etiope|Lobo etíope|cuadrupedo','','altiplano|Altiplano etíope|montana','krar|Krar|instrumento_cuerda','cafe|Café|grano',''],
TZ:['jirafa|Jirafa|cuadrupedo','','kilimanjaro|Kilimanjaro|volcan','','',''],
UG:['grulla_coronada|Grulla coronada|ave','','','','',''],
RW:['gorila|Gorila de montaña|cuadrupedo','','','','',''],
MG:['lemur|Lémur de cola anillada|cuadrupedo','baobab|Baobab|arbol','','','vainilla|Vainilla|fruto',''],
CD:['okapi|Okapi|cuadrupedo','','rio_congo|Río Congo|rio','','cobre|Minería de cobre|mineral',''],
AO:['palanca_negra|Palanca negra gigante|cuernos','','','','',''],
NA:['orix|Órix|cuernos','','dunas|Dunas del desierto del Namib|duna','','',''],
BW:['cebra|Cebra|cuadrupedo','','','','diamantes|Diamantes|mineral',''],
SC:['tortuga|Tortuga gigante|reptil','coco_de_mar|Coco de mar|palmera','','','',''],
MU:['dodo|Dodo|ave','','','','azucar|Caña de azúcar|espiga',''],
SO:['camello|Camello|cuadrupedo','','','','',''],
SA:['camello|Camello|cuadrupedo','palma_datilera|Palma datilera|palmera','desierto|Desierto|duna','oud|Laúd|instrumento_cuerda','petroleo|Petróleo|rueda_dentada','halcon|Halcón|ave_vuelo'],
AE:['halcon|Halcón|ave_vuelo','ghaf|Árbol ghaf|arbol','dunas|Dunas|duna','','petroleo|Petróleo|rueda_dentada',''],
QA:['orix|Órix árabe|cuernos','','dunas|Dunas|duna','dhow|Dhow|barco','perlas|Pesca de perlas|mineral',''],
IR:['guepardo|Guepardo asiático|felino','rosa|Rosa damascena|flor','elburz|Montes Elburz|montana','santur|Santur|instrumento_cuerda','azafran|Azafrán|flor','granada|Granada|fruto'],
IQ:['','palma_datilera|Palma datilera|palmera','tigris_eufrates|Ríos Tigris y Éufrates|rio','','',''],
IL:['','ciclamen|Ciclamen|flor','mar_muerto|Mar Muerto|ola','','',''],
JO:['orix|Órix|cuernos','iris_negro|Iris negro|flor','wadi_rum|Wadi Rum|duna','','fosfato|Fosfatos|mineral',''],
LB:['','cedro|Cedro|arbol','monte_libano|Monte Líbano|montana','','',''],
PS:['','olivo|Olivo|arbol','','','naranja_jaffa|Naranja de Jaffa|fruto','']
  };
  const out = {};
  PAISES.forEach(p => {
    const row = T[p.code] || [];
    out[p.code] = CATS.map((cat, i) => {
      const cell = row[i];
      if(cell){
        const [id, nombre, glyph] = cell.split('|');
        return { categoria: cat, id: id.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9_]/g,'_'), nombre, verificado: true, glyph };
      }
      const g = GEN[cat];
      return { categoria: cat, id: g[0], nombre: g[1], verificado: false, glyph: g[2] };
    });
  });
  return out;
})();
