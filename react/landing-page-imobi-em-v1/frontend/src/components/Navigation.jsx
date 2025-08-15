import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Integrações', href: '#integrations' },
    { label: 'Preços', href: '#pricing' },
    { label: 'Clientes', href: '#testimonials' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <nav className="nav-header">
      <div className="flex items-center">
        <div className="bg-accent-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          ImobiBrasil
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-3">
        <a 
          href="tel:1832220557" 
          className="flex items-center gap-2 text-accent-primary hover:text-accent-strong transition-colors"
        >
          <Phone size={16} />
          <span className="text-sm font-medium">(18) 3222-0557</span>
        </a>
        <button className="btn-primary text-sm px-4 py-2">
          Teste Grátis
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-border-light rounded-2xl m-4 p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border-light">
              <a 
                href="tel:1832220557" 
                className="flex items-center justify-center gap-2 text-accent-primary mb-3"
              >
                <Phone size={16} />
                <span>(18) 3222-0557</span>
              </a>
              <button className="btn-primary w-full">
                Teste Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;