import React from 'react';
import { CheckCircle, Play } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="mb-6">
          <span className="highlight-badge">Teste Grátis por {heroData.trial}</span>
        </div>
        
        <h1 className="heading-1 mb-6">
          {heroData.title}
        </h1>
        
        <p className="body-large mb-8 text-text-secondary">
          {heroData.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="btn-primary btn-hover-scale text-lg px-8 py-4">
            Começar Teste Grátis
          </button>
          
          <button className="btn-secondary btn-hover-scale flex items-center gap-2">
            <Play size={20} />
            Ver Demonstração
          </button>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 mb-8 max-w-md mx-auto">
          <div className="text-center mb-4">
            <span className="text-2xl font-bold text-accent-primary">Por apenas</span>
            <div className="text-4xl font-bold text-text-primary">
              R$ {heroData.price}
              <span className="text-lg font-normal text-text-secondary">/mês</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {heroData.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-accent-primary flex-shrink-0" />
                <span className="text-text-body">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-center gap-8 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-accent-primary" />
            <span>Setup em 5 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-accent-primary" />
            <span>Suporte 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-accent-primary" />
            <span>Sem fidelidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;