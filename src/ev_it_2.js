/* Eventos 2 — traduzione italiana (parte 1: stagionali, derby, per paese). */
EVENTOS_I18N.it = Object.assign(EVENTOS_I18N.it || {}, {

/* ===== STAGIONALI: INIZIO ===== */
'est_ini_gira': { titulo:"Ti offrono una tournée di preparazione", contexto:"Una società di produzione propone una tournée {DESTINO} con {FORMATO}. Paga bene, ma la rosa arriverebbe stanca all'inizio del campionato.",
  variables:{ DESTINO:["in una città di mare","nell'entroterra","in un paese vicino","in una zona di montagna"], FORMATO:["tre amichevoli","un torneo lampo","due partite e una clinic con i bambini"] },
  opciones:[
    { texto:"Accettare la tournée", sub:"Entrano soldi, la rosa viaggia stanca", msg:"La tournée ha portato soldi e belle foto, ma l'allenatore si è lamentato della stanchezza." },
    { texto:"Allenarsi in casa", sub:"Niente incassi, gambe fresche", msg:"Hai lavorato in casa: la squadra arriva in forma, la tesoreria non festeggia." },
    { texto:"Chiedere una tournée più breve", sub:"Può andare alla grande o saltare", ok:{ msg:"La società ha accettato una versione ridotta: ottimo affare e poco logorio." }, mal:{ msg:"La società si è offesa ed è sparita: hai perso i soldi e anche il tempo di allenamento." } },
  ] },

'est_ini_cuota': { titulo:"Bisogna fissare la quota sociale dell'anno", contexto:"Con {MOTIVO}, il consiglio ti chiede una posizione sulla quota sociale. {PRESION}.",
  variables:{ MOTIVO:["l'inflazione che morde","lo stadio che chiede lavori","la concorrenza degli altri club del quartiere"], PRESION:["I soci giovani chiedono prezzi più bassi","I pensionati chiedono sconti","La curva dice che non si tocca"] },
  opciones:[
    { texto:"Alzarla", sub:"Più cassa, meno simpatia", msg:"Hai alzato la quota: la tesoreria respira e l'assemblea borbotta." },
    { texto:"Congelarla", sub:"Simpatia oggi, guai domani", msg:"Hai congelato la quota: applausi in tribuna e conti più tirati." },
    { texto:"Scaglionata per categoria", sub:"Complicato ma equo", msg:"Hai creato una quota scaglionata: nessuno è al settimo cielo, nessuno è furioso." },
  ] },

'est_ini_pruebas': { titulo:"Provini per giocatori svincolati", contexto:"Si presentano {CANTIDAD} giocatori a chiedere un provino durante il ritiro. {NOTA}.",
  variables:{ CANTIDAD:["una ventina di","quasi quaranta","una decina di"], NOTA:["L'allenatore dubita che ci sia del talento","Un osservatore assicura che ce n'è uno bravo","Il preparatore atletico avvisa che non c'è tempo"] },
  opciones:[
    { texto:"Aprire provini di massa", sub:"Costo logistico, possibile scoperta", msg:"I provini hanno regalato un paio di sorprese e un conto di panini e bibite." },
    { texto:"Provare solo i segnalati", sub:"Risparmio, meno scoperte", msg:"Hai provato solo pochi nomi: niente di nuovo, niente di perso." },
    { texto:"Non aprire le porte", sub:"Focus sulla rosa attuale", msg:"Hai chiuso i cancelli: hai risparmiato, ma nel quartiere c'è stato brontolio." },
  ] },

'est_ini_amistoso': { titulo:"Amichevole di lusso contro {RIVAL}", contexto:"{RIVAL} propone un'amichevole {FECHA}, {SEDE}. Serve per misurarsi, ma un brutto risultato fa rumore.",
  variables:{ FECHA:["la settimana prossima","nel weekend lungo","proprio prima del debutto"], SEDE:["nel tuo stadio","nello stadio avversario","in un campo neutro"] },
  opciones:[
    { texto:"Giocarla con la squadra titolare", sub:"Prova vera, rischio di schiaffo", ok:{ msg:"La squadra ha brillato in amichevole e la tribuna è uscita piena di entusiasmo." }, mal:{ msg:"L'amichevole è finita con una goleada e i pronostici si sono raffreddati." } },
    { texto:"Provare riserve e giovani", sub:"Senza pressione, poco brillante", msg:"Le riserve hanno sfruttato l'occasione senza che nessuno si arrabbiasse." },
    { texto:"Declinare l'amichevole", sub:"Tranquillità, nessun rumore", msg:"Hai declinato: l'allenatore ha lavorato a porte chiuse e la stampa ha chiesto perché." },
  ] },

'est_ini_presentacion': { titulo:"Presentazione ufficiale della rosa", contexto:"Toccherà presentare la rosa della stagione {LUGAR}. Intanto {EXPECTATIVA}.",
  variables:{ LUGAR:["allo stadio","in un teatro della città","nella piazza principale"], EXPECTATIVA:["c'è molta attesa","si respira una certa apatia","arrivano ospiti e telecamere"] },
  opciones:[
    { texto:"Fare una grande festa", sub:"Immagine potente, spesa alta", msg:"La festa è stata spettacolare e i soci sono tornati a casa con i gadget." },
    { texto:"Una cerimonia sobria", sub:"Austera e senza sorprese", msg:"La cerimonia è stata sobria: pochi applausi, zero critiche." },
    { texto:"Approfittarne per lanciare gli abbonamenti", sub:"Vendite, ma può sembrare opportunismo", ok:{ msg:"Gli abbonamenti sono andati a ruba: la tesoreria sorride." }, mal:{ msg:"Sembrava un'operazione commerciale travestita da festa e i soci se ne sono accorti." } },
  ] },

'est_ini_preparador': { titulo:"Il preparatore atletico chiede cambiamenti", contexto:"Il preparatore atletico chiede {PEDIDO}. Dice che senza questo la squadra calerà nella seconda parte della stagione.",
  variables:{ PEDIDO:["una palestra rinnovata","più giorni di lavoro in doppia seduta","un nutrizionista fisso","meno amichevoli"] },
  opciones:[
    { texto:"Dargli tutto quello che chiede", sub:"Investimento che si vedrà dopo", msg:"La rosa è arrivata al top, anche se l'investimento si è fatto sentire in cassa." },
    { texto:"Accontentarlo a metà", sub:"Un compromesso ragionevole", msg:"Hai accolto metà della richiesta: il preparatore ha capito e si è messo al lavoro." },
    { texto:"Dirgli di arrangiarsi", sub:"Risparmio, tensione nello staff", msg:"Hai risparmiato, ma lo staff tecnico è rimasto offeso e la rosa lo percepisce." },
  ] },

/* ===== STAGIONALI: METÀ STAGIONE ===== */
'est_med_pases': { titulo:"Ultimo giorno di calciomercato", contexto:"Mancano poche ore alla chiusura del mercato e {SITUACION}. L'allenatore ti guarda in attesa di un segnale.",
  variables:{ SITUACION:["spunta un centrocampista svincolato di buon livello","un rivale ti offre un attaccante in prestito","non ci sono più soldi per chiudere nulla","c'è un giocatore che chiede di andarsene"] },
  opciones:[
    { texto:"Fiondarsi sul mercato", sub:"Si completa la rosa, si svuota la cassa", msg:"Hai chiuso un rinforzo sul gong e lo spogliatoio ha apprezzato." },
    { texto:"Chiudere senza movimenti", sub:"Risparmio e calma", msg:"Il mercato si è chiuso senza novità: hai risparmiato, ma nessuno si è entusiasmato." },
    { texto:"Chiedere un prestito con diritto di riscatto", sub:"Può costare poco o carissimo", ok:{ msg:"Il prestito è andato bene: è arrivato il rinforzo con una formula ragionevole." }, mal:{ msg:"L'operazione si è complicata e hai finito per pagare di più senza rinforzo." } },
  ] },

'est_med_balance': { titulo:"Bilancio del primo semestre", contexto:"Il collegio sindacale rivede i conti del semestre e {HALLAZGO}.",
  variables:{ HALLAZGO:["rileva spese giustificate male","chiede più dettagli sugli stipendi","contesta i numeri del bar dello stadio","scopre debiti non dichiarati"] },
  opciones:[
    { texto:"Aprire i libri contabili", sub:"Trasparenza totale, costo politico", msg:"Hai aperto i libri contabili: qualcuno si è spaventato, altri hanno apprezzato moltissimo." },
    { texto:"Presentare un bilancio in ordine", sub:"Se va bene, tutto tranquillo", ok:{ msg:"Il collegio ha accettato il bilancio senza obiezioni: hai tirato un sospiro di sollievo." }, mal:{ msg:"Il collegio ha trovato degli errori e l'assemblea è andata su tutte le furie." } },
    { texto:"Rimandare la revisione", sub:"Guadagni tempo, perdi fiducia", msg:"Hai rimandato la revisione: ti sei guadagnato qualche occhiataccia nel collegio." },
  ] },

'est_med_paro': { titulo:"Sciopero {SECTOR}", contexto:"I dipendenti {SECTOR} annunciano uno sciopero per {RECLAMO}. Ci sono partite in calendario e poco margine.",
  variables:{ SECTOR:["della sicurezza dello stadio","dell'amministrazione","della manutenzione del campo","dei trasporti del club"], RECLAMO:["stipendi arretrati","condizioni migliori","mancanza di personale"] },
  opciones:[
    { texto:"Pagare il dovuto", sub:"Mantieni la parola, cassa colpita", msg:"Hai pagato e lo sciopero è rientrato: hai mantenuto la parola, anche se la cassa lo ha sentito." },
    { texto:"Trattare sui tempi", sub:"Guadagni respiro, resta la tensione", msg:"Hai trattato sui tempi: il conflitto si è raffreddato ma resta latente." },
    { texto:"Dichiarare il conflitto ingiustificato", sub:"Pugno duro, molto rischio", ok:{ msg:"I dipendenti hanno accettato le condizioni e lo sciopero è finito in fretta." }, mal:{ msg:"Il conflitto è peggiorato, le partite si sono complicate e la stampa ti ha puntato il dito." } },
  ] },

'est_med_clima': { titulo:"Temporale sullo stadio", contexto:"Un temporale ha lasciato {DANIO} proprio prima di una partita decisiva. Bisogna decidere in fretta.",
  variables:{ DANIO:["il campo allagato","parte del tetto della tribuna danneggiata","gli spogliatoi allagati","il terreno coperto di fango"] },
  opciones:[
    { texto:"Riparare d'urgenza", sub:"Costoso ma sicuro", msg:"Hai riparato in extremis: la partita si è giocata regolarmente." },
    { texto:"Sospendere e riprogrammare", sub:"Risparmio, calendario stretto", msg:"Hai sospeso la partita: la lega l'ha riprogrammata in una data scomoda." },
    { texto:"Giocare comunque in quelle condizioni", sub:"Epica o figuraccia", ok:{ msg:"Hanno giocato nel fango con grinta e i tifosi hanno vissuto una notte epica." }, mal:{ msg:"La partita nel fango è stata un disastro e c'è scappato anche un infortunato." } },
  ] },

'est_med_receso': { titulo:"Pausa di metà stagione", contexto:"Durante la pausa, {SITUACION}. Bisogna decidere come usare il tempo.",
  variables:{ SITUACION:["la rosa chiede vacanze lunghe","l'allenatore vuole un ritiro","diversi giocatori sono in cattiva forma fisica","le riserve reclamano minuti"] },
  opciones:[
    { texto:"Dare le vacanze", sub:"Testa riposata, ritmo perso", msg:"La rosa si è riposata, ma è tornata senza ritmo." },
    { texto:"Ritiro intensivo", sub:"Ritmo alto, morale basso", msg:"Il ritiro ha reso la squadra affilata e di pessimo umore." },
    { texto:"Mix con quattro giorni liberi", sub:"Un po' di tutto", msg:"L'equilibrio è stato apprezzato: tutti contenti e nessuno euforico." },
  ] },

'est_med_encuesta': { titulo:"Sondaggio tra i soci", contexto:"Il consiglio ha fatto un sondaggio di metà anno e {RESULTADO_ENC}. Chiedono una risposta.",
  variables:{ RESULTADO_ENC:["la maggioranza chiede più rinforzi","molti reclamano servizi migliori allo stadio","una buona parte contesta i prezzi","diversi chiedono più vicinanza al presidente"] },
  opciones:[
    { texto:"Rispondere con misure concrete", sub:"Costa soldi, aumenta la fiducia", msg:"Hai annunciato misure concrete: i soci hanno sentito di essere stati ascoltati." },
    { texto:"Fare un'assemblea aperta", sub:"Gratis ma ti espone", msg:"L'assemblea aperta è stata tesa ma ha lasciato un buon clima." },
    { texto:"Promettere più di quanto si può", sub:"Se mantieni è un colpo; se no, una bomba", ok:{ msg:"Le promesse hanno acceso l'entusiasmo e sono state mantenute in tempo: euforia popolare." }, mal:{ msg:"Le promesse non sono state mantenute e la tribuna te l'ha fatto sapere." } },
  ] },

/* ===== STAGIONALI: CHIUSURA ===== */
'est_cie_definicion': { titulo:"L'ultima giornata decide tutto", contexto:"All'ultima giornata {CONDICION}. La rosa aspetta il tuo messaggio.",
  variables:{ CONDICION:["dipendi da un risultato altrui","ti giochi la qualificazione","ti giochi la salvezza","ti giochi il prestigio dell'anno"] },
  opciones:[
    { texto:"Promettere premi importanti", sub:"Motiva, costa soldi", msg:"Hai promesso premi e la rosa è scesa in campo a mordere." },
    { texto:"Calmare la rosa", sub:"Testa fredda, zero spese", msg:"Hai chiesto calma: la squadra ha giocato concentrata, senza grandi gesti." },
    { texto:"Parlare pubblicamente della partita decisiva", sub:"Pressione extra, tutto o niente", ok:{ msg:"Le tue parole hanno acceso squadra e tribuna: sono scesi in campo per vincere." }, mal:{ msg:"Le tue parole hanno aggiunto pressione e la squadra si è paralizzata." } },
  ] },

'est_cie_fiesta': { titulo:"Festa di fine stagione", contexto:"I tifosi propongono una festa con {FORMATO} per chiudere l'anno.",
  variables:{ FORMATO:["musica e cibo allo stadio","un concerto di band locali","una carovana per il quartiere","una grigliata popolare in sede"] },
  opciones:[
    { texto:"Organizzarla in grande", sub:"Clima di festa, spesa forte", msg:"La festa è stata un successo clamoroso e tutti se ne sono andati contenti." },
    { texto:"Appoggiarla senza spendere", sub:"Se ne occupano i tifosi", msg:"Hai appoggiato l'idea e i tifosi l'hanno organizzata da soli." },
    { texto:"Declinare per la situazione", sub:"Prudenza, freddezza", msg:"Hai declinato: hai risparmiato, ma la tribuna è rimasta con l'amaro in bocca." },
  ] },

'est_cie_premios': { titulo:"Premio al miglior giocatore dell'anno", contexto:"Tutto indica che {JUGADOR} ({JPOS}, livello {JRATING}) sia il migliore dell'anno. La cerimonia sarà {FORMATO} e bisogna decidere come gestirla.",
  variables:{ FORMATO:["in diretta radio","una cena di gala","sui canali social del club"] },
  opciones:[
    { texto:"Premiare solo lui", sub:"Riconoscimento chiaro, gelosie nello spogliatoio", msg:"{JUGADOR} ha ricevuto il premio con orgoglio; qualche compagno ha fatto finta di niente." },
    { texto:"Premiare tutta la rosa", sub:"Spogliatoio unito, meno luce mediatica", msg:"Hai premiato tutta la rosa: nessuno si è sentito da meno, anche se la stampa voleva un nome." },
    { texto:"Nessuna cerimonia", sub:"Zero spese, zero clima", msg:"Hai chiuso l'anno senza cerimonia: la questione è rimasta a galleggiare negli spogliatoi." },
  ] },

'est_cie_contrato': { titulo:"Scade il contratto di {JUGADOR}", contexto:"Il contratto di {JUGADOR} ({JPOS}, {JEDAD} anni) scade e lui {SITUACION}. Il procuratore aspetta una risposta prima della chiusura.",
  variables:{ SITUACION:["chiede un aumento importante","ha offerte da altri club","vuole assicurarsi il posto da titolare","dice di amare il club ma di avere bisogno di soldi"] },
  opciones:[
    { texto:"Rinnovare con aumento", sub:"Lo leghi a te, la cassa paga", msg:"Hai rinnovato {JUGADOR}: lo spogliatoio ha festeggiato e la tesoreria ha fatto i conti." },
    { texto:"Rinnovare per un anno", sub:"Una via di mezzo", msg:"Un anno in più per {JUGADOR}: nessuno si è arrabbiato, nessuno si è illuso." },
    { texto:"Lasciarlo andare a parametro zero", sub:"Risparmio, perdita di peso", msg:"{JUGADOR} se n'è andato a parametro zero: hai risparmiato, ma la tifoseria ha pianto." },
  ] },

'est_cie_auditoria': { titulo:"Revisione dei conti di fine anno", contexto:"La lega verifica i conti di tutti i club a fine anno e {ASUNTO}. È il momento di decidere come rispondere.",
  variables:{ ASUNTO:["chiede la documentazione degli ultimi sei mesi","indaga sui pagamenti a intermediari","controlla l'agibilità dello stadio","esige la regolarizzazione dei debiti verso i lavoratori"] },
  opciones:[
    { texto:"Collaborare e consegnare tutto", sub:"Ordine e denaro", msg:"Hai consegnato tutto in tempo e forma: la lega ha apprezzato." },
    { texto:"Consegnare solo il necessario", sub:"Meno lavoro, qualche rischio", ok:{ msg:"La lega ha accettato quanto consegnato e tutto è passato senza scossoni." }, mal:{ msg:"La lega ha chiesto di più, ha dato una multa e la stampa l'ha raccontato." } },
    { texto:"Ingaggiare uno studio esterno", sub:"Costoso, ma mette ordine", msg:"Lo studio ha messo in ordine i conti: caro, ma pulito." },
  ] },

'est_cie_proyecto': { titulo:"Pianificare l'anno che viene", contexto:"A fine anno il consiglio vuole sapere {PREGUNTA}. Bisogna presentare un piano.",
  variables:{ PREGUNTA:["qual è il progetto sportivo","come si finanzia il prossimo semestre","che cosa si farà con il settore giovanile","se si punta sui rinforzi o sul vivaio"] },
  opciones:[
    { texto:"Puntare forte sui rinforzi", sub:"Risultati rapidi, rischio finanziario", msg:"Hai annunciato una puntata forte: i soci si sono entusiasmati." },
    { texto:"Puntare sul vivaio", sub:"Progetto lungo, meno spesa", msg:"Hai puntato sul vivaio: i più giovani sorridono, gli impazienti no." },
    { texto:"Risparmiare e stabilizzare", sub:"Prudenza finanziaria", msg:"Hai annunciato un piano di risparmio: conti tranquilli, poco entusiasmo." },
  ] },

/* ===== DERBY ===== */
'cla_semana': { titulo:"Settimana del derby contro {RIVAL}", contexto:"La città è divisa e {AMBIENTE}. Tutti aspettano un tuo gesto prima della partita.",
  variables:{ AMBIENTE:["gli sfottò arrivano fino al lavoro","i bambini vanno a scuola con la maglia","i bar sono pieni di pronostici","la stampa non parla d'altro"] },
  opciones:[
    { texto:"Ritiro per la rosa per tutto il weekend", sub:"Concentrazione totale, morale basso", msg:"Hai messo la rosa in ritiro: la squadra è arrivata concentrata, anche se con voglia di uscire." },
    { texto:"Chiamare i tifosi a incitare la squadra", sub:"Clima di festa, qualche rischio di eccessi", msg:"I tifosi hanno risposto con una grande mobilitazione di sostegno." },
    { texto:"Provocare il rivale sulla stampa", sub:"Accendi la miccia, tutto o niente", ok:{ msg:"Le tue dichiarazioni hanno acceso la miccia e la squadra è scesa in campo con furia." }, mal:{ msg:"Le tue dichiarazioni ti si sono ritorte contro e il rivale le ha usate per motivarsi." } },
  ] },

'cla_barras': { titulo:"Minacce prima del derby", contexto:"Prima del derby contro {RIVAL}, un settore della tifoseria minaccia di {AMENAZA}. La sicurezza chiede una decisione.",
  variables:{ AMENAZA:["non entrare se non gli consegnano gli striscioni","organizzare un raduno non autorizzato","prendersi il settore ospiti","far mancare il sostegno se non arrivano rinforzi"] },
  opciones:[
    { texto:"Dialogare e trovare un accordo", sub:"Calma con un costo", msg:"Hai dialogato con i capi della curva e la situazione si è calmata." },
    { texto:"Chiedere rinforzi alle forze dell'ordine", sub:"Ordine con cattiva immagine", msg:"I rinforzi hanno garantito l'ordine, anche se l'immagine del club ne ha risentito." },
    { texto:"Ignorare le minacce", sub:"Se non succede nulla hai vinto; se succede, si complica", ok:{ msg:"Le minacce sono rimaste tali e il derby si è giocato in pace." }, mal:{ msg:"Ci sono stati incidenti nel derby e il club ha ricevuto una sanzione." } },
  ] },

'cla_prensa': { titulo:"La stampa infiamma il derby", contexto:"La stampa prepara una trasmissione speciale sul derby con {TITULAR_PRENSA}. Vogliono la tua voce.",
  variables:{ TITULAR_PRENSA:["frasi pepate del rivale","un ripasso della rivalità storica","dubbi sulla tua rosa","il rivale dato per favorito"] },
  opciones:[
    { texto:"Parlare con calma", sub:"Immagine solida, poco show", msg:"Hai parlato con calma e hai rafforzato la tua immagine istituzionale." },
    { texto:"Rispondere con forza", sub:"Segni il territorio, può costare caro", ok:{ msg:"Le tue risposte sono diventate virali e i tifosi ti hanno applaudito in piedi." }, mal:{ msg:"Le tue risposte sono state fraintese e la stampa ti ha criticato." } },
    { texto:"Non rilasciare interviste", sub:"Eviti rischi, perdi protagonismo", msg:"Non hai rilasciato interviste: altri hanno occupato lo spazio e la stampa te lo ha rimproverato." },
  ] },

'cla_arbitro': { titulo:"Terna arbitrale controversa per il derby", contexto:"È stata designata una terna arbitrale per il derby contro {RIVAL} e {POLEMICA}. C'è pressione per reagire.",
  variables:{ POLEMICA:["uno degli arbitri ha un precedente con il tuo club","la tifoseria rivale esulta","la designazione è arrivata tardi","ci sono dubbi su un legame pregresso"] },
  opciones:[
    { texto:"Chiedere formalmente il cambio", sub:"Reclamo istituzionale, rumore politico", msg:"Hai presentato la richiesta: la lega l'ha respinta, ma ne è rimasta traccia." },
    { texto:"Accettare la designazione", sub:"Prudenza e fiducia", msg:"Hai accettato e hai evitato un fronte inutile: il derby si è giocato con calma." },
    { texto:"Far filtrare la polemica alla stampa", sub:"Pressione mediatica, rischio di sanzione", ok:{ msg:"La pressione ha funzionato: la lega ha curato la designazione." }, mal:{ msg:"La lega l'ha vista come una manovra e hai ricevuto un richiamo pubblico." } },
  ] },

'cla_v_revancha': { titulo:"Rivincita contro {RIVAL}", contexto:"Arriva la rivincita contro {RIVAL}, {ANTECEDENTE}. I tifosi vogliono sentire che si può.",
  variables:{ ANTECEDENTE:["con tutto in palio in classifica","con la stampa divisa","con la voglia di chiudere un conto in sospeso","con entrambe le squadre che chiedono rispetto"] },
  opciones:[
    { texto:"Partire per vincere dal primo minuto", sub:"Coraggio, tutto o niente", ok:{ msg:"La squadra è partita ad azzannare e ha portato a casa un derby memorabile." }, mal:{ msg:"La squadra si è disunita e il rivale l'ha punita con nettezza." } },
    { texto:"Partita chiusa e di contropiede", sub:"Calcolo prima dell'epica", msg:"Una partita chiusa: né gloria né dramma, ma si è fatto punti." },
    { texto:"Promettere un premio speciale", sub:"Motivazione con costo", msg:"Hai promesso un premio: la squadra è scesa in campo con un'altra faccia e la cassa se n'è accorta." },
  ] },

'cla_v_entradas': { titulo:"Il prezzo dei biglietti del derby", contexto:"Per la rivincita contro {RIVAL} c'è {DEMANDA}. Bisogna fissare il prezzo e la distribuzione.",
  variables:{ DEMANDA:["una domanda tripla rispetto alla capienza","bagarinaggio clandestino davanti ai cancelli","una lista d'attesa di soci","una pioggia di richieste di biglietti omaggio"] },
  opciones:[
    { texto:"Prezzo popolare", sub:"La gente ringrazia, la cassa no", msg:"Hai mantenuto il prezzo popolare: i tifosi ti hanno ringraziato con gli applausi." },
    { texto:"Prezzo da derby", sub:"Più cassa, meno simpatia", msg:"Hai fatto pagare il prezzo da derby: hai riempito la cassa e ricevuto critiche sui social." },
    { texto:"Sorteggio tra i soci", sub:"Giusto, ma genera proteste", ok:{ msg:"Il sorteggio è stato trasparente e tutti l'hanno apprezzato." }, mal:{ msg:"Il sorteggio ha sollevato dubbi e diversi soci hanno protestato." } },
  ] },

'cla_v_homenaje': { titulo:"Omaggio alle glorie del club", contexto:"Prima della rivincita contro {RIVAL} si propone un omaggio {GLORIAS}. È emozionante, ma si mangia tempo di preparazione.",
  variables:{ GLORIAS:["ai campioni di un decennio d'oro","a un idolo storico scomparso da poco","alla squadra della promozione","ai fondatori del club"] },
  opciones:[
    { texto:"Farlo prima della partita", sub:"Emozione garantita, un po' di distrazione", msg:"L'omaggio ha commosso tutto lo stadio; la rosa è entrata in campo un po' distratta." },
    { texto:"Farlo dopo", sub:"Senza distrazioni, meno clima", msg:"L'omaggio si è fatto alla fine e la squadra non ha perso la concentrazione." },
    { texto:"Rimandarlo a un'altra data", sub:"Eviti rischi, perdi un'occasione", msg:"Hai rimandato l'omaggio: qualcuno ha capito, altri si sono offesi." },
  ] },

/* ===== PER PAESE: SUDAMERICA / IBERICO ===== */
'pais_sa_barrio': { titulo:"Le scuole calcio del quartiere chiedono il campo", contexto:"Le scuole calcio giovanili {ZONA} chiedono di usare il campo ausiliario {FRECUENCIA}. I genitori hanno già raccolto le firme.",
  variables:{ ZONA:["della zona sud","del quartiere vicino","della periferia","del paese accanto"], FRECUENCIA:["ogni sabato","due volte a settimana","durante le vacanze invernali"] },
  opciones:[
    { texto:"Aprire loro il campo gratis", sub:"Vivaio e affetto, campo che si consuma", msg:"Hai aperto il campo: i bambini sono felici e il custode del terreno molto meno." },
    { texto:"Chiedere un affitto simbolico", sub:"Ci guadagnano tutti un po'", msg:"Hai messo un affitto simbolico: le famiglie hanno accettato e la cassa ci ha guadagnato." },
    { texto:"Dire di no per le condizioni del campo", sub:"Proteggi il prato, perdi simpatia", msg:"Hai detto di no: il prato è intatto, ma il quartiere non te lo perdona." },
  ] },

'pais_sa_altura': { titulo:"Partita a più di {METROS} metri di altitudine", contexto:"La prossima giornata si gioca in una città in alta quota. Lo staff tecnico propone {PLAN}.",
  variables:{ METROS:["2.600","3.000","3.600"], PLAN:["di arrivare con una settimana di anticipo","di arrivare il giorno prima e fidarsi del fisico","di aggiungere un lavoro di adattamento in camera ipobarica"] },
  opciones:[
    { texto:"Viaggiare con una settimana di anticipo", sub:"Migliore adattamento, più spesa", msg:"Sono arrivati presto e la squadra si è adattata bene all'altitudine." },
    { texto:"Viaggiare il giorno prima", sub:"Risparmio, sofferenza fisica", msg:"Sono arrivati all'ultimo e la squadra ha sofferto il ritmo nel secondo tempo." },
    { texto:"Ingaggiare l'adattamento in camera speciale", sub:"Costoso, l'effetto non è garantito", ok:{ msg:"La preparazione speciale ha funzionato: la squadra correva come se niente fosse." }, mal:{ msg:"L'investimento non ha dato i frutti sperati e la spesa è rimasta in aria." } },
  ] },

'pais_sa_rutas': { titulo:"Viaggio lunghissimo su strada", contexto:"La prossima trasferta comporta {VIAJE}. Bisogna decidere il trasporto della rosa.",
  variables:{ VIAJE:["un viaggio di 18 ore in pullman","un volo con uno scalo lungo","un percorso su strade in cattivo stato"] },
  opciones:[
    { texto:"Noleggiare un pullman con i letti", sub:"Comodità, spesa forte", msg:"La rosa ha viaggiato comoda ed è arrivata riposata." },
    { texto:"Viaggiare con il pullman del club", sub:"Risparmio, stanchezza", msg:"La rosa ha viaggiato stanca e si nota nel primo tempo." },
    { texto:"Chiedere al club ospitante una mano con il trasferimento", sub:"Cortesia in cambio di un favore", ok:{ msg:"Il club ospitante ha collaborato: hai risparmiato e ti sei fatto un amico." }, mal:{ msg:"Il club ospitante si è fatto desiderare e hai finito per pagare più del previsto." } },
  ] },

'pais_hi_patronal': { titulo:"La festa patronale cade nella settimana della partita", contexto:"Quest'anno la festa patronale coincide con {SITUACION}. La città vuole che il club partecipi.",
  variables:{ SITUACION:["la partita più importante della giornata","la presentazione di un rinforzo","l'anniversario del club","la settimana di allenamento chiave"] },
  opciones:[
    { texto:"Unirti alla festa", sub:"Immagine vicina, rosa dispersa", msg:"Hanno partecipato alla festa: il quartiere è felice e l'allenatore ha il muso lungo." },
    { texto:"Mandare una delegazione", sub:"Presenza senza distrarre", msg:"Hai mandato una delegazione: il club c'era senza trascurare il lavoro." },
    { texto:"Assentarti per la partita", sub:"Focus sullo sportivo", msg:"Hai saltato la festa: il quartiere se n'è accorto, ma la squadra era concentrata." },
  ] },

'pais_br_carnaval': { titulo:"Il carnevale cade nella settimana della partita", contexto:"Il carnevale cade proprio nella settimana di una partita importante e {SITUACION}.",
  variables:{ SITUACION:["diversi giocatori vogliono partecipare alle sfilate","una scuola di samba invita la rosa","l'intera città è in strada","la stampa chiede se la squadra andrà in ritiro"] },
  opciones:[
    { texto:"Mettere la rosa in ritiro", sub:"Focus totale, qualche malumore", msg:"Hai messo la rosa in ritiro: la squadra è arrivata concentrata, anche se con il muso lungo." },
    { texto:"Partecipare a una sfilata del club", sub:"Festa e immagine, rischio fisico", msg:"Il club ha sfilato e si è preso un applauso immenso sul viale." },
    { texto:"Lasciare libertà alla rosa", sub:"Fidarsi della maturità", ok:{ msg:"La rosa ha risposto con professionalità e si è goduta il carnevale senza eccessi." }, mal:{ msg:"Ci sono stati eccessi e la squadra è arrivata male alla partita." } },
  ] },

/* ===== PER PAESE: EUROPA ===== */
'pais_ec_invierno': { titulo:"Neve e nebbia prima della partita", contexto:"Con {CLIMA}, la partita della giornata si complica. La lega dice che {POSTURA}.",
  variables:{ CLIMA:["la neve","la nebbia fitta","il freddo polare","il ghiaccio per le strade"], POSTURA:["per ora non sospende","sta valutando di riprogrammare","lascia la decisione ai club"] },
  opciones:[
    { texto:"Chiedere il rinvio", sub:"Sicurezza, calendario stretto", msg:"Il rinvio è stato approvato, anche se il calendario è diventato scomodo." },
    { texto:"Giocare con riscaldamento e attenzione", sub:"Spesa per sistemare il campo", msg:"Si è giocato con il campo preparato: né lamentele né gloria." },
    { texto:"Giocare comunque e scommettere sul clima", sub:"Epica o infortuni", ok:{ msg:"La squadra si è adattata meglio dell'avversario: vittoria dal sapore epico." }, mal:{ msg:"Scivoloni, infortuni e un risultato che preferisci dimenticare." } },
  ] },

'pais_ec_ultras': { titulo:"La curva vuole una grande coreografia", contexto:"I gruppi ultras preparano una grande coreografia per {OCASION} e chiedono {PEDIDO}.",
  variables:{ OCASION:["la prossima partita in casa","il derby cittadino","l'anniversario del club"], PEDIDO:["il permesso di far entrare i materiali","uno spazio per prepararla","soldi per stoffe e vernice"] },
  opciones:[
    { texto:"Sostenere il progetto", sub:"Immagine spettacolare, qualche rischio", msg:"La coreografia è stata uno spettacolo e le telecamere l'hanno ripetuta per tutta la settimana." },
    { texto:"Approvarla con condizioni", sub:"Con controllo di sicurezza", msg:"Hai approvato con condizioni: la coreografia è riuscita, senza grandi sorprese." },
    { texto:"Rifiutare per sicurezza", sub:"Prudenza, tensione con la curva", msg:"Hai rifiutato la richiesta: la curva si è arrabbiata e sono arrivati i fischi." },
  ] },

'pais_ec_fairplay': { titulo:"La lega esige di sistemare i conti", contexto:"La lega avverte che il club deve {EXIGENCIA} o riceverà {SANCION}.",
  variables:{ EXIGENCIA:["ridurre il monte ingaggi","pareggiare entrate e uscite","presentare un piano di pagamenti","rafforzare il capitale"], SANCION:["una sanzione sportiva","una multa","restrizioni sul mercato"] },
  opciones:[
    { texto:"Tagliare subito le spese", sub:"Rispetti le regole, la rosa ne risente", msg:"Hai tagliato le spese: la lega è rimasta soddisfatta e lo spogliatoio un po' meno." },
    { texto:"Presentare un piano biennale", sub:"Guadagni tempo, la lega dubita", msg:"Hai presentato un piano biennale: la lega l'ha accettato con riserva." },
    { texto:"Chiedere una deroga", sub:"Può essere una grande mossa", ok:{ msg:"La lega ha accettato la deroga per questa volta: hai tirato un gran respiro." }, mal:{ msg:"La lega ha respinto la deroga e ha applicato la sanzione." } },
  ] },

'pais_ec_academia': { titulo:"Un'accademia d'élite vuole {JUGADOR}", contexto:"L'accademia di un grande club propone un accordo per {JUGADOR} ({JPOS}, {JEDAD} anni): {OFERTA}. Il giovane sogna di partire.",
  variables:{ OFERTA:["pagamento immediato e una percentuale futura","solo una percentuale futura","un prestito con diritto di riscatto"] },
  opciones:[
    { texto:"Accettare l'accordo", sub:"Soldi e prospettiva, addio alla promessa", msg:"{JUGADOR} è partito per l'accademia: il club ha incassato e la tribuna l'ha salutato." },
    { texto:"Rifiutare e tenere il giovane", sub:"Vivaio e orgoglio", msg:"Hai rifiutato e {JUGADOR} è rimasto: i tifosi lo ovazionano." },
    { texto:"Chiedere un'offerta migliore", sub:"Se funziona, un colpo perfetto", ok:{ msg:"L'accademia ha migliorato l'offerta: affare perfetto e promessa con un bel futuro." }, mal:{ msg:"L'accademia si è offesa e ha ritirato l'offerta: niente giovane e niente soldi." } },
  ] },

'pais_gb_copa': { titulo:"Sorteggio di coppa contro un club dilettante", contexto:"La coppa nazionale ti sorteggia contro un club dilettante di {LUGAR}. {PRESION}.",
  variables:{ LUGAR:["un paese di mare","una località mineraria","un quartiere operaio","un paesino con una chiesa a ogni angolo"], PRESION:["La stampa si aspetta una valanga di gol","L'avversario gioca come se fosse una finale","I tifosi locali hanno riempito le strade"] },
  opciones:[
    { texto:"Giocare con la squadra titolare", sub:"Rispetto, logorio", msg:"Sei sceso in campo con tutto e hai vinto senza soffrire troppo." },
    { texto:"Fare turnover e dare riposo", sub:"Si rischia l'eliminazione", msg:"Hai fatto turnover e la partita si è complicata più del previsto." },
    { texto:"Mandare in campo i giovani", sub:"Immagine da vivaio, rischio figuraccia", ok:{ msg:"I giovani hanno brillato e la stampa li ha messi in risalto: colpo a effetto." }, mal:{ msg:"I giovani si sono spaventati: figuraccia e critiche feroci." } },
  ] },

'pais_ee_receso': { titulo:"Pausa invernale lunghissima", contexto:"Il campionato si ferma per il freddo per {DURACION}. Lo staff tecnico propone {PLAN}.",
  variables:{ DURACION:["tre mesi","quasi quattro mesi","un intero inverno"], PLAN:["una tournée in un paese caldo","allenamenti in una palestra al chiuso","un torneo di preparazione locale"] },
  opciones:[
    { texto:"Fare la tournée al caldo", sub:"Spesa alta, preparazione ideale", msg:"La tournée al caldo ha mantenuto il ritmo della squadra." },
    { texto:"Allenarsi in palestra al chiuso", sub:"Risparmio, ritmo basso", msg:"Si sono allenati al coperto: la squadra è tornata un po' fuori forma." },
    { texto:"Organizzare un torneo locale tra club", sub:"Economico e divertente, se riesce", ok:{ msg:"Il torneo locale è stato un successo e ha tenuto la squadra in ritmo." }, mal:{ msg:"Il torneo è stato organizzato male ed è finito in un disastro logistico." } },
  ] },

'pais_ee_estadio': { titulo:"Lo stadio comunale va condiviso", contexto:"Il comune vuole che {OTRO} condivida lo stadio del club. Dice che è per {RAZON}.",
  variables:{ OTRO:["una squadra di rugby","un club di seconda categoria","una federazione di atletica"], RAZON:["sfruttare meglio l'investimento pubblico","abbassare i costi di manutenzione","portare più attività nel quartiere"] },
  opciones:[
    { texto:"Accettare l'uso condiviso", sub:"Entrate, meno esclusività", msg:"Hai accettato di condividere lo stadio: sono entrati soldi, ma il prato ne risente." },
    { texto:"Trattare orari esclusivi", sub:"Equilibrio, più burocrazia", msg:"Hai trattato gli orari e il comune è rimasto soddisfatto." },
    { texto:"Rifiutare la richiesta", sub:"Orgoglio, scontro politico", msg:"Hai rifiutato: il club si sente padrone di casa sua, ma il comune storce il naso." },
  ] },

'pais_ee_mecenas': { titulo:"Un mecenate locale offre di finanziare il club", contexto:"Un imprenditore della regione offre di {OFERTA} in cambio {CONDICION}.",
  variables:{ OFERTA:["pagare gli stipendi di sei mesi","costruire una nuova tribuna","finanziare il settore giovanile"], CONDICION:["di un posto nel consiglio direttivo","del nome sullo stadio","di voce in capitolo sugli acquisti"] },
  opciones:[
    { texto:"Accettare senza condizioni", sub:"Soldi subito, influenza altrui", msg:"Hai accettato l'offerta: il club respira, ma il mecenate già telefona all'allenatore." },
    { texto:"Accettare con limiti scritti", sub:"Più lento, più sicuro", msg:"Hai messo dei limiti per iscritto: il mecenate ha accettato di malavoglia." },
    { texto:"Rifiutare per restare indipendenti", sub:"Orgoglio, cassa vuota", msg:"Hai rifiutato: la tifoseria ha festeggiato l'indipendenza, la tesoreria no." },
  ] },

/* ===== PER PAESE: MONDO ARABO / NORD AFRICA ===== */
'pais_me_ayuno': { titulo:"Il mese di digiuno cambia gli orari", contexto:"Durante il mese di digiuno, {SITUACION}. Bisogna riorganizzare allenamenti e partite.",
  variables:{ SITUACION:["molti giocatori si allenano a digiuno","le partite si giocano a tarda notte","la rosa chiede di adeguare i carichi","la lega cambia il calendario"] },
  opciones:[
    { texto:"Allenarsi di notte", sub:"Rispetti la tradizione, cambia la routine", msg:"Hai spostato gli allenamenti alla sera: la rosa ha apprezzato molto." },
    { texto:"Ridurre il carico fisico", sub:"Cura della rosa, meno ritmo", msg:"Hai ridotto il carico: la rosa è arrivata integra ma un po' fiacca." },
    { texto:"Mantenere il piano abituale", sub:"Efficienza, logorio", msg:"Hai mantenuto il piano abituale: ci sono state lamentele e qualche calo di rendimento." },
  ] },

'pais_me_calor': { titulo:"Caldo estremo nella partita del pomeriggio", contexto:"Le previsioni indicano {TEMP} per la partita del pomeriggio. L'arbitro dice che {POSTURA}.",
  variables:{ TEMP:["più di 42 gradi","una temperatura percepita insopportabile","un'ondata di caldo di diversi giorni"], POSTURA:["ci saranno pause per idratarsi","si potrebbe riprogrammare","la decisione spetta ai club"] },
  opciones:[
    { texto:"Chiedere di giocare di sera", sub:"Sicurezza, protesta della lega", msg:"Sei riuscito a spostare la partita alla sera: la squadra ha reso molto meglio." },
    { texto:"Giocare con idratazione e rotazioni", sub:"Spesa, rischio moderato", msg:"Si è giocato con le pause per l'idratazione e tutto si è risolto senza problemi." },
    { texto:"Giocare senza modifiche", sub:"Epica o disastro fisico", ok:{ msg:"La squadra ha retto il caldo meglio degli altri: vittoria eroica." }, mal:{ msg:"Ci sono stati svenimenti e una partita da dimenticare." } },
  ] },

'pais_me_familias': { titulo:"Più famiglie in tribuna", contexto:"I soci chiedono di creare {ESPACIO} per andare con {QUIENES}. Bisogna adeguare la sicurezza.",
  variables:{ ESPACIO:["un settore famiglie","un settore con giochi per bambini","una tribuna con ombra"], QUIENES:["i bambini","tutta la famiglia","le nonne"] },
  opciones:[
    { texto:"Costruirlo subito", sub:"Più pubblico, più spesa", msg:"Il settore famiglie si è riempito fin dalla prima partita." },
    { texto:"Riservare una parte esistente", sub:"Rapido ed economico", msg:"Hai riservato una parte: la risposta delle famiglie è stata positiva." },
    { texto:"Rimandarlo", sub:"Risparmio, frustrazione", msg:"Hai rimandato il progetto: le famiglie aspettano con pazienza limitata." },
  ] },

/* ===== PER PAESE: AFRICA SUBSAHARIANA ===== */
'pais_af_viaje': { titulo:"Lunghi viaggi tra le città", contexto:"Il calendario prevede una trasferta impegnativa: {DISTANCIA}. {NOTA}.",
  variables:{ DISTANCIA:["1.500 chilometri","più di 20 ore su strada","un volo con due scali"], NOTA:["I soldi non bastano per tutto","L'allenatore è preoccupato per la stanchezza","La rosa vuole viaggiare in aereo"] },
  opciones:[
    { texto:"Noleggiare un volo", sub:"Rapido, spesa alta", msg:"La rosa è arrivata fresca e la squadra ne ha approfittato." },
    { texto:"Viaggiare su strada con delle pause", sub:"Risparmio, stanchezza", msg:"Hanno viaggiato su strada: sono arrivati stanchi ma in tempo." },
    { texto:"Cercare uno sponsor per il viaggio", sub:"Se va in porto, perfetto", ok:{ msg:"Lo sponsor ha pagato il viaggio e in più è finito sui giornali." }, mal:{ msg:"Lo sponsor si è tirato indietro all'ultimo e hai dovuto improvvisare." } },
  ] },

'pais_af_cesped': { titulo:"Il campo è in cattivo stato", contexto:"Il manto erboso dello stadio ha {PROBLEMA}. L'allenatore dice che così non si può giocare bene.",
  variables:{ PROBLEMA:["buche e zone pelate","troppo fango","gravi irregolarità","un'irrigazione carente"] },
  opciones:[
    { texto:"Investire in un campo nuovo", sub:"Caro ma definitivo", msg:"Hai rifatto il campo e la squadra gioca molto meglio." },
    { texto:"Interventi parziali", sub:"Rapido ed economico", msg:"Gli interventi parziali hanno aiutato, ma non hanno risolto tutto." },
    { texto:"Adattare il gioco al campo", sub:"Nessuna spesa, meno calcio", msg:"Hanno adattato il gioco al campo: poco spettacolare, ma senza spendere." },
  ] },

'pais_af_lluvias': { titulo:"La stagione delle piogge complica tutto", contexto:"Le piogge {EFECTO} e il calendario non perdona.",
  variables:{ EFECTO:["allagano le strade di accesso","rendono il campo impraticabile","ritardano le squadre ospiti","interrompono l'energia elettrica"] },
  opciones:[
    { texto:"Riprogrammare la partita", sub:"Sicurezza, calendario complicato", msg:"Hai riprogrammato la partita: nessuno si è bagnato, il calendario sì che si è complicato." },
    { texto:"Attivare un drenaggio di emergenza", sub:"Spesa, gioco regolare", msg:"Il drenaggio di emergenza ha funzionato e la partita si è giocata senza ritardi." },
    { texto:"Giocare comunque nel fango", sub:"Epica o infortuni", ok:{ msg:"La partita nel fango è stata una battaglia eroica che hai vinto." }, mal:{ msg:"La partita nel fango è stata un disastro." } },
  ] },

'pais_af_ojeadores': { titulo:"Osservatori stranieri seguono {JUGADOR}", contexto:"Osservatori di campionati europei seguono {JUGADOR} ({JPOS}, {JEDAD} anni). Un procuratore vuole {PROPUESTA}.",
  variables:{ PROPUESTA:["un provino immediato all'estero","un contratto con clausola di uscita","un viaggio in Europa durante le vacanze"] },
  opciones:[
    { texto:"Accettare il provino", sub:"Opportunità per lui, rischio per te", msg:"{JUGADOR} è partito per provarsi e il club ha ricevuto un indennizzo." },
    { texto:"Chiedergli di aspettare una stagione", sub:"Stabilità, lui si frustra", msg:"{JUGADOR} è rimasto una stagione in più e ha reso in campo." },
    { texto:"Chiudere un accordo con il club interessato", sub:"Affare perfetto o rottura", ok:{ msg:"L'accordo è stato chiuso e il club ha ricevuto una bella somma." }, mal:{ msg:"L'accordo è saltato e {JUGADOR} è rimasto contrariato." } },
  ] },

'pais_af_radio': { titulo:"La radio comunitaria trasmette tutte le partite", contexto:"Una radio comunitaria {ZONA} trasmette tutte le partite del club e chiede {PEDIDO}.",
  variables:{ ZONA:["della regione","del tuo quartiere","del paese vicino"], PEDIDO:["un'intervista settimanale","l'accesso allo spogliatoio","aiuto per il trasmettitore"] },
  opciones:[
    { texto:"Dare loro pieno accesso", sub:"Tifoseria coinvolta, meno privacy", msg:"La radio è diventata la voce del club e la gente ha apprezzato." },
    { texto:"Concedere un'intervista settimanale", sub:"Equilibrio semplice", msg:"Hai fissato un'intervista settimanale: tutti contenti." },
    { texto:"Rifiutare per mancanza di tempo", sub:"Eviti distrazioni, perdi affetto", msg:"Hai rifiutato: la radio ha continuato a trasmettere, ma senza la tua simpatia." },
  ] },

/* ===== PER PAESE: ASIA ===== */
'pais_ao_datos': { titulo:"Analisi dei dati e app per i tifosi", contexto:"Un'azienda tecnologica offre {SERVICIO}. Vuole in cambio {CONTRAPARTIDA}.",
  variables:{ SERVICIO:["un sistema di analisi dei dati della rosa","un'app ufficiale per i tifosi","telecamere e statistiche avanzate"], CONTRAPARTIDA:["l'accesso ai dati dei tifosi","pubblicità nello stadio","l'esclusiva per tre anni"] },
  opciones:[
    { texto:"Accettare l'accordo completo", sub:"Modernità, dipendenza", msg:"L'accordo ha modernizzato il club e migliorato il lavoro dello staff tecnico." },
    { texto:"Chiedere modifiche alle condizioni", sub:"Più lento, più sicuro", msg:"Hai chiesto modifiche: l'accordo è uscito più equo." },
    { texto:"Rifiutare per la privacy", sub:"Prudenza, meno risorse", msg:"Hai rifiutato l'accordo per proteggere i dati dei tifosi." },
  ] },

'pais_ao_cantos': { titulo:"La tifoseria organizza coreografie", contexto:"I gruppi di tifosi preparano {COREO} per la prossima partita e chiedono {PEDIDO}.",
  variables:{ COREO:["una coreografia a mosaico","cori sincronizzati di tutto lo stadio","un'esibizione di bandiere"], PEDIDO:["di provare allo stadio","un intero settore","il permesso di filmare"] },
  opciones:[
    { texto:"Sostenerli al massimo", sub:"Grande immagine, spesa", msg:"La coreografia è stata un successo ed è girata su tutti i social." },
    { texto:"Permettere le prove", sub:"Sostegno moderato", msg:"Le prove si sono fatte e il risultato è stato curato." },
    { texto:"Chiedere di semplificare", sub:"Meno rischi, meno magia", msg:"Hai chiesto di semplificare: la coreografia è venuta più modesta." },
  ] },

'pais_as_otro_deporte': { titulo:"Il pubblico se ne va con un altro sport", contexto:"Un altro sport molto popolare compete per gli stessi orari e {PROBLEMA}. I soci vogliono una risposta.",
  variables:{ PROBLEMA:["si è preso buona parte del pubblico","monopolizza la stampa","ha più sponsor","ha più star"] },
  opciones:[
    { texto:"Cambiare l'orario delle partite", sub:"Eviti la concorrenza, aggiustamento logistico", msg:"Hai spostato gli orari: il pubblico è tornato in tribuna." },
    { texto:"Lanciare una campagna soci", sub:"Spesa, buon riscontro", msg:"La campagna soci ha avuto una buona risposta." },
    { texto:"Accettare la concorrenza", sub:"Calma, rassegnazione", msg:"Hai accettato che c'è concorrenza: non ci sono stati cambiamenti." },
  ] },

'pais_as_monzon': { titulo:"Il monsone mette in dubbio la partita", contexto:"Le piogge del monsone {EFECTO}. La lega dice che {POSTURA}.",
  variables:{ EFECTO:["allagano i dintorni dello stadio","lasciano il campo pieno d'acqua","colpiscono i trasporti pubblici"], POSTURA:["si gioca salvo emergenze","si decide il giorno della partita","si valuta con i club"] },
  opciones:[
    { texto:"Chiedere di riprogrammare", sub:"Sicurezza, calendario", msg:"Sei riuscito a riprogrammare la partita: i tifosi sono arrivati comodi." },
    { texto:"Investire in un drenaggio d'urgenza", sub:"Spesa e continuità", msg:"Il drenaggio ha permesso di giocare regolarmente." },
    { texto:"Giocare comunque", sub:"Epica o caos", ok:{ msg:"La partita sotto la pioggia è stata una festa." }, mal:{ msg:"La partita è stata un caos, con infortuni e proteste." } },
  ] },

'pais_sea_calor': { titulo:"Caldo e umidità a mezzogiorno", contexto:"La partita si giocherà a mezzogiorno con {CONDICION}. Lo staff tecnico propone {PLAN}.",
  variables:{ CONDICION:["caldo e umidità estremi","una temperatura percepita altissima","un'umidità del 90%"], PLAN:["un cambio di sistema di gioco","più rotazioni","idratazione e giubbotti refrigeranti"] },
  opciones:[
    { texto:"Chiedere di spostare la partita al pomeriggio", sub:"Clima migliore, protesta della TV", msg:"Sei riuscito a spostare la partita al pomeriggio: la squadra ha reso molto meglio." },
    { texto:"Adattare il piano con giubbotti e rotazioni", sub:"Spesa controllata", msg:"Il piano di idratazione ha funzionato e ha evitato il logorio." },
    { texto:"Giocare con il piano abituale", sub:"Risparmio, esaurimento", msg:"La squadra si è esaurita nel secondo tempo." },
  ] },

/* ===== PER PAESE: NORDAMERICA / CARAIBI ===== */
'pais_na_distancias': { titulo:"I voli del calendario si mangiano il budget", contexto:"Il calendario prevede {VIAJES} e la cassa lo sente già.",
  variables:{ VIAJES:["tre lunghe trasferte in un mese","un volo da una costa all'altra del continente","trasferte con cambi di fuso orario"] },
  opciones:[
    { texto:"Noleggiare voli diretti", sub:"Comodità, spesa", msg:"Hanno viaggiato comodi e la squadra ha reso." },
    { texto:"Viaggiare su voli di linea con scali", sub:"Risparmio, stanchezza", msg:"Hanno viaggiato con gli scali: sono arrivati stanchi ma hai risparmiato." },
    { texto:"Chiedere alla lega di raggruppare le trasferte", sub:"Se va, grande risparmio", ok:{ msg:"La lega ha accettato di raggruppare i viaggi: risparmio e riposo." }, mal:{ msg:"La lega ha respinto la richiesta e ti sei tenuto i voli costosi." } },
  ] },

'pais_na_becas': { titulo:"Un'università vuole {JUGADOR}", contexto:"Un'università offre una borsa di studio completa a {JUGADOR} ({JPOS}, {JEDAD} anni) con {CONDICION}. La sua famiglia è divisa.",
  variables:{ CONDICION:["un programma sportivo di primo livello","studi gratuiti","un buon staff tecnico"] },
  opciones:[
    { texto:"Sostenere la borsa di studio", sub:"Formazione e studi, addio alla promessa", msg:"{JUGADOR} ha accettato la borsa: il club ha ricevuto un indennizzo e buona stampa." },
    { texto:"Chiedergli di firmare con il club", sub:"Trattieni il giovane, perdi i suoi studi", msg:"{JUGADOR} è rimasto nel club: rende, anche se la famiglia non è del tutto felice." },
    { texto:"Preparare un accordo di prestito", sub:"Equilibrio tra i due mondi", msg:"L'accordo di prestito permette a {JUGADOR} di studiare e giocare." },
  ] },

'pais_ca_huracan': { titulo:"Stagione degli uragani", contexto:"Un uragano {AMENAZA}. Il club deve decidere come proteggere stadio e rosa.",
  variables:{ AMENAZA:["si avvicina all'isola","minaccia la costa","lascia la regione in allerta rossa"] },
  opciones:[
    { texto:"Sospendere le attività e proteggere lo stadio", sub:"Sicurezza, calendario", msg:"Hai protetto lo stadio e la rosa: nessun danno grave." },
    { texto:"Allenarsi al coperto e aspettare", sub:"Normalità protetta", msg:"Si sono allenati al coperto mentre passava il maltempo." },
    { texto:"Giocare la partita a porte chiuse", sub:"Rischio, occasione di andare avanti", ok:{ msg:"Hanno giocato a porte chiuse e la trasmissione è stata un successo." }, mal:{ msg:"La partita ha avuto problemi di sicurezza e danni." } },
  ] },

'pais_na_inversor': { titulo:"Un investitore propone di trasformare la partita in uno spettacolo", contexto:"Un investitore propone di aggiungere {SHOW} alla partita in casa in cambio {COMPENSACION}.",
  variables:{ SHOW:["musica dal vivo e show all'intervallo","attività per bambini e cibo","maxischermi e concorsi"], COMPENSACION:["di una percentuale dell'incasso","di pubblicità a bordo campo","della gestione del bar"] },
  opciones:[
    { texto:"Accettare il progetto", sub:"Più pubblico, meno tradizione", msg:"Le partite sono diventate uno spettacolo: lo stadio si è riempito." },
    { texto:"Provarlo in una partita", sub:"Prova senza rischi", msg:"La prova ha funzionato e ha regalato una bella sorpresa." },
    { texto:"Rifiutare per tradizione", sub:"Rispetti i vecchi tifosi", msg:"Hai rifiutato il progetto: i tifosi di sempre hanno festeggiato." },
  ] },

/* ===== PER PAESE: ANGLO / OCEANIA ===== */
'pais_an_pub': { titulo:"Il pub dei tifosi ha bisogno di lavori", contexto:"Il pub dove si ritrovano i tifosi di sempre {PROBLEMA}. Chiedono aiuto al club.",
  variables:{ PROBLEMA:["sta per chiudere","ha bisogno di una ristrutturazione","ha subito un incendio","ha perso la licenza"] },
  opciones:[
    { texto:"Aiutarli con dei soldi", sub:"Gesto forte, spesa", msg:"Hai aiutato con dei soldi e il pub si è riempito di gratitudine." },
    { texto:"Offrire uno spazio nello stadio", sub:"Idea intermedia", msg:"Gli hai dato uno spazio nello stadio: non tutti sono rimasti contenti." },
    { texto:"Dire che non c'è budget", sub:"Risparmio, rabbia", msg:"Hai detto che non c'è budget: i tifosi del pub si sono sentiti abbandonati." },
  ] },

'pais_oc_distancias': { titulo:"Viaggi interminabili tra città e isole", contexto:"Il calendario prevede {VIAJE} e i costi esplodono.",
  variables:{ VIAJE:["un volo di sei ore","un viaggio in traghetto e aereo","una tournée in più città","una traversata del mare"] },
  opciones:[
    { texto:"Noleggiare voli charter", sub:"Comodità, spesa forte", msg:"Il volo charter ha lasciato la rosa fresca." },
    { texto:"Viaggiare su voli di linea", sub:"Risparmio, stanchezza", msg:"Il viaggio sui voli di linea ha sfinito la rosa." },
    { texto:"Cercare un accordo con una compagnia aerea", sub:"Se va, grande vantaggio", ok:{ msg:"La compagnia ha accettato di sponsorizzare i viaggi: risparmio e pubblicità." }, mal:{ msg:"La compagnia si è fatta desiderare e l'accordo non c'è stato." } },
  ] },

'pais_an_navidad': { titulo:"Calendario fitto durante le feste", contexto:"Ci sono partite ravvicinate durante le feste di fine anno e {PROBLEMA}. La rosa chiede un po' di respiro.",
  variables:{ PROBLEMA:["i giocatori vogliono passare del tempo con la famiglia","il fisico non regge","l'allenatore vuole il ritiro","i tifosi si aspettano un regalo"] },
  opciones:[
    { texto:"Dare libero il giorno delle feste", sub:"Rosa contenta, ritmo spezzato", msg:"La rosa ha passato la festa a casa ed è tornata riconoscente." },
    { texto:"Mettere la rosa in ritiro", sub:"Concentrazione, tensione", msg:"Hai messo la rosa in ritiro: la squadra ha reso ma con il muso lungo." },
    { texto:"Organizzare una cena con le famiglie", sub:"Bel gesto, spesa", msg:"Hai organizzato una cena con le famiglie: lo spogliatoio ne è uscito rafforzato." },
  ] },

/* ===== PER PAESE: MISTI PER GEOGRAFIA ===== */
'pais_geo_pesca': { titulo:"La cooperativa di pescatori vuole sponsorizzare", contexto:"La cooperativa di pescatori {LUGAR} propone: {OFERTA}. Sono soldi locali con affetto regionale.",
  variables:{ LUGAR:["della costa","del porto vicino","del paese di pescatori"], OFERTA:["un contratto annuale per la maglia","il pagamento delle trasferte","una donazione per il settore giovanile"] },
  opciones:[
    { texto:"Accettare con orgoglio", sub:"Soldi locali, meno lustro", msg:"La cooperativa è diventata il volto del club: il paese si è riempito d'orgoglio." },
    { texto:"Chiedere un'offerta migliore a un grande marchio", sub:"Se va bene, più soldi", msg:"Hai aspettato un'offerta migliore, ma non è arrivato nulla." },
    { texto:"Accettare e chiedere l'esclusiva", sub:"Immagine, ma con rischio", ok:{ msg:"La cooperativa ha accettato l'esclusiva: buon affare." }, mal:{ msg:"La cooperativa si è offesa e ha ridotto il contributo." } },
  ] },

'pais_geo_montana': { titulo:"Strade di montagna e campi in pendenza", contexto:"Con {RUTA} da percorrere, {PROBLEMA}: la logistica della squadra si complica.",
  variables:{ RUTA:["strade di montagna","strade piene di curve","passi innevati"], PROBLEMA:["il campo avversario è in pendenza","è prevista neve lungo il percorso","il viaggio è lentissimo"] },
  opciones:[
    { texto:"Viaggiare il giorno prima", sub:"Sicurezza, spesa", msg:"Sono partiti un giorno prima e la squadra è arrivata riposata." },
    { texto:"Viaggiare di prima mattina", sub:"Risparmio, rischio", msg:"Sono partiti di prima mattina e sono arrivati giusti di tempo." },
    { texto:"Chiedere di cambiare sede", sub:"Complicato, se va migliora tutto", ok:{ msg:"La lega ha accettato di cambiare sede ed è stato un sollievo." }, mal:{ msg:"La lega ha respinto e sei rimasto con il piede sbagliato verso l'avversario." } },
  ] },

'pais_geo_isla': { titulo:"Voli cancellati tra le isole", contexto:"Il viaggio verso l'isola vicina si complica perché {PROBLEMA}.",
  variables:{ PROBLEMA:["i voli sono stati cancellati per il vento","il traghetto è in riparazione","c'è uno sciopero dei trasporti","la tempesta ha chiuso l'aeroporto"] },
  opciones:[
    { texto:"Noleggiare una barca privata", sub:"Costoso ma arrivi", msg:"Sono arrivati in barca privata: caro, ma in tempo." },
    { texto:"Chiedere il rinvio della partita", sub:"Prudenza, calendario complicato", msg:"La lega ha approvato il rinvio." },
    { texto:"Aspettare il prossimo volo", sub:"Se arriva, risparmi", ok:{ msg:"Il volo è partito in orario e tutto si è risolto." }, mal:{ msg:"Il volo non è partito e hanno perso la partita a tavolino." } },
  ] },

'pais_geo_arena': { titulo:"Tempesta di sabbia allo stadio", contexto:"Una tempesta di sabbia {EFECTO}. C'è partita tra poche ore.",
  variables:{ EFECTO:["copre il campo e le tribune","mette in dubbio la visibilità","lascia lo stadio senza energia","ostacola il viaggio dell'avversario"] },
  opciones:[
    { texto:"Pulire il campo e giocare", sub:"Spesa, normalità", msg:"Il campo è tornato pronto e la partita si è giocata regolarmente." },
    { texto:"Chiedere il rinvio", sub:"Sicurezza, calendario", msg:"La partita è stata rinviata per sicurezza." },
    { texto:"Giocare nelle condizioni attuali", sub:"Epica o disastro", ok:{ msg:"La squadra ha sfruttato le condizioni e ha vinto con epica." }, mal:{ msg:"La visibilità è stata un disastro e la partita una figuraccia." } },
  ] },

'pais_geo_artico': { titulo:"Notte polare e campo coperto", contexto:"Con {SITUACION}, la squadra deve allenarsi in condizioni difficili.",
  variables:{ SITUACION:["la notte polare quasi permanente","temperature molto basse","una cupola coperta e un orario complicato","un ritmo di luce molto diverso"] },
  opciones:[
    { texto:"Affittare una cupola coperta", sub:"Costoso, senza sorprese", msg:"Si sono allenati nella cupola coperta e il rendimento è migliorato." },
    { texto:"Allenarsi all'aperto", sub:"Risparmio, rischio", msg:"Allenarsi all'aperto ha lasciato stanchezza e qualche infortunio." },
    { texto:"Adattare gli orari alle ore di luce", sub:"Soluzione semplice", msg:"Hanno adattato gli orari e la rosa ha risposto bene." },
  ] },

});

/* ===== Parte 2: personaggi ricorrenti e catene ===== */
EVENTOS_I18N.it = Object.assign(EVENTOS_I18N.it || {}, {

'per_pe_entrevista': { titulo:"{PERIODISTA} chiede un'intervista esclusiva", contexto:"{PERIODISTA} vuole un'intervista {FORMATO}. È un giornalista che conosce bene {CLUB}, ma non sempre è gentile.",
  variables:{ FORMATO:["di un'ora nel suo programma","sul campo di allenamento","a tu per tu nel tuo ufficio","scritta e senza domande concordate"] },
  opciones:[
    { texto:"Accettare l'intervista", sub:"Buona stampa, rischio di frasi travisate", msg:"L'intervista con {PERIODISTA} è andata liscia e ha migliorato la tua immagine." },
    { texto:"Accettare con domande concordate", sub:"A {PERIODISTA} non piacerà", ok:{ msg:"{PERIODISTA} ha accettato le condizioni e l'intervista è uscita ordinata." }, mal:{ msg:"{PERIODISTA} si è offeso e l'ha raccontato nel suo programma." } },
    { texto:"Declinare con gentilezza", sub:"Eviti rischi, perdi visibilità", msg:"Hai declinato l'intervista: {PERIODISTA} ha fatto un commento ironico." },
  ] },

'per_pe_filtracion': { titulo:"{PERIODISTA} pubblica una soffiata", contexto:"{PERIODISTA} ha pubblicato che {TEMA} e la notizia gira già su tutti i media. In sede c'è nervosismo.",
  variables:{ TEMA:["il club tratta un rinforzo","c'è tensione con l'allenatore","verrebbe venduto un giocatore chiave","la cassa è più in difficoltà di quanto si dica"] },
  opciones:[
    { texto:"Smentire con fermezza", sub:"Controllo del racconto, rischio di mentire", msg:"Hai smentito la notizia: {PERIODISTA} ha insistito, ma la questione si è raffreddata." },
    { texto:"Confermare in parte", sub:"Trasparenza con cautela", msg:"Hai confermato una parte e {PERIODISTA} l'ha riconosciuto nel suo programma." },
    { texto:"Indagare sulla talpa", sub:"Pugno duro, clima interno", msg:"Hanno indagato sulla fuga di notizie: nessuno ha confessato e il clima interno si è fatto pesante." },
  ] },

'per_pe_programa': { titulo:"{PERIODISTA} ti invita al suo programma", contexto:"{PERIODISTA} ti invita al suo programma {CONDICION}. È un'occasione per parlare, ma anche per sbagliare.",
  variables:{ CONDICION:["in diretta e con il pubblico","con altri dirigenti della zona","con tifosi che chiamano al telefono","con un ospite critico verso la tua gestione"] },
  opciones:[
    { texto:"Andare e parlare con chiarezza", sub:"Visibilità, rischio calcolato", msg:"Sei andato al programma e hai risposto con chiarezza: grande impatto." },
    { texto:"Andare e contrattaccare", sub:"Tutto o niente", ok:{ msg:"Il tuo contrattacco ha fatto centro: si è parlato di te tutta la settimana." }, mal:{ msg:"Il tuo contrattacco è andato male e {PERIODISTA} ne ha approfittato." } },
    { texto:"Non andare e mandare un portavoce", sub:"Niente rischi, niente lustro", msg:"Hai mandato un portavoce: niente lustro, niente conflitti." },
  ] },

'per_pe_critica': { titulo:"{PERIODISTA} critica la tua gestione", contexto:"{PERIODISTA} ha dedicato un editoriale a criticare {OBJETO}. I tifosi ne parlano e i soci ti guardano.",
  variables:{ OBJETO:["le tue ultime decisioni","la gestione della cassa","gli acquisti","la politica sportiva"] },
  opciones:[
    { texto:"Rispondere pubblicamente", sub:"Difendi la tua posizione, apri un fronte", msg:"Hai risposto a {PERIODISTA} con i dati: la discussione si è scaldata." },
    { texto:"Invitarlo al club a vedere tutto", sub:"Trasparenza, un po' di spesa", msg:"{PERIODISTA} ha visitato il club e ha smussato le sue critiche." },
    { texto:"Ignorarlo", sub:"Eviti la rissa, sembri assente", msg:"Hai ignorato l'editoriale: altri media l'hanno letto come un silenzio colpevole." },
  ] },

'per_hi_reunion': { titulo:"{HINCHA} chiede un incontro", contexto:"{HINCHA}, capo della tifoseria, chiede di incontrarti per parlare {TEMA}. Ha peso sugli spalti.",
  variables:{ TEMA:["dei prezzi dei biglietti","dei giocatori che non rendono","del trattamento dei soci","della politica dei rinforzi"] },
  opciones:[
    { texto:"Riceverlo e ascoltarlo", sub:"Vicinanza, aspettative", msg:"Hai ricevuto {HINCHA} ed è uscito soddisfatto dall'incontro." },
    { texto:"Riceverlo con il consiglio", sub:"Formale, con testimoni", msg:"L'incontro con il consiglio è stato ordinato, anche se freddo." },
    { texto:"Non riceverlo", sub:"Distanza, tensione", msg:"Non hai ricevuto {HINCHA}: la curva l'ha preso come uno sgarbo." },
  ] },

'per_hi_trapo': { titulo:"{HINCHA} vuole uno striscione gigante", contexto:"{HINCHA} e il suo gruppo vogliono esporre uno striscione gigante con {MENSAJE}. Chiedono permesso e spazio nello stadio.",
  variables:{ MENSAJE:["un messaggio di incoraggiamento alla squadra","il nome del quartiere","un omaggio a un idolo","uno slogan contro la dirigenza"] },
  opciones:[
    { texto:"Dare il permesso volentieri", sub:"La curva ringrazia, rischio di messaggi", msg:"Lo striscione è stato srotolato e la curva ha vibrato." },
    { texto:"Chiedere di vedere il disegno prima", sub:"Controllo, un po' di rabbia", msg:"Hai controllato il disegno: {HINCHA} ha accettato con aria seccata." },
    { texto:"Negare il permesso", sub:"Controllo totale, inimicizia", msg:"Hai negato il permesso: {HINCHA} se n'è andato con la rabbia in corpo." },
  ] },

'per_hi_caravana': { titulo:"{HINCHA} organizza una carovana", contexto:"{HINCHA} sta organizzando una carovana di tifosi {DESTINO}. Chiede {AYUDA} al club.",
  variables:{ DESTINO:["per la partita in trasferta","verso l'aeroporto per salutare la rosa","verso la sede del club","per la partita di coppa"], AYUDA:["dei pullman","soldi per le bandiere","il permesso di muoversi con la rosa","una scorta"] },
  opciones:[
    { texto:"Collaborare in tutto", sub:"Grande immagine, spesa alta", msg:"La carovana è stata una festa e {HINCHA} ti ha ringraziato pubblicamente." },
    { texto:"Appoggiare senza soldi", sub:"Gesto morale", msg:"Hai appoggiato la carovana a parole: la tifoseria ha apprezzato a metà." },
    { texto:"Sconsigliarla per sicurezza", sub:"Prudenza, malumore", msg:"Hai sconsigliato la carovana: la tifoseria si è infastidita." },
  ] },

'per_hi_critica': { titulo:"{HINCHA} guida un coro contro di te", contexto:"Durante la partita, {HINCHA} ha guidato un coro contro la dirigenza per {MOTIVO}. Si è sentito in tutto lo stadio.",
  variables:{ MOTIVO:["gli ultimi risultati","il prezzo degli abbonamenti","la cessione di un giocatore","la mancanza di rinforzi"] },
  opciones:[
    { texto:"Metterci la faccia alla prossima conferenza", sub:"Coraggio, esposizione", msg:"Ci hai messo la faccia e hai chiarito la tua posizione: una parte della curva ha apprezzato." },
    { texto:"Parlare con {HINCHA} in privato", sub:"Dialogo discreto", msg:"Hai parlato in privato con {HINCHA}: la tensione è scesa." },
    { texto:"Ignorare il coro", sub:"Eviti lo scontro, sembri assente", msg:"Hai ignorato il coro: la critica si è amplificata." },
  ] },

'per_em_prestamo': { titulo:"{EMPRESARIO} offre un prestito", contexto:"{EMPRESARIO} offre di prestare soldi al club per {DESTINO}. Dice che è un gesto d'affetto, ma conviene leggere le clausole in piccolo.",
  variables:{ DESTINO:["pagare gli stipendi arretrati","ristrutturare lo stadio","comprare un rinforzo per l'allenatore","coprire un buco di cassa"] },
  opciones:[
    { texto:"Accettare il prestito", sub:"Soldi subito, debito dopo", msg:"Hai accettato il prestito di {EMPRESARIO}: la cassa respira, il debito resta." },
    { texto:"Chiedere una scadenza più lunga", sub:"Meno soldi, meno pressione", msg:"{EMPRESARIO} ha accettato una scadenza più lunga con un importo minore." },
    { texto:"Rifiutare per non dipendere", sub:"Indipendenza, difficoltà", msg:"Hai rifiutato il prestito: la tifoseria ha festeggiato la tua indipendenza." },
  ] },

'per_em_representado': { titulo:"{EMPRESARIO} ti offre un suo assistito", contexto:"{EMPRESARIO} ti propone {JUGADOR}, {JPOS} di {JEDAD} anni e livello {JRATING}. Dice che è un'occasione, ma il prezzo è alto.",
  opciones:[
    { texto:"Ingaggiare {JUGADOR}", sub:"Rinforzo, cassa colpita", msg:"Hai ingaggiato {JUGADOR}: l'allenatore è contento e {EMPRESARIO} ancora di più." },
    { texto:"Chiedere un'opzione di acquisto", sub:"Meno rischio, meno impatto", msg:"Hai chiesto un'opzione di acquisto: {EMPRESARIO} ha accettato senza entusiasmo." },
    { texto:"Rifiutare l'offerta", sub:"Proteggi la cassa, irriti l'imprenditore", msg:"Hai rifiutato l'offerta: {EMPRESARIO} se n'è andato offeso." },
  ] },

'per_em_terreno': { titulo:"{EMPRESARIO} vuole sviluppare un'area del club", contexto:"{EMPRESARIO} vuole comprare o sviluppare un'area del club per realizzare {PROYECTO}. L'assemblea è divisa.",
  variables:{ PROYECTO:["un centro commerciale","un quartiere residenziale chiuso","una palestra e una spa","un parcheggio"] },
  opciones:[
    { texto:"Vendere l'area", sub:"Entrano soldi, si perde patrimonio", msg:"Hai venduto l'area a {EMPRESARIO}: cassa piena e soci arrabbiati." },
    { texto:"Affittarla a lungo termine", sub:"Entrate fisse, meno soldi subito", msg:"Hai affittato l'area con un contratto lungo: un ottimo equilibrio." },
    { texto:"Rifiutare la proposta", sub:"Proteggi il patrimonio", msg:"Hai rifiutato: l'assemblea ti ha applaudito, {EMPRESARIO} no." },
  ] },

'per_em_viaje': { titulo:"{EMPRESARIO} ti invita a un viaggio d'affari", contexto:"{EMPRESARIO} ti invita a un viaggio: {DESTINO}. Vuole presentarti a possibili sponsor. Tutto pagato, ma la stampa potrebbe dire la sua.",
  variables:{ DESTINO:["una fiera sportiva all'estero","una cena con investitori","una tournée di tre giorni","un vertice di dirigenti"] },
  opciones:[
    { texto:"Accettare il viaggio", sub:"Contatti, possibile cattiva stampa", msg:"Sei partito con {EMPRESARIO}: sei tornato con contatti e critiche." },
    { texto:"Accettare ma renderlo pubblico", sub:"Se convince, guadagni fiducia", ok:{ msg:"Hai reso pubblico il viaggio e i soci l'hanno apprezzato." }, mal:{ msg:"La stampa ha criticato comunque il viaggio, e {EMPRESARIO} non ha aiutato." } },
    { texto:"Declinare l'invito", sub:"Proteggi l'immagine, perdi opportunità", msg:"Hai declinato: {EMPRESARIO} è rimasto con la voglia." },
  ] },

'cad_naming_oferta': { titulo:"Un'azienda vuole il nome dello stadio", contexto:"{EMPRESA} offre {PLATA} per il naming dello stadio per {PLAZO}. Di mezzo c'è la tradizione.",
  variables:{ EMPRESA:["Una catena di supermercati","Un'assicurazione","Un marchio di bevande"], PLATA:["una somma importante","una cifra allettante"], PLAZO:["cinque anni","dieci anni"] },
  opciones:[
    { texto:"Accettare il naming", sub:"Soldi forti, tradizione colpita", msg:"Hai accettato il naming: lo stadio ha un nuovo nome e la tesoreria sorride." },
    { texto:"Rifiutarlo per tradizione", sub:"Tifoseria contenta, cassa invariata", msg:"Hai rifiutato il naming: la tradizione è salva." },
    { texto:"Proporre il naming solo per una tribuna", sub:"Via di mezzo, soldi minori", msg:"Hai proposto un naming parziale: l'azienda ha accettato a metà." },
  ] },

'cad_naming_hinchada': { titulo:"La tifoseria rifiuta il nuovo nome dello stadio", contexto:"Dal naming dello stadio, {PROTESTA}. I tifosi continuano a usare il nome di sempre.",
  variables:{ PROTESTA:["ci sono cartelli coperti con la vernice","ci sono cori contrari","la curva si rifiuta di pronunciarlo","c'è una campagna sui social"] },
  opciones:[
    { texto:"Dialogare e cercare un nome misto", sub:"Richiede tempo, calma il quartiere", msg:"Hai creato un nome misto: la tifoseria l'ha accettato." },
    { texto:"Mantenere l'accordo e offrire concessioni", sub:"Tieni i soldi, la tensione resta", msg:"Hai mantenuto l'accordo con delle concessioni: il clima resta teso." },
    { texto:"Chiedere scusa e rescindere", sub:"Costa caro, torna la pace", msg:"Hai rescisso l'accordo: è costato soldi, ma la tifoseria ha festeggiato." },
  ] },

'cad_naming_reclamo': { titulo:"Lo sponsor del naming reclama più presenza", contexto:"L'azienda del naming dice che {RECLAMO} e minaccia di ridurre il pagamento se non ci sono cambiamenti.",
  variables:{ RECLAMO:["il suo marchio non si vede in diretta TV","i tifosi la insultano alle partite","non è stata rispettata la clausola di visibilità","ci sono troppi cartelli coperti"] },
  opciones:[
    { texto:"Rispettare le clausole", sub:"Denaro assicurato, logorio con la tifoseria", msg:"Hai rispettato le clausole: l'azienda si è calmata e la tifoseria ha brontolato." },
    { texto:"Rinegoziare il contratto", sub:"Può andare bene o male", ok:{ msg:"L'azienda ha accettato di rinegoziare: accordo più equilibrato." }, mal:{ msg:"L'azienda se n'è andata e ha chiesto la restituzione di parte dei soldi." } },
    { texto:"Rompere il contratto", sub:"Taglio netto, perdita di denaro", msg:"Hai rotto il contratto: la tifoseria ha festeggiato e la cassa ha pagato." },
  ] },

'cad_academia_propuesta': { titulo:"Un'accademia propone un accordo per il vivaio", contexto:"Un'accademia {PAIS_ACAD} propone un accordo: {TRATO}. C'è talento, ma anche clausole in piccolo.",
  variables:{ PAIS_ACAD:["di un campionato vicino","di un grande club","di una regione nota per il suo vivaio"], TRATO:["ricevere giovani in prova tutto l'anno","mandare le tue promesse a formarsi","condividere osservatori e allenatori"] },
  opciones:[
    { texto:"Firmare l'accordo", sub:"Prospettiva, un po' di dipendenza", msg:"Hai firmato l'accordo con l'accademia: si apre una porta interessante." },
    { texto:"Chiedere modifiche alle condizioni", sub:"Più sicuro, più lento", msg:"Hai chiesto modifiche: l'accademia studia la tua proposta." },
    { texto:"Rifiutare per indipendenza", sub:"Vivaio proprio, senza aiuti", msg:"Hai rifiutato l'accordo: il vivaio va avanti per la sua strada." },
  ] },

'cad_academia_frutos': { titulo:"Primi risultati dell'accordo sul vivaio", contexto:"Sono passati alcuni mesi dall'accordo con l'accademia e {NOVEDAD}. È ora di fare un bilancio.",
  variables:{ NOVEDAD:["sono arrivati tre giovani interessanti","c'è un allenatore che critica il metodo","è spuntato un gioiello","i risultati sono altalenanti"] },
  opciones:[
    { texto:"Approfondire l'accordo", sub:"Se va bene, grande affare", ok:{ msg:"L'accordo ha dato frutti: sono arrivati giovani di livello." }, mal:{ msg:"L'accordo non ha dato i frutti sperati ed è costato soldi." } },
    { texto:"Lasciare tutto com'è", sub:"Nessun cambiamento", msg:"Hai mantenuto l'accordo senza cambiamenti: nessuno si lamenta." },
    { texto:"Chiudere l'accordo", sub:"Tagli con una perdita", msg:"Hai chiuso l'accordo: qualcuno ha capito, altri no." },
  ] },

'cad_obra_proyecto': { titulo:"Progetto di ristrutturazione dello stadio", contexto:"Un architetto propone di rimodernare {SECTOR} per guadagnare in {MEJORA}. Il budget è ambizioso.",
  variables:{ SECTOR:["la curva popolare","la tribuna d'onore","gli spogliatoi e il tunnel","l'accesso e i bagni"], MEJORA:["capienza","comfort","sicurezza"] },
  opciones:[
    { texto:"Approvare l'opera completa", sub:"Grande investimento, molto rischio", msg:"Hai approvato i lavori: i soci sono entusiasti." },
    { texto:"Approvare un lavoro piccolo", sub:"Meno soldi, meno impatto", msg:"Hai approvato un lavoro piccolo: qualcosa si nota." },
    { texto:"Rimandare il progetto", sub:"Risparmio, frustrazione", msg:"Hai rimandato il progetto: i soci continuano ad aspettare." },
  ] },

'cad_obra_demora': { titulo:"I lavori dello stadio vanno a rilento", contexto:"I lavori dello stadio {PROBLEMA}. I soci guardano l'orologio e l'impresa chiede altri soldi.",
  variables:{ PROBLEMA:["sono in ritardo di mesi","hanno avuto un incidente lieve","sono rimasti senza materiali","hanno problemi con l'agibilità"] },
  opciones:[
    { texto:"Pagare un extra", sub:"Finire in tempo, soldi in più", msg:"Hai pagato un extra: i lavori hanno ripreso il ritmo." },
    { texto:"Cambiare impresa", sub:"Rischio, tempo perso", msg:"Hai cambiato impresa: il progetto ha accumulato altro ritardo." },
    { texto:"Fermare i lavori e aspettare", sub:"Risparmio, stadio a metà", msg:"Hai fermato i lavori: lo stadio è rimasto a metà." },
  ] },

'cad_obra_inauguracion': { titulo:"Inaugurazione dei lavori", contexto:"I lavori dello stadio finalmente finiscono e {EVENTO}. Bisogna decidere come inaugurarli.",
  variables:{ EVENTO:["c'è molta attesa","alcuni dettagli sono rimasti incompiuti","la stampa vuole vedere il risultato","i soci sono impazienti"] },
  opciones:[
    { texto:"Inaugurare con una grande festa", sub:"Immagine potente, spesa", msg:"L'inaugurazione è stata un successo e tutti hanno parlato dei lavori." },
    { texto:"Un'inaugurazione sobria", sub:"Austera e curata", msg:"Hai inaugurato con sobrietà: tutto in ordine." },
    { texto:"Inaugurare con un'amichevole", sub:"Se vince, lustro; se perde, spesa", ok:{ msg:"L'amichevole è stata un colpo da maestro: ha vinto la squadra e ha brillato l'opera." }, mal:{ msg:"L'amichevole è andata male e ha tolto lustro all'inaugurazione." } },
  ] },

'cad_ultimatum': { titulo:"L'allenatore dà un ultimatum al capitano", contexto:"L'allenatore ha dato un ultimatum a {JUGADOR}, capitano della squadra: {MOTIVO}. Lo spogliatoio aspetta la tua posizione.",
  variables:{ MOTIVO:["per i ritardi agli allenamenti","per dichiarazioni alla stampa","per uno scontro con un compagno","per non aver seguito le indicazioni"] },
  opciones:[
    { texto:"Appoggiare l'allenatore", sub:"Autorità, tensione con il capitano", msg:"Hai appoggiato l'allenatore: {JUGADOR} si è mostrato infastidito." },
    { texto:"Appoggiare il capitano", sub:"Proteggi il leader, indebolisci l'allenatore", msg:"Hai appoggiato il capitano: l'allenatore l'ha presa male." },
    { texto:"Mediare tra i due", sub:"Tempo e dialogo", msg:"Hai mediato: i due si sono stretti la mano, almeno per ora." },
  ] },

'cad_ultimatum_respuesta': { titulo:"Il capitano risponde all'ultimatum", contexto:"{JUGADOR} ha risposto all'ultimatum: {RESPUESTA}. La rosa è divisa.",
  variables:{ RESPUESTA:["ha chiesto di parlare con te in privato","ha detto di non credere nell'allenatore","si è offerto di fare un passo indietro","ha chiesto che la decisione spetti al gruppo"] },
  opciones:[
    { texto:"Sostenere l'allenatore", sub:"Autorità, perdita di un leader", msg:"Hai sostenuto l'allenatore: {JUGADOR} ha abbassato il suo rendimento." },
    { texto:"Cambiare l'allenatore", sub:"Aria nuova, rischio", msg:"Hai cambiato l'allenatore: lo spogliatoio ha respirato." },
    { texto:"Togliere la fascia al capitano", sub:"Decisione dura, addio al leader", msg:"Hai tolto la fascia a {JUGADOR}: la rosa l'ha presa con rispetto." },
  ] },

'cad_exclusiva_oferta': { titulo:"{PERIODISTA} chiede l'esclusiva di un annuncio", contexto:"{PERIODISTA} chiede l'esclusiva {ANUNCIO}. Se gliela dai, gli altri media restano fuori.",
  variables:{ ANUNCIO:["sul prossimo rinforzo","sulla tua decisione sull'allenatore","sul nuovo sponsor","sul progetto dello stadio"] },
  opciones:[
    { texto:"Dargli l'esclusiva", sub:"Alleato forte, altri media irritati", msg:"{PERIODISTA} ha avuto l'esclusiva e l'ha ringraziata davanti alle telecamere." },
    { texto:"Dare l'annuncio a tutti allo stesso modo", sub:"Nessun favorito, nessun vantaggio", msg:"Hai annunciato a tutti i media allo stesso modo: nessuno si è lamentato." },
    { texto:"Negare la richiesta", sub:"Eviti conflitti, irriti {PERIODISTA}", msg:"Hai negato l'esclusiva: {PERIODISTA} ha preso nota." },
  ] },

'cad_exclusiva_celos': { titulo:"Gli altri media si offendono per l'esclusiva", contexto:"Gli altri media si sono offesi per l'esclusiva che hai dato a {PERIODISTA} e {REACCION}.",
  variables:{ REACCION:["hanno smesso di seguire il club","pubblicano articoli critici","chiedono parità di trattamento","boicottano la conferenza stampa"] },
  opciones:[
    { texto:"Chiedere scusa pubblicamente", sub:"Logorio, pace", msg:"Hai chiesto scusa a tutti i media: la tensione è scesa." },
    { texto:"Difendere la tua decisione", sub:"Fermezza, conflitto", msg:"Hai difeso la tua decisione: i media si sono fatti più duri." },
    { texto:"Fare una conferenza aperta", sub:"Trasparenza, impegno", msg:"Hai fatto una conferenza aperta: i media si sono calmati." },
  ] },

'cad_barra_pacto': { titulo:"Un gruppo ultras propone un patto", contexto:"{HINCHA} propone un patto: {TRATO}. Sembra ragionevole, ma apre una porta delicata.",
  variables:{ TRATO:["pace sugli spalti in cambio di biglietti","sostegno alla dirigenza in cambio di uno spazio","meno incidenti in cambio di soldi per le trasferte"] },
  opciones:[
    { texto:"Accettare il patto", sub:"Pace immediata, debito morale", msg:"Hai accettato il patto con {HINCHA}: la curva si è calmata." },
    { texto:"Rifiutarlo con fermezza", sub:"Autorità, tensione", msg:"Hai rifiutato il patto: {HINCHA} è rimasto scontento." },
    { texto:"Parlare con tutta la tifoseria", sub:"Complicato, più giusto", msg:"Hai parlato con tutta la tifoseria: il clima è migliorato." },
  ] },

'cad_barra_pide_mas': { titulo:"{HINCHA} chiede di più", contexto:"Dal patto, {HINCHA} chiede di più: {PEDIDO}. Dice che la curva non aspetterà.",
  variables:{ PEDIDO:["più biglietti","un posto fisso sugli spalti","partecipare alle decisioni del club","soldi extra per le trasferte"] },
  opciones:[
    { texto:"Cedere a quello che chiede", sub:"Pace, maggiore dipendenza", msg:"Hai ceduto: {HINCHA} è rimasto soddisfatto, ma il club si è indebitato con la curva." },
    { texto:"Mettere limiti chiari", sub:"Fermezza, rischio", msg:"Hai messo limiti chiari: {HINCHA} ha accettato a denti stretti." },
    { texto:"Rompere il patto", sub:"Tagli, affronti il conflitto", msg:"Hai rotto il patto: la tensione è tornata a salire." },
  ] },

'cad_barra_incidentes': { titulo:"Incidenti sugli spalti", contexto:"Ci sono stati incidenti sugli spalti: {INCIDENTE}. La lega chiede spiegazioni e la stampa chiede del patto.",
  variables:{ INCIDENTE:["una rissa tra gruppi","fumogeni e fughe","uno scontro con la polizia","danni ai bagni"] },
  opciones:[
    { texto:"Denunciare e collaborare con la giustizia", sub:"Ordine, rottura definitiva", msg:"Hai denunciato quanto accaduto: la stampa ti ha apprezzato e la curva si è infuriata." },
    { texto:"Minimizzare quanto accaduto", sub:"Se non cresce, hai salvato la situazione", ok:{ msg:"La questione si è raffreddata ed è passata in secondo piano." }, mal:{ msg:"La lega ti ha sanzionato e la stampa ti ha accusato di insabbiare." } },
    { texto:"Riunire la commissione di sicurezza", sub:"Risposta istituzionale", msg:"La commissione di sicurezza ha agito con rapidità." },
  ] },

'cad_hermano_propuesta': { titulo:"Un club straniero propone un gemellaggio", contexto:"Un club {PAIS_HERM} propone un gemellaggio con {BENEFICIO}. Sarebbe un bel gesto.",
  variables:{ PAIS_HERM:["di un altro continente","di un paese vicino","di una regione lontana"], BENEFICIO:["uno scambio di giovani","un'amichevole annuale","visite reciproche dei tifosi","maglie commemorative"] },
  opciones:[
    { texto:"Accettare il gemellaggio", sub:"Immagine internazionale, spesa lieve", msg:"Hai accettato il gemellaggio: la stampa l'ha messo in risalto." },
    { texto:"Chiedere tempo per pensarci", sub:"Più sicuro", msg:"Hai chiesto tempo per pensarci: la proposta è rimasta in sospeso." },
    { texto:"Rifiutarlo per mancanza di budget", sub:"Risparmio, gesto freddo", msg:"Hai rifiutato il gemellaggio: l'hanno capito, ma con dispiacere." },
  ] },

'cad_hermano_visita': { titulo:"Visita del club gemello", contexto:"Il club gemello arriva in visita e {NOVEDAD}. I tifosi aspettano una grande amichevole.",
  variables:{ NOVEDAD:["porta una delegazione enorme","chiede un trattamento speciale","vuole giocare con i titolari","sorprende con un regalo"] },
  opciones:[
    { texto:"Accoglierli con una grande festa", sub:"Immagine, spesa", msg:"La visita è stata una festa indimenticabile." },
    { texto:"Giocare un'amichevole con i titolari", sub:"Se va bene, lustro", ok:{ msg:"Hanno vinto l'amichevole e la tifoseria ha vibrato." }, mal:{ msg:"Hanno perso l'amichevole e la visita si è presa gli applausi." } },
    { texto:"Un'accoglienza semplice", sub:"Austera e senza rischi", msg:"L'accoglienza è stata semplice ma calorosa." },
  ] },

'cad_socio_donacion': { titulo:"Un socio offre una donazione condizionata", contexto:"{EMPRESARIO} offre una donazione per {DESTINO}. Dice che non chiede nulla in cambio, ma c'è una condizione sottile.",
  variables:{ DESTINO:["il settore giovanile","lo stadio","i debiti del club","il pagamento degli stipendi"] },
  opciones:[
    { texto:"Accettare la donazione", sub:"Soldi, possibile impegno", msg:"Hai accettato la donazione di {EMPRESARIO}: il club respira." },
    { texto:"Chiedere che sia senza condizioni", sub:"Più chiaro, più lento", msg:"Hai chiesto chiarezza: {EMPRESARIO} ha accettato con una donazione minore." },
    { texto:"Rifiutare la donazione", sub:"Indipendenza", msg:"Hai rifiutato: i soci hanno apprezzato, la cassa no." },
  ] },

'cad_socio_cargo': { titulo:"Il donatore chiede una carica", contexto:"{EMPRESARIO} ora chiede {CARGO}. Dice di voler «proteggere il suo contributo».",
  variables:{ CARGO:["un posto nel consiglio direttivo","la presidenza di una sottocommissione","un posto nelle decisioni sportive","la gestione del settore giovanile"] },
  opciones:[
    { texto:"Dargli la carica", sub:"Calma, perdita di controllo", msg:"Hai dato la carica a {EMPRESARIO}: si è insediato in sede." },
    { texto:"Offrirgli un ruolo onorario", sub:"Gesto simbolico", msg:"Gli hai offerto un ruolo onorario: {EMPRESARIO} ha accettato con un mezzo sorriso." },
    { texto:"Restituirgli la donazione", sub:"Indipendenza, costo alto", msg:"Hai restituito la donazione: il consiglio ti ha applaudito." },
  ] },

'cad_socio_conflicto': { titulo:"Conflitto di interessi nel consiglio", contexto:"{EMPRESARIO} ha usato il suo incarico per {ACCION}. Il consiglio si divide e i soci chiedono spiegazioni.",
  variables:{ ACCION:["favorire la sua azienda in un contratto","fare pressioni sull'allenatore","porre il veto a una cessione","cambiare un fornitore"] },
  opciones:[
    { texto:"Chiedergli di dimettersi", sub:"Ordine, conflitto aperto", msg:"{EMPRESARIO} si è dimesso con rabbia e il consiglio ha respirato." },
    { texto:"Creare un comitato etico", sub:"Istituzionale e lento", msg:"Il comitato etico ha preso in carico il caso." },
    { texto:"Lasciar correre", sub:"Se non succede nulla, hai evitato un conflitto", ok:{ msg:"Il conflitto non è degenerato e tutto è rimasto com'era." }, mal:{ msg:"Il conflitto è esploso sui giornali e a te è toccato pagarne il prezzo." } },
  ] },

'cad_trat_propuesta': { titulo:"{JUGADOR} ha un infortunio cronico", contexto:"{JUGADOR} ({JPOS}, livello {JRATING}) si trascina un infortunio cronico e il medico propone {OPCION}. È la stella della squadra.",
  variables:{ OPCION:["un trattamento sperimentale","un piccolo intervento chirurgico","un lungo riposo","una terapia con specialisti dall'estero"] },
  opciones:[
    { texto:"Approvare il trattamento sperimentale", sub:"Possibile soluzione, rischio", msg:"Hai approvato il trattamento: {JUGADOR} ha iniziato il percorso." },
    { texto:"Optare per il lungo riposo", sub:"Sicurezza, assenza", msg:"{JUGADOR} si riposa a lungo: la squadra sente la sua mancanza." },
    { texto:"Giocare con le infiltrazioni", sub:"Rendimento immediato, rischio futuro", msg:"{JUGADOR} ha giocato infiltrato: la squadra ha reso, ma il rischio è cresciuto." },
  ] },

'cad_trat_resultado': { titulo:"Esito del trattamento di {JUGADOR}", contexto:"Sono passate alcune settimane dal trattamento di {JUGADOR} e i medici hanno novità. {NOTA}.",
  variables:{ NOTA:["Tutti aspettano un bollettino positivo","La squadra ha bisogno di lui","La stampa chiede ogni giorno","Lo spogliatoio è in attesa"] },
  opciones:[
    { texto:"Rimetterlo in campo subito", sub:"Se va bene, un colpaccio", ok:{ msg:"{JUGADOR} è tornato in grande forma e la squadra ha festeggiato." }, mal:{ msg:"{JUGADOR} si è infortunato di nuovo e la scommessa è costata cara." } },
    { texto:"Aspettare un'altra settimana", sub:"Cautela, senza rischi", msg:"Hanno aspettato un'altra settimana: {JUGADOR} è tornato bene e con calma." },
    { texto:"Chiedere un secondo parere", sub:"Spesa e tempo", msg:"Il secondo parere ha confermato il piano e ha calmato i nervi." },
  ] },

'cad_convocado_aviso': { titulo:"La nazionale convoca {JUGADOR}", contexto:"La nazionale ha convocato {JUGADOR} ({JPOS}, {JEDAD} anni) per {TORNEO}. Il club ha partite decisive.",
  variables:{ TORNEO:["un torneo importante","delle amichevoli","una partita di qualificazione"] },
  opciones:[
    { texto:"Lasciarlo partire con orgoglio", sub:"Immagine e prestigio, assenza", msg:"{JUGADOR} è partito con la nazionale e il club è finito su tutti i giornali." },
    { texto:"Trattare perché giochi una sola partita", sub:"Equilibrio, irritazione della federazione", msg:"Hai trattato per una sola partita: nessuno è rimasto del tutto contento." },
    { texto:"Trattenerlo per le partite decisive", sub:"Proteggi la tua squadra, irriti tutti", msg:"Hai trattenuto {JUGADOR}: federazione e stampa hanno criticato." },
  ] },

'cad_convocado_regreso': { titulo:"{JUGADOR} torna dalla nazionale", contexto:"{JUGADOR} torna dalla nazionale {ESTADO}. L'allenatore non sa come collocarlo.",
  variables:{ ESTADO:["con tanta fiducia","con un lieve infortunio","affaticato dai viaggi","con offerte dall'estero"] },
  opciones:[
    { texto:"Metterlo subito titolare", sub:"Rendimento, rischio di logorio", msg:"{JUGADOR} è tornato titolare e ha reso con fiducia." },
    { texto:"Dargli qualche giorno di riposo", sub:"Cura fisica, meno continuità", msg:"{JUGADOR} si è riposato qualche giorno ed è rientrato." },
    { texto:"Parlare del suo futuro", sub:"Può andare bene o male", ok:{ msg:"Hanno parlato del futuro e {JUGADOR} si è impegnato con il club." }, mal:{ msg:"La chiacchierata ha creato dubbi e {JUGADOR} è rimasto a disagio." } },
  ] },

});
