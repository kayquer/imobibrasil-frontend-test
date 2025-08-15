import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Check } from "lucide-react";
import { Progress } from "./ui/progress";

export default function FeatureTabs({ tabs }) {
  return (
    <div className="tabs-wrap">
      <Tabs defaultValue={tabs[0]?.id}>
        <TabsList className="tablist">
          {tabs.map(t => (
            <TabsTrigger key={t.id} value={t.id} className="tab-trigger">{t.label}</TabsTrigger>
          ))}
        </TabsList>
        {tabs.map(t => (
          <TabsContent key={t.id} value={t.id}>
            <div className="grid-3">
              <div className="card p-4" style={{ gridColumn: "span 2" }}>
                <div className="heading-3">{t.label}</div>
                <p className="body-medium mt-2" style={{ color: "var(--text-secondary)" }}>{t.description}</p>
                <ul className="mt-4" style={{ display: "grid", gap: 8 }}>
                  {t.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 body-small"><Check size={16} color="var(--accent-primary)"/> {b}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-4">
                <div className="body-small">Conversão</div>
                <div className="heading-2">{t.kpis.conversao}%</div>
                <Progress value={t.kpis.conversao} className="mt-2"/>
                <div className="body-small mt-2" style={{ color: "var(--text-secondary)" }}>Referência do cenário</div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}