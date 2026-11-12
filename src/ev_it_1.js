/* Plantillas de eventos en italiano (parte 1: deportivo + económico). */
EVENTOS_I18N.it = Object.assign(EVENTOS_I18N.it || {}, {

/* ===================== DEPORTIVO ===================== */
'dep_refuerzo': { titulo:'L’allenatore chiede un rinforzo urgente',
  contexto:'Con {MOTIVO}, l’allenatore ti chiede un rinforzo {PLAZO}. C’è un candidato: {JUGADOR}, {JPOS} di {JEDAD} anni e livello {JRATING}.',
  variables:{ MOTIVO:['due infortunati a centrocampo','la squalifica di un titolare','una serie di gol subiti','la cessione di un compagno chiave'],
              PLAZO:['entro questa settimana','prima della chiusura del calciomercato','per la partita di domenica'] },
  opciones:[
    {texto:'Ingaggiare {JUGADOR}', sub:'Rinforzo subito, costa soldi', msg:'{JUGADOR} approda a {CLUB}: l’allenatore sorride e la tesoreria fa i conti.'},
    {texto:'Che la rosa se la cavi da sola', sub:'Zero spesa, più rischio', msg:'Hai puntato sul gruppo. {JUGADOR} non è arrivato e l’allenatore l’ha ricordato in conferenza stampa.'},
    {texto:'Offrire a {JUGADOR} un contratto breve', sub:'Metà prezzo, ma può offendersi', ok:{msg:'{JUGADOR} ha accettato il contratto breve e rende dal primo giorno.'}, mal:{msg:'{JUGADOR} si è offeso e ha firmato altrove: hai perso tempo e trattative.'}},
  ] },

'dep_fichaje_ambicioso': { titulo:'Colpo ambizioso',
  contexto:'{REPRE} ti propone {JUGADOR} ({JPOS}, {JEDAD} anni, livello {JRATING}) e {COND}. È un nome forte, ma caro.',
  variables:{ REPRE:['Un procuratore con buoni contatti','Un imprenditore della zona','Un ex dirigente diventato intermediario'],
              COND:['chiede una clausola rescissoria bassa','pretende un contratto lungo e ben pagato','rivendica la numero 10 e il posto da titolare'] },
  opciones:[
    {texto:'Fare l’investimento', sub:'Colpo di impatto, cassa colpita', msg:'Hai presentato {JUGADOR} con fanfare e coriandoli. I soci già fanno i conti.'},
    {texto:'Trattare al ribasso', sub:'Meno rischio, meno brillantezza', msg:'Hai chiuso a meno: {JUGADOR} è arrivato senza clamore e senza promesse.'},
    {texto:'Lasciar perdere', sub:'Salvi la cassa', msg:'Hai detto di no. {JUGADOR} ha firmato altrove e l’allenatore è rimasto a fissare il soffitto.'},
  ] },

'dep_juvenil_venta': { titulo:'Cessione di un giovane all’estero',
  contexto:'{DESTINO} vuole portarsi via {JUGADOR}, {JPOS} di {JEDAD} anni, {FORMA}. I tifosi lo adorano.',
  variables:{ DESTINO:['Un club dell’Europa dell’Est','Un campionato del Medio Oriente','Una squadra messicana','Un club di seconda divisione europea'],
              FORMA:['con pagamento a rate','con una percentuale su una futura rivendita','in contanti ma con lo sconto'] },
  opciones:[
    {texto:'Vendere', sub:'Entrano soldi, se ne va la promessa', msg:'{JUGADOR} è partito e {CLUB} ha incassato. Sugli spalti sono spuntati i fazzoletti.'},
    {texto:'Trattenerlo', sub:'Ti tieni la promessa', msg:'{JUGADOR} resta. La curva lo canta tutto il pomeriggio.'},
    {texto:'Chiedere più soldi', sub:'Può andare a meraviglia o saltare', ok:{msg:'Hanno accettato la controfferta: affare d’oro con {JUGADOR}.'}, mal:{msg:'L’acquirente si è offeso e si è ritirato: né soldi né giovane contento.'}},
  ] },

'dep_lesion_capitan': { titulo:'Grave infortunio del capitano',
  contexto:'{JUGADOR}, capitano e {JPOS} di {JEDAD} anni, ha subito {LESION} e starà fuori {TIEMPO}. Lo spogliatoio aspetta la tua risposta.',
  variables:{ LESION:['una rottura dei legamenti','una frattura del perone','uno strappo grave'],
              TIEMPO:['per circa tre mesi','per circa quattro mesi','per il resto della stagione','a tempo indeterminato'] },
  opciones:[
    {texto:'Ingaggiare un sostituto', sub:'Toppa costosa', msg:'Hai preso un sostituto. {JUGADOR} segue il recupero dalla tribuna.'},
    {texto:'Fidarti della rosa', sub:'Nessuna spesa, con rischio', msg:'Senza {JUGADOR} la squadra ne risente, ma il gruppo si mostra unito.'},
    {texto:'Puntare su un recupero lampo', sub:'Può andare molto bene o molto male', ok:{msg:'{JUGADOR} è tornato prima del previsto: lo spogliatoio è esploso di gioia.'}, mal:{msg:'{JUGADOR} si è infortunato di nuovo e la scommessa è costata carissima.'}},
  ] },

'dep_descenso': { titulo:'Scontro diretto per non retrocedere',
  contexto:'Giochi {CONTEXTO} contro {RIVAL}: chi perde resta sull’orlo del baratro.',
  variables:{ RIVAL:['un rivale diretto','una squadra in crescita','l’ultima in classifica'],
              CONTEXTO:['in campo neutro','in casa con lo stadio pieno','in trasferta, lontanissimo da casa'] },
  opciones:[
    {texto:'Scendere in campo per vincere a ogni costo', sub:'Dentro o fuori', ok:{msg:'Hai vinto la partita della vita: {CLUB} respira.'}, mal:{msg:'Hai perso e il baratro si avvicina. La tribuna non perdona.'}},
    {texto:'Schieramento prudente', sub:'Un punto e tanta sofferenza', msg:'Pareggio sofferto. L’agonia si allunga, ma intanto si fa punti.'},
    {texto:'Promettere premi alla rosa', sub:'Premi per la vittoria', msg:'Hai promesso premi e la rosa è scesa in campo con un altro piglio. La tesoreria, meno.'},
  ] },

'dep_tecnico_garantias': { titulo:'L’allenatore chiede garanzie',
  contexto:'{PERFIL} che guida {CLUB} avverte che senza {EXIGE} non resta.',
  variables:{ PERFIL:['Il giovane allenatore','L’allenatore veterano','L’ex giocatore storico'],
              EXIGE:['più credito di tempo','un assistente di sua fiducia','meno pressione mediatica'] },
  opciones:[
    {texto:'Dargli ciò che chiede', sub:'Lo leghi al club', msg:'Gli hai dato soddisfazione: l’allenatore si è sentito sostenuto e la squadra se n’è accorta.'},
    {texto:'Contratto fino a fine stagione', sub:'Niente impegni lunghi', msg:'Hai messo i paletti. L’allenatore si è arrabbiato e si nota nello spogliatoio.'},
    {texto:'Lasciarlo andare', sub:'Scommessa forte', ok:{msg:'Il nuovo allenatore è arrivato con idee fresche e {CLUB} è partito a razzo.'}, mal:{msg:'Hai lasciato partire l’allenatore e il sostituto non funziona: i tifosi ti presentano il conto.'}},
  ] },

'dep_cambio_dt': { titulo:'Esonerare l’allenatore?',
  contexto:'Dopo {RACHA}, {PRESION} chiede la sua testa.',
  variables:{ RACHA:['quattro partite senza vittorie','tre sconfitte consecutive','uno 0-3 in casa'],
              PRESION:['la stampa','la curva','un settore del consiglio'] },
  opciones:[
    {texto:'Esonerarlo', sub:'Cambio d’aria, indennizzo', msg:'Hai esonerato l’allenatore. Il nuovo ha portato energia, anche se l’indennizzo brucia.'},
    {texto:'Confermarlo', sub:'Ribadisci il progetto', msg:'Hai sostenuto l’allenatore. I critici te lo rinfacceranno.'},
    {texto:'Dargli altre due partite', sub:'Ultima occasione', ok:{msg:'L’allenatore ha reagito e ha salvato la panchina: sembravi un visionario.'}, mal:{msg:'Ha perso ancora e sei passato per ingenuo.'}},
  ] },

'dep_figura_banco': { titulo:'L’allenatore vuole lasciare in panchina una stella',
  contexto:'Per {PARTIDO}, l’allenatore vuole lasciare in panchina {JUGADOR} ({JPOS}, livello {JRATING}) {RAZON}. I tifosi non capiscono.',
  variables:{ PARTIDO:['la semifinale di coppa','il derby','la partita decisiva'],
              RAZON:['per il rendimento scarso','per un fastidio che non guarisce','per indisciplina tattica'] },
  opciones:[
    {texto:'Sostenere l’allenatore', sub:'Autorità contro i tifosi', msg:'L’allenatore ha lasciato in panchina {JUGADOR} e la squadra ha mostrato più ordine. La curva ha fischiato.'},
    {texto:'Chiedergli di schierarlo', sub:'Stella in campo, allenatore irritato', msg:'{JUGADOR} ha giocato e i tifosi si sono illusi. L’allenatore non te l’ha perdonata.'},
    {texto:'Lasciare a lui la decisione', sub:'Lo decide il campo', ok:{msg:'L’allenatore ha avuto ragione: senza {JUGADOR} la squadra è stata più equilibrata.'}, mal:{msg:'Senza {JUGADOR} la squadra si è spenta e hanno dato la colpa alla dirigenza.'}},
  ] },

'dep_pretemporada': { titulo:'Precampionato: {PLAN}',
  contexto:'Lo staff tecnico propone {PLAN} {PRESUPUESTO}. L’idea divide.',
  variables:{ PLAN:['una tournée nell’entroterra','un’amichevole internazionale','un torneo estivo'],
              PRESUPUESTO:['con poco budget','con una campagna tra i soci','con uno sponsor locale'] },
  opciones:[
    {texto:'Approvare il piano', sub:'Ritmo e visibilità, costa soldi', msg:'Il precampionato è stato completo: la rosa è arrivata affilata e i soci l’hanno visto.'},
    {texto:'Piano austero al centro sportivo', sub:'Risparmio, meno ritmo', msg:'Hanno lavorato in casa. Hai risparmiato, ma è mancato il rodaggio competitivo.'},
    {texto:'Approvarlo con un’amichevole a pagamento', sub:'Può andare bene o male', ok:{msg:'L’amichevole ha portato gente e soldi: il piano si è ripagato da solo.'}, mal:{msg:'L’amichevole è stata un fiasco e la tournée è rimasta in perdita.'}},
  ] },

'dep_cancha': { titulo:'Il campo è in cattive condizioni',
  contexto:'{PROBLEMA} ha mostrato segni di cedimento {EPOCA}. I giocatori si lamentano.',
  variables:{ PROBLEMA:['Il manto erboso','Il drenaggio','L’illuminazione'],
              EPOCA:['prima di una partita chiave','in pieno inverno','in piena serie negativa'] },
  opciones:[
    {texto:'Sistemarlo subito', sub:'Lavori completi', msg:'I lavori sono stati fatti in tempo. I giocatori e i soci se ne sono accorti.'},
    {texto:'Una toppa economica', sub:'Per ora regge', msg:'Si è tappato l’urgente. Con un po’ di fortuna basta fino a fine stagione.'},
    {texto:'Giocare così e pregare', sub:'Zero spesa, molto rischio', ok:{msg:'Non è successo niente: hai risparmiato e nessuno se n’è accorto.'}, mal:{msg:'C’è stata una figuraccia in campo e la stampa l’ha ripetuta per tutta la settimana.'}},
  ] },

'dep_inferiores': { titulo:'Riorganizzare il settore giovanile',
  contexto:'Il responsabile del settore giovanile propone {CAMBIO}, finanziato {FONDOS}.',
  variables:{ CAMBIO:['di aggiungere un convitto per ragazzi dell’entroterra','di assumere uno scout per provincia','di organizzare un torneo proprio per il reclutamento'],
              FONDOS:['con il contributo dei soci','con i soldi della prima squadra','con una convenzione comunale'] },
  opciones:[
    {texto:'Sostenerlo a fondo', sub:'Investimento per il futuro', msg:'Il settore giovanile ha ricevuto soldi ed entusiasmo. I frutti si vedranno tra qualche anno.'},
    {texto:'Fare qualcosa di minimo', sub:'Appena un gesto', msg:'Si è fatto un piccolo aggiustamento: il responsabile l’ha preso come uno sgarbo.'},
    {texto:'Dare priorità alla prima squadra', sub:'Risultati subito', msg:'Hai detto che i soldi vanno alla prima squadra. Sono arrivati i risultati, e i rimproveri.'},
  ] },

'dep_capitan_descanso': { titulo:'Il capitano chiede una pausa',
  contexto:'Il capitano {JUGADOR} ({JPOS}, {JEDAD} anni) chiede di fermarsi per {MOTIVO} {FECHA}.',
  variables:{ MOTIVO:['stanchezza accumulata','un problema familiare','un vecchio fastidio'],
              FECHA:['prima della coppa','nel bel mezzo della serie','prima di un derby'] },
  opciones:[
    {texto:'Concederla', sub:'Il gruppo lo rispetta', msg:'{JUGADOR} si è riposato e la rosa ha apprezzato il gesto, anche se la squadra ne ha sentito la mancanza.'},
    {texto:'Chiedergli di giocare', sub:'La squadra regge', msg:'{JUGADOR} ha giocato a denti stretti. Il gruppo ha capito, ma con dubbi.'},
    {texto:'Concordare un riposo parziale', sub:'Via di mezzo rischiosa', ok:{msg:'Il riposo parziale è andato bene: {JUGADOR} è tornato fresco.'}, mal:{msg:'L’accordo non ha accontentato nessuno e {JUGADOR} ha giocato a metà regime.'}},
  ] },

'dep_cualidad_minutos': { titulo:'Il tuo {CUALIDAD} reclama minuti',
  contexto:'{JUGADOR}, il tuo {CUALIDAD}, sente di giocare poco {MOMENTO} e {ACCION}.',
  variables:{ MOMENTO:['nell’ultima giornata','da un mese','dal cambio di allenatore'],
              ACCION:['ha chiesto un incontro','ha minacciato di andarsene','ha pubblicato un messaggio enigmatico'] },
  opciones:[
    {texto:'Dargli più minuti', sub:'Lui contento, l’allenatore no', msg:'{JUGADOR} ha giocato di più e si è mostrato motivato. L’allenatore non ha nascosto il fastidio.'},
    {texto:'Che si sorbisca la panchina', sub:'Autorità dello staff tecnico', msg:'{JUGADOR} ha accettato a malincuore e lo spogliatoio ha percepito la tua mano ferma.'},
    {texto:'Mediare con un confronto', sub:'Via d’uscita diplomatica', msg:'Hai parlato con {JUGADOR}: è più tranquillo, anche se nulla è stato risolto.'},
  ] },

/* ===================== ECONOMICO ===================== */
'eco_sponsor_dudoso': { titulo:'{TIPO} offre soldi per {ELEM}',
  contexto:'L’offerta è allettante, ma nessuno sa bene da dove arrivino i soldi. Con il suo logo che occupa {ELEM}, {CLUB} resterebbe legato per anni.',
  variables:{ TIPO:['Un marchio di energy drink','Una piattaforma cripto di dubbia reputazione','Una finanziaria di prestiti rapidi'],
              ELEM:['la manica','la schiena','i pantaloncini'] },
  opciones:[
    {texto:'Accettare', sub:'Soldi freschi, reputazione a rischio', msg:'Hai chiuso l’accordo e sono entrati soldi. I soci hanno aggrottato la fronte.'},
    {texto:'Rifiutare', sub:'Proteggi l’immagine', msg:'Hai detto di no. I tifosi hanno apprezzato, la tesoreria meno.'},
    {texto:'Negoziare le condizioni', sub:'Meno soldi, più cautela', msg:'Hai chiuso un accordo più limitato, con clausole di uscita.'},
  ] },

'eco_deuda': { titulo:'Debito con {ACREEDOR}',
  contexto:'Vuole i suoi soldi: {ACREEDOR}. Il debito {PLAZO} e la cassa è al limite.',
  variables:{ ACREEDOR:['l’ente di riscossione','la società di vigilanza','il fornitore di abbigliamento'],
              PLAZO:['scade questa settimana','scade a fine mese','è già in diffida'] },
  opciones:[
    {texto:'Pagare tutto subito', sub:'Sollievo totale, cassa vuota', msg:'Hai pagato tutto in un colpo. Hai tirato il fiato, anche se la cassa è rimasta a secco.'},
    {texto:'Rifinanziare con interessi', sub:'Rimandare il problema', msg:'Hai rifinanziato il debito. Oggi paghi meno e domani di più.'},
    {texto:'Rimandare il pagamento', sub:'Scommessa sull’oblio', ok:{msg:'Il creditore ha aspettato e tutto è proseguito come prima.'}, mal:{msg:'Il creditore si è arrabbiato e la notizia è finita ovunque.'}},
  ] },

'eco_fondo_pase': { titulo:'Un fondo d’investimento vuole il cartellino di {JUGADOR}',
  contexto:'{FONDO} offre di pagare in anticipo il {PORC} del valore di mercato di {JUGADOR} ({JPOS}, livello {JRATING}) e di portarlo in un altro club.',
  variables:{ PORC:['70%','85%','100%'],
              FONDO:['Un fondo straniero','Un fondo locale','Una società per azioni d’investimento'] },
  opciones:[
    {texto:'Accettare', sub:'Soldi subito, se ne va il giocatore', msg:'Hai chiuso con il fondo ed è entrata una bella somma. {JUGADOR} è passato a un altro club.'},
    {texto:'Rifiutare', sub:'Tieni il giocatore', msg:'Hai rifiutato. {JUGADOR} resta a {CLUB} e i tifosi ti applaudono.'},
    {texto:'Chiedere più soldi e niente intermediari', sub:'Può chiudersi o saltare', ok:{msg:'Il fondo ha accettato la controfferta e {JUGADOR} è partito con un ottimo affare per {CLUB}.'}, mal:{msg:'Il fondo si è ritirato e si è mormorato che fossi nei guai.'}},
  ] },

'eco_juicio_exjugador': { titulo:'Causa di un ex giocatore',
  contexto:'{JUGADOR}, che si è già ritirato, reclama {RECLAMO} e l’avvocato del club {ABOGADO}.',
  variables:{ RECLAMO:['premi non pagati','un’indennità','stipendi arretrati','una percentuale su un vecchio trasferimento'],
              ABOGADO:['chiede di accordarsi in fretta','assicura che si può vincere','consiglia di non parlare con la stampa'] },
  opciones:[
    {texto:'Trovare un accordo', sub:'Chiudi la questione', msg:'Ti sei accordato con {JUGADOR}. Il club ha perso soldi e il conflitto è morto lì.'},
    {texto:'Andare in causa', sub:'Può andare molto bene o male', ok:{msg:'Hai vinto la causa contro {JUGADOR}. E hai incassato anche le spese legali.'}, mal:{msg:'Hai perso la causa e {JUGADOR} ha incassato di più, con gli interessi.'}},
    {texto:'Pagarlo a rate', sub:'Alleggerisce la cassa, allunga il dramma', msg:'Hai pattuito le rate con {JUGADOR}: la cassa respira, la questione resta.'},
  ] },

'eco_naming': { titulo:'Naming dello stadio',
  contexto:'{EMPRESA} offre il suo nome per lo stadio {DURACION}. Ai tifosi non va giù.',
  variables:{ EMPRESA:['Una catena di supermercati','Un marchio di elettrodomestici','Una banca regionale'],
              DURACION:['per tre anni','per cinque anni','per dieci anni'] },
  opciones:[
    {texto:'Accettare', sub:'Tanti soldi, tifosi arrabbiati', msg:'Il naming è stato firmato. Sugli spalti sono comparsi striscioni di protesta.'},
    {texto:'Rifiutare', sub:'Rispetti la tradizione', msg:'Hai rifiutato il naming. I soci hanno applaudito, la tesoreria no.'},
    {texto:'Aggiungere il nome storico', sub:'Metà e metà', msg:'Hanno accettato di mantenere accanto il nome storico. Nessuno è rimasto del tutto contento.'},
  ] },

'eco_rival_cualidad': { titulo:'{RIVAL} vuole comprarti il tuo {CUALIDAD}',
  contexto:'{RIVAL} ha messo sul tavolo {OFERTA} per {JUGADOR}, {JPOS} di {JEDAD} anni. Lo spogliatoio aspetta la tua risposta.',
  variables:{ RIVAL:['Un club della massima serie','Un club estero','Una squadra di un’altra regione'],
              OFERTA:['una cifra importante','una cifra moderata più un giocatore','un prestito con diritto di riscatto','un’offerta a rate'] },
  opciones:[
    {texto:'Vendere', sub:'Entrano soldi, se ne va il giocatore', msg:'Hai venduto {JUGADOR}. La cassa si è riempita e lo spogliatoio si è svuotato.'},
    {texto:'Trattenere', sub:'Tieni il giocatore', msg:'Hai detto che {JUGADOR} non si vende. La rosa ti ringrazia.'},
    {texto:'Chiedere il doppio', sub:'Affare o rottura', ok:{msg:'Hanno accettato di pagare il doppio per {JUGADOR}.'}, mal:{msg:'Si sono alzati dal tavolo e {JUGADOR} ha la testa altrove.'}},
  ] },

'eco_prestamo': { titulo:'Prestito per pagare gli stipendi',
  contexto:'Si avvicina il giorno di paga e i soldi non bastano. {PRESTAMISTA} offre un prestito {TASA}.',
  variables:{ PRESTAMISTA:['Una banca regionale','Una mutua di quartiere','Un socio imprenditore'],
              TASA:['a tasso alto','con garanzia sugli incassi','con clausola di rinegoziazione'] },
  opciones:[
    {texto:'Accettarlo', sub:'Oggi si paga, domani si deve', msg:'Hai preso il prestito. Gli stipendi sono stati pagati e il debito è rimandato a un altro giorno.'},
    {texto:'Chiedere pazienza alla rosa', sub:'Niente debito, con tensione', msg:'Hai chiesto pazienza alla rosa. Alcuni hanno accettato, altri no.'},
    {texto:'Vendere un palco di lusso', sub:'Pochi soldi, subito', msg:'Hai venduto un palco. È bastato per tappare l’urgente.'},
  ] },

'eco_merch': { titulo:'Nuova linea di prodotti',
  contexto:'{SOCIO} propone di lanciare {PRODUCTO}. L’investimento iniziale è rischioso.',
  variables:{ SOCIO:['Un designer del quartiere','Una catena di negozi','Una fabbrica locale'],
              PRODUCTO:['maglie vintage','una linea urbana','figurine da collezione'] },
  opciones:[
    {texto:'Lanciare in grande', sub:'Può spaccare o fallire', ok:{msg:'Il lancio è stato un successo: i negozi sono rimasti senza scorte.'}, mal:{msg:'Il lancio non ha convinto ed è rimasta merce invenduta.'}},
    {texto:'Una tiratura limitata', sub:'Rischio moderato', msg:'Hai fatto una tiratura limitata e si è venduto giusto quanto previsto.'},
    {texto:'Declinare la proposta', sub:'Non ti esponi', msg:'Hai detto di no. Nessun rischio, ma nessun soldo nuovo.'},
  ] },

'eco_tv': { titulo:'Diritti di trasmissione',
  contexto:'{FORMATO} offre di trasmettere le partite di {CLUB} {CONDICION}.',
  variables:{ FORMATO:['Una piattaforma di streaming','Un canale via cavo','Un’emittente radio e web'],
              CONDICION:['con orari imposti','in esclusiva','con pagamento anticipato'] },
  opciones:[
    {texto:'Firmare', sub:'Soldi e visibilità', msg:'Hai firmato l’accordo. Più pubblico, ma alcuni orari danno fastidio alla rosa.'},
    {texto:'Rifiutare', sub:'Mantieni la libertà', msg:'Hai rifiutato l’offerta: niente soldi extra, ma calendario tutto tuo.'},
    {texto:'Negoziare un accordo parziale', sub:'Meno soldi, più cautela', msg:'Hai chiuso una versione ridotta dell’accordo.'},
  ] },

'eco_obras': { titulo:'Lavori alle strutture',
  contexto:'Bisogna sistemare {TRIBUNA} e la discussione è su come pagare: {FINANCIA}.',
  variables:{ TRIBUNA:['la curva','la tribuna centrale','i palchi'],
              FINANCIA:['con fondi propri','con un mutuo','con una campagna tra i soci'] },
  opciones:[
    {texto:'Lavori completi', sub:'Grande miglioria, cassa colpita', msg:'Hanno terminato i lavori completi. I soci sono contenti e la tesoreria no.'},
    {texto:'Solo l’urgente', sub:'Il minimo indispensabile', msg:'Si è fatto l’urgente: basta, ma non entusiasma.'},
    {texto:'Rimandare di un anno', sub:'Scommessa con rischio', ok:{msg:'Non è successo nulla: quest’anno hai risparmiato i soldi.'}, mal:{msg:'C’è stato un problema per non aver fatto i lavori ed è stato riparato in fretta e furia.'}},
  ] },

'eco_cuota_social': { titulo:'Alzare la quota sociale?',
  contexto:'Il consiglio propone un aumento del {AUMENTO} {EXCUSA}.',
  variables:{ AUMENTO:['10%','25%','40%'],
              EXCUSA:['per pagare gli stipendi','per fare dei lavori','per saldare i debiti'] },
  opciones:[
    {texto:'Alzare la quota', sub:'Cassa subito, soci scontenti', msg:'La quota è salita. Sono entrati soldi e ci sono state lamentele sui social.'},
    {texto:'Mantenerla', sub:'Soci tranquilli', msg:'Hai mantenuto la quota. I soci ti ringraziano, la cassa no.'},
    {texto:'Alzarla a metà', sub:'Soluzione intermedia', msg:'Hai alzato la quota solo a metà. Nessuno è rimasto del tutto contento.'},
  ] },

'eco_recital': { titulo:'Affittare lo stadio per un concerto',
  contexto:'{ARTISTA} vuole suonare allo stadio {FECHA}.',
  variables:{ ARTISTA:['Una band rock','Un cantante pop','Un festival di cumbia'],
              FECHA:['tra due partite','in piena settimana di coppa','nel weekend libero'] },
  opciones:[
    {texto:'Accettare', sub:'Soldi extra, prato maltrattato', msg:'Il concerto è andato bene e ha riempito la cassa. Il prato ha sofferto.'},
    {texto:'Rifiutare', sub:'Proteggi il campo', msg:'Hai rifiutato il concerto: campo impeccabile, cassa uguale.'},
    {texto:'Accettare con condizioni', sub:'Meno soldi, più cura', msg:'Hai accettato con condizioni rigide. Tutto è filato liscio.'},
  ] },

'eco_cualidad_publicidad': { titulo:'Un marchio vuole il tuo {CUALIDAD} come testimonial',
  contexto:'{MARCA} offre a {JUGADOR} di essere il volto della sua campagna {CONDICION}.',
  variables:{ MARCA:['Un marchio di abbigliamento sportivo','Una catena di fast food','Una compagnia telefonica'],
              CONDICION:['con una quota per il club','con orari che si scontrano con gli allenamenti','con esclusiva per un anno'] },
  opciones:[
    {texto:'Accettare', sub:'Soldi e visibilità', msg:'{JUGADOR} ha firmato il contratto. Il club ha ricevuto la sua parte e la stampa ne ha parlato.'},
    {texto:'Rifiutare', sub:'Focus sul campo', msg:'Hai rifiutato la proposta: {JUGADOR} è rimasto concentrato sul suo lavoro.'},
    {texto:'Negoziare un accordo breve', sub:'Un po’ di tutto', msg:'Hai chiuso una campagna più breve, senza interferire con gli allenamenti.'},
  ] },

'eco_fichaje_cuota': { titulo:'Scade la rata dell’acquisto',
  contexto:'È arrivata la rata per il costoso acquisto che hai chiuso e la cassa è {ESTADO}. {ACREEDOR} non aspetta.',
  variables:{ ESTADO:['risicata','ridotta all’osso','messa peggio del previsto'],
              ACREEDOR:['Il club venditore','Il procuratore','Un intermediario'] },
  opciones:[
    {texto:'Pagare per intero', sub:'Sei puntuale, cassa colpita', msg:'Hai pagato la rata e sei passato per un dirigente che mantiene la parola.'},
    {texto:'Rinegoziare i tempi', sub:'Allunga l’impegno', msg:'Hai rinegoziato i tempi. Oggi paghi meno e domani di più.'},
    {texto:'Chiedere uno sconto', sub:'Può andare bene o male', ok:{msg:'Hanno accettato uno sconto: ti sei tolto un peso.'}, mal:{msg:'Si sono offesi, ti hanno chiesto il totale e con gli interessi.'}},
  ] },

});
