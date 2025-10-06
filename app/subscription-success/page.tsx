import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SubscriptionSuccess() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-2xl">
        <div className="flex flex-col items-center justify-center text-center space-y-6 mt-12">
          {/* Success Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
            <CheckCircle className="w-20 h-20 text-green-500 relative" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Payment Successful!</h1>
            <p className="text-xl text-muted-foreground">
              Your payment has been processed successfully.
            </p>
          </div>

          {/* Message */}
          <div className="space-y-4 text-muted-foreground max-w-md">
            <p>
              Thank you for subscribing! 
            </p>
            <p>
              You now have access to all core features. Download the app to get started
              and level up your gaming experience.
            </p>
          </div>

          {/* Additional Info */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>
              Need help?{" "}
              <a
                href="mailto:contact@unstuck.gg"
                className="text-foreground hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>

          {/* Logo and Brand */}
          <div className="flex items-center gap-3 pt-4">
            <Image
              src="/unstuck-logo-eye.svg"
              alt="Unstuck Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold font-mokoto">Unstuck</span>
          </div>
        </div>
      </div>
    </div>
  );
}

