import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Cpu, Plug, Check, ArrowRight, Sparkles, Shield, Gauge, MessageSquare, GitBranch } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Switch } from "../components/ui/switch";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { useToast } from "../hooks/use-toast";
import FeatureTabs from "../components/FeatureTabs";
import { featuresMock, integrationsMock, metricsMock, pricingMock, testimonialsMock, featureTabs } from "../assets/mock";

const formatNumber = (n) => n.toLocaleString("pt-BR");

function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(16, Math.floor(duration / 60));
    const increment = Math.ceil(target / (duration / stepTime));
    const timer = setInterval(() => {
      start = Math.min(start + increment, target);
      setValue(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return value;
}

const Stat = ({ label, value, suffix = "" }) => (
  <div className="card glass p-3">
    <div className="heading-3" style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
      <span>{formatNumber(value)}</span>
      {suffix && <span className="body-small" style={{ color: "var(--text-secondary)" }}>{suffix}</span>}
    </div>
    <div className="body-small" style={{ color: "var(--text-secondary)" }}>{label}</div>
  </div>
);

const Hero = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("crm");
  const tabMap = useMemo(() => Object.fromEntries(featureTabs.map(t => [t.id, t])), []);
  const kpis = tabMap[mode]?.kpis || { conversao: 18, tempo: 5, satisfacao: 92 };

  const countA = useCounter(metricsMock.imobiliariasAtivas);
  const countB = useCounter(metricsMock.imoveisGerenciados);
  const countC = useCounter(metricsMock.aumentoVendas);

  const onStartTrial = (e) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast({ title: "E-mail inválido", description: "Por favor, insira um e-mail válido." });
      return;
    }
    localStorage.setItem("imobibrasil_trial_email", email);
    toast({ title: "Sucesso!", description: "Teste iniciado. Entraremos em contato em breve." });
    setEmail("");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div>
          <h1 className="hero-title heading-1">Sistema Completo para Imobiliárias</h1>
          <p className="hero-subtitle body-large">CRM, Funil de Vendas, Integração com Portais e Automação Inteligente.</p>
          <form onSubmit={onStartTrial} style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Input type="email" placeholder="Seu e-mail profissional" value={email} onChange={(e) => setEmail(e.target.value)} style={{ minWidth: 260 }} />
            <button type="submit" className="btn-primary">Teste Grátis por 7 Dias <ArrowRight size={18} /></button>
            <a href="#precos" className="btn-secondary">Ver planos</a>
          </form>
          <div className="hero-chips">
            {featureTabs.map(t => (
              <button key={t.id} className={`chip ${mode===t.id?"active":""}`} onClick={() => setMode(t.id)}>{t.label}</button>
            ))}
          </div>

          <div className="grid-3 mt-6">
            <Stat label="Imobiliárias Ativas" value={countA} suffix="+" />
            <Stat label="Imóveis Gerenciados" value={countB} suffix="+" />
            <Stat label="Aumento nas Vendas" value={countC} suffix="%" />
          </div>
        </div>

        <div>
          <div className="dashboard">
            <div className="dashboard-header">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="heading-3">Painel de Vendas</div>
                <span className="badge">IA ativa</span>
              </div>
              <div className="grid-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="body-small">Conversão</div>
                    <div className="heading-2">{kpis.conversao}%</div>
                    <Progress value={kpis.conversao} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="body-small">Tempo Médio</div>
                    <div className="heading-2">{kpis.tempo}d</div>
                    <Progress value={Math.max(5, 100 - kpis.tempo * 10)} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="body-small">Satisfação</div>
                    <div className="heading-2">{kpis.satisfacao}%</div>
                    <Progress value={kpis.satisfacao} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const icons = { Cpu, Workflow: GitBranch, Plug };
  return (
    <section id="recursos" className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="heading-2">IA + Automação para Resultados Reais</h2>
          <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Sparkles size={16} /> Nova geração</span>
        </div>
        <FeatureTabs tabs={featureTabs} />
        <div className="grid-3 mt-6">
          {featuresMock.map((f) => {
            const Icon = icons[f.icon] || Cpu;
            return (
              <div key={f.id} className="card p-4">
                <div className="flex items-center gap-2 mb-2"><Icon size={22} color="var(--accent-primary)" /><div className="heading-3">{f.title}</div></div>
                <p className="body-medium" style={{ color: "var(--text-secondary)" }}>{f.description}</p>
                <ul className="mt-4" style={{ display: "grid", gap: 8 }}>
                  {f.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 body-small"><Check size={16} color="var(--accent-primary)" /> {b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => (
  <section id="workflow" className="section section-muted">
    <div className="container">
      <h2 className="heading-2 mb-4">Operações Centralizadas</h2>
      <p className="body-medium" style={{ color: "var(--text-secondary)" }}>CRM, anúncios e tarefas em um único portal. Conecte gatilhos para automatizar cada etapa do funil.</p>
      <div className="grid-3 mt-6">
        {[
          { title: "Lead Capturado", icon: <Gauge size={18} />, text: "Entrada via site, portais e WhatsApp" },
          { title: "Distribuição Inteligente", icon: <Cpu size={18} />, text: "IA distribui leads por afinidade e performance" },
          { title: "Follow-up Omnichannel", icon: <MessageSquare size={18} />, text: "Sequências automáticas por e-mail/WhatsApp" },
        ].map((s, i) => (
          <div className="card p-4" key={i}>
            <div className="heading-3" style={{ display: "flex", gap: 8, alignItems: "center" }}>{s.icon}{s.title}</div>
            <p className="body-small mt-2" style={{ color: "var(--text-secondary)" }}>{s.text}</p>
            <div className="chart-bar mt-4"><div className="chart-fill" style={{ width: `${30 + i * 25}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Integrations = () => (
  <section id="integracoes" className="section">
    <div className="container">
      <div className="flex items-center justify-between mb-4">
        <h2 className="heading-2">Integrações Avançadas</h2>
        <span className="body-small" style={{ color: "var(--text-secondary)" }}>Sincronização em tempo real</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {integrationsMock.map((it) => (
          <span key={it.name} className="badge">{it.name}</span>
        ))}
      </div>
    </div>
  </section>
);

const Results = () => (
  <section id="resultados" className="section section-muted">
    <div className="container">
      <h2 className="heading-2 mb-4">Resultados de Negócio</h2>
      <div className="grid-3">
        {testimonialsMock.map((t, i) => (
          <blockquote key={i} className="card p-4">
            <p className="body-medium">“{t.quote}”</p>
            <footer className="body-small mt-2" style={{ color: "var(--text-secondary)" }}>{t.name} • {t.role}</footer>
          </blockquote>
        ))}
        <div className="card p-4">
          <div className="heading-3">Segurança e Confiabilidade</div>
          <ul className="mt-2" style={{ display: "grid", gap: 6 }}>
            <li className="flex items-center gap-2 body-small"><Shield size={16} color="var(--accent-primary)" /> Certificações do setor</li>
            <li className="flex items-center gap-2 body-small"><Shield size={16} color="var(--accent-primary)" /> Conformidade LGPD</li>
            <li className="flex items-center gap-2 body-small"><Shield size={16} color="var(--accent-primary)" /> Suporte 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [annual, setAnnual] = useState(() => localStorage.getItem("imobi_pricing_toggle") === "annual");
  const plans = useMemo(() => {
    if (!annual) return pricingMock.monthly;
    return pricingMock.monthly.map((p) => ({ ...p, price: p.price * pricingMock.annuallyMultiplier }));
  }, [annual]);

  useEffect(() => { localStorage.setItem("imobi_pricing_toggle", annual ? "annual" : "monthly"); }, [annual]);

  return (
    <section id="precos" className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="heading-2">Planos e Preços</h2>
          <div className="toggle">
            <span className="body-small" style={{ color: !annual ? "var(--text-primary)" : "var(--text-secondary)" }}>Mensal</span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className="body-small" style={{ color: annual ? "var(--text-primary)" : "var(--text-secondary)" }}>Anual <span className="badge" style={{ marginLeft: 6 }}>2 meses grátis</span></span>
          </div>
        </div>
        <div className="grid-3">
          {plans.map((p) => (
            <div key={p.id} className={`plan ${p.highlighted ? "highlight" : ""}`}>
              <div className="body-small" style={{ color: "var(--text-secondary)" }}>{p.bestFor}</div>
              <div className="heading-3 mt-2">{p.name}</div>
              <div className="price mt-2">{pricingMock.currency} {p.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}{annual ? "/ano" : "/mês"}</div>
              <ul className="mt-4" style={{ display: "grid", gap: 8 }}>
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 body-small"><Check size={16} color="var(--accent-primary)" /> {f}</li>
                ))}
              </ul>
              <button className="btn-primary mt-4" onClick={() => localStorage.setItem("imobi_selected_plan", p.id)}>Começar agora</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => (
  <section id="faq" className="section section-muted">
    <div className="container">
      <h2 className="heading-2 mb-4">Perguntas Frequentes</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="a1">
          <AccordionTrigger>O teste é realmente gratuito?</AccordionTrigger>
          <AccordionContent>Sim. 7 dias completos com todos os recursos essenciais sem necessidade de cartão.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="a2">
          <AccordionTrigger>Posso integrar com meu portal atual?</AccordionTrigger>
          <AccordionContent>Sim. Integramos com OLX, ZAP, VivaReal e WhatsApp Business API, além de CRMs populares.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="a3">
          <AccordionTrigger>A automação usa IA?</AccordionTrigger>
          <AccordionContent>Sim. Utilizamos IA para matching de imóveis, pontuação de leads, descrições e follow-ups.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="section" style={{ position: "relative" }}>
    <div className="container">
      <div className="card glass p-6" style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <div className="heading-2">Transforme sua imobiliária com ImobiBrasil</div>
          <p className="body-medium" style={{ color: "var(--text-secondary)" }}>Automatize processos, acelere vendas e ganhe previsibilidade.</p>
        </div>
        <a href="#" className="btn-primary">Comece Agora <ArrowRight size={18} /></a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
      <div className="body-small">© {new Date().getFullYear()} ImobiBrasil. Todos os direitos reservados.</div>
      <div className="body-small" style={{ display: "flex", gap: 12 }}>
        <a className="anchor" href="#">Privacidade</a>
        <a className="anchor" href="#">Termos</a>
        <a className="anchor" href="#faq">Ajuda</a>
      </div>
    </div>
  </footer>
);

export default function Landing() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((a) => a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }));
    return () => links.forEach((a) => a.removeEventListener('click', () => {}));
  }, []);

  return (
    <div>
      <header className="nav-header">
        <div className="nav-left">
          <span className="brand-dot" />
          <Link to="/" className="heading-3" style={{ textDecoration: 'none' }}>ImobiBrasil</Link>
        </div>
        <nav className="nav-links">
          <a className="nav-link" href="#recursos">Recursos</a>
          <a className="nav-link" href="#integracoes">Integrações</a>
          <a className="nav-link" href="#resultados">Resultados</a>
          <a className="nav-link" href="#precos">Preços</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <a className="btn-secondary" href="#precos">Ver Planos</a>
          <a className="btn-primary" href="#">Entrar</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <WorkflowSection />
        <Integrations />
        <Results />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}