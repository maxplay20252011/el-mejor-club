/* Événements 2 — traduction française (saisonniers, derby, pays). */
EVENTOS_I18N.fr = Object.assign(EVENTOS_I18N.fr || {}, {

'est_ini_gira': { titulo:"On te propose une tournée de présaison",
  contexto:"Une société de production propose une tournée {DESTINO}, avec {FORMATO}. Ça paie bien, mais l'effectif arriverait fatigué au coup d'envoi.",
  variables:{ DESTINO:["dans une ville côtière","à l'intérieur du pays","dans un pays voisin","dans une zone de montagne"],
              FORMATO:["trois matchs amicaux","un tournoi éclair","deux matchs et un stage avec des enfants"] },
  opciones:[
    {texto:"Accepter la tournée", sub:"De l'argent rentre, l'effectif voyage fatigué", msg:"La tournée a rapporté de l'argent et de belles photos, mais l'entraîneur s'est plaint de la fatigue."},
    {texto:"S'entraîner à la maison", sub:"Pas de recettes, mais des jambes fraîches", msg:"Tu as travaillé à domicile : l'équipe arrive en forme, la trésorerie ne fait pas la fête."},
    {texto:"Demander une tournée plus courte", sub:"Ça peut être parfait ou tout capoter", ok:{msg:"La production a accepté une version courte : bonne affaire et peu de fatigue."}, mal:{msg:"La production s'est vexée et a tout annulé : tu perds l'argent et le temps d'entraînement."}},
  ] },

'est_ini_cuota': { titulo:"Il faut fixer la cotisation annuelle",
  contexto:"Avec {MOTIVO}, le comité te demande de prendre position sur la cotisation des adhérents. {PRESION}.",
  variables:{ MOTIVO:["l'inflation qui grimpe","le stade qui réclame des travaux","la concurrence des autres clubs du quartier"],
              PRESION:["Les jeunes adhérents réclament des tarifs plus bas","Les retraités demandent des réductions","Les ultras disent qu'on n'y touche pas"] },
  opciones:[
    {texto:"L'augmenter", sub:"Plus de caisse, moins de sympathie", msg:"Tu as augmenté la cotisation : la trésorerie respire et l'assemblée grogne."},
    {texto:"La geler", sub:"De la sympathie aujourd'hui, des soucis demain", msg:"Tu as gelé la cotisation : applaudissements en tribune et comptes plus serrés."},
    {texto:"Échelonnée par catégorie", sub:"Compliqué mais équitable", msg:"Tu as mis en place une cotisation échelonnée : personne n'est ravi, personne n'est furieux."},
  ] },

'est_ini_pruebas': { titulo:"Essais de joueurs libres",
  contexto:"Il se présente {CANTIDAD} joueurs libres pour demander un essai en présaison. {NOTA}.",
  variables:{ CANTIDAD:["une vingtaine de","près de quarante","une dizaine de"],
              NOTA:["L'entraîneur doute qu'il y ait du talent","Un recruteur assure qu'il y en a un bon","Le préparateur physique prévient qu'on n'a pas le temps"] },
  opciones:[
    {texto:"Ouvrir des essais massifs", sub:"Coût logistique, trouvaille possible", msg:"Les essais ont réservé quelques surprises et une note de frais de sandwichs."},
    {texto:"Ne tester que les recommandés", sub:"Économies, moins de découvertes", msg:"Tu n'as testé que quelques joueurs : rien de neuf, rien de perdu."},
    {texto:"Ne pas ouvrir les portes", sub:"Concentration sur l'effectif actuel", msg:"Tu as fermé les portes : tu as économisé, mais le quartier a râlé."},
  ] },

'est_ini_amistoso': { titulo:"Match amical de luxe contre {RIVAL}",
  contexto:"{RIVAL} propose un match amical {FECHA}, {SEDE}. Ça sert à se mesurer, mais un mauvais résultat fait jaser.",
  variables:{ FECHA:["la semaine prochaine","le week-end prolongé","juste avant la reprise"],
              SEDE:["dans ton stade","dans le stade adverse","sur un terrain neutre"] },
  opciones:[
    {texto:"Le jouer avec l'équipe type", sub:"Un vrai test, risque de claque", ok:{msg:"L'équipe a brillé en amical et la tribune est repartie pleine d'espoir."}, mal:{msg:"Le match amical s'est fini en déroute et les pronostics se sont refroidis."}},
    {texto:"Tester les remplaçants et les jeunes", sub:"Sans pression, peu d'éclat", msg:"Les remplaçants ont saisi leur chance sans que personne ne s'énerve."},
    {texto:"Décliner le match amical", sub:"Tranquillité, pas de bruit", msg:"Tu as décliné : l'entraîneur a bossé à huis clos et la presse a demandé pourquoi."},
  ] },

'est_ini_presentacion': { titulo:"Présentation officielle de l'effectif",
  contexto:"Il faut présenter l'effectif de la saison {LUGAR}. Il y a {EXPECTATIVA}.",
  variables:{ LUGAR:["au stade","dans un théâtre de la ville","sur la place principale"],
              EXPECTATIVA:["beaucoup d'attente","une certaine apathie","des invités et des caméras"] },
  opciones:[
    {texto:"Organiser une grande fête", sub:"Image forte, grosse dépense", msg:"La fête était spectaculaire et les supporters sont repartis avec leurs souvenirs."},
    {texto:"Une cérémonie sobre", sub:"Austère et sans surprise", msg:"La cérémonie était sobre : peu d'applaudissements, zéro critique."},
    {texto:"En profiter pour lancer les abonnements", sub:"Des ventes, mais ça peut faire opportuniste", ok:{msg:"Les abonnements sont partis comme des petits pains : la trésorerie sourit."}, mal:{msg:"On aurait dit une opération commerciale déguisée en fête, et les supporters l'ont remarqué."}},
  ] },

'est_ini_preparador': { titulo:"Le préparateur physique demande des changements",
  contexto:"Le préparateur physique réclame {PEDIDO}. Il dit que sans ça l'équipe va flancher au second semestre.",
  variables:{ PEDIDO:["une salle de musculation rénovée","plus de journées en double séance","un nutritionniste à demeure","moins de matchs amicaux"] },
  opciones:[
    {texto:"Lui donner tout ce qu'il demande", sub:"Un investissement qui se verra plus tard", msg:"L'effectif est arrivé affûté, même si l'investissement s'est senti dans la caisse."},
    {texto:"Accorder la moitié", sub:"Un compromis raisonnable", msg:"Tu as accordé la moitié de la demande : le préparateur a compris et s'est mis au travail."},
    {texto:"Lui dire de se débrouiller", sub:"Économies, tension dans le staff", msg:"Tu as économisé, mais le staff est resté amer et l'effectif le sent."},
  ] },

'est_med_pases': { titulo:"Dernier jour du mercato",
  contexto:"Il reste quelques heures avant la fermeture du mercato et {SITUACION}. L'entraîneur te regarde en attendant un signal.",
  variables:{ SITUACION:["un milieu libre de bon niveau se présente","un rival te propose un attaquant en prêt","il n'y a plus d'argent pour conclure quoi que ce soit","un joueur demande à partir"] },
  opciones:[
    {texto:"Foncer acheter dans l'urgence", sub:"L'effectif se complète, la caisse se vide", msg:"Tu as bouclé un renfort au buzzer et le vestiaire t'en a remercié."},
    {texto:"Clore sans mouvement", sub:"Économies et calme", msg:"Le mercato s'est fermé sans nouveauté : tu as économisé, mais personne n'a rêvé."},
    {texto:"Demander un prêt avec option d'achat", sub:"Ça peut être bon marché ou coûter cher", ok:{msg:"Le prêt s'est bien passé : le renfort est arrivé avec un loyer raisonnable."}, mal:{msg:"L'opération s'est compliquée et tu as fini par trop payer, sans renfort."}},
  ] },

'est_med_balance': { titulo:"Bilan du premier semestre",
  contexto:"Le comité de contrôle examine les comptes du semestre et {HALLAZGO}.",
  variables:{ HALLAZGO:["repère des dépenses mal justifiées","demande plus de détails sur les salaires","réclame les chiffres de la buvette du stade","trouve des dettes non déclarées"] },
  opciones:[
    {texto:"Ouvrir les livres", sub:"Transparence totale, coût politique", msg:"Tu as ouvert les livres : certains ont pris peur, d'autres l'ont beaucoup apprécié."},
    {texto:"Présenter un bilan soigné", sub:"Si ça passe, tout est calme", ok:{msg:"Le comité a accepté le bilan sans objection : tu as pu souffler."}, mal:{msg:"Le comité a trouvé des erreurs et l'assemblée est montée au plafond."}},
    {texto:"Reporter la révision", sub:"Tu gagnes du temps, tu perds la confiance", msg:"Tu as reporté la révision : tu t'es attiré des regards de travers au comité."},
  ] },

'est_med_paro': { titulo:"Grève : {SECTOR}",
  contexto:"Le personnel de {SECTOR} annonce une grève pour {RECLAMO}. Il y a des matchs au calendrier et peu de marge.",
  variables:{ SECTOR:["la sécurité du stade","l'administration","l'entretien du terrain","le transport du club"],
              RECLAMO:["des salaires en retard","de meilleures conditions","un manque de personnel"] },
  opciones:[
    {texto:"Payer ce qui est dû", sub:"Tu tiens parole, la caisse encaisse", msg:"Tu as payé et la grève a été levée : tu as tenu parole, même si la caisse l'a senti."},
    {texto:"Négocier des délais", sub:"Tu gagnes du temps, la tension reste", msg:"Tu as négocié des délais : le conflit s'est refroidi mais couve toujours."},
    {texto:"Déclarer le conflit injustifié", sub:"Main de fer, gros risque", ok:{msg:"Le personnel a accepté les conditions et la grève a vite pris fin."}, mal:{msg:"Le conflit s'est aggravé, les matchs se sont compliqués et la presse t'a pointé du doigt."}},
  ] },

'est_med_clima': { titulo:"Intempéries sur le stade",
  contexto:"Un orage a laissé {DANIO} juste avant un match clé. Il faut décider vite.",
  variables:{ DANIO:["le terrain sous l'eau","une partie du toit de la tribune endommagée","les vestiaires inondés","le terrain recouvert de boue"] },
  opciones:[
    {texto:"Réparer en urgence", sub:"Cher mais sûr", msg:"Tu as réparé à la dernière minute : le match s'est joué normalement."},
    {texto:"Suspendre et reprogrammer", sub:"Économies, calendrier serré", msg:"Tu as suspendu le match : la ligue l'a reprogrammé à une date gênante."},
    {texto:"Jouer quand même dans ces conditions", sub:"Épopée ou fiasco", ok:{msg:"Ils ont joué dans la boue avec du cœur et les supporters ont vécu une nuit épique."}, mal:{msg:"Le match dans la boue a viré au désastre, avec même un blessé à la clé."}},
  ] },

'est_med_receso': { titulo:"Trêve de mi-saison",
  contexto:"Pendant la trêve, {SITUACION}. Il faut décider comment employer le temps.",
  variables:{ SITUACION:["l'effectif réclame de longues vacances","l'entraîneur veut un stage de préparation","plusieurs joueurs sont mal physiquement","les remplaçants réclament du temps de jeu"] },
  opciones:[
    {texto:"Donner des vacances", sub:"Tête reposée, rythme perdu", msg:"L'effectif s'est reposé, mais il est revenu sans rythme."},
    {texto:"Stage intensif", sub:"Rythme élevé, moral bas", msg:"Le stage a rendu l'équipe affûtée et de mauvaise humeur."},
    {texto:"Mélange avec quatre jours de repos", sub:"Un peu de tout", msg:"L'équilibre a été bien accueilli : tout le monde content, personne euphorique."},
  ] },

'est_med_encuesta': { titulo:"Sondage auprès des adhérents",
  contexto:"Le comité a lancé un sondage de mi-saison et {RESULTADO_ENC}. On te demande une réponse.",
  variables:{ RESULTADO_ENC:["la majorité réclame plus de renforts","beaucoup réclament de meilleurs services au stade","une bonne partie conteste les prix","plusieurs demandent plus de proximité avec le dirigeant"] },
  opciones:[
    {texto:"Répondre par des mesures concrètes", sub:"Ça coûte cher, ça gagne la confiance", msg:"Tu as annoncé des mesures concrètes : les adhérents ont senti que tu les avais écoutés."},
    {texto:"Organiser une assemblée ouverte", sub:"Gratuit mais ça expose", msg:"L'assemblée ouverte a été tendue mais a laissé une bonne ambiance."},
    {texto:"Promettre plus que ce qu'on peut tenir", sub:"Si tu tiens, un carton ; sinon, une bombe", ok:{msg:"Les promesses ont fait rêver et ont été tenues à temps : euphorie populaire."}, mal:{msg:"Les promesses n'ont pas été tenues et la tribune te l'a fait savoir."}},
  ] },

'est_cie_definicion': { titulo:"La dernière journée décide de tout",
  contexto:"Lors de la dernière journée, {CONDICION}. L'effectif attend ton message.",
  variables:{ CONDICION:["tu dépends d'un résultat extérieur","tu joues ta qualification","tu joues ton maintien","tu joues le prestige de l'année"] },
  opciones:[
    {texto:"Promettre de grosses primes", sub:"Ça motive, ça coûte cher", msg:"Tu as promis des primes et l'effectif est entré sur le terrain avec les crocs."},
    {texto:"Apaiser l'effectif", sub:"Tête froide, pas d'argent", msg:"Tu as demandé du calme : l'équipe a joué concentrée, sans grands gestes."},
    {texto:"Parler publiquement de la finale", sub:"Pression en plus, quitte ou double", ok:{msg:"Tes mots ont enflammé l'équipe et la tribune : ils sont partis pour gagner."}, mal:{msg:"Tes mots ont ajouté une pression de trop et l'équipe s'est paralysée."}},
  ] },

'est_cie_fiesta': { titulo:"Fête de fin de saison",
  contexto:"Les supporters proposent une fête avec {FORMATO} pour clore l'année.",
  variables:{ FORMATO:["fanfare et repas au stade","un concert de groupes locaux","un cortège dans le quartier","un barbecue populaire au siège"] },
  opciones:[
    {texto:"L'organiser en grand", sub:"Ambiance de fête, grosse dépense", msg:"La fête a été un succès retentissant et tout le monde est reparti content."},
    {texto:"La soutenir sans dépenser", sub:"Les supporters s'en chargent", msg:"Tu as soutenu l'idée et les supporters l'ont organisée eux-mêmes."},
    {texto:"Décliner vu la situation", sub:"Prudence, froideur", msg:"Tu as décliné : tu as économisé, mais la tribune est restée sur sa faim."},
  ] },

'est_cie_premios': { titulo:"Prix du meilleur joueur de l'année",
  contexto:"Tout indique que {JUGADOR} ({JPOS}, niveau {JRATING}) est le meilleur de l'année. La cérémonie est {FORMATO} et il faut décider comment la gérer.",
  variables:{ FORMATO:["en direct à la radio","un dîner de gala","sur les réseaux du club"] },
  opciones:[
    {texto:"Le récompenser lui seul", sub:"Reconnaissance claire, jalousies au vestiaire", msg:"{JUGADOR} a reçu le prix avec fierté ; un coéquipier a fait mine de regarder ailleurs."},
    {texto:"Récompenser tout l'effectif", sub:"Vestiaire soudé, moins d'éclat médiatique", msg:"Tu as récompensé tout l'effectif : personne ne s'est senti en retrait, même si la presse voulait un nom."},
    {texto:"Pas de cérémonie", sub:"Zéro dépense, zéro ambiance", msg:"Tu as passé l'année sans cérémonie : le sujet est resté en suspens dans les couloirs."},
  ] },

'est_cie_contrato': { titulo:"Le contrat de {JUGADOR} arrive à échéance",
  contexto:"Le contrat de {JUGADOR} ({JPOS}, {JEDAD} ans) arrive à échéance et {SITUACION}. Son agent attend une réponse avant la clôture.",
  variables:{ SITUACION:["il demande une augmentation importante","il a des offres d'autres clubs","il veut s'assurer d'être titulaire","il dit aimer le club mais avoir besoin d'argent"] },
  opciones:[
    {texto:"Prolonger avec augmentation", sub:"Tu le retiens, la caisse paie", msg:"Tu as prolongé {JUGADOR} : le vestiaire a fêté ça et la trésorerie a sorti la calculette."},
    {texto:"Prolonger d'un an", sub:"À mi-chemin", msg:"Un an de plus pour {JUGADOR} : personne ne s'est fâché, personne n'a rêvé."},
    {texto:"Le laisser partir libre", sub:"Économies, perte de poids", msg:"{JUGADOR} est parti libre : tu as économisé, mais les supporters ont pleuré."},
  ] },

'est_cie_auditoria': { titulo:"Audit de clôture de l'année",
  contexto:"La ligue audite les comptes de tous les clubs en fin d'année et {ASUNTO}. Il est temps de décider comment répondre.",
  variables:{ ASUNTO:["demande les documents des six derniers mois","enquête sur les paiements aux intermédiaires","examine l'homologation du stade","exige la régularisation des dettes salariales"] },
  opciones:[
    {texto:"Collaborer et tout remettre", sub:"De l'ordre et de l'argent", msg:"Tu as tout remis dans les temps et dans les formes : la ligue l'a apprécié."},
    {texto:"Ne remettre que le nécessaire", sub:"Moins de travail, un certain risque", ok:{msg:"La ligue a accepté ce qui a été remis et tout s'est passé sans accroc."}, mal:{msg:"La ligue en a demandé plus, a infligé une amende et la presse l'a raconté."}},
    {texto:"Engager un cabinet externe", sub:"Cher, mais ça range tout", msg:"Le cabinet a mis les comptes en ordre : cher, mais propre."},
  ] },

'est_cie_proyecto': { titulo:"Planifier l'année prochaine",
  contexto:"En cette fin d'année, le comité veut savoir {PREGUNTA}. Il faut présenter un plan.",
  variables:{ PREGUNTA:["quel est le projet sportif","comment se finance le prochain semestre","ce qu'on fera des jeunes","si on mise sur des renforts ou sur la formation"] },
  opciones:[
    {texto:"Miser fort sur les renforts", sub:"Résultats rapides, risque financier", msg:"Tu as annoncé un pari ambitieux : les adhérents se sont enthousiasmés."},
    {texto:"Miser sur la formation", sub:"Projet à long terme, moins de dépenses", msg:"Tu as misé sur la formation : les plus jeunes sourient, les impatients non."},
    {texto:"Économiser et stabiliser", sub:"Prudence financière", msg:"Tu as annoncé un plan d'économies : les comptes sont tranquilles, peu d'enthousiasme."},
  ] },

'cla_semana': { titulo:"Semaine de derby contre {RIVAL}",
  contexto:"La ville est divisée et {AMBIENTE}. Tout le monde attend ton geste avant le match.",
  variables:{ AMBIENTE:["les railleries arrivent jusqu'au travail","les enfants portent le maillot à l'école","les bars sont pleins de pronostics","la presse ne parle de rien d'autre"] },
  opciones:[
    {texto:"Mettre l'effectif au vert tout le week-end", sub:"Concentration totale, moral bas", msg:"Tu as mis l'effectif au vert : l'équipe est arrivée concentrée, mais impatiente."},
    {texto:"Appeler les supporters à encourager", sub:"Ambiance de fête, risque de débordements", msg:"Les supporters ont répondu par une grande mobilisation de soutien."},
    {texto:"Provoquer le rival dans la presse", sub:"Tu allumes la mèche, quitte ou double", ok:{msg:"Tes déclarations ont allumé la mèche et l'équipe est entrée avec rage."}, mal:{msg:"Tes déclarations se sont retournées contre toi et le rival s'en est servi pour se motiver."}},
  ] },

'cla_barras': { titulo:"Menaces avant le derby",
  contexto:"Avant le derby contre {RIVAL}, un secteur des supporters menace de {AMENAZA}. La sécurité demande une décision.",
  variables:{ AMENAZA:["ne pas entrer si on ne leur remet pas des drapeaux","monter une manifestation non autorisée","envahir la tribune des visiteurs","couper le soutien s'il n'y a pas de renforts"] },
  opciones:[
    {texto:"Dialoguer et trouver un accord", sub:"Calme, mais à un coût", msg:"Tu as dialogué avec les meneurs et la situation s'est apaisée."},
    {texto:"Demander des renforts de police", sub:"De l'ordre, mauvaise image", msg:"Les renforts de police ont garanti l'ordre, même si l'image du club en a souffert."},
    {texto:"Ignorer les menaces", sub:"S'il ne se passe rien, tu as gagné ; sinon, ça se complique", ok:{msg:"Les menaces n'ont mené à rien et le derby s'est déroulé en paix."}, mal:{msg:"Il y a eu des incidents pendant le derby et le club a été sanctionné."}},
  ] },

'cla_prensa': { titulo:"La presse chauffe le derby",
  contexto:"La presse monte une émission spéciale sur le derby avec {TITULAR_PRENSA}. Ils veulent ta voix.",
  variables:{ TITULAR_PRENSA:["des phrases piquantes du rival","un retour sur la rivalité historique","des doutes sur ton effectif","le statut de favori du rival"] },
  opciones:[
    {texto:"Parler calmement", sub:"Image solide, peu de spectacle", msg:"Tu as parlé calmement et renforcé ton image institutionnelle."},
    {texto:"Répondre avec force", sub:"Tu marques ton territoire, ça peut coûter cher", ok:{msg:"Tes réponses sont devenues virales et les supporters t'ont applaudi debout."}, mal:{msg:"Tes réponses ont été mal interprétées et la presse t'a critiqué."}},
    {texto:"Ne pas donner d'interviews", sub:"Tu évites le risque, tu perds de la visibilité", msg:"Tu n'as pas donné d'interviews : d'autres ont occupé le terrain et la presse te l'a reproché."},
  ] },

'cla_arbitro': { titulo:"Trio arbitral polémique pour le derby",
  contexto:"Un trio arbitral a été désigné pour le derby contre {RIVAL} et {POLEMICA}. On te presse de réagir.",
  variables:{ POLEMICA:["l'un des arbitres a eu un antécédent avec ton club","les supporters rivaux s'en réjouissent","la désignation est arrivée tard","des doutes pèsent sur un lien passé"] },
  opciones:[
    {texto:"Demander officiellement un changement", sub:"Réclamation institutionnelle, bruit politique", msg:"Tu as déposé la demande : la ligue l'a rejetée, mais il en reste une trace."},
    {texto:"Accepter la désignation", sub:"Prudence et confiance", msg:"Tu as accepté et évité un front inutile : le derby s'est joué dans le calme."},
    {texto:"Faire fuiter la polémique à la presse", sub:"Pression médiatique, risque de sanction", ok:{msg:"La pression a fait son effet : la ligue a veillé à la désignation."}, mal:{msg:"La ligue y a vu une manœuvre et tu as reçu un avertissement public."}},
  ] },

'cla_v_revancha': { titulo:"Revanche contre {RIVAL}",
  contexto:"La revanche contre {RIVAL} arrive, {ANTECEDENTE}. Les supporters veulent croire que c'est possible.",
  variables:{ ANTECEDENTE:["avec tout à jouer au classement","avec une presse divisée","avec l'envie de régler un compte en suspens","avec les deux équipes qui demandent du respect"] },
  opciones:[
    {texto:"Partir pour gagner dès la première minute", sub:"Courage, quitte ou double", ok:{msg:"L'équipe est entrée pour mordre et a remporté un derby mémorable."}, mal:{msg:"L'équipe s'est désorganisée et le rival l'a punie sans pitié."}},
    {texto:"Match fermé et en contre", sub:"Du calcul plutôt que de l'épopée", msg:"Un match fermé : ni gloire ni drame, mais on a pris des points."},
    {texto:"Promettre une prime spéciale", sub:"Motivation avec un coût", msg:"Tu as promis une prime : l'équipe est entrée avec un autre visage et la caisse l'a remarqué."},
  ] },

'cla_v_entradas': { titulo:"Le prix des billets du derby",
  contexto:"Pour la revanche contre {RIVAL}, il y a {DEMANDA}. Il faut fixer le prix et la répartition.",
  variables:{ DEMANDA:["une demande qui triple la capacité","du marché noir à l'entrée","une liste d'attente d'adhérents","des demandes de billets gratuits de partout"] },
  opciones:[
    {texto:"Prix populaire", sub:"Les gens apprécient, la caisse non", msg:"Tu as maintenu le prix populaire : les supporters t'ont remercié par des applaudissements."},
    {texto:"Prix de derby", sub:"Plus de caisse, moins de sympathie", msg:"Tu as fait payer le prix du derby : la caisse est pleine et les réseaux te critiquent."},
    {texto:"Tirage au sort entre adhérents", sub:"Juste, mais ça génère des réclamations", ok:{msg:"Le tirage au sort a été transparent et tout le monde l'a apprécié."}, mal:{msg:"Le tirage au sort a fait naître des doutes et plusieurs adhérents ont protesté."}},
  ] },

'cla_v_homenaje': { titulo:"Hommage aux gloires du club",
  contexto:"Avant la revanche contre {RIVAL}, on propose un hommage à {GLORIAS}. C'est émouvant, mais ça mange du temps de préparation.",
  variables:{ GLORIAS:["les champions d'une décennie dorée","une idole historique récemment disparue","l'équipe de la montée","les fondateurs de l'institution"] },
  opciones:[
    {texto:"Le faire avant le match", sub:"Émotion garantie, un peu de distraction", msg:"L'hommage a ému tout le stade ; l'effectif est entré un peu distrait."},
    {texto:"Le faire après", sub:"Sans distraction, moins d'ambiance", msg:"L'hommage a eu lieu à la fin et l'équipe n'a pas perdu le fil."},
    {texto:"Le repousser à une autre date", sub:"Tu évites les risques, tu perds une occasion", msg:"Tu as repoussé l'hommage : certains ont compris, d'autres se sont offusqués."},
  ] },

'pais_sa_barrio': { titulo:"Les écoles de foot du quartier demandent le terrain",
  contexto:"Les écoles de foot pour enfants de {ZONA} demandent à utiliser le terrain annexe {FRECUENCIA}. Les parents ont déjà réuni des signatures.",
  variables:{ ZONA:["la zone sud","le quartier voisin","la périphérie","le village d'à côté"],
              FRECUENCIA:["tous les samedis","deux fois par semaine","pendant les vacances d'hiver"] },
  opciones:[
    {texto:"Leur ouvrir le terrain gratuitement", sub:"Formation et affection, terrain abîmé", msg:"Tu as ouvert le terrain : les enfants sont ravis, le jardinier un peu moins."},
    {texto:"Demander un loyer symbolique", sub:"Tout le monde y gagne un peu", msg:"Tu as fixé un loyer symbolique : les familles ont accepté et la caisse s'est garnie."},
    {texto:"Dire non à cause de l'état du terrain", sub:"Tu protèges la pelouse, tu perds en sympathie", msg:"Tu as dit non : la pelouse est intacte, mais le quartier ne te le pardonne pas."},
  ] },

'pais_sa_altura': { titulo:"Match à plus de {METROS} mètres d'altitude",
  contexto:"La prochaine journée se joue dans une ville de haute altitude. Le staff propose de {PLAN}.",
  variables:{ METROS:["2 600","3 000","3 600"],
              PLAN:["arriver une semaine à l'avance","arriver la veille et faire confiance à la condition physique","ajouter un travail d'adaptation en chambre hypobare"] },
  opciones:[
    {texto:"Voyager une semaine à l'avance", sub:"Meilleure adaptation, plus de dépenses", msg:"Ils sont arrivés tôt et l'équipe s'est bien adaptée à l'altitude."},
    {texto:"Voyager la veille", sub:"Économies, souffrance physique", msg:"Ils sont arrivés juste à temps et l'équipe a souffert du rythme en seconde période."},
    {texto:"Engager une adaptation en chambre spéciale", sub:"Cher, l'effet n'est pas garanti", ok:{msg:"La préparation spéciale a fonctionné : l'équipe a couru comme si de rien n'était."}, mal:{msg:"L'investissement n'a pas porté ses fruits et la dépense est partie en fumée."}},
  ] },

'pais_sa_rutas': { titulo:"Un déplacement interminable par la route",
  contexto:"Le prochain match à l'extérieur implique {VIAJE}. Il faut décider du transport de l'effectif.",
  variables:{ VIAJE:["un trajet de 18 heures en car","un vol avec une longue escale","un parcours sur des routes en mauvais état"] },
  opciones:[
    {texto:"Louer un car couchettes", sub:"Confort, grosse dépense", msg:"L'effectif a voyagé confortablement et est arrivé reposé."},
    {texto:"Voyager dans le car du club", sub:"Économies, fatigue", msg:"L'effectif a voyagé fatigué et ça se voit en première période."},
    {texto:"Demander au club local d'aider pour le transfert", sub:"Une courtoisie contre un service", ok:{msg:"Le club local a coopéré : tu as économisé et gagné un ami."}, mal:{msg:"Le club local s'est fait désirer et tu as fini par payer plus que prévu."}},
  ] },

'pais_hi_patronal': { titulo:"La fête patronale tombe en semaine de match",
  contexto:"Cette année, la fête patronale coïncide avec {SITUACION}. La ville veut que le club y participe.",
  variables:{ SITUACION:["le match le plus important de la journée","la présentation d'un renfort","l'anniversaire du club","la semaine d'entraînement décisive"] },
  opciones:[
    {texto:"Te joindre à la fête", sub:"Image de proximité, effectif dispersé", msg:"Ils ont participé à la fête : le quartier est ravi et l'entraîneur fait la tête."},
    {texto:"Envoyer une délégation", sub:"Présence sans distraire", msg:"Tu as envoyé une délégation : le club était présent sans négliger le travail."},
    {texto:"Être absent à cause du match", sub:"Priorité au sportif", msg:"Tu as séché la fête : le quartier l'a remarqué mais l'équipe est restée concentrée."},
  ] },

'pais_br_carnaval': { titulo:"Le carnaval tombe la semaine du match",
  contexto:"Le carnaval tombe juste la semaine d'un match important et {SITUACION}.",
  variables:{ SITUACION:["plusieurs joueurs veulent participer aux défilés","une école de samba invite l'effectif","toute la ville est dans la rue","la presse demande si l'équipe va se mettre au vert"] },
  opciones:[
    {texto:"Mettre l'effectif au vert", sub:"Concentration totale, un peu de rancœur", msg:"Tu as mis l'effectif au vert : l'équipe est arrivée concentrée, mais la mine longue."},
    {texto:"Participer à un défilé du club", sub:"Fête et image, risque physique", msg:"Le club a défilé et a récolté un immense applaudissement sur l'avenue."},
    {texto:"Laisser la liberté à l'effectif", sub:"Faire confiance à la maturité", ok:{msg:"L'effectif a fait preuve de professionnalisme et a profité du carnaval sans excès."}, mal:{msg:"Il y a eu des excès et l'équipe est arrivée mal préparée au match."}},
  ] },

'pais_ec_invierno': { titulo:"Neige et brouillard avant le match",
  contexto:"Une vague de {CLIMA} complique le match de la journée. La ligue dit qu'elle {POSTURA}.",
  variables:{ CLIMA:["neige","brouillard épais","froid polaire","verglas dans les rues"],
              POSTURA:["ne suspend pas pour l'instant","étudie une reprogrammation","laisse la décision aux clubs"] },
  opciones:[
    {texto:"Demander la reprogrammation", sub:"Sécurité, calendrier serré", msg:"La reprogrammation a été validée, même si le calendrier en est devenu inconfortable."},
    {texto:"Jouer avec chauffage et prudence", sub:"Une dépense pour préparer le terrain", msg:"On a joué sur un terrain préparé : ni plainte ni gloire."},
    {texto:"Jouer quand même et parier sur la météo", sub:"Épopée ou blessures", ok:{msg:"L'équipe s'est mieux adaptée que le rival : une victoire au goût d'épopée."}, mal:{msg:"Il y a eu des glissades, des blessés et un résultat que tu préfères oublier."}},
  ] },

'pais_ec_ultras': { titulo:"Les groupes ultras veulent un grand tifo",
  contexto:"Les groupes de supporters préparent un grand tifo pour {OCASION} et demandent {PEDIDO}.",
  variables:{ OCASION:["le prochain match à domicile","le derby local","l'anniversaire du club"],
              PEDIDO:["l'autorisation de faire entrer du matériel","un espace pour le monter","de l'argent pour le tissu et la peinture"] },
  opciones:[
    {texto:"Soutenir le projet", sub:"Image spectaculaire, un certain risque", msg:"Le tifo a été un spectacle et les caméras l'ont repassé toute la semaine."},
    {texto:"L'approuver sous conditions", sub:"Avec contrôle de sécurité", msg:"Tu as approuvé sous conditions : le tifo s'est bien passé, sans grande surprise."},
    {texto:"Refuser pour des raisons de sécurité", sub:"Prudence, tension avec la tribune", msg:"Tu as refusé la demande : la tribune s'est fâchée et il y a eu des sifflets."},
  ] },

'pais_ec_fairplay': { titulo:"La ligue exige d'assainir les comptes",
  contexto:"La ligue avertit que le club doit {EXIGENCIA} sous peine de recevoir {SANCION}.",
  variables:{ EXIGENCIA:["réduire la masse salariale","équilibrer recettes et dépenses","présenter un plan de paiement","renforcer le capital"],
              SANCION:["une sanction sportive","une amende","des restrictions sur le mercato"] },
  opciones:[
    {texto:"Réduire les dépenses immédiatement", sub:"Tu t'exécutes, l'effectif en pâtit", msg:"Tu as réduit les dépenses : la ligue est satisfaite, le vestiaire moins."},
    {texto:"Présenter un plan sur deux ans", sub:"Tu gagnes du temps, la ligue doute", msg:"Tu as présenté un plan sur deux ans : la ligue l'a accepté avec des réserves."},
    {texto:"Demander une dérogation", sub:"Ça peut être un grand coup", ok:{msg:"La ligue a accepté la dérogation pour cette fois : tu as respiré à fond."}, mal:{msg:"La ligue a refusé la dérogation et appliqué la sanction."}},
  ] },

'pais_ec_academia': { titulo:"Un centre de formation d'élite veut {JUGADOR}",
  contexto:"Le centre de formation d'un grand club propose un accord pour {JUGADOR} ({JPOS}, {JEDAD} ans) : {OFERTA}. Le jeune rêve de partir.",
  variables:{ OFERTA:["paiement immédiat et pourcentage futur","seulement un pourcentage futur","un prêt avec option d'achat"] },
  opciones:[
    {texto:"Accepter l'accord", sub:"Argent et perspectives, adieu à la pépite", msg:"{JUGADOR} est parti au centre de formation : le club a encaissé et la tribune lui a dit au revoir."},
    {texto:"Refuser et garder le jeune", sub:"Formation et fierté", msg:"Tu as refusé et {JUGADOR} est resté : les supporters l'ovationnent."},
    {texto:"Demander une meilleure offre", sub:"Si ça marche, parfait", ok:{msg:"Le centre a amélioré l'offre : affaire en or et la pépite a un bel avenir."}, mal:{msg:"Le centre s'est vexé et a retiré l'offre : sans jeune et sans argent."}},
  ] },

'pais_gb_copa': { titulo:"Tirage de coupe contre un club amateur",
  contexto:"La coupe nationale te tire contre un club amateur de {LUGAR}. {PRESION}.",
  variables:{ LUGAR:["un village de la côte","une localité minière","un quartier ouvrier","un village avec une église à chaque coin de rue"],
              PRESION:["La presse attend une correction","Le rival joue comme si c'était une finale","Les supporters locaux ont envahi les rues"] },
  opciones:[
    {texto:"Jouer avec l'équipe type", sub:"Du respect, de l'usure", msg:"Tu as sorti le grand jeu et gagné sans trop souffrir."},
    {texto:"Faire tourner et donner du repos", sub:"Risque d'élimination", msg:"Tu as fait tourner et le match s'est compliqué plus que prévu."},
    {texto:"Envoyer les jeunes", sub:"Image de formation, risque de fiasco", ok:{msg:"Les jeunes se sont illustrés et la presse les a salués : coup d'éclat."}, mal:{msg:"Les jeunes ont pris peur : fiasco et critiques féroces."}},
  ] },

'pais_ee_receso': { titulo:"Une trêve hivernale interminable",
  contexto:"La ligue s'arrête à cause du froid pendant {DURACION}. Le staff propose {PLAN}.",
  variables:{ DURACION:["trois mois","près de quatre mois","tout un hiver"],
              PLAN:["une tournée dans un pays chaud","de s'entraîner dans un gymnase couvert","de passer à un tournoi de présaison local"] },
  opciones:[
    {texto:"Faire la tournée au chaud", sub:"Grosse dépense, préparation idéale", msg:"La tournée au chaud a maintenu le rythme de l'équipe."},
    {texto:"S'entraîner dans le gymnase couvert", sub:"Économies, rythme bas", msg:"Ils se sont entraînés à l'abri : l'équipe est revenue un peu rouillée."},
    {texto:"Monter un tournoi local entre clubs", sub:"Pas cher et divertissant, si ça marche", ok:{msg:"Le tournoi local a été un succès et a gardé l'équipe en rythme."}, mal:{msg:"Le tournoi a été mal organisé et a fini en désastre logistique."}},
  ] },

'pais_ee_estadio': { titulo:"Le stade municipal est partagé",
  contexto:"La municipalité veut que {OTRO} partage le stade du club. Elle dit que c'est pour {RAZON}.",
  variables:{ OTRO:["une équipe de rugby","un club de deuxième division","une fédération d'athlétisme"],
              RAZON:["mieux rentabiliser l'investissement public","réduire les frais d'entretien","ajouter de l'activité au quartier"] },
  opciones:[
    {texto:"Accepter le partage", sub:"Des revenus, moins d'exclusivité", msg:"Tu as accepté de partager le stade : de l'argent rentre, mais la pelouse en souffre."},
    {texto:"Négocier des horaires exclusifs", sub:"Équilibre, plus de bureaucratie", msg:"Tu as négocié des horaires et la municipalité s'est montrée satisfaite."},
    {texto:"Refuser la demande", sub:"Fierté, bagarre politique", msg:"Tu as refusé : le club se sent chez lui, mais la municipalité fronce les sourcils."},
  ] },

'pais_ee_mecenas': { titulo:"Un mécène local propose de financer le club",
  contexto:"Un entrepreneur de la région propose de {OFERTA} en échange de {CONDICION}.",
  variables:{ OFERTA:["payer six mois de salaires","construire une nouvelle tribune","financer les jeunes"],
              CONDICION:["une place au comité directeur","son nom sur le stade","son mot à dire sur les recrutements"] },
  opciones:[
    {texto:"Accepter sans conditions", sub:"Argent immédiat, influence extérieure", msg:"Tu as accepté l'offre : le club respire, mais le mécène appelle déjà l'entraîneur."},
    {texto:"Accepter avec des limites écrites", sub:"Plus lent, plus sûr", msg:"Tu as posé des limites par écrit : le mécène a accepté en faisant la grimace."},
    {texto:"Refuser pour garder l'indépendance", sub:"Fierté, caisse vide", msg:"Tu as refusé : les supporters ont salué l'indépendance, la trésorerie moins."},
  ] },

'pais_me_ayuno': { titulo:"Le mois de jeûne change les horaires",
  contexto:"Pendant le mois de jeûne, {SITUACION}. Il faut réorganiser entraînements et matchs.",
  variables:{ SITUACION:["beaucoup de joueurs s'entraînent à jeun","les matchs se jouent tard le soir","l'effectif demande d'ajuster les charges","la ligue modifie le calendrier"] },
  opciones:[
    {texto:"S'entraîner de nuit", sub:"Tu respectes la tradition, la routine change", msg:"Tu as déplacé les entraînements à la nuit : l'effectif l'a beaucoup apprécié."},
    {texto:"Réduire la charge physique", sub:"Soin de l'effectif, moins de rythme", msg:"Tu as réduit la charge : l'effectif est arrivé entier mais un peu mou."},
    {texto:"Maintenir le plan habituel", sub:"Efficacité, usure", msg:"Tu as maintenu le plan habituel : il y a eu des plaintes et quelques baisses de rendement."},
  ] },

'pais_me_calor': { titulo:"Chaleur extrême pour le match de l'après-midi",
  contexto:"La météo annonce {TEMP} pour le match de l'après-midi. L'arbitre dit que {POSTURA}.",
  variables:{ TEMP:["plus de 42 degrés","un ressenti insupportable","une vague de chaleur de plusieurs jours"],
              POSTURA:["il y aura des pauses d'hydratation","on pourrait reprogrammer","la décision revient aux clubs"] },
  opciones:[
    {texto:"Demander de jouer le match le soir", sub:"Sécurité, réclamation de la ligue", msg:"Tu as obtenu de jouer le soir : l'équipe a beaucoup mieux rendu."},
    {texto:"Jouer avec hydratation et rotations", sub:"Dépense, risque modéré", msg:"On a joué avec des pauses d'hydratation et tout s'est réglé sans problème."},
    {texto:"Jouer sans changement", sub:"Épopée ou désastre physique", ok:{msg:"L'équipe a mieux supporté la chaleur : victoire héroïque."}, mal:{msg:"Il y a eu des malaises et un match à oublier."}},
  ] },

'pais_me_familias': { titulo:"Plus de familles en tribune",
  contexto:"Les adhérents demandent de créer {ESPACIO} pour venir avec {QUIENES}. Il faut ajuster la sécurité.",
  variables:{ ESPACIO:["un secteur familial","un secteur avec des jeux pour enfants","une tribune avec de l'ombre"],
              QUIENES:["les enfants","toute la famille","les grands-mères"] },
  opciones:[
    {texto:"Le construire tout de suite", sub:"Plus de public, plus de dépenses", msg:"Le secteur familial s'est rempli dès le premier match."},
    {texto:"Réserver une partie existante", sub:"Rapide et bon marché", msg:"Tu as réservé une partie : la réponse des familles a été positive."},
    {texto:"Le repousser", sub:"Économies, frustration", msg:"Tu as repoussé le projet : les familles attendent avec une patience limitée."},
  ] },

'pais_af_viaje': { titulo:"Longs voyages entre les villes",
  contexto:"Le calendrier impose un voyage de {DISTANCIA} pour le prochain match. {NOTA}.",
  variables:{ DISTANCIA:["1 500 kilomètres","plus de 20 heures de route","un vol avec deux escales"],
              NOTA:["L'argent ne suffit pas pour tout","L'entraîneur s'inquiète de la fatigue","L'effectif veut voyager en avion"] },
  opciones:[
    {texto:"Affréter un vol", sub:"Rapide, grosse dépense", msg:"L'effectif est arrivé frais et l'équipe en a profité."},
    {texto:"Voyager par la route avec des pauses", sub:"Économies, fatigue", msg:"Ils ont voyagé par la route : arrivés fatigués mais à l'heure."},
    {texto:"Chercher un sponsor pour le voyage", sub:"Si ça marche, parfait", ok:{msg:"Le sponsor a payé le voyage et on a même parlé de toi dans la presse."}, mal:{msg:"Le sponsor s'est désisté à la dernière minute et il a fallu improviser."}},
  ] },

'pais_af_cesped': { titulo:"Le terrain est en mauvais état",
  contexto:"La pelouse du stade présente {PROBLEMA}. L'entraîneur dit qu'on ne peut pas bien jouer comme ça.",
  variables:{ PROBLEMA:["des trous et des zones pelées","trop de boue","de graves irrégularités","un arrosage défaillant"] },
  opciones:[
    {texto:"Investir dans un nouveau terrain", sub:"Cher mais définitif", msg:"Tu as rénové le terrain et l'équipe joue bien mieux."},
    {texto:"Réparations partielles", sub:"Rapide et pas cher", msg:"Les réparations partielles ont aidé, mais n'ont pas tout réglé."},
    {texto:"Adapter le jeu au terrain", sub:"Sans dépense, moins de football", msg:"Ils ont adapté leur jeu au terrain : peu spectaculaire, mais sans dépenser."},
  ] },

'pais_af_lluvias': { titulo:"La saison des pluies complique tout",
  contexto:"Les pluies {EFECTO} et le calendrier ne pardonne pas.",
  variables:{ EFECTO:["inondent les routes d'accès","rendent le terrain impraticable","retardent les équipes visiteuses","coupent l'alimentation électrique"] },
  opciones:[
    {texto:"Reprogrammer le match", sub:"Sécurité, calendrier compliqué", msg:"Tu as reprogrammé le match : personne ne s'est mouillé, mais le calendrier s'est compliqué."},
    {texto:"Mettre en place un drainage d'urgence", sub:"Dépense, jeu normal", msg:"Le drainage d'urgence a fonctionné et le match s'est joué sans retard."},
    {texto:"Jouer quand même dans la boue", sub:"Épopée ou blessures", ok:{msg:"Le match dans la boue a été une bataille héroïque que tu as gagnée."}, mal:{msg:"Le match dans la boue a été un désastre."}},
  ] },

'pais_af_ojeadores': { titulo:"Des recruteurs étrangers suivent {JUGADOR}",
  contexto:"Des recruteurs de ligues européennes suivent {JUGADOR} ({JPOS}, {JEDAD} ans). Un agent veut {PROPUESTA}.",
  variables:{ PROPUESTA:["un essai immédiat à l'étranger","un contrat avec clause de départ","un voyage en Europe pendant les vacances"] },
  opciones:[
    {texto:"Accepter l'essai", sub:"Une chance pour lui, un risque pour toi", msg:"{JUGADOR} est parti faire un essai et le club a reçu une compensation."},
    {texto:"Lui demander d'attendre une saison", sub:"Stabilité, il se frustre", msg:"{JUGADOR} est resté une saison de plus et a rendu sur le terrain."},
    {texto:"Conclure un accord avec le club intéressé", sub:"Affaire en or ou rupture", ok:{msg:"L'accord a été conclu et le club a touché une belle somme."}, mal:{msg:"L'accord est tombé à l'eau et {JUGADOR} est resté contrarié."}},
  ] },

'pais_af_radio': { titulo:"La radio communautaire diffuse tous les matchs",
  contexto:"Une radio communautaire de {ZONA} diffuse tous les matchs du club et demande {PEDIDO}.",
  variables:{ ZONA:["la région","ton quartier","le village voisin"],
              PEDIDO:["une interview hebdomadaire","l'accès au vestiaire","de l'aide pour l'émetteur"] },
  opciones:[
    {texto:"Leur donner tout l'accès", sub:"Supporters impliqués, moins d'intimité", msg:"La radio est devenue la voix du club et les gens l'ont apprécié."},
    {texto:"Leur donner une interview hebdomadaire", sub:"Un équilibre simple", msg:"Tu as monté une interview hebdomadaire : tout le monde est content."},
    {texto:"Refuser faute de temps", sub:"Tu évites la distraction, tu perds en affection", msg:"Tu as refusé : la radio a continué à diffuser, mais sans ta sympathie."},
  ] },

'pais_ao_datos': { titulo:"Analyse de données et appli pour les supporters",
  contexto:"Une entreprise technologique propose {SERVICIO}. Elle veut {CONTRAPARTIDA}.",
  variables:{ SERVICIO:["un système d'analyse de données de l'effectif","une appli officielle pour les supporters","des caméras et des statistiques avancées"],
              CONTRAPARTIDA:["l'accès aux données des supporters","de la publicité dans le stade","l'exclusivité pendant trois ans"] },
  opciones:[
    {texto:"Accepter l'accord complet", sub:"Modernité, dépendance", msg:"L'accord a modernisé le club et amélioré le rendement du staff."},
    {texto:"Demander des changements dans les conditions", sub:"Plus lent, plus sûr", msg:"Tu as demandé des changements : l'accord est sorti plus équitable."},
    {texto:"Refuser pour la vie privée", sub:"Prudence, moins de ressources", msg:"Tu as refusé l'accord pour protéger les données des supporters."},
  ] },

'pais_ao_cantos': { titulo:"Les supporters organisent des chorégraphies",
  contexto:"Les groupes de supporters préparent {COREO} pour le prochain match et demandent {PEDIDO}.",
  variables:{ COREO:["une chorégraphie en mosaïque","des chants synchronisés dans tout le stade","une exhibition de drapeaux"],
              PEDIDO:["de répéter dans le stade","un virage complet","l'autorisation de filmer"] },
  opciones:[
    {texto:"Les soutenir à fond", sub:"Superbe image, dépense", msg:"La chorégraphie a été un succès et a fait le tour des réseaux."},
    {texto:"Autoriser les répétitions", sub:"Soutien modéré", msg:"Les répétitions ont eu lieu et le résultat était soigné."},
    {texto:"Leur demander de simplifier", sub:"Moins de risque, moins de magie", msg:"Tu as demandé de simplifier : la chorégraphie a été plus modeste."},
  ] },

});
