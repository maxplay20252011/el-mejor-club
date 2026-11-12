/* English translations of eventos2.js templates (part 1) */
EVENTOS_I18N.en = Object.assign(EVENTOS_I18N.en || {}, {

'est_ini_gira': { titulo:'You’re offered a pre-season tour', contexto:'A promoter proposes a tour to {DESTINO} with {FORMATO}. It pays well, but the squad would arrive at the start of the season tired.',
  variables:{ DESTINO:['a coastal city','the heart of the country','a neighbouring country','a mountain region'],
              FORMATO:['three friendlies','a quick-fire tournament','two matches and a coaching clinic with kids'] },
  opciones:[
    {texto:'Accept the tour', sub:'Cash comes in, the squad travels tired', msg:'The tour brought in money and nice photos, but the manager complained about the fatigue.'},
    {texto:'Train at home', sub:'No income, fresh legs', msg:'You trained at home: the team arrives in one piece, the treasury isn’t celebrating.'},
    {texto:'Ask for a shorter tour', sub:'Could work out perfectly or fall apart', ok:{msg:'The promoter agreed to a shorter version: a good deal with little wear and tear.'}, mal:{msg:'The promoter took offence and pulled out: you lost the money and the training time.'}},
  ] },

'est_ini_cuota': { titulo:'The yearly membership fee needs settling', contexto:'With {MOTIVO}, the committee wants your stance on the membership fee. {PRESION}.',
  variables:{ MOTIVO:['inflation breathing down your neck','the stadium needing repairs','competition from other local clubs'],
              PRESION:['Young members demand lower prices','Pensioners are asking for discounts','The ultras say it must not be touched'] },
  opciones:[
    {texto:'Raise it', sub:'More cash, less goodwill', msg:'You raised the fee: the treasury breathes easier and the AGM grumbles.'},
    {texto:'Freeze it', sub:'Goodwill today, trouble tomorrow', msg:'You froze the fee: applause in the stands and tighter accounts.'},
    {texto:'Tiered by category', sub:'Complicated but fair', msg:'You set up a tiered fee: nobody is happy, nobody is furious.'},
  ] },

'est_ini_pruebas': { titulo:'Trials for free agents', contexto:'{CANTIDAD} players turn up asking for a pre-season trial. {NOTA}.',
  variables:{ CANTIDAD:['Around twenty','Almost forty','About ten'],
              NOTA:['The manager doubts there is any talent','A scout swears there is a good one','The fitness coach warns there is no time'] },
  opciones:[
    {texto:'Hold open trials', sub:'Logistics cost, possible find', msg:'The trials turned up a couple of surprises and a bill for refreshments.'},
    {texto:'Only trial recommended players', sub:'Savings, fewer discoveries', msg:'You only tried out a few: nothing new, nothing lost.'},
    {texto:'Keep the doors shut', sub:'Focus on the current squad', msg:'You closed the doors: you saved money, but there were complaints in the neighbourhood.'},
  ] },

'est_ini_amistoso': { titulo:'Blockbuster friendly against {RIVAL}', contexto:'{RIVAL} proposes a friendly {FECHA}, at {SEDE}. It’s a good yardstick, but a bad result gets talked about.',
  variables:{ FECHA:['next week','on the long weekend','right before the opening match'],
              SEDE:['your stadium','the opposition’s ground','a neutral venue'] },
  opciones:[
    {texto:'Play it with the first team', sub:'A real rehearsal, risk of a hammering', ok:{msg:'The team shone in the friendly and the stands went home full of hope.'}, mal:{msg:'The friendly ended in a thrashing and the predictions cooled off.'}},
    {texto:'Try out subs and youngsters', sub:'No pressure, little sparkle', msg:'The reserves made the most of their chance without anyone getting upset.'},
    {texto:'Turn the friendly down', sub:'Peace and quiet, no noise', msg:'You declined: the manager trained behind closed doors and the press asked why.'},
  ] },

'est_ini_presentacion': { titulo:'Official squad presentation', contexto:'It’s time to present this season’s squad at {LUGAR}. There is {EXPECTATIVA}.',
  variables:{ LUGAR:['the stadium','a theatre in the city','the main square'],
              EXPECTATIVA:['a lot of anticipation','a certain apathy','guests and cameras'] },
  opciones:[
    {texto:'Throw a big party', sub:'Strong image, high spend', msg:'The party was spectacular and the members took home the souvenirs.'},
    {texto:'A low-key ceremony', sub:'Austere and trouble-free', msg:'The ceremony was low-key: little applause, zero criticism.'},
    {texto:'Use it to launch season tickets', sub:'Sales, but could look opportunistic', ok:{msg:'Season tickets sold like hot cakes: the treasury is smiling.'}, mal:{msg:'It looked like a commercial operation dressed up as a party and the members noticed.'}},
  ] },

'est_ini_preparador': { titulo:'The fitness coach wants changes', contexto:'The fitness coach is demanding {PEDIDO}. He says that without it the team will fade in the second half of the season.',
  variables:{ PEDIDO:['a refurbished gym','more double-session training days','an in-house nutritionist','fewer friendlies'] },
  opciones:[
    {texto:'Give him everything he asks for', sub:'An investment that shows later', msg:'The squad arrived in peak shape, though the investment was felt in the coffers.'},
    {texto:'Meet half the request', sub:'A reasonable mix', msg:'You met half the request: the coach understood and got to work.'},
    {texto:'Tell him to make do', sub:'Savings, tension in the coaching staff', msg:'You saved money, but the coaching staff are upset and the squad can tell.'},
  ] },

'est_med_pases': { titulo:'Transfer deadline day', contexto:'There are hours left before the window closes and {SITUACION}. The manager looks at you, waiting for a signal.',
  variables:{ SITUACION:['a good free-agent midfielder has turned up','a rival offers you a striker on loan','there’s no money left to close anything','a player is asking to leave'] },
  opciones:[
    {texto:'Rush out and buy', sub:'Builds the squad, empties the coffers', msg:'You closed a signing at the last minute and the dressing room appreciated it.'},
    {texto:'Close with no moves', sub:'Savings and calm', msg:'The window closed without news: you saved money, but nobody got excited.'},
    {texto:'Ask for a loan with an option to buy', sub:'Could be cheap or expensive', ok:{msg:'The loan worked out: the reinforcement arrived on a reasonable fee.'}, mal:{msg:'The deal got complicated and you ended up overpaying with no signing to show for it.'}},
  ] },

'est_med_balance': { titulo:'First-half accounts review', contexto:'The audit committee reviews the half-year accounts and {HALLAZGO}.',
  variables:{ HALLAZGO:['spots poorly justified spending','asks for more detail on salaries','demands the numbers from the stadium kiosk','finds undeclared debts'] },
  opciones:[
    {texto:'Open the books', sub:'Total transparency, political cost', msg:'You opened the books: some were frightened, others valued it enormously.'},
    {texto:'Present a tidy set of accounts', sub:'If it goes well, all quiet', ok:{msg:'The committee accepted the accounts without objections: you breathed again.'}, mal:{msg:'The committee found errors and the AGM went absolutely ballistic.'}},
    {texto:'Postpone the review', sub:'You buy time, lose trust', msg:'You postponed the review: you earned some sideways looks on the committee.'},
  ] },

'est_med_paro': { titulo:'{SECTOR} strike', contexto:'The staff in {SECTOR} announce a strike over {RECLAMO}. There are matches on the calendar and little room to manoeuvre.',
  variables:{ SECTOR:['stadium security','the admin office','pitch maintenance','club transport'],
              RECLAMO:['unpaid wages','better conditions','staff shortages'] },
  opciones:[
    {texto:'Pay what is owed', sub:'You deliver, the coffers take a hit', msg:'You paid up and the strike was called off: you delivered, though the coffers felt it.'},
    {texto:'Negotiate payment terms', sub:'You gain breathing room, tension remains', msg:'You negotiated payment terms: the dispute cooled down but is still simmering.'},
    {texto:'Declare the dispute unjustified', sub:'Hard line, lots of risk', ok:{msg:'The staff accepted the terms and the strike ended quickly.'}, mal:{msg:'The dispute got worse, matches were disrupted and the press singled you out.'}},
  ] },

'est_med_clima': { titulo:'Storm over the stadium', contexto:'A storm has left {DANIO} just before a key match. A quick decision is needed.',
  variables:{ DANIO:['the pitch waterlogged','part of the stand roof damaged','the dressing rooms flooded','the pitch covered in mud'] },
  opciones:[
    {texto:'Repair urgently', sub:'Expensive but safe', msg:'You repaired against the clock: the match went ahead as normal.'},
    {texto:'Postpone and reschedule', sub:'Savings, tight calendar', msg:'You called the match off: the league rescheduled it on an awkward date.'},
    {texto:'Play anyway in those conditions', sub:'Heroics or a fiasco', ok:{msg:'They played in the mud with grit and the supporters lived an epic night.'}, mal:{msg:'The match was a disaster in the mud and someone even got injured.'}},
  ] },

'est_med_receso': { titulo:'Mid-season break', contexto:'During the break, {SITUACION}. You need to decide how to use the time.',
  variables:{ SITUACION:['the squad is asking for a long holiday','the manager wants a training camp','several players are in poor physical shape','the substitutes are demanding minutes'] },
  opciones:[
    {texto:'Give them a holiday', sub:'Rested minds, lost rhythm', msg:'The squad rested, but came back lacking rhythm.'},
    {texto:'Intensive training camp', sub:'High rhythm, low morale', msg:'The camp left the team sharp and in a foul mood.'},
    {texto:'A mix with four days off', sub:'A bit of everything', msg:'The balance was well received: everyone is content and nobody is euphoric.'},
  ] },

'est_med_encuesta': { titulo:'Members’ survey', contexto:'The committee ran a mid-year survey and {RESULTADO_ENC}. They want a response.',
  variables:{ RESULTADO_ENC:['most want more signings','many demand better facilities at the stadium','a good share question the prices','several want the chairman to be closer to them'] },
  opciones:[
    {texto:'Respond with concrete measures', sub:'Costs money, builds trust', msg:'You announced concrete measures: the members felt you listened.'},
    {texto:'Hold an open meeting', sub:'Free but exposing', msg:'The open meeting was tense but left a good atmosphere.'},
    {texto:'Promise more than you can deliver', sub:'If you deliver, a hit; if not, a bomb', ok:{msg:'The promises raised hopes and were delivered on time: popular euphoria.'}, mal:{msg:'The promises weren’t kept and the stands let you know it.'}},
  ] },

'est_cie_definicion': { titulo:'The final matchday decides everything', contexto:'On the final matchday {CONDICION}. The squad is waiting for your message.',
  variables:{ CONDICION:['you depend on another result','you’re playing for qualification','you’re playing for survival','you’re playing for the pride of the year'] },
  opciones:[
    {texto:'Promise big bonuses', sub:'Motivates, costs money', msg:'You promised bonuses and the squad went out to bite into the pitch.'},
    {texto:'Calm the squad down', sub:'Cool heads, no money', msg:'You asked for calm: the team played focused, without grand gestures.'},
    {texto:'Talk publicly about the decider', sub:'Extra pressure, all or nothing', ok:{msg:'Your words fired up the team and the stands: they went out to win.'}, mal:{msg:'Your words added too much pressure and the team froze.'}},
  ] },

'est_cie_fiesta': { titulo:'End-of-season party', contexto:'The supporters propose a party with {FORMATO} to close out the year.',
  variables:{ FORMATO:['a carnival band and food at the stadium','a gig by local bands','a parade through the neighbourhood','a community barbecue at the clubhouse'] },
  opciones:[
    {texto:'Organise it on a grand scale', sub:'Party atmosphere, heavy spend', msg:'The party was a resounding success and everyone went home happy.'},
    {texto:'Back it without spending', sub:'The supporters handle it', msg:'You backed the idea and the supporters organised it themselves.'},
    {texto:'Decline given the situation', sub:'Prudence, coldness', msg:'You declined: you saved money, but the stands were left wanting more.'},
  ] },

'est_cie_premios': { titulo:'Player of the Year award', contexto:'Everything points to {JUGADOR} ({JPOS}, rating {JRATING}) being the best of the year. The ceremony is {FORMATO} and you need to decide how to handle it.',
  variables:{ FORMATO:['live on the radio','a gala dinner','on the club’s social media'] },
  opciones:[
    {texto:'Honour him alone', sub:'Clear recognition, jealousy in the dressing room', msg:'{JUGADOR} received the award proudly; a teammate or two pretended not to notice.'},
    {texto:'Honour the whole squad', sub:'United dressing room, less media shine', msg:'You honoured the whole squad: nobody felt left out, though the press wanted a name.'},
    {texto:'No ceremony', sub:'Zero spend, zero atmosphere', msg:'You got through the year without a ceremony: the subject hung around the corridors.'},
  ] },

'est_cie_contrato': { titulo:'{JUGADOR}’s contract is expiring', contexto:'{JUGADOR}’s contract ({JPOS}, {JEDAD} years old) is expiring and {SITUACION}. The agent expects an answer before the deadline.',
  variables:{ SITUACION:['he’s asking for a big pay rise','he has offers from other clubs','he wants to guarantee his place in the starting eleven','he says he loves the club but needs the money'] },
  opciones:[
    {texto:'Renew with a pay rise', sub:'You tie him down, the coffers pay', msg:'You renewed {JUGADOR}: the dressing room celebrated and the treasury crunched numbers.'},
    {texto:'Renew for one year', sub:'Halfway house', msg:'One more year for {JUGADOR}: nobody got angry, nobody got excited.'},
    {texto:'Let him leave on a free', sub:'Savings, loss of weight', msg:'{JUGADOR} left on a free: you saved money, but the supporters wept.'},
  ] },

'est_cie_auditoria': { titulo:'Year-end audit', contexto:'The league audits all clubs’ accounts at year-end and {ASUNTO}. It’s time to decide how to respond.',
  variables:{ ASUNTO:['requests documents from the last six months','is investigating payments to intermediaries','is reviewing the stadium’s licence','demands that wage arrears be settled'] },
  opciones:[
    {texto:'Cooperate and hand over everything', sub:'Order and money', msg:'You handed everything over on time and in full: the league valued it.'},
    {texto:'Hand over only what’s necessary', sub:'Less work, some risk', ok:{msg:'The league accepted what you handed over and everything passed without a hitch.'}, mal:{msg:'The league asked for more, imposed a fine and the press reported it.'}},
    {texto:'Hire an outside firm', sub:'Expensive, but it sorts things out', msg:'The firm put the accounts in order: expensive, but tidy.'},
  ] },

'est_cie_proyecto': { titulo:'Planning next year', contexto:'As the year closes, the committee wants to know {PREGUNTA}. You need to show a plan.',
  variables:{ PREGUNTA:['what the sporting project is','how the next half-year will be funded','what will be done with the academy','whether you’ll back signings or the academy'] },
  opciones:[
    {texto:'Back signings heavily', sub:'Quick results, financial risk', msg:'You announced a big push: the members got excited.'},
    {texto:'Back the academy', sub:'Long project, less spending', msg:'You backed the academy: the youngsters smile, the impatient don’t.'},
    {texto:'Save and stabilise', sub:'Financial prudence', msg:'You announced a savings plan: calm in the accounts, little enthusiasm.'},
  ] },

'cla_semana': { titulo:'Derby week against {RIVAL}', contexto:'The city is divided and {AMBIENTE}. Everyone expects a gesture from you before the match.',
  variables:{ AMBIENTE:['the banter reaches the workplace','kids wear the shirt to school','the pubs are full of predictions','the press talks about nothing else'] },
  opciones:[
    {texto:'Keep the squad together all weekend', sub:'Total focus, low spirits', msg:'You kept the squad together: the team arrived focused, though itching to get out.'},
    {texto:'Call on the supporters to cheer them on', sub:'Festive mood, some risk of excess', msg:'The supporters responded with a huge show of support.'},
    {texto:'Wind up the rival in the press', sub:'Lights the fuse, all or nothing', ok:{msg:'Your comments lit the fuse and the team came out furious.'}, mal:{msg:'Your comments backfired and the rival used them as motivation.'}},
  ] },

'cla_barras': { titulo:'Threats before the derby', contexto:'Ahead of the derby against {RIVAL}, a section of the supporters threatens {AMENAZA}. Security wants a decision.',
  variables:{ AMENAZA:['not to go in unless they are given banners','staging an unauthorised flag display','taking over the away end','withdrawing their support unless there are signings'] },
  opciones:[
    {texto:'Talk and reach an agreement', sub:'Calm at a cost', msg:'You talked to the group leaders and the situation calmed down.'},
    {texto:'Ask for extra police', sub:'Order with a bad image', msg:'The extra police guaranteed order, although the club’s image suffered.'},
    {texto:'Ignore the threats', sub:'If nothing happens, you win; if it does, trouble', ok:{msg:'The threats came to nothing and the derby passed peacefully.'}, mal:{msg:'There was trouble at the derby and the club was sanctioned.'}},
  ] },

'cla_prensa': { titulo:'The press stokes the derby', contexto:'The press is putting together a special programme about the derby with {TITULAR_PRENSA}. They want your voice.',
  variables:{ TITULAR_PRENSA:['spicy quotes from the rival','a review of the historic rivalry','doubts about your squad','the rival being favourites'] },
  opciones:[
    {texto:'Speak calmly', sub:'Solid image, little show', msg:'You spoke calmly and strengthened your institutional image.'},
    {texto:'Fire back hard', sub:'Marks your territory, could cost you', ok:{msg:'Your answers went viral and the supporters gave you a standing ovation.'}, mal:{msg:'Your answers were misread and the press criticised you.'}},
    {texto:'Give no interviews', sub:'Avoids risk, loses presence', msg:'You gave no interviews: others filled the space and the press held it against you.'},
  ] },

'cla_arbitro': { titulo:'Controversial referee team for the derby', contexto:'A referee team has been appointed for the derby against {RIVAL} and {POLEMICA}. There is pressure to react.',
  variables:{ POLEMICA:['one of the officials had a past incident with your club','the rival supporters are celebrating','the appointment came late','there are doubts about a previous connection'] },
  opciones:[
    {texto:'Formally request a change', sub:'Institutional complaint, political noise', msg:'You lodged the request: the league rejected it, but it’s on record.'},
    {texto:'Accept the appointment', sub:'Prudence and trust', msg:'You accepted and avoided an unnecessary front: the derby was played calmly.'},
    {texto:'Leak the controversy to the press', sub:'Media pressure, risk of sanction', ok:{msg:'The pressure worked: the league took care over the appointment.'}, mal:{msg:'The league took it as a ploy and you received a public warning.'}},
  ] },

'cla_v_revancha': { titulo:'Rematch against {RIVAL}', contexto:'The rematch against {RIVAL} is here, {ANTECEDENTE}. The supporters want to feel it can be done.',
  variables:{ ANTECEDENTE:['with everything still to play for in the table','with the press divided','with a score still to settle','with both teams demanding respect'] },
  opciones:[
    {texto:'Go for the win from the first minute', sub:'Bravery, all or nothing', ok:{msg:'The team came out biting and took home a memorable derby.'}, mal:{msg:'The team lost its shape and the rival punished it clearly.'}},
    {texto:'A tight game on the counter-attack', sub:'Calculation over heroics', msg:'A tight game: neither glory nor drama, but points were picked up.'},
    {texto:'Promise a special bonus', sub:'Motivation at a cost', msg:'You promised a bonus: the team came out with a different face and the coffers noticed.'},
  ] },

'cla_v_entradas': { titulo:'The price of derby tickets', contexto:'For the rematch against {RIVAL} there is {DEMANDA}. You need to set the price and the distribution.',
  variables:{ DEMANDA:['demand triple the capacity','black-market touting at the gates','a waiting list of members','requests for free tickets from everywhere'] },
  opciones:[
    {texto:'Popular price', sub:'People appreciate it, the coffers don’t', msg:'You kept the popular price: the supporters thanked you with applause.'},
    {texto:'Derby price', sub:'More cash, less goodwill', msg:'You charged derby prices: you filled the coffers and got criticised on social media.'},
    {texto:'Draw among members', sub:'Fair, but triggers complaints', ok:{msg:'The draw was transparent and everyone valued it.'}, mal:{msg:'The draw raised doubts and several members complained.'}},
  ] },

'cla_v_homenaje': { titulo:'Tribute to the club’s greats', contexto:'Before the rematch against {RIVAL}, a tribute to {GLORIAS} is proposed. It’s moving, but eats into preparation time.',
  variables:{ GLORIAS:['the champions of a golden decade','a historic idol who has just died','the promotion-winning side','the founders of the institution'] },
  opciones:[
    {texto:'Hold it before the match', sub:'Emotion guaranteed, some distraction', msg:'The tribute moved the whole stadium; the squad went in a little distracted.'},
    {texto:'Hold it afterwards', sub:'No distractions, less atmosphere', msg:'The tribute took place at the end and the team didn’t lose focus.'},
    {texto:'Put it off to another date', sub:'Avoids risks, loses an opportunity', msg:'You postponed the tribute: some understood, others took offence.'},
  ] },

'pais_sa_barrio': { titulo:'The neighbourhood kids’ academies want the pitch', contexto:'The children’s football schools from {ZONA} are asking to use the training pitch {FRECUENCIA}. The parents have already gathered signatures.',
  variables:{ ZONA:['the south side','the neighbouring district','the outskirts','the next village'],
              FRECUENCIA:['every Saturday','twice a week','during the winter holidays'] },
  opciones:[
    {texto:'Open the pitch to them for free', sub:'Grassroots goodwill, wear on the turf', msg:'You opened the pitch: the kids are delighted and the groundsman, less so.'},
    {texto:'Charge a token rent', sub:'Everyone gains a little', msg:'You set a token rent: the families accepted and some cash came in.'},
    {texto:'Say no because of the state of the pitch', sub:'You protect the grass, lose goodwill', msg:'You said no: the grass is intact, but the neighbourhood won’t forgive you.'},
  ] },

'pais_sa_altura': { titulo:'A match at over {METROS} metres above sea level', contexto:'Next week’s fixture is in a high-altitude city. The coaching staff proposes {PLAN}.',
  variables:{ METROS:['2,600','3,000','3,600'],
              PLAN:['arriving a week early','arriving the day before and trusting in fitness','adding acclimatisation work in a hypobaric chamber'] },
  opciones:[
    {texto:'Travel a week early', sub:'Better acclimatisation, more spend', msg:'They arrived early and the team adapted well to the altitude.'},
    {texto:'Travel the day before', sub:'Savings, physical suffering', msg:'They arrived just in time and the team struggled with the pace in the second half.'},
    {texto:'Hire special chamber acclimatisation', sub:'Expensive, the effect isn’t guaranteed', ok:{msg:'The special preparation worked: the team ran as if nothing had happened.'}, mal:{msg:'The investment didn’t bear the expected fruit and the money went up in smoke.'}},
  ] },

'pais_sa_rutas': { titulo:'An epic road trip', contexto:'The next away match involves {VIAJE}. You need to decide how the squad travels.',
  variables:{ VIAJE:['an 18-hour coach journey','a flight with a long layover','a route along roads in bad condition'] },
  opciones:[
    {texto:'Hire a sleeper coach', sub:'Comfort, heavy spend', msg:'The squad travelled in comfort and arrived rested.'},
    {texto:'Travel in the club coach', sub:'Savings, tiredness', msg:'The squad travelled tired and it showed in the first half.'},
    {texto:'Ask the home club to help with transport', sub:'A courtesy in exchange for a favour', ok:{msg:'The home club helped out: you saved money and made a friend.'}, mal:{msg:'The home club dragged its feet and you ended up paying more than planned.'}},
  ] },

'pais_hi_patronal': { titulo:'The patron saint festival falls in match week', contexto:'This year the patron saint festival coincides with {SITUACION}. The town wants the club to take part.',
  variables:{ SITUACION:['the most important match of the round','the unveiling of a new signing','the club’s anniversary','a key training week'] },
  opciones:[
    {texto:'Join the festival', sub:'Approachable image, scattered squad', msg:'You took part in the festival: the neighbourhood is happy and the manager has a long face.'},
    {texto:'Send a delegation', sub:'Presence without distraction', msg:'You sent a delegation: the club was present without neglecting the work.'},
    {texto:'Skip it because of the match', sub:'Focus on the sporting side', msg:'You skipped the festival: the neighbourhood noticed but the team was focused.'},
  ] },

'pais_br_carnaval': { titulo:'Carnival falls in match week', contexto:'Carnival falls right in the week of an important match and {SITUACION}.',
  variables:{ SITUACION:['several players want to take part in the parades','a samba school invites the squad','the whole city is out on the streets','the press asks whether the team will go into a training camp'] },
  opciones:[
    {texto:'Keep the squad together', sub:'Total focus, some anger', msg:'You kept the squad together: the team arrived focused, albeit with long faces.'},
    {texto:'Take part in a parade as a club', sub:'Party and image, physical risk', msg:'The club paraded and received a huge ovation on the avenue.'},
    {texto:'Give the squad freedom', sub:'Trust in their maturity', ok:{msg:'The squad responded professionally and enjoyed carnival without excess.'}, mal:{msg:'There were excesses and the team arrived badly prepared for the match.'}},
  ] },

'pais_ec_invierno': { titulo:'Snow and fog before the match', contexto:'A spell of {CLIMA} is complicating this week’s match. The league says it {POSTURA}.',
  variables:{ CLIMA:['snow','thick fog','polar cold','ice on the streets'],
              POSTURA:['is not calling it off for now','is considering rescheduling','is leaving the decision to the clubs'] },
  opciones:[
    {texto:'Ask for a postponement', sub:'Safety, tight calendar', msg:'The postponement was approved, although the calendar is now awkward.'},
    {texto:'Play with pitch heating and care', sub:'Spend to get the pitch in order', msg:'The match went ahead on a well-prepared pitch: no complaints, no glory.'},
    {texto:'Play anyway and bet on the weather', sub:'Heroics or injuries', ok:{msg:'The team adapted better than the opposition: a victory with a touch of heroics.'}, mal:{msg:'There were slips, injuries and a result you’d rather forget.'}},
  ] },

'pais_ec_ultras': { titulo:'The ultras want a huge tifo', contexto:'The supporter groups are preparing a huge tifo for {OCASION} and are asking for {PEDIDO}.',
  variables:{ OCASION:['the next home match','the local derby','the club’s anniversary'],
              PEDIDO:['permission to bring in materials','a space to put it together','money for fabric and paint'] },
  opciones:[
    {texto:'Back the project', sub:'Spectacular image, some risk', msg:'The tifo was a spectacle and the cameras replayed it all week.'},
    {texto:'Approve it with conditions', sub:'With security checks', msg:'You approved it with conditions: the tifo went well, with no big surprises.'},
    {texto:'Refuse for security reasons', sub:'Prudence, tension with the stands', msg:'You refused the request: the stands got angry and there was whistling.'},
  ] },

'pais_ec_fairplay': { titulo:'The league demands the books be balanced', contexto:'The league warns that the club must {EXIGENCIA} or face {SANCION}.',
  variables:{ EXIGENCIA:['cut its wage bill','balance income and spending','submit a payment plan','strengthen its capital'],
              SANCION:['a sporting sanction','a fine','transfer restrictions'] },
  opciones:[
    {texto:'Cut spending immediately', sub:'You comply, the squad suffers', msg:'You cut spending: the league was satisfied, the dressing room less so.'},
    {texto:'Submit a two-year plan', sub:'You buy time, the league has doubts', msg:'You submitted a two-year plan: the league accepted it with reservations.'},
    {texto:'Ask for an exemption', sub:'Could be a great move', ok:{msg:'The league granted the exemption this once: you breathed a deep sigh of relief.'}, mal:{msg:'The league refused the exemption and applied the sanction.'}},
  ] },

'pais_ec_academia': { titulo:'An elite academy wants {JUGADOR}', contexto:'A big club’s academy proposes a deal for {JUGADOR} ({JPOS}, {JEDAD} years old): {OFERTA}. The youngster dreams of leaving.',
  variables:{ OFERTA:['an immediate payment and a future percentage','only a future percentage','a loan with an option to buy'] },
  opciones:[
    {texto:'Accept the deal', sub:'Money and prospects, goodbye to the youngster', msg:'{JUGADOR} left for the academy: the club got paid and the stands said farewell.'},
    {texto:'Turn it down and keep the youngster', sub:'Academy pride', msg:'You refused and {JUGADOR} stayed: the supporters give him an ovation.'},
    {texto:'Ask for a better offer', sub:'If it works, a perfect result', ok:{msg:'The academy improved the offer: a perfect deal and a prospect with a bright future.'}, mal:{msg:'The academy took offence and withdrew the offer: no youngster and no money.'}},
  ] },

'pais_gb_copa': { titulo:'Cup draw against an amateur club', contexto:'The national cup pairs you with an amateur club from {LUGAR}. {PRESION}.',
  variables:{ LUGAR:['a coastal village','a mining town','a working-class neighbourhood','a village with a church on every corner'],
              PRESION:['The press expects a hammering','The opposition will play as if it were a final','The local supporters have filled the streets'] },
  opciones:[
    {texto:'Play the first team', sub:'Respect, wear and tear', msg:'You went out with everything and won without too much suffering.'},
    {texto:'Rotate and rest players', sub:'Elimination becomes a risk', msg:'You rotated and the match got more complicated than expected.'},
    {texto:'Send out the youngsters', sub:'Academy image, risk of embarrassment', ok:{msg:'The youngsters shone and the press singled them out: a masterstroke.'}, mal:{msg:'The youngsters got scared: embarrassment and fierce criticism.'}},
  ] },

'pais_ee_receso': { titulo:'A very long winter break', contexto:'The league shuts down because of the cold for {DURACION}. The coaching staff proposes {PLAN}.',
  variables:{ DURACION:['three months','almost four months','a whole winter'],
              PLAN:['a tour to a warm country','training in an indoor gym','switching to a local pre-season tournament'] },
  opciones:[
    {texto:'Take the tour to the sun', sub:'High cost, ideal preparation', msg:'The tour to the sun kept the team’s rhythm up.'},
    {texto:'Train in the indoor gym', sub:'Savings, low rhythm', msg:'They trained indoors: the team came back a little rusty.'},
    {texto:'Set up a local tournament between clubs', sub:'Cheap and entertaining, if it works', ok:{msg:'The local tournament was a success and kept the team in rhythm.'}, mal:{msg:'The tournament was badly organised and ended in a logistical disaster.'}},
  ] },

'pais_ee_estadio': { titulo:'The municipal stadium is to be shared', contexto:'The city council wants {OTRO} to share the club’s stadium. It says it is to {RAZON}.',
  variables:{ OTRO:['a rugby team','a second-division club','an athletics federation'],
              RAZON:['make better use of public investment','cut maintenance costs','bring more activity to the neighbourhood'] },
  opciones:[
    {texto:'Accept the shared use', sub:'Income, less exclusivity', msg:'You agreed to share the stadium: money came in, but the pitch is suffering.'},
    {texto:'Negotiate exclusive time slots', sub:'Balance, more bureaucracy', msg:'You negotiated time slots and the council was satisfied.'},
    {texto:'Refuse the request', sub:'Pride, a political fight', msg:'You refused: the club feels master of its own house, but the council is frowning.'},
  ] },

'pais_ee_mecenas': { titulo:'A local patron offers to fund the club', contexto:'A businessperson from the region offers {OFERTA} in exchange for {CONDICION}.',
  variables:{ OFERTA:['to pay six months of wages','to build a new stand','to fund the academy'],
              CONDICION:['a seat on the board','their name on the stadium','a say in signings'] },
  opciones:[
    {texto:'Accept without conditions', sub:'Immediate cash, someone else’s influence', msg:'You accepted the offer: the club breathes, but the patron is already phoning the manager.'},
    {texto:'Accept with limits in writing', sub:'Slower, safer', msg:'You put limits in writing: the patron agreed with a sour face.'},
    {texto:'Refuse to keep your independence', sub:'Pride, empty coffers', msg:'You refused: the supporters celebrated the independence, the treasury didn’t.'},
  ] },

'pais_me_ayuno': { titulo:'The month of fasting changes the schedules', contexto:'During the month of fasting, {SITUACION}. Training and matches need to be reorganised.',
  variables:{ SITUACION:['many players train while fasting','matches are played late at night','the squad asks for loads to be adjusted','the league changes the calendar'] },
  opciones:[
    {texto:'Train at night', sub:'You respect tradition, the routine changes', msg:'You moved training to the evening: the squad valued it greatly.'},
    {texto:'Reduce the physical load', sub:'Looking after the squad, less rhythm', msg:'You reduced the load: the squad arrived in one piece but a little flat.'},
    {texto:'Keep the usual plan', sub:'Efficiency, wear and tear', msg:'You kept the usual plan: there were complaints and the odd dip in performance.'},
  ] },

'pais_me_calor': { titulo:'Extreme heat for the afternoon match', contexto:'The forecast shows {TEMP} for the afternoon match. The referee says {POSTURA}.',
  variables:{ TEMP:['over 42 degrees','an unbearable heat index','a heatwave lasting several days'],
              POSTURA:['there will be hydration breaks','it could be rescheduled','the decision is up to the clubs'] },
  opciones:[
    {texto:'Ask to move the match to the evening', sub:'Safety, complaint from the league', msg:'You got the match moved to the evening: the team performed much better.'},
    {texto:'Play with hydration and rotations', sub:'Spend, moderate risk', msg:'The match went ahead with hydration breaks and passed without problems.'},
    {texto:'Play with no changes', sub:'Heroics or a physical disaster', ok:{msg:'The team coped better with the heat: a heroic victory.'}, mal:{msg:'There were players fainting and a match to forget.'}},
  ] },

'pais_me_familias': { titulo:'More families in the stands', contexto:'Members ask for {ESPACIO} so they can come with {QUIENES}. Security needs adjusting.',
  variables:{ ESPACIO:['a family section','a section with children’s play areas','a stand with shade'],
              QUIENES:['the kids','the whole family','their grandmothers'] },
  opciones:[
    {texto:'Build it now', sub:'More crowds, more spending', msg:'The family section filled up from the first match.'},
    {texto:'Set aside part of an existing stand', sub:'Quick and cheap', msg:'You set aside part of a stand: the families’ response was positive.'},
    {texto:'Put it off', sub:'Savings, frustration', msg:'You put the project off: the families are waiting with limited patience.'},
  ] },

'pais_af_viaje': { titulo:'Long trips between cities', contexto:'The calendar brings a trip of {DISTANCIA} for the next match. {NOTA}.',
  variables:{ DISTANCIA:['1,500 kilometres','more than 20 hours by road','a flight with two stopovers'],
              NOTA:['There isn’t money for everything','The manager is worried about fatigue','The squad wants to fly'] },
  opciones:[
    {texto:'Book a flight', sub:'Quick, high cost', msg:'The squad arrived fresh and the team made the most of it.'},
    {texto:'Travel by road with rest stops', sub:'Savings, tiredness', msg:'They travelled by road: they arrived tired but on time.'},
    {texto:'Look for a sponsor for the trip', sub:'If it works, perfect', ok:{msg:'The sponsor paid for the trip and even got press coverage.'}, mal:{msg:'The sponsor pulled out at the last moment and you had to improvise.'}},
  ] },

'pais_af_cesped': { titulo:'The pitch is in bad shape', contexto:'The stadium turf has {PROBLEMA}. The manager says you can’t play well on it.',
  variables:{ PROBLEMA:['potholes and bare patches','too much mud','serious unevenness','poor irrigation'] },
  opciones:[
    {texto:'Invest in a new pitch', sub:'Expensive but definitive', msg:'You renovated the pitch and the team plays much better.'},
    {texto:'Partial repairs', sub:'Quick and cheap', msg:'The partial repairs helped, but didn’t solve everything.'},
    {texto:'Adapt the style of play to the pitch', sub:'No spending, less football', msg:'They adapted their game to the pitch: not pretty, but no money spent.'},
  ] },

'pais_af_lluvias': { titulo:'The rainy season complicates everything', contexto:'The rains {EFECTO} and the calendar shows no mercy.',
  variables:{ EFECTO:['flood the access roads','leave the pitch unplayable','delay the visiting teams','cut the electricity supply'] },
  opciones:[
    {texto:'Reschedule the match', sub:'Safety, complicated calendar', msg:'You rescheduled the match: nobody got wet, but the calendar got complicated.'},
    {texto:'Set up emergency drainage', sub:'Spend, normal play', msg:'The emergency drainage worked and the match was played without delay.'},
    {texto:'Play anyway in the mud', sub:'Heroics or injuries', ok:{msg:'The match in the mud was a heroic battle that you won.'}, mal:{msg:'The match in the mud was a disaster.'}},
  ] },

'pais_af_ojeadores': { titulo:'Foreign scouts are watching {JUGADOR}', contexto:'Scouts from European leagues are following {JUGADOR} ({JPOS}, {JEDAD} years old). An agent wants {PROPUESTA}.',
  variables:{ PROPUESTA:['an immediate trial abroad','a contract with a release clause','a trip to Europe during the holidays'] },
  opciones:[
    {texto:'Accept the trial', sub:'An opportunity for him, a risk for you', msg:'{JUGADOR} travelled for a trial and the club received compensation.'},
    {texto:'Ask him to wait a season', sub:'Stability, he gets frustrated', msg:'{JUGADOR} stayed one more season and delivered on the pitch.'},
    {texto:'Agree a deal with the interested club', sub:'A perfect deal or a break-up', ok:{msg:'The deal was done and the club received a good sum.'}, mal:{msg:'The deal collapsed and {JUGADOR} is upset.'}},
  ] },

'pais_af_radio': { titulo:'The community radio broadcasts every match', contexto:'A community radio station in {ZONA} broadcasts all of the club’s matches and is asking for {PEDIDO}.',
  variables:{ ZONA:['the region','your neighbourhood','the next village'],
              PEDIDO:['a weekly interview','access to the dressing room','help with the transmitter'] },
  opciones:[
    {texto:'Give them full access', sub:'Committed supporters, less privacy', msg:'The radio became the voice of the club and people were grateful.'},
    {texto:'Give them a weekly interview', sub:'A simple balance', msg:'You set up a weekly interview: everyone is happy.'},
    {texto:'Refuse for lack of time', sub:'Avoids distraction, loses affection', msg:'You refused: the radio kept broadcasting, but without your goodwill.'},
  ] },

'pais_ao_datos': { titulo:'Data analytics and a supporters’ app', contexto:'A tech company offers {SERVICIO}. It wants {CONTRAPARTIDA}.',
  variables:{ SERVICIO:['a squad data-analysis system','an official app for supporters','cameras and advanced statistics'],
              CONTRAPARTIDA:['access to supporters’ data','advertising in the stadium','exclusivity for three years'] },
  opciones:[
    {texto:'Accept the full agreement', sub:'Modernity, dependence', msg:'The agreement modernised the club and improved the coaching staff’s performance.'},
    {texto:'Ask for changes to the terms', sub:'Slower, safer', msg:'You asked for changes: the agreement turned out fairer.'},
    {texto:'Refuse over privacy', sub:'Prudence, fewer resources', msg:'You turned the agreement down to protect the supporters’ data.'},
  ] },

'pais_ao_cantos': { titulo:'The supporters organise choreographies', contexto:'The supporter groups are preparing {COREO} for the next match and are asking for {PEDIDO}.',
  variables:{ COREO:['a mosaic display','synchronised chanting from the whole stadium','a flag display'],
              PEDIDO:['rehearsals at the stadium','a whole stand','permission to film'] },
  opciones:[
    {texto:'Back them all the way', sub:'Great image, spend', msg:'The choreography was a success and went round social media.'},
    {texto:'Allow the rehearsals', sub:'Moderate support', msg:'The rehearsals took place and the result was neat.'},
    {texto:'Ask them to simplify', sub:'Less risk, less magic', msg:'You asked them to simplify: the choreography turned out more modest.'},
  ] },

'pais_as_otro_deporte': { titulo:'Crowds drift to another sport', contexto:'Another hugely popular sport competes for the same time slots and {PROBLEMA}. Members want an answer.',
  variables:{ PROBLEMA:['has taken a good part of the crowd','hogs the press','has more sponsors','has more stars'] },
  opciones:[
    {texto:'Change the kick-off times', sub:'Avoids competing, logistical adjustment', msg:'You moved the kick-off times: the crowd came back to the stands.'},
    {texto:'Launch a membership drive', sub:'Spend, good response', msg:'The membership drive got a good response.'},
    {texto:'Accept that there’s competition', sub:'Calm, resignation', msg:'You accepted there’s competition: nothing changed.'},
  ] },

'pais_as_monzon': { titulo:'The monsoon puts the match in doubt', contexto:'The monsoon rains {EFECTO}. The league says {POSTURA}.',
  variables:{ EFECTO:['flood the area around the stadium','leave the pitch waterlogged','disrupt public transport'],
              POSTURA:['the match goes ahead unless there’s an emergency','it will be decided on matchday','it is being assessed with the clubs'] },
  opciones:[
    {texto:'Ask to reschedule', sub:'Safety, calendar', msg:'You got the match rescheduled: the supporters arrived in comfort.'},
    {texto:'Invest in emergency drainage', sub:'Spend and continuity', msg:'The drainage allowed the match to go ahead as normal.'},
    {texto:'Play anyway', sub:'Heroics or chaos', ok:{msg:'The match in the rain was a celebration.'}, mal:{msg:'The match was chaos, with injuries and complaints.'}},
  ] },

'pais_sea_calor': { titulo:'Heat and humidity at midday', contexto:'The match will be played at midday in {CONDICION}. The coaching staff proposes {PLAN}.',
  variables:{ CONDICION:['extreme heat and humidity','sky-high heat index conditions','90% humidity'],
              PLAN:['changing the system of play','more rotations','hydration and cooling vests'] },
  opciones:[
    {texto:'Ask to move the match to the afternoon', sub:'Better weather, TV complains', msg:'You got the match moved to the afternoon: the team performed much better.'},
    {texto:'Adapt the plan with vests and rotations', sub:'Controlled spend', msg:'The hydration plan worked and prevented burnout.'},
    {texto:'Play with the usual plan', sub:'Savings, exhaustion', msg:'The team ran out of steam in the second half.'},
  ] },

'pais_na_distancias': { titulo:'Calendar flights eat up the budget', contexto:'The calendar brings {VIAJES} and the coffers are already feeling it.',
  variables:{ VIAJES:['three long trips in a month','a flight across the continent','trips involving time-zone changes'] },
  opciones:[
    {texto:'Book direct flights', sub:'Comfort, spend', msg:'They travelled in comfort and the team performed.'},
    {texto:'Fly commercial with connections', sub:'Savings, tiredness', msg:'They travelled with connections: they arrived tired but you saved money.'},
    {texto:'Ask the league to bunch up the trips', sub:'If it works, big savings', ok:{msg:'The league agreed to group the trips: savings and rest.'}, mal:{msg:'The league turned the request down and you were left with the expensive flights.'}},
  ] },

'pais_na_becas': { titulo:'A university wants {JUGADOR}', contexto:'A university offers {JUGADOR} ({JPOS}, {JEDAD} years old) a full scholarship with {CONDICION}. His family is divided.',
  variables:{ CONDICION:['a top-level sports programme','free tuition','a good coaching staff'] },
  opciones:[
    {texto:'Back the scholarship', sub:'Education and studies, goodbye to the prospect', msg:'{JUGADOR} accepted the scholarship: the club received compensation and good press.'},
    {texto:'Ask him to sign with the club', sub:'You keep the youngster, he loses his education', msg:'{JUGADOR} stayed at the club: he performs, though the family isn’t entirely happy.'},
    {texto:'Draw up a loan arrangement', sub:'A balance between both worlds', msg:'The loan arrangement lets {JUGADOR} study and play.'},
  ] },

'pais_ca_huracan': { titulo:'Hurricane season', contexto:'A hurricane {AMENAZA}. The club must decide how to protect the stadium and the squad.',
  variables:{ AMENAZA:['is approaching the island','threatens the coast','has put the region on red alert'] },
  opciones:[
    {texto:'Suspend activities and protect the stadium', sub:'Safety, calendar', msg:'You protected the stadium and the squad: no serious damage.'},
    {texto:'Train indoors and wait', sub:'Careful normality', msg:'They trained indoors while the storm passed.'},
    {texto:'Play the match behind closed doors', sub:'Risk, a chance to carry on', ok:{msg:'They played behind closed doors and the broadcast was a success.'}, mal:{msg:'The match had security problems and damage.'}},
  ] },

'pais_na_inversor': { titulo:'An investor proposes turning the match into a spectacle', contexto:'An investor proposes adding {SHOW} to the home match in exchange for {COMPENSACION}.',
  variables:{ SHOW:['live music and half-time shows','kids’ activities and food','giant screens and competitions'],
              COMPENSACION:['a percentage of the gate','advertising on the pitch','running the kiosk'] },
  opciones:[
    {texto:'Accept the project', sub:'More crowds, less tradition', msg:'Matches became a spectacle: the stadium filled up.'},
    {texto:'Try it at one match', sub:'A risk-free trial', msg:'The trial worked and left a pleasant surprise.'},
    {texto:'Refuse out of tradition', sub:'You respect the old supporters', msg:'You refused the project: the lifelong supporters celebrated.'},
  ] },

'pais_an_pub': { titulo:'The supporters’ pub needs repairs', contexto:'The pub where the lifelong supporters meet {PROBLEMA}. They are asking the club for help.',
  variables:{ PROBLEMA:['is about to close','needs a refurbishment','suffered a fire','lost its licence'] },
  opciones:[
    {texto:'Help them with money', sub:'Strong gesture, spend', msg:'You helped with money and the pub was filled with gratitude.'},
    {texto:'Offer a space in the stadium', sub:'A middle-way idea', msg:'You gave them a space in the stadium: not everyone was happy.'},
    {texto:'Say there’s no budget', sub:'Savings, anger', msg:'You said there’s no budget: the pub regulars felt abandoned.'},
  ] },

'pais_oc_distancias': { titulo:'Endless trips between cities and islands', contexto:'The calendar brings {VIAJE} and costs spiral.',
  variables:{ VIAJE:['a six-hour flight','a trip by ferry and plane','a tour of several cities','a trip across the sea'] },
  opciones:[
    {texto:'Book charter flights', sub:'Comfort, heavy spend', msg:'The charter flight left the squad fresh.'},
    {texto:'Fly scheduled services', sub:'Savings, tiredness', msg:'The trip on scheduled flights wore the squad out.'},
    {texto:'Look for a deal with an airline', sub:'If it works, a big benefit', ok:{msg:'The airline agreed to sponsor the travel: savings and publicity.'}, mal:{msg:'The airline played hard to get and there was no deal.'}},
  ] },

'pais_an_navidad': { titulo:'Packed festive fixture list', contexto:'There are back-to-back matches over the festive period and {PROBLEMA}. The squad is asking for a breather.',
  variables:{ PROBLEMA:['the players want to spend time with their families','their bodies can’t cope','the manager wants a training camp','the supporters expect a present'] },
  opciones:[
    {texto:'Give them the holiday off', sub:'Happy squad, broken rhythm', msg:'The squad spent the holiday at home and came back grateful.'},
    {texto:'Keep the squad together', sub:'Focus, tension', msg:'You kept the squad together: the team performed but with long faces.'},
    {texto:'Organise a dinner with families', sub:'Nice gesture, spend', msg:'You organised a dinner with the families: the dressing room came out stronger.'},
  ] },

'pais_geo_pesca': { titulo:'The fishing co-operative wants to sponsor', contexto:'The fishing co-operative from {LUGAR} proposes {OFERTA}. It’s local money with regional affection.',
  variables:{ LUGAR:['the coast','the neighbouring port','the fishing village'],
              OFERTA:['a one-year shirt deal','to pay for the travel','a donation for the academy'] },
  opciones:[
    {texto:'Accept with pride', sub:'Local money, less glamour', msg:'The co-operative became the face of the club: the village swelled with pride.'},
    {texto:'Ask a big brand for a better offer', sub:'If it works out, more money', msg:'You waited for a better offer, but nothing came.'},
    {texto:'Accept and ask for exclusivity', sub:'Image, but with risk', ok:{msg:'The co-operative agreed to exclusivity: a good deal.'}, mal:{msg:'The co-operative took offence and cut its contribution.'}},
  ] },

'pais_geo_montana': { titulo:'Mountain roads and sloping pitches', contexto:'Trips along {RUTA} and the fact that {PROBLEMA} complicate the team’s logistics.',
  variables:{ RUTA:['mountain roads','winding roads','snowy passes'],
              PROBLEMA:['the opposition pitch is on a slope','snow is forecast on the road','the journey is very slow'] },
  opciones:[
    {texto:'Travel a day early', sub:'Safety, spend', msg:'They travelled a day early and the team arrived rested.'},
    {texto:'Travel first thing', sub:'Savings, risk', msg:'They travelled first thing and arrived with barely enough time.'},
    {texto:'Ask to change the venue', sub:'Tricky, but if it works everything improves', ok:{msg:'The league agreed to change the venue and it was a relief.'}, mal:{msg:'The league refused and you got off on the wrong foot with the opposition.'}},
  ] },

'pais_geo_isla': { titulo:'Inter-island flights cancelled', contexto:'The trip to the neighbouring island is complicated because {PROBLEMA}.',
  variables:{ PROBLEMA:['flights were cancelled due to wind','the ferry is under repair','there’s a transport strike','the storm closed the airport'] },
  opciones:[
    {texto:'Charter a private boat', sub:'Expensive but you get there', msg:'They arrived by private boat: expensive, but on time.'},
    {texto:'Ask for the match to be postponed', sub:'Prudence, complicated calendar', msg:'The league approved the postponement.'},
    {texto:'Wait for the next flight', sub:'If it arrives, you save', ok:{msg:'The flight left on time and everything was sorted.'}, mal:{msg:'The flight didn’t leave and you forfeited the match for non-appearance.'}},
  ] },

'pais_geo_arena': { titulo:'Sandstorm at the stadium', contexto:'A sandstorm {EFECTO}. There’s a match in a few hours.',
  variables:{ EFECTO:['covers the pitch and the stands','puts visibility in doubt','has knocked out the stadium’s power','is affecting the opposition’s journey'] },
  opciones:[
    {texto:'Clear the pitch and play', sub:'Spend, normality', msg:'The pitch was made ready and the match was played as normal.'},
    {texto:'Ask for a postponement', sub:'Safety, calendar', msg:'The match was postponed for safety reasons.'},
    {texto:'Play in the current conditions', sub:'Heroics or disaster', ok:{msg:'The team made the most of the conditions and won in heroic style.'}, mal:{msg:'Visibility was a disaster and the match was an embarrassment.'}},
  ] },

'pais_geo_artico': { titulo:'Polar night and a covered pitch', contexto:'With {SITUACION}, the team has to train in difficult conditions.',
  variables:{ SITUACION:['an almost permanent polar night','very low temperatures','a covered dome and an awkward schedule','a very different light cycle'] },
  opciones:[
    {texto:'Hire a covered dome', sub:'Expensive, no surprises', msg:'They trained in the covered dome and performance improved.'},
    {texto:'Train outdoors', sub:'Savings, risk', msg:'Training outdoors brought tiredness and the odd injury.'},
    {texto:'Adjust schedules to the peak daylight', sub:'A simple solution', msg:'They adjusted the schedules and the squad responded well.'},
  ] },

'per_pe_entrevista': { titulo:'{PERIODISTA} asks for an exclusive interview', contexto:'{PERIODISTA} wants an interview {FORMATO}. The journalist knows {CLUB} well, but isn’t always kind.',
  variables:{ FORMATO:['lasting an hour on their show','at the training ground','one-to-one in your office','in writing with no pre-agreed questions'] },
  opciones:[
    {texto:'Accept the interview', sub:'Good press, risk of misquotes', msg:'The interview with {PERIODISTA} went smoothly and improved your image.'},
    {texto:'Accept with pre-agreed questions', sub:'{PERIODISTA} won’t like it', ok:{msg:'{PERIODISTA} accepted the conditions and the interview went off in an orderly way.'}, mal:{msg:'{PERIODISTA} took offence and talked about it on their show.'}},
    {texto:'Politely decline', sub:'Avoids risk, loses visibility', msg:'You declined the interview: {PERIODISTA} made an ironic remark.'},
  ] },

'per_pe_filtracion': { titulo:'{PERIODISTA} publishes a leak', contexto:'{PERIODISTA} reported that {TEMA} and the story is already doing the rounds. There’s nervousness at the club.',
  variables:{ TEMA:['the club is negotiating a signing','there’s tension with the manager','a key player would be sold','the coffers are tighter than is being said'] },
  opciones:[
    {texto:'Deny it firmly', sub:'Control of the narrative, risk of lying', msg:'You denied the story: {PERIODISTA} insisted, but the subject cooled down.'},
    {texto:'Partially confirm it', sub:'Transparency with care', msg:'You confirmed part of it and {PERIODISTA} acknowledged it on air.'},
    {texto:'Investigate the leaker', sub:'Hard line, internal atmosphere', msg:'They investigated the leak: nobody owned up and the atmosphere inside turned sour.'},
  ] },

'per_pe_programa': { titulo:'{PERIODISTA} invites you onto their show', contexto:'{PERIODISTA} invites you onto their show {CONDICION}. It’s a chance to speak, but also to slip up.',
  variables:{ CONDICION:['live and with an audience','with other local club officials','with supporters phoning in','with a guest who is critical of your management'] },
  opciones:[
    {texto:'Go and speak clearly', sub:'Visibility, calculated risk', msg:'You went on the show and answered clearly: a big impact.'},
    {texto:'Go and hit back', sub:'All or nothing', ok:{msg:'Your counter-attack landed: you were the talk of the week.'}, mal:{msg:'Your counter-attack went wrong and {PERIODISTA} made the most of it.'}},
    {texto:'Don’t go and send a spokesperson', sub:'No risks, no sparkle', msg:'You sent a spokesperson: no sparkle, no conflict.'},
  ] },

'per_pe_critica': { titulo:'{PERIODISTA} criticises your management', contexto:'{PERIODISTA} devoted an editorial to criticising {OBJETO}. The supporters are talking about it and members are looking at you.',
  variables:{ OBJETO:['your latest decisions','the handling of the finances','the signings','the sporting policy'] },
  opciones:[
    {texto:'Respond publicly', sub:'You defend your position, open a front', msg:'You answered {PERIODISTA} with facts: the argument heated up.'},
    {texto:'Invite them to the club to see everything', sub:'Transparency, some spend', msg:'{PERIODISTA} toured the club and softened the criticism.'},
    {texto:'Ignore it', sub:'You avoid the fight, look absent', msg:'You ignored the editorial: other outlets took it as a guilty silence.'},
  ] },

'per_hi_reunion': { titulo:'{HINCHA} asks for a meeting', contexto:'{HINCHA}, a leading figure among the supporters, asks to meet to talk about {TEMA}. They carry weight in the stands.',
  variables:{ TEMA:['ticket prices','the players who aren’t performing','how members are treated','the signing policy'] },
  opciones:[
    {texto:'Receive them and listen', sub:'Closeness, expectations', msg:'You received {HINCHA} and they left the meeting satisfied.'},
    {texto:'Receive them with the committee', sub:'Formal, with witnesses', msg:'The meeting with the committee was tidy, if cold.'},
    {texto:'Don’t receive them', sub:'Distance, tension', msg:'You didn’t receive {HINCHA}: the stands took it as a snub.'},
  ] },

'per_hi_trapo': { titulo:'{HINCHA} wants a giant banner', contexto:'{HINCHA} and their group want to unveil a giant banner with {MENSAJE}. They are asking for permission and space in the stadium.',
  variables:{ MENSAJE:['a message of encouragement for the squad','the name of the neighbourhood','a tribute to an idol','a slogan against the board'] },
  opciones:[
    {texto:'Gladly give permission', sub:'The stands are grateful, risk over the message', msg:'The banner was unfurled and the stands were buzzing.'},
    {texto:'Ask to see the design first', sub:'Control, some anger', msg:'You checked the design: {HINCHA} accepted with an annoyed look.'},
    {texto:'Refuse permission', sub:'Total control, ill will', msg:'You refused permission: {HINCHA} left furious.'},
  ] },

'per_hi_caravana': { titulo:'{HINCHA} organises a convoy', contexto:'{HINCHA} is organising a convoy of supporters to {DESTINO}. They ask the club for {AYUDA}.',
  variables:{ DESTINO:['the away match','the airport to see the squad off','the club’s headquarters','the cup match'],
              AYUDA:['coaches','money for flags','permission to travel with the squad','a police escort'] },
  opciones:[
    {texto:'Help in every way', sub:'Great image, high spend', msg:'The convoy was a party and {HINCHA} thanked you publicly.'},
    {texto:'Support it without money', sub:'A moral gesture', msg:'You backed the convoy with words: the supporters half-appreciated it.'},
    {texto:'Advise against it for safety', sub:'Prudence, discontent', msg:'You advised against the convoy: the supporters were annoyed.'},
  ] },

'per_hi_critica': { titulo:'{HINCHA} leads a chant against you', contexto:'During the match, {HINCHA} led a chant against the board over {MOTIVO}. It was heard all around the ground.',
  variables:{ MOTIVO:['the recent results','the price of season tickets','the sale of a player','the lack of signings'] },
  opciones:[
    {texto:'Face the music at the next press conference', sub:'Courage, exposure', msg:'You faced the music and clarified your position: part of the stands valued it.'},
    {texto:'Talk to {HINCHA} in private', sub:'Discreet dialogue', msg:'You spoke privately with {HINCHA}: the tension eased.'},
    {texto:'Ignore the chant', sub:'You avoid confrontation, look absent', msg:'You ignored the chant: the criticism was amplified.'},
  ] },

'per_em_prestamo': { titulo:'{EMPRESARIO} offers a loan', contexto:'{EMPRESARIO} offers to lend the club money to {DESTINO}. It’s presented as a gesture of affection, but you’d better read the small print.',
  variables:{ DESTINO:['pay overdue wages','refurbish the stadium','sign a player for the manager','cover a hole in the finances'] },
  opciones:[
    {texto:'Accept the loan', sub:'Money now, debt later', msg:'You accepted {EMPRESARIO}’s loan: the coffers breathe, the debt remains.'},
    {texto:'Ask for a longer term', sub:'Less money, less pressure', msg:'{EMPRESARIO} agreed to a longer term with a smaller amount.'},
    {texto:'Refuse so as not to depend on anyone', sub:'Independence, tight spots', msg:'You refused the loan: the supporters celebrated your independence.'},
  ] },

'per_em_representado': { titulo:'{EMPRESARIO} offers you a client', contexto:'{EMPRESARIO} proposes {JUGADOR} to you, a {JEDAD}-year-old {JPOS} rated {JRATING}. It’s pitched as an opportunity, but the price is high.',
  opciones:[
    {texto:'Sign {JUGADOR}', sub:'A reinforcement, the coffers take a hit', msg:'You signed {JUGADOR}: the manager is delighted and {EMPRESARIO} even more so.'},
    {texto:'Ask for an option to buy', sub:'Less risk, less impact', msg:'You asked for an option to buy: {EMPRESARIO} agreed without enthusiasm.'},
    {texto:'Turn the offer down', sub:'You protect the coffers, annoy the agent', msg:'You turned the offer down: {EMPRESARIO} left offended.'},
  ] },

'per_em_terreno': { titulo:'{EMPRESARIO} wants to develop a club site', contexto:'{EMPRESARIO} wants to buy or develop a club-owned site for {PROYECTO}. The AGM is divided.',
  variables:{ PROYECTO:['a shopping centre','a gated community','a gym and spa','a car park'] },
  opciones:[
    {texto:'Sell the site', sub:'Money comes in, heritage is lost', msg:'You sold the site to {EMPRESARIO}: full coffers and angry members.'},
    {texto:'Lease it long-term', sub:'Fixed income, less immediate money', msg:'You leased the site on a long contract: a great balance.'},
    {texto:'Refuse the proposal', sub:'You protect the heritage', msg:'You refused: the AGM applauded you, {EMPRESARIO} didn’t.'},
  ] },

'per_em_viaje': { titulo:'{EMPRESARIO} invites you on a business trip', contexto:'{EMPRESARIO} invites you to travel {DESTINO} to introduce you to potential sponsors. All expenses paid, but the press might have something to say.',
  variables:{ DESTINO:['to a sports trade fair abroad','to a dinner with investors','on a three-day tour','to a summit of club chairmen'] },
  opciones:[
    {texto:'Accept the trip', sub:'Contacts, possible bad press', msg:'You travelled with {EMPRESARIO}: you came back with contacts and criticism.'},
    {texto:'Accept but make it public', sub:'If it convinces people, you gain trust', ok:{msg:'You made the trip public and the members valued it.'}, mal:{msg:'The press criticised the trip anyway, and {EMPRESARIO} didn’t help.'}},
    {texto:'Decline the invitation', sub:'You protect your image, miss opportunities', msg:'You declined: {EMPRESARIO} was left disappointed.'},
  ] },

'cad_naming_oferta': { titulo:'A company wants the stadium’s name', contexto:'{EMPRESA} offers {PLATA} for the stadium naming rights for {PLAZO}. There’s tradition at stake.',
  variables:{ EMPRESA:['A supermarket chain','An insurance company','A drinks brand'],
              PLATA:['a hefty sum','a tempting figure'],
              PLAZO:['five years','ten years'] },
  opciones:[
    {texto:'Accept the naming rights', sub:'Big money, tradition takes a knock', msg:'You accepted the naming rights: the stadium has a new name and the treasury is smiling.'},
    {texto:'Refuse out of tradition', sub:'Happy supporters, coffers unchanged', msg:'You refused the naming rights: tradition is safe.'},
    {texto:'Propose naming only one stand', sub:'In between, less money', msg:'You proposed partial naming: the company half-agreed.'},
  ] },

'cad_naming_hinchada': { titulo:'The supporters reject the stadium’s new name', contexto:'Since the naming deal, {PROTESTA}. The supporters keep using the old name.',
  variables:{ PROTESTA:['signs have been painted over','there are chants against it','the stands refuse to say it','there’s a campaign on social media'] },
  opciones:[
    {texto:'Talk and look for a joint name', sub:'Takes time, calms the neighbourhood', msg:'You came up with a joint name: the supporters accepted it.'},
    {texto:'Stand by the deal and offer concessions', sub:'You keep the money, the tension continues', msg:'You stood by the deal with concessions: the atmosphere remains tense.'},
    {texto:'Apologise and cancel', sub:'Costs a lot, peace returns', msg:'You cancelled the deal: it cost money, but the supporters celebrated.'},
  ] },

'cad_naming_reclamo': { titulo:'The naming sponsor demands more presence', contexto:'The naming company says {RECLAMO} and threatens to cut the payment if nothing changes.',
  variables:{ RECLAMO:['its brand isn’t visible on the broadcast','the supporters insult it at matches','the visibility clause wasn’t honoured','too many signs have been painted over'] },
  opciones:[
    {texto:'Honour the clauses', sub:'Money secured, wear with the supporters', msg:'You honoured the clauses: the company calmed down and the supporters grumbled.'},
    {texto:'Renegotiate the contract', sub:'Could go well or badly', ok:{msg:'The company agreed to renegotiate: a more balanced deal.'}, mal:{msg:'The company walked away and asked for part of the money back.'}},
    {texto:'Break the contract', sub:'A clean break, loss of money', msg:'You broke the contract: the supporters celebrated and the coffers paid.'},
  ] },

'cad_academia_propuesta': { titulo:'An academy proposes a youth-development agreement', contexto:'An academy from {PAIS_ACAD} proposes an agreement: {TRATO}. There’s talent, but also small print.',
  variables:{ PAIS_ACAD:['a neighbouring league','a big club','a region known for its youth development'],
              TRATO:['to receive youngsters on trial all year round','to send your prospects to train there','to share scouts and coaches'] },
  opciones:[
    {texto:'Sign the agreement', sub:'Prospects, some dependence', msg:'You signed the agreement with the academy: an interesting door opens.'},
    {texto:'Ask for changes to the terms', sub:'Safer, slower', msg:'You asked for changes: the academy is studying your proposal.'},
    {texto:'Refuse to stay independent', sub:'Own academy, no help', msg:'You refused the agreement: the academy goes its own way.'},
  ] },

'cad_academia_frutos': { titulo:'First results of the youth agreement', contexto:'A few months have passed since the agreement with the academy and {NOVEDAD}. It’s time to evaluate.',
  variables:{ NOVEDAD:['three interesting youngsters have arrived','a coach is criticising the method','a gem has been discovered','the results are mixed'] },
  opciones:[
    {texto:'Deepen the agreement', sub:'If it goes well, a great deal', ok:{msg:'The agreement bore fruit: youngsters of real quality arrived.'}, mal:{msg:'The agreement didn’t deliver what was expected and it cost money.'}},
    {texto:'Keep everything as it is', sub:'No changes', msg:'You kept the agreement unchanged: nobody is complaining.'},
    {texto:'End the agreement', sub:'You cut your losses', msg:'You ended the agreement: some understood, others didn’t.'},
  ] },

'cad_obra_proyecto': { titulo:'Stadium redevelopment project', contexto:'An architect proposes redeveloping {SECTOR} to gain {MEJORA}. The budget is ambitious.',
  variables:{ SECTOR:['the terraces','the main stand','the dressing rooms and tunnel','the entrances and toilets'],
              MEJORA:['capacity','comfort','safety'] },
  opciones:[
    {texto:'Approve the full works', sub:'Big investment, lots of risk', msg:'You approved the works: the members are excited.'},
    {texto:'Approve a small job', sub:'Less money, less impact', msg:'You approved a small job: something shows.'},
    {texto:'Put the project off', sub:'Savings, frustration', msg:'You put the project off: the members are still waiting.'},
  ] },

'cad_obra_demora': { titulo:'The stadium works are delayed', contexto:'The stadium works {PROBLEMA}. The members are watching the clock and the builders want more money.',
  variables:{ PROBLEMA:['are months behind schedule','had a minor accident','ran out of materials','have problems with the licence'] },
  opciones:[
    {texto:'Pay extra', sub:'Finish on time, extra money', msg:'You paid extra: the works picked up the pace.'},
    {texto:'Change builders', sub:'Risk, lost time', msg:'You changed builders: the project was delayed even more.'},
    {texto:'Stop the works and wait', sub:'Savings, a half-finished stadium', msg:'You stopped the works: the stadium was left half-finished.'},
  ] },

'cad_obra_inauguracion': { titulo:'Opening of the new works', contexto:'The stadium works are finally finished and {EVENTO}. You need to decide how to open them.',
  variables:{ EVENTO:['there’s a lot of anticipation','some details were left unfinished','the press wants to see the result','the members are impatient'] },
  opciones:[
    {texto:'Open with a big party', sub:'Strong image, spend', msg:'The opening was a success and everyone talked about the works.'},
    {texto:'A low-key opening', sub:'Austere and tidy', msg:'You opened it low-key: everything in order.'},
    {texto:'Open with a friendly', sub:'If you win, shine; if you lose, spend', ok:{msg:'The friendly was a belter: the team won and the new works shone.'}, mal:{msg:'The friendly went badly and took the shine off the opening.'}},
  ] },

'cad_ultimatum': { titulo:'The manager gives the captain an ultimatum', contexto:'The manager has given {JUGADOR}, the team captain, an ultimatum: {MOTIVO}. The dressing room awaits your stance.',
  variables:{ MOTIVO:['for turning up late to training','for comments to the press','for a clash with a teammate','for not following instructions'] },
  opciones:[
    {texto:'Back the manager', sub:'Authority, tension with the captain', msg:'You backed the manager: {JUGADOR} looked annoyed.'},
    {texto:'Back the captain', sub:'You look after the leader, weaken the manager', msg:'You backed the captain: the manager took it badly.'},
    {texto:'Mediate between the two', sub:'Time and dialogue', msg:'You mediated: the two shook hands, at least for now.'},
  ] },

'cad_ultimatum_respuesta': { titulo:'The captain responds to the ultimatum', contexto:'{JUGADOR} responded to the ultimatum: {RESPUESTA}. The squad is divided.',
  variables:{ RESPUESTA:['asked to speak with you in private','said he doesn’t believe in the manager','offered to step aside','asked for the decision to be left to the group'] },
  opciones:[
    {texto:'Stand by the manager', sub:'Authority, losing a leader', msg:'You stood by the manager: {JUGADOR} dropped his level.'},
    {texto:'Change the manager', sub:'A change of scene, risk', msg:'You changed the manager: the dressing room breathed again.'},
    {texto:'Strip the captain of the armband', sub:'A tough decision, goodbye to the leader', msg:'You took the armband from {JUGADOR}: the squad took it respectfully.'},
  ] },

'cad_exclusiva_oferta': { titulo:'{PERIODISTA} asks for an exclusive on an announcement', contexto:'{PERIODISTA} asks for the exclusive on {ANUNCIO}. If you give it, other outlets are left out.',
  variables:{ ANUNCIO:['the next signing','your decision on the manager','the new sponsor','the stadium project'] },
  opciones:[
    {texto:'Give them the exclusive', sub:'A strong ally, other outlets annoyed', msg:'{PERIODISTA} got the exclusive and thanked you on camera.'},
    {texto:'Announce to everyone equally', sub:'No favourites, no advantages', msg:'You announced to all outlets equally: nobody complained.'},
    {texto:'Refuse the request', sub:'You avoid conflict, annoy {PERIODISTA}', msg:'You refused the exclusive: {PERIODISTA} made a note of it.'},
  ] },

'cad_exclusiva_celos': { titulo:'The other outlets take offence at the exclusive', contexto:'The other outlets took offence at the exclusive you gave {PERIODISTA} and {REACCION}.',
  variables:{ REACCION:['have stopped covering the club','are publishing critical pieces','are demanding equal treatment','are boycotting the press conference'] },
  opciones:[
    {texto:'Apologise publicly', sub:'Wear and tear, peace', msg:'You apologised to all outlets: the tension eased.'},
    {texto:'Defend your decision', sub:'Firmness, conflict', msg:'You defended your decision: the media got tougher.'},
    {texto:'Hold an open press conference', sub:'Transparency, effort', msg:'You held an open press conference: the media calmed down.'},
  ] },

'cad_barra_pacto': { titulo:'A group of ultras proposes a pact', contexto:'{HINCHA} proposes a pact: {TRATO}. It seems reasonable, but it opens a delicate door.',
  variables:{ TRATO:['peace in the stands in exchange for tickets','support for the board in exchange for a space','fewer incidents in exchange for travel money'] },
  opciones:[
    {texto:'Accept the pact', sub:'Immediate peace, moral debt', msg:'You accepted the pact with {HINCHA}: the stands calmed down.'},
    {texto:'Firmly reject it', sub:'Authority, tension', msg:'You rejected the pact: {HINCHA} was left unhappy.'},
    {texto:'Talk to all the supporters', sub:'Complicated, fairer', msg:'You talked to all the supporters: the atmosphere improved.'},
  ] },

'cad_barra_pide_mas': { titulo:'{HINCHA} wants more', contexto:'Since the pact, {HINCHA} is asking for more: {PEDIDO}. The message is that the stands won’t wait.',
  variables:{ PEDIDO:['more tickets','a permanent spot in the stands','a say in club decisions','extra money for travel'] },
  opciones:[
    {texto:'Give in to what they ask', sub:'Peace, greater dependence', msg:'You gave in: {HINCHA} was satisfied, but the club is now indebted to the ultras.'},
    {texto:'Set clear limits', sub:'Firmness, risk', msg:'You set clear limits: {HINCHA} accepted grudgingly.'},
    {texto:'Break the pact', sub:'You cut ties, face conflict', msg:'You broke the pact: tension rose again.'},
  ] },

'cad_barra_incidentes': { titulo:'Trouble in the stands', contexto:'There was trouble in the stands: {INCIDENTE}. The league wants explanations and the press is asking about the pact.',
  variables:{ INCIDENTE:['a fight between groups','flares and stampedes','a clash with the police','vandalism in the toilets'] },
  opciones:[
    {texto:'Report it and cooperate with the authorities', sub:'Order, a definitive split', msg:'You reported what happened: the press valued it and the ultras were furious.'},
    {texto:'Play it down', sub:'If it doesn’t grow, you saved the moment', ok:{msg:'The matter cooled off and slipped into the background.'}, mal:{msg:'The league sanctioned you and the press accused you of a cover-up.'}},
    {texto:'Convene the security committee', sub:'An institutional response', msg:'The security committee acted quickly.'},
  ] },

'cad_hermano_propuesta': { titulo:'A foreign club proposes a twinning', contexto:'A club from {PAIS_HERM} proposes a twinning with {BENEFICIO}. It would be a lovely gesture.',
  variables:{ PAIS_HERM:['another continent','a neighbouring country','a faraway region'],
              BENEFICIO:['youth player exchanges','an annual friendly','supporter visits','commemorative shirts'] },
  opciones:[
    {texto:'Accept the twinning', sub:'International image, light spend', msg:'You accepted the twinning: the press highlighted it.'},
    {texto:'Ask for time to think about it', sub:'Safer', msg:'You asked for time to think: the proposal was left hanging.'},
    {texto:'Decline for lack of budget', sub:'Savings, a cold gesture', msg:'You declined the twinning: they understood, but with regret.'},
  ] },

'cad_hermano_visita': { titulo:'Visit from the sister club', contexto:'The sister club arrives for a visit and {NOVEDAD}. The supporters expect a great friendly.',
  variables:{ NOVEDAD:['brings an enormous delegation','asks for special treatment','wants to play with its first team','surprises with a gift'] },
  opciones:[
    {texto:'Welcome them with a big party', sub:'Image, spend', msg:'The visit was an unforgettable party.'},
    {texto:'Play a friendly with the first team', sub:'If it goes well, a chance to shine', ok:{msg:'They won the friendly and the supporters were buzzing.'}, mal:{msg:'They lost the friendly and the visitors took the applause.'}},
    {texto:'A simple reception', sub:'Austere and risk-free', msg:'The reception was simple but warm.'},
  ] },

'cad_socio_donacion': { titulo:'A member offers a conditional donation', contexto:'{EMPRESARIO} offers a donation for {DESTINO}. The line is that nothing is asked in return, but there’s a subtle condition.',
  variables:{ DESTINO:['the academy','the stadium','the club’s debts','paying wages'] },
  opciones:[
    {texto:'Accept the donation', sub:'Money, possible obligation', msg:'You accepted {EMPRESARIO}’s donation: the club breathes.'},
    {texto:'Ask for it to be unconditional', sub:'Clearer, slower', msg:'You asked for clarity: {EMPRESARIO} agreed with a smaller donation.'},
    {texto:'Refuse the donation', sub:'Independence', msg:'You refused: the members valued it, the coffers didn’t.'},
  ] },

'cad_socio_cargo': { titulo:'The donor asks for a post', contexto:'{EMPRESARIO} now asks for {CARGO} at the club. The reason given is wanting to "look after the contribution".',
  variables:{ CARGO:['a seat on the board','the chairmanship of a sub-committee','a seat in sporting decisions','the running of the academy'] },
  opciones:[
    {texto:'Give them the post', sub:'Calm, loss of control', msg:'You gave {EMPRESARIO} the post: they settled into the clubhouse.'},
    {texto:'Offer an honorary role', sub:'A symbolic gesture', msg:'You offered an honorary role: {EMPRESARIO} accepted with half a smile.'},
    {texto:'Return the donation', sub:'Independence, high cost', msg:'You returned the donation: the committee applauded you.'},
  ] },

'cad_socio_conflicto': { titulo:'Conflict of interest on the committee', contexto:'{EMPRESARIO} used their post to {ACCION}. The committee is divided and the members want explanations.',
  variables:{ ACCION:['favour their company in a contract','pressure the manager','veto a sale','replace a supplier'] },
  opciones:[
    {texto:'Ask them to resign', sub:'Order, open conflict', msg:'{EMPRESARIO} resigned in anger and the committee breathed again.'},
    {texto:'Set up an ethics committee', sub:'Institutional and slow', msg:'The ethics committee took on the case.'},
    {texto:'Let it slide', sub:'If nothing happens, you saved yourself a conflict', ok:{msg:'The conflict didn’t escalate and everything carried on as before.'}, mal:{msg:'The conflict blew up in the press and you had to pay the price.'}},
  ] },

'cad_trat_propuesta': { titulo:'{JUGADOR} has a chronic injury', contexto:'{JUGADOR} ({JPOS}, rating {JRATING}) is carrying a chronic injury and the doctor proposes {OPCION}. The player is the team’s star.',
  variables:{ OPCION:['an experimental treatment','minor surgery','a long rest','therapy with specialists from abroad'] },
  opciones:[
    {texto:'Approve the experimental treatment', sub:'A possible solution, risk', msg:'You approved the treatment: {JUGADOR} began the process.'},
    {texto:'Opt for a long rest', sub:'Safety, absence', msg:'{JUGADOR} is resting for a good while: the team misses him.'},
    {texto:'Play him with injections', sub:'Immediate performance, future risk', msg:'{JUGADOR} played on injections: the team performed, but the risk grew.'},
  ] },

'cad_trat_resultado': { titulo:'Result of {JUGADOR}’s treatment', contexto:'A few weeks have passed since {JUGADOR}’s treatment and the doctors have news. {NOTA}.',
  variables:{ NOTA:['Everyone is hoping for a positive report','The team needs him','The press asks every day','The dressing room is on edge'] },
  opciones:[
    {texto:'Put him back in now', sub:'If it goes well, a belter', ok:{msg:'{JUGADOR} came back in great form and the team celebrated.'}, mal:{msg:'{JUGADOR} got injured again and the gamble proved costly.'}},
    {texto:'Wait one more week', sub:'Caution, no risks', msg:'They waited one more week: {JUGADOR} came back well and without haste.'},
    {texto:'Ask for a second opinion', sub:'Spend and time', msg:'The second opinion confirmed the plan and settled the nerves.'},
  ] },

'cad_convocado_aviso': { titulo:'The national team calls up {JUGADOR}', contexto:'The national team has called up {JUGADOR} ({JPOS}, {JEDAD} years old) for {TORNEO}. The club has key matches.',
  variables:{ TORNEO:['an important tournament','some friendlies','a qualifying round'] },
  opciones:[
    {texto:'Release him with pride', sub:'Image and prestige, absence', msg:'{JUGADOR} travelled with the national team and the club was in the news everywhere.'},
    {texto:'Negotiate for him to play only one match', sub:'Balance, the federation is irritated', msg:'You negotiated a single match: nobody was entirely happy.'},
    {texto:'Keep him for the key matches', sub:'You look after your team, annoy everyone', msg:'You kept {JUGADOR}: the federation and the press criticised you.'},
  ] },

'cad_convocado_regreso': { titulo:'{JUGADOR} returns from international duty', contexto:'{JUGADOR} returns from the national team {ESTADO}. The manager doesn’t know where to fit him in.',
  variables:{ ESTADO:['full of confidence','with a minor injury','tired from the travelling','with offers from abroad'] },
  opciones:[
    {texto:'Start him straight away', sub:'Performance, risk of burnout', msg:'{JUGADOR} came back as a starter and performed with confidence.'},
    {texto:'Give him a few days’ rest', sub:'Physical care, less continuity', msg:'{JUGADOR} rested a few days and rejoined the squad.'},
    {texto:'Talk about his future', sub:'Could go well or badly', ok:{msg:'They talked about the future and {JUGADOR} committed to the club.'}, mal:{msg:'The talk raised doubts and {JUGADOR} was left uneasy.'}},
  ] },

});
