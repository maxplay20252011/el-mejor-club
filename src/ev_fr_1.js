/* Événements — traduction française (partie 1 : plantillas de eventos.js) */
EVENTOS_I18N.fr = Object.assign(EVENTOS_I18N.fr || {}, {

'dep_refuerzo': { titulo:'L’entraîneur réclame un renfort en urgence',
  contexto:'Avec {MOTIVO}, l’entraîneur te réclame un renfort {PLAZO}. Il y a un candidat : {JUGADOR}, {JPOS} de {JEDAD} ans et de niveau {JRATING}.',
  variables:{ MOTIVO:['deux blessés au milieu de terrain','la suspension d’un titulaire','une série de buts encaissés','la vente d’un coéquipier clé'],
              PLAZO:['dès cette semaine','avant la fermeture du mercato','pour le match de dimanche'] },
  opciones:[
    { texto:'Recruter {JUGADOR}', sub:'Renfort immédiat, ça coûte cher', msg:'{JUGADOR} est arrivé à {CLUB} : l’entraîneur sourit et la trésorerie fait ses comptes.' },
    { texto:'Que l’effectif se débrouille', sub:'Zéro dépense, plus de risque', msg:'Tu as misé sur le groupe. {JUGADOR} n’est pas venu et l’entraîneur l’a rappelé en conférence de presse.' },
    { texto:'Proposer un contrat court à {JUGADOR}', sub:'Moitié prix, mais il peut se vexer', ok:{ msg:'{JUGADOR} a accepté le contrat court et rend de bons services dès le premier jour.' }, mal:{ msg:'{JUGADOR} s’est vexé et a signé ailleurs : tu as perdu du temps et des démarches.' } },
  ] },

'dep_fichaje_ambicioso': { titulo:'Recrutement ambitieux',
  contexto:'{REPRE} te propose {JUGADOR} ({JPOS}, {JEDAD} ans, niveau {JRATING}) et {COND}. C’est un gros nom, mais il coûte cher.',
  variables:{ REPRE:['Un agent bien connecté','Un homme d’affaires du coin','Un ancien dirigeant reconverti en intermédiaire'],
              COND:['demande une clause de départ basse','exige un contrat long et bien payé','réclame le numéro 10 et une place de titulaire'] },
  opciones:[
    { texto:'Faire l’investissement', sub:'Recrue d’impact, caisse touchée', msg:'Tu as présenté {JUGADOR} en grande pompe. Les adhérents font déjà leurs comptes.' },
    { texto:'Négocier à la baisse', sub:'Moins de risque, moins d’éclat', msg:'Tu as conclu moins cher : {JUGADOR} est arrivé sans bruit et sans promesses.' },
    { texto:'Laisser passer', sub:'Tu protèges la caisse', msg:'Tu as dit non. {JUGADOR} a signé ailleurs et l’entraîneur est resté à fixer le plafond.' },
  ] },

'dep_juvenil_venta': { titulo:'Vente d’un jeune à l’étranger',
  contexto:'{DESTINO} veut emmener {JUGADOR}, {JPOS} de {JEDAD} ans, {FORMA}. Les supporters l’adorent.',
  variables:{ DESTINO:['Un club d’Europe de l’Est','Une ligue du Moyen-Orient','Une équipe du Mexique','Un club de deuxième division européenne'],
              FORMA:['avec un paiement échelonné','avec un pourcentage sur une future revente','au comptant mais avec une remise'] },
  opciones:[
    { texto:'Vendre', sub:'L’argent rentre, la promesse s’en va', msg:'{JUGADOR} est parti et {CLUB} a encaissé. Dans la tribune, il y a eu des mouchoirs.' },
    { texto:'Le retenir', sub:'Tu gardes la promesse', msg:'{JUGADOR} reste. Le kop le chante tout l’après-midi.' },
    { texto:'Demander plus d’argent', sub:'Ça passe ou ça casse', ok:{ msg:'Ils ont accepté la contre-offre : affaire en or avec {JUGADOR}.' }, mal:{ msg:'L’acheteur s’est vexé et s’est retiré : ni argent ni jeune joueur content.' } },
  ] },

'dep_lesion_capitan': { titulo:'Blessure grave du capitaine',
  contexto:'{JUGADOR}, capitaine et {JPOS} de {JEDAD} ans, a subi {LESION} et sera absent {TIEMPO}. Le vestiaire attend ta réponse.',
  variables:{ LESION:['une rupture des ligaments','une fracture du péroné','une déchirure grave'],
              TIEMPO:['pour environ trois mois','pour environ quatre mois','pour le reste de la saison','pour une durée indéterminée'] },
  opciones:[
    { texto:'Recruter un remplaçant', sub:'Rustine coûteuse', msg:'Tu as recruté un remplaçant. {JUGADOR} suit le processus depuis la tribune.' },
    { texto:'Faire confiance à l’effectif', sub:'Sans dépense, avec risque', msg:'Sans {JUGADOR}, l’équipe souffre, mais le groupe se montre uni.' },
    { texto:'Parier sur un retour express', sub:'Ça peut très bien ou très mal tourner', ok:{ msg:'{JUGADOR} est revenu plus tôt que prévu : le vestiaire a explosé de joie.' }, mal:{ msg:'{JUGADOR} s’est blessé à nouveau et le pari a coûté une fortune.' } },
  ] },

'dep_descenso': { titulo:'Bataille directe pour le maintien',
  contexto:'Tu joues {CONTEXTO} contre {RIVAL} : le perdant se retrouve au bord du gouffre.',
  variables:{ RIVAL:['un concurrent direct','une équipe en pleine ascension','le dernier du classement'],
              CONTEXTO:['sur terrain neutre','à domicile devant un stade plein','à l’extérieur, très loin de chez toi'] },
  opciones:[
    { texto:'Aller chercher la victoire coûte que coûte', sub:'Quitte ou double', ok:{ msg:'Tu as gagné le match de ta vie : {CLUB} respire.' }, mal:{ msg:'Tu as perdu et le gouffre se rapproche. La tribune ne pardonne pas.' } },
    { texto:'Plan prudent', sub:'Un point, et on souffre', msg:'Match nul arraché. L’agonie se prolonge, mais on prend un point.' },
    { texto:'Promettre des primes à l’effectif', sub:'Des primes à la victoire', msg:'Tu as promis des primes et l’effectif est entré avec un autre visage. La trésorerie, un peu moins.' },
  ] },

'dep_tecnico_garantias': { titulo:'L’entraîneur réclame des garanties',
  contexto:'{PERFIL} qui dirige {CLUB} prévient : il lui faut {EXIGE}, sinon il part.',
  variables:{ PERFIL:['Le jeune entraîneur','Le vieux briscard','L’ancien joueur emblématique'],
              EXIGE:['plus de temps','un adjoint de confiance','moins de pression médiatique'] },
  opciones:[
    { texto:'Lui donner ce qu’il demande', sub:'Tu l’attaches au club', msg:'Tu lui as fait plaisir : l’entraîneur s’est senti soutenu et l’équipe l’a senti.' },
    { texto:'Contrat jusqu’à la fin de la saison', sub:'Pas d’engagement long', msg:'Tu as posé les limites. L’entraîneur s’est fâché et ça se voit au vestiaire.' },
    { texto:'Le laisser partir', sub:'Pari audacieux', ok:{ msg:'Le nouvel entraîneur est arrivé avec des idées fraîches et {CLUB} a démarré sur les chapeaux de roues.' }, mal:{ msg:'Tu as lâché l’entraîneur et son remplaçant ne convainc pas : les supporters te font payer l’addition.' } },
  ] },

'dep_cambio_dt': { titulo:'Virer l’entraîneur ?',
  contexto:'Il y a {RACHA}, et la tête de l’entraîneur est réclamée par {PRESION}.',
  variables:{ RACHA:['quatre matchs sans victoire','trois défaites de suite','un 0-3 à domicile'],
              PRESION:['la presse','les supporters','une partie du comité directeur'] },
  opciones:[
    { texto:'Le virer', sub:'Changement d’air, indemnité', msg:'Tu as viré l’entraîneur. Le nouveau a apporté de l’énergie, même si l’indemnité fait mal.' },
    { texto:'Le soutenir', sub:'Tu confirmes le projet', msg:'Tu as soutenu l’entraîneur. Les critiques ne manqueront pas de te le rappeler.' },
    { texto:'Lui donner deux matchs de plus', sub:'Dernière chance', ok:{ msg:'L’entraîneur a réagi et sauvé sa place : tu passais pour un visionnaire.' }, mal:{ msg:'Il a encore perdu et tu passes pour un naïf.' } },
  ] },

'dep_figura_banco': { titulo:'L’entraîneur veut mettre une star sur le banc',
  contexto:'Pour {PARTIDO}, l’entraîneur veut asseoir {JUGADOR} ({JPOS}, niveau {JRATING}) sur le banc {RAZON}. Les supporters ne comprennent pas.',
  variables:{ PARTIDO:['la demi-finale de coupe','le derby','le match décisif'],
              RAZON:['à cause de sa méforme','à cause d’une gêne qui ne guérit pas','pour indiscipline tactique'] },
  opciones:[
    { texto:'Soutenir l’entraîneur', sub:'L’autorité contre les supporters', msg:'L’entraîneur a mis {JUGADOR} sur le banc et l’équipe a montré plus d’ordre. Le kop a sifflé.' },
    { texto:'Lui demander de le titulariser', sub:'Star sur le terrain, entraîneur agacé', msg:'{JUGADOR} a joué et les supporters se sont pris à rêver. L’entraîneur ne te l’a pas pardonné.' },
    { texto:'Laisser faire l’entraîneur', sub:'C’est le terrain qui tranchera', ok:{ msg:'L’entraîneur avait raison : sans {JUGADOR}, l’équipe a été plus équilibrée.' }, mal:{ msg:'Sans {JUGADOR}, l’équipe s’est éteinte et on a mis ça sur le dos de la direction.' } },
  ] },

'dep_pretemporada': { titulo:'Préparation d’avant-saison : {PLAN}',
  contexto:'Le staff technique propose {PLAN} {PRESUPUESTO}. L’idée divise.',
  variables:{ PLAN:['une tournée en province','un match amical international','un tournoi d’été'],
              PRESUPUESTO:['avec un petit budget','avec une campagne d’abonnements','avec un sponsor local'] },
  opciones:[
    { texto:'Approuver le plan', sub:'Rythme et visibilité, ça coûte', msg:'La préparation s’est déroulée en entier : l’effectif est arrivé affûté et les adhérents l’ont vu.' },
    { texto:'Plan austère au centre d’entraînement', sub:'Économies, moins de rythme', msg:'Ils ont travaillé à la maison. Tu as économisé, mais le rythme de la compétition a manqué.' },
    { texto:'L’approuver avec un match d’exhibition payant', sub:'Ça peut bien ou mal tourner', ok:{ msg:'L’exhibition a attiré du monde et de l’argent : le plan s’est payé tout seul.' }, mal:{ msg:'L’exhibition a été un fiasco et la tournée s’est soldée par une perte.' } },
  ] },

'dep_cancha': { titulo:'Le terrain est en mauvais état',
  contexto:'{PROBLEMA} a montré des signes d’effondrement {EPOCA}. Les joueurs se plaignent.',
  variables:{ PROBLEMA:['La pelouse','Le drainage','L’éclairage'],
              EPOCA:['avant un match clé','en plein hiver','en pleine mauvaise série'] },
  opciones:[
    { texto:'Réparer tout de suite', sub:'Travaux complets', msg:'Les travaux ont été faits à temps. Les joueurs et les adhérents l’ont remarqué.' },
    { texto:'Un rafistolage pas cher', sub:'Ça tient pour l’instant', msg:'On a bouché l’urgent. Avec un peu de chance, ça tiendra jusqu’à la fin de la saison.' },
    { texto:'Jouer comme ça et prier', sub:'Zéro dépense, gros risque', ok:{ msg:'Il ne s’est rien passé : tu as économisé et personne n’en a rien su.' }, mal:{ msg:'Il y a eu un fiasco sur le terrain et la presse l’a répété toute la semaine.' } },
  ] },

'dep_inferiores': { titulo:'Réorganiser le centre de formation',
  contexto:'Le coordinateur du centre de formation propose {CAMBIO}, financé {FONDOS}.',
  variables:{ CAMBIO:['d’ouvrir un internat pour les jeunes de province','d’engager un recruteur par région','de monter un tournoi maison de détection'],
              FONDOS:['par les cotisations des adhérents','avec l’argent de l’équipe première','grâce à une convention avec la mairie'] },
  opciones:[
    { texto:'Soutenir à fond', sub:'Investissement pour l’avenir', msg:'Le centre de formation a reçu de l’argent et de l’enthousiasme. Les fruits se verront dans quelques années.' },
    { texto:'Faire le minimum', sub:'Un simple geste', msg:'Un petit ajustement a été fait : le coordinateur l’a pris comme un camouflet.' },
    { texto:'Prioriser l’équipe première', sub:'Des résultats tout de suite', msg:'Tu as dit que l’argent va à l’équipe première. Il y a eu des résultats, et des reproches.' },
  ] },

'dep_capitan_descanso': { titulo:'Le capitaine demande du repos',
  contexto:'Le capitaine {JUGADOR} ({JPOS}, {JEDAD} ans) demande à lever le pied {MOTIVO} {FECHA}.',
  variables:{ MOTIVO:['pour cause de fatigue accumulée','pour raison familiale','à cause d’une vieille gêne'],
              FECHA:['avant la coupe','en pleine série','avant un derby'] },
  opciones:[
    { texto:'Accepter', sub:'Le groupe le respecte', msg:'{JUGADOR} s’est reposé et l’effectif a apprécié le geste, même si l’équipe l’a regretté.' },
    { texto:'Lui demander de jouer', sub:'L’équipe tient', msg:'{JUGADOR} a joué en serrant les dents. Le groupe a compris, mais avec des doutes.' },
    { texto:'Convenir d’un repos partiel', sub:'Compromis risqué', ok:{ msg:'Le repos partiel a bien fonctionné : {JUGADOR} est revenu frais.' }, mal:{ msg:'L’accord n’a satisfait personne et {JUGADOR} a joué à mi-régime.' } },
  ] },

'dep_cualidad_minutos': { titulo:'Ton {CUALIDAD} réclame du temps de jeu',
  contexto:'{JUGADOR}, ton {CUALIDAD}, trouve qu’il joue peu {MOMENTO} et {ACCION}.',
  variables:{ MOMENTO:['lors de la dernière journée','depuis un mois','depuis le changement d’entraîneur'],
              ACCION:['a demandé un rendez-vous','a menacé de partir','a publié un message énigmatique'] },
  opciones:[
    { texto:'Lui donner plus de temps de jeu', sub:'Lui content, l’entraîneur non', msg:'{JUGADOR} a plus joué et s’est montré motivé. L’entraîneur n’a pas caché son agacement.' },
    { texto:'Qu’il encaisse le banc', sub:'L’autorité du staff', msg:'{JUGADOR} a accepté à contrecœur et le vestiaire a senti ta main ferme.' },
    { texto:'Arbitrer par une discussion', sub:'Sortie diplomatique', msg:'Tu as parlé avec {JUGADOR} : il est plus tranquille, même si rien n’est réglé.' },
  ] },

'eco_sponsor_dudoso': { titulo:'{TIPO} offre de l’argent pour {ELEM}',
  contexto:'L’offre est tentante, mais personne ne sait trop d’où vient l’argent. Avec son logo sur {ELEM}, {CLUB} serait lié pour des années.',
  variables:{ TIPO:['Une marque de boissons énergisantes','Une plateforme crypto à la réputation douteuse','Une société de crédits rapides'],
              ELEM:['la manche','le dos','le short'] },
  opciones:[
    { texto:'Accepter', sub:'Argent frais, réputation en jeu', msg:'Tu as signé l’accord et l’argent est rentré. Les adhérents ont froncé les sourcils.' },
    { texto:'Refuser', sub:'Tu protèges l’image', msg:'Tu as dit non. Les supporters l’ont apprécié, la trésorerie moins.' },
    { texto:'Négocier les conditions', sub:'Moins d’argent, plus de prudence', msg:'Tu as conclu un accord plus limité, avec des clauses de sortie.' },
  ] },

'eco_deuda': { titulo:'Dette envers {ACREEDOR}',
  contexto:'Il réclame son argent : {ACREEDOR}. La dette {PLAZO} et la caisse est juste.',
  variables:{ ACREEDOR:['le fisc','la société de sécurité','l’équipementier'],
              PLAZO:['arrive à échéance cette semaine','arrive à échéance en fin de mois','est déjà en mise en demeure'] },
  opciones:[
    { texto:'Payer d’un coup', sub:'Soulagement total, caisse vide', msg:'Tu as tout payé d’un coup. Tu as respiré, même si la caisse est à sec.' },
    { texto:'Refinancer avec intérêts', sub:'Repousser le problème', msg:'Tu as refinancé la dette. Tu paies moins aujourd’hui et plus demain.' },
    { texto:'Repousser le paiement', sub:'Pari sur l’oubli', ok:{ msg:'Le créancier a attendu et tout a suivi son cours.' }, mal:{ msg:'Le créancier s’est fâché et la nouvelle a fait le tour des médias.' } },
  ] },

'eco_fondo_pase': { titulo:'Un fonds d’investissement veut le transfert de {JUGADOR}',
  contexto:'{FONDO} propose de payer d’avance {PORC} de la valeur marchande de {JUGADOR} ({JPOS}, niveau {JRATING}) et de l’emmener dans un autre club.',
  variables:{ PORC:['70 %','85 %','100 %'],
              FONDO:['Un fonds étranger','Un fonds local','Une société anonyme d’investissement'] },
  opciones:[
    { texto:'Accepter', sub:'L’argent tout de suite, le joueur s’en va', msg:'Tu as conclu avec le fonds et une belle somme est rentrée. {JUGADOR} est passé dans un autre club.' },
    { texto:'Refuser', sub:'Tu gardes le joueur', msg:'Tu as refusé. {JUGADOR} reste à {CLUB} et les supporters t’applaudissent.' },
    { texto:'Demander plus d’argent et sans intermédiaires', sub:'Ça peut se conclure ou se rompre', ok:{ msg:'Le fonds a accepté la contre-offre et {JUGADOR} est parti, avec une belle affaire pour {CLUB}.' }, mal:{ msg:'Le fonds s’est retiré et la rumeur dit que tu étais en difficulté.' } },
  ] },

'eco_juicio_exjugador': { titulo:'Procès d’un ancien joueur',
  contexto:'{JUGADOR}, qui a pris sa retraite, réclame {RECLAMO} et l’avocat du club {ABOGADO}.',
  variables:{ RECLAMO:['des primes impayées','une indemnité','des salaires en retard','un pourcentage sur un vieux transfert'],
              ABOGADO:['conseille de s’arranger vite','assure qu’on peut gagner','recommande de ne pas parler à la presse'] },
  opciones:[
    { texto:'S’arranger', sub:'Tu clos le dossier', msg:'Tu t’es arrangé avec {JUGADOR}. Le club a perdu de l’argent et le conflit est mort.' },
    { texto:'Aller au procès', sub:'Ça peut très bien ou très mal tourner', ok:{ msg:'Tu as gagné le procès contre {JUGADOR}. Et tu as touché les dépens.' }, mal:{ msg:'Tu as perdu le procès et {JUGADOR} a touché plus que prévu, avec les intérêts.' } },
    { texto:'Le payer en plusieurs fois', sub:'La caisse respire, le drame dure', msg:'Tu as convenu d’échéances avec {JUGADOR} : la caisse respire, le dossier continue.' },
  ] },

'eco_naming': { titulo:'Naming du stade',
  contexto:'{EMPRESA} propose son nom pour le stade {DURACION}. Les supporters n’apprécient pas du tout.',
  variables:{ EMPRESA:['Une chaîne de supermarchés','Une marque d’électroménager','Une banque régionale'],
              DURACION:['pour trois ans','pour cinq ans','pour dix ans'] },
  opciones:[
    { texto:'Accepter', sub:'Gros chèque, supporters furieux', msg:'Le naming a été signé. Dans la tribune, des banderoles hostiles ont été accrochées.' },
    { texto:'Refuser', sub:'Tu respectes la tradition', msg:'Tu as refusé le naming. Les adhérents ont applaudi, la trésorerie non.' },
    { texto:'Ajouter le nom historique', sub:'Moitié-moitié', msg:'Ils ont accepté de garder le nom historique à côté. Personne n’est vraiment content.' },
  ] },

'eco_rival_cualidad': { titulo:'{RIVAL} veut t’acheter ton {CUALIDAD}',
  contexto:'{RIVAL} a mis sur la table {OFERTA} pour {JUGADOR}, {JPOS} de {JEDAD} ans. Le vestiaire attend ta réponse.',
  variables:{ RIVAL:['Un club de première division','Un club étranger','Une équipe d’une autre région'],
              OFERTA:['une grosse somme','une somme modérée plus un joueur','un prêt avec option d’achat','une offre en plusieurs versements'] },
  opciones:[
    { texto:'Vendre', sub:'L’argent rentre, le joueur s’en va', msg:'Tu as vendu {JUGADOR}. La caisse s’est remplie et le vestiaire s’est allégé.' },
    { texto:'Retenir', sub:'Tu gardes le joueur', msg:'Tu as dit que {JUGADOR} n’est pas à vendre. L’effectif t’en a remercié.' },
    { texto:'Demander le double', sub:'Affaire ou rupture', ok:{ msg:'Ils ont accepté de payer le double pour {JUGADOR}.' }, mal:{ msg:'Ils se sont levés de la table et {JUGADOR} a la tête ailleurs.' } },
  ] },

'eco_prestamo': { titulo:'Prêt pour payer les salaires',
  contexto:'Le jour de paie approche et ça ne suffit pas. {PRESTAMISTA} propose un prêt {TASA}.',
  variables:{ PRESTAMISTA:['Une banque régionale','Une mutuelle du quartier','Un adhérent chef d’entreprise'],
              TASA:['à taux élevé','garanti par la billetterie','avec clause de renégociation'] },
  opciones:[
    { texto:'Le prendre', sub:'Aujourd’hui on paie, demain on doit', msg:'Tu as pris le prêt. Les salaires ont été payés et la dette attendra un autre jour.' },
    { texto:'Demander de la patience à l’effectif', sub:'Sans dette, avec tension', msg:'Tu as demandé de la patience à l’effectif. Certains ont accepté, d’autres non.' },
    { texto:'Vendre une loge de luxe', sub:'Petite somme, rapide', msg:'Tu as vendu une loge. Ça a suffi à boucher l’urgent.' },
  ] },

'eco_merch': { titulo:'Nouvelle gamme de produits',
  contexto:'{SOCIO} propose de lancer {PRODUCTO}. L’investissement initial est risqué.',
  variables:{ SOCIO:['Un designer du quartier','Une chaîne de magasins','Une usine locale'],
              PRODUCTO:['des maillots rétro','une ligne urbaine','des cartes à collectionner'] },
  opciones:[
    { texto:'Le lancer en grand', sub:'Ça peut cartonner ou échouer', ok:{ msg:'Le lancement a été un succès : les boutiques sont tombées en rupture de stock.' }, mal:{ msg:'Le lancement n’a pas pris et il est resté du stock invendu.' } },
    { texto:'Une petite série', sub:'Risque modéré', msg:'Tu as fait une petite série et elle s’est vendue juste comme prévu.' },
    { texto:'Décliner la proposition', sub:'Tu ne t’y mets pas', msg:'Tu as dit non. Sans risque, mais sans argent frais.' },
  ] },

'eco_tv': { titulo:'Droits de retransmission',
  contexto:'{FORMATO} propose de retransmettre les matchs de {CLUB} {CONDICION}.',
  variables:{ FORMATO:['Une plateforme de streaming','Une chaîne câblée','Un média radio et web'],
              CONDICION:['avec des horaires imposés','avec exclusivité','avec paiement anticipé'] },
  opciones:[
    { texto:'Signer', sub:'De l’argent et de la visibilité', msg:'Tu as signé l’accord. Plus de public, mais certains horaires dérangent l’effectif.' },
    { texto:'Refuser', sub:'Tu gardes ta liberté', msg:'Tu as refusé l’offre : pas d’argent en plus, mais un calendrier à toi.' },
    { texto:'Négocier un accord partiel', sub:'Moins d’argent, plus de prudence', msg:'Tu as conclu une version réduite de l’accord.' },
  ] },

'eco_obras': { titulo:'Travaux dans les installations',
  contexto:'Il faut réparer {TRIBUNA} et le débat porte sur le financement : {FINANCIA}.',
  variables:{ TRIBUNA:['la tribune populaire','la tribune d’honneur','les loges'],
              FINANCIA:['sur fonds propres','avec un crédit','avec une campagne auprès des adhérents'] },
  opciones:[
    { texto:'Travaux complets', sub:'Grosse amélioration, caisse touchée', msg:'Les travaux complets sont terminés. Les adhérents sont contents, la trésorerie moins.' },
    { texto:'Seulement l’urgent', sub:'Le strict minimum', msg:'On a fait l’urgent : ça suffit, mais ça n’enthousiasme pas.' },
    { texto:'Reporter d’un an', sub:'Pari risqué', ok:{ msg:'Rien ne s’est passé : tu as économisé cet argent cette année.' }, mal:{ msg:'Il y a eu un problème faute de travaux et on a réparé dans la précipitation.' } },
  ] },

'eco_cuota_social': { titulo:'Augmenter la cotisation ?',
  contexto:'Le comité propose une hausse de {AUMENTO} {EXCUSA}.',
  variables:{ AUMENTO:['10 %','25 %','40 %'],
              EXCUSA:['pour payer les salaires','pour faire des travaux','pour solder les dettes'] },
  opciones:[
    { texto:'Augmenter la cotisation', sub:'De l’argent tout de suite, adhérents agacés', msg:'La cotisation a augmenté. De l’argent est rentré et il y a eu des plaintes sur les réseaux.' },
    { texto:'La maintenir', sub:'Adhérents tranquilles', msg:'Tu as maintenu la cotisation. Les adhérents te remercient, la caisse non.' },
    { texto:'L’augmenter de moitié', sub:'Solution intermédiaire', msg:'Tu as augmenté la cotisation de moitié. Personne n’est vraiment content.' },
  ] },

'eco_recital': { titulo:'Louer le stade pour un concert',
  contexto:'{ARTISTA} veut se produire au stade {FECHA}.',
  variables:{ ARTISTA:['Un groupe de rock','Un chanteur pop','Un festival de cumbia'],
              FECHA:['entre deux matchs','en pleine semaine de coupe','le week-end libre'] },
  opciones:[
    { texto:'Accepter', sub:'Argent en plus, pelouse mise à mal', msg:'Le concert s’est bien passé et a rempli la caisse. La pelouse a souffert.' },
    { texto:'Refuser', sub:'Tu protèges le terrain', msg:'Tu as refusé le concert : pelouse impeccable, caisse inchangée.' },
    { texto:'Accepter sous conditions', sub:'Moins d’argent, plus de soin', msg:'Tu as accepté avec des conditions strictes. Tout s’est passé proprement.' },
  ] },

'eco_cualidad_publicidad': { titulo:'Une marque veut ton {CUALIDAD} comme visage',
  contexto:'{MARCA} propose à {JUGADOR} d’être le visage de sa campagne {CONDICION}.',
  variables:{ MARCA:['Une marque de sportswear','Une chaîne de restauration rapide','Un opérateur de téléphonie'],
              CONDICION:['avec une part pour le club','avec des horaires qui entrent en conflit avec les entraînements','avec exclusivité pendant un an'] },
  opciones:[
    { texto:'Accepter', sub:'De l’argent et de la visibilité', msg:'{JUGADOR} a signé le contrat. Le club a reçu sa part et la presse en a parlé.' },
    { texto:'Refuser', sub:'On se concentre sur le sportif', msg:'Tu as refusé la proposition : {JUGADOR} est resté concentré sur son affaire.' },
    { texto:'Négocier un accord court', sub:'Un peu de tout', msg:'Tu as conclu une campagne plus courte, sans gêner les entraînements.' },
  ] },

'eco_fichaje_cuota': { titulo:'L’échéance du transfert tombe',
  contexto:'L’échéance du transfert coûteux que tu as conclu est arrivée et la caisse est {ESTADO}. {ACREEDOR} n’attend pas.',
  variables:{ ESTADO:['juste','très juste','pire que prévu'],
              ACREEDOR:['Le club vendeur','L’agent','Un intermédiaire'] },
  opciones:[
    { texto:'Payer en entier', sub:'Tu tiens parole, caisse touchée', msg:'Tu as payé l’échéance et tu es passé pour un dirigeant sérieux.' },
    { texto:'Renégocier les délais', sub:'Ça prolonge l’engagement', msg:'Tu as renégocié les délais. Tu paies moins aujourd’hui et plus demain.' },
    { texto:'Demander une remise', sub:'Ça peut bien ou mal tourner', ok:{ msg:'Ils ont accepté une remise : tu t’es enlevé un poids.' }, mal:{ msg:'Ils se sont vexés et t’ont réclamé le total, avec les intérêts.' } },
  ] },

'ins_asamblea': { titulo:'Assemblée générale houleuse',
  contexto:'L’assemblée s’échauffe autour de {TEMA} et {TONO}.',
  variables:{ TEMA:['le bilan','la réforme des statuts','la vente d’un terrain'],
              TONO:['il y a des ultras dans les gradins','on réclame de la transparence','il y a une liste d’opposition'] },
  opciones:[
    { texto:'Défendre la gestion', sub:'Ferme, sans céder', msg:'Tu as défendu la gestion bec et ongles. Certains ont applaudi, d’autres sont partis.' },
    { texto:'Ouvrir les livres', sub:'Transparence totale', msg:'Tu as ouvert les livres : l’assemblée s’est calmée, même si des questions gênantes ont surgi.' },
    { texto:'Reporter l’assemblée', sub:'Tu gagnes du temps', msg:'Tu as reporté l’assemblée. Le sujet n’a pas disparu, il a seulement été repoussé.' },
  ] },

'ins_eleccion': { titulo:'Les élections approchent',
  contexto:'{RIVAL} promet {PROMESA} et te défie ouvertement.',
  variables:{ RIVAL:['Un ancien président','Un homme d’affaires du quartier','Un groupe de jeunes adhérents'],
              PROMESA:['un stade plus grand','plus de recrutements','plus de transparence'] },
  opciones:[
    { texto:'Campagne agressive', sub:'Grosses dépenses, attaque directe', msg:'Tu as monté une campagne agressive. Tu as grimpé dans les sondages, mais tu as dépensé.' },
    { texto:'Montrer le bilan', sub:'Résultats à l’appui', msg:'Tu as montré ce qui a été fait. Les adhérents ont reconnu l’effort.' },
    { texto:'T’allier avec un courant', sub:'Pari de pouvoir', ok:{ msg:'L’alliance a fonctionné et tu as gagné des soutiens.' }, mal:{ msg:'L’alliance t’a coûté cher : tu as perdu en crédibilité dans les deux camps.' } },
  ] },

'ins_promesa_incumplida': { titulo:'Promesse de campagne non tenue',
  contexto:'Un groupe d’adhérents te rappelle que tu avais promis {PROMESA} et s’organise avec {RECLAMO}.',
  variables:{ PROMESA:['le stade couvert','la piscine','l’école de formation'],
              RECLAMO:['une lettre signée','un fil viral','un rassemblement devant le club'] },
  opciones:[
    { texto:'T’excuser et donner une date', sub:'Humilité avec échéance', msg:'Tu t’es excusé et tu as donné une date. Les adhérents t’ont accordé un vote de confiance.' },
    { texto:'Expliquer qu’il n’y a pas d’argent', sub:'Réalisme brutal', msg:'Tu as dit qu’il n’y a pas d’argent. Tu as été honnête, mais ça a gêné.' },
    { texto:'Annoncer des travaux partiels', sub:'Pari sur l’image', ok:{ msg:'Les travaux partiels ont calmé les adhérents et ont été livrés à temps.' }, mal:{ msg:'Les travaux partiels ont pris du retard et tu t’es retrouvé en plus mauvaise posture.' } },
  ] },

'ins_intendente': { titulo:'Le maire propose son soutien',
  contexto:'Le maire t’offre {APOYO} en échange de {FAVOR}.',
  variables:{ APOYO:['des travaux au centre d’entraînement','une subvention','la cession d’un terrain d’entraînement'],
              FAVOR:['une place sur la liste','un meeting politique au stade','l’embauche d’un protégé'] },
  opciones:[
    { texto:'Accepter', sub:'Soutien aujourd’hui, dette demain', msg:'Tu as accepté l’accord. Le soutien est arrivé, et le maire a noté la faveur.' },
    { texto:'Refuser', sub:'Indépendance', msg:'Tu as refusé l’accord. Le maire s’est fâché, mais les adhérents t’ont apprécié.' },
    { texto:'Négocier sans faveurs politiques', sub:'Soutien partiel', msg:'Tu as obtenu du soutien sans faveurs. Le maire n’est pas content.' },
  ] },

'ins_comision': { titulo:'Conflit au comité directeur',
  contexto:'Un conflit éclate au sein du comité : {CONFLICTO} {MOMENTO}.',
  variables:{ CONFLICTO:['un vice-président rebelle','une trésorière qui menace de démissionner','deux factions qui s’affrontent'],
              MOMENTO:['en pleine mauvaise série','avant une assemblée','en pleine clôture du bilan'] },
  opciones:[
    { texto:'Arbitrer en personne', sub:'Du temps et de l’usure', msg:'Tu as arbitré et calmé les esprits. Ça t’a pris des semaines de travail.' },
    { texto:'Imposer une décision', sub:'Autorité ferme', msg:'Tu as pris une décision sans consensus. Quelqu’un est parti fâché.' },
    { texto:'Les laisser se débrouiller seuls', sub:'Moins d’effort, plus de risque', msg:'Tu n’es pas intervenu : le conflit a grossi et a fuité dans la presse.' },
  ] },

'ins_capitan_voz': { titulo:'Le capitaine demande à avoir voix au chapitre',
  contexto:'{JUGADOR}, le capitaine, veut donner son avis sur {TEMA} et le fait savoir {TONO}.',
  variables:{ TEMA:['les primes d’objectifs','le calendrier de la préparation','l’usage du centre d’entraînement'],
              TONO:['en privé','devant tout l’effectif','par lettre'] },
  opciones:[
    { texto:'L’écouter', sub:'Plus de voix, plus de poids', msg:'Tu as écouté {JUGADOR} : l’effectif a apprécié le geste.' },
    { texto:'Poser les limites', sub:'Le respect des hiérarchies', msg:'Tu as dit à {JUGADOR} que chacun reste à sa place. Le capitaine a acquiescé sans enthousiasme.' },
    { texto:'Lui donner une place dans une commission', sub:'Ça peut bien ou mal tourner', ok:{ msg:'{JUGADOR} a pris son rôle au sérieux et a aidé à débloquer des dossiers.' }, mal:{ msg:'{JUGADOR} s’est trop enthousiasmé et les dirigeants se sont agacés.' } },
  ] },

'ins_federacion': { titulo:'La ligue te sanctionne',
  contexto:'La ligue a détecté {INFRACCION} et propose {SANCION}.',
  variables:{ INFRACCION:['des failles dans le contrôle des billets','une dette envers un autre club','des incidents du public'],
              SANCION:['une amende','un retrait de points','un huis clos'] },
  opciones:[
    { texto:'Payer et s’exécuter', sub:'Tu clos vite', msg:'Tu as purgé la sanction. Le dossier s’est clos sans plus de bruit.' },
    { texto:'Faire appel', sub:'Ça peut bien ou mal tourner', ok:{ msg:'L’appel a abouti et la sanction a été réduite.' }, mal:{ msg:'L’appel a échoué et la sanction est restée ferme.' } },
    { texto:'Négocier un échéancier', sub:'Tu étales le coût', msg:'Tu as obtenu un échéancier. La ligue l’a noté pour l’avenir.' },
  ] },

'ins_auditoria': { titulo:'Audit des comptes',
  contexto:'{AUDITOR} demande à examiner les livres et trouve {HALLAZGO}.',
  variables:{ AUDITOR:['Un cabinet comptable','Un groupe d’adhérents','La ligue'],
              HALLAZGO:['des dépenses douteuses','des factures en double','une petite caisse en désordre'] },
  opciones:[
    { texto:'Collaborer à fond', sub:'Transparence totale', msg:'Tu as collaboré : les erreurs ont été corrigées et ta crédibilité a grimpé.' },
    { texto:'Minimiser la découverte', sub:'Lui retirer de l’importance', msg:'Tu as dit que ce n’était pas si grave. Certains adhérents ne t’ont pas cru.' },
    { texto:'Rejeter la faute sur le service comptable', sub:'Sortie politique', msg:'Tu as changé le comptable. Ça s’est calmé, mais tu as fait un mécontent.' },
  ] },

'ins_conflictivo_sancion': { titulo:'Le comité veut sanctionner un joueur',
  contexto:'Après {INCIDENTE}, une partie du comité demande {SANCION} pour {JUGADOR} ({JPOS}, niveau {JRATING}).',
  variables:{ INCIDENTE:['une dispute avec l’entraîneur','un retard à un entraînement','des critiques envers la direction','une absence à une mise au vert'],
              SANCION:['une grosse amende','une suspension','de le laisser hors de la liste'] },
  opciones:[
    { texto:'Le sanctionner', sub:'Main de fer', msg:'Tu as sanctionné {JUGADOR}. L’effectif a compris le message, même si certains ont protesté.' },
    { texto:'Un avertissement', sub:'Main douce', msg:'Tu as seulement donné un avertissement à {JUGADOR}. Une partie du comité y a vu de la faiblesse.' },
    { texto:'Lui parler en tête à tête', sub:'Ça peut éclaircir ou empirer', ok:{ msg:'{JUGADOR} s’est excusé et s’est engagé à changer.' }, mal:{ msg:'{JUGADOR} est sorti de la discussion plus remonté et le conflit s’est aggravé.' } },
  ] },

'ins_dia_club': { titulo:'Anniversaire du club',
  contexto:'{CLUB} fête {ANIVERSARIO} et on envisage {FORMATO}.',
  variables:{ ANIVERSARIO:['ses 100 ans','ses 75 ans','ses 50 ans'],
              FORMATO:['un défilé','un match hommage','un dîner d’adhérents'] },
  opciones:[
    { texto:'Grande fête', sub:'Coûteuse mais mémorable', msg:'La fête a été un succès : émotion, photos et tribune pleine.' },
    { texto:'Célébration austère', sub:'Plus sobre', msg:'La célébration a été simple. Personne ne s’est plaint, personne ne s’est ému.' },
    { texto:'Réutiliser l’hommage pour lever des fonds', sub:'Mélange de gala et de business', msg:'Tu as fait de l’anniversaire un événement payant. Tu as levé des fonds, avec quelques reproches.' },
  ] },

'ins_disciplinas': { titulo:'Ajouter de nouvelles disciplines',
  contexto:'Une proposition veut ajouter {DISCIPLINA} au club {RECURSO}.',
  variables:{ DISCIPLINA:['le football féminin','le basket','la natation'],
              RECURSO:['avec peu d’argent','avec une subvention','avec l’appui des adhérents'] },
  opciones:[
    { texto:'Approuver avec force', sub:'Pari social', msg:'La nouvelle discipline a été ajoutée avec enthousiasme. La communauté du club grandit.' },
    { texto:'Un essai pilote', sub:'Prudence', msg:'Tu as monté un essai pilote. On verra ce que ça donne.' },
    { texto:'Reporter', sub:'Priorité au football professionnel', msg:'Tu as dit que ce n’est pas le moment. Les porteurs du projet ont été déçus.' },
  ] },

'ins_cualidad_contrato': { titulo:'Renouvellement de ton {CUALIDAD}',
  contexto:'{JUGADOR}, ton {CUALIDAD}, veut prolonger {CONDICION} et {AGENTE}.',
  variables:{ CONDICION:['avec une augmentation importante','avec une clause de départ','en échange d’une place de titulaire','avec un long contrat'],
              AGENTE:['son agent fait pression','sa famille demande de la stabilité','un autre club le tente'] },
  opciones:[
    { texto:'Accepter ses conditions', sub:'Tu le sécurises, cher', msg:'Tu as prolongé {JUGADOR} avec toutes ses conditions. Le vestiaire l’a fêté.' },
    { texto:'Contre-offre plus modeste', sub:'Tu ajustes la caisse', msg:'Tu as conclu une prolongation plus modeste avec {JUGADOR}. Il n’est pas tout à fait content.' },
    { texto:'Le laisser arriver en fin de contrat', sub:'Risque de le perdre', ok:{ msg:'{JUGADOR} est resté sans conditions : tu as économisé et tout continue comme avant.' }, mal:{ msg:'{JUGADOR} est parti libre et les supporters t’en ont tenu responsable.' } },
  ] },

'ins_intendente_factura': { titulo:'Le maire présente la facture',
  contexto:'Le maire rappelle la faveur et demande maintenant {PEDIDO} {MOMENTO}.',
  variables:{ PEDIDO:['des places pour ses militants','un meeting de campagne sur la pelouse','que tu soutiennes publiquement sa candidature'],
              MOMENTO:['cette semaine','avant les élections','en plein match important'] },
  opciones:[
    { texto:'S’exécuter', sub:'Tu paies la dette politique', msg:'Tu as satisfait la demande du maire. Les supporters l’ont vu et ne l’ont pas oublié.' },
    { texto:'Refuser', sub:'Tu romps le lien', msg:'Tu as refusé. Le maire s’est fâché et t’a coupé les soutiens.' },
    { texto:'S’exécuter à moitié', sub:'Tu essaies de ménager tout le monde', ok:{ msg:'Le maire a accepté le geste à moitié et s’est déclaré satisfait.' }, mal:{ msg:'Le maire s’est vexé quand même et les supporters ne t’ont pas pardonné non plus.' } },
  ] },

'med_declaracion': { titulo:'Déclarations mal interprétées',
  contexto:'Tes propos {FRASE} ont été sortis de leur contexte {MEDIO}.',
  variables:{ MEDIO:['dans une émission de radio','sur une chaîne câblée','sur un portail web'],
              FRASE:['sur l’arbitre','sur l’entraîneur','sur les supporters'] },
  opciones:[
    { texto:'Clarifier publiquement', sub:'Coûteux mais clair', msg:'Tu as clarifié ce que tu avais dit. L’affaire s’est dégonflée vite.' },
    { texto:'Laisser passer', sub:'Silence gênant', msg:'Tu n’as rien dit. L’affaire a pris de l’ampleur sur les réseaux.' },
    { texto:'Contre-attaquer contre le média', sub:'Risque élevé', ok:{ msg:'Tu as contre-attaqué avec fermeté : les supporters t’ont applaudi.' }, mal:{ msg:'La contre-attaque a mal tourné : le média t’a critiqué pendant des jours.' } },
  ] },

'med_esc_publico': { titulo:'Incidents dans la tribune',
  contexto:'Pendant le match, il y a eu {INCIDENTE} et le scandale a atteint {ALCANCE}.',
  variables:{ INCIDENTE:['des fumigènes','une bagarre entre supporters','des insultes à un arbitre'],
              ALCANCE:['les journaux télévisés','les réseaux sociaux','la ligue'] },
  opciones:[
    { texto:'Condamner publiquement', sub:'Image propre', msg:'Tu as condamné ce qui s’est passé. Ton image en est sortie renforcée.' },
    { texto:'Défendre les supporters', sub:'Aligné sur la tribune', msg:'Tu as défendu ton monde. Les supporters t’ont aimé, la presse non.' },
    { texto:'Promettre plus de contrôle', sub:'Avec un coût', msg:'Tu as promis plus de contrôle : on a investi dans la sécurité.' },
  ] },

'med_presion_prensa': { titulo:'Pression de la presse',
  contexto:'{PERIODISTA} insiste sur {TEMA} et ne lâche pas le morceau.',
  variables:{ PERIODISTA:['Un journaliste historique','Un chroniqueur polémique','Un reporter du quartier'],
              TEMA:['les performances','le budget','l’entraîneur'] },
  opciones:[
    { texto:'Donner une interview', sub:'Donner de ta personne', msg:'Tu as donné de ta personne. L’interview a été tendue, mais elle a apporté de la clarté.' },
    { texto:'L’ignorer', sub:'Sans lui donner d’importance', msg:'Tu l’as ignoré. Le journaliste a pris sa revanche.' },
    { texto:'L’inviter au club', sub:'Geste risqué', ok:{ msg:'Le journaliste est reparti du club avec une autre impression et il l’a raconté.' }, mal:{ msg:'Le journaliste a profité de la visite pour filmer le pire.' } },
  ] },

'med_esc_jugador': { titulo:'Scandale d’un joueur en dehors du terrain',
  contexto:'Il a filtré que {JUGADOR} ({JPOS}, {JEDAD} ans) {HECHO} {LUGAR}.',
  variables:{ HECHO:['a eu une bagarre','a publié quelque chose de polémique','a organisé une fête'],
              LUGAR:['dans une boîte de nuit','pendant une diffusion en direct','sur les réseaux sociaux','après une défaite'] },
  opciones:[
    { texto:'Le sanctionner publiquement', sub:'Main de fer', msg:'Tu as sanctionné {JUGADOR}. La presse a apprécié, l’effectif est resté tendu.' },
    { texto:'Le défendre', sub:'Soutien au joueur', msg:'Tu as défendu {JUGADOR}. Le vestiaire l’a apprécié, la presse non.' },
    { texto:'Gérer en silence', sub:'Ça peut bien ou mal tourner', ok:{ msg:'L’affaire s’est calmée et {JUGADOR} est retourné à ses affaires.' }, mal:{ msg:'Le scandale a fuité quand même et tu t’es retrouvé exposé.' } },
  ] },

'med_sponsor_escandalo': { titulo:'Scandale avec le sponsor',
  contexto:'{MEDIO} a publié que {HECHO}. On te lie à la décision d’avoir accepté ce sponsor.',
  variables:{ MEDIO:['Un journal','Un portail','Une émission de télé'],
              HECHO:['l’entreprise fait l’objet d’une enquête','l’entreprise a fermé du jour au lendemain','des plaintes visent ses propriétaires'] },
  opciones:[
    { texto:'Rompre le contrat', sub:'Rupture immédiate', msg:'Tu as rompu le contrat et assumé le coût. Tu es passé pour quelqu’un de responsable.' },
    { texto:'Attendre de voir', sub:'Parier que ça s’éteigne', msg:'Tu as attendu. Le scandale a grossi et on t’a pointé du doigt.' },
    { texto:'Défendre la décision', sub:'Risque élevé', ok:{ msg:'Tu as réussi à ne pas être rattrapé par l’enquête et le sponsor a continué à payer.' }, mal:{ msg:'L’enquête a avancé et ta défense a pris l’eau.' } },
  ] },

'med_cualidad_nota': { titulo:'Un article met en avant ton {CUALIDAD}',
  contexto:'{MEDIO} a publié un article {ENFOQUE} sur {JUGADOR} et le club s’est retrouvé au centre de la scène.',
  variables:{ MEDIO:['Un journal sportif','Une émission de télé','Un podcast'],
              ENFOQUE:['sur son côté humain','sur ses performances','sur son caractère'] },
  opciones:[
    { texto:'En profiter', sub:'Tout en vitrine', msg:'Tu as profité de l’article pour mettre {CLUB} en valeur. {JUGADOR} s’est un peu laissé griser.' },
    { texto:'Baisser le profil', sub:'Tu protèges le joueur', msg:'Tu as fait baisser la pression : {JUGADOR} est resté concentré.' },
    { texto:'Organiser une conférence de presse', sub:'Ça peut briller ou déraper', ok:{ msg:'La conférence a mis en valeur {JUGADOR} et le club.' }, mal:{ msg:'En conférence, {JUGADOR} a dit quelque chose qui a été mal interprété.' } },
  ] },

'med_documental': { titulo:'Documentaire sur le club',
  contexto:'{PLATAFORMA} veut tourner un documentaire sur {CLUB} centré sur {ENFOQUE}.',
  variables:{ PLATAFORMA:['Une plateforme de streaming','Une chaîne publique','Une société de production indépendante'],
              ENFOQUE:['son histoire glorieuse','la crise actuelle','les vestiaires'] },
  opciones:[
    { texto:'Accepter avec contrôle éditorial', sub:'Contrôle, moins d’argent', msg:'Tu as accepté avec contrôle éditorial. Le documentaire est sorti propre.' },
    { texto:'Accepter sans conditions', sub:'Liberté totale', msg:'Tu as accepté sans conditions. Le documentaire a été honnête et a remué les émotions.' },
    { texto:'Refuser', sub:'Vie privée', msg:'Tu as refusé le documentaire. L’intimité du club a été préservée.' },
  ] },

'med_rumor': { titulo:'Rumeurs sur le club',
  contexto:'{FUENTE} affirme que {RUMOR}.',
  variables:{ FUENTE:['Un portail','Un chroniqueur','Un compte anonyme'],
              RUMOR:['le club va être vendu à des investisseurs','le stade déménage','il y aura une fusion avec un autre club'] },
  opciones:[
    { texto:'Démentir par un communiqué', sub:'Rapide et clair', msg:'Tu as démenti la rumeur. L’affaire s’est refroidie vite.' },
    { texto:'Ne pas y répondre', sub:'Tu ignores le bruit', msg:'Tu n’as rien dit. La rumeur a continué à grossir.' },
    { texto:'Laisser des indices et faire monter le mystère', sub:'Jeu risqué', ok:{ msg:'Le mystère a attiré une attention positive et des ventes de maillots.' }, mal:{ msg:'Le mystère a échappé à tout contrôle et les adhérents se sont agités.' } },
  ] },

'med_redes': { titulo:'Crise sur les réseaux',
  contexto:'Le community manager a commis {ERROR} : résultat, {REACCION}.',
  variables:{ ERROR:['un tweet malheureux','un mème de mauvais goût','une vieille vidéo qui a refait surface'],
              REACCION:['des supporters indignés','des sponsors inquiets','des journalistes en alerte'] },
  opciones:[
    { texto:'T’excuser publiquement', sub:'Humilité', msg:'Tu t’es excusé et l’épisode s’est vite refermé.' },
    { texto:'Licencier le community manager', sub:'Main de fer', msg:'Tu as licencié le responsable. Certains y ont vu un bouc émissaire.' },
    { texto:'Faire l’innocent', sub:'Laisser passer', msg:'Tu n’as rien dit. La crise a duré plus que de raison.' },
  ] },

'med_figura_entrevista': { titulo:'Une star parle trop',
  contexto:'{JUGADOR}, la star de l’effectif, a donné une interview à {CANAL} et a parlé de {TEMA}.',
  variables:{ CANAL:['un journal','une radio','un live en streaming'],
              TEMA:['l’entraîneur','la direction','son avenir'] },
  opciones:[
    { texto:'Soutenir {JUGADOR}', sub:'Défense publique', msg:'Tu as soutenu {JUGADOR}. Le vestiaire l’a apprécié et la presse l’a critiqué.' },
    { texto:'Lui demander un communiqué', sub:'Contrôle des dégâts', msg:'{JUGADOR} a précisé ses propos. L’affaire s’est refroidie, mais un malaise est resté.' },
    { texto:'Lui mettre une amende', sub:'Autorité risquée', ok:{ msg:'L’amende à {JUGADOR} a montré clairement qui commande. Il l’a acceptée sans problème.' }, mal:{ msg:'L’amende à {JUGADOR} est mal passée et le vestiaire s’est divisé.' } },
  ] },

'med_joven_viral': { titulo:'Vidéo virale d’un jeune',
  contexto:'Une vidéo de {JUGADOR} ({JPOS}, {JEDAD} ans), {VIDEO}, est devenue virale et {OFERTA}.',
  variables:{ VIDEO:['en train de fêter un but magnifique','en train d’aider un supporter','en train de danser dans le vestiaire'],
              OFERTA:['une marque veut le recruter','une chaîne veut l’interviewer','un grand club le suit'] },
  opciones:[
    { texto:'Profiter du moment', sub:'Visibilité pour le club', msg:'Tu as profité de la vidéo. {JUGADOR} est devenu célèbre et le club a gagné en attention.' },
    { texto:'Protéger le gamin', sub:'Tu évites qu’il prenne la grosse tête', msg:'Tu as protégé {JUGADOR} : il a continué à s’entraîner sans distraction.' },
    { texto:'Le laisser gérer sa célébrité', sub:'Autonomie risquée', ok:{ msg:'{JUGADOR} l’a gérée intelligemment et le club en a profité.' }, mal:{ msg:'{JUGADOR} s’est laissé distraire et ses performances ont baissé.' } },
  ] },

'med_arbitro': { titulo:'Polémique arbitrale',
  contexto:'Après {JUGADA} lors {PARTIDO}, tu dois décider quoi dire.',
  variables:{ JUGADA:['un penalty non sifflé','un but refusé','une expulsion douteuse'],
              PARTIDO:['du derby','du match de coupe','du dernier match'] },
  opciones:[
    { texto:'Te plaindre publiquement', sub:'Tu défends l’équipe', msg:'Tu t’es plaint avec force. Les supporters t’ont applaudi et la ligue t’a mis une amende.' },
    { texto:'Te taire', sub:'Prudence', msg:'Tu n’as rien dit. Certains y ont vu de la faiblesse.' },
    { texto:'Demander une réunion avec la ligue', sub:'Canal institutionnel', msg:'Tu as demandé une réunion. On t’a écouté, sans rien changer.' },
  ] },

'hin_barra': { titulo:'Les ultras demandent un « coup de pouce »',
  contexto:'Un meneur des ultras {TONO} demande {PEDIDO}.',
  variables:{ TONO:['sur un ton aimable','avec des menaces à peine voilées','par l’intermédiaire d’un tiers'],
              PEDIDO:['des places gratuites','un car pour le déplacement','de l’argent pour les drapeaux'] },
  opciones:[
    { texto:'Céder', sub:'Tu calmes la tribune', msg:'Tu as cédé à la demande. La tribune s’est calmée et quelques alarmes se sont allumées.' },
    { texto:'Refuser', sub:'Risque de conflit', msg:'Tu as refusé. La presse t’a applaudi et les ultras se sont fâchés.' },
    { texto:'Faire la médiation avec la ligue et la police', sub:'Ça dépend du secteur', ok:{ msg:'La médiation a fonctionné et un dispositif ordonné a été convenu.' }, mal:{ msg:'La médiation a échoué et le climat s’est alourdi.' } },
  ] },

'hin_expectativa': { titulo:'Attentes démesurées après une bonne série',
  contexto:'Après {RACHA}, les supporters rêvent déjà {EXPECTATIVA} et s’accrochent à {JUGADOR} ({JPOS}, niveau {JRATING}).',
  variables:{ RACHA:['cinq victoires de suite','une victoire fleuve historique','une série de huit matchs sans défaite'],
              EXPECTATIVA:['du championnat','d’une coupe internationale','de la montée directe','d’un titre'] },
  opciones:[
    { texto:'Nourrir l’illusion', sub:'Tout le monde est heureux, jusqu’au faux pas', msg:'Tu as allumé l’illusion. {JUGADOR} est devenu le nom de la semaine.' },
    { texto:'Baisser le ton', sub:'Réalisme', msg:'Tu as demandé du calme. Les supporters ne l’ont pas tout à fait bien pris.' },
    { texto:'Promettre un renfort', sub:'Tu nourris le rêve avec de l’argent', ok:{ msg:'Le renfort est arrivé et l’illusion a tenu.' }, mal:{ msg:'Le renfort n’a pas été à la hauteur et {JUGADOR} a porté la pression.' } },
  ] },

'hin_presion_resultados': { titulo:'Pression pour les résultats',
  contexto:'Les supporters {FORMA} pour que {EXIGENCIA}.',
  variables:{ FORMA:['remplissent le stade de banderoles','lancent des chants hostiles','envoient une lettre des groupes de supporters'],
              EXIGENCIA:['tu changes d’entraîneur','tu fasses venir des renforts','le comité démissionne'] },
  opciones:[
    { texto:'Répondre par des actes', sub:'Action concrète', msg:'Tu as répondu par des mesures concrètes. La tribune a baissé le ton.' },
    { texto:'Demander de la patience', sub:'Des mots, pas des actes', msg:'Tu as demandé de la patience. Certains ont compris, d’autres non.' },
    { texto:'Rencontrer les groupes de supporters', sub:'Écoute directe', msg:'Tu as rencontré les groupes de supporters. Ils se sont sentis écoutés.' },
  ] },

'hin_pide_cualidad': { titulo:'Les supporters réclament un autre {CUALIDAD}',
  contexto:'Les supporters sont tombés amoureux de {JUGADOR}, ton {CUALIDAD}, et demandent {CANAL} que tu en recrutes un autre comme lui {PLAZO}.',
  variables:{ CANAL:['lors d’un rassemblement','sur les réseaux','dans une lettre'],
              PLAZO:['avant la fin du mercato','cette semaine','pour le derby'] },
  opciones:[
    { texto:'Aller sur le marché', sub:'De l’argent contre de l’espoir', msg:'Tu es parti chercher un autre comme {JUGADOR}. Les supporters ont repris espoir.' },
    { texto:'Expliquer qu’il n’y a pas d’argent', sub:'Réalisme', msg:'Tu as expliqué la situation. Les supporters l’ont compris à moitié.' },
    { texto:'Promettre pour le prochain mercato', sub:'Botter en touche', msg:'Tu as promis pour le prochain mercato. La patience reste en suspens.' },
  ] },

'hin_banderazo': { titulo:'Rassemblement de supporters {OCASION}',
  contexto:'Les supporters organisent un rassemblement {OCASION} et demandent {PEDIDO}.',
  variables:{ OCASION:['avant le derby','avant la coupe','avant le dernier match'],
              PEDIDO:['que tu joues dans le stade historique','que l’effectif au complet vienne les saluer','qu’il n’y ait plus de sponsors sur le maillot'] },
  opciones:[
    { texto:'Accepter la demande', sub:'Geste fort', msg:'Tu as accepté la demande. Les supporters se sont sentis écoutés.' },
    { texto:'La refuser avec respect', sub:'Honnête', msg:'Tu as refusé la demande avec respect. Certains sont partis agacés.' },
    { texto:'Envoyer le capitaine saluer', sub:'Geste symbolique', ok:{ msg:'Le salut du capitaine a ému les supporters.' }, mal:{ msg:'Le salut n’a pas suffi et il a ressemblé à une excuse.' } },
  ] },

'hin_pena_viaje': { titulo:'Les groupes de supporters veulent se déplacer',
  contexto:'Les groupes de supporters de {CLUB} demandent de l’aide pour voyager {DESTINO} et réclament {PEDIDO}.',
  variables:{ DESTINO:['dans une ville lointaine','dans une autre région','à l’étranger'],
              PEDIDO:['une réduction sur les billets','des cars du club','un hébergement'] },
  opciones:[
    { texto:'Soutenir à fond', sub:'Argent et geste', msg:'Tu as soutenu le déplacement. Les supporters ont accompagné l’équipe en masse.' },
    { texto:'Aide partielle', sub:'Un peu de chaque côté', msg:'Tu as aidé partiellement. Certains sont restés chez eux.' },
    { texto:'Ne pas pouvoir aider', sub:'Tu protèges la caisse', msg:'Tu n’as pas pu aider. Les supporters l’ont ressenti comme un affront.' },
  ] },

'hin_homenaje_exjugador': { titulo:'Hommage à une idole retraitée',
  contexto:'Les supporters demandent un hommage à {JUGADOR}, idole retraitée, avec {FORMA} {MOMENTO}.',
  variables:{ FORMA:['une statue','un match d’adieu','un maillot retiré','une plaque au stade'],
              MOMENTO:['avant le derby','pour l’anniversaire','à la fin de la saison'] },
  opciones:[
    { texto:'Faire un grand hommage', sub:'Émotion et dépense', msg:'L’hommage à {JUGADOR} a été émouvant et a rempli le stade.' },
    { texto:'Un hommage simple', sub:'Austère', msg:'Tu as fait un hommage simple à {JUGADOR}. Personne n’a pleuré, personne ne s’est plaint.' },
    { texto:'Le reporter', sub:'Pas d’argent maintenant', msg:'Tu as reporté l’hommage à {JUGADOR}. Les supporters en ont gardé rancune.' },
  ] },

'hin_idolo_cantito': { titulo:'Le kop chante pour une star',
  contexto:'Les supporters dédient un chant à {JUGADOR} {CANTO} et demandent {PEDIDO}.',
  variables:{ CANTO:['dans le kop','sur les réseaux','lors d’un rassemblement'],
              PEDIDO:['une longue prolongation','une augmentation de salaire','le brassard de capitaine'] },
  opciones:[
    { texto:'Faire plaisir aux supporters', sub:'Geste fort', msg:'Tu as fait plaisir aux supporters. {JUGADOR} s’est senti aimé.' },
    { texto:'Expliquer le calendrier', sub:'Prudence', msg:'Tu as expliqué que tout vient en son temps. Les supporters l’ont toléré.' },
    { texto:'Laisser le joueur décider', sub:'Renvoyer la balle dans son camp', ok:{ msg:'{JUGADOR} l’a pris avec humilité et s’est engagé.' }, mal:{ msg:'{JUGADOR} s’est senti sous pression et ses performances ont chuté.' } },
  ] },

'hin_precios': { titulo:'Prix des billets',
  contexto:'Sur la table : {MEDIDA} {MOTIVO}.',
  variables:{ MEDIDA:['augmenter le prix des billets','baisser le prix des places en tribune populaire','créer un abonnement famille'],
              MOTIVO:['à cause de l’inflation','à cause du derby','à cause de la dette'] },
  opciones:[
    { texto:'Approuver la mesure', sub:'Tu donnes suite à la proposition', msg:'Tu as approuvé la mesure. La billetterie a bougé.' },
    { texto:'La rejeter', sub:'Tu maintiens le statu quo', msg:'Tu as rejeté la mesure. Les supporters ont respiré.' },
    { texto:'Un projet pilote', sub:'Essai sur trois journées', msg:'Tu as fait un essai. On verra les chiffres.' },
  ] },

'hin_seguridad': { titulo:'Sécurité pour {PARTIDO}',
  contexto:'Pour {PARTIDO}, on propose {MEDIDA}. Ça coûtera de l’argent et pourra gêner le public.',
  variables:{ PARTIDO:['le derby régional','un match de coupe','un match contre un rival historique'],
              MEDIDA:['des bracelets d’identification','des barrières supplémentaires','davantage de policiers'] },
  opciones:[
    { texto:'Approuver la mesure', sub:'Plus de sécurité, plus de coût', msg:'Tu as approuvé la mesure. Le match a été tranquille.' },
    { texto:'La rejeter', sub:'Tu économises', msg:'Tu as rejeté la mesure. Il y a eu quelques incidents.' },
    { texto:'L’appliquer à moitié', sub:'Compromis', ok:{ msg:'La version réduite a suffi pour éviter les problèmes.' }, mal:{ msg:'La version réduite n’a pas suffi et il y a eu du désordre.' } },
  ] },

'hin_socio_historico': { titulo:'Un adhérent historique demande un geste',
  contexto:'{SOCIO} demande {PEDIDO}.',
  variables:{ SOCIO:['Un adhérent de 90 ans','Une famille de quatre générations','Un groupe de retraités'],
              PEDIDO:['des places gratuites à vie','une visite du vestiaire','que l’équipe les salue'] },
  opciones:[
    { texto:'Accorder', sub:'Geste chaleureux', msg:'Tu as accordé la demande. L’histoire du club s’est sentie vivante.' },
    { texto:'Une visite symbolique', sub:'Moins coûteux', msg:'Tu leur as offert une visite symbolique. Ils sont repartis satisfaits.' },
    { texto:'Refuser avec respect', sub:'Précédent maîtrisé', msg:'Tu as refusé avec respect. Ils se sont montrés déçus.' },
  ] },

'hin_derrota': { titulo:'Réaction après la défaite',
  contexto:'Après {RESULTADO}, la tribune a répondu par {REACCION}.',
  variables:{ RESULTADO:['une défaite sévère à domicile','une défaite dans le derby','une élimination en coupe'],
              REACCION:['des sifflets','des banderoles réclamant des démissions','une tribune presque vide'] },
  opciones:[
    { texto:'Donner de ta personne', sub:'Tu parles aux gens', msg:'Tu as donné de ta personne et la tribune l’a apprécié.' },
    { texto:'Réunir l’effectif', sub:'Focus sur le sportif', msg:'Tu as réuni l’effectif pour remettre le cap.' },
    { texto:'Attendre que ça passe', sub:'Sans réponses', msg:'Tu n’as rien dit. La tribune s’est sentie abandonnée.' },
  ] },

'cons_vendido_brilla': { titulo:'{JUGADOR} brille là où tu l’as vendu',
  contexto:'{JUGADOR}, que tu as laissé partir, {HAZANA}. Les supporters te le rappellent à chaque match.',
  variables:{ HAZANA:['a marqué un but magnifique pour ses débuts','a été la star du derby de l’autre côté','est déjà titulaire indiscutable','est dans tous les résumés de la journée'] },
  opciones:[
    { texto:'Essayer de le racheter', sub:'Cher et avec l’orgueil blessé', msg:'{JUGADOR} est revenu : tu as payé trop cher, mais la tribune a fêté ça.' },
    { texto:'Dire que c’était le mieux pour le club', sub:'Tu défends la décision', msg:'Tu as défendu la vente. Peu de gens t’ont cru et le vestiaire a pris note.' },
    { texto:'Le féliciter publiquement', sub:'Élégance', msg:'Tu as félicité {JUGADOR} sur les réseaux : tu es passé pour un gentleman.' },
  ] },

'cons_vendido_vestuario': { titulo:'Le vestiaire s’interroge sur la vente',
  contexto:'Après le départ d’une des vedettes, {REFERENTE} demande à te parler : on veut savoir si le club a un projet ou s’il est en train de tout brader.',
  variables:{ REFERENTE:['le capitaine','un groupe de cadres','le délégué de l’effectif'] },
  opciones:[
    { texto:'Promettre des renforts', sub:'Engagement à tenir', msg:'Tu as promis des renforts. L’effectif s’est calmé, mais il faut maintenant tenir parole.' },
    { texto:'Expliquer le projet chiffres à l’appui', sub:'Franchise', msg:'Tu as montré les comptes : ça n’a pas plu, mais ils ont compris.' },
    { texto:'Couper court à la discussion', sub:'Autorité, sans explications', msg:'Tu as coupé court à la discussion. Le vestiaire en a gardé de la rancœur.' },
  ] },

'cons_recorte_reclamo': { titulo:'L’effectif proteste contre les économies',
  contexto:'Le plan d’économies a atteint le vestiaire : {RECLAMO}. Les joueurs veulent une réponse avant le prochain match.',
  variables:{ RECLAMO:['les primes ont pris du retard','les mises au vert ont été réduites','les déplacements se font désormais en car'] },
  opciones:[
    { texto:'Payer les primes', sub:'Le vestiaire se calme, ça coûte', msg:'Tu as payé ce qui était dû : l’effectif a répondu sur le terrain.' },
    { texto:'Maintenir les économies', sub:'Discipline budgétaire', msg:'Tu as maintenu les économies. La caisse respire ; le vestiaire, non.' },
    { texto:'Promettre des primes en cas de résultats', sub:'Pari sur l’effort', ok:{ msg:'L’effectif s’est motivé et l’équipe a gagné : tenir parole sera bon marché.' }, mal:{ msg:'Il n’y a pas eu de résultats et l’effectif a senti que tu lui avais menti.' } },
  ] },

'cons_recorte_socios': { titulo:'Les adhérents remarquent les économies',
  contexto:'{AVISO} et sur les réseaux les plaintes se multiplient : « avec ce dirigeant, tout rétrécit ».',
  variables:{ AVISO:['La buvette de la tribune populaire a fermé','Le siège social a baissé le rideau avant l’heure','Les cotisations ont été réactualisées sans préavis'] },
  opciones:[
    { texto:'Expliquer l’économie', sub:'Transparence', msg:'Tu as expliqué le pourquoi des économies : la majorité a compris.' },
    { texto:'Compenser par un avantage', sub:'Ça coûte, mais ça calme', msg:'Tu as ajouté un avantage pour les adhérents et la plainte s’est éteinte.' },
    { texto:'Ignorer les plaintes', sub:'L’économie avant tout', msg:'Tu as ignoré le bruit. Tu as économisé, mais la tribune s’en est souvenue.' },
  ] },

'cons_prensa_vendetta': { titulo:'Le journaliste ne te pardonne pas',
  contexto:'{PERIODISTA} ne lâche pas le sujet : chaque émission commence par rappeler ta dernière bourde.',
  variables:{ PERIODISTA:['L’animateur de l’émission de vingt-deux heures','Un chroniqueur historique du club','Une éditorialiste d’un portail sportif'] },
  opciones:[
    { texto:'L’inviter à discuter', sub:'Faire baisser la tension', msg:'Vous vous êtes assis pour discuter. L’article suivant était plus aimable.' },
    { texto:'Ne rien répondre', sub:'Laisser s’épuiser', msg:'Tu n’as pas répondu. Le sujet a duré deux semaines de plus.' },
    { texto:'Contre-attaquer par un communiqué', sub:'Ça peut très bien ou très mal tourner', ok:{ msg:'Le communiqué a fait mouche : l’opinion publique t’a soutenu.' }, mal:{ msg:'Le communiqué est très mal passé et le journaliste s’en est servi comme combustible.' } },
  ] },

'cons_racha_presion': { titulo:'La victoire fait monter les attentes',
  contexto:'Après le bon résultat, {HINCHADA}. Maintenant, n’importe quel faux pas sera lu comme une crise.',
  variables:{ HINCHADA:['la tribune a commencé à chanter pour le titre','la presse parle déjà de favoris','les adhérents réclament des renforts de haut niveau'] },
  opciones:[
    { texto:'Demander du calme', sub:'Faire baisser la pression', msg:'Tu as demandé du calme : le vestiaire a respiré, la tribune s’est freinée.' },
    { texto:'Promettre de jouer le haut du tableau', sub:'Tu montes la mise', msg:'Tu as promis de jouer le haut du tableau. Maintenant, il faut tenir.' },
    { texto:'Récompenser l’effectif', sub:'Reconnaissance avec un coût', msg:'Tu as récompensé l’effectif pour la série : ils sont avec toi à la vie à la mort.' },
  ] },

'cons_vestuario_reunion': { titulo:'Le vestiaire s’est fracturé',
  contexto:'{SINTOMA}. L’entraîneur te prévient que si on n’intervient pas, le groupe se coupe en deux.',
  variables:{ SINTOMA:['Deux cadres se sont disputés à grands cris à l’entraînement','Un groupe de joueurs ne parle plus à l’entraîneur','Un audio de l’effectif critiquant la direction a fuité'] },
  opciones:[
    { texto:'Réunion en tête à tête avec les cadres', sub:'Dialogue direct', msg:'La réunion a remis le groupe en ordre. Ça a coûté, mais ça valait la peine.' },
    { texto:'Changer de capitaine', sub:'Geste fort', msg:'Tu as changé de capitaine. Certains ont applaudi, d’autres se sont tus.' },
    { texto:'Sanctionner les personnes impliquées', sub:'Main de fer', msg:'Tu as sanctionné les personnes impliquées : la presse a applaudi, le vestiaire s’est refroidi.' },
  ] },

'cons_capitan_renuncia': { titulo:'Le capitaine veut partir',
  contexto:'{JUGADOR}, le capitaine, te demande de parler : {MOTIVO}. S’il part, le groupe reste sans cadre.',
  variables:{ MOTIVO:['il dit qu’il ne se sent plus soutenu','il en a assez de l’ambiance au vestiaire','il a reçu une offre et il est tenté'] },
  opciones:[
    { texto:'Le convaincre avec une amélioration de contrat', sub:'Ça coûte, ça remet le groupe en ordre', msg:'{JUGADOR} a prolongé et a remis le groupe en ordre.' },
    { texto:'Réunir tout l’effectif', sub:'Mettre cartes sur table', msg:'La réunion a été rude, mais le groupe en est sorti plus uni.' },
    { texto:'Le laisser partir', sub:'Tu coupes net', msg:'{JUGADOR} est parti. De l’argent est rentré, mais le vestiaire s’est retrouvé orphelin.' },
  ] },

'cons_vestuario_oro': { titulo:'L’effectif se bat pour toi',
  contexto:'Le groupe est si uni que {GESTO}. C’est le meilleur moment pour leur demander un effort supplémentaire.',
  variables:{ GESTO:['les cadres proposent de prolonger avec une baisse de salaire','les jeunes demandent de s’entraîner en double séance','l’effectif a organisé un barbecue avec les adhérents'] },
  opciones:[
    { texto:'Profiter de l’élan', sub:'Exiger plus, sans coût', msg:'Tu as demandé plus et ils ont répondu sur le terrain, même si le groupe a senti la pression.' },
    { texto:'Les récompenser par un voyage', sub:'Soigner l’ambiance', msg:'Le voyage a été un succès : le groupe est avec toi à la vie à la mort.' },
    { texto:'Laisser les choses comme elles sont', sub:'Ne pas toucher à ce qui marche', msg:'Tu n’as rien touché. Parfois, c’est la meilleure décision.' },
  ] },

'dep_arquero_apuro': { titulo:'Tu te retrouves sans gardien',
  contexto:'L’effectif ne compte qu’un seul gardien et l’entraîneur ne veut pas jouer avec le feu. {JUGADOR} se présente, gardien de {JEDAD} ans et de niveau {JRATING}.',
  variables:{ PLAZO:['cette semaine'] },
  opciones:[
    { texto:'Recruter {JUGADOR}', sub:'Sécurité sous les barres', msg:'{JUGADOR} est arrivé à {CLUB} : l’entraîneur a dormi tranquille pour la première fois depuis des semaines.' },
    { texto:'Promouvoir un jeune', sub:'Faire confiance à la formation', msg:'Tu as fait monter un jeune comme remplaçant. C’est un pari.' },
    { texto:'Faire avec ce qu’on a', sub:'Zéro dépense, zéro filet', msg:'Tu n’as rien fait. L’entraîneur a bien précisé qu’il t’avait prévenu.' },
  ] },

});
