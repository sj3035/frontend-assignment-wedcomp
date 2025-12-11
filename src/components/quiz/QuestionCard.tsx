import { motion } from "framer-motion";
import { Question } from "@/types/quiz";
import { OptionButton } from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (answer: string) => void;
}

export const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }: QuestionCardProps) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Question Header */}
      <div className="bg-quiz-question-header rounded-t-xl py-4 px-6">
        <p className="text-center text-foreground font-medium">
          {question.id}. {question.question}
        </p>
      </div>
      
      {/* Options */}
      <div className="bg-card rounded-b-xl py-4 space-y-3">
        {question.options.map((option, index) => (
          <OptionButton
            key={option}
            option={option}
            isSelected={selectedAnswer === option}
            onClick={() => onSelectAnswer(option)}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};
