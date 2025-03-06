
import React from "react";
import { cn } from "@/lib/utils";

type AnimationType = "scale-in" | "fade-in" | "slide-in" | "bounce" | "pulse";

type AnimatedIconProps = {
  icon: React.ReactNode;
  className?: string;
  animationDelay?: string;
  animationType?: AnimationType;
  duration?: "fast" | "normal" | "slow";
  hoverEffect?: boolean;
};

const AnimatedIcon = ({ 
  icon, 
  className, 
  animationDelay,
  animationType = "scale-in",
  duration = "normal",
  hoverEffect = false
}: AnimatedIconProps) => {
  const getDurationClass = () => {
    switch (duration) {
      case "fast": return "duration-200";
      case "slow": return "duration-500";
      default: return "duration-300";
    }
  };

  const getAnimationClass = () => {
    switch (animationType) {
      case "fade-in": return "animate-fade-in";
      case "slide-in": return "animate-slide-in";
      case "bounce": return "animate-bounce";
      case "pulse": return "animate-pulse-slow";
      default: return "animate-scale-in";
    }
  };

  const getHoverClass = () => {
    return hoverEffect ? "transform hover:scale-110 hover:text-accent transition-all" : "";
  };

  return (
    <div 
      className={cn(
        "transition-all ease-out will-change-transform",
        getDurationClass(),
        getAnimationClass(),
        getHoverClass(),
        className
      )}
      style={{ animationDelay }}
    >
      {icon}
    </div>
  );
};

export default AnimatedIcon;
