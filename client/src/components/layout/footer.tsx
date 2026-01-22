import { Instagram } from "lucide-react";
import { CHECKOUT_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <span className="font-heading font-bold text-2xl tracking-tighter text-white">
              TEAM <span className="text-primary">FERREIRA</span>
            </span>
            <p className="text-gray-500 text-sm mt-2 max-w-xs">
              Consultoria esportiva de alto rendimento para pessoas reais.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={CHECKOUT_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Team Ferreira. Todos os direitos reservados.</p>
          <div className="text-center md:text-right">
            <p>Resultados variam. Este serviço não substitui acompanhamento médico.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
