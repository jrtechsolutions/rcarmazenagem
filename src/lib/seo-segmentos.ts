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
    h1: "Armazenagem de matérias-primas cosméticas em São Paulo e Jundiaí.",
    lead: "Bases, óleos, essências, ativos e embalagens com licença ANVISA, controle por lote e entrega na linha de produção pela frota RC.",
    metaTitle: "Armazenagem de Matérias-Primas Cosméticas em SP",
    metaDescription:
      "Armazém para matérias-primas, insumos e embalagens cosméticas com licença ANVISA, WMS por lote e FEFO. Unidades em São Paulo e Jundiaí.",
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
    h1: "Armazenagem de saneantes e domissanitários em São Paulo e Jundiaí.",
    lead: "Área própria para produto de limpeza e desinfecção, com AVCB vigente, separação de incompatíveis e separação de pedidos para vários destinos.",
    metaTitle: "Armazenagem de Saneantes em SP e Jundiaí",
    metaDescription:
      "Armazém para saneantes e domissanitários com área segregada, AVCB vigente, FDS por produto e separação por pedido. Unidades em São Paulo e Jundiaí.",
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
    h1: "Armazenagem de correlatos e produtos para saúde em São Paulo e Jundiaí.",
    lead: "Material médico-hospitalar, equipamentos e diagnóstico com licença ANVISA, rastreio por lote e série e estoque bloqueado separado do liberado.",
    metaTitle: "Armazenagem de Correlatos ANVISA em SP e Jundiaí",
    metaDescription:
      "Armazém para correlatos e produtos para saúde com licença ANVISA, rastreio por lote e número de série e auditoria disponível. São Paulo e Jundiaí.",
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
    h1: "Armazenagem de medicamentos em São Paulo e Jundiaí.",
    lead: "Boas Práticas de Armazenagem da ANVISA, temperatura registrada, rastreio por lote e entrega pela frota RC, do recebimento ao destino.",
    metaTitle: "Armazenagem de Medicamentos em SP e Jundiaí",
    metaDescription:
      "Armazém para medicamentos com licença ANVISA, Boas Práticas (RDC 653/2022), temperatura registrada, WMS por lote e FEFO. São Paulo e Jundiaí.",
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
  },
  {
    slug: "armazenagem-medicamentos-controlados",
    id: "medicamentos-controlados",
    eyebrow: "Medicamentos · Controlados",
    h1: "Armazenagem de medicamentos controlados em São Paulo e Jundiaí.",
    lead: "Psicotrópicos e entorpecentes da Portaria 344 em área restrita e trancada, com acesso registrado e cada movimentação conferida.",
    metaTitle: "Armazenagem de Medicamentos Controlados em SP",
    metaDescription:
      "Armazém para medicamentos controlados da Portaria 344 com área restrita, acesso registrado e movimentação por lote. São Paulo e Jundiaí.",
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
    h1: "Armazenagem de produtos químicos perigosos em São Paulo e Jundiaí.",
    lead: "Galpão licenciado para material classificado, com segregação física por classe de risco, ficha de segurança de cada produto e saída direta na frota RC.",
    metaTitle: "Armazenagem de Químicos Perigosos em SP e Jundiaí",
    metaDescription:
      "Armazém licenciado para químicos perigosos e controlados: CETESB, Polícia Federal, AVCB e segregação por classe de risco. Unidades em São Paulo e Jundiaí.",
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
    h1: "Armazenagem de resinas e química industrial em São Paulo e Jundiaí.",
    lead: "Epóxi, poliuretano e endurecedores em tambores, baldes e IBCs, com segregação por classe de risco, área seca e controle de validade.",
    metaTitle: "Armazenagem de Resinas e Química Industrial em SP",
    metaDescription:
      "Armazém para resinas epóxi, PU e endurecedores com CETESB, IBAMA, FDS por produto e segregação por classe de risco. São Paulo e Jundiaí.",
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
    h1: "Armazenagem de borrachas, polímeros e negro de fumo em São Paulo e Jundiaí.",
    lead: "Fardos, big bags e sacaria em área coberta, com negro de fumo isolado, empilhamento controlado e entrega na programação da fábrica.",
    metaTitle: "Armazenagem de Polímeros e Borrachas em SP",
    metaDescription:
      "Armazém para borracha sintética, negro de fumo e polímeros com CETESB, IBAMA, área segregada e empilhamento controlado. São Paulo e Jundiaí.",
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
    h1: "Armazenagem de aditivos e especialidades químicas em São Paulo e Jundiaí.",
    lead: "Cargas minerais, antioxidantes, aceleradores e pigmentos posicionados por compatibilidade química, em área seca e com saída consolidada.",
    metaTitle: "Armazenagem de Aditivos Químicos em SP e Jundiaí",
    metaDescription:
      "Armazém para cargas minerais, aceleradores, antioxidantes e pigmentos com CETESB, FDS e separação fracionada. São Paulo e Jundiaí.",
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
    h1: "Armazenagem de equipamentos de TI em São Paulo e Jundiaí.",
    lead: "Racks, gabinetes e painéis em área seca, com manuseio técnico, controle de acesso e entrega na obra na data combinada.",
    metaTitle: "Armazenagem de Equipamentos de TI em SP e Jundiaí",
    metaDescription:
      "Armazém para racks, gabinetes e infraestrutura de TI com área seca, manuseio técnico, controle por projeto e entrega na obra. São Paulo e Jundiaí.",
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
    h1: "Armazenagem de alimentos em São Paulo e Jundiaí.",
    lead: "Carga seca em área exclusiva, separada de químicos, com controle de pragas, validade por lote e separação de pedidos.",
    metaTitle: "Armazenagem de Alimentos em SP e Jundiaí",
    metaDescription:
      "Armazém para alimentos secos em área exclusiva, separada de químicos, com controle de pragas, WMS por lote e FEFO. São Paulo e Jundiaí.",
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
