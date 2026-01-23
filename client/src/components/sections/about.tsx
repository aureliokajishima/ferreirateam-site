import { motion } from "framer-motion";
import { Trophy, Award, Medal, Users, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const scrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quem-e" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Content Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wide">+100 alunos ativos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              QUEM É <span className="text-primary">VANDERSON FERREIRA</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                Sou Vanderson Ferreira, bacharel em Educação Física, pós-graduado em Nutrição e Fisiologia do Esporte, atleta internacional de fisiculturismo e fundador do Team Ferreira. Tenho 15 anos de experiência na musculação e 10 anos no fisiculturismo competitivo, e já ajudei mais de 100 alunos a conquistarem resultados reais em emagrecimento, definição e ganho de massa muscular, aplicando a mesma metodologia que me levou à evolução no fisiculturismo de alto nível.
              </p>
              <p className="font-bold text-white border-l-4 border-primary pl-4">
                Meu objetivo é simples e direto: aplicar toda essa experiência para te conduzir com estratégia, acompanhamento e ajustes constantes até que você alcance o resultado que realmente deseja — seja emagrecer, ganhar massa, definir o corpo ou elevar sua saúde e qualidade de vida a um novo nível.
              </p>
            </div>

            {/* Achievements Grid - Highlighted */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition-colors group">
                <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm uppercase">Overall Classic Physique</div>
                  <div className="text-xs text-gray-400">Campeão Absoluto</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition-colors group">
                <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Medal className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm uppercase">Top 1 Classic Physique</div>
                  <div className="text-xs text-gray-400">Rio Pro / NPC (Open C)</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition-colors group">
                <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm uppercase">Top 1 Classic Physique</div>
                  <div className="text-xs text-gray-400">Mr. Z. Oeste</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition-colors group">
                <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm uppercase">Top 1 BodyBuilder</div>
                  <div className="text-xs text-gray-400">Campeão</div>
                </div>
              </div>
            </div>

            <Button 
              onClick={scrollToServices}
              size="lg"
              className="w-fit bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-8 py-6 text-base shadow-lg shadow-primary/20"
            >
              Como Funciona
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Images Side (Right) - Larger Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Main Profile Image - Vanderson */}
            <div className="w-full relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src="/assets/images/ze-da-obra.jpg" 
                  alt="Vanderson Ferreira" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Fundador Team Ferreira
                  </span>
                </div>
              </div>
            </div>

            {/* Social Proof Image - Father */}
            <div className="w-full">
              <div className="relative bg-card border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-primary/30 transition-colors shadow-lg">
                <div className="w-full md:w-48 aspect-square shrink-0 rounded-xl overflow-hidden border border-white/10 relative">
                  <img 
                    src="/assets/images/vanderson-profile-new.jpg" 
                    alt="Seu Zé da Obra" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-heading font-bold text-white text-xl mb-1">
                    SEU ZÉ DA OBRA <span className="text-gray-400 font-normal text-base opacity-70">(meu pai)</span>
                  </h4>
                  <div className="inline-block bg-white/10 px-3 py-1 rounded text-sm text-gray-300 mb-3 font-medium">+60 anos</div>
                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    "Prova real de que método e consistência funcionam. Resultado construído com estratégia adaptada para a idade."
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
