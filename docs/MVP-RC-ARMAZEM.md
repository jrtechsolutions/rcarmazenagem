# MVP — RC Armazém (site completo)

> Documento de inventário do MVP publicável do site **RC Armazém**.  
> Fonte: código em produção local (`src/`), `next.config.ts`, `site.ts`, `seo-segmentos.ts`.  
> Domínio canônico: **https://rcarmazem.com.br**  
> Stack: Next.js 16 (App Router) · React 19 · Tailwind 4 · TypeScript

---

## 1. Resumo executivo

| Item | Valor |
|------|--------|
| Produto | Site B2B de geração de leads — armazenagem de carga regulada |
| Marca | RC Armazém (Grupo RC; irmão de RC Transportes) |
| Escopo MVP | 8 páginas estáticas + 11 landings SEO + funil de orçamento + LGPD |
| URLs no sitemap | **19** |
| Redirects 301 | **2** |
| API | `POST /api/orcamento` |
| Middleware | Nenhum |
| Hub por cidade | Stub (`cidades.ts`) — **não gera rotas** |

**Promessa central:** um fornecedor do galpão à entrega (armazenagem + frota RC), com compliance (ANVISA, CETESB, IBAMA, PF, AVCB) e WMS/FEFO.

---

## 2. Identidade e posicionamento

### 2.1 Posicionamento de mercado

- **Não** é galpão genérico / self-storage.
- **É** operação de armazenagem regulada (cosméticos, saneantes, correlatos, medicamentos, químicos, alimentícios, TI) com rastreabilidade e licenças.
- Diferencial vs. concorrente “só depósito”: **mesmo grupo que transporta** — sem quebra de rastreio na troca de fornecedor.
- Tom: B2B técnico, português direto, sem jargão vazio. Verde dominante (#1F6B47); âmbar (#D98A2B) só em CTA.

### 2.2 Dados institucionais (`SITE`)

| Campo | Valor |
|-------|--------|
| Nome | RC Armazém |
| URL | https://rcarmazem.com.br |
| Site irmão | https://rctransportes.netlify.app |
| E-mail | cotacao@rctransportes.com.br |
| Telefone | (11) 5521-8282 → `tel:+551155218282` |
| WhatsApp | (11) 94603-3490 → `https://wa.me/5511946033490` |
| Instagram | https://www.instagram.com/rctransportesoficial/ |
| Facebook | https://www.facebook.com/rctransportes |
| LinkedIn | post UGC Grupo RC |
| Dev | JR Technology Solutions |
| Fundação grupo | 2001 (chip “25 anos” no hero) |

### 2.3 Endereços (`ENDERECOS`)

1. **São Paulo** — Av. do Rio Bonito, 1.522 — Veleiros — CEP 04776-002  
2. **Jundiaí** — Av. Juvenal Arantes, 2.500 — Jardim Sarapiranga — Galpões 14, 15 e 16 — CEP 13212-354  
3. **Jundiaí** — Rod. Dom Gabriel Paulino Bueno Couto, Km 71 — CEP 13201-000  
4. **Jundiaí** — R. Miguel Latorre, 1.100 — Distrito Industrial I — CEP 13212-009  

### 2.4 Design system (referência)

```css
--verde: #1F6B47;        /* dominante */
--verde-escuro: #164D33;
--azul: #2D6CA6;         /* apoio */
--ambar: #D98A2B;        /* CTA */
--texto: #14181C;
--fundo: #F7F7F5;
--borda: #D8DBD6;
```

| Camada | Fonte |
|--------|--------|
| Display / H1–H2 | Archivo 600–900 |
| Corpo | IBM Plex Sans |
| Dados / labels | IBM Plex Mono |

Ícones: grade 24×24, stroke 1.75, **square/miter** (assinatura visual Armazém vs. Transportes arredondado). Fotos com corte ortogonal; texto não sobrepõe mídia.

---

## 3. Mapa de rotas (MVP)

### 3.1 Páginas indexáveis

| Rota | Tipo | Priority sitemap | Arquivo |
|------|------|------------------|---------|
| `/` | Home | 1.0 | `src/app/page.tsx` |
| `/estrutura` | Institucional | 0.8 | `src/app/estrutura/page.tsx` |
| `/compliance` | Institucional | 0.8 | `src/app/compliance/page.tsx` |
| `/como-funciona` | Institucional | 0.8 | `src/app/como-funciona/page.tsx` |
| `/quem-somos` | Institucional | 0.8 | `src/app/quem-somos/page.tsx` |
| `/contato` | Conversão |  é 0.8 | `src/app/contato/page.tsx` |
| `/orcamento` | Conversão | 0.8 | `src/app/orcamento/page.tsx` |
| `/politica-de-privacidade` | Legal | 0.8 | `src/app/politica-de-privacidade/page.tsx` |
| `/armazenagem-*` (11) | Landing SEO | 0.85 | `src/app/[slug]/page.tsx` |

### 3.2 Páginas não indexáveis / utilitárias

| Rota | Comportamento |
|------|----------------|
| `/confirmacao` | Pós-form; `robots: noindex, nofollow`; fora do sitemap |
| `/api/orcamento` | POST; `robots` disallow `/api/` |
| 404 (`not-found.tsx`) | CTAs → Home e Estrutura |

### 3.3 Navegação global (`NAV`)

| Label | Href | Notas |
|-------|------|--------|
| Estrutura | `/estrutura` | |
| Compliance | `/compliance` | |
| Como funciona | `/como-funciona` | |
| Quem somos | `/quem-somos` | |
| Transporte | site Transportes (externo) | `external: true` |
| Contato | `/contato` | |
| **Orçamento** (CTA header) | `/orcamento` | botão âmbar |
| Badge “Parte do Grupo RC” | Transportes | |

Shell global (`layout.tsx`): Header → `<main>` → Footer → WhatsAppFab → CookieBanner (+ GA condicionado a consentimento).

---

## 4. Redirects (301 permanentes)

Definidos em `next.config.ts` → `redirects()`:

| Origem | Destino | Motivo |
|--------|---------|--------|
| `/armazenagem-cosmeticos-regulados` | `/armazenagem-materias-primas-cosmeticos` | Slug canônico atualizado (insumos, não só produto acabado) |
| `/armazenagem-produtos-quimicos` | `/armazenagem-produtos-quimicos-perigosos` | Slug canônico com “perigosos” |

Sem middleware; sem outros redirects no edge.

---

## 5. SEO técnico global

### 5.1 Metadata default (`layout.tsx`)

| Campo | Valor |
|-------|--------|
| `metadataBase` | `https://rcarmazem.com.br` |
| `title.default` | Armazenagem de Produtos Regulados em SP \| RC Armazém |
| `title.template` | `%s \| RC Armazém` |
| `description` | Armazenagem de matérias-primas cosméticas, saneantes, correlatos, medicamentos, químicos, alimentícios e equipamentos de TI. Licença ANVISA, CETESB e sistema WMS. |
| Open Graph | `website`, `pt_BR`, imagem `/assets-visuais/hero-armazenagem-poster.jpg` |
| Icons | `/favicon.png`, `/apple-icon.png` |

### 5.2 `robots.ts`

```
Allow: /
Disallow: /api/
Disallow: /confirmacao
Sitemap: https://rcarmazem.com.br/sitemap.xml
```

### 5.3 `sitemap.ts`

- 8 estáticas (prioridade 1 na home, 0.8 demais)  
- 11 segmentos (prioridade 0.85)  
- `changeFrequency: weekly`, `lastModified: now`

### 5.4 Headers de segurança (`next.config.ts`)

| Header | Valor |
|--------|--------|
| X-Content-Type-Options | nosniff |
| X-Frame-Options | DENY |
| Referrer-Policy | strict-origin-when-cross-origin |
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload |
| Content-Security-Policy | default-src self; script unsafe-inline/eval; img self+data+blob; frame-ancestors none; … |
| Permissions-Policy | camera=(), microphone=(), geolocation=(), payment=() |
| poweredByHeader | false |

### 5.5 JSON-LD

| Schema | Onde |
|--------|------|
| `Organization` | Layout global — nome, logo, tel, e-mail, 2 endereços, 11 `makesOffer`, credenciais |
| `FAQPage` | Home (7 FAQs); segmento medicamentos (1 FAQ) |
| `Service` + `BreadcrumbList` | Cada landing `[slug]` |
| `FAQPage` (segmento) | Só se `page.faq` existir |

### 5.6 Glossário SEO (`TIPS`)

ANVISA · WMS · CETESB · FISPQ · AVCB · IBAMA · Polícia Federal — tooltips reutilizados nas landings e compliance.

---

## 6. Estrutura HTML por página (wireframe textual)

Convenção de outline: elementos semânticos na ordem do DOM.

### 6.1 Shell global (todas as páginas)

```html
<html lang="pt-BR">
  <head><!-- metadata Next + fonts Archivo / IBM Plex --></head>
  <body>
    <script type="application/ld+json"><!-- Organization --></script>
    <header><!-- LogoLockup + NavPill + badge Grupo RC + CTA Orçamento --></header>
    <main>{página}</main>
    <footer><!-- endereços, contato, redes, política, crédito JR --></footer>
    <a class="whatsapp-fab" href="wa.me/...">WhatsApp</a>
    <!-- CookieBanner + GA4 se consentimento -->
  </body>
</html>
```

---

### 6.2 Home `/`

**Metadata:** herda layout + FAQ JSON-LD.

```html
<main>
  <!-- 1. HERO #hero -->
  <section id="hero">
    <p class="eyebrow">Grupo RC</p>
    <h1>Um grupo. Do galpão à entrega.</h1>
    <p>Sem repasse entre empresas. A mesma operação que guarda a carga também organiza o transporte.</p>
    <a href="/estrutura">Conhecer estrutura</a>
    <video poster="hero-armazenagem-poster.jpg" src="hero-armazenagem.mp4" />
    <div class="stat-chip"><b>25</b> anos de grupo RC</div>
  </section>

  <!-- 2. COMO FUNCIONA (teaser) -->
  <section>
    <h2>Como funciona</h2>
    <p>Três etapas, um mesmo responsável do início ao fim.</p>
    <!-- CutawayFlow compact + link Ver fluxo completo → /como-funciona -->
  </section>

  <!-- 3. COMPARATIVO -->
  <section>
    <p>Por que escolher a RC Armazém</p>
    <h2>Um fornecedor, do início ao fim</h2>
    <!-- CompareTable: 4 linhas -->
  </section>

  <!-- 4. SEGMENTOS -->
  <section>
    <p>Segmentos</p>
    <h2>11 segmentos com processo próprio pra cada categoria</h2>
    <!-- SegmentCarousel: 11 cards -->
  </section>

  <!-- 5. COMPLIANCE -->
  <section>
    <h2>Compliance</h2>
    <p><!-- COMPLIANCE_INTRO --></p>
    <!-- chips COMPLIANCE_DESTAQUE + CertWall + CertLine -->
    <a href="/compliance">Ver certificações →</a>
  </section>

  <!-- 6. FAQ -->
  <section>
    <h2><!-- FAQ --></h2>
    <!-- 7 <details> FAQ -->
    <a href="whatsapp">Não achou sua pergunta?</a>
  </section>

  <!-- 7. DEPOIMENTOS -->
  <section><!-- Testimonials: 4 quotes Google 5★ --></section>

  <!-- 8. ESTRUTURA TEASER -->
  <section>
    <h2>O galpão por trás da operação</h2>
    <!-- BentoGrid → /estrutura -->
  </section>

  <!-- 9. CROSS-LINK TRANSPORTES -->
  <section>
    <h2>Armazenagem e transporte, numa só operação</h2>
    <a href="TRANSPORTES">Ver frota de Transportes →</a>
  </section>
</main>
```

**Tabela comparativa (`COMPARACAO`):**

| Critério | Sem RC integrada | Com RC |
|----------|------------------|--------|
| Fornecedores | 2 empresas | 1 só |
| Rastreabilidade na troca | Se perde | Contínua |
| Coordenação | Você gerencia dois contratos | RC coordena |
| Custo de intermediação | Repasse | Sem intermediação |

**FAQ home (7):**

1. Licença ambiental? → CETESB  
2. Tipos de produto? → 11 segmentos  
3. Norma medicamentos? → RDC 653/2022  
4. Seguro? → Sim *(pendente: condições)*  
5. Prazo mínimo contrato? → Sob medida *(pendente)*  
6. Transporte incluso? → Sim, frota RC  
7. Controle de temperatura? → Depende da área *(pendente)*  

---

### 6.3 Estrutura `/estrutura`

| Meta title | Estrutura do Galpão |
| Meta description | Galpão dimensionado pra produto regulado… |

```html
<main>
  <section class="photo-hero">
    <p>Estrutura</p>
    <h1>O galpão por trás da operação.</h1>
    <p><!-- zonas, processo documentado --></p>
    <img src="/assets-estrutura/estrutura-fachada.jpg" alt="Fachada…" />
  </section>

  <section><!-- fotos corredor + expedição --></section>

  <section>
    <h2>O que garante que sua carga está segura aqui</h2>
    <!-- 4 NumberedCard: Monitoramento 24h, Controle de acesso, WMS, AVCB -->
  </section>

  <section class="cta-band">
    <h2>Quer visitar o galpão antes de fechar?</h2>
    <a href="/orcamento">Agendar visita</a>
  </section>
</main>
```

---

### 6.4 Compliance `/compliance`

| Meta title | Compliance e Certificações |

```html
<main>
  <section>
    <h1>Guardar produto controlado exige mais que espaço.</h1>
    <p><!-- COMPLIANCE_INTRO --></p>
    <!-- ComplianceSeal -->
  </section>

  <section>
    <h2>Como garantimos isso</h2>
    <!-- ComplianceGroups:
         Licenciamento | Emergência | Controle operacional | Documentação técnica -->
  </section>

  <section>
    <h2>Certificações da operação</h2>
    <!-- CertWall + CertLine -->
  </section>

  <section class="cta-band">
    <h2>Precisa da documentação para auditoria própria?</h2>
    <a href="/orcamento">Solicitar documentos</a>
  </section>
</main>
```

**Itens compliance (destaque):** ANVISA, CETESB, IBAMA*, Polícia Civil, Polícia Federal*, AVCB, PAE, Controle de Acesso, Registro de Temperatura, Auditoria de Lote, FISPQ.  
\*Pendentes de confirmação de escopo com o cliente (Douglas).

**Certificações wall:** ISO 9001, ANVISA, CETESB, Licenças PF/Exército/Estadual/Prefeitura, AVCB, SASSMAQ, CRF, IBAMA.

---

### 6.5 Como funciona `/como-funciona`

| Meta title | Como Funciona a Armazenagem |

```html
<main>
  <section>
    <h1>Três etapas. Um mesmo responsável.</h1>
  </section>

  <section>
    <h2>Do caminhão que chega ao caminhão que sai</h2>
    <!-- CutawayFlow full: 3 vídeos PASSOS -->
    <!-- FLOW_TECH: WMS | FEFO | Separação por classe -->
  </section>

  <section class="cta-band">
    <a href="/orcamento"><!-- proposta armazenagem + transporte --></a>
  </section>
</main>
```

**Passos:**

| # | Título | Resumo |
|---|--------|--------|
| 1 | Recebimento | Conferência e etiquetagem na doca |
| 2 | Estocagem | Posição por tipo + FEFO + segregação |
| 3 | Expedição | Separação + frota RC + rastreio |

---

### 6.6 Quem somos `/quem-somos`

| Meta title | Quem Somos |

```html
<main>
  <section>
    <p>Parte do Grupo RC</p>
    <h1>Armazenagem regulada, com o mesmo padrão que já confiam no transporte.</h1>
  </section>

  <section><!-- História: 3 parágrafos + foto fachada --></section>

  <section>
    <h2>Missão, visão e valores</h2>
    <!-- Missão / Visão / Valores: Rastreabilidade, Conformidade, Responsabilidade única -->
  </section>

  <section><!-- CertWall + CertLine --></section>

  <section>
    <h2>Quem atendemos</h2>
    <!-- 4 cards: cosmética, química, farmácia, saneantes -->
  </section>

  <section>
    <h2>Nossas unidades</h2>
    <!-- 4 iframes Google Maps -->
  </section>

  <section class="cta-band">
    <a href="/orcamento">Quer armazenar com a RC?</a>
  </section>
</main>
```

---

### 6.7 Contato `/contato`

| Meta title | Fale com a RC Armazém *(title.absolute — sem sufixo)* |

```html
<main>
  <section><!-- PageHero: Fale com quem opera o galpão. --></section>
  <section>
    <!-- Canais: tel, WhatsApp, e-mail -->
    <!-- Unidades #unidades / #unidades-sao-paulo / #unidades-jundiai -->
    <!-- QuoteForm -->
  </section>
</main>
```

---

### 6.8 Orçamento `/orcamento`

| Meta title | Orçamento |

```html
<main>
  <section><!-- PageHero: Diga o tipo de produto e o volume estimado. --></section>
  <section><!-- QuoteForm centralizado --></section>
</main>
```

**Campos do formulário (`QuoteForm`):**

| Campo | Tipo |
|-------|------|
| Nome | text |
| Empresa | text |
| CNPJ | text (validado) |
| E-mail | email |
| Telefone | tel |
| Tipo de produto | select (11 segmentos) |
| Volume mensal | select (`VOLUMES`: até 50 / 50–200 / 200–500 / acima 500 / não sei) |
| Mensagem | textarea |
| Transporte RC incluso | checkbox (default on) |
| `website` | honeypot (hidden) |

Submit → `POST /api/orcamento` → redirect `/confirmacao`.

---

### 6.9 Confirmação `/confirmacao` (noindex)

```html
<main>
  <h1>Recebemos sua solicitação.</h1>
  <!-- stepper: Recebemos → Retornamos em 4h → Confirmamos -->
  <!-- WhatsApp urgente + link Transportes + link Home -->
</main>
```

---

### 6.10 Política de privacidade `/politica-de-privacidade`

```html
<main>
  <section>
    <p>Legal</p>
    <h1>Política de Privacidade</h1>
    <p>Última atualização: 23/09/2026</p>
  </section>
  <article class="legal-doc">
    <!-- 1 Quem somos (RC TRANSPORTES LTDA CNPJ 04.409.228/0001-90)
         2 Dados coletados
         3 Finalidades
         4 Compartilhamento (Google, Meta/WhatsApp)
         5 Cookies
         6 Retenção
         7 Direitos LGPD
         8 DPO Angelica Ferrari
         9 … 10 Contato /contato -->
  </article>
</main>
```

---

### 6.11 Template landing SEO `/[slug]` (`SegmentArticle`)

`dynamicParams = false`; só os 11 slugs de `SEGMENT_PAGES`.

```html
<main>
  <script type="application/ld+json"><!-- Service --></script>
  <script type="application/ld+json"><!-- BreadcrumbList --></script>
  <!-- FAQPage se page.faq -->

  <section>
    <nav aria-label="Breadcrumb">Home / {serviceType}</nav>
    <p class="eyebrow">{eyebrow}</p>
    <h1>{h1}</h1>
    <p>{lead}</p>
  </section>

  <nav aria-label="Nesta página">
    Referência · Sobre o serviço · [FAQ] · Relacionadas
  </nav>

  <div class="seo-sp-layout">
    <div class="seo-sp-main">
      <section id="referencia">
        <h2>Referência da operação</h2>
        <!-- 3 seo-data-box (refs) -->
      </section>

      <section id="sobre">
        <!-- SegmentBody: 3 <p> por id -->
        <!-- vocab chips -->
      </section>

      <section id="faq"><!-- opcional --></section>

      <section id="relacionadas">
        <h2>Páginas relacionadas</h2>
        <!-- 3 related-card -->
      </section>

      <section>
        <div class="trust-badge">{trust}</div>
        <b>{ctaTitle}</b>
        <a href="/orcamento">Solicitar orçamento</a>
      </section>
    </div>

    <aside class="seo-sp-side">
      <!-- sidebar sticky: refs rápidas -->
    </aside>
  </div>
</main>
```

---

## 7. Catálogo completo das 11 landings SEO

### 7.1 Tabela canônica

| # | Slug | ID | Certificação | Meta title |
|---|------|-----|--------------|------------|
| 1 | `/armazenagem-materias-primas-cosmeticos` | cosmeticos | ANVISA | Armazenagem de matérias-primas para cosméticos |
| 2 | `/armazenagem-saneantes` | saneantes | AVCB | Armazenagem de saneantes |
| 3 | `/armazenagem-correlatos` | correlatos | ANVISA | Armazenagem de correlatos |
| 4 | `/armazenagem-medicamentos` | medicamentos | ANVISA | Armazenagem de medicamentos |
| 5 | `/armazenagem-medicamentos-controlados` | medicamentos-controlados | Polícia Federal | Armazenagem de medicamentos controlados |
| 6 | `/armazenagem-produtos-quimicos-perigosos` | quimicos | CETESB | Armazenagem de produtos químicos perigosos |
| 7 | `/armazenagem-resinas-quimica-industrial` | resinas | CETESB | Armazenagem de resinas e química industrial |
| 8 | `/armazenagem-polimeros-borrachas-carbono` | polimeros | IBAMA | Armazenagem de polímeros, borrachas e carbono |
| 9 | `/armazenagem-aditivos-especialidades-quimicas` | aditivos | CETESB | Armazenagem de aditivos e especialidades químicas |
| 10 | `/armazenagem-equipamentos-ti` | equipamentos-ti | Controle de acesso | Armazenagem de equipamentos de TI |
| 11 | `/armazenagem-alimenticios` | alimenticios | Área exclusiva | Armazenagem de produtos alimentícios |

### 7.2 Copy H1 + lead + meta description

#### 1. Matérias-primas cosméticas
- **H1:** Armazenagem de matérias-primas e insumos para cosméticos.
- **Lead:** Bases, óleos, essências e ativos dermatológicos, com o mesmo cuidado documental exigido pro produto acabado.
- **Meta desc:** Armazenagem de matérias-primas e insumos cosméticos com licença ANVISA, WMS por lote e rastreabilidade. São Paulo e Jundiaí.
- **Refs:** ANVISA · Insumo e embalagem · WMS por lote  
- **Vocab:** matérias-primas cosméticas · ativos dermatológicos · embalagem cosmética  
- **Trust:** Licença ANVISA verificável  
- **CTA:** Orçamento de armazenagem de matérias-primas cosméticas  
- **Related:** saneantes · compliance · como-funciona  
- **Body:** insumos (bases, óleos, essências, ativos, conservantes…) + embalagens (frascos, potes, bisnagas…) + público indústria/formuladora  

#### 2. Saneantes
- **H1:** Armazenagem de saneantes e domissanitários.
- **Lead:** Produto de risco controlado exige área própria dentro do galpão, com AVCB vigente.
- **Meta desc:** Armazenagem de saneantes e domissanitários com área segregada e AVCB vigente. São Paulo e Jundiaí.
- **Refs:** AVCB · Risco I e II · Área segregada  
- **Trust:** AVCB verificável  

#### 3. Correlatos
- **H1:** Armazenagem de correlatos regulamentados pela ANVISA.
- **Lead:** Produto correlato armazenado com o mesmo rigor documental de produto hospitalar.
- **Refs:** ANVISA · Correlatos · Rastreio por lote  

#### 4. Medicamentos
- **H1:** Armazenagem de medicamentos.
- **Lead:** Cadeia de custódia rastreável do recebimento até a expedição, conforme RDC 653/2022.
- **Refs:** RDC 653/2022 · ANVISA · WMS por lote  
- **FAQ:** “A armazenagem de medicamentos segue alguma norma específica da ANVISA?” → RDC 653/2022  
- **Related:** controlados · correlatos · compliance  

#### 5. Medicamentos controlados
- **H1:** Armazenagem de medicamentos controlados.
- **Lead:** Psicotrópico e entorpecente exigem licenciamento adicional junto à Polícia Federal, além da ANVISA.
- **Refs:** Polícia Federal · ANVISA · Área restrita  
- **Vocab:** medicamentos controlados · psicotrópicos · Portaria 344  
- **Norma citada no body:** Portaria SVS/MS 344/98 + RDC 653/2022  

#### 6. Químicos perigosos
- **H1:** Armazenagem de produtos controlados e químicos perigosos.
- **Lead:** Instalação preparada e autorizada pra movimentação e estocagem de material classificado.
- **Refs:** CETESB · Polícia Federal · FISPQ por produto  

#### 7. Resinas / química industrial
- **H1:** Armazenagem de insumos para resinas e química industrial.
- **Lead:** Resina epóxi, poliuretano e endurecedor armazenados com controle de classe e validade.
- **Refs:** CETESB · IBAMA · FISPQ  

#### 8. Polímeros / borrachas / carbono
- **H1:** Armazenagem de polímeros, borrachas e carbono.
- **Lead:** Borracha sintética e negro de fumo…  
- **Refs:** CETESB · IBAMA · Área segregada  

#### 9. Aditivos / especialidades
- **H1:** Armazenagem de aditivos e especialidades químicas.
- **Lead:** Cargas minerais, antioxidantes e aceleradores…  
- **Refs:** CETESB · FISPQ · Área segregada  

#### 10. Equipamentos de TI
- **H1:** Armazenagem de equipamentos e gabinetes de TI.
- **Lead:** Manuseio técnico de rack… controle de acesso rígido.
- **Refs:** Controle de acesso · Manuseio técnico · Área seca  
- **Nota:** sem risco químico / vigilância sanitária — foco em valor e avaria  

#### 11. Alimentícios
- **H1:** Armazenagem de produtos alimentícios.
- **Lead:** Área própria, separado de químico ou risco.
- **Refs:** Área exclusiva · WMS por lote · Controle de acesso  

---

## 8. Segmentos no carrossel da home (`SEGMENTOS`)

Mesmos 11 IDs, com card curto + imagem + `href` para a landing:

| ID | Nome no card | Cert chip | Imagem |
|----|--------------|-----------|--------|
| cosmeticos | Matérias-primas cosméticas | ANVISA | `/segmentos/cosmeticos.jpg` |
| saneantes | Saneantes | AVCB | `/segmentos/saneantes.jpg` |
| correlatos | Correlatos | ANVISA | `/segmentos/correlatos.png` |
| medicamentos | Medicamentos | ANVISA | `/segmentos/medicamentos.jpg` |
| medicamentos-controlados | Medicamentos controlados | Polícia Federal | `/segmentos/medicamentos.jpg` |
| quimicos | Químicos perigosos | CETESB | `/segmentos/quimicos.jpg` |
| resinas | Resinas e química industrial | CETESB · IBAMA | `/segmentos/quimicos.jpg` |
| polimeros | Polímeros e borrachas | IBAMA | `/segmentos/quimicos.jpg` |
| aditivos | Aditivos e especialidades | CETESB | `/segmentos/quimicos.jpg` |
| equipamentos-ti | Equipamentos de TI | Controle de acesso | `/segmentos/correlatos.png` |
| alimenticios | Alimentícios | Área exclusiva | `/segmentos/saneantes.jpg` |

---

## 9. Funil de conversão

```
[Landing / Home / Internas]
        │
        ▼
   /orcamento  ou  /contato (mesmo QuoteForm)
        │
        ▼
 POST /api/orcamento
   · rate limit 5 / 10 min por IP
   · honeypot `website`
   · valida CNPJ + campos
   · envia: CONTACT_WEBHOOK_URL → senão Resend → senão log (dev)
        │
        ▼
   /confirmacao (noindex)
        │
        ├── WhatsApp urgente
        └── Cross-sell Transportes
```

**CTAs recorrentes → `/orcamento`:** header, CtaBands (estrutura, compliance, como-funciona, quem-somos), landings SEO, sidebar.  
**CTAs → WhatsApp:** FAB global, FAQ home, confirmação.  
**CTAs → Transportes externo:** nav, badge Grupo RC, CrossLink home, confirmação.

---

## 10. Assets principais

| Path | Uso |
|------|-----|
| `/assets-visuais/logo-simbolo.png` | Logo / schema |
| `/assets-visuais/header-anim-armazenagem.webp` | Animação header (empilhadeira) |
| `/assets-visuais/hero-armazenagem.mp4` + `poster.jpg` | Hero home + OG |
| `/assets-visuais/fluxo-*.mp4` | CutawayFlow (recebimento/estocagem/expedição) |
| `/assets-estrutura/estrutura-*.jpg` | Página Estrutura + Quem somos |
| `/segmentos/*` | Cards carrossel |

---

## 11. Fora do MVP (roadmap stub)

| Item | Status |
|------|--------|
| Hubs por cidade (`CIDADES_HUB`: SP, Jundiaí, Campinas, Hortolândia, Indaiatuba, Itatiba, Itu, Sorocaba, Sumaré, Vinhedo, Cajamar) | Stub — **não gerar** até Search Console |
| Números área 8500 m² / 3200 posições | `pendente: true` — não inventar |
| FAQ seguro / prazo / temperatura | Conteúdo provisório marcado pendente |
| Escopo IBAMA / Polícia Federal | Confirmar com Douglas |
| Página `/transporte` no mesmo domínio | Substituição: link externo Transportes |

---

## 12. Checklist de aceite do MVP

- [x] Home com hero vídeo, fluxo, comparativo, 11 segmentos, compliance, FAQ, depoimentos, cross-link  
- [x] Internas: Estrutura, Compliance, Como funciona, Quem somos  
- [x] Funil: Contato + Orçamento + API + Confirmação  
- [x] 11 landings SEO estáticas com schema Service/Breadcrumb  
- [x] 2 redirects 301 de slugs legados  
- [x] Sitemap 19 URLs + robots  
- [x] LGPD: CookieBanner + Política + GA condicionado  
- [x] WhatsApp FAB + Header/Footer globais  
- [x] Headers de segurança / CSP  
- [ ] Validar números e FAQs pendentes com cliente  
- [ ] Publicar domínio/DNS e Search Console  
- [ ] (Pós-MVP) hubs regionais se houver demanda orgânica  

---

## 13. Arquivos-fonte de verdade

| Papel | Arquivo |
|-------|---------|
| Config + redirects + headers | `next.config.ts` |
| Conteúdo institucional | `src/lib/site.ts` |
| Landings SEO | `src/lib/seo-segmentos.ts` |
| Corpo HTML segmentos | `src/components/SegmentArticle.tsx` |
| Schema.org | `src/lib/schema.ts` |
| Sitemap / Robots | `src/app/sitemap.ts`, `robots.ts` |
| Layout / metadata | `src/app/layout.tsx` |
| API orçamento | `src/app/api/orcamento/route.ts` |
| Cidades (futuro) | `src/lib/cidades.ts` |
| Brief original | `docs/prompt-cursor-rc-armazenagem.md` |

---

*Documento gerado a partir do estado do repositório. Atualizar este arquivo quando slugs, redirects ou páginas mudarem.*
