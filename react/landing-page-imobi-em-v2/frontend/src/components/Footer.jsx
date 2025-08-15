import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src={companyInfo.logo} 
              alt="ImobiBrasil" 
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              O sistema completo para imobiliárias que querem vender mais. 
              CRM, site profissional e integração com todos os portais.
            </p>
            
            {/* Award */}
            <div className="flex items-center bg-gray-800 rounded-lg p-4">
              <div className="w-12 h-12 bg-[#2ca62f] rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Eleito o melhor</div>
                <div className="text-xs text-gray-400">Sistema pelo Conecta Imobi</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Integrações
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://web.whatsapp.com/send?phone=5518991643479" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#2ca62f] transition-colors flex items-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Suporte
                </a>
              </li>
              <li>
                <a 
                  href="tel:+551832220557"
                  className="text-gray-400 hover:text-[#2ca62f] transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Central de Atendimento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ca62f] transition-colors">
                  Status do Sistema
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#2ca62f] mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>{companyInfo.address}</div>
                  <div className="mt-1">CNPJ: {companyInfo.cnpj}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#2ca62f] mr-3" />
                <a 
                  href={`tel:+551832220557`}
                  className="text-gray-400 hover:text-[#2ca62f] transition-colors text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#2ca62f] mr-3" />
                <a 
                  href="mailto:contato@imobibrasil.com.br"
                  className="text-gray-400 hover:text-[#2ca62f] transition-colors text-sm"
                >
                  contato@imobibrasil.com.br
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Atendimento</h5>
              <p className="text-gray-400 text-sm">
                Segunda à Sexta<br />
                08:00 às 18:00h
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Acompanhe:</span>
              <a 
                href="https://www.facebook.com/imobibrasil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4267B2] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/imobibrasil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/imobibrasilbr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 ImobiBrasil. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4 mt-2 text-xs">
                <a href="#" className="text-gray-500 hover:text-[#2ca62f] transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-500 hover:text-[#2ca62f] transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://web.whatsapp.com/send?phone=5518991643479"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#22C55E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;