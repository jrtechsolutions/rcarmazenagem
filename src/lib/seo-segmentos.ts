export type SegmentSlug =
  | "armazenagem-materias-primas-cosmeticos"
  | "armazenagem-saneantes"
  | "armazenagem-correlatos"
  | "armazenagem-medicamentos"
  | "armazenagem-medicamentos-controlados"
  | "armazenagem-produtos-quimicos-perigosos"
  | "armazenagem-resinas-quimica-industrial"
  | "armazenagem-polimeros-borrachas-carbono"
  | "armazenagem-aditivos-especialidades-quimicas";

export type SegmentId =
  | "cosmeticos"
  | "saneantes"
  | "correlatos"
  | "medicamentos"
  | "medicamentos-controlados"
  | "quimicos"
  | "resinas"
  | "polimeros"
  | "aditivos";

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
};

export const TIPS = {
  anvisa:
    "Agência reguladora responsável pela vigilância sanitária de produtos regulados.",
  wms: "Warehouse Management System. Sistema que registra posição, entrada e saída de cada lote armazenado.",
  fispq:
    "Ficha com Dados de Segurança (FDS, antiga FISPQ), conforme a ABNT NBR 14725. Fica arquivada por produto durante todo o período armazenado.",
  avcb: "Auto de Vistoria do Corpo de Bombeiros. Certifica que a estrutura atende às exigências de segurança contra incêndio.",
  ibama:
    "Instituto Brasileiro do Meio Ambiente, licencia substâncias com controle ambiental federal.",
  policiaFederal:
    "Órgãos que licenciam e fiscalizam a armazenagem de produto controlado, psicotrópico ou de duplo uso.",
} as const;

export const SEGMENT_PAGES: readonly SegmentPage[] = [
  {
    slug: "armazenagem-materias-primas-cosmeticos",
    id: "cosmeticos",
    eyebrow: "Cosméticos",
    h1: "Armazenagem de matérias-primas cosméticas em São Paulo e Jundiaí.",
    lead: "Bases, óleos, essências, ativos e embalagens com controle por lote no WMS Senior, saída FEFO e entrega na linha de produção.",
    metaTitle: "Armazenagem de Matérias-Primas Cosméticas em SP",
    metaDescription:
      "Armazém para matérias-primas, insumos e embalagens cosméticas com WMS Senior por lote e FEFO. Unidades em São Paulo e Jundiaí.",
    serviceType: "Armazenagem de matérias-primas para cosméticos",
    serviceDescription:
      "Armazenagem de matérias-primas, insumos e embalagens cosméticas com sistema WMS Senior e rastreio por lote.",
    hasCertification: "Rastreio por lote",
    refs: [
      {
        label: "WMS Senior",
        hint: "Controle de estoque",
        tip: { term: "WMS", text: TIPS.wms },
      },
      { label: "Só matéria-prima", hint: "Escopo atendido" },
      { label: "Lote e FEFO", hint: "Rastreio" },
    ],
    vocab: [
      "matérias-primas cosméticas",
      "ativos dermatológicos",
      "embalagem cosmética",
    ],
    related: [
      {
        href: "/armazenagem-saneantes",
        title: "Saneantes",
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
    trust: "Rastreio por lote no WMS Senior",
    ctaTitle: "Orçamento de armazenagem de matérias-primas cosméticas",
  },
  {
    slug: "armazenagem-saneantes",
    id: "saneantes",
    eyebrow: "Saneantes",
    h1: "Armazenagem de matérias-primas para saneantes em São Paulo e Jundiaí.",
    lead: "Tensoativos, ativos de desinfecção e auxiliares de formulação, com AVCB vigente e separação de incompatíveis. Operação em processo de regularização.",
    metaTitle: "Armazenagem de Matérias-Primas para Saneantes em SP",
    metaDescription:
      "Armazenagem de matérias-primas para saneantes em processo de regularização, com AVCB vigente, área segregada e separação personalizada. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de matérias-primas para saneantes",
    serviceDescription:
      "Armazenagem de matérias-primas para saneantes, em processo de regularização, com segregação por compatibilidade e AVCB vigente.",
    hasCertification: "AVCB",
    refs: [
      {
        label: "AVCB",
        hint: "Segurança do galpão",
        tip: { term: "AVCB", text: TIPS.avcb },
      },
      { label: "Em regularização", hint: "Status da operação" },
      { label: "Área segregada", hint: "Separação por classe" },
    ],
    vocab: ["matérias-primas para saneantes", "tensoativos", "insumos de limpeza"],
    related: [
      {
        href: "/armazenagem-correlatos",
        title: "Correlatos",
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
    trust: "Regularização em andamento",
    ctaTitle: "Orçamento de armazenagem de matérias-primas para saneantes",
  },
  {
    slug: "armazenagem-correlatos",
    id: "correlatos",
    eyebrow: "Correlatos",
    h1: "Armazenagem de matérias-primas para correlatos em São Paulo e Jundiaí.",
    lead: "Polímeros grau médico, látex, componentes e insumos para produtos de saúde, com rastreio por lote, farmacêutico responsável técnico e estoque bloqueado separado.",
    metaTitle: "Armazenagem de Matérias-Primas para Correlatos em SP",
    metaDescription:
      "Armazém para matérias-primas e componentes de produtos para saúde com rastreio por lote e farmacêutico RT. AFE em regularização. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de matérias-primas para correlatos",
    serviceDescription:
      "Armazenagem de matérias-primas e componentes para produtos de saúde, com rastreio por lote e farmacêutico responsável técnico.",
    hasCertification: "Rastreio por lote",
    refs: [
      {
        label: "ANVISA",
        hint: "AFE em regularização",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Farmacêutico RT", hint: "Responsável técnico" },
      { label: "Rastreio por lote", hint: "Documentação exigida" },
    ],
    vocab: ["matérias-primas para correlatos", "polímeros grau médico", "auditoria de lote"],
    related: [
      {
        href: "/armazenagem-medicamentos",
        title: "Medicamentos",
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
    trust: "Auditoria de lote disponível",
    ctaTitle: "Orçamento de armazenagem de matérias-primas para correlatos",
  },
  {
    slug: "armazenagem-medicamentos",
    id: "medicamentos",
    eyebrow: "Medicamentos",
    h1: "Armazenagem de insumos farmacêuticos em São Paulo e Jundiaí.",
    lead: "Princípios ativos, excipientes e material de embalagem com Boas Práticas da RDC 430/2020, farmacêutico responsável técnico e rastreio por lote.",
    metaTitle: "Armazenagem de Insumos Farmacêuticos em SP e Jundiaí",
    metaDescription:
      "Armazém para IFA, excipientes e embalagens farmacêuticas com Boas Práticas (RDC 430/2020), farmacêutico RT e WMS Senior. AFE em regularização. SP e Jundiaí.",
    serviceType: "Armazenagem de insumos farmacêuticos",
    serviceDescription:
      "Armazenagem de insumos farmacêuticos conforme a RDC 430/2020, com farmacêutico responsável técnico e sistema WMS Senior com rastreio por lote.",
    hasCertification: "Farmacêutico responsável técnico",
    refs: [
      { label: "RDC 430/2020", hint: "Norma aplicada" },
      {
        label: "ANVISA",
        hint: "AFE em regularização",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      {
        label: "WMS por lote",
        hint: "Rastreio",
        tip: { term: "WMS por lote", text: TIPS.wms },
      },
    ],
    vocab: ["insumos farmacêuticos", "IFA", "RDC 430/2020"],
    related: [
      {
        href: "/armazenagem-medicamentos-controlados",
        title: "Medicamentos controlados",
        tag: "segmento",
      },
      {
        href: "/armazenagem-correlatos",
        title: "Correlatos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
    ],
    trust: "RDC 430/2020 aplicada",
    ctaTitle: "Orçamento de armazenagem de insumos farmacêuticos",
  },
  {
    slug: "armazenagem-medicamentos-controlados",
    id: "medicamentos-controlados",
    eyebrow: "Medicamentos controlados",
    h1: "Armazenagem de insumos controlados em São Paulo e Jundiaí.",
    lead: "Substâncias psicotrópicas, entorpecentes e precursores em área restrita e trancada, com acesso registrado. Autorização Especial em processo de regularização.",
    metaTitle: "Armazenagem de Insumos Controlados em SP e Jundiaí",
    metaDescription:
      "Armazenagem de insumos controlados com área restrita, acesso registrado e licenças da Polícia Federal e Civil. AE da ANVISA em regularização. SP e Jundiaí.",
    serviceType: "Armazenagem de insumos controlados",
    serviceDescription:
      "Armazenagem de insumos e substâncias controladas com área restrita, acesso registrado e licenças da Polícia Federal e Civil.",
    hasCertification: "Polícia Federal e Civil",
    refs: [
      {
        label: "Polícia Federal e Civil",
        hint: "Licenciamento adicional",
        tip: { term: "Polícia Federal e Civil", text: TIPS.policiaFederal },
      },
      {
        label: "ANVISA",
        hint: "AE em regularização",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Área restrita", hint: "Controle de acesso" },
    ],
    vocab: ["insumos controlados", "substâncias psicotrópicas", "área restrita"],
    related: [
      {
        href: "/armazenagem-medicamentos",
        title: "Medicamentos",
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
    trust: "Polícia Federal e Civil",
    ctaTitle: "Orçamento de armazenagem de insumos controlados",
  },
  {
    slug: "armazenagem-produtos-quimicos-perigosos",
    id: "quimicos",
    eyebrow: "Químicos",
    h1: "Armazenagem de matérias-primas químicas perigosas em São Paulo e Jundiaí.",
    lead: "Matérias-primas das classes de risco 6, 8 e 9 com segregação física por classe, licenças da Polícia Federal e Civil, brigada treinada e saída na frota RC ou na sua transportadora.",
    metaTitle: "Armazenagem de Químicos Perigosos em SP e Jundiaí",
    metaDescription:
      "Armazém para químicos perigosos das classes 6, 8 e 9: Polícia Federal, Polícia Civil, AVCB e segregação por classe de risco. Unidades em São Paulo e Jundiaí.",
    serviceType: "Armazenagem de produtos químicos perigosos",
    serviceDescription:
      "Armazenagem de produtos químicos perigosos das classes 6, 8 e 9 com licenças da Polícia Federal e Civil, AVCB e segregação por classe de risco.",
    hasCertification: "Polícia Federal",
    refs: [
      {
        label: "Polícia Federal e Civil",
        hint: "Licença da operação",
        tip: { term: "Polícia Federal e Civil", text: TIPS.policiaFederal },
      },
      { label: "Classes 6, 8 e 9", hint: "Classes atendidas" },
      {
        label: "AVCB",
        hint: "Segurança do galpão",
        tip: { term: "AVCB", text: TIPS.avcb },
      },
    ],
    vocab: [
      "produtos perigosos",
      "classes 6, 8 e 9",
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
    trust: "Licenças Polícia Federal e Civil",
    ctaTitle: "Orçamento de armazenagem de produtos químicos perigosos",
  },
  {
    slug: "armazenagem-resinas-quimica-industrial",
    id: "resinas",
    eyebrow: "Resinas e química industrial",
    h1: "Armazenagem de resinas e química industrial em São Paulo e Jundiaí.",
    lead: "Epóxi, poliuretano e endurecedores em tambores, baldes e IBCs, com segregação por classe de risco, área seca e controle de validade.",
    metaTitle: "Armazenagem de Resinas e Química Industrial em SP",
    metaDescription:
      "Armazém para resinas epóxi, PU e endurecedores com IBAMA, AVCB e segregação por classe de risco. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de insumos para resinas e química industrial",
    serviceDescription:
      "Armazenagem de resinas epóxi, poliuretanos e endurecedores com licenciamento IBAMA, AVCB e controle de validade por lote.",
    hasCertification: "IBAMA",
    refs: [
      {
        label: "IBAMA",
        hint: "Licenciamento ambiental",
        tip: { term: "IBAMA", text: TIPS.ibama },
      },
      {
        label: "AVCB",
        hint: "Segurança do galpão",
        tip: { term: "AVCB", text: TIPS.avcb },
      },
      { label: "Lote e validade", hint: "Rastreio" },
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
    trust: "Licenciamento IBAMA verificável",
    ctaTitle: "Orçamento de armazenagem de resinas e insumos industriais",
  },
  {
    slug: "armazenagem-polimeros-borrachas-carbono",
    id: "polimeros",
    eyebrow: "Polímeros, borrachas e carbono",
    h1: "Armazenagem de borrachas, polímeros e negro de fumo em São Paulo e Jundiaí.",
    lead: "Fardos, big bags e sacaria em área coberta, com negro de fumo isolado, empilhamento controlado e entrega na programação da fábrica.",
    metaTitle: "Armazenagem de Polímeros e Borrachas em SP",
    metaDescription:
      "Armazém para borracha sintética, negro de fumo e polímeros com IBAMA, área segregada e empilhamento controlado. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de polímeros, borrachas e carbono",
    serviceDescription:
      "Armazenagem de borracha sintética, negro de fumo e polímeros com licenciamento IBAMA e área segregada.",
    hasCertification: "IBAMA",
    refs: [
      { label: "Empilhamento controlado", hint: "Fardos e big bags" },
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
    h1: "Armazenagem de aditivos e especialidades químicas em São Paulo e Jundiaí.",
    lead: "Cargas minerais, antioxidantes, aceleradores e pigmentos posicionados por compatibilidade química, em área seca e com saída consolidada.",
    metaTitle: "Armazenagem de Aditivos Químicos em SP e Jundiaí",
    metaDescription:
      "Armazém para cargas minerais, aceleradores, antioxidantes e pigmentos com IBAMA, rastreio por lote e separação personalizada. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de aditivos e especialidades químicas",
    serviceDescription:
      "Armazenagem de cargas minerais, antioxidantes, aceleradores e pigmentos industriais com licenciamento IBAMA e rastreio por lote.",
    hasCertification: "IBAMA",
    refs: [
      {
        label: "IBAMA",
        hint: "Licenciamento ambiental",
        tip: { term: "IBAMA", text: TIPS.ibama },
      },
      { label: "Separação personalizada", hint: "Por pedido" },
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
    trust: "Licenciamento IBAMA verificável",
    ctaTitle:
      "Orçamento de armazenagem de aditivos e especialidades químicas",
  },
] as const;

export function getSegmentPage(slug: string): SegmentPage | undefined {
  return SEGMENT_PAGES.find((p) => p.slug === slug);
}

export function segmentHrefById(id: SegmentId): string {
  const page = SEGMENT_PAGES.find((p) => p.id === id);
  return page ? `/${page.slug}` : "/";
}
