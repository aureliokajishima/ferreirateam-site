import { motion } from "framer-motion";
import { Dumbbell, Utensils, MessageSquare, LineChart, CheckCircle2, ArrowRight, Target, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_LINKS } from "@/lib/constants";

export function Services() {
  const scrollToPricing = () => {
    document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4">
            COMO FUNCIONA A METODOLOGIA FERREIRA TEAM
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o serviço ideal para você e evolua com estratégia, acompanhamento e resultado real.
          </p>
        </div>

        {/* ETAPA 1 - ENTENDA QUAL É O IDEAL PARA VOCÊ */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">1</div>
            <h3 className="text-2xl font-heading font-bold text-white">ENTENDA QUAL É O IDEAL PARA VOCÊ</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CARD 1 - CONSULTORIA COMPLETA */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Dumbbell className="w-24 h-24 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase">Consultoria Completa</h3>
                </div>
                <p className="text-sm text-primary font-bold uppercase tracking-wide mb-4">Acompanhamento Total</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Indicada para quem busca um acompanhamento completo de treino, alimentação e evolução física, com suporte próximo e ajustes constantes.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Para quem é ideal:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Pessoas que querem emagrecer, definir ou ganhar massa
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Quem precisa de orientação em treino e alimentação
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Quem busca acompanhamento próximo e feedbacks
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Benefícios:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Treino e alimentação totalmente personalizados
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Ajustes frequentes conforme evolução
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Acompanhamento direto pelo WhatsApp
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 - PRESCRIÇÃO DE TREINO */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <LineChart className="w-24 h-24 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg text-white">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase">Prescrição de Treino</h3>
                </div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wide mb-4">Foco em Treino Estruturado</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Indicada para quem já possui acompanhamento nutricional ou boa noção alimentar, mas precisa de um treino eficiente e bem planejado.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" /> Para quem é ideal:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                        Pessoas que já seguem dieta com nutricionista
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                        Quem quer um treino estruturado e adaptado
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                        Quem busca evolução no treino com suporte técnico
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" /> Benefícios:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Treino personalizado conforme objetivo e rotina
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Atualizações periódicas do treino
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Suporte para dúvidas de execução e progressão
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 - PERSONAL TRAINER */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-primary/30 rounded-2xl p-8 hover:border-primary/70 transition-colors relative group"
            >
              <div className="absolute -top-3 right-6 z-10">
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Presencial</span>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity overflow-hidden rounded-2xl">
                <Users className="w-24 h-24 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase">Personal Trainer</h3>
                </div>
                <p className="text-sm text-primary font-bold uppercase tracking-wide mb-4">Acompanhamento Presencial</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Indicado para quem quer treinar ao vivo com um personal, com correção imediata de execução, motivação constante e evolução acelerada.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Para quem é ideal:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Quem quer aprender a executar os exercícios corretamente
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Quem precisa de motivação e disciplina no dia a dia
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Quem busca evolução máxima com acompanhamento em tempo real
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Benefícios:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Avaliação física e planejamento totalmente personalizado
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Correção de execução e prevenção de lesões em tempo real
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        Orientação sobre hábitos, postura e rotina de vida
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ETAPA 2 - ESCOLHA O PLANO IDEAL */}
        <div className="mb-24 max-w-4xl mx-auto">
           <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/10">2</div>
            <h3 className="text-2xl font-heading font-bold text-white">ESCOLHA O PLANO IDEAL</h3>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Após escolher o tipo de acompanhamento ideal para você, selecione o plano que melhor se encaixa na sua rotina e no seu objetivo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-200 bg-black/20 p-3 rounded-lg border border-white/5">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Plano Mensal</strong> — ideal para testar a metodologia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200 bg-black/20 p-3 rounded-lg border border-white/5">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span><strong>Plano Trimestral</strong> — ideal para criar consistência</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-200 bg-black/20 p-3 rounded-lg border border-white/5">
                  <Dumbbell className="w-5 h-5 text-primary" />
                  <span><strong>Plano Semestral</strong> — ideal para evoluções sólidas</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200 bg-black/20 p-3 rounded-lg border border-white/5">
                  <Target className="w-5 h-5 text-primary" />
                  <span><strong>Plano Anual</strong> — ideal para transformações completas</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center mb-4">
              <p className="text-primary font-medium text-sm md:text-base">
                💡 Quanto maior o período, maior o compromisso com a evolução e melhores os resultados.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-bold">Personal Trainer:</span> Os planos são mensais e o que varia é a frequência de treinos presenciais na semana — de 1x até 5x. Você escolhe a frequência que se encaixa na sua rotina.
              </p>
            </div>
          </div>
        </div>

        {/* ETAPA 3 - COMECE AGORA */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-white text-black font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">3</div>
            <h3 className="text-2xl font-heading font-bold text-white">COMECE AGORA</h3>
          </div>

          <p className="text-gray-300 text-lg mb-8">
            Clique em <strong>'Começar agora'</strong> para iniciar seu atendimento. Você será direcionado para o contato, onde poderá tirar dúvidas e finalizar sua adesão com segurança.
          </p>

          <Button 
            size="lg" 
            onClick={scrollToPricing}
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-10 h-14 text-base shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
