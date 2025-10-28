import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CreditsCTA() {
  return (
    <section className="container mx-auto px-6 xl:px-10 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Credits Card */}
        <div className="text-center mx-auto">
          {/* Heading */}
          <div className="border-b border-primary">
            <h2 className="text-2xl font-semibold md:text-4xl mb-5 text-gradient">
              Duct-taped together by sleep-deprived speedrunners for the trash gaming community
            </h2>
          </div>

          {/* CTA Button and Info */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="sm" className="gap-2 text-sm" asChild>
              <a href="/api/download">
                <Download className="size-4" />
                Download Unstuck
              </a>
            </Button>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground">Windows • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
