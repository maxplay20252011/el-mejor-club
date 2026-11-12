/* Eventos 2 — estacionales (fase), clásico, por país, personajes recurrentes y cadenas nuevas.
   Se carga después de eventos.js y usa sus helpers (D, O, A, VENDE, FICHA). */

PLANTILLAS_EVENTOS.push(

/* ===================== ESTACIONALES: INICIO (pretemporada) ===================== */
{ id:'est_ini_gira', cat:'economico', jugador:null, fase:'inicio',
  titulo:'Te ofrecen una gira de pretemporada',
  contexto:'Una productora propone una gira por {DESTINO} con {FORMATO}. Paga bien, pero el plantel llegaría cansado al arranque.',
  variables:{ DESTINO:['una ciudad costera','el interior del país','un país vecino','una zona de montaña'],
              FORMATO:['tres amistosos','un torneo relámpago','dos partidos y una clínica con chicos'] },
  opciones:[
    O('Aceptar la gira','Entra plata, el plantel viaja cansado',D(1,3,-3,110,-2),'La gira dejó plata y buenas fotos, pero el técnico se quejó del cansancio.'),
    O('Entrenar en casa','Sin ingresos, con piernas frescas',D(1,-1,3,-20),'Trabajaste en casa: el equipo llega entero, la tesorería no festeja.'),
    A('Pedir una gira más corta','Puede salir redondo o romperse',0.5,D(3,3,2,60),'La productora aceptó una versión corta: buen negocio y poco desgaste.',D(-2,-2,-2,-20),'La productora se ofendió y se bajó: perdiste la plata y el tiempo de entrenamiento.'),
  ] },

{ id:'est_ini_cuota', cat:'institucional', jugador:null, fase:'inicio',
  titulo:'Hay que definir la cuota social del año',
  contexto:'Con {MOTIVO}, la comisión te pide una postura sobre la cuota social. {PRESION}.',
  variables:{ MOTIVO:['la inflación encima','el estadio pidiendo arreglos','la competencia de otros clubes del barrio'],
              PRESION:['Los socios jóvenes reclaman precios más bajos','Los jubilados piden descuentos','La barra dice que no se toca'] },
  opciones:[
    O('Subirla','Más caja, menos simpatía',D(-6,-3,0,150),'Subiste la cuota: la tesorería respira y la asamblea refunfuña.'),
    O('Congelarla','Simpatía hoy, apuros mañana',D(5,2,0,-30),'Congelaste la cuota: aplausos en la tribuna y cuentas más ajustadas.'),
    O('Escalonada por categoría','Complejo pero parejo',D(1,0,0,50),'Armaste una cuota escalonada: nadie está feliz, nadie está furioso.'),
  ] },

{ id:'est_ini_pruebas', cat:'deportivo', jugador:null, fase:'inicio',
  titulo:'Pruebas de jugadores libres',
  contexto:'Llegan {CANTIDAD} jugadores a pedir una prueba en pretemporada. {NOTA}.',
  variables:{ CANTIDAD:['una veintena de','casi cuarenta','unos diez'],
              NOTA:['El técnico duda de que haya talento','Un ojeador asegura que hay uno bueno','El preparador físico avisa que no hay tiempo'] },
  opciones:[
    O('Abrir pruebas masivas','Costo logístico, posible hallazgo',D(2,1,3,-70),'Las pruebas dejaron un par de sorpresas y una cuenta de refrigerios.'),
    O('Probar solo a recomendados','Ahorro, menos descubrimientos',D(0,0,1,-10),'Probaste solo a unos pocos: nada nuevo, nada perdido.'),
    O('No abrir las puertas','Foco en el plantel actual',D(-2,-2,0,20),'Cerraste las puertas: ahorraste, pero hubo quejas en el barrio.'),
  ] },

{ id:'est_ini_amistoso', cat:'deportivo', jugador:null, fase:'inicio',
  titulo:'Amistoso de lujo contra {RIVAL}',
  contexto:'{RIVAL} propone un amistoso {FECHA}, en {SEDE}. Sirve para medirse, pero un mal resultado se comenta.',
  variables:{ FECHA:['la semana próxima','el fin de semana largo','justo antes del estreno'],
              SEDE:['tu estadio','el estadio rival','una sede neutral'] },
  opciones:[
    A('Jugarlo con el equipo titular','Ensayo de verdad, riesgo de golpe',0.55,D(3,3,5,30),'El equipo se lució en el amistoso y la tribuna salió ilusionada.',D(-4,-3,-4,10),'El amistoso terminó en goleada y los pronósticos se enfriaron.'),
    O('Probar suplentes y juveniles','Sin presión, poco brillo',D(1,0,2,10),'Los suplentes aprovecharon la oportunidad sin que nadie se enojara.'),
    O('Declinar el amistoso','Tranquilidad, sin ruido',D(-1,-2,0,0),'Declinaste: el técnico entrenó a puertas cerradas y la prensa preguntó por qué.'),
  ] },

{ id:'est_ini_presentacion', cat:'mediatico', jugador:null, fase:'inicio',
  titulo:'Presentación oficial del plantel',
  contexto:'Toca presentar al plantel de la temporada en {LUGAR}. Hay {EXPECTATIVA}.',
  variables:{ LUGAR:['el estadio','un teatro de la ciudad','la plaza principal'],
              EXPECTATIVA:['mucha expectativa','cierta apatía','invitados y cámaras'] },
  opciones:[
    O('Hacer una gran fiesta','Imagen potente, gasto alto',D(3,6,1,-110),'La fiesta salió espectacular y los socios se llevaron los souvenirs.'),
    O('Un acto sobrio','Austero y sin sobresaltos',D(1,1,0,-20),'El acto fue sobrio: pocos aplausos, cero críticas.'),
    A('Aprovechar para lanzar el abono','Ventas, pero puede sonar oportunista',0.5,D(4,3,0,120),'El abono se vendió como pan caliente: la tesorería sonríe.',D(-4,-4,0,-20),'Pareció una operación comercial disfrazada de fiesta y los socios lo notaron.'),
  ] },

{ id:'est_ini_preparador', cat:'deportivo', jugador:null, fase:'inicio',
  titulo:'El preparador físico pide cambios',
  contexto:'El preparador físico reclama {PEDIDO}. Dice que sin eso el equipo se resiente en el segundo semestre.',
  variables:{ PEDIDO:['un gimnasio renovado','más días de trabajo en doble turno','un nutricionista de planta','menos partidos amistosos'] },
  opciones:[
    O('Darle todo lo que pide','Inversión que se nota después',D(1,0,2,-130,3),'El plantel llegó a punto, aunque la inversión se sintió en la caja.'),
    O('Cumplir la mitad','Mezcla razonable',D(0,0,1,-50),'Cumpliste la mitad del pedido: el preparador entendió y se puso a trabajar.'),
    O('Pedirle que se arregle','Ahorro, tensión en el cuerpo técnico',D(-2,0,-3,30,-3),'Ahorraste, pero el cuerpo técnico quedó molesto y el plantel lo nota.'),
  ] },

/* ===================== ESTACIONALES: MEDIO (receso de invierno) ===================== */
{ id:'est_med_pases', cat:'economico', jugador:null, fase:'medio',
  titulo:'Último día del libro de pases',
  contexto:'Quedan horas para el cierre del mercado y {SITUACION}. El técnico te mira esperando una señal.',
  variables:{ SITUACION:['aparece un volante libre de buen nivel','un rival te ofrece un delantero a préstamo','ya no hay plata para cerrar nada','hay un jugador que pide irse'] },
  opciones:[
    O('Salir a comprar de apuro','Se arma el plantel, vacía la caja',D(2,2,4,-140),'Cerraste un refuerzo sobre la hora y el vestuario lo agradeció.'),
    O('Cerrar sin movimientos','Ahorro y calma',D(0,-1,-2,20),'El mercado cerró sin novedades: ahorraste, pero nadie se ilusionó.'),
    A('Pedir un préstamo con opción de compra','Puede salir barato o salir caro',0.5,D(3,2,4,-40),'El préstamo salió bien: llegó el refuerzo con una cuota razonable.',D(-3,-2,-1,-120),'Se complicó la operación y terminaste pagando de más sin refuerzo.'),
  ] },

{ id:'est_med_balance', cat:'institucional', jugador:null, fase:'medio',
  titulo:'Balance del primer semestre',
  contexto:'La comisión fiscalizadora revisa las cuentas del semestre y {HALLAZGO}.',
  variables:{ HALLAZGO:['detecta gastos mal justificados','pide más detalle de los sueldos','reclama los números del buffet del estadio','encuentra deudas no declaradas'] },
  opciones:[
    O('Abrir los libros','Transparencia total, costo político',D(5,2,0,-30),'Abriste los libros: algunos se asustaron, otros lo valoraron mucho.'),
    A('Presentar un balance prolijo','Si sale bien, todo en calma',0.55,D(3,1,0,30),'La comisión aceptó el balance sin objeciones: respiraste.',D(-7,-4,0,-20),'La comisión encontró errores y la asamblea se puso bravísima.'),
    O('Postergar la revisión','Ganás tiempo, perdés confianza',D(-4,-2,0,0),'Postergaste la revisión: te ganaste miradas torcidas en la comisión.'),
  ] },

{ id:'est_med_paro', cat:'institucional', jugador:null, fase:'medio',
  titulo:'Paro de {SECTOR}',
  contexto:'Los empleados de {SECTOR} anuncian un paro por {RECLAMO}. Hay partidos en el calendario y poco margen.',
  variables:{ SECTOR:['la seguridad del estadio','la administración','el mantenimiento del campo','el transporte del club'],
              RECLAMO:['salarios atrasados','mejores condiciones','falta de personal'] },
  opciones:[
    O('Pagar lo adeudado','Cumplís, caja golpeada',D(3,1,0,-120),'Pagaste y el paro se levantó: cumpliste, aunque la caja lo sintió.'),
    O('Negociar plazos','Ganás aire, queda tensión',D(0,-1,0,-30,-1),'Negociaste plazos: el conflicto se enfrió pero sigue latente.'),
    A('Declarar el conflicto injustificado','Mano dura, mucho riesgo',0.4,D(2,1,0,20),'Los empleados aceptaron las condiciones y el paro se terminó rápido.',D(-8,-5,-2,-40),'El conflicto se agravó, los partidos se complicaron y la prensa te señaló.'),
  ] },

{ id:'est_med_clima', cat:'deportivo', jugador:null, fase:'medio',
  titulo:'Temporal sobre el estadio',
  contexto:'Un temporal dejó {DANIO} justo antes de un partido clave. Hay que decidir rápido.',
  variables:{ DANIO:['la cancha anegada','parte del techo de la tribuna dañado','los vestuarios inundados','el campo cubierto de barro'] },
  opciones:[
    O('Reparar urgente','Caro pero seguro',D(3,2,1,-140),'Reparaste a contrarreloj: el partido se jugó con normalidad.'),
    O('Suspender y reprogramar','Ahorro, calendario apretado',D(-2,-1,-3,10),'Suspendiste el partido: la liga lo reprogramó en una fecha incómoda.'),
    A('Jugar igual en esas condiciones','Épica o papelón',0.45,D(5,5,5,20),'Jugaron en el barro con garra y la hinchada vivió una noche épica.',D(-6,-5,-5,-30),'El partido fue un desastre en el barro y hasta hubo un lesionado.'),
  ] },

{ id:'est_med_receso', cat:'deportivo', jugador:null, fase:'medio',
  titulo:'Receso de mitad de año',
  contexto:'En el receso, {SITUACION}. Hay que definir cómo se usa el tiempo.',
  variables:{ SITUACION:['el plantel pide vacaciones largas','el técnico quiere una concentración','varios jugadores están mal físicamente','los suplentes reclaman minutos'] },
  opciones:[
    O('Dar vacaciones','Cabeza descansada, ritmo perdido',D(2,0,-2,0,3),'El plantel descansó, pero volvió con falta de ritmo.'),
    O('Concentración intensiva','Ritmo alto, ánimo bajo',D(-1,0,3,-30,-2),'La concentración dejó al equipo afilado y de mal humor.'),
    O('Mix con cuatro días libres','Un poco de cada cosa',D(1,0,1,-10),'El equilibrio fue bien recibido: todos conformes y nadie eufórico.'),
  ] },

{ id:'est_med_encuesta', cat:'hinchada', jugador:null, fase:'medio',
  titulo:'Encuesta a los socios',
  contexto:'La comisión hizo una encuesta de mitad de año y {RESULTADO_ENC}. Piden una respuesta.',
  variables:{ RESULTADO_ENC:['la mayoría pide más refuerzos','muchos reclaman mejores servicios en el estadio','una buena parte cuestiona los precios','varios piden más cercanía con el dirigente'] },
  opciones:[
    O('Responder con medidas concretas','Cuesta plata, suma confianza',D(5,3,0,-90),'Anunciaste medidas concretas: los socios sintieron que los escuchaste.'),
    O('Hacer una asamblea abierta','Gratis pero expone',D(2,1,0,0),'La asamblea abierta fue tensa pero dejó buen clima.'),
    A('Prometer más de lo que se puede','Si cumplís, un hit; si no, una bomba',0.4,D(7,4,2,-20),'Las promesas ilusionaron y se cumplieron a tiempo: euforia popular.',D(-8,-5,-2,0),'Las promesas no se cumplieron y la tribuna te lo hizo saber.'),
  ] },

/* ===================== ESTACIONALES: CIERRE ===================== */
{ id:'est_cie_definicion', cat:'deportivo', jugador:null, fase:'cierre',
  titulo:'La última fecha lo define todo',
  contexto:'En la última fecha {CONDICION}. El plantel espera tu mensaje.',
  variables:{ CONDICION:['dependés de un resultado ajeno','te jugás la clasificación','te jugás la permanencia','te jugás el prestigio del año'] },
  opciones:[
    O('Prometer premios importantes','Motiva, cuesta plata',D(2,1,5,-110),'Prometiste premios y el plantel salió a morder la cancha.'),
    O('Serenar al plantel','Cabeza fría, sin plata',D(1,0,2,0),'Pediste calma: el equipo jugó concentrado, sin grandes gestos.'),
    A('Hablar públicamente de la final','Presión extra, a todo o nada',0.5,D(5,4,6,0),'Tus palabras encendieron al equipo y a la tribuna: salieron a ganar.',D(-6,-4,-4,0),'Tus palabras sumaron una presión de más y el equipo se paralizó.'),
  ] },

{ id:'est_cie_fiesta', cat:'hinchada', jugador:null, fase:'cierre',
  titulo:'Fiesta de fin de temporada',
  contexto:'La hinchada propone una fiesta con {FORMATO} para cerrar el año.',
  variables:{ FORMATO:['murga y comida en el estadio','un recital de bandas locales','una caravana por el barrio','un asado popular en la sede'] },
  opciones:[
    O('Organizarla en grande','Clima de fiesta, gasto fuerte',D(5,3,0,-100,2),'La fiesta fue un éxito rotundo y todos se fueron contentos.'),
    O('Apoyarla sin gastar','La hinchada se encarga',D(2,1,0,-15),'Apoyaste la idea y la hinchada la organizó por su cuenta.'),
    O('Declinar por la situación','Prudencia, frialdad',D(-3,-1,0,15),'Declinaste: ahorraste, pero la tribuna se quedó con gusto a poco.'),
  ] },

{ id:'est_cie_premios', cat:'mediatico', jugador:'figura', fase:'cierre',
  titulo:'Premio al mejor jugador del año',
  contexto:'Todo apunta a que {JUGADOR} ({JPOS}, nivel {JRATING}) es el mejor del año. La ceremonia es {FORMATO} y hay que decidir cómo manejarla.',
  variables:{ FORMATO:['en vivo por la radio','en una cena de gala','en las redes del club'] },
  opciones:[
    O('Premiarlo a él solo','Reconocimiento claro, celos en el vestuario',D(2,4,0,-10,-3),'{JUGADOR} recibió el premio con orgullo; algún compañero se hizo el distraído.'),
    O('Premiar al plantel completo','Vestuario unido, menos brillo mediático',D(1,-1,0,-20,4),'Premiaste al plantel completo: nadie se sintió menos, aunque la prensa quería un nombre.'),
    O('Sin ceremonia','Cero gasto, cero clima',D(-2,-2,0,15),'Pasaste el año sin ceremonia: el tema quedó flotando en los pasillos.'),
  ] },

{ id:'est_cie_contrato', cat:'economico', jugador:'figura', fase:'cierre',
  titulo:'Vence el contrato de {JUGADOR}',
  contexto:'El contrato de {JUGADOR} ({JPOS}, {JEDAD} años) vence y {SITUACION}. El representante espera una respuesta antes del cierre.',
  variables:{ SITUACION:['pide un aumento importante','tiene ofertas de otros clubes','quiere asegurarse la titularidad','dice que ama el club pero necesita plata'] },
  opciones:[
    O('Renovar con aumento','Lo atás, la caja lo paga',D(4,3,3,-120),'Renovaste a {JUGADOR}: el vestuario lo celebró y la tesorería hizo números.'),
    O('Renovar por un año','Mitad de camino',D(1,0,1,-50),'Un año más para {JUGADOR}: nadie se enojó, nadie se ilusionó.'),
    O('Dejarlo ir libre','Ahorro, pérdida de peso',D(-4,-3,-3,40),'{JUGADOR} se fue libre: ahorraste, pero la hinchada lloró.',VENDE),
  ] },

{ id:'est_cie_auditoria', cat:'institucional', jugador:null, fase:'cierre',
  titulo:'Auditoría de cierre del año',
  contexto:'La liga audita las cuentas de todos los clubes al cierre y {ASUNTO}. Es el momento de decidir cómo responder.',
  variables:{ ASUNTO:['pide documentación de los últimos seis meses','investiga pagos a intermediarios','revisa la habilitación del estadio','exige regularizar deudas laborales'] },
  opciones:[
    O('Colaborar y entregar todo','Orden y plata',D(4,2,0,-60),'Entregaste todo en tiempo y forma: la liga lo valoró.'),
    A('Entregar solo lo necesario','Menos trabajo, algún riesgo',0.55,D(2,0,0,10),'La liga aceptó lo entregado y todo pasó sin sobresaltos.',D(-6,-4,-2,-80),'La liga pidió más, aplicó una multa y la prensa lo contó.'),
    O('Contratar un estudio externo','Caro, pero ordena',D(3,1,0,-100),'El estudio ordenó las cuentas: caro, pero prolijo.'),
  ] },

{ id:'est_cie_proyecto', cat:'institucional', jugador:null, fase:'cierre',
  titulo:'Planificar el año que viene',
  contexto:'Cerrando el año, la comisión quiere saber {PREGUNTA}. Hay que mostrar un plan.',
  variables:{ PREGUNTA:['cuál es el proyecto deportivo','cómo se financia el próximo semestre','qué se hará con las inferiores','si se apuesta a refuerzos o a la cantera'] },
  opciones:[
    O('Apostar fuerte a refuerzos','Resultados rápidos, riesgo financiero',D(3,3,4,-120),'Anunciaste una apuesta fuerte: los socios se ilusionaron.'),
    O('Apostar a la cantera','Proyecto largo, menos gasto',D(1,0,-1,-20),'Apostaste a la cantera: los más jóvenes sonríen, los impacientes no.'),
    O('Ahorrar y estabilizar','Prudencia financiera',D(-1,-2,-2,70),'Anunciaste un plan de ahorro: tranquilidad en las cuentas, poco entusiasmo.'),
  ] },

/* ===================== CLÁSICO ===================== */
{ id:'cla_semana', cat:'hinchada', jugador:null, requiere:'clasico',
  titulo:'Semana de clásico contra {RIVAL}',
  contexto:'La ciudad está dividida y {AMBIENTE}. Todos esperan tu gesto antes del partido.',
  variables:{ AMBIENTE:['las cargadas llegan hasta el trabajo','los chicos usan la camiseta en la escuela','los bares están llenos de pronósticos','la prensa no habla de otra cosa'] },
  opciones:[
    O('Concentrar al plantel todo el fin de semana','Foco total, ánimo bajo',D(1,0,4,-30),'Concentraste al plantel: el equipo llegó enfocado, aunque con ganas de salir.'),
    O('Convocar a la hinchada a alentar','Clima de fiesta, algún riesgo de excesos',D(4,3,2,-20),'La hinchada respondió con una gran movilización de apoyo.'),
    A('Provocar al rival en la prensa','Prende la mecha, a todo o nada',0.45,D(5,4,5,0),'Tus declaraciones prendieron la mecha y el equipo salió con furia.',D(-6,-5,-3,0),'Tus declaraciones se volvieron en contra y el rival las usó para motivarse.'),
  ] },

{ id:'cla_barras', cat:'hinchada', jugador:null, requiere:'clasico',
  titulo:'Amenazas antes del clásico',
  contexto:'Antes del clásico contra {RIVAL}, un sector de la hinchada amenaza con {AMENAZA}. La seguridad pide una definición.',
  variables:{ AMENAZA:['no ingresar si no se les entregan banderas','armar un banderazo no autorizado','copar la tribuna visitante','faltar al apoyo si no hay refuerzos'] },
  opciones:[
    O('Dialogar y llegar a un acuerdo','Calma con costo',D(2,1,0,-80),'Dialogaste con los referentes y la situación se calmó.'),
    O('Pedir refuerzo policial','Orden con mala imagen',D(-1,-2,0,-50),'El refuerzo policial garantizó el orden, aunque la imagen del club sufrió.'),
    A('Ignorar las amenazas','Si no pasa nada, ganaste; si pasa, se complica',0.5,D(2,1,0,10),'Las amenazas quedaron en nada y el clásico transcurrió en paz.',D(-8,-6,0,-70),'Hubo incidentes en el clásico y el club recibió una sanción.'),
  ] },

{ id:'cla_prensa', cat:'mediatico', jugador:null, requiere:'clasico',
  titulo:'La prensa calienta el clásico',
  contexto:'La prensa arma un programa especial sobre el clásico con {TITULAR_PRENSA}. Quieren tu voz.',
  variables:{ TITULAR_PRENSA:['frases picantes del rival','un repaso de la rivalidad histórica','dudas sobre tu plantel','el favoritismo del rival'] },
  opciones:[
    O('Hablar con calma','Imagen sólida, poco show',D(2,3,0,0),'Hablaste con calma y reforzaste tu imagen institucional.'),
    A('Contestar con fuerza','Marca territorio, puede salir caro',0.5,D(4,5,3,0),'Tus respuestas fueron virales y la hinchada te aplaudió de pie.',D(-4,-4,-2,0),'Tus respuestas se malinterpretaron y la prensa te criticó.'),
    O('No dar notas','Evitás riesgo, perdés protagonismo',D(0,-3,0,0),'No diste notas: otros ocuparon el espacio y la prensa te lo reprochó.'),
  ] },

{ id:'cla_arbitro', cat:'institucional', jugador:null, requiere:'clasico',
  titulo:'Terna arbitral polémica para el clásico',
  contexto:'Se designó una terna arbitral para el clásico contra {RIVAL} y {POLEMICA}. Hay presión para reaccionar.',
  variables:{ POLEMICA:['uno de los árbitros tuvo un antecedente con tu club','la hinchada rival lo celebra','la designación llegó tarde','hay dudas sobre un vínculo previo'] },
  opciones:[
    O('Pedir formalmente el cambio','Reclamo institucional, ruido político',D(1,-2,0,-20),'Presentaste el pedido: la liga lo rechazó, pero quedó constancia.'),
    O('Aceptar la designación','Prudencia y confianza',D(2,1,0,0),'Aceptaste y evitaste un frente innecesario: el clásico se jugó en calma.'),
    A('Filtrar la polémica a la prensa','Presión mediática, riesgo de sanción',0.4,D(3,4,3,0),'La presión surtió efecto: la liga cuidó la designación.',D(-5,-4,-2,-60),'La liga lo tomó como una maniobra y recibiste una advertencia pública.'),
  ] },

{ id:'cla_v_revancha', cat:'deportivo', jugador:null, requiere:'clasico_vuelta',
  titulo:'Revancha contra {RIVAL}',
  contexto:'Llega la revancha contra {RIVAL}, {ANTECEDENTE}. La hinchada quiere sentir que se puede.',
  variables:{ ANTECEDENTE:['con todo por jugar en la tabla','con la prensa dividida','con ganas de cerrar una cuenta pendiente','con ambos equipos pidiendo respeto'] },
  opciones:[
    A('Salir a ganar desde el primer minuto','Valentía a todo o nada',0.5,D(6,5,9,0),'El equipo salió a morder y se llevó un clásico memorable.',D(-7,-5,-7,0),'El equipo se desordenó y el rival lo castigó con claridad.'),
    O('Partido cerrado y de contragolpe','Cálculo antes que épica',D(1,0,3,0),'Un partido cerrado: ni gloria ni drama, pero se sumó.'),
    O('Prometer una prima especial','Motivación con costo',D(2,1,4,-90),'Prometiste una prima: el equipo salió con otra cara y la caja lo notó.'),
  ] },

{ id:'cla_v_entradas', cat:'economico', jugador:null, requiere:'clasico_vuelta',
  titulo:'El precio de las entradas del clásico',
  contexto:'Para la revancha contra {RIVAL} hay {DEMANDA}. Hay que fijar el precio y la distribución.',
  variables:{ DEMANDA:['demanda que triplica la capacidad','reventa clandestina en la puerta','una lista de espera de socios','pedidos de entradas gratis de todas partes'] },
  opciones:[
    O('Precio popular','La gente lo agradece, la caja no',D(5,3,0,-20),'Mantuviste el precio popular: la hinchada te lo agradeció con aplausos.'),
    O('Precio de clásico','Más caja, menos simpatía',D(-4,-2,0,160),'Cobraste precio de clásico: llenaste la caja y recibiste críticas en las redes.'),
    A('Sorteo entre socios','Justo, pero genera reclamos',0.5,D(4,2,0,50),'El sorteo fue transparente y todos lo valoraron.',D(-3,-3,0,10),'El sorteo generó dudas y varios socios reclamaron.'),
  ] },

{ id:'cla_v_homenaje', cat:'institucional', jugador:null, requiere:'clasico_vuelta',
  titulo:'Homenaje a las glorias del club',
  contexto:'Antes de la revancha contra {RIVAL} se propone un homenaje a {GLORIAS}. Es emotivo, pero se come tiempo de preparación.',
  variables:{ GLORIAS:['los campeones de una década dorada','un ídolo histórico recién fallecido','el equipo del ascenso','los fundadores de la institución'] },
  opciones:[
    O('Hacerlo antes del partido','Emoción garantizada, algo de distracción',D(4,3,-2,-30),'El homenaje emocionó a todo el estadio; el plantel entró algo distraído.'),
    O('Hacerlo después','Sin distracciones, menos clima',D(2,1,2,-20),'El homenaje se hizo al final y el equipo no perdió el foco.'),
    O('Postergarlo para otra fecha','Evitás riesgos, perdés una oportunidad',D(-2,-1,1,0),'Postergaste el homenaje: algunos entendieron, otros se ofendieron.'),
  ] },

);

PLANTILLAS_EVENTOS.push(

/* ===================== POR PAÍS: SUDAMÉRICA / HISPANO ===================== */
{ id:'pais_sa_barrio', cat:'hinchada', jugador:null, geo:['sudamerica'],
  titulo:'Las escuelitas del barrio piden la cancha',
  contexto:'Las escuelitas de fútbol infantil de {ZONA} piden usar la cancha auxiliar {FRECUENCIA}. Los padres ya juntaron firmas.',
  variables:{ ZONA:['la zona sur','el barrio vecino','la periferia','el pueblo de al lado'],
              FRECUENCIA:['todos los sábados','dos veces por semana','en las vacaciones de invierno'] },
  opciones:[
    O('Abrirles la cancha gratis','Cantera y cariño, desgaste del campo',D(5,3,-1,-30),'Abriste la cancha: los chicos felices y el cuidador del campo, menos.'),
    O('Cobrar un alquiler simbólico','Todos ganan un poco',D(2,1,0,30),'Pusiste un alquiler simbólico: las familias aceptaron y se sumó caja.'),
    O('Decir que no por el estado del campo','Cuidás el césped, perdés simpatía',D(-4,-3,1,0),'Dijiste que no: el césped está intacto, pero el barrio no te lo perdona.'),
  ] },

{ id:'pais_sa_altura', cat:'deportivo', jugador:null, paises:['BO','EC','CO','PE'],
  titulo:'Partido a más de {METROS} metros de altura',
  contexto:'La fecha que viene se juega en una ciudad a gran altura. El cuerpo técnico propone {PLAN}.',
  variables:{ METROS:['2.600','3.000','3.600'],
              PLAN:['llegar con una semana de anticipación','llegar el día anterior y confiar en el físico','sumar un trabajo de adaptación en cámara hipobárica'] },
  opciones:[
    O('Viajar con una semana de anticipación','Mejor adaptación, más gasto',D(1,0,5,-90),'Llegaron temprano y el equipo se adaptó bien a la altura.'),
    O('Viajar el día anterior','Ahorro, sufrimiento físico',D(0,0,-3,-20),'Llegaron justo y el equipo sufrió el ritmo en el segundo tiempo.'),
    A('Contratar adaptación en cámara especial','Caro, el efecto no está garantizado',0.5,D(3,2,6,-130),'La preparación especial funcionó: el equipo corrió como si nada.',D(-2,-1,-1,-130),'La inversión no dio los frutos esperados y el gasto quedó en el aire.'),
  ] },

{ id:'pais_sa_rutas', cat:'economico', jugador:null, geo:['sudamerica'],
  titulo:'Viaje larguísimo por ruta',
  contexto:'El próximo partido de visitante implica {VIAJE}. Hay que decidir el transporte del plantel.',
  variables:{ VIAJE:['un viaje de 18 horas en micro','un vuelo con una escala larga','un recorrido por rutas en mal estado'] },
  opciones:[
    O('Contratar un micro cama','Comodidad, gasto fuerte',D(2,1,2,-90),'El plantel viajó cómodo y llegó descansado.'),
    O('Viajar en el micro del club','Ahorro, cansancio',D(0,0,-3,0),'El plantel viajó cansado y se nota en el primer tiempo.'),
    A('Pedirle al club local que ayude con el traslado','Cortesía a cambio de un favor',0.5,D(3,2,2,-20),'El club local colaboró: ahorraste y ganaste un amigo.',D(-3,-2,-1,-50),'El club local se hizo desear y terminaste pagando más de lo previsto.'),
  ] },

{ id:'pais_hi_patronal', cat:'hinchada', jugador:null, cluster:['hispano'],
  titulo:'La fiesta patronal cae en semana de partido',
  contexto:'Este año la fiesta patronal coincide con {SITUACION}. La ciudad quiere que el club participe.',
  variables:{ SITUACION:['el partido más importante de la fecha','la presentación de un refuerzo','el aniversario del club','la semana de entrenamiento clave'] },
  opciones:[
    O('Sumarte a la fiesta','Imagen cercana, plantel disperso',D(5,3,-3,-40),'Participaron de la fiesta: el barrio feliz y el técnico con cara larga.'),
    O('Mandar una delegación','Presencia sin distraer',D(2,1,0,-15),'Mandaste a una delegación: el club estuvo presente sin descuidar el trabajo.'),
    O('Ausentarte por el partido','Foco en lo deportivo',D(-3,-2,2,0),'Te ausentaste de la fiesta: el barrio lo notó pero el equipo estuvo enfocado.'),
  ] },

{ id:'pais_br_carnaval', cat:'mediatico', jugador:null, paises:['BR'],
  titulo:'El carnaval cae en la semana del partido',
  contexto:'El carnaval cae justo en la semana de un partido importante y {SITUACION}.',
  variables:{ SITUACION:['varios jugadores quieren participar de los desfiles','una escuela de samba invita al plantel','la ciudad entera está en la calle','la prensa pregunta si el equipo se va a concentrar'] },
  opciones:[
    O('Concentrar al plantel','Foco total, algún enojo',D(-1,-2,4,-20),'Concentraste al plantel: el equipo llegó enfocado, aunque con caras largas.'),
    O('Participar en un desfile del club','Fiesta e imagen, riesgo físico',D(4,5,-3,-40),'El club desfiló y se llevó un aplauso inmenso en la avenida.'),
    A('Dejar libertad al plantel','Confiar en la madurez',0.5,D(3,2,3,0),'El plantel respondió con profesionalismo y disfrutó del carnaval sin excesos.',D(-5,-4,-5,0),'Hubo excesos y el equipo llegó mal al partido.'),
  ] },

/* ===================== POR PAÍS: EUROPA ===================== */
{ id:'pais_ec_invierno', cat:'deportivo', jugador:null, cluster:['europa_cont'],
  titulo:'Nieve y niebla antes del partido',
  contexto:'Una ola de {CLIMA} complica el partido de la fecha. La liga dice que {POSTURA}.',
  variables:{ CLIMA:['nieve','niebla espesa','frío polar','hielo en las calles'],
              POSTURA:['no suspende por ahora','estudia reprogramar','deja la decisión en manos de los clubes'] },
  opciones:[
    O('Pedir la reprogramación','Seguridad, calendario apretado',D(1,0,-2,0),'La reprogramación se aprobó, aunque el calendario quedó incómodo.'),
    O('Jugar con calefacción y cuidado','Gasto para ordenar la cancha',D(2,2,2,-60),'Se jugó con la cancha preparada: ni queja ni gloria.'),
    A('Jugar igual y apostar al clima','Épica o lesiones',0.5,D(4,3,5,0),'El equipo se adaptó mejor que el rival: victoria con sabor a épica.',D(-5,-3,-4,-20),'Hubo resbalones, lesionados y un resultado que preferís olvidar.'),
  ] },

{ id:'pais_ec_ultras', cat:'hinchada', jugador:null, cluster:['europa_cont'],
  titulo:'La hinchada organizada quiere un gran tifo',
  contexto:'Los grupos de hinchas preparan un gran tifo para {OCASION} y piden {PEDIDO}.',
  variables:{ OCASION:['el próximo partido en casa','el clásico local','el aniversario del club'],
              PEDIDO:['permiso para ingresar materiales','un espacio para armarlo','plata para telas y pintura'] },
  opciones:[
    O('Apoyar el proyecto','Imagen espectacular, algún riesgo',D(5,5,1,-60),'El tifo fue un espectáculo y las cámaras lo repitieron toda la semana.'),
    O('Aprobarlo con condiciones','Con control de seguridad',D(2,2,0,-20),'Aprobaste con condiciones: el tifo salió bien, sin grandes sorpresas.'),
    O('Rechazar por seguridad','Prudencia, tensión con la tribuna',D(-4,-2,0,0),'Rechazaste el pedido: la tribuna se enojó y hubo silbidos.'),
  ] },

{ id:'pais_ec_fairplay', cat:'economico', jugador:null, cluster:['europa_cont'],
  titulo:'La liga exige ajustar las cuentas',
  contexto:'La liga advierte que el club debe {EXIGENCIA} o recibirá {SANCION}.',
  variables:{ EXIGENCIA:['reducir la masa salarial','equilibrar ingresos y gastos','presentar un plan de pagos','reforzar el capital'],
              SANCION:['una sanción deportiva','una multa','restricciones en el mercado'] },
  opciones:[
    O('Recortar gastos de inmediato','Cumplís, el plantel se resiente',D(-2,-1,-4,80),'Recortaste los gastos: la liga quedó conforme y el vestuario no tanto.',D(0,0,0,0,-3)),
    O('Presentar un plan a dos años','Ganás tiempo, la liga duda',D(1,0,0,20),'Presentaste un plan a dos años: la liga lo aceptó con reservas.'),
    A('Pedir una excepción','Puede ser una gran jugada',0.4,D(4,2,2,0),'La liga aceptó la excepción por esta vez: respiraste profundo.',D(-6,-4,-3,-90),'La liga rechazó la excepción y aplicó la sanción.'),
  ] },

{ id:'pais_ec_academia', cat:'deportivo', jugador:'joven', cluster:['europa_cont','luso'],
  titulo:'Una academia de élite quiere a {JUGADOR}',
  contexto:'La academia de un club grande propone un convenio por {JUGADOR} ({JPOS}, {JEDAD} años): {OFERTA}. El juvenil sueña con irse.',
  variables:{ OFERTA:['pago inmediato y un porcentaje futuro','solo un porcentaje futuro','un préstamo con opción de compra'] },
  opciones:[
    O('Aceptar el convenio','Plata y proyección, adiós a la promesa',D(-3,-1,-3,150),'{JUGADOR} se fue a la academia: el club cobró y la tribuna lo despidió.',VENDE),
    O('Rechazarlo y sostener al juvenil','Cantera y orgullo',D(4,2,2,-10),'Rechazaste y {JUGADOR} se quedó: los hinchas lo ovacionan.'),
    A('Pedir mejor oferta','Si funciona, redondo',0.5,D(0,2,-1,210),'La academia mejoró la oferta: negocio redondo y la promesa con buen futuro.',D(-4,-2,-2,0),'La academia se ofendió y retiró la oferta: sin juvenil y sin plata.',VENDE),
  ] },

{ id:'pais_gb_copa', cat:'deportivo', jugador:null, paises:['GB','IE','ENG','SCT','WLS','NIR'],
  titulo:'Sorteo de copa contra un club amateur',
  contexto:'La copa nacional te sortea contra un club amateur de {LUGAR}. {PRESION}.',
  variables:{ LUGAR:['un pueblo de la costa','una localidad minera','un barrio obrero','un pueblo con una iglesia en cada esquina'],
              PRESION:['La prensa espera una goleada','El rival juega como si fuera una final','La hinchada local llenó las calles'] },
  opciones:[
    O('Jugar con el equipo titular','Respeto, desgaste',D(1,1,3,0),'Saliste con todo y ganaste sin sufrir demasiado.'),
    O('Rotar y dar descanso','Se arriesga la eliminación',D(-1,-1,-2,10),'Rotaste y el partido se complicó más de lo previsto.'),
    A('Mandar a los juveniles','Imagen de cantera, riesgo de papelón',0.45,D(5,4,2,10),'Los juveniles se lucieron y la prensa los destacó: golpe de efecto.',D(-6,-5,-3,0),'Los juveniles se asustaron: papelón y críticas feroces.'),
  ] },

{ id:'pais_ee_receso', cat:'deportivo', jugador:null, cluster:['europa_este'],
  titulo:'Receso invernal larguísimo',
  contexto:'La liga se frena por el frío durante {DURACION}. El cuerpo técnico propone {PLAN}.',
  variables:{ DURACION:['tres meses','casi cuatro meses','un invierno entero'],
              PLAN:['una gira a un país cálido','entrenar en un gimnasio cerrado','pasar a un torneo de pretemporada local'] },
  opciones:[
    O('Hacer la gira al calor','Gasto alto, preparación ideal',D(2,2,4,-140),'La gira al calor mantuvo el ritmo del equipo.'),
    O('Entrenar en el gimnasio cerrado','Ahorro, ritmo bajo',D(0,0,-3,-20),'Entrenaron bajo techo: el equipo volvió algo desentrenado.'),
    A('Armar un torneo local entre clubes','Barato y entretenido, si sale',0.5,D(3,3,3,-30),'El torneo local fue un éxito y mantuvo al equipo en ritmo.',D(-3,-2,-1,-60),'El torneo se organizó mal y terminó en un desastre logístico.'),
  ] },

{ id:'pais_ee_estadio', cat:'institucional', jugador:null, cluster:['europa_este'],
  titulo:'El estadio municipal se comparte',
  contexto:'La municipalidad quiere que {OTRO} comparta el estadio del club. Dice que es para {RAZON}.',
  variables:{ OTRO:['un equipo de rugby','un club de la segunda categoría','una federación de atletismo'],
              RAZON:['aprovechar mejor la inversión pública','abaratar el mantenimiento','sumar actividad al barrio'] },
  opciones:[
    O('Aceptar el uso compartido','Ingresos, menos exclusividad',D(-1,0,-1,90),'Aceptaste compartir el estadio: entró plata, pero el césped se resiente.'),
    O('Negociar horarios exclusivos','Equilibrio, más burocracia',D(1,0,1,30),'Negociaste horarios y el municipio quedó conforme.'),
    O('Rechazar el pedido','Orgullo, pelea política',D(3,1,0,-30),'Rechazaste: el club se siente dueño de su casa, pero el municipio frunce el ceño.'),
  ] },

{ id:'pais_ee_mecenas', cat:'economico', jugador:null, cluster:['europa_este'],
  titulo:'Un mecenas local ofrece financiar el club',
  contexto:'Un empresario de la región ofrece {OFERTA} a cambio de {CONDICION}.',
  variables:{ OFERTA:['pagar los sueldos de seis meses','construir una nueva tribuna','financiar las inferiores'],
              CONDICION:['un lugar en la comisión directiva','el nombre en el estadio','decidir en las contrataciones'] },
  opciones:[
    O('Aceptar sin condiciones','Plata inmediata, influencia ajena',D(-4,-2,2,200),'Aceptaste la oferta: el club respira, pero el mecenas ya llama al técnico.'),
    O('Aceptar con límites escritos','Más lento, más seguro',D(2,1,1,100),'Pusiste límites por escrito: el mecenas aceptó con mala cara.'),
    O('Rechazar para mantener la independencia','Orgullo, caja vacía',D(5,2,-1,-20),'Rechazaste: la hinchada celebró la independencia, la tesorería no.'),
  ] },

/* ===================== POR PAÍS: MUNDO ÁRABE / NORTE DE ÁFRICA ===================== */
{ id:'pais_me_ayuno', cat:'deportivo', jugador:null, cluster:['mena'],
  titulo:'El mes de ayuno cambia los horarios',
  contexto:'Durante el mes de ayuno, {SITUACION}. Hay que reorganizar entrenamientos y partidos.',
  variables:{ SITUACION:['muchos jugadores entrenan en ayuno','los partidos se juegan de noche tarde','el plantel pide ajustar las cargas','la liga cambia el calendario'] },
  opciones:[
    O('Entrenar de noche','Respetás la tradición, cambia la rutina',D(3,2,0,-20),'Pasaste los entrenamientos a la noche: el plantel lo valoró mucho.',D(3,2,0,-20,3)),
    O('Reducir la carga física','Cuidado del plantel, menos ritmo',D(1,0,-2,0),'Redujiste la carga: el plantel llegó entero pero algo flojo.'),
    O('Mantener el plan habitual','Eficiencia, desgaste',D(-2,0,2,0),'Mantuviste el plan habitual: hubo quejas y algún bajón de rendimiento.',D(-2,0,2,0,-3)),
  ] },

{ id:'pais_me_calor', cat:'deportivo', jugador:null, cluster:['mena'],
  titulo:'Calor extremo en el partido de la tarde',
  contexto:'La previsión marca {TEMP} para el partido de la tarde. El árbitro dice que {POSTURA}.',
  variables:{ TEMP:['más de 42 grados','una sensación térmica insoportable','una ola de calor de varios días'],
              POSTURA:['habrá pausas de hidratación','se podría reprogramar','la decisión es de los clubes'] },
  opciones:[
    O('Pedir pasar el partido a la noche','Seguridad, reclamo de la liga',D(1,0,2,-30),'Lograste pasar el partido a la noche: el equipo rindió mucho mejor.'),
    O('Jugar con hidratación y rotaciones','Gasto, riesgo moderado',D(0,0,1,-40),'Se jugó con pausas de hidratación y se resolvió sin problemas.'),
    A('Jugar sin cambios','Épica o desastre físico',0.4,D(4,3,4,0),'El equipo aguantó mejor el calor: victoria heroica.',D(-6,-4,-5,-30),'Hubo desmayos y un partido para el olvido.'),
  ] },

{ id:'pais_me_familias', cat:'hinchada', jugador:null, cluster:['mena'],
  titulo:'Más familias en la tribuna',
  contexto:'Los socios piden crear {ESPACIO} para ir con {QUIENES}. Hay que ajustar la seguridad.',
  variables:{ ESPACIO:['un sector familiar','un sector con juegos infantiles','una tribuna con sombra'],
              QUIENES:['los chicos','toda la familia','las abuelas'] },
  opciones:[
    O('Construirlo ya','Más público, más gasto',D(5,3,0,-110),'El sector familiar se llenó desde el primer partido.'),
    O('Reservar una parte existente','Rápido y barato',D(2,1,0,-25),'Reservaste una parte: la respuesta de las familias fue positiva.'),
    O('Postergarlo','Ahorro, frustración',D(-3,-2,0,10),'Postergaste el proyecto: las familias esperan con paciencia limitada.'),
  ] },

/* ===================== POR PAÍS: ÁFRICA SUBSAHARIANA ===================== */
{ id:'pais_af_viaje', cat:'economico', jugador:null, cluster:['africa_sub'],
  titulo:'Viajes largos entre ciudades',
  contexto:'El calendario trae un viaje de {DISTANCIA} para el próximo partido. {NOTA}.',
  variables:{ DISTANCIA:['1.500 kilómetros','más de 20 horas por ruta','un vuelo con dos escalas'],
              NOTA:['La plata no alcanza para todo','El técnico se preocupa por el cansancio','El plantel quiere viajar en avión'] },
  opciones:[
    O('Contratar un vuelo','Rápido, gasto alto',D(2,1,3,-130),'El plantel llegó fresco y el equipo lo aprovechó.'),
    O('Viajar por ruta con descansos','Ahorro, cansancio',D(0,0,-2,-20),'Viajaron por ruta: llegaron cansados pero a tiempo.'),
    A('Buscar un sponsor para el viaje','Si sale, redondo',0.5,D(3,3,3,40),'El sponsor pagó el viaje y encima salió en la prensa.',D(-3,-2,-2,-50),'El sponsor se bajó a último momento y tuviste que improvisar.'),
  ] },

{ id:'pais_af_cesped', cat:'deportivo', jugador:null, cluster:['africa_sub'],
  titulo:'La cancha está en mal estado',
  contexto:'El césped del estadio tiene {PROBLEMA}. El técnico dice que así no se puede jugar bien.',
  variables:{ PROBLEMA:['pozos y zonas peladas','demasiado barro','irregularidades graves','un riego deficiente'] },
  opciones:[
    O('Invertir en un campo nuevo','Caro pero definitivo',D(3,2,3,-150),'Renovaste el campo y el equipo juega mucho mejor.'),
    O('Arreglos parciales','Rápido y barato',D(1,0,1,-40),'Los arreglos parciales ayudaron, pero no resolvieron todo.'),
    O('Adaptar el juego a la cancha','Sin gasto, menos fútbol',D(-1,-1,-2,0),'Adaptaron el juego a la cancha: poco vistoso, pero sin gastar.'),
  ] },

{ id:'pais_af_lluvias', cat:'deportivo', jugador:null, cluster:['africa_sub'],
  titulo:'La temporada de lluvias complica todo',
  contexto:'Las lluvias {EFECTO} y el calendario no perdona.',
  variables:{ EFECTO:['inundan los caminos de acceso','dejan la cancha impracticable','retrasan a los equipos visitantes','cortan el suministro eléctrico'] },
  opciones:[
    O('Reprogramar el partido','Seguridad, calendario complicado',D(1,0,-2,0),'Reprogramaste el partido: nadie se mojó, el calendario sí se complicó.'),
    O('Habilitar un drenaje de emergencia','Gasto, juego normal',D(2,1,1,-70),'El drenaje de emergencia funcionó y el partido se jugó sin demoras.'),
    A('Jugar igual en el barro','Épica o lesiones',0.5,D(4,3,4,0),'El partido en el barro fue una batalla heroica que ganaste.',D(-5,-3,-4,0),'El partido en el barro fue un desastre.'),
  ] },

{ id:'pais_af_ojeadores', cat:'deportivo', jugador:'joven', cluster:['africa_sub'],
  titulo:'Ojeadores extranjeros siguen a {JUGADOR}',
  contexto:'Ojeadores de ligas europeas siguen a {JUGADOR} ({JPOS}, {JEDAD} años). Un representante quiere {PROPUESTA}.',
  variables:{ PROPUESTA:['una prueba inmediata en el exterior','un contrato con cláusula de salida','un viaje a Europa en vacaciones'] },
  opciones:[
    O('Aceptar la prueba','Oportunidad para él, riesgo para vos',D(-1,1,-2,40),'{JUGADOR} viajó a probarse y el club recibió una compensación.'),
    O('Pedir que espere una temporada','Estabilidad, él se frustra',D(2,0,2,0),'{JUGADOR} se quedó una temporada más y rindió en cancha.'),
    A('Cerrar un convenio con el club interesado','Negocio redondo o ruptura',0.5,D(0,3,-2,200),'El convenio se cerró y el club recibió una buena suma.',D(-4,-2,-2,0),'El convenio se cayó y {JUGADOR} quedó molesto.',VENDE),
  ] },

{ id:'pais_af_radio', cat:'mediatico', jugador:null, cluster:['africa_sub'],
  titulo:'La radio comunitaria transmite todos los partidos',
  contexto:'Una radio comunitaria de {ZONA} transmite todos los partidos del club y pide {PEDIDO}.',
  variables:{ ZONA:['la región','tu barrio','el pueblo vecino'],
              PEDIDO:['una entrevista semanal','acceso al vestuario','ayuda para el transmisor'] },
  opciones:[
    O('Darles todo el acceso','Hinchada comprometida, menos privacidad',D(4,4,0,-30),'La radio se volvió la voz del club y la gente lo agradeció.'),
    O('Darles una entrevista semanal','Equilibrio simple',D(2,2,0,0),'Armaste una entrevista semanal: contentos todos.'),
    O('Rechazar por falta de tiempo','Evitás distracción, perdés cariño',D(-3,-3,0,0),'Rechazaste: la radio siguió transmitiendo, pero sin tu simpatía.'),
  ] },

/* ===================== POR PAÍS: ASIA ===================== */
{ id:'pais_ao_datos', cat:'institucional', jugador:null, cluster:['asia_oriental'],
  titulo:'Análisis de datos y app para hinchas',
  contexto:'Una empresa tecnológica ofrece {SERVICIO}. Quiere {CONTRAPARTIDA}.',
  variables:{ SERVICIO:['un sistema de análisis de datos del plantel','una app oficial para los hinchas','cámaras y estadísticas avanzadas'],
              CONTRAPARTIDA:['acceso a los datos de los hinchas','publicidad en el estadio','exclusividad por tres años'] },
  opciones:[
    O('Aceptar el acuerdo completo','Modernidad, dependencia',D(2,3,3,-40),'El acuerdo modernizó al club y mejoró el rendimiento del cuerpo técnico.'),
    O('Pedir cambios en las condiciones','Más lento, más seguro',D(1,1,1,0),'Pediste cambios: el acuerdo salió más justo.'),
    O('Rechazar por privacidad','Prudencia, menos recursos',D(2,0,-2,0),'Rechazaste el acuerdo para cuidar los datos de los hinchas.'),
  ] },

{ id:'pais_ao_cantos', cat:'hinchada', jugador:null, cluster:['asia_oriental'],
  titulo:'La hinchada organiza coreografías',
  contexto:'Los grupos de hinchas preparan {COREO} para el próximo partido y piden {PEDIDO}.',
  variables:{ COREO:['una coreografía de mosaicos','cantos sincronizados de todo el estadio','una exhibición de banderas'],
              PEDIDO:['ensayar en el estadio','una grada completa','permiso para filmar'] },
  opciones:[
    O('Apoyarlos con todo','Gran imagen, gasto',D(5,5,1,-50),'La coreografía fue un éxito y recorrió las redes.'),
    O('Permitir los ensayos','Apoyo moderado',D(2,2,0,-10),'Los ensayos se hicieron y el resultado fue prolijo.'),
    O('Pedirles que simplifiquen','Menos riesgo, menos magia',D(-2,-1,0,0),'Pediste simplificar: la coreografía salió más modesta.'),
  ] },

{ id:'pais_as_otro_deporte', cat:'mediatico', jugador:null, cluster:['asia_sur'],
  titulo:'El público se va con otro deporte',
  contexto:'Otro deporte muy popular compite por los mismos horarios y {PROBLEMA}. Los socios quieren una respuesta.',
  variables:{ PROBLEMA:['se llevó a buena parte del público','acapara la prensa','tiene más patrocinadores','tiene más estrellas'] },
  opciones:[
    O('Cambiar el horario de los partidos','Evitás competir, ajuste logístico',D(1,1,0,-20),'Moviste los horarios: el público volvió a la tribuna.'),
    O('Lanzar una campaña de socios','Gasto, buen eco',D(3,4,0,-70),'La campaña de socios tuvo buena respuesta.'),
    O('Aceptar que se compite','Calma, resignación',D(-2,-1,0,0),'Aceptaste que hay competencia: no hubo cambios.'),
  ] },

{ id:'pais_as_monzon', cat:'deportivo', jugador:null, cluster:['asia_sur','sudeste_asiatico'],
  titulo:'El monzón pone en duda el partido',
  contexto:'Las lluvias del monzón {EFECTO}. La liga dice que {POSTURA}.',
  variables:{ EFECTO:['inundan el entorno del estadio','dejan la cancha encharcada','afectan al transporte público'],
              POSTURA:['se juega salvo emergencia','se decide el día del partido','se evalúa con los clubes'] },
  opciones:[
    O('Pedir reprogramar','Seguridad, calendario',D(1,0,-2,0),'Lograste reprogramar el partido: los hinchas llegaron cómodos.'),
    O('Invertir en un drenaje de urgencia','Gasto y continuidad',D(2,1,2,-70),'El drenaje permitió jugar con normalidad.'),
    A('Jugar igual','Épica o caos',0.5,D(4,3,3,0),'El partido bajo la lluvia fue una fiesta.',D(-5,-3,-3,-20),'El partido fue un caos con lesiones y quejas.'),
  ] },

{ id:'pais_sea_calor', cat:'deportivo', jugador:null, cluster:['sudeste_asiatico'],
  titulo:'Calor y humedad al mediodía',
  contexto:'El partido se jugará al mediodía con {CONDICION}. El cuerpo técnico propone {PLAN}.',
  variables:{ CONDICION:['calor y humedad extremas','una sensación térmica altísima','una humedad del 90%'],
              PLAN:['cambiar el sistema de juego','más rotaciones','hidratación y chalecos refrigerantes'] },
  opciones:[
    O('Pedir pasar el partido a la tarde','Mejor clima, queja de la TV',D(1,0,2,-20),'Lograste pasar el partido a la tarde: el equipo rindió mucho mejor.'),
    O('Adaptar el plan con chalecos y rotaciones','Gasto controlado',D(1,0,1,-40),'El plan de hidratación funcionó y evitó el desgaste.'),
    O('Jugar con el plan habitual','Ahorro, agotamiento',D(-2,-1,-3,0),'El equipo se agotó en el segundo tiempo.'),
  ] },

/* ===================== POR PAÍS: NORTEAMÉRICA / CARIBE ===================== */
{ id:'pais_na_distancias', cat:'economico', jugador:null, geo:['norteamerica'],
  titulo:'Los vuelos del calendario se comen el presupuesto',
  contexto:'El calendario trae {VIAJES} y la caja ya lo siente.',
  variables:{ VIAJES:['tres viajes largos en un mes','un vuelo cruzando el continente','viajes con cambios de zona horaria'] },
  opciones:[
    O('Contratar vuelos directos','Comodidad, gasto',D(2,1,3,-120),'Viajaron cómodos y el equipo rindió.'),
    O('Viajar en vuelos comerciales con escalas','Ahorro, cansancio',D(0,0,-2,-30),'Viajaron con escalas: llegaron cansados pero ahorraste.'),
    A('Pedirle a la liga una concentración de viajes','Si sale, mucho ahorro',0.5,D(3,2,2,20),'La liga aceptó agrupar los viajes: ahorro y descanso.',D(-2,-1,-1,-60),'La liga rechazó el pedido y te quedaste con los vuelos caros.'),
  ] },

{ id:'pais_na_becas', cat:'deportivo', jugador:'joven', geo:['norteamerica'],
  titulo:'Una universidad quiere a {JUGADOR}',
  contexto:'Una universidad ofrece una beca completa a {JUGADOR} ({JPOS}, {JEDAD} años) con {CONDICION}. Su familia está dividida.',
  variables:{ CONDICION:['un programa deportivo de primer nivel','estudios gratuitos','un buen cuerpo técnico'] },
  opciones:[
    O('Apoyar la beca','Formación y estudios, adiós a la promesa',D(1,2,-3,30),'{JUGADOR} aceptó la beca: el club recibió una compensación y buena prensa.',VENDE),
    O('Pedirle que firme con el club','Retenés al juvenil, perdés su educación',D(2,-1,2,-30),'{JUGADOR} se quedó en el club: rinde, aunque la familia no está del todo feliz.'),
    O('Armar un convenio de cesión','Equilibrio entre ambos mundos',D(2,2,0,-10),'El convenio de cesión permite que {JUGADOR} estudie y juegue.'),
  ] },

{ id:'pais_ca_huracan', cat:'deportivo', jugador:null, geo:['caribe'],
  titulo:'Temporada de huracanes',
  contexto:'Un huracán {AMENAZA}. El club debe decidir cómo proteger estadio y plantel.',
  variables:{ AMENAZA:['se acerca a la isla','amenaza la costa','deja alerta roja en la región'] },
  opciones:[
    O('Suspender actividades y proteger el estadio','Seguridad, calendario',D(3,1,-2,-60),'Protegiste el estadio y el plantel: sin daños graves.'),
    O('Entrenar bajo techo y esperar','Normalidad cuidada',D(1,0,0,-20),'Entrenaron bajo techo mientras pasaba el temporal.'),
    A('Jugar el partido a puertas cerradas','Riesgo, oportunidad de seguir',0.4,D(2,2,3,10),'Jugaron a puertas cerradas y la transmisión fue un éxito.',D(-5,-4,-3,-40),'El partido tuvo problemas de seguridad y daños.'),
  ] },

{ id:'pais_na_inversor', cat:'economico', jugador:null, geo:['norteamerica','caribe'],
  titulo:'Un inversor propone convertir el partido en un espectáculo',
  contexto:'Un inversor propone sumar {SHOW} al partido en casa a cambio de {COMPENSACION}.',
  variables:{ SHOW:['música en vivo y shows de entretiempo','actividades para chicos y comida','pantallas gigantes y concursos'],
              COMPENSACION:['un porcentaje de la taquilla','publicidad en el campo','la gestión del buffet'] },
  opciones:[
    O('Aceptar el proyecto','Más público, menos tradición',D(-1,4,0,130),'Los partidos se volvieron un espectáculo: se llenó el estadio.'),
    O('Probarlo en un partido','Prueba sin riesgo',D(1,2,0,30),'La prueba funcionó y dejó una grata sorpresa.'),
    O('Rechazar por tradición','Respetás a los viejos hinchas',D(4,0,0,-20),'Rechazaste el proyecto: los hinchas de siempre lo celebraron.'),
  ] },

/* ===================== POR PAÍS: ANGLO / OCEANÍA ===================== */
{ id:'pais_an_pub', cat:'hinchada', jugador:null, cluster:['anglo'],
  titulo:'El pub de los hinchas necesita arreglos',
  contexto:'El pub donde se juntan los hinchas de siempre {PROBLEMA}. Piden ayuda del club.',
  variables:{ PROBLEMA:['está por cerrar','necesita una reforma','sufrió un incendio','perdió la licencia'] },
  opciones:[
    O('Ayudarlos con plata','Gesto fuerte, gasto',D(5,3,0,-80),'Ayudaste con plata y el pub se llenó de agradecimiento.'),
    O('Ofrecer un espacio en el estadio','Idea intermedia',D(2,2,0,-20),'Les diste un espacio en el estadio: no todos quedaron felices.'),
    O('Decir que no hay presupuesto','Ahorro, enojo',D(-3,-2,0,0),'Dijiste que no hay presupuesto: los hinchas del pub se sintieron abandonados.'),
  ] },

{ id:'pais_oc_distancias', cat:'economico', jugador:null, paises:['AU','NZ','FJ','PG','WS','TO','VU','SB'],
  titulo:'Viajes interminables entre ciudades e islas',
  contexto:'El calendario trae {VIAJE} y los costos se disparan.',
  variables:{ VIAJE:['un vuelo de seis horas','un viaje en ferry y avión','una gira de varias ciudades','un viaje cruzando el mar'] },
  opciones:[
    O('Contratar vuelos charter','Comodidad, gasto fuerte',D(2,1,3,-130),'El vuelo charter dejó al plantel fresco.'),
    O('Viajar en vuelos regulares','Ahorro, cansancio',D(0,0,-2,-30),'El viaje en vuelos regulares agotó al plantel.'),
    A('Buscar un acuerdo con una aerolínea','Si sale, gran beneficio',0.5,D(3,3,2,30),'La aerolínea aceptó patrocinar los viajes: ahorro y publicidad.',D(-2,-1,-1,-50),'La aerolínea se hizo desear y no hubo acuerdo.'),
  ] },

{ id:'pais_an_navidad', cat:'deportivo', jugador:null, paises:['GB','IE','ENG','SCT','WLS','NIR','AU','NZ','CA'],
  titulo:'Calendario cargado en las fiestas',
  contexto:'Hay partidos seguidos en las fiestas de fin de año y {PROBLEMA}. El plantel pide algo de aire.',
  variables:{ PROBLEMA:['los jugadores quieren pasar tiempo con la familia','el físico no da abasto','el técnico quiere concentrar','la hinchada espera un regalo'] },
  opciones:[
    O('Dar libre el día de las fiestas','Plantel contento, ritmo cortado',D(2,0,-2,0),'El plantel pasó la fiesta en casa y volvió agradecido.',D(2,0,-2,0,4)),
    O('Concentrar al plantel','Foco, tensión',D(-1,0,3,-20),'Concentraste al plantel: el equipo rindió pero con caras largas.',D(-1,0,3,-20,-3)),
    O('Organizar una cena con familias','Gesto lindo, gasto',D(3,3,1,-50),'Armaste una cena con las familias: el vestuario salió reforzado.',D(3,3,1,-50,3)),
  ] },

/* ===================== POR PAÍS: MIXTOS POR GEOGRAFÍA ===================== */
{ id:'pais_geo_pesca', cat:'economico', jugador:null, geo:['costero'],
  titulo:'La cooperativa pesquera quiere patrocinar',
  contexto:'La cooperativa pesquera de {LUGAR} propone {OFERTA}. Es plata local con cariño regional.',
  variables:{ LUGAR:['la costa','el puerto vecino','el pueblo pesquero'],
              OFERTA:['un contrato anual por la camiseta','pagar los viajes','una donación para las inferiores'] },
  opciones:[
    O('Aceptar con orgullo','Plata local, menos brillo',D(4,2,0,80),'La cooperativa fue la cara del club: el pueblo se llenó de orgullo.'),
    O('Pedir una oferta mejor a una gran marca','Si sale bien, más plata',D(0,1,0,20),'Esperaste una oferta mejor, pero no llegó nada.'),
    A('Aceptar y pedir exclusividad','Imagen, pero con riesgo',0.5,D(5,3,0,110),'La cooperativa aceptó la exclusividad: buen negocio.',D(-2,-1,0,40),'La cooperativa se ofendió y redujo el aporte.'),
  ] },

{ id:'pais_geo_montana', cat:'deportivo', jugador:null, geo:['montanoso'],
  titulo:'Rutas de montaña y canchas en pendiente',
  contexto:'Los viajes por {RUTA} y {PROBLEMA} complican la logística del equipo.',
  variables:{ RUTA:['rutas de montaña','caminos con curvas','pasos nevados'],
              PROBLEMA:['la cancha rival está en pendiente','se espera nieve en el camino','el viaje se hace muy lento'] },
  opciones:[
    O('Viajar un día antes','Seguridad, gasto',D(1,0,3,-50),'Viajaron un día antes y el equipo llegó descansado.'),
    O('Viajar a primera hora','Ahorro, riesgo',D(0,0,-2,-10),'Viajaron a primera hora y llegaron justos de tiempo.'),
    A('Pedir cambiar la sede','Complicado, si sale mejora todo',0.4,D(3,2,3,0),'La liga aceptó cambiar la sede y fue un alivio.',D(-3,-2,-2,0),'La liga lo rechazó y quedaste en mal pie con el rival.'),
  ] },

{ id:'pais_geo_isla', cat:'deportivo', jugador:null, geo:['insular'],
  titulo:'Vuelos cancelados entre islas',
  contexto:'El viaje a la isla vecina se complica porque {PROBLEMA}.',
  variables:{ PROBLEMA:['se cancelaron los vuelos por el viento','el ferry está en reparación','hay una huelga de transporte','la tormenta cerró el aeropuerto'] },
  opciones:[
    O('Contratar un barco privado','Caro pero llegás',D(2,1,2,-100),'Llegaron en barco privado: caro, pero a tiempo.'),
    O('Pedir la postergación del partido','Prudencia, calendario complicado',D(0,-1,-1,0),'La liga aprobó la postergación.'),
    A('Esperar el próximo vuelo','Si llega, ahorrás',0.5,D(2,0,1,10),'El vuelo salió a tiempo y todo se resolvió.',D(-4,-3,-3,-30),'El vuelo no salió y perdieron el partido por inasistencia.'),
  ] },

{ id:'pais_geo_arena', cat:'deportivo', jugador:null, geo:['desertico'],
  titulo:'Tormenta de arena en el estadio',
  contexto:'Una tormenta de arena {EFECTO}. Hay partido en pocas horas.',
  variables:{ EFECTO:['cubre la cancha y las tribunas','pone en duda la visibilidad','deja sin energía al estadio','afecta el viaje del rival'] },
  opciones:[
    O('Limpiar la cancha y jugar','Gasto, normalidad',D(2,1,1,-60),'La cancha quedó lista y el partido se jugó con normalidad.'),
    O('Pedir postergar','Seguridad, calendario',D(0,0,-2,0),'Se postergó el partido por seguridad.'),
    A('Jugar en las condiciones actuales','Épica o desastre',0.4,D(4,3,4,0),'El equipo aprovechó las condiciones y ganó con épica.',D(-5,-3,-4,0),'La visibilidad fue un desastre y el partido fue un papelón.'),
  ] },

{ id:'pais_geo_artico', cat:'deportivo', jugador:null, geo:['artico'],
  titulo:'Noche polar y cancha cubierta',
  contexto:'Con {SITUACION}, el equipo debe entrenar en condiciones difíciles.',
  variables:{ SITUACION:['la noche polar casi permanente','temperaturas muy bajas','un domo cubierto y un horario complicado','un ritmo de luz muy distinto'] },
  opciones:[
    O('Alquilar un domo cubierto','Caro, sin sorpresas',D(1,1,3,-100),'Entrenaron en el domo cubierto y el rendimiento mejoró.'),
    O('Entrenar al aire libre','Ahorro, riesgo',D(-1,0,-2,0),'Entrenar al aire libre dejó cansancio y alguna lesión.'),
    O('Ajustar horarios al máximo de luz','Solución simple',D(1,0,1,-10),'Ajustaron horarios y el plantel respondió bien.',D(1,0,1,-10,2)),
  ] },

);

PLANTILLAS_EVENTOS.push(

/* ===================== PERSONAJES RECURRENTES: PERIODISTA ===================== */
{ id:'per_pe_entrevista', cat:'mediatico', jugador:null,
  titulo:'{PERIODISTA} pide una entrevista exclusiva',
  contexto:'{PERIODISTA} quiere una entrevista {FORMATO}. Es un periodista que conoce bien a {CLUB}, pero no siempre es amable.',
  variables:{ FORMATO:['de una hora en su programa','en el campo de entrenamiento','a solas en tu oficina','por escrito y sin preguntas pactadas'] },
  opciones:[
    O('Aceptar la entrevista','Buena prensa, riesgo de frases mal tomadas',D(2,5,0,0),'La entrevista con {PERIODISTA} salió fluida y mejoró tu imagen.'),
    A('Aceptar con preguntas pactadas','A {PERIODISTA} no le va a gustar',0.5,D(3,3,0,0),'{PERIODISTA} aceptó las condiciones y la entrevista salió ordenada.',D(-2,-4,0,0),'{PERIODISTA} se ofendió y lo contó en su programa.'),
    O('Declinar amablemente','Evitás riesgos, perdés visibilidad',D(0,-3,0,0),'Declinaste la entrevista: {PERIODISTA} hizo un comentario irónico.'),
  ] },

{ id:'per_pe_filtracion', cat:'mediatico', jugador:null,
  titulo:'{PERIODISTA} publica una filtración',
  contexto:'{PERIODISTA} publicó que {TEMA} y la noticia ya recorre los medios. En la sede hay nerviosismo.',
  variables:{ TEMA:['el club negocia un refuerzo','hay tensión con el técnico','se vendería a un jugador clave','la caja está más ajustada de lo que se dice'] },
  opciones:[
    O('Desmentir con firmeza','Control del relato, riesgo de mentir',D(1,-2,0,0),'Desmentiste la noticia: {PERIODISTA} insistió, pero el tema se enfrió.'),
    O('Confirmar parcialmente','Transparencia con cuidado',D(2,2,0,0),'Confirmaste una parte y {PERIODISTA} lo reconoció en su programa.'),
    O('Investigar al filtrador','Mano dura, clima interno',D(-1,-1,0,-10),'Investigaron la fuga: nadie confesó y el clima interno se enrareció.',D(-1,-1,0,-10,-3)),
  ] },

{ id:'per_pe_programa', cat:'mediatico', jugador:null,
  titulo:'{PERIODISTA} te invita a su programa',
  contexto:'{PERIODISTA} te invita a su programa {CONDICION}. Es una oportunidad de hablar, pero también de equivocarse.',
  variables:{ CONDICION:['en vivo y con público','con otros dirigentes de la zona','con hinchas que llaman por teléfono','con un invitado crítico de tu gestión'] },
  opciones:[
    O('Ir y hablar con claridad','Visibilidad, riesgo calculado',D(3,5,0,0),'Fuiste al programa y respondiste con claridad: gran impacto.'),
    A('Ir y contraatacar','A todo o nada',0.45,D(4,5,0,0),'Tu contraataque prendió: se habló de vos toda la semana.',D(-5,-5,0,0),'Tu contraataque salió mal y {PERIODISTA} lo aprovechó.'),
    O('No ir y mandar a un vocero','Sin riesgos, sin brillo',D(-1,-1,0,0),'Mandaste a un vocero: sin brillo, sin conflictos.'),
  ] },

{ id:'per_pe_critica', cat:'mediatico', jugador:null,
  titulo:'{PERIODISTA} critica tu gestión',
  contexto:'{PERIODISTA} dedicó un editorial a criticar {OBJETO}. La hinchada lo comenta y los socios te miran.',
  variables:{ OBJETO:['tus últimas decisiones','el manejo de la caja','las contrataciones','la política deportiva'] },
  opciones:[
    O('Responder públicamente','Defendés tu posición, abrís un frente',D(2,-3,0,0),'Respondiste a {PERIODISTA} con datos: la discusión se calentó.'),
    O('Invitarlo al club a ver todo','Transparencia, algo de gasto',D(3,3,0,-20),'{PERIODISTA} recorrió el club y matizó sus críticas.'),
    O('Ignorarlo','Evitás la pelea, parecés ausente',D(-2,-2,0,0),'Ignoraste el editorial: otros medios lo tomaron como silencio culpable.'),
  ] },

/* ===================== PERSONAJES RECURRENTES: HINCHA ===================== */
{ id:'per_hi_reunion', cat:'hinchada', jugador:null,
  titulo:'{HINCHA} pide una reunión',
  contexto:'{HINCHA}, referente de la hinchada, pide reunirse para hablar de {TEMA}. Tiene peso en la tribuna.',
  variables:{ TEMA:['los precios de las entradas','los jugadores que no rinden','el trato a los socios','la política de refuerzos'] },
  opciones:[
    O('Recibirlo y escucharlo','Cercanía, expectativas',D(4,1,0,0),'Recibiste a {HINCHA} y salió conforme de la reunión.'),
    O('Recibirlo con la comisión','Formal, con testigos',D(2,1,0,0),'La reunión con la comisión fue prolija, aunque fría.'),
    O('No recibirlo','Distancia, tensión',D(-4,-2,0,0),'No recibiste a {HINCHA}: la tribuna lo tomó como un desaire.'),
  ] },

{ id:'per_hi_trapo', cat:'hinchada', jugador:null,
  titulo:'{HINCHA} quiere un trapo gigante',
  contexto:'{HINCHA} y su grupo quieren estrenar un trapo gigante con {MENSAJE}. Piden permiso y espacio en el estadio.',
  variables:{ MENSAJE:['un mensaje de aliento al plantel','el nombre del barrio','un homenaje a un ídolo','una consigna contra la dirigencia'] },
  opciones:[
    O('Dar el permiso con gusto','La tribuna agradece, riesgo de mensajes',D(4,2,1,-10),'El trapo se desplegó y la tribuna vibró.'),
    O('Pedir ver el diseño antes','Control, algo de enojo',D(1,0,0,0),'Revisaste el diseño: {HINCHA} aceptó con cara de fastidio.'),
    O('Negar el permiso','Control total, enemistad',D(-3,-1,0,0),'Negaste el permiso: {HINCHA} se fue con bronca.'),
  ] },

{ id:'per_hi_caravana', cat:'hinchada', jugador:null,
  titulo:'{HINCHA} organiza una caravana',
  contexto:'{HINCHA} está organizando una caravana de hinchas para {DESTINO}. Pide {AYUDA} del club.',
  variables:{ DESTINO:['el partido de visitante','el aeropuerto a despedir al plantel','la sede del club','el partido de copa'],
              AYUDA:['micros','plata para banderas','permiso para salir con el plantel','una escolta'] },
  opciones:[
    O('Colaborar con todo','Gran imagen, gasto alto',D(5,3,1,-70),'La caravana fue una fiesta y {HINCHA} te lo agradeció públicamente.'),
    O('Apoyar sin plata','Gesto moral',D(2,1,0,0),'Apoyaste la caravana con palabras: la hinchada lo valoró a medias.'),
    O('Desaconsejarla por seguridad','Prudencia, malestar',D(-2,0,0,0),'Desaconsejaste la caravana: la hinchada se molestó.'),
  ] },

{ id:'per_hi_critica', cat:'hinchada', jugador:null,
  titulo:'{HINCHA} lidera un cántico en tu contra',
  contexto:'Durante el partido, {HINCHA} encabezó un cántico contra la dirigencia por {MOTIVO}. Se escuchó en toda la cancha.',
  variables:{ MOTIVO:['los últimos resultados','el precio de los abonos','la venta de un jugador','la falta de refuerzos'] },
  opciones:[
    O('Dar la cara en la próxima conferencia','Valentía, exposición',D(3,2,0,0),'Diste la cara y aclaraste tu postura: parte de la tribuna lo valoró.'),
    O('Hablar con {HINCHA} en privado','Diálogo discreto',D(2,0,0,0),'Hablaste en privado con {HINCHA}: la tensión bajó.'),
    O('Ignorar el cántico','Evitás confrontar, parecés ausente',D(-3,-1,0,0),'Ignoraste el cántico: la crítica se amplificó.'),
  ] },

/* ===================== PERSONAJES RECURRENTES: EMPRESARIO ===================== */
{ id:'per_em_prestamo', cat:'economico', jugador:null,
  titulo:'{EMPRESARIO} ofrece un préstamo',
  contexto:'{EMPRESARIO} ofrece prestarle plata al club para {DESTINO}. Dice que es un gesto de cariño, pero conviene leer la letra chica.',
  variables:{ DESTINO:['pagar sueldos atrasados','refaccionar el estadio','ficharle un refuerzo al técnico','cubrir un bache de caja'] },
  opciones:[
    O('Aceptar el préstamo','Plata ya, deuda después',D(-1,-1,1,150),'Aceptaste el préstamo de {EMPRESARIO}: la caja respira, la deuda queda.'),
    O('Pedir un plazo más largo','Menos plata, menos presión',D(1,0,0,70),'{EMPRESARIO} aceptó un plazo más largo con un monto menor.'),
    O('Rechazar para no depender','Independencia, aprietos',D(3,1,-1,-20),'Rechazaste el préstamo: la hinchada celebró tu independencia.'),
  ] },

{ id:'per_em_representado', cat:'deportivo', jugador:'fichaje',
  titulo:'{EMPRESARIO} te ofrece a un representado',
  contexto:'{EMPRESARIO} te propone a {JUGADOR}, {JPOS} de {JEDAD} años y nivel {JRATING}. Dice que es una oportunidad, pero el precio es alto.',
  opciones:[
    O('Fichar a {JUGADOR}','Refuerzo, caja golpeada',D(3,3,5,-130),'Fichaste a {JUGADOR}: el técnico está feliz y {EMPRESARIO} más.',FICHA),
    O('Pedir una opción de compra','Menos riesgo, menos impacto',D(1,1,1,-30),'Pediste una opción de compra: {EMPRESARIO} aceptó sin entusiasmo.'),
    O('Rechazar la oferta','Cuidás la caja, enojás al empresario',D(-1,-2,-2,0),'Rechazaste la oferta: {EMPRESARIO} se fue ofendido.'),
  ] },

{ id:'per_em_terreno', cat:'institucional', jugador:null,
  titulo:'{EMPRESARIO} quiere desarrollar un predio del club',
  contexto:'{EMPRESARIO} quiere comprar o desarrollar un predio del club para {PROYECTO}. La asamblea está dividida.',
  variables:{ PROYECTO:['un centro comercial','un barrio cerrado','un gimnasio y un spa','un estacionamiento'] },
  opciones:[
    O('Vender el predio','Entra plata, se pierde patrimonio',D(-6,-3,0,220),'Vendiste el predio a {EMPRESARIO}: caja llena y socios enojados.'),
    O('Alquilarlo a largo plazo','Ingresos fijos, menos plata inmediata',D(1,0,0,80),'Alquilaste el predio con un contrato largo: gran equilibrio.'),
    O('Rechazar la propuesta','Cuidás el patrimonio',D(4,1,0,0),'Rechazaste: la asamblea te aplaudió, {EMPRESARIO} no.'),
  ] },

{ id:'per_em_viaje', cat:'institucional', jugador:null,
  titulo:'{EMPRESARIO} te invita a un viaje de negocios',
  contexto:'{EMPRESARIO} te invita a viajar {DESTINO} para presentarte a posibles sponsors. Todo pago, pero la prensa podría opinar.',
  variables:{ DESTINO:['a una feria deportiva en el exterior','a una cena con inversores','a una gira de tres días','a una cumbre de dirigentes'] },
  opciones:[
    O('Aceptar el viaje','Contactos, mala prensa posible',D(-1,-3,0,60),'Viajaste con {EMPRESARIO}: volviste con contactos y críticas.'),
    A('Aceptar pero hacerlo público','Si convence, ganás confianza',0.5,D(3,3,0,50),'Hiciste público el viaje y los socios lo valoraron.',D(-4,-4,0,0),'La prensa criticó el viaje igual, y {EMPRESARIO} no ayudó.'),
    O('Declinar la invitación','Cuidás la imagen, perdés oportunidades',D(2,1,0,0),'Declinaste: {EMPRESARIO} se quedó con las ganas.'),
  ] },

/* ===================== CADENA 1: NAMING DEL ESTADIO (3 pasos) ===================== */
{ id:'cad_naming_oferta', cat:'economico', jugador:null,
  titulo:'Una empresa quiere el nombre del estadio',
  contexto:'{EMPRESA} ofrece {PLATA} por el naming del estadio durante {PLAZO}. Hay tradición de por medio.',
  variables:{ EMPRESA:['Una cadena de supermercados','Una aseguradora','Una marca de bebidas'],
              PLATA:['una suma importante','una cifra tentadora'],
              PLAZO:['cinco años','diez años'] },
  opciones:[
    O('Aceptar el naming','Plata fuerte, tradición golpeada',D(-3,2,0,170),'Aceptaste el naming: el estadio tiene nuevo nombre y la tesorería sonríe.','c2_naming'),
    O('Rechazarlo por tradición','Hinchada contenta, caja sin cambios',D(5,1,0,0),'Rechazaste el naming: la tradición queda a salvo.'),
    O('Proponer naming solo para una tribuna','Intermedio, plata menor',D(1,1,0,60),'Propusiste naming parcial: la empresa aceptó a medias.'),
  ] },

{ id:'cad_naming_hinchada', cat:'hinchada', jugador:null, requiere:'c2_naming',
  titulo:'La hinchada rechaza el nuevo nombre del estadio',
  contexto:'Desde el naming del estadio, {PROTESTA}. Los hinchas siguen usando el nombre de siempre.',
  variables:{ PROTESTA:['hay carteles tapados con pintura','hay cánticos en contra','la tribuna se niega a nombrarlo','hay una campaña en las redes'] },
  opciones:[
    O('Dialogar y buscar un nombre mixto','Cuesta tiempo, calma al barrio',D(3,1,0,-30),'Armaste un nombre mixto: la hinchada lo aceptó.'),
    O('Sostener el acuerdo y ofrecer concesiones','Mantenés la plata, la tensión sigue',D(-1,0,0,40),'Sostuviste el acuerdo con concesiones: el clima sigue tenso.','c2_naming_b'),
    O('Pedir disculpas y rescindir','Cuesta caro, vuelve la paz',D(5,2,0,-140),'Rescindiste el acuerdo: costó plata, pero la hinchada celebró.'),
  ] },

{ id:'cad_naming_reclamo', cat:'economico', jugador:null, requiere:'c2_naming_b',
  titulo:'El sponsor del naming reclama más presencia',
  contexto:'La empresa del naming dice que {RECLAMO} y amenaza con reducir el pago si no hay cambios.',
  variables:{ RECLAMO:['su marca no se ve en la transmisión','la hinchada la insulta en los partidos','no se cumplió la cláusula de visibilidad','hay demasiados carteles tapados'] },
  opciones:[
    O('Cumplir las cláusulas','Dinero asegurado, desgaste con la hinchada',D(-3,0,0,60),'Cumpliste con las cláusulas: la empresa se calmó y la hinchada gruñó.'),
    A('Renegociar el contrato','Puede salir bien o mal',0.5,D(2,1,0,30),'La empresa aceptó renegociar: acuerdo más equilibrado.',D(-4,-2,0,-80),'La empresa se fue y pidió la devolución de parte del dinero.'),
    O('Romper el contrato','Corte limpio, pérdida de plata',D(4,1,0,-100),'Rompiste el contrato: la hinchada festejó y la caja pagó.'),
  ] },

/* ===================== CADENA 2: CONVENIO CON ACADEMIA (2 pasos) ===================== */
{ id:'cad_academia_propuesta', cat:'deportivo', jugador:null,
  titulo:'Una academia propone un convenio de cantera',
  contexto:'Una academia de {PAIS_ACAD} propone un convenio: {TRATO}. Hay talento, pero también letra chica.',
  variables:{ PAIS_ACAD:['una liga vecina','un club grande','una región conocida por su cantera'],
              TRATO:['recibir juveniles a prueba todo el año','enviar a tus promesas a formarse','compartir ojeadores y entrenadores'] },
  opciones:[
    O('Firmar el convenio','Proyección, algo de dependencia',D(2,1,1,-60),'Firmaste el convenio con la academia: se abre una puerta interesante.','c2_academia'),
    O('Pedir cambios en las condiciones','Más seguro, más lento',D(1,0,0,-20),'Pediste cambios: la academia estudia tu propuesta.'),
    O('Rechazar por independencia','Cantera propia, sin ayudas',D(2,0,-1,0),'Rechazaste el convenio: la cantera sigue su camino.'),
  ] },

{ id:'cad_academia_frutos', cat:'deportivo', jugador:null, requiere:'c2_academia',
  titulo:'Primeros resultados del convenio de cantera',
  contexto:'Pasaron unos meses del convenio con la academia y {NOVEDAD}. Es hora de evaluar.',
  variables:{ NOVEDAD:['llegaron tres juveniles interesantes','hay un técnico que critica el método','se descubrió una joya','los resultados son dispares'] },
  opciones:[
    A('Profundizar el convenio','Si sale bien, gran negocio',0.55,D(5,3,4,40),'El convenio dio frutos: llegaron juveniles con nivel.',D(-4,-2,-2,-60),'El convenio no dio los frutos esperados y costó plata.'),
    O('Mantener todo como está','Sin cambios',D(1,0,1,-20),'Mantuviste el convenio sin cambios: nadie se queja.'),
    O('Terminar el convenio','Cortás con una pérdida',D(-1,-1,0,10),'Terminaste el convenio: algunos lo entendieron, otros no.'),
  ] },

/* ===================== CADENA 3: OBRA DEL ESTADIO (3 pasos) ===================== */
{ id:'cad_obra_proyecto', cat:'institucional', jugador:null,
  titulo:'Proyecto de remodelación del estadio',
  contexto:'Un arquitecto propone remodelar {SECTOR} para ganar {MEJORA}. El presupuesto es ambicioso.',
  variables:{ SECTOR:['la tribuna popular','la platea','los vestuarios y el túnel','el acceso y los baños'],
              MEJORA:['capacidad','comodidad','seguridad'] },
  opciones:[
    O('Aprobar la obra completa','Gran inversión, mucho riesgo',D(3,2,0,-170),'Aprobaste la obra: los socios están ilusionados.','c2_obra'),
    O('Aprobar una obra chica','Menos plata, menos impacto',D(1,0,0,-60),'Aprobaste una obra chica: algo se nota.'),
    O('Postergar el proyecto','Ahorro, frustración',D(-3,-1,0,10),'Postergaste el proyecto: los socios siguen esperando.'),
  ] },

{ id:'cad_obra_demora', cat:'institucional', jugador:null, requiere:'c2_obra',
  titulo:'La obra del estadio se demora',
  contexto:'La obra del estadio {PROBLEMA}. Los socios miran el reloj y la constructora pide más plata.',
  variables:{ PROBLEMA:['lleva meses de retraso','tuvo un accidente menor','se quedó sin materiales','tiene problemas con la habilitación'] },
  opciones:[
    O('Pagar un adicional','Terminar a tiempo, plata extra',D(2,1,0,-90),'Pagaste un adicional: la obra retomó el ritmo.','c2_obra_b'),
    O('Cambiar de constructora','Riesgo, tiempo perdido',D(-2,-2,0,-60),'Cambiaste de constructora: el proyecto se demoró más.','c2_obra_b'),
    O('Parar la obra y esperar','Ahorro, estadio a medias',D(-4,-3,0,20),'Paraste la obra: el estadio quedó a medias.'),
  ] },

{ id:'cad_obra_inauguracion', cat:'hinchada', jugador:null, requiere:'c2_obra_b',
  titulo:'Inauguración de la obra',
  contexto:'La obra del estadio por fin se termina y {EVENTO}. Hay que decidir cómo inaugurarla.',
  variables:{ EVENTO:['hay mucha expectativa','algunos detalles quedaron sin terminar','la prensa quiere ver el resultado','los socios están ansiosos'] },
  opciones:[
    O('Inaugurar con una gran fiesta','Imagen potente, gasto',D(5,5,1,-110),'La inauguración fue un éxito y todos hablaron de la obra.'),
    O('Una inauguración sobria','Austero y prolijo',D(3,2,0,-30),'Inauguraste con sobriedad: todo en orden.'),
    A('Inaugurar con un partido amistoso','Si gana, brillo; si pierde, gasto',0.5,D(5,4,4,-20),'El amistoso fue un golazo: ganó el equipo y se lució la obra.',D(-2,-2,-4,-20),'El amistoso salió mal y le quitó brillo a la inauguración.'),
  ] },

/* ===================== CADENA 4: ULTIMÁTUM AL CAPITÁN (2 pasos) ===================== */
{ id:'cad_ultimatum', cat:'deportivo', jugador:'capitan',
  titulo:'El técnico le da un ultimátum al capitán',
  contexto:'El técnico le dio un ultimátum a {JUGADOR}, capitán del equipo: {MOTIVO}. El vestuario espera tu postura.',
  variables:{ MOTIVO:['por llegar tarde a los entrenamientos','por declaraciones a la prensa','por un cruce con un compañero','por no seguir las indicaciones'] },
  opciones:[
    O('Respaldar al técnico','Autoridad, tensión con el capitán',D(1,0,1,0),'Respaldaste al técnico: {JUGADOR} se mostró molesto.','c2_ultimatum'),
    O('Respaldar al capitán','Cuidás al líder, debilitás al técnico',D(-1,0,0,0),'Respaldaste al capitán: el técnico lo tomó mal.'),
    O('Mediar entre los dos','Tiempo y diálogo',D(2,0,0,0),'Mediaste: los dos se dieron la mano, al menos por ahora.'),
  ] },

{ id:'cad_ultimatum_respuesta', cat:'deportivo', jugador:'capitan', requiere:'c2_ultimatum',
  titulo:'El capitán responde al ultimátum',
  contexto:'{JUGADOR} respondió al ultimátum: {RESPUESTA}. El plantel está dividido.',
  variables:{ RESPUESTA:['pidió hablar con vos en privado','dijo que no cree en el técnico','ofreció dar un paso al costado','pidió que la decisión sea del grupo'] },
  opciones:[
    O('Sostener al técnico','Autoridad, pérdida de un líder',D(-2,-1,-2,0),'Sostuviste al técnico: {JUGADOR} bajó su rendimiento.',D(-2,-1,-2,0,-4)),
    O('Cambiar al técnico','Cambio de aire, riesgo',D(1,-1,2,-60),'Cambiaste al técnico: el vestuario respiró.',D(1,-1,2,-60,3)),
    O('Sacarle la cinta al capitán','Dura decisión, adiós al líder',D(-1,1,0,0),'Le sacaste la cinta a {JUGADOR}: el plantel lo tomó con respeto.',D(-1,1,0,0,-2)),
  ] },

/* ===================== CADENA 5: EXCLUSIVA PARA UN MEDIO (2 pasos) ===================== */
{ id:'cad_exclusiva_oferta', cat:'mediatico', jugador:null,
  titulo:'{PERIODISTA} pide la exclusiva de un anuncio',
  contexto:'{PERIODISTA} pide la exclusiva de {ANUNCIO}. Si se la das, quedan otros medios afuera.',
  variables:{ ANUNCIO:['el próximo refuerzo','tu decisión sobre el técnico','el nuevo sponsor','el proyecto de estadio'] },
  opciones:[
    O('Darle la exclusiva','Aliado fuerte, otros medios molestos',D(1,4,0,0),'{PERIODISTA} tuvo la exclusiva y lo agradeció en cámara.','c2_exclusiva'),
    O('Dar el anuncio a todos por igual','Sin favoritos, sin ventajas',D(1,1,0,0),'Anunciaste por igual a todos los medios: nadie se quejó.'),
    O('Negar el pedido','Evitás conflicto, enojás a {PERIODISTA}',D(0,-3,0,0),'Negaste la exclusiva: {PERIODISTA} tomó nota.'),
  ] },

{ id:'cad_exclusiva_celos', cat:'mediatico', jugador:null, requiere:'c2_exclusiva',
  titulo:'Los otros medios se ofenden por la exclusiva',
  contexto:'Los otros medios se ofendieron por la exclusiva que le diste a {PERIODISTA} y {REACCION}.',
  variables:{ REACCION:['dejaron de cubrir al club','publican notas críticas','piden igualdad de trato','boicotean la conferencia'] },
  opciones:[
    O('Pedir disculpas públicamente','Desgaste, paz',D(1,2,0,0),'Pediste disculpas a todos los medios: la tensión bajó.'),
    O('Defender tu decisión','Firmeza, conflicto',D(-1,-4,0,0),'Defendiste tu decisión: los medios se pusieron más duros.'),
    O('Dar una conferencia abierta','Transparencia, esfuerzo',D(2,3,0,-10),'Diste una conferencia abierta: los medios quedaron más calmos.'),
  ] },

/* ===================== CADENA 6: PACTO CON LA BARRA (3 pasos) ===================== */
{ id:'cad_barra_pacto', cat:'hinchada', jugador:null,
  titulo:'Un grupo de la barra propone un pacto',
  contexto:'{HINCHA} propone un pacto: {TRATO}. Parece razonable, pero abre una puerta delicada.',
  variables:{ TRATO:['paz en la tribuna a cambio de entradas','apoyo a la dirigencia a cambio de un espacio','menos incidentes a cambio de plata para viajes'] },
  opciones:[
    O('Aceptar el pacto','Paz inmediata, deuda moral',D(2,-1,2,-40),'Aceptaste el pacto con {HINCHA}: la tribuna se calmó.','c2_barra'),
    O('Rechazarlo con firmeza','Autoridad, tensión',D(-1,1,0,0),'Rechazaste el pacto: {HINCHA} quedó descontento.'),
    O('Hablar con toda la hinchada','Complicado, más justo',D(2,1,0,-10),'Hablaste con toda la hinchada: el clima mejoró.'),
  ] },

{ id:'cad_barra_pide_mas', cat:'hinchada', jugador:null, requiere:'c2_barra',
  titulo:'{HINCHA} pide más',
  contexto:'Desde el pacto, {HINCHA} pide más: {PEDIDO}. Dice que la tribuna no va a esperar.',
  variables:{ PEDIDO:['más entradas','un lugar fijo en la tribuna','participar en decisiones del club','plata extra para viajes'] },
  opciones:[
    O('Ceder a lo que pide','Paz, mayor dependencia',D(-2,-1,1,-80),'Cediste: {HINCHA} quedó conforme, pero el club se endeudó con la barra.','c2_barra_b'),
    O('Poner límites claros','Firmeza, riesgo',D(1,0,-1,0),'Pusiste límites claros: {HINCHA} aceptó a regañadientes.'),
    O('Romper el pacto','Cortás, enfrentás conflicto',D(2,2,-1,0),'Rompiste el pacto: la tensión volvió a subir.'),
  ] },

{ id:'cad_barra_incidentes', cat:'hinchada', jugador:null, requiere:'c2_barra_b',
  titulo:'Incidentes en la tribuna',
  contexto:'Hubo incidentes en la tribuna: {INCIDENTE}. La liga pide explicaciones y la prensa pregunta por el pacto.',
  variables:{ INCIDENTE:['una pelea entre grupos','bengalas y corridas','un cruce con la policía','destrozos en los baños'] },
  opciones:[
    O('Denunciar y colaborar con la justicia','Orden, ruptura definitiva',D(3,3,0,-40),'Denunciaste lo ocurrido: la prensa te valoró y la barra se enfureció.'),
    A('Minimizar lo ocurrido','Si no crece, salvaste el momento',0.4,D(1,1,0,0),'El tema se enfrió y pasó a un segundo plano.',D(-7,-6,0,-80),'La liga te sancionó y la prensa te acusó de encubrir.'),
    O('Reunir a la comisión de seguridad','Respuesta institucional',D(2,1,0,-30),'La comisión de seguridad actuó con rapidez.'),
  ] },

/* ===================== CADENA 7: HERMANAMIENTO CON OTRO CLUB (2 pasos) ===================== */
{ id:'cad_hermano_propuesta', cat:'institucional', jugador:null,
  titulo:'Un club extranjero propone hermanarse',
  contexto:'Un club de {PAIS_HERM} propone un hermanamiento con {BENEFICIO}. Sería un lindo gesto.',
  variables:{ PAIS_HERM:['otro continente','un país vecino','una región lejana'],
              BENEFICIO:['intercambio de juveniles','un amistoso anual','visitas de hinchas','camisetas conmemorativas'] },
  opciones:[
    O('Aceptar el hermanamiento','Imagen internacional, gasto leve',D(3,3,0,-30),'Aceptaste el hermanamiento: la prensa lo destacó.','c2_hermano'),
    O('Pedir tiempo para pensarlo','Más seguro',D(0,0,0,0),'Pediste tiempo para pensarlo: la propuesta quedó en el aire.'),
    O('Rechazarlo por falta de presupuesto','Ahorro, gesto frío',D(-2,-1,0,10),'Rechazaste el hermanamiento: lo entendieron, pero con pena.'),
  ] },

{ id:'cad_hermano_visita', cat:'deportivo', jugador:null, requiere:'c2_hermano',
  titulo:'Visita del club hermano',
  contexto:'El club hermano llega de visita y {NOVEDAD}. La hinchada espera un gran partido amistoso.',
  variables:{ NOVEDAD:['trae una delegación enorme','pide un trato especial','quiere jugar con titulares','sorprende con un regalo'] },
  opciones:[
    O('Recibirlos con una gran fiesta','Imagen, gasto',D(5,5,0,-90),'La visita fue una fiesta inolvidable.'),
    A('Jugar un amistoso con titulares','Si sale bien, lucimiento',0.5,D(4,4,4,-20),'Ganaron el amistoso y la hinchada vibró.',D(-3,-3,-4,-20),'Perdieron el amistoso y la visita se llevó el aplauso.'),
    O('Una recepción sencilla','Austera y sin riesgos',D(2,2,0,-20),'La recepción fue sencilla pero cálida.'),
  ] },

/* ===================== CADENA 8: DONACIÓN CONDICIONADA (3 pasos) ===================== */
{ id:'cad_socio_donacion', cat:'economico', jugador:null,
  titulo:'Un socio ofrece una donación condicionada',
  contexto:'{EMPRESARIO} ofrece una donación para {DESTINO}. Dice que no pide nada a cambio, pero hay una condición sutil.',
  variables:{ DESTINO:['las inferiores','el estadio','las deudas del club','el pago de sueldos'] },
  opciones:[
    O('Aceptar la donación','Plata, posible compromiso',D(2,2,0,150),'Aceptaste la donación de {EMPRESARIO}: el club respira.','c2_socio'),
    O('Pedir que sea sin condiciones','Más claro, más lento',D(1,0,0,50),'Pediste claridad: {EMPRESARIO} aceptó con una donación menor.'),
    O('Rechazar la donación','Independencia',D(4,1,0,0),'Rechazaste: los socios lo valoraron, la caja no.'),
  ] },

{ id:'cad_socio_cargo', cat:'institucional', jugador:null, requiere:'c2_socio',
  titulo:'El donante pide un cargo',
  contexto:'{EMPRESARIO} pide ahora {CARGO} en el club. Dice que quiere "cuidar su aporte".',
  variables:{ CARGO:['un lugar en la comisión directiva','la presidencia de una subcomisión','un asiento en las decisiones deportivas','la gestión de las inferiores'] },
  opciones:[
    O('Darle el cargo','Calma, pérdida de control',D(-3,-1,0,50),'Le diste el cargo a {EMPRESARIO}: se instaló en la sede.','c2_socio_b'),
    O('Ofrecerle un rol honorario','Gesto simbólico',D(1,0,0,0),'Le ofreciste un rol honorario: {EMPRESARIO} aceptó con una media sonrisa.'),
    O('Devolverle la donación','Independencia, costo alto',D(4,2,0,-150),'Devolviste la donación: la comisión te aplaudió.'),
  ] },

{ id:'cad_socio_conflicto', cat:'institucional', jugador:null, requiere:'c2_socio_b',
  titulo:'Conflicto de intereses en la comisión',
  contexto:'{EMPRESARIO} usó su cargo para {ACCION}. La comisión se divide y los socios piden explicaciones.',
  variables:{ ACCION:['favorecer a su empresa en un contrato','presionar al técnico','vetar una venta','cambiar a un proveedor'] },
  opciones:[
    O('Pedirle que renuncie','Orden, conflicto abierto',D(4,2,0,-30),'{EMPRESARIO} renunció con bronca y la comisión respiró.'),
    O('Crear un comité de ética','Institucional y lento',D(2,1,0,-20),'El comité de ética tomó el caso.'),
    A('Dejarlo pasar','Si no pasa nada, ahorraste un conflicto',0.35,D(1,0,0,40),'El conflicto no escaló y todo siguió igual.',D(-8,-6,0,0),'El conflicto estalló en la prensa y te tocó pagar el costo.'),
  ] },

/* ===================== CADENA 9: TRATAMIENTO EXPERIMENTAL (2 pasos) ===================== */
{ id:'cad_trat_propuesta', cat:'deportivo', jugador:'figura',
  titulo:'{JUGADOR} tiene una lesión crónica',
  contexto:'{JUGADOR} ({JPOS}, nivel {JRATING}) arrastra una lesión crónica y el médico propone {OPCION}. Es la figura del equipo.',
  variables:{ OPCION:['un tratamiento experimental','una cirugía menor','un descanso largo','una terapia con especialistas del exterior'] },
  opciones:[
    O('Aprobar el tratamiento experimental','Posible solución, riesgo',D(1,0,0,-90),'Aprobaste el tratamiento: {JUGADOR} empezó el proceso.','c2_tratamiento'),
    O('Optar por el descanso largo','Seguridad, ausencia',D(0,0,-4,0),'{JUGADOR} descansa un buen tiempo: el equipo lo extraña.'),
    O('Jugar con infiltraciones','Rendimiento inmediato, riesgo futuro',D(2,1,4,-20),'{JUGADOR} jugó infiltrado: el equipo rindió, pero el riesgo creció.'),
  ] },

{ id:'cad_trat_resultado', cat:'deportivo', jugador:'figura', requiere:'c2_tratamiento',
  titulo:'Resultado del tratamiento de {JUGADOR}',
  contexto:'Pasaron unas semanas del tratamiento de {JUGADOR} y los médicos tienen novedades. {NOTA}.',
  variables:{ NOTA:['Todos esperan un parte positivo','El equipo lo necesita','La prensa pregunta a diario','El vestuario está expectante'] },
  opciones:[
    A('Volver a ponerlo ya','Si sale bien, golazo',0.55,D(5,3,6,0),'{JUGADOR} volvió en gran forma y el equipo lo celebró.',D(-4,-3,-5,-50),'{JUGADOR} se lesionó otra vez y la apuesta salió cara.'),
    O('Esperar una semana más','Cautela, sin riesgos',D(1,0,-1,0),'Esperaron una semana más: {JUGADOR} volvió bien y con calma.'),
    O('Pedir una segunda opinión','Gasto y tiempo',D(0,0,0,-50),'La segunda opinión confirmó el plan y calmó los nervios.'),
  ] },

/* ===================== CADENA 10: CONVOCATORIA A LA SELECCIÓN (2 pasos) ===================== */
{ id:'cad_convocado_aviso', cat:'deportivo', jugador:'figura',
  titulo:'La selección convoca a {JUGADOR}',
  contexto:'La selección nacional convocó a {JUGADOR} ({JPOS}, {JEDAD} años) para {TORNEO}. El club tiene partidos clave.',
  variables:{ TORNEO:['un torneo importante','unos amistosos','una fecha de clasificación'] },
  opciones:[
    O('Liberarlo con orgullo','Imagen y prestigio, ausencia',D(3,4,-3,0),'{JUGADOR} viajó con la selección y el club salió en todos lados.','c2_convocado'),
    O('Negociar que juegue un solo partido','Equilibrio, enojo de la federación',D(0,0,0,0),'Negociaste un solo partido: nadie quedó contento del todo.'),
    O('Retenerlo por los partidos clave','Cuidás tu equipo, enojás a todos',D(-3,-3,3,0),'Retuviste a {JUGADOR}: la federación y la prensa criticaron.'),
  ] },

{ id:'cad_convocado_regreso', cat:'deportivo', jugador:'figura', requiere:'c2_convocado',
  titulo:'{JUGADOR} vuelve de la selección',
  contexto:'{JUGADOR} vuelve de la selección {ESTADO}. El técnico no sabe cómo ubicarlo.',
  variables:{ ESTADO:['con mucha confianza','lesionado de forma leve','cansado por los viajes','con ofertas del exterior'] },
  opciones:[
    O('Ponerlo de titular de inmediato','Rendimiento, riesgo de desgaste',D(2,1,3,0),'{JUGADOR} volvió de titular y rindió con confianza.'),
    O('Darle unos días de descanso','Cuidado físico, menos continuidad',D(1,0,-1,0),'{JUGADOR} descansó unos días y se reincorporó.'),
    A('Hablar sobre su futuro','Puede salir bien o mal',0.5,D(3,2,2,0),'Hablaron del futuro y {JUGADOR} se comprometió con el club.',D(-4,-2,-2,0),'La charla generó dudas y {JUGADOR} quedó incómodo.'),
  ] },

);
