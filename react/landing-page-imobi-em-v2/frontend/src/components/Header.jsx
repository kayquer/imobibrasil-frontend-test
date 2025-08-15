import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.imobibrasil.com.br/imagens/logo.png" 
              alt="ImobiBrasil" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium">
              Recursos
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium">
              Planos
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium">
              Clientes
            </a>
            <a href="#integrations" className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium">
              Integrações
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+551832220557" 
              className="flex items-center text-gray-600 hover:text-[#2ca62f] transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">(18) 3222-0557</span>
            </a>
            <Button 
              className="bg-[#2ca62f] hover:bg-[#228a26] text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Teste Grátis 7 Dias
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#2ca62f] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </a>
              <a 
                href="#integrations" 
                className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrações
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-[#2ca62f] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <a 
                  href="tel:+551832220557" 
                  className="flex items-center text-gray-600 hover:text-[#2ca62f] transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">(18) 3222-0557</span>
                </a>
                <Button 
                  className="bg-[#2ca62f] hover:bg-[#228a26] text-white w-full"
                  onClick={() => {
                    document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  Teste Grátis 7 Dias
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;