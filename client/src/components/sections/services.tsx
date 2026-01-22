import { motion } from "framer-motion";
import { Dumbbell, Utensils, MessageSquare, LineChart, Smartphone, FileText, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2">
            COMO FUNCIONA
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONSULTORIA COMPLETA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Dumbbell className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">Consultoria Completa</h3>
                <p className="text-gray-400">Treino + Dieta + Acompanhamento</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-lg px-4 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
                <AccordionTrigger className="hover:no-underline py-4 font-bold text-white">
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5 text-primary" />
                    Estratégia de Treino
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 pl-8">
                  <ul className="list-disc space-y-2">
                    <li>Avaliação física contínua (análise do shape)</li>
                    <li>Planilha de treino personalizada e atualizada</li>
                    <li>Vídeos explicativos de execução</li>
                    <li>Ajustes de volume e intensidade</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-white/10 rounded-lg px-4 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
                <AccordionTrigger className="hover:no-underline py-4 font-bold text-white">
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-primary" />
                    Estratégia Alimentar
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 pl-8">
                  <ul className="list-disc space-y-2">
                    <li>Dieta individualizada (sem copiar/colar)</li>
                    <li>Respeita suas preferências e rotina</li>
                    <li>Opções de substituição de alimentos</li>
                    <li>Ajustes conforme resposta do corpo</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-white/10 rounded-lg px-4 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
                <AccordionTrigger className="hover:no-underline py-4 font-bold text-white">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Suporte WhatsApp & Feedback
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 pl-8">
                  <ul className="list-disc space-y-2">
                    <li>Canal direto para tirar dúvidas</li>
                    <li>Correção de execução de movimentos por vídeo</li>
                    <li>Feedback semanal estruturado</li>
                    <li>Motivação e cobrança para manter o foco</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* PRESCRIÇÃO DE TREINO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-white/10 text-white">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">Prescrição de Treino</h3>
                <p className="text-gray-400">Apenas Treino (Sem dieta)</p>
              </div>
            </div>

            <div className="bg-card/50 border border-white/5 rounded-2xl p-6 space-y-6">
              <p className="text-gray-300">
                Ideal para quem já tem acompanhamento nutricional ou sabe se alimentar bem, mas precisa de um treino periodizado para quebrar platôs.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-primary/20 text-primary mt-1">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white">Planilha Personalizada</strong>
                    <span className="text-sm text-gray-400">Montada conforme seu nível e objetivo (hipertrofia, emagrecimento, força).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-primary/20 text-primary mt-1">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white">Suporte via WhatsApp</strong>
                    <span className="text-sm text-gray-400">Tire dúvidas sobre exercícios e métodos de intensidade.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-primary/20 text-primary mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white">Feedback Semanal</strong>
                    <span className="text-sm text-gray-400">Ajustes de carga e volume para garantir progressão.</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
