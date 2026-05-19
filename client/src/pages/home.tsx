import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Audience } from "@/components/sections/audience";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { SocialProof } from "@/components/sections/social-proof";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Audience />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
