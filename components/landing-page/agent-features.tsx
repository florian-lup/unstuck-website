"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const agents = [
  {
    name: "Builds",
    badge: "Meta",
    description: "Get optimized builds, skill trees, and stat distributions tailored to your playstyle. Whether you're min-maxing for endgame content or just trying to survive the tutorial, we've got the perfect build for you.",
    highlight: "Stop theorycrafting like it's 2009",
  },
  {
    name: "Guides",
    badge: "Walkthroughs",
    description: "Step-by-step guides, collectibles, and progression tips for every quest and mission. From hidden achievements to secret areas, never miss a thing or get lost in another confusing dungeon again.",
    highlight: "Skip the 10-minute YouTube intro",
  },
  {
    name: "Lore",
    badge: "Deep Dive",
    description: "Explore game stories, character backgrounds, and world-building details you definitely missed. Understand the plot twists and impress your friends with obscure knowledge they don't care about.",
    highlight: "RP like nobody's watching",
  },
  {
    name: "Troubleshooting",
    badge: "Fix It",
    description: "Solve bugs, crashes, and technical issues fast with practical solutions. From performance optimization to mod conflicts, get back to gaming instead of reading ancient forum posts from 2015.",
    highlight: "Yes, it's probably your drivers",
  },
];

export function AgentFeatures() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-16">
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
            Four specialized AI agents ready to be your friends. Each one optimized to handle specific tasks so you can finally pretend to know what you&apos;re doing.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => {
            return (
              <Card 
                key={index} 
                className="bg-card/50 relative overflow-hidden border-none group p-0"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Name and Badge */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-xl">{agent.name}</h3>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {agent.badge}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {agent.description}
                    </p>

                    {/* Highlight */}
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-primary/50 font-medium">
                        {agent.highlight}
                      </p>
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

