import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Play, ArrowRight } from 'lucide-react';
import { stats } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-green-50 text-[#2ca62f] px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Eleito melhor sistema pelo Conecta Imobi
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Sistema Completo para{' '}
              <span className="text-[#2ca62f] relative">
                Imobiliárias
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2ca62f]/20 rounded-full"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-2xl">
              CRM, Site, Funil de Vendas e Integração com Portais. 
              Tudo que você precisa para vender mais e crescer seu negócio imobiliário.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-[#2ca62f] mr-3 flex-shrink-0" />
                <span>Sem contrato de fidelidade</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-[#2ca62f] mr-3 flex-shrink-0" />
                <span>Integração com WhatsApp</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-[#2ca62f] mr-3 flex-shrink-0" />
                <span>IA para descrições</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-[#2ca62f] mr-3 flex-shrink-0" />
                <span>Suporte 24/7 humano</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#2ca62f] hover:bg-[#228a26] text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Teste Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Cliente 1" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Cliente 2" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Cliente 3" />
              </div>
              <span>Usado por mais de 15.000 imobiliárias no Brasil</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg" 
                alt="Dashboard ImobiBrasil"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -left-8 top-1/4 bg-white rounded-lg shadow-xl p-4 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#2ca62f]">{stats.activeAgencies}</div>
              <div className="text-sm text-gray-600">Imobiliárias Ativas</div>
            </div>

            <div className="absolute -right-8 top-1/2 bg-white rounded-lg shadow-xl p-4 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#2ca62f]">{stats.salesIncrease}</div>
              <div className="text-sm text-gray-600">Aumento nas Vendas</div>
            </div>

            <div className="absolute -bottom-4 left-1/4 bg-white rounded-lg shadow-xl p-4 z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#2ca62f]">{stats.registeredProperties}</div>
              <div className="text-sm text-gray-600">Imóveis Cadastrados</div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#2ca62f]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;