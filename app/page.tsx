import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";
import { Features } from "@/components/landing-page/features";
import { Benefits } from "@/components/landing-page/benefits";
import { Pricing } from "@/components/landing-page/pricing";
import { CreditsCTA } from "@/components/landing-page/credits-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <CreditsCTA />
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Unstuck. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}