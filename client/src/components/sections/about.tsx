import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/assets/images/vanderson-trophy-solo.jpg" 
                alt="Vanderson Ferreira com troféu" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl shadow-primary/20 hidden md:block">
              <div className="text-4xl font-heading font-bold">15+</div>
              <div className="text-sm font-medium uppercase tracking-wider">Anos de<br/>Experiência</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-2">QUEM É</h2>
            <h3 className="text-5xl font-heading font-bold text-primary mb-6">VANDERSON FERREIRA</h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                Bacharel em Educação Física, Pós-Graduado em Nutrição e Fisiologia do Esporte e Atleta Internacional de Fisiculturismo há 10 anos.
              </p>
              <p>
                "Minha missão é aplicar, na vida real, a mesma metodologia usada no fisiculturismo de alto rendimento: estratégia, constância e acompanhamento. Cada aluno é tratado de forma individual, respeitando sua rotina, nível e objetivo."
              </p>
            </div>

            {/* Achievements */}
            <div className="grid gap-4 mb-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                <Trophy className="w-8 h-8 text-yellow-500 shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase">Overall Classic Physique</div>
                  <div className="text-sm text-gray-400">Campeão Absoluto</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                <Medal className="w-8 h-8 text-yellow-500 shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase">Top 1 Classic Physique Open C</div>
                  <div className="text-sm text-gray-400">Rio Pro / NPC</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                <Award className="w-8 h-8 text-yellow-500 shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase">Top 1 BodyBuilder</div>
                  <div className="text-sm text-gray-400">Mr. Z. Oeste</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wide">Proprietário Team Ferreira</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wide">Pós-Graduado</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wide">Coach</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
