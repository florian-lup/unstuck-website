import { Card, CardContent } from "@/components/ui/card";
import { Zap, Cpu, Gamepad2, Languages } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant, concise answers without interrupting your gameplay flow.",
  },
  {
    icon: Cpu,
    title: "Performance Optimized",
    description: "Minimal RAM and CPU usage ensures smooth gaming with no frame drops.",
  },
  {
    icon: Gamepad2,
    title: "Stay in the Game",
    description: "No alt-tabbing required. Use the transparent overlay while playing.",
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