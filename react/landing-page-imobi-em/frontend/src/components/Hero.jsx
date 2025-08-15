import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, Check, Star, Users } from 'lucide-react';
import { mockData } from './mock';

const Hero = () => {
  const { hero } = mockData;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#109d59]/10 rounded-full mix-blend-multiply animate-blob"></div>
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#f7c200]/10 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#109d59]/10 rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          
          {/* Left Column - Text Content */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#109d59]/10 to-[#f7c200]/10 border border-[#109d59]/20 rounded-full backdrop-blur-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-[#f7c200] fill-current" />
                  <Star className="w-4 h-4 text-[#f7c200] fill-current" />
                  <Star className="w-4 h-4 text-[#f7c200] fill-current" />
                  <Star className="w-4 h-4 text-[#f7c200] fill-current" />
                  <Star className="w-4 h-4 text-[#f7c200] fill-current" />
                </div>
                <span className="text-[#109d59] font-semibold text-sm">
                  #1 Sistema para Imobiliárias
                </span>
                <Users className="w-4 h-4 text-[#109d59]" />
              </div>

              {/* Main Title */}
              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block animate-fade-in-up">{hero.title}</span>
                <span className="block text-[#f7c200] mt-2 animate-fade-in-up animation-delay-300">{hero.subtitle}</span>
                <span className="block text-[#109d59] mt-2 text-3xl lg:text-6xl animate-fade-in-up animation-delay-500">{hero.highlight}</span>
                <span className="block text-white mt-2 text-2xl lg:text-4xl animate-fade-in-up animation-delay-700">{hero.whatsappLead}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-1000">
                Faça um <strong className="text-[#f7c200]">Teste Grátis</strong> e supere suas expectativas. 
                Sistema completo integrado ao WhatsApp com gestão de leads inteligente.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up animation-delay-1200">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#109d59] to-[#0e8c4f] hover:from-[#0e8c4f] hover:to-[#109d59] text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
                >
                  <span>{hero.ctaText}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {hero.videoText}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 text-gray-400 animate-fade-in-up animation-delay-1400">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#109d59] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">Teste gratuito por 7 dias</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#109d59] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">Sem contrato de fidelidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#109d59] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div className="flex-1 mt-12 lg:mt-0 relative">
            <div className="relative max-w-lg mx-auto">
              
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-500 animate-fade-in-right">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#109d59] to-[#0e8c4f] rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">IB</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">ImobiBrasil</p>
                        <p className="text-xs text-gray-500">Dashboard</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Chart area */}
                  <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-end justify-center space-x-3 p-6">
                    <div className="w-10 bg-gradient-to-t from-[#109d59] to-[#109d59]/70 h-20 rounded-t-lg animate-grow-bar"></div>
                    <div className="w-10 bg-gradient-to-t from-[#f7c200] to-[#f7c200]/70 h-32 rounded-t-lg animate-grow-bar animation-delay-500"></div>
                    <div className="w-10 bg-gradient-to-t from-[#109d59] to-[#109d59]/70 h-16 rounded-t-lg animate-grow-bar animation-delay-1000"></div>
                    <div className="w-10 bg-gradient-to-t from-[#f7c200] to-[#f7c200]/70 h-28 rounded-t-lg animate-grow-bar animation-delay-1500"></div>
                  </div>
                  
                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center bg-[#109d59]/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#109d59] mb-1">150+</div>
                      <div className="text-xs text-gray-600">Leads Ativos</div>
                    </div>
                    <div className="text-center bg-[#f7c200]/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#f7c200] mb-1">89%</div>
                      <div className="text-xs text-gray-600">Taxa Conversão</div>
                    </div>
                    <div className="text-center bg-[#109d59]/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#109d59] mb-1">45</div>
                      <div className="text-xs text-gray-600">Vendas/Mês</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#109d59] to-[#0e8c4f] text-white px-4 py-3 rounded-xl shadow-lg animate-bounce-gentle">
                <div className="text-sm font-bold">+127 Leads</div>
                <div className="text-xs opacity-90">Hoje</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#f7c200] to-[#e6b000] text-gray-900 px-4 py-3 rounded-xl shadow-lg animate-bounce-gentle animation-delay-1000">
                <div className="text-sm font-bold">WhatsApp ✓</div>
                <div className="text-xs">Integrado</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white text-gray-900 px-3 py-2 rounded-lg shadow-lg animate-pulse">
                <div className="text-xs font-semibold text-[#109d59]">7 Portais</div>
                <div className="text-xs text-gray-600">Conectados</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;