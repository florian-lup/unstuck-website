import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-gradient">
          A teammate that won&apos;t go AFK
        </h1>

        {/* Description */}
        <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Unstuck is a desktop AI app that runs as a transparent overlay on top of your game to
          provide fast, accurate information while you play.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center">
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            <Download className="size-5" />
            Download for Windows
          </Button>
        </div>
      </div>

      {/* Demo Video */}
      <div className="flex justify-center mt-12 w-full">
        <video
          className="rounded-xl w-full h-auto lg:h-[600px] object-contain lg:object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/unstuck-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
