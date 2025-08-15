import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle,
  ExternalLink,
  Award
} from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="footer-dark">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="bg-accent-primary text-white px-4 py-2 rounded-full text-lg font-bold mb-4 inline-block">
              ImobiBrasil
            </div>
            <p className="footer-text text-sm mb-4 leading-relaxed">
              O sistema mais completo para imobiliárias e corretores. 
              Tecnologia que transforma resultados.
            </p>
            
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} className="text-accent-primary" />
              <span className="text-sm footer-text">
                Eleito melhor sistema pelo Conecta Imobi
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:text-accent-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:text-accent-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={contactInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:text-accent-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-primary mt-1 flex-shrink-0" />
                <div className="text-sm footer-text">
                  <div>{contactInfo.address.street}</div>
                  <div>{contactInfo.address.city}</div>
                  <div className="text-xs mt-1 footer-text-muted">CNPJ: {contactInfo.address.cnpj}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent-primary" />
                <a 
                  href={`tel:${contactInfo.phones[0].number.replace(/\D/g, '')}`}
                  className="text-sm footer-link"
                >
                  {contactInfo.phones[0].number} - {contactInfo.phones[0].region}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-accent-primary" />
                <a 
                  href={`https://wa.me/55${contactInfo.whatsapp.commercial.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm footer-link"
                >
                  {contactInfo.whatsapp.commercial} - WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { label: 'Funcionalidades', href: '#features' },
                { label: 'Integrações', href: '#integrations' },
                { label: 'Preços', href: '#pricing' },
                { label: 'Depoimentos', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: contactInfo.socialMedia.blog }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm footer-link"
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {link.label}
                  {link.href.startsWith('http') && (
                    <ExternalLink size={12} className="inline ml-1" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Support Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Atendimento</h4>
            <div className="text-sm footer-text space-y-2">
              <div>Segunda à Sexta</div>
              <div>08:00 às 18:00 horas</div>
              
              <div className="pt-4">
                <h5 className="font-medium text-white mb-2">WhatsApp</h5>
                <div className="space-y-1">
                  <div>
                    <a 
                      href={`https://wa.me/55${contactInfo.whatsapp.commercial.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary hover:text-white transition-colors"
                    >
                      Comercial: {contactInfo.whatsapp.commercial}
                    </a>
                  </div>
                  <div>
                    <a 
                      href={`https://wa.me/55${contactInfo.whatsapp.support.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary hover:text-white transition-colors"
                    >
                      Suporte: {contactInfo.whatsapp.support}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm footer-text">
              © 2025 ImobiBrasil. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="footer-link">
                Política de Privacidade
              </a>
              <a href="#" className="footer-link">
                Termos de Uso
              </a>
              <div className="footer-text-muted">
                CNPJ: {contactInfo.address.cnpj}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/55${contactInfo.whatsapp.commercial.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;