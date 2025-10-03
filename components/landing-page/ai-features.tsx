import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    badge: "AI Chat",
    title: "Smart Chat",
    description: "Natural conversations with AI that understands your game context and questions.",
    className: "md:col-span-1",
  },
  {
    badge: "Context",
    title: "Always up to date",
    description: "Searches multiple sources on the web for the most up to date information on your game.",
    className: "md:col-span-1",
  },
  {
    badge: "Support",
    title: "Multilingual Support",
    description: "Chat in your preferred language with support for 50+ languages.",
    className: "md:col-span-1",
  },
];

export function AiFeatures() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
              Tryhard results. Zero tryharding.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
              Boosting you harder than your best friends ever did.
            </p>
          </div>

          {/* Benefits Bento Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                return (
                  <Card 
                    key={index} 
                    className={`${benefit.className} bg-background/50 relative overflow-hidden`}
                  >
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: "url('/grid-background.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                    <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
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