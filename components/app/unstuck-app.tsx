"use client"

import {
  Gamepad2,
  Mic,
  Type,
  Menu,
  Settings,
  Info,
  Grip,
  CornerDownLeft,
  BookOpen,
  ClipboardList,
  Scroll,
  Wrench,
  RotateCcw,
  ChevronDown,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState, useRef, useEffect } from "react";

export function UnstuckApp() {
  const [activeTab, setActiveTab] = useState<"guides" | "builds" | "lore" | "troubleshooting" | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("World of Warcraft");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const games = [
    "World of Warcraft",
    "League of Legends",
    "Valorant",
    "Counter-Strike 2",
    "Dota 2"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        setPosition({ x: position.x + deltaX, y: position.y + deltaY });
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, position]);

  const handleDropdownToggle = () => {
    const newState = !isDropdownOpen;
    setIsDropdownOpen(newState);
    if (newState && isChatOpen) {
      setIsChatOpen(false);
    }
  };

  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
    setIsDropdownOpen(false);
  };

  const handleChatToggle = () => {
    if (!isChatOpen && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      ref={componentRef}
      className="w-full max-w-[624px] mx-auto flex flex-col h-[500px] gap-3 p-3 rounded-xl"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}>
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-1 py-1 rounded-full"
           style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="flex items-center gap-2">
          {/* Game Selector - Custom Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDropdownToggle}
              className="gap-2 text-gray-200 hover:text-white rounded-full border-0 min-w-[200px] justify-start border border-white/20"
              style={{ backgroundColor: 'transparent' }}>
              <Gamepad2 className="size-4" />
              <span className="text-sm">{selectedGame}</span>
              <ChevronDown className={`size-3 ml-auto ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            {isDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 rounded-xl border-0 p-1 min-w-[200px] z-50"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
                }}>
                {games.map((game) => (
                  <button
                    key={game}
                    onClick={() => handleGameSelect(game)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:!bg-white/10 hover:text-white cursor-pointer rounded-full bg-transparent"
                    style={{ backgroundColor: 'transparent' }}>
                    {game}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Speak Button */}
          <Tooltip>
            <TooltipTrigger asChild onClick={(e) => e.preventDefault()}>
              <div className="inline-block">
                <Toggle 
                  variant="default" 
                  size="sm"
                  pressed={isSpeaking}
                  onPressedChange={setIsSpeaking}
                  className="gap-1.5 text-gray-300 hover:!bg-white/10 hover:text-white data-[state=on]:!bg-red-500/20 rounded-full px-3 bg-transparent [&[data-state=on]>svg]:text-red-400 [&[data-state=on]>span]:text-white">
                  <Mic className="size-4" />
                  <span className="text-sm">Speak</span>
                </Toggle>
              </div>
            </TooltipTrigger>
            <TooltipContent 
              side="bottom"
              sideOffset={8}
              className="!bg-transparent border-0 rounded-lg text-white text-xs backdrop-blur-md [&_svg]:!hidden [&>*]:last:!hidden"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 1) !important',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(8px)'
              }}>
              <span>Voice Chat Coming Soon</span>
            </TooltipContent>
          </Tooltip>
          
          {/* Chat Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="gap-1.5 text-gray-300 hover:!bg-white/10 hover:text-white rounded-full px-3 bg-transparent"
            onClick={handleChatToggle}>
            <Type className="size-4" />
            <span className="text-sm">Chat</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="h-6 w-px mx-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
          <Button 
            variant="ghost" 
            size="icon"
            className="size-8 text-gray-300 hover:!bg-white/10 hover:text-white rounded-full bg-transparent">
            <Menu className="size-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="size-8 text-gray-300 hover:!bg-white/10 hover:text-white rounded-full bg-transparent">
            <Settings className="size-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="size-8 text-gray-300 hover:!bg-white/10 hover:text-white rounded-full bg-transparent">
            <Info className="size-4" />
          </Button>
          <div className="h-6 w-px mx-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
          <Button 
            variant="ghost" 
            size="icon"
            onMouseDown={handleDragStart}
            className="size-8 text-gray-300"
            style={{ backgroundColor: 'transparent', cursor: 'grab' }}>
            <Grip className="size-4" />
          </Button>
        </div>
      </div>
{/*Chat Interface*/}
      {isChatOpen && (
        <>
      {/* Secondary Navigation - Tabs */}
      <div className="flex items-center justify-between px-2 py-1 rounded-full"
           style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="flex items-center gap-1">
          <Toggle 
            variant="default" 
            size="sm"
            className="gap-1.5 text-gray-300 hover:bg-white/10 hover:text-gray-300 data-[state=on]:bg-white/10 data-[state=on]:text-white rounded-full px-3"
            pressed={activeTab === "guides"}
            onPressedChange={(pressed) => setActiveTab(pressed ? "guides" : null)}>
            <BookOpen className="size-4" />
            <span className="text-sm">Guides</span>
          </Toggle>
          <Toggle 
            variant="default" 
            size="sm"
            className="gap-1.5 text-gray-300 hover:bg-white/10 hover:text-gray-300 data-[state=on]:bg-white/10 data-[state=on]:text-white rounded-full px-3"
            pressed={activeTab === "builds"}
            onPressedChange={(pressed) => setActiveTab(pressed ? "builds" : null)}>
            <ClipboardList className="size-4" />
            <span className="text-sm">Builds</span>
          </Toggle>
          <Toggle 
            variant="default" 
            size="sm"
            className="gap-1.5 text-gray-300 hover:bg-white/10 hover:text-gray-300 data-[state=on]:bg-white/10 data-[state=on]:text-white rounded-full px-3"
            pressed={activeTab === "lore"}
            onPressedChange={(pressed) => setActiveTab(pressed ? "lore" : null)}>
            <Scroll className="size-4" />
            <span className="text-sm">Lore</span>
          </Toggle>
          <Toggle 
            variant="default" 
            size="sm"
            className="gap-1.5 text-gray-300 hover:bg-white/10 hover:text-gray-300 data-[state=on]:bg-white/10 data-[state=on]:text-white rounded-full px-3"
            pressed={activeTab === "troubleshooting"}
            onPressedChange={(pressed) => setActiveTab(pressed ? "troubleshooting" : null)}>
            <Wrench className="size-4" />
            <span className="text-sm">Troubleshooting</span>
          </Toggle>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-1.5 text-gray-300 hover:text-white"
          style={{ backgroundColor: 'transparent' }}>
          <RotateCcw className="size-4" />
          <span className="text-sm">New Chat</span>
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 rounded-xl"
           style={{ 
             backgroundColor: 'rgba(0, 0, 0, 0.2)',
             scrollbarWidth: 'none',
             msOverflowStyle: 'none'
           } as React.CSSProperties & { msOverflowStyle?: string }}>
        {/* Query Display */}
        <div className="mb-4 px-4 py-2 rounded-md">
          <p className="text-gray-300 text-sm">
            stormbringer shaman elemental m+ stat priority
          </p>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Response Card */}
        <Card 
          className="border-0 shadow-none gap-4 rounded-lg"
          style={{ backgroundColor: 'transparent' }}>
          <div className="px-6">
            <div className="space-y-4">
              <div>
                <p className="text-gray-200 text-sm mb-3">
                  For <span className="font-semibold text-white">Stormbringer Elemental Shaman</span> in <span className="font-semibold text-white">Mythic+ (WoW 11.2)</span>, the <span className="font-semibold text-white">stat priority</span> is:
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-sm">1.</span>
                  <span className="text-white font-medium text-sm">Mastery</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-sm">2.</span>
                  <span className="text-white font-medium text-sm">Haste</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-sm">3.</span>
                  <span className="text-white font-medium text-sm">Critical Strike</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-sm">4.</span>
                  <span className="text-white font-medium text-sm">Versatility</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Mastery is the most valuable secondary stat because it significantly boosts your elemental damage output. Haste follows, improving your cast speed and resource generation. Critical Strike is next, favored especially for AoE and Stormbringer synergy, and Versatility is last but still useful for overall damage and survivability.
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                This priority differs from Enhancment Stormbringer, which prioritizes Haste first, then Mastery, Critical Strike, and Versatility.
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                Additional minor stats like Avoidance and Leech have some value but are secondary to the main four.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Input Area */}
      <div className="px-1 py-1 rounded-full"
           style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="relative flex items-center gap-2">
          <Input 
            placeholder="Ask about your game..."
            className="pr-20 border-0 text-white placeholder:text-gray-300 rounded-full bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            style={{ 
              backgroundColor: 'transparent',
              boxShadow: 'none',
              outline: 'none'
            }}
          />
          <div className="absolute right-2 flex items-center gap-1">
            <Button 
              size="icon"
              variant="ghost"
              className="size-7 rounded-full text-gray-400 hover:!bg-white/10 hover:text-white bg-transparent">
              <CornerDownLeft className="size-4" />
            </Button>
            <Button 
              size="icon"
              variant="ghost"
              className="size-7 rounded-full text-gray-400 hover:!bg-white/10 hover:text-white bg-transparent">
              <X className="size-4" />
            </Button>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}
