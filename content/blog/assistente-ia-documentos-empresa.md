---
titulo: "Um assistente de IA que conhece os documentos da tua empresa"
slug: assistente-ia-documentos-empresa
descricao: "Como funciona um assistente de IA que responde a partir dos documentos internos de uma empresa, onde costuma falhar e que cuidados ter com os dados."
categoria: "Automação"
data: 2026-10-31
capa: ""
capaAlt: ""
estado: "publicado"
faq:
  - pergunta: "Os documentos da empresa ficam expostos na internet?"
    resposta: "Não. O índice fica num sítio privado e só quem tem acesso pode fazer perguntas."
  - pergunta: "A IA pode inventar respostas?"
    resposta: "O risco diminui quando responde só a partir dos documentos e mostra a fonte, mas convém testar com perguntas conhecidas antes de abrir à equipa."
  - pergunta: "Tenho de mudar onde guardo os documentos?"
    resposta: "Normalmente não. O assistente lê-os de onde já estão."

---
Na Starmountain uso um vault no Obsidian com as notas do negócio: como trabalho, serviços, preços, processos. Há lá ficheiros escritos só para a IA, para quando preciso que perceba o contexto antes de me ajudar. Numa empresa de uma pessoa isto resolve-se com uma pasta bem organizada. Numa empresa com várias equipas e milhares de documentos, a mesma ideia precisa de regras.

## O que já acontece nas empresas

Um estudo da [OpinionWay para a Cegid](https://www.cegid.com/ib/pt/imprensa/portugal-84-porcento-utilizam-ia-trabalho/), de agosto de 2026, diz que 84% dos trabalhadores portugueses já usam IA no trabalho e que 69% usam ferramentas externas sem informar a entidade patronal.

O estudo não diz o que essas pessoas colam nessas ferramentas. É esse o ponto: a empresa também não sabe.

## Como funciona um assistente interno

Os documentos da empresa ficam indexados num sítio privado. Quando alguém pergunta "qual é o prazo de devolução no contrato com o fornecedor X?", o assistente vai buscar os excertos que falam disso, a IA responde a partir deles e diz de que documento tirou cada parte.

Este método chama-se RAG. O que interessa a quem o usa é a fonte: se a resposta parecer estranha, abre o documento e confirma.

## Onde costuma falhar

Nos documentos, mais do que na IA. Se existem três versões do mesmo procedimento em pastas diferentes, o assistente pode citar a errada, e com toda a confiança. Arrumar e escolher os documentos que entram faz parte do trabalho.

Também não serve para decidir. Diz o que está escrito; o que se faz com isso continua a ser decisão de alguém.

## Os cuidados com os dados

Cada equipa só deve conseguir perguntar sobre os documentos que já pode abrir hoje. Se o comercial não tem acesso aos salários, o assistente também não lhos pode dar.

Convém saber onde fica alojado o índice, que fornecedor de IA está por trás e se os termos desse fornecedor excluem o uso dos dados para treinar modelos. Guardar o registo de quem perguntou o quê ajuda nas auditorias e a perceber o que falta nos documentos. Documentos com dados pessoais pedem regras próprias por causa do RGPD.

## Por onde começar

Um departamento, um conjunto pequeno de documentos e uma lista de perguntas cuja resposta já se conhece. Se o assistente acerta e cita a fonte certa, alarga-se. Se não acerta, normalmente o problema está nos documentos.

Em empresas maiores, com escritórios em mais de uma cidade, o assistente liga-se ao sítio onde os documentos já estão, como SharePoint ou Google Drive, e ao login que a equipa já usa. Quem está em Lisboa e quem está no Porto pergunta ao mesmo assistente e recebe a mesma resposta.

É isto que faço no [Assistente interno](https://starmountainflash.pt/assistente-interno): um assistente privado, com a fonte citada em cada resposta e as permissões de cada equipa.
