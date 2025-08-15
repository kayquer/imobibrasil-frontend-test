import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const TrialFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: '',
    city: '',
    state: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      toast({
        title: "Teste grátis iniciado! 🎉",
        description: "Enviamos as instruções de acesso para seu e-mail. Verifique sua caixa de entrada.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        plan: '',
        city: '',
        state: ''
      });

    } catch (error) {
      toast({
        title: "Ops! Algo deu errado",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.company;

  return (
    <section id="trial-form" className="py-20 bg-gradient-to-br from-[#2ca62f]/5 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-green-50 text-[#2ca62f] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                Teste Gratuito
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Experimente{' '}
                <span className="text-[#2ca62f]">7 dias grátis</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Descubra como o ImobiBrasil pode revolucionar sua imobiliária. 
                Acesso completo, sem compromisso, sem cartão de crédito.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2ca62f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-[#2ca62f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sem Compromisso</h4>
                  <p className="text-gray-600">Cancele a qualquer momento, sem multas ou taxas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2ca62f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-[#2ca62f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ativação Imediata</h4>
                  <p className="text-gray-600">Seu sistema ficará pronto em até 2 horas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2ca62f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-[#2ca62f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Suporte Dedicado</h4>
                  <p className="text-gray-600">Equipe especializada para te ajudar na configuração</p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#2ca62f]">
              <p className="text-gray-700 italic mb-4">
                "Em apenas 3 dias de teste, já consegui organizar toda minha base de clientes. 
                O sistema é fantástico!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Cliente satisfeito"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Ana Silva</div>
                  <div className="text-sm text-gray-600">Diretora, Silva Imóveis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="text-center p-8 pb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Comece seu teste agora
              </h3>
              <p className="text-gray-600">
                Preencha os dados abaixo e tenha acesso imediato
              </p>
            </CardHeader>

            <CardContent className="p-8 pt-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Nome completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-medium">Imobiliária *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nome da sua imobiliária"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-gray-700 font-medium">Plano de interesse</Label>
                    <Select value={formData.plan} onValueChange={(value) => handleSelectChange(value, 'plan')}>
                      <SelectTrigger className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]">
                        <SelectValue placeholder="Escolha um plano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simples">Simples - R$ 54,99</SelectItem>
                        <SelectItem value="essencial">Essencial - R$ 74,99</SelectItem>
                        <SelectItem value="impulso">Impulso - R$ 119,99</SelectItem>
                        <SelectItem value="expansao">Expansão - R$ 249,99</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700 font-medium">Cidade</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-700 font-medium">Estado</Label>
                    <Input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="SP"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#2ca62f] focus:ring-[#2ca62f]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-[#2ca62f] hover:bg-[#228a26] text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Iniciando seu teste...
                    </div>
                  ) : (
                    'Começar Teste Grátis por 7 Dias'
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao clicar em "Começar Teste", você concorda com nossos{' '}
                  <a href="#" className="text-[#2ca62f] hover:underline">Termos de Uso</a> e{' '}
                  <a href="#" className="text-[#2ca62f] hover:underline">Política de Privacidade</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrialFormSection;