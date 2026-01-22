import { ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToPlans = () => {
    document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <img
          src="/assets/images/vanderson-pose-front.jpg"
          alt="Vanderson Ferreira Bodybuilder"
          className="w-full h-full object-cover object-top opacity-60 md:opacity-100"
        />
      </div>

      <div className="container relative z-20 px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Trophy className="w-3 h-3" />
              Overall Classic Physique
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Top 1 Rio Pro / NPC
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[0.9] mb-6 drop-shadow-2xl">
            CONSULTORIA <br />
            ONLINE <span className="text-primary">PERSONALIZADA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
            Evolua seu shape com estratégia de atleta, treino inteligente e dieta adaptada à sua rotina.
            Acompanhamento direto pelo WhatsApp com <strong className="text-white">Vanderson Ferreira</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToPlans}
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-8 h-14 text-base shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300"
            >
              Ver Planos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-wider px-8 h-14 text-base backdrop-blur-sm"
            >
              <a href={CHECKOUT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
        
        {/* Empty col for layout balance on desktop since image is centered/right */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
