import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Zap, Globe, Link, ArrowRight } from 'lucide-react';
import { mockData } from './mock';

const Portals = () => {
  const { portals } = mockData;

  return (
    <section id="portals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#109d59]/10 text-[#109d59] border-[#109d59]/20">
            Integrações Poderosas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Integração com os principais
            <span className="text-[#109d59]"> portais de imóveis</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Ative a integração com os portais parceiros e gerencie facilmente a publicação dos seus imóveis e destaques. 
            <strong className="text-[#f7c200]">Publique uma vez, apareça em todos!</strong>
          </p>
          
          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#109d59]/10 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#109d59]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Publicação Automática</p>
                <p className="text-sm text-gray-600">Economia de tempo</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#f7c200]/10 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#f7c200]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Alcance Nacional</p>
                <p className="text-sm text-gray-600">Mais visibilidade</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#109d59]/10 rounded-full flex items-center justify-center">
                <Link className="w-5 h-5 text-[#109d59]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Gestão Centralizada</p>
                <p className="text-sm text-gray-600">Controle total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portals Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Portais Integrados
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {portals.map((portal) => (
              <Card 
                key={portal.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#109d59]/30"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-full h-12 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img 
                      src={portal.logo} 
                      alt={portal.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-[#109d59] transition-colors">
                    {portal.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-[#109d59] to-[#0e8c4f] rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              Como funciona a integração?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f7c200] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Cadastre seu imóvel</h4>
                <p className="text-white/90 text-sm">
                  Adicione seu imóvel no sistema ImobiBrasil com fotos, descrição e informações completas.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f7c200] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Escolha os portais</h4>
                <p className="text-white/90 text-sm">
                  Selecione em quais portais deseja publicar. Você pode escolher todos ou apenas alguns.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f7c200] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Publicação automática</h4>
                <p className="text-white/90 text-sm">
                  Seu imóvel é publicado automaticamente em todos os portais selecionados!
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <button className="bg-[#f7c200] hover:bg-[#e6b000] text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center">
                Testar Integração Grátis
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portals;