import { Instagram, Mail, Phone, ExternalLink } from "lucide-react";
import { CHECKOUT_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Partners & Brand */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
          <div>
            <span className="font-heading font-bold text-3xl tracking-tighter text-white block mb-4">
              FERREIRA <span className="text-primary">TEAM</span>
            </span>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
              Consultoria esportiva de alto rendimento para pessoas reais. Estratégia, ciência e resultado prático.
            </p>
            <div className="flex gap-4">
              <a 
                href={CHECKOUT_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={CHECKOUT_LINKS.email}
                className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={CHECKOUT_LINKS.telefone}
                className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-white transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Parcerias Ativas</h4>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-3 h-3" /> Growth
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-3 h-3" /> TopPharma Team
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Grid */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-y border-white/5 mb-8">
          <a href={CHECKOUT_LINKS.email} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Mail className="w-5 h-5 text-primary/50 group-hover:text-primary" />
            <span className="text-sm">ferreirateam87@gmail.com</span>
          </a>
          <a href={CHECKOUT_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Instagram className="w-5 h-5 text-primary/50 group-hover:text-primary" />
            <span className="text-sm">@vandersonn_ferreira</span>
          </a>
          <a href={CHECKOUT_LINKS.telefone} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Phone className="w-5 h-5 text-primary/50 group-hover:text-primary" />
            <span className="text-sm">+55 (21) 97659-2839</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Ferreira Team. Todos os direitos reservados.</p>
          <div className="text-center md:text-right">
            <p>Resultados variam. Este serviço não substitui acompanhamento médico.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
