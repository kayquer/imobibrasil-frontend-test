import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding-lg bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Imobiliárias que Confiam no ImobiBrasil
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Histórias reais de sucesso de corretores e imobiliárias em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="product-card card-hover-lift">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote size={24} className="text-accent-primary mb-4" />
              
              <p className="text-text-body mb-6 italic">
                "{testimonial.testimonial}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-wash rounded-full flex items-center justify-center">
                  <span className="text-accent-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-muted text-xs mb-1">
                    {testimonial.location}
                  </p>
                  <a 
                    href={`https://${testimonial.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary text-xs hover:text-accent-strong transition-colors flex items-center gap-1"
                  >
                    {testimonial.website}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-accent-wash rounded-2xl p-8 text-center">
          <h3 className="heading-3 mb-4">
            Aprovado por mais de 15.000 imobiliárias
          </h3>
          <p className="body-medium text-text-secondary mb-6">
            O ImobiBrasil foi eleito o melhor sistema de gestão pelo <strong>Conecta Imobi</strong>
          </p>
          
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary">4.9/5</div>
              <div className="text-sm text-text-muted">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary">98%</div>
              <div className="text-sm text-text-muted">Recomendação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary">15k+</div>
              <div className="text-sm text-text-muted">Clientes ativos</div>
            </div>
          </div>

          <button className="btn-primary btn-hover-scale">
            Ver Mais Depoimentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;