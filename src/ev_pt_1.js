/* Eventos (eventos.js) — português do Brasil, parte 1 */
EVENTOS_I18N.pt = Object.assign(EVENTOS_I18N.pt || {}, {

'dep_refuerzo': { titulo:'O técnico pede um reforço urgente', contexto:'Com {MOTIVO}, o técnico pede um reforço {PLAZO}. Há um candidato: {JUGADOR}, {JPOS} de {JEDAD} anos e nível {JRATING}.',
  variables:{ MOTIVO:['dois lesionados no meio-campo','a suspensão de um titular','uma sequência de gols sofridos','a venda de um companheiro importante'],
              PLAZO:['ainda esta semana','antes do fim da janela de transferências','para o jogo de domingo'] },
  opciones:[
    { texto:'Contratar {JUGADOR}', sub:'Reforço já, custa dinheiro', msg:'{JUGADOR} passa a defender {CLUB}: o técnico sorri e a tesouraria faz as contas.' },
    { texto:'Que o elenco se vire', sub:'Zero gasto, mais risco', msg:'Você apostou no grupo. {JUGADOR} não veio e o técnico lembrou disso na coletiva.' },
    { texto:'Oferecer um contrato curto a {JUGADOR}', sub:'Metade do preço, mas pode ofendê-lo', ok:{ msg:'{JUGADOR} aceitou o contrato curto e rende desde o primeiro dia.' }, mal:{ msg:'{JUGADOR} se ofendeu e assinou em outro lugar: você perdeu tempo e negociações.' } },
  ] },

'dep_fichaje_ambicioso': { titulo:'Contratação ambiciosa', contexto:'{REPRE} oferece {JUGADOR} ({JPOS}, {JEDAD} anos, nível {JRATING}) e {COND}. É um nome forte, mas caro.',
  variables:{ REPRE:['Um agente com bons contatos','Um empresário da região','Um ex-dirigente virado intermediário'],
              COND:['pede uma cláusula de saída baixa','exige um contrato longo e bem pago','reivindica a camisa 10 e a titularidade'] },
  opciones:[
    { texto:'Fazer o investimento', sub:'Contratação de impacto, caixa abalado', msg:'Você apresentou {JUGADOR} com banda e fogos. Os sócios já estão fazendo as contas.' },
    { texto:'Negociar para baixo', sub:'Menos risco, menos brilho', msg:'Você fechou mais barato: {JUGADOR} chegou sem alarde e sem promessas.' },
    { texto:'Deixar passar', sub:'Você protege o caixa', msg:'Você disse não. {JUGADOR} assinou em outro lugar e o técnico ficou olhando para o teto.' },
  ] },

'dep_juvenil_venta': { titulo:'Venda de um jovem para o exterior', contexto:'{DESTINO} quer levar {JUGADOR}, {JPOS} de {JEDAD} anos, {FORMA}. A torcida o adora.',
  variables:{ DESTINO:['Um clube do Leste Europeu','Uma liga do Oriente Médio','Um time do México','Um clube da segunda divisão europeia'],
              FORMA:['com pagamento parcelado','com uma porcentagem de uma venda futura','à vista, mas com desconto'] },
  opciones:[
    { texto:'Vender', sub:'Entra dinheiro, sai a promessa', msg:'{JUGADOR} foi embora e {CLUB} faturou. Na arquibancada, muitos lenços no ar.' },
    { texto:'Segurar o garoto', sub:'Você fica com a promessa', msg:'{JUGADOR} fica. A arquibancada cantou o nome dele a tarde toda.' },
    { texto:'Pedir mais dinheiro', sub:'Pode dar certo ou desandar', ok:{ msg:'Aceitaram a contraproposta: negócio redondo com {JUGADOR}.' }, mal:{ msg:'O comprador se ofendeu e desistiu: nem dinheiro, nem jovem satisfeito.' } },
  ] },

'dep_lesion_capitan': { titulo:'Lesão grave do capitão', contexto:'{JUGADOR}, capitão e {JPOS} de {JEDAD} anos, sofreu {LESION} e ficará fora {TIEMPO}. O vestiário espera sua resposta.',
  variables:{ LESION:['uma ruptura de ligamentos','uma fratura na fíbula','uma lesão muscular grave'],
              TIEMPO:['por cerca de três meses','por cerca de quatro meses','pelo resto da temporada','por tempo indeterminado'] },
  opciones:[
    { texto:'Contratar um substituto', sub:'Remendo caro', msg:'Você contratou um substituto. {JUGADOR} acompanha a recuperação da arquibancada.' },
    { texto:'Confiar no elenco', sub:'Sem gasto, com risco', msg:'Sem {JUGADOR} o time sente, mas o grupo se mostra unido.' },
    { texto:'Apostar numa recuperação relâmpago', sub:'Pode dar muito certo ou muito errado', ok:{ msg:'{JUGADOR} voltou antes do previsto: o vestiário explodiu de alegria.' }, mal:{ msg:'{JUGADOR} se machucou de novo e a aposta saiu caríssima.' } },
  ] },

'dep_descenso': { titulo:'Briga direta contra o rebaixamento', contexto:'Seu time joga {CONTEXTO} contra {RIVAL}: quem perder fica à beira do abismo.',
  variables:{ RIVAL:['um rival direto','um time embalado','o lanterna da tabela'],
              CONTEXTO:['em campo neutro','em casa, com o estádio lotado','fora de casa, bem longe'] },
  opciones:[
    { texto:'Ir para cima e ganhar de qualquer jeito', sub:'Tudo ou nada', ok:{ msg:'Seu time ganhou o jogo da vida: {CLUB} respira.' }, mal:{ msg:'Seu time perdeu e o abismo está mais perto. A arquibancada não perdoa.' } },
    { texto:'Esquema cauteloso', sub:'Um ponto e sofrer', msg:'Empate sofrido. A agonia se estende, mas os pontos aparecem.' },
    { texto:'Prometer bicho ao elenco', sub:'Bicho por vitória', msg:'Você prometeu bicho e o elenco entrou em campo com outra cara. A tesouraria, nem tanto.' },
  ] },

'dep_tecnico_garantias': { titulo:'O técnico pede garantias', contexto:'O {PERFIL} que comanda {CLUB} avisa que sem {EXIGE} não continua.',
  variables:{ PERFIL:['técnico jovem','técnico veterano','ex-jogador histórico'],
              EXIGE:['mais crédito de tempo','um auxiliar de sua confiança','menos pressão da mídia'] },
  opciones:[
    { texto:'Dar o que ele pede', sub:'Você o prende ao clube', msg:'Você fez a vontade dele: o técnico se sentiu respaldado e o time percebeu.' },
    { texto:'Contrato até o fim da temporada', sub:'Sem compromissos longos', msg:'Você deixou claro o limite. O técnico ficou irritado e isso se nota no vestiário.' },
    { texto:'Deixá-lo ir', sub:'Aposta alta', ok:{ msg:'O novo treinador chegou com ideias frescas e {CLUB} saiu voando.' }, mal:{ msg:'Você largou o técnico e o substituto não funciona: a torcida cobra a conta.' } },
  ] },

'dep_cambio_dt': { titulo:'Demitir o técnico?', contexto:'Há {RACHA} e {PRESION} pede a cabeça dele.',
  variables:{ RACHA:['quatro jogos sem vencer','três derrotas seguidas','um 0 a 3 em casa'],
              PRESION:['a imprensa','a torcida','um setor da diretoria'] },
  opciones:[
    { texto:'Demitir', sub:'Mudança de ares, multa rescisória', msg:'Você demitiu o técnico. O novo trouxe energia, embora a multa rescisória doa.' },
    { texto:'Bancar', sub:'Você reafirma o projeto', msg:'Você bancou o técnico. Os críticos vão lembrar você disso.' },
    { texto:'Dar mais dois jogos', sub:'Última chance', ok:{ msg:'O técnico reagiu e salvou o cargo: você pareceu um visionário.' }, mal:{ msg:'Ele perdeu de novo e você ficou com cara de ingênuo.' } },
  ] },

'dep_figura_banco': { titulo:'O técnico quer barrar uma estrela', contexto:'Para {PARTIDO}, o técnico quer barrar {JUGADOR} ({JPOS}, nível {JRATING}) {RAZON}. A torcida não entende.',
  variables:{ PARTIDO:['a semifinal da copa','o clássico','o jogo decisivo'],
              RAZON:['por baixo rendimento','por um desconforto que não cura','por indisciplina tática'] },
  opciones:[
    { texto:'Respaldar o técnico', sub:'Autoridade contra a torcida', msg:'O técnico barrou {JUGADOR} e o time mostrou mais organização. A arquibancada vaiou.' },
    { texto:'Pedir que ele escale', sub:'Craque em campo, técnico irritado', msg:'{JUGADOR} jogou e a torcida se animou. O técnico não perdoou você.' },
    { texto:'Deixar a critério dele', sub:'Quem decide é o campo', ok:{ msg:'O técnico acertou: sem {JUGADOR} o time ficou mais equilibrado.' }, mal:{ msg:'Sem {JUGADOR} o time apagou e jogaram a culpa na diretoria.' } },
  ] },

'dep_pretemporada': { titulo:'Pré-temporada: {PLAN}', contexto:'A comissão técnica propõe {PLAN} {PRESUPUESTO}. A ideia divide opiniões.',
  variables:{ PLAN:['uma excursão pelo interior','um amistoso internacional','um torneio de verão'],
              PRESUPUESTO:['com pouco orçamento','com uma campanha de sócios','com um patrocinador local'] },
  opciones:[
    { texto:'Aprovar o plano', sub:'Ritmo e visibilidade, custa dinheiro', msg:'A pré-temporada saiu completa: o elenco chegou afiado e os sócios viram.' },
    { texto:'Plano austero no CT', sub:'Economia, menos ritmo', msg:'Treinaram em casa. Você economizou, mas faltou ritmo de competição.' },
    { texto:'Aprovar com amistoso de exibição pago', sub:'Pode dar certo ou errado', ok:{ msg:'A exibição levou gente e dinheiro: o plano se pagou sozinho.' }, mal:{ msg:'A exibição foi um fiasco e a excursão fechou no prejuízo.' } },
  ] },

'dep_cancha': { titulo:'O gramado está em péssimo estado', contexto:'{PROBLEMA} mostrou sinais de colapso {EPOCA}. Os jogadores reclamam.',
  variables:{ PROBLEMA:['O gramado','A drenagem','A iluminação'],
              EPOCA:['antes de um jogo importante','em pleno inverno','em plena má fase'] },
  opciones:[
    { texto:'Consertar já', sub:'Obra completa', msg:'A obra saiu a tempo. Jogadores e sócios notaram.' },
    { texto:'Um remendo barato', sub:'Aguenta por enquanto', msg:'Cobriu-se o mais urgente. Com sorte dá até o fim da temporada.' },
    { texto:'Jogar assim e rezar', sub:'Zero gasto, muito risco', ok:{ msg:'Nada aconteceu: você economizou e ninguém ficou sabendo.' }, mal:{ msg:'Houve um vexame em campo e a imprensa repetiu a semana inteira.' } },
  ] },

'dep_inferiores': { titulo:'Reorganizar a base', contexto:'O coordenador da base propõe {CAMBIO}, financiado {FONDOS}.',
  variables:{ CAMBIO:['abrir um alojamento para garotos do interior','contratar um olheiro por estado','montar um torneio próprio de captação'],
              FONDOS:['com aporte de sócios','com dinheiro do time principal','com um convênio municipal'] },
  opciones:[
    { texto:'Apoiar com tudo', sub:'Investimento no futuro', msg:'A base recebeu dinheiro e entusiasmo. Os frutos aparecerão daqui a alguns anos.' },
    { texto:'Fazer algo mínimo', sub:'Apenas um gesto', msg:'Fez-se um ajuste pequeno: o coordenador encarou como desfeita.' },
    { texto:'Priorizar o time principal', sub:'Resultados já', msg:'Você disse que o dinheiro vai para o time principal. Houve resultados, e cobranças.' },
  ] },

'dep_capitan_descanso': { titulo:'O capitão pede descanso', contexto:'O capitão {JUGADOR} ({JPOS}, {JEDAD} anos) pede para parar por {MOTIVO} {FECHA}.',
  variables:{ MOTIVO:['cansaço acumulado','um assunto familiar','um desconforto antigo'],
              FECHA:['antes da copa','no meio da sequência de jogos','antes de um clássico'] },
  opciones:[
    { texto:'Conceder', sub:'O grupo o respeita', msg:'{JUGADOR} descansou e o elenco valorizou o gesto, embora o time tenha sentido a falta.' },
    { texto:'Pedir que jogue', sub:'O time aguenta', msg:'{JUGADOR} jogou de dentes cerrados. O grupo entendeu, mas com dúvidas.' },
    { texto:'Combinar um descanso parcial', sub:'Meio-termo arriscado', ok:{ msg:'O descanso parcial deu certo: {JUGADOR} voltou inteiro.' }, mal:{ msg:'O combinado não agradou ninguém e {JUGADOR} jogou pela metade.' } },
  ] },

'dep_cualidad_minutos': { titulo:'Seu {CUALIDAD} reclama minutos', contexto:'{JUGADOR}, seu {CUALIDAD}, sente que joga pouco {MOMENTO} e {ACCION}.',
  variables:{ MOMENTO:['na última rodada','há um mês','desde a troca de técnico'],
              ACCION:['pediu uma reunião','ameaçou ir embora','postou uma mensagem enigmática'] },
  opciones:[
    { texto:'Dar mais minutos', sub:'Ele contente, o técnico não', msg:'{JUGADOR} jogou mais e se mostrou motivado. O técnico não escondeu o desgosto.' },
    { texto:'Que aguente o banco', sub:'Autoridade da comissão técnica', msg:'{JUGADOR} aceitou a contragosto e o vestiário percebeu sua mão firme.' },
    { texto:'Mediar com uma conversa', sub:'Saída diplomática', msg:'Você conversou com {JUGADOR}: ele ficou mais tranquilo, embora nada tenha sido resolvido.' },
  ] },

'eco_sponsor_dudoso': { titulo:'{TIPO} oferece dinheiro para ocupar {ELEM}', contexto:'A oferta é tentadora, mas ninguém sabe bem de onde vem o dinheiro. Com {ELEM} levando a logo deles, {CLUB} ficaria amarrado por anos.',
  variables:{ TIPO:['Uma marca de energéticos','Uma plataforma de cripto de reputação duvidosa','Uma financeira de crédito rápido'],
              ELEM:['a manga da camisa','as costas da camisa','o calção'] },
  opciones:[
    { texto:'Aceitar', sub:'Dinheiro fresco, reputação em jogo', msg:'Você fechou o acordo e entrou dinheiro. Os sócios franziram a testa.' },
    { texto:'Recusar', sub:'Você protege a imagem', msg:'Você disse não. A torcida valorizou, a tesouraria nem tanto.' },
    { texto:'Negociar condições', sub:'Menos dinheiro, mais cuidado', msg:'Você fechou um acordo mais restrito, com cláusulas de saída.' },
  ] },

'eco_deuda': { titulo:'Dívida com {ACREEDOR}', contexto:'Quem cobra é {ACREEDOR}. A dívida {PLAZO} e o caixa está apertado.',
  variables:{ ACREEDOR:['o órgão arrecadador','a empresa de segurança','o fornecedor de material esportivo'],
              PLAZO:['vence esta semana','vence no fim do mês','já está em notificação'] },
  opciones:[
    { texto:'Pagar à vista', sub:'Alívio total, caixa vazio', msg:'Você pagou tudo de uma vez. Respirou, embora o caixa tenha ficado raspado.' },
    { texto:'Refinanciar com juros', sub:'Empurrar o problema', msg:'Você refinanciou a dívida. Paga menos hoje e mais amanhã.' },
    { texto:'Empurrar o pagamento', sub:'Aposta no esquecimento', ok:{ msg:'O credor esperou e tudo seguiu seu curso.' }, mal:{ msg:'O credor se irritou e a notícia saiu em todo lugar.' } },
  ] },

'eco_fondo_pase': { titulo:'Um fundo de investimento quer o passe de {JUGADOR}', contexto:'{FONDO} oferece pagar adiantado {PORC} do valor de mercado de {JUGADOR} ({JPOS}, nível {JRATING}) e levá-lo para outro clube.',
  variables:{ PORC:['70%','85%','100%'],
              FONDO:['Um fundo estrangeiro','Um fundo local','Uma sociedade anônima de investimento'] },
  opciones:[
    { texto:'Aceitar', sub:'Dinheiro já, o jogador sai', msg:'Você fechou com o fundo e entrou uma boa quantia. {JUGADOR} foi para outro clube.' },
    { texto:'Recusar', sub:'Você mantém o jogador', msg:'Você recusou. {JUGADOR} segue defendendo {CLUB} e a torcida aplaude.' },
    { texto:'Pedir mais dinheiro e sem intermediários', sub:'Pode fechar ou romper', ok:{ msg:'O fundo aceitou a contraproposta e {JUGADOR} saiu num bom negócio para {CLUB}.' }, mal:{ msg:'O fundo desistiu e comentou-se que você estava em apuros.' } },
  ] },

'eco_juicio_exjugador': { titulo:'Processo de um ex-jogador', contexto:'{JUGADOR}, que já se aposentou, reivindica {RECLAMO} e o advogado do clube {ABOGADO}.',
  variables:{ RECLAMO:['bichos não pagos','uma indenização','salários atrasados','uma porcentagem de uma transferência antiga'],
              ABOGADO:['pede para acertar logo','garante que dá para ganhar','recomenda não falar com a imprensa'] },
  opciones:[
    { texto:'Fazer acordo', sub:'Encerra o assunto', msg:'Você fez acordo com {JUGADOR}. O clube perdeu dinheiro e o conflito morreu.' },
    { texto:'Ir a julgamento', sub:'Pode dar muito certo ou muito errado', ok:{ msg:'Você ganhou a ação contra {JUGADOR}. E ainda cobrou as custas.' }, mal:{ msg:'Você perdeu a ação e {JUGADOR} recebeu a mais, com juros.' } },
    { texto:'Pagar em parcelas', sub:'Alivia o caixa, alonga o drama', msg:'Você combinou parcelas com {JUGADOR}: o caixa respira, o assunto continua.' },
  ] },

'eco_naming': { titulo:'Nome do estádio à venda', contexto:'{EMPRESA} oferece emprestar o nome ao estádio {DURACION}. A torcida não gosta nada disso.',
  variables:{ EMPRESA:['Uma rede de supermercados','Uma marca de eletrodomésticos','Um banco regional'],
              DURACION:['por três anos','por cinco anos','por dez anos'] },
  opciones:[
    { texto:'Aceitar', sub:'Dinheiro forte, torcida irritada', msg:'Fechou-se o naming. Na arquibancada penduraram faixas contra.' },
    { texto:'Recusar', sub:'Você respeita a tradição', msg:'Você recusou o naming. Os sócios aplaudiram, a tesouraria não.' },
    { texto:'Manter o nome histórico junto', sub:'Meio a meio', msg:'Aceitaram manter o nome histórico ao lado. Ninguém ficou totalmente feliz.' },
  ] },

'eco_rival_cualidad': { titulo:'{RIVAL} quer comprar seu {CUALIDAD}', contexto:'{RIVAL} pôs na mesa {OFERTA} por {JUGADOR}, {JPOS} de {JEDAD} anos. O vestiário espera sua resposta.',
  variables:{ RIVAL:['Um clube da primeira divisão','Um clube do exterior','Um time de outro estado'],
              OFERTA:['uma quantia alta','uma quantia moderada mais um jogador','um empréstimo com opção de compra','uma oferta parcelada'] },
  opciones:[
    { texto:'Vender', sub:'Entra dinheiro, sai o jogador', msg:'Você vendeu {JUGADOR}. O caixa encheu e o vestiário ficou mais magro.' },
    { texto:'Reter', sub:'Você mantém o jogador', msg:'Você disse que {JUGADOR} não se vende. O elenco agradeceu.' },
    { texto:'Pedir o dobro', sub:'Negócio ou ruptura', ok:{ msg:'Aceitaram pagar o dobro por {JUGADOR}.' }, mal:{ msg:'Levantaram da mesa e {JUGADOR} ficou com a cabeça em outro lugar.' } },
  ] },

'eco_prestamo': { titulo:'Empréstimo para pagar salários', contexto:'Chega o dia do pagamento e o dinheiro não dá. {PRESTAMISTA} oferece um empréstimo {TASA}.',
  variables:{ PRESTAMISTA:['Um banco regional','Uma cooperativa do bairro','Um sócio empresário'],
              TASA:['a juros altos','com garantia da arrecadação','com cláusula de renegociação'] },
  opciones:[
    { texto:'Aceitar', sub:'Hoje paga, amanhã deve', msg:'Você pegou o empréstimo. Os salários foram pagos e a dívida fica para outro dia.' },
    { texto:'Pedir paciência ao elenco', sub:'Sem dívida, com tensão', msg:'Você pediu paciência ao elenco. Alguns aceitaram, outros não.' },
    { texto:'Vender um camarote', sub:'Dinheiro pouco, mas rápido', msg:'Você vendeu um camarote. Deu para tapar o mais urgente.' },
  ] },

'eco_merch': { titulo:'Nova linha de produtos', contexto:'{SOCIO} propõe lançar {PRODUCTO}. O investimento inicial é arriscado.',
  variables:{ SOCIO:['Um designer do bairro','Uma rede de lojas','Uma fábrica local'],
              PRODUCTO:['camisas retrô','uma linha urbana','figurinhas colecionáveis'] },
  opciones:[
    { texto:'Lançar em grande estilo', sub:'Pode estourar ou falhar', ok:{ msg:'O lançamento foi um sucesso: as lojas ficaram sem estoque.' }, mal:{ msg:'O lançamento não pegou e sobrou estoque encalhado.' } },
    { texto:'Uma tiragem curta', sub:'Risco moderado', msg:'Você fez uma tiragem curta e vendeu exatamente o esperado.' },
    { texto:'Recusar a proposta', sub:'Você não entra nessa', msg:'Você disse não. Sem riscos, mas sem dinheiro novo.' },
  ] },

'eco_tv': { titulo:'Direitos de transmissão', contexto:'{FORMATO} oferece transmitir os jogos de {CLUB} {CONDICION}.',
  variables:{ FORMATO:['Uma plataforma de streaming','Um canal de TV por assinatura','Uma rádio com portal na web'],
              CONDICION:['com horários impostos','com exclusividade','com pagamento adiantado'] },
  opciones:[
    { texto:'Assinar', sub:'Dinheiro e visibilidade', msg:'Você assinou o acordo. Mais público, mas alguns horários incomodam o elenco.' },
    { texto:'Recusar', sub:'Você mantém a liberdade', msg:'Você recusou a oferta: sem dinheiro extra, mas com calendário próprio.' },
    { texto:'Negociar um acordo parcial', sub:'Menos dinheiro, mais cuidado', msg:'Você fechou uma versão reduzida do acordo.' },
  ] },

'eco_obras': { titulo:'Obras nas instalações', contexto:'É preciso reformar {TRIBUNA} e a discussão é como pagar: {FINANCIA}.',
  variables:{ TRIBUNA:['a arquibancada popular','as cadeiras','os camarotes'],
              FINANCIA:['com recursos próprios','com um empréstimo','com uma campanha de sócios'] },
  opciones:[
    { texto:'Obra completa', sub:'Melhora forte, caixa abalado', msg:'Terminaram a obra completa. Os sócios estão contentes e a tesouraria, não.' },
    { texto:'Só o urgente', sub:'O mínimo indispensável', msg:'Fez-se o urgente: dá, mas não empolga.' },
    { texto:'Adiar por um ano', sub:'Aposta com risco', ok:{ msg:'Nada aconteceu: você economizou o dinheiro este ano.' }, mal:{ msg:'Houve um problema por não ter feito a obra e foi consertado às pressas.' } },
  ] },

'eco_cuota_social': { titulo:'Aumentar a mensalidade dos sócios?', contexto:'A diretoria propõe um aumento de {AUMENTO} {EXCUSA}.',
  variables:{ AUMENTO:['10%','25%','40%'],
              EXCUSA:['para pagar salários','para fazer obras','para quitar dívidas'] },
  opciones:[
    { texto:'Aumentar a mensalidade', sub:'Caixa já, sócios irritados', msg:'A mensalidade subiu. Entrou dinheiro e houve reclamações nas redes.' },
    { texto:'Manter', sub:'Sócios tranquilos', msg:'Você manteve a mensalidade. Os sócios agradecem, o caixa não.' },
    { texto:'Aumentar pela metade', sub:'Solução intermediária', msg:'Você aumentou a mensalidade pela metade. Ninguém ficou totalmente satisfeito.' },
  ] },

'eco_recital': { titulo:'Alugar o estádio para um show', contexto:'{ARTISTA} quer tocar no estádio {FECHA}.',
  variables:{ ARTISTA:['Uma banda de rock','Um cantor pop','Um festival de pagode'],
              FECHA:['entre dois jogos','em plena semana de copa','no fim de semana livre'] },
  opciones:[
    { texto:'Aceitar', sub:'Dinheiro extra, gramado castigado', msg:'O show correu bem e encheu o caixa. O gramado sofreu.' },
    { texto:'Recusar', sub:'Você cuida do gramado', msg:'Você recusou o show: gramado impecável, caixa igual.' },
    { texto:'Aceitar com condições', sub:'Menos dinheiro, mais cuidado', msg:'Você aceitou com condições rígidas. Tudo saiu certinho.' },
  ] },

'eco_cualidad_publicidad': { titulo:'Uma marca quer seu {CUALIDAD} como garoto-propaganda', contexto:'{MARCA} oferece a {JUGADOR} ser o rosto da campanha {CONDICION}.',
  variables:{ MARCA:['Uma marca de material esportivo','Uma rede de fast-food','Uma operadora de telefonia'],
              CONDICION:['com uma parte para o clube','com horários que batem com os treinos','com exclusividade por um ano'] },
  opciones:[
    { texto:'Aceitar', sub:'Dinheiro e visibilidade', msg:'{JUGADOR} assinou o contrato. O clube recebeu sua parte e a imprensa comentou.' },
    { texto:'Recusar', sub:'Foco no esportivo', msg:'Você recusou a proposta: {JUGADOR} ficou concentrado no que importa.' },
    { texto:'Negociar um acordo curto', sub:'Um pouco de tudo', msg:'Você fechou uma campanha mais curta, sem atrapalhar os treinos.' },
  ] },

'eco_fichaje_cuota': { titulo:'Vence a parcela da contratação', contexto:'Chegou a parcela da contratação cara que você fechou e o caixa está {ESTADO}. {ACREEDOR} não espera.',
  variables:{ ESTADO:['apertado','apertadíssimo','pior do que o esperado'],
              ACREEDOR:['O clube vendedor','O agente','Um intermediário'] },
  opciones:[
    { texto:'Pagar tudo', sub:'Você cumpre, caixa abalado', msg:'Você pagou a parcela e ficou como um dirigente cumpridor.' },
    { texto:'Renegociar os prazos', sub:'Alonga o compromisso', msg:'Você renegociou os prazos. Paga menos hoje e mais amanhã.' },
    { texto:'Pedir um desconto', sub:'Pode dar certo ou errado', ok:{ msg:'Aceitaram um desconto: você tirou um peso das costas.' }, mal:{ msg:'Se ofenderam, cobraram o total e ainda com juros.' } },
  ] },

'ins_asamblea': { titulo:'Assembleia de sócios pegando fogo', contexto:'A assembleia esquenta com {TEMA} e {TONO}.',
  variables:{ TEMA:['o balanço','a reforma do estatuto','a venda de um terreno'],
              TONO:['há torcida organizada nas arquibancadas','pedem transparência','há uma chapa de oposição'] },
  opciones:[
    { texto:'Defender a gestão', sub:'Firme e sem ceder', msg:'Você defendeu a gestão com unhas e dentes. Alguns aplaudiram, outros saíram.' },
    { texto:'Abrir os livros', sub:'Transparência total', msg:'Você abriu os livros: a assembleia se acalmou, embora tenham surgido perguntas incômodas.' },
    { texto:'Adiar a assembleia', sub:'Você ganha tempo', msg:'Você adiou a assembleia. O assunto não foi embora, só foi empurrado.' },
  ] },

'ins_eleccion': { titulo:'As eleições se aproximam', contexto:'{RIVAL} promete {PROMESA} e desafia você abertamente.',
  variables:{ RIVAL:['Um ex-presidente','Um empresário do bairro','Um grupo de sócios jovens'],
              PROMESA:['mais estádio','mais contratações','mais transparência'] },
  opciones:[
    { texto:'Campanha agressiva', sub:'Gasto forte, ataque direto', msg:'Você montou uma campanha agressiva. Subiu nas pesquisas, mas gastou.' },
    { texto:'Mostrar gestão', sub:'Resultados na mão', msg:'Você mostrou o que foi feito. Os sócios reconheceram o esforço.' },
    { texto:'Se aliar a um grupo', sub:'Aposta de poder', ok:{ msg:'A aliança funcionou e você somou apoios.' }, mal:{ msg:'A aliança saiu cara: você perdeu credibilidade nos dois lados.' } },
  ] },

'ins_promesa_incumplida': { titulo:'Promessa de campanha não cumprida', contexto:'Um grupo de sócios lembra que você prometeu {PROMESA} e se organiza com {RECLAMO}.',
  variables:{ PROMESA:['o estádio coberto','a piscina','a escola de formação'],
              RECLAMO:['uma carta assinada','uma corrente viral nas redes','um ato na porta do clube'] },
  opciones:[
    { texto:'Pedir desculpas e dar uma data', sub:'Humildade com prazo', msg:'Você pediu desculpas e deu uma data. Os sócios deram um voto de confiança.' },
    { texto:'Explicar que não há dinheiro', sub:'Realismo duro', msg:'Você disse que não há dinheiro. Foi honesto, mas incomodou.' },
    { texto:'Anunciar uma obra parcial', sub:'Aposta na imagem', ok:{ msg:'A obra parcial acalmou os sócios e saiu no prazo.' }, mal:{ msg:'A obra parcial atrasou e você ficou pior na foto.' } },
  ] },

'ins_intendente': { titulo:'O prefeito oferece apoio', contexto:'O prefeito oferece {APOYO} em troca de {FAVOR}.',
  variables:{ APOYO:['obras no CT','um subsídio','a cessão de um campo de treino'],
              FAVOR:['um lugar na chapa','um ato político no estádio','a contratação de um indicado'] },
  opciones:[
    { texto:'Aceitar', sub:'Apoio hoje, dívida amanhã', msg:'Você aceitou o trato. O apoio chegou, e o prefeito anotou o favor.' },
    { texto:'Recusar', sub:'Independência', msg:'Você recusou o trato. O prefeito ficou bravo, mas os sócios valorizaram.' },
    { texto:'Negociar sem favores políticos', sub:'Apoio parcial', msg:'Você conseguiu apoio sem favores. O prefeito não ficou contente.' },
  ] },

'ins_comision': { titulo:'Conflito na diretoria', contexto:'Dentro da diretoria estoura um conflito: {CONFLICTO} {MOMENTO}.',
  variables:{ CONFLICTO:['um vice-presidente rebelde','uma tesoureira que ameaça pedir demissão','duas facções em guerra'],
              MOMENTO:['em plena má fase','antes de uma assembleia','em pleno fechamento de balanço'] },
  opciones:[
    { texto:'Mediar pessoalmente', sub:'Tempo e desgaste', msg:'Você mediou e acalmou os ânimos. Custou semanas de trabalho.' },
    { texto:'Impor uma decisão', sub:'Autoridade firme', msg:'Você tomou uma decisão sem consenso. Alguém saiu irritado.' },
    { texto:'Deixar que se resolvam sozinhos', sub:'Menos esforço, mais risco', msg:'Você não interveio: o conflito cresceu e vazou para a imprensa.' },
  ] },

'ins_capitan_voz': { titulo:'O capitão quer voz na diretoria', contexto:'{JUGADOR}, o capitão, quer opinar sobre {TEMA} e coloca isso {TONO}.',
  variables:{ TEMA:['os prêmios por metas','o calendário da pré-temporada','o uso do CT'],
              TONO:['em particular','diante de todo o elenco','por carta'] },
  opciones:[
    { texto:'Ouvi-lo', sub:'Mais voz, mais peso', msg:'Você ouviu {JUGADOR}: o elenco valorizou o gesto.' },
    { texto:'Marcar os limites', sub:'Respeitando hierarquias', msg:'Você disse a {JUGADOR} que cada um cuida do seu. O capitão concordou sem vontade.' },
    { texto:'Dar a ele um lugar em uma comissão', sub:'Pode dar certo ou errado', ok:{ msg:'{JUGADOR} levou o papel a sério e ajudou a destravar assuntos.' }, mal:{ msg:'{JUGADOR} se empolgou demais e os dirigentes se incomodaram.' } },
  ] },

'ins_federacion': { titulo:'A liga aplica uma punição', contexto:'A liga detectou {INFRACCION} e propõe {SANCION}.',
  variables:{ INFRACCION:['falhas no controle de ingressos','uma dívida com outro clube','incidentes com a torcida'],
              SANCION:['uma multa','perda de pontos','jogar com portões fechados'] },
  opciones:[
    { texto:'Pagar e cumprir', sub:'Você encerra rápido', msg:'Você cumpriu a punição. O assunto se encerrou sem mais barulho.' },
    { texto:'Recorrer', sub:'Pode dar certo ou errado', ok:{ msg:'O recurso prosperou e a punição foi reduzida.' }, mal:{ msg:'O recurso fracassou e a punição ficou valendo.' } },
    { texto:'Negociar um plano de pagamento', sub:'Você dilui o custo', msg:'Você conseguiu um plano de pagamento. A liga anotou para o futuro.' },
  ] },

'ins_auditoria': { titulo:'Auditoria das contas', contexto:'{AUDITOR} pede para revisar os livros e encontra {HALLAZGO}.',
  variables:{ AUDITOR:['Um escritório de contabilidade','Um grupo de sócios','A liga'],
              HALLAZGO:['gastos duvidosos','notas fiscais duplicadas','um caixa pequeno bagunçado'] },
  opciones:[
    { texto:'Colaborar de verdade', sub:'Transparência total', msg:'Você colaborou: os erros foram corrigidos e sua credibilidade subiu.' },
    { texto:'Minimizar a descoberta', sub:'Tirar a importância', msg:'Você disse que não era para tanto. Alguns sócios não acreditaram.' },
    { texto:'Culpar o setor contábil', sub:'Saída política', msg:'Você trocou o contador. Acalmou, mas deixou um ressentido.' },
  ] },

'ins_conflictivo_sancion': { titulo:'A diretoria quer punir um jogador', contexto:'Após {INCIDENTE}, parte da diretoria pede {SANCION} para {JUGADOR} ({JPOS}, nível {JRATING}).',
  variables:{ INCIDENTE:['uma discussão com o técnico','chegar atrasado a um treino','criticar a diretoria','faltar a uma concentração'],
              SANCION:['uma multa pesada','uma suspensão','deixá-lo fora da lista de relacionados'] },
  opciones:[
    { texto:'Puni-lo', sub:'Mão dura', msg:'Você puniu {JUGADOR}. O elenco entendeu o recado, embora alguns tenham protestado.' },
    { texto:'Uma advertência', sub:'Mão leve', msg:'Você deu só uma advertência a {JUGADOR}. Parte da diretoria viu como fraqueza.' },
    { texto:'Conversar com ele a sós', sub:'Pode esclarecer ou piorar', ok:{ msg:'{JUGADOR} pediu desculpas e se comprometeu a mudar.' }, mal:{ msg:'{JUGADOR} saiu pior da conversa e o conflito aumentou.' } },
  ] },

'ins_dia_club': { titulo:'Aniversário do clube', contexto:'{CLUB} faz {ANIVERSARIO} e se discute como comemorar: {FORMATO}.',
  variables:{ ANIVERSARIO:['100 anos','75 anos','50 anos'],
              FORMATO:['um desfile','um jogo-homenagem','um jantar de sócios'] },
  opciones:[
    { texto:'Festão', sub:'Caro, mas memorável', msg:'A festa foi um sucesso: emoção, fotos e arquibancada lotada.' },
    { texto:'Comemoração austera', sub:'Mais sóbria', msg:'A comemoração foi simples. Ninguém reclamou, ninguém se emocionou.' },
    { texto:'Aproveitar a homenagem para arrecadar', sub:'Mistura de gala e negócio', msg:'Você transformou o aniversário num evento com ingressos. Arrecadou, com alguma cobrança.' },
  ] },

'ins_disciplinas': { titulo:'Novas modalidades', contexto:'Uma proposta quer incluir {DISCIPLINA} no clube {RECURSO}.',
  variables:{ DISCIPLINA:['futebol feminino','basquete','natação'],
              RECURSO:['com pouco dinheiro','com um subsídio','com aporte de sócios'] },
  opciones:[
    { texto:'Aprovar com força', sub:'Aposta social', msg:'A nova modalidade foi incluída com entusiasmo. A comunidade do clube cresce.' },
    { texto:'Um projeto-piloto', sub:'Cautela', msg:'Você montou um projeto-piloto. Vamos ver como sai.' },
    { texto:'Adiar', sub:'Prioridade ao futebol profissional', msg:'Você disse que agora não é o momento. Os defensores da ideia ficaram desiludidos.' },
  ] },

'ins_cualidad_contrato': { titulo:'Renovação do seu {CUALIDAD}', contexto:'{JUGADOR}, seu {CUALIDAD}, quer renovar {CONDICION} e {AGENTE}.',
  variables:{ CONDICION:['com um aumento importante','com uma cláusula de saída','em troca da titularidade','com um contrato longo'],
              AGENTE:['seu empresário pressiona','sua família pede estabilidade','outro clube está de olho nele'] },
  opciones:[
    { texto:'Aceitar as condições dele', sub:'Você o garante, caro', msg:'Você renovou {JUGADOR} com todas as condições. O vestiário comemorou.' },
    { texto:'Contraproposta mais modesta', sub:'Você ajusta o caixa', msg:'Você fechou uma renovação mais modesta com {JUGADOR}. Ele não ficou totalmente contente.' },
    { texto:'Deixar o contrato acabar', sub:'Risco de perdê-lo', ok:{ msg:'{JUGADOR} ficou sem condições: você economizou e tudo segue igual.' }, mal:{ msg:'{JUGADOR} saiu de graça e a torcida responsabilizou você.' } },
  ] },

'ins_intendente_factura': { titulo:'O prefeito manda a conta', contexto:'O prefeito lembra do favor e agora pede {PEDIDO} {MOMENTO}.',
  variables:{ PEDIDO:['ingressos para seus cabos eleitorais','um ato de campanha no gramado','que você apoie publicamente a candidatura dele'],
              MOMENTO:['esta semana','antes das eleições','em pleno jogo importante'] },
  opciones:[
    { texto:'Cumprir', sub:'Você paga a dívida política', msg:'Você atendeu o pedido do prefeito. A torcida viu e não esqueceu.' },
    { texto:'Negar', sub:'Você rompe o vínculo', msg:'Você negou. O prefeito ficou bravo e cortou os apoios.' },
    { texto:'Cumprir pela metade', sub:'Tentar agradar a todos', ok:{ msg:'O prefeito aceitou o gesto pela metade e ficou satisfeito.' }, mal:{ msg:'O prefeito se ofendeu mesmo assim e a torcida também não perdoou.' } },
  ] },

'med_declaracion': { titulo:'Declarações mal interpretadas', contexto:'Em {MEDIO}, suas palavras {FRASE} foram tiradas de contexto.',
  variables:{ MEDIO:['um programa de rádio','um canal de TV por assinatura','um portal digital'],
              FRASE:['sobre o árbitro','sobre o técnico','sobre a torcida'] },
  opciones:[
    { texto:'Esclarecer publicamente', sub:'Custoso, mas claro', msg:'Você esclareceu o que disse. O assunto murchou rápido.' },
    { texto:'Deixar passar', sub:'Silêncio incômodo', msg:'Você não disse nada. O assunto cresceu nas redes.' },
    { texto:'Contra-atacar o veículo', sub:'Risco alto', ok:{ msg:'Você contra-atacou com firmeza: os torcedores aplaudiram.' }, mal:{ msg:'O contra-ataque deu errado: o veículo criticou você por dias.' } },
  ] },

'med_esc_publico': { titulo:'Incidentes na arquibancada', contexto:'Durante o jogo houve {INCIDENTE} e o escândalo chegou até {ALCANCE}.',
  variables:{ INCIDENTE:['sinalizadores','uma briga entre torcedores','xingamentos a um árbitro'],
              ALCANCE:['os telejornais','as redes','a liga'] },
  opciones:[
    { texto:'Condenar publicamente', sub:'Imagem limpa', msg:'Você condenou o ocorrido. Sua imagem saiu fortalecida.' },
    { texto:'Defender a torcida', sub:'Alinhado com a arquibancada', msg:'Você defendeu a sua gente. A torcida gostou, a imprensa não.' },
    { texto:'Prometer mais controle', sub:'Com custo', msg:'Você prometeu mais controle: investiu-se em segurança.' },
  ] },

'med_presion_prensa': { titulo:'Pressão da imprensa', contexto:'{PERIODISTA} bate sempre na mesma tecla: {TEMA}. Não larga o osso.',
  variables:{ PERIODISTA:['Um jornalista histórico','Um comentarista polêmico','Um repórter do bairro'],
              TEMA:['o desempenho','o orçamento','o técnico'] },
  opciones:[
    { texto:'Dar uma entrevista', sub:'Dar a cara a tapa', msg:'Você deu a cara a tapa. A entrevista foi tensa, mas trouxe clareza.' },
    { texto:'Ignorá-lo', sub:'Sem dar importância', msg:'Você o ignorou. O jornalista se vingou.' },
    { texto:'Convidá-lo ao clube', sub:'Gesto arriscado', ok:{ msg:'O jornalista saiu do clube com outra impressão e contou isso.' }, mal:{ msg:'O jornalista aproveitou a visita para filmar o pior.' } },
  ] },

'med_esc_jugador': { titulo:'Escândalo de um jogador fora de campo', contexto:'Veio à tona que {JUGADOR} ({JPOS}, {JEDAD} anos) {HECHO} {LUGAR}.',
  variables:{ HECHO:['brigou','postou algo polêmico','fez uma festa'],
              LUGAR:['em uma balada','durante uma transmissão ao vivo','nas redes sociais','depois de uma derrota'] },
  opciones:[
    { texto:'Puni-lo publicamente', sub:'Mão dura', msg:'Você puniu {JUGADOR}. A imprensa valorizou, o elenco ficou tenso.' },
    { texto:'Defendê-lo', sub:'Respaldo ao jogador', msg:'Você defendeu {JUGADOR}. O vestiário agradeceu, a imprensa não.' },
    { texto:'Resolver em silêncio', sub:'Pode dar certo ou errado', ok:{ msg:'O assunto esfriou e {JUGADOR} voltou ao normal.' }, mal:{ msg:'O escândalo vazou do mesmo jeito e você ficou exposto.' } },
  ] },

'med_sponsor_escandalo': { titulo:'Escândalo com o patrocinador', contexto:'{MEDIO} publicou que {HECHO}. Associam você à decisão de aceitar esse patrocínio.',
  variables:{ MEDIO:['Um jornal','Um portal','Um programa de TV'],
              HECHO:['a empresa está sob investigação','a empresa fechou de repente','há denúncias contra os donos'] },
  opciones:[
    { texto:'Romper o contrato', sub:'Corte imediato', msg:'Você rompeu o contrato e assumiu o custo. Ficou como alguém responsável.' },
    { texto:'Esperar para ver o que acontece', sub:'Apostar que o assunto apaga', msg:'Você esperou. O escândalo cresceu e apontaram o dedo para você.' },
    { texto:'Defender a decisão', sub:'Risco alto', ok:{ msg:'Você conseguiu que a investigação não chegasse até você e o patrocinador continuou pagando.' }, mal:{ msg:'A investigação avançou e sua defesa ficou mal.' } },
  ] },

'med_cualidad_nota': { titulo:'Uma matéria destaca seu {CUALIDAD}', contexto:'{MEDIO} publicou uma matéria {ENFOQUE} sobre {JUGADOR} e o clube ficou no centro da cena.',
  variables:{ MEDIO:['Um jornal esportivo','Um programa de TV','Um podcast'],
              ENFOQUE:['de perfil humano','sobre seu desempenho','sobre seu caráter'] },
  opciones:[
    { texto:'Capitalizar', sub:'Tudo para a vitrine', msg:'Você aproveitou a matéria para mostrar {CLUB}. {JUGADOR} se deslumbrou um pouco.' },
    { texto:'Baixar o perfil', sub:'Você cuida do jogador', msg:'Você baixou o perfil: {JUGADOR} seguiu concentrado.' },
    { texto:'Organizar uma coletiva', sub:'Pode brilhar ou dar errado', ok:{ msg:'A coletiva fez brilhar {JUGADOR} e o clube.' }, mal:{ msg:'Na coletiva {JUGADOR} disse algo que foi mal interpretado.' } },
  ] },

'med_documental': { titulo:'Documentário sobre o clube', contexto:'{PLATAFORMA} quer filmar um documentário sobre {CLUB}. O foco: {ENFOQUE}.',
  variables:{ PLATAFORMA:['Uma plataforma de streaming','Um canal público','Uma produtora independente'],
              ENFOQUE:['a história gloriosa','a crise atual','os bastidores'] },
  opciones:[
    { texto:'Aceitar com controle editorial', sub:'Controle, menos dinheiro', msg:'Você aceitou com controle editorial. O documentário saiu caprichado.' },
    { texto:'Aceitar sem condições', sub:'Liberdade total', msg:'Você aceitou sem condições. O documentário foi honesto e mexeu com as emoções.' },
    { texto:'Recusar', sub:'Privacidade', msg:'Você recusou o documentário. A intimidade do clube foi preservada.' },
  ] },

'med_rumor': { titulo:'Boatos sobre o clube', contexto:'{FUENTE} diz que {RUMOR}.',
  variables:{ FUENTE:['Um portal','Um comentarista','Um perfil anônimo'],
              RUMOR:['o clube será vendido a investidores','o estádio vai mudar de lugar','vai haver uma fusão com outro clube'] },
  opciones:[
    { texto:'Desmentir com uma nota', sub:'Rápido e claro', msg:'Você desmentiu o boato. A coisa esfriou rápido.' },
    { texto:'Não dar importância', sub:'Você ignora o barulho', msg:'Você não disse nada. O boato continuou crescendo.' },
    { texto:'Deixar pistas e criar mistério', sub:'Jogo de risco', ok:{ msg:'O mistério atraiu atenção positiva e vendas de camisas.' }, mal:{ msg:'O mistério saiu do controle e os sócios se alteraram.' } },
  ] },

'med_redes': { titulo:'Crise nas redes', contexto:'O social media cometeu {ERROR} e a reação veio de {REACCION}.',
  variables:{ ERROR:['um tuíte infeliz','um meme de mau gosto','um vídeo antigo que reapareceu'],
              REACCION:['torcedores indignados','patrocinadores preocupados','jornalistas em alerta'] },
  opciones:[
    { texto:'Pedir desculpas em público', sub:'Humildade', msg:'Você pediu desculpas e o episódio se encerrou rápido.' },
    { texto:'Demitir o social media', sub:'Mão dura', msg:'Você demitiu o responsável. Alguns viram como bode expiatório.' },
    { texto:'Fazer-se de desentendido', sub:'Deixar passar', msg:'Você não disse nada. A crise se estendeu mais do que devia.' },
  ] },

'med_figura_entrevista': { titulo:'Uma estrela fala demais', contexto:'{JUGADOR}, a estrela do elenco, deu uma entrevista a {CANAL} e falou sobre {TEMA}.',
  variables:{ CANAL:['um jornal','uma rádio','um streaming'],
              TEMA:['o técnico','a diretoria','seu futuro'] },
  opciones:[
    { texto:'Respaldar {JUGADOR}', sub:'Defesa pública', msg:'Você respaldou {JUGADOR}. O vestiário agradeceu e a imprensa criticou.' },
    { texto:'Pedir uma nota de esclarecimento', sub:'Controle de danos', msg:'{JUGADOR} esclareceu suas palavras. O assunto esfriou, mas ficou um mal-estar.' },
    { texto:'Multá-lo', sub:'Autoridade com risco', ok:{ msg:'A multa a {JUGADOR} deixou claro quem manda. Ele aceitou sem problemas.' }, mal:{ msg:'A multa a {JUGADOR} caiu mal e o vestiário se dividiu.' } },
  ] },

'med_joven_viral': { titulo:'Vídeo viral de um garoto da base', contexto:'Um vídeo de {JUGADOR} ({JPOS}, {JEDAD} anos), {VIDEO}, virou tendência e {OFERTA}.',
  variables:{ VIDEO:['comemorando um golaço','ajudando um torcedor','dançando no vestiário'],
              OFERTA:['uma marca quer contratá-lo','um canal quer entrevistá-lo','um clube grande está de olho nele'] },
  opciones:[
    { texto:'Aproveitar o momento', sub:'Visibilidade para o clube', msg:'Você aproveitou o vídeo. {JUGADOR} ficou famoso e o clube ganhou atenção.' },
    { texto:'Cuidar do garoto', sub:'Evita que suba à cabeça', msg:'Você cuidou de {JUGADOR}: ele continuou treinando sem se distrair.' },
    { texto:'Deixar que ele cuide da fama', sub:'Autonomia arriscada', ok:{ msg:'{JUGADOR} lidou com isso com inteligência e o clube se beneficiou.' }, mal:{ msg:'{JUGADOR} se distraiu e seu desempenho caiu.' } },
  ] },

'med_arbitro': { titulo:'Polêmica de arbitragem', contexto:'Após {JUGADA} {PARTIDO}, você tem que decidir o que dizer.',
  variables:{ JUGADA:['um pênalti não marcado','um gol anulado','uma expulsão duvidosa'],
              PARTIDO:['no clássico','na copa','no último jogo'] },
  opciones:[
    { texto:'Reclamar publicamente', sub:'Você defende o time', msg:'Você reclamou com força. Os torcedores aplaudiram e a liga multou.' },
    { texto:'Calar', sub:'Prudência', msg:'Você não disse nada. Alguns viram como fraqueza.' },
    { texto:'Pedir uma reunião com a liga', sub:'Canal institucional', msg:'Você pediu uma reunião. Ouviram, mas sem mudanças.' },
  ] },

'hin_barra': { titulo:'A organizada pede "colaboração"', contexto:'Um líder da organizada {TONO} pede {PEDIDO}.',
  variables:{ TONO:['em tom amigável','com ameaças veladas','por meio de um intermediário'],
              PEDIDO:['ingressos de graça','um ônibus para a viagem','dinheiro para as bandeiras'] },
  opciones:[
    { texto:'Ceder', sub:'Você acalma a arquibancada', msg:'Você cedeu ao pedido. A arquibancada se acalmou e alguns alarmes soaram.' },
    { texto:'Negar', sub:'Risco de conflito', msg:'Você negou. A imprensa aplaudiu e a organizada ficou brava.' },
    { texto:'Mediar com a liga e a polícia', sub:'Depende da região', ok:{ msg:'A mediação funcionou e se acordou um esquema ordenado.' }, mal:{ msg:'A mediação fracassou e o clima ficou pesado.' } },
  ] },

'hin_expectativa': { titulo:'Expectativa exagerada após uma boa sequência', contexto:'Após {RACHA}, a torcida já sonha com {EXPECTATIVA} e se agarra a {JUGADOR} ({JPOS}, nível {JRATING}).',
  variables:{ RACHA:['cinco vitórias seguidas','uma goleada histórica','oito jogos de invencibilidade'],
              EXPECTATIVA:['o campeonato','uma copa internacional','o acesso direto','um título'] },
  opciones:[
    { texto:'Alimentar a ilusão', sub:'Todos felizes, até falhar', msg:'Você acendeu a ilusão. {JUGADOR} virou o nome da semana.' },
    { texto:'Baixar a bola', sub:'Realismo', msg:'Você pediu calma. Os torcedores não gostaram muito.' },
    { texto:'Prometer um reforço', sub:'Você alimenta o sonho com dinheiro', ok:{ msg:'O reforço chegou e a ilusão se manteve.' }, mal:{ msg:'O reforço não veio à altura e {JUGADOR} carregou a pressão.' } },
  ] },

'hin_presion_resultados': { titulo:'Pressão por resultados', contexto:'A torcida {FORMA} para que {EXIGENCIA}.',
  variables:{ FORMA:['enche o estádio de faixas','puxa gritos contra você','manda uma carta das torcidas'],
              EXIGENCIA:['você troque o técnico','você traga reforços','a diretoria renuncie'] },
  opciones:[
    { texto:'Responder com fatos', sub:'Ação concreta', msg:'Você respondeu com medidas concretas. A arquibancada baixou o tom.' },
    { texto:'Pedir paciência', sub:'Palavras, não fatos', msg:'Você pediu paciência. Alguns entenderam, outros não.' },
    { texto:'Reunir-se com as torcidas', sub:'Escuta direta', msg:'Você se reuniu com as torcidas. Eles se sentiram ouvidos.' },
  ] },

'hin_pide_cualidad': { titulo:'A torcida pede outro {CUALIDAD}', contexto:'Os torcedores se apaixonaram por {JUGADOR}, seu {CUALIDAD}, e pedem {CANAL} que você contrate outro como ele {PLAZO}.',
  variables:{ CANAL:['num bandeiraço','nas redes','por carta'],
              PLAZO:['antes do fim da janela de transferências','esta semana','para o clássico'] },
  opciones:[
    { texto:'Sair ao mercado', sub:'Dinheiro por ilusão', msg:'Você saiu para procurar outro como {JUGADOR}. A torcida se iludiu.' },
    { texto:'Explicar que não há dinheiro', sub:'Realismo', msg:'Você explicou a situação. A torcida entendeu pela metade.' },
    { texto:'Prometer para a próxima janela', sub:'Chutar para frente', msg:'Você prometeu para a próxima janela. A paciência ficou em suspenso.' },
  ] },

'hin_banderazo': { titulo:'Bandeiraço {OCASION}', contexto:'Os torcedores fazem um bandeiraço {OCASION} e pedem {PEDIDO}.',
  variables:{ OCASION:['antes do clássico','antes da copa','antes do último jogo'],
              PEDIDO:['que o time jogue no estádio histórico','que o elenco completo venha cumprimentá-los','que não haja mais patrocinadores na camisa'] },
  opciones:[
    { texto:'Aceitar o pedido', sub:'Gesto forte', msg:'Você aceitou o pedido. A torcida se sentiu ouvida.' },
    { texto:'Recusar com respeito', sub:'Honesto', msg:'Você recusou o pedido com respeito. Alguns foram embora irritados.' },
    { texto:'Mandar o capitão cumprimentar', sub:'Gesto simbólico', ok:{ msg:'O cumprimento do capitão emocionou os torcedores.' }, mal:{ msg:'O cumprimento não bastou e soou como desculpa.' } },
  ] },

'hin_pena_viaje': { titulo:'As torcidas querem viajar', contexto:'As torcidas de {CLUB} pedem ajuda para viajar {DESTINO} e reivindicam {PEDIDO}.',
  variables:{ DESTINO:['para uma cidade distante','para outro estado','para o exterior'],
              PEDIDO:['desconto nos ingressos','ônibus do clube','hospedagem'] },
  opciones:[
    { texto:'Apoiar com tudo', sub:'Dinheiro e gesto', msg:'Você apoiou a viagem. A torcida acompanhou o time em massa.' },
    { texto:'Ajuda parcial', sub:'Um pouco de cada lado', msg:'Você ajudou de forma parcial. Alguns ficaram em casa.' },
    { texto:'Dizer que não dá para ajudar', sub:'Você protege o caixa', msg:'Você não pôde ajudar. A torcida sentiu como desfeita.' },
  ] },

'hin_homenaje_exjugador': { titulo:'Homenagem a um ídolo aposentado', contexto:'Os torcedores pedem uma homenagem a {JUGADOR}, ídolo aposentado, com {FORMA} {MOMENTO}.',
  variables:{ FORMA:['uma estátua','um jogo de despedida','uma camisa aposentada','uma placa no estádio'],
              MOMENTO:['antes do clássico','no aniversário','no fim da temporada'] },
  opciones:[
    { texto:'Fazer a homenagem em grande estilo', sub:'Emoção e gasto', msg:'A homenagem a {JUGADOR} foi emocionante e lotou o estádio.' },
    { texto:'Uma homenagem simples', sub:'Austero', msg:'Você fez uma homenagem simples a {JUGADOR}. Ninguém chorou, ninguém reclamou.' },
    { texto:'Adiar', sub:'Sem dinheiro agora', msg:'Você adiou a homenagem a {JUGADOR}. Os torcedores ficaram ressentidos.' },
  ] },

'hin_idolo_cantito': { titulo:'A arquibancada canta para uma estrela', contexto:'A torcida dedica um canto a {JUGADOR} {CANTO} e pede {PEDIDO}.',
  variables:{ CANTO:['na arquibancada','nas redes','num bandeiraço'],
              PEDIDO:['uma renovação longa','um aumento de salário','a faixa de capitão'] },
  opciones:[
    { texto:'Fazer a vontade da torcida', sub:'Gesto forte', msg:'Você fez a vontade da torcida. {JUGADOR} se sentiu querido.' },
    { texto:'Explicar os tempos', sub:'Prudência', msg:'Você explicou que tudo tem seu tempo. A torcida tolerou.' },
    { texto:'Que o jogador decida', sub:'Passar a bola para o campo dele', ok:{ msg:'{JUGADOR} encarou com humildade e se comprometeu.' }, mal:{ msg:'{JUGADOR} se sentiu pressionado e seu rendimento caiu.' } },
  ] },

'hin_precios': { titulo:'Preço dos ingressos', contexto:'Discute-se {MEDIDA} {MOTIVO}.',
  variables:{ MEDIDA:['aumentar o preço dos ingressos','baixar o preço da arquibancada popular','criar um plano familiar'],
              MOTIVO:['por causa da inflação','por causa do clássico','por causa da dívida'] },
  opciones:[
    { texto:'Aprovar a medida', sub:'Você cumpre a proposta', msg:'Você aprovou a medida. A arrecadação se mexeu.' },
    { texto:'Rejeitar', sub:'Mantém o status quo', msg:'Você rejeitou a medida. A torcida respirou aliviada.' },
    { texto:'Um plano-piloto', sub:'Teste por três rodadas', msg:'Você fez um teste. Vamos ver os números.' },
  ] },

'hin_seguridad': { titulo:'Segurança para {PARTIDO}', contexto:'Para {PARTIDO}, propõe-se {MEDIDA}. Vai custar dinheiro e pode incomodar o público.',
  variables:{ PARTIDO:['o clássico estadual','um jogo de copa','um jogo contra um rival histórico'],
              MEDIDA:['pulseiras de identificação','grades adicionais','mais policiamento'] },
  opciones:[
    { texto:'Aprovar a medida', sub:'Mais segurança, mais custo', msg:'Você aprovou a medida. O jogo foi tranquilo.' },
    { texto:'Rejeitar', sub:'Você economiza', msg:'Você rejeitou a medida. Houve alguns incidentes.' },
    { texto:'Aplicar pela metade', sub:'Meio-termo', ok:{ msg:'A versão reduzida bastou para evitar problemas.' }, mal:{ msg:'A versão reduzida não bastou e houve desordem.' } },
  ] },

'hin_socio_historico': { titulo:'Um sócio histórico pede um gesto', contexto:'{SOCIO} pede {PEDIDO}.',
  variables:{ SOCIO:['Um sócio de 90 anos','Uma família de quatro gerações','Um grupo de aposentados'],
              PEDIDO:['ingressos grátis para a vida toda','uma visita ao vestiário','que o time os cumprimente'] },
  opciones:[
    { texto:'Conceder', sub:'Gesto caloroso', msg:'Você concedeu o pedido. A história do clube pareceu viva.' },
    { texto:'Uma visita simbólica', sub:'Menos custo', msg:'Você deu uma visita simbólica. Ficaram satisfeitos.' },
    { texto:'Recusar com respeito', sub:'Precedente cuidado', msg:'Você recusou com respeito. Mostraram-se decepcionados.' },
  ] },

'hin_derrota': { titulo:'Reação após a derrota', contexto:'Depois de {RESULTADO}, a arquibancada respondeu com {REACCION}.',
  variables:{ RESULTADO:['uma goleada em casa','uma derrota no clássico','uma eliminação na copa'],
              REACCION:['vaias','faixas pedindo renúncias','as arquibancadas quase vazias'] },
  opciones:[
    { texto:'Dar a cara a tapa', sub:'Você fala com o povo', msg:'Você deu a cara a tapa e a arquibancada valorizou.' },
    { texto:'Reunir o elenco', sub:'Foco no esportivo', msg:'Você reuniu o elenco para reencaminhar o rumo.' },
    { texto:'Esperar passar', sub:'Sem respostas', msg:'Você não disse nada. A arquibancada se sentiu abandonada.' },
  ] },

'cons_vendido_brilla': { titulo:'{JUGADOR} brilha onde você o vendeu', contexto:'{JUGADOR}, que você deixou ir, {HAZANA}. A torcida lembra você disso em cada jogo.',
  variables:{ HAZANA:['fez um golaço na estreia','foi a estrela do clássico do outro lado','já é titular absoluto','apareceu em todos os melhores momentos da rodada'] },
  opciones:[
    { texto:'Tentar recomprá-lo', sub:'Caro e com orgulho ferido', msg:'{JUGADOR} voltou: você pagou demais, mas a arquibancada comemorou.' },
    { texto:'Dizer que foi o melhor para o clube', sub:'Você defende a decisão', msg:'Você defendeu a venda. Poucos acreditaram e o vestiário tomou nota.' },
    { texto:'Parabenizá-lo em público', sub:'Elegância', msg:'Você parabenizou {JUGADOR} nas redes: ficou como um cavalheiro.' },
  ] },

'cons_vendido_vestuario': { titulo:'O vestiário pergunta sobre a venda', contexto:'Depois da saída de uma das estrelas, {REFERENTE} pede para falar com você: o grupo quer saber se o clube tem um projeto ou está em liquidação.',
  variables:{ REFERENTE:['o capitão','um grupo de líderes do elenco','o representante do elenco'] },
  opciones:[
    { texto:'Prometer reforços', sub:'Compromisso que precisa ser cumprido', msg:'Você prometeu reforços. O elenco se acalmou, mas agora é preciso cumprir.' },
    { texto:'Explicar o projeto com números', sub:'Franqueza', msg:'Você mostrou as contas: não agradou, mas entenderam.' },
    { texto:'Cortar a conversa', sub:'Autoridade, sem explicações', msg:'Você cortou a conversa. O vestiário ficou ressentido.' },
  ] },

'cons_recorte_reclamo': { titulo:'O elenco reclama do corte', contexto:'O ajuste de gastos chegou ao vestiário: {RECLAMO}. Os jogadores querem uma resposta antes do próximo jogo.',
  variables:{ RECLAMO:['os bichos atrasaram','as concentrações foram cortadas','as viagens agora são de ônibus'] },
  opciones:[
    { texto:'Pagar os bichos', sub:'O vestiário se acalma, custa dinheiro', msg:'Você pagou o que devia: o elenco respondeu em campo.' },
    { texto:'Manter o ajuste', sub:'Disciplina fiscal', msg:'Você manteve o ajuste. O caixa respira; o vestiário, não.' },
    { texto:'Prometer bichos se houver resultados', sub:'Aposta no esforço', ok:{ msg:'O elenco se motivou e o time ganhou: cumprir vai sair barato.' }, mal:{ msg:'Não houve resultados e o elenco sentiu que você mentiu.' } },
  ] },

'cons_recorte_socios': { titulo:'Os sócios percebem o ajuste', contexto:'{AVISO} e nas redes se multiplicam as reclamações: "com esse dirigente tudo encolhe".',
  variables:{ AVISO:['A lanchonete da arquibancada popular fechou','A sede social baixou as portas antes da hora','As mensalidades foram reajustadas sem aviso'] },
  opciones:[
    { texto:'Explicar a economia', sub:'Transparência', msg:'Você explicou o porquê do ajuste: a maioria entendeu.' },
    { texto:'Compensar com um benefício', sub:'Custa, mas acalma', msg:'Você incluiu um benefício para os sócios e a reclamação se apagou.' },
    { texto:'Ignorar as reclamações', sub:'A economia manda', msg:'Você ignorou o barulho. Economizou, mas a arquibancada lembrou.' },
  ] },

'cons_prensa_vendetta': { titulo:'O jornalista não perdoa você', contexto:'{PERIODISTA} não larga o assunto: todo programa começa lembrando seu último deslize.',
  variables:{ PERIODISTA:['O apresentador do programa das dez','Um repórter histórico do clube','Uma colunista de um portal esportivo'] },
  opciones:[
    { texto:'Convidá-lo para uma conversa', sub:'Baixar a tensão', msg:'Sentaram para conversar. A matéria seguinte foi mais gentil.' },
    { texto:'Não responder nada', sub:'Deixar que se esgote', msg:'Você não respondeu. O assunto durou mais duas semanas.' },
    { texto:'Contra-atacar com uma nota', sub:'Pode dar muito certo ou muito errado', ok:{ msg:'A nota pegou: a opinião pública ficou do seu lado.' }, mal:{ msg:'A nota caiu péssimo e o jornalista usou como lenha.' } },
  ] },

'cons_racha_presion': { titulo:'A vitória aumenta as expectativas', contexto:'Depois do bom resultado, {HINCHADA}. Agora qualquer tropeço vai ser lido como crise.',
  variables:{ HINCHADA:['a arquibancada começou a cantar pelo título','a imprensa já fala em candidatos ao título','os sócios pedem reforços de peso'] },
  opciones:[
    { texto:'Pedir calma', sub:'Baixar a pressão', msg:'Você pediu calma: o vestiário respirou, a arquibancada se conteve.' },
    { texto:'Prometer brigar lá em cima', sub:'Você aumenta a aposta', msg:'Você prometeu brigar lá em cima. Agora é preciso cumprir.' },
    { texto:'Premiar o elenco', sub:'Reconhecimento com custo', msg:'Você premiou o elenco pela sequência: eles estão com você até o fim.' },
  ] },

'cons_vestuario_reunion': { titulo:'O vestiário rachou', contexto:'{SINTOMA}. O técnico avisa que, se não houver intervenção, o grupo se parte em dois.',
  variables:{ SINTOMA:['Dois líderes brigaram aos gritos no treino','Há um grupo de jogadores que já não fala com o técnico','Vazou um áudio do elenco criticando a diretoria'] },
  opciones:[
    { texto:'Reunião a sós com os líderes', sub:'Diálogo direto', msg:'A reunião organizou o grupo. Custou, mas valeu a pena.' },
    { texto:'Trocar o capitão', sub:'Gesto forte', msg:'Você trocou o capitão. Alguns aplaudiram, outros ficaram em silêncio.' },
    { texto:'Punir os envolvidos', sub:'Mão dura', msg:'Você puniu os envolvidos: a imprensa aplaudiu, o vestiário esfriou.' },
  ] },

'cons_capitan_renuncia': { titulo:'O capitão quer sair', contexto:'{JUGADOR}, o capitão, pede para conversar: {MOTIVO}. Se ele sair, o grupo fica sem referência.',
  variables:{ MOTIVO:['diz que não se sente mais respaldado','está farto do clima no vestiário','recebeu uma oferta e está tentado'] },
  opciones:[
    { texto:'Convencê-lo com uma melhora de contrato', sub:'Custa dinheiro, organiza o grupo', msg:'{JUGADOR} renovou e voltou a organizar o grupo.' },
    { texto:'Reunir-se com todo o elenco', sub:'Colocar as cartas na mesa', msg:'A reunião foi áspera, mas o grupo saiu mais unido.' },
    { texto:'Deixá-lo ir', sub:'Corta o mal pela raiz', msg:'{JUGADOR} foi embora. Entrou dinheiro, mas o vestiário ficou órfão.' },
  ] },

'cons_vestuario_oro': { titulo:'O elenco se joga por você', contexto:'O grupo está tão unido que {GESTO}. É o melhor momento para pedir um esforço extra.',
  variables:{ GESTO:['os líderes propõem renovar com redução','os garotos da base pedem treinar em dois períodos','o elenco organizou um churrasco com os sócios'] },
  opciones:[
    { texto:'Aproveitar o embalo', sub:'Exigir mais, sem custo', msg:'Você pediu mais e responderam em campo, embora o grupo tenha sentido o puxão.' },
    { texto:'Premiá-los com uma viagem', sub:'Cuidar do clima', msg:'A viagem foi um sucesso: o grupo está com você até o fim.' },
    { texto:'Deixar tudo como está', sub:'Não mexer no que funciona', msg:'Você não mexeu em nada. Às vezes é a melhor decisão.' },
  ] },

'dep_arquero_apuro': { titulo:'Você ficou sem goleiros', contexto:'O elenco tem um único goleiro e o técnico não quer arriscar. Aparece {JUGADOR}, goleiro de {JEDAD} anos e nível {JRATING}.',
  variables:{ PLAZO:['esta semana'] },
  opciones:[
    { texto:'Contratar {JUGADOR}', sub:'Segurança debaixo das traves', msg:'{JUGADOR} passa a defender {CLUB}: o técnico dormiu tranquilo pela primeira vez em semanas.' },
    { texto:'Promover um garoto da base', sub:'Confiar na base', msg:'Você subiu um garoto da base como reserva. É uma aposta.' },
    { texto:'Se virar com o que há', sub:'Zero gasto, zero rede', msg:'Você não fez nada. O técnico deixou claro que tinha avisado.' },
  ] },

});
