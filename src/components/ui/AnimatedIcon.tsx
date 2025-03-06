
import React from "react";
import { cn } from "@/lib/utils";

type AnimatedIconProps = {
  icon: React.ReactNode;
  className?: string;
  animationDelay?: string;
};

const AnimatedIcon = ({ icon, className, animationDelay }: AnimatedIconProps) => {
  return (
    <div 
      className={cn(
        "transition-all duration-300 ease-out animate-scale-in will-change-transform", 
        className
      )}
      style={{ animationDelay }}
    >
      {icon}
    </div>
  );
};

export default AnimatedIcon;
