import { BenefitsSection } from "@/components/benefits-section";
import { CTASection } from "@/components/cta-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeaturedProducts />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
