/* Plantillas de eventos en italiano (parte 2: institucional, mediático, hinchada, consecuencias). */
EVENTOS_I18N.it = Object.assign(EVENTOS_I18N.it || {}, {

/* ===================== ISTITUZIONALE ===================== */
'ins_asamblea': { titulo:'Assemblea dei soci infuocata',
  contexto:'L’assemblea si scalda su {TEMA} e {TONO}.',
  variables:{ TEMA:['il bilancio','la riforma dello statuto','la vendita di un terreno'],
              TONO:['ci sono ultras sugli spalti','chiedono trasparenza','c’è una lista d’opposizione'] },
  opciones:[
    {texto:'Difendere la gestione', sub:'Forte e senza cedere', msg:'Hai difeso la gestione a spada tratta. Alcuni hanno applaudito, altri se ne sono andati.'},
    {texto:'Aprire i libri contabili', sub:'Trasparenza totale', msg:'Hai aperto i libri: l’assemblea si è calmata, anche se sono emerse domande scomode.'},
    {texto:'Rinviare l’assemblea', sub:'Guadagni tempo', msg:'Hai rinviato l’assemblea. Il tema non è sparito, solo rimandato.'},
  ] },

'ins_eleccion': { titulo:'Si avvicinano le elezioni',
  contexto:'{RIVAL} promette {PROMESA} e ti sfida apertamente.',
  variables:{ RIVAL:['Un ex presidente','Un imprenditore del quartiere','Un gruppo di soci giovani'],
              PROMESA:['uno stadio più grande','più colpi di mercato','più trasparenza'] },
  opciones:[
    {texto:'Campagna aggressiva', sub:'Spesa forte, attacco diretto', msg:'Hai montato una campagna aggressiva. Sei salito nei sondaggi, ma hai speso.'},
    {texto:'Mostrare i risultati', sub:'Risultati alla mano', msg:'Hai mostrato quanto fatto. I soci hanno riconosciuto l’impegno.'},
    {texto:'Allearti con una fazione', sub:'Scommessa di potere', ok:{msg:'L’alleanza ha funzionato e hai raccolto appoggi.'}, mal:{msg:'L’alleanza ti è costata cara: hai perso credibilità in entrambi gli schieramenti.'}},
  ] },

'ins_promesa_incumplida': { titulo:'Promessa elettorale non mantenuta',
  contexto:'Un gruppo di soci ti ricorda che avevi promesso {PROMESA} e si organizza con {RECLAMO}.',
  variables:{ PROMESA:['lo stadio coperto','la piscina','la scuola di formazione'],
              RECLAMO:['una lettera firmata','un thread virale','un presidio davanti alla sede del club'] },
  opciones:[
    {texto:'Chiedere scusa e dare una data', sub:'Umiltà con scadenza', msg:'Hai chiesto scusa e dato una data. I soci ti hanno concesso un voto di fiducia.'},
    {texto:'Spiegare che non ci sono soldi', sub:'Realismo duro', msg:'Hai detto che non ci sono soldi. Sei stato onesto, ma ha dato fastidio.'},
    {texto:'Annunciare un’opera parziale', sub:'Scommessa sull’immagine', ok:{msg:'L’opera parziale ha calmato i soci ed è stata pronta in tempo.'}, mal:{msg:'L’opera parziale ha subito ritardi e ne sei uscito peggio.'}},
  ] },

'ins_intendente': { titulo:'Il sindaco offre il suo appoggio',
  contexto:'Il sindaco ti offre {APOYO} in cambio di {FAVOR}.',
  variables:{ APOYO:['lavori al centro sportivo','un sussidio','la cessione di un campo d’allenamento'],
              FAVOR:['un posto in lista','un comizio allo stadio','l’assunzione di un raccomandato'] },
  opciones:[
    {texto:'Accettare', sub:'Appoggio oggi, debito domani', msg:'Hai accettato l’accordo. L’appoggio è arrivato e il sindaco si è segnato il favore.'},
    {texto:'Rifiutare', sub:'Indipendenza', msg:'Hai rifiutato l’accordo. Il sindaco si è arrabbiato, ma i soci ti hanno apprezzato.'},
    {texto:'Negoziare senza favori politici', sub:'Appoggio parziale', msg:'Hai ottenuto appoggio senza favori. Il sindaco non è rimasto contento.'},
  ] },

'ins_comision': { titulo:'Conflitto nel consiglio direttivo',
  contexto:'Nel consiglio scoppia un conflitto: {CONFLICTO} {MOMENTO}.',
  variables:{ CONFLICTO:['un vicepresidente ribelle','una tesoriera che minaccia di dimettersi','due fazioni contrapposte'],
              MOMENTO:['in piena serie negativa','prima di un’assemblea','in piena chiusura di bilancio'] },
  opciones:[
    {texto:'Mediare di persona', sub:'Tempo e logoramento', msg:'Hai mediato e calmato gli animi. Ti ha tolto settimane di lavoro.'},
    {texto:'Imporre una decisione', sub:'Autorità ferma', msg:'Hai preso una decisione senza consenso. Qualcuno se n’è andato infastidito.'},
    {texto:'Lasciare che si risolvano da soli', sub:'Meno fatica, più rischio', msg:'Non sei intervenuto: il conflitto è cresciuto ed è trapelato alla stampa.'},
  ] },

'ins_capitan_voz': { titulo:'Il capitano chiede voce in consiglio',
  contexto:'{JUGADOR}, il capitano, vuole dire la sua {TEMA} e lo propone {TONO}.',
  variables:{ TEMA:['sui premi per obiettivi','sul calendario del precampionato','sull’uso del centro sportivo'],
              TONO:['in privato','davanti a tutta la rosa','per lettera'] },
  opciones:[
    {texto:'Ascoltarlo', sub:'Più voce, più peso', msg:'Hai ascoltato {JUGADOR}: la rosa ha apprezzato il gesto.'},
    {texto:'Fissare i limiti', sub:'Rispettando le gerarchie', msg:'Hai detto a {JUGADOR} che ognuno pensa al suo. Il capitano ha annuito senza convinzione.'},
    {texto:'Dargli un posto in una commissione', sub:'Può andare bene o male', ok:{msg:'{JUGADOR} ha preso il ruolo sul serio e ha aiutato a sbloccare questioni.'}, mal:{msg:'{JUGADOR} si è entusiasmato troppo e i dirigenti si sono infastiditi.'}},
  ] },

'ins_federacion': { titulo:'La lega ti sanziona',
  contexto:'La lega ha rilevato {INFRACCION} e propone {SANCION}.',
  variables:{ INFRACCION:['falle nel controllo dei biglietti','un debito con un altro club','incidenti tra il pubblico'],
              SANCION:['una multa','una penalizzazione in classifica','la partita a porte chiuse'] },
  opciones:[
    {texto:'Pagare e adeguarsi', sub:'Chiudi in fretta', msg:'Hai scontato la sanzione. La questione si è chiusa senza altro rumore.'},
    {texto:'Fare ricorso', sub:'Può andare bene o male', ok:{msg:'Il ricorso è stato accolto e la sanzione ridotta.'}, mal:{msg:'Il ricorso è fallito e la sanzione è rimasta confermata.'}},
    {texto:'Negoziare un piano di pagamento', sub:'Dilazioni il costo', msg:'Hai ottenuto un piano di pagamento. La lega se l’è segnato per il futuro.'},
  ] },

'ins_auditoria': { titulo:'Revisione dei conti',
  contexto:'{AUDITOR} chiede di esaminare i libri e trova {HALLAZGO}.',
  variables:{ AUDITOR:['Uno studio contabile','Un gruppo di soci','La lega'],
              HALLAZGO:['spese dubbie','fatture duplicate','una piccola cassa in disordine'] },
  opciones:[
    {texto:'Collaborare a fondo', sub:'Trasparenza totale', msg:'Hai collaborato: gli errori sono stati corretti e la tua credibilità è salita.'},
    {texto:'Minimizzare la scoperta', sub:'Toglierle importanza', msg:'Hai detto che non era un granché. Alcuni soci non ti hanno creduto.'},
    {texto:'Dare la colpa all’area contabile', sub:'Via d’uscita politica', msg:'Hai cambiato il contabile. Le acque si sono calmate, ma hai lasciato un arrabbiato.'},
  ] },

'ins_conflictivo_sancion': { titulo:'Il consiglio vuole sanzionare un giocatore',
  contexto:'Dopo {INCIDENTE}, parte del consiglio chiede {SANCION} per {JUGADOR} ({JPOS}, livello {JRATING}).',
  variables:{ INCIDENTE:['un litigio con l’allenatore','un ritardo a un allenamento','le critiche alla dirigenza','un’assenza al ritiro'],
              SANCION:['una multa pesante','una sospensione','l’esclusione dalla lista'] },
  opciones:[
    {texto:'Sanzionarlo', sub:'Mano dura', msg:'Hai sanzionato {JUGADOR}. La rosa ha capito il messaggio, anche se qualcuno ha protestato.'},
    {texto:'Un avvertimento', sub:'Mano morbida', msg:'Hai dato solo un avvertimento a {JUGADOR}. Parte del consiglio l’ha letto come debolezza.'},
    {texto:'Parlargli a quattro occhi', sub:'Può chiarire o peggiorare', ok:{msg:'{JUGADOR} ha chiesto scusa e si è impegnato a cambiare.'}, mal:{msg:'{JUGADOR} è uscito peggio dal colloquio e il conflitto si è ingrandito.'}},
  ] },

'ins_dia_club': { titulo:'Anniversario del club',
  contexto:'{CLUB} compie {ANIVERSARIO} e si discute di {FORMATO}.',
  variables:{ ANIVERSARIO:['100 anni','75 anni','50 anni'],
              FORMATO:['una sfilata','una partita celebrativa','una cena sociale'] },
  opciones:[
    {texto:'Festa grande', sub:'Costosa ma memorabile', msg:'La festa è stata un successo: emozione, foto e tribuna piena.'},
    {texto:'Celebrazione sobria', sub:'Più sobria', msg:'La celebrazione è stata semplice. Nessuno si è lamentato, nessuno si è commosso.'},
    {texto:'Riutilizzare l’omaggio per fare cassa', sub:'Mix di gala e business', msg:'Hai fatto dell’anniversario un evento a pagamento. Hai incassato, con qualche rimprovero.'},
  ] },

'ins_disciplinas': { titulo:'Aggiungere nuove discipline',
  contexto:'Una proposta vuole aggiungere {DISCIPLINA} al club {RECURSO}.',
  variables:{ DISCIPLINA:['il calcio femminile','il basket','il nuoto'],
              RECURSO:['con pochi soldi','con un sussidio','con il contributo dei soci'] },
  opciones:[
    {texto:'Approvare con decisione', sub:'Scommessa sociale', msg:'La nuova disciplina è partita con entusiasmo. La comunità del club cresce.'},
    {texto:'Un progetto pilota', sub:'Cautela', msg:'Hai avviato un progetto pilota. Si vedrà come andrà.'},
    {texto:'Rimandare', sub:'Priorità al calcio professionistico', msg:'Hai detto che ora non è il momento. I promotori sono rimasti delusi.'},
  ] },

'ins_cualidad_contrato': { titulo:'Rinnovo del tuo {CUALIDAD}',
  contexto:'{JUGADOR}, il tuo {CUALIDAD}, vuole rinnovare {CONDICION} e {AGENTE}.',
  variables:{ CONDICION:['con un aumento importante','con una clausola rescissoria','in cambio del posto da titolare','con un contratto lungo'],
              AGENTE:['il suo procuratore fa pressione','la famiglia chiede stabilità','un altro club lo tenta'] },
  opciones:[
    {texto:'Accettare le sue condizioni', sub:'Lo blindi, caro', msg:'Hai rinnovato {JUGADOR} con tutte le sue condizioni. Lo spogliatoio ha festeggiato.'},
    {texto:'Controfferta più modesta', sub:'Aggiusti la cassa', msg:'Hai chiuso un rinnovo più modesto con {JUGADOR}. Non è rimasto del tutto contento.'},
    {texto:'Lasciare che si svincoli', sub:'Rischio di perderlo', ok:{msg:'{JUGADOR} è rimasto senza condizioni: hai risparmiato e tutto resta uguale.'}, mal:{msg:'{JUGADOR} se n’è andato a parametro zero e i tifosi ti hanno ritenuto responsabile.'}},
  ] },

'ins_intendente_factura': { titulo:'Il sindaco presenta il conto',
  contexto:'Il sindaco ricorda il favore e ora chiede {PEDIDO} {MOMENTO}.',
  variables:{ PEDIDO:['biglietti per i suoi galoppini','un comizio elettorale in campo','che tu appoggi pubblicamente la sua candidatura'],
              MOMENTO:['questa settimana','prima delle elezioni','nel pieno di una partita importante'] },
  opciones:[
    {texto:'Accontentarlo', sub:'Paghi il debito politico', msg:'Hai soddisfatto la richiesta del sindaco. I tifosi l’hanno visto e non l’hanno dimenticato.'},
    {texto:'Rifiutare', sub:'Rompi il legame', msg:'Hai rifiutato. Il sindaco si è arrabbiato e ti ha tolto gli appoggi.'},
    {texto:'Accontentarlo a metà', sub:'Cerchi di stare bene con tutti', ok:{msg:'Il sindaco ha accettato il gesto a metà ed è rimasto soddisfatto.'}, mal:{msg:'Il sindaco si è offeso lo stesso e nemmeno i tifosi ti hanno perdonato.'}},
  ] },

/* ===================== MEDIATICO ===================== */
'med_declaracion': { titulo:'Dichiarazioni fraintese',
  contexto:'{MEDIO}, le tue parole {FRASE} sono state estrapolate dal contesto.',
  variables:{ MEDIO:['In un programma radiofonico','Su un canale via cavo','Su un portale online'],
              FRASE:['sull’arbitro','sull’allenatore','sulla tifoseria'] },
  opciones:[
    {texto:'Chiarire pubblicamente', sub:'Costoso ma chiaro', msg:'Hai chiarito quello che hai detto. La questione si è sgonfiata in fretta.'},
    {texto:'Lasciar correre', sub:'Silenzio scomodo', msg:'Non hai detto nulla. Il caso è cresciuto sui social.'},
    {texto:'Contrattaccare il media', sub:'Rischio alto', ok:{msg:'Hai contrattaccato con fermezza: i tifosi ti hanno applaudito.'}, mal:{msg:'Il contrattacco è andato male: il media ti ha criticato per giorni.'}},
  ] },

'med_esc_publico': { titulo:'Incidenti in tribuna',
  contexto:'Durante la partita {INCIDENTE} e lo scandalo è arrivato {ALCANCE}.',
  variables:{ INCIDENTE:['sono stati accesi dei fumogeni','è scoppiata una rissa tra tifosi','sono volati insulti all’arbitro'],
              ALCANCE:['ai telegiornali','ai social','alla lega'] },
  opciones:[
    {texto:'Condannare pubblicamente', sub:'Immagine pulita', msg:'Hai condannato l’accaduto. La tua immagine ne è uscita rafforzata.'},
    {texto:'Difendere i tifosi', sub:'In linea con la curva', msg:'Hai difeso la tua gente. I tifosi ti hanno voluto bene, la stampa no.'},
    {texto:'Promettere più controlli', sub:'Con un costo', msg:'Hai promesso più controlli: si è investito in sicurezza.'},
  ] },

'med_presion_prensa': { titulo:'Pressione della stampa',
  contexto:'{PERIODISTA} insiste {TEMA} e non molla.',
  variables:{ PERIODISTA:['Un giornalista storico','Un opinionista polemico','Un cronista del quartiere'],
              TEMA:['sul rendimento','sul budget','sull’allenatore'] },
  opciones:[
    {texto:'Rilasciare un’intervista', sub:'Metterci la faccia', msg:'Ci hai messo la faccia. L’intervista è stata tesa, ma ha portato chiarezza.'},
    {texto:'Ignorarlo', sub:'Senza dargli peso', msg:'Lo hai ignorato. Il giornalista si è preso la rivincita.'},
    {texto:'Invitarlo al club', sub:'Gesto rischioso', ok:{msg:'Il giornalista è uscito dal club con un’altra impressione e l’ha raccontato.'}, mal:{msg:'Il giornalista ha approfittato della visita per filmare il peggio.'}},
  ] },

'med_esc_jugador': { titulo:'Scandalo di un giocatore fuori dal campo',
  contexto:'È trapelato che {JUGADOR} ({JPOS}, {JEDAD} anni) {HECHO} {LUGAR}.',
  variables:{ HECHO:['ha litigato','ha pubblicato qualcosa di polemico','ha organizzato una festa'],
              LUGAR:['in discoteca','in una diretta streaming','sui social','dopo una sconfitta'] },
  opciones:[
    {texto:'Sanzionarlo pubblicamente', sub:'Mano dura', msg:'Hai sanzionato {JUGADOR}. La stampa ha apprezzato, la rosa è rimasta tesa.'},
    {texto:'Difenderlo', sub:'Sostegno al giocatore', msg:'Hai difeso {JUGADOR}. Lo spogliatoio ha ringraziato, la stampa no.'},
    {texto:'Gestire in silenzio', sub:'Può andare bene o male', ok:{msg:'La cosa si è raffreddata e {JUGADOR} è tornato al suo lavoro.'}, mal:{msg:'Lo scandalo è trapelato comunque e sei rimasto esposto.'}},
  ] },

'med_sponsor_escandalo': { titulo:'Scandalo con lo sponsor',
  contexto:'{MEDIO} ha pubblicato che {HECHO}. Ti collegano alla decisione di accettare quello sponsor.',
  variables:{ MEDIO:['Un quotidiano','Un portale','Un programma TV'],
              HECHO:['l’azienda è sotto inchiesta','l’azienda ha chiuso di colpo','ci sono denunce contro i proprietari'] },
  opciones:[
    {texto:'Rompere il contratto', sub:'Taglio immediato', msg:'Hai rotto il contratto e ti sei accollato il costo. Sei passato per una persona responsabile.'},
    {texto:'Aspettare di vedere cosa succede', sub:'Scommettere che si spenga', msg:'Hai aspettato. Lo scandalo è cresciuto e ti hanno puntato il dito.'},
    {texto:'Difendere la decisione', sub:'Rischio alto', ok:{msg:'Sei riuscito a evitare che l’inchiesta ti toccasse e lo sponsor ha continuato a pagare.'}, mal:{msg:'L’inchiesta è andata avanti e la tua difesa ne è uscita male.'}},
  ] },

'med_cualidad_nota': { titulo:'Un articolo mette in luce il tuo {CUALIDAD}',
  contexto:'{MEDIO} ha pubblicato un servizio {ENFOQUE} su {JUGADOR} e il club è finito al centro della scena.',
  variables:{ MEDIO:['Un quotidiano sportivo','Un programma TV','Un podcast'],
              ENFOQUE:['dal taglio umano','sul suo rendimento','sul suo carattere'] },
  opciones:[
    {texto:'Capitalizzare', sub:'Tutto in vetrina', msg:'Hai sfruttato il servizio per mostrare {CLUB}. {JUGADOR} si è un po’ montato la testa.'},
    {texto:'Abbassare i toni', sub:'Proteggi il giocatore', msg:'Hai abbassato i toni: {JUGADOR} è rimasto concentrato.'},
    {texto:'Organizzare una conferenza stampa', sub:'Può andare a meraviglia o storto', ok:{msg:'La conferenza ha messo in luce {JUGADOR} e il club.'}, mal:{msg:'In conferenza {JUGADOR} ha detto qualcosa che è stato frainteso.'}},
  ] },

'med_documental': { titulo:'Documentario sul club',
  contexto:'{PLATAFORMA} vuole girare un documentario su {CLUB} incentrato {ENFOQUE}.',
  variables:{ PLATAFORMA:['Una piattaforma di streaming','Un canale pubblico','Una casa di produzione indipendente'],
              ENFOQUE:['sulla storia gloriosa','sulla crisi attuale','sugli spogliatoi'] },
  opciones:[
    {texto:'Accettare con controllo editoriale', sub:'Controllo, meno soldi', msg:'Hai accettato con controllo editoriale. Il documentario è uscito pulito.'},
    {texto:'Accettare senza condizioni', sub:'Libertà totale', msg:'Hai accettato senza condizioni. Il documentario è stato onesto e ha smosso emozioni.'},
    {texto:'Rifiutare', sub:'Privacy', msg:'Hai rifiutato il documentario. L’intimità del club è rimasta intatta.'},
  ] },

'med_rumor': { titulo:'Voci sul club',
  contexto:'{FUENTE} dice che {RUMOR}.',
  variables:{ FUENTE:['Un portale','Un opinionista','Un account anonimo'],
              RUMOR:['il club sarà venduto a degli investitori','lo stadio cambia sede','ci sarà una fusione con un altro club'] },
  opciones:[
    {texto:'Smentire con un comunicato', sub:'Rapido e chiaro', msg:'Hai smentito la voce. La cosa si è raffreddata in fretta.'},
    {texto:'Non darle peso', sub:'Ignori il rumore', msg:'Non hai detto nulla. La voce ha continuato a crescere.'},
    {texto:'Lasciare indizi e creare mistero', sub:'Gioco rischioso', ok:{msg:'Il mistero ha attirato attenzione positiva e vendite di maglie.'}, mal:{msg:'Il mistero è sfuggito di mano e i soci si sono agitati.'}},
  ] },

'med_redes': { titulo:'Crisi sui social',
  contexto:'Il social media manager {ERROR} e ora ci sono {REACCION}.',
  variables:{ ERROR:['ha pubblicato un tweet sfortunato','ha postato un meme di cattivo gusto','ha lasciato riemergere un vecchio video'],
              REACCION:['tifosi indignati','sponsor preoccupati','giornalisti in allerta'] },
  opciones:[
    {texto:'Chiedere scusa pubblicamente', sub:'Umiltà', msg:'Hai chiesto scusa e l’episodio si è chiuso in fretta.'},
    {texto:'Licenziare il social media manager', sub:'Mano dura', msg:'Hai licenziato il responsabile. Qualcuno l’ha visto come un capro espiatorio.'},
    {texto:'Fare finta di niente', sub:'Lasciar passare', msg:'Non hai detto nulla. La crisi si è trascinata più del dovuto.'},
  ] },

'med_figura_entrevista': { titulo:'Una stella parla troppo',
  contexto:'{JUGADOR}, la stella della rosa, ha rilasciato un’intervista a {CANAL} e ha parlato {TEMA}.',
  variables:{ CANAL:['un giornale','una radio','uno streaming'],
              TEMA:['dell’allenatore','della dirigenza','del suo futuro'] },
  opciones:[
    {texto:'Sostenere {JUGADOR}', sub:'Difesa pubblica', msg:'Hai sostenuto {JUGADOR}. Lo spogliatoio ha ringraziato e la stampa ha criticato.'},
    {texto:'Chiedergli un comunicato', sub:'Controllo dei danni', msg:'{JUGADOR} ha chiarito le sue parole. La cosa si è raffreddata, ma è rimasto del malumore.'},
    {texto:'Multarlo', sub:'Autorità con rischio', ok:{msg:'La multa a {JUGADOR} ha chiarito chi comanda. L’ha accettata senza problemi.'}, mal:{msg:'La multa a {JUGADOR} è caduta male e lo spogliatoio si è diviso.'}},
  ] },

'med_joven_viral': { titulo:'Video virale di un giovane',
  contexto:'Un video di {JUGADOR} ({JPOS}, {JEDAD} anni), {VIDEO}, è diventato tendenza e {OFERTA}.',
  variables:{ VIDEO:['mentre festeggia un gran gol','mentre aiuta un tifoso','mentre balla nello spogliatoio'],
              OFERTA:['un marchio vuole ingaggiarlo','un canale vuole intervistarlo','un grande club lo segue'] },
  opciones:[
    {texto:'Sfruttare il momento', sub:'Visibilità per il club', msg:'Hai sfruttato il video. {JUGADOR} è diventato famoso e il club ha guadagnato attenzione.'},
    {texto:'Proteggere il ragazzo', sub:'Eviti che si monti la testa', msg:'Hai protetto {JUGADOR}: ha continuato ad allenarsi senza distrazioni.'},
    {texto:'Lasciare che gestisca la sua fama', sub:'Autonomia rischiosa', ok:{msg:'{JUGADOR} l’ha gestita con intelligenza e il club ne ha beneficiato.'}, mal:{msg:'{JUGADOR} si è distratto e il suo rendimento è calato.'}},
  ] },

'med_arbitro': { titulo:'Polemica arbitrale',
  contexto:'Dopo {JUGADA} {PARTIDO}, devi decidere cosa dire.',
  variables:{ JUGADA:['un rigore non concesso','un gol annullato','un’espulsione dubbia'],
              PARTIDO:['nel derby','in coppa','nell’ultima partita'] },
  opciones:[
    {texto:'Lamentarti pubblicamente', sub:'Difendi la squadra', msg:'Ti sei lamentato con forza. I tifosi ti hanno applaudito e la lega ti ha multato.'},
    {texto:'Stare zitto', sub:'Prudenza', msg:'Non hai detto nulla. Qualcuno l’ha vista come debolezza.'},
    {texto:'Chiedere un incontro con la lega', sub:'Canale istituzionale', msg:'Hai chiesto un incontro. Ti hanno ascoltato, ma senza cambiamenti.'},
  ] },

/* ===================== TIFOSERIA ===================== */
'hin_barra': { titulo:'La curva chiede “collaborazione”',
  contexto:'Un capo della curva {TONO} chiede {PEDIDO}.',
  variables:{ TONO:['con tono gentile','con minacce velate','tramite un intermediario'],
              PEDIDO:['biglietti gratis','un pullman per la trasferta','soldi per gli striscioni'] },
  opciones:[
    {texto:'Cedere', sub:'Calmi la tribuna', msg:'Hai ceduto alla richiesta. La curva si è calmata e si sono accesi dei campanelli d’allarme.'},
    {texto:'Rifiutare', sub:'Rischio di conflitto', msg:'Hai rifiutato. La stampa ti ha applaudito e la curva si è arrabbiata.'},
    {texto:'Mediare con la lega e la polizia', sub:'Dipende dalla zona', ok:{msg:'La mediazione ha funzionato ed è stato concordato uno schema ordinato.'}, mal:{msg:'La mediazione è fallita e il clima si è fatto pesante.'}},
  ] },

'hin_expectativa': { titulo:'Aspettative smisurate dopo una buona serie',
  contexto:'Dopo {RACHA}, i tifosi già sognano {EXPECTATIVA} e si aggrappano a {JUGADOR} ({JPOS}, livello {JRATING}).',
  variables:{ RACHA:['cinque vittorie di fila','una goleada storica','un’imbattibilità di otto partite'],
              EXPECTATIVA:['il campionato','una coppa internazionale','la promozione diretta','un titolo'] },
  opciones:[
    {texto:'Alimentare l’illusione', sub:'Tutti felici, finché non si sbaglia', msg:'Hai acceso l’illusione. {JUGADOR} è diventato il nome della settimana.'},
    {texto:'Abbassare i toni', sub:'Realismo', msg:'Hai chiesto calma. I tifosi non l’hanno presa del tutto bene.'},
    {texto:'Promettere un rinforzo', sub:'Alimenti il sogno con i soldi', ok:{msg:'Il rinforzo è arrivato e l’illusione ha retto.'}, mal:{msg:'Il rinforzo non è stato all’altezza e {JUGADOR} si è caricato la pressione.'}},
  ] },

'hin_presion_resultados': { titulo:'Pressione per i risultati',
  contexto:'I tifosi {FORMA} perché {EXIGENCIA}.',
  variables:{ FORMA:['riempiono lo stadio di striscioni','intonano cori contro','mandano una lettera dal club dei tifosi'],
              EXIGENCIA:['tu cambi l’allenatore','arrivino dei rinforzi','si dimetta il consiglio'] },
  opciones:[
    {texto:'Rispondere con i fatti', sub:'Azione concreta', msg:'Hai risposto con misure concrete. La tribuna ha abbassato i toni.'},
    {texto:'Chiedere pazienza', sub:'Parole, non fatti', msg:'Hai chiesto pazienza. Alcuni hanno capito, altri no.'},
    {texto:'Incontrare i club di tifosi', sub:'Ascolto diretto', msg:'Ti sei incontrato con i club di tifosi. Si sono sentiti ascoltati.'},
  ] },

'hin_pide_cualidad': { titulo:'I tifosi chiedono un altro {CUALIDAD}',
  contexto:'I tifosi si sono innamorati di {JUGADOR}, il tuo {CUALIDAD}, e chiedono {CANAL} che tu ne ingaggi un altro come lui {PLAZO}.',
  variables:{ CANAL:['in un raduno allo stadio','sui social','con una lettera'],
              PLAZO:['prima della chiusura del mercato','questa settimana','per il derby'] },
  opciones:[
    {texto:'Andare sul mercato', sub:'Soldi in cambio di illusione', msg:'Sei andato a cercare un altro come {JUGADOR}. I tifosi si sono illusi.'},
    {texto:'Spiegare che non ci sono soldi', sub:'Realismo', msg:'Hai spiegato la situazione. I tifosi l’hanno capita a metà.'},
    {texto:'Promettere per il prossimo mercato', sub:'Calciare il pallone in avanti', msg:'Hai promesso per il prossimo mercato. La pazienza è rimasta in sospeso.'},
  ] },

'hin_banderazo': { titulo:'Raduno dei tifosi {OCASION}',
  contexto:'I tifosi organizzano un raduno {OCASION} e chiedono {PEDIDO}.',
  variables:{ OCASION:['prima del derby','prima della coppa','prima dell’ultima partita'],
              PEDIDO:['che si giochi nello stadio storico','che venga tutta la rosa a salutare','che non ci siano più sponsor sulla maglia'] },
  opciones:[
    {texto:'Accettare la richiesta', sub:'Gesto forte', msg:'Hai accettato la richiesta. I tifosi si sono sentiti ascoltati.'},
    {texto:'Rifiutarla con rispetto', sub:'Onesto', msg:'Hai rifiutato la richiesta con rispetto. Alcuni se ne sono andati infastiditi.'},
    {texto:'Mandare il capitano a salutare', sub:'Gesto simbolico', ok:{msg:'Il saluto del capitano ha commosso i tifosi.'}, mal:{msg:'Il saluto non è bastato ed è sembrato una scusa.'}},
  ] },

'hin_pena_viaje': { titulo:'I club di tifosi vogliono viaggiare',
  contexto:'I club di tifosi di {CLUB} chiedono aiuto per viaggiare {DESTINO} e reclamano {PEDIDO}.',
  variables:{ DESTINO:['in una città lontana','in un’altra regione','all’estero'],
              PEDIDO:['sconti sui biglietti','pullman del club','l’alloggio'] },
  opciones:[
    {texto:'Sostenere in pieno', sub:'Soldi e gesto', msg:'Hai sostenuto il viaggio. I tifosi hanno accompagnato la squadra in massa.'},
    {texto:'Aiuto parziale', sub:'Un po’ per parte', msg:'Hai aiutato solo in parte. Alcuni sono rimasti a casa.'},
    {texto:'Non poter aiutare', sub:'Proteggi la cassa', msg:'Non hai potuto aiutare. I tifosi l’hanno sentita come uno sgarbo.'},
  ] },

'hin_homenaje_exjugador': { titulo:'Omaggio a un idolo ritirato',
  contexto:'I tifosi chiedono un omaggio a {JUGADOR}, idolo ritirato, con {FORMA} {MOMENTO}.',
  variables:{ FORMA:['una statua','una partita d’addio','una maglia ritirata','una targa nello stadio'],
              MOMENTO:['prima del derby','nell’anniversario','a fine stagione'] },
  opciones:[
    {texto:'Fare l’omaggio in grande', sub:'Emozione e spesa', msg:'L’omaggio a {JUGADOR} è stato emozionante e ha riempito lo stadio.'},
    {texto:'Un omaggio semplice', sub:'Austero', msg:'Hai fatto un omaggio semplice a {JUGADOR}. Nessuno ha pianto, nessuno si è lamentato.'},
    {texto:'Rimandarlo', sub:'Niente soldi per ora', msg:'Hai rimandato l’omaggio a {JUGADOR}. I tifosi si sono risentiti.'},
  ] },

'hin_idolo_cantito': { titulo:'La curva canta per una stella',
  contexto:'I tifosi dedicano un coro a {JUGADOR} {CANTO} e chiedono {PEDIDO}.',
  variables:{ CANTO:['in curva','sui social','durante un raduno'],
              PEDIDO:['un rinnovo lungo','un aumento di stipendio','la fascia di capitano'] },
  opciones:[
    {texto:'Accontentare i tifosi', sub:'Gesto forte', msg:'Hai accontentato i tifosi. {JUGADOR} si è sentito amato.'},
    {texto:'Spiegare i tempi', sub:'Prudenza', msg:'Hai spiegato che ogni cosa ha i suoi tempi. I tifosi l’hanno tollerato.'},
    {texto:'Che decida il giocatore', sub:'Gli passi la palla', ok:{msg:'{JUGADOR} l’ha presa con umiltà e si è impegnato.'}, mal:{msg:'{JUGADOR} si è sentito sotto pressione e il suo rendimento è calato.'}},
  ] },

'hin_precios': { titulo:'Prezzi dei biglietti',
  contexto:'Si discute {MEDIDA} {MOTIVO}.',
  variables:{ MEDIDA:['di alzare il prezzo dei biglietti','di abbassare il prezzo delle curve','di creare un abbonamento famiglia'],
              MOTIVO:['a causa dell’inflazione','in vista del derby','a causa del debito'] },
  opciones:[
    {texto:'Approvare la misura', sub:'Dai seguito alla proposta', msg:'Hai approvato la misura. Gli incassi si sono mossi.'},
    {texto:'Respingerla', sub:'Mantieni lo status quo', msg:'Hai respinto la misura. I tifosi hanno tirato un sospiro di sollievo.'},
    {texto:'Un piano pilota', sub:'Prova per tre giornate', msg:'Hai fatto una prova. Si vedranno i numeri.'},
  ] },

'hin_seguridad': { titulo:'Sicurezza per {PARTIDO}',
  contexto:'Per {PARTIDO}, si propone {MEDIDA}. Costerà soldi e può dare fastidio alla gente.',
  variables:{ PARTIDO:['il derby regionale','una partita di coppa','una partita contro un rivale storico'],
              MEDIDA:['di usare braccialetti identificativi','di aggiungere delle barriere','di schierare più polizia'] },
  opciones:[
    {texto:'Approvare la misura', sub:'Più sicurezza, più costi', msg:'Hai approvato la misura. La partita è stata tranquilla.'},
    {texto:'Respingerla', sub:'Risparmi', msg:'Hai respinto la misura. Ci sono stati alcuni incidenti.'},
    {texto:'Applicarla a metà', sub:'Compromesso', ok:{msg:'La versione ridotta è bastata a evitare problemi.'}, mal:{msg:'La versione ridotta non è bastata ed è scoppiato il caos.'}},
  ] },

'hin_socio_historico': { titulo:'Un socio storico chiede un gesto',
  contexto:'{SOCIO} chiede {PEDIDO}.',
  variables:{ SOCIO:['Un socio di 90 anni','Una famiglia di quattro generazioni','Un gruppo di pensionati'],
              PEDIDO:['biglietti gratis a vita','una visita allo spogliatoio','che la squadra li saluti'] },
  opciones:[
    {texto:'Concederlo', sub:'Gesto caloroso', msg:'Hai concesso la richiesta. La storia del club si è sentita viva.'},
    {texto:'Una visita simbolica', sub:'Meno costo', msg:'Hai offerto una visita simbolica. Sono rimasti soddisfatti.'},
    {texto:'Rifiutare con rispetto', sub:'Precedente tutelato', msg:'Hai rifiutato con rispetto. Si sono mostrati delusi.'},
  ] },

'hin_derrota': { titulo:'Reazione dopo la sconfitta',
  contexto:'Dopo {RESULTADO}, la tribuna ha risposto con {REACCION}.',
  variables:{ RESULTADO:['una goleada subita in casa','una sconfitta nel derby','un’eliminazione in coppa'],
              REACCION:['fischi','striscioni che chiedono dimissioni','la tribuna quasi vuota'] },
  opciones:[
    {texto:'Metterci la faccia', sub:'Parli con la gente', msg:'Ci hai messo la faccia e la tribuna l’ha apprezzato.'},
    {texto:'Radunare la rosa', sub:'Focus sul campo', msg:'Hai radunato la rosa per rimettere la squadra in carreggiata.'},
    {texto:'Aspettare che passi', sub:'Senza risposte', msg:'Non hai detto nulla. La tribuna si è sentita abbandonata.'},
  ] },

/* ===================== CONSEGUENZE ===================== */
'cons_vendido_brilla': { titulo:'{JUGADOR} brilla dove l’hai venduto',
  contexto:'{JUGADOR}, che hai lasciato andare, {HAZANA}. I tifosi te lo ricordano a ogni partita.',
  variables:{ HAZANA:['ha segnato un gran gol all’esordio','è stato la stella del derby dall’altra parte','è già titolare inamovibile','è finito in tutti i riassunti della giornata'] },
  opciones:[
    {texto:'Provare a riprenderlo', sub:'Caro e con orgoglio ferito', msg:'{JUGADOR} è tornato: hai pagato troppo, ma la tribuna ha festeggiato.'},
    {texto:'Dire che è stato il meglio per il club', sub:'Difendi la decisione', msg:'Hai difeso la vendita. Pochi ti hanno creduto e lo spogliatoio ha preso nota.'},
    {texto:'Congratularti in pubblico', sub:'Eleganza', msg:'Ti sei congratulato con {JUGADOR} sui social: sei passato per un gentiluomo.'},
  ] },

'cons_vendido_vestuario': { titulo:'Lo spogliatoio chiede della cessione',
  contexto:'Dopo l’addio di una delle stelle, {REFERENTE} chiede di parlare con te: la domanda è se il club ha un progetto o sta svendendo.',
  variables:{ REFERENTE:['il capitano','un gruppo di senatori','il delegato della rosa'] },
  opciones:[
    {texto:'Promettere rinforzi', sub:'Impegno da mantenere', msg:'Hai promesso rinforzi. La rosa si è calmata, ma ora bisogna mantenere.'},
    {texto:'Spiegare il progetto con i numeri', sub:'Franchezza', msg:'Hai mostrato i conti: non è piaciuto, ma hanno capito.'},
    {texto:'Chiudere il discorso', sub:'Autorità, senza spiegazioni', msg:'Hai chiuso il discorso. Lo spogliatoio è rimasto risentito.'},
  ] },

'cons_recorte_reclamo': { titulo:'La rosa protesta per i tagli',
  contexto:'L’austerità sulle spese è arrivata nello spogliatoio: {RECLAMO}. I giocatori vogliono una risposta prima della prossima partita.',
  variables:{ RECLAMO:['i premi sono arrivati in ritardo','i ritiri sono stati ridotti','ora si viaggia in pullman'] },
  opciones:[
    {texto:'Pagare i premi', sub:'Lo spogliatoio si calma, costa soldi', msg:'Hai pagato il dovuto: la rosa ha risposto in campo.'},
    {texto:'Mantenere il taglio', sub:'Disciplina fiscale', msg:'Hai mantenuto il taglio. La cassa respira, lo spogliatoio no.'},
    {texto:'Promettere premi se arrivano i risultati', sub:'Scommessa sull’impegno', ok:{msg:'La rosa si è motivata e la squadra ha vinto: mantenere la promessa costerà poco.'}, mal:{msg:'I risultati non sono arrivati e la rosa ha sentito di essere stata ingannata.'}},
  ] },

'cons_recorte_socios': { titulo:'I soci notano i tagli',
  contexto:'{AVISO} e sui social si moltiplicano le lamentele: “con questo dirigente si taglia tutto”.',
  variables:{ AVISO:['Il bar della curva ha chiuso','La sede sociale ha abbassato la serranda prima del tempo','Le quote sono state aggiornate senza preavviso'] },
  opciones:[
    {texto:'Spiegare il risparmio', sub:'Trasparenza', msg:'Hai spiegato il motivo dei tagli: la maggior parte ha capito.'},
    {texto:'Compensare con un beneficio', sub:'Costa, ma calma', msg:'Hai aggiunto un vantaggio per i soci e le lamentele si sono spente.'},
    {texto:'Ignorare le lamentele', sub:'Comanda il risparmio', msg:'Hai ignorato il rumore. Hai risparmiato, ma la tribuna se lo è ricordato.'},
  ] },

'cons_prensa_vendetta': { titulo:'Il giornalista non ti perdona',
  contexto:'{PERIODISTA} non molla: ogni puntata inizia ricordando il tuo ultimo scivolone.',
  variables:{ PERIODISTA:['Il conduttore del programma delle dieci','Un cronista storico del club','Un’editorialista di un portale sportivo'] },
  opciones:[
    {texto:'Invitarlo a un confronto', sub:'Abbassare la tensione', msg:'Vi siete seduti a parlare. Il pezzo successivo è stato più gentile.'},
    {texto:'Non rispondere', sub:'Lasciare che si esaurisca', msg:'Non hai risposto. La storia è durata altre due settimane.'},
    {texto:'Contrattaccare con un comunicato', sub:'Può andare benissimo o malissimo', ok:{msg:'Il comunicato ha colpito nel segno: l’opinione pubblica era con te.'}, mal:{msg:'Il comunicato è caduto malissimo e il giornalista l’ha usato come legna da ardere.'}},
  ] },

'cons_racha_presion': { titulo:'La vittoria alza le aspettative',
  contexto:'Dopo il buon risultato, {HINCHADA}. Ora qualsiasi passo falso verrà letto come una crisi.',
  variables:{ HINCHADA:['la curva ha cominciato a cantare per il titolo','la stampa parla già di favorite','i soci chiedono rinforzi di grande livello'] },
  opciones:[
    {texto:'Chiedere calma', sub:'Abbassare la pressione', msg:'Hai chiesto calma: lo spogliatoio ha tirato il fiato, la tribuna si è frenata.'},
    {texto:'Promettere di lottare in alto', sub:'Alzi la posta', msg:'Hai promesso di lottare in alto. Ora bisogna mantenere.'},
    {texto:'Premiare la rosa', sub:'Riconoscimento con costo', msg:'Hai premiato la rosa per la serie: sono con te fino alla morte.'},
  ] },

'cons_vestuario_reunion': { titulo:'Lo spogliatoio si è rotto',
  contexto:'{SINTOMA}. L’allenatore ti avverte che, se non si interviene, il gruppo si spacca in due.',
  variables:{ SINTOMA:['Due senatori hanno litigato a urla in allenamento','C’è un gruppo di giocatori che non parla più con l’allenatore','È trapelato un audio della rosa che critica la dirigenza'] },
  opciones:[
    {texto:'Riunione a quattro occhi con i senatori', sub:'Dialogo diretto', msg:'La riunione ha rimesso in ordine il gruppo. È costata fatica, ma ne è valsa la pena.'},
    {texto:'Cambiare il capitano', sub:'Gesto forte', msg:'Hai cambiato il capitano. Alcuni hanno applaudito, altri sono rimasti in silenzio.'},
    {texto:'Sanzionare i coinvolti', sub:'Mano dura', msg:'Hai sanzionato i coinvolti: la stampa ha applaudito, lo spogliatoio si è raffreddato.'},
  ] },

'cons_capitan_renuncia': { titulo:'Il capitano vuole andarsene',
  contexto:'{JUGADOR}, il capitano, ti chiede di parlare: {MOTIVO}. Se se ne va, il gruppo resta senza punto di riferimento.',
  variables:{ MOTIVO:['dice di non sentirsi più sostenuto','è stufo del clima nello spogliatoio','ha ricevuto un’offerta ed è tentato'] },
  opciones:[
    {texto:'Convincerlo con un miglioramento del contratto', sub:'Costa soldi, mette ordine nel gruppo', msg:'{JUGADOR} ha rinnovato e ha rimesso in ordine il gruppo.'},
    {texto:'Riunirti con tutta la rosa', sub:'Mettere le carte in tavola', msg:'La riunione è stata aspra, ma il gruppo ne è uscito più unito.'},
    {texto:'Lasciarlo andare', sub:'Tagli di netto', msg:'{JUGADOR} se n’è andato. Sono entrati soldi, ma lo spogliatoio è rimasto orfano.'},
  ] },

'cons_vestuario_oro': { titulo:'La rosa si butta nel fuoco per te',
  contexto:'Il gruppo è così unito che {GESTO}. È il momento migliore per chiedere loro uno sforzo extra.',
  variables:{ GESTO:['i senatori propongono di rinnovare con un taglio','i giovani chiedono di allenarsi in doppia seduta','la rosa ha organizzato una grigliata con i soci'] },
  opciones:[
    {texto:'Approfittare dello slancio', sub:'Pretendere di più, senza costi', msg:'Hai chiesto di più e hanno risposto in campo, anche se il gruppo ha sentito lo strappo.'},
    {texto:'Premiarli con un viaggio', sub:'Curare il clima', msg:'Il viaggio è stato un successo: il gruppo è con te fino alla morte.'},
    {texto:'Lasciare tutto com’è', sub:'Non toccare ciò che funziona', msg:'Non hai toccato nulla. A volte è la decisione migliore.'},
  ] },

'dep_arquero_apuro': { titulo:'Sei rimasto senza portieri',
  contexto:'La rosa ha un solo portiere e l’allenatore non vuole tentare la sorte. Si fa avanti {JUGADOR}, portiere di {JEDAD} anni e livello {JRATING}.',
  variables:{ PLAZO:['questa settimana'] },
  opciones:[
    {texto:'Ingaggiare {JUGADOR}', sub:'Sicurezza tra i pali', msg:'{JUGADOR} approda a {CLUB}: l’allenatore ha dormito tranquillo per la prima volta da settimane.'},
    {texto:'Promuovere un giovane', sub:'Fidarsi del vivaio', msg:'Hai promosso un giovane come riserva. È una scommessa.'},
    {texto:'Arrangiarsi con quello che c’è', sub:'Zero spesa, zero rete', msg:'Non hai fatto nulla. L’allenatore ha chiarito di averti avvisato.'},
  ] },

});
