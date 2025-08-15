import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2ca62f]/5 via-transparent to-[#2ca62f]/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes{' '}
            <span className="text-[#2ca62f]">dizem</span>
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 15.000 imobiliárias confiam no ImobiBrasil para crescer seus negócios
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-[#2ca62f] mb-6 opacity-80" />
                
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success metrics */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-16 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Resultados que falam por si</h3>
            <p className="text-gray-300 text-lg">Números reais de clientes que transformaram seus negócios</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-[#2ca62f] mb-2 group-hover:scale-110 transition-transform duration-300">
                15.000+
              </div>
              <div className="text-gray-300">Imobiliárias Ativas</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-[#2ca62f] mb-2 group-hover:scale-110 transition-transform duration-300">
                2M+
              </div>
              <div className="text-gray-300">Imóveis Cadastrados</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-[#2ca62f] mb-2 group-hover:scale-110 transition-transform duration-300">
                40%
              </div>
              <div className="text-gray-300">Aumento nas Vendas</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-[#2ca62f] mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Empresas que confiam no ImobiBrasil:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">JHR Imóveis</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Ski Imóveis</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Residenza</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Nogare Imóveis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;