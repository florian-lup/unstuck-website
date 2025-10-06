"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Loser 🤷",
    price: "$0",
    description: "For those who insist on using a browser",
    badge: null,
    badgeVariant: "secondary" as const,
    features: [
      "Alt-tab out of your game constantly",
      "Miss crucial moments while typing",
      "No overlay integration (obviously)",
      "Manually copy-paste everything",
      "Get wrecked while reading guides",
      "Your teammates judging you",
    ],
  },
  {
    name: "Free",
    price: "$0",
    description: "Perfect for casual gamers getting started",
    badge: null,
    badgeVariant: "default" as const,
    features: [
      "50 AI queries per day",
      "Basic chat mode",
      "Community support",
      "All supported games",
      "Regular updates",
    ],
  },
  {
    name: "Community",
    price: "$4.99",
    description: "For engaged gamers who want more",
    badge: "Popular",
    badgeVariant: "default" as const,
    features: [
      "200 AI queries per day",
      "Advanced chat mode",
      "Priority community support",
      "All supported games",
      "Beta feature access",
      "Custom keybinds",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Unlimited power for serious gamers",
    badge: "Coming Soon",
    badgeVariant: "secondary" as const,
    features: [
      "Unlimited AI queries",
      "All advanced modes (builds, guides, lore, troubleshooting)",
      "Priority support",
      "Early access to new features",
      "Custom overlay themes",
      "No ads",
    ],
  },
];

export function Pricing() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Don&apos;t be the reason for the surrender vote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready to help maintain our spaghetti code
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.badge && plan.name !== "Loser" && plan.name !== "Pro" ? 'border-2 border-primary' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant={plan.badgeVariant}>{plan.badge}</Badge>
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
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Cancel anytime, no questions asked. Respawn not included.
        </p>
      </div>
    </section>
  );
}