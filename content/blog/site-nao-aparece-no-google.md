---
titulo: "O meu site não aparece no Google: porquê e como resolver"
slug: "site-nao-aparece-no-google"
descricao: "O seu site não aparece no Google? Veja como confirmar o problema em 5 minutos, as 7 causas mais comuns e o que fazer em cada uma."
categoria: "Websites"
data: 2026-10-21
capa: ""
capaAlt: ""
estado: "publicado"
faq:
  - pergunta: "Como sei se o meu site está no Google?"
    resposta: "Pesquise site: seguido do seu domínio no Google. Se aparecerem páginas, o site está indexado. Para ver o estado de cada página, use a Inspeção de URL no Google Search Console."
  - pergunta: "Quanto tempo demora um site novo a aparecer no Google?"
    resposta: "Pode ir de algumas horas a várias semanas. Submeter o site e o sitemap no Search Console no dia em que é publicado ajuda o Google a encontrá-lo mais depressa."
  - pergunta: "Pedir a indexação no Search Console resolve o problema?"
    resposta: "Ajuda quando a página é nova ou foi corrigida. Se a página não mudou e o Google já a visitou sem a guardar, voltar a pedir raramente resolve: é preciso melhorar o conteúdo."
  - pergunta: "O meu site está no Google mas ninguém o encontra. Porquê?"
    resposta: "Normalmente porque não diz claramente que serviço oferece, não tem uma página por serviço ou é lento no telemóvel. É um problema de posição, não de indexação."
---
**Resposta curta:** se o seu site não aparece no Google, a causa está quase sempre num de dois sítios: ou o Google ainda não o tem no índice, ou tem e mostra-o tão abaixo que ninguém lá chega. São problemas diferentes, com soluções diferentes, por isso o primeiro passo é perceber em qual dos dois está.

## Primeiro, confirme o problema (5 minutos)

Muita gente conclui que o site "não está no Google" quando, na verdade, ele está, só que na terceira ou quarta página. Para tirar a dúvida:

1. **Pesquise `site:oseudominio.pt` no Google.** Se aparecerem páginas, o site está indexado e o problema é de posição. Se não aparecer nada, o Google não o tem.
2. **Abra o Google Search Console** e cole o endereço da página na barra do topo (Inspeção de URL). O Search Console diz se a página está no Google e, se não estiver, porquê.
3. **Veja o relatório "Indexação de páginas".** Mostra quantas páginas estão no índice e agrupa as que ficaram de fora por motivo.

Se ainda não tem o Search Console configurado, essa é a primeira coisa a fazer. É gratuito e é a única forma de ver o site como o Google o vê.

## As 7 causas mais comuns

### 1. O site é novo

Um site acabado de publicar não aparece no dia seguinte. O Google pode demorar de algumas horas a várias semanas a indexar uma página nova, e um domínio sem histórico costuma estar do lado mais lento. Se o site tem menos de um mês, a causa pode ser só tempo. Mesmo assim, não espere de braços cruzados: submeta o site no Search Console, que é o que mais acelera a descoberta.

### 2. O Google não sabe que o site existe

O Google encontra páginas seguindo ligações e lendo sitemaps. Um site sem sitemap submetido e sem nenhum outro site a apontar para ele pode ficar muito tempo por descobrir.

O que fazer:

- Submeta o sitemap (normalmente em `oseudominio.pt/sitemap.xml`) no Search Console.
- Ponha o endereço do site no Perfil da Empresa no Google, nas redes sociais e nos diretórios do seu setor.

### 3. O site está a dizer ao Google para não o mostrar

É mais comum do que parece. Durante a construção, muitos sites ficam marcados para não serem indexados, e essa marca às vezes fica ligada depois da publicação. No WordPress, por exemplo, há uma opção nas definições de leitura para desencorajar os motores de pesquisa, que basta esquecer ligada.

Há duas formas de bloqueio a verificar:

- **Etiqueta `noindex`:** pede ao Google para não guardar a página. A Inspeção de URL do Search Console mostra se ela existe.
- **Ficheiro `robots.txt`:** pode impedir o Google de visitar o site inteiro. Abra `oseudominio.pt/robots.txt` e veja se tem uma linha `Disallow: /` sozinha.

Se for uma destas, a correção leva minutos e o site começa a aparecer assim que o Google voltar a passar.

### 4. O Google visitou as páginas mas decidiu não as guardar

No relatório de indexação, isto aparece como **"Rastreada, atualmente não indexada"** ou **"Detetada, atualmente não indexada"**. Na primeira, o Google leu a página e não a achou útil o suficiente. Na segunda, sabe que existe mas ainda não a visitou.

As causas habituais são páginas com pouco texto, páginas quase iguais entre si (o mesmo texto repetido em várias páginas de serviços, por exemplo) ou páginas a que nenhuma outra página do site faz ligação. Voltar a pedir a indexação de uma página igual raramente resolve. O que resolve é melhorar o conteúdo e ligar a página a partir das páginas principais do site.

### 5. O site está no Google, mas muito abaixo

Se a pesquisa `site:` mostra as páginas, o problema não é de indexação, é de posição. As razões mais frequentes:

- **O site não diz claramente o que faz.** Se a página inicial fala em "soluções" e "excelência" e nunca escreve o serviço, o Google não tem como a associar à pesquisa do cliente.
- **Não há uma página por serviço.** Uma página com tudo misturado compete mal com concorrentes que têm uma página para cada serviço.
- **O site é lento no telemóvel**, que é onde está a maior parte das pesquisas.
- **A pesquisa é muito disputada** e o site ainda não tem autoridade para competir.

Este é o caso que mais tempo leva a resolver, porque depende de conteúdo e não só de corrigir uma definição. Explico os pontos principais no guia sobre [como aparecer no Google em 2026](/blog/como-aparecer-google-seo-pme-portugal).

### 6. Mudou de site e perdeu as páginas antigas

Quando um site é refeito, os endereços das páginas mudam muitas vezes. Se os endereços antigos não forem redirecionados para os novos, o Google continua a mostrar páginas que já não existem e quem clica cai numa página de erro. Perde-se a posição que o site antigo tinha conquistado.

Aconteceu no meu próprio site: depois de o refazer, o Search Console mostrava que endereços antigos ainda recebiam a maior parte das impressões, e um deles não tinha redirecionamento. Bastou criá-lo. Se mudou de site nos últimos meses, este é o primeiro sítio a ver.

### 7. O site tem uma penalização do Google

É raro, mas acontece em sites com texto copiado, ligações compradas ou conteúdo enganador. No Search Console, a secção "Ações manuais" diz se existe alguma penalização e o que corrigir. Se estiver vazia, pode pôr esta causa de lado.

## Resumo: sintoma, causa e o que fazer

| O que vê | Causa provável | O que fazer |
|---|---|---|
| `site:` não mostra nada e o site tem semanas | Site novo ou desconhecido | Search Console e sitemap |
| `site:` não mostra nada e o site é antigo | Bloqueio por `noindex` ou `robots.txt` | Remover o bloqueio |
| Algumas páginas aparecem, outras não | Conteúdo fraco, duplicado ou sem ligações | Melhorar o texto e ligar as páginas |
| Todas aparecem, mas muito abaixo | Problema de posição | Uma página por serviço, texto claro, velocidade |
| Caiu depois de mudar de site | Faltam redirecionamentos | Redirecionar endereços antigos para os novos |
| Desapareceu de repente | Penalização ou bloqueio recente | Ver "Ações manuais" e a Inspeção de URL |

## Quanto tempo demora a resolver

Depende da causa. Um bloqueio corrigido hoje pode refletir-se em poucos dias, assim que o Google voltar a visitar o site. Um problema de posição leva semanas a meses, porque o Google precisa de tempo para reavaliar o conteúdo novo. E há uma coisa que convém saber: o Google não garante a indexação de nenhuma página. O que se pode fazer é tirar os obstáculos e dar-lhe boas razões para a guardar.

Se está a pensar refazer o site por causa disto, o guia [WordPress, Wix ou site à medida](/blog/wordpress-wix-ou-site-a-medida) ajuda a escolher a base certa.

*Quer saber em qual destas situações está o seu site? Faço uma [análise gratuita ao seu site](/analise-gratuita): vejo se está no Google, o que o está a travar e o que corrigir primeiro. Recebe o relatório por email em até 3 dias úteis, sem compromisso.*
