import { MessageCircle } from "lucide-react";
import { CHECKOUT_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={CHECKOUT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </motion.a>
  );
}
