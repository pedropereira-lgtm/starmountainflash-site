# Starmountain Flash — site

Site em Next.js (App Router) + TypeScript, convertido a partir do protótipo aprovado,
que ficou guardado em [`referencia/`](referencia/).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run cms     # painel do blog em localhost (ver secção 3)
npm run og      # regenera a imagem Open Graph (só quando a marca mudar)
```

---

## Como está organizado

```
content/blog/        Artigos em Markdown, escritos no painel /admin
public/admin/        Painel de gestão (Decap CMS)
public/img/          Imagens servidas tal como estão
scripts/             Gerador da imagem Open Graph
src/app/             Rotas
src/components/      Componentes partilhados
src/data/            Conteúdo separado do código (serviços, trabalhos, FAQs…)
src/fonts/           Onest alojada no próprio site
src/img/             Imagens importadas pelo código (a foto do hero)
src/lib/             SEO, artigos, validação, Supabase e Brevo
src/styles/          O CSS do protótipo, repartido por ficheiros
supabase/leads.sql   Script para criar a tabela dos pedidos
```

### O CSS

`src/styles/globals.css` importa os ficheiros `01-…` a `23-…` **por ordem**.
Essa ordem é significativa: `12-brand.css` reescreve regras dos anteriores
(`.btn-light`, `.label i`, o peso dos títulos). Não reordenar os imports.

Os ficheiros `01` a `16` são o CSS do protótipo, copiado tal e qual, com uma
exceção: os cinzentos de `01-tokens.css` e os `#A3A6A2` foram escurecidos para
cumprir as WCAG AA. Os restantes são novos:

| Ficheiro | O que traz |
| --- | --- |
| `17-media.css` | Foto do hero e screenshots servidos por `next/image` |
| `18-article.css` | Páginas de artigo e listagem do blog |
| `19-cookies.css` | Aviso de cookies |
| `20-casos.css` | Mockups, molduras de telemóvel e sub-secções dos casos |
| `21-footer.css` | Rodapé de cinco colunas e acordeão em telemóvel |
| `22-menu.css` | Menu mobile sem numeração, com serviços a abrir no sítio |
| `23-contraste.css` | Ajustes de contraste para as WCAG AA |

### Onde mudar conteúdo sem tocar em código

| Ficheiro | O que controla |
| --- | --- |
| `src/data/site.ts` | Contactos, NIF, links das redes sociais |
| `src/data/servicos.ts` | Os quatro cartões de serviço e as opções dos formulários |
| `src/data/trabalhos.ts` | Trabalhos na página inicial, incluindo `published` |
| `src/data/casos.ts` | O conteúdo de cada caso de estudo |
| `src/data/testemunhos.ts` | Avaliações de clientes |
| `src/data/faqs.ts` | Perguntas frequentes de cada página |

As quatro páginas legais — aviso legal, privacidade, cookies e termos — estão
em `src/app/`, uma por pasta, escritas secção a secção.

**Publicar o trabalho do Diogo Costa:** em `src/data/trabalhos.ts`, mudar
`published: false` para `true` na entrada `diogo-costa`, confirmar o domínio,
e acrescentar a entrada correspondente em `src/data/casos.ts`.

---

## 1. Repositório no GitHub

1. Em <https://github.com/new>, criar um repositório **privado** chamado
   `starmountainflash-site`. Não marcar "Add a README".
2. Na pasta do projeto:

   ```bash
   git remote add origin https://github.com/pedropereira-lgtm/starmountainflash-site.git
   git branch -M main
   git push -u origin main
   ```

> O `.env.local` está no `.gitignore` e nunca vai para o GitHub.

## 2. Netlify

1. Em <https://app.netlify.com> → **Add new site** → **Import an existing project**
   → **GitHub** → escolher o repositório.
2. O Netlify lê o `netlify.toml`; não é preciso mexer no comando de build.
3. **Site configuration → Environment variables** → criar as variáveis da secção 4
   (as mesmas do `.env.local`), todas em *All scopes* / *All deploy contexts*.
4. **Domain management** → **Add a domain** → `starmountainflash.pt`.
   O Netlify indica os servidores de nomes ou os registos DNS a configurar no
   registrar do domínio. O certificado HTTPS é emitido automaticamente.

## 3. Painel `/admin` (Decap CMS)

### Escrever artigos já, sem GitHub nem Netlify

Para experimentar o painel enquanto o site não está publicado, o Decap fala
diretamente com os ficheiros da pasta. Em dois terminais:

```bash
npm run cms     # servidor de ficheiros do Decap, na porta 8081
npm run dev     # o site, na porta 3000
```

Abrir <http://localhost:3000/admin>. Não pede login e grava em
`content/blog/`. Neste modo local não há separador **Workflow**: o que
gravar fica logo escrito no ficheiro, e é o campo **Estado** que decide se
aparece no site. Depois é só fazer commit dos artigos.

### Em produção, com GitHub

O painel publicado autentica-se pelo GitHub, usando o serviço de OAuth da
Netlify. **Não** usa Netlify Identity.

1. **Criar a aplicação OAuth no GitHub**
   - <https://github.com/settings/developers> → **OAuth Apps** → **New OAuth App**
   - *Application name*: `Starmountain Flash CMS`
   - *Homepage URL*: `https://starmountainflash.pt`
   - *Authorization callback URL*: `https://api.netlify.com/auth/done`
     (exatamente este, é o da Netlify e não o do site)
   - **Register application** → guardar o **Client ID** e gerar um **Client Secret**

2. **Ligar no Netlify**
   - No site, **Site configuration** → **Access & security** → **OAuth**
   - Secção **Authentication providers** → **Install provider** → **GitHub**
   - Colar o Client ID e o Client Secret → **Install**

3. **Confirmar o `config.yml`**
   - `repo:` com o `utilizador/repositório` certos
   - `branch: main`
   - `base_url: https://api.netlify.com` e `auth_endpoint: auth` já estão certos

4. **Entrar**
   - Abrir `https://starmountainflash.pt/admin`
   - **Login with GitHub** → autorizar

5. **Escrever um artigo**
   - **Artigos** → **New Artigo** → preencher os campos
   - **Save** guarda como rascunho no separador **Workflow**
   - Arrastar para **Ready** e carregar em **Publish** → o Decap faz merge na
     branch `main`, o Netlify reconstrói o site sozinho e o artigo fica no ar
   - O campo **Estado** manda em último lugar: um artigo com `rascunho` não
     aparece no site nem no `sitemap.xml`, mesmo depois de publicado no Decap

> Enquanto não houver artigos publicados, `/blog` mostra os quatro temas
> "Em breve", tal como no protótipo.

## 4. Supabase e Brevo

### Tabela dos pedidos (Supabase)

1. Em <https://supabase.com/dashboard>, criar um projeto (região *West EU* é a
   mais próxima). Guardar a palavra-passe da base de dados.
2. **Database** → **Extensions** → procurar `pg_cron` e ativar.
   É preciso para a limpeza automática do hash do IP.
3. **SQL Editor** → **New query** → colar o conteúdo de
   [`supabase/leads.sql`](supabase/leads.sql) → **Run**.
   Além da tabela, isto agenda o apagamento do hash do IP ao fim de 30 dias,
   que é o prazo prometido na política de privacidade. Confirmar com
   `select jobname, schedule, active from cron.job;`.
4. **Project Settings** → **Data API** → copiar o **Project URL**
   → é o `SUPABASE_URL`.
5. **Project Settings** → **API Keys** → copiar a chave **`service_role`**
   → é o `SUPABASE_SERVICE_ROLE_KEY`.

   > Esta chave ignora as regras de segurança da base de dados. Só pode existir
   > nas variáveis de ambiente do servidor. Nunca a ponha no código nem numa
   > variável que comece por `NEXT_PUBLIC_`.

6. Os pedidos ficam visíveis em **Table Editor** → `leads`.

### Notificação por email (Brevo)

1. Criar conta em <https://www.brevo.com>.
2. **Senders, Domains & Dedicated IPs** → autenticar o domínio
   `starmountainflash.pt` (registos DKIM e SPF no DNS) ou, para começar,
   verificar só o remetente `geral@starmountainflash.pt`.
3. **SMTP & API** → **API Keys** → **Generate a new API key**
   → é o `BREVO_API_KEY`.

### Variáveis de ambiente

Copiar `.env.local.example` para `.env.local` e preencher. As mesmas variáveis
têm de ser criadas no Netlify.

| Variável | Para que serve |
| --- | --- |
| `SUPABASE_URL` | Projeto Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Escrita na tabela `leads` (secreta) |
| `BREVO_API_KEY` | Envio da notificação (secreta) |
| `BREVO_SENDER` | Remetente verificado na Brevo |
| `LEAD_NOTIFY_TO` | Para onde vão os avisos de novos pedidos |
| `LEAD_IP_SALT` | Segredo do hash do IP (`openssl rand -hex 32`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4. Vazio = GA desligado |

O formulário está protegido por validação no servidor, um campo-armadilha
invisível e um limite de 5 pedidos por hora por IP. O IP nunca é guardado em
claro, só um hash com sal.

## 5. Depois de publicar

- Submeter `https://starmountainflash.pt/sitemap.xml` no
  [Google Search Console](https://search.google.com/search-console) e no
  [Bing Webmaster Tools](https://www.bing.com/webmasters).
- Confirmar que o Google Business Profile aponta para o site novo.
- Testar no telemóvel: formulário, pop-up de orçamento, WhatsApp e `/admin`.
- Confirmar no Search Console que os URLs antigos passaram a apontar para os
  novos. Os redirecionamentos já estão escritos em `next.config.ts`, a partir
  do sitemap do site anterior:

  | URL antigo | Vai para |
  | --- | --- |
  | `/servicos/sistemas-digitais/` | `/websites` |
  | `/servicos/automatizacoes/` | `/automacoes` |
  | `/privacy` | `/privacidade` |
  | `/terms` | `/termos` |
  | `/aviso-legal`, `/cookies`, `/blog/`, `/blog/quando-automatizar-o-teu-negocio/` | mantêm o endereço |
