import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-16">
      <div className="max-w-4xl text-left">
        {/* Heading */}
        <h1 className="text-2xl font-bold tracking-tight md:text-5xl mb-6 text-gradient">
          A teammate that won&apos;t go AFK
        </h1>

        {/* Description */}
        <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl">
          Unstuck is a desktop AI app that runs as a transparent overlay on top of your game to provide fast, accurate information while you play.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-start">
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            <Download className="size-5" />
            Download for Windows
          </Button>
        </div>
      </div>

      {/* Demo Video */}
      <div className="flex justify-center mt-12 mx-auto">
        <video
          className="rounded-xl w-full h-[600px] object-cover"
          autoPlay
          muted
          loop
          playsInline
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