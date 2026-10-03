import type { SegmentId } from "@/lib/seo-segmentos";

export type SegmentDetail = {
  perfis: readonly { titulo: string; texto: string }[];
  produtos: readonly { grupo: string; itens: string }[];
  requisitos: readonly { exigencia: string; comoAtendemos: string }[];
  /** Carga não regulada: troca "norma" por "cuidados" na tabela. */
  requisitosCuidados?: boolean;
  passos: readonly { titulo: string; texto: string }[];
  condicoes: readonly { titulo: string; texto: string }[];
  servicos: readonly string[];
  grupo: { titulo: string; texto: string };
  faq: readonly { q: string; a: string }[];
  guia: {
    titulo: string;
    intro: string;
    blocos: readonly { titulo: string; texto: string }[];
  };
};

export const SEGMENT_DETAILS: Partial<Record<SegmentId, SegmentDetail>> = {
  cosmeticos: {
    perfis: [
      {
        titulo: "Indústrias de cosméticos",
        texto:
          "Insumo disponível para a produção sem ocupar a fábrica com estoque de matéria-prima e embalagem.",
      },
      {
        titulo: "Formuladoras e terceirizadoras",
        texto:
          "Estoque de insumos organizado por lote e liberado por pedido ou solicitação de venda.",
      },
      {
        titulo: "Distribuidoras de matérias-primas",
        texto:
          "Base perto dos polos de cosméticos de SP, com separação por pedido para vários clientes.",
      },
      {
        titulo: "Fabricantes de embalagem",
        texto:
          "Frascos, potes e tampas guardados longe de poeira e umidade até a entrega na linha de envase.",
      },
    ],
    produtos: [
      {
        grupo: "Bases e veículos",
        itens:
          "Óleos vegetais e minerais, manteigas, ceras, emolientes, tensoativos e emulsionantes.",
      },
      {
        grupo: "Ativos e especialidades",
        itens:
          "Ativos dermatológicos, vitaminas, extratos, filtros solares, conservantes e corantes.",
      },
      {
        grupo: "Essências e fragrâncias",
        itens:
          "Essências e fragrâncias. Itens inflamáveis, como álcool cosmético, dependem da área de inflamáveis, em processo de regularização.",
      },
      {
        grupo: "Embalagens e insumos de envase",
        itens:
          "Frascos de vidro e plástico, potes, bisnagas, válvulas, tampas, rótulos e caixas.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Quem armazena insumo sujeito à vigilância sanitária precisa estar regularizado na ANVISA.",
        comoAtendemos:
          "AFE da ANVISA em processo de regularização, com documentação da operação disponível para auditoria de cliente.",
      },
      {
        exigencia:
          "A indústria precisa rastrear cada lote de matéria-prima, do fornecedor até o produto acabado.",
        comoAtendemos:
          "O WMS registra lote, fornecedor, data de entrada e posição. Qualquer lote é localizado rapidamente.",
      },
      {
        exigencia:
          "Cada insumo tem condição de armazenagem definida na ficha técnica: temperatura, umidade e proteção contra luz.",
        comoAtendemos:
          "A área é escolhida pela ficha técnica. A área climatizada está em processo de regularização junto à ANVISA.",
      },
      {
        exigencia:
          "Álcool e alguns insumos são inflamáveis e não podem ficar junto com os demais.",
        comoAtendemos:
          "A área de inflamáveis está em processo de regularização. O comercial avalia cada item pela FDS antes do recebimento.",
      },
      {
        exigencia:
          "Matéria-prima vencida compromete o lote inteiro de produção.",
        comoAtendemos:
          "Saída pela regra FEFO: o lote que vence primeiro é o primeiro a sair.",
      },
      {
        exigencia:
          "Embalagem primária precisa chegar à linha limpa e sem avaria.",
        comoAtendemos:
          "Embalagens ficam paletizadas e protegidas, longe de poeira e de produto químico.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos itens",
        texto:
          "Recebemos a lista de insumos com ficha técnica e FDS para definir a área, a condição e a regra de saída de cada um.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, validade e integridade da embalagem. Lote sem identificação não entra.",
      },
      {
        titulo: "Armazenagem",
        texto:
          "Posição definida por tipo de insumo e compatibilidade, registrada no WMS.",
      },
      {
        titulo: "Liberação para produção",
        texto:
          "Separação por pedido ou solicitação de venda, seguindo FEFO, com conferência na saída.",
      },
      {
        titulo: "Entrega na fábrica",
        texto:
          "A frota RC leva o insumo até a linha, na janela combinada com a produção, ou a carga sai na transportadora que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Área limpa e organizada",
        texto:
          "Corredores sinalizados e piso limpo, sem mistura com carga química industrial.",
      },
      {
        titulo: "Área climatizada",
        texto:
          "Em processo de regularização junto à ANVISA, para insumo sensível a calor.",
      },
      {
        titulo: "Área de bloqueio",
        texto:
          "Avaria separada já no recebimento. Itens avariados, devolvidos ou em análise ficam bloqueados.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada restrita e registrada por área, com monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação por pedido",
      "Etiquetagem e reetiquetagem",
      "Inventários cíclicos e rotativos",
      "Entrega programada com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Insumo na linha no dia certo",
      texto:
        "Na indústria de cosméticos, atraso de matéria-prima é linha parada. Com armazenagem e transporte na mesma operação, a RC separa o insumo e entrega na fábrica na janela combinada, sem depender de outra transportadora e sem perder o registro de lote no caminho.",
    },
    faq: [
      {
        q: "Vocês armazenam produto acabado ou só matéria-prima?",
        a: "Só matéria-prima. A operação de cosméticos atende matérias-primas e insumos da indústria; produto acabado não faz parte do escopo.",
      },
      {
        q: "Vocês têm área climatizada?",
        a: "A área climatizada com registro de temperatura está em processo de regularização junto à ANVISA. O comercial informa o prazo e avalia cada insumo pela ficha técnica.",
      },
      {
        q: "Consigo rastrear um lote específico?",
        a: "Sim. O WMS registra lote, fornecedor, data de entrada e posição de cada volume, então qualquer lote é localizado rapidamente.",
      },
      {
        q: "Como funciona a separação?",
        a: "Por pedido ou solicitação de venda, sempre respeitando a regra FEFO, com conferência na saída.",
      },
      {
        q: "Essências e álcool podem ser armazenados?",
        a: "Itens inflamáveis, como o álcool cosmético, dependem da área de inflamáveis, que está em processo de regularização. A FDS de cada item define se ele entra nesse caso.",
      },
      {
        q: "A matéria-prima pode ir direto do galpão para a linha de produção?",
        a: "Pode. A frota da RC Transportes leva o lote até a fábrica conforme a programação de produção, sem passar por outra empresa no caminho. Se preferir usar sua transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar matérias-primas cosméticas corretamente",
      intro:
        "Matéria-prima mal armazenada vira problema na linha: lote reprovado, cor alterada, cheiro diferente. Alguns cuidados simples evitam isso.",
      blocos: [
        {
          titulo: "Siga a ficha técnica de cada insumo",
          texto:
            "Óleos oxidam com calor, ativos perdem efeito com luz e alguns pós empedram com umidade. A ficha técnica diz a faixa de temperatura, se precisa de proteção contra luz e o prazo depois de aberto.",
        },
        {
          titulo: "Separe os inflamáveis",
          texto:
            "Essências, óleos essenciais e álcool cosmético são inflamáveis. Eles precisam de área própria, longe de fontes de calor e dos demais insumos.",
        },
        {
          titulo: "Controle lote e validade em sistema",
          texto:
            "Planilha e memória não dão conta quando há centenas de lotes. Com controle em sistema e saída FEFO, o insumo mais antigo é usado primeiro e nada vence esquecido no fundo do estoque.",
        },
        {
          titulo: "Proteja as embalagens",
          texto:
            "Frasco com poeira ou tampa amassada gera retrabalho no envase. Embalagem deve ficar paletizada, coberta e longe de produto químico.",
        },
        {
          titulo: "Rastreie do fornecedor à linha",
          texto:
            "Se um lote de matéria-prima apresenta problema, a indústria precisa saber rapidamente onde ele está e em quais produções entrou. Isso começa no recebimento, com o lote registrado.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Estoque de insumo ocupa área que poderia ser produção. Um armazém licenciado assume espaço, controle e documentação, e a indústria recebe o insumo quando precisa.",
        },
      ],
    },
  },
  saneantes: {
    perfis: [
      {
        titulo: "Indústrias de saneantes",
        texto:
          "Matéria-prima fora da fábrica, liberada para a produção conforme cada pedido.",
      },
      {
        titulo: "Formuladoras e terceirizadoras",
        texto:
          "Insumos de vários clientes organizados por lote, sem ocupar área produtiva.",
      },
      {
        titulo: "Distribuidoras de insumos",
        texto:
          "Estoque regional de matérias-primas com separação personalizada por pedido.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Matéria-prima nacionalizada recebida com conferência de rotulagem e documentação.",
      },
    ],
    produtos: [
      {
        grupo: "Tensoativos",
        itens:
          "Tensoativos aniônicos, não iônicos e anfóteros usados em detergentes e limpadores.",
      },
      {
        grupo: "Ativos de desinfecção",
        itens:
          "Matérias-primas à base de cloro, quaternário de amônio e outros ativos desinfetantes.",
      },
      {
        grupo: "Auxiliares de formulação",
        itens:
          "Sequestrantes, espessantes, conservantes, corantes e essências para saneantes.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Matéria-prima de saneante é regulada pela vigilância sanitária. Quem armazena precisa estar regularizado na ANVISA.",
        comoAtendemos:
          "A regularização da operação de saneantes está em andamento. Fale com o comercial sobre o prazo.",
      },
      {
        exigencia:
          "O galpão precisa de AVCB adequado ao tipo de produto armazenado.",
        comoAtendemos:
          "AVCB vigente e plano de atendimento a emergências (PAE) com brigada treinada.",
      },
      {
        exigencia:
          "Matéria-prima à base de cloro não pode ficar perto de ácido.",
        comoAtendemos:
          "Posição definida por compatibilidade química, conforme a ficha de segurança de cada insumo.",
      },
      {
        exigencia:
          "Cada matéria-prima precisa de Ficha com Dados de Segurança (FDS).",
        comoAtendemos:
          "A FDS de cada item é arquivada na entrada e fica disponível durante todo o período armazenado.",
      },
      {
        exigencia:
          "Embalagem com vazamento contamina outras cargas e gera risco para a equipe.",
        comoAtendemos:
          "Conferência de integridade no recebimento e procedimento de contenção para vazamento.",
      },
      {
        exigencia:
          "Lote e validade da matéria-prima precisam ser rastreáveis.",
        comoAtendemos:
          "O WMS Senior registra lote, validade e posição. A saída segue a regra FEFO.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos insumos",
        texto:
          "Recebemos a relação de matérias-primas com ficha de segurança e classificação de risco para definir a área de cada uma.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, rotulagem e embalagem. Avaria é registrada e o volume vai para a área de bloqueio.",
      },
      {
        titulo: "Armazenagem segregada",
        texto:
          "Posição definida por compatibilidade química e registrada no WMS.",
      },
      {
        titulo: "Separação",
        texto:
          "Separação personalizada conforme a solicitação do cliente, seguindo FEFO, com conferência de volumes.",
      },
      {
        titulo: "Entrega",
        texto:
          "A carga segue na frota do grupo até a fábrica ou na transportadora que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Separação de incompatíveis",
        texto:
          "Insumos à base de cloro longe de ácidos, conforme a ficha de segurança.",
      },
      {
        titulo: "Área de bloqueio",
        texto:
          "Avaria separada já no recebimento. Itens avariados, devolvidos ou em análise ficam bloqueados.",
      },
      {
        titulo: "Resposta a vazamento",
        texto:
          "Procedimento de contenção definido e brigada treinada para agir rápido.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h do galpão.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação personalizada por pedido",
      "Paletização e filmagem de carga",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Do fornecedor à linha de produção",
      texto:
        "Matéria-prima parada na fábrica ocupa área que poderia produzir. Com armazenagem e transporte na mesma operação, a RC guarda o insumo e pode levá-lo até a linha com a frota própria, com o mesmo registro de lote.",
    },
    faq: [
      {
        q: "Vocês já armazenam matéria-prima de saneantes?",
        a: "A operação de saneantes está em processo de regularização. O comercial informa o prazo e avalia cada insumo antes do primeiro recebimento.",
      },
      {
        q: "Vocês armazenam saneante pronto?",
        a: "Não. A RC armazena somente matéria-prima; produto acabado não faz parte do escopo.",
      },
      {
        q: "O que acontece se uma embalagem vazar?",
        a: "Seguimos o procedimento de contenção: isolamos a área, contemos o produto e segregamos os volumes afetados. Você é avisado para decidir o destino da mercadoria.",
      },
      {
        q: "Como funciona a separação?",
        a: "É personalizada: cada cliente tem uma forma de separar, e a RC segue a solicitação de cada pedido.",
      },
    ],
    guia: {
      titulo: "Como armazenar matérias-primas de saneantes",
      intro:
        "Insumo de saneante parece carga simples, mas mistura errada e embalagem danificada causam acidente e prejuízo. Estes são os cuidados básicos.",
      blocos: [
        {
          titulo: "Leia a ficha de segurança",
          texto:
            "A ficha de segurança diz como armazenar, o que não pode ficar perto e o que fazer em caso de vazamento.",
        },
        {
          titulo: "Nunca junte cloro com ácido",
          texto:
            "Insumo à base de cloro em contato com ácido libera gás tóxico. Por isso a separação por compatibilidade vale também para o estoque.",
        },
        {
          titulo: "Respeite o empilhamento",
          texto:
            "Bombonas e tambores deformam quando empilhados além do limite. Embalagem amassada vaza, e vazamento vira perda e risco.",
        },
        {
          titulo: "Controle a validade",
          texto:
            "Ativos desinfetantes perdem eficácia com o tempo. Saída pela regra FEFO evita insumo vencido parado no estoque.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Matéria-prima ocupa espaço que poderia ser produção. Um armazém preparado assume a área, a segregação e a separação, e a indústria foca em produzir.",
        },
      ],
    },
  },
  correlatos: {
    perfis: [
      {
        titulo: "Fabricantes de produtos para saúde",
        texto:
          "Matérias-primas e componentes fora da fábrica, liberados para a produção por pedido.",
      },
      {
        titulo: "Indústrias de descartáveis",
        texto:
          "Insumos para seringas, luvas, cateteres e curativos organizados por lote.",
      },
      {
        titulo: "Importadoras de insumos",
        texto:
          "Matéria-prima nacionalizada recebida com conferência de documentação, lote e validade.",
      },
      {
        titulo: "Fornecedores da indústria da saúde",
        texto:
          "Estoque regional para abastecer fabricantes com rastreio por lote.",
      },
    ],
    produtos: [
      {
        grupo: "Polímeros grau médico",
        itens:
          "Resinas e compostos plásticos usados na fabricação de dispositivos médicos.",
      },
      {
        grupo: "Látex e elastômeros",
        itens:
          "Matérias-primas para luvas, cateteres, tubos e vedações de uso médico.",
      },
      {
        grupo: "Componentes e insumos",
        itens:
          "Tecidos, não tecidos, adesivos e componentes para curativos e materiais descartáveis.",
      },
      {
        grupo: "Insumos para diagnóstico",
        itens:
          "Reagentes e materiais usados na fabricação de produtos para diagnóstico, conforme a condição do fabricante.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Armazenagem ligada a produtos para saúde exige Autorização de Funcionamento (AFE) da ANVISA.",
        comoAtendemos:
          "AFE em processo de regularização, com farmacêutico responsável técnico já na operação e documentação disponível para auditoria de cliente.",
      },
      {
        exigencia:
          "Cada lote de matéria-prima precisa ser rastreável até o produto fabricado.",
        comoAtendemos:
          "O WMS Senior registra lote, validade e posição de cada item.",
      },
      {
        exigencia:
          "O fabricante define as condições de armazenagem, como temperatura e umidade.",
        comoAtendemos:
          "A área é escolhida conforme a exigência do fabricante. A área climatizada está em processo de regularização junto à ANVISA.",
      },
      {
        exigencia:
          "Insumo avariado, devolvido ou em análise deve ficar separado do estoque liberado.",
        comoAtendemos:
          "Área de bloqueio para itens avariados, devolvidos ou em análise, com bloqueio no sistema.",
      },
      {
        exigencia: "Matéria-prima vencida não pode ir para a produção.",
        comoAtendemos:
          "Saída pela regra FEFO e controle de validade por lote no sistema.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos insumos",
        texto:
          "Recebemos a relação de matérias-primas e as condições de armazenagem exigidas pelo fabricante.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, validade e integridade da embalagem. Avaria é registrada e o volume vai para a área de bloqueio.",
      },
      {
        titulo: "Armazenagem",
        texto:
          "Estoque liberado separado do estoque bloqueado, com posição registrada no WMS.",
      },
      {
        titulo: "Separação",
        texto:
          "Separação personalizada conforme a solicitação do cliente, por FEFO, com conferência de lote e quantidade.",
      },
      {
        titulo: "Entrega",
        texto:
          "A carga segue na frota do grupo até a fábrica ou na transportadora que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Liberado e bloqueado",
        texto:
          "Área separada para itens avariados, devolvidos ou em análise, sem risco de envio por engano.",
      },
      {
        titulo: "Condição ambiental",
        texto:
          "Área indicada conforme a exigência do fabricante. Área climatizada em processo de regularização.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada restrita e registrada por área, com monitoramento 24h.",
      },
      {
        titulo: "Pronto para auditoria",
        texto:
          "Registros de recebimento, movimentação e expedição disponíveis para o cliente.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação personalizada por pedido",
      "Controle por lote",
      "Etiquetagem e reetiquetagem",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Insumo na linha sem trocar de mão",
      texto:
        "Matéria-prima de produto para saúde precisa chegar íntegra e rastreável. Com armazenagem e transporte na mesma operação, a RC guarda, confere e pode entregar na fábrica com a frota própria.",
    },
    faq: [
      {
        q: "Vocês armazenam produto para saúde pronto?",
        a: "Não. A RC armazena somente matérias-primas e componentes para a fabricação de produtos para saúde.",
      },
      {
        q: "O que acontece com insumo avariado ou devolvido?",
        a: "Ele vai para a área de bloqueio e fica bloqueado no sistema até você decidir o destino. Não há risco de ser enviado por engano.",
      },
      {
        q: "Vocês têm área climatizada?",
        a: "A área climatizada com registro de temperatura está em processo de regularização junto à ANVISA. O comercial informa o prazo e avalia se o seu insumo precisa dela.",
      },
      {
        q: "Vocês recebem auditoria de cliente?",
        a: "Sim. Os registros da operação e as licenças ficam disponíveis, e a visita pode ser agendada com o comercial.",
      },
    ],
    guia: {
      titulo: "Como armazenar matérias-primas para produtos de saúde",
      intro:
        "Insumo mal armazenado compromete o produto antes mesmo de ele ser fabricado. Estes são os cuidados básicos.",
      blocos: [
        {
          titulo: "Respeite o que o fabricante indica",
          texto:
            "Temperatura, umidade, empilhamento e proteção contra luz vêm da ficha técnica. O armazém precisa ter área compatível com essas condições.",
        },
        {
          titulo: "Rastreie cada lote",
          texto:
            "Se um lote de matéria-prima apresentar problema, é preciso saber onde está cada volume. Isso só é possível com o lote registrado no recebimento.",
        },
        {
          titulo: "Separe liberado de bloqueado",
          texto:
            "Insumo avariado, devolvido ou em análise não pode ficar misturado ao estoque liberado. A separação deve ser física e também no sistema.",
        },
        {
          titulo: "Controle a validade",
          texto:
            "Polímeros, látex e reagentes têm prazo de uso. Saída pela regra FEFO garante que o lote mais antigo vá primeiro para a produção.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Estoque de insumo ocupa área que poderia ser produção. Um armazém preparado assume espaço, controle e documentação.",
        },
      ],
    },
  },
  medicamentos: {
    perfis: [
      {
        titulo: "Indústrias farmacêuticas",
        texto:
          "Insumos farmacêuticos fora da fábrica, liberados para a produção conforme cada pedido.",
      },
      {
        titulo: "Distribuidoras de insumos farmacêuticos",
        texto:
          "Estoque de IFA e excipientes com separação personalizada para laboratórios e farmácias de manipulação.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Insumo importado recebido com conferência de documentação, lote e validade.",
      },
      {
        titulo: "Laboratórios terceirizados",
        texto:
          "Matéria-prima de vários clientes organizada por lote, sem ocupar área produtiva.",
      },
    ],
    produtos: [
      {
        grupo: "Insumos farmacêuticos ativos (IFA)",
        itens:
          "Princípios ativos usados na fabricação de medicamentos, armazenados por lote e validade.",
      },
      {
        grupo: "Excipientes",
        itens:
          "Diluentes, aglutinantes, lubrificantes, conservantes e demais excipientes de formulação.",
      },
      {
        grupo: "Material de embalagem",
        itens:
          "Frascos, blísteres, tampas e embalagens primárias e secundárias para a indústria farmacêutica.",
      },
      {
        grupo: "Insumos controlados",
        itens:
          "Substâncias sujeitas a controle especial têm página própria: a Autorização Especial está em processo de regularização.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Armazenar insumo farmacêutico exige AFE da ANVISA e farmacêutico responsável técnico.",
        comoAtendemos:
          "Farmacêutico responsável técnico já na operação. A AFE está em processo de regularização junto à ANVISA.",
      },
      {
        exigencia:
          "As Boas Práticas (RDC 430/2020) pedem procedimentos escritos para cada etapa.",
        comoAtendemos:
          "Recebimento, armazenagem e expedição com procedimentos documentados e registro de cada operação.",
      },
      {
        exigencia:
          "A maioria dos insumos deve ficar em faixa de temperatura controlada, com registro.",
        comoAtendemos:
          "A área com temperatura registrada está em processo de regularização junto à ANVISA.",
      },
      {
        exigencia:
          "Insumo em quarentena, reprovado ou devolvido fica bloqueado.",
        comoAtendemos:
          "Avaria registrada no recebimento e área de bloqueio, com segregação física e no sistema.",
      },
      {
        exigencia:
          "Cada lote de insumo precisa ser rastreável até o medicamento fabricado.",
        comoAtendemos:
          "O WMS Senior registra lote, validade e posição. Se um lote precisar ser recolhido, ele é localizado e bloqueado.",
      },
      {
        exigencia: "Insumo vencido não pode ir para a produção.",
        comoAtendemos:
          "Saída pela regra FEFO e controle de validade por lote no sistema.",
      },
    ],
    passos: [
      {
        titulo: "Qualificação",
        texto:
          "Conferimos a documentação da sua empresa e as condições de armazenagem de cada insumo antes do primeiro recebimento.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, validade e integridade, com avaria registrada já na entrada.",
      },
      {
        titulo: "Armazenagem",
        texto:
          "Posição definida por insumo, com itens bloqueados segregados e registrados no WMS.",
      },
      {
        titulo: "Separação",
        texto:
          "Separação personalizada conforme a solicitação do cliente, por FEFO, com conferência de lote e quantidade.",
      },
      {
        titulo: "Entrega",
        texto:
          "A carga segue na frota do grupo até a fábrica ou na transportadora que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Área própria",
        texto:
          "Insumo farmacêutico sem dividir corredor com carga química de risco.",
      },
      {
        titulo: "Farmacêutico RT",
        texto:
          "Farmacêutico responsável técnico acompanhando a operação.",
      },
      {
        titulo: "Quarentena e bloqueio",
        texto:
          "Itens reprovados, devolvidos ou em análise ficam separados e bloqueados no sistema.",
      },
      {
        titulo: "Acesso restrito",
        texto:
          "Entrada registrada por área e monitoramento 24h do galpão.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação personalizada por pedido",
      "Conferência de lote na saída",
      "Gestão de devoluções",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Rastreabilidade do fornecedor à fábrica",
      texto:
        "Em insumo farmacêutico, cada troca de responsável é um ponto a mais para documentar e auditar. Na RC o mesmo grupo guarda e pode entregar: a carga sai do galpão na frota própria, com o registro de lote do recebimento até a fábrica.",
    },
    faq: [
      {
        q: "Vocês armazenam medicamento pronto?",
        a: "Não. A RC armazena somente insumos farmacêuticos: princípios ativos, excipientes e material de embalagem.",
      },
      {
        q: "A armazenagem segue alguma norma da ANVISA?",
        a: "Sim. Seguimos as Boas Práticas da RDC 430/2020, com procedimentos documentados para cada etapa. A AFE está em processo de regularização.",
      },
      {
        q: "A operação tem farmacêutico responsável?",
        a: "Sim. A operação conta com farmacêutico responsável técnico.",
      },
      {
        q: "Como é feito o controle de temperatura?",
        a: "A área com temperatura monitorada e registrada está em processo de regularização junto à ANVISA. O comercial informa o prazo.",
      },
      {
        q: "Vocês armazenam insumos controlados?",
        a: "A Autorização Especial para controlados está em processo de regularização. Os detalhes estão na página de insumos controlados.",
      },
    ],
    guia: {
      titulo: "Como armazenar insumos farmacêuticos corretamente",
      intro:
        "Insumo farmacêutico exige o mesmo rigor do medicamento que ele vai virar. Estes são os pontos que a regulação cobra.",
      blocos: [
        {
          titulo: "Controle e registre a temperatura",
          texto:
            "Cada insumo tem a sua faixa de temperatura. Não basta estar dentro da faixa: é preciso ter o registro para provar isso numa auditoria.",
        },
        {
          titulo: "Separe liberado de bloqueado",
          texto:
            "Insumo em quarentena, reprovado ou devolvido não pode ficar misturado ao estoque liberado. A separação deve ser física e também no sistema.",
        },
        {
          titulo: "Rastreie cada lote",
          texto:
            "Se um lote de insumo apresentar desvio, a indústria precisa saber onde está cada volume. Isso só é possível com o lote registrado em cada movimentação.",
        },
        {
          titulo: "Use a regra FEFO",
          texto:
            "O lote que vence primeiro deve sair primeiro. Isso evita perda por vencimento e insumo com validade curta na linha de produção.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Manter uma área própria dentro das Boas Práticas exige licença, farmacêutico, procedimentos e controle de temperatura. Um armazém especializado divide essa estrutura entre vários clientes.",
        },
      ],
    },
  },
  "medicamentos-controlados": {
    perfis: [
      {
        titulo: "Indústrias farmacêuticas",
        texto:
          "Insumos controlados fora da fábrica, em área restrita e com a documentação em dia.",
      },
      {
        titulo: "Distribuidoras de insumos",
        texto:
          "Estoque de substâncias controladas separado do insumo comum, com registro de cada movimentação.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Recebimento de insumo controlado importado com conferência de documentação e quantidade.",
      },
    ],
    produtos: [
      {
        grupo: "Substâncias psicotrópicas",
        itens:
          "Princípios ativos psicotrópicos sujeitos a controle especial, usados na fabricação de medicamentos.",
      },
      {
        grupo: "Substâncias entorpecentes",
        itens:
          "Insumos entorpecentes sujeitos a controle especial.",
      },
      {
        grupo: "Precursores",
        itens:
          "Substâncias que também exigem controle da Polícia Federal e da Polícia Civil, com entrada e saída registradas por lote.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Armazenar substâncias controladas exige Autorização Especial (AE) da ANVISA.",
        comoAtendemos:
          "AE em processo de regularização, com farmacêutico responsável técnico já na operação.",
      },
      {
        exigencia:
          "Insumos e precursores controlados exigem licença da Polícia Federal e da Polícia Civil.",
        comoAtendemos:
          "Licenças da Polícia Federal e da Polícia Civil vigentes.",
      },
      {
        exigencia:
          "Controlado deve ficar em local exclusivo, trancado e com acesso restrito.",
        comoAtendemos:
          "Área restrita própria, com acesso liberado só a pessoas autorizadas e registrado.",
      },
      {
        exigencia:
          "Toda movimentação precisa ser registrada e conferida com a documentação.",
        comoAtendemos:
          "Entrada e saída registradas por lote, com conferência da documentação em cada movimentação.",
      },
      {
        exigencia:
          "Divergência de estoque precisa ser investigada e comunicada.",
        comoAtendemos:
          "Inventário da área restrita e tratamento imediato de qualquer divergência.",
      },
    ],
    passos: [
      {
        titulo: "Validação documental",
        texto:
          "Antes do primeiro recebimento conferimos as autorizações da sua empresa e a relação de insumos.",
      },
      {
        titulo: "Recebimento controlado",
        texto:
          "Conferência de nota, lote e quantidade por pessoa autorizada, com registro da entrada.",
      },
      {
        titulo: "Guarda em área restrita",
        texto:
          "O insumo vai direto para a área trancada, separado de qualquer insumo comum.",
      },
      {
        titulo: "Expedição conferida",
        texto:
          "Separação por FEFO, conferência de lote e quantidade e registro da saída com a documentação.",
      },
      {
        titulo: "Entrega",
        texto:
          "A carga segue na frota do grupo ou na transportadora habilitada que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Área restrita e trancada",
        texto:
          "Espaço exclusivo para controlados, sem circulação de quem não é autorizado.",
      },
      {
        titulo: "Acesso registrado",
        texto:
          "Cada entrada na área fica registrada, com nome, data e horário.",
      },
      {
        titulo: "Monitoramento 24h",
        texto:
          "Câmeras e ronda contínua no galpão, todos os dias.",
      },
      {
        titulo: "Inventário",
        texto:
          "Contagem da área restrita, com divergência tratada na hora.",
      },
    ],
    servicos: [
      "Armazenagem em área restrita",
      "Separação por pedido",
      "Conferência de lote e quantidade",
      "Registro de movimentação por lote",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Menos pontos de contato, menos risco",
      texto:
        "Com controlado, cada troca de mão é um ponto de risco e de documentação. Na RC a carga pode sair da área restrita direto na frota do grupo, sem passar por outra empresa no caminho.",
    },
    faq: [
      {
        q: "Vocês já armazenam insumos controlados?",
        a: "A Autorização Especial da ANVISA está em processo de regularização. Envie a relação de insumos para o comercial, que informa o prazo e avalia caso a caso.",
      },
      {
        q: "Vocês armazenam medicamento controlado pronto?",
        a: "Não. A RC armazena somente matéria-prima: insumos e substâncias controladas usadas na fabricação.",
      },
      {
        q: "Quem tem acesso à área restrita?",
        a: "Só pessoas autorizadas. Cada acesso fica registrado, e a área tem monitoramento 24h.",
      },
      {
        q: "Que documentos a minha empresa precisa ter?",
        a: "As autorizações da ANVISA para a sua atividade com controlados e, quando o insumo exigir, as licenças da Polícia Federal e da Polícia Civil. Conferimos tudo antes do primeiro recebimento.",
      },
      {
        q: "Como a movimentação é registrada?",
        a: "Cada entrada e saída é registrada por lote e conferida com a documentação, o que facilita a sua prestação de contas.",
      },
    ],
    guia: {
      titulo: "Como armazenar insumos controlados corretamente",
      intro:
        "Insumo controlado tem as regras do insumo comum e mais algumas. Estes são os pontos que não podem falhar.",
      blocos: [
        {
          titulo: "Autorização antes de tudo",
          texto:
            "Quem armazena controlado precisa das autorizações específicas da ANVISA, e alguns insumos exigem também licença da Polícia Federal e da Polícia Civil. Sem isso a operação é irregular desde o primeiro dia.",
        },
        {
          titulo: "Local exclusivo e trancado",
          texto:
            "O controlado fica separado do restante do estoque, em local fechado e com acesso só para pessoas autorizadas.",
        },
        {
          titulo: "Registre cada movimentação",
          texto:
            "Toda entrada e saída precisa ser registrada e bater com a documentação. É isso que sustenta a prestação de contas junto aos órgãos.",
        },
        {
          titulo: "Faça inventário com frequência",
          texto:
            "Com controlado, qualquer diferença de estoque precisa ser explicada. Contagem frequente encontra o problema cedo.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Montar e manter uma área de controlados exige autorização, estrutura física e rotina de controle. Um armazém especializado concentra essa estrutura e a rotina de auditoria.",
        },
      ],
    },
  },
  quimicos: {
    perfis: [
      {
        titulo: "Indústria química",
        texto:
          "Matéria-prima fora da fábrica, sem ocupar área produtiva com estoque de risco.",
      },
      {
        titulo: "Distribuidoras de químicos",
        texto:
          "Estoque de matéria-prima próximo da capital e do interior de SP, com separação personalizada por pedido.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Carga nacionalizada recebida com conferência de documentação e ficha de segurança em português.",
      },
      {
        titulo: "Indústrias usuárias",
        texto:
          "Tintas, adesivos, limpeza e borracha: o insumo perigoso fica fora da planta e chega conforme a programação de produção.",
      },
    ],
    produtos: [
      {
        grupo: "Classe 6 · Substâncias tóxicas",
        itens:
          "Defensivos, intermediários de síntese e demais substâncias tóxicas, conforme a FDS de cada produto.",
      },
      {
        grupo: "Classe 8 · Corrosivos",
        itens:
          "Ácidos (sulfúrico, clorídrico, fosfórico), bases como soda cáustica e hidróxido de potássio, desincrustantes e limpadores industriais.",
      },
      {
        grupo: "Classe 9 · Substâncias perigosas diversas",
        itens:
          "Produtos perigosos ao meio ambiente e demais itens da classe 9, avaliados pela FDS antes do recebimento.",
      },
      {
        grupo: "Químicos da mesma cadeia",
        itens:
          "Matérias-primas, aditivos e embalagens sem classificação de risco que acompanham a operação do cliente.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Substâncias com controle ambiental federal exigem cadastro e licença no IBAMA.",
        comoAtendemos:
          "Licenciamento IBAMA vigente para a operação.",
      },
      {
        exigencia:
          "Quem guarda produto químico controlado precisa de licença da Polícia Federal e da Polícia Civil.",
        comoAtendemos:
          "Licenças da Polícia Federal e da Polícia Civil vigentes, com entrada e saída registradas por lote.",
      },
      {
        exigencia:
          "O galpão precisa de AVCB compatível com a carga de incêndio e com o tipo de produto armazenado.",
        comoAtendemos:
          "AVCB vigente, plano de atendimento a emergências (PAE), brigada treinada e procedimento de contenção de vazamento.",
      },
      {
        exigencia:
          "Produtos incompatíveis não podem ficar próximos, conforme a tabela de incompatibilidade da ficha de segurança.",
        comoAtendemos:
          "Áreas separadas por classe de risco, definidas antes da entrada do produto. Tóxico não divide corredor com corrosivo.",
      },
      {
        exigencia:
          "Cada produto precisa de Ficha com Dados de Segurança (FDS, a antiga FISPQ), conforme a ABNT NBR 14725.",
        comoAtendemos:
          "A FDS de cada item é arquivada na entrada e fica disponível durante todo o período armazenado.",
      },
      {
        exigencia:
          "Lote e validade precisam ser rastreáveis para auditoria e para um eventual recall.",
        comoAtendemos:
          "O WMS Senior registra lote, posição e validade de cada volume. A saída segue a regra FEFO.",
      },
    ],
    passos: [
      {
        titulo: "Análise do produto",
        texto:
          "Antes do primeiro recebimento avaliamos a FDS, a classe de risco e o volume para definir a área e as condições de armazenagem.",
      },
      {
        titulo: "Recebimento na doca",
        texto:
          "Conferência de nota, lote, rotulagem e integridade das embalagens. Avaria é registrada e o volume vai para a área de bloqueio.",
      },
      {
        titulo: "Armazenagem segregada",
        texto:
          "A posição é definida pela classe de risco e pela compatibilidade química, e fica registrada no WMS.",
      },
      {
        titulo: "Separação e expedição",
        texto:
          "Separação por FEFO, conferência de saída e carregamento com a documentação de transporte de produto perigoso.",
      },
      {
        titulo: "Entrega",
        texto:
          "A carga segue na frota do grupo ou na transportadora que você indicar, até o destino final.",
      },
    ],
    condicoes: [
      {
        titulo: "Segregação física",
        texto:
          "Cada classe tem área própria dentro do galpão. A separação é física, não só no sistema.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada restrita e registrada por área. Quem não é da operação não circula no estoque de risco.",
      },
      {
        titulo: "Monitoramento 24h",
        texto:
          "Câmeras e ronda contínua no galpão e na área de expedição, todos os dias.",
      },
      {
        titulo: "Plano de emergência",
        texto:
          "PAE documentado, brigada treinada e procedimento definido para vazamento ou incêndio.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação por pedido",
      "Etiquetagem e reetiquetagem",
      "Inventários cíclicos, rotativos e gerais",
      "Conferência de FDS e rotulagem",
      "Transporte com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Do galpão ao cliente sem trocar de responsável",
      texto:
        "Produto perigoso é onde a troca de fornecedor mais pesa: documentação, responsabilidade e rastreio se perdem no meio do caminho. Na RC a carga pode sair do armazém direto na frota da RC Transportes. Um contrato, uma equipe e o mesmo registro de lote do recebimento à entrega.",
    },
    faq: [
      {
        q: "Quais classes de produto perigoso vocês armazenam?",
        a: "Classes 6 (tóxicos), 8 (corrosivos) e 9 (perigosos diversos), além de químicos sem classificação de risco da mesma cadeia. A área de inflamáveis (classe 3) está em processo de regularização.",
      },
      {
        q: "Preciso enviar a ficha de segurança (FDS) antes de fechar?",
        a: "Sim. A FDS é o ponto de partida da análise: com ela definimos a área, a compatibilidade com os outros produtos e as condições de armazenagem. Sem FDS o produto não entra.",
      },
      {
        q: "Vocês armazenam produto controlado pela Polícia Federal?",
        a: "Sim. A RC tem licenças da Polícia Federal e da Polícia Civil e registra entrada e saída de cada lote, o que facilita a prestação de contas da sua empresa.",
      },
      {
        q: "Como vocês evitam contato entre produtos incompatíveis?",
        a: "Cada classe de risco tem área própria no galpão, definida antes do recebimento. A posição de cada volume considera a tabela de incompatibilidade da FDS e fica registrada no WMS.",
      },
      {
        q: "O que acontece em caso de vazamento?",
        a: "Seguimos o plano de atendimento a emergências (PAE) e o procedimento de contenção de vazamento: isolamento da área, contenção do produto e acionamento dos responsáveis. A brigada é treinada para esse procedimento.",
      },
      {
        q: "Posso usar a minha transportadora?",
        a: "Pode. A carga sai na transportadora que você indicar ou, se preferir, na frota da RC Transportes, sem trocar de fornecedor no caminho.",
      },
      {
        q: "Vocês atendem pessoa física?",
        a: "Não. A armazenagem de produto químico é feita apenas para empresas com CNPJ ativo.",
      },
    ],
    guia: {
      titulo: "Como armazenar produtos químicos perigosos corretamente",
      intro:
        "Seja no próprio estoque ou num armazém terceirizado, alguns cuidados são básicos para guardar químico perigoso com segurança e sem problema com fiscalização.",
      blocos: [
        {
          titulo: "Comece pela ficha de segurança",
          texto:
            "A FDS de cada produto traz as condições de armazenagem (seção 7) e as incompatibilidades (seção 10). É ela que diz se o produto precisa de ventilação, se não pode ficar perto de oxidantes ou se tem limite de temperatura. Sem esse documento não dá pra definir a posição do produto com segurança.",
        },
        {
          titulo: "Separe por compatibilidade, não por espaço livre",
          texto:
            "O erro mais comum é guardar o produto onde sobra lugar. Ácido perto de base, oxidante perto de inflamável ou corrosivo acima de embalagem frágil multiplicam o risco de um acidente. O certo é ter áreas definidas por classe de risco e respeitar essa divisão mesmo quando o estoque está cheio.",
        },
        {
          titulo: "Embalagem e rótulo em ordem",
          texto:
            "Embalagem amassada, com vazamento ou sem rótulo legível não deve entrar no estoque. O rótulo precisa identificar o produto, os pictogramas de perigo e o lote. Na saída, a carga ainda precisa da sinalização e da documentação exigidas para transporte de produto perigoso.",
        },
        {
          titulo: "Controle de lote e validade",
          texto:
            "Muitos químicos perdem desempenho com o tempo ou ficam instáveis depois do vencimento. Controlar lote e validade em sistema, com saída pela regra FEFO, evita produto vencido parado e facilita qualquer recall.",
        },
        {
          titulo: "Tenha um plano para emergências",
          texto:
            "Vazamento e princípio de incêndio precisam de resposta rápida. Um plano de atendimento a emergências define quem faz o quê, onde ficam os materiais de contenção e quem deve ser avisado. Treinamento periódico é o que faz o plano funcionar na prática.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Manter estoque de químico perigoso dentro da fábrica ocupa área produtiva e exige licenças, AVCB compatível e equipe treinada. Um armazém já licenciado assume essa estrutura e a empresa paga só pelo espaço e pelos serviços que usa.",
        },
      ],
    },
  },
  resinas: {
    perfis: [
      {
        titulo: "Tintas e revestimentos",
        texto:
          "Resinas e endurecedores disponíveis para a produção, sem ocupar a fábrica com estoque de risco.",
      },
      {
        titulo: "Adesivos e selantes",
        texto:
          "Insumos bicomponentes armazenados com controle de lote e validade.",
      },
      {
        titulo: "Distribuidoras de resinas",
        texto:
          "Estoque regional com separação personalizada, do jeito que cada cliente pede.",
      },
      {
        titulo: "Pisos e compósitos",
        texto:
          "Sistemas epóxi e PU guardados na condição certa até a aplicação na obra ou na fábrica.",
      },
    ],
    produtos: [
      {
        grupo: "Resinas epóxi",
        itens:
          "Resinas base e sistemas bicomponentes para revestimento, piso, adesivo e compósito.",
      },
      {
        grupo: "Poliuretanos (PU)",
        itens:
          "Polióis, pré-polímeros e isocianatos para espumas, revestimentos e adesivos.",
      },
      {
        grupo: "Endurecedores e catalisadores",
        itens:
          "Endurecedores à base de amina e poliamida, catalisadores e aceleradores de cura.",
      },
      {
        grupo: "Outras resinas e auxiliares",
        itens:
          "Resinas poliéster e acrílicas, diluentes e solventes que acompanham os sistemas.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Substâncias com controle ambiental federal exigem cadastro e licença no IBAMA.",
        comoAtendemos:
          "Licenciamento IBAMA vigente para os insumos que exigem.",
      },
      {
        exigencia:
          "Resina com solvente costuma ser inflamável, e endurecedor à base de amina costuma ser corrosivo.",
        comoAtendemos:
          "Posição definida pela classe de risco da FDS. Resinas inflamáveis dependem da área de inflamáveis, em processo de regularização.",
      },
      {
        exigencia:
          "Isocianato reage com umidade e precisa ficar em embalagem fechada, em local seco.",
        comoAtendemos:
          "Área coberta e seca, com embalagem conferida no recebimento e mantida lacrada.",
      },
      {
        exigencia:
          "Resina tem validade curta e algumas cristalizam em temperatura baixa.",
        comoAtendemos:
          "Controle de validade por lote, saída FEFO e área indicada conforme a ficha técnica.",
      },
      {
        exigencia:
          "Cada produto precisa de Ficha com Dados de Segurança (FDS).",
        comoAtendemos:
          "A FDS de cada item é arquivada na entrada e fica disponível durante todo o período armazenado.",
      },
    ],
    passos: [
      {
        titulo: "Análise da FDS",
        texto:
          "Avaliamos a classe de risco, a sensibilidade a umidade e temperatura e o volume antes do primeiro recebimento.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, lacre e integridade de tambores, baldes e IBCs.",
      },
      {
        titulo: "Armazenagem segregada",
        texto:
          "Posição por classe de risco e compatibilidade, em área coberta e seca, registrada no WMS.",
      },
      {
        titulo: "Separação",
        texto:
          "Separação personalizada conforme a solicitação do cliente, seguindo FEFO, com conferência de saída.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo ou na transportadora que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Segregação por classe",
        texto:
          "Cada classe de risco em área própria, definida antes da entrada do produto.",
      },
      {
        titulo: "Área seca e coberta",
        texto:
          "Proteção contra chuva e umidade, essencial para isocianatos e sistemas PU.",
      },
      {
        titulo: "Plano de emergência",
        texto:
          "PAE documentado, brigada treinada e procedimento de contenção para vazamento.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem de tambores, baldes e IBCs",
      "Separação por pedido",
      "Etiquetagem e reetiquetagem",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Químico industrial com um responsável só",
      texto:
        "Resina e endurecedor precisam chegar juntos, íntegros e dentro da validade. Na RC a carga pode sair do galpão direto na frota da RC Transportes, com o mesmo registro de lote do recebimento à entrega.",
    },
    faq: [
      {
        q: "Vocês armazenam tambor e IBC?",
        a: "Sim. Recebemos tambores, baldes e IBCs, com conferência de lacre e integridade na entrada.",
      },
      {
        q: "Isocianato pode ser armazenado?",
        a: "Sim, em área coberta e seca, com embalagem lacrada. As condições são definidas a partir da FDS de cada produto.",
      },
      {
        q: "Como fica o controle de validade?",
        a: "O WMS registra lote e validade de cada volume, e a saída segue a regra FEFO.",
      },
      {
        q: "E a temperatura? Algumas resinas cristalizam.",
        a: "Indicamos a área conforme a ficha técnica. A área climatizada está em processo de regularização junto à ANVISA.",
      },
      {
        q: "Como funciona a separação?",
        a: "É personalizada: cada cliente tem uma forma de separar, e a RC segue a solicitação de cada pedido.",
      },
      {
        q: "Resina classificada como perigosa pode sair na frota da RC?",
        a: "Pode. A frota da RC Transportes leva do galpão até o destino. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar resinas e insumos químicos industriais",
      intro:
        "Resina fora da condição certa gela, cristaliza ou perde a reatividade. Estes cuidados evitam perda de material e problema na aplicação.",
      blocos: [
        {
          titulo: "Comece pela FDS e pela ficha técnica",
          texto:
            "A FDS mostra a classe de risco e as incompatibilidades. A ficha técnica traz a faixa de temperatura e a validade. As duas definem onde o produto fica.",
        },
        {
          titulo: "Umidade é inimiga do PU",
          texto:
            "Isocianatos reagem com a umidade do ar e formam crosta ou gel. A embalagem deve ficar fechada, em local seco e coberto.",
        },
        {
          titulo: "Atenção à temperatura",
          texto:
            "Algumas resinas epóxi cristalizam no frio, e calor excessivo acelera o envelhecimento. Seguir a faixa indicada pelo fabricante evita retrabalho.",
        },
        {
          titulo: "Separe inflamável de corrosivo",
          texto:
            "Resina com solvente e endurecedor à base de amina têm riscos diferentes e não devem ficar lado a lado.",
        },
        {
          titulo: "Validade curta pede FEFO",
          texto:
            "Muitos sistemas têm validade de poucos meses. Controlar lote e usar primeiro o que vence primeiro evita descarte de material caro.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Estoque químico dentro da fábrica exige licenças, AVCB compatível e área segregada. Um armazém licenciado assume essa estrutura e entrega conforme a produção precisa.",
        },
      ],
    },
  },
  polimeros: {
    perfis: [
      {
        titulo: "Fabricantes de pneus",
        texto:
          "Borracha sintética e negro de fumo disponíveis para a produção, no volume que a fábrica consome.",
      },
      {
        titulo: "Artefatos de borracha",
        texto:
          "Vedações, mangueiras e correias: matéria-prima organizada por lote e liberada por pedido.",
      },
      {
        titulo: "Autopeças",
        texto:
          "Insumos de borracha e polímero guardados fora da planta e entregues na programação.",
      },
      {
        titulo: "Distribuidoras",
        texto:
          "Estoque regional de matérias-primas para borracha e plástico, com separação personalizada por pedido.",
      },
    ],
    produtos: [
      {
        grupo: "Borrachas sintéticas",
        itens:
          "SBR, NBR, EPDM e outras borrachas sintéticas em fardos.",
      },
      {
        grupo: "Negro de fumo",
        itens:
          "Negro de fumo de diversas especificações, em sacaria e big bag.",
      },
      {
        grupo: "Borracha natural",
        itens:
          "Fardos de borracha natural para compostos e artefatos.",
      },
      {
        grupo: "Polímeros",
        itens:
          "Polímeros e compostos em sacaria e big bag para a indústria de plástico e borracha.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Parte desses insumos exige cadastro e licença no IBAMA.",
        comoAtendemos:
          "Licenciamento IBAMA vigente para os insumos que exigem.",
      },
      {
        exigencia:
          "Negro de fumo é um pó fino que contamina outras cargas com facilidade.",
        comoAtendemos:
          "Área própria, afastada de cargas claras, alimentos e embalagens.",
      },
      {
        exigencia:
          "Borracha envelhece com calor, luz solar e ozônio.",
        comoAtendemos:
          "Área coberta, sem sol direto e longe de fontes de calor.",
      },
      {
        exigencia:
          "Fardos de borracha deformam e grudam quando empilhados além do limite.",
        comoAtendemos:
          "Empilhamento dentro do limite do fornecedor, com paletes e separadores.",
      },
      {
        exigencia:
          "O lote de matéria-prima precisa ser rastreável até a produção.",
        comoAtendemos:
          "O WMS registra lote e posição, e a saída segue a regra FEFO.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos itens",
        texto:
          "Recebemos a lista de insumos com FDS e limites de empilhamento para definir área e posição.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote e embalagem. Big bag rasgado ou sacaria furada é separado na hora.",
      },
      {
        titulo: "Armazenagem segregada",
        texto:
          "Negro de fumo em área própria e borrachas protegidas de calor e luz, com posição no WMS.",
      },
      {
        titulo: "Separação por pedido",
        texto:
          "Separação por pedido ou solicitação de venda, seguindo FEFO, com conferência de saída.",
      },
      {
        titulo: "Entrega",
        texto:
          "A carga segue na frota do grupo até a fábrica, na janela combinada, ou na transportadora que você indicar.",
      },
    ],
    condicoes: [
      {
        titulo: "Área para pós",
        texto:
          "Negro de fumo separado das demais cargas para evitar contaminação.",
      },
      {
        titulo: "Coberta e protegida",
        texto:
          "Sem sol direto e longe de calor, para a borracha não envelhecer no estoque.",
      },
      {
        titulo: "Empilhamento controlado",
        texto:
          "Limite de altura respeitado, com paletes e separadores entre os fardos.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem de fardos, big bags e sacaria",
      "Separação por pedido",
      "Paletização e filmagem",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Matéria-prima no ritmo da produção",
      texto:
        "Fábrica de borracha consome volume alto e não pode parar por falta de insumo. Com armazenagem e transporte no mesmo grupo, a RC separa cada pedido e pode entregar com a frota própria, sem intermediário.",
    },
    faq: [
      {
        q: "Vocês armazenam negro de fumo?",
        a: "Sim, em área própria, afastada de cargas que poderiam ser contaminadas pelo pó.",
      },
      {
        q: "Recebem big bag?",
        a: "Sim. Recebemos big bags, sacaria e fardos, com conferência de integridade na entrada.",
      },
      {
        q: "Como evitam que os fardos deformem?",
        a: "Respeitamos o limite de empilhamento do fornecedor e usamos paletes e separadores.",
      },
      {
        q: "A borracha perde qualidade no estoque?",
        a: "Pode perder com calor, luz e ozônio. Por isso fica em área coberta, sem sol direto e longe de fontes de calor.",
      },
      {
        q: "Como funciona a separação?",
        a: "Por pedido ou solicitação de venda, sempre respeitando a regra FEFO, com conferência na saída.",
      },
      {
        q: "Fardo e big bag saem do galpão direto para a fábrica?",
        a: "Podem sair. A frota da RC Transportes leva do galpão até a fábrica de borracha ou plástico no ritmo da produção. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar borrachas, polímeros e negro de fumo",
      intro:
        "Borracha e negro de fumo parecem cargas resistentes, mas estoque mal feito gera perda de material e contaminação. Estes são os cuidados principais.",
      blocos: [
        {
          titulo: "Proteja de calor, luz e ozônio",
          texto:
            "Borracha exposta ao sol ou perto de motores elétricos envelhece, endurece e trinca. O ideal é área coberta, ventilada e sem luz solar direta.",
        },
        {
          titulo: "Não empilhe além do limite",
          texto:
            "Fardos de borracha deformam e grudam sob peso excessivo. Siga o limite do fornecedor e use separadores entre as camadas.",
        },
        {
          titulo: "Isole o negro de fumo",
          texto:
            "O pó se espalha com facilidade e mancha tudo o que toca. Mantenha o negro de fumo em área própria, longe de cargas claras e embalagens.",
        },
        {
          titulo: "Cuide da sacaria e dos big bags",
          texto:
            "Embalagem rasgada desperdiça material e suja o estoque. Confira na entrada e movimente com equipamento adequado.",
        },
        {
          titulo: "Use o mais antigo primeiro",
          texto:
            "Borracha tem prazo de uso. Controle por lote e saída FEFO evitam material vencido parado no fundo do estoque.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Matéria-prima de borracha ocupa muito espaço. Um armazém preparado libera a área da fábrica e entrega conforme a produção.",
        },
      ],
    },
  },
  aditivos: {
    perfis: [
      {
        titulo: "Indústria de borracha",
        texto:
          "Aceleradores, antioxidantes e cargas disponíveis para a produção, organizados por lote.",
      },
      {
        titulo: "Plásticos e compostos",
        texto:
          "Aditivos e cargas minerais guardados fora da planta e entregues na programação.",
      },
      {
        titulo: "Tintas e revestimentos",
        texto:
          "Pigmentos e cargas em área própria, sem risco de contaminar outras cargas.",
      },
      {
        titulo: "Distribuidoras de especialidades",
        texto:
          "Muitos itens diferentes num único armazém, com separação personalizada e pedidos consolidados.",
      },
    ],
    produtos: [
      {
        grupo: "Cargas minerais",
        itens:
          "Carbonato de cálcio, caulim, sílica, talco e outras cargas em sacaria e big bag.",
      },
      {
        grupo: "Antioxidantes e antiozonantes",
        itens:
          "Aditivos que protegem borracha e plástico contra envelhecimento.",
      },
      {
        grupo: "Agentes de vulcanização",
        itens:
          "Aceleradores, óxido de zinco e ativadores para a indústria de borracha.",
      },
      {
        grupo: "Pigmentos industriais",
        itens:
          "Dióxido de titânio, óxidos de ferro e pigmentos orgânicos.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Substâncias com controle ambiental federal exigem cadastro e licença no IBAMA.",
        comoAtendemos:
          "Licenciamento IBAMA vigente para os aditivos que exigem.",
      },
      {
        exigencia:
          "Cada aditivo precisa de Ficha com Dados de Segurança (FDS).",
        comoAtendemos:
          "A FDS de cada item é arquivada na entrada e fica disponível durante todo o período armazenado.",
      },
      {
        exigencia:
          "Aditivos podem reagir entre si, e alguns são incompatíveis com oxidantes.",
        comoAtendemos:
          "Posição definida por compatibilidade química, conforme a FDS, e não por espaço livre.",
      },
      {
        exigencia:
          "Cargas minerais e pós absorvem umidade e empedram.",
        comoAtendemos:
          "Área coberta e seca, com sacaria sobre palete, afastada do piso e das paredes.",
      },
      {
        exigencia:
          "Pó de pigmento contamina outras cargas com facilidade.",
        comoAtendemos:
          "Pigmentos em área própria, com embalagem conferida no recebimento.",
      },
      {
        exigencia:
          "Lote e validade precisam ser rastreáveis até a produção.",
        comoAtendemos:
          "O WMS registra lote, validade e posição. A saída segue a regra FEFO.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro com FDS",
        texto:
          "Cada aditivo é cadastrado com a sua FDS para definir compatibilidade e área.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote e embalagem. Saco furado ou big bag rasgado é separado.",
      },
      {
        titulo: "Armazenagem por compatibilidade",
        texto:
          "Posição definida pela química do produto, em área seca e coberta.",
      },
      {
        titulo: "Separação personalizada",
        texto:
          "Separação do jeito que cada cliente pede, com vários aditivos consolidados no mesmo pedido.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo até a fábrica, numa entrega só.",
      },
    ],
    condicoes: [
      {
        titulo: "Compatibilidade química",
        texto:
          "Cada item na posição certa, conforme a FDS, longe do que pode reagir com ele.",
      },
      {
        titulo: "Área seca",
        texto:
          "Proteção contra umidade para cargas minerais e pós.",
      },
      {
        titulo: "Controle de pós",
        texto:
          "Pigmentos e pós finos em área própria para não contaminar outras cargas.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem de sacaria e big bag",
      "Separação personalizada",
      "Consolidação de vários aditivos no mesmo pedido",
      "Etiquetagem e reetiquetagem",
      "Inventários cíclicos, rotativos e gerais",
      "Entrega com a frota RC (opcional)",
    ],
    grupo: {
      titulo: "Vários aditivos, uma entrega",
      texto:
        "Quem trabalha com muitos aditivos costuma receber de vários fornecedores em dias diferentes. Na RC os itens ficam no mesmo armazém e saem consolidados na frota do grupo, numa entrega só.",
    },
    faq: [
      {
        q: "Quais aditivos vocês armazenam?",
        a: "Cargas minerais, antioxidantes, aceleradores e agentes de vulcanização, além de pigmentos industriais. Cada item é avaliado pela FDS.",
      },
      {
        q: "Enxofre pode ser armazenado?",
        a: "Enxofre é sólido inflamável e depende da área de inflamáveis, que está em processo de regularização. Fale com o comercial para saber o prazo.",
      },
      {
        q: "O pigmento não contamina outras cargas?",
        a: "Pigmentos e pós finos ficam em área própria, e a embalagem é conferida no recebimento.",
      },
      {
        q: "Como evitam que as cargas minerais empedrem?",
        a: "A armazenagem é em área coberta e seca, com sacaria sobre palete e afastada do piso e das paredes.",
      },
      {
        q: "Vocês juntam vários aditivos no mesmo pedido?",
        a: "Sim. A separação segue a solicitação de cada cliente e os itens são consolidados numa entrega só.",
      },
      {
        q: "Quem leva o aditivo do galpão até a fábrica?",
        a: "Pode ser a própria RC. A carga sai na frota da RC Transportes, sem passar por outra empresa no caminho. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar aditivos e especialidades químicas",
      intro:
        "Aditivo é item pequeno no custo e grande no impacto: um lote empedrado ou contaminado compromete a produção inteira. Estes são os cuidados básicos.",
      blocos: [
        {
          titulo: "Tenha a FDS de cada item",
          texto:
            "Cada aditivo tem riscos e incompatibilidades próprios. A FDS define onde ele pode ficar e o que não pode estar ao lado.",
        },
        {
          titulo: "Proteja da umidade",
          texto:
            "Cargas minerais e muitos pós absorvem umidade, empedram e perdem desempenho. Área seca, coberta e sacaria sobre palete resolvem boa parte do problema.",
        },
        {
          titulo: "Respeite a compatibilidade",
          texto:
            "Alguns aditivos são inflamáveis, e outros reagem com oxidantes. Posicionar pela química, e não pelo espaço livre, evita acidente.",
        },
        {
          titulo: "Controle os pós",
          texto:
            "Pigmento e pó fino se espalham e mancham outras cargas. Área própria e embalagem íntegra mantêm o estoque limpo.",
        },
        {
          titulo: "Rastreie lote e validade",
          texto:
            "Aditivo fora da validade pode alterar o resultado do composto. Controle em sistema e saída FEFO evitam surpresa na produção.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Muitos itens pequenos ocupam espaço e dão trabalho de controle. Um armazém preparado organiza tudo e entrega consolidado.",
        },
      ],
    },
  },
};

export function getSegmentDetail(id: SegmentId): SegmentDetail | undefined {
  return SEGMENT_DETAILS[id];
}
