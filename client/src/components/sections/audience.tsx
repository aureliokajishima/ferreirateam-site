import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function Audience() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Who is it for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-b from-green-950/20 to-transparent border border-green-900/30"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              PARA QUEM É
            </h3>
            <ul className="space-y-4">
              {[
                "Quer perder gordura e definir sem passar fome",
                "Busca ganho de massa muscular com qualidade",
                "Quer corrigir postura e evitar lesões no treino",
                "Precisa de motivação e cobrança constante",
                "Quer um plano que se adapte à rotina corrida"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who is it NOT for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-red-950/10 to-transparent border border-red-900/20"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <XCircle className="w-5 h-5" />
              </span>
              PARA QUEM NÃO É
            </h3>
            <ul className="space-y-4">
              {[
                "Procura fórmulas mágicas ou resultados do dia para a noite",
                "Não está disposto a seguir orientações",
                "Acredita que suplemento substitui treino e dieta",
                "Quer apenas 'fichas de treino' sem estratégia"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
