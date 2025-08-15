import React from 'react';
import { Card, CardContent } from './ui/card';
import { Building, Users, Search, FileText, Globe, MessageCircle, Zap, Shield, BarChart, Clock } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = {
  Building,
  Users, 
  Search,
  FileText,
  Globe,
  MessageCircle,
  Zap,
  Shield,
  BarChart,
  Clock
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos que fazem a{' '}
            <span className="text-[#2ca62f]">diferença</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ferramentas profissionais criadas especificamente para imobiliárias e corretores que querem vender mais
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card 
                key={feature.id} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#2ca62f]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2ca62f]/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-[#2ca62f]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2ca62f] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CRM Showcase */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                CRM que realmente funciona para imobiliárias
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                    <BarChart className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Funil de Vendas Personalizado</h4>
                    <p className="text-gray-600">Organize seus leads e acompanhe cada etapa da jornada de compra</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automação Inteligente</h4>
                    <p className="text-gray-600">Automatize follow-ups e nunca perca uma oportunidade de venda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Segurança Empresarial</h4>
                    <p className="text-gray-600">Seus dados protegidos com certificado SSL e backup automático</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1626178793926-22b28830aa30" 
                  alt="Profissional usando CRM ImobiBrasil"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4">
                <div className="text-lg font-bold text-[#2ca62f]">+87%</div>
                <div className="text-xs text-gray-600">Conversão</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;