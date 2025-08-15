import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/mock';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="section-padding-lg bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre o ImobiBrasil
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className="border border-border-light rounded-xl mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-section transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">
                  {item.question}
                </span>
                {openItems.has(item.id) ? (
                  <ChevronUp size={20} className="text-accent-primary flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-text-muted flex-shrink-0" />
                )}
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-accent-wash rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="heading-3 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="body-medium text-text-secondary mb-6">
              Nossa equipe está pronta para te atender com o melhor suporte do mercado
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary btn-hover-scale">
                Falar no WhatsApp
              </button>
              <button className="btn-secondary btn-hover-scale">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;