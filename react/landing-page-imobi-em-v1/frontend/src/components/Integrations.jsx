import React from 'react';
import { CheckCircle, Zap, Clock, Globe } from 'lucide-react';
import { integrations } from '../data/mock';

const Integrations = () => {
  return (
    <section id="integrations" className="section-padding-lg bg-bg-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Integração com os Principais Portais
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Publique seus imóveis em todos os portais simultaneamente. 
            Um clique, alcance máximo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center card-hover-lift border border-border-light"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">{integration.name}</span>
              </div>
              <h4 className="font-semibold text-sm text-text-primary mb-1">
                {integration.name}
              </h4>
              <p className="text-xs text-text-muted">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent-wash rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-accent-primary" />
              </div>
              <h3 className="product-card-title mb-2">Publicação Instantânea</h3>
              <p className="product-card-description">
                Cadastre uma vez, publique em todos os portais automaticamente
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-wash rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-accent-primary" />
              </div>
              <h3 className="product-card-title mb-2">Economia de Tempo</h3>
              <p className="product-card-description">
                Economize até 10 horas por semana na gestão de anúncios
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-wash rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-accent-primary" />
              </div>
              <h3 className="product-card-title mb-2">Máximo Alcance</h3>
              <p className="product-card-description">
                Seus imóveis vistos por milhões de compradores potenciais
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent-wash rounded-xl">
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-accent-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Sincronização Automática
                </h4>
                <p className="text-text-secondary text-sm">
                  Qualquer alteração no imóvel é atualizada automaticamente em todos os portais. 
                  Preços, disponibilidade, fotos - tudo sincronizado em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;