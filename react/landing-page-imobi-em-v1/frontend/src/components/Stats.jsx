import React from 'react';
import { Building, Home, Heart, TrendingUp } from 'lucide-react';
import { stats } from '../data/mock';

const iconMap = {
  Building,
  Home,
  Heart,
  TrendingUp
};

const Stats = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="body-large text-text-secondary">
            Números reais de quem confia no ImobiBrasil
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={index} className="text-center">
                <div className="bg-accent-wash rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={32} className="text-accent-primary" />
                </div>
                <div className="stats-number mb-2">{stat.number}</div>
                <div className="body-small text-text-secondary">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;