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
          "Estoque de insumos por projeto, organizado por lote e liberado conforme a ordem de produção.",
      },
      {
        titulo: "Distribuidoras de matérias-primas",
        texto:
          "Base perto dos polos de cosméticos de SP, com saída fracionada para vários clientes.",
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
          "Essências, óleos essenciais e álcool cosmético, em área própria por serem inflamáveis.",
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
          "Quem armazena insumo sujeito à vigilância sanitária precisa estar regularizado na ANVISA e na Vigilância Sanitária local.",
        comoAtendemos:
          "Operação licenciada pela ANVISA, com documentação disponível para auditoria de cliente.",
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
          "A área é escolhida pela ficha técnica. Temos galpões com e sem climatização.",
      },
      {
        exigencia:
          "Essências e álcool são inflamáveis e não podem ficar junto com os demais insumos.",
        comoAtendemos:
          "Inflamáveis ficam em área separada, com a segregação definida antes do recebimento.",
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
          "Separação por ordem de produção ou por pedido, seguindo FEFO, com conferência na saída.",
      },
      {
        titulo: "Entrega na fábrica",
        texto:
          "A frota RC leva o insumo até a linha, na janela combinada com a produção.",
      },
    ],
    condicoes: [
      {
        titulo: "Área limpa e organizada",
        texto:
          "Corredores sinalizados e piso limpo, sem mistura com carga química industrial.",
      },
      {
        titulo: "Opção climatizada",
        texto:
          "Para insumo sensível a calor, indicamos a área climatizada conforme a ficha técnica.",
      },
      {
        titulo: "Segregação de inflamáveis",
        texto:
          "Essências e álcool em área própria, separados dos demais insumos.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada restrita e registrada por área, com monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação por ordem de produção",
      "Separação fracionada",
      "Etiquetagem de lote",
      "Inventário periódico",
      "Entrega programada com a frota RC",
    ],
    grupo: {
      titulo: "Insumo na linha no dia certo",
      texto:
        "Na indústria de cosméticos, atraso de matéria-prima é linha parada. Com armazenagem e transporte na mesma operação, a RC separa o insumo e entrega na fábrica na janela combinada, sem depender de outra transportadora e sem perder o registro de lote no caminho.",
    },
    faq: [
      {
        q: "Vocês armazenam produto acabado ou só matéria-prima?",
        a: "O foco é matéria-prima, insumo e embalagem da indústria cosmética. Para produto acabado, fale com o comercial: avaliamos conforme o tipo de produto e o volume.",
      },
      {
        q: "Como funciona o controle de temperatura?",
        a: "Depende do insumo. Temos galpões com e sem climatização e indicamos a área certa a partir da ficha técnica de cada item.",
      },
      {
        q: "Consigo rastrear um lote específico?",
        a: "Sim. O WMS registra lote, fornecedor, data de entrada e posição de cada volume, então qualquer lote é localizado rapidamente.",
      },
      {
        q: "Vocês separam por ordem de produção?",
        a: "Sim. A separação pode seguir a ordem de produção ou o pedido, sempre respeitando a regra FEFO.",
      },
      {
        q: "Essências e álcool podem ser armazenados?",
        a: "Sim, em área separada, por serem inflamáveis. A FDS de cada item define as condições de armazenagem.",
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
          "Produto acabado fora da fábrica, pronto para expedição a distribuidores e redes.",
      },
      {
        titulo: "Distribuidoras de limpeza",
        texto:
          "Estoque regional com separação por pedido para atacado, varejo e clientes institucionais.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Recebimento de produto regularizado, com conferência de rotulagem e documentação.",
      },
      {
        titulo: "Limpeza profissional",
        texto:
          "Produto concentrado e de uso profissional estocado perto dos contratos atendidos.",
      },
    ],
    produtos: [
      {
        grupo: "Limpeza doméstica",
        itens:
          "Detergentes, lava-roupas, amaciantes, limpadores multiuso e desengordurantes.",
      },
      {
        grupo: "Desinfecção",
        itens:
          "Água sanitária, alvejantes, desinfetantes e produtos à base de cloro ou quaternário de amônio.",
      },
      {
        grupo: "Uso profissional",
        itens:
          "Produtos concentrados para limpeza institucional e industrial, desincrustantes e removedores.",
      },
      {
        grupo: "Desinfestantes domissanitários",
        itens:
          "Inseticidas e produtos para controle de pragas de uso doméstico e profissional, em área separada.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Saneante é produto sujeito à vigilância sanitária. Quem armazena precisa estar regularizado na ANVISA e na Vigilância Sanitária local.",
        comoAtendemos:
          "Operação com as licenças sanitárias para armazenagem, com documentação disponível para auditoria.",
      },
      {
        exigencia:
          "O galpão precisa de AVCB adequado ao tipo de produto armazenado.",
        comoAtendemos:
          "AVCB vigente e plano de atendimento a emergências (PAE).",
      },
      {
        exigencia:
          "Produto à base de cloro não pode ficar perto de ácido, e saneante não divide espaço com alimento.",
        comoAtendemos:
          "Área própria para saneantes, com separação entre incompatíveis definida pela FDS.",
      },
      {
        exigencia:
          "Cada produto precisa de Ficha com Dados de Segurança (FDS).",
        comoAtendemos:
          "A FDS é arquivada na entrada de cada item e fica disponível para a equipe.",
      },
      {
        exigencia:
          "Embalagem com vazamento contamina outras cargas e gera risco para a equipe.",
        comoAtendemos:
          "Conferência de integridade no recebimento e procedimento de contenção para vazamento.",
      },
      {
        exigencia:
          "Lote e validade precisam ser rastreáveis, inclusive para um recolhimento.",
        comoAtendemos:
          "O WMS registra lote, validade e posição. A saída segue a regra FEFO.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos produtos",
        texto:
          "Recebemos a relação de produtos com FDS e classificação de risco para definir a área de cada um.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, rotulagem e embalagem. Galão com vazamento ou caixa molhada não entra no estoque.",
      },
      {
        titulo: "Armazenagem segregada",
        texto:
          "Posição definida por compatibilidade, longe de alimento, cosmético e produto incompatível.",
      },
      {
        titulo: "Separação por pedido",
        texto:
          "Separação seguindo FEFO, conferência de volumes e paletização com filme para o transporte.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo para distribuidores, redes e clientes finais.",
      },
    ],
    condicoes: [
      {
        titulo: "Área própria",
        texto:
          "Saneantes em área definida, sem dividir corredor com alimento ou cosmético.",
      },
      {
        titulo: "Separação de incompatíveis",
        texto:
          "Cloro longe de ácido e desinfestantes em área separada, conforme a FDS.",
      },
      {
        titulo: "Resposta a vazamento",
        texto:
          "Procedimento de contenção definido e equipe orientada para agir rápido.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h do galpão.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação por pedido",
      "Separação fracionada",
      "Paletização e filmagem de carga",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Da indústria ao ponto de venda",
      texto:
        "Saneante tem giro alto e muitos destinos. Com armazenagem e transporte na mesma operação, a RC separa os pedidos e entrega com a frota própria, com o mesmo registro de lote do galpão até o cliente.",
    },
    faq: [
      {
        q: "Que tipos de saneante vocês armazenam?",
        a: "Produtos de limpeza doméstica e profissional, desinfetantes, água sanitária, alvejantes e desinfestantes domissanitários. Cada item é avaliado pela FDS antes do primeiro recebimento.",
      },
      {
        q: "O saneante fica junto de outros produtos?",
        a: "Não. Saneantes ficam em área própria, sem dividir corredor com alimento ou cosmético, e produtos incompatíveis entre si também são separados.",
      },
      {
        q: "Preciso enviar a FDS dos produtos?",
        a: "Sim. É com ela que definimos a área e a compatibilidade de cada item.",
      },
      {
        q: "O que acontece se uma embalagem vazar?",
        a: "Seguimos o procedimento de contenção: isolamos a área, contemos o produto e segregamos os volumes afetados. Você é avisado para decidir o destino da mercadoria.",
      },
      {
        q: "Vocês separam pedidos para vários clientes?",
        a: "Sim. A separação é feita por pedido, com conferência de volumes e paletização para o transporte.",
      },
      {
        q: "Vocês entregam em distribuidores e redes de varejo?",
        a: "Sim. Depois da separação, a carga segue na frota da RC Transportes até distribuidor, atacado ou varejo, com a mesma rastreabilidade do armazém. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar saneantes corretamente",
      intro:
        "Saneante parece carga simples, mas mistura errada e embalagem danificada causam acidente e prejuízo. Estes são os cuidados básicos.",
      blocos: [
        {
          titulo: "Leia a FDS e o rótulo",
          texto:
            "A ficha de segurança diz como armazenar, o que não pode ficar perto e o que fazer em caso de vazamento. O rótulo traz o lote e a validade que precisam ser controlados.",
        },
        {
          titulo: "Nunca junte cloro com ácido",
          texto:
            "Produto à base de cloro em contato com ácido libera gás tóxico. Por isso a separação por compatibilidade vale também para o estoque, não só para o uso.",
        },
        {
          titulo: "Mantenha longe de alimentos e cosméticos",
          texto:
            "Saneante deve ter área própria. Um vazamento perto de alimento ou cosmético contamina carga que não tem como ser recuperada.",
        },
        {
          titulo: "Respeite o empilhamento",
          texto:
            "Galões e bombonas deformam quando empilhados além do limite indicado na caixa. Embalagem amassada vaza, e vazamento vira perda e risco.",
        },
        {
          titulo: "Controle a validade",
          texto:
            "Desinfetante e água sanitária perdem eficácia com o tempo. Saída pela regra FEFO evita produto vencido parado no estoque.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Saneante ocupa muito espaço e tem giro alto. Um armazém preparado assume a área, a segregação e a separação dos pedidos, e a indústria foca em produzir e vender.",
        },
      ],
    },
  },
  correlatos: {
    perfis: [
      {
        titulo: "Distribuidoras de produtos para saúde",
        texto:
          "Estoque regularizado para atender hospitais, clínicas e laboratórios com rastreio por lote.",
      },
      {
        titulo: "Fabricantes",
        texto:
          "Produto acabado fora da fábrica, com expedição para distribuidores e clientes diretos.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Produto nacionalizado recebido com conferência de documentação, lote e validade.",
      },
      {
        titulo: "Fornecedores de licitações",
        texto:
          "Estoque organizado para cumprir contratos públicos com prazo de entrega definido.",
      },
    ],
    produtos: [
      {
        grupo: "Material médico-hospitalar",
        itens:
          "Seringas, agulhas, cateteres, luvas de procedimento, gazes, curativos e materiais descartáveis.",
      },
      {
        grupo: "Equipamentos e instrumentais",
        itens:
          "Equipamentos médicos embalados, instrumentais cirúrgicos e acessórios.",
      },
      {
        grupo: "Produtos para diagnóstico",
        itens:
          "Kits e materiais de diagnóstico, armazenados conforme a condição exigida pelo fabricante.",
      },
      {
        grupo: "Materiais especiais",
        itens:
          "Órteses, próteses e materiais especiais (OPME), com controle por lote ou número de série.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Armazenar produto para saúde exige Autorização de Funcionamento (AFE) da ANVISA e licença sanitária local.",
        comoAtendemos:
          "Operação licenciada pela ANVISA, com documentação disponível para auditoria de cliente.",
      },
      {
        exigencia:
          "Cada produto precisa ser rastreável por lote ou número de série, para recolhimento e tecnovigilância.",
        comoAtendemos:
          "O WMS registra lote, número de série quando houver, validade e posição de cada item.",
      },
      {
        exigencia:
          "O fabricante define as condições de armazenagem, como temperatura e umidade.",
        comoAtendemos:
          "A área é escolhida conforme a exigência do fabricante. Temos galpões com e sem climatização.",
      },
      {
        exigencia:
          "Produto avariado, devolvido ou recolhido deve ficar separado do estoque liberado.",
        comoAtendemos:
          "Área de segregação para itens avariados, devolvidos ou em análise, com bloqueio no sistema.",
      },
      {
        exigencia:
          "Embalagem estéril violada torna o produto impróprio para uso.",
        comoAtendemos:
          "Conferência de integridade no recebimento e manuseio que protege a embalagem.",
      },
      {
        exigencia: "Produto vencido não pode ser expedido.",
        comoAtendemos:
          "Saída pela regra FEFO e controle de validade por lote no sistema.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos produtos",
        texto:
          "Recebemos a relação de produtos com registro ou notificação na ANVISA e as condições exigidas pelo fabricante.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, série, validade e integridade da embalagem. Embalagem violada vai para segregação.",
      },
      {
        titulo: "Armazenagem",
        texto:
          "Estoque liberado separado do estoque bloqueado, com posição registrada no WMS.",
      },
      {
        titulo: "Separação e expedição",
        texto:
          "Separação por FEFO e conferência de lote e quantidade antes do carregamento.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo até hospitais, clínicas e distribuidores.",
      },
    ],
    condicoes: [
      {
        titulo: "Liberado e bloqueado",
        texto:
          "Área separada para itens avariados, devolvidos ou em análise, sem risco de expedição por engano.",
      },
      {
        titulo: "Condição ambiental",
        texto:
          "Área indicada conforme a exigência do fabricante, com opção climatizada.",
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
      "Separação fracionada",
      "Controle por lote e número de série",
      "Etiquetagem",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Até o hospital sem trocar de mão",
      texto:
        "Produto para saúde precisa chegar íntegro e rastreável. Com armazenagem e transporte na mesma operação, a RC separa, confere e entrega com a frota própria, sem repassar a carga para outra empresa no meio do caminho.",
    },
    faq: [
      {
        q: "Quais produtos para saúde vocês armazenam?",
        a: "Material médico-hospitalar, equipamentos e instrumentais, produtos para diagnóstico e materiais especiais. Cada item é avaliado conforme o registro e as condições exigidas pelo fabricante.",
      },
      {
        q: "Vocês controlam por número de série?",
        a: "Sim. Além do lote, o WMS registra o número de série dos itens que exigem esse controle.",
      },
      {
        q: "O que acontece com produto avariado ou devolvido?",
        a: "Ele vai para uma área de segregação e fica bloqueado no sistema até você decidir o destino. Não há risco de ser expedido por engano.",
      },
      {
        q: "Como funciona o controle de temperatura?",
        a: "Depende do produto. Temos galpões com e sem climatização e indicamos a área conforme a exigência do fabricante.",
      },
      {
        q: "Vocês recebem auditoria de cliente?",
        a: "Sim. Os registros da operação e as licenças ficam disponíveis, e a visita pode ser agendada com o comercial.",
      },
      {
        q: "A entrega em hospitais e clínicas também pode ser feita pela RC?",
        a: "Pode. A frota da RC Transportes leva do galpão até hospital, clínica ou distribuidor, e o lote segue rastreado até a entrega. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar produtos para saúde corretamente",
      intro:
        "Correlato mal armazenado pode chegar ao paciente fora da condição de uso. Estes são os cuidados que a regulação e o bom senso pedem.",
      blocos: [
        {
          titulo: "Respeite o que o fabricante indica",
          texto:
            "Temperatura, umidade, empilhamento e proteção contra luz vêm do fabricante. O armazém precisa ter área compatível com essas condições.",
        },
        {
          titulo: "Rastreie por lote e série",
          texto:
            "Em um recolhimento ou alerta de tecnovigilância, é preciso saber onde está cada unidade. Sem registro de lote e série no recebimento, isso vira uma busca manual.",
        },
        {
          titulo: "Separe liberado de bloqueado",
          texto:
            "Produto avariado, devolvido ou em análise não pode ficar misturado ao estoque liberado. A separação deve ser física e também no sistema.",
        },
        {
          titulo: "Proteja a embalagem estéril",
          texto:
            "Embalagem furada ou úmida compromete a esterilidade. Manuseio cuidadoso e conferência na entrada evitam que o problema só apareça no hospital.",
        },
        {
          titulo: "Controle a validade",
          texto:
            "Muitos correlatos têm validade ligada à esterilização. Saída pela regra FEFO garante que o lote mais antigo saia primeiro.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Manter estoque regularizado exige licença, procedimentos e equipe treinada. Um armazém licenciado já tem essa estrutura, e a empresa foca em vender e atender.",
        },
      ],
    },
  },
  medicamentos: {
    perfis: [
      {
        titulo: "Distribuidoras de medicamentos",
        texto:
          "Estoque regularizado com separação por pedido para farmácias, hospitais e redes.",
      },
      {
        titulo: "Laboratórios e indústrias",
        texto:
          "Produto acabado fora da fábrica, com expedição para distribuidores e clientes diretos.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Medicamento importado recebido com conferência de documentação, lote e validade.",
      },
      {
        titulo: "Fornecedores do setor público",
        texto:
          "Estoque organizado para cumprir contratos e licitações com prazo de entrega definido.",
      },
    ],
    produtos: [
      {
        grupo: "Referência, genéricos e similares",
        itens:
          "Medicamentos de prescrição em comprimidos, cápsulas, xaropes, pomadas e outras formas.",
      },
      {
        grupo: "Isentos de prescrição",
        itens:
          "Analgésicos, antiácidos, vitaminas e demais medicamentos de venda livre.",
      },
      {
        grupo: "Uso hospitalar",
        itens:
          "Soluções parenterais e medicamentos de uso hospitalar em temperatura ambiente controlada.",
      },
      {
        grupo: "Controlados",
        itens:
          "Medicamentos da Portaria 344 ficam em área restrita própria. Veja a página de medicamentos controlados.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Armazenar medicamento exige AFE da ANVISA, licença sanitária e farmacêutico responsável técnico.",
        comoAtendemos:
          "Operação licenciada pela ANVISA, com farmacêutico responsável técnico.",
      },
      {
        exigencia:
          "As Boas Práticas de Distribuição e Armazenagem (RDC 653/2022) pedem procedimentos escritos para cada etapa.",
        comoAtendemos:
          "Recebimento, armazenagem e expedição com procedimentos documentados e registro de cada operação.",
      },
      {
        exigencia:
          "A maioria dos medicamentos deve ficar entre 15 °C e 30 °C, com temperatura monitorada e registrada.",
        comoAtendemos:
          "Registro de temperatura na área de medicamentos, com histórico disponível para auditoria.",
      },
      {
        exigencia:
          "Recebimento e expedição devem ser separados, e produto em quarentena, reprovado ou devolvido fica bloqueado.",
        comoAtendemos:
          "Recebimento separado da expedição e segregação física e no sistema para itens bloqueados.",
      },
      {
        exigencia:
          "Cada lote precisa ser rastreável para um eventual recolhimento (recall).",
        comoAtendemos:
          "O WMS registra lote, validade e posição. Em um recolhimento, o lote é localizado e bloqueado.",
      },
      {
        exigencia: "Medicamento vencido não pode ser expedido.",
        comoAtendemos:
          "Saída pela regra FEFO e controle de validade por lote no sistema.",
      },
    ],
    passos: [
      {
        titulo: "Qualificação",
        texto:
          "Conferimos a documentação da sua empresa e as condições de armazenagem de cada produto antes do primeiro recebimento.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, validade e integridade, em área separada da expedição.",
      },
      {
        titulo: "Armazenagem",
        texto:
          "Posição na área de medicamentos, com temperatura registrada e itens bloqueados segregados.",
      },
      {
        titulo: "Separação e expedição",
        texto:
          "Separação por FEFO e conferência de lote e quantidade antes do carregamento.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo até farmácias, hospitais e distribuidores.",
      },
    ],
    condicoes: [
      {
        titulo: "Área de medicamentos",
        texto:
          "Espaço próprio, sem dividir corredor com carga química ou de outra natureza.",
      },
      {
        titulo: "Temperatura registrada",
        texto:
          "Monitoramento da área com histórico disponível para o cliente e para a fiscalização.",
      },
      {
        titulo: "Quarentena e bloqueio",
        texto:
          "Itens reprovados, devolvidos ou recolhidos ficam separados e bloqueados no sistema.",
      },
      {
        titulo: "Acesso restrito",
        texto:
          "Entrada registrada por área e monitoramento 24h do galpão.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação fracionada por pedido",
      "Conferência de lote na saída",
      "Gestão de devoluções",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Rastreabilidade que não quebra na entrega",
      texto:
        "Em medicamento, cada troca de responsável é um ponto a mais para documentar e auditar. Na RC o mesmo grupo guarda e entrega: a carga sai do galpão na frota própria, com o registro de lote do recebimento até o destino.",
    },
    faq: [
      {
        q: "A armazenagem segue alguma norma da ANVISA?",
        a: "Sim. Seguimos as Boas Práticas de Distribuição e Armazenagem de medicamentos (RDC 653/2022), com procedimentos documentados para cada etapa.",
      },
      {
        q: "A operação tem farmacêutico responsável?",
        a: "Sim. A armazenagem de medicamentos conta com farmacêutico responsável técnico, como exige a legislação.",
      },
      {
        q: "Como é feito o controle de temperatura?",
        a: "A área de medicamentos tem temperatura monitorada e registrada, e o histórico fica disponível para auditoria.",
      },
      {
        q: "Como funciona em caso de recall?",
        a: "O WMS mostra onde está cada volume do lote. O lote é bloqueado, separado e tratado conforme a orientação da sua empresa.",
      },
      {
        q: "Vocês armazenam medicamentos controlados?",
        a: "Sim, em área restrita própria. Os detalhes estão na página de armazenagem de medicamentos controlados.",
      },
      {
        q: "Quem responde pelo medicamento entre o galpão e o destino?",
        a: "Pode ser a própria RC. A carga sai na frota da RC Transportes, então a cadeia de custódia não troca de empresa no caminho, o que simplifica a documentação exigida pela RDC 653/2022. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar medicamentos corretamente",
      intro:
        "Medicamento exige mais controle que qualquer outra carga. Estes são os pontos que a regulação cobra e que fazem diferença na prática.",
      blocos: [
        {
          titulo: "Controle e registre a temperatura",
          texto:
            "A maioria dos medicamentos deve ficar entre 15 °C e 30 °C. Não basta estar dentro da faixa: é preciso ter o registro para provar isso numa auditoria.",
        },
        {
          titulo: "Separe liberado de bloqueado",
          texto:
            "Produto em quarentena, reprovado, devolvido ou recolhido não pode ficar misturado ao estoque liberado. A separação deve ser física e também no sistema.",
        },
        {
          titulo: "Rastreie cada lote",
          texto:
            "Em um recolhimento, a empresa precisa saber onde está cada caixa do lote. Isso só é possível com o lote registrado no recebimento e em cada movimentação.",
        },
        {
          titulo: "Use a regra FEFO",
          texto:
            "O lote que vence primeiro deve sair primeiro. Isso evita perda por vencimento e reclamação de cliente que recebeu produto com validade curta.",
        },
        {
          titulo: "Documente os procedimentos",
          texto:
            "As Boas Práticas pedem procedimentos escritos para recebimento, armazenagem, expedição, devolução e limpeza, além de equipe treinada neles.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Manter uma área própria dentro das Boas Práticas exige licença, farmacêutico, procedimentos e controle de temperatura. Um armazém licenciado já tem essa estrutura pronta.",
        },
      ],
    },
  },
  "medicamentos-controlados": {
    perfis: [
      {
        titulo: "Indústrias farmacêuticas",
        texto:
          "Controlados fora da fábrica, em área restrita e com a documentação em dia.",
      },
      {
        titulo: "Distribuidoras",
        texto:
          "Estoque de controlados separado do medicamento comum, com registro de cada movimentação.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Recebimento de controlado importado com conferência de documentação e quantidade.",
      },
      {
        titulo: "Fornecedores de hospitais",
        texto:
          "Estoque organizado para abastecer hospitais e redes com rastreio por lote.",
      },
    ],
    produtos: [
      {
        grupo: "Psicotrópicos",
        itens:
          "Ansiolíticos, hipnóticos e demais medicamentos psicotrópicos das listas da Portaria SVS/MS 344/98.",
      },
      {
        grupo: "Entorpecentes",
        itens:
          "Analgésicos opioides e demais entorpecentes sujeitos a controle especial.",
      },
      {
        grupo: "Outras substâncias controladas",
        itens:
          "Antidepressivos, anticonvulsivantes, retinoides e demais itens de controle especial.",
      },
      {
        grupo: "Insumos e precursores",
        itens:
          "Substâncias que também exigem controle da Polícia Federal, com entrada e saída registradas por lote.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "A Portaria SVS/MS 344/98 exige Autorização Especial (AE) da ANVISA para armazenar substâncias e medicamentos controlados.",
        comoAtendemos:
          "Operação com as autorizações exigidas para controlados, disponíveis para auditoria.",
      },
      {
        exigencia:
          "Alguns insumos e precursores também são controlados pela Polícia Federal.",
        comoAtendemos:
          "Licença da Polícia Federal vigente para os itens que exigem.",
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
          "Também valem as Boas Práticas de Distribuição e Armazenagem de medicamentos.",
        comoAtendemos:
          "Os mesmos controles da área de medicamentos: temperatura registrada, FEFO e segregação de bloqueados.",
      },
      {
        exigencia:
          "Divergência de estoque precisa ser investigada e comunicada.",
        comoAtendemos:
          "Inventário frequente da área restrita e tratamento imediato de qualquer divergência.",
      },
    ],
    passos: [
      {
        titulo: "Validação documental",
        texto:
          "Antes do primeiro recebimento conferimos as autorizações da sua empresa e a relação de produtos.",
      },
      {
        titulo: "Recebimento controlado",
        texto:
          "Conferência de nota, lote e quantidade por pessoa autorizada, com registro da entrada.",
      },
      {
        titulo: "Guarda em área restrita",
        texto:
          "O produto vai direto para a área trancada, separado de qualquer medicamento comum.",
      },
      {
        titulo: "Expedição conferida",
        texto:
          "Separação por FEFO, conferência de lote e quantidade e registro da saída com a documentação.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo, habilitada junto ao Conselho Regional de Farmácia para esse transporte.",
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
        titulo: "Inventário frequente",
        texto:
          "Contagem periódica da área restrita, com divergência tratada na hora.",
      },
    ],
    servicos: [
      "Armazenagem em área restrita",
      "Separação por pedido",
      "Conferência de lote e quantidade",
      "Registro de movimentação por lote",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Menos pontos de contato, menos risco",
      texto:
        "Com controlado, cada troca de mão é um ponto de risco e de documentação. Na RC a carga sai da área restrita direto na frota do grupo, habilitada junto ao Conselho Regional de Farmácia, sem passar por outra empresa no caminho.",
    },
    faq: [
      {
        q: "Quais listas da Portaria 344 vocês armazenam?",
        a: "Avaliamos conforme a relação de produtos e as autorizações da sua empresa. Envie a lista para o comercial que respondemos caso a caso.",
      },
      {
        q: "Quem tem acesso à área restrita?",
        a: "Só pessoas autorizadas. Cada acesso fica registrado, e a área tem monitoramento 24h.",
      },
      {
        q: "Que documentos a minha empresa precisa ter?",
        a: "As autorizações da ANVISA para a sua atividade com controlados e a licença sanitária. Conferimos tudo antes do primeiro recebimento.",
      },
      {
        q: "Como a movimentação é registrada?",
        a: "Cada entrada e saída é registrada por lote e conferida com a documentação, o que facilita a sua prestação de contas.",
      },
      {
        q: "O controlado fica junto do medicamento comum?",
        a: "Não. Controlados ficam em área própria e trancada, separada da área de medicamentos comuns.",
      },
      {
        q: "A transportadora precisa de habilitação para levar controlado?",
        a: "Precisa. A frota da RC Transportes é habilitada junto ao Conselho Regional de Farmácia para esse transporte, então o controlado sai do galpão sem trocar de empresa no caminho.",
      },
    ],
    guia: {
      titulo: "Como armazenar medicamentos controlados corretamente",
      intro:
        "Controlado tem as regras do medicamento comum e mais algumas. Estes são os pontos que não podem falhar.",
      blocos: [
        {
          titulo: "Autorização antes de tudo",
          texto:
            "Quem armazena controlado precisa das autorizações específicas da ANVISA, e alguns insumos exigem também licença da Polícia Federal. Sem isso a operação é irregular desde o primeiro dia.",
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
          titulo: "Mantenha os cuidados do medicamento comum",
          texto:
            "Temperatura registrada, regra FEFO e segregação de itens bloqueados continuam valendo dentro da área restrita.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Montar e manter uma área de controlados exige autorização, estrutura física e rotina de controle. Um armazém que já opera com controlados assume essa responsabilidade.",
        },
      ],
    },
  },
  quimicos: {
    perfis: [
      {
        titulo: "Indústria química",
        texto:
          "Matéria-prima e produto acabado fora da fábrica, sem ocupar área produtiva com estoque de risco.",
      },
      {
        titulo: "Distribuidoras de químicos",
        texto:
          "Estoque próximo da capital e do interior de SP, com saída fracionada para vários clientes no mesmo dia.",
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
        grupo: "Classe 3 · Líquidos inflamáveis",
        itens:
          "Solventes como acetona, tolueno e xileno, álcoois, thinners, tintas, vernizes e resinas à base de solvente.",
      },
      {
        grupo: "Classe 8 · Corrosivos",
        itens:
          "Ácidos (sulfúrico, clorídrico, fosfórico), bases como soda cáustica e hidróxido de potássio, desincrustantes e limpadores industriais.",
      },
      {
        grupo: "Controlados pela Polícia Federal",
        itens:
          "Produtos químicos sujeitos a controle e fiscalização da Polícia Federal, com entrada e saída registradas por lote.",
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
          "Armazenar produto químico perigoso em São Paulo exige licenciamento ambiental na CETESB.",
        comoAtendemos:
          "Operação com registro CETESB vigente para a atividade de armazenagem.",
      },
      {
        exigencia:
          "Quem guarda produto químico controlado precisa de licença da Polícia Federal (Lei 10.357/2001).",
        comoAtendemos:
          "Licença da Polícia Federal vigente e controle de entradas e saídas por lote, pronto para fiscalização.",
      },
      {
        exigencia:
          "O galpão precisa de AVCB compatível com a carga de incêndio e com o tipo de produto armazenado.",
        comoAtendemos:
          "AVCB vigente e plano de atendimento a emergências (PAE) com equipe treinada.",
      },
      {
        exigencia:
          "Produtos incompatíveis não podem ficar próximos. Inflamáveis seguem a ABNT NBR 17505 e a tabela de incompatibilidade da ficha de segurança.",
        comoAtendemos:
          "Áreas separadas por classe de risco, definidas antes da entrada do produto. Ácido não divide corredor com inflamável.",
      },
      {
        exigencia:
          "Cada produto precisa de Ficha com Dados de Segurança (FDS, a antiga FISPQ), conforme a ABNT NBR 14725.",
        comoAtendemos:
          "A FDS é recebida e arquivada na entrada de cada item, disponível para a equipe e para a fiscalização.",
      },
      {
        exigencia:
          "Lote e validade precisam ser rastreáveis para auditoria e para um eventual recall.",
        comoAtendemos:
          "O WMS registra lote, posição e validade de cada volume. A saída segue a regra FEFO.",
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
          "Conferência de nota, lote, rotulagem e integridade das embalagens. Embalagem avariada não entra no estoque.",
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
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo, com motoristas habilitados para produto perigoso, até o destino final.",
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
          "PAE documentado, equipe treinada e procedimento definido para vazamento ou incêndio.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação fracionada por pedido",
      "Etiquetagem e reetiquetagem",
      "Inventário periódico",
      "Conferência de FDS e rotulagem",
      "Transporte com a frota RC",
    ],
    grupo: {
      titulo: "Do galpão ao cliente sem trocar de responsável",
      texto:
        "Produto perigoso é onde a troca de fornecedor mais pesa: documentação, responsabilidade e rastreio se perdem no meio do caminho. Na RC a carga sai do armazém direto na frota da RC Transportes, que tem certificação SASSMAQ para transporte de produtos químicos. Um contrato, uma equipe e o mesmo registro de lote do recebimento à entrega.",
    },
    faq: [
      {
        q: "Quais classes de produto perigoso vocês armazenam?",
        a: "Trabalhamos com líquidos inflamáveis (classe 3) e corrosivos (classe 8), além de químicos sem classificação de risco da mesma cadeia. Para outras classes avaliamos caso a caso a partir da ficha de segurança.",
      },
      {
        q: "Preciso enviar a ficha de segurança (FDS) antes de fechar?",
        a: "Sim. A FDS é o ponto de partida da análise: com ela definimos a área, a compatibilidade com os outros produtos e as condições de armazenagem. Sem FDS o produto não entra.",
      },
      {
        q: "Vocês armazenam produto controlado pela Polícia Federal?",
        a: "Sim. A RC mantém licença da Polícia Federal vigente e registra entrada e saída de cada lote, o que facilita a prestação de contas da sua empresa junto ao órgão.",
      },
      {
        q: "Como vocês evitam contato entre produtos incompatíveis?",
        a: "Cada classe de risco tem área própria no galpão, definida antes do recebimento. A posição de cada volume considera a tabela de incompatibilidade da FDS e fica registrada no WMS.",
      },
      {
        q: "O que acontece em caso de vazamento?",
        a: "Seguimos o plano de atendimento a emergências (PAE): isolamento da área, contenção do produto e acionamento dos responsáveis. A equipe é treinada para esse procedimento.",
      },
      {
        q: "Quem transporta produto perigoso precisa de certificação?",
        a: "Sim. A frota da RC Transportes tem SASSMAQ e motoristas habilitados para produto perigoso, então a carga vai do galpão até o seu cliente sem trocar de fornecedor. Se preferir usar outra transportadora, também atendemos.",
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
          "Estoque regional com saída fracionada por tambor, balde ou IBC.",
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
          "Armazenar produto químico em São Paulo exige licenciamento ambiental na CETESB.",
        comoAtendemos:
          "Operação com registro CETESB vigente para a atividade de armazenagem.",
      },
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
          "Posição definida pela classe de risco da FDS, com inflamáveis e corrosivos separados.",
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
          "A FDS é arquivada na entrada de cada item e fica disponível para a equipe e a fiscalização.",
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
          "Separação por FEFO, inclusive fracionada por volume, com conferência de saída.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo, certificada em SASSMAQ para transporte de produtos químicos.",
      },
    ],
    condicoes: [
      {
        titulo: "Segregação por classe",
        texto:
          "Inflamáveis e corrosivos em áreas separadas, definidas antes da entrada do produto.",
      },
      {
        titulo: "Área seca e coberta",
        texto:
          "Proteção contra chuva e umidade, essencial para isocianatos e sistemas PU.",
      },
      {
        titulo: "Plano de emergência",
        texto:
          "PAE documentado e procedimento de contenção para vazamento.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem de tambores, baldes e IBCs",
      "Separação fracionada",
      "Etiquetagem de lote",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Químico industrial com um responsável só",
      texto:
        "Resina e endurecedor precisam chegar juntos, íntegros e dentro da validade. Na RC a carga sai do galpão direto na frota da RC Transportes, certificada em SASSMAQ, com o mesmo registro de lote do recebimento à entrega.",
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
        a: "Indicamos a área conforme a ficha técnica. Temos galpões com e sem climatização.",
      },
      {
        q: "Vocês fazem saída fracionada?",
        a: "Sim. A separação pode ser por volume, como tambor ou balde, conforme o pedido.",
      },
      {
        q: "Resina classificada como perigosa pode sair na frota da RC?",
        a: "Pode. A frota da RC Transportes é certificada em SASSMAQ, a avaliação que a indústria química exige de quem transporta esse tipo de carga. Se preferir usar outra transportadora, também atendemos.",
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
          "Vedações, mangueiras e correias: matéria-prima organizada por lote e liberada por ordem de produção.",
      },
      {
        titulo: "Autopeças",
        texto:
          "Insumos de borracha e polímero guardados fora da planta e entregues na programação.",
      },
      {
        titulo: "Distribuidoras",
        texto:
          "Estoque regional de matérias-primas para borracha e plástico, com saída fracionada.",
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
          "Armazenar insumo químico em São Paulo exige licenciamento ambiental na CETESB.",
        comoAtendemos:
          "Operação com registro CETESB vigente para a atividade de armazenagem.",
      },
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
        titulo: "Separação por ordem de produção",
        texto:
          "Separação seguindo FEFO e a programação da fábrica, com conferência de saída.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo até a fábrica, na janela combinada.",
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
      "Separação por ordem de produção",
      "Paletização e filmagem",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Matéria-prima no ritmo da produção",
      texto:
        "Fábrica de borracha consome volume alto e não pode parar por falta de insumo. Com armazenagem e transporte no mesmo grupo, a RC separa pela programação e entrega com a frota própria, sem intermediário.",
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
        q: "Vocês separam pela programação da fábrica?",
        a: "Sim. A separação pode seguir a ordem de produção, sempre respeitando a regra FEFO.",
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
          "Muitos itens diferentes num único armazém, com saída fracionada e pedidos consolidados.",
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
          "Aceleradores, enxofre, óxido de zinco e ativadores para a indústria de borracha.",
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
          "Armazenar produto químico em São Paulo exige licenciamento ambiental na CETESB.",
        comoAtendemos:
          "Operação com registro CETESB vigente para a atividade de armazenagem.",
      },
      {
        exigencia:
          "Cada aditivo precisa de Ficha com Dados de Segurança (FDS).",
        comoAtendemos:
          "A FDS é arquivada na entrada de cada item e fica disponível durante todo o período armazenado.",
      },
      {
        exigencia:
          "Aditivos podem reagir entre si. O enxofre, por exemplo, é um sólido inflamável.",
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
        titulo: "Separação fracionada",
        texto:
          "Separação por saco ou volume, com vários aditivos consolidados no mesmo pedido.",
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
      "Separação fracionada",
      "Consolidação de vários aditivos no mesmo pedido",
      "Etiquetagem de lote",
      "Inventário periódico",
      "Entrega com a frota RC",
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
        a: "Sim. Por ser sólido inflamável, ele fica em posição definida pela FDS, separado dos itens incompatíveis.",
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
        a: "Sim. Separamos de forma fracionada e consolidamos os itens numa entrega só.",
      },
      {
        q: "Quem leva o aditivo do galpão até a fábrica?",
        a: "Pode ser a própria RC. A carga sai na frota da RC Transportes, com a FISPQ de cada produto disponível, sem passar por outra empresa no caminho. Se preferir usar outra transportadora, também atendemos.",
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
            "Enxofre é inflamável, e alguns aditivos reagem com oxidantes. Posicionar pela química, e não pelo espaço livre, evita acidente.",
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
  "equipamentos-ti": {
    requisitosCuidados: true,
    perfis: [
      {
        titulo: "Integradoras de TI e automação",
        texto:
          "Equipamento guardado entre a compra e a instalação, organizado por projeto.",
      },
      {
        titulo: "Revendas e distribuidores",
        texto:
          "Estoque seguro para atender clientes em São Paulo, Jundiaí e interior.",
      },
      {
        titulo: "Projetos de implantação",
        texto:
          "Data center, telecom e automação industrial: itens do projeto reunidos até a data da obra.",
      },
      {
        titulo: "Fabricantes de gabinetes",
        texto:
          "Racks e painéis prontos aguardando expedição, sem ocupar a fábrica.",
      },
    ],
    produtos: [
      {
        grupo: "Racks e gabinetes",
        itens:
          "Racks para servidor e rede, armários modulares e gabinetes metálicos.",
      },
      {
        grupo: "Painéis e quadros",
        itens:
          "Painéis de comando, quadros elétricos e componentes de automação embalados.",
      },
      {
        grupo: "Infraestrutura de rede",
        itens:
          "Equipamentos de rede embalados, bandejas, organizadores, patch panels e cabeamento.",
      },
      {
        grupo: "Itens de projeto",
        itens:
          "Materiais diversos de uma mesma implantação, reunidos e identificados por obra.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Racks e painéis são pesados e têm centro de gravidade alto.",
        comoAtendemos:
          "Movimentação com equipamento adequado e equipe treinada, sem tombar ou arrastar.",
      },
      {
        exigencia:
          "Umidade e poeira danificam componentes eletrônicos.",
        comoAtendemos:
          "Área seca e coberta, longe de produto químico, com a embalagem original preservada.",
      },
      {
        exigencia: "Equipamento de alto valor exige segurança.",
        comoAtendemos:
          "Controle de acesso por área e monitoramento 24h do galpão.",
      },
      {
        exigencia:
          "Avaria precisa ser identificada na entrada, não no dia da instalação.",
        comoAtendemos:
          "Conferência visual das embalagens no recebimento, com registro de qualquer dano.",
      },
      {
        exigencia:
          "Um projeto tem muitos itens diferentes para o mesmo destino.",
        comoAtendemos:
          "Controle por item e por projeto no WMS, com separação por obra ou cliente.",
      },
      {
        exigencia:
          "Entrega em obra exige janela definida e cuidado na descarga.",
        comoAtendemos:
          "Entrega programada com a frota RC, no dia combinado com o cliente final.",
      },
    ],
    passos: [
      {
        titulo: "Planejamento",
        texto:
          "Recebemos a lista de itens com dimensões e pesos para planejar a área e a movimentação.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de volumes e embalagens, com registro de qualquer avaria na entrada.",
      },
      {
        titulo: "Armazenagem",
        texto:
          "Posição em área seca, organizada por projeto ou cliente e registrada no WMS.",
      },
      {
        titulo: "Separação por projeto",
        texto:
          "Os itens de cada obra são reunidos e conferidos antes do carregamento.",
      },
      {
        titulo: "Entrega programada",
        texto:
          "A frota RC entrega na obra ou no cliente, na data combinada.",
      },
    ],
    condicoes: [
      {
        titulo: "Área seca e limpa",
        texto:
          "Sem umidade, poeira ou proximidade com produto químico.",
      },
      {
        titulo: "Movimentação técnica",
        texto:
          "Equipamento e equipe preparados para carga pesada e sensível.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada restrita e registrada por área.",
      },
      {
        titulo: "Monitoramento 24h",
        texto:
          "Câmeras e ronda contínua no galpão e na expedição.",
      },
    ],
    servicos: [
      "Armazenagem paletizada e blocada",
      "Separação por projeto ou obra",
      "Consolidação de carga",
      "Registro de avarias no recebimento",
      "Inventário periódico",
      "Entrega programada com a frota RC",
    ],
    grupo: {
      titulo: "Do estoque à obra no dia marcado",
      texto:
        "Em implantação, o equipamento precisa chegar completo e na data da obra. Com armazenagem e transporte no mesmo grupo, a RC reúne os itens do projeto e entrega com a frota própria, sem depender de outra transportadora.",
    },
    faq: [
      {
        q: "Que tipo de equipamento vocês armazenam?",
        a: "Racks, gabinetes, painéis de comando, quadros elétricos, infraestrutura de rede e itens de projetos de implantação.",
      },
      {
        q: "A área é seca?",
        a: "Sim. Equipamento de TI fica em área seca e coberta, longe de produto químico.",
      },
      {
        q: "Vocês organizam por projeto?",
        a: "Sim. O WMS controla os itens por projeto ou cliente, e a separação é feita por obra.",
      },
      {
        q: "E se o equipamento chegar avariado?",
        a: "As embalagens são conferidas no recebimento e qualquer dano é registrado e comunicado na hora.",
      },
      {
        q: "A carga tem seguro?",
        a: "Sim, a carga armazenada conta com cobertura de seguro. As condições variam por tipo de produto e são tratadas com o comercial.",
      },
      {
        q: "Vocês entregam na obra?",
        a: "Sim. A frota RC entrega na obra ou no cliente final, na data combinada.",
      },
    ],
    guia: {
      titulo: "Como armazenar equipamentos de TI e infraestrutura",
      intro:
        "Equipamento de TI não é carga perigosa, mas é cara e sensível. Estes cuidados evitam avaria e atraso na implantação.",
      blocos: [
        {
          titulo: "Mantenha a embalagem original",
          texto:
            "A embalagem do fabricante protege contra impacto, poeira e umidade. Abrir antes da hora aumenta o risco de dano.",
        },
        {
          titulo: "Local seco e sem poeira",
          texto:
            "Umidade oxida contatos e poeira entra nos componentes. O estoque deve ser coberto, seco e longe de produto químico.",
        },
        {
          titulo: "Cuidado na movimentação",
          texto:
            "Racks e painéis tombam com facilidade. Equipamento adequado e equipe treinada evitam acidente e avaria.",
        },
        {
          titulo: "Organize por projeto",
          texto:
            "Quando os itens de uma obra ficam espalhados, falta peça no dia da instalação. Controle por projeto resolve isso.",
        },
        {
          titulo: "Confira na entrada",
          texto:
            "Avaria descoberta na obra vira discussão com fornecedor e atraso. Conferir e registrar no recebimento protege quem contratou.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Guardar equipamento no escritório ou na obra é arriscado. Um armazém seguro mantém tudo protegido e entrega quando o projeto precisa.",
        },
      ],
    },
  },
  alimenticios: {
    perfis: [
      {
        titulo: "Indústrias de alimentos",
        texto:
          "Produto seco fora da fábrica, pronto para expedição a distribuidores e redes.",
      },
      {
        titulo: "Distribuidoras e atacadistas",
        texto:
          "Estoque regional com separação por pedido para varejo e food service.",
      },
      {
        titulo: "Importadoras",
        texto:
          "Alimento importado recebido com conferência de lote, validade e rotulagem.",
      },
      {
        titulo: "Fornecedores de ingredientes",
        texto:
          "Ingredientes industriais guardados e entregues conforme a produção do cliente.",
      },
    ],
    produtos: [
      {
        grupo: "Mercearia seca",
        itens:
          "Grãos, farinhas, massas, açúcar, enlatados e demais produtos de prateleira.",
      },
      {
        grupo: "Bebidas",
        itens:
          "Bebidas que não exigem refrigeração, em caixas e fardos.",
      },
      {
        grupo: "Ingredientes industriais",
        itens:
          "Amidos, açúcares, proteínas e outros ingredientes secos para a indústria.",
      },
      {
        grupo: "Embalagens para alimentos",
        itens:
          "Embalagens e materiais que entram em contato com alimento, guardados com o mesmo cuidado.",
      },
    ],
    requisitos: [
      {
        exigencia:
          "Armazenar alimento exige licença sanitária da Vigilância Sanitária local.",
        comoAtendemos:
          "Operação com licença sanitária para armazenagem de alimentos.",
      },
      {
        exigencia:
          "Alimento não pode ficar junto de produto químico, saneante ou carga de risco.",
        comoAtendemos:
          "Área exclusiva, fisicamente separada de qualquer carga química.",
      },
      {
        exigencia:
          "O local precisa de controle de pragas e rotina de limpeza.",
        comoAtendemos:
          "Controle integrado de pragas e cronograma de limpeza da área.",
      },
      {
        exigencia:
          "Produto deve ficar sobre palete, afastado do piso e das paredes.",
        comoAtendemos:
          "Armazenagem paletizada, com afastamento das paredes e corredores livres.",
      },
      {
        exigencia: "Validade curta exige giro correto do estoque.",
        comoAtendemos:
          "Saída pela regra FEFO: o lote que vence primeiro sai primeiro.",
      },
      {
        exigencia:
          "Lote precisa ser rastreável para um eventual recolhimento.",
        comoAtendemos:
          "O WMS registra lote, validade e posição de cada volume.",
      },
    ],
    passos: [
      {
        titulo: "Cadastro dos produtos",
        texto:
          "Recebemos a relação de produtos com validade, empilhamento máximo e condições de armazenagem.",
      },
      {
        titulo: "Recebimento",
        texto:
          "Conferência de nota, lote, validade e embalagem. Caixa úmida, amassada ou com sinal de praga não entra.",
      },
      {
        titulo: "Armazenagem em área exclusiva",
        texto:
          "Posição na área de alimentos, longe de qualquer carga química, registrada no WMS.",
      },
      {
        titulo: "Separação por pedido",
        texto:
          "Separação seguindo FEFO, com conferência de lote e quantidade.",
      },
      {
        titulo: "Entrega pela frota RC",
        texto:
          "A carga segue na frota do grupo até distribuidores, redes e clientes.",
      },
    ],
    condicoes: [
      {
        titulo: "Área exclusiva",
        texto:
          "Separada fisicamente de químicos, saneantes e cargas de risco.",
      },
      {
        titulo: "Limpeza e controle de pragas",
        texto:
          "Rotina de limpeza e controle integrado de pragas na área de alimentos.",
      },
      {
        titulo: "Carga seca protegida",
        texto:
          "Área coberta, longe de umidade e sol direto.",
      },
      {
        titulo: "Controle de acesso",
        texto:
          "Entrada registrada por área e monitoramento 24h.",
      },
    ],
    servicos: [
      "Armazenagem paletizada",
      "Separação por pedido",
      "Separação fracionada por caixa",
      "Controle de validade por lote",
      "Inventário periódico",
      "Entrega com a frota RC",
    ],
    grupo: {
      titulo: "Guardar e entregar com um contrato só",
      texto:
        "Alimento tem validade e muitos destinos. Com armazenagem e transporte no mesmo grupo, a RC separa os pedidos e entrega com a frota própria, com o mesmo registro de lote do galpão até o cliente.",
    },
    faq: [
      {
        q: "Que tipos de alimento vocês armazenam?",
        a: "Carga seca: mercearia, bebidas sem refrigeração, ingredientes industriais e embalagens para alimentos. Produtos refrigerados e congelados não fazem parte da operação.",
      },
      {
        q: "O alimento fica perto de produto químico?",
        a: "Não. A área de alimentos é exclusiva e fisicamente separada de químicos, saneantes e qualquer carga de risco.",
      },
      {
        q: "Existe controle de pragas?",
        a: "Sim. A área tem controle integrado de pragas e rotina de limpeza.",
      },
      {
        q: "Como é o controle de validade?",
        a: "O WMS registra lote e validade de cada volume, e a saída segue a regra FEFO.",
      },
      {
        q: "Vocês separam pedidos por caixa?",
        a: "Sim. A separação pode ser por palete ou fracionada por caixa, conforme o pedido.",
      },
      {
        q: "Vocês entregam em supermercados e centros de distribuição?",
        a: "Sim. A frota da RC Transportes leva do galpão até supermercado, atacado ou centro de distribuição, na data combinada com cada cliente. Se preferir usar outra transportadora, também atendemos.",
      },
    ],
    guia: {
      titulo: "Como armazenar alimentos corretamente em estoque",
      intro:
        "Alimento mal armazenado vira perda por vencimento, praga ou contaminação. Estes cuidados valem para qualquer estoque de carga seca.",
      blocos: [
        {
          titulo: "Mantenha longe de químicos",
          texto:
            "Alimento não divide espaço com saneante, produto químico ou carga de risco. A separação deve ser física, não só uma faixa no chão.",
        },
        {
          titulo: "Use palete e afaste das paredes",
          texto:
            "Produto direto no piso absorve umidade e dificulta a limpeza. Palete e afastamento das paredes facilitam a inspeção e o controle de pragas.",
        },
        {
          titulo: "Limpeza e controle de pragas",
          texto:
            "Rotina de limpeza e controle integrado de pragas são exigência sanitária e evitam perda de lotes inteiros.",
        },
        {
          titulo: "Giro pela regra FEFO",
          texto:
            "O lote que vence primeiro deve sair primeiro. Controle em sistema evita produto vencido esquecido no fundo do estoque.",
        },
        {
          titulo: "Cuidado com umidade e calor",
          texto:
            "Farinha, açúcar e grãos absorvem umidade e atraem pragas. Área coberta, seca e sem sol direto preserva a qualidade.",
        },
        {
          titulo: "Quando vale terceirizar",
          texto:
            "Estoque de alimento exige licença, limpeza, controle de pragas e giro correto. Um armazém preparado assume essa rotina e entrega conforme a demanda.",
        },
      ],
    },
  },
};

export function getSegmentDetail(id: SegmentId): SegmentDetail | undefined {
  return SEGMENT_DETAILS[id];
}
