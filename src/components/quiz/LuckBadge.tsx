import { motion } from "framer-motion";

export const LuckBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-20 left-8 z-10"
    >
      <div className="relative">
        {/* Speech bubble */}
        <div className="bg-card rounded-2xl px-4 py-2 shadow-card border border-border">
          <span className="text-sm font-medium text-foreground">Best of Luck!</span>
        </div>
        
        {/* Paw icon */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="14" cy="14" rx="3" ry="3.5" fill="hsl(var(--muted))" />
            <ellipse cx="26" cy="14" rx="3" ry="3.5" fill="hsl(var(--muted))" />
            <ellipse cx="10" cy="22" rx="2.5" ry="3" fill="hsl(var(--muted))" />
            <ellipse cx="30" cy="22" rx="2.5" ry="3" fill="hsl(var(--muted))" />
            <ellipse cx="20" cy="26" rx="6" ry="5" fill="hsl(var(--muted))" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};
