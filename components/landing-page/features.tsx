import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Hammer, BookOpen, Scroll, Wrench } from "lucide-react";

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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Powerful Features for Every Gamer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From casual to competitive, Unstuck adapts to your needs with specialized AI modes
          </p>
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