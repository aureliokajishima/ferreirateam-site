import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CHECKOUT_LINKS } from "@/lib/constants";

type Plan = {
  duration: string;
  priceMonthly: string;
  totalPrice?: string;
  installments?: string;
  installmentValue?: string;
  bestValue?: boolean;
  premium?: boolean;
  link: string;
  features: string[];
};

const CONSULTORIA_PLANS: Plan[] = [
  {
    duration: "Mensal",
    priceMonthly: "R$ 247/mês",
    link: CHECKOUT_LINKS.consultoria_mensal,
    features: ["Treino Personalizado", "Dieta Completa", "Suporte WhatsApp", "Feedback Semanal"]
  },
  {
    duration: "Trimestral",
    priceMonthly: "3x R$ 165,67",
    totalPrice: "R$ 497 à vista",
    link: CHECKOUT_LINKS.consultoria_trimestral,
    features: ["Economize R$ 244", "Treino + Dieta", "Suporte Prioritário", "Ajustes Quinzenais"]
  },
  {
    duration: "Semestral",
    priceMonthly: "6x R$ 182,83",
    totalPrice: "R$ 1.097 à vista",
    bestValue: true,
    link: CHECKOUT_LINKS.consultoria_semestral,
    features: ["Melhor Custo-Benefício", "Planejamento de Longo Prazo", "Avaliação de Exames", "Suporte Premium"]
  },
  {
    duration: "Anual",
    priceMonthly: "12x R$ 170,58",
    totalPrice: "R$ 2.047 à vista",
    premium: true,
    link: CHECKOUT_LINKS.consultoria_anual,
    features: ["Transformação Total", "Mentoria VIP", "Acesso Direto ao Coach", "Planejamento Competitivo"]
  }
];

const TREINO_PLANS: Plan[] = [
  {
    duration: "Mensal",
    priceMonthly: "R$ 97/mês",
    link: CHECKOUT_LINKS.treino_mensal,
    features: ["Planilha de Treino", "Suporte WhatsApp", "Vídeos Explicativos"]
  },
  {
    duration: "Trimestral",
    priceMonthly: "3x R$ 95,67",
    totalPrice: "R$ 287 à vista",
    link: CHECKOUT_LINKS.treino_trimestral,
    features: ["Economia Garantida", "Periodização de 3 Meses", "Suporte Contínuo"]
  },
  {
    duration: "Semestral",
    priceMonthly: "6x R$ 94,50",
    totalPrice: "R$ 567 à vista",
    bestValue: true,
    link: CHECKOUT_LINKS.treino_semestral,
    features: ["Foco na Evolução", "Ajustes de Carga", "Análise de Técnica"]
  },
  {
    duration: "Anual",
    priceMonthly: "12x R$ 95,58",
    totalPrice: "R$ 1.147 à vista",
    link: CHECKOUT_LINKS.treino_anual,
    features: ["Ano Inteiro de Treino", "Periodização Completa", "Resultados Sólidos"]
  }
];

export function Pricing() {
  const [isConsultoria, setIsConsultoria] = useState(true);

  const plans = isConsultoria ? CONSULTORIA_PLANS : TREINO_PLANS;

  return (
    <section id="planos" className="py-24 bg-black/50 relative">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            ESCOLHA SEU PLANO
          </h2>
          
          <div className="flex items-center justify-center gap-4 bg-white/5 p-2 rounded-full w-fit mx-auto border border-white/10">
            <button
              onClick={() => setIsConsultoria(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold uppercase transition-all",
                !isConsultoria ? "bg-white text-black" : "text-gray-400 hover:text-white"
              )}
            >
              Apenas Treino
            </button>
            <button
              onClick={() => setIsConsultoria(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold uppercase transition-all flex items-center gap-2",
                isConsultoria ? "bg-primary text-white shadow-lg shadow-primary/25" : "text-gray-400 hover:text-white"
              )}
            >
              Consultoria Completa
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">VIP</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.duration}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-6 rounded-2xl border flex flex-col h-full",
                plan.bestValue 
                  ? "bg-white/10 border-primary/50 ring-1 ring-primary/50" 
                  : "bg-card border-white/10 hover:border-white/20",
                plan.premium && "bg-gradient-to-b from-slate-900 to-black border-slate-700"
              )}
            >
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Mais Vendido
                </div>
              )}
              {plan.premium && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-100 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" /> Premium
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">{plan.duration}</h3>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {plan.priceMonthly}
                </div>
                {plan.totalPrice && (
                  <p className="text-sm text-gray-400">ou {plan.totalPrice}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={cn(
                  "w-full uppercase font-bold tracking-wider",
                  plan.bestValue ? "bg-primary hover:bg-primary/90" : "bg-white/10 hover:bg-white/20"
                )}
              >
                <a href={plan.link}>Começar Agora</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
