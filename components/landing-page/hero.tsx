import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient">
          A teammate that won't go AFK
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Unstuck is a transparent desktop overlay that provides instant AI-powered
          guidance while you play. No alt-tabbing, just seamless gaming.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center">
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            <Download className="size-5" />
            Download for Windows
          </Button>
        </div>
      </div>
    </section>
  );
}