import React from 'react';
import { 
  Monitor, 
  BarChart3, 
  MessageCircle, 
  Headphones, 
  Layout, 
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { websiteFeatures } from '../data/mock';

const iconMap = {
  Monitor,
  BarChart3,
  MessageCircle,
  Headphones,
  Layout,
  Palette
};

const WebsiteFeatures = () => {
  return (
    <section className="website-features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Seu Site Profissional Completo
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Oferecemos uma excelente experiência em navegação, com a união de um CRM prático e eficaz! 
            Sites com design moderno e surpreendente: fácil de usar, sistema mais rápido e seguro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {websiteFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.id} className="feature-card-large card-hover-lift">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="feature-image"
                />
                <div className="feature-content">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-accent-wash rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-accent-primary" />
                    </div>
                    <h3 className="product-card-title text-base">{feature.title}</h3>
                  </div>
                  <p className="product-card-description text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Website Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="heading-3 mb-6">
                Organize de maneira efetiva suas negociações
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-body text-sm">
                    Defina e acompanhe toda a <strong>jornada de compra</strong> do seu cliente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-body text-sm">
                    Crie etapas em seu <strong>funil de vendas</strong> organizadas de acordo com seu método de trabalho
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-body text-sm">
                    Gere <strong>relatórios</strong> para apresentações em reuniões e trace metas para sua equipe
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-3 mb-6">
                Recursos Incluídos em Todos os Planos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Formulários personalizados",
                  "Área privada para clientes", 
                  "Gerador de contratos",
                  "Perfil de buscas",
                  "Gerenciador de documentos",
                  "Portais parceiros"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-primary flex-shrink-0" />
                    <span className="text-sm text-text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h4 className="font-semibold text-text-primary mb-3">
              Eleito o melhor sistema de gestão pelo Conecta Imobi
            </h4>
            <button className="btn-primary btn-hover-scale">
              Comece Seu Teste Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;