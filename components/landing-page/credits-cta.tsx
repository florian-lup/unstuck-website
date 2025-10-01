import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CreditsCTA() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24">
      <div className="max-w-4xl text-left">
        {/* Credits Card */}
        <div className="text-left">
            {/* Heading */}
            <div className="border-b border-primary">
              <h2 className="text-2xl font-semibold md:text-4xl mb-6 text-gradient">
                Duct-taped together by sleep-deprived speedrunners for the trash gaming community
              </h2>
            </div>

            {/* CTA Button and Info */}
            <div className="flex items-center gap-4 pt-4">
              <Button size="sm" className="gap-2 text-sm">
                <Download className="size-4" />
                Download Unstuck
              </Button>
              
              {/* Additional Info */}
              <p className="text-sm text-muted-foreground">
                Windows • No credit card required
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}

