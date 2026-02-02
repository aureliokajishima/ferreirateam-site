import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    name: "Carlos Eduardo",
    result: "-12kg em 3 meses",
    text: "O Vanderson mudou minha visão sobre treino. Eu achava que sabia treinar, mas a técnica que ele ensina faz toda diferença. O suporte no WhatsApp é surreal, ele responde rápido e ajusta o que precisa.",
  },
  {
    name: "Mariana Souza",
    result: "Ganho de massa e definição",
    text: "Já tentei várias consultorias, mas o Ferreira Team foi onde me encontrei. A dieta não é restritiva demais, consigo seguir, e o treino é intenso de verdade. Os resultados vieram rápido.",
  },
  {
    name: "Pedro Alves",
    result: "Preparação para estreantes",
    text: "Seguir a metodologia de um campeão faz diferença. O Vanderson passa a confiança necessária e o ajuste fino pra quem quer competir ou só ter um shape de praia. Recomendo demais!",
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            QUEM SEGUE O PLANO <span className="text-primary">EVOLUI</span>
          </h2>
          <p className="text-gray-400">Histórias reais de quem confiou no método.</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/5 p-6 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-10 h-10" />
              <div className="mb-4">
                <div className="font-bold text-white text-lg">{t.name}</div>
                <div className="text-primary text-sm font-medium">{t.result}</div>
              </div>
              <p className="text-gray-400 italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Results Gallery Placeholder */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-white mb-8">GALERIA DE RESULTADOS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-[4/5] bg-black/50 rounded-lg flex items-center justify-center border border-white/5 group relative overflow-hidden">
                <span className="text-gray-500 z-10">Antes / Depois</span>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">* Resultados variam de pessoa para pessoa e dependem da dedicação individual.</p>
        </div>
      </div>
    </section>
  );
}
