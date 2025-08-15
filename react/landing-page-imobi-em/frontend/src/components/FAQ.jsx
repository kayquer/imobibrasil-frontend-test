import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { mockData } from './mock';

const FAQ = () => {
  const { faq } = mockData;
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#f7c200]/10 text-[#f7c200] border-[#f7c200]/30">
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas
            <span className="text-[#109d59]"> Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tire suas dúvidas sobre o sistema ImobiBrasil e descubra como podemos ajudar sua imobiliária a crescer.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faq.map((item) => (
            <Card 
              key={item.id}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems[item.id] ? (
                      <ChevronUp className="w-5 h-5 text-[#109d59]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openItems[item.id] && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-xl p-8 shadow-lg border-2 border-[#109d59]/10 max-w-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para ajudar você a escolher o melhor plano para sua imobiliária.
            </p>
            <button className="bg-[#109d59] hover:bg-[#0e8c4f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Falar com Especialista
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;