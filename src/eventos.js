/* Pool de decisiones — plantillas con variables. expandirPlantillas() devuelve los eventos concretos. */

const D = (g, p, r, c, v) => (v === undefined ? { gestion: g, prensa: p, resultado: r, caja: c } : { gestion: g, prensa: p, resultado: r, caja: c, vestuario: v });
const O = (texto, sub, d, msg, extra) => Object.assign({ texto, sub, d, msg }, typeof extra === 'string' ? { setea: extra } : extra);
const A = (texto, sub, p, okD, okMsg, malD, malMsg, okX, malX) => ({
  texto, sub, azar: { p, ok: Object.assign({ d: okD, msg: okMsg }, okX), mal: Object.assign({ d: malD, msg: malMsg }, malX) },
});
const VENDE = { vende: true };
const FICHA = { ficha: true };

const PLANTILLAS_EVENTOS = [

/* ===================== DEPORTIVO ===================== */
{ id:'dep_refuerzo', cat:'deportivo', jugador:'fichaje',
  titulo:'El técnico pide un refuerzo urgente',
  contexto:'Con {MOTIVO}, el técnico te pide un refuerzo {PLAZO}. Hay un candidato: {JUGADOR}, {JPOS} de {JEDAD} años y nivel {JRATING}.',
  variables:{ MOTIVO:['dos lesionados en el mediocampo','la sanción de un titular','una racha de goles en contra','la venta de un compañero clave'],
              PLAZO:['esta misma semana','antes del cierre del libro de pases','para el partido del domingo'] },
  opciones:[
    O('Fichar a {JUGADOR}','Refuerzo ya, sale plata',D(4,3,6,-120),'{JUGADOR} llegó a {CLUB}: el técnico sonríe y la tesorería hace cuentas.',FICHA),
    O('Que el plantel se la banque','Cero gasto, más riesgo',D(2,0,-4,0),'Apostaste al grupo. {JUGADOR} no llegó y el técnico lo recordó en la conferencia.'),
    A('Ofrecerle un contrato corto a {JUGADOR}','Mitad de precio, pero puede ofenderlo',0.5,D(3,2,4,-60),'{JUGADOR} aceptó el trato corto y rinde desde el primer día.',D(-3,-2,-2,-10),'{JUGADOR} se ofendió y firmó en otro lado: perdiste tiempo y gestiones.',FICHA),
  ] },

{ id:'dep_fichaje_ambicioso', cat:'deportivo', jugador:'fichaje',
  titulo:'Fichaje ambicioso',
  contexto:'{REPRE} te ofrece a {JUGADOR} ({JPOS}, {JEDAD} años, nivel {JRATING}) y {COND}. Es un nombre fuerte, pero caro.',
  variables:{ REPRE:['Un representante con buenos contactos','Un empresario de la zona','Un ex dirigente devenido en intermediario'],
              COND:['pide una cláusula de salida baja','exige un contrato largo y bien pago','reclama la número 10 y la titularidad'] },
  opciones:[
    O('Hacer la inversión','Fichaje de impacto, caja golpeada',D(3,6,4,-150),'Presentaste a {JUGADOR} con bombos y platillos. Los socios ya hacen cuentas.',{ setea:'fichaje_caro', ficha:true }),
    O('Negociar a la baja','Menos riesgo, menos brillo',D(1,-2,1,-60),'Cerraste más barato: {JUGADOR} llegó sin ruido y sin promesas.',FICHA),
    O('Dejarlo pasar','Cuidás la caja',D(0,-4,-3,0),'Dijiste que no. {JUGADOR} firmó en otro lado y el técnico se quedó mirando el techo.'),
  ] },

{ id:'dep_juvenil_venta', cat:'deportivo', jugador:'joven',
  titulo:'Venta de un juvenil al exterior',
  contexto:'{DESTINO} quiere llevarse a {JUGADOR}, {JPOS} de {JEDAD} años, {FORMA}. La hinchada lo adora.',
  variables:{ DESTINO:['Un club de Europa del Este','Una liga de Medio Oriente','Un equipo de México','Un club de segunda división europea'],
              FORMA:['con pago en cuotas','con un porcentaje de una venta futura','al contado pero con descuento'] },
  opciones:[
    O('Vender','Entra plata, se va la promesa',D(-5,-2,-4,140),'{JUGADOR} se fue y {CLUB} cobró. En la tribuna hubo pañuelos.',VENDE),
    O('Retenerlo','Te quedás con la promesa',D(5,3,3,-15),'{JUGADOR} se queda. La popular lo canta toda la tarde.'),
    A('Pedir más plata','Puede salir redondo o romperse',0.5,D(-3,0,-3,220),'Aceptaron la contraoferta: negocio redondo con {JUGADOR}.',D(-6,-3,-2,0),'El comprador se ofendió y se bajó: ni plata ni juvenil contento.',VENDE),
  ] },

{ id:'dep_lesion_capitan', cat:'deportivo', jugador:'capitan',
  titulo:'Lesión grave del capitán',
  contexto:'{JUGADOR}, capitán y {JPOS} de {JEDAD} años, sufrió {LESION} y estará afuera {TIEMPO}. El vestuario espera tu respuesta.',
  variables:{ LESION:['una rotura de ligamentos','una fractura de peroné','un desgarro grave'],
              TIEMPO:['unos tres meses','unos cuatro meses','el resto de la temporada','un tiempo indefinido'] },
  opciones:[
    O('Fichar un reemplazo','Parche caro',D(2,1,3,-100),'Sumaste un reemplazo. {JUGADOR} sigue el proceso desde la tribuna.'),
    O('Confiar en el plantel','Sin gasto, con riesgo',D(1,0,-4,0),'Sin {JUGADOR} el equipo se resiente, pero el grupo se muestra unido.'),
    A('Apostar a una recuperación exprés','Puede salir muy bien o muy mal',0.4,D(7,5,6,-30),'{JUGADOR} volvió antes de lo previsto: el vestuario explotó de alegría.',D(-8,-4,-6,-60),'{JUGADOR} se volvió a lesionar y la apuesta salió carísima.'),
  ] },

{ id:'dep_descenso', cat:'deportivo', jugador:null,
  titulo:'Pelea directa por no descender',
  contexto:'Jugás {CONTEXTO} contra {RIVAL}: el que pierde queda al borde del abismo.',
  variables:{ RIVAL:['un rival directo','un equipo que viene en alza','el último de la tabla'],
              CONTEXTO:['en cancha neutral','de local con la cancha llena','de visitante, muy lejos de casa'] },
  opciones:[
    A('Salir a ganar sí o sí','Todo o nada',0.5,D(6,5,10,0),'Ganaste el partido de la vida: {CLUB} respira.',D(-8,-6,-8,0),'Perdiste y el abismo se acerca. La tribuna no perdona.'),
    O('Planteo cuidadoso','Un punto y a sufrir',D(0,-1,3,0),'Empate sufrido. Se estira la agonía, pero se suma.'),
    O('Prometer premios al plantel','Premios por ganar',D(2,0,5,-70),'Prometiste premios y el plantel salió con otra cara. La tesorería, no tanto.'),
  ] },

{ id:'dep_tecnico_garantias', cat:'deportivo', jugador:null,
  titulo:'El técnico pide garantías',
  contexto:'El {PERFIL} que dirige a {CLUB} avisa que sin {EXIGE} no sigue.',
  variables:{ PERFIL:['técnico joven','técnico veterano','ex jugador histórico'],
              EXIGE:['más tiempo de crédito','un ayudante de su confianza','menos presión mediática'] },
  opciones:[
    O('Darle lo que pide','Lo atás al club',D(-1,2,3,-40),'Le diste el gusto: el técnico se sintió respaldado y el equipo lo notó.'),
    O('Contrato hasta fin de temporada','Sin compromisos largos',D(1,-1,-3,0),'Le marcaste la cancha. El técnico se enojó y se nota en el vestuario.'),
    A('Dejarlo ir','Apuesta fuerte',0.5,D(4,4,5,20),'El nuevo entrenador llegó con ideas frescas y {CLUB} arrancó volando.',D(-7,-5,-6,-20),'Soltaste al técnico y el reemplazo no funciona: la hinchada te pasa factura.'),
  ] },

{ id:'dep_cambio_dt', cat:'deportivo', jugador:null,
  titulo:'¿Echar al técnico?',
  contexto:'Hay {RACHA} y {PRESION} pide su cabeza.',
  variables:{ RACHA:['cuatro partidos sin ganar','tres derrotas seguidas','un 0-3 en casa'],
              PRESION:['la prensa','la hinchada','un sector de la comisión'] },
  opciones:[
    O('Echarlo','Cambio de aire, indemnización',D(3,-1,2,-60),'Echaste al técnico. El nuevo trajo energía, aunque la indemnización duele.'),
    O('Bancarlo','Ratificás el proyecto',D(-4,-3,-2,0),'Respaldaste al técnico. Los críticos van a recordártelo.'),
    A('Darle dos partidos más','Última oportunidad',0.5,D(4,2,5,0),'El técnico reaccionó y salvó su puesto: parecías un visionario.',D(-6,-5,-5,0),'Perdió otra vez y quedaste como un ingenuo.'),
  ] },

{ id:'dep_figura_banco', cat:'deportivo', jugador:'figura',
  titulo:'El técnico quiere sentar a una figura',
  contexto:'Para {PARTIDO}, el técnico quiere sentar a {JUGADOR} ({JPOS}, nivel {JRATING}) {RAZON}. La hinchada no lo entiende.',
  variables:{ PARTIDO:['la semifinal de copa','el clásico','el partido decisivo'],
              RAZON:['por bajo rendimiento','por una molestia que no cura','por indisciplina táctica'] },
  opciones:[
    O('Respaldar al técnico','Autoridad contra hinchada',D(-3,-2,2,0),'El técnico sentó a {JUGADOR} y el equipo mostró más orden. La popular chifló.'),
    O('Pedirle que lo ponga','Figura en cancha, técnico molesto',D(4,3,3,0),'{JUGADOR} jugó y la hinchada se ilusionó. El técnico no te perdonó.'),
    A('Dejarlo a su criterio','Lo resuelve la cancha',0.5,D(2,1,5,0),'El técnico acertó: sin {JUGADOR} el equipo fue más equilibrado.',D(-5,-3,-4,0),'Sin {JUGADOR} el equipo se apagó y le echaron la culpa a la dirigencia.'),
  ] },

{ id:'dep_pretemporada', cat:'deportivo', jugador:null,
  titulo:'Pretemporada: {PLAN}',
  contexto:'El cuerpo técnico propone {PLAN} {PRESUPUESTO}. La idea divide opiniones.',
  variables:{ PLAN:['una gira por el interior','un amistoso internacional','un torneo de verano'],
              PRESUPUESTO:['con poco presupuesto','con una campaña de socios','con un auspiciante local'] },
  opciones:[
    O('Aprobar el plan','Ritmo y visibilidad, sale plata',D(2,3,4,-90),'La pretemporada salió completa: el plantel llegó afilado y los socios lo vieron.'),
    O('Plan austero en el predio','Ahorro, menos ritmo',D(-1,-2,1,0),'Trabajaron en casa. Ahorraste, pero el roce de competencia faltó.'),
    A('Aprobarlo con partido de exhibición pago','Puede salir bien o mal',0.5,D(3,2,4,30),'La exhibición juntó gente y plata: el plan se pagó solo.',D(-3,-3,2,-60),'La exhibición fue un fiasco y la gira quedó a pérdida.'),
  ] },

{ id:'dep_cancha', cat:'deportivo', jugador:null,
  titulo:'La cancha está en mal estado',
  contexto:'{PROBLEMA} mostró señales de colapso {EPOCA}. Los jugadores se quejan.',
  variables:{ PROBLEMA:['El césped','El drenaje','La iluminación'],
              EPOCA:['antes de un partido clave','en pleno invierno','en plena racha mala'] },
  opciones:[
    O('Arreglarlo ya','Obra completa',D(3,2,3,-100),'Se hizo la obra a tiempo. Los jugadores y los socios lo notaron.'),
    O('Un parche barato','Aguanta por ahora',D(0,0,0,-30),'Se tapó lo urgente. Con suerte alcanza hasta fin de temporada.'),
    A('Jugar así y rezar','Cero gasto, mucho riesgo',0.5,D(2,0,2,0),'No pasó nada: ahorraste y nadie se enteró.',D(-5,-3,-5,0),'Hubo un papelón en cancha y la prensa lo repitió toda la semana.'),
  ] },

{ id:'dep_inferiores', cat:'deportivo', jugador:null,
  titulo:'Reorganizar las inferiores',
  contexto:'El coordinador de inferiores propone {CAMBIO}, financiado {FONDOS}.',
  variables:{ CAMBIO:['sumar una pensión para chicos del interior','contratar un ojeador por provincia','armar un torneo propio de captación'],
              FONDOS:['con aporte de socios','con plata del primer equipo','con un convenio municipal'] },
  opciones:[
    O('Apoyar a fondo','Inversión a futuro',D(2,1,-2,-80),'Las inferiores recibieron plata y entusiasmo. Los frutos se verán en unos años.'),
    O('Hacer algo mínimo','Apenas un gesto',D(0,0,0,-20),'Se hizo un ajuste chico: el coordinador lo tomó como un desaire.'),
    O('Priorizar al primer equipo','Resultados ya',D(-2,0,3,40),'Dijiste que el dinero va al primer equipo. Hubo resultados, y reproches.'),
  ] },

{ id:'dep_capitan_descanso', cat:'deportivo', jugador:'capitan',
  titulo:'El capitán pide un descanso',
  contexto:'El capitán {JUGADOR} ({JPOS}, {JEDAD} años) pide parar por {MOTIVO} {FECHA}.',
  variables:{ MOTIVO:['cansancio acumulado','un tema familiar','una molestia vieja'],
              FECHA:['antes de la copa','en plena racha','antes de un clásico'] },
  opciones:[
    O('Concederlo','El grupo lo respeta',D(4,1,-3,0),'{JUGADOR} descansó y el plantel valoró el gesto, aunque el equipo lo extrañó.'),
    O('Pedirle que juegue','Aguanta el equipo',D(-3,0,3,0),'{JUGADOR} jugó con los dientes apretados. El grupo entendió, pero con dudas.'),
    A('Pactar un descanso parcial','Intermedio arriesgado',0.5,D(3,2,3,0),'El descanso parcial salió bien: {JUGADOR} volvió fresco.',D(-3,-1,-3,0),'El pacto no conformó a nadie y {JUGADOR} jugó a media máquina.'),
  ] },

{ id:'dep_cualidad_minutos', cat:'deportivo', jugador:'cualidad:*',
  titulo:'Tu {CUALIDAD} reclama minutos',
  contexto:'{JUGADOR}, tu {CUALIDAD}, siente que juega poco {MOMENTO} y {ACCION}.',
  variables:{ MOMENTO:['en la última fecha','desde hace un mes','desde el cambio de técnico'],
              ACCION:['pidió una reunión','amenazó con irse','publicó un mensaje enigmático'] },
  opciones:[
    O('Darle más minutos','Él contento, el técnico no',D(3,0,-2,0),'{JUGADOR} jugó más y se mostró motivado. El técnico no escondió su fastidio.'),
    O('Que se banque la suplencia','Autoridad del cuerpo técnico',D(-3,-2,2,0),'{JUGADOR} aceptó a regañadientes y el vestuario percibió tu mano firme.'),
    O('Mediar con una charla','Salida diplomática',D(1,1,0,-10),'Hablaste con {JUGADOR}: quedó más tranquilo, aunque nada se resolvió.'),
  ] },

/* ===================== ECONOMICO ===================== */
{ id:'eco_sponsor_dudoso', cat:'economico', jugador:null,
  titulo:'{TIPO} ofrece plata por {ELEM}',
  contexto:'La oferta es tentadora, pero nadie sabe bien de dónde sale la plata. Con su logo en {ELEM}, {CLUB} quedaría atado por años.',
  variables:{ TIPO:['Una marca de bebidas energéticas','Una cripto-plataforma de dudosa reputación','Una financiera de créditos rápidos'],
              ELEM:['la manga','la espalda','el pantalón'] },
  opciones:[
    O('Aceptar','Plata fresca, reputación en juego',D(-4,-3,0,160),'Cerraste el acuerdo y entró plata. Los socios fruncieron el ceño.','sponsor_dudoso'),
    O('Rechazar','Cuidás la imagen',D(3,2,0,-10),'Dijiste que no. La hinchada lo valoró, la tesorería menos.'),
    O('Negociar condiciones','Menos plata, más cuidado',D(0,0,0,70),'Cerraste un trato más acotado, con cláusulas de salida.'),
  ] },

{ id:'eco_deuda', cat:'economico', jugador:null,
  titulo:'Deuda con {ACREEDOR}',
  contexto:'Reclama su plata: {ACREEDOR}. La deuda {PLAZO} y la caja está justa.',
  variables:{ ACREEDOR:['el organismo recaudador','la empresa de seguridad','el proveedor de indumentaria'],
              PLAZO:['vence esta semana','vence a fin de mes','ya está en intimación'] },
  opciones:[
    O('Pagar de golpe','Alivio total, caja vacía',D(3,0,0,-150),'Pagaste todo de una vez. Respiraste, aunque la caja quedó raspada.'),
    O('Refinanciar con intereses','Patear el problema',D(-2,-1,0,-40),'Refinanciaste la deuda. Pagás menos hoy y más mañana.'),
    A('Patear el pago','Apuesta al olvido',0.5,D(1,0,0,0),'El acreedor esperó y todo siguió su curso.',D(-6,-5,0,-60),'El acreedor se enojó y la noticia salió en todos lados.'),
  ] },

{ id:'eco_fondo_pase', cat:'economico', jugador:'figura',
  titulo:'Un fondo de inversión quiere el pase de {JUGADOR}',
  contexto:'{FONDO} ofrece pagar por adelantado el {PORC} del valor de mercado de {JUGADOR} ({JPOS}, nivel {JRATING}) y llevárselo a otro club.',
  variables:{ PORC:['70%','85%','100%'],
              FONDO:['Un fondo extranjero','Un fondo local','Una sociedad anónima de inversión'] },
  opciones:[
    O('Aceptar','Plata ya, se va el jugador',D(-3,0,-2,200),'Cerraste con el fondo y entró una buena suma. {JUGADOR} pasó a otro club.',VENDE),
    O('Rechazar','Mantenés al jugador',D(3,1,2,0),'Rechazaste. {JUGADOR} sigue en {CLUB} y la hinchada te aplaude.'),
    A('Pedir más plata y sin intermediarios','Puede cerrarse o romperse',0.5,D(1,1,-2,260),'El fondo aceptó la contraoferta y {JUGADOR} se fue con un buen negocio para {CLUB}.',D(-2,0,-1,0),'El fondo se retiró y se rumoreó que estabas en problemas.',VENDE),
  ] },

{ id:'eco_juicio_exjugador', cat:'economico', jugador:'exJugador',
  titulo:'Juicio de un ex jugador',
  contexto:'{JUGADOR}, que ya se retiró, reclama {RECLAMO} y el abogado del club {ABOGADO}.',
  variables:{ RECLAMO:['premios impagos','una indemnización','salarios atrasados','un porcentaje de un pase viejo'],
              ABOGADO:['pide arreglar rápido','asegura que se puede ganar','recomienda no hablar con la prensa'] },
  opciones:[
    O('Arreglar','Cerrás el tema',D(1,2,0,-120),'Arreglaste con {JUGADOR}. El club perdió plata y el conflicto murió.'),
    A('Ir a juicio','Puede salir muy bien o mal',0.5,D(2,2,0,40),'Ganaste el juicio contra {JUGADOR}. Y cobraste costas.',D(-4,-5,0,-180),'Perdiste el juicio y {JUGADOR} cobró de más, con intereses.'),
    O('Pagarle en cuotas','Alivia la caja, alarga el drama',D(0,-1,0,-50),'Pactaste cuotas con {JUGADOR}: la caja respira, el tema sigue.'),
  ] },

{ id:'eco_naming', cat:'economico', jugador:null,
  titulo:'Naming del estadio',
  contexto:'{EMPRESA} ofrece su nombre para el estadio {DURACION}. A la hinchada no le cae nada bien.',
  variables:{ EMPRESA:['Una cadena de supermercados','Una marca de electrodomésticos','Un banco regional'],
              DURACION:['por tres años','por cinco años','por diez años'] },
  opciones:[
    O('Aceptar','Plata fuerte, hinchada enojada',D(-6,-3,0,200),'Se firmó el naming. En la tribuna colgaron banderas en contra.'),
    O('Rechazar','Respetás la tradición',D(5,3,0,0),'Rechazaste el naming. Los socios aplaudieron, la tesorería no.'),
    O('Sumar el nombre histórico','Mitad y mitad',D(0,0,0,90),'Aceptaron mantener el nombre histórico al lado. Nadie quedó del todo feliz.'),
  ] },

{ id:'eco_rival_cualidad', cat:'economico', jugador:'cualidad:*',
  titulo:'{RIVAL} quiere comprarte a tu {CUALIDAD}',
  contexto:'{RIVAL} puso sobre la mesa {OFERTA} por {JUGADOR}, {JPOS} de {JEDAD} años. El vestuario espera tu respuesta.',
  variables:{ RIVAL:['Un club de primera','Un club del exterior','Un equipo de otra provincia'],
              OFERTA:['una suma fuerte','una suma moderada más un jugador','un préstamo con opción de compra','una oferta en cuotas'] },
  opciones:[
    O('Vender','Entra plata, se va el jugador',D(-4,-1,-5,180),'Vendiste a {JUGADOR}. La caja se llenó y el vestuario quedó más flaco.',VENDE),
    O('Retener','Mantenés al jugador',D(4,2,3,0),'Dijiste que {JUGADOR} no se vende. El plantel te lo agradeció.'),
    A('Pedir el doble','Negocio o ruptura',0.5,D(-2,0,-3,300),'Aceptaron pagar el doble por {JUGADOR}.',D(-3,-2,0,0),'Se levantaron de la mesa y {JUGADOR} quedó con la cabeza en otro lado.',VENDE),
  ] },

{ id:'eco_prestamo', cat:'economico', jugador:null,
  titulo:'Préstamo para pagar sueldos',
  contexto:'Se acerca el día de pago y no alcanza. {PRESTAMISTA} ofrece un préstamo {TASA}.',
  variables:{ PRESTAMISTA:['Un banco regional','Una mutual del barrio','Un socio empresario'],
              TASA:['a tasa alta','con garantía de la recaudación','con cláusula de renegociación'] },
  opciones:[
    O('Tomarlo','Hoy se paga, mañana se debe',D(2,0,0,140),'Tomaste el préstamo. Los sueldos se pagaron y la deuda queda para otro día.'),
    O('Pedir paciencia al plantel','Sin deuda, con tensión',D(-3,-2,-4,0),'Le pediste paciencia al plantel. Algunos aceptaron, otros no.'),
    O('Vender una butaca de lujo','Plata chica, rápida',D(0,-1,0,60),'Vendiste un palco. Alcanzó para tapar lo urgente.'),
  ] },

{ id:'eco_merch', cat:'economico', jugador:null,
  titulo:'Nueva línea de productos',
  contexto:'{SOCIO} propone lanzar {PRODUCTO}. La inversión inicial es de riesgo.',
  variables:{ SOCIO:['Un diseñador del barrio','Una cadena de tiendas','Una fábrica local'],
              PRODUCTO:['camisetas retro','una línea urbana','figuritas coleccionables'] },
  opciones:[
    A('Lanzarlo a lo grande','Puede pegar o fallar',0.55,D(3,4,0,160),'El lanzamiento fue un éxito: las tiendas se quedaron sin stock.',D(-4,-2,0,-120),'El lanzamiento no pegó y quedó stock sin vender.'),
    O('Una tirada corta','Riesgo moderado',D(1,1,0,40),'Hiciste una tirada corta y se vendió justo lo esperado.'),
    O('Declinar la propuesta','No te metés',D(0,-1,0,0),'Dijiste que no. Sin riesgos, pero sin plata nueva.'),
  ] },

{ id:'eco_tv', cat:'economico', jugador:null,
  titulo:'Derechos de transmisión',
  contexto:'{FORMATO} ofrece transmitir los partidos de {CLUB} {CONDICION}.',
  variables:{ FORMATO:['Una plataforma de streaming','Un canal de cable','Un medio de radio y web'],
              CONDICION:['con horarios impuestos','con exclusividad','con pago adelantado'] },
  opciones:[
    O('Firmar','Plata y visibilidad',D(-2,3,-1,120),'Firmaste el acuerdo. Más público, pero algunos horarios incomodan al plantel.'),
    O('Rechazar','Mantenés la libertad',D(2,-2,0,0),'Rechazaste la oferta: sin plata extra, pero con calendario propio.'),
    O('Negociar un acuerdo parcial','Menos plata, más cuidado',D(0,1,0,60),'Cerraste una versión reducida del acuerdo.'),
  ] },

{ id:'eco_obras', cat:'economico', jugador:null,
  titulo:'Obras en las instalaciones',
  contexto:'Hay que arreglar {TRIBUNA} y la discusión es cómo pagarlo: {FINANCIA}.',
  variables:{ TRIBUNA:['la popular','la platea','los palcos'],
              FINANCIA:['con fondos propios','con un crédito','con una campaña de socios'] },
  opciones:[
    O('Obra completa','Mejora fuerte, caja golpeada',D(4,2,0,-170),'Terminaron la obra completa. Los socios están contentos y la tesorería, no.'),
    O('Solo lo urgente','Lo mínimo indispensable',D(0,0,0,-60),'Se hizo lo urgente: alcanza, pero no entusiasma.'),
    A('Postergar un año','Apuesta con riesgo',0.5,D(1,0,0,0),'Nada pasó: te ahorraste la plata este año.',D(-5,-4,0,-120),'Hubo un problema por no haber hecho la obra y se arregló a las apuradas.'),
  ] },

{ id:'eco_cuota_social', cat:'economico', jugador:null,
  titulo:'¿Subir la cuota social?',
  contexto:'La comisión propone un aumento del {AUMENTO} {EXCUSA}.',
  variables:{ AUMENTO:['10%','25%','40%'],
              EXCUSA:['para pagar sueldos','para hacer obras','para saldar deudas'] },
  opciones:[
    O('Subir la cuota','Caja ya, socios molestos',D(-6,-3,0,130),'La cuota subió. Entró plata y hubo quejas en las redes.'),
    O('Mantenerla','Socios tranquilos',D(3,1,0,0),'Mantuviste la cuota. Los socios te agradecen, la caja no.'),
    O('Subirla a la mitad','Solución intermedia',D(-2,-1,0,60),'Subiste la cuota a la mitad. Nadie quedó del todo contento.'),
  ] },

{ id:'eco_recital', cat:'economico', jugador:null,
  titulo:'Alquilar el estadio para un recital',
  contexto:'{ARTISTA} quiere tocar en el estadio {FECHA}.',
  variables:{ ARTISTA:['Una banda de rock','Un cantante pop','Un festival de cumbia'],
              FECHA:['entre dos partidos','en plena semana de copa','el fin de semana libre'] },
  opciones:[
    O('Aceptar','Plata extra, césped castigado',D(1,2,-3,140),'El recital salió bien y llenó la caja. El césped sufrió.'),
    O('Rechazar','Cuidás la cancha',D(0,-1,2,0),'Rechazaste el recital: la cancha impecable, la caja igual.'),
    O('Aceptar con condiciones','Menos plata, más cuidado',D(0,1,0,70),'Aceptaste con condiciones estrictas. Todo salió prolijo.'),
  ] },

{ id:'eco_cualidad_publicidad', cat:'economico', jugador:'cualidad:*',
  titulo:'Una marca quiere a tu {CUALIDAD} como imagen',
  contexto:'{MARCA} le ofrece a {JUGADOR} ser la cara de su campaña {CONDICION}.',
  variables:{ MARCA:['Una marca de ropa deportiva','Una cadena de comida rápida','Una empresa de telefonía'],
              CONDICION:['con parte para el club','con horarios que chocan con los entrenamientos','con exclusividad por un año'] },
  opciones:[
    O('Aceptar','Plata y visibilidad',D(1,4,-2,90),'{JUGADOR} firmó el contrato. El club recibió su parte y la prensa lo comentó.'),
    O('Rechazar','Foco en lo deportivo',D(2,-1,2,0),'Rechazaste la propuesta: {JUGADOR} se quedó concentrado en lo suyo.'),
    O('Negociar un acuerdo corto','Un poco de todo',D(0,2,0,40),'Cerraste una campaña más corta, sin interferir con los entrenamientos.'),
  ] },

{ id:'eco_fichaje_cuota', cat:'economico', jugador:null, requiere:'fichaje_caro',
  titulo:'Vence la cuota del fichaje',
  contexto:'Llegó la cuota por el fichaje caro que cerraste y la caja está {ESTADO}. {ACREEDOR} no espera.',
  variables:{ ESTADO:['justa','ajustadísima','peor de lo esperado'],
              ACREEDOR:['El club vendedor','El agente','Un intermediario'] },
  opciones:[
    O('Pagar completo','Cumplís, caja golpeada',D(2,1,0,-110),'Pagaste la cuota y quedaste como un dirigente cumplidor.'),
    O('Renegociar plazos','Alarga el compromiso',D(-1,-1,0,-30),'Renegociaste los plazos. Pagás menos hoy y más mañana.'),
    A('Pedir una quita','Puede salir bien o mal',0.5,D(3,2,0,40),'Aceptaron una quita: te sacaste un peso de encima.',D(-5,-3,0,-110),'Se ofendieron, te reclamaron el total y con intereses.'),
  ] },

/* ===================== INSTITUCIONAL ===================== */
{ id:'ins_asamblea', cat:'institucional', jugador:null,
  titulo:'Asamblea de socios caliente',
  contexto:'La asamblea se pone brava con {TEMA} y {TONO}.',
  variables:{ TEMA:['el balance','la reforma del estatuto','la venta de un terreno'],
              TONO:['hay barras en las gradas','piden transparencia','hay una lista opositora'] },
  opciones:[
    O('Defender la gestión','Fuerte y sin ceder',D(2,-2,0,0),'Defendiste la gestión a capa y espada. Algunos aplaudieron, otros se retiraron.'),
    O('Abrir los libros','Transparencia total',D(4,3,0,-30),'Abriste los libros: la asamblea se calmó, aunque surgieron preguntas incómodas.'),
    O('Postergar la asamblea','Ganás tiempo',D(-4,-2,0,0),'Postergaste la asamblea. El tema no se fue, solo se aplazó.'),
  ] },

{ id:'ins_eleccion', cat:'institucional', jugador:null,
  titulo:'Se acercan las elecciones',
  contexto:'{RIVAL} promete {PROMESA} y te desafía abiertamente.',
  variables:{ RIVAL:['Un ex presidente','Un empresario del barrio','Una agrupación de socios jóvenes'],
              PROMESA:['más estadio','más fichajes','más transparencia'] },
  opciones:[
    O('Campaña agresiva','Gasto fuerte, ataque directo',D(4,-2,0,-90),'Armaste una campaña agresiva. Subiste en las encuestas, pero gastaste.'),
    O('Mostrar gestión','Resultados en mano',D(3,2,0,-20),'Mostraste lo hecho. Los socios reconocieron el esfuerzo.'),
    A('Aliarte con un sector','Apuesta de poder',0.5,D(5,2,0,-30),'La alianza funcionó y sumaste apoyos.',D(-6,-3,0,-30),'La alianza te salió cara: perdiste credibilidad en ambos bandos.'),
  ] },

{ id:'ins_promesa_incumplida', cat:'institucional', jugador:null,
  titulo:'Promesa de campaña incumplida',
  contexto:'Un grupo de socios te recuerda que prometiste {PROMESA} y se organizan con {RECLAMO}.',
  variables:{ PROMESA:['el estadio techado','el natatorio','la escuela de formación'],
              RECLAMO:['una carta firmada','un hilo viral','un acto en la puerta del club'] },
  opciones:[
    O('Pedir disculpas y dar fecha','Humildad con plazo',D(2,1,0,-40),'Pediste disculpas y diste una fecha. Los socios te dieron un voto de confianza.'),
    O('Explicar que no hay plata','Realismo duro',D(-3,-2,0,0),'Dijiste que no hay plata. Fuiste honesto, pero molestó.'),
    A('Anunciar una obra parcial','Apuesta a la imagen',0.5,D(4,3,0,-80),'La obra parcial calmó a los socios y salió a tiempo.',D(-5,-4,0,-80),'La obra parcial se demoró y quedaste peor parado.'),
  ] },

{ id:'ins_intendente', cat:'institucional', jugador:null,
  titulo:'El intendente ofrece su apoyo',
  contexto:'El intendente te ofrece {APOYO} a cambio de {FAVOR}.',
  variables:{ APOYO:['obras en el predio','un subsidio','la cesión de una cancha de entrenamiento'],
              FAVOR:['un lugar en la lista','un acto político en el estadio','contratar a un recomendado'] },
  opciones:[
    O('Aceptar','Apoyo hoy, deuda mañana',D(-3,-2,0,100),'Aceptaste el trato. Llegó el apoyo, y el intendente anotó el favor.','favor_politico'),
    O('Rechazar','Independencia',D(3,2,0,0),'Rechazaste el trato. El intendente se enojó, pero los socios te valoraron.'),
    O('Negociar sin favores políticos','Apoyo parcial',D(0,0,0,40),'Lograste apoyo sin favores. El intendente no quedó contento.'),
  ] },

{ id:'ins_comision', cat:'institucional', jugador:null,
  titulo:'Conflicto en la comisión directiva',
  contexto:'Dentro de la comisión estalla un conflicto: {CONFLICTO} {MOMENTO}.',
  variables:{ CONFLICTO:['un vicepresidente rebelde','una tesorera que amenaza con renunciar','dos facciones enfrentadas'],
              MOMENTO:['en plena racha mala','antes de una asamblea','en pleno cierre de balance'] },
  opciones:[
    O('Mediar personalmente','Tiempo y desgaste',D(3,0,0,0),'Mediaste y calmaste los ánimos. Te quitó semanas de trabajo.'),
    O('Imponer una decisión','Autoridad firme',D(-3,-2,0,0),'Tomaste una decisión sin consenso. Alguien se fue molesto.'),
    O('Dejar que se resuelvan solos','Menos esfuerzo, más riesgo',D(-2,-2,-2,0),'No intervenías: el conflicto creció y se filtró a la prensa.'),
  ] },

{ id:'ins_capitan_voz', cat:'institucional', jugador:'capitan',
  titulo:'El capitán pide voz en la comisión',
  contexto:'{JUGADOR}, el capitán, quiere opinar sobre {TEMA} y lo plantea {TONO}.',
  variables:{ TEMA:['los premios por objetivos','el calendario de pretemporada','el uso del predio'],
              TONO:['en privado','ante todo el plantel','por carta'] },
  opciones:[
    O('Escucharlo','Más voz, más peso',D(3,1,2,-20),'Escuchaste a {JUGADOR}: el plantel valoró el gesto.'),
    O('Marcar los límites','Respetando jerarquías',D(-2,0,-2,0),'Le dijiste a {JUGADOR} que cada uno en lo suyo. El capitán asintió sin ganas.'),
    A('Darle un lugar en una comisión','Puede salir bien o mal',0.5,D(4,2,3,0),'{JUGADOR} se tomó el rol en serio y ayudó a destrabar temas.',D(-4,-1,-2,0),'{JUGADOR} se entusiasmó de más y los dirigentes se molestaron.'),
  ] },

{ id:'ins_federacion', cat:'institucional', jugador:null,
  titulo:'La liga te sanciona',
  contexto:'La liga detectó {INFRACCION} y propone {SANCION}.',
  variables:{ INFRACCION:['fallas en el control de entradas','una deuda con otro club','incidentes de público'],
              SANCION:['una multa','puntos en contra','jugar sin público'] },
  opciones:[
    O('Pagar y cumplir','Cerrás rápido',D(1,0,-2,-90),'Cumpliste la sanción. El tema se cerró sin más ruido.'),
    A('Apelar','Puede salir bien o mal',0.5,D(3,2,0,-20),'La apelación prosperó y la sanción se redujo.',D(-4,-3,-3,-100),'La apelación fracasó y la sanción quedó firme.'),
    O('Negociar un plan de pagos','Dilatás el costo',D(0,-1,0,-40),'Lograste un plan de pagos. La liga lo anotó para el futuro.'),
  ] },

{ id:'ins_auditoria', cat:'institucional', jugador:null,
  titulo:'Auditoría de cuentas',
  contexto:'{AUDITOR} pide revisar los libros y encuentra {HALLAZGO}.',
  variables:{ AUDITOR:['Un estudio contable','Un grupo de socios','La liga'],
              HALLAZGO:['gastos dudosos','facturas duplicadas','una caja chica desordenada'] },
  opciones:[
    O('Colaborar a fondo','Transparencia total',D(4,3,0,-40),'Colaboraste: se corrigieron los errores y subió tu credibilidad.'),
    O('Minimizar el hallazgo','Quitarle importancia',D(-3,-2,0,0),'Dijiste que no era para tanto. Algunos socios no te creyeron.'),
    O('Echarle la culpa al área contable','Salida política',D(-1,-1,0,-20),'Cambiaste al contador. Se calmó, pero dejaste un enojado.'),
  ] },

{ id:'ins_conflictivo_sancion', cat:'institucional', jugador:'conflictivo',
  titulo:'La comisión quiere sancionar a un jugador',
  contexto:'Tras {INCIDENTE}, parte de la comisión pide {SANCION} para {JUGADOR} ({JPOS}, nivel {JRATING}).',
  variables:{ INCIDENTE:['una discusión con el técnico','llegar tarde a un entrenamiento','criticar a la dirigencia','faltar a una concentración'],
              SANCION:['una multa fuerte','una suspensión','dejarlo afuera de la lista'] },
  opciones:[
    O('Sancionarlo','Mano dura',D(3,1,-2,20),'Sancionaste a {JUGADOR}. El plantel entendió el mensaje, aunque algunos protestaron.'),
    O('Una advertencia','Mano blanda',D(-2,-1,1,0),'Le diste solo una advertencia a {JUGADOR}. Parte de la comisión lo tomó como debilidad.'),
    A('Hablar con él a solas','Puede aclarar o empeorar',0.5,D(3,1,2,0),'{JUGADOR} pidió disculpas y se comprometió a cambiar.',D(-4,-2,-2,0),'{JUGADOR} salió peor de la charla y el conflicto se agrandó.'),
  ] },

{ id:'ins_dia_club', cat:'institucional', jugador:null,
  titulo:'Aniversario del club',
  contexto:'{CLUB} cumple {ANIVERSARIO} y se debate {FORMATO}.',
  variables:{ ANIVERSARIO:['100 años','75 años','50 años'],
              FORMATO:['un desfile','un partido homenaje','una cena de socios'] },
  opciones:[
    O('Fiesta grande','Costosa pero memorable',D(5,4,0,-120),'La fiesta fue un éxito: emoción, fotos y tribuna llena.'),
    O('Celebración austera','Más sobria',D(1,0,0,-20),'La celebración fue sencilla. Nadie se quejó, nadie se emocionó.'),
    O('Reutilizar el homenaje para recaudar','Mezcla de gala y negocio',D(-1,1,0,60),'Hiciste del aniversario un evento con entradas. Recaudaste, con algún reproche.'),
  ] },

{ id:'ins_disciplinas', cat:'institucional', jugador:null,
  titulo:'Sumar nuevas disciplinas',
  contexto:'Una propuesta quiere sumar {DISCIPLINA} al club {RECURSO}.',
  variables:{ DISCIPLINA:['fútbol femenino','básquet','natación'],
              RECURSO:['con poca plata','con un subsidio','con aporte de socios'] },
  opciones:[
    O('Aprobar con fuerza','Apuesta social',D(4,3,0,-90),'La nueva disciplina se sumó con entusiasmo. Crece la comunidad del club.'),
    O('Una prueba piloto','Cautela',D(1,1,0,-30),'Armaste una prueba piloto. Se verá cómo sale.'),
    O('Postergar','Prioridad al fútbol profesional',D(-2,-1,1,0),'Dijiste que ahora no es el momento. Los impulsores se desilusionaron.'),
  ] },

{ id:'ins_cualidad_contrato', cat:'institucional', jugador:'cualidad:*',
  titulo:'Renovación de tu {CUALIDAD}',
  contexto:'{JUGADOR}, tu {CUALIDAD}, quiere renovar {CONDICION} y {AGENTE}.',
  variables:{ CONDICION:['con un aumento importante','con una cláusula de salida','a cambio de la titularidad','con un contrato largo'],
              AGENTE:['su representante presiona','su familia pide estabilidad','otro club lo tienta'] },
  opciones:[
    O('Aceptar sus condiciones','Lo asegurás, caro',D(3,1,2,-100),'Renovaste a {JUGADOR} con todas sus condiciones. El vestuario lo celebró.'),
    O('Contraoferta más modesta','Ajustás la caja',D(0,0,0,-40),'Cerraste una renovación más modesta con {JUGADOR}. No quedó del todo contento.'),
    A('Dejar que se libere','Riesgo de perderlo',0.5,D(-2,0,-2,0),'{JUGADOR} se quedó sin condiciones: ahorraste y todo sigue igual.',D(-6,-3,-5,0),'{JUGADOR} se fue como libre y la hinchada te hizo responsable.',undefined,VENDE),
  ] },

{ id:'ins_intendente_factura', cat:'institucional', jugador:null, requiere:'favor_politico',
  titulo:'El intendente pasa la factura',
  contexto:'El intendente recuerda el favor y ahora pide {PEDIDO} {MOMENTO}.',
  variables:{ PEDIDO:['entradas para sus punteros','un acto de campaña en la cancha','que apoyes públicamente su candidatura'],
              MOMENTO:['esta semana','antes de las elecciones','en pleno partido importante'] },
  opciones:[
    O('Cumplir','Pagás la deuda política',D(-4,-3,0,20),'Cumpliste el pedido del intendente. La hinchada lo vio y no lo olvidó.'),
    O('Negarte','Rompés el vínculo',D(3,1,0,-30),'Te negaste. El intendente se enojó y te cortó los apoyos.'),
    A('Cumplir a medias','Intentás quedar bien con todos',0.5,D(1,0,0,0),'El intendente aceptó el gesto a medias y quedó conforme.',D(-5,-3,0,-30),'El intendente se ofendió igual y la hinchada tampoco lo perdonó.'),
  ] },

/* ===================== MEDIATICO ===================== */
{ id:'med_declaracion', cat:'mediatico', jugador:null,
  titulo:'Declaraciones mal tomadas',
  contexto:'En {MEDIO}, tus palabras {FRASE} fueron sacadas de contexto.',
  variables:{ MEDIO:['un programa de radio','un canal de cable','un portal digital'],
              FRASE:['sobre el árbitro','sobre el técnico','sobre la hinchada'] },
  opciones:[
    O('Aclarar públicamente','Costoso pero claro',D(2,3,0,0),'Aclaraste lo que dijiste. El tema se desinfló rápido.'),
    O('Dejarlo pasar','Silencio incómodo',D(-3,-3,0,0),'No dijiste nada. El tema creció en las redes.'),
    A('Contraatacar al medio','Riesgo alto',0.5,D(3,-2,0,0),'Contraatacaste con firmeza: los hinchas te aplaudieron.',D(-5,-6,0,0),'El contraataque salió mal: el medio te criticó durante días.'),
  ] },

{ id:'med_esc_publico', cat:'mediatico', jugador:null,
  titulo:'Incidentes en la tribuna',
  contexto:'Durante el partido hubo {INCIDENTE} y el escándalo llegó a {ALCANCE}.',
  variables:{ INCIDENTE:['bengalas','una pelea entre hinchas','insultos a un árbitro'],
              ALCANCE:['los noticieros','las redes','la liga'] },
  opciones:[
    O('Condenar públicamente','Imagen limpia',D(2,4,0,0),'Condenaste lo ocurrido. Tu imagen salió fortalecida.'),
    O('Defender a la hinchada','Alineado con la tribuna',D(4,-4,0,0),'Defendiste a tu gente. La hinchada te quiso, la prensa no.'),
    O('Prometer más control','Con costo',D(1,2,0,-60),'Prometiste más control: se invirtió en seguridad.'),
  ] },

{ id:'med_presion_prensa', cat:'mediatico', jugador:null,
  titulo:'Presión de la prensa',
  contexto:'{PERIODISTA} insiste con {TEMA} y no suelta el tema.',
  variables:{ PERIODISTA:['Un periodista histórico','Un panelista polémico','Un cronista del barrio'],
              TEMA:['el rendimiento','el presupuesto','el técnico'] },
  opciones:[
    O('Dar una entrevista','Dar la cara',D(1,3,0,0),'Diste la cara. La entrevista fue tensa, pero aportó claridad.'),
    O('Ignorarlo','Sin dar entidad',D(-1,-3,0,0),'Lo ignoraste. El periodista tomó revancha.'),
    A('Invitarlo al club','Gesto riesgoso',0.5,D(3,4,0,-10),'El periodista salió del club con otra impresión y lo contó.',D(-4,-4,0,-10),'El periodista aprovechó la visita para filmar lo peor.'),
  ] },

{ id:'med_esc_jugador', cat:'mediatico', jugador:'conflictivo',
  titulo:'Escándalo de un jugador fuera de la cancha',
  contexto:'Trascendió que {JUGADOR} ({JPOS}, {JEDAD} años) {HECHO} {LUGAR}.',
  variables:{ HECHO:['se peleó','publicó algo polémico','armó una fiesta'],
              LUGAR:['en un boliche','en una transmisión en vivo','en redes sociales','después de una derrota'] },
  opciones:[
    O('Sancionarlo públicamente','Mano dura',D(2,3,-2,10),'Sancionaste a {JUGADOR}. La prensa lo valoró, el plantel quedó tenso.'),
    O('Defenderlo','Respaldo al jugador',D(-3,-4,2,0),'Defendiste a {JUGADOR}. El vestuario lo agradeció, la prensa no.'),
    A('Gestionar en silencio','Puede salir bien o mal',0.5,D(1,1,1,0),'El tema se enfrió y {JUGADOR} volvió a lo suyo.',D(-4,-5,-2,0),'El escándalo se filtró igual y quedaste en evidencia.'),
  ] },

{ id:'med_sponsor_escandalo', cat:'mediatico', jugador:null, requiere:'sponsor_dudoso',
  titulo:'Escándalo con el sponsor',
  contexto:'{MEDIO} publicó que {HECHO}. Te vinculan con la decisión de aceptar ese sponsor.',
  variables:{ MEDIO:['Un diario','Un portal','Un programa de TV'],
              HECHO:['la empresa está bajo investigación','la empresa cerró de golpe','hay denuncias contra sus dueños'] },
  opciones:[
    O('Romper el contrato','Corte inmediato',D(3,3,0,-70),'Rompiste el contrato y asumiste el costo. Quedaste como alguien responsable.'),
    O('Esperar a ver qué pasa','Apostar a que se apague',D(-3,-4,0,0),'Esperaste. El escándalo creció y te señalaron.'),
    A('Defender la decisión','Riesgo alto',0.4,D(2,2,0,40),'Lograste que la investigación no te alcanzara y el sponsor siguió pagando.',D(-6,-6,0,-30),'La investigación avanzó y tu defensa quedó mal parada.'),
  ] },

{ id:'med_cualidad_nota', cat:'mediatico', jugador:'cualidad:*',
  titulo:'Una nota destaca a tu {CUALIDAD}',
  contexto:'{MEDIO} publicó una nota {ENFOQUE} sobre {JUGADOR} y el club quedó en el centro de la escena.',
  variables:{ MEDIO:['Un diario deportivo','Un programa de TV','Un podcast'],
              ENFOQUE:['de perfil humano','sobre su rendimiento','sobre su carácter'] },
  opciones:[
    O('Capitalizarlo','Todo a la vitrina',D(2,4,1,0),'Aprovechaste la nota para mostrar a {CLUB}. {JUGADOR} se encandiló un poco.'),
    O('Bajarle el perfil','Cuidás al jugador',D(2,-1,2,0),'Le bajaste el perfil: {JUGADOR} siguió concentrado.'),
    A('Organizar una conferencia','Puede salir lucido o torcido',0.5,D(3,5,0,0),'La conferencia lució a {JUGADOR} y al club.',D(-3,-3,-1,0),'En la conferencia {JUGADOR} dijo algo que se malinterpretó.'),
  ] },

{ id:'med_documental', cat:'mediatico', jugador:null,
  titulo:'Documental sobre el club',
  contexto:'{PLATAFORMA} quiere filmar un documental sobre {CLUB} centrado en {ENFOQUE}.',
  variables:{ PLATAFORMA:['Una plataforma de streaming','Un canal público','Una productora independiente'],
              ENFOQUE:['la historia gloriosa','la crisis actual','los vestuarios'] },
  opciones:[
    O('Aceptar con control editorial','Control, menos plata',D(2,3,0,30),'Aceptaste con control editorial. El documental salió prolijo.'),
    O('Aceptar sin condiciones','Libertad total',D(-2,4,0,90),'Aceptaste sin condiciones. El documental fue honesto y movilizó emociones.'),
    O('Rechazar','Privacidad',D(1,-3,0,0),'Rechazaste el documental. Se mantuvo la intimidad del club.'),
  ] },

{ id:'med_rumor', cat:'mediatico', jugador:null,
  titulo:'Rumores sobre el club',
  contexto:'{FUENTE} dice que {RUMOR}.',
  variables:{ FUENTE:['Un portal','Un panelista','Una cuenta anónima'],
              RUMOR:['el club será vendido a inversores','el estadio se muda','habrá una fusión con otro club'] },
  opciones:[
    O('Desmentir con un comunicado','Rápido y claro',D(2,2,0,0),'Desmentiste el rumor. La cosa se enfrió rápido.'),
    O('No dar entidad','Ignorás el ruido',D(-2,-2,0,0),'No dijiste nada. El rumor siguió creciendo.'),
    A('Dejar pistas y generar misterio','Juego de riesgo',0.5,D(3,4,0,0),'El misterio atrajo atención positiva y ventas de camisetas.',D(-5,-4,0,0),'El misterio se salió de control y los socios se alteraron.'),
  ] },

{ id:'med_redes', cat:'mediatico', jugador:null,
  titulo:'Crisis en redes',
  contexto:'El community manager cometió {ERROR} y la reacción fue {REACCION}.',
  variables:{ ERROR:['un tuit desafortunado','un meme de mal gusto','un video viejo que reapareció'],
              REACCION:['hinchas indignados','sponsors preocupados','periodistas en alerta'] },
  opciones:[
    O('Pedir disculpas en público','Humildad',D(2,3,0,0),'Pediste disculpas y el episodio se cerró rápido.'),
    O('Despedir al community manager','Mano dura',D(-1,1,0,-10),'Despediste al responsable. Algunos lo vieron como un chivo expiatorio.'),
    O('Hacerse el desentendido','Dejar que pase',D(-3,-3,0,0),'No dijiste nada. La crisis se alargó más de la cuenta.'),
  ] },

{ id:'med_figura_entrevista', cat:'mediatico', jugador:'figura',
  titulo:'Una figura habla de más',
  contexto:'{JUGADOR}, la figura del plantel, dio una entrevista en {CANAL} y habló de {TEMA}.',
  variables:{ CANAL:['un diario','una radio','un streaming'],
              TEMA:['el técnico','la dirigencia','su futuro'] },
  opciones:[
    O('Respaldar a {JUGADOR}','Defensa pública',D(3,-2,2,0),'Respaldaste a {JUGADOR}. El vestuario lo agradeció y la prensa lo criticó.'),
    O('Pedirle un comunicado','Control de daños',D(-1,2,-1,0),'{JUGADOR} aclaró sus palabras. El tema se enfrió, pero quedó un malestar.'),
    A('Multarlo','Autoridad con riesgo',0.5,D(3,1,0,20),'La multa a {JUGADOR} dejó claro quién manda. Aceptó sin problemas.',D(-4,-3,-3,20),'La multa a {JUGADOR} cayó mal y el vestuario se dividió.'),
  ] },

{ id:'med_joven_viral', cat:'mediatico', jugador:'joven',
  titulo:'Video viral de un juvenil',
  contexto:'Un video de {JUGADOR} ({JPOS}, {JEDAD} años), {VIDEO}, se volvió tendencia y {OFERTA}.',
  variables:{ VIDEO:['festejando un golazo','ayudando a un hincha','bailando en el vestuario'],
              OFERTA:['una marca quiere contratarlo','un canal quiere entrevistarlo','un club grande lo sigue'] },
  opciones:[
    O('Aprovechar el momento','Visibilidad para el club',D(2,5,0,40),'Aprovechaste el video. {JUGADOR} se hizo famoso y el club ganó atención.'),
    O('Cuidar al pibe','Evitás que se suba a la cabeza',D(2,-1,1,0),'Cuidaste a {JUGADOR}: siguió entrenando sin distraerse.'),
    A('Dejar que maneje su fama','Autonomía riesgosa',0.5,D(3,4,1,20),'{JUGADOR} la manejó con inteligencia y el club se benefició.',D(-3,-2,-2,0),'{JUGADOR} se distrajo y su rendimiento bajó.'),
  ] },

{ id:'med_arbitro', cat:'mediatico', jugador:null,
  titulo:'Polémica arbitral',
  contexto:'Tras {JUGADA} en {PARTIDO}, tenés que decidir qué decir.',
  variables:{ JUGADA:['un penal no cobrado','un gol anulado','una expulsión dudosa'],
              PARTIDO:['el clásico','la copa','el último partido'] },
  opciones:[
    O('Quejarte públicamente','Defendés al equipo',D(3,-3,0,-20),'Te quejaste con fuerza. Los hinchas te aplaudieron y la liga te multó.'),
    O('Callarte','Prudencia',D(-2,1,0,0),'No dijiste nada. Algunos lo vieron como debilidad.'),
    O('Pedir una reunión con la liga','Canal institucional',D(1,1,0,0),'Pediste una reunión. Te escucharon, aunque sin cambios.'),
  ] },

/* ===================== HINCHADA ===================== */
{ id:'hin_barra', cat:'hinchada', jugador:null,
  titulo:'La barra pide "colaboración"',
  contexto:'Un referente de la barra {TONO} pide {PEDIDO}.',
  variables:{ TONO:['con tono amable','con amenazas veladas','a través de un intermediario'],
              PEDIDO:['entradas gratis','un micro para el viaje','plata para las banderas'] },
  opciones:[
    O('Ceder','Calmás la tribuna',D(4,-4,0,-50),'Cediste al pedido. La tribuna se calmó y se prendieron algunas alarmas.'),
    O('Negarte','Riesgo de conflicto',D(-5,3,-2,0),'Te negaste. La prensa te aplaudió y la barra se enojó.'),
    A('Mediar con la liga y la policía','Depende de la zona',0.5,D(3,3,0,-20),'La mediación funcionó y se acordó un esquema ordenado.',D(-6,-4,0,-30),'La mediación fracasó y el clima se puso espeso.'),
  ] },

{ id:'hin_expectativa', cat:'hinchada', jugador:'figura',
  titulo:'Expectativa desmedida tras una buena racha',
  contexto:'Tras {RACHA}, la hinchada ya sueña con {EXPECTATIVA} y se cuelga de {JUGADOR} ({JPOS}, nivel {JRATING}).',
  variables:{ RACHA:['cinco victorias seguidas','una goleada histórica','un invicto de ocho partidos'],
              EXPECTATIVA:['el campeonato','una copa internacional','el ascenso directo','un título'] },
  opciones:[
    O('Alimentar la ilusión','Todos felices, hasta que falle',D(5,3,2,0),'Encendiste la ilusión. {JUGADOR} se convirtió en el nombre de la semana.'),
    O('Bajar los decibeles','Realismo',D(-3,0,0,0),'Pediste calma. Los hinchas no lo tomaron del todo bien.'),
    A('Prometer un refuerzo','Alimentás el sueño con plata',0.5,D(6,3,4,-100),'El refuerzo llegó y la ilusión se sostuvo.',D(-4,-3,-3,-100),'El refuerzo no llegó a la altura y {JUGADOR} cargó con la presión.'),
  ] },

{ id:'hin_presion_resultados', cat:'hinchada', jugador:null,
  titulo:'Presión por resultados',
  contexto:'La hinchada {FORMA} para que {EXIGENCIA}.',
  variables:{ FORMA:['llena el estadio de pancartas','arma cantitos en contra','manda una carta de la peña'],
              EXIGENCIA:['cambies al técnico','traigas refuerzos','renuncie la comisión'] },
  opciones:[
    O('Responder con hechos','Acción concreta',D(3,1,2,-60),'Respondiste con medidas concretas. La tribuna bajó los decibeles.'),
    O('Pedir paciencia','Palabras, no hechos',D(-3,-2,0,0),'Pediste paciencia. Algunos lo entendieron, otros no.'),
    O('Reunirte con la peña','Escucha directa',D(2,1,0,-10),'Te reuniste con las peñas. Se sintieron escuchados.'),
  ] },

{ id:'hin_pide_cualidad', cat:'hinchada', jugador:'cualidad:*',
  titulo:'La hinchada pide otro {CUALIDAD}',
  contexto:'Los hinchas se enamoraron de {JUGADOR}, tu {CUALIDAD}, y piden en {CANAL} que fiches a otro como él {PLAZO}.',
  variables:{ CANAL:['un banderazo','las redes','una carta'],
              PLAZO:['antes del cierre del mercado','esta semana','para el clásico'] },
  opciones:[
    O('Salir al mercado','Plata por ilusión',D(5,3,3,-120),'Saliste a buscar a otro como {JUGADOR}. La hinchada se ilusionó.'),
    O('Explicar que no hay plata','Realismo',D(-3,-1,0,0),'Explicaste la situación. La hinchada lo entendió a medias.'),
    O('Prometer para el próximo mercado','Patear la pelota',D(1,0,0,0),'Prometiste para el próximo mercado. La paciencia quedó en suspenso.'),
  ] },

{ id:'hin_banderazo', cat:'hinchada', jugador:null,
  titulo:'Banderazo {OCASION}',
  contexto:'Los hinchas hacen un banderazo {OCASION} y piden {PEDIDO}.',
  variables:{ OCASION:['antes del clásico','antes de la copa','antes del último partido'],
              PEDIDO:['que juegues en la cancha histórica','que venga el plantel completo a saludar','que no haya más sponsors en la camiseta'] },
  opciones:[
    O('Aceptar el pedido','Gesto fuerte',D(5,3,2,-40),'Aceptaste el pedido. La hinchada se sintió escuchada.'),
    O('Rechazarlo con respeto','Honesto',D(-2,0,0,0),'Rechazaste el pedido con respeto. Algunos se fueron molestos.'),
    A('Mandar al capitán a saludar','Gesto simbólico',0.5,D(4,2,2,0),'El saludo del capitán conmovió a los hinchas.',D(-3,-2,-1,0),'El saludo no alcanzó y se sintió como una excusa.'),
  ] },

{ id:'hin_pena_viaje', cat:'hinchada', jugador:null,
  titulo:'Las peñas quieren viajar',
  contexto:'Las peñas de {CLUB} piden ayuda para viajar {DESTINO} y reclaman {PEDIDO}.',
  variables:{ DESTINO:['a una ciudad lejana','a otra provincia','al exterior'],
              PEDIDO:['descuento en entradas','colectivos del club','alojamiento'] },
  opciones:[
    O('Apoyar con todo','Plata y gesto',D(5,3,1,-90),'Apoyaste el viaje. La hinchada acompañó al equipo en masa.'),
    O('Ayuda parcial','Un poco de cada lado',D(1,0,0,-30),'Ayudaste de manera parcial. Algunos se quedaron en casa.'),
    O('No poder ayudar','Cuidás la caja',D(-3,-1,0,0),'No pudiste ayudar. La hinchada lo sintió como un desplante.'),
  ] },

{ id:'hin_homenaje_exjugador', cat:'hinchada', jugador:'exJugador',
  titulo:'Homenaje a un ídolo retirado',
  contexto:'Los hinchas piden un homenaje a {JUGADOR}, ídolo retirado, con {FORMA} {MOMENTO}.',
  variables:{ FORMA:['una estatua','un partido despedida','una camiseta retirada','una placa en el estadio'],
              MOMENTO:['antes del clásico','en el aniversario','al cierre de la temporada'] },
  opciones:[
    O('Hacer el homenaje a lo grande','Emoción y gasto',D(5,3,0,-80),'El homenaje a {JUGADOR} fue emotivo y llenó el estadio.'),
    O('Un homenaje sencillo','Austero',D(2,1,0,-20),'Hiciste un homenaje simple a {JUGADOR}. Nadie lloró, nadie se quejó.'),
    O('Postergarlo','Sin plata ahora',D(-3,-2,0,0),'Postergaste el homenaje a {JUGADOR}. Los hinchas se resintieron.'),
  ] },

{ id:'hin_idolo_cantito', cat:'hinchada', jugador:'figura',
  titulo:'La popular le canta a una figura',
  contexto:'La hinchada le dedica un canto a {JUGADOR} {CANTO} y pide {PEDIDO}.',
  variables:{ CANTO:['en la popular','en redes','en un banderazo'],
              PEDIDO:['una renovación larga','un aumento de sueldo','la cinta de capitán'] },
  opciones:[
    O('Darle el gusto a la hinchada','Gesto fuerte',D(5,2,2,-70),'Le diste el gusto a la hinchada. {JUGADOR} se sintió querido.'),
    O('Explicar los tiempos','Prudencia',D(-1,0,0,0),'Explicaste que todo tiene su tiempo. La hinchada lo toleró.'),
    A('Que decida el jugador','Poner la pelota en su campo',0.5,D(3,2,2,-30),'{JUGADOR} lo tomó con humildad y se comprometió.',D(-3,-2,-2,-30),'{JUGADOR} se sintió presionado y su rendimiento cayó.'),
  ] },

{ id:'hin_precios', cat:'hinchada', jugador:null,
  titulo:'Precios de las entradas',
  contexto:'Se debate {MEDIDA} {MOTIVO}.',
  variables:{ MEDIDA:['subir el precio de las entradas','bajar el precio de las populares','crear un abono familiar'],
              MOTIVO:['por la inflación','por el clásico','por la deuda'] },
  opciones:[
    O('Aprobar la medida','Cumplís la propuesta',D(0,0,0,70),'Aprobaste la medida. La recaudación se movió.'),
    O('Rechazarla','Mantenés el statu quo',D(2,1,0,0),'Rechazaste la medida. La hinchada respiró aliviada.'),
    O('Un plan piloto','Prueba por tres fechas',D(1,0,0,25),'Hiciste una prueba. Se verán los números.'),
  ] },

{ id:'hin_seguridad', cat:'hinchada', jugador:null,
  titulo:'Seguridad para {PARTIDO}',
  contexto:'Para {PARTIDO}, se propone {MEDIDA}. Costará plata y puede molestar a la gente.',
  variables:{ PARTIDO:['el clásico provincial','un partido de copa','un partido ante un rival histórico'],
              MEDIDA:['pulseras con identificación','vallas adicionales','sumar más policía'] },
  opciones:[
    O('Aprobar la medida','Más seguridad, más costo',D(3,2,0,-70),'Aprobaste la medida. El partido fue tranquilo.'),
    O('Rechazarla','Ahorrás',D(-3,-2,0,0),'Rechazaste la medida. Hubo algunos incidentes.'),
    A('Aplicarla a medias','Compromiso',0.5,D(2,1,0,-30),'La versión reducida alcanzó para evitar problemas.',D(-4,-3,0,-30),'La versión reducida no alcanzó y hubo desorden.'),
  ] },

{ id:'hin_socio_historico', cat:'hinchada', jugador:null,
  titulo:'Un socio histórico pide un gesto',
  contexto:'{SOCIO} pide {PEDIDO}.',
  variables:{ SOCIO:['Un socio de 90 años','Una familia de cuatro generaciones','Una peña de jubilados'],
              PEDIDO:['entradas gratis de por vida','una visita al vestuario','que el equipo los salude'] },
  opciones:[
    O('Concederlo','Gesto cálido',D(4,3,0,-30),'Concediste el pedido. La historia del club se sintió viva.'),
    O('Una visita simbólica','Menos costo',D(2,1,0,-5),'Les diste una visita simbólica. Quedaron conformes.'),
    O('Rechazarlo con respeto','Precedente cuidado',D(-2,-1,0,0),'Rechazaste con respeto. Se mostraron decepcionados.'),
  ] },

{ id:'hin_derrota', cat:'hinchada', jugador:null,
  titulo:'Reacción tras la derrota',
  contexto:'Después de {RESULTADO}, la tribuna respondió con {REACCION}.',
  variables:{ RESULTADO:['una goleada en casa','una derrota en el clásico','una eliminación en copa'],
              REACCION:['silbidos','banderas pidiendo renuncias','la tribuna casi vacía'] },
  opciones:[
    O('Dar la cara','Hablás con la gente',D(3,2,0,0),'Diste la cara y la tribuna lo valoró.'),
    O('Reunir al plantel','Foco en lo deportivo',D(1,0,3,0),'Reuniste al plantel para reencauzar el rumbo.'),
    O('Esperar que pase','Sin respuestas',D(-4,-3,-2,0),'No dijiste nada. La tribuna se sintió abandonada.'),
  ] },

/* ===================== CONSECUENCIAS (se activan por decisiones previas) ===================== */
{ id:'cons_vendido_brilla', cat:'deportivo', jugador:'vendido', requiere:'vendio_figura',
  titulo:'{JUGADOR} brilla donde lo vendiste',
  contexto:'{JUGADOR}, al que dejaste ir, {HAZANA}. La hinchada te lo recuerda en cada partido.',
  variables:{ HAZANA:['hizo un golazo en su debut','fue figura en el clásico del otro lado','ya es titular indiscutido','salió en todos los resúmenes de la fecha'] },
  opciones:[
    O('Intentar recomprarlo','Caro y con orgullo herido',D(2,3,4,-140,3),'Volvió {JUGADOR}: pagaste de más, pero la tribuna lo festejó.',FICHA),
    O('Decir que fue lo mejor para el club','Defendés la decisión',D(-2,-2,0,0,-2),'Defendiste la venta. Pocos te creyeron y el vestuario tomó nota.'),
    O('Felicitarlo en público','Elegancia',D(2,3,0,0,1),'Felicitaste a {JUGADOR} en redes: quedaste como un caballero.'),
  ] },

{ id:'cons_vendido_vestuario', cat:'institucional', jugador:null, requiere:'vendio_figura',
  titulo:'El vestuario pregunta por la venta',
  contexto:'Tras la salida de una de las figuras, {REFERENTE} pide hablar con vos: quieren saber si el club tiene un proyecto o está liquidando.',
  variables:{ REFERENTE:['el capitán','un grupo de referentes','el delegado del plantel'] },
  opciones:[
    O('Prometer refuerzos','Compromiso que hay que cumplir',D(1,1,2,-80,6),'Prometiste refuerzos. El plantel se calmó, pero ahora hay que cumplir.'),
    O('Explicar el proyecto con números','Franqueza',D(2,0,0,0,2),'Mostraste las cuentas: no gustó, pero lo entendieron.'),
    O('Cortar la charla','Autoridad, sin explicaciones',D(-2,-3,-3,0,-8),'Cortaste la charla. El vestuario quedó resentido.'),
  ] },

{ id:'cons_recorte_reclamo', cat:'deportivo', jugador:null, requiere:'recorte',
  titulo:'El plantel reclama por el recorte',
  contexto:'El ajuste de gastos llegó al vestuario: {RECLAMO}. Los jugadores quieren una respuesta antes del próximo partido.',
  variables:{ RECLAMO:['se atrasaron los premios','se recortaron las concentraciones','los viajes ahora son en micro'] },
  opciones:[
    O('Pagar los premios','Se calma el vestuario, sale plata',D(-1,0,3,-70,8),'Pagaste lo adeudado: el plantel respondió en la cancha.'),
    O('Mantener el ajuste','Disciplina fiscal',D(2,0,-3,0,-8),'Mantuviste el ajuste. La caja respira; el vestuario, no.'),
    A('Prometer premios si hay resultados','Apuesta al esfuerzo',0.5,D(2,1,3,0,5),'El plantel se motivó y el equipo ganó: cumplir será barato.',D(-3,-2,-3,-30,-8),'No hubo resultados y el plantel sintió que le mentiste.'),
  ] },

{ id:'cons_recorte_socios', cat:'hinchada', jugador:null, requiere:'recorte',
  titulo:'Los socios notan el ajuste',
  contexto:'{AVISO} y en las redes se multiplican las quejas: "con este dirigente se achica todo".',
  variables:{ AVISO:['Se cerró el buffet de la popular','La sede social bajó la persiana antes de hora','Las cuotas se actualizaron sin aviso'] },
  opciones:[
    O('Explicar el ahorro','Transparencia',D(2,2,0,0,0),'Explicaste el porqué del ajuste: la mayoría lo entendió.'),
    O('Compensar con un beneficio','Cuesta, pero calma',D(3,3,0,-40,1),'Sumaste un beneficio para socios y la queja se apagó.'),
    O('Ignorar las quejas','El ahorro manda',D(-4,-4,0,20,-1),'Ignoraste el ruido. Ahorraste, pero la tribuna lo recordó.'),
  ] },

{ id:'cons_prensa_vendetta', cat:'mediatico', jugador:null, requiere:'prensa_enojada',
  titulo:'El periodista no te perdona',
  contexto:'{PERIODISTA} no suelta el tema: cada programa arranca recordando tu último desliz.',
  variables:{ PERIODISTA:['El conductor del programa de las diez','Un cronista histórico del club','Una columnista de un portal deportivo'] },
  opciones:[
    O('Invitarlo a una charla','Bajar la tensión',D(1,4,0,0,0),'Se sentaron a charlar. La nota siguiente fue más amable.'),
    O('No responder nada','Dejar que se agote',D(-2,-5,0,0,0),'No respondiste. El tema duró dos semanas más.'),
    A('Contraatacar con un comunicado','Puede salir muy bien o muy mal',0.4,D(3,5,0,0,2),'El comunicado pegó: la opinión pública te acompañó.',D(-4,-7,0,0,-3),'El comunicado cayó pésimo y el periodista lo usó de leña.'),
  ] },

{ id:'cons_racha_presion', cat:'hinchada', jugador:null, requiere:'racha',
  titulo:'La victoria sube las expectativas',
  contexto:'Después del buen resultado, {HINCHADA}. Ahora cualquier tropiezo se va a leer como una crisis.',
  variables:{ HINCHADA:['la tribuna empezó a cantar por el título','la prensa ya habla de candidatos','los socios piden refuerzos de jerarquía'] },
  opciones:[
    O('Pedir calma','Bajar la presión',D(2,1,-2,0,3),'Pediste calma: el vestuario respiró, la tribuna se frenó.'),
    O('Prometer pelear arriba','Subís la apuesta',D(3,5,0,0,-3),'Prometiste pelear arriba. Ahora hay que cumplir.'),
    O('Premiar al plantel','Reconocimiento con costo',D(1,2,3,-90,6),'Premiaste al plantel por la racha: están a muerte con vos.'),
  ] },

{ id:'cons_vestuario_reunion', cat:'institucional', jugador:null, requiere:'vestuario_roto',
  titulo:'Se rompió el vestuario',
  contexto:'{SINTOMA}. El técnico te avisa que si no se interviene, el grupo se parte en dos.',
  variables:{ SINTOMA:['Dos referentes se pelearon a los gritos en el entrenamiento','Hay un grupo de jugadores que ya no le habla al técnico','Se filtró un audio del plantel criticando a la dirigencia'] },
  opciones:[
    O('Reunión a solas con los referentes','Diálogo directo',D(2,0,2,0,15),'La reunión ordenó al grupo. Costó, pero valió la pena.'),
    O('Cambiar al capitán','Gesto fuerte',D(-2,-2,0,0,10),'Cambiaste al capitán. Algunos lo aplaudieron, otros hicieron silencio.'),
    O('Sancionar a los involucrados','Mano dura',D(1,3,-2,0,-5),'Sancionaste a los involucrados: la prensa aplaudió, el vestuario se enfrió.'),
  ] },

{ id:'cons_capitan_renuncia', cat:'institucional', jugador:'capitan', requiere:'vestuario_critico',
  titulo:'El capitán quiere irse',
  contexto:'{JUGADOR}, el capitán, te pide hablar: {MOTIVO}. Si se va, el grupo queda sin referente.',
  variables:{ MOTIVO:['dice que ya no se siente respaldado','está harto del clima en el vestuario','recibió una oferta y está tentado'] },
  opciones:[
    O('Convencerlo con una mejora de contrato','Cuesta plata, ordena el grupo',D(1,1,2,-80,15),'{JUGADOR} renovó y volvió a ordenar al grupo.'),
    O('Reunirte con todo el plantel','Poner las cartas sobre la mesa',D(2,0,1,0,8),'La reunión fue áspera, pero el grupo salió más unido.'),
    O('Dejarlo ir','Cortás por lo sano',D(-3,-3,-5,40,-5),'{JUGADOR} se fue. Entró plata, pero el vestuario quedó huérfano.',VENDE),
  ] },

{ id:'cons_vestuario_oro', cat:'deportivo', jugador:null, requiere:'vestuario_oro',
  titulo:'El plantel se juega por vos',
  contexto:'El grupo está tan unido que {GESTO}. Es el mejor momento para pedirles un esfuerzo extra.',
  variables:{ GESTO:['los referentes proponen renovar con rebaja','los juveniles piden entrenar doble turno','el plantel organizó un asado con los socios'] },
  opciones:[
    O('Aprovechar el envión','Exigir más, sin costo',D(1,2,4,0,-4),'Pediste más y respondieron en la cancha, aunque el grupo notó el tirón.'),
    O('Premiarlos con un viaje','Cuidar el clima',D(1,3,1,-60,6),'El viaje fue un éxito: el grupo está a muerte con vos.'),
    O('Dejar todo como está','No tocar lo que funciona',D(1,1,2,0,2),'No tocaste nada. A veces es la mejor decisión.'),
  ] },

{ id:'dep_arquero_apuro', cat:'deportivo', jugador:'fichaje:ARQ', cond:'pocos_arqueros',
  titulo:'Te quedaste sin arqueros',
  contexto:'El plantel cuenta con un solo arquero y el técnico no quiere jugar la suerte. Aparece {JUGADOR}, arquero de {JEDAD} años y nivel {JRATING}.',
  variables:{ PLAZO:['esta semana'] },
  opciones:[
    O('Fichar a {JUGADOR}','Seguridad bajo los tres palos',D(3,1,5,-80,3),'{JUGADOR} llegó a {CLUB}: el técnico durmió tranquilo por primera vez en semanas.',FICHA),
    O('Promover a un juvenil','Confiar en la cantera',D(2,2,-2,0,0),'Subiste a un juvenil como suplente. Es una apuesta.'),
    O('Arreglarse con lo que hay','Cero gasto, cero red',D(-2,-1,-4,0,-3),'No hiciste nada. El técnico dejó claro que te avisó.'),
  ] },


];

/* ===================== Expansión ===================== */

const _sub = (s, vars) => (s == null ? s : String(s).replace(/\{([A-Z_]+)\}/g, (m, k) => (k in vars ? vars[k] : m)));

const _instanciarRama = (r, vars) => {
  const o = { d: Object.assign({}, r.d), msg: _sub(r.msg, vars) };
  if (r.vende) o.vende = true;
  if (r.ficha) o.ficha = true;
  return o;
};

const _instanciarOpcion = (op, vars) => {
  const o = { texto: _sub(op.texto, vars), sub: _sub(op.sub, vars) };
  if (op.setea) o.setea = op.setea;
  if (op.azar) {
    o.azar = { p: op.azar.p, ok: _instanciarRama(op.azar.ok, vars), mal: _instanciarRama(op.azar.mal, vars) };
  } else {
    Object.assign(o, _instanciarRama(op, vars));
  }
  return o;
};

const expandirPlantillas = (plantillas) => {
  const out = [];
  for (const p of plantillas) {
    const keys = Object.keys(p.variables || {});
    let combos = [{}];
    for (const k of keys) {
      const next = [];
      for (const c of combos) for (const v of p.variables[k]) next.push(Object.assign({}, c, { [k]: v }));
      combos = next;
    }
    if (combos.length > 14) {
      const n = combos.length, pick = [];
      for (let i = 0; i < 14; i++) pick.push(combos[Math.floor(i * n / 14)]);
      combos = pick;
    }
    combos.forEach((vars, i) => {
      const ev = {
        id: p.id + '#' + i, plantilla: p.id, cat: p.cat, jugador: p.jugador,
        titulo: _sub(p.titulo, vars), contexto: _sub(p.contexto, vars),
        opciones: p.opciones.map(op => _instanciarOpcion(op, vars)),
      };
      if (p.requiere) ev.requiere = p.requiere;
      if (p.cond) ev.cond = p.cond;
      out.push(ev);
    });
  }
  return out;
};

const auditarEventos = (evs) => {
  const permitidos = ['JUGADOR', 'JPOS', 'JEDAD', 'JRATING', 'CLUB', 'CIUDAD'];
  const porCat = {}, ids = {}, textos = {}, desconocidos = [], idsDuplicados = [], pocasOpciones = [], opcionesInvalidas = [], textosDuplicados = [];
  let conJugador = 0;
  const flagsSetea = new Set(), flagsRequiere = new Set();
  const revisar = (ev, s) => {
    if (s == null) return;
    (String(s).match(/\{[A-Z_]+\}/g) || []).forEach(t => {
      const n = t.slice(1, -1);
      const ok = permitidos.includes(n) || (n === 'CUALIDAD' && ev.jugador === 'cualidad:*');
      if (!ok) desconocidos.push(ev.id + ' ' + t);
    });
  };
  for (const ev of evs) {
    porCat[ev.cat] = (porCat[ev.cat] || 0) + 1;
    if (ev.jugador) conJugador++;
    if (ids[ev.id]) idsDuplicados.push(ev.id);
    ids[ev.id] = 1;
    const clave = ev.titulo + '|' + ev.contexto;
    if (textos[clave]) textosDuplicados.push(ev.id);
    textos[clave] = 1;
    if (!ev.opciones || ev.opciones.length < 2) pocasOpciones.push(ev.id);
    if (ev.requiere) flagsRequiere.add(ev.requiere);
    revisar(ev, ev.titulo); revisar(ev, ev.contexto);
    for (const op of ev.opciones || []) {
      revisar(ev, op.texto); revisar(ev, op.sub);
      if (op.setea) flagsSetea.add(op.setea);
      if (op.azar) { revisar(ev, op.azar.ok.msg); revisar(ev, op.azar.mal.msg); if (!op.azar.ok.d || !op.azar.mal.d) opcionesInvalidas.push(ev.id); }
      else { revisar(ev, op.msg); if (!op.d) opcionesInvalidas.push(ev.id); }
    }
  }
  return {
    total: evs.length, porCat, conJugador, ratioConJugador: +(conJugador / evs.length).toFixed(3),
    idsDuplicados, textosDuplicados, pocasOpciones, opcionesInvalidas, tokensDesconocidos: desconocidos,
    cadenas: { setea: [...flagsSetea], requiere: [...flagsRequiere] },
  };
};
