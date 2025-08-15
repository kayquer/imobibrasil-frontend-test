import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { integrations } from '../data/mock';

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Integração Poderosa
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conectado aos principais{' '}
            <span className="text-[#2ca62f]">portais</span>
          </h2>
          <p className="text-xl text-gray-600">
            Publique seus imóveis em todos os grandes portais do Brasil com um único clique
          </p>
        </div>

        {/* Integration Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Economize 80% do seu tempo com automação completa
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Publicação Simultânea</h4>
                  <p className="text-gray-600">Publique em todos os portais ao mesmo tempo, sem precisar cadastrar manualmente</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sincronização em Tempo Real</h4>
                  <p className="text-gray-600">Alterações são atualizadas automaticamente em todos os portais conectados</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Controle de Destaque</h4>
                  <p className="text-gray-600">Gerencie destaques e promoções direto do seu painel de controle</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relatórios Unificados</h4>
                  <p className="text-gray-600">Veja performance de todos os portais em um só lugar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg" 
                alt="Interface de integração com portais"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">ZapImóveis</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Conectado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">VivaReal</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Conectado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">OLX</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Conectado</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="text-lg font-bold text-[#2ca62f]">23</div>
              <div className="text-xs text-gray-600">Portais</div>
            </div>
          </div>
        </div>

        {/* Portal Logos */}
        <div>
          <h4 className="text-center text-gray-600 mb-8 font-medium">
            Integre com os principais portais do mercado:
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {integrations.map((integration, index) => (
              <Card 
                key={index} 
                className="group hover:scale-110 transition-all duration-300 border-0 shadow-md hover:shadow-xl bg-white"
              >
                <CardContent className="p-4 flex items-center justify-center h-20">
                  <img 
                    src={integration.logo} 
                    alt={integration.name}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <span 
                    className="font-semibold text-gray-700 text-sm hidden"
                  >
                    {integration.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#2ca62f] to-[#228a26] rounded-3xl p-8 lg:p-16 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para multiplicar suas vendas?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Conecte-se aos maiores portais do Brasil e alcance milhões de compradores potenciais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-white text-[#2ca62f] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Integração Gratuita
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            
            <div className="text-center sm:text-left">
              <div className="text-sm opacity-80">✓ Setup em 5 minutos</div>
              <div className="text-sm opacity-80">✓ Suporte especializado incluído</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;