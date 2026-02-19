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
  basePrice?: number; // For Pix calculation (used in Treino plans)
  pixText?: string; // Custom Pix text for Consultoria plans
  installmentsText?: string;
  bestValue?: boolean;
  premium?: boolean;
  link: string;
  features: string[];
};

const CONSULTORIA_PLANS: Plan[] = [
  {
    duration: "Mensal",
    priceMonthly: "R$ 272,51/mês",
    pixText: "ou R$ 260,00 no Pix à vista (Economiza R$ 12,51)",
    link: CHECKOUT_LINKS.consultoria_mensal,
    features: ["Treino Personalizado", "Dieta Completa", "Suporte WhatsApp", "Feedback Semanal"]
  },
  {
    duration: "Trimestral",
    priceMonthly: "R$ 219,97/mês",
    installmentsText: "3x R$ 219,97",
    pixText: "ou R$ 625,00 no Pix à vista (Economiza R$ 34,91)",
    link: CHECKOUT_LINKS.consultoria_trimestral,
    features: ["Economize R$ 244", "Treino + Dieta", "Suporte Prioritário", "Ajustes Quinzenais"]
  },
  {
    duration: "Semestral",
    priceMonthly: "R$ 175,98/mês",
    installmentsText: "6x R$ 175,98",
    pixText: "ou R$ 1.000,00 no Pix à vista (Economiza R$ 55,85)",
    bestValue: true,
    link: CHECKOUT_LINKS.consultoria_semestral,
    features: ["Melhor Custo-Benefício", "Planejamento de Longo Prazo", "Avaliação de Exames", "Suporte Premium"]
  },
  {
    duration: "Anual",
    priceMonthly: "R$ 167,55/mês",
    installmentsText: "12x R$ 167,55",
    pixText: "ou R$ 1.900,00 no Pix à vista (Economiza R$ 110,58)",
    premium: true,
    link: CHECKOUT_LINKS.consultoria_anual,
    features: ["Transformação Total", "Mentoria VIP", "Acesso Direto ao Coach", "Planejamento Competitivo"]
  }
];

const TREINO_PLANS: Plan[] = [
  {
    duration: "Mensal",
    priceMonthly: "R$ 154,07/mês",
    pixText: "ou R$ 147,00 no Pix à vista (Economiza R$ 7,07)",
    link: CHECKOUT_LINKS.treino_mensal,
    features: ["Planilha de Treino", "Suporte WhatsApp", "Vídeos Explicativos"]
  },
  {
    duration: "Trimestral",
    priceMonthly: "R$ 101,01/mês",
    installmentsText: "3x R$ 101,01",
    pixText: "ou R$ 287,00 no Pix à vista (Economiza R$ 16,03)",
    link: CHECKOUT_LINKS.treino_trimestral,
    features: ["Economia Garantida", "Periodização de 3 Meses", "Suporte Contínuo"]
  },
  {
    duration: "Semestral",
    priceMonthly: "R$ 99,77/mês",
    installmentsText: "6x R$ 99,77",
    pixText: "ou R$ 567,00 no Pix à vista (Economiza R$ 31,67)",
    bestValue: true,
    link: CHECKOUT_LINKS.treino_semestral,
    features: ["Foco na Evolução", "Ajustes de Carga", "Análise de Técnica"]
  },
  {
    duration: "Anual",
    priceMonthly: "R$ 101,14/mês",
    installmentsText: "12x R$ 101,14",
    pixText: "ou R$ 1.147,00 no Pix à vista (Economiza R$ 66,76)",
    link: CHECKOUT_LINKS.treino_anual,
    features: ["Ano Inteiro de Treino", "Periodização Completa", "Resultados Sólidos"]
  }
];

export function Pricing() {
  const [isConsultoria, setIsConsultoria] = useState(true);

  const plans = isConsultoria ? CONSULTORIA_PLANS : TREINO_PLANS;

  const calculatePixPrice = (basePrice: number) => {
    const discounted = basePrice * 0.95; // 5% off
    return `ou ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(discounted)} no Pix à vista (5% OFF)`;
  };

  return (
    <section id="planos" className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-4">
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
                {plan.installmentsText && (
                  <p className="text-sm text-gray-400">{plan.installmentsText}</p>
                )}
                {/* Pix Discount Line */}
                <div className="mt-2 text-sm font-semibold text-green-400 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 fill-current" />
                  {plan.pixText || (plan.basePrice ? calculatePixPrice(plan.basePrice) : "")}
                </div>
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
