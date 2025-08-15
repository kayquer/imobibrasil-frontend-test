import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Home, 
  FileText, 
  Edit, 
  Globe,
  BarChart,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { mainFeatures, newFeatures } from '../data/mock';

const iconMap = {
  TrendingUp,
  Users,
  Home,
  FileText,
  Edit,
  Globe,
  BarChart,
  Sparkles
};

const Features = () => {
  return (
    <section id="features" className="section-padding-lg bg-bg-section">
      <div className="container">
        {/* New Features Section */}
        <div className="text-center mb-16">
          <div className="highlight-badge mb-4 inline-block">Novidades 2025</div>
          <h2 className="heading-2 mb-6">
            Recursos Revolucionários com IA
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Tecnologias de última geração para transformar seu negócio imobiliário
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {newFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="product-card card-hover-lift text-center relative"
              >
                <div className="absolute top-4 right-4">
                  <span className={`highlight-badge ${feature.highlight === 'IA' ? 'bg-purple-500' : ''}`}>
                    {feature.highlight}
                  </span>
                </div>
                
                <div className="bg-accent-wash rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={32} className="text-accent-primary" />
                </div>
                
                <h3 className="product-card-title mb-3">{feature.title}</h3>
                <p className="product-card-description mb-4">{feature.description}</p>
                
                <button className="text-accent-primary font-medium flex items-center gap-1 mx-auto hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Main Features Section */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Sistema Completo para Imobiliárias
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Todas as ferramentas que você precisa para gerenciar seu negócio em uma única plataforma
          </p>
        </div>

        <div className="ai-grid">
          {mainFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.id} className="product-card card-hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-wash rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-accent-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="product-card-title mb-2">{feature.title}</h3>
                    <p className="product-card-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="heading-3 mb-4">
              Pronto para revolucionar sua imobiliária?
            </h3>
            <p className="body-medium text-text-secondary mb-6">
              Junte-se a mais de 15.000 imobiliárias que já transformaram seus resultados
            </p>
            <button className="btn-primary btn-hover-scale text-lg px-8 py-4">
              Começar Teste Grátis Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;