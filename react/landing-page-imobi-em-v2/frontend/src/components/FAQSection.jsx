import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { HelpCircle } from 'lucide-react';
import { faq } from '../data/mock';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4 mr-2" />
            Dúvidas Frequentes
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas que mais{' '}
            <span className="text-[#2ca62f]">recebemos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o ImobiBrasil e descubra como podemos ajudar seu negócio
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={`item-${item.id}`}
                className="bg-gray-50 rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <span className="font-semibold text-gray-900 group-hover:text-[#2ca62f] transition-colors duration-300">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional FAQ Items */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="item-extra-1"
              className="bg-gray-50 rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                <span className="font-semibold text-gray-900 group-hover:text-[#2ca62f] transition-colors duration-300">
                  O CRM possui integração com portais de anúncios?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Sim, o ImobiBrasil oferece integração com todos os grandes portais do Brasil, otimizando o seu tempo, já que você não precisa perdê-lo cadastrando manualmente seus imóveis em cada portal. Foque o seu tempo no seu cliente!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-extra-2"
              className="bg-gray-50 rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                <span className="font-semibold text-gray-900 group-hover:text-[#2ca62f] transition-colors duration-300">
                  Como montar um Site e configurar o CRM?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Simples e fácil! Os modelos já estão prontos para uso ao se cadastrar, você só precisa personalizar conforme o seu gosto. Um dos nossos objetivos é a praticidade, e com isso ter também um sistema totalmente intuitivo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-extra-3"
              className="bg-gray-50 rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                <span className="font-semibold text-gray-900 group-hover:text-[#2ca62f] transition-colors duration-300">
                  E se precisar de suporte, como faço?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Nosso atendimento é o MELHOR do mercado. Acreditamos muito na conexão entre pessoas. Em todos os canais (WhatsApp, Telefone, E-mail e Chat), você terá atendimento diretamente com PESSOAS. Aqui não há robôs para te atender.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-extra-4"
              className="bg-gray-50 rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                <span className="font-semibold text-gray-900 group-hover:text-[#2ca62f] transition-colors duration-300">
                  Quais os custos para criar um site para imobiliária?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                A partir de R$ 54,99 ao mês, você já pode ter um site para imobiliária e corretor de imóveis. Além disso, você terá um CRM completo e poderá criar seu e-mail personalizado. Sem taxa de inscrição, sem tempo mínimo de permanência e sem multa por cancelamento. Para pagamentos anuais, você ainda pode ter 10% de desconto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar você a escolher o melhor plano e tirar todas as suas dúvidas sobre o ImobiBrasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://web.whatsapp.com/send?phone=5518991643479" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] hover:bg-[#22C55E] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              Falar no WhatsApp
            </a>
            
            <a 
              href="tel:+551832220557"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;