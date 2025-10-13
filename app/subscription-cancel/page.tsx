import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SubscriptionCancel() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-2xl">
        <div className="flex flex-col items-center justify-center text-center space-y-6 mt-12">
          {/* Success Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
            <CheckCircle className="w-20 h-20 text-blue-500 relative" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Subscription Cancelled</h1>
            <p className="text-xl text-muted-foreground">
              Your subscription has been successfully cancelled
            </p>
          </div>

          {/* Message */}
          <div className="space-y-4 text-muted-foreground max-w-md">
            <p>
              We&apos;re sorry to see you go! Your subscription has been cancelled and you will not
              be charged again.
            </p>
            <p>
              You&apos;ll continue to have access to premium features until the end of your current
              billing period.
            </p>
          </div>

          {/* Feedback Info */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>
              We&apos;d love to hear your feedback.{" "}
              <a href="mailto:contact@unstuck.gg" className="text-foreground hover:underline">
                Contact us
              </a>
            </p>
          </div>

          {/* Logo and Brand */}
          <div className="flex items-center gap-3 pt-4">
            <Image src="/unstuck-logo-eye.svg" alt="Unstuck Logo" width={40} height={40} />
            <span className="text-2xl font-bold font-mokoto">Unstuck</span>
          </div>
        </div>
      </div>
    </div>
  );
}
