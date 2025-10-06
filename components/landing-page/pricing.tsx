"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    priceDetail: "",
    features: {
      overlay: true,
      queries: "150 lifetime",
      agents: false,
      modes: "Basic chat",
      updates: true,
      keybinds: false,
    },
  },
  {
    name: "Community",
    price: "$4.99",
    priceDetail: "/ month",
    features: {
      overlay: true,
      queries: "300 per month",
      agents: false,
      modes: "Advanced chat",
      updates: true,
      keybinds: true,
    },
  },
  {
    name: "Pro",
    price: "$9.99",
    priceDetail: "/ month",
    features: {
      overlay: true,
      queries: "Unlimited",
      agents: true,
      modes: "All modes",
      updates: true,
      keybinds: true,
    },
  },
];

const loserPlan = {
  name: "Loser 🤷",
  price: "$0",
  description: "For those who insist on using a browser",
  features: [
    "Alt-tab out of your game constantly",
    "Miss crucial moments while typing",
    "No overlay integration (obviously)",
    "Manually copy-paste everything",
    "Get wrecked while reading guides",
    "Your teammates judging you",
  ],
};

const featureRows = [
  { label: "In-game overlay", key: "overlay" as const },
  { label: "AI queries", key: "queries" as const },
  { label: "Agents", key: "agents" as const },
  { label: "Game modes", key: "modes" as const },
  { label: "Regular updates", key: "updates" as const },
  { label: "Custom keybinds", key: "keybinds" as const },
];

export function Pricing() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="default" className="mb-4 text-sm font-medium">Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Don&apos;t be the reason for the surrender vote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Start free and upgrade when you&apos;re ready to help maintain our spaghetti code
          </p>
        </div>

        {/* Pricing Layout: Table + Loser Card */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Pricing Table */}
          <div className="flex-1 w-full overflow-hidden">
            {/* Plan Headers */}
            <div className="grid grid-cols-4">
              <div className="p-6"></div>
              {plans.map((plan, index) => (
                <div key={index} className="p-4 text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div>
                    <span className="text-xl font-semibold">{plan.price}</span>
                    {plan.priceDetail && (
                      <span className="text-sm text-muted-foreground">{plan.priceDetail}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Features Header */}
            <div className="p-4 border-b">
              <h4 className="text-xl font-bold">Features</h4>
            </div>

            {/* Feature Rows */}
            {featureRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className="grid grid-cols-4 border-b"
              >
                <div className="p-4 font-medium">{row.label}</div>
                {plans.map((plan, planIndex) => {
                  const value = plan.features[row.key];
                  return (
                    <div key={planIndex} className="p-4 flex items-center justify-center">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="size-5 text-primary" />
                        ) : (
                          <X className="size-5 text-muted-foreground" />
                        )
                      ) : (
                        <span className="text-sm">{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Loser Card */}
          <Card className="w-full lg:w-80 shrink-0 border-2 border-muted">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">{loserPlan.name}</CardTitle>
              <div className="mb-2">
                <span className="text-4xl font-bold">{loserPlan.price}</span>
              </div>
              <CardDescription>{loserPlan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {loserPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="size-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}