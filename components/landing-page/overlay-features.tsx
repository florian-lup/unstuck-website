import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { UnstuckApp } from "../app/unstuck-demo";

const features = [
  {
    title: "Voice & Text Chat",
    description:
      "Get fast, concise answers without interrupting your gameplay flow or pausing the action. Ask questions mid-combat, during cutscenes, or while speed-running—get answers in seconds. No more dying while you Google basic mechanics.",
  },
  {
    title: "Performance Optimized",
    description:
      "Minimal RAM and CPU usage ensures smooth gaming with no frame drops, stuttering, or performance impact. Built to run alongside even the most demanding games unlike your browser with 17 tabs open, this actually runs efficiently.",
  },
  {
    title: "No Alt-Tabbing Required",
    description:
      "Stay in the game and use the transparent overlay while playing without losing focus or minimizing your window. Keep your eyes where they belong—on the boss fight. Stop pretending you 'lagged out' when you were reading a wiki.",
  },
];

export function OverlayFeatures() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <Badge variant="default" className="mb-4 text-sm font-medium">
            Playground
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
            Can&apos;t install skill? We can patch what you already have
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl">
            One cooldown for all your problems. Stop getting clapped and start learning the boss
            mechanics—ask mid-fight, get fast answers, no alt-tabbing through 10 web pages.
          </p>
        </div>

        {/* Fantasy Landscape with App Demo Overlay */}
        <div className="flex justify-center mb-12">
          <div
            className="relative rounded-xl overflow-hidden w-full bg-cover bg-center flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/fantasy-landscape.svg')",
              minHeight: "600px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <UnstuckApp />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {features.map((feature, index) => {
            return (
              <Accordion
                key={index}
                type="single"
                collapsible
                defaultValue={`item-${index}`}
                className="px-4 w-full"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-semibold">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {feature.description}
                  </AccordionContent>
                  <Separator className="mt-4" />
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
