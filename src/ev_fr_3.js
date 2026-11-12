/* Événements 2 (suite) — traduction française (pays, personnages récurrents, chaînes). */
EVENTOS_I18N.fr = Object.assign(EVENTOS_I18N.fr || {}, {

'pais_as_otro_deporte': { titulo:"Le public se tourne vers un autre sport",
  contexto:"Un autre sport très populaire se dispute les mêmes créneaux et {PROBLEMA}. Les adhérents veulent une réponse.",
  variables:{ PROBLEMA:["a emporté une bonne partie du public","accapare la presse","a plus de sponsors","a plus de stars"] },
  opciones:[
    {texto:"Changer l'horaire des matchs", sub:"Tu évites la concurrence, ajustement logistique", msg:"Tu as déplacé les horaires : le public est revenu en tribune."},
    {texto:"Lancer une campagne d'adhésions", sub:"Dépense, bon écho", msg:"La campagne d'adhésions a bien fonctionné."},
    {texto:"Accepter que c'est la concurrence", sub:"Calme, résignation", msg:"Tu as accepté qu'il y a de la concurrence : rien n'a changé."},
  ] },

'pais_as_monzon': { titulo:"La mousson met le match en doute",
  contexto:"Les pluies de la mousson {EFECTO}. La ligue dit que {POSTURA}.",
  variables:{ EFECTO:["inondent les abords du stade","laissent le terrain détrempé","perturbent les transports publics"],
              POSTURA:["le match aura lieu sauf urgence","on décidera le jour du match","on évalue avec les clubs"] },
  opciones:[
    {texto:"Demander une reprogrammation", sub:"Sécurité, calendrier", msg:"Tu as obtenu de reprogrammer le match : les supporters sont arrivés tranquilles."},
    {texto:"Investir dans un drainage d'urgence", sub:"Dépense et continuité", msg:"Le drainage a permis de jouer normalement."},
    {texto:"Jouer quand même", sub:"Épopée ou chaos", ok:{msg:"Le match sous la pluie a été une fête."}, mal:{msg:"Le match a été un chaos, avec des blessés et des plaintes."}},
  ] },

'pais_sea_calor': { titulo:"Chaleur et humidité en plein midi",
  contexto:"Le match se jouera à midi avec {CONDICION}. Le staff propose {PLAN}.",
  variables:{ CONDICION:["une chaleur et une humidité extrêmes","un ressenti très élevé","90 % d'humidité"],
              PLAN:["un changement de système de jeu","davantage de rotations","de l'hydratation et des gilets rafraîchissants"] },
  opciones:[
    {texto:"Demander de jouer le match en fin d'après-midi", sub:"Meilleur climat, plainte de la télé", msg:"Tu as obtenu de jouer en fin d'après-midi : l'équipe a beaucoup mieux rendu."},
    {texto:"Adapter le plan avec gilets et rotations", sub:"Dépense maîtrisée", msg:"Le plan d'hydratation a fonctionné et évité l'usure."},
    {texto:"Jouer avec le plan habituel", sub:"Économies, épuisement", msg:"L'équipe s'est épuisée en seconde période."},
  ] },

'pais_na_distancias': { titulo:"Les vols du calendrier dévorent le budget",
  contexto:"Le calendrier amène {VIAJES} et la caisse le ressent déjà.",
  variables:{ VIAJES:["trois longs voyages en un mois","un vol qui traverse le continent","des voyages avec changement de fuseau horaire"] },
  opciones:[
    {texto:"Affréter des vols directs", sub:"Confort, dépense", msg:"Ils ont voyagé confortablement et l'équipe a bien rendu."},
    {texto:"Voyager en vols commerciaux avec escales", sub:"Économies, fatigue", msg:"Ils ont voyagé avec des escales : arrivés fatigués, mais tu as économisé."},
    {texto:"Demander à la ligue de regrouper les déplacements", sub:"Si ça passe, grosses économies", ok:{msg:"La ligue a accepté de regrouper les déplacements : économies et repos."}, mal:{msg:"La ligue a rejeté la demande et tu es resté avec les vols chers."}},
  ] },

'pais_na_becas': { titulo:"Une université veut {JUGADOR}",
  contexto:"Une université offre une bourse complète à {JUGADOR} ({JPOS}, {JEDAD} ans) avec {CONDICION}. Sa famille est partagée.",
  variables:{ CONDICION:["un programme sportif de premier plan","des études gratuites","un bon staff technique"] },
  opciones:[
    {texto:"Soutenir la bourse", sub:"Formation et études, adieu à la pépite", msg:"{JUGADOR} a accepté la bourse : le club a reçu une compensation et une bonne presse."},
    {texto:"Lui demander de signer avec le club", sub:"Tu gardes le jeune, il perd son éducation", msg:"{JUGADOR} est resté au club : il rend bien, même si la famille n'est pas tout à fait contente."},
    {texto:"Monter un accord de prêt", sub:"Équilibre entre les deux mondes", msg:"L'accord de prêt permet à {JUGADOR} d'étudier et de jouer."},
  ] },

'pais_ca_huracan': { titulo:"Saison des ouragans",
  contexto:"Un ouragan {AMENAZA}. Le club doit décider comment protéger le stade et l'effectif.",
  variables:{ AMENAZA:["approche de l'île","menace la côte","place la région en alerte rouge"] },
  opciones:[
    {texto:"Suspendre les activités et protéger le stade", sub:"Sécurité, calendrier", msg:"Tu as protégé le stade et l'effectif : pas de dégâts graves."},
    {texto:"S'entraîner à l'abri et attendre", sub:"Normalité préservée", msg:"Ils se sont entraînés à l'abri pendant que la tempête passait."},
    {texto:"Jouer le match à huis clos", sub:"Risque, occasion de continuer", ok:{msg:"Ils ont joué à huis clos et la retransmission a été un succès."}, mal:{msg:"Le match a connu des problèmes de sécurité et des dégâts."}},
  ] },

'pais_na_inversor': { titulo:"Un investisseur propose de transformer le match en spectacle",
  contexto:"Un investisseur propose d'ajouter {SHOW} au match à domicile en échange de {COMPENSACION}.",
  variables:{ SHOW:["de la musique live et des shows à la mi-temps","des activités pour enfants et de la restauration","des écrans géants et des concours"],
              COMPENSACION:["un pourcentage de la billetterie","de la publicité sur le terrain","la gestion de la buvette"] },
  opciones:[
    {texto:"Accepter le projet", sub:"Plus de public, moins de tradition", msg:"Les matchs sont devenus un spectacle : le stade s'est rempli."},
    {texto:"L'essayer sur un match", sub:"Un test sans risque", msg:"L'essai a fonctionné et réservé une belle surprise."},
    {texto:"Refuser par tradition", sub:"Tu respectes les vieux supporters", msg:"Tu as refusé le projet : les supporters de toujours l'ont fêté."},
  ] },

'pais_an_pub': { titulo:"Le pub des supporters a besoin de travaux",
  contexto:"Le pub où se retrouvent les supporters de toujours {PROBLEMA}. Ils demandent l'aide du club.",
  variables:{ PROBLEMA:["est sur le point de fermer","a besoin d'une rénovation","a subi un incendie","a perdu sa licence"] },
  opciones:[
    {texto:"Les aider avec de l'argent", sub:"Geste fort, dépense", msg:"Tu les as aidés avec de l'argent et le pub a débordé de reconnaissance."},
    {texto:"Leur offrir un espace dans le stade", sub:"Solution intermédiaire", msg:"Tu leur as donné un espace dans le stade : tout le monde n'est pas content."},
    {texto:"Dire qu'il n'y a pas de budget", sub:"Économies, colère", msg:"Tu as dit qu'il n'y a pas de budget : les supporters du pub se sont sentis abandonnés."},
  ] },

'pais_oc_distancias': { titulo:"Des voyages interminables entre villes et îles",
  contexto:"Le calendrier amène {VIAJE} et les coûts explosent.",
  variables:{ VIAJE:["un vol de six heures","un voyage en ferry et en avion","une tournée de plusieurs villes","une traversée de la mer"] },
  opciones:[
    {texto:"Affréter des vols charter", sub:"Confort, grosse dépense", msg:"Le vol charter a laissé l'effectif frais."},
    {texto:"Voyager en vols réguliers", sub:"Économies, fatigue", msg:"Le voyage en vols réguliers a épuisé l'effectif."},
    {texto:"Chercher un accord avec une compagnie aérienne", sub:"Si ça marche, gros avantage", ok:{msg:"La compagnie a accepté de sponsoriser les voyages : économies et publicité."}, mal:{msg:"La compagnie s'est fait désirer et il n'y a pas eu d'accord."}},
  ] },

'pais_an_navidad': { titulo:"Calendrier chargé pendant les fêtes",
  contexto:"Les matchs s'enchaînent pendant les fêtes de fin d'année et {PROBLEMA}. L'effectif demande un peu d'air.",
  variables:{ PROBLEMA:["les joueurs veulent passer du temps en famille","le physique ne suit pas","l'entraîneur veut mettre l'équipe au vert","les supporters attendent un cadeau"] },
  opciones:[
    {texto:"Donner congé le jour des fêtes", sub:"Effectif content, rythme coupé", msg:"L'effectif a passé la fête à la maison et est revenu reconnaissant."},
    {texto:"Mettre l'effectif au vert", sub:"Concentration, tension", msg:"Tu as mis l'effectif au vert : l'équipe a rendu, mais avec la mine longue."},
    {texto:"Organiser un dîner avec les familles", sub:"Joli geste, dépense", msg:"Tu as organisé un dîner avec les familles : le vestiaire en est sorti renforcé."},
  ] },

'pais_geo_pesca': { titulo:"La coopérative de pêche veut sponsoriser",
  contexto:"La coopérative de pêche {LUGAR} propose {OFERTA}. C'est de l'argent local avec de l'affection régionale.",
  variables:{ LUGAR:["de la côte","du port voisin","du village de pêcheurs"],
              OFERTA:["un contrat annuel pour le maillot","le paiement des déplacements","un don pour les jeunes"] },
  opciones:[
    {texto:"Accepter avec fierté", sub:"Argent local, moins d'éclat", msg:"La coopérative est devenue le visage du club : le village s'est rempli de fierté."},
    {texto:"Demander une meilleure offre à une grande marque", sub:"Si ça marche, plus d'argent", msg:"Tu as attendu une meilleure offre, mais rien n'est arrivé."},
    {texto:"Accepter et demander l'exclusivité", sub:"Image, mais avec un risque", ok:{msg:"La coopérative a accepté l'exclusivité : bonne affaire."}, mal:{msg:"La coopérative s'est vexée et a réduit sa contribution."}},
  ] },

'pais_geo_montana': { titulo:"Routes de montagne et terrains en pente",
  contexto:"Les trajets par {RUTA} compliquent la logistique de l'équipe, et {PROBLEMA}.",
  variables:{ RUTA:["des routes de montagne","des chemins en lacets","des cols enneigés"],
              PROBLEMA:["le terrain adverse est en pente","de la neige est attendue sur la route","le voyage devient très lent"] },
  opciones:[
    {texto:"Voyager un jour avant", sub:"Sécurité, dépense", msg:"Ils ont voyagé un jour avant et l'équipe est arrivée reposée."},
    {texto:"Voyager aux aurores", sub:"Économies, risque", msg:"Ils ont voyagé aux aurores et sont arrivés juste à temps."},
    {texto:"Demander de changer de lieu", sub:"Compliqué, mais si ça passe tout s'arrange", ok:{msg:"La ligue a accepté de changer de lieu et ce fut un soulagement."}, mal:{msg:"La ligue l'a refusé et tu t'es retrouvé en mauvaise posture face au rival."}},
  ] },

'pais_geo_isla': { titulo:"Vols annulés entre les îles",
  contexto:"Le voyage vers l'île voisine se complique parce que {PROBLEMA}.",
  variables:{ PROBLEMA:["les vols ont été annulés à cause du vent","le ferry est en réparation","il y a une grève des transports","la tempête a fermé l'aéroport"] },
  opciones:[
    {texto:"Affréter un bateau privé", sub:"Cher, mais tu arrives", msg:"Ils sont arrivés en bateau privé : cher, mais à l'heure."},
    {texto:"Demander le report du match", sub:"Prudence, calendrier compliqué", msg:"La ligue a approuvé le report."},
    {texto:"Attendre le prochain vol", sub:"S'il part, tu économises", ok:{msg:"Le vol est parti à l'heure et tout s'est arrangé."}, mal:{msg:"Le vol n'est pas parti et ils ont perdu le match sur tapis vert."}},
  ] },

'pais_geo_arena': { titulo:"Tempête de sable sur le stade",
  contexto:"Une tempête de sable {EFECTO}. Il y a match dans quelques heures.",
  variables:{ EFECTO:["recouvre le terrain et les tribunes","met la visibilité en doute","prive le stade d'électricité","perturbe le voyage du rival"] },
  opciones:[
    {texto:"Nettoyer le terrain et jouer", sub:"Dépense, normalité", msg:"Le terrain était prêt et le match s'est joué normalement."},
    {texto:"Demander un report", sub:"Sécurité, calendrier", msg:"Le match a été reporté par sécurité."},
    {texto:"Jouer dans les conditions actuelles", sub:"Épopée ou désastre", ok:{msg:"L'équipe a tiré profit des conditions et gagné avec panache."}, mal:{msg:"La visibilité était catastrophique et le match a viré à la farce."}},
  ] },

'pais_geo_artico': { titulo:"Nuit polaire et terrain couvert",
  contexto:"Avec {SITUACION}, l'équipe doit s'entraîner dans des conditions difficiles.",
  variables:{ SITUACION:["la nuit polaire quasi permanente","des températures très basses","un dôme couvert et un horaire compliqué","un rythme de lumière très différent"] },
  opciones:[
    {texto:"Louer un dôme couvert", sub:"Cher, sans surprise", msg:"Ils se sont entraînés dans le dôme couvert et le rendement s'est amélioré."},
    {texto:"S'entraîner en plein air", sub:"Économies, risque", msg:"L'entraînement en plein air a laissé de la fatigue et une blessure."},
    {texto:"Ajuster les horaires au maximum de lumière", sub:"Solution simple", msg:"Ils ont ajusté les horaires et l'effectif a bien répondu."},
  ] },

'per_pe_entrevista': { titulo:"{PERIODISTA} demande une interview exclusive",
  contexto:"{PERIODISTA} veut une interview {FORMATO}. C'est un journaliste qui connaît bien {CLUB}, mais pas toujours aimable.",
  variables:{ FORMATO:["d'une heure dans son émission","sur le terrain d'entraînement","en tête à tête dans ton bureau","écrite et sans questions convenues"] },
  opciones:[
    {texto:"Accepter l'interview", sub:"Bonne presse, risque de phrases mal comprises", msg:"L'interview avec {PERIODISTA} s'est déroulée tout en fluidité et a amélioré ton image."},
    {texto:"Accepter avec des questions convenues", sub:"{PERIODISTA} ne va pas aimer", ok:{msg:"{PERIODISTA} a accepté les conditions et l'interview s'est bien organisée."}, mal:{msg:"{PERIODISTA} s'est vexé et l'a raconté dans son émission."}},
    {texto:"Décliner poliment", sub:"Tu évites les risques, tu perds en visibilité", msg:"Tu as décliné l'interview : {PERIODISTA} a fait un commentaire ironique."},
  ] },

'per_pe_filtracion': { titulo:"{PERIODISTA} publie une fuite",
  contexto:"{PERIODISTA} a publié que {TEMA} et la nouvelle fait déjà le tour des médias. Au siège, c'est la nervosité.",
  variables:{ TEMA:["le club négocie un renfort","il y a de la tension avec l'entraîneur","un joueur clé serait vendu","la caisse est plus serrée qu'on ne le dit"] },
  opciones:[
    {texto:"Démentir fermement", sub:"Tu contrôles le récit, risque de mentir", msg:"Tu as démenti la nouvelle : {PERIODISTA} a insisté, mais le sujet s'est refroidi."},
    {texto:"Confirmer en partie", sub:"Transparence prudente", msg:"Tu as confirmé une partie et {PERIODISTA} l'a reconnu dans son émission."},
    {texto:"Enquêter sur la taupe", sub:"Main de fer, climat interne", msg:"Ils ont enquêté sur la fuite : personne n'a avoué et le climat interne s'est tendu."},
  ] },

'per_pe_programa': { titulo:"{PERIODISTA} t'invite dans son émission",
  contexto:"{PERIODISTA} t'invite dans son émission {CONDICION}. C'est l'occasion de parler, mais aussi de se tromper.",
  variables:{ CONDICION:["en direct et avec du public","avec d'autres dirigeants de la région","avec des supporters qui appellent par téléphone","avec un invité critique de ta gestion"] },
  opciones:[
    {texto:"Y aller et parler clairement", sub:"Visibilité, risque calculé", msg:"Tu es allé à l'émission et tu as répondu avec clarté : gros impact."},
    {texto:"Y aller et contre-attaquer", sub:"Quitte ou double", ok:{msg:"Ta contre-attaque a pris : on a parlé de toi toute la semaine."}, mal:{msg:"Ta contre-attaque a mal tourné et {PERIODISTA} en a profité."}},
    {texto:"Ne pas y aller et envoyer un porte-parole", sub:"Sans risque, sans éclat", msg:"Tu as envoyé un porte-parole : sans éclat, sans conflit."},
  ] },

'per_pe_critica': { titulo:"{PERIODISTA} critique ta gestion",
  contexto:"{PERIODISTA} a consacré un éditorial à critiquer {OBJETO}. Les supporters en parlent et les adhérents te regardent.",
  variables:{ OBJETO:["tes dernières décisions","la gestion de la caisse","les recrutements","la politique sportive"] },
  opciones:[
    {texto:"Répondre publiquement", sub:"Tu défends ta position, tu ouvres un front", msg:"Tu as répondu à {PERIODISTA} chiffres à l'appui : la discussion s'est envenimée."},
    {texto:"L'inviter au club pour tout voir", sub:"Transparence, un peu de dépense", msg:"{PERIODISTA} a visité le club et nuancé ses critiques."},
    {texto:"L'ignorer", sub:"Tu évites la dispute, tu parais absent", msg:"Tu as ignoré l'éditorial : d'autres médias y ont vu un silence coupable."},
  ] },

'per_hi_reunion': { titulo:"{HINCHA} demande une réunion",
  contexto:"{HINCHA}, figure des supporters, demande à te rencontrer pour parler de {TEMA}. Il a du poids en tribune.",
  variables:{ TEMA:["le prix des billets","les joueurs qui ne rendent pas","le traitement des adhérents","la politique de renforts"] },
  opciones:[
    {texto:"Le recevoir et l'écouter", sub:"Proximité, attentes", msg:"Tu as reçu {HINCHA} et il est sorti satisfait de la réunion."},
    {texto:"Le recevoir avec le comité", sub:"Formel, avec des témoins", msg:"La réunion avec le comité s'est bien tenue, même si elle était froide."},
    {texto:"Ne pas le recevoir", sub:"Distance, tension", msg:"Tu n'as pas reçu {HINCHA} : la tribune y a vu un camouflet."},
  ] },

'per_hi_trapo': { titulo:"{HINCHA} veut une banderole géante",
  contexto:"{HINCHA} et son groupe veulent étrenner une banderole géante avec {MENSAJE}. Ils demandent l'autorisation et de la place dans le stade.",
  variables:{ MENSAJE:["un message d'encouragement à l'effectif","le nom du quartier","un hommage à une idole","un message contre la direction"] },
  opciones:[
    {texto:"Donner l'autorisation de bon cœur", sub:"La tribune remercie, risque de messages", msg:"La banderole s'est déployée et la tribune a vibré."},
    {texto:"Demander à voir le dessin avant", sub:"Contrôle, un peu de colère", msg:"Tu as examiné le dessin : {HINCHA} a accepté avec une mine agacée."},
    {texto:"Refuser l'autorisation", sub:"Contrôle total, inimitié", msg:"Tu as refusé l'autorisation : {HINCHA} est parti furieux."},
  ] },

'per_hi_caravana': { titulo:"{HINCHA} organise un cortège",
  contexto:"{HINCHA} organise un cortège de supporters pour {DESTINO}. Il demande au club {AYUDA}.",
  variables:{ DESTINO:["le match à l'extérieur","l'aéroport, pour saluer le départ de l'effectif","le siège du club","le match de coupe"],
              AYUDA:["des cars","de l'argent pour des drapeaux","l'autorisation de partir avec l'effectif","une escorte"] },
  opciones:[
    {texto:"Collaborer à fond", sub:"Superbe image, grosse dépense", msg:"Le cortège a été une fête et {HINCHA} t'en a remercié publiquement."},
    {texto:"Soutenir sans argent", sub:"Geste moral", msg:"Tu as soutenu le cortège en paroles : les supporters l'ont apprécié à moitié."},
    {texto:"Le déconseiller pour la sécurité", sub:"Prudence, malaise", msg:"Tu as déconseillé le cortège : les supporters se sont agacés."},
  ] },

'per_hi_critica': { titulo:"{HINCHA} mène un chant contre toi",
  contexto:"Pendant le match, {HINCHA} a lancé un chant contre la direction à cause de {MOTIVO}. On l'a entendu dans tout le stade.",
  variables:{ MOTIVO:["les derniers résultats","le prix des abonnements","la vente d'un joueur","le manque de renforts"] },
  opciones:[
    {texto:"Assumer à la prochaine conférence de presse", sub:"Courage, exposition", msg:"Tu as assumé et clarifié ta position : une partie de la tribune l'a apprécié."},
    {texto:"Parler à {HINCHA} en privé", sub:"Dialogue discret", msg:"Tu as parlé en privé avec {HINCHA} : la tension est retombée."},
    {texto:"Ignorer le chant", sub:"Tu évites la confrontation, tu parais absent", msg:"Tu as ignoré le chant : la critique s'est amplifiée."},
  ] },

'per_em_prestamo': { titulo:"{EMPRESARIO} propose un prêt",
  contexto:"{EMPRESARIO} propose de prêter de l'argent au club pour {DESTINO}. Il dit que c'est un geste d'affection, mais mieux vaut lire les petites lignes.",
  variables:{ DESTINO:["payer des salaires en retard","rénover le stade","recruter un renfort pour l'entraîneur","combler un trou de trésorerie"] },
  opciones:[
    {texto:"Accepter le prêt", sub:"De l'argent tout de suite, la dette après", msg:"Tu as accepté le prêt de {EMPRESARIO} : la caisse respire, la dette reste."},
    {texto:"Demander un délai plus long", sub:"Moins d'argent, moins de pression", msg:"{EMPRESARIO} a accepté un délai plus long pour un montant moindre."},
    {texto:"Refuser pour ne pas dépendre", sub:"Indépendance, serrage de ceinture", msg:"Tu as refusé le prêt : les supporters ont salué ton indépendance."},
  ] },

'per_em_representado': { titulo:"{EMPRESARIO} te propose l'un de ses joueurs",
  contexto:"{EMPRESARIO} te propose {JUGADOR}, {JPOS} de {JEDAD} ans et de niveau {JRATING}. Il dit que c'est une opportunité, mais le prix est élevé.",
  opciones:[
    {texto:"Recruter {JUGADOR}", sub:"Un renfort, la caisse encaisse", msg:"Tu as recruté {JUGADOR} : l'entraîneur est ravi, et {EMPRESARIO} encore plus."},
    {texto:"Demander une option d'achat", sub:"Moins de risque, moins d'impact", msg:"Tu as demandé une option d'achat : {EMPRESARIO} a accepté sans enthousiasme."},
    {texto:"Refuser l'offre", sub:"Tu protèges la caisse, tu fâches l'homme d'affaires", msg:"Tu as refusé l'offre : {EMPRESARIO} est parti vexé."},
  ] },

'per_em_terreno': { titulo:"{EMPRESARIO} veut aménager un terrain du club",
  contexto:"{EMPRESARIO} veut acheter ou aménager un terrain du club pour {PROYECTO}. L'assemblée est partagée.",
  variables:{ PROYECTO:["un centre commercial","un lotissement fermé","une salle de sport et un spa","un parking"] },
  opciones:[
    {texto:"Vendre le terrain", sub:"De l'argent rentre, on perd du patrimoine", msg:"Tu as vendu le terrain à {EMPRESARIO} : caisse pleine et adhérents en colère."},
    {texto:"Le louer à long terme", sub:"Revenus fixes, moins d'argent immédiat", msg:"Tu as loué le terrain avec un long contrat : un excellent équilibre."},
    {texto:"Refuser la proposition", sub:"Tu protèges le patrimoine", msg:"Tu as refusé : l'assemblée t'a applaudi, {EMPRESARIO} non."},
  ] },

'per_em_viaje': { titulo:"{EMPRESARIO} t'invite à un voyage d'affaires",
  contexto:"{EMPRESARIO} t'invite à te rendre {DESTINO} pour te présenter à de possibles sponsors. Tout est payé, mais la presse pourrait avoir son mot à dire.",
  variables:{ DESTINO:["à un salon du sport à l'étranger","à un dîner avec des investisseurs","à une tournée de trois jours","à un sommet de dirigeants"] },
  opciones:[
    {texto:"Accepter le voyage", sub:"Des contacts, possible mauvaise presse", msg:"Tu as voyagé avec {EMPRESARIO} : tu es revenu avec des contacts et des critiques."},
    {texto:"Accepter mais le rendre public", sub:"Si ça convainc, tu gagnes la confiance", ok:{msg:"Tu as rendu le voyage public et les adhérents l'ont apprécié."}, mal:{msg:"La presse a critiqué le voyage quand même, et {EMPRESARIO} n'a pas aidé."}},
    {texto:"Décliner l'invitation", sub:"Tu protèges ton image, tu perds des occasions", msg:"Tu as décliné : {EMPRESARIO} est resté sur sa faim."},
  ] },

'cad_naming_oferta': { titulo:"Une entreprise veut le nom du stade",
  contexto:"{EMPRESA} propose {PLATA} pour le naming du stade pendant {PLAZO}. La tradition est en jeu.",
  variables:{ EMPRESA:["Une chaîne de supermarchés","Une compagnie d'assurances","Une marque de boissons"],
              PLATA:["une somme importante","un chiffre alléchant"],
              PLAZO:["cinq ans","dix ans"] },
  opciones:[
    {texto:"Accepter le naming", sub:"Grosse somme, tradition malmenée", msg:"Tu as accepté le naming : le stade a un nouveau nom et la trésorerie sourit."},
    {texto:"Le refuser par tradition", sub:"Supporters contents, caisse inchangée", msg:"Tu as refusé le naming : la tradition est sauve."},
    {texto:"Proposer un naming pour une seule tribune", sub:"Intermédiaire, somme moindre", msg:"Tu as proposé un naming partiel : l'entreprise a accepté à moitié."},
  ] },

'cad_naming_hinchada': { titulo:"Les supporters rejettent le nouveau nom du stade",
  contexto:"Depuis le naming du stade, {PROTESTA}. Les supporters continuent d'utiliser le nom d'origine.",
  variables:{ PROTESTA:["des panneaux sont recouverts de peinture","il y a des chants contre","la tribune refuse de le nommer","une campagne court sur les réseaux"] },
  opciones:[
    {texto:"Dialoguer et chercher un nom mixte", sub:"Ça prend du temps, ça apaise le quartier", msg:"Tu as monté un nom mixte : les supporters l'ont accepté."},
    {texto:"Maintenir l'accord et offrir des concessions", sub:"Tu gardes l'argent, la tension reste", msg:"Tu as maintenu l'accord avec des concessions : le climat reste tendu."},
    {texto:"Présenter des excuses et résilier", sub:"Ça coûte cher, la paix revient", msg:"Tu as résilié l'accord : ça a coûté de l'argent, mais les supporters ont fêté ça."},
  ] },

'cad_naming_reclamo': { titulo:"Le sponsor du naming réclame plus de visibilité",
  contexto:"L'entreprise du naming dit que {RECLAMO} et menace de réduire son paiement si rien ne change.",
  variables:{ RECLAMO:["sa marque n'apparaît pas à la retransmission","les supporters l'insultent pendant les matchs","la clause de visibilité n'a pas été respectée","trop de panneaux sont recouverts"] },
  opciones:[
    {texto:"Respecter les clauses", sub:"Argent assuré, usure avec les supporters", msg:"Tu as respecté les clauses : l'entreprise s'est calmée et les supporters ont grogné."},
    {texto:"Renégocier le contrat", sub:"Ça peut bien ou mal tourner", ok:{msg:"L'entreprise a accepté de renégocier : un accord plus équilibré."}, mal:{msg:"L'entreprise est partie et a demandé le remboursement d'une partie de l'argent."}},
    {texto:"Rompre le contrat", sub:"Coupure nette, perte d'argent", msg:"Tu as rompu le contrat : les supporters ont fêté ça et la caisse a payé."},
  ] },

'cad_academia_propuesta': { titulo:"Une académie propose une convention de formation",
  contexto:"Une académie de {PAIS_ACAD} propose une convention : {TRATO}. Il y a du talent, mais aussi des petites lignes.",
  variables:{ PAIS_ACAD:["une ligue voisine","un grand club","une région connue pour sa formation"],
              TRATO:["recevoir des jeunes à l'essai toute l'année","envoyer tes espoirs se former","partager recruteurs et entraîneurs"] },
  opciones:[
    {texto:"Signer la convention", sub:"Perspectives, un peu de dépendance", msg:"Tu as signé la convention avec l'académie : une porte intéressante s'ouvre."},
    {texto:"Demander des changements dans les conditions", sub:"Plus sûr, plus lent", msg:"Tu as demandé des changements : l'académie étudie ta proposition."},
    {texto:"Refuser par indépendance", sub:"Formation maison, sans aides", msg:"Tu as refusé la convention : la formation maison suit son chemin."},
  ] },

'cad_academia_frutos': { titulo:"Premiers résultats de la convention de formation",
  contexto:"Quelques mois ont passé depuis la convention avec l'académie et {NOVEDAD}. Il est temps de faire le point.",
  variables:{ NOVEDAD:["trois jeunes intéressants sont arrivés","un entraîneur critique la méthode","un joyau a été découvert","les résultats sont inégaux"] },
  opciones:[
    {texto:"Approfondir la convention", sub:"Si ça marche, grosse affaire", ok:{msg:"La convention a porté ses fruits : des jeunes de niveau sont arrivés."}, mal:{msg:"La convention n'a pas donné les fruits attendus et a coûté de l'argent."}},
    {texto:"Tout laisser tel quel", sub:"Sans changement", msg:"Tu as maintenu la convention sans changement : personne ne se plaint."},
    {texto:"Mettre fin à la convention", sub:"Tu coupes avec une perte", msg:"Tu as mis fin à la convention : certains l'ont compris, d'autres non."},
  ] },

'cad_obra_proyecto': { titulo:"Projet de rénovation du stade",
  contexto:"Un architecte propose de rénover {SECTOR} pour gagner en {MEJORA}. Le budget est ambitieux.",
  variables:{ SECTOR:["la tribune populaire","la tribune d'honneur","les vestiaires et le tunnel","l'accès et les sanitaires"],
              MEJORA:["capacité","confort","sécurité"] },
  opciones:[
    {texto:"Approuver les travaux complets", sub:"Gros investissement, gros risque", msg:"Tu as approuvé les travaux : les adhérents sont enthousiastes."},
    {texto:"Approuver de petits travaux", sub:"Moins d'argent, moins d'impact", msg:"Tu as approuvé de petits travaux : ça se remarque un peu."},
    {texto:"Repousser le projet", sub:"Économies, frustration", msg:"Tu as repoussé le projet : les adhérents attendent toujours."},
  ] },

'cad_obra_demora': { titulo:"Les travaux du stade prennent du retard",
  contexto:"Le chantier du stade {PROBLEMA}. Les adhérents surveillent la montre et l'entreprise réclame plus d'argent.",
  variables:{ PROBLEMA:["accuse des mois de retard","a connu un petit accident","est en rupture de matériaux","a des problèmes d'homologation"] },
  opciones:[
    {texto:"Payer un supplément", sub:"Finir à temps, argent en plus", msg:"Tu as payé un supplément : le chantier a repris son rythme."},
    {texto:"Changer d'entreprise", sub:"Risque, temps perdu", msg:"Tu as changé d'entreprise : le projet a pris encore plus de retard."},
    {texto:"Arrêter le chantier et attendre", sub:"Économies, stade à moitié fini", msg:"Tu as arrêté le chantier : le stade est resté à moitié fini."},
  ] },

'cad_obra_inauguracion': { titulo:"Inauguration des travaux",
  contexto:"Les travaux du stade se terminent enfin et {EVENTO}. Il faut décider comment les inaugurer.",
  variables:{ EVENTO:["l'attente est immense","certains détails restent à finir","la presse veut voir le résultat","les adhérents sont impatients"] },
  opciones:[
    {texto:"Inaugurer avec une grande fête", sub:"Image forte, dépense", msg:"L'inauguration a été un succès et tout le monde a parlé des travaux."},
    {texto:"Une inauguration sobre", sub:"Austère et soignée", msg:"Tu as inauguré avec sobriété : tout était en ordre."},
    {texto:"Inaugurer avec un match amical", sub:"S'il gagne, de l'éclat ; s'il perd, de la dépense", ok:{msg:"Le match amical a fait un carton : l'équipe a gagné et les travaux ont brillé."}, mal:{msg:"Le match amical a mal tourné et a terni l'inauguration."}},
  ] },

'cad_ultimatum': { titulo:"L'entraîneur donne un ultimatum au capitaine",
  contexto:"L'entraîneur a donné un ultimatum à {JUGADOR}, capitaine de l'équipe : {MOTIVO}. Le vestiaire attend ta position.",
  variables:{ MOTIVO:["pour des retards aux entraînements","pour des déclarations à la presse","pour une altercation avec un coéquipier","pour ne pas avoir suivi les consignes"] },
  opciones:[
    {texto:"Soutenir l'entraîneur", sub:"Autorité, tension avec le capitaine", msg:"Tu as soutenu l'entraîneur : {JUGADOR} s'est montré contrarié."},
    {texto:"Soutenir le capitaine", sub:"Tu protèges le leader, tu affaiblis l'entraîneur", msg:"Tu as soutenu le capitaine : l'entraîneur l'a mal pris."},
    {texto:"Jouer les médiateurs", sub:"Du temps et du dialogue", msg:"Tu as joué les médiateurs : les deux se sont serré la main, au moins pour l'instant."},
  ] },

'cad_ultimatum_respuesta': { titulo:"Le capitaine répond à l'ultimatum",
  contexto:"{JUGADOR} a répondu à l'ultimatum : {RESPUESTA}. L'effectif est divisé.",
  variables:{ RESPUESTA:["il a demandé à te parler en privé","il a dit ne pas croire en l'entraîneur","il a proposé de se mettre en retrait","il a demandé que la décision revienne au groupe"] },
  opciones:[
    {texto:"Soutenir l'entraîneur", sub:"Autorité, perte d'un leader", msg:"Tu as soutenu l'entraîneur : {JUGADOR} a baissé son niveau."},
    {texto:"Changer d'entraîneur", sub:"Changement d'air, risque", msg:"Tu as changé d'entraîneur : le vestiaire a respiré."},
    {texto:"Retirer le brassard au capitaine", sub:"Décision dure, adieu au leader", msg:"Tu as retiré le brassard à {JUGADOR} : l'effectif l'a pris avec respect."},
  ] },

'cad_exclusiva_oferta': { titulo:"{PERIODISTA} demande l'exclusivité d'une annonce",
  contexto:"{PERIODISTA} demande l'exclusivité de {ANUNCIO}. Si tu la lui donnes, les autres médias restent sur le carreau.",
  variables:{ ANUNCIO:["l'annonce du prochain renfort","l'annonce de ta décision sur l'entraîneur","l'annonce du nouveau sponsor","l'annonce du projet de stade"] },
  opciones:[
    {texto:"Lui donner l'exclusivité", sub:"Un allié fort, d'autres médias fâchés", msg:"{PERIODISTA} a eu l'exclusivité et t'en a remercié devant les caméras."},
    {texto:"Annoncer à tous les médias de la même façon", sub:"Pas de favoris, pas d'avantages", msg:"Tu as annoncé à tous les médias de la même façon : personne ne s'est plaint."},
    {texto:"Refuser la demande", sub:"Tu évites le conflit, tu fâches {PERIODISTA}", msg:"Tu as refusé l'exclusivité : {PERIODISTA} en a pris note."},
  ] },

'cad_exclusiva_celos': { titulo:"Les autres médias se vexent pour l'exclusivité",
  contexto:"Les autres médias se sont vexés de l'exclusivité que tu as donnée à {PERIODISTA} et {REACCION}.",
  variables:{ REACCION:["ont cessé de couvrir le club","publient des articles critiques","exigent l'égalité de traitement","boycottent la conférence de presse"] },
  opciones:[
    {texto:"Présenter des excuses publiques", sub:"Usure, paix", msg:"Tu as présenté tes excuses à tous les médias : la tension est retombée."},
    {texto:"Défendre ta décision", sub:"Fermeté, conflit", msg:"Tu as défendu ta décision : les médias se sont durcis."},
    {texto:"Donner une conférence de presse ouverte", sub:"Transparence, effort", msg:"Tu as donné une conférence ouverte : les médias se sont calmés."},
  ] },

'cad_barra_pacto': { titulo:"Un groupe d'ultras propose un pacte",
  contexto:"{HINCHA} propose un pacte : {TRATO}. Ça paraît raisonnable, mais ça ouvre une porte délicate.",
  variables:{ TRATO:["la paix en tribune en échange de places","un soutien à la direction en échange d'un espace","moins d'incidents en échange d'argent pour les déplacements"] },
  opciones:[
    {texto:"Accepter le pacte", sub:"Paix immédiate, dette morale", msg:"Tu as accepté le pacte avec {HINCHA} : la tribune s'est calmée."},
    {texto:"Le refuser fermement", sub:"Autorité, tension", msg:"Tu as refusé le pacte : {HINCHA} est resté mécontent."},
    {texto:"Parler avec tous les supporters", sub:"Compliqué, plus juste", msg:"Tu as parlé avec tous les supporters : le climat s'est amélioré."},
  ] },

'cad_barra_pide_mas': { titulo:"{HINCHA} en veut plus",
  contexto:"Depuis le pacte, {HINCHA} en demande plus : {PEDIDO}. Il dit que la tribune n'attendra pas.",
  variables:{ PEDIDO:["plus de places","une place fixe en tribune","de participer aux décisions du club","de l'argent en plus pour les déplacements"] },
  opciones:[
    {texto:"Céder à ses demandes", sub:"Paix, plus grande dépendance", msg:"Tu as cédé : {HINCHA} est satisfait, mais le club s'est endetté auprès des ultras."},
    {texto:"Poser des limites claires", sub:"Fermeté, risque", msg:"Tu as posé des limites claires : {HINCHA} a accepté à contrecœur."},
    {texto:"Rompre le pacte", sub:"Tu coupes, tu affrontes le conflit", msg:"Tu as rompu le pacte : la tension est repartie à la hausse."},
  ] },

'cad_barra_incidentes': { titulo:"Incidents en tribune",
  contexto:"Il y a eu des incidents en tribune : {INCIDENTE}. La ligue demande des explications et la presse s'interroge sur le pacte.",
  variables:{ INCIDENTE:["une bagarre entre groupes","des fumigènes et des bousculades","un accrochage avec la police","des dégradations dans les toilettes"] },
  opciones:[
    {texto:"Dénoncer et collaborer avec la justice", sub:"Ordre, rupture définitive", msg:"Tu as dénoncé ce qui s'est passé : la presse t'a salué et les ultras se sont déchaînés."},
    {texto:"Minimiser les faits", sub:"Si ça ne grossit pas, tu as sauvé la situation", ok:{msg:"Le sujet s'est refroidi et est passé au second plan."}, mal:{msg:"La ligue t'a sanctionné et la presse t'a accusé d'avoir étouffé l'affaire."}},
    {texto:"Réunir la commission de sécurité", sub:"Réponse institutionnelle", msg:"La commission de sécurité a agi rapidement."},
  ] },

'cad_hermano_propuesta': { titulo:"Un club étranger propose un jumelage",
  contexto:"Un club {PAIS_HERM} propose un jumelage avec {BENEFICIO}. Ce serait un joli geste.",
  variables:{ PAIS_HERM:["d'un autre continent","d'un pays voisin","d'une région lointaine"],
              BENEFICIO:["un échange de jeunes","un match amical annuel","des visites de supporters","des maillots commémoratifs"] },
  opciones:[
    {texto:"Accepter le jumelage", sub:"Image internationale, légère dépense", msg:"Tu as accepté le jumelage : la presse l'a mis en avant."},
    {texto:"Demander du temps pour réfléchir", sub:"Plus sûr", msg:"Tu as demandé du temps pour réfléchir : la proposition est restée en suspens."},
    {texto:"Le refuser faute de budget", sub:"Économies, geste froid", msg:"Tu as refusé le jumelage : ils l'ont compris, mais avec regret."},
  ] },

'cad_hermano_visita': { titulo:"Visite du club jumelé",
  contexto:"Le club jumelé arrive en visite et {NOVEDAD}. Les supporters attendent un grand match amical.",
  variables:{ NOVEDAD:["amène une énorme délégation","demande un traitement de faveur","veut jouer avec ses titulaires","surprend avec un cadeau"] },
  opciones:[
    {texto:"Les recevoir avec une grande fête", sub:"Image, dépense", msg:"La visite a été une fête inoubliable."},
    {texto:"Jouer un match amical avec les titulaires", sub:"Si ça marche, de l'éclat", ok:{msg:"Ils ont gagné le match amical et les supporters ont vibré."}, mal:{msg:"Ils ont perdu le match amical et les visiteurs ont récolté les applaudissements."}},
    {texto:"Une réception simple", sub:"Austère et sans risque", msg:"La réception était simple, mais chaleureuse."},
  ] },

'cad_socio_donacion': { titulo:"Un adhérent propose un don conditionnel",
  contexto:"{EMPRESARIO} propose un don pour {DESTINO}. Il dit ne rien demander en échange, mais il y a une condition subtile.",
  variables:{ DESTINO:["les jeunes","le stade","les dettes du club","le paiement des salaires"] },
  opciones:[
    {texto:"Accepter le don", sub:"De l'argent, engagement possible", msg:"Tu as accepté le don de {EMPRESARIO} : le club respire."},
    {texto:"Demander qu'il soit sans conditions", sub:"Plus clair, plus lent", msg:"Tu as demandé de la clarté : {EMPRESARIO} a accepté avec un don plus petit."},
    {texto:"Refuser le don", sub:"Indépendance", msg:"Tu as refusé : les adhérents l'ont salué, la caisse non."},
  ] },

'cad_socio_cargo': { titulo:"Le donateur demande un poste",
  contexto:"{EMPRESARIO} demande maintenant {CARGO} au club. Il dit vouloir « protéger son apport ».",
  variables:{ CARGO:["une place au comité directeur","la présidence d'une sous-commission","un siège dans les décisions sportives","la gestion des jeunes"] },
  opciones:[
    {texto:"Lui donner le poste", sub:"Calme, perte de contrôle", msg:"Tu as donné le poste à {EMPRESARIO} : il s'est installé au siège."},
    {texto:"Lui offrir un rôle honorifique", sub:"Geste symbolique", msg:"Tu lui as offert un rôle honorifique : {EMPRESARIO} a accepté avec un demi-sourire."},
    {texto:"Lui rendre le don", sub:"Indépendance, coût élevé", msg:"Tu as rendu le don : le comité t'a applaudi."},
  ] },

'cad_socio_conflicto': { titulo:"Conflit d'intérêts au comité",
  contexto:"{EMPRESARIO} a utilisé son poste pour {ACCION}. Le comité se divise et les adhérents demandent des explications.",
  variables:{ ACCION:["favoriser son entreprise dans un contrat","faire pression sur l'entraîneur","opposer son veto à une vente","changer de fournisseur"] },
  opciones:[
    {texto:"Lui demander de démissionner", sub:"Ordre, conflit ouvert", msg:"{EMPRESARIO} a démissionné en rage et le comité a respiré."},
    {texto:"Créer un comité d'éthique", sub:"Institutionnel et lent", msg:"Le comité d'éthique s'est saisi du dossier."},
    {texto:"Laisser passer", sub:"S'il ne se passe rien, tu as évité un conflit", ok:{msg:"Le conflit n'a pas escaladé et tout a continué comme avant."}, mal:{msg:"Le conflit a éclaté dans la presse et c'est toi qui en as payé le prix."}},
  ] },

'cad_trat_propuesta': { titulo:"{JUGADOR} a une blessure chronique",
  contexto:"{JUGADOR} ({JPOS}, niveau {JRATING}) traîne une blessure chronique et le médecin propose {OPCION}. C'est la star de l'équipe.",
  variables:{ OPCION:["un traitement expérimental","une petite opération","un long repos","une thérapie avec des spécialistes de l'étranger"] },
  opciones:[
    {texto:"Approuver le traitement expérimental", sub:"Solution possible, risque", msg:"Tu as approuvé le traitement : {JUGADOR} a commencé le processus."},
    {texto:"Opter pour le long repos", sub:"Sécurité, absence", msg:"{JUGADOR} se repose pour un bon moment : l'équipe le regrette."},
    {texto:"Jouer avec des infiltrations", sub:"Rendement immédiat, risque futur", msg:"{JUGADOR} a joué infiltré : l'équipe a rendu, mais le risque a augmenté."},
  ] },

'cad_trat_resultado': { titulo:"Résultat du traitement de {JUGADOR}",
  contexto:"Quelques semaines ont passé depuis le traitement de {JUGADOR} et les médecins ont des nouvelles. {NOTA}.",
  variables:{ NOTA:["Tout le monde attend un bulletin positif","L'équipe a besoin de lui","La presse pose la question chaque jour","Le vestiaire est dans l'expectative"] },
  opciones:[
    {texto:"Le remettre tout de suite", sub:"Si ça marche, coup de maître", ok:{msg:"{JUGADOR} est revenu en grande forme et l'équipe a fêté ça."}, mal:{msg:"{JUGADOR} s'est encore blessé et le pari a coûté cher."}},
    {texto:"Attendre une semaine de plus", sub:"Prudence, sans risques", msg:"Ils ont attendu une semaine de plus : {JUGADOR} est revenu en forme et sans précipitation."},
    {texto:"Demander un deuxième avis", sub:"Dépense et temps", msg:"Le deuxième avis a confirmé le plan et calmé les nerfs."},
  ] },

'cad_convocado_aviso': { titulo:"La sélection convoque {JUGADOR}",
  contexto:"La sélection nationale a convoqué {JUGADOR} ({JPOS}, {JEDAD} ans) pour {TORNEO}. Le club a des matchs clés.",
  variables:{ TORNEO:["un tournoi important","des matchs amicaux","une journée de qualification"] },
  opciones:[
    {texto:"Le libérer avec fierté", sub:"Image et prestige, absence", msg:"{JUGADOR} a voyagé avec la sélection et le club a fait la une partout."},
    {texto:"Négocier qu'il ne joue qu'un match", sub:"Équilibre, colère de la fédération", msg:"Tu as négocié un seul match : personne n'est tout à fait content."},
    {texto:"Le retenir à cause des matchs clés", sub:"Tu protèges ton équipe, tu fâches tout le monde", msg:"Tu as retenu {JUGADOR} : la fédération et la presse ont critiqué."},
  ] },

'cad_convocado_regreso': { titulo:"{JUGADOR} revient de la sélection",
  contexto:"{JUGADOR} revient de la sélection {ESTADO}. L'entraîneur ne sait pas où le placer.",
  variables:{ ESTADO:["avec beaucoup de confiance","légèrement blessé","fatigué par les voyages","avec des offres de l'étranger"] },
  opciones:[
    {texto:"Le titulariser immédiatement", sub:"Rendement, risque d'usure", msg:"{JUGADOR} est revenu titulaire et a rendu avec confiance."},
    {texto:"Lui donner quelques jours de repos", sub:"Soin physique, moins de continuité", msg:"{JUGADOR} s'est reposé quelques jours et a repris."},
    {texto:"Parler de son avenir", sub:"Ça peut bien ou mal tourner", ok:{msg:"Ils ont parlé de l'avenir et {JUGADOR} s'est engagé avec le club."}, mal:{msg:"La discussion a fait naître des doutes et {JUGADOR} est resté mal à l'aise."}},
  ] },

});
