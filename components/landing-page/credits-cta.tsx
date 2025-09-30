import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";

export function CreditsCTA() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Credits Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
          
          <div className="relative z-10 text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="size-8 text-primary fill-primary/20" />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Made with Caffeine & Chaos
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Duct-taped together by sleep-deprived speedrunners for the trash gaming community
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="gap-2 text-base">
                <Download className="size-5" />
                Download Unstuck
              </Button>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground pt-2">
              Free forever • Windows • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

