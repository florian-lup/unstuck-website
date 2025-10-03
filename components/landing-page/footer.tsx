"use client";

import { useState } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@unstuck.gg");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer className="border-t py-4 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Unstuck. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button
              onClick={handleCopyEmail}
              className={`transition-colors ${
                copied ? "text-success" : "hover:text-foreground"
              }`}
            >
              {copied ? "Email copied!" : "Contact"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
