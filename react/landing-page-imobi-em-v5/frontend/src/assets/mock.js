export const metricsMock = {
  imobiliariasAtivas: 15000,
  imoveisGerenciados: 2000000,
  aumentoVendas: 40,
};

export const featuresMock = [
  {
    id: "ai-gestao",
    title: "Gestão Imobiliária com IA",
    description:
      "Distribuição automática de leads, matching inteligente de imóveis e analytics preditivo para prever conversões.",
    bullets: [
      "Descrição de imóveis gerada por IA",
      "Follow-ups automáticos por e-mail e WhatsApp",
      "Pontuação de leads com base em comportamento",
    ],
    icon: "Cpu",
  },
  {
    id: "workflow",
    title: "Otimização de Fluxos",
    description:
      "CRM, anúncios e tarefas em um único lugar. Automatize cada etapa do funil com gatilhos e regras.",
    bullets: [
      "Kanban de oportunidades",
      "Automações por evento (ex: novo lead)",
      "Templates de sequências omnichannel",
    ],
    icon: "Workflow",
  },
  {
    id: "integracoes",
    title: "Hub de Integrações",
    description:
      "Conecte portais líderes e sincronize inventário em tempo real para eliminar retrabalho.",
    bullets: [
      "OLX, ZAP, VivaReal",
      "WhatsApp Business API",
      "Integração com CRM e calendários",
    ],
    icon: "Plug",
  },
];

export const featureTabs = [
  {
    id: "crm",
    label: "CRM de Vendas",
    description: "Funil, distribuição de leads e painel de produtividade para sua equipe.",
    bullets: ["Distribuição por regras", "Kanban com SLA", "Relatórios de conversão"],
    kpis: { conversao: 18, tempo: 5, satisfacao: 92 },
  },
  {
    id: "automacao",
    label: "Automação Inteligente",
    description: "Sequências omnichannel com IA para follow-ups que realmente convertem.",
    bullets: ["Mensagens dinâmicas", "Gatilhos por evento", "Pontuação de leads"],
    kpis: { conversao: 22, tempo: 3, satisfacao: 95 },
  },
  {
    id: "integracoes",
    label: "Integrações em Tempo Real",
    description: "Publicação e sincronização automática com os principais portais e WhatsApp Business.",
    bullets: ["OLX, ZAP, VivaReal", "WhatsApp Business API", "Webhook + CRM"],
    kpis: { conversao: 16, tempo: 4, satisfacao: 90 },
  },
];

export const integrationsMock = [
  { name: "OLX" },
  { name: "ZAP" },
  { name: "VivaReal" },
  { name: "WhatsApp Business" },
  { name: "Meta Leads" },
];

export const testimonialsMock = [
  {
    name: "Ana Lima",
    role: "Diretora - Alfa Imóveis",
    quote:
      "+40% nas vendas em 3 meses. O funil com IA distribui leads certo para o corretor certo.",
  },
  {
    name: "João Pereira",
    role: "CEO - CasaFácil",
    quote:
      "Economizamos 20 horas/semana com automações. Integração com portais é instantânea.",
  },
];

export const pricingMock = {
  currency: "R$",
  monthly: [
    {
      id: "starter",
      name: "Starter",
      price: 54.99,
      bestFor: "Imobiliárias iniciantes",
      features: [
        "CRM de Leads",
        "Publicação em 3 portais",
        "Descrições com IA (limite mensal)",
        "WhatsApp integrado",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: 149.0,
      bestFor: "Equipes em crescimento",
      features: [
        "Tudo do Starter",
        "Automação de follow-ups",
        "Matching inteligente",
        "Relatórios preditivos",
      ],
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 349.0,
      bestFor: "Operações avançadas",
      features: [
        "Tudo do Pro",
        "Integrações personalizadas",
        "SLA 24/7",
        "Consultoria dedicada",
      ],
    },
  ],
  annuallyMultiplier: 10,
};