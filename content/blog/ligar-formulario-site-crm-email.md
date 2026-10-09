---
titulo: "Como ligar o formulário do site ao CRM e ao email"
slug: "ligar-formulario-site-crm-email"
descricao: "O que acontece a um pedido depois de alguém carregar em Enviar, como o fazer chegar ao CRM e ao email sem copiar nada à mão, e que ferramentas gratuitas servem para uma pequena empresa."
categoria: "Automação"
data: 2026-10-09
capa: ""
capaAlt: ""
estado: "publicado"
faq:
  - pergunta: "É preciso pagar por um CRM?"
    resposta: "Não para começar. O HubSpot tem um CRM gratuito, sem prazo de validade, para até dois utilizadores e 1.000 contactos. O Brevo tem um plano gratuito que permite enviar até 300 emails por dia."
  - pergunta: "Posso ligar um formulário que já existe?"
    resposta: "Na maior parte dos casos, sim. Depende da plataforma em que o site foi feito."
  - pergunta: "E os pedidos que chegam por WhatsApp?"
    resposta: "Podem ser encaminhados para o mesmo sítio, mas é uma ligação à parte."
---
Ligar o formulário do site ao CRM significa que cada pedido de contacto fica registado e é notificado sozinho, sem ninguém copiar dados de um email para uma folha de cálculo. Para uma pequena empresa, isto faz-se com ferramentas que têm plano gratuito, como o HubSpot ou o Brevo, e fica a funcionar em poucas horas de trabalho.

Este guia explica o que deve acontecer a um pedido, as três formas de o conseguir e os erros que fazem perder contactos.

## O que deve acontecer quando alguém preenche o formulário?

Quatro coisas, pela ordem certa:

1. **O pedido fica guardado** num sítio que não é a caixa de email. Os emails perdem-se, vão para o spam ou ficam por abrir.
2. **Quem trata dos pedidos é avisado** no momento, por email ou no telemóvel.
3. **A pessoa recebe uma confirmação** de que o pedido chegou e de quando terá resposta.
4. **Fica uma tarefa de seguimento**, para o caso de ninguém responder nesse dia.

Se o seu site só faz a segunda, cada pedido depende de alguém ver um email a tempo.

## Que formas há de fazer a ligação?

**1. Formulário da própria ferramenta de CRM.** O HubSpot e o Brevo permitem criar um formulário e colocá-lo no site. É a opção mais rápida. A desvantagem é o aspeto: o formulário nem sempre fica igual ao resto do site.

**2. Ferramenta intermédia.** O formulário do site envia os dados para um serviço como o Make, o Zapier ou o n8n, que os distribui pelo CRM, pelo email e por onde for preciso. Serve quando o site foi feito numa plataforma fechada. Acrescenta uma mensalidade e mais uma peça que pode falhar.

**3. Ligação direta no código do site.** O site envia o pedido diretamente para a base de dados e para o serviço de email. Não tem mensalidades de intermediários e o formulário mantém o aspeto do site. Exige que o site seja feito em código e não numa plataforma de arrastar e largar.

| | Formulário do CRM | Ferramenta intermédia | Ligação direta |
|---|---|---|---|
| Tempo de montagem | Menos de uma hora | Algumas horas | Meio dia a um dia |
| Custo mensal | Gratuito no plano base | Mensalidade a partir de certo volume | Sem mensalidade de intermediário |
| Aspeto do formulário | Limitado | Livre | Livre |
| Para quem | Quem quer começar hoje | Sites em plataformas fechadas | Sites feitos em código |

## HubSpot, Brevo ou uma folha de cálculo?

- **Folha de cálculo:** chega para quem recebe poucos pedidos por mês e é a única pessoa a tratar deles. Deixa de servir quando há seguimentos a fazer.
- **Brevo:** a escolha mais simples quando o essencial é enviar emails, a confirmação ao cliente e o aviso interno.
- **HubSpot:** compensa quando há um processo de venda com várias fases, propostas e seguimentos, porque junta contactos, negócios e tarefas no mesmo sítio.

Uma regra prática: se não sabe dizer em que fase está cada pedido que recebeu este mês, precisa de um CRM. Se sabe, uma folha de cálculo ainda chega.

## Como está montado o formulário do meu próprio site

O formulário de starmountainflash.pt usa a terceira opção. Quando alguém pede um orçamento:

- O pedido é gravado numa base de dados (Supabase), com a página de origem.
- Recebo um email de aviso no momento, enviado pelo Brevo.
- O acompanhamento comercial, as tarefas e os seguimentos ficam no HubSpot.

Há duas proteções que recomendo a qualquer formulário. A primeira é um campo escondido que só os programas automáticos preenchem, e que permite rejeitar spam sem obrigar ninguém a resolver puzzles. A segunda é um limite de envios por hora a partir do mesmo endereço.

## Que erros fazem perder pedidos?

- **Depender só do email.** Se o aviso for para o spam, o pedido desaparece.
- **Não testar depois de mudanças.** Um formulário pode deixar de funcionar após uma atualização sem dar erro visível. Envie um pedido de teste todos os meses.
- **Não confirmar ao cliente.** Sem confirmação, a pessoa não sabe se o pedido chegou e contacta o concorrente seguinte.
- **Pedir dados a mais.** Cada campo extra reduz o número de pessoas que termina o formulário. Nome, contacto e a mensagem costumam bastar.
- **Esquecer o RGPD.** O formulário deve dizer para que servem os dados e remeter para a política de privacidade.
