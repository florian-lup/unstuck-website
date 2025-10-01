import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-20">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/unstuck-logo-eye.svg"
            alt="Unstuck Logo"
            width={35}
            height={35}
          />
          <span className="text-lg font-bold font-mokoto">Unstuck</span>
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