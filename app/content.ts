import { PHONE_TEXT, brands, cityList } from "./data";

type Block = { p: string } | { ul: readonly string[] };
export type Section = { h2: string; blocks: readonly Block[] };
export type Faq = readonly (readonly [string, string])[];

export type PageData = {
  slug: string;
  kind: "service" | "city";
  /** Nome curto usado em links e no breadcrumb. */
  short: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: readonly Section[];
  faq: Faq;
  serviceType: string;
  area: string;
};

const brandText = `${brands.slice(0, -1).join(", ")} e ${brands[brands.length - 1]}`;
const WARRANTY = "1 ano de garantia em peças e equipamentos novos e 90 dias em peças e equipamentos usados.";
const H24 = `Sim. A Htronic atende 24 horas em Curitiba e região. Chame pelo WhatsApp ou ligue para ${PHONE_TEXT}.`;
const BRANDS_A = `Atendemos todas as marcas e modelos, entre elas ${brandText}.`;

export const services: readonly PageData[] = [
  {
    slug: "manutencao-de-portao-eletronico-curitiba",
    kind: "service",
    short: "Manutenção e conserto",
    title: "Manutenção de Portão Eletrônico em Curitiba | Htronic",
    description:
      "Manutenção e conserto de portão eletrônico em Curitiba e região, 24 horas. Residencial, comercial e condomínios, todas as marcas. Garantia de até 1 ano.",
    eyebrow: "Manutenção e conserto",
    h1: "Manutenção e conserto de portão eletrônico em Curitiba",
    lead: "Portão parou, faz barulho ou não responde ao controle? A Htronic faz manutenção e conserto de portões eletrônicos residenciais, comerciais e de condomínio em Curitiba e região, 24 horas, de todas as marcas e modelos.",
    serviceType: "Manutenção e conserto de portão eletrônico",
    area: "Curitiba",
    sections: [
      {
        h2: "Quando chamar para o conserto",
        blocks: [
          { p: "Estes são os sinais mais comuns de que o portão precisa de atenção:" },
          {
            ul: [
              "O portão não abre ou não fecha",
              "O portão para no meio do percurso",
              "O motor faz barulho ou zumbe sem mover o portão",
              "O controle remoto não aciona ou perdeu alcance",
              "O movimento está lento, com trancos ou travamentos",
            ],
          },
          {
            p: "Nem sempre o defeito está no motor. Muitas vezes é o controle, a placa, um sensor ou o desgaste de roldanas e trilhos. Por isso o primeiro passo é o diagnóstico.",
          },
        ],
      },
      {
        h2: "Manutenção preventiva: evite que o portão pare",
        blocks: [
          {
            p: "Um portão eletrônico trabalha todos os dias, e em condomínios e comércios pode abrir e fechar dezenas de vezes. Sem revisão, o desgaste das peças móveis e a poeira acumulada acabam virando defeito justamente quando você precisa sair ou chegar.",
          },
          { p: "Uma revisão preventiva costuma incluir:" },
          {
            ul: [
              "Limpeza e lubrificação das partes móveis",
              "Verificação de roldanas, trilhos, dobradiças e cremalheira",
              "Regulagem de fim de curso",
              "Teste dos sensores e dispositivos de segurança",
              "Conferência de fiação, placa e controles",
            ],
          },
        ],
      },
      {
        h2: "Todos os tipos de portão e de motor",
        blocks: [
          {
            p: `Atendemos portões residenciais, comerciais e de condomínio, com motores das marcas ${brands.join(", ")} e outras.`,
          },
        ],
      },
    ],
    faq: [
      ["Preciso trocar o motor se o portão parou?", "Nem sempre. O defeito pode estar no controle, na placa, em um sensor ou em peças mecânicas. O diagnóstico mostra se o conserto resolve ou se a troca compensa."],
      ["Com que frequência fazer a manutenção preventiva?", "Depende do uso. Em condomínios e comércios, com muitas aberturas por dia, a revisão deve ser mais frequente do que em uma residência. A equipe da Htronic orienta o intervalo adequado para o seu caso."],
      ["A Htronic atende 24 horas para conserto?", H24],
      ["O serviço tem garantia?", WARRANTY],
    ],
  },
  {
    slug: "instalacao-de-motor-de-portao-eletronico-curitiba",
    kind: "service",
    short: "Instalação de motores",
    title: "Instalação de Motor para Portão em Curitiba | Htronic",
    description:
      "Instalação e troca de motor para portão eletrônico em Curitiba e região. Todas as marcas e modelos. Garantia de 1 ano em equipamentos novos.",
    eyebrow: "Instalação de motores",
    h1: "Instalação de motor para portão eletrônico em Curitiba",
    lead: "Instalação e substituição de motores para portões residenciais, comerciais e condomínios em Curitiba e região, de todas as marcas e modelos e com garantia de 1 ano em peças e equipamentos novos.",
    serviceType: "Instalação de motor para portão eletrônico",
    area: "Curitiba",
    sections: [
      {
        h2: "Como escolher o motor certo",
        blocks: [
          {
            p: "O motor ideal depende do tipo de portão, do peso e do tamanho da folha e da frequência de uso. Um portão residencial usado poucas vezes por dia exige menos do motor do que o de um condomínio ou de uma empresa.",
          },
          { p: "Os pontos que definem a escolha:" },
          {
            ul: [
              "Tipo de portão: deslizante, basculante ou pivotante",
              "Peso e dimensões do portão",
              "Frequência de uso ao longo do dia",
              "Estado da estrutura, dos trilhos e das roldanas",
              "Ponto de energia e local de fixação do motor",
            ],
          },
        ],
      },
      {
        h2: "Portão novo ou antigo",
        blocks: [
          {
            p: "É possível automatizar portões novos e antigos. Em portões antigos, a estrutura precisa estar em boas condições para o motor trabalhar sem esforço excessivo, e peças desgastadas, como roldanas e trilhos, podem precisar de ajuste ou troca junto com a instalação.",
          },
        ],
      },
      {
        h2: "Troca de motor",
        blocks: [
          {
            p: "Também fazemos a substituição de motores queimados ou ultrapassados, de qualquer marca. Se o conserto não compensar, a troca devolve o funcionamento ao portão com a garantia de equipamento novo.",
          },
        ],
      },
    ],
    faq: [
      ["Qualquer portão pode receber um motor?", "Em geral, portões deslizantes, basculantes e pivotantes podem ser automatizados, desde que a estrutura esteja em condições. A avaliação indica o que é necessário em cada caso."],
      ["De quais marcas são os motores?", BRANDS_A],
      ["Qual é a garantia?", WARRANTY],
      ["Vocês instalam em condomínios e empresas?", "Sim. Atendemos residências, comércios e condomínios em Curitiba e região."],
    ],
  },
  {
    slug: "conserto-de-placa-de-portao-eletronico-curitiba",
    kind: "service",
    short: "Placas e centrais",
    title: "Conserto de Placa de Portão Eletrônico em Curitiba | Htronic",
    description:
      "Conserto e troca de placa e central de portão eletrônico em Curitiba e região, 24 horas. Todas as marcas e modelos. Garantia de até 1 ano.",
    eyebrow: "Placas e centrais",
    h1: "Conserto de placa e central de portão eletrônico em Curitiba",
    lead: "A placa, ou central, é o cérebro do portão: recebe o comando do controle e aciona o motor. Quando ela falha, o portão para de responder. A Htronic faz o diagnóstico, o conserto e a substituição de placas e centrais de todas as marcas e modelos.",
    serviceType: "Conserto de placa e central de portão eletrônico",
    area: "Curitiba",
    sections: [
      {
        h2: "Sinais de defeito na placa",
        blocks: [
          {
            ul: [
              "O portão não responde ao controle nem à botoeira",
              "O motor não liga mesmo com energia no local",
              "O portão abre ou fecha de forma irregular, fora do comando",
              "As luzes ou indicadores da placa estão apagados ou piscando de forma anormal",
              "Há cheiro de queimado ou componentes escurecidos",
            ],
          },
        ],
      },
      {
        h2: "Causas mais comuns",
        blocks: [
          {
            p: "Descargas elétricas em dias de tempestade, oscilações na rede, umidade e acúmulo de poeira estão entre as causas mais frequentes de falha em placas eletrônicas.",
          },
        ],
      },
      {
        h2: "Conserto ou troca?",
        blocks: [
          {
            p: "Dependendo do defeito e do modelo, a placa pode ser consertada ou precisa ser substituída. O diagnóstico mostra qual caminho é mais vantajoso, e a substituição por peça nova tem 1 ano de garantia.",
          },
        ],
      },
    ],
    faq: [
      ["Placa queimada tem conserto?", "Depende do defeito e do modelo. Em alguns casos o conserto resolve; em outros, a substituição é o melhor caminho. O diagnóstico indica qual."],
      ["Como saber se o problema é a placa e não o controle?", "Se mais de um controle, e também a botoeira, deixam de acionar o portão, a causa costuma estar no receptor ou na placa. Se só um controle falha, o problema costuma ser o próprio controle ou a bateria. O diagnóstico confirma."],
      ["Vocês atendem placas de quais marcas?", BRANDS_A],
      ["A Htronic atende 24 horas?", H24],
    ],
  },
  {
    slug: "controle-remoto-e-sensores-para-portao-curitiba",
    kind: "service",
    short: "Controles e acessórios",
    title: "Controle Remoto e Sensores para Portão em Curitiba | Htronic",
    description:
      "Controles remotos, sensores, receptores e acessórios para portão eletrônico em Curitiba e região. Todas as marcas e modelos. Atendimento 24 horas.",
    eyebrow: "Controles e acessórios",
    h1: "Controle remoto e sensores para portão eletrônico em Curitiba",
    lead: "Controle que não aciona, alcance curto ou sensor de segurança com defeito? A Htronic cuida de controles, sensores, receptores e acessórios para portões eletrônicos de todas as marcas e modelos em Curitiba e região.",
    serviceType: "Controles, sensores e receptores para portão eletrônico",
    area: "Curitiba",
    sections: [
      {
        h2: "O que atendemos",
        blocks: [
          {
            ul: [
              "Controles remotos para portões eletrônicos",
              "Sensores de segurança",
              "Receptores",
              "Acessórios diversos para portões eletrônicos",
            ],
          },
        ],
      },
      {
        h2: "O controle não funciona: o que verificar",
        blocks: [
          {
            ul: [
              "Bateria fraca: é a causa mais comum de alcance curto ou de controle que não aciona",
              "Se mais de um controle falha, o problema costuma estar no receptor ou na placa",
              "Se o portão responde à botoeira mas não ao controle, o receptor é o principal suspeito",
            ],
          },
          { p: "Se a verificação não resolver, chame a Htronic para o diagnóstico." },
        ],
      },
      {
        h2: "Sensores e segurança",
        blocks: [
          {
            p: "Os sensores de segurança ajudam o portão a reconhecer obstáculos e a evitar acidentes com pessoas, animais e veículos. Um sensor desalinhado, sujo ou com defeito pode impedir o fechamento do portão ou deixá-lo sem a proteção adequada.",
          },
        ],
      },
    ],
    faq: [
      ["Meu controle perdeu alcance. O que pode ser?", "A bateria fraca é a causa mais comum. Se a troca não resolver, o receptor ou a antena podem estar com problema."],
      ["O portão não fecha. Pode ser o sensor?", "Sim. Sensor desalinhado, sujo ou com defeito costuma impedir o fechamento por segurança."],
      ["Vocês atendem todas as marcas?", BRANDS_A],
      ["Qual é a garantia?", WARRANTY],
    ],
  },
  {
    slug: "automacao-de-portao-curitiba",
    kind: "service",
    short: "Automação completa",
    title: "Automação de Portão em Curitiba | Htronic",
    description:
      "Automação de portões novos ou antigos em Curitiba e região: residências, comércios e condomínios. Todas as marcas e modelos. Garantia de até 1 ano.",
    eyebrow: "Automação completa",
    h1: "Automação de portão em Curitiba",
    lead: "Automatize o portão da sua casa, comércio ou condomínio. A Htronic faz a automação de portões novos ou antigos, de todas as marcas e modelos, em Curitiba e região.",
    serviceType: "Automação de portão",
    area: "Curitiba",
    sections: [
      {
        h2: "O que a automação reúne",
        blocks: [
          {
            p: "O motor é a peça que movimenta o portão. A automação completa reúne motor, placa (central), controles e sensores de segurança trabalhando juntos, para o portão abrir e fechar de forma prática e segura.",
          },
        ],
      },
      {
        h2: "Vantagens",
        blocks: [
          {
            ul: [
              "Praticidade: abrir e fechar o portão sem descer do veículo",
              "Mais segurança no dia a dia",
              "Controle de acesso em condomínios e empresas",
            ],
          },
        ],
      },
      {
        h2: "Para cada tipo de imóvel",
        blocks: [
          {
            ul: [
              "Residencial: mais comodidade para o seu dia a dia",
              "Comercial: soluções para empresas e estabelecimentos",
              "Condomínios: segurança e controle de acesso",
            ],
          },
        ],
      },
      {
        h2: "Portão antigo também pode ser automatizado",
        blocks: [
          {
            p: "Não é preciso trocar o portão para automatizá-lo. Em geral, portões antigos podem receber a automação desde que a estrutura esteja em boas condições, e a avaliação indica o que precisa ser ajustado.",
          },
        ],
      },
    ],
    faq: [
      ["Dá para automatizar um portão antigo?", "Em geral sim, desde que a estrutura esteja em boas condições. A avaliação indica o que precisa ser ajustado."],
      ["Qual é a diferença entre motor e automação?", "O motor movimenta o portão. A automação completa reúne motor, placa, controles e sensores de segurança."],
      ["De quais marcas?", BRANDS_A],
      ["A Htronic atende 24 horas?", H24],
    ],
  },
];

const cityContext: Record<string, string> = {
  "São José dos Pinhais":
    "São José dos Pinhais é vizinha de Curitiba e um dos maiores municípios da região metropolitana, com muitas residências, condomínios e comércios que dependem de portões funcionando todos os dias.",
  Pinhais:
    "Pinhais é vizinha de Curitiba, na região metropolitana, e reúne residências, comércios e condomínios que precisam de portões eletrônicos funcionando com segurança.",
  Colombo:
    "Colombo fica ao norte de Curitiba, na região metropolitana, e tem residências, comércios e condomínios com portões eletrônicos de todos os tipos.",
  Araucária:
    "Araucária faz parte da região metropolitana de Curitiba e tem residências, comércios e condomínios com portões eletrônicos que precisam de manutenção e instalação.",
};

export const cities: readonly PageData[] = cityList
  .filter((c) => c.slug)
  .map((c): PageData => ({
    slug: c.slug,
    kind: "city",
    short: c.name,
    title: `Portão Eletrônico em ${c.name} | Htronic`,
    description: `Conserto, manutenção e instalação de portão eletrônico em ${c.name}, 24 horas. Todas as marcas e modelos. Garantia de até 1 ano.`,
    eyebrow: `Atendimento em ${c.name}`,
    h1: `Conserto e instalação de portão eletrônico em ${c.name}`,
    lead: `A Htronic atende ${c.name} com manutenção, conserto, instalação de motores e automação de portões eletrônicos, 24 horas, para residências, comércios e condomínios.`,
    serviceType: "Conserto, manutenção e instalação de portão eletrônico",
    area: c.name,
    sections: [
      {
        h2: `Portão eletrônico em ${c.name}`,
        blocks: [
          { p: cityContext[c.name] },
          { p: `A Htronic, de Curitiba, atende ${c.name} e região com todas as marcas e modelos, entre elas ${brandText}.` },
        ],
      },
      {
        h2: `O que fazemos em ${c.name}`,
        blocks: [
          {
            ul: [
              "Manutenção e conserto de portões eletrônicos",
              "Instalação e troca de motores",
              "Conserto e substituição de placas e centrais",
              "Controles, sensores e receptores",
              "Automação de portões novos ou antigos",
            ],
          },
        ],
      },
    ],
    faq: [
      [`Vocês atendem em ${c.name}?`, `Sim. A Htronic atende ${c.name} e região, 24 horas. Chame pelo WhatsApp informando o bairro para combinar o atendimento.`],
      ["Quais marcas de portão eletrônico vocês atendem?", BRANDS_A],
      ["Qual é a garantia do serviço?", WARRANTY],
      ["O portão não abre ou não fecha. O que pode ser?", "As causas mais comuns são problema no controle, na placa eletrônica, no motor ou nos sensores. Descreva o problema pelo WhatsApp para a equipe da Htronic fazer o diagnóstico e combinar o atendimento."],
    ],
  }));

export const allPages: readonly PageData[] = [...services, ...cities];
export const getPage = (slug: string) => allPages.find((p) => p.slug === slug);
