import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_LINKS, MENU_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl tracking-tighter text-white">
            TEAM <span className="text-primary">FERREIRA</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2" />
          <Button 
            asChild 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wider"
          >
            <a href={CHECKOUT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container px-4 py-8 flex flex-col gap-6">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-lg font-heading font-medium text-white text-left uppercase"
                >
                  {item.label}
                </button>
              ))}
              <Button asChild className="w-full bg-primary text-white font-bold uppercase mt-4">
                <a href={CHECKOUT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
