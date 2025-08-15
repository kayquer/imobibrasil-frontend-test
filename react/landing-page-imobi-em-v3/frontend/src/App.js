import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-imobile-green">
              ImobiBrasil
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-imobile-green transition-colors font-medium">Recursos</a>
            <a href="#integrations" className="text-gray-700 hover:text-imobile-green transition-colors font-medium">Integrações</a>
            <a href="#pricing" className="text-gray-700 hover:text-imobile-green transition-colors font-medium">Planos</a>
            <a href="#testimonials" className="text-gray-700 hover:text-imobile-green transition-colors font-medium">Clientes</a>
            <a href="#contact" className="text-gray-700 hover:text-imobile-green transition-colors font-medium">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Teste Grátis</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-imobile-green">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-imobile-green">Recursos</a>
              <a href="#integrations" className="block px-3 py-2 text-gray-700 hover:text-imobile-green">Integrações</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-imobile-green">Planos</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-imobile-green">Clientes</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-imobile-green">Contato</a>
              <div className="pt-2 space-y-2">
                <button className="btn-secondary w-full">Login</button>
                <button className="btn-primary w-full">Teste Grátis</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-green text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQwNjYyMTV8MA&ixlib=rb-4.1.0&q=85" 
          alt="Business Dashboard" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sistema para Imobiliária, <span className="text-yellow-300">CRM</span> e Funil de Vendas
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Sistema completo integrado ao WhatsApp com gestão de leads, 
              portais de imóveis e ferramentas de automação para multiplicar suas vendas.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className="bg-yellow-400 text-imobile-dark-green px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 shadow-lg">
                🚀 Teste Grátis por 7 Dias
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-imobile-green">
                Ver Demonstração
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">+10k</div>
                <div className="text-sm opacity-80">Imobiliárias</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">R$ 54,99</div>
                <div className="text-sm opacity-80">por mês</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">0</div>
                <div className="text-sm opacity-80">fidelidade</div>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center animate-fadeIn">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQwNjYyMTV8MA&ixlib=rb-4.1.0&q=85" 
                alt="Performance Dashboard" 
                className="rounded-2xl shadow-2xl max-w-lg"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-imobile-dark-green px-4 py-2 rounded-full font-bold animate-bounce-slow">
                ⚡ Teste Grátis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: "📊",
      title: "Funil de Vendas",
      description: "Defina e acompanhe toda jornada de compra do seu cliente com métricas de conversão em tempo real."
    },
    {
      icon: "👥",
      title: "Vida do Cliente",
      description: "Todas as informações de seus clientes em apenas um lugar com histórico completo de interações."
    },
    {
      icon: "🏠",
      title: "Imóveis Compatíveis",
      description: "A ferramenta ideal para encontrar o imóvel certo para seu cliente com busca inteligente."
    },
    {
      icon: "🤖",
      title: "Descrições via IA",
      description: "Gere descrições profissionais de imóveis automaticamente usando inteligência artificial."
    },
    {
      icon: "📱",
      title: "WhatsApp Lead",
      description: "Integração completa com WhatsApp para capturar e gerenciar leads automaticamente."
    },
    {
      icon: "🎯",
      title: "Distribuição de Leads",
      description: "Sistema automatizado para distribuir leads entre sua equipe de forma equilibrada."
    },
    {
      icon: "💼",
      title: "Gestão de Negócios",
      description: "Controle total sobre o pipeline de vendas, propostas e fechamento de negócios."
    },
    {
      icon: "📄",
      title: "Documentos",
      description: "Armazene de forma segura documentos de imóveis, clientes e corretores."
    }
  ];

  return (
    <section id="features" className="py-20 bg-imobile-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recursos que <span className="text-imobile-green">Multiplicam</span> Suas Vendas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas completas para automatizar processos, aumentar conversões e impulsionar o crescimento do seu negócio imobiliário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Ver Todos os Recursos</button>
        </div>
      </div>
    </section>
  );
};

// Website Features Section
const WebsiteFeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Site para <span className="text-imobile-green">Imobiliárias</span> e Corretores
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              O ImobiBrasil oferece o melhor Sistema de Gestão CRM para corretores de imóveis e imobiliárias, 
              com sites otimizados para o Google e ferramentas completas de captação de leads.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-imobile-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Divulgue seus imóveis e tenha total controle</h4>
                  <p className="text-gray-600">Base online para gerar leads e divulgar imóveis, sendo encontrado no Google.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-imobile-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Torne-se o principal corretor da sua região</h4>
                  <p className="text-gray-600">Quanto mais imóveis cadastrados com qualidade, melhor seu posicionamento.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-imobile-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Principal estratégia de marketing</h4>
                  <p className="text-gray-600">Gere leads de qualidade e aumente credibilidade no mercado.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-primary">Criar Meu Site Agora</button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVhbXxlbnwwfHx8fDE3NTQwNjYyNTJ8MA&ixlib=rb-4.1.0&q=85" 
              alt="Professional Real Estate Team" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-imobile-green">+250</div>
              <div className="text-sm text-gray-600">Sites Criados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Integrations Section
const IntegrationsSection = () => {
  const integrations = [
    { name: "ZapImóveis", logo: "🏠" },
    { name: "VivaReal", logo: "🏡" },
    { name: "OLX", logo: "📱" },
    { name: "ImóvelWeb", logo: "🌐" },
    { name: "Casa Mineira", logo: "🏘️" },
    { name: "Órulo", logo: "🏢" },
    { name: "Chaves na Mão", logo: "🔑" },
    { name: "WhatsApp", logo: "💬" }
  ];

  return (
    <section id="integrations" className="py-20 bg-imobile-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integração com os <span className="text-imobile-green">Principais Portais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ative a integração com os portais parceiros e gerencie facilmente a publicação dos seus imóveis e destaques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-card text-center">
              <div className="text-3xl mb-2">{integration.logo}</div>
              <div className="text-sm font-medium text-gray-700">{integration.name}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Publique em Todos os Portais com 1 Clique
              </h3>
              <p className="text-gray-600 mb-6">
                Otimize seu tempo cadastrando seus imóveis uma única vez e publique automaticamente 
                em todos os principais portais do Brasil. Foque no que importa: seus clientes!
              </p>
              <button className="btn-primary">Ativar Integrações</button>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/8292850/pexels-photo-8292850.jpeg" 
                alt="Team Integration" 
                className="rounded-xl shadow-lg max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Success Metrics Section
const SuccessMetricsSection = () => {
  const metrics = [
    { number: "300%", label: "Aumento em Leads", icon: "📈" },
    { number: "85%", label: "Taxa de Conversão", icon: "🎯" },
    { number: "50%", label: "Redução de Tempo", icon: "⏱️" },
    { number: "R$ 1.2M", label: "Vendas Mensais Médias", icon: "💰" }
  ];

  return (
    <section className="py-20 bg-gradient-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Resultados que <span className="text-yellow-300">Comprovam</span> o Sucesso
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Métricas reais de clientes ImobiBrasil que transformaram seus negócios com nossa plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-2">{metric.icon}</div>
              <div className="stats-number text-yellow-300">{metric.number}</div>
              <div className="text-sm opacity-80">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzU0MDY2MjU5fDA&ixlib=rb-4.1.0&q=85" 
            alt="Business Growth" 
            className="rounded-2xl shadow-2xl max-w-2xl mx-auto opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planos <span className="text-imobile-green">Transparentes</span> e Sem Pegadinhas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sem taxa de inscrição, sem tempo mínimo de permanência e sem multa por cancelamento.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-green text-white rounded-2xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-imobile-dark-green px-6 py-2 rounded-full text-sm font-bold">
                MAIS POPULAR
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Plano Completo</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold">R$ 54,99</span>
                <span className="text-lg opacity-80 ml-2">/mês</span>
              </div>
              <p className="opacity-90">Tudo que você precisa para crescer</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "CRM Completo e Integrado",
                "Site para Imobiliária",
                "Integração com Portais",
                "WhatsApp Automatizado",
                "Funil de Vendas Avançado",
                "Suporte Prioritário",
                "Relatórios e Analytics",
                "E-mail Personalizado"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-yellow-400 text-imobile-dark-green px-8 py-4 rounded-lg font-bold text-lg w-full transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
                🚀 Começar Teste Grátis
              </button>
              <p className="text-sm opacity-80 mt-4">
                7 dias grátis • Sem fidelidade • Cancele quando quiser
              </p>
            </div>
          </div>

          <div className="text-center mt-8 bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Pagamento Anual</h4>
            <p className="text-gray-600 mb-4">Economize 30% pagando anualmente</p>
            <div className="text-2xl font-bold text-imobile-green">
              R$ 461,90 <span className="text-sm text-gray-500 font-normal">/ano</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Equivale a R$ 38,49/mês</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor - Silva Imóveis",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzU0MDY2MjU5fDA&ixlib=rb-4.1.0&q=85",
      quote: "Com o ImobiBrasil, aumentamos nossas vendas em 300% no primeiro ano. A integração com os portais economiza horas de trabalho diário.",
      metrics: "+300% vendas"
    },
    {
      name: "Ana Costa",
      role: "Corretora Autônoma",
      image: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg",
      quote: "O CRM completo e a integração com WhatsApp transformaram minha forma de trabalhar. Hoje gerencio 3x mais clientes com qualidade.",
      metrics: "3x mais clientes"
    },
    {
      name: "Roberto Mendes",
      role: "Sócio - Mendes & Associados",
      image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzU0MDY2MjU5fDA&ixlib=rb-4.1.0&q=85",
      quote: "O ROI foi imediato. No primeiro mês já recuperamos o investimento e hoje nossa margem de lucro aumentou 150%.",
      metrics: "+150% lucro"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-imobile-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="text-imobile-green">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de crescimento e sucesso no mercado imobiliário.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-center">
                <div className="inline-block bg-imobile-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">Ver Mais Casos de Sucesso</button>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-green text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">
          Pronto para <span className="text-yellow-300">Multiplicar</span> Suas Vendas?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Junte-se a mais de 10.000 imobiliárias que já transformaram seus negócios com o ImobiBrasil.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <button className="bg-yellow-400 text-imobile-dark-green px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
            🚀 Começar Teste Grátis Agora
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-imobile-green">
            📞 Falar com Especialista
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center text-sm opacity-80">
          <div>✓ Sem fidelidade</div>
          <div>✓ Suporte especializado</div>
          <div>✓ Resultados garantidos</div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-imobile-dark-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-imobile-green mb-4">ImobiBrasil</div>
            <p className="text-gray-300 mb-4">
              O sistema mais completo para imobiliárias e corretores do Brasil.
            </p>
            <div className="text-sm text-gray-400">
              <p>Avenida Manoel Goulart, 505 - Sala 43</p>
              <p>Centro, Presidente Prudente / SP</p>
              <p>CNPJ: 13.326.364/0001-08</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-imobile-green transition-colors">CRM Completo</a></li>
              <li><a href="#" className="hover:text-imobile-green transition-colors">Funil de Vendas</a></li>
              <li><a href="#" className="hover:text-imobile-green transition-colors">WhatsApp Integration</a></li>
              <li><a href="#" className="hover:text-imobile-green transition-colors">Site para Imobiliária</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-imobile-green transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-imobile-green transition-colors">Clientes</a></li>
              <li><a href="#" className="hover:text-imobile-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-imobile-green transition-colors">Central de Ajuda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Segunda a Sexta: 08:00 às 18:00</p>
              <p>📞 (18) 3222-0557</p>
              <p>💬 WhatsApp: (18) 98822-7436</p>
              <p>📧 contato@imobibrasil.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 ImobiBrasil. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-imobile-green transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-imobile-green transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-imobile-green transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WebsiteFeaturesSection />
      <IntegrationsSection />
      <SuccessMetricsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;