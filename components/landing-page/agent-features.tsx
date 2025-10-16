"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const agents = [
  {
    name: "Builds",
    badge: "Meta",
    description:
      "Get optimized builds, skill trees, and stat distributions. Whether you're min-maxing for endgame content or just trying to survive the tutorial, we're here to save you from that 200 IQ big-brain theory.",
    highlight: "Stop theorycrafting like it's 2009",
  },
  {
    name: "Guides",
    badge: "Walkthroughs",
    description:
      "Step-by-step guides and progression tips, from hidden achievements to secret areas. Because you've been wandering in circles for 40 minutes looking for that one quest item. Just ask for help already.",
    highlight: "Skip the 10-minute YouTube intro",
  },
  {
    name: "Lore",
    badge: "Deep Dive",
    description:
      "Explore game stories, character backgrounds, and world-building details you definitely missed. Understand the plot twists and impress your friends with obscure knowledge they don't care about.",
    highlight: "RP like nobody's watching",
  },
  {
    name: "Troubleshooting",
    badge: "Fix It",
    description:
      "Before you blame the devs, try updating those drivers you've been ignoring for six months. We'll walk you through basic PC maintenance and game settings your 'setup' desperately needs.",
    highlight: "Yes, it's probably your drivers",
  },
];

export function AgentFeatures() {
  return (
    <section className="container mx-auto px-6 xl:px-10 py-20">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <Badge variant="default" className="mb-4 text-sm font-medium">
            Agents
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
            Not the team you want, but the team you need
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl">
            Four specialized AI agents ready to be your friends. Each one optimized to handle
            specific tasks so you can finally pretend to know what you&apos;re doing.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => {
            return (
              <Card
                key={index}
                className="bg-card/50 relative overflow-hidden border-none group p-0 hover:bg-card/70 transition-colors h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-col flex-1">
                    {/* Name and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-xl">{agent.name}</h3>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {agent.badge}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {agent.description}
                    </p>

                    {/* Highlight */}
                    <div className="pt-2 border-t border-border/50 mt-auto">
                      <p className="text-xs text-primary/50 font-medium">{agent.highlight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
