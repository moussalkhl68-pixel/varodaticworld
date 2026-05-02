import type { Metadata } from "next";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Varodatic IPTV",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
      
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 glass p-12 rounded-[3xl] border border-white/10 hover:border-primary/30 transition-colors shadow-2xl">
        <h1 className="text-8xl md:text-9xl font-heading font-extrabold text-white mb-6 drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]">
          4<span className="text-primary">0</span>4
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          Channel Not Found.
        </h2>
        <p className="text-muted text-lg mb-10">
          Like a bad cable signal, the page you're looking for seems to have disappeared. Let's get you back to the action.
        </p>
        
        <CTAButton href="/" className="px-8 py-4">
          Return to Homepage
        </CTAButton>
      </div>
    </div>
  );
}
