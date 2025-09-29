import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/unstuck-logo.svg"
            alt="Unstuck Logo"
            width={32}
            height={32}
            className="dark:invert"
          />
          <span className="text-xl font-semibold tracking-tight">Unstuck</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button size="sm" className="gap-2">
            <Download className="size-4" />
            <span className="hidden sm:inline">Get Started for Free</span>
          </Button>
        </div>
      </div>
    </header>
  );
}