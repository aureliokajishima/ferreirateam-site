import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Como funciona o acompanhamento pelo WhatsApp?",
    a: "Você terá acesso direto ao meu número pessoal. Lá você pode enviar vídeos executando exercícios para correção, tirar dúvidas sobre a dieta e mandar feedbacks. Respondo diariamente."
  },
  {
    q: "Com que frequência o treino é atualizado?",
    a: "O treino é atualizado mensalmente, ou antes se houver necessidade específica. A cada renovação de ciclo, avaliamos sua evolução e mudamos a estratégia."
  },
  {
    q: "Preciso treinar em uma academia?",
    a: "É o ideal para ter melhores resultados, pois temos mais variedade de cargas e equipamentos. Porém, posso adaptar o treino para residência se você tiver equipamentos básicos."
  },
  {
    q: "Como envio fotos e vídeos para avaliação?",
    a: "Pela área do aluno OU pelo WhatsApp."
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Isso varia de cada organismo e dedicação. Mas com 30 dias de plano seguido à risca, já é visível a mudança na composição corporal e disposição."
  },
  {
    q: "Como funciona pagamento e renovação?",
    a: "O pagamento é feito via cartão de crédito (parcelado) ou PIX. A renovação não é automática, você decide se quer continuar evoluindo com o time."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background border-t border-white/5">
      <div className="container px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">PERGUNTAS FREQUENTES</h2>
          <p className="text-gray-400">Tire suas dúvidas antes de começar.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg px-4 bg-card">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
