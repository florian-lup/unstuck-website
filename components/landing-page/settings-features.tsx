"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const patchNotes = [
  {
    title: "Game Collection",
    description: "More ways to disappoint yourself across different titles. The app comes with a preset list of supported games but you can also create and manage your own game library.",
    features: [
      "2,000 hours in one game but you're still hardstuck silver",
      "Your most played genre is 'Never Finished'"
    ],
  },
    {
    title: "Emotional Support",
    description: "Because someone needs to tell you that flash into five enemies wasn't 'worth a shot.' Think of it as tough love, except we're not sorry and you probably deserved it.",
    features: [
      "Finally, honest feedback about your gameplay",
      "The only flame that might actually help you improve",
    ],
  },
  {
    title: "Custom Keybinds",
    description: "Remap everything because default settings are 'why you're losing' (totally not your mechanics). Blame your keyboard, we support that level of delusion.",
    features: [
      "Your binds are as optimal as your KDA",
      "12-button mouse, still can't hit abilities",
    ],
  },
  {
    title: "Quick Hide Toggle",
    description: "Panic button to hide the AI coach when someone walks by. Can't let them know you need help in a game you've played for 3 years. Your secret's safe with us, champ.",
    features: [
      "Your teammates wonder why you suddenly got good",
      "That panic button when mom walks in"
    ],
  },
  {
    title: "Draggable Chat Window",
    description: "Drag the overlay anywhere, you'll spend 20 minutes positioning this perfectly and still lose the next match. At least something in your gaming setup will be optimized.",
    features: [
      "The only thing you're positioning correctly",
      "Finally, a skill you can master"
    ],
  },
  {
    title: "Transparency Controls",
    description: "Make the AI advice invisible so you can gaslight yourself into thinking you're naturally talented. Spoiler alert: your teammates can still see you running it down mid.",
    features: [
      "Set to 0% so you can pretend you're naturally good",
      "Your ego is the only thing less transparent",
    ],
  },
];

export function SettingsFeatures() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4 text-sm font-medium">
            Patch Notes
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
            Features you didn&apos;t ask for, and definitely not needed
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tons of customization options to actually help you improve. Too bad we can&apos;t fix your decision-making, but we&apos;re working on it.
          </p>
        </div>

        {/* Patch Notes Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full max-w-[90%] mx-auto"
        >
          <CarouselContent className="-ml-4">
            {patchNotes.map((patch, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-[30%]">
                <Card 
                  className="bg-card/50 relative overflow-hidden border-none group hover:bg-card/70 transition-colors h-full flex flex-col"
                >
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="font-semibold text-xl mb-4">{patch.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {patch.description}
                      </p>

                      {/* Features List */}
                      <div className="pt-2 border-t border-border/50 mt-auto">
                        <ul className="space-y-2">
                          {patch.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

