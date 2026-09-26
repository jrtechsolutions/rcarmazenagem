export type SegmentSlug =
  | "armazenagem-materias-primas-cosmeticos"
  | "armazenagem-saneantes"
  | "armazenagem-correlatos"
  | "armazenagem-medicamentos"
  | "armazenagem-medicamentos-controlados"
  | "armazenagem-produtos-quimicos-perigosos"
  | "armazenagem-resinas-quimica-industrial"
  | "armazenagem-polimeros-borrachas-carbono"
  | "armazenagem-aditivos-especialidades-quimicas"
  | "armazenagem-equipamentos-ti"
  | "armazenagem-alimenticios";

export type SegmentId =
  | "cosmeticos"
  | "saneantes"
  | "correlatos"
  | "medicamentos"
  | "medicamentos-controlados"
  | "quimicos"
  | "resinas"
  | "polimeros"
  | "aditivos"
  | "equipamentos-ti"
  | "alimenticios";

export type SegmentRef = {
  label: string;
  hint: string;
  tip?: { term: string; text: string };
};

export type SegmentRelated = {
  href: string;
  title: string;
  tag: string;
};

export type SegmentPage = {
  slug: SegmentSlug;
  id: SegmentId;
  eyebrow: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  serviceDescription: string;
  hasCertification: string;
  refs: SegmentRef[];
  vocab: string[];
  related: SegmentRelated[];
  trust: string;
  ctaTitle: string;
  faq?: readonly { q: string; a: string }[];
};

export const TIPS = {
  anvisa:
    "Agência reguladora responsável pela vigilância sanitária de produtos regulados.",
  wms: "Warehouse Management System. Sistema que registra posição, entrada e saída de cada lote armazenado.",
  cetesb:
    "Companhia Ambiental do Estado de São Paulo, responsável por licenciar armazenagem de produto químico no estado.",
  fispq:
    "Ficha de Informação de Segurança de Produto Químico, disponível pra cada item armazenado.",
  avcb: "Auto de Vistoria do Corpo de Bombeiros. Certifica que a estrutura atende às exigências de segurança contra incêndio.",
  ibama:
    "Instituto Brasileiro do Meio Ambiente, licencia substâncias com controle ambiental federal.",
  policiaFederal:
    "Órgão responsável por licenciar armazenagem de produto controlado, psicotrópico ou de duplo uso.",
} as const;

export const SEGMENT_PAGES: readonly SegmentPage[] = [
  {
    slug: "armazenagem-materias-primas-cosmeticos",
    id: "cosmeticos",
    eyebrow: "Matérias-primas cosméticas",
    h1: "Armazenagem de matérias-primas e insumos para cosméticos.",
    lead: "Bases, óleos, essências e ativos dermatológicos, com o mesmo cuidado documental exigido pro produto acabado.",
    metaTitle: "Armazenagem de matérias-primas para cosméticos",
    metaDescription:
      "Armazenagem de matérias-primas e insumos cosméticos com licença ANVISA, WMS por lote e rastreabilidade. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de matérias-primas para cosméticos",
    serviceDescription:
      "Armazenagem de matérias-primas, insumos e embalagens cosméticas com licença ANVISA e sistema WMS com rastreio por lote.",
    hasCertification: "ANVISA",
    refs: [
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Insumo e embalagem", hint: "Classes atendidas" },
      {
        label: "WMS por lote",
        hint: "Controle de estoque",
        tip: { term: "WMS por lote", text: TIPS.wms },
      },
    ],
    vocab: [
      "matérias-primas cosméticas",
      "ativos dermatológicos",
      "embalagem cosmética",
    ],
    related: [
      {
        href: "/armazenagem-saneantes",
        title: "Armazenagem de saneantes",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Licença ANVISA verificável",
    ctaTitle: "Orçamento de armazenagem de matérias-primas cosméticas",
  },
  {
    slug: "armazenagem-saneantes",
    id: "saneantes",
    eyebrow: "Saneantes",
    h1: "Armazenagem de saneantes e domissanitários.",
    lead: "Produto de risco controlado exige área própria dentro do galpão, com AVCB vigente.",
    metaTitle: "Armazenagem de saneantes",
    metaDescription:
      "Armazenagem de saneantes e domissanitários com área segregada e AVCB vigente. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de saneantes",
    serviceDescription:
      "Armazenagem de saneantes e domissanitários com segregação por classe de risco e AVCB vigente.",
    hasCertification: "AVCB",
    refs: [
      {
        label: "AVCB",
        hint: "Certificação da operação",
        tip: { term: "AVCB", text: TIPS.avcb },
      },
      { label: "Risco I e II", hint: "Classes atendidas" },
      { label: "Área segregada", hint: "Separação por classe" },
    ],
    vocab: ["saneantes", "domissanitários", "risco controlado"],
    related: [
      {
        href: "/armazenagem-correlatos",
        title: "Armazenagem de correlatos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/estrutura",
        title: "Estrutura do galpão",
        tag: "estrutura",
      },
    ],
    trust: "AVCB verificável",
    ctaTitle: "Orçamento de armazenagem de saneantes",
  },
  {
    slug: "armazenagem-correlatos",
    id: "correlatos",
    eyebrow: "Correlatos",
    h1: "Armazenagem de correlatos regulamentados pela ANVISA.",
    lead: "Produto correlato armazenado com o mesmo rigor documental de produto hospitalar.",
    metaTitle: "Armazenagem de correlatos",
    metaDescription:
      "Armazenagem de correlatos com regulamentação ANVISA, rastreio por lote e auditoria disponível. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de correlatos",
    serviceDescription:
      "Armazenagem de correlatos regulamentados pela ANVISA, com rastreio por lote e auditoria de lote disponível.",
    hasCertification: "ANVISA",
    refs: [
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Correlatos", hint: "Classes atendidas" },
      { label: "Rastreio por lote", hint: "Documentação exigida" },
    ],
    vocab: ["correlatos", "regulamentação ANVISA", "auditoria de lote"],
    related: [
      {
        href: "/armazenagem-medicamentos",
        title: "Armazenagem de medicamentos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Regulamentação ANVISA verificável",
    ctaTitle: "Orçamento de armazenagem de correlatos",
  },
  {
    slug: "armazenagem-medicamentos",
    id: "medicamentos",
    eyebrow: "Medicamentos · Geral",
    h1: "Armazenagem de medicamentos.",
    lead: "Cadeia de custódia rastreável do recebimento até a expedição, conforme RDC 653/2022.",
    metaTitle: "Armazenagem de medicamentos",
    metaDescription:
      "Armazenagem de medicamentos com RDC 653/2022, WMS por lote e FEFO. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de medicamentos",
    serviceDescription:
      "Armazenagem de medicamentos com licença ANVISA, RDC 653/2022 e sistema WMS com rastreio por lote.",
    hasCertification: "ANVISA",
    refs: [
      { label: "RDC 653/2022", hint: "Norma aplicada" },
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      {
        label: "WMS por lote",
        hint: "Rastreio",
        tip: { term: "WMS por lote", text: TIPS.wms },
      },
    ],
    vocab: ["medicamentos", "RDC 653/2022", "FEFO"],
    related: [
      {
        href: "/armazenagem-medicamentos-controlados",
        title: "Medicamentos controlados",
        tag: "segmento",
      },
      {
        href: "/armazenagem-correlatos",
        title: "Armazenagem de correlatos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
    ],
    trust: "RDC 653/2022 aplicada",
    ctaTitle: "Orçamento de armazenagem de medicamentos",
    faq: [
      {
        q: "A armazenagem de medicamentos segue alguma norma específica da ANVISA?",
        a: "Sim. A RC Armazém segue a RDC 653/2022, que estabelece boas práticas de distribuição, armazenagem e transporte de medicamentos.",
      },
    ],
  },
  {
    slug: "armazenagem-medicamentos-controlados",
    id: "medicamentos-controlados",
    eyebrow: "Medicamentos · Controlados",
    h1: "Armazenagem de medicamentos controlados.",
    lead: "Psicotrópico e entorpecente exigem licenciamento adicional junto à Polícia Federal, além da ANVISA.",
    metaTitle: "Armazenagem de medicamentos controlados",
    metaDescription:
      "Armazenagem de medicamentos controlados com licenciamento Polícia Federal, área restrita e ANVISA. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de medicamentos controlados",
    serviceDescription:
      "Armazenagem de medicamentos controlados, psicotrópicos e entorpecentes com licenciamento Polícia Federal, área restrita e ANVISA.",
    hasCertification: "Polícia Federal",
    refs: [
      {
        label: "Polícia Federal",
        hint: "Licenciamento adicional",
        tip: { term: "Polícia Federal", text: TIPS.policiaFederal },
      },
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Área restrita", hint: "Controle de acesso" },
    ],
    vocab: ["medicamentos controlados", "psicotrópicos", "Portaria 344"],
    related: [
      {
        href: "/armazenagem-medicamentos",
        title: "Armazenagem de medicamentos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Licenciamento Polícia Federal verificável",
    ctaTitle: "Orçamento de armazenagem de medicamentos controlados",
  },
  {
    slug: "armazenagem-produtos-quimicos-perigosos",
    id: "quimicos",
    eyebrow: "Produtos controlados e perigosos",
    h1: "Armazenagem de produtos controlados e químicos perigosos.",
    lead: "Instalação preparada e autorizada pra movimentação e estocagem de material classificado.",
    metaTitle: "Armazenagem de produtos químicos perigosos",
    metaDescription:
      "Armazenagem de produtos controlados e químicos perigosos com CETESB, Polícia Federal e FISPQ. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de produtos controlados e químicos perigosos",
    serviceDescription:
      "Armazenagem de produtos controlados e químicos perigosos com registro CETESB, licenciamento Polícia Federal quando aplicável e FISPQ por produto.",
    hasCertification: "CETESB",
    refs: [
      {
        label: "CETESB",
        hint: "Certificação da operação",
        tip: { term: "CETESB", text: TIPS.cetesb },
      },
      {
        label: "Polícia Federal",
        hint: "Licenciamento adicional",
        tip: { term: "Polícia Federal", text: TIPS.policiaFederal },
      },
      {
        label: "FISPQ por produto",
        hint: "Documentação exigida",
        tip: { term: "FISPQ por produto", text: TIPS.fispq },
      },
    ],
    vocab: [
      "produtos perigosos",
      "produto controlado",
      "classificação de risco",
    ],
    related: [
      {
        href: "/armazenagem-resinas-quimica-industrial",
        title: "Insumos para resinas e química industrial",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/estrutura",
        title: "Estrutura do galpão",
        tag: "estrutura",
      },
    ],
    trust: "Registro CETESB verificável",
    ctaTitle:
      "Orçamento de armazenagem de produtos controlados e perigosos",
  },
  {
    slug: "armazenagem-resinas-quimica-industrial",
    id: "resinas",
    eyebrow: "Resinas e química industrial",
    h1: "Armazenagem de insumos para resinas e química industrial.",
    lead: "Resina epóxi, poliuretano e endurecedor armazenados com controle de classe e validade.",
    metaTitle: "Armazenagem de resinas e química industrial",
    metaDescription:
      "Armazenagem de insumos para resinas e química industrial com CETESB, IBAMA e FISPQ. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de insumos para resinas e química industrial",
    serviceDescription:
      "Armazenagem de resinas epóxi, poliuretanos e endurecedores com registro CETESB, licenciamento IBAMA e FISPQ por produto.",
    hasCertification: "CETESB",
    refs: [
      {
        label: "CETESB",
        hint: "Certificação da operação",
        tip: { term: "CETESB", text: TIPS.cetesb },
      },
      {
        label: "IBAMA",
        hint: "Licenciamento ambiental",
        tip: { term: "IBAMA", text: TIPS.ibama },
      },
      {
        label: "FISPQ por produto",
        hint: "Documentação exigida",
        tip: { term: "FISPQ por produto", text: TIPS.fispq },
      },
    ],
    vocab: ["resina epóxi", "poliuretano", "química industrial"],
    related: [
      {
        href: "/armazenagem-polimeros-borrachas-carbono",
        title: "Polímeros, borrachas e carbono",
        tag: "segmento",
      },
      {
        href: "/armazenagem-aditivos-especialidades-quimicas",
        title: "Aditivos e especialidades químicas",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
    ],
    trust: "Registro CETESB verificável",
    ctaTitle: "Orçamento de armazenagem de resinas e insumos industriais",
  },
  {
    slug: "armazenagem-polimeros-borrachas-carbono",
    id: "polimeros",
    eyebrow: "Polímeros, borrachas e carbono",
    h1: "Armazenagem de polímeros, borrachas e carbono.",
    lead: "Borracha sintética e negro de fumo armazenados com controle de classe própria da indústria de borracha e plástico.",
    metaTitle: "Armazenagem de polímeros, borrachas e carbono",
    metaDescription:
      "Armazenagem de polímeros, borrachas e carbono com CETESB, IBAMA e área segregada. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de polímeros, borrachas e carbono",
    serviceDescription:
      "Armazenagem de borracha sintética, negro de fumo e polímeros com registro CETESB, licenciamento IBAMA e área segregada.",
    hasCertification: "IBAMA",
    refs: [
      {
        label: "CETESB",
        hint: "Certificação da operação",
        tip: { term: "CETESB", text: TIPS.cetesb },
      },
      {
        label: "IBAMA",
        hint: "Licenciamento ambiental",
        tip: { term: "IBAMA", text: TIPS.ibama },
      },
      { label: "Área segregada", hint: "Separação por classe" },
    ],
    vocab: ["borracha sintética", "negro de fumo", "polímeros"],
    related: [
      {
        href: "/armazenagem-resinas-quimica-industrial",
        title: "Insumos para resinas e química industrial",
        tag: "segmento",
      },
      {
        href: "/armazenagem-aditivos-especialidades-quimicas",
        title: "Aditivos e especialidades químicas",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
    ],
    trust: "Licenciamento IBAMA verificável",
    ctaTitle: "Orçamento de armazenagem de polímeros e borrachas",
  },
  {
    slug: "armazenagem-aditivos-especialidades-quimicas",
    id: "aditivos",
    eyebrow: "Aditivos e especialidades químicas",
    h1: "Armazenagem de aditivos e especialidades químicas.",
    lead: "Cargas minerais, antioxidantes e aceleradores de vulcanização, cada um com sua ficha de segurança disponível.",
    metaTitle: "Armazenagem de aditivos e especialidades químicas",
    metaDescription:
      "Armazenagem de aditivos e especialidades químicas com CETESB, FISPQ e área segregada. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de aditivos e especialidades químicas",
    serviceDescription:
      "Armazenagem de cargas minerais, antioxidantes, aceleradores e pigmentos industriais com registro CETESB e FISPQ por produto.",
    hasCertification: "CETESB",
    refs: [
      {
        label: "CETESB",
        hint: "Certificação da operação",
        tip: { term: "CETESB", text: TIPS.cetesb },
      },
      {
        label: "FISPQ por produto",
        hint: "Documentação exigida",
        tip: { term: "FISPQ por produto", text: TIPS.fispq },
      },
      { label: "Área segregada", hint: "Separação por classe" },
    ],
    vocab: [
      "aditivos químicos",
      "especialidades químicas",
      "pigmentos industriais",
    ],
    related: [
      {
        href: "/armazenagem-resinas-quimica-industrial",
        title: "Insumos para resinas e química industrial",
        tag: "segmento",
      },
      {
        href: "/armazenagem-polimeros-borrachas-carbono",
        title: "Polímeros, borrachas e carbono",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
    ],
    trust: "Registro CETESB verificável",
    ctaTitle:
      "Orçamento de armazenagem de aditivos e especialidades químicas",
  },
  {
    slug: "armazenagem-equipamentos-ti",
    id: "equipamentos-ti",
    eyebrow: "Equipamentos de TI",
    h1: "Armazenagem de equipamentos e gabinetes de TI.",
    lead: "Manuseio técnico de rack de servidor, painel de comando e infraestrutura de automação, sem risco químico, com controle de acesso rígido.",
    metaTitle: "Armazenagem de equipamentos de TI",
    metaDescription:
      "Armazenagem de equipamentos e gabinetes de TI com manuseio técnico, área seca e controle de acesso. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de equipamentos e gabinetes de TI",
    serviceDescription:
      "Armazenagem de racks, gabinetes e infraestrutura de TI com manuseio técnico, área seca e controle de acesso rígido.",
    hasCertification: "Controle de acesso",
    refs: [
      { label: "Controle de acesso", hint: "Segurança da operação" },
      { label: "Manuseio técnico", hint: "Tipo de operação" },
      { label: "Área seca", hint: "Ambiente de armazenagem" },
    ],
    vocab: [
      "equipamentos de TI",
      "racks de servidor",
      "infraestrutura de automação",
    ],
    related: [
      {
        href: "/estrutura",
        title: "Estrutura do galpão",
        tag: "estrutura",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Controle de acesso verificável",
    ctaTitle: "Orçamento de armazenagem de equipamentos de TI",
  },
  {
    slug: "armazenagem-alimenticios",
    id: "alimenticios",
    eyebrow: "Alimentícios",
    h1: "Armazenagem de produtos alimentícios.",
    lead: "Produto alimentício armazenado em área própria, separado de produto químico ou de risco.",
    metaTitle: "Armazenagem de produtos alimentícios",
    metaDescription:
      "Armazenagem de produtos alimentícios em área exclusiva, com WMS por lote e FEFO. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de produtos alimentícios",
    serviceDescription:
      "Armazenagem de produtos alimentícios em área exclusiva, com WMS por lote, FEFO e controle de acesso.",
    hasCertification: "Área exclusiva",
    refs: [
      { label: "Área exclusiva", hint: "Separação por categoria" },
      {
        label: "WMS por lote",
        hint: "Controle de validade",
        tip: { term: "WMS por lote", text: TIPS.wms },
      },
      { label: "Controle de acesso", hint: "Segurança da operação" },
    ],
    vocab: ["produtos alimentícios", "FEFO", "área exclusiva"],
    related: [
      {
        href: "/armazenagem-saneantes",
        title: "Armazenagem de saneantes",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/estrutura",
        title: "Estrutura do galpão",
        tag: "estrutura",
      },
    ],
    trust: "Área exclusiva verificável",
    ctaTitle: "Orçamento de armazenagem de produtos alimentícios",
  },
] as const;

export function getSegmentPage(slug: string): SegmentPage | undefined {
  return SEGMENT_PAGES.find((p) => p.slug === slug);
}

export function segmentHrefById(id: SegmentId): string {
  const page = SEGMENT_PAGES.find((p) => p.id === id);
  return page ? `/${page.slug}` : "/";
}
