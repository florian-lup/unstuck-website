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
    description: "Track your entire gaming library in one place. Automatically syncs with your favorite platforms and keeps your game list organized. Because remembering what you own is apparently too hard now.",
    features: [
      "Auto-sync with Steam, Epic, GOG, and more",
      "Custom tags and categories",
      "Play time tracking and statistics",
      "Quick search and filter options"
    ],
  },
  {
    title: "Custom Keybinds",
    description: "Rebind every hotkey to match your playstyle (or your weird ESDF setup). Full keyboard and mouse support with conflict detection. Your muscle memory, your rules.",
    features: [
      "Fully customizable shortcuts",
      "Conflict detection and warnings",
      "Import/export key profiles",
      "Mouse button bindings"
    ],
  },
  {
    title: "Quick Hide Toggle",
    description: "Instantly hide or show the chat window with a keybind. Perfect for those moments when you need full screen clarity or when your teammates ask what that window is.",
    features: [
      "Customizable toggle hotkey",
      "Smooth fade animations",
      "Remembers last state",
      "Independent from overlay visibility"
    ],
  },
  {
    title: "Draggable Chat Window",
    description: "Move the chat window anywhere on your screen because one size doesn't fit all. Position it wherever your eyes naturally go, or wherever it blocks the least amount of enemies trying to kill you.",
    features: [
      "Click and drag to reposition",
      "Remembers your preferred position",
      "Snap to screen edges",
      "Multi-monitor support"
    ],
  },
  {
    title: "Transparency Controls",
    description: "Adjust overlay opacity from 0-100% so you can see the game behind the thing telling you how to play the game. Peak modern gaming experience, really.",
    features: [
      "Per-window transparency settings",
      "Quick opacity hotkey",
      "Auto-hide in fullscreen",
      "Background blur options"
    ],
  },
];

export function SettingsFeatures() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4 text-sm font-medium">
            Patch Notes
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
            Features you didn&apos;t ask for, but definitely needed
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We&apos;ve been cooking. From game libraries to keybinds, every setting you need to customize your experience. Because default settings are for casuals.
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
                  className="bg-card/50 relative overflow-hidden border-none group hover:bg-card/70 transition-colors h-full"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="font-semibold text-xl">{patch.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {patch.description}
                      </p>

                      {/* Features List */}
                      <div className="pt-2 border-t border-border/50">
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

