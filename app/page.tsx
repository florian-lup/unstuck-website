import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";
import { OverlayFeatures } from "@/components/landing-page/overlay-features";
import { AiFeatures } from "@/components/landing-page/ai-features";
import { Pricing } from "@/components/landing-page/pricing";
import { CreditsCTA } from "@/components/landing-page/credits-cta";
import { Footer } from "@/components/landing-page/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <OverlayFeatures />
        <AiFeatures />
        <Pricing />
        <CreditsCTA />
      </main>

      <Footer />
    </div>
  );
}