import { motion } from "framer-motion";

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: number[];
}

export const ProgressBar = ({ totalQuestions, currentQuestion, answeredQuestions }: ProgressBarProps) => {
  return (
    <div className="flex justify-center gap-3 mb-8">
      {Array.from({ length: totalQuestions }, (_, index) => {
        const isAnswered = answeredQuestions.includes(index);
        const isCurrent = index === currentQuestion;
        
        return (
          <motion.div
            key={index}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`h-1 w-12 md:w-16 rounded-full transition-colors duration-300 ${
              isAnswered || isCurrent
                ? "bg-quiz-progress-active"
                : "bg-quiz-progress-inactive"
            }`}
          />
        );
      })}
    </div>
  );
};
