import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import { mockData } from './mock';

const Clients = () => {
  const { clients } = mockData;

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#109d59]/10 text-[#109d59] border-[#109d59]/20">
            Clientes de Sucesso
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Inspire-se em imobiliárias que 
            <span className="text-[#109d59]"> utilizam nossos serviços</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            O <strong className="text-[#f7c200]">ImobiBrasil</strong> é APROVADO por imobiliárias e corretores em todo o Brasil, 
            com um sistema completo para o mercado imobiliário!
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <Card 
              key={client.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white"
            >
              <CardContent className="p-0">
                
                {/* Client Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center space-x-2">
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Visitar Site</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-[#109d59] font-medium text-sm mb-4">
                    {client.website}
                  </p>
                  
                  {/* Success indicators */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-[#109d59]/10 text-[#109d59] text-xs">
                      ✓ Site Otimizado
                    </Badge>
                    <Badge variant="secondary" className="bg-[#f7c200]/10 text-[#f7c200] text-xs">
                      ✓ CRM Integrado
                    </Badge>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg border-2 border-[#109d59]/10">
            <div className="text-left">
              <p className="text-gray-600 text-sm">Quer fazer parte desta lista?</p>
              <p className="text-[#109d59] font-semibold">Comece seu teste gratuito hoje</p>
            </div>
            <ExternalLink className="text-[#109d59]" size={20} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;