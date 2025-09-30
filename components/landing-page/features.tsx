import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Hammer, BookOpen, Scroll, Wrench } from "lucide-react";
import { UnstuckApp } from "../app/unstuck-app";

const features = [
  {
    icon: MessageSquare,
    title: "Smart Chat",
    description: "Natural conversations with AI that understands your game context and questions.",
  },
  {
    icon: Hammer,
    title: "Build Guides",
    description: "Get optimal character builds, skill trees, and equipment recommendations instantly.",
  },
  {
    icon: BookOpen,
    title: "Strategy Guides",
    description: "Learn winning strategies, tactics, and gameplay tips from expert knowledge.",
  },
  {
    icon: Scroll,
    title: "Lore & Story",
    description: "Explore deep lore, character backstories, and world-building without spoilers.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Quick solutions for bugs, technical issues, and game configuration problems.",
  },
];

export function Features() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-15 pt-32 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
            Powerful Features for Every Gamer
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
            From casual to competitive, Unstuck adapts to your needs with specialized AI modes
          </p>
        </div>

        {/* Fantasy Landscape with App Demo Overlay */}
        <div className="flex justify-center mb-12">
          <div className="relative rounded-xl overflow-hidden w-full max-h-[600px]">
            <img
              src="/fantasy-landscape.svg"
              alt="Fantasy Landscape"
              className="w-full h-auto"
            />
            
            {/* App Demo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <UnstuckApp />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}