import React from 'react';
import { Filter, User, Home, Download, FileText, Network, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from './mock';

const iconMap = {
  Filter,
  User,
  Home,
  Download,
  FileText,
  Network
};

const Features = () => {
  const { features } = mockData;

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#109d59]/10 text-[#109d59] border-[#109d59]/20">
            Funcionalidades Completas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tudo que sua imobiliária precisa em 
            <span className="text-[#109d59]"> um só lugar</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sistema completo com CRM, gestão de leads, integração com portais e muito mais. 
            Otimize seu tempo e <strong className="text-[#f7c200]">venda mais</strong>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card 
                key={feature.id} 
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden ${
                  feature.highlighted 
                    ? 'bg-gradient-to-br from-[#109d59] to-[#0e8c4f] text-white shadow-lg' 
                    : 'bg-white hover:border-[#109d59]/20'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                      feature.highlighted 
                        ? 'bg-white/20 text-white' 
                        : 'bg-[#109d59]/10 text-[#109d59] group-hover:bg-[#109d59] group-hover:text-white'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-xl font-bold ${
                          feature.highlighted ? 'text-white' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        
                        {feature.highlighted && (
                          <Badge className="bg-[#f7c200] text-gray-900 text-xs">
                            DESTAQUE
                          </Badge>
                        )}
                      </div>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${
                        feature.highlighted ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>

                      {/* Special highlight for integration feature */}
                      {feature.highlighted && (
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-white/80 mb-2">
                            <strong>Integração completa com:</strong>
                          </p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-white/20 px-2 py-1 rounded">ZapImóveis</span>
                            <span className="bg-white/20 px-2 py-1 rounded">VivaReal</span>
                            <span className="bg-white/20 px-2 py-1 rounded">OLX</span>
                            <span className="bg-white/20 px-2 py-1 rounded">+4 mais</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Learn more link */}
                      <div className={`flex items-center mt-4 text-sm font-medium transition-colors ${
                        feature.highlighted 
                          ? 'text-white hover:text-[#f7c200]' 
                          : 'text-[#109d59] hover:text-[#0e8c4f]'
                      }`}>
                        Saiba mais
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg border-2 border-[#109d59]/10">
            <div className="text-left">
              <p className="text-gray-600 text-sm">Pronto para testar todas as funcionalidades?</p>
              <p className="text-[#109d59] font-semibold">Comece seu teste gratuito agora</p>
            </div>
            <ArrowRight className="text-[#109d59]" size={20} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;