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
  const [userQuery, setUserQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("demo");
  const [showResponse, setShowResponse] = useState(false);
  const [trashTalkMessage, setTrashTalkMessage] = useState("");
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

  const handleSubmitQuery = () => {
    if (userQuery.trim()) {
      setSubmittedQuery(userQuery);
      setTrashTalkMessage(getRandomTrashTalk());
      setShowResponse(true);
      setUserQuery("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmitQuery();
    }
  };

  const handleClearQuery = () => {
    setUserQuery("");
  };

  const handleNewChat = () => {
    setShowResponse(false);
    setSubmittedQuery("");
    setTrashTalkMessage("");
    setUserQuery("");
    setActiveTab(null);
  };

  const trashTalkMessages = [
    "Nice try, but this is just a demo. The real magic happens when you download the actual app, noob.",
    "LOL, you really thought this was live? Download the app to stop embarrassing yourself.",
    "Imagine trying to use a demo as the real thing. Download Unstuck and level up your gameplay.",
    "This ain't it, chief. Download the app to get actual answers instead of this roast.",
    "You're basically asking a cardboard cutout for help. Get the real app, it'll change your life.",
  ];

  const getRandomTrashTalk = () => {
    return trashTalkMessages[Math.floor(Math.random() * trashTalkMessages.length)];
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
          
          {/* Voice Button */}
          <Toggle 
            variant="default" 
            size="sm"
            pressed={isSpeaking}
            onPressedChange={setIsSpeaking}
            className="gap-1.5 text-gray-300 hover:!bg-white/10 hover:text-white data-[state=on]:!bg-red-500/20 rounded-full px-3 bg-transparent [&[data-state=on]>svg]:text-red-400 [&[data-state=on]>span]:text-white">
            <Mic className="size-4" />
            <span className="text-sm">Voice</span>
          </Toggle>
          
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
          onClick={handleNewChat}
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
        
        {showResponse ? (
          <>
            {/* User Query Display */}
            <div className="mb-4 px-4 py-2 rounded-md">
              <p className="text-gray-300 text-sm">
                {submittedQuery}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

            {/* Trash Talk Response Card */}
            <Card 
              className="border-0 shadow-none gap-4 rounded-lg"
              style={{ backgroundColor: 'transparent' }}>
              <div className="px-6">
                <div className="space-y-6">
                  <p className="text-gray-200 text-base leading-relaxed">
                    {trashTalkMessage}
                  </p>

                  <div className="flex justify-start pt-2">
                    <Button 
                      size="lg"
                      className="gap-2 text-white font-semibold px-6 py-5 rounded-full border border-white/20 hover:!bg-white/10"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download Unstuck
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </>
        ) : submittedQuery === "" ? (
          <>
            {/* Empty State - New Chat */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-3">
                <p className="text-gray-400 text-sm">Start a new conversation</p>
                <p className="text-gray-500 text-xs">Ask anything about {selectedGame}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Default Demo Content */}
            <div className="mb-4 px-4 py-2 rounded-md">
              <p className="text-gray-300 text-sm">
                How to defeat Dimensius on heroic?
              </p>
            </div>

            {/* Divider */}
            <div className="h-px mb-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

            {/* Response Card */}
            <Card 
              className="border-0 shadow-none gap-4 rounded-lg py-4"
              style={{ backgroundColor: 'transparent' }}>
              <div className="px-6">
                <div className="space-y-4">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Let me guess—you stood in the void zones and blamed the healer, right? Anyway, since you clearly can&apos;t figure this out yourself, here&apos;s how to defeat <span className="font-semibold text-white">Dimensius the All-Devouring</span> on Heroic in <span className="font-semibold text-white">World of Warcraft 11.2</span> without wiping your raid (again).
                  </p>

                  <div>
                    <p className="text-white font-semibold text-sm mb-2">The Basics (Since You Obviously Missed Them):</p>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>This is a multi-phase encounter. Yes, there&apos;s more than one phase. Shocking, I know.</li>
                      <li>You&apos;ll need to actually pay attention to positioning, adds, and not dying. Revolutionary concept.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm mb-2">How Not to Embarrass Yourself:</p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Phase 1: Try Not to Mess This Up Immediately</p>
                        <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside ml-2">
                          <li>Split your raid into two groups. I know teamwork is hard, but stay with me here.</li>
                          <li>Kill the Living Mass adds. They&apos;re big and obvious—even you should be able to target them.</li>
                          <li>Pick up the Excess Mass orbs. No, not EVERY orb. Just the ones you&apos;re assigned. Meet in the center with your partner and drop the puddle. It&apos;s not rocket science.</li>
                          <li>Don&apos;t stand behind the boss during the tank smash. Seriously, just... don&apos;t.</li>
                          <li>When the group soak happens, actually soak it. Wild concept, I know.</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-white font-medium text-sm mb-1">Platform Transition (AKA The Part Where Half Your Raid Falls Off):</p>
                        <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside ml-2">
                          <li>Use your dragonriding skills to reach the next platform. Yes, the same ones you use to AFK fly to the nearest mailbox.</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-white font-medium text-sm mb-1">Phase 2: Add Control for People Who Can&apos;t Count</p>
                        <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside ml-2">
                          <li>Kill Void Wardens and Nullbinders first. Not the boss. Not random trash. These specific adds.</li>
                          <li>Nullbinders slow you down and hurt. Grip them together and cleave. It&apos;s called efficiency—look it up.</li>
                          <li>You have limited time before the mini-boss enrages. If you fail this twice, maybe heroic isn&apos;t for you?</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-white font-medium text-sm mb-1">Final Phase (Where Your Raid Actually Falls Apart):</p>
                        <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside ml-2">
                          <li>Pop Heroism/Bloodlust immediately. Yes, NOW. Not when the boss is at 1% and everyone&apos;s dead.</li>
                          <li>Hide inside the 8 stars when Dimensius casts Devour at 100 energy. It&apos;s literally a game of hide-and-seek, and somehow you&apos;re still losing.</li>
                          <li>After three Devours, you wipe. So maybe try killing the boss before then? Just a thought.</li>
                          <li>Don&apos;t touch the boss&apos;s hitbox (instant death), don&apos;t stand in used stars (they&apos;re black holes now), and dodge the falling stars. How many things can you stand in before you learn?</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm mb-2">Pro Tips (For When Basic Tips Aren&apos;t Enough):</p>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Actually use your movement abilities. They&apos;re not just for show.</li>
                      <li>Healers: spam those instant casts. Your raid is going to need it with all the avoidable damage they&apos;re taking.</li>
                      <li>Tanks: position the boss properly. If you wipe because you turned him toward the raid, that&apos;s on you, chief.</li>
                    </ul>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    Still wiping? Maybe it&apos;s not the strategy—it&apos;s you. Want class-specific advice? Too bad, this is a demo. 💀
                  </p>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>

      {/* Bottom Input Area */}
      <div className="px-1 py-1 rounded-full"
           style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="relative flex items-center gap-2">
          <Input 
            placeholder="Ask about your game..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            onKeyPress={handleKeyPress}
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
              onClick={handleSubmitQuery}
              disabled={!userQuery.trim()}
              className="size-7 rounded-full text-gray-400 hover:!bg-white/10 hover:text-white bg-transparent disabled:opacity-30">
              <CornerDownLeft className="size-4" />
            </Button>
            <Button 
              size="icon"
              variant="ghost"
              onClick={handleClearQuery}
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
