export const SITE = {
  name: "RC Armazenagem",
  legalName: "RC Armazenagem",
  url: "https://rcarmazenagem.com.br",
  transportesUrl: "https://rctransportes.com.br",
  email: "cotacao@rctransportes.com.br",
  phone: "(11) 5521-8282",
  phoneHref: "tel:+551155218282",
  whatsapp: "(11) 94603-3490",
  whatsappHref: "https://wa.me/5511946033490",
  instagram: "https://instagram.com/rctransportesoficial",
  facebook: "https://facebook.com/rctransportes",
  founded: 2001,
} as const;

export const ENDERECOS = [
  {
    cidade: "São Paulo",
    logradouro: "Av. do Rio Bonito, nº 1.522 - Veleiros",
    uf: "SP",
    cep: "04776-002",
    extra: "",
  },
  {
    cidade: "Jundiaí",
    logradouro: "Av. Juvenal Arantes, nº 2.500 - Jardim Sarapiranga",
    uf: "SP",
    cep: "13212-354",
    extra: "Galpões 14, 15 e 16",
  },
  {
    cidade: "Jundiaí",
    logradouro: "Rod. Dom Gabriel Paulino Bueno Couto, Km 71",
    uf: "SP",
    cep: "13201-000",
    extra: "",
  },
  {
    cidade: "Jundiaí",
    logradouro: "R. Miguel Latorre, nº 1.100 - Distrito Industrial I",
    uf: "SP",
    cep: "13212-009",
    extra: "",
  },
] as const;

export const NAV = [
  { href: "/estrutura", label: "Estrutura" },
  { href: "/compliance", label: "Compliance" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/transporte", label: "Transporte" },
  { href: "/contato", label: "Contato" },
] as const;

export const SEGMENTOS = [
  {
    id: "cosmeticos",
    nome: "Cosméticos",
    descricao: "Manuseio que evita avarias em embalagens sensíveis.",
    icon: "rack" as const,
  },
  {
    id: "saneantes",
    nome: "Saneantes",
    descricao: "Estocagem compatível com produto de risco controlado.",
    icon: "check" as const,
  },
  {
    id: "correlatos",
    nome: "Correlatos",
    descricao: "Cobertura para linhas regulamentadas pela ANVISA.",
    icon: "nested" as const,
  },
  {
    id: "quimicos",
    nome: "Químicos",
    descricao:
      "Procedimento específico para carga classificada, incluindo produtos perigosos, controlados e inflamáveis.",
    icon: "warehouse" as const,
  },
  {
    id: "medicamentos",
    nome: "Medicamentos",
    descricao:
      "Cadeia de custódia rastreável do início ao fim, com produtos hospitalares e farmacêuticos.",
    icon: "check" as const,
  },
] as const;

export const NUMEROS = [
  {
    valor: "[ ] m²",
    label: "Área total",
    pendente: true,
  },
  {
    valor: "[ ]",
    label: "Posições de pallet",
    pendente: true,
  },
  {
    valor: "24/7",
    label: "Controle de acesso",
    pendente: false,
  },
] as const;

export const PASSOS = [
  {
    n: "1",
    titulo: "Recebimento",
    texto: "Conferência e etiquetagem de cada lote na entrada.",
    detalhe:
      "Cada lote é conferido na doca, etiquetado e registrado antes de ir para a posição. Sem lote identificado, não entra no rack.",
  },
  {
    n: "2",
    titulo: "Estocagem",
    texto: "Posição definida por tipo de produto e regra de rotatividade (FEFO).",
    detalhe:
      "Produto regulado não divide espaço com caixa qualquer. A posição considera classe, incompatibilidade e FEFO — o que vence primeiro sai primeiro.",
  },
  {
    n: "3",
    titulo: "Expedição",
    texto: "Separação, liberação e saída já na frota RC, com rastreio.",
    detalhe:
      "Separação, conferência de saída e carregamento na frota própria. A rastreabilidade não quebra na troca de fornecedor — é a mesma operação.",
  },
] as const;

export const BENEFICIOS = [
  {
    titulo: "Localização estratégica",
    texto:
      "Operação em Jundiaí e São Paulo — saída rápida para capital, Grande SP e interior, sem transbordo extra.",
    icon: "warehouse" as const,
  },
  {
    titulo: "WMS e rastreio por lote",
    texto:
      "Cada posição de pallet é definida por tipo de produto e FEFO. Você sabe o que entrou, onde está e o que sai.",
    icon: "nested" as const,
  },
  {
    titulo: "Um fornecedor, um custo",
    texto:
      "Armazenagem e transporte na mesma operação. Sem intermediação, sem quebra de rastreabilidade na troca de empresa.",
    icon: "check" as const,
  },
  {
    titulo: "Compliance de carga regulada",
    texto:
      "Processo para produto controlado, inflamável, hospitalar e correlato — não é galpão genérico.",
    icon: "rack" as const,
  },
] as const;

export const FEATURES_ESTRUTURA = [
  {
    titulo: "Monitoramento 24h",
    texto: "Câmeras e ronda contínua no galpão e na área de expedição.",
    icon: "rack" as const,
  },
  {
    titulo: "Controle de acesso",
    texto: "Restrição e registro de entrada por área — quem entra, quando e onde.",
    icon: "warehouse" as const,
  },
  {
    titulo: "Sistema WMS",
    texto: "Posição, lote e rotatividade (FEFO) no sistema — não na memória de quem opera.",
    icon: "nested" as const,
  },
  {
    titulo: "Prevenção de incêndio",
    texto: "Estrutura alinhada ao AVCB do Corpo de Bombeiros para produto de risco.",
    icon: "check" as const,
  },
] as const;

export const FOTOS_ESTRUTURA = [
  { label: "[ fachada ]", alt: "Fachada do galpão" },
  { label: "[ corredor ]", alt: "Corredor de estoque" },
  { label: "[ expedição ]", alt: "Área de expedição" },
] as const;

export const COMPLIANCE_DESTAQUE = [
  {
    titulo: "Licença ANVISA",
    texto: "Habilitação para armazenagem de produto regulado.",
    icon: "warehouse" as const,
  },
  {
    titulo: "Controle de Acesso",
    texto: "Restrição e registro de entrada por área.",
    icon: "rack" as const,
  },
  {
    titulo: "Registro de Temperatura",
    texto: "Monitoramento contínuo [se aplicável].",
    icon: "nested" as const,
    pendente: true,
  },
  {
    titulo: "Auditoria de Lote",
    texto: "Rastreabilidade completa por lote armazenado.",
    icon: "check" as const,
  },
] as const;

export const CERTS_COMPLETAS = [
  "ISO 9001",
  "ANVISA",
  "Licenças da Polícia Federal, Exército, Governo Estadual e Prefeitura",
  "Corpo de Bombeiros (AVCB)",
  "SASSMAQ",
  "CRF (Conselho Regional de Farmácia)",
  "Licença Ambiental IBAMA",
] as const;

export const FAQ = [
  {
    q: "Que tipos de produto vocês armazenam?",
    a: "Cosméticos, saneantes, correlatos, químicos (incluindo produtos perigosos, controlados e inflamáveis) e medicamentos / produtos hospitalares.",
    pendente: false,
  },
  {
    q: "Existe seguro para a carga armazenada?",
    a: "[confirmar com cliente]",
    pendente: true,
  },
  {
    q: "Qual o prazo mínimo de contrato?",
    a: "[confirmar com cliente]",
    pendente: true,
  },
  {
    q: "O transporte já sai incluso?",
    a: "Sim — é a mesma operação. A carga sai do galpão direto na frota RC, sem trocar de fornecedor no meio do processo.",
    pendente: false,
  },
  {
    q: "Como funciona o controle de temperatura?",
    a: "[confirmar com cliente — depende se há climatização]",
    pendente: true,
  },
] as const;

export const VOLUMES = [
  { id: "ate-50", label: "Até 50 paletes/mês" },
  { id: "50-200", label: "50 a 200 paletes/mês" },
  { id: "200-500", label: "200 a 500 paletes/mês" },
  { id: "acima-500", label: "Acima de 500 paletes/mês" },
  { id: "nao-sei", label: "Ainda não sei" },
] as const;
