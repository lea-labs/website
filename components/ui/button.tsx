"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading font-medium tracking-wider uppercase transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-neon text-white hover:bg-neon-bright hover:shadow-lg hover:shadow-neon/20",
        outline:
          "border border-neon/30 bg-transparent hover:bg-neon/10 text-neon-bright hover:border-neon/50",
        ghost: "hover:bg-white/5 text-silver hover:text-neon-bright",
        link: "text-neon-bright underline-offset-4 hover:underline",
        cool: "relative bg-gradient-to-r from-neon-dim via-neon to-neon-glow text-white hover:shadow-xl hover:shadow-neon/30 hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-7 py-2.5 text-xs rounded-full",
        sm: "h-9 px-5 text-[11px] rounded-full",
        lg: "h-14 px-10 text-sm rounded-full",
        xl: "h-16 px-12 text-base rounded-full",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

/* ---- Liquid Button ---- */
function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="glass-morph">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function LiquidButton({ children, className, onClick }: LiquidButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative px-10 py-4 font-heading font-semibold text-sm tracking-[0.15em] uppercase",
        "bg-neon/10 backdrop-blur-md border border-neon/30 rounded-full",
        "text-neon-bright",
        "hover:bg-neon/20 hover:border-neon/50 hover:shadow-lg hover:shadow-neon/20",
        "active:scale-95 transition-all duration-300",
        "overflow-hidden",
        className
      )}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon/0 via-neon/10 to-neon/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

/* ---- Metal Button ---- */
interface MetalButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "purple" | "steel" | "dark";
}

function MetalButton({
  children,
  className,
  onClick,
  color = "purple",
}: MetalButtonProps) {
  const colorStyles = {
    purple:
      "bg-gradient-to-b from-neon-bright via-neon to-neon-dim text-white shadow-neon/30 hover:shadow-neon/50",
    steel:
      "bg-gradient-to-b from-silver via-steel to-panel text-off-white shadow-steel/30 hover:shadow-steel/50",
    dark: "bg-gradient-to-b from-panel via-surface to-void text-silver border border-white/[0.06] shadow-void/50 hover:shadow-neon/20",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-10 py-4 font-heading font-bold text-sm tracking-[0.15em] uppercase rounded-full",
        "shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] active:shadow-md",
        "transition-all duration-200",
        colorStyles[color],
        className
      )}
    >
      <span className="absolute inset-px rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export { Button, buttonVariants, LiquidButton, MetalButton, GlassFilter };
