import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  isLastQuestion: boolean;
  hasAnsweredCurrent: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const NavigationButtons = ({
  canGoBack,
  canGoForward,
  isLastQuestion,
  hasAnsweredCurrent,
  onPrevious,
  onNext,
  onSubmit,
}: NavigationButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex justify-end gap-2 mt-6"
    >
      {!isLastQuestion ? (
        <>
          <button
            onClick={onPrevious}
            disabled={!canGoBack}
            className="p-2 rounded-lg bg-quiz-button-bg hover:bg-quiz-button-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Previous question"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={onNext}
            disabled={!hasAnsweredCurrent}
            className="p-2 rounded-lg bg-quiz-button-bg hover:bg-quiz-button-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Next question"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </>
      ) : (
        <button
          onClick={onSubmit}
          disabled={!hasAnsweredCurrent}
          className="px-6 py-2 rounded-lg bg-quiz-button-bg hover:bg-quiz-button-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-foreground"
        >
          Submit
        </button>
      )}
    </motion.div>
  );
};
