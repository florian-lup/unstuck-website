import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { UnstuckApp } from "../app/unstuck-demo";

const features = [
  {
    title: "Lightning Fast",
    description: "Get instant, concise answers without interrupting your gameplay flow. No more dying while you Google basic mechanics like a noob. Your teammates won't even know you needed help.",
  },
  {
    title: "Performance Optimized",
    description: "Minimal RAM and CPU usage ensures smooth gaming with no frame drops. Unlike your browser with 47 tabs open, this actually runs efficiently. No excuses for playing badly anymore.",
  },
  {
    title: "No Alt-Tabbing Required",
    description: "Stay in the game and use the transparent overlay while playing without losing focus. Stop pretending you 'lagged out' when you were really reading a wiki. We know what you were doing.",
  },
];

export function OverlayFeatures() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 pt-32 pb-16 md:py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <Badge variant="default" className="mb-4 text-sm font-medium">
            Playground
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
            You can&apos;t install skill, but we can patch what you already have
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-4xl">
            The transparent in-game copilot—ask mid-fight, get fast answers, no alt-tab. Stop getting clapped because you forgot the boss rotation. Git gud, but let AI do the heavy lifting while you focus on not embarrassing yourself.
          </p>
        </div>

        {/* Fantasy Landscape with App Demo Overlay */}
        <div className="flex justify-center mb-12">
          <div 
            className="relative rounded-xl overflow-hidden w-full bg-cover bg-center flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
            style={{ 
              backgroundImage: "url('/fantasy-landscape.svg')", 
              minHeight: '600px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <UnstuckApp />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {features.map((feature, index) => {
            return (
              <Accordion key={index} type="single" collapsible defaultValue={`item-${index}`} className="px-4 w-full">
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