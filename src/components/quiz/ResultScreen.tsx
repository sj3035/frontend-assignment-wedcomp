import { motion } from "framer-motion";

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultScreen = ({ score, totalQuestions, onRestart }: ResultScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      {/* Keep Learning Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-8"
      >
        <span className="px-4 py-2 rounded-full bg-quiz-badge-bg text-quiz-badge-text text-sm font-medium border border-border">
          Keep Learning!
        </span>
      </motion.div>
      
      {/* Score Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-serif mb-4">
          <span className="text-quiz-title-dark">Your </span>
          <span className="text-quiz-title-accent italic">Final score is</span>
        </h2>
      </motion.div>
      
      {/* Score Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="mb-12"
      >
        <span className="text-7xl md:text-9xl font-serif font-bold text-quiz-title-dark">
          {percentage}
        </span>
        <span className="text-4xl md:text-5xl font-serif text-quiz-title-accent">%</span>
      </motion.div>
      
      {/* Restart Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="px-8 py-3 rounded-xl bg-quiz-button-bg hover:bg-quiz-button-hover text-foreground font-medium transition-colors duration-200 shadow-button"
      >
        Start Again
      </motion.button>
    </motion.div>
  );
};
