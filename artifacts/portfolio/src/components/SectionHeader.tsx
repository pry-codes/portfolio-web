import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  className?: string;
  color?: "pink" | "lavender" | "mint" | "peach" | "yellow" | "blue";
}

const colorMap = {
  pink: "text-pastel-pink",
  lavender: "text-pastel-lavender",
  mint: "text-pastel-mint",
  peach: "text-pastel-peach",
  yellow: "text-pastel-yellow",
  blue: "text-pastel-blue",
};

const bgMap = {
  pink: "bg-pastel-pink",
  lavender: "bg-pastel-lavender",
  mint: "bg-pastel-mint",
  peach: "bg-pastel-peach",
  yellow: "bg-pastel-yellow",
  blue: "bg-pastel-blue",
};

export function SectionHeader({ title, subtitle, emoji, className, color = "pink" }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="inline-block relative"
      >
        {emoji && (
          <motion.span 
            className="absolute -top-6 -left-6 text-3xl z-10"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {emoji}
          </motion.span>
        )}
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground relative z-20">
          {title}
        </h2>
        <div className={cn("absolute bottom-2 left-0 right-0 h-4 rounded-full opacity-40 -z-10", bgMap[color])} />
      </motion.div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground text-lg font-medium max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
