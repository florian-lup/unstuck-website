"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, X, Download } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    priceDetail: "",
    features: {
      overlay: true,
      queries: "60",
      voiceChat: "30",
      agents: false,
      models: "Cost efficient",
      tokens: "Limited",
    },
  },
  {
    name: "Community",
    price: "$10",
    priceDetail: "/ month",
    features: {
      overlay: true,
      queries: "Unlimited",
      voiceChat: "100 / month",
      agents: "Coming Soon",
      models: "Smart",
      tokens: "Limited",
    },
  },
];

const loserPlan = {
  name: "Loser",
  price: "$0",
  description: "For those who insist on using a browser",
  features: [
    "Alt-tab out of your game constantly",
    "Spend hours reading wikis and how to's",
    "Browser eating RAM like it's a buffet",
    "Only one language unless you translate",
    "None to trash talk you when needed",
  ],
  emoji: "🤷",
};

const featureRows = [
  { label: "In-game overlay", key: "overlay" as const },
  { label: "Queries", key: "queries" as const },
  { label: "Voice Chat", key: "voiceChat" as const },
  { label: "Agents", key: "agents" as const },
  { label: "AI models", key: "models" as const },
];

export function Pricing() {
  return (
    <section className="container mx-auto px-6 xl:px-10 py-20">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="default" className="mb-4 text-sm font-medium">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Don&apos;t be the reason for the surrender vote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready to help maintain our spaghetti code
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center max-w-6xl mx-auto">
          {/* Plan Cards */}
          {plans.map((plan, index) => (
            <Card key={index} className={`flex-1 ${index === 1 ? 'border-2 border-primary' : ''}`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">
                  {index === 0 && (
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      <Download className="size-3 mr-1" />
                      Download
                    </Button>
                  )}
                  {index === 1 && (
                    <Badge variant="default" className="text-xs">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.priceDetail && (
                    <span className="text-sm text-muted-foreground ml-1">{plan.priceDetail}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {featureRows.map((row, rowIndex) => {
                  const value = plan.features[row.key];
                  return (
                    <div key={rowIndex} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="font-medium text-sm">{row.label}</span>
                      <div className="flex items-center">
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
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}

          {/* Loser Card */}
          <Card className="flex-1 border-2 border-muted">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">{loserPlan.name}</CardTitle>
              <div className="mb-2">
                <span className="text-4xl font-bold">{loserPlan.price}</span>
              </div>
              <CardDescription>{loserPlan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <ul className="space-y-3 list-disc list-inside">
                  {loserPlan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center text-4xl pt-4">{loserPlan.emoji}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
