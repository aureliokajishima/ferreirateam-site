import { motion } from "framer-motion";
import { Trophy, Award, Medal, Users, ArrowRight } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Content Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center"
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

            {/* Achievements List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="text-white font-medium">Overall Classic Physique</span>
              </div>
              <div className="flex items-center gap-3">
                <Medal className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="text-white font-medium">Top 1 Classic Physique OpenC | Rio Pro/NPC</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="text-white font-medium">Top 1 Classic Physique | Mr. Z. Oeste</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="text-white font-medium">Top 1 BodyBuilder</span>
              </div>
            </div>

            <Button 
              onClick={scrollToServices}
              className="w-fit bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-8"
            >
              Como Funciona
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Images Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-start"
          >
            {/* Main Profile Image - Vanderson */}
            <div className="xl:col-span-2 relative group">
              <div className="aspect-[4/5] md:aspect-[16/10] xl:aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img 
                  src="/assets/images/vanderson-profile-new.jpg" 
                  alt="Vanderson Ferreira" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Fundador Team Ferreira
                  </span>
                </div>
              </div>
            </div>

            {/* Social Proof Image - Father */}
            <div className="xl:col-span-2 mt-4 xl:mt-0">
              <div className="relative bg-card border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row gap-6 items-center hover:border-primary/30 transition-colors">
                <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 relative">
                  <img 
                    src="/assets/images/ze-da-obra.jpg" 
                    alt="Seu Zé da Obra" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Seu Zé da Obra</h4>
                  <div className="inline-block bg-white/10 px-2 py-0.5 rounded text-xs text-gray-300 mb-2 font-medium">+60 anos</div>
                  <p className="text-gray-400 text-sm italic">
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
