import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 6, 
  className,
  yOffset = 20
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ 
        y: [0, -yOffset, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
