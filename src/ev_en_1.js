/* Event templates (eventos.js) translated to English (neutral/British). Part 1: sporting, economic, institutional. */
EVENTOS_I18N.en = Object.assign(EVENTOS_I18N.en || {}, {

  /* ===================== SPORTING ===================== */
  "dep_refuerzo": { titulo:"The manager asks for an urgent signing",
    contexto:"With {MOTIVO}, the manager asks you for a new signing {PLAZO}. There is one candidate: {JUGADOR}, {JPOS}, aged {JEDAD}, rated {JRATING}.",
    variables:{ MOTIVO:["two injured midfielders","a starter suspended","a run of conceded goals","a key player sold"],
                PLAZO:["this very week","before the transfer window closes","in time for Sunday's match"] },
    opciones:[
      { texto:"Sign {JUGADOR}", sub:"A reinforcement now, but it costs money", msg:"{JUGADOR} has joined {CLUB}: the manager is smiling and the finance department is doing sums." },
      { texto:"Let the squad cope", sub:"No spending, more risk", msg:"You backed the squad. {JUGADOR} did not arrive and the manager brought it up at the press conference." },
      { texto:"Offer {JUGADOR} a short contract", sub:"Half the price, but it might offend him", ok:{ msg:"{JUGADOR} accepted the short deal and has performed from day one." }, mal:{ msg:"{JUGADOR} took offence and signed elsewhere: you wasted time and goodwill." } },
    ] },

  "dep_fichaje_ambicioso": { titulo:"An ambitious signing",
    contexto:"{REPRE} offers you {JUGADOR} ({JPOS}, aged {JEDAD}, rated {JRATING}) and {COND}. It is a big name, but an expensive one.",
    variables:{ REPRE:["A well-connected agent","A local businessman","A former director turned middleman"],
                COND:["asks for a low release clause","demands a long, well-paid contract","wants the number 10 shirt and a guaranteed starting place"] },
    opciones:[
      { texto:"Make the investment", sub:"A high-impact signing, a battered bank balance", msg:"You unveiled {JUGADOR} with great fanfare. The members are already doing the sums." },
      { texto:"Negotiate downwards", sub:"Less risk, less glamour", msg:"You closed a cheaper deal: {JUGADOR} arrived quietly and with no promises." },
      { texto:"Let it pass", sub:"You protect the budget", msg:"You said no. {JUGADOR} signed elsewhere and the manager was left staring at the ceiling." },
    ] },

  "dep_juvenil_venta": { titulo:"A youngster to be sold abroad",
    contexto:"{DESTINO} wants to take {JUGADOR}, {JPOS}, aged {JEDAD}, {FORMA}. The supporters adore him.",
    variables:{ DESTINO:["A club from Eastern Europe","A Middle Eastern league","A team from Mexico","A second-division European club"],
                FORMA:["paying in instalments","with a percentage of a future sale","paying cash, but at a discount"] },
    opciones:[
      { texto:"Sell", sub:"Money comes in, the prospect goes out", msg:"{JUGADOR} left and {CLUB} got paid. There were tears in the stands." },
      { texto:"Keep him", sub:"You hold on to the prospect", msg:"{JUGADOR} stays. The terraces sing his name all afternoon." },
      { texto:"Ask for more money", sub:"Could be a great deal or fall apart", ok:{ msg:"They accepted the counteroffer: a brilliant deal over {JUGADOR}." }, mal:{ msg:"The buyer took offence and walked away: no money and an unhappy youngster." } },
    ] },

  "dep_lesion_capitan": { titulo:"Serious injury to the captain",
    contexto:"{JUGADOR}, captain and {JPOS} aged {JEDAD}, has suffered {LESION} and will be out {TIEMPO}. The dressing room awaits your response.",
    variables:{ LESION:["torn ligaments","a broken fibula","a serious muscle tear"],
                TIEMPO:["for about three months","for about four months","for the rest of the season","indefinitely"] },
    opciones:[
      { texto:"Sign a replacement", sub:"An expensive patch-up", msg:"You brought in a replacement. {JUGADOR} follows the recovery from the stands." },
      { texto:"Trust the squad", sub:"No spending, but risky", msg:"The team suffers without {JUGADOR}, but the group shows it is united." },
      { texto:"Gamble on a lightning recovery", sub:"Could go very well or very badly", ok:{ msg:"{JUGADOR} came back earlier than expected: the dressing room exploded with joy." }, mal:{ msg:"{JUGADOR} was injured again and the gamble proved very costly." } },
    ] },

  "dep_descenso": { titulo:"Relegation six-pointer",
    contexto:"You play {CONTEXTO} against {RIVAL}: whoever loses is left on the brink.",
    variables:{ RIVAL:["a direct rival","a side on the rise","the bottom club"],
                CONTEXTO:["on neutral ground","at home in front of a full stadium","away, a long way from home"] },
    opciones:[
      { texto:"Go all out for the win", sub:"All or nothing", ok:{ msg:"You won the match of a lifetime: {CLUB} can breathe again." }, mal:{ msg:"You lost and the abyss draws closer. The stands show no mercy." } },
      { texto:"A cautious game plan", sub:"One point and suffer", msg:"A hard-fought draw. The agony drags on, but a point is a point." },
      { texto:"Promise the squad bonuses", sub:"Bonuses for winning", msg:"You promised bonuses and the squad came out looking like a different team. The treasurer, less so." },
    ] },

  "dep_tecnico_garantias": { titulo:"The manager demands guarantees",
    contexto:"The {PERFIL} in charge of {CLUB} warns that without {EXIGE} he is not staying.",
    variables:{ PERFIL:["young manager","veteran manager","former club legend"],
                EXIGE:["more time to deliver","an assistant he trusts","less media pressure"] },
    opciones:[
      { texto:"Give him what he asks", sub:"You tie him to the club", msg:"You gave him what he wanted: the manager felt backed and the team noticed." },
      { texto:"A contract until the end of the season", sub:"No long commitments", msg:"You drew a line. The manager was annoyed and it shows in the dressing room." },
      { texto:"Let him go", sub:"A big gamble", ok:{ msg:"The new manager arrived with fresh ideas and {CLUB} took off." }, mal:{ msg:"You let the manager go and the replacement is not working: the supporters send you the bill." } },
    ] },

  "dep_cambio_dt": { titulo:"Sack the manager?",
    contexto:"After {RACHA}, {PRESION} wants the manager's head.",
    variables:{ RACHA:["four games without a win","three straight defeats","a 0-3 loss at home"],
                PRESION:["the press","the supporters","a section of the board"] },
    opciones:[
      { texto:"Sack him", sub:"A change of air, plus severance pay", msg:"You sacked the manager. The new one brought energy, although the severance pay hurts." },
      { texto:"Stand by him", sub:"You confirm the project", msg:"You backed the manager. His critics will remind you of it." },
      { texto:"Give him two more games", sub:"A last chance", ok:{ msg:"The manager reacted and saved his job: you looked like a visionary." }, mal:{ msg:"He lost again and you ended up looking naive." } },
    ] },

  "dep_figura_banco": { titulo:"The manager wants to bench a star",
    contexto:"For {PARTIDO}, the manager wants to drop {JUGADOR} ({JPOS}, rated {JRATING}) {RAZON}. The supporters do not understand.",
    variables:{ PARTIDO:["the cup semi-final","the derby","the decisive match"],
                RAZON:["for poor form","because of a knock that will not heal","for tactical indiscipline"] },
    opciones:[
      { texto:"Back the manager", sub:"Authority against the supporters", msg:"The manager dropped {JUGADOR} and the team looked more organised. The terraces whistled." },
      { texto:"Ask him to play him", sub:"Star on the pitch, manager annoyed", msg:"{JUGADOR} played and the supporters got their hopes up. The manager did not forgive you." },
      { texto:"Leave it to his judgement", sub:"The pitch will decide", ok:{ msg:"The manager got it right: without {JUGADOR} the team was better balanced." }, mal:{ msg:"Without {JUGADOR} the team faded and the board got the blame." } },
    ] },

  "dep_pretemporada": { titulo:"Pre-season: {PLAN}",
    contexto:"The coaching staff proposes {PLAN} {PRESUPUESTO}. The idea divides opinion.",
    variables:{ PLAN:["a tour of the regions","an international friendly","a summer tournament"],
                PRESUPUESTO:["on a tight budget","with a membership drive","with a local sponsor"] },
    opciones:[
      { texto:"Approve the plan", sub:"Match rhythm and visibility, but it costs money", msg:"The pre-season went to plan in full: the squad came back sharp and the members saw them play." },
      { texto:"A frugal plan at the training ground", sub:"Savings, less match rhythm", msg:"They worked at home. You saved money, but competitive edge was missing." },
      { texto:"Approve it with a paid exhibition match", sub:"Could go well or badly", ok:{ msg:"The exhibition drew a crowd and money: the plan paid for itself." }, mal:{ msg:"The exhibition was a flop and the tour ended up making a loss." } },
    ] },

  "dep_cancha": { titulo:"The pitch is in a bad state",
    contexto:"{PROBLEMA} showed signs of collapse {EPOCA}. The players are complaining.",
    variables:{ PROBLEMA:["The grass","The drainage","The floodlights"],
                EPOCA:["before a key match","in the middle of winter","in the middle of a bad run"] },
    opciones:[
      { texto:"Fix it now", sub:"Full works", msg:"The work was done on time. The players and the members noticed." },
      { texto:"A cheap patch-up", sub:"It will hold for now", msg:"The urgent problems were covered. With luck it will last until the end of the season." },
      { texto:"Play on it and pray", sub:"No spending, plenty of risk", ok:{ msg:"Nothing happened: you saved money and nobody noticed." }, mal:{ msg:"There was an embarrassing scene on the pitch and the press repeated it all week." } },
    ] },

  "dep_inferiores": { titulo:"Reorganising the youth academy",
    contexto:"The youth coordinator proposes {CAMBIO}, funded {FONDOS}.",
    variables:{ CAMBIO:["adding a boarding house for kids from the regions","hiring a scout for each region","setting up the club's own recruitment tournament"],
                FONDOS:["with contributions from members","with money from the first team","through a deal with the city council"] },
    opciones:[
      { texto:"Back it fully", sub:"An investment for the future", msg:"The academy received money and enthusiasm. The fruits will be seen in a few years." },
      { texto:"Do something minimal", sub:"Barely a gesture", msg:"A small adjustment was made: the coordinator took it as a snub." },
      { texto:"Prioritise the first team", sub:"Results now", msg:"You said the money goes to the first team. There were results, and reproaches." },
    ] },

  "dep_capitan_descanso": { titulo:"The captain asks for a rest",
    contexto:"Captain {JUGADOR} ({JPOS}, aged {JEDAD}) asks to sit out because of {MOTIVO} {FECHA}.",
    variables:{ MOTIVO:["accumulated fatigue","a family matter","an old niggle"],
                FECHA:["before the cup tie","in the middle of a good run","before a derby"] },
    opciones:[
      { texto:"Grant it", sub:"The group respects it", msg:"{JUGADOR} rested and the squad valued the gesture, although the team missed him." },
      { texto:"Ask him to play", sub:"The team holds on", msg:"{JUGADOR} played with gritted teeth. The group understood, but with doubts." },
      { texto:"Agree a partial rest", sub:"A risky middle ground", ok:{ msg:"The partial rest worked out: {JUGADOR} came back fresh." }, mal:{ msg:"The compromise satisfied nobody and {JUGADOR} played at half speed." } },
    ] },

  "dep_cualidad_minutos": { titulo:"Your {CUALIDAD} wants more minutes",
    contexto:"{JUGADOR}, your {CUALIDAD}, feels he is playing too little {MOMENTO} and {ACCION}.",
    variables:{ MOMENTO:["in the last round of fixtures","for the past month","since the change of manager"],
                ACCION:["has asked for a meeting","has threatened to leave","has posted a cryptic message"] },
    opciones:[
      { texto:"Give him more minutes", sub:"He is happy, the manager is not", msg:"{JUGADOR} played more and looked motivated. The manager did not hide his irritation." },
      { texto:"Let him accept the bench", sub:"The coaching staff's authority", msg:"{JUGADOR} accepted it grudgingly and the dressing room noticed your firm hand." },
      { texto:"Mediate with a chat", sub:"A diplomatic way out", msg:"You spoke to {JUGADOR}: he is calmer, although nothing was resolved." },
    ] },

  /* ===================== ECONOMIC ===================== */
  "eco_sponsor_dudoso": { titulo:"{TIPO} offers money for {ELEM}",
    contexto:"The offer is tempting, but nobody knows quite where the money comes from. With its logo on {ELEM}, {CLUB} would be tied to it for years.",
    variables:{ TIPO:["An energy drink brand","A shady crypto platform","A payday-loan company"],
                ELEM:["the sleeve","the back of the shirt","the shorts"] },
    opciones:[
      { texto:"Accept", sub:"Fresh money, reputation at stake", msg:"You sealed the deal and money came in. The members frowned." },
      { texto:"Decline", sub:"You protect the image", msg:"You said no. The supporters appreciated it, the treasurer less so." },
      { texto:"Negotiate conditions", sub:"Less money, more caution", msg:"You closed a narrower deal, with exit clauses." },
    ] },

  "eco_deuda": { titulo:"Debt owed to {ACREEDOR}",
    contexto:"Collection notice from {ACREEDOR}: it wants its money. The debt {PLAZO} and cash is tight.",
    variables:{ ACREEDOR:["the tax authority","the security firm","the kit supplier"],
                PLAZO:["falls due this week","falls due at the end of the month","is already under a final demand"] },
    opciones:[
      { texto:"Pay it all at once", sub:"Total relief, empty coffers", msg:"You paid everything in one go. You could breathe again, although the coffers were scraped bare." },
      { texto:"Refinance with interest", sub:"Kick the problem down the road", msg:"You refinanced the debt. You pay less today and more tomorrow." },
      { texto:"Delay the payment", sub:"Betting on being forgotten", ok:{ msg:"The creditor waited and everything carried on as normal." }, mal:{ msg:"The creditor lost patience and the news was everywhere." } },
    ] },

  "eco_fondo_pase": { titulo:"An investment fund wants {JUGADOR}'s transfer rights",
    contexto:"{FONDO} offers to pay up front {PORC} of the market value of {JUGADOR} ({JPOS}, rated {JRATING}) and move him to another club.",
    variables:{ PORC:["70%","85%","100%"],
                FONDO:["A foreign fund","A local fund","An investment company"] },
    opciones:[
      { texto:"Accept", sub:"Money now, the player goes", msg:"You closed the deal with the fund and a good sum came in. {JUGADOR} moved to another club." },
      { texto:"Reject", sub:"You keep the player", msg:"You turned it down. {JUGADOR} stays at {CLUB} and the supporters applaud you." },
      { texto:"Ask for more money and no middlemen", sub:"Could close or collapse", ok:{ msg:"The fund accepted the counteroffer and {JUGADOR} left, a good deal for {CLUB}." }, mal:{ msg:"The fund withdrew and rumour has it you are in trouble." } },
    ] },

  "eco_juicio_exjugador": { titulo:"A former player goes to court",
    contexto:"{JUGADOR}, who has already retired, is claiming {RECLAMO} and the club's lawyer {ABOGADO}.",
    variables:{ RECLAMO:["unpaid bonuses","compensation","back pay","a percentage of an old transfer fee"],
                ABOGADO:["wants a quick settlement","insists it can be won","recommends not speaking to the press"] },
    opciones:[
      { texto:"Settle", sub:"You close the matter", msg:"You settled with {JUGADOR}. The club lost money and the conflict died." },
      { texto:"Go to court", sub:"Could go very well or very badly", ok:{ msg:"You won the case against {JUGADOR}. And you collected costs." }, mal:{ msg:"You lost the case and {JUGADOR} collected more than he asked, with interest." } },
      { texto:"Pay him in instalments", sub:"Eases the cash flow, prolongs the drama", msg:"You agreed instalments with {JUGADOR}: the coffers breathe, the matter drags on." },
    ] },

  "eco_naming": { titulo:"Stadium naming rights",
    contexto:"{EMPRESA} offers its name for the stadium {DURACION}. The supporters do not like it one bit.",
    variables:{ EMPRESA:["A supermarket chain","An appliance brand","A regional bank"],
                DURACION:["for three years","for five years","for ten years"] },
    opciones:[
      { texto:"Accept", sub:"Big money, angry supporters", msg:"The naming deal was signed. Banners against it went up in the stands." },
      { texto:"Reject", sub:"You respect tradition", msg:"You rejected the naming deal. The members applauded, the treasurer did not." },
      { texto:"Keep the historic name alongside", sub:"Halfway house", msg:"They agreed to keep the historic name next to theirs. Nobody was completely happy." },
    ] },

  "eco_rival_cualidad": { titulo:"{RIVAL} wants to buy your {CUALIDAD}",
    contexto:"{RIVAL} has put {OFERTA} on the table for {JUGADOR}, {JPOS}, aged {JEDAD}. The dressing room awaits your answer.",
    variables:{ RIVAL:["A top-flight club","A club from abroad","A team from another region"],
                OFERTA:["a hefty sum","a moderate sum plus a player","a loan with an option to buy","an offer in instalments"] },
    opciones:[
      { texto:"Sell", sub:"Money comes in, the player goes", msg:"You sold {JUGADOR}. The coffers filled up and the dressing room got thinner." },
      { texto:"Keep him", sub:"You hold on to the player", msg:"You said {JUGADOR} is not for sale. The squad thanked you." },
      { texto:"Ask for double", sub:"A deal or a breakdown", ok:{ msg:"They agreed to pay double for {JUGADOR}." }, mal:{ msg:"They walked away from the table and {JUGADOR} now has his head elsewhere." } },
    ] },

  "eco_prestamo": { titulo:"A loan to pay the wages",
    contexto:"Payday is coming and there is not enough. {PRESTAMISTA} offers a loan {TASA}.",
    variables:{ PRESTAMISTA:["A regional bank","A neighbourhood mutual society","A businessman member"],
                TASA:["at a high interest rate","secured against gate receipts","with a renegotiation clause"] },
    opciones:[
      { texto:"Take it", sub:"Pay today, owe tomorrow", msg:"You took the loan. The wages were paid and the debt is left for another day." },
      { texto:"Ask the squad for patience", sub:"No debt, but tension", msg:"You asked the squad to be patient. Some accepted, others did not." },
      { texto:"Sell a hospitality box", sub:"Small money, quick", msg:"You sold a box. It was enough to cover the urgent bills." },
    ] },

  "eco_merch": { titulo:"A new product line",
    contexto:"{SOCIO} proposes launching {PRODUCTO}. The initial investment is risky.",
    variables:{ SOCIO:["A local designer","A chain of shops","A local factory"],
                PRODUCTO:["retro shirts","an urban clothing line","collectible sticker cards"] },
    opciones:[
      { texto:"Launch it big", sub:"Could be a hit or a miss", ok:{ msg:"The launch was a success: the shops ran out of stock." }, mal:{ msg:"The launch did not catch on and stock was left unsold." } },
      { texto:"A short run", sub:"Moderate risk", msg:"You did a short run and it sold exactly as expected." },
      { texto:"Decline the proposal", sub:"You stay out of it", msg:"You said no. No risks, but no new money either." },
    ] },

  "eco_tv": { titulo:"Broadcasting rights",
    contexto:"{FORMATO} offers to broadcast {CLUB}'s matches {CONDICION}.",
    variables:{ FORMATO:["A streaming platform","A cable channel","A radio and web outlet"],
                CONDICION:["with imposed kick-off times","with exclusivity","with payment up front"] },
    opciones:[
      { texto:"Sign", sub:"Money and visibility", msg:"You signed the deal. A bigger audience, but some kick-off times inconvenience the squad." },
      { texto:"Reject", sub:"You keep your freedom", msg:"You rejected the offer: no extra money, but your own calendar." },
      { texto:"Negotiate a partial deal", sub:"Less money, more caution", msg:"You closed a scaled-down version of the deal." },
    ] },

  "eco_obras": { titulo:"Building work at the facilities",
    contexto:"Someone has to repair {TRIBUNA}, and the debate is how to pay for it: {FINANCIA}.",
    variables:{ TRIBUNA:["the terraces","the main stand","the executive boxes"],
                FINANCIA:["out of the club's own funds","with a loan","with a members' campaign"] },
    opciones:[
      { texto:"Full renovation", sub:"A big improvement, a battered bank balance", msg:"The full works were completed. The members are happy and the treasurer is not." },
      { texto:"Only the urgent work", sub:"The bare minimum", msg:"The urgent work was done: it is enough, but it does not excite anyone." },
      { texto:"Postpone for a year", sub:"A risky gamble", ok:{ msg:"Nothing happened: you saved the money this year." }, mal:{ msg:"A problem arose because the work was not done and it was fixed in a rush." } },
    ] },

  "eco_cuota_social": { titulo:"Raise the membership fee?",
    contexto:"The board proposes a {AUMENTO} increase {EXCUSA}.",
    variables:{ AUMENTO:["10%","25%","40%"],
                EXCUSA:["to pay the wages","to fund building work","to clear the debts"] },
    opciones:[
      { texto:"Raise the fee", sub:"Cash now, members annoyed", msg:"The fee went up. Money came in and there were complaints on social media." },
      { texto:"Keep it as it is", sub:"Calm members", msg:"You kept the fee unchanged. The members thank you, the coffers do not." },
      { texto:"Raise it by half", sub:"A middle way", msg:"You raised the fee by half the proposal. Nobody was completely happy." },
    ] },

  "eco_recital": { titulo:"Hiring out the stadium for a concert",
    contexto:"{ARTISTA} wants to play at the stadium {FECHA}.",
    variables:{ ARTISTA:["A rock band","A pop singer","A Latin music festival"],
                FECHA:["between two fixtures","in the middle of cup week","on the free weekend"] },
    opciones:[
      { texto:"Accept", sub:"Extra money, a battered pitch", msg:"The concert went well and filled the coffers. The pitch suffered." },
      { texto:"Decline", sub:"You protect the pitch", msg:"You rejected the concert: the pitch is immaculate, the coffers no different." },
      { texto:"Accept with conditions", sub:"Less money, more caution", msg:"You accepted with strict conditions. Everything went off tidily." },
    ] },

  "eco_cualidad_publicidad": { titulo:"A brand wants your {CUALIDAD} as its face",
    contexto:"{MARCA} offers {JUGADOR} the chance to be the face of its campaign {CONDICION}.",
    variables:{ MARCA:["A sportswear brand","A fast-food chain","A telecoms company"],
                CONDICION:["with a share going to the club","with a schedule that clashes with training","with one year of exclusivity"] },
    opciones:[
      { texto:"Accept", sub:"Money and visibility", msg:"{JUGADOR} signed the contract. The club received its share and the press talked about it." },
      { texto:"Decline", sub:"Focus on football", msg:"You turned down the proposal: {JUGADOR} stayed focused on his job." },
      { texto:"Negotiate a short deal", sub:"A bit of everything", msg:"You agreed a shorter campaign, with no interference with training." },
    ] },

  "eco_fichaje_cuota": { titulo:"The signing instalment falls due",
    contexto:"The instalment for the expensive signing you closed has arrived and the coffers are {ESTADO}. {ACREEDOR} will not wait.",
    variables:{ ESTADO:["tight","very tight","worse than expected"],
                ACREEDOR:["The selling club","The agent","An intermediary"] },
    opciones:[
      { texto:"Pay in full", sub:"You deliver, the coffers take a hit", msg:"You paid the instalment and came across as a chairman who honours his debts." },
      { texto:"Renegotiate the terms", sub:"Prolongs the commitment", msg:"You renegotiated the terms. You pay less today and more tomorrow." },
      { texto:"Ask for a discount", sub:"Could go well or badly", ok:{ msg:"They agreed to a discount: a weight off your shoulders." }, mal:{ msg:"They took offence and demanded the full amount, with interest." } },
    ] },

  /* ===================== INSTITUTIONAL ===================== */
  "ins_asamblea": { titulo:"A heated general meeting",
    contexto:"The members' meeting turns fierce over {TEMA} and {TONO}.",
    variables:{ TEMA:["the accounts","the reform of the statutes","the sale of a plot of land"],
                TONO:["there are ultras in the stands","people are demanding transparency","a rival slate has appeared"] },
    opciones:[
      { texto:"Defend the record", sub:"Firm and unyielding", msg:"You defended your record tooth and nail. Some applauded, others walked out." },
      { texto:"Open the books", sub:"Total transparency", msg:"You opened the books: the meeting calmed down, although awkward questions arose." },
      { texto:"Postpone the meeting", sub:"You buy time", msg:"You postponed the meeting. The issue did not go away, it was just put off." },
    ] },

  "ins_eleccion": { titulo:"Elections are approaching",
    contexto:"{RIVAL} promises {PROMESA} and openly challenges you.",
    variables:{ RIVAL:["A former chairman","A local businessman","A group of young members"],
                PROMESA:["a bigger stadium","more signings","more transparency"] },
    opciones:[
      { texto:"An aggressive campaign", sub:"Heavy spending, a direct attack", msg:"You ran an aggressive campaign. You rose in the polls, but you spent money." },
      { texto:"Show your record", sub:"Results in hand", msg:"You showed what you had done. The members recognised the effort." },
      { texto:"Ally with a faction", sub:"A bet on power", ok:{ msg:"The alliance worked and you gained support." }, mal:{ msg:"The alliance proved costly: you lost credibility on both sides." } },
    ] },

  "ins_promesa_incumplida": { titulo:"A broken campaign promise",
    contexto:"A group of members reminds you that you promised {PROMESA} and is organising {RECLAMO}.",
    variables:{ PROMESA:["a covered stadium","the swimming pool","the youth academy"],
                RECLAMO:["a signed letter","a viral thread","a protest outside the club"] },
    opciones:[
      { texto:"Apologise and set a date", sub:"Humility with a deadline", msg:"You apologised and set a date. The members gave you a vote of confidence." },
      { texto:"Explain there is no money", sub:"Hard realism", msg:"You said there is no money. You were honest, but it annoyed people." },
      { texto:"Announce partial works", sub:"A bet on image", ok:{ msg:"The partial works calmed the members and were finished on time." }, mal:{ msg:"The partial works were delayed and you ended up in a worse position." } },
    ] },

  "ins_intendente": { titulo:"The mayor offers his support",
    contexto:"The mayor offers you {APOYO} in exchange for {FAVOR}.",
    variables:{ APOYO:["improvements at the training ground","a grant","the use of a training pitch"],
                FAVOR:["a place on his slate","a political rally at the stadium","a job for one of his protégés"] },
    opciones:[
      { texto:"Accept", sub:"Support today, a debt tomorrow", msg:"You accepted the deal. The support arrived, and the mayor made a note of the favour." },
      { texto:"Decline", sub:"Independence", msg:"You rejected the deal. The mayor got angry, but the members valued you for it." },
      { texto:"Negotiate without political favours", sub:"Partial support", msg:"You secured support without favours. The mayor was not pleased." },
    ] },

  "ins_comision": { titulo:"Conflict on the board",
    contexto:"A conflict erupts within the board: {CONFLICTO} {MOMENTO}.",
    variables:{ CONFLICTO:["a rebellious vice-chairman","a treasurer threatening to resign","two warring factions"],
                MOMENTO:["in the middle of a bad run","just before a general meeting","right at the close of the accounts"] },
    opciones:[
      { texto:"Mediate personally", sub:"Time and effort", msg:"You mediated and calmed tempers. It cost you weeks of work." },
      { texto:"Impose a decision", sub:"Firm authority", msg:"You made a decision without consensus. Someone left upset." },
      { texto:"Let them sort it out themselves", sub:"Less effort, more risk", msg:"You did not step in: the conflict grew and leaked to the press." },
    ] },

  "ins_capitan_voz": { titulo:"The captain wants a voice on the board",
    contexto:"{JUGADOR}, the captain, wants to have his say on {TEMA} and raises it {TONO}.",
    variables:{ TEMA:["performance bonuses","the pre-season schedule","the use of the training ground"],
                TONO:["in private","in front of the whole squad","by letter"] },
    opciones:[
      { texto:"Listen to him", sub:"A bigger voice, more weight", msg:"You listened to {JUGADOR}: the squad valued the gesture." },
      { texto:"Set the limits", sub:"Respecting the hierarchy", msg:"You told {JUGADOR} that everyone should stick to their own job. The captain nodded without enthusiasm." },
      { texto:"Give him a seat on a committee", sub:"Could go well or badly", ok:{ msg:"{JUGADOR} took the role seriously and helped to unblock matters." }, mal:{ msg:"{JUGADOR} got carried away and the directors were annoyed." } },
    ] },

  "ins_federacion": { titulo:"The league sanctions you",
    contexto:"The league has detected {INFRACCION} and proposes {SANCION}.",
    variables:{ INFRACCION:["failures in ticket control","a debt to another club","crowd trouble"],
                SANCION:["a fine","a points deduction","playing behind closed doors"] },
    opciones:[
      { texto:"Pay up and comply", sub:"You close it quickly", msg:"You served the sanction. The matter was closed with no more fuss." },
      { texto:"Appeal", sub:"Could go well or badly", ok:{ msg:"The appeal succeeded and the sanction was reduced." }, mal:{ msg:"The appeal failed and the sanction stands." } },
      { texto:"Negotiate a payment plan", sub:"You spread out the cost", msg:"You secured a payment plan. The league made a note of it for the future." },
    ] },

  "ins_auditoria": { titulo:"Audit of the accounts",
    contexto:"{AUDITOR} asks to review the books and finds {HALLAZGO}.",
    variables:{ AUDITOR:["An accounting firm","A group of members","The league"],
                HALLAZGO:["dubious expenses","duplicated invoices","a messy petty cash box"] },
    opciones:[
      { texto:"Cooperate fully", sub:"Total transparency", msg:"You cooperated: the errors were corrected and your credibility rose." },
      { texto:"Play down the finding", sub:"Make light of it", msg:"You said it was not such a big deal. Some members did not believe you." },
      { texto:"Blame the accounts department", sub:"A political way out", msg:"You replaced the accountant. Things calmed down, but you left someone angry." },
    ] },

  "ins_conflictivo_sancion": { titulo:"The board wants to sanction a player",
    contexto:"After {INCIDENTE}, part of the board calls for {SANCION} for {JUGADOR} ({JPOS}, rated {JRATING}).",
    variables:{ INCIDENTE:["an argument with the manager","turning up late to training","criticising the board","missing the pre-match team camp"],
                SANCION:["a heavy fine","a suspension","exclusion from the squad list"] },
    opciones:[
      { texto:"Sanction him", sub:"A firm hand", msg:"You sanctioned {JUGADOR}. The squad got the message, although some protested." },
      { texto:"A warning", sub:"A soft hand", msg:"You gave {JUGADOR} only a warning. Part of the board saw it as weakness." },
      { texto:"Talk to him alone", sub:"Could clear the air or make it worse", ok:{ msg:"{JUGADOR} apologised and promised to change." }, mal:{ msg:"{JUGADOR} came out of the chat worse and the conflict grew." } },
    ] },

  "ins_dia_club": { titulo:"Club anniversary",
    contexto:"{CLUB} celebrates {ANIVERSARIO} and the debate is over {FORMATO}.",
    variables:{ ANIVERSARIO:["100 years","75 years","50 years"],
                FORMATO:["a parade","a tribute match","a members' dinner"] },
    opciones:[
      { texto:"A big party", sub:"Costly but memorable", msg:"The party was a success: emotion, photos and a full stadium." },
      { texto:"A frugal celebration", sub:"More sober", msg:"The celebration was simple. Nobody complained, nobody got emotional." },
      { texto:"Reuse the tribute to raise funds", sub:"A mix of gala and business", msg:"You turned the anniversary into a ticketed event. You raised money, with some reproaches." },
    ] },

  "ins_disciplinas": { titulo:"Adding new sports sections",
    contexto:"A proposal wants to add {DISCIPLINA} to the club {RECURSO}.",
    variables:{ DISCIPLINA:["women's football","basketball","swimming"],
                RECURSO:["on a small budget","with a grant","with contributions from members"] },
    opciones:[
      { texto:"Approve it wholeheartedly", sub:"A social bet", msg:"The new section was added with enthusiasm. The club's community is growing." },
      { texto:"A pilot scheme", sub:"Caution", msg:"You set up a pilot scheme. We will see how it goes." },
      { texto:"Postpone", sub:"Priority to professional football", msg:"You said now is not the time. The backers were disappointed." },
    ] },

  "ins_cualidad_contrato": { titulo:"Renewal for your {CUALIDAD}",
    contexto:"{JUGADOR}, your {CUALIDAD}, wants to renew {CONDICION} and {AGENTE}.",
    variables:{ CONDICION:["with a big pay rise","with a release clause","in exchange for a guaranteed starting place","with a long contract"],
                AGENTE:["his agent is pushing","his family wants stability","another club is tempting him"] },
    opciones:[
      { texto:"Accept his terms", sub:"You secure him, at a price", msg:"You renewed {JUGADOR} on all his terms. The dressing room celebrated." },
      { texto:"A more modest counteroffer", sub:"You trim the budget", msg:"You closed a more modest renewal with {JUGADOR}. He was not entirely happy." },
      { texto:"Let his contract run down", sub:"A risk of losing him", ok:{ msg:"{JUGADOR} stayed without his conditions: you saved money and everything carries on as before." }, mal:{ msg:"{JUGADOR} left on a free transfer and the supporters held you responsible." } },
    ] },

  "ins_intendente_factura": { titulo:"The mayor sends the bill",
    contexto:"The mayor remembers the favour and now asks for {PEDIDO} {MOMENTO}.",
    variables:{ PEDIDO:["tickets for his party workers","a campaign rally at the ground","your public endorsement of his candidacy"],
                MOMENTO:["this week","before the elections","in the middle of an important match"] },
    opciones:[
      { texto:"Comply", sub:"You pay the political debt", msg:"You met the mayor's request. The supporters saw it and did not forget." },
      { texto:"Refuse", sub:"You break the link", msg:"You refused. The mayor got angry and cut off his support." },
      { texto:"Half comply", sub:"You try to please everyone", ok:{ msg:"The mayor accepted the half-gesture and was satisfied." }, mal:{ msg:"The mayor took offence anyway and the supporters did not forgive you either." } },
    ] },

});
