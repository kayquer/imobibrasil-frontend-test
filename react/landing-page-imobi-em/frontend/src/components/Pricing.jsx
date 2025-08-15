import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { mockData } from './mock';

const Pricing = () => {
  const { pricing } = mockData;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#f7c200]/10 text-[#f7c200] border-[#f7c200]/30">
              Preço Imbatível
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Site para imobiliárias e
              <span className="text-[#109d59]"> Corretores de Imóveis</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              <strong className="text-[#109d59]">Faça um Teste Grátis</strong> e supere suas expectativas. 
              Sistema para imobiliárias, CRM Completo e integrado ao WhatsApp.
            </p>
          </div>

          {/* Main Pricing Card */}
          <Card className="bg-gradient-to-br from-[#109d59] to-[#0e8c4f] text-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              
              <div className="flex flex-col lg:flex-row">
                
                {/* Left side - Pricing */}
                <div className="lg:w-1/2 p-8 lg:p-12 relative">
                  
                  {/* Badge */}
                  <Badge className="absolute top-4 right-4 bg-[#f7c200] text-gray-900">
                    MAIS POPULAR
                  </Badge>

                  {/* Price display */}
                  <div className="text-center lg:text-left mb-8">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#f7c200]">{pricing.price}</div>
                        <div className="text-sm text-white/80">/{pricing.period}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">Sistema Completo</h3>
                    <p className="text-white/90">Tudo que você precisa para vender mais</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {pricing.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#f7c200] rounded-full flex items-center justify-center">
                          <Check size={12} className="text-gray-900" />
                        </div>
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="lg"
                    className="w-full bg-[#f7c200] hover:bg-[#e6b000] text-gray-900 font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Teste Grátis por 7 Dias
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>

                {/* Right side - Cost breakdown */}
                <div className="lg:w-1/2 bg-white text-gray-900 p-8 lg:p-12">
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Quais são os gastos para manter o site?
                  </h4>
                  
                  <div className="space-y-6">
                    
                    {/* ImobiBrasil cost */}
                    <div className="flex items-start space-x-4 p-4 bg-[#109d59]/5 rounded-lg border border-[#109d59]/10">
                      <div className="w-8 h-8 bg-[#109d59] rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Sistema ImobiBrasil</p>
                        <p className="text-[#109d59] font-bold text-lg">{pricing.costs.system}</p>
                      </div>
                    </div>

                    {/* Domain cost */}
                    <div className="flex items-start space-x-4 p-4 bg-[#f7c200]/5 rounded-lg border border-[#f7c200]/20">
                      <div className="w-8 h-8 bg-[#f7c200] rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Registro de Domínio</p>
                        <p className="text-[#f7c200] font-bold text-lg">{pricing.costs.domain}</p>
                        <p className="text-xs text-gray-500 mt-1">Para o órgão Registro.br (www.registro.br)</p>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="border-t pt-4 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-700">Total mensal:</span>
                        <span className="text-2xl font-bold text-[#109d59]">R$ 58,33</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        *Domínio cobrado anualmente
                      </p>
                    </div>

                  </div>

                  {/* Additional info */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      💡 <strong>Dica:</strong> Comece com o teste gratuito e veja os resultados antes de se comprometer!
                    </p>
                  </div>

                </div>

              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Pricing;