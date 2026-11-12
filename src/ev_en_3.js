/* Event templates (eventos.js) translated to English (neutral/British). Part 2: media, supporters, consequences. */
EVENTOS_I18N.en = Object.assign(EVENTOS_I18N.en || {}, {

  /* ===================== MEDIA ===================== */
  "med_declaracion": { titulo:"Remarks taken the wrong way",
    contexto:"On {MEDIO}, your words {FRASE} were taken out of context.",
    variables:{ MEDIO:["a radio show","a cable channel","a news website"],
                FRASE:["about the referee","about the manager","about the supporters"] },
    opciones:[
      { texto:"Clarify publicly", sub:"Costly but clear", msg:"You clarified what you said. The matter fizzled out quickly." },
      { texto:"Let it go", sub:"An awkward silence", msg:"You said nothing. The story grew on social media." },
      { texto:"Hit back at the outlet", sub:"High risk", ok:{ msg:"You hit back firmly: the fans applauded you." }, mal:{ msg:"The counterattack backfired: the outlet criticised you for days." } },
    ] },

  "med_esc_publico": { titulo:"Trouble in the stands",
    contexto:"The match was marred by {INCIDENTE} and the scandal reached {ALCANCE}.",
    variables:{ INCIDENTE:["flares","a fight between fans","abuse of a referee"],
                ALCANCE:["the evening news","social media","the league"] },
    opciones:[
      { texto:"Condemn it publicly", sub:"A clean image", msg:"You condemned what happened. Your image came out stronger." },
      { texto:"Defend the supporters", sub:"Aligned with the terraces", msg:"You defended your people. The supporters loved you, the press did not." },
      { texto:"Promise tighter control", sub:"At a cost", msg:"You promised tighter control: money was invested in security." },
    ] },

  "med_presion_prensa": { titulo:"Pressure from the press",
    contexto:"{PERIODISTA} keeps going on about {TEMA} and will not let it drop.",
    variables:{ PERIODISTA:["A veteran journalist","A controversial pundit","A local reporter"],
                TEMA:["the team's form","the budget","the manager"] },
    opciones:[
      { texto:"Give an interview", sub:"Face the music", msg:"You faced the music. The interview was tense, but it brought some clarity." },
      { texto:"Ignore them", sub:"Give them no importance", msg:"You ignored them. The journalist took revenge." },
      { texto:"Invite them to the club", sub:"A risky gesture", ok:{ msg:"The journalist left the club with a different impression and wrote about it." }, mal:{ msg:"The journalist used the visit to film the worst of it." } },
    ] },

  "med_esc_jugador": { titulo:"A player's off-the-pitch scandal",
    contexto:"It has emerged that {JUGADOR} ({JPOS}, aged {JEDAD}) {HECHO} {LUGAR}.",
    variables:{ HECHO:["got into a fight","posted something controversial","threw a party"],
                LUGAR:["at a nightclub","during a live stream","on social media","after a defeat"] },
    opciones:[
      { texto:"Sanction him publicly", sub:"A firm hand", msg:"You sanctioned {JUGADOR}. The press valued it, the squad was left tense." },
      { texto:"Defend him", sub:"Backing the player", msg:"You defended {JUGADOR}. The dressing room appreciated it, the press did not." },
      { texto:"Handle it quietly", sub:"Could go well or badly", ok:{ msg:"The matter cooled down and {JUGADOR} got back to his job." }, mal:{ msg:"The scandal leaked anyway and you were left exposed." } },
    ] },

  "med_sponsor_escandalo": { titulo:"Scandal with the sponsor",
    contexto:"{MEDIO} has reported that {HECHO}. You are linked to the decision to accept that sponsor.",
    variables:{ MEDIO:["A newspaper","A website","A TV show"],
                HECHO:["the company is under investigation","the company has suddenly shut down","there are complaints against its owners"] },
    opciones:[
      { texto:"Break the contract", sub:"A clean cut", msg:"You broke the contract and took the cost. You came across as responsible." },
      { texto:"Wait and see", sub:"Betting it will blow over", msg:"You waited. The scandal grew and fingers were pointed at you." },
      { texto:"Defend the decision", sub:"High risk", ok:{ msg:"You managed to stay clear of the investigation and the sponsor kept paying." }, mal:{ msg:"The investigation moved forward and your defence looked bad." } },
    ] },

  "med_cualidad_nota": { titulo:"A feature highlights your {CUALIDAD}",
    contexto:"{MEDIO} has published a piece on {JUGADOR} {ENFOQUE} and the club is at the centre of the spotlight.",
    variables:{ MEDIO:["A sports newspaper","A TV programme","A podcast"],
                ENFOQUE:["from a human angle","about his form","about his character"] },
    opciones:[
      { texto:"Capitalise on it", sub:"Everything in the shop window", msg:"You used the piece to showcase {CLUB}. {JUGADOR} got a little dazzled." },
      { texto:"Lower his profile", sub:"You protect the player", msg:"You lowered his profile: {JUGADOR} stayed focused." },
      { texto:"Hold a press conference", sub:"Could shine or backfire", ok:{ msg:"The press conference showed off {JUGADOR} and the club." }, mal:{ msg:"At the press conference {JUGADOR} said something that was misunderstood." } },
    ] },

  "med_documental": { titulo:"A documentary about the club",
    contexto:"{PLATAFORMA} wants to film a documentary about {CLUB} focused on {ENFOQUE}.",
    variables:{ PLATAFORMA:["A streaming platform","A public broadcaster","An independent production company"],
                ENFOQUE:["its glorious history","the current crisis","the dressing rooms"] },
    opciones:[
      { texto:"Accept with editorial control", sub:"Control, less money", msg:"You accepted with editorial control. The documentary came out polished." },
      { texto:"Accept without conditions", sub:"Total freedom", msg:"You accepted without conditions. The documentary was honest and stirred emotions." },
      { texto:"Reject", sub:"Privacy", msg:"You rejected the documentary. The club's privacy was preserved." },
    ] },

  "med_rumor": { titulo:"Rumours about the club",
    contexto:"{FUENTE} says that {RUMOR}.",
    variables:{ FUENTE:["A website","A pundit","An anonymous account"],
                RUMOR:["the club will be sold to investors","the stadium is moving","there will be a merger with another club"] },
    opciones:[
      { texto:"Deny it with a statement", sub:"Quick and clear", msg:"You denied the rumour. Things cooled down quickly." },
      { texto:"Give it no attention", sub:"You ignore the noise", msg:"You said nothing. The rumour kept growing." },
      { texto:"Drop hints and build mystery", sub:"A risky game", ok:{ msg:"The mystery drew positive attention and shirt sales." }, mal:{ msg:"The mystery got out of hand and the members got upset." } },
    ] },

  "med_redes": { titulo:"Social media crisis",
    contexto:"The community manager has caused a stir with {ERROR}, and the result is {REACCION}.",
    variables:{ ERROR:["an unfortunate tweet","a tasteless meme","an old video that has resurfaced"],
                REACCION:["outraged fans","worried sponsors","journalists on alert"] },
    opciones:[
      { texto:"Apologise publicly", sub:"Humility", msg:"You apologised and the episode was closed quickly." },
      { texto:"Sack the community manager", sub:"A firm hand", msg:"You sacked the person responsible. Some saw them as a scapegoat." },
      { texto:"Play dumb", sub:"Let it pass", msg:"You said nothing. The crisis dragged on longer than it should have." },
    ] },

  "med_figura_entrevista": { titulo:"A star talks too much",
    contexto:"{JUGADOR}, the squad's star, gave an interview to {CANAL} and spoke about {TEMA}.",
    variables:{ CANAL:["a newspaper","a radio station","a streamer"],
                TEMA:["the manager","the board","his future"] },
    opciones:[
      { texto:"Back {JUGADOR}", sub:"A public defence", msg:"You backed {JUGADOR}. The dressing room appreciated it and the press criticised it." },
      { texto:"Ask him for a statement", sub:"Damage control", msg:"{JUGADOR} clarified his words. The matter cooled down, but some unease remained." },
      { texto:"Fine him", sub:"Authority with a risk", ok:{ msg:"The fine on {JUGADOR} made it clear who is in charge. He accepted it without fuss." }, mal:{ msg:"The fine on {JUGADOR} went down badly and the dressing room split." } },
    ] },

  "med_joven_viral": { titulo:"A youngster's viral video",
    contexto:"A video of {JUGADOR} ({JPOS}, aged {JEDAD}), {VIDEO}, has gone viral and {OFERTA}.",
    variables:{ VIDEO:["celebrating a stunning goal","helping a fan","dancing in the dressing room"],
                OFERTA:["a brand wants to sign him","a TV channel wants to interview him","a big club is following him"] },
    opciones:[
      { texto:"Make the most of the moment", sub:"Visibility for the club", msg:"You made the most of the video. {JUGADOR} became famous and the club gained attention." },
      { texto:"Look after the lad", sub:"You stop it going to his head", msg:"You looked after {JUGADOR}: he kept training without distraction." },
      { texto:"Let him handle his own fame", sub:"Risky independence", ok:{ msg:"{JUGADOR} handled it intelligently and the club benefited." }, mal:{ msg:"{JUGADOR} got distracted and his form dropped." } },
    ] },

  "med_arbitro": { titulo:"Refereeing controversy",
    contexto:"After {JUGADA} in {PARTIDO}, you have to decide what to say.",
    variables:{ JUGADA:["a penalty not given","a disallowed goal","a dubious sending-off"],
                PARTIDO:["the derby","the cup tie","the last match"] },
    opciones:[
      { texto:"Complain publicly", sub:"You defend the team", msg:"You complained loudly. The fans applauded you and the league fined you." },
      { texto:"Stay quiet", sub:"Prudence", msg:"You said nothing. Some saw it as weakness." },
      { texto:"Ask for a meeting with the league", sub:"The institutional route", msg:"You asked for a meeting. They listened, but nothing changed." },
    ] },

  /* ===================== SUPPORTERS ===================== */
  "hin_barra": { titulo:"The ultras ask for “cooperation”",
    contexto:"A leading figure among the ultras {TONO} asks for {PEDIDO}.",
    variables:{ TONO:["in a friendly tone","with veiled threats","through an intermediary"],
                PEDIDO:["free tickets","a coach for the away trip","money for the banners"] },
    opciones:[
      { texto:"Give in", sub:"You calm the terraces", msg:"You gave in to the request. The terraces calmed down and a few alarm bells rang." },
      { texto:"Refuse", sub:"Risk of conflict", msg:"You refused. The press applauded you and the ultras got angry." },
      { texto:"Mediate with the league and the police", sub:"Depends on the area", ok:{ msg:"The mediation worked and an orderly arrangement was agreed." }, mal:{ msg:"The mediation failed and the atmosphere turned tense." } },
    ] },

  "hin_expectativa": { titulo:"Runaway expectations after a good run",
    contexto:"After {RACHA}, the supporters are already dreaming of {EXPECTATIVA} and are pinning everything on {JUGADOR} ({JPOS}, rated {JRATING}).",
    variables:{ RACHA:["five wins in a row","a historic thrashing","an eight-match unbeaten run"],
                EXPECTATIVA:["the league title","a continental cup","direct promotion","a trophy"] },
    opciones:[
      { texto:"Feed the dream", sub:"Everyone is happy, until it fails", msg:"You stoked the excitement. {JUGADOR} became the name on everyone's lips this week." },
      { texto:"Turn the volume down", sub:"Realism", msg:"You asked for calm. The fans did not take it entirely well." },
      { texto:"Promise a signing", sub:"You feed the dream with money", ok:{ msg:"The signing arrived and the excitement held." }, mal:{ msg:"The signing did not live up to expectations and {JUGADOR} carried the pressure." } },
    ] },

  "hin_presion_resultados": { titulo:"Pressure for results",
    contexto:"The supporters {FORMA} so that {EXIGENCIA}.",
    variables:{ FORMA:["fill the stadium with banners","start up chants against the board","send a letter from the supporters' club"],
                EXIGENCIA:["you change the manager","you bring in signings","the board resigns"] },
    opciones:[
      { texto:"Respond with action", sub:"Concrete steps", msg:"You responded with concrete measures. The terraces turned the volume down." },
      { texto:"Ask for patience", sub:"Words, not deeds", msg:"You asked for patience. Some understood, others did not." },
      { texto:"Meet the supporters' clubs", sub:"Listening directly", msg:"You met the supporters' clubs. They felt heard." },
    ] },

  "hin_pide_cualidad": { titulo:"The supporters want another {CUALIDAD}",
    contexto:"The fans have fallen in love with {JUGADOR}, your {CUALIDAD}, and are demanding via {CANAL} that you sign another like him {PLAZO}.",
    variables:{ CANAL:["a flag rally","social media","a letter"],
                PLAZO:["before the window closes","this week","in time for the derby"] },
    opciones:[
      { texto:"Go into the market", sub:"Money for hope", msg:"You went out to find another like {JUGADOR}. The supporters got their hopes up." },
      { texto:"Explain there is no money", sub:"Realism", msg:"You explained the situation. The supporters half understood." },
      { texto:"Promise it for the next window", sub:"Kick the ball down the road", msg:"You promised it for the next window. Patience hangs in the balance." },
    ] },

  "hin_banderazo": { titulo:"Flag rally {OCASION}",
    contexto:"The fans hold a flag rally {OCASION} and ask {PEDIDO}.",
    variables:{ OCASION:["before the derby","before the cup tie","before the last match"],
                PEDIDO:["that you play at the historic ground","that the whole squad comes out to greet them","that there be no more sponsors on the shirt"] },
    opciones:[
      { texto:"Accept the request", sub:"A strong gesture", msg:"You accepted the request. The supporters felt heard." },
      { texto:"Respectfully decline", sub:"Honest", msg:"You declined the request respectfully. Some left annoyed." },
      { texto:"Send the captain to greet them", sub:"A symbolic gesture", ok:{ msg:"The captain's greeting moved the fans." }, mal:{ msg:"The greeting was not enough and felt like an excuse." } },
    ] },

  "hin_pena_viaje": { titulo:"Supporters' clubs want to travel",
    contexto:"The supporters' clubs of {CLUB} ask for help to travel {DESTINO} and demand {PEDIDO}.",
    variables:{ DESTINO:["to a faraway city","to another region","abroad"],
                PEDIDO:["discounted tickets","club coaches","accommodation"] },
    opciones:[
      { texto:"Back it all the way", sub:"Money and a gesture", msg:"You supported the trip. The supporters followed the team in great numbers." },
      { texto:"Partial help", sub:"A bit from each side", msg:"You helped in part. Some stayed at home." },
      { texto:"Be unable to help", sub:"You protect the coffers", msg:"You could not help. The supporters took it as a snub." },
    ] },

  "hin_homenaje_exjugador": { titulo:"Tribute to a retired idol",
    contexto:"The fans ask for a tribute to {JUGADOR}, a retired idol, with {FORMA} {MOMENTO}.",
    variables:{ FORMA:["a statue","a farewell match","a retired shirt","a plaque at the stadium"],
                MOMENTO:["before the derby","on the anniversary","at the end of the season"] },
    opciones:[
      { texto:"Hold a grand tribute", sub:"Emotion and expense", msg:"The tribute to {JUGADOR} was moving and filled the stadium." },
      { texto:"A simple tribute", sub:"Frugal", msg:"You held a simple tribute for {JUGADOR}. Nobody cried, nobody complained." },
      { texto:"Postpone it", sub:"No money right now", msg:"You postponed the tribute to {JUGADOR}. The supporters were resentful." },
    ] },

  "hin_idolo_cantito": { titulo:"The terraces sing for a star",
    contexto:"The supporters dedicate a chant to {JUGADOR} {CANTO} and ask for {PEDIDO}.",
    variables:{ CANTO:["in the stands","on social media","at a flag rally"],
                PEDIDO:["a long renewal","a pay rise","the captain's armband"] },
    opciones:[
      { texto:"Give the supporters what they want", sub:"A strong gesture", msg:"You gave the supporters what they wanted. {JUGADOR} felt loved." },
      { texto:"Explain the timing", sub:"Prudence", msg:"You explained that everything has its time. The supporters tolerated it." },
      { texto:"Let the player decide", sub:"Put the ball in his court", ok:{ msg:"{JUGADOR} took it with humility and made a commitment." }, mal:{ msg:"{JUGADOR} felt pressured and his form dropped." } },
    ] },

  "hin_precios": { titulo:"Ticket prices",
    contexto:"The debate is over {MEDIDA} {MOTIVO}.",
    variables:{ MEDIDA:["raising ticket prices","cutting prices on the terraces","creating a family season ticket"],
                MOTIVO:["because of inflation","because of the derby","because of the debt"] },
    opciones:[
      { texto:"Approve the measure", sub:"You deliver the proposal", msg:"You approved the measure. Gate receipts moved." },
      { texto:"Reject it", sub:"You keep the status quo", msg:"You rejected the measure. The supporters breathed a sigh of relief." },
      { texto:"A pilot scheme", sub:"A trial over three matches", msg:"You ran a trial. We will see the numbers." },
    ] },

  "hin_seguridad": { titulo:"Security for {PARTIDO}",
    contexto:"For {PARTIDO}, the proposal is {MEDIDA}. It will cost money and may annoy people.",
    variables:{ PARTIDO:["the provincial derby","a cup tie","a match against a historic rival"],
                MEDIDA:["ID wristbands","extra barriers","more police"] },
    opciones:[
      { texto:"Approve the measure", sub:"More security, more cost", msg:"You approved the measure. The match passed off peacefully." },
      { texto:"Reject it", sub:"You save money", msg:"You rejected the measure. There were a few incidents." },
      { texto:"Apply it in part", sub:"A compromise", ok:{ msg:"The scaled-down version was enough to avoid problems." }, mal:{ msg:"The scaled-down version was not enough and there was disorder." } },
    ] },

  "hin_socio_historico": { titulo:"A lifelong member asks for a gesture",
    contexto:"{SOCIO} asks for {PEDIDO}.",
    variables:{ SOCIO:["A 90-year-old member","A four-generation family","A pensioners' supporters' club"],
                PEDIDO:["free tickets for life","a visit to the dressing room","the team to greet them"] },
    opciones:[
      { texto:"Grant it", sub:"A warm gesture", msg:"You granted the request. The history of the club felt alive." },
      { texto:"A symbolic visit", sub:"Less cost", msg:"You gave them a symbolic visit. They were satisfied." },
      { texto:"Respectfully decline", sub:"A careful precedent", msg:"You declined respectfully. They looked disappointed." },
    ] },

  "hin_derrota": { titulo:"Reaction after the defeat",
    contexto:"After {RESULTADO}, the stands responded with {REACCION}.",
    variables:{ RESULTADO:["a thrashing at home","a defeat in the derby","a cup exit"],
                REACCION:["jeers","banners demanding resignations","a half-empty stadium"] },
    opciones:[
      { texto:"Face the music", sub:"You talk to the people", msg:"You faced the music and the stands valued it." },
      { texto:"Gather the squad", sub:"Focus on the football", msg:"You gathered the squad to get things back on track." },
      { texto:"Wait for it to pass", sub:"No answers", msg:"You said nothing. The stands felt abandoned." },
    ] },

  /* ===================== CONSEQUENCES (triggered by earlier decisions) ===================== */
  "cons_vendido_brilla": { titulo:"{JUGADOR} shines where you sold him",
    contexto:"{JUGADOR}, whom you let go, {HAZANA}. The supporters remind you of it at every match.",
    variables:{ HAZANA:["scored a stunner on his debut","was the star of the derby for the other side","is already an undisputed starter","featured in every highlights package of the round"] },
    opciones:[
      { texto:"Try to buy him back", sub:"Expensive and with wounded pride", msg:"{JUGADOR} is back: you overpaid, but the stands celebrated it." },
      { texto:"Say it was best for the club", sub:"You defend the decision", msg:"You defended the sale. Few believed you and the dressing room took note." },
      { texto:"Congratulate him publicly", sub:"Class", msg:"You congratulated {JUGADOR} on social media: you came across as a gentleman." },
    ] },

  "cons_vendido_vestuario": { titulo:"The dressing room asks about the sale",
    contexto:"After the departure of one of the stars, {REFERENTE} wants a word with you: they want to know whether the club has a project or is having a clearance sale.",
    variables:{ REFERENTE:["the captain","a delegation of senior players","the squad delegate"] },
    opciones:[
      { texto:"Promise reinforcements", sub:"A commitment you will have to keep", msg:"You promised reinforcements. The squad calmed down, but now you have to deliver." },
      { texto:"Explain the project with numbers", sub:"Frankness", msg:"You showed the accounts: they did not like it, but they understood." },
      { texto:"Cut the conversation short", sub:"Authority, with no explanations", msg:"You cut the conversation short. The dressing room was left resentful." },
    ] },

  "cons_recorte_reclamo": { titulo:"The squad complains about the cuts",
    contexto:"The spending cuts have reached the dressing room: {RECLAMO}. The players want an answer before the next match.",
    variables:{ RECLAMO:["bonuses are late","pre-match hotel stays have been cut","away trips are now by coach"] },
    opciones:[
      { texto:"Pay the bonuses", sub:"The dressing room calms, but it costs money", msg:"You paid what was owed: the squad responded on the pitch." },
      { texto:"Keep the cuts", sub:"Fiscal discipline", msg:"You kept the cuts. The coffers breathe; the dressing room does not." },
      { texto:"Promise bonuses if there are results", sub:"A bet on effort", ok:{ msg:"The squad was motivated and the team won: paying up will be cheap." }, mal:{ msg:"There were no results and the squad felt you had lied to them." } },
    ] },

  "cons_recorte_socios": { titulo:"The members notice the cuts",
    contexto:"{AVISO} and complaints are multiplying on social media: “with this chairman everything shrinks.”",
    variables:{ AVISO:["The snack bar on the terraces has closed","The clubhouse shuts early now","Membership fees were updated without notice"] },
    opciones:[
      { texto:"Explain the savings", sub:"Transparency", msg:"You explained why the cuts were made: most people understood." },
      { texto:"Compensate with a perk", sub:"It costs, but it calms things", msg:"You added a perk for members and the complaints died down." },
      { texto:"Ignore the complaints", sub:"Saving comes first", msg:"You ignored the noise. You saved money, but the stands remembered." },
    ] },

  "cons_prensa_vendetta": { titulo:"The journalist will not forgive you",
    contexto:"{PERIODISTA} will not let it drop: every programme opens by recalling your latest slip.",
    variables:{ PERIODISTA:["The host of the ten o'clock show","A veteran club reporter","A columnist at a sports website"] },
    opciones:[
      { texto:"Invite them for a chat", sub:"Lower the tension", msg:"You sat down for a chat. The next piece was kinder." },
      { texto:"Do not respond", sub:"Let it run out of steam", msg:"You did not respond. The story lasted two more weeks." },
      { texto:"Hit back with a statement", sub:"Could go very well or very badly", ok:{ msg:"The statement landed: public opinion was with you." }, mal:{ msg:"The statement went down terribly and the journalist used it as fuel." } },
    ] },

  "cons_racha_presion": { titulo:"The win raises expectations",
    contexto:"After the good result, {HINCHADA}. Now any slip-up will be read as a crisis.",
    variables:{ HINCHADA:["the terraces have started singing about the title","the press is already talking about contenders","the members are demanding top-quality signings"] },
    opciones:[
      { texto:"Ask for calm", sub:"Take the pressure off", msg:"You asked for calm: the dressing room breathed, the stands held back." },
      { texto:"Promise to fight at the top", sub:"You raise the stakes", msg:"You promised to fight at the top. Now you have to deliver." },
      { texto:"Reward the squad", sub:"Recognition, at a cost", msg:"You rewarded the squad for the run: they would run through walls for you." },
    ] },

  "cons_vestuario_reunion": { titulo:"The dressing room has broken",
    contexto:"{SINTOMA}. The manager warns you that if nobody steps in, the group will split in two.",
    variables:{ SINTOMA:["Two senior players had a shouting match in training","A group of players are no longer speaking to the manager","An audio of the squad criticising the board has leaked"] },
    opciones:[
      { texto:"A private meeting with the senior players", sub:"Direct dialogue", msg:"The meeting put the group in order. It was hard going, but worth it." },
      { texto:"Change the captain", sub:"A strong gesture", msg:"You changed the captain. Some applauded, others kept silent." },
      { texto:"Sanction those involved", sub:"A firm hand", msg:"You sanctioned those involved: the press applauded, the dressing room went cold." },
    ] },

  "cons_capitan_renuncia": { titulo:"The captain wants to leave",
    contexto:"{JUGADOR}, the captain, asks to talk to you: {MOTIVO}. If he goes, the group is left without a leader.",
    variables:{ MOTIVO:["he says he no longer feels backed","he is fed up with the atmosphere in the dressing room","he has received an offer and is tempted"] },
    opciones:[
      { texto:"Persuade him with a better contract", sub:"Costs money, brings order to the group", msg:"{JUGADOR} renewed and brought order back to the group." },
      { texto:"Meet with the whole squad", sub:"Put the cards on the table", msg:"The meeting was rough, but the group came out more united." },
      { texto:"Let him go", sub:"A clean break", msg:"{JUGADOR} left. Money came in, but the dressing room was left orphaned." },
    ] },

  "cons_vestuario_oro": { titulo:"The squad plays for you",
    contexto:"The group is so united that {GESTO}. It is the best moment to ask them for extra effort.",
    variables:{ GESTO:["the senior players offer to renew on lower wages","the youngsters ask to train double sessions","the squad organised a barbecue with the members"] },
    opciones:[
      { texto:"Seize the momentum", sub:"Demand more, at no cost", msg:"You asked for more and they responded on the pitch, although the group felt the strain." },
      { texto:"Reward them with a trip", sub:"Look after the atmosphere", msg:"The trip was a success: the group would run through walls for you." },
      { texto:"Leave everything as it is", sub:"Do not touch what works", msg:"You changed nothing. Sometimes that is the best decision." },
    ] },

  "dep_arquero_apuro": { titulo:"You have run out of goalkeepers",
    contexto:"The squad has only one goalkeeper and the manager does not want to gamble. A candidate turns up: {JUGADOR}, a goalkeeper aged {JEDAD}, rated {JRATING}.",
    variables:{ PLAZO:["this week"] },
    opciones:[
      { texto:"Sign {JUGADOR}", sub:"Security between the posts", msg:"{JUGADOR} has joined {CLUB}: the manager slept soundly for the first time in weeks." },
      { texto:"Promote a youth player", sub:"Trust the academy", msg:"You promoted a youngster as back-up. It is a gamble." },
      { texto:"Make do with what you have", sub:"No spending, no safety net", msg:"You did nothing. The manager made it clear he had warned you." },
    ] },

});
