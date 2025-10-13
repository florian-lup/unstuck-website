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
      queries: "150 lifetime",
      voiceChat: "60",
      agents: false,
      models: "Cost efficient",
      tokens: "Limited",
    },
  },
  {
    name: "Community",
    price: "£7",
    priceDetail: "/ month",
    features: {
      overlay: true,
      queries: "300 per month",
      voiceChat: "150",
      agents: false,
      models: "Smart",
      tokens: "Limited",
    },
  },
  {
    name: "Pro",
    price: "£15",
    priceDetail: "/ month",
    features: {
      overlay: true,
      queries: "Unlimited",
      voiceChat: "Unlimited",
      agents: true,
      models: "Reasoning",
      tokens: "Unlimited",
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
    <section className="container mx-auto px-6 py-20">
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

        {/* Pricing Layout: Table + Loser Card */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch items-start">
          {/* Mobile Cards (visible only on mobile) */}
          <div className="flex-1 w-full md:hidden space-y-4">
            {plans.map((plan, index) => (
              <Card key={index} className={`${index === 1 ? 'border-2 border-primary' : ''}`}>
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
                    {index === 2 && (
                      <Badge variant="secondary" className="text-xs">
                        Coming Soon
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
          </div>

          {/* Pricing Table (hidden on mobile) */}
          <div className="hidden md:block flex-1 w-full overflow-hidden">
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
            <div className="grid grid-cols-4 border-b border-border/50">
              <div className="p-4">
                <h4 className="text-xl font-bold">Features</h4>
              </div>
              <div className="p-4 flex items-center justify-center">
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  <Download className="size-3 mr-1" />
                  Download
                </Button>
              </div>
              <div className="p-4 flex items-center justify-center">
                <Badge variant="default" className="text-xs">
                  Popular
                </Badge>
              </div>
              <div className="p-4 flex items-center justify-center">
                <Badge variant="secondary" className="text-xs">
                  Coming Soon
                </Badge>
              </div>
            </div>

            {/* Feature Rows */}
            {featureRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 border-b border-border/50">
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
          <Card className="w-full lg:w-80 shrink-0 border-2 border-muted lg:self-stretch">
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
