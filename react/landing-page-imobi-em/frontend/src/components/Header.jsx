import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { mockData } from './mock';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={mockData.logo} 
              alt="ImobiBrasil" 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.src = "/api/placeholder/150/40";
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#109d59] transition-colors">
              Funcionalidades
            </a>
            <a href="#clients" className="text-gray-700 hover:text-[#109d59] transition-colors">
              Clientes
            </a>
            <a href="#portals" className="text-gray-700 hover:text-[#109d59] transition-colors">
              Integrações
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#109d59] transition-colors">
              Planos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#109d59] transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#109d59] text-[#109d59] hover:bg-[#109d59] hover:text-white"
            >
              Login
            </Button>
            <Button className="bg-[#109d59] hover:bg-[#0e8c4f] text-white">
              Experimente Já
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-[#109d59] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a 
                href="#clients" 
                className="text-gray-700 hover:text-[#109d59] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clientes
              </a>
              <a 
                href="#portals" 
                className="text-gray-700 hover:text-[#109d59] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integrações
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-[#109d59] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planos
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-[#109d59] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-[#109d59] text-[#109d59] hover:bg-[#109d59] hover:text-white"
                >
                  Login
                </Button>
                <Button className="bg-[#109d59] hover:bg-[#0e8c4f] text-white">
                  Experimente Já
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