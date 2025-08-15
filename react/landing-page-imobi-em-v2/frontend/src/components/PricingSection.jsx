import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Star } from 'lucide-react';
import { plans } from '../data/mock';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // monthly, annual

  const getDiscountedPrice = (price, period) => {
    if (period === 'annual') {
      return (parseFloat(price) * 0.9).toFixed(2); // 10% discount for annual
    }
    return price;
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planos que cabem no seu{' '}
            <span className="text-[#2ca62f]">bolso</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sem taxas de inscrição, sem tempo mínimo de permanência e sem multa por cancelamento
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                billingPeriod === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-[#2ca62f] text-white text-xs px-2 py-1 rounded-full">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative group hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-[#2ca62f] shadow-xl shadow-[#2ca62f]/10 bg-gradient-to-br from-white to-green-50' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#2ca62f] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" fill="currentColor" />
                    Recomendado
                  </span>
                </div>
              )}

              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <span className="text-lg text-gray-600">R$</span>
                  <span className="text-4xl font-bold text-gray-900">
                    {getDiscountedPrice(plan.price, billingPeriod)}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                  
                  {billingPeriod === 'annual' && (
                    <div className="text-sm text-green-600 mt-1">
                      <span className="line-through text-gray-400">R$ {plan.price}</span>
                      {' '}Economize 10%
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#2ca62f] hover:bg-[#228a26] text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Teste 7 dias grátis
                </Button>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Imóveis</span>
                    <span className="font-semibold">{plan.properties}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Fotos por imóvel</span>
                    <span className="font-semibold">{plan.photos}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Usuários</span>
                    <span className="font-semibold">{plan.users}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">E-mails</span>
                    <span className="font-semibold">{plan.emails}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Descrições IA</span>
                    <span className="font-semibold">{plan.ai_descriptions}</span>
                  </div>

                  {/* Premium Features */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className={`h-4 w-4 mr-3 ${plan.ssl ? 'text-[#2ca62f]' : 'text-gray-300'}`} />
                      <span className={`text-sm ${plan.ssl ? 'text-gray-700' : 'text-gray-400'}`}>
                        Certificado SSL
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <CheckCircle className={`h-4 w-4 mr-3 ${plan.lead_funnel ? 'text-[#2ca62f]' : 'text-gray-300'}`} />
                      <span className={`text-sm ${plan.lead_funnel ? 'text-gray-700' : 'text-gray-400'}`}>
                        Esteira de Leads
                      </span>
                    </div>

                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-[#2ca62f]" />
                      <span className="text-sm text-gray-700">WhatsApp Lead</span>
                    </div>

                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-[#2ca62f]" />
                      <span className="text-sm text-gray-700">Suporte 24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Todos os planos incluem: CRM completo, Gerador de contratos, Integração com portais
          </p>
          <div className="inline-flex items-center bg-green-50 text-[#2ca62f] px-6 py-3 rounded-lg text-sm font-medium">
            <CheckCircle className="h-4 w-4 mr-2" />
            Garantia de 7 dias ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;