import { motion } from "framer-motion";

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
  delay?: number;
}

export const OptionButton = ({ option, isSelected, onClick, delay = 0 }: OptionButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`w-full py-3 px-6 mx-auto max-w-[90%] block rounded-lg border-2 transition-all duration-200 text-center ${
        isSelected
          ? "border-primary bg-secondary text-primary font-medium"
          : "border-quiz-option-border bg-quiz-option-bg text-foreground hover:border-primary/50 hover:bg-secondary/50"
      }`}
    >
      {option}
    </motion.button>
  );
};
