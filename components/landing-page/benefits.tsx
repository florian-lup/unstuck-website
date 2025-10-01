import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    badge: "AI Chat",
    title: "Smart Chat",
    description: "Natural conversations with AI that understands your game context and questions.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    badge: "Builds",
    title: "Build Guides",
    description: "Get optimal character builds, skill trees, and equipment recommendations instantly.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    badge: "Support",
    title: "Troubleshooting",
    description: "Quick solutions for bugs, technical issues, and game configuration problems.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    badge: "Global",
    title: "Multilingual Support",
    description: "Chat in your preferred language with support for 50+ languages.",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function Benefits() {
  return (
    <section className="py-16 md:py-16 lg:px-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
              Tryhard results. Zero tryharding.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
              Built by gamers, for gamers. Every feature designed to enhance your experience
            </p>
          </div>

          {/* Benefits Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:auto-rows-fr">
            {benefits.map((benefit, index) => {
              return (
                <Card key={index} className={`${benefit.className} bg-background`}>
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <Badge variant="default" className="text-sm font-medium">
                        {benefit.badge}
                      </Badge>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
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