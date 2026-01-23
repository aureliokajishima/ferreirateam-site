import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_LINKS } from "@/lib/constants";

export function Telegram() {
  return (
    <section className="bg-gradient-to-r from-[#229ED9]/20 to-transparent border-y border-[#229ED9]/20 py-16">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto backdrop-blur-sm"
        >
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-[#229ED9] p-2 rounded-full">
                <Send className="w-6 h-6 text-white ml-0.5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wide">
                Comunidade no Telegram
              </h3>
            </div>
            
            <h4 className="text-xl font-bold text-[#229ED9] mb-2">Team Ferreira🏆</h4>
            <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
              Dicas, opiniões e estudos toda semana — conteúdo direto ao ponto para te manter no caminho.
            </p>
          </div>

          <Button 
            asChild
            size="lg"
            className="bg-[#229ED9] hover:bg-[#229ED9]/90 text-white font-bold uppercase tracking-wider px-8 h-14 shadow-[0_0_20px_rgba(34,158,217,0.4)] hover:shadow-[0_0_30px_rgba(34,158,217,0.6)] whitespace-nowrap"
          >
            <a href={CHECKOUT_LINKS.telegram} target="_blank" rel="noopener noreferrer">
              Entrar no Telegram
              <Send className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
