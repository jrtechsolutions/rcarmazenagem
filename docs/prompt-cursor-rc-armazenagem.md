# Prompt para o Cursor — RC Armazenagem (Fase 2 de 2)

> Cole este documento inteiro como contexto/instrução inicial no Cursor, num **projeto/chat novo**, separado do site de Transportes. Gere **por etapas** (ver seção 10), nunca peça pra gerar o site inteiro numa tacada só — isso produz resultado genérico.

## ⚠️ LEIA ANTES DE COMEÇAR — arquivos obrigatórios, não é opcional

**Antes de escrever qualquer código, adicione estes arquivos à pasta do projeto e ABRA cada um deles:**

1. `rc-brand-book.html` — abra no navegador. Referência definitiva de cor, tipografia, ícone, tratamento de foto e componentes. Copie os valores exatos do código-fonte, não reescreva "parecido".
2. `rc-wireframe-hifi-homes.html` — abra e inspecione o código-fonte, aba "RC Armazenagem". Layout pixel a pixel a reproduzir.
3. `rc-wireframe-hifi-internas.html` — mesma lógica, aba "RC Armazenagem" (Estrutura, Compliance).
4. `rc-copy-dois-sites.md` — seção "SITE 2 — RC ARMAZENAGEM", copiar o texto exatamente.
5. Pasta `assets-visuais/`:
   - `logo-simbolo.png` — símbolo R/C oficial (mesma logo do site de Transportes — é a mesma empresa, mesmo símbolo)
   - `header-anim-armazenagem.webp` — animação da empilhadeira passando pelo logo no header
   - `hero-armazenagem.mp4` — vídeo real do galpão (empilhadeira circulando entre estantes altas cheias de produto químico) para o hero da home
   - `hero-armazenagem-poster.jpg` — frame de capa do vídeo

**Se qualquer um desses arquivos não estiver disponível, PARE e peça pro usuário fornecê-los — não improvise substituto.**

## ⚠️ Regra mais importante do projeto: este é um site novo, sem site antigo de referência

Diferente do site de Transportes (que já existia e precisava preservar texto/SEO), a **Armazenagem nunca teve site próprio** — hoje é só uma menção dentro do site de Transportes. Isso significa:

- **Não existe conteúdo antigo a preservar.** Todo texto vem da seção 6 abaixo (já escrito) ou dos dados pendentes do cliente (seção 8).
- **Todas as decisões visuais vêm 100% do Brand Book + wireframes.** Isso já era regra no site de Transportes, mas aqui é ainda mais direto por não haver "âncora" de site antigo puxando pra outro estilo.
- **Este é um site B2B de geração de leads.** Estudamos 3 concorrentes do setor (DSV, Unimol Brasil, Sanco Logística) pra calibrar o que costuma converter nesse nicho — isso está incorporado na estrutura da seção 4.

---

## 2. Sistema de design (idêntico ao site de Transportes, com a hierarquia de cor invertida)

### Cores
```css
--verde: #1F6B47;        /* DOMINANTE neste site (Armazenagem) */
--verde-escuro: #164D33;
--azul: #2D6CA6;          /* apoio, usado com moderação */
--azul-escuro: #1F4E7A;
--ambar: #D98A2B;         /* CTA — compartilhado com o site de Transportes */
--texto: #14181C;
--fundo: #F7F7F5;
--borda: #D8DBD6;
```

### Tipografia
Mesma do site de Transportes: **Archivo** (títulos, 700-800), **IBM Plex Sans** (corpo, 400-500), **IBM Plex Mono** (dados técnicos — aqui usar bastante, para números de m², certificações, posições de pallet).

### Iconografia — atenção, é DIFERENTE do site de Transportes
Grade 24×24, traço 1.75px, mas aqui **stroke-linecap: square** e **stroke-linejoin: miter** (pontas retas/quadradas — remete a estrutura e precisão, oposto do arredondado usado em Transportes). Essa diferença é intencional e é a principal assinatura que distingue os dois sites visualmente além da cor.

### Fotografia
- Corte **ortogonal/reto** (sem inclinação diagonal) — oposto do corte diagonal usado em Transportes
- **Texto nunca sobrepõe foto** — sempre em bloco sólido ao lado ou abaixo (reforça "cada coisa no seu lugar")
- Tom levemente mais frio/calmo que Transportes

### Logo
Mesmo símbolo R/C do site de Transportes (arquivo `logo-simbolo.png`, idêntico). Lockup: símbolo + palavra "Armazenagem" como texto vivo ao lado — nunca "Transportes e Logística" embutido.

---

## 3. Animação do logo no header

Mesma mecânica do site de Transportes (ver documentação técnica lá se precisar), trocando o veículo:

1. `header-anim-armazenagem.webp` mostra uma **empilhadeira** carregando uma caixa até a posição do logo, "descarregando" (a caixa vira o logo) e **dando ré pra sair** — diferente do caminhão de Transportes, que continua pra frente. Isso é proposital: empilhadeira de verdade sai de ré depois de descarregar.
2. Container do ícone com tamanho fixo (ex: 70×54px), `overflow: hidden`, imagem com `object-fit: contain` — mesmo cuidado do site de Transportes para não "estourar" o espaço do header.
3. Crossfade pro logo estático real ao final (~4,6s), nunca fica no frame congelado do vídeo.
4. Dispara ao carregar a página (uma vez por sessão, via `sessionStorage`) e a cada `onMouseEnter` no logo.
5. Texto "Armazenagem" é elemento HTML separado do ícone animado, mesmo timing de fade.

---

## 4. Estrutura de páginas

Baseada no wireframe hi-fi + nos 3 concorrentes pesquisados (DSV, Unimol Brasil, Sanco Logística) — a estrutura abaixo combina o que valida nos três com nossa identidade visual.

### Home (`/`)
1. **Header:** logo animado (seção 3) + nav (Estrutura, Compliance, Como Funciona, Transporte, Contato) + CTA "Orçamento"
2. **Hero:** vídeo real de fundo (`hero-armazenagem.mp4`, mesmo padrão técnico do hero de Transportes — `autoplay muted loop playsInline`, clip-path ortogonal, `poster` de fallback). Headline: "Guardamos e levamos sua carga até o destino final." Subheadline sobre fornecedor único. CTA "Conhecer estrutura"
3. **Bloco cross-link** (logo abaixo do hero, não no rodapé): "Armazenagem e transporte, numa só operação" — CTA pro site de Transportes
4. **Números em destaque** (padrão validado nos 3 concorrentes — usar `IBM Plex Mono` grande): m² de área, posições de pallet, certificações. **Valores reais pendentes do cliente — usar placeholder `[ ]` visível até confirmação, nunca inventar número**
5. **Como funciona:** 3 passos (Recebimento → Estocagem → Expedição) com o motivo animado de rack (níveis acendendo em sequência — código de referência na seção 5)
6. **Por que escolher a RC Armazenagem:** 3-4 cards de benefício (ex: localização estratégica, tecnologia/WMS, redução de custo operacional, compliance regulatório) — adaptar copy ao segmento de carga regulada da RC, não copiar texto dos concorrentes
7. **Compliance:** chips com as certificações (seção 6)
8. **FAQ:** 4-5 perguntas comuns (rascunho na seção 6 — validar com cliente antes de publicar)
9. **Depoimentos:** estrutura pronta para receber depoimentos reais de clientes — **não inventar depoimentos falsos**, deixar placeholder claro ("Depoimento em breve") até o cliente fornecer
10. **Footer:** mesmo padrão do site de Transportes, endereços da RC, com link cruzado pro site de Transportes

### Como Funciona (`/como-funciona`)
Versão expandida da seção 5 da home — os 3 passos detalhados, com o motivo animado de rack como elemento central (seção 5).

### Estrutura (`/estrutura`)
- Números-chave (mesmos da home, em destaque maior)
- Grid de features com foto (padrão Unimol: monitoramento 24h, controle de acesso, sistema WMS, prevenção de incêndio) — fotos reais pendentes do cliente, usar placeholder com corte ortogonal
- Fachada, corredores, área de expedição (fotos pendentes)

### Compliance (`/compliance`)
Lista detalhada de certificações com ícone (traço quadrado) + descrição — ver seção 6.

### Transporte (`/transporte`)
Página-vitrine curta, puxando pro site de Transportes (mesma lógica de cross-link já documentada no prompt do site de Transportes).

### Contato / Orçamento (`/contato`, `/orcamento`)
Formulário mais completo que um formulário simples de contato — seguindo o padrão validado pelos concorrentes: nome, empresa, e-mail, telefone, tipo de produto/carga, volume mensal estimado, mensagem. Campo **pré-marcado por padrão**: "Quero que a RC também transporte" (checkbox true por padrão — reflete que armazenagem quase sempre implica transporte, ao contrário do site de Transportes onde é opcional/desmarcado).

---

## 5. Motivo animado — rack de estocagem

Na seção "Como funciona", níveis de uma estante porta-pallet acendem em sequência (uma vez, ao entrar na viewport — **não em loop contínuo**, diferente do motivo de rota do site de Transportes):

```css
.pallet { background: #B9CBC0; animation: light 4s ease-in-out; animation-play-state: paused; }
.pallet.in-view { animation-play-state: running; }
@keyframes light {
  0%, 8% { background: #B9CBC0; }
  16%, 82% { background: #1F6B47; }
  92%, 100% { background: #B9CBC0; }
}
```
Usar `IntersectionObserver` pra disparar `animation-play-state: running` quando a seção entra na tela, com `animation-delay` escalonado por pallet pra criar o efeito de sequência. Rotular os 3 níveis como Recebimento / Estocagem / Expedição, conforme wireframe.

---

## 6. Conteúdo real (copy já escrita — copiar exatamente do `rc-copy-dois-sites.md`)

### Tom: incluso/integrado
O transporte é apresentado como parte natural do serviço, não como upsell à parte (diferente do site de Transportes, onde armazenagem é oferecida como opcional). Ver `rc-copy-dois-sites.md`, seção "SITE 2 — RC ARMAZENAGEM" para hero, cross-link, como funciona, formulário — copiar literalmente.

### Certificações a exibir (mesma lista do site de Transportes — é a mesma empresa)
ISO 9001 · ANVISA · Licenças da Polícia Federal, Exército, Governo Estadual e Prefeitura · Corpo de Bombeiros (AVCB) · SASSMAQ · CRF (Conselho Regional de Farmácia) · Licença Ambiental IBAMA

### FAQ — rascunho a validar com o cliente antes de publicar
- "Que tipos de produto vocês armazenam?" → cosméticos, saneantes, correlatos, químicos (incluindo produtos perigosos/controlados/inflamáveis) e medicamentos/produtos hospitalares
- "Existe seguro para a carga armazenada?" → **[confirmar com cliente]**
- "Qual o prazo mínimo de contrato?" → **[confirmar com cliente]**
- "O transporte já sai incluso?" → sim, é a mesma operação (reforça o tom incluso/integrado)
- "Como funciona o controle de temperatura?" → **[confirmar com cliente — depende se há climatização]**

### Segmentos atendidos (reaproveitar do site de Transportes)
Cosméticos · Saneantes · Correlatos · Químicos (produtos perigosos, controlados, inflamáveis) · Medicamentos (produtos hospitalares)

---

## 7. SEO — requisitos básicos (site novo, sem posição a preservar)

Ao contrário do site de Transportes, aqui **não existe posição no Google a proteger** — é a oportunidade de começar já otimizado, sem dívida técnica:

1. Meta tags únicas por página, padrão `[Serviço] - RC Armazenagem`
2. `sitemap.xml` e `robots.txt` desde o primeiro deploy
3. Schema.org `LocalBusiness` no `<head>`
4. Vocabulário a incluir no texto/meta (mesmo vocabulário que já rankeia pro site de Transportes, vale usar aqui também): "produtos perigosos", "produtos controlados", "produtos inflamáveis", "produtos hospitalares"
5. Considerar, no médio prazo, páginas por cidade/região seguindo a mesma arquitetura "hub" documentada no prompt do site de Transportes (seção 7 daquele documento) — não é prioridade de lançamento, mas deixar a estrutura de rotas preparada para isso facilita adicionar depois

---

## 8. Dados ainda pendentes do cliente — não inventar

Marcar visualmente como placeholder até confirmação:
- Metragem total do galpão (m²)
- Número de posições de pallet / níveis de rack
- Se há controle de temperatura/climatização
- Prazo mínimo de contrato
- Política de seguro de carga armazenada
- Fotos reais: fachada, corredores de estoque, área de expedição, equipe
- Depoimentos de clientes reais

---

## 9. Segurança — mesmos requisitos do site de Transportes

Aplicar integralmente a seção 9 do prompt do site de Transportes (HTTPS, CSP headers, rate limiting no formulário, honeypot/CAPTCHA, sanitização de input, Cloudflare recomendado, backups, dependências atualizadas). O formulário deste site tem mais campos (empresa, CNPJ, volume) — validar e sanitizar todos eles, sem exceção, especialmente CNPJ (formato + não usar em query sem sanitizar).

---

## 10. Ordem de execução sugerida — gerar por etapas, aguardando aprovação a cada uma

1. Setup do projeto (reaproveitar config do site de Transportes se for o mesmo repositório/monorepo — senão, replicar setup de Tailwind com as cores/tipografia da seção 2)
2. Header com animação de logo (empilhadeira) — **mostrar e aguardar aprovação antes de seguir**
3. Hero da home com o vídeo real — aguardar aprovação
4. Bloco cross-link + números em destaque (com placeholders visíveis) — aguardar aprovação
5. Seção "Como funciona" com o motivo de rack animado — aguardar aprovação
6. Seções "Por que escolher", Compliance, FAQ — aguardar aprovação
7. Páginas internas (Estrutura, Compliance, Transporte) — aguardar aprovação
8. Formulário de orçamento com validação e segurança (seção 9) — aguardar aprovação
9. SEO técnico (seção 7)
10. Revisão de responsividade (mobile ~375px, tablet ~768px, desktop 1280px+) e performance antes do deploy

**Não fazer deploy em produção até os dados pendentes da seção 8 estarem confirmados** — números de estrutura inventados na página seriam informação falsa publicada no site da empresa.
