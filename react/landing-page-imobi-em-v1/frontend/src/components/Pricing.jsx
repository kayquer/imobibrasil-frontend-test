import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Building, Rocket, MessageCircle } from 'lucide-react';
import { realPlans } from '../data/mock';

const planIcons = {
  "Simples": Zap,
  "Essencial": Star,
  "Impulso": Crown,
  "Expansão": Rocket
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const getDiscountedPrice = (price) => {
    const discount = isAnnual ? 0.1 : 0; // 10% annual discount
    return (parseFloat(price) * (1 - discount)).toFixed(2);
  };

  return (
    <section id="pricing" className="section-padding-lg bg-bg-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Planos ImobiBrasil a partir de R$ 54,99/mês
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto mb-8">
            Sem taxas de inscrição, sem tempo mínimo de permanência e sem multa por cancelamento.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-border-light">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-accent-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                isAnnual
                  ? 'bg-accent-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                -10%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {realPlans.map((plan) => {
            const IconComponent = planIcons[plan.name];
            const price = getDiscountedPrice(plan.price);
            const originalPrice = plan.price;
            
            return (
              <div 
                key={plan.id} 
                className={`bg-white rounded-2xl p-6 card-hover-lift relative ${
                  plan.popular ? 'border-2 border-accent-primary' : 'border border-border-light'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-4">
                  <IconComponent size={24} className="text-accent-primary" />
                  <div>
                    <h3 className="heading-3 text-lg">{plan.name}</h3>
                    <p className="text-xs text-text-muted">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-text-primary">
                      R$ {price}
                    </span>
                    <span className="text-text-secondary text-sm">/mês</span>
                  </div>
                  {isAnnual && originalPrice !== price && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-text-muted line-through">
                        R$ {originalPrice}
                      </span>
                      <span className="highlight-badge text-xs">
                        Economize 10%
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.slice(0, 8).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={16} className="text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-body text-xs leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 8 && (
                    <li className="text-xs text-text-muted italic">
                      +{plan.features.length - 8} funcionalidades adicionais
                    </li>
                  )}
                </ul>

                <button className="btn-primary w-full btn-hover-scale mb-3">
                  Teste 7 Dias Grátis
                </button>
                
                <p className="text-center text-xs text-text-muted">
                  Sem cartão • Cancele quando quiser
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="font-semibold text-text-primary mb-4">
              Todos os planos sempre incluem
            </h4>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Building size={20} className="text-accent-primary" />
                <span className="text-sm">CRM Negócios Completo</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-accent-primary" />
                <span className="text-sm">WhatsApp Lead Integrado</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-accent-primary" />
                <span className="text-sm">43 Modelos Profissionais</span>
              </div>
            </div>
            
            <div className="border-t border-border-light pt-4">
              <h5 className="font-medium text-text-primary mb-2">
                Custos adicionais (opcionais)
              </h5>
              <div className="text-sm text-text-secondary">
                <span>Domínio .br: R$ 40,00/ano</span> • 
                <span className="ml-2">Certificado SSL: Grátis a partir do plano Essencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;