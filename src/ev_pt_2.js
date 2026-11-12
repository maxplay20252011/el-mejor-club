/* Eventos 2 — traducción al portugués de Brasil (parte 1). */
EVENTOS_I18N.pt = Object.assign(EVENTOS_I18N.pt || {}, {

'est_ini_gira': { titulo:'Oferecem uma excursão de pré-temporada',
  contexto:'Uma produtora propõe uma excursão para {DESTINO} com {FORMATO}. Paga bem, mas o elenco chegaria cansado ao início da temporada.',
  variables:{ DESTINO:['uma cidade litorânea','o interior do país','um país vizinho','uma região de montanha'],
              FORMATO:['três amistosos','um torneio-relâmpago','dois jogos e uma clínica com crianças'] },
  opciones:[
    {texto:'Aceitar a excursão', sub:'Entra dinheiro, o elenco viaja cansado', msg:'A excursão rendeu dinheiro e boas fotos, mas o treinador reclamou do cansaço.'},
    {texto:'Treinar em casa', sub:'Sem receita, com pernas descansadas', msg:'Você trabalhou em casa: o time chega inteiro, o caixa não comemora.'},
    {texto:'Pedir uma excursão mais curta', sub:'Pode dar certo ou melar tudo', ok:{msg:'A produtora aceitou uma versão curta: bom negócio e pouco desgaste.'}, mal:{msg:'A produtora se ofendeu e desistiu: você perdeu o dinheiro e o tempo de treino.'}},
  ] },

'est_ini_cuota': { titulo:'É preciso definir a mensalidade de sócio do ano',
  contexto:'Com {MOTIVO}, o conselho quer saber a sua posição sobre a mensalidade de sócio. {PRESION}.',
  variables:{ MOTIVO:['a inflação nas alturas','o estádio pedindo reformas','a concorrência de outros clubes do bairro'],
              PRESION:['Os sócios mais jovens pedem preços menores','Os aposentados pedem desconto','A organizada diz que não se mexe em nada'] },
  opciones:[
    {texto:'Aumentar', sub:'Mais caixa, menos simpatia', msg:'Você aumentou a mensalidade: o caixa respira e a assembleia resmunga.'},
    {texto:'Congelar', sub:'Simpatia hoje, aperto amanhã', msg:'Você congelou a mensalidade: aplausos na arquibancada e contas mais apertadas.'},
    {texto:'Escalonada por categoria', sub:'Complicado, mas justo', msg:'Você montou uma mensalidade escalonada: ninguém está feliz, ninguém está furioso.'},
  ] },

'est_ini_pruebas': { titulo:'Peneira de jogadores livres',
  contexto:'Chegam {CANTIDAD} jogadores para pedir um teste na pré-temporada. {NOTA}.',
  variables:{ CANTIDAD:['uns vinte','quase quarenta','uns dez'],
              NOTA:['O treinador duvida que haja talento','Um olheiro garante que tem um bom','O preparador físico avisa que não há tempo'] },
  opciones:[
    {texto:'Abrir uma peneira geral', sub:'Custo logístico, possível descoberta', msg:'A peneira deixou algumas surpresas e uma conta de lanches.'},
    {texto:'Testar só os indicados', sub:'Economia, menos descobertas', msg:'Você testou só alguns poucos: nada de novo, nada perdido.'},
    {texto:'Não abrir os portões', sub:'Foco no elenco atual', msg:'Você fechou os portões: economizou, mas houve reclamações no bairro.'},
  ] },

'est_ini_amistoso': { titulo:'Amistoso de luxo contra {RIVAL}',
  contexto:'{RIVAL} propõe um amistoso {FECHA}, {SEDE}. Serve para se testar, mas um resultado ruim vira assunto.',
  variables:{ FECHA:['na semana que vem','no feriadão','pouco antes da estreia'],
              SEDE:['no seu estádio','no estádio do rival','em campo neutro'] },
  opciones:[
    {texto:'Jogar com o time titular', sub:'Ensaio de verdade, risco de levar um susto', ok:{msg:'O time brilhou no amistoso e a torcida saiu animada.'}, mal:{msg:'O amistoso terminou em goleada e os prognósticos esfriaram.'}},
    {texto:'Testar reservas e garotos da base', sub:'Sem pressão, pouco brilho', msg:'Os reservas aproveitaram a chance sem que ninguém se irritasse.'},
    {texto:'Recusar o amistoso', sub:'Tranquilidade, sem barulho', msg:'Você recusou: o treinador treinou de portões fechados e a imprensa perguntou por quê.'},
  ] },

'est_ini_presentacion': { titulo:'Apresentação oficial do elenco',
  contexto:'É hora de apresentar o elenco da temporada em {LUGAR}. Há {EXPECTATIVA}.',
  variables:{ LUGAR:['no estádio','num teatro da cidade','na praça principal'],
              EXPECTATIVA:['muita expectativa','certa apatia','convidados e câmeras'] },
  opciones:[
    {texto:'Fazer uma grande festa', sub:'Imagem forte, gasto alto', msg:'A festa foi espetacular e os sócios levaram as lembrancinhas para casa.'},
    {texto:'Um ato sóbrio', sub:'Austero e sem sustos', msg:'O ato foi sóbrio: poucos aplausos, zero críticas.'},
    {texto:'Aproveitar para lançar o plano de sócios', sub:'Vendas, mas pode soar oportunista', ok:{msg:'O plano de sócios vendeu que nem pão quente: o caixa sorri.'}, mal:{msg:'Pareceu uma ação comercial disfarçada de festa e os sócios perceberam.'}},
  ] },

'est_ini_preparador': { titulo:'O preparador físico pede mudanças',
  contexto:'O preparador físico exige {PEDIDO}. Diz que, sem isso, o time cai de rendimento no segundo semestre.',
  variables:{ PEDIDO:['uma academia reformada','mais dias de trabalho em dois períodos','um nutricionista fixo','menos amistosos'] },
  opciones:[
    {texto:'Dar tudo o que ele pede', sub:'Investimento que aparece depois', msg:'O elenco chegou em ponto de bala, embora o investimento tenha pesado no caixa.'},
    {texto:'Atender metade', sub:'Meio-termo razoável', msg:'Você atendeu metade do pedido: o preparador entendeu e foi trabalhar.'},
    {texto:'Mandar ele se virar', sub:'Economia, tensão na comissão técnica', msg:'Você economizou, mas a comissão técnica ficou chateada e o elenco percebe.'},
  ] },

'est_med_pases': { titulo:'Último dia da janela de transferências',
  contexto:'Faltam horas para o fechamento da janela e {SITUACION}. O treinador olha para você esperando um sinal.',
  variables:{ SITUACION:['aparece um volante livre de bom nível','um rival oferece um atacante por empréstimo','não há mais dinheiro para fechar nada','tem um jogador pedindo para sair'] },
  opciones:[
    {texto:'Sair comprando de última hora', sub:'Monta o elenco, esvazia o caixa', msg:'Você fechou um reforço em cima da hora e o vestiário agradeceu.'},
    {texto:'Fechar sem movimentações', sub:'Economia e calma', msg:'A janela fechou sem novidades: você economizou, mas ninguém se animou.'},
    {texto:'Pedir um empréstimo com opção de compra', sub:'Pode sair barato ou sair caro', ok:{msg:'O empréstimo deu certo: chegou o reforço com uma parcela razoável.'}, mal:{msg:'A negociação complicou e você acabou pagando a mais sem reforço.'}},
  ] },

'est_med_balance': { titulo:'Balanço do primeiro semestre',
  contexto:'O conselho fiscal revisa as contas do semestre e {HALLAZGO}.',
  variables:{ HALLAZGO:['detecta gastos mal justificados','pede mais detalhes dos salários','cobra os números da lanchonete do estádio','encontra dívidas não declaradas'] },
  opciones:[
    {texto:'Abrir os livros', sub:'Transparência total, custo político', msg:'Você abriu os livros: alguns se assustaram, outros valorizaram muito.'},
    {texto:'Apresentar um balanço bem-feito', sub:'Se der certo, tudo em paz', ok:{msg:'O conselho aceitou o balanço sem objeções: você respirou.'}, mal:{msg:'O conselho encontrou erros e a assembleia ficou furiosa.'}},
    {texto:'Adiar a revisão', sub:'Você ganha tempo, perde confiança', msg:'Você adiou a revisão: ganhou olhares tortos no conselho.'},
  ] },

'est_med_paro': { titulo:'Greve de {SECTOR}',
  contexto:'Os funcionários de {SECTOR} anunciam uma greve por {RECLAMO}. Há jogos no calendário e pouca margem.',
  variables:{ SECTOR:['a segurança do estádio','a administração','a manutenção do gramado','o transporte do clube'],
              RECLAMO:['salários atrasados','melhores condições','falta de pessoal'] },
  opciones:[
    {texto:'Pagar o que se deve', sub:'Você cumpre, caixa abalado', msg:'Você pagou e a greve acabou: cumpriu, embora o caixa tenha sentido.'},
    {texto:'Negociar prazos', sub:'Ganha fôlego, fica a tensão', msg:'Você negociou prazos: o conflito esfriou, mas continua latente.'},
    {texto:'Declarar o conflito injustificado', sub:'Mão dura, muito risco', ok:{msg:'Os funcionários aceitaram as condições e a greve acabou rápido.'}, mal:{msg:'O conflito se agravou, os jogos se complicaram e a imprensa apontou o dedo para você.'}},
  ] },

'est_med_clima': { titulo:'Temporal sobre o estádio',
  contexto:'Um temporal deixou {DANIO} logo antes de um jogo decisivo. É preciso decidir rápido.',
  variables:{ DANIO:['o gramado alagado','parte da cobertura da arquibancada danificada','os vestiários inundados','o campo coberto de lama'] },
  opciones:[
    {texto:'Reparar com urgência', sub:'Caro, mas seguro', msg:'Você consertou contra o relógio: o jogo foi disputado normalmente.'},
    {texto:'Suspender e remarcar', sub:'Economia, calendário apertado', msg:'Você suspendeu o jogo: a liga remarcou para uma data inconveniente.'},
    {texto:'Jogar assim mesmo nessas condições', sub:'Epopeia ou vexame', ok:{msg:'Jogaram na lama com garra e a torcida viveu uma noite épica.'}, mal:{msg:'O jogo foi um desastre na lama e até houve um lesionado.'}},
  ] },

'est_med_receso': { titulo:'Recesso de meio de ano',
  contexto:'No recesso, {SITUACION}. É preciso definir como usar o tempo.',
  variables:{ SITUACION:['o elenco pede férias longas','o treinador quer uma concentração','vários jogadores estão mal fisicamente','os reservas cobram minutos'] },
  opciones:[
    {texto:'Dar férias', sub:'Cabeça descansada, ritmo perdido', msg:'O elenco descansou, mas voltou sem ritmo.'},
    {texto:'Concentração intensiva', sub:'Ritmo alto, moral baixo', msg:'A concentração deixou o time afiado e de mau humor.'},
    {texto:'Misto com quatro dias de folga', sub:'Um pouco de cada coisa', msg:'O equilíbrio foi bem recebido: todos satisfeitos e ninguém eufórico.'},
  ] },

'est_med_encuesta': { titulo:'Pesquisa com os sócios',
  contexto:'O conselho fez uma pesquisa de meio de ano e {RESULTADO_ENC}. Pedem uma resposta.',
  variables:{ RESULTADO_ENC:['a maioria pede mais reforços','muitos cobram melhores serviços no estádio','boa parte questiona os preços','vários pedem mais proximidade com o dirigente'] },
  opciones:[
    {texto:'Responder com medidas concretas', sub:'Custa dinheiro, soma confiança', msg:'Você anunciou medidas concretas: os sócios sentiram que foram ouvidos.'},
    {texto:'Fazer uma assembleia aberta', sub:'De graça, mas expõe', msg:'A assembleia aberta foi tensa, mas deixou um bom clima.'},
    {texto:'Prometer mais do que se pode', sub:'Se cumprir, um sucesso; se não, uma bomba', ok:{msg:'As promessas empolgaram e foram cumpridas a tempo: euforia popular.'}, mal:{msg:'As promessas não foram cumpridas e a arquibancada deixou isso claro.'}},
  ] },

'est_cie_definicion': { titulo:'A última rodada define tudo',
  contexto:'Na última rodada, {CONDICION}. O elenco espera a sua mensagem.',
  variables:{ CONDICION:['você depende de um resultado alheio','você joga a classificação','você joga a permanência','você joga o prestígio do ano'] },
  opciones:[
    {texto:'Prometer bichos gordos', sub:'Motiva, custa dinheiro', msg:'Você prometeu bichos gordos e o elenco entrou em campo para morder.'},
    {texto:'Acalmar o elenco', sub:'Cabeça fria, sem dinheiro', msg:'Você pediu calma: o time jogou concentrado, sem grandes gestos.'},
    {texto:'Falar publicamente da decisão', sub:'Pressão extra, tudo ou nada', ok:{msg:'Suas palavras acenderam o time e a torcida: entraram para ganhar.'}, mal:{msg:'Suas palavras somaram uma pressão a mais e o time travou.'}},
  ] },

'est_cie_fiesta': { titulo:'Festa de fim de temporada',
  contexto:'A torcida propõe uma festa com {FORMATO} para encerrar o ano.',
  variables:{ FORMATO:['bateria e comida no estádio','um show de bandas locais','uma carreata pelo bairro','um churrasco popular na sede'] },
  opciones:[
    {texto:'Organizar em grande estilo', sub:'Clima de festa, gasto forte', msg:'A festa foi um sucesso absoluto e todos foram embora contentes.'},
    {texto:'Apoiar sem gastar', sub:'A torcida se encarrega', msg:'Você apoiou a ideia e a torcida organizou por conta própria.'},
    {texto:'Recusar por causa da situação', sub:'Prudência, frieza', msg:'Você recusou: economizou, mas a arquibancada ficou com gosto de pouco.'},
  ] },

'est_cie_premios': { titulo:'Prêmio de melhor jogador do ano',
  contexto:'Tudo indica que {JUGADOR} ({JPOS}, nível {JRATING}) é o melhor do ano. A cerimônia será {FORMATO} e é preciso decidir como conduzi-la.',
  variables:{ FORMATO:['ao vivo no rádio','num jantar de gala','nas redes do clube'] },
  opciones:[
    {texto:'Premiar só ele', sub:'Reconhecimento claro, ciúmes no vestiário', msg:'{JUGADOR} recebeu o prêmio com orgulho; algum companheiro fez que não viu.'},
    {texto:'Premiar o elenco inteiro', sub:'Vestiário unido, menos brilho na mídia', msg:'Você premiou o elenco inteiro: ninguém se sentiu menos, embora a imprensa quisesse um nome.'},
    {texto:'Sem cerimônia', sub:'Zero gasto, zero clima', msg:'Você passou o ano sem cerimônia: o assunto ficou rondando os corredores.'},
  ] },

'est_cie_contrato': { titulo:'O contrato de {JUGADOR} está vencendo',
  contexto:'O contrato de {JUGADOR} ({JPOS}, {JEDAD} anos) vence e {SITUACION}. O empresário espera uma resposta antes do fechamento.',
  variables:{ SITUACION:['ele pede um aumento importante','ele tem propostas de outros clubes','ele quer garantir a titularidade','ele diz que ama o clube, mas precisa de dinheiro'] },
  opciones:[
    {texto:'Renovar com aumento', sub:'Você o segura, o caixa paga', msg:'Você renovou com {JUGADOR}: o vestiário comemorou e a tesouraria fez as contas.'},
    {texto:'Renovar por um ano', sub:'Meio-termo', msg:'Mais um ano para {JUGADOR}: ninguém se irritou, ninguém se animou.'},
    {texto:'Deixá-lo sair de graça', sub:'Economia, perda de peso', msg:'{JUGADOR} saiu de graça: você economizou, mas a torcida chorou.'},
  ] },

'est_cie_auditoria': { titulo:'Auditoria de fim de ano',
  contexto:'A liga audita as contas de todos os clubes no fim do ano e {ASUNTO}. É hora de decidir como responder.',
  variables:{ ASUNTO:['pede a documentação dos últimos seis meses','investiga pagamentos a intermediários','revisa a licença do estádio','exige regularizar dívidas trabalhistas'] },
  opciones:[
    {texto:'Colaborar e entregar tudo', sub:'Ordem e dinheiro', msg:'Você entregou tudo no prazo e do jeito certo: a liga valorizou.'},
    {texto:'Entregar só o necessário', sub:'Menos trabalho, algum risco', ok:{msg:'A liga aceitou o que foi entregue e tudo passou sem sustos.'}, mal:{msg:'A liga pediu mais, aplicou uma multa e a imprensa noticiou.'}},
    {texto:'Contratar uma consultoria externa', sub:'Caro, mas organiza', msg:'A consultoria organizou as contas: caro, mas caprichado.'},
  ] },

'est_cie_proyecto': { titulo:'Planejar o ano que vem',
  contexto:'No fim do ano, o conselho quer saber {PREGUNTA}. É preciso mostrar um plano.',
  variables:{ PREGUNTA:['qual é o projeto esportivo','como será financiado o próximo semestre','o que será feito com a base','se a aposta é em reforços ou nos garotos da base'] },
  opciones:[
    {texto:'Apostar forte em reforços', sub:'Resultados rápidos, risco financeiro', msg:'Você anunciou uma aposta forte: os sócios se empolgaram.'},
    {texto:'Apostar na base', sub:'Projeto longo, menos gasto', msg:'Você apostou na base: os mais jovens sorriem, os impacientes não.'},
    {texto:'Economizar e estabilizar', sub:'Prudência financeira', msg:'Você anunciou um plano de economia: tranquilidade nas contas, pouco entusiasmo.'},
  ] },

'cla_semana': { titulo:'Semana de clássico contra {RIVAL}',
  contexto:'A cidade está dividida e {AMBIENTE}. Todos esperam um gesto seu antes da partida.',
  variables:{ AMBIENTE:['as gozações chegam até o trabalho','as crianças vão à escola com a camisa do time','os bares estão cheios de palpites','a imprensa não fala de outra coisa'] },
  opciones:[
    {texto:'Concentrar o elenco o fim de semana todo', sub:'Foco total, moral baixo', msg:'Você concentrou o elenco: o time chegou focado, embora louco para sair.'},
    {texto:'Convocar a torcida para incentivar', sub:'Clima de festa, algum risco de excessos', msg:'A torcida respondeu com uma grande mobilização de apoio.'},
    {texto:'Provocar o rival na imprensa', sub:'Acende o pavio, tudo ou nada', ok:{msg:'Suas declarações acenderam o pavio e o time entrou com raiva.'}, mal:{msg:'Suas declarações viraram contra você e o rival usou tudo para se motivar.'}},
  ] },

'cla_barras': { titulo:'Ameaças antes do clássico',
  contexto:'Antes do clássico contra {RIVAL}, um setor da torcida ameaça {AMENAZA}. A segurança pede uma definição.',
  variables:{ AMENAZA:['não entrar se não receberem bandeiras','fazer uma recepção ao time sem autorização','tomar o setor dos visitantes','cruzar os braços se não vierem reforços'] },
  opciones:[
    {texto:'Dialogar e chegar a um acordo', sub:'Calma com custo', msg:'Você conversou com os líderes e a situação se acalmou.'},
    {texto:'Pedir reforço policial', sub:'Ordem com má imagem', msg:'O reforço policial garantiu a ordem, embora a imagem do clube tenha sofrido.'},
    {texto:'Ignorar as ameaças', sub:'Se nada acontecer, você ganhou; se acontecer, complica', ok:{msg:'As ameaças deram em nada e o clássico transcorreu em paz.'}, mal:{msg:'Houve incidentes no clássico e o clube foi punido.'}},
  ] },

'cla_prensa': { titulo:'A imprensa esquenta o clássico',
  contexto:'A imprensa monta um programa especial sobre o clássico com {TITULAR_PRENSA}. Querem ouvir você.',
  variables:{ TITULAR_PRENSA:['frases picantes do rival','um resgate da rivalidade histórica','dúvidas sobre o seu elenco','o favoritismo do rival'] },
  opciones:[
    {texto:'Falar com calma', sub:'Imagem sólida, pouco show', msg:'Você falou com calma e reforçou a sua imagem institucional.'},
    {texto:'Responder com firmeza', sub:'Marca território, pode sair caro', ok:{msg:'Suas respostas viralizaram e a torcida aplaudiu de pé.'}, mal:{msg:'Suas respostas foram mal interpretadas e a imprensa criticou você.'}},
    {texto:'Não dar entrevistas', sub:'Evita risco, perde protagonismo', msg:'Você não deu entrevistas: outros ocuparam o espaço e a imprensa cobrou.'},
  ] },

'cla_arbitro': { titulo:'Trio de arbitragem polêmico para o clássico',
  contexto:'Foi escalado o trio de arbitragem para o clássico contra {RIVAL} e {POLEMICA}. Há pressão para reagir.',
  variables:{ POLEMICA:['um dos árbitros tem um antecedente com o seu clube','a torcida rival comemora','a escalação saiu tarde','há dúvidas sobre um vínculo anterior'] },
  opciones:[
    {texto:'Pedir formalmente a troca', sub:'Reclamação institucional, barulho político', msg:'Você apresentou o pedido: a liga rejeitou, mas ficou registrado.'},
    {texto:'Aceitar a escalação', sub:'Prudência e confiança', msg:'Você aceitou e evitou uma frente desnecessária: o clássico foi jogado em calma.'},
    {texto:'Vazar a polêmica para a imprensa', sub:'Pressão da mídia, risco de punição', ok:{msg:'A pressão funcionou: a liga tomou cuidado com a escalação.'}, mal:{msg:'A liga viu como manobra e você recebeu uma advertência pública.'}},
  ] },

'cla_v_revancha': { titulo:'Revanche contra {RIVAL}',
  contexto:'Chega a revanche contra {RIVAL}, {ANTECEDENTE}. A torcida quer sentir que dá.',
  variables:{ ANTECEDENTE:['com tudo em jogo na tabela','com a imprensa dividida','com vontade de acertar uma conta pendente','com os dois times pedindo respeito'] },
  opciones:[
    {texto:'Entrar para ganhar desde o primeiro minuto', sub:'Coragem, tudo ou nada', ok:{msg:'O time entrou mordendo e levou um clássico memorável.'}, mal:{msg:'O time se desorganizou e o rival castigou com clareza.'}},
    {texto:'Jogo fechado e no contra-ataque', sub:'Cálculo antes da epopeia', msg:'Um jogo fechado: nem glória nem drama, mas somou pontos.'},
    {texto:'Prometer um bicho especial', sub:'Motivação com custo', msg:'Você prometeu um bicho: o time entrou com outra cara e o caixa sentiu.'},
  ] },

'cla_v_entradas': { titulo:'O preço dos ingressos do clássico',
  contexto:'Para a revanche contra {RIVAL} há {DEMANDA}. É preciso definir o preço e a distribuição.',
  variables:{ DEMANDA:['uma demanda que triplica a capacidade','cambistas na porta','uma fila de espera de sócios','pedidos de ingresso de graça de todo lado'] },
  opciones:[
    {texto:'Preço popular', sub:'A galera agradece, o caixa não', msg:'Você manteve o preço popular: a torcida agradeceu com aplausos.'},
    {texto:'Preço de clássico', sub:'Mais caixa, menos simpatia', msg:'Você cobrou preço de clássico: encheu o caixa e levou críticas nas redes.'},
    {texto:'Sorteio entre os sócios', sub:'Justo, mas gera reclamações', ok:{msg:'O sorteio foi transparente e todos valorizaram.'}, mal:{msg:'O sorteio gerou dúvidas e vários sócios reclamaram.'}},
  ] },

'cla_v_homenaje': { titulo:'Homenagem às glórias do clube',
  contexto:'Antes da revanche contra {RIVAL} propõe-se uma homenagem. Os homenageados: {GLORIAS}. É emocionante, mas consome tempo de preparação.',
  variables:{ GLORIAS:['os campeões de uma década de ouro','um ídolo histórico que acaba de falecer','o time do acesso','os fundadores da instituição'] },
  opciones:[
    {texto:'Fazer antes da partida', sub:'Emoção garantida, alguma distração', msg:'A homenagem emocionou o estádio inteiro; o elenco entrou meio distraído.'},
    {texto:'Fazer depois', sub:'Sem distrações, menos clima', msg:'A homenagem foi no fim e o time não perdeu o foco.'},
    {texto:'Adiar para outra rodada', sub:'Evita riscos, perde uma oportunidade', msg:'Você adiou a homenagem: alguns entenderam, outros se ofenderam.'},
  ] },

'pais_sa_barrio': { titulo:'As escolinhas do bairro pedem o campo',
  contexto:'As escolinhas de futebol infantil {ZONA} pedem para usar o campo auxiliar {FRECUENCIA}. Os pais já juntaram assinaturas.',
  variables:{ ZONA:['da zona sul','do bairro vizinho','da periferia','da cidade ao lado'],
              FRECUENCIA:['todo sábado','duas vezes por semana','nas férias de julho'] },
  opciones:[
    {texto:'Abrir o campo de graça', sub:'Base e carinho, desgaste do gramado', msg:'Você abriu o campo: as crianças felizes e o jardineiro, nem tanto.'},
    {texto:'Cobrar um aluguel simbólico', sub:'Todos ganham um pouco', msg:'Você colocou um aluguel simbólico: as famílias aceitaram e entrou um caixa extra.'},
    {texto:'Dizer não por causa do estado do gramado', sub:'Cuida do gramado, perde simpatia', msg:'Você disse não: o gramado está intacto, mas o bairro não perdoa.'},
  ] },

'pais_sa_altura': { titulo:'Jogo a mais de {METROS} metros de altitude',
  contexto:'A próxima rodada é disputada numa cidade de grande altitude. A comissão técnica propõe {PLAN}.',
  variables:{ METROS:['2.600','3.000','3.600'],
              PLAN:['chegar com uma semana de antecedência','chegar na véspera e confiar no físico','somar um trabalho de adaptação em câmara hipobárica'] },
  opciones:[
    {texto:'Viajar com uma semana de antecedência', sub:'Melhor adaptação, mais gasto', msg:'Chegaram cedo e o time se adaptou bem à altitude.'},
    {texto:'Viajar na véspera', sub:'Economia, sofrimento físico', msg:'Chegaram em cima da hora e o time sofreu com o ritmo no segundo tempo.'},
    {texto:'Contratar adaptação em câmara especial', sub:'Caro, o efeito não é garantido', ok:{msg:'A preparação especial funcionou: o time correu como se nada fosse.'}, mal:{msg:'O investimento não deu os frutos esperados e o gasto ficou no ar.'}},
  ] },

'pais_sa_rutas': { titulo:'Viagem longuíssima por estrada',
  contexto:'O próximo jogo fora de casa implica {VIAJE}. É preciso decidir o transporte do elenco.',
  variables:{ VIAJE:['uma viagem de 18 horas de ônibus','um voo com uma escala longa','um trajeto por estradas em mau estado'] },
  opciones:[
    {texto:'Contratar um ônibus-leito', sub:'Conforto, gasto forte', msg:'O elenco viajou confortável e chegou descansado.'},
    {texto:'Viajar no ônibus do clube', sub:'Economia, cansaço', msg:'O elenco viajou cansado e isso se nota no primeiro tempo.'},
    {texto:'Pedir ao clube local que ajude com o translado', sub:'Cortesia em troca de um favor', ok:{msg:'O clube local colaborou: você economizou e ganhou um amigo.'}, mal:{msg:'O clube local se fez de rogado e você acabou pagando mais do que o previsto.'}},
  ] },

'pais_hi_patronal': { titulo:'A festa do padroeiro cai na semana do jogo',
  contexto:'Neste ano a festa do padroeiro coincide com {SITUACION}. A cidade quer que o clube participe.',
  variables:{ SITUACION:['o jogo mais importante da rodada','a apresentação de um reforço','o aniversário do clube','a semana de treinos decisiva'] },
  opciones:[
    {texto:'Entrar na festa', sub:'Imagem próxima, elenco disperso', msg:'Participaram da festa: o bairro feliz e o treinador de cara fechada.'},
    {texto:'Mandar uma delegação', sub:'Presença sem distrair', msg:'Você mandou uma delegação: o clube marcou presença sem descuidar do trabalho.'},
    {texto:'Faltar por causa do jogo', sub:'Foco no esportivo', msg:'Você faltou à festa: o bairro percebeu, mas o time ficou focado.'},
  ] },

'pais_br_carnaval': { titulo:'O Carnaval cai na semana do jogo',
  contexto:'O Carnaval cai bem na semana de um jogo importante e {SITUACION}.',
  variables:{ SITUACION:['vários jogadores querem participar dos desfiles','uma escola de samba convida o elenco','a cidade inteira está na rua','a imprensa pergunta se o time vai se concentrar'] },
  opciones:[
    {texto:'Concentrar o elenco', sub:'Foco total, alguma irritação', msg:'Você concentrou o elenco: o time chegou focado, embora de cara amarrada.'},
    {texto:'Participar de um desfile do clube', sub:'Festa e imagem, risco físico', msg:'O clube desfilou e levou um aplauso imenso na avenida.'},
    {texto:'Dar liberdade ao elenco', sub:'Confiar na maturidade', ok:{msg:'O elenco respondeu com profissionalismo e curtiu o Carnaval sem excessos.'}, mal:{msg:'Houve excessos e o time chegou mal ao jogo.'}},
  ] },

'pais_ec_invierno': { titulo:'Neve e neblina antes do jogo',
  contexto:'Uma onda de {CLIMA} complica o jogo da rodada. A liga diz que {POSTURA}.',
  variables:{ CLIMA:['neve','neblina espessa','frio polar','gelo nas ruas'],
              POSTURA:['não suspende por enquanto','estuda remarcar','deixa a decisão nas mãos dos clubes'] },
  opciones:[
    {texto:'Pedir o adiamento', sub:'Segurança, calendário apertado', msg:'O adiamento foi aprovado, embora o calendário tenha ficado incômodo.'},
    {texto:'Jogar com aquecimento e cuidado', sub:'Gasto para arrumar o campo', msg:'Jogou-se com o campo preparado: sem reclamação nem glória.'},
    {texto:'Jogar assim mesmo e apostar no clima', sub:'Epopeia ou lesões', ok:{msg:'O time se adaptou melhor que o rival: vitória com sabor de epopeia.'}, mal:{msg:'Houve escorregões, lesionados e um resultado que você prefere esquecer.'}},
  ] },

'pais_ec_ultras': { titulo:'A torcida organizada quer um grande mosaico',
  contexto:'Os grupos de torcedores preparam um grande mosaico para {OCASION} e pedem {PEDIDO}.',
  variables:{ OCASION:['o próximo jogo em casa','o clássico local','o aniversário do clube'],
              PEDIDO:['permissão para entrar com materiais','um espaço para montá-lo','dinheiro para tecidos e tinta'] },
  opciones:[
    {texto:'Apoiar o projeto', sub:'Imagem espetacular, algum risco', msg:'O mosaico foi um espetáculo e as câmeras repetiram a semana toda.'},
    {texto:'Aprovar com condições', sub:'Com controle de segurança', msg:'Você aprovou com condições: o mosaico saiu bem, sem grandes surpresas.'},
    {texto:'Recusar por segurança', sub:'Prudência, tensão com a arquibancada', msg:'Você recusou o pedido: a arquibancada se irritou e houve vaias.'},
  ] },

'pais_ec_fairplay': { titulo:'A liga exige acertar as contas',
  contexto:'A liga avisa que o clube deve {EXIGENCIA} ou receberá {SANCION}.',
  variables:{ EXIGENCIA:['reduzir a folha salarial','equilibrar receitas e despesas','apresentar um plano de pagamento','reforçar o capital'],
              SANCION:['uma punição esportiva','uma multa','restrições no mercado'] },
  opciones:[
    {texto:'Cortar gastos imediatamente', sub:'Você cumpre, o elenco sente', msg:'Você cortou os gastos: a liga ficou satisfeita e o vestiário nem tanto.'},
    {texto:'Apresentar um plano de dois anos', sub:'Ganha tempo, a liga desconfia', msg:'Você apresentou um plano de dois anos: a liga aceitou com ressalvas.'},
    {texto:'Pedir uma exceção', sub:'Pode ser uma grande jogada', ok:{msg:'A liga aceitou a exceção por esta vez: você respirou fundo.'}, mal:{msg:'A liga recusou a exceção e aplicou a punição.'}},
  ] },

'pais_ec_academia': { titulo:'Uma academia de elite quer {JUGADOR}',
  contexto:'A academia de um clube grande propõe um convênio por {JUGADOR} ({JPOS}, {JEDAD} anos): {OFERTA}. O garoto sonha em ir.',
  variables:{ OFERTA:['pagamento imediato e um percentual futuro','só um percentual futuro','um empréstimo com opção de compra'] },
  opciones:[
    {texto:'Aceitar o convênio', sub:'Dinheiro e projeção, adeus à promessa', msg:'{JUGADOR} foi para a academia: o clube recebeu e a arquibancada se despediu.'},
    {texto:'Recusar e segurar o garoto', sub:'Base e orgulho', msg:'Você recusou e {JUGADOR} ficou: os torcedores o ovacionam.'},
    {texto:'Pedir uma oferta melhor', sub:'Se der certo, perfeito', ok:{msg:'A academia melhorou a oferta: negócio redondo e a promessa com bom futuro.'}, mal:{msg:'A academia se ofendeu e retirou a oferta: sem garoto e sem dinheiro.'}},
  ] },

'pais_gb_copa': { titulo:'Sorteio da copa contra um clube amador',
  contexto:'A copa nacional sorteia você contra um clube amador de {LUGAR}. {PRESION}.',
  variables:{ LUGAR:['uma vila litorânea','uma cidade mineradora','um bairro operário','uma cidadezinha com uma igreja em cada esquina'],
              PRESION:['A imprensa espera uma goleada','O rival joga como se fosse uma final','A torcida local lotou as ruas'] },
  opciones:[
    {texto:'Jogar com o time titular', sub:'Respeito, desgaste', msg:'Você entrou com tudo e ganhou sem sofrer demais.'},
    {texto:'Rodar o elenco e dar descanso', sub:'Arrisca a eliminação', msg:'Você rodou o elenco e o jogo complicou mais do que o previsto.'},
    {texto:'Mandar os garotos da base', sub:'Imagem de base, risco de vexame', ok:{msg:'Os garotos brilharam e a imprensa os destacou: golpe de efeito.'}, mal:{msg:'Os garotos se assustaram: vexame e críticas ferozes.'}},
  ] },

'pais_ee_receso': { titulo:'Recesso de inverno longuíssimo',
  contexto:'A liga para por causa do frio durante {DURACION}. A comissão técnica propõe {PLAN}.',
  variables:{ DURACION:['três meses','quase quatro meses','um inverno inteiro'],
              PLAN:['uma excursão a um país quente','treinar num ginásio fechado','partir para um torneio local de pré-temporada'] },
  opciones:[
    {texto:'Fazer a excursão ao calor', sub:'Gasto alto, preparação ideal', msg:'A excursão ao calor manteve o ritmo do time.'},
    {texto:'Treinar no ginásio fechado', sub:'Economia, ritmo baixo', msg:'Treinaram debaixo de teto: o time voltou meio destreinado.'},
    {texto:'Montar um torneio local entre clubes', sub:'Barato e divertido, se der certo', ok:{msg:'O torneio local foi um sucesso e manteve o time no ritmo.'}, mal:{msg:'O torneio foi mal organizado e acabou num desastre logístico.'}},
  ] },

'pais_ee_estadio': { titulo:'O estádio municipal vai ser compartilhado',
  contexto:'A prefeitura quer que {OTRO} compartilhe o estádio do clube. Diz que é para {RAZON}.',
  variables:{ OTRO:['um time de rúgbi','um clube da segunda divisão','uma federação de atletismo'],
              RAZON:['aproveitar melhor o investimento público','baratear a manutenção','somar atividade ao bairro'] },
  opciones:[
    {texto:'Aceitar o uso compartilhado', sub:'Receita, menos exclusividade', msg:'Você aceitou compartilhar o estádio: entrou dinheiro, mas o gramado sofre.'},
    {texto:'Negociar horários exclusivos', sub:'Equilíbrio, mais burocracia', msg:'Você negociou horários e a prefeitura ficou satisfeita.'},
    {texto:'Recusar o pedido', sub:'Orgulho, briga política', msg:'Você recusou: o clube se sente dono da própria casa, mas a prefeitura franze a testa.'},
  ] },

'pais_ee_mecenas': { titulo:'Um mecenas local se oferece para financiar o clube',
  contexto:'Um empresário da região se oferece para {OFERTA} em troca de ter {CONDICION}.',
  variables:{ OFERTA:['pagar seis meses de salários','construir uma nova arquibancada','financiar a base'],
              CONDICION:['uma cadeira na diretoria','o nome no estádio','a palavra final nas contratações'] },
  opciones:[
    {texto:'Aceitar sem condições', sub:'Dinheiro imediato, influência alheia', msg:'Você aceitou a oferta: o clube respira, mas o mecenas já liga para o treinador.'},
    {texto:'Aceitar com limites por escrito', sub:'Mais lento, mais seguro', msg:'Você colocou limites por escrito: o mecenas aceitou de cara feia.'},
    {texto:'Recusar para manter a independência', sub:'Orgulho, caixa vazio', msg:'Você recusou: a torcida comemorou a independência, o caixa não.'},
  ] },

'pais_me_ayuno': { titulo:'O mês de jejum muda os horários',
  contexto:'Durante o mês de jejum, {SITUACION}. É preciso reorganizar treinos e jogos.',
  variables:{ SITUACION:['muitos jogadores treinam em jejum','os jogos são disputados bem tarde da noite','o elenco pede para ajustar as cargas','a liga muda o calendário'] },
  opciones:[
    {texto:'Treinar à noite', sub:'Você respeita a tradição, a rotina muda', msg:'Você passou os treinos para a noite: o elenco valorizou muito.'},
    {texto:'Reduzir a carga física', sub:'Cuidado com o elenco, menos ritmo', msg:'Você reduziu a carga: o elenco chegou inteiro, mas meio devagar.'},
    {texto:'Manter o plano habitual', sub:'Eficiência, desgaste', msg:'Você manteve o plano habitual: houve reclamações e alguma queda de rendimento.'},
  ] },

'pais_me_calor': { titulo:'Calor extremo no jogo da tarde',
  contexto:'A previsão marca {TEMP} para o jogo da tarde. O árbitro diz que {POSTURA}.',
  variables:{ TEMP:['mais de 42 graus','uma sensação térmica insuportável','uma onda de calor de vários dias'],
              POSTURA:['haverá pausas para hidratação','o jogo poderia ser remarcado','a decisão é dos clubes'] },
  opciones:[
    {texto:'Pedir para passar o jogo para a noite', sub:'Segurança, reclamação da liga', msg:'Você conseguiu passar o jogo para a noite: o time rendeu muito melhor.'},
    {texto:'Jogar com hidratação e rodízio', sub:'Gasto, risco moderado', msg:'Jogou-se com pausas para hidratação e tudo se resolveu sem problemas.'},
    {texto:'Jogar sem mudanças', sub:'Epopeia ou desastre físico', ok:{msg:'O time aguentou melhor o calor: vitória heroica.'}, mal:{msg:'Houve desmaios e um jogo para esquecer.'}},
  ] },

'pais_me_familias': { titulo:'Mais famílias na arquibancada',
  contexto:'Os sócios pedem para criar {ESPACIO} para ir com {QUIENES}. É preciso ajustar a segurança.',
  variables:{ ESPACIO:['um setor familiar','um setor com brinquedos para crianças','uma arquibancada com sombra'],
              QUIENES:['as crianças','a família toda','as vovós'] },
  opciones:[
    {texto:'Construir já', sub:'Mais público, mais gasto', msg:'O setor familiar lotou desde o primeiro jogo.'},
    {texto:'Reservar uma parte existente', sub:'Rápido e barato', msg:'Você reservou uma parte: a resposta das famílias foi positiva.'},
    {texto:'Adiar', sub:'Economia, frustração', msg:'Você adiou o projeto: as famílias esperam com paciência limitada.'},
  ] },

'pais_af_viaje': { titulo:'Viagens longas entre cidades',
  contexto:'O calendário traz uma viagem de {DISTANCIA} para o próximo jogo. {NOTA}.',
  variables:{ DISTANCIA:['1.500 quilômetros','mais de 20 horas de estrada','um voo com duas escalas'],
              NOTA:['O dinheiro não dá para tudo','O treinador se preocupa com o cansaço','O elenco quer viajar de avião'] },
  opciones:[
    {texto:'Contratar um voo', sub:'Rápido, gasto alto', msg:'O elenco chegou inteiro e o time aproveitou.'},
    {texto:'Viajar por estrada com paradas', sub:'Economia, cansaço', msg:'Viajaram por estrada: chegaram cansados, mas a tempo.'},
    {texto:'Buscar um patrocinador para a viagem', sub:'Se der certo, perfeito', ok:{msg:'O patrocinador pagou a viagem e ainda saiu na imprensa.'}, mal:{msg:'O patrocinador desistiu em cima da hora e você teve que improvisar.'}},
  ] },

'pais_af_cesped': { titulo:'O campo está em mau estado',
  contexto:'O gramado do estádio tem {PROBLEMA}. O treinador diz que assim não dá para jogar bem.',
  variables:{ PROBLEMA:['buracos e áreas carecas','lama demais','irregularidades graves','irrigação deficiente'] },
  opciones:[
    {texto:'Investir num campo novo', sub:'Caro, mas definitivo', msg:'Você renovou o campo e o time joga muito melhor.'},
    {texto:'Reparos parciais', sub:'Rápido e barato', msg:'Os reparos parciais ajudaram, mas não resolveram tudo.'},
    {texto:'Adaptar o jogo ao campo', sub:'Sem gasto, menos futebol', msg:'Adaptaram o jogo ao campo: pouco vistoso, mas sem gastar.'},
  ] },

'pais_af_lluvias': { titulo:'A temporada de chuvas complica tudo',
  contexto:'As chuvas {EFECTO} e o calendário não perdoa.',
  variables:{ EFECTO:['alagam as vias de acesso','deixam o campo impraticável','atrasam os times visitantes','cortam o fornecimento de energia'] },
  opciones:[
    {texto:'Remarcar o jogo', sub:'Segurança, calendário complicado', msg:'Você remarcou o jogo: ninguém se molhou, mas o calendário complicou.'},
    {texto:'Montar uma drenagem de emergência', sub:'Gasto, jogo normal', msg:'A drenagem de emergência funcionou e o jogo foi disputado sem atrasos.'},
    {texto:'Jogar assim mesmo na lama', sub:'Epopeia ou lesões', ok:{msg:'O jogo na lama foi uma batalha heroica que você ganhou.'}, mal:{msg:'O jogo na lama foi um desastre.'}},
  ] },

'pais_af_ojeadores': { titulo:'Olheiros estrangeiros acompanham {JUGADOR}',
  contexto:'Olheiros de ligas europeias acompanham {JUGADOR} ({JPOS}, {JEDAD} anos). Um empresário quer {PROPUESTA}.',
  variables:{ PROPUESTA:['um teste imediato no exterior','um contrato com cláusula de saída','uma viagem à Europa nas férias'] },
  opciones:[
    {texto:'Aceitar o teste', sub:'Oportunidade para ele, risco para você', msg:'{JUGADOR} viajou para fazer o teste e o clube recebeu uma compensação.'},
    {texto:'Pedir que espere uma temporada', sub:'Estabilidade, ele se frustra', msg:'{JUGADOR} ficou mais uma temporada e rendeu em campo.'},
    {texto:'Fechar um convênio com o clube interessado', sub:'Negócio redondo ou rompimento', ok:{msg:'O convênio foi fechado e o clube recebeu uma boa quantia.'}, mal:{msg:'O convênio caiu e {JUGADOR} ficou chateado.'}},
  ] },

'pais_af_radio': { titulo:'A rádio comunitária transmite todos os jogos',
  contexto:'Uma rádio comunitária {ZONA} transmite todos os jogos do clube e pede {PEDIDO}.',
  variables:{ ZONA:['da região','do seu bairro','da cidade vizinha'],
              PEDIDO:['uma entrevista semanal','acesso ao vestiário','ajuda com o transmissor'] },
  opciones:[
    {texto:'Dar todo o acesso', sub:'Torcida engajada, menos privacidade', msg:'A rádio virou a voz do clube e o povo agradeceu.'},
    {texto:'Dar uma entrevista semanal', sub:'Equilíbrio simples', msg:'Você montou uma entrevista semanal: todo mundo contente.'},
    {texto:'Recusar por falta de tempo', sub:'Evita distração, perde carinho', msg:'Você recusou: a rádio continuou transmitindo, mas sem a sua simpatia.'},
  ] },

'pais_ao_datos': { titulo:'Análise de dados e aplicativo para torcedores',
  contexto:'Uma empresa de tecnologia oferece {SERVICIO}. Quer {CONTRAPARTIDA}.',
  variables:{ SERVICIO:['um sistema de análise de dados do elenco','um aplicativo oficial para os torcedores','câmeras e estatísticas avançadas'],
              CONTRAPARTIDA:['acesso aos dados dos torcedores','publicidade no estádio','exclusividade por três anos'] },
  opciones:[
    {texto:'Aceitar o acordo completo', sub:'Modernidade, dependência', msg:'O acordo modernizou o clube e melhorou o rendimento da comissão técnica.'},
    {texto:'Pedir mudanças nas condições', sub:'Mais lento, mais seguro', msg:'Você pediu mudanças: o acordo saiu mais justo.'},
    {texto:'Recusar por privacidade', sub:'Prudência, menos recursos', msg:'Você recusou o acordo para proteger os dados dos torcedores.'},
  ] },

'pais_ao_cantos': { titulo:'A torcida organiza coreografias',
  contexto:'Os grupos de torcedores preparam {COREO} para o próximo jogo e pedem {PEDIDO}.',
  variables:{ COREO:['uma coreografia de mosaicos','cantos sincronizados do estádio inteiro','uma exibição de bandeiras'],
              PEDIDO:['ensaiar no estádio','um setor inteiro','autorização para filmar'] },
  opciones:[
    {texto:'Apoiar com tudo', sub:'Grande imagem, gasto', msg:'A coreografia foi um sucesso e rodou as redes.'},
    {texto:'Permitir os ensaios', sub:'Apoio moderado', msg:'Os ensaios aconteceram e o resultado ficou caprichado.'},
    {texto:'Pedir que simplifiquem', sub:'Menos risco, menos magia', msg:'Você pediu para simplificar: a coreografia saiu mais modesta.'},
  ] },

'pais_as_otro_deporte': { titulo:'O público está indo para outro esporte',
  contexto:'Outro esporte muito popular disputa os mesmos horários e {PROBLEMA}. Os sócios querem uma resposta.',
  variables:{ PROBLEMA:['levou boa parte do público','monopoliza a imprensa','tem mais patrocinadores','tem mais estrelas'] },
  opciones:[
    {texto:'Mudar o horário dos jogos', sub:'Evita competir, ajuste logístico', msg:'Você mudou os horários: o público voltou à arquibancada.'},
    {texto:'Lançar uma campanha de sócios', sub:'Gasto, bom retorno', msg:'A campanha de sócios teve boa resposta.'},
    {texto:'Aceitar que existe concorrência', sub:'Calma, resignação', msg:'Você aceitou que existe concorrência: não houve mudanças.'},
  ] },

'pais_as_monzon': { titulo:'A monção coloca o jogo em dúvida',
  contexto:'As chuvas da monção {EFECTO}. A liga diz que {POSTURA}.',
  variables:{ EFECTO:['alagam os arredores do estádio','deixam o campo encharcado','afetam o transporte público'],
              POSTURA:['o jogo acontece, salvo emergência','a decisão sai no dia da partida','vai avaliar com os clubes'] },
  opciones:[
    {texto:'Pedir para remarcar', sub:'Segurança, calendário', msg:'Você conseguiu remarcar o jogo: os torcedores chegaram tranquilos.'},
    {texto:'Investir numa drenagem de urgência', sub:'Gasto e continuidade', msg:'A drenagem permitiu jogar normalmente.'},
    {texto:'Jogar assim mesmo', sub:'Epopeia ou caos', ok:{msg:'O jogo debaixo de chuva foi uma festa.'}, mal:{msg:'O jogo foi um caos, com lesões e reclamações.'}},
  ] },

'pais_sea_calor': { titulo:'Calor e umidade ao meio-dia',
  contexto:'O jogo será disputado ao meio-dia com {CONDICION}. A comissão técnica propõe {PLAN}.',
  variables:{ CONDICION:['calor e umidade extremos','uma sensação térmica altíssima','umidade de 90%'],
              PLAN:['mudar o sistema de jogo','mais rodízios','hidratação e coletes refrigerantes'] },
  opciones:[
    {texto:'Pedir para passar o jogo para a tarde', sub:'Clima melhor, reclamação da TV', msg:'Você conseguiu passar o jogo para a tarde: o time rendeu muito melhor.'},
    {texto:'Adaptar o plano com coletes e rodízio', sub:'Gasto controlado', msg:'O plano de hidratação funcionou e evitou o desgaste.'},
    {texto:'Jogar com o plano habitual', sub:'Economia, exaustão', msg:'O time se esgotou no segundo tempo.'},
  ] },

'pais_na_distancias': { titulo:'Os voos do calendário devoram o orçamento',
  contexto:'O calendário traz {VIAJES} e o caixa já está sentindo.',
  variables:{ VIAJES:['três viagens longas em um mês','um voo atravessando o continente','viagens com mudança de fuso horário'] },
  opciones:[
    {texto:'Contratar voos diretos', sub:'Conforto, gasto', msg:'Viajaram confortáveis e o time rendeu.'},
    {texto:'Viajar em voos comerciais com escalas', sub:'Economia, cansaço', msg:'Viajaram com escalas: chegaram cansados, mas você economizou.'},
    {texto:'Pedir à liga que agrupe as viagens', sub:'Se der certo, muita economia', ok:{msg:'A liga aceitou agrupar as viagens: economia e descanso.'}, mal:{msg:'A liga recusou o pedido e você ficou com os voos caros.'}},
  ] },

'pais_na_becas': { titulo:'Uma universidade quer {JUGADOR}',
  contexto:'Uma universidade oferece uma bolsa integral a {JUGADOR} ({JPOS}, {JEDAD} anos) com {CONDICION}. A família está dividida.',
  variables:{ CONDICION:['um programa esportivo de primeiro nível','estudos gratuitos','uma boa comissão técnica'] },
  opciones:[
    {texto:'Apoiar a bolsa', sub:'Formação e estudos, adeus à promessa', msg:'{JUGADOR} aceitou a bolsa: o clube recebeu uma compensação e teve boa imprensa.'},
    {texto:'Pedir que assine com o clube', sub:'Você segura o garoto, ele perde a educação', msg:'{JUGADOR} ficou no clube: rende, embora a família não esteja totalmente feliz.'},
    {texto:'Montar um convênio de cessão', sub:'Equilíbrio entre os dois mundos', msg:'O convênio de cessão permite que {JUGADOR} estude e jogue.'},
  ] },

'pais_ca_huracan': { titulo:'Temporada de furacões',
  contexto:'Um furacão {AMENAZA}. O clube deve decidir como proteger estádio e elenco.',
  variables:{ AMENAZA:['se aproxima da ilha','ameaça o litoral','deixa a região em alerta vermelho'] },
  opciones:[
    {texto:'Suspender as atividades e proteger o estádio', sub:'Segurança, calendário', msg:'Você protegeu o estádio e o elenco: sem danos graves.'},
    {texto:'Treinar debaixo de teto e esperar', sub:'Normalidade com cuidado', msg:'Treinaram debaixo de teto enquanto o temporal passava.'},
    {texto:'Jogar a partida de portões fechados', sub:'Risco, chance de seguir em frente', ok:{msg:'Jogaram de portões fechados e a transmissão foi um sucesso.'}, mal:{msg:'O jogo teve problemas de segurança e danos.'}},
  ] },

'pais_na_inversor': { titulo:'Um investidor propõe transformar o jogo em espetáculo',
  contexto:'Um investidor propõe incluir {SHOW} no jogo em casa em troca de {COMPENSACION}.',
  variables:{ SHOW:['música ao vivo e shows no intervalo','atividades para crianças e comida','telões e sorteios'],
              COMPENSACION:['uma porcentagem da bilheteria','publicidade no campo','gerir a lanchonete'] },
  opciones:[
    {texto:'Aceitar o projeto', sub:'Mais público, menos tradição', msg:'Os jogos viraram um espetáculo: o estádio lotou.'},
    {texto:'Testar em um jogo', sub:'Teste sem risco', msg:'O teste funcionou e deixou uma grata surpresa.'},
    {texto:'Recusar por tradição', sub:'Você respeita os velhos torcedores', msg:'Você recusou o projeto: os torcedores de sempre comemoraram.'},
  ] },

'pais_an_pub': { titulo:'O bar da torcida precisa de reparos',
  contexto:'O bar onde se reúnem os torcedores de sempre {PROBLEMA}. Pedem ajuda do clube.',
  variables:{ PROBLEMA:['está para fechar','precisa de uma reforma','sofreu um incêndio','perdeu a licença'] },
  opciones:[
    {texto:'Ajudar com dinheiro', sub:'Gesto forte, gasto', msg:'Você ajudou com dinheiro e o bar ficou cheio de gratidão.'},
    {texto:'Oferecer um espaço no estádio', sub:'Ideia intermediária', msg:'Você deu um espaço no estádio: nem todos ficaram felizes.'},
    {texto:'Dizer que não há orçamento', sub:'Economia, irritação', msg:'Você disse que não há orçamento: os torcedores do bar se sentiram abandonados.'},
  ] },

});
/* Eventos 2 — traducción al portugués de Brasil (parte 2). */
EVENTOS_I18N.pt = Object.assign(EVENTOS_I18N.pt || {}, {

'pais_oc_distancias': { titulo:'Viagens intermináveis entre cidades e ilhas',
  contexto:'O calendário traz {VIAJE} e os custos disparam.',
  variables:{ VIAJE:['um voo de seis horas','uma viagem de balsa e avião','uma excursão por várias cidades','uma travessia pelo mar'] },
  opciones:[
    {texto:'Contratar voos fretados', sub:'Conforto, gasto forte', msg:'O voo fretado deixou o elenco inteiro.'},
    {texto:'Viajar em voos de carreira', sub:'Economia, cansaço', msg:'A viagem em voos de carreira esgotou o elenco.'},
    {texto:'Buscar um acordo com uma companhia aérea', sub:'Se der certo, grande benefício', ok:{msg:'A companhia aérea aceitou patrocinar as viagens: economia e publicidade.'}, mal:{msg:'A companhia aérea se fez de rogada e não houve acordo.'}},
  ] },

'pais_an_navidad': { titulo:'Calendário lotado nas festas de fim de ano',
  contexto:'Há jogos seguidos nas festas de fim de ano e {PROBLEMA}. O elenco pede um respiro.',
  variables:{ PROBLEMA:['os jogadores querem passar um tempo com a família','o físico não dá conta','o treinador quer concentrar','a torcida espera um presente'] },
  opciones:[
    {texto:'Dar folga no dia da festa', sub:'Elenco contente, ritmo cortado', msg:'O elenco passou a festa em casa e voltou agradecido.'},
    {texto:'Concentrar o elenco', sub:'Foco, tensão', msg:'Você concentrou o elenco: o time rendeu, mas de cara fechada.'},
    {texto:'Organizar um jantar com as famílias', sub:'Belo gesto, gasto', msg:'Você organizou um jantar com as famílias: o vestiário saiu fortalecido.'},
  ] },

'pais_geo_pesca': { titulo:'A cooperativa de pesca quer patrocinar',
  contexto:'A cooperativa de pesca {LUGAR} propõe {OFERTA}. É dinheiro local com carinho regional.',
  variables:{ LUGAR:['do litoral','do porto vizinho','da vila de pescadores'],
              OFERTA:['um contrato anual pela camisa','pagar as viagens','uma doação para a base'] },
  opciones:[
    {texto:'Aceitar com orgulho', sub:'Dinheiro local, menos brilho', msg:'A cooperativa virou a cara do clube: a cidade se encheu de orgulho.'},
    {texto:'Pedir uma oferta melhor a uma grande marca', sub:'Se der certo, mais dinheiro', msg:'Você esperou uma oferta melhor, mas não veio nada.'},
    {texto:'Aceitar e pedir exclusividade', sub:'Imagem, mas com risco', ok:{msg:'A cooperativa aceitou a exclusividade: bom negócio.'}, mal:{msg:'A cooperativa se ofendeu e reduziu o aporte.'}},
  ] },

'pais_geo_montana': { titulo:'Estradas de serra e campos em declive',
  contexto:'As viagens por {RUTA} e o fato de que {PROBLEMA} complicam a logística do time.',
  variables:{ RUTA:['estradas de serra','estradas cheias de curvas','passagens com neve'],
              PROBLEMA:['o campo do rival é em declive','se espera neve no caminho','a viagem fica muito lenta'] },
  opciones:[
    {texto:'Viajar um dia antes', sub:'Segurança, gasto', msg:'Viajaram um dia antes e o time chegou descansado.'},
    {texto:'Viajar de manhã cedo', sub:'Economia, risco', msg:'Viajaram de manhã cedo e chegaram em cima da hora.'},
    {texto:'Pedir para mudar o local do jogo', sub:'Complicado, se der certo melhora tudo', ok:{msg:'A liga aceitou mudar o local e foi um alívio.'}, mal:{msg:'A liga recusou e você ficou mal com o rival.'}},
  ] },

'pais_geo_isla': { titulo:'Voos cancelados entre ilhas',
  contexto:'A viagem à ilha vizinha se complica porque {PROBLEMA}.',
  variables:{ PROBLEMA:['os voos foram cancelados por causa do vento','a balsa está em reparo','há uma greve de transporte','a tempestade fechou o aeroporto'] },
  opciones:[
    {texto:'Contratar um barco particular', sub:'Caro, mas você chega', msg:'Chegaram de barco particular: caro, mas a tempo.'},
    {texto:'Pedir o adiamento do jogo', sub:'Prudência, calendário complicado', msg:'A liga aprovou o adiamento.'},
    {texto:'Esperar o próximo voo', sub:'Se chegar, você economiza', ok:{msg:'O voo saiu a tempo e tudo se resolveu.'}, mal:{msg:'O voo não saiu e perderam o jogo por W.O.'}},
  ] },

'pais_geo_arena': { titulo:'Tempestade de areia no estádio',
  contexto:'Uma tempestade de areia {EFECTO}. Há jogo daqui a poucas horas.',
  variables:{ EFECTO:['cobre o campo e as arquibancadas','põe a visibilidade em dúvida','deixa o estádio sem energia','atrapalha a viagem do rival'] },
  opciones:[
    {texto:'Limpar o campo e jogar', sub:'Gasto, normalidade', msg:'O campo ficou pronto e o jogo foi disputado normalmente.'},
    {texto:'Pedir para adiar', sub:'Segurança, calendário', msg:'O jogo foi adiado por segurança.'},
    {texto:'Jogar nas condições atuais', sub:'Epopeia ou desastre', ok:{msg:'O time aproveitou as condições e ganhou com ares de epopeia.'}, mal:{msg:'A visibilidade foi um desastre e o jogo foi um vexame.'}},
  ] },

'pais_geo_artico': { titulo:'Noite polar e campo coberto',
  contexto:'Com {SITUACION}, o time precisa treinar em condições difíceis.',
  variables:{ SITUACION:['a noite polar quase permanente','temperaturas muito baixas','uma cúpula coberta e um horário complicado','um ritmo de luz muito diferente'] },
  opciones:[
    {texto:'Alugar uma cúpula coberta', sub:'Caro, sem surpresas', msg:'Treinaram na cúpula coberta e o rendimento melhorou.'},
    {texto:'Treinar ao ar livre', sub:'Economia, risco', msg:'Treinar ao ar livre deixou cansaço e alguma lesão.'},
    {texto:'Ajustar os horários ao máximo de luz', sub:'Solução simples', msg:'Ajustaram os horários e o elenco respondeu bem.'},
  ] },

'per_pe_entrevista': { titulo:'{PERIODISTA} pede uma entrevista exclusiva',
  contexto:'{PERIODISTA} quer uma entrevista {FORMATO}. É um jornalista que conhece bem {CLUB}, mas nem sempre é gentil.',
  variables:{ FORMATO:['de uma hora no programa','no centro de treinamento','a sós no seu escritório','por escrito e sem perguntas combinadas'] },
  opciones:[
    {texto:'Aceitar a entrevista', sub:'Boa imprensa, risco de frases mal interpretadas', msg:'A entrevista com {PERIODISTA} fluiu bem e melhorou a sua imagem.'},
    {texto:'Aceitar com perguntas combinadas', sub:'{PERIODISTA} não vai gostar', ok:{msg:'{PERIODISTA} aceitou as condições e a entrevista saiu organizada.'}, mal:{msg:'{PERIODISTA} se ofendeu e contou tudo no programa.'}},
    {texto:'Recusar com educação', sub:'Evita riscos, perde visibilidade', msg:'Você recusou a entrevista: {PERIODISTA} fez um comentário irônico.'},
  ] },

'per_pe_filtracion': { titulo:'{PERIODISTA} publica um vazamento',
  contexto:'{PERIODISTA} publicou que {TEMA} e a notícia já corre pelos veículos. Na sede há nervosismo.',
  variables:{ TEMA:['o clube negocia um reforço','há tensão com o treinador','um jogador importante seria vendido','o caixa está mais apertado do que se diz'] },
  opciones:[
    {texto:'Desmentir com firmeza', sub:'Controle da narrativa, risco de mentir', msg:'Você desmentiu a notícia: {PERIODISTA} insistiu, mas o assunto esfriou.'},
    {texto:'Confirmar parcialmente', sub:'Transparência com cuidado', msg:'Você confirmou uma parte e {PERIODISTA} reconheceu isso no programa.'},
    {texto:'Investigar quem vazou', sub:'Mão dura, clima interno', msg:'Investigaram o vazamento: ninguém confessou e o clima interno azedou.'},
  ] },

'per_pe_programa': { titulo:'{PERIODISTA} convida você para o programa',
  contexto:'{PERIODISTA} convida você para um programa {CONDICION}. É uma chance de falar, mas também de errar.',
  variables:{ CONDICION:['ao vivo e com público','com outros dirigentes da região','com torcedores ligando por telefone','com um convidado crítico da sua gestão'] },
  opciones:[
    {texto:'Ir e falar com clareza', sub:'Visibilidade, risco calculado', msg:'Você foi ao programa e respondeu com clareza: grande impacto.'},
    {texto:'Ir e contra-atacar', sub:'Tudo ou nada', ok:{msg:'Seu contra-ataque pegou: falaram de você a semana toda.'}, mal:{msg:'Seu contra-ataque saiu mal e {PERIODISTA} aproveitou.'}},
    {texto:'Não ir e mandar um porta-voz', sub:'Sem riscos, sem brilho', msg:'Você mandou um porta-voz: sem brilho, sem conflitos.'},
  ] },

'per_pe_critica': { titulo:'{PERIODISTA} critica a sua gestão',
  contexto:'{PERIODISTA} dedicou um editorial a criticar {OBJETO}. A torcida comenta e os sócios olham para você.',
  variables:{ OBJETO:['as suas últimas decisões','a gestão do caixa','as contratações','a política esportiva'] },
  opciones:[
    {texto:'Responder publicamente', sub:'Defende a sua posição, abre uma frente', msg:'Você respondeu a {PERIODISTA} com dados: a discussão esquentou.'},
    {texto:'Convidar para conhecer o clube por dentro', sub:'Transparência, algum gasto', msg:'{PERIODISTA} percorreu o clube e suavizou as críticas.'},
    {texto:'Ignorar', sub:'Evita a briga, parece ausente', msg:'Você ignorou o editorial: outros veículos leram isso como silêncio culpado.'},
  ] },

'per_hi_reunion': { titulo:'{HINCHA} pede uma reunião',
  contexto:'{HINCHA}, liderança da torcida, pede uma reunião para falar sobre {TEMA}. Tem peso na arquibancada.',
  variables:{ TEMA:['os preços dos ingressos','os jogadores que não rendem','o tratamento dado aos sócios','a política de reforços'] },
  opciones:[
    {texto:'Receber e ouvir', sub:'Proximidade, expectativas', msg:'Você recebeu {HINCHA} e a reunião terminou em bom clima.'},
    {texto:'Receber com o conselho', sub:'Formal, com testemunhas', msg:'A reunião com o conselho foi bem organizada, embora fria.'},
    {texto:'Não receber', sub:'Distância, tensão', msg:'Você não recebeu {HINCHA}: a arquibancada leu isso como um desprezo.'},
  ] },

'per_hi_trapo': { titulo:'{HINCHA} quer um bandeirão gigante',
  contexto:'{HINCHA} e seu grupo querem estrear um bandeirão gigante com {MENSAJE}. Pedem permissão e espaço no estádio.',
  variables:{ MENSAJE:['uma mensagem de incentivo ao elenco','o nome do bairro','uma homenagem a um ídolo','um protesto contra a diretoria'] },
  opciones:[
    {texto:'Dar a permissão com gosto', sub:'A arquibancada agradece, risco de mensagens', msg:'O bandeirão foi aberto e a arquibancada vibrou.'},
    {texto:'Pedir para ver o desenho antes', sub:'Controle, alguma irritação', msg:'Você revisou o desenho: {HINCHA} aceitou de cara feia.'},
    {texto:'Negar a permissão', sub:'Controle total, inimizade', msg:'Você negou a permissão: {HINCHA} saiu com raiva.'},
  ] },

'per_hi_caravana': { titulo:'{HINCHA} organiza uma carreata',
  contexto:'{HINCHA} está organizando uma carreata de torcedores para {DESTINO}. Pede {AYUDA} do clube.',
  variables:{ DESTINO:['o jogo fora de casa','o aeroporto, para se despedir do elenco','a sede do clube','o jogo da copa'],
              AYUDA:['ônibus','dinheiro para bandeiras','autorização para sair junto com o elenco','uma escolta'] },
  opciones:[
    {texto:'Colaborar com tudo', sub:'Grande imagem, gasto alto', msg:'A carreata foi uma festa e {HINCHA} agradeceu publicamente.'},
    {texto:'Apoiar sem dinheiro', sub:'Gesto moral', msg:'Você apoiou a carreata com palavras: a torcida valorizou pela metade.'},
    {texto:'Desaconselhar por segurança', sub:'Prudência, mal-estar', msg:'Você desaconselhou a carreata: a torcida ficou chateada.'},
  ] },

'per_hi_critica': { titulo:'{HINCHA} puxa um coro contra você',
  contexto:'Durante o jogo, {HINCHA} puxou um coro contra a diretoria. O motivo: {MOTIVO}. Dava para ouvir no estádio todo.',
  variables:{ MOTIVO:['os últimos resultados','o preço dos planos de sócio','a venda de um jogador','a falta de reforços'] },
  opciones:[
    {texto:'Dar a cara na próxima coletiva', sub:'Coragem, exposição', msg:'Você deu a cara e esclareceu a sua posição: parte da arquibancada valorizou.'},
    {texto:'Conversar com {HINCHA} em particular', sub:'Diálogo discreto', msg:'Você conversou em particular com {HINCHA}: a tensão baixou.'},
    {texto:'Ignorar o coro', sub:'Evita o confronto, parece ausente', msg:'Você ignorou o coro: a crítica se amplificou.'},
  ] },

'per_em_prestamo': { titulo:'{EMPRESARIO} oferece um empréstimo',
  contexto:'{EMPRESARIO} se oferece para emprestar dinheiro ao clube para {DESTINO}. Diz que é um gesto de carinho, mas convém ler as letras miúdas.',
  variables:{ DESTINO:['pagar salários atrasados','reformar o estádio','contratar um reforço para o treinador','cobrir um buraco no caixa'] },
  opciones:[
    {texto:'Aceitar o empréstimo', sub:'Dinheiro agora, dívida depois', msg:'Você aceitou o empréstimo de {EMPRESARIO}: o caixa respira, a dívida fica.'},
    {texto:'Pedir um prazo mais longo', sub:'Menos dinheiro, menos pressão', msg:'{EMPRESARIO} aceitou um prazo mais longo com um valor menor.'},
    {texto:'Recusar para não depender', sub:'Independência, aperto', msg:'Você recusou o empréstimo: a torcida comemorou a sua independência.'},
  ] },

'per_em_representado': { titulo:'{EMPRESARIO} oferece um atleta que representa',
  contexto:'{EMPRESARIO} propõe {JUGADOR}, {JPOS} de {JEDAD} anos e nível {JRATING}. Diz que é uma oportunidade, mas o preço é alto.',
  opciones:[
    {texto:'Contratar {JUGADOR}', sub:'Reforço, caixa abalado', msg:'Você contratou {JUGADOR}: o treinador está feliz e {EMPRESARIO} mais ainda.'},
    {texto:'Pedir uma opção de compra', sub:'Menos risco, menos impacto', msg:'Você pediu uma opção de compra: {EMPRESARIO} aceitou sem entusiasmo.'},
    {texto:'Recusar a oferta', sub:'Protege o caixa, irrita o empresário', msg:'Você recusou a oferta: {EMPRESARIO} saiu ofendido.'},
  ] },

'per_em_terreno': { titulo:'{EMPRESARIO} quer desenvolver um terreno do clube',
  contexto:'{EMPRESARIO} quer comprar ou desenvolver um terreno do clube para {PROYECTO}. A assembleia está dividida.',
  variables:{ PROYECTO:['um shopping','um condomínio fechado','uma academia e um spa','um estacionamento'] },
  opciones:[
    {texto:'Vender o terreno', sub:'Entra dinheiro, perde-se patrimônio', msg:'Você vendeu o terreno a {EMPRESARIO}: caixa cheio e sócios furiosos.'},
    {texto:'Alugar a longo prazo', sub:'Receita fixa, menos dinheiro imediato', msg:'Você alugou o terreno com um contrato longo: ótimo equilíbrio.'},
    {texto:'Recusar a proposta', sub:'Protege o patrimônio', msg:'Você recusou: a assembleia aplaudiu, {EMPRESARIO} não.'},
  ] },

'per_em_viaje': { titulo:'{EMPRESARIO} convida você para uma viagem de negócios',
  contexto:'{EMPRESARIO} convida você para viajar {DESTINO} para apresentar possíveis patrocinadores. Tudo pago, mas a imprensa poderia opinar.',
  variables:{ DESTINO:['para uma feira esportiva no exterior','para um jantar com investidores','para uma excursão de três dias','para uma cúpula de dirigentes'] },
  opciones:[
    {texto:'Aceitar a viagem', sub:'Contatos, possível má imprensa', msg:'Você viajou com {EMPRESARIO}: voltou com contatos e críticas.'},
    {texto:'Aceitar, mas tornar público', sub:'Se convencer, ganha confiança', ok:{msg:'Você tornou a viagem pública e os sócios valorizaram.'}, mal:{msg:'A imprensa criticou a viagem do mesmo jeito, e {EMPRESARIO} não ajudou.'}},
    {texto:'Recusar o convite', sub:'Cuida da imagem, perde oportunidades', msg:'Você recusou: {EMPRESARIO} ficou com vontade.'},
  ] },

'cad_naming_oferta': { titulo:'Uma empresa quer o nome do estádio',
  contexto:'{EMPRESA} oferece {PLATA} pelo naming do estádio durante {PLAZO}. Há tradição no meio.',
  variables:{ EMPRESA:['Uma rede de supermercados','Uma seguradora','Uma marca de bebidas'],
              PLATA:['uma quantia importante','um valor tentador'],
              PLAZO:['cinco anos','dez anos'] },
  opciones:[
    {texto:'Aceitar o naming', sub:'Dinheiro forte, tradição abalada', msg:'Você aceitou o naming: o estádio tem novo nome e o caixa sorri.'},
    {texto:'Recusar por tradição', sub:'Torcida contente, caixa sem mudanças', msg:'Você recusou o naming: a tradição está a salvo.'},
    {texto:'Propor naming só para uma arquibancada', sub:'Intermediário, dinheiro menor', msg:'Você propôs um naming parcial: a empresa aceitou pela metade.'},
  ] },

'cad_naming_hinchada': { titulo:'A torcida rejeita o novo nome do estádio',
  contexto:'Desde o naming do estádio, {PROTESTA}. Os torcedores continuam usando o nome de sempre.',
  variables:{ PROTESTA:['há placas cobertas com tinta','há cantos contra','a arquibancada se recusa a dizer o nome novo','há uma campanha nas redes'] },
  opciones:[
    {texto:'Dialogar e buscar um nome misto', sub:'Custa tempo, acalma o bairro', msg:'Você montou um nome misto: a torcida aceitou.'},
    {texto:'Manter o acordo e oferecer concessões', sub:'Mantém o dinheiro, a tensão continua', msg:'Você manteve o acordo com concessões: o clima segue tenso.'},
    {texto:'Pedir desculpas e rescindir', sub:'Custa caro, volta a paz', msg:'Você rescindiu o acordo: custou dinheiro, mas a torcida comemorou.'},
  ] },

'cad_naming_reclamo': { titulo:'O patrocinador do naming cobra mais presença',
  contexto:'A empresa do naming diz que {RECLAMO} e ameaça reduzir o pagamento se não houver mudanças.',
  variables:{ RECLAMO:['a marca dela não aparece na transmissão','a torcida a xinga nos jogos','a cláusula de visibilidade não foi cumprida','há placas demais cobertas'] },
  opciones:[
    {texto:'Cumprir as cláusulas', sub:'Dinheiro garantido, desgaste com a torcida', msg:'Você cumpriu as cláusulas: a empresa se acalmou e a torcida resmungou.'},
    {texto:'Renegociar o contrato', sub:'Pode dar certo ou errado', ok:{msg:'A empresa aceitou renegociar: acordo mais equilibrado.'}, mal:{msg:'A empresa foi embora e pediu a devolução de parte do dinheiro.'}},
    {texto:'Romper o contrato', sub:'Corte limpo, perda de dinheiro', msg:'Você rompeu o contrato: a torcida festejou e o caixa pagou.'},
  ] },

'cad_academia_propuesta': { titulo:'Uma academia propõe um convênio de base',
  contexto:'Uma academia de {PAIS_ACAD} propõe um convênio: {TRATO}. Há talento, mas também letras miúdas.',
  variables:{ PAIS_ACAD:['uma liga vizinha','um clube grande','uma região conhecida pela sua base'],
              TRATO:['receber garotos em teste o ano todo','enviar as suas promessas para se formar','compartilhar olheiros e treinadores'] },
  opciones:[
    {texto:'Assinar o convênio', sub:'Projeção, alguma dependência', msg:'Você assinou o convênio com a academia: abre-se uma porta interessante.'},
    {texto:'Pedir mudanças nas condições', sub:'Mais seguro, mais lento', msg:'Você pediu mudanças: a academia estuda a sua proposta.'},
    {texto:'Recusar por independência', sub:'Base própria, sem ajudas', msg:'Você recusou o convênio: a base segue o seu caminho.'},
  ] },

'cad_academia_frutos': { titulo:'Primeiros resultados do convênio de base',
  contexto:'Passaram-se alguns meses do convênio com a academia e {NOVEDAD}. É hora de avaliar.',
  variables:{ NOVEDAD:['chegaram três garotos interessantes','há um treinador que critica o método','foi descoberta uma joia','os resultados são irregulares'] },
  opciones:[
    {texto:'Aprofundar o convênio', sub:'Se der certo, grande negócio', ok:{msg:'O convênio deu frutos: chegaram garotos com nível.'}, mal:{msg:'O convênio não deu os frutos esperados e custou dinheiro.'}},
    {texto:'Manter tudo como está', sub:'Sem mudanças', msg:'Você manteve o convênio sem mudanças: ninguém reclama.'},
    {texto:'Encerrar o convênio', sub:'Corta com prejuízo', msg:'Você encerrou o convênio: alguns entenderam, outros não.'},
  ] },

'cad_obra_proyecto': { titulo:'Projeto de reforma do estádio',
  contexto:'Um arquiteto propõe reformar {SECTOR} para ganhar {MEJORA}. O orçamento é ambicioso.',
  variables:{ SECTOR:['a arquibancada popular','o setor de cadeiras','os vestiários e o túnel','o acesso e os banheiros'],
              MEJORA:['capacidade','conforto','segurança'] },
  opciones:[
    {texto:'Aprovar a obra completa', sub:'Grande investimento, muito risco', msg:'Você aprovou a obra: os sócios estão empolgados.'},
    {texto:'Aprovar uma obra pequena', sub:'Menos dinheiro, menos impacto', msg:'Você aprovou uma obra pequena: dá para notar alguma coisa.'},
    {texto:'Adiar o projeto', sub:'Economia, frustração', msg:'Você adiou o projeto: os sócios continuam esperando.'},
  ] },

'cad_obra_demora': { titulo:'A obra do estádio atrasa',
  contexto:'A obra do estádio {PROBLEMA}. Os sócios olham o relógio e a construtora pede mais dinheiro.',
  variables:{ PROBLEMA:['está meses atrasada','teve um acidente leve','ficou sem materiais','tem problemas com o alvará'] },
  opciones:[
    {texto:'Pagar um adicional', sub:'Terminar no prazo, dinheiro extra', msg:'Você pagou um adicional: a obra retomou o ritmo.'},
    {texto:'Trocar de construtora', sub:'Risco, tempo perdido', msg:'Você trocou de construtora: o projeto atrasou ainda mais.'},
    {texto:'Parar a obra e esperar', sub:'Economia, estádio pela metade', msg:'Você parou a obra: o estádio ficou pela metade.'},
  ] },

'cad_obra_inauguracion': { titulo:'Inauguração da obra',
  contexto:'A obra do estádio finalmente termina e {EVENTO}. É preciso decidir como inaugurá-la.',
  variables:{ EVENTO:['há muita expectativa','alguns detalhes ficaram sem terminar','a imprensa quer ver o resultado','os sócios estão ansiosos'] },
  opciones:[
    {texto:'Inaugurar com uma grande festa', sub:'Imagem forte, gasto', msg:'A inauguração foi um sucesso e todos falaram da obra.'},
    {texto:'Uma inauguração sóbria', sub:'Austera e bem-feita', msg:'Você inaugurou com sobriedade: tudo em ordem.'},
    {texto:'Inaugurar com um amistoso', sub:'Se ganhar, brilho; se perder, gasto', ok:{msg:'O amistoso foi um golaço: o time ganhou e a obra brilhou.'}, mal:{msg:'O amistoso deu errado e tirou o brilho da inauguração.'}},
  ] },

'cad_ultimatum': { titulo:'O treinador dá um ultimato ao capitão',
  contexto:'O treinador deu um ultimato a {JUGADOR}, capitão do time: {MOTIVO}. O vestiário espera a sua posição.',
  variables:{ MOTIVO:['por atrasos nos treinos','por declarações à imprensa','por um atrito com um companheiro','por não seguir as orientações'] },
  opciones:[
    {texto:'Apoiar o treinador', sub:'Autoridade, tensão com o capitão', msg:'Você apoiou o treinador: {JUGADOR} não gostou nada.'},
    {texto:'Apoiar o capitão', sub:'Protege o líder, enfraquece o treinador', msg:'Você apoiou o capitão: o treinador levou a mal.'},
    {texto:'Mediar entre os dois', sub:'Tempo e diálogo', msg:'Você mediou: os dois apertaram as mãos, pelo menos por enquanto.'},
  ] },

'cad_ultimatum_respuesta': { titulo:'O capitão responde ao ultimato',
  contexto:'{JUGADOR} respondeu ao ultimato: {RESPUESTA}. O elenco está dividido.',
  variables:{ RESPUESTA:['pediu para falar com você em particular','disse que não acredita no treinador','se ofereceu para dar um passo atrás','pediu que a decisão seja do grupo'] },
  opciones:[
    {texto:'Sustentar o treinador', sub:'Autoridade, perda de um líder', msg:'Você sustentou o treinador: {JUGADOR} baixou o rendimento.'},
    {texto:'Trocar o treinador', sub:'Mudança de ares, risco', msg:'Você trocou o treinador: o vestiário respirou.'},
    {texto:'Tirar a faixa do capitão', sub:'Decisão dura, adeus ao líder', msg:'Você tirou a faixa de {JUGADOR}: o elenco recebeu com respeito.'},
  ] },

'cad_exclusiva_oferta': { titulo:'{PERIODISTA} pede a exclusiva de um anúncio',
  contexto:'{PERIODISTA} pede a exclusiva sobre {ANUNCIO}. Se você der, outros veículos ficam de fora.',
  variables:{ ANUNCIO:['o próximo reforço','a sua decisão sobre o treinador','o novo patrocinador','o projeto do estádio'] },
  opciones:[
    {texto:'Dar a exclusiva', sub:'Aliado forte, outros veículos chateados', msg:'{PERIODISTA} teve a exclusiva e agradeceu diante das câmeras.'},
    {texto:'Dar o anúncio a todos por igual', sub:'Sem favoritos, sem vantagens', msg:'Você anunciou igualmente a todos os veículos: ninguém reclamou.'},
    {texto:'Negar o pedido', sub:'Evita conflito, irrita {PERIODISTA}', msg:'Você negou a exclusiva: {PERIODISTA} tomou nota.'},
  ] },

'cad_exclusiva_celos': { titulo:'Os outros veículos se ofendem com a exclusiva',
  contexto:'Os outros veículos se ofenderam com a exclusiva que você deu a {PERIODISTA} e {REACCION}.',
  variables:{ REACCION:['deixaram de cobrir o clube','publicam matérias críticas','pedem igualdade de tratamento','boicotam a coletiva'] },
  opciones:[
    {texto:'Pedir desculpas publicamente', sub:'Desgaste, paz', msg:'Você pediu desculpas a todos os veículos: a tensão baixou.'},
    {texto:'Defender a sua decisão', sub:'Firmeza, conflito', msg:'Você defendeu a sua decisão: os veículos endureceram.'},
    {texto:'Dar uma coletiva aberta', sub:'Transparência, esforço', msg:'Você deu uma coletiva aberta: os veículos ficaram mais calmos.'},
  ] },

'cad_barra_pacto': { titulo:'Um grupo da organizada propõe um pacto',
  contexto:'{HINCHA} propõe um pacto: {TRATO}. Parece razoável, mas abre uma porta delicada.',
  variables:{ TRATO:['paz na arquibancada em troca de ingressos','apoio à diretoria em troca de um espaço','menos incidentes em troca de dinheiro para viagens'] },
  opciones:[
    {texto:'Aceitar o pacto', sub:'Paz imediata, dívida moral', msg:'Você aceitou o pacto com {HINCHA}: a arquibancada se acalmou.'},
    {texto:'Recusar com firmeza', sub:'Autoridade, tensão', msg:'Você recusou o pacto: {HINCHA} ficou descontente.'},
    {texto:'Conversar com toda a torcida', sub:'Complicado, mais justo', msg:'Você conversou com toda a torcida: o clima melhorou.'},
  ] },

'cad_barra_pide_mas': { titulo:'{HINCHA} pede mais',
  contexto:'Desde o pacto, {HINCHA} pede mais: {PEDIDO}. Diz que a arquibancada não vai esperar.',
  variables:{ PEDIDO:['mais ingressos','um lugar fixo na arquibancada','participar das decisões do clube','dinheiro extra para viagens'] },
  opciones:[
    {texto:'Ceder ao que pede', sub:'Paz, maior dependência', msg:'Você cedeu: o pedido de {HINCHA} foi atendido, mas o clube ficou devendo favores à organizada.'},
    {texto:'Impor limites claros', sub:'Firmeza, risco', msg:'Você impôs limites claros: {HINCHA} aceitou a contragosto.'},
    {texto:'Romper o pacto', sub:'Corta, enfrenta conflito', msg:'Você rompeu o pacto: a tensão voltou a subir.'},
  ] },

'cad_barra_incidentes': { titulo:'Incidentes na arquibancada',
  contexto:'Houve incidentes na arquibancada: {INCIDENTE}. A liga pede explicações e a imprensa pergunta pelo pacto.',
  variables:{ INCIDENTE:['uma briga entre grupos','sinalizadores e correria','um confronto com a polícia','depredação nos banheiros'] },
  opciones:[
    {texto:'Denunciar e colaborar com a Justiça', sub:'Ordem, rompimento definitivo', msg:'Você denunciou o ocorrido: a imprensa valorizou e a organizada ficou furiosa.'},
    {texto:'Minimizar o ocorrido', sub:'Se não crescer, você salvou o momento', ok:{msg:'O assunto esfriou e passou para segundo plano.'}, mal:{msg:'A liga puniu você e a imprensa o acusou de acobertar.'}},
    {texto:'Reunir a comissão de segurança', sub:'Resposta institucional', msg:'A comissão de segurança agiu com rapidez.'},
  ] },

'cad_hermano_propuesta': { titulo:'Um clube estrangeiro propõe uma irmandade',
  contexto:'Um clube de {PAIS_HERM} propõe uma irmandade entre os clubes, com {BENEFICIO}. Seria um belo gesto.',
  variables:{ PAIS_HERM:['outro continente','um país vizinho','uma região distante'],
              BENEFICIO:['intercâmbio de garotos da base','um amistoso anual','visitas de torcedores','camisas comemorativas'] },
  opciones:[
    {texto:'Aceitar a irmandade', sub:'Imagem internacional, gasto leve', msg:'Você aceitou a irmandade: a imprensa destacou.'},
    {texto:'Pedir tempo para pensar', sub:'Mais seguro', msg:'Você pediu tempo para pensar: a proposta ficou no ar.'},
    {texto:'Recusar por falta de orçamento', sub:'Economia, gesto frio', msg:'Você recusou a irmandade: entenderam, mas com pesar.'},
  ] },

'cad_hermano_visita': { titulo:'Visita do clube irmão',
  contexto:'O clube irmão chega para uma visita e {NOVEDAD}. A torcida espera um grande amistoso.',
  variables:{ NOVEDAD:['traz uma delegação enorme','pede tratamento especial','quer jogar com titulares','surpreende com um presente'] },
  opciones:[
    {texto:'Recebê-los com uma grande festa', sub:'Imagem, gasto', msg:'A visita foi uma festa inesquecível.'},
    {texto:'Jogar um amistoso com titulares', sub:'Se der certo, brilho', ok:{msg:'Ganharam o amistoso e a torcida vibrou.'}, mal:{msg:'Perderam o amistoso e a visita levou o aplauso.'}},
    {texto:'Uma recepção simples', sub:'Austera e sem riscos', msg:'A recepção foi simples, mas calorosa.'},
  ] },

'cad_socio_donacion': { titulo:'Um sócio oferece uma doação condicionada',
  contexto:'{EMPRESARIO} oferece uma doação para {DESTINO}. Diz que não pede nada em troca, mas há uma condição sutil.',
  variables:{ DESTINO:['a base','o estádio','as dívidas do clube','o pagamento de salários'] },
  opciones:[
    {texto:'Aceitar a doação', sub:'Dinheiro, possível compromisso', msg:'Você aceitou a doação de {EMPRESARIO}: o clube respira.'},
    {texto:'Pedir que seja sem condições', sub:'Mais claro, mais lento', msg:'Você pediu clareza: {EMPRESARIO} aceitou com uma doação menor.'},
    {texto:'Recusar a doação', sub:'Independência', msg:'Você recusou: os sócios valorizaram, o caixa não.'},
  ] },

'cad_socio_cargo': { titulo:'O doador pede um cargo',
  contexto:'{EMPRESARIO} pede agora {CARGO} no clube. Diz que quer "cuidar do seu aporte".',
  variables:{ CARGO:['uma cadeira na diretoria','a presidência de uma subcomissão','um assento nas decisões esportivas','a gestão da base'] },
  opciones:[
    {texto:'Dar o cargo', sub:'Calma, perda de controle', msg:'Você deu o cargo a {EMPRESARIO}: ele se instalou na sede.'},
    {texto:'Oferecer um papel honorário', sub:'Gesto simbólico', msg:'Você ofereceu um papel honorário: {EMPRESARIO} aceitou com um meio sorriso.'},
    {texto:'Devolver a doação', sub:'Independência, custo alto', msg:'Você devolveu a doação: o conselho aplaudiu.'},
  ] },

'cad_socio_conflicto': { titulo:'Conflito de interesses no conselho',
  contexto:'{EMPRESARIO} usou o cargo para {ACCION}. O conselho se divide e os sócios pedem explicações.',
  variables:{ ACCION:['favorecer a própria empresa num contrato','pressionar o treinador','vetar uma venda','trocar um fornecedor'] },
  opciones:[
    {texto:'Pedir que renuncie', sub:'Ordem, conflito aberto', msg:'{EMPRESARIO} renunciou furioso e o conselho respirou.'},
    {texto:'Criar um comitê de ética', sub:'Institucional e lento', msg:'O comitê de ética assumiu o caso.'},
    {texto:'Deixar passar', sub:'Se nada acontecer, você poupou um conflito', ok:{msg:'O conflito não escalou e tudo seguiu igual.'}, mal:{msg:'O conflito estourou na imprensa e sobrou para você pagar o custo.'}},
  ] },

'cad_trat_propuesta': { titulo:'{JUGADOR} tem uma lesão crônica',
  contexto:'{JUGADOR} ({JPOS}, nível {JRATING}) arrasta uma lesão crônica e o médico propõe {OPCION}. É a principal figura do time.',
  variables:{ OPCION:['um tratamento experimental','uma cirurgia pequena','um longo período de descanso','uma terapia com especialistas do exterior'] },
  opciones:[
    {texto:'Aprovar o tratamento experimental', sub:'Possível solução, risco', msg:'Você aprovou o tratamento: {JUGADOR} começou o processo.'},
    {texto:'Optar pelo longo descanso', sub:'Segurança, ausência', msg:'{JUGADOR} descansa um bom tempo: o time sente falta.'},
    {texto:'Jogar com infiltrações', sub:'Rendimento imediato, risco futuro', msg:'{JUGADOR} jogou infiltrado: o time rendeu, mas o risco cresceu.'},
  ] },

'cad_trat_resultado': { titulo:'Resultado do tratamento de {JUGADOR}',
  contexto:'Passaram-se algumas semanas do tratamento de {JUGADOR} e os médicos têm novidades. {NOTA}.',
  variables:{ NOTA:['Todos esperam um boletim positivo','O time está precisando muito','A imprensa pergunta todo dia','O vestiário está na expectativa'] },
  opciones:[
    {texto:'Escalar de novo já', sub:'Se der certo, golaço', ok:{msg:'{JUGADOR} voltou em grande forma e o time comemorou.'}, mal:{msg:'{JUGADOR} se lesionou de novo e a aposta saiu cara.'}},
    {texto:'Esperar mais uma semana', sub:'Cautela, sem riscos', msg:'Esperaram mais uma semana: {JUGADOR} voltou bem e com calma.'},
    {texto:'Pedir uma segunda opinião', sub:'Gasto e tempo', msg:'A segunda opinião confirmou o plano e acalmou os nervos.'},
  ] },

'cad_convocado_aviso': { titulo:'A seleção convoca {JUGADOR}',
  contexto:'A seleção nacional convocou {JUGADOR} ({JPOS}, {JEDAD} anos) para {TORNEO}. O clube tem jogos decisivos.',
  variables:{ TORNEO:['um torneio importante','alguns amistosos','uma rodada de eliminatórias'] },
  opciones:[
    {texto:'Liberar com orgulho', sub:'Imagem e prestígio, ausência', msg:'{JUGADOR} viajou com a seleção e o clube apareceu em tudo quanto é lugar.'},
    {texto:'Negociar que jogue só uma partida', sub:'Equilíbrio, irritação da federação', msg:'Você negociou uma partida só: ninguém ficou totalmente contente.'},
    {texto:'Segurar por causa dos jogos decisivos', sub:'Protege o seu time, irrita todo mundo', msg:'Você segurou {JUGADOR}: a federação e a imprensa criticaram.'},
  ] },

'cad_convocado_regreso': { titulo:'{JUGADOR} volta da seleção',
  contexto:'{JUGADOR} volta da seleção {ESTADO}. O treinador não sabe como encaixá-lo.',
  variables:{ ESTADO:['com muita confiança','levemente lesionado','cansado das viagens','com propostas do exterior'] },
  opciones:[
    {texto:'Escalar como titular imediatamente', sub:'Rendimento, risco de desgaste', msg:'{JUGADOR} voltou como titular e rendeu com confiança.'},
    {texto:'Dar uns dias de descanso', sub:'Cuidado físico, menos continuidade', msg:'{JUGADOR} descansou uns dias e se reintegrou.'},
    {texto:'Conversar sobre o futuro dele', sub:'Pode dar certo ou errado', ok:{msg:'Conversaram sobre o futuro e {JUGADOR} se comprometeu com o clube.'}, mal:{msg:'A conversa gerou dúvidas e {JUGADOR} ficou desconfortável.'}},
  ] },

});
