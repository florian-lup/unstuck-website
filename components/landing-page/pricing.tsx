import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for casual gamers getting started",
    badge: null,
    features: [
      "50 AI queries per day",
      "Basic chat mode",
      "Community support",
      "All supported games",
      "Regular updates",
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Unlimited power for serious gamers",
    badge: "Popular",
    features: [
      "Unlimited AI queries",
      "All advanced modes (builds, guides, lore, troubleshooting)",
      "Priority support",
      "Early access to new features",
      "Custom overlay themes",
      "No ads",
    ],
    cta: "Upgrade to Pro",
    variant: "default" as const,
  },
];

export function Pricing() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready for unlimited power
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.badge ? 'border-2 border-primary' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default">{plan.badge}</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-muted-foreground">/month</span>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include access to our core features. Cancel anytime, no questions asked.
        </p>
      </div>
    </section>
  );
}