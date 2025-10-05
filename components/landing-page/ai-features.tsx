"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const benefits = [
  {
    badge: "AI Chat",
    title: "Smart Chat",
    description: "Natural conversations with AI that understands your game context and questions. Get personalized answers tailored to your playstyle and current progress.",
    className: "md:col-span-1",
  },
  {
    badge: "Context",
    title: "Always up to date",
    description: "Searches multiple sources on the web for the most up to date information. Real-time data from wikis, patch notes, and community guides.",
    className: "md:col-span-1",
  },
  {
    badge: "Support",
    title: "Multilingual Support",
    description: "Chat in your preferred language with support for 50+ languages. Break language barriers and get help in the language you're most comfortable with.",
    className: "md:col-span-1",
  },
];

const conversations = [
  {
    userQuery: "What's the best early game weapon for a strength build in Elden Ring?",
    assistantResponse: (
      <div className="space-y-4 px-4">
        <p className="text-sm leading-relaxed">
          For an <span className="font-semibold">early strength build</span>, the <span className="font-semibold">Greatsword</span> (also known as &quot;Guts&apos; sword&quot;) is the ultimate choice for massive damage output:
        </p>
        
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">•</span>
            <div className="text-sm">
              <span className="font-medium">Location:</span> Found in a chest on a carriage in Caelid, northeast of the Warmaster&apos;s Shack. You can grab it at any level by sneaking past enemies.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">•</span>
            <div className="text-sm">
              <span className="font-medium">Requirements:</span> 31 STR / 12 DEX, but can be two-handed at 21 STR (with a 1.5x multiplier).
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">•</span>
            <div className="text-sm">
              <span className="font-medium">Benefits:</span> Incredible stagger potential, wide swings for crowd control, and scales excellently with Heavy affinity for pure STR builds.
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          If you&apos;re looking for something earlier, the <span className="font-semibold">Claymore</span> in Castle Morne (Weeping Peninsula) is more accessible with lower requirements (16 STR / 13 DEX) and has a versatile moveset perfect for learning enemy patterns.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Pro tip: Pair either weapon with the <span className="font-semibold">Lion&apos;s Claw</span> Ash of War for maximum poise damage and combo potential against tough bosses.
        </p>
      </div>
    )
  },
  {
    userQuery: "Quelle est la meilleure build pour Geralt dans The Witcher 3?",
    assistantResponse: (
      <div className="space-y-4 px-4">
        <p className="text-sm leading-relaxed">
          Pour une <span className="font-semibold">build optimale dans The Witcher 3</span>, je recommande une approche hybride <span className="font-semibold">Combat/Signes</span> qui maximise votre efficacité :
        </p>
        
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">1.</span>
            <div className="text-sm">
              <span className="font-medium">Compétences Essentielles :</span> Investissez dans Attaque Rapide (5/5), Coups Précis et Tourbillon. Ces talents augmentent significativement vos dégâts en combat rapproché.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">2.</span>
            <div className="text-sm">
              <span className="font-medium">Signes Clés :</span> Maximisez Quen (bouclier) pour la survivabilité et Igni (feu) pour les dégâts de zone. La variante Quen régénère votre santé quand vous absorbez des dégâts.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">3.</span>
            <div className="text-sm">
              <span className="font-medium">Équipement :</span> Forgez l&apos;armure de l&apos;École du Chat pour les bonus de dégâts critiques, ou l&apos;École du Griffon si vous préférez une approche orientée Signes.
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold">Mutations recommandées :</span> Avec le DLC Blood and Wine, débloquez &quot;Euphorie&quot; qui augmente vos dégâts basés sur votre niveau de Toxicité. Combinez avec des décoctions pour des bonus massifs.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          N&apos;oubliez pas d&apos;utiliser les <span className="font-semibold">huiles</span> appropriées sur vos lames et de préparer les bonnes <span className="font-semibold">potions</span> avant les combats difficiles. La préparation est la clé du succès d&apos;un sorceleur.
        </p>
      </div>
    )
  },
  {
    userQuery: "¿Cuál es la mejor build para Karlach en Baldur's Gate 3?",
    assistantResponse: (
      <div className="space-y-4 px-4">
        <p className="text-sm leading-relaxed">
          Para maximizar el potencial de <span className="font-semibold">Karlach</span>, la mejor opción es mantenerla como <span className="font-semibold">Bárbara pura</span> o hacer multiclase con Guerrero:
        </p>
        
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">1.</span>
            <div className="text-sm">
              <span className="font-medium">Subclase:</span> Elige Bárbara del Corazón Salvaje en nivel 3. Su habilidad de Hablar con Animales es útil, pero Oso funciona mejor para tanqueo.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">2.</span>
            <div className="text-sm">
              <span className="font-medium">Multiclase Óptima:</span> Bárbara 8 / Guerrero 4 te da Action Surge para más ataques y un ASI adicional. Toma el estilo de lucha Gran Arma.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">3.</span>
            <div className="text-sm">
              <span className="font-medium">Equipo Clave:</span> Usa el Hacha de Sangre de Lathander y la Armadura Infernal para aprovechar su resistencia al fuego natural.
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold">Hazañas recomendadas:</span> Prioriza Maestro en Armas Grandes (GWM) en nivel 4, luego aumenta Fuerza a 20. Su habilidad de Furia Frenética le da ataques bonus consistentes.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          En combate, activa Furia primero, luego usa Golpe Imprudente para conseguir ventaja en todos los ataques. Su alto HP y resistencia al daño hacen que el penalty de CA sea negligible.
        </p>
      </div>
    )
  },
  {
    userQuery: "Jak zdobyć najlepszy pancerz w Cyberpunk 2077?",
    assistantResponse: (
      <div className="space-y-4 px-4">
        <p className="text-sm leading-relaxed">
          W <span className="font-semibold">Cyberpunk 2077</span>, najlepszy pancerz zależy od twojego buildu, ale oto <span className="font-semibold">najskuteczniejsze zestawy</span>:
        </p>
        
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">1.</span>
            <div className="text-sm">
              <span className="font-medium">Zestaw Arasaki:</span> Dostępny w Dogtown (DLC Phantom Liberty). Oferuje najwyższy poziom ochrony i bonusy do Reflex. Idealny dla buildów Netrunner i Solo.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">2.</span>
            <div className="text-sm">
              <span className="font-medium">Legendary Corpo Suit:</span> Można kupić od Jinguji w centrum. Świetne bonusy do Cool i Technical Ability. Wygląda profesjonalnie i ma wysokie sloty na mody.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground text-sm">3.</span>
            <div className="text-sm">
              <span className="font-medium">Zestaw Johnny&apos;ego:</span> Zbierz wszystkie części z questów związanych z Silverhandem. Daje unikalny buff do Critical Damage i pasuje do Rockerboy buildu.
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold">Najważniejsze mody:</span> Dodaj Armadillo mody do każdego slotu dla maksymalnej obrony. Po patch 2.0 system pancerzy został przeprojektowany - teraz możesz nosić co chcesz i używać transmog.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Pamiętaj, że <span className="font-semibold">Cyberware</span> jest równie ważne co pancerz. Zainwestuj w dobry Subdermal Armor i Pain Editor dla dodatkowej survivability w trudniejszych walkach.
        </p>
      </div>
    )
  }
];

export function AiFeatures() {
  const [userText, setUserText] = useState("");
  const [showAssistant, setShowAssistant] = useState(false);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  
  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let assistantTimeout: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const currentConversation = conversations[currentConversationIndex];

    const typeWriter = () => {
      if (currentIndex < currentConversation.userQuery.length) {
        setUserText(currentConversation.userQuery.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimeout = setTimeout(typeWriter, 30);
      } else {
        // Show assistant message after typing is complete
        assistantTimeout = setTimeout(() => {
          setShowAssistant(true);
          // Reset after showing assistant message for a while
          resetTimeout = setTimeout(() => {
            setUserText("");
            setShowAssistant(false);
            currentIndex = 0;
            // Move to next conversation
            setCurrentConversationIndex((prev) => (prev + 1) % conversations.length);
          }, 2000);
        }, 500);
      }
    };

    typeWriter();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(assistantTimeout);
      clearTimeout(resetTimeout);
    };
  }, [currentConversationIndex]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-right mb-12">
            <div className="flex justify-end mb-4">
              <Badge variant="default" className="text-sm font-medium">
                The Buff
              </Badge>
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
              Boosting you harder than your best friends ever did
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl ml-auto">
              If excuses were damage, you&apos;d break records. Get carried by AI so good, people will think you finally touched grass and learned to play. Spoiler: you didn&apos;t.
            </p>
          </div>

          {/* Features Layout */}
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left side - stacked features */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 border rounded-lg p-2">
                {benefits.map((benefit, index) => {
                  return (
                    <Card 
                      key={index} 
                      className="bg-background/50 relative overflow-hidden border-0"
                    >
                      <CardContent className="h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-xl">{benefit.title}</h3>
                            <Badge variant="secondary" className="text-xs font-medium">
                              {benefit.badge}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* Right side - chat message area */}
              <div className="w-full md:w-1/2 bg-background/50 rounded-lg border relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-50 pointer-events-none"
                  style={{
                    backgroundImage: "url('/grid-background.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                />
                {/* Chat content area */}
                <div className="relative z-10 p-8 h-full overflow-y-auto"
                     style={{ 
                       scrollbarWidth: 'none',
                       msOverflowStyle: 'none'
                     } as React.CSSProperties & { msOverflowStyle?: string }}>
                  
                  {/* User Query with Typewriter Effect */}
                  {userText && (
                    <div className="mb-4 px-4 py-2 rounded-md bg-background/30">
                      <p className="text-sm text-muted-foreground">
                        {userText}
                      </p>
                    </div>
                  )}

                  {/* Divider */}
                  {showAssistant && <div className="h-px mb-4 bg-border/50" />}

                  {/* AI Response */}
                  {showAssistant && conversations[currentConversationIndex].assistantResponse}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}