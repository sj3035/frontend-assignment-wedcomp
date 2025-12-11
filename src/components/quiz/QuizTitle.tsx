import { motion } from "framer-motion";

interface QuizTitleProps {
  subtitle?: string;
}

export const QuizTitle = ({ subtitle = "Answer all questions to see your results" }: QuizTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-3">
        <span className="text-quiz-title-dark">Test Your </span>
        <span className="text-quiz-title-accent italic">Knowledge</span>
      </h1>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </motion.div>
  );
};
