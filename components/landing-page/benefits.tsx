import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Hammer, BookOpen, Scroll, Wrench, Languages } from "lucide-react";

const benefits = [
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
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Chat in your preferred language with support for 50+ languages.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why Gamers Choose Unstuck
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built by gamers, for gamers. Every feature designed to enhance your experience
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}