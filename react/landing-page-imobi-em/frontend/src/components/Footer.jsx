import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Award, MessageCircle } from 'lucide-react';
import { mockData } from './mock';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-[#109d59] to-[#0e8c4f] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Experimente o ImobiBrasil por 7 dias grátis
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de imobiliárias que já transformaram seus negócios com nossa plataforma
          </p>
          <button className="bg-white text-[#109d59] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Comece agora mesmo
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <img 
              src={mockData.logo} 
              alt="ImobiBrasil" 
              className="h-12 w-auto filter brightness-0 invert"
              onError={(e) => {
                e.target.src = "/api/placeholder/150/40";
              }}
            />
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Sistema completo para imobiliárias e corretores de imóveis. 
              CRM integrado, gestão de leads e integração com principais portais.
            </p>
            
            {/* Award Section */}
            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#f7c200]/10 to-transparent p-4 rounded-xl">
              <img 
                src={mockData.realImages?.trophy || "/api/placeholder/60/60"} 
                alt="Conecta Imobi" 
                className="w-12 h-12"
                onError={(e) => {
                  e.target.src = "/api/placeholder/60/60";
                }}
              />
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Award className="w-4 h-4 text-[#f7c200]" />
                  <span className="text-[#f7c200] font-semibold text-sm">PREMIADO</span>
                </div>
                <p className="text-sm text-gray-300">
                  Eleito o melhor sistema de gestão pelo <strong>Conecta Imobi</strong>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Acompanhe:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/imobibrasil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#109d59] rounded-full flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.instagram.com/imobibrasil/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.youtube.com/imobibrasilbr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#109d59]">Atendimento</h4>
            <p className="text-gray-300 mb-6 text-sm">
              De segunda a sexta das 08:00 às 18:00 horas
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#109d59] flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Avenida Manoel Goulart, 505 - Sala 43</p>
                  <p>Centro, Presidente Prudente / SP</p>
                  <p className="text-gray-400 text-xs mt-1">CNPJ: 13.326.364/0001-08</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#109d59] flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>(18) 3222-0557 - Presidente Prudente</p>
                  <p>(11) 4063-6343 - São Paulo</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#109d59] flex-shrink-0" />
                <span className="text-sm text-gray-300">contato@imobibrasil.com.br</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Support */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#109d59]">WhatsApp</h4>
            <div className="space-y-4">
              <a 
                href="https://web.whatsapp.com/send?phone=5518988227436" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-600 to-green-500 rounded-xl hover:from-green-500 hover:to-green-400 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <div className="text-white">
                  <p className="font-semibold">Comercial</p>
                  <p className="text-sm text-green-100">(18) 98822-7436</p>
                </div>
              </a>

              <a 
                href="https://web.whatsapp.com/send?phone=5518991643479" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <div className="text-white">
                  <p className="font-semibold">Suporte</p>
                  <p className="text-sm text-blue-100">(18) 99164-3479</p>
                </div>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-[#f7c200]">Links Rápidos</h5>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Planos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Central de Ajuda</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 ImobiBrasil. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;