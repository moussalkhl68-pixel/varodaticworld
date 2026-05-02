import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "secondary";
  className?: string;
  icon?: boolean;
}

export default function CTAButton({ href, children, variant = "primary", className, icon = false }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-6 py-3 text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-background font-bold hover:scale-[1.02] shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:shadow-[0_0_25px_rgba(0,255,136,0.6)]",
    ghost: "bg-transparent text-white border border-white/10 hover:border-primary hover:text-primary",
    secondary: "bg-surface2 text-white hover:bg-surface border border-white/10 hover:border-white/20"
  };

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </Link>
  );
}
