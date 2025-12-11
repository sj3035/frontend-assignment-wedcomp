import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/data/questions";
import { QuizTitle } from "./QuizTitle";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { NavigationButtons } from "./NavigationButtons";
import { LuckBadge } from "./LuckBadge";
import { ResultScreen } from "./ResultScreen";

export const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelectAnswer = useCallback((answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleSubmit = useCallback(() => {
    setIsComplete(true);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  }, []);

  const calculateScore = useCallback(() => {
    return quizQuestions.reduce((score, question, index) => {
      if (answers[index] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  }, [answers]);

  const answeredQuestions = Object.keys(answers).map(Number);
  const currentQuestionData = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasAnsweredCurrent = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen quiz-gradient-bg flex items-center justify-center p-4 md:p-8">
      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl quiz-card-glass rounded-3xl p-6 md:p-10 shadow-card relative"
      >
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuizTitle />
              
              <ProgressBar
                totalQuestions={quizQuestions.length}
                currentQuestion={currentQuestion}
                answeredQuestions={answeredQuestions}
              />
              
              <QuestionCard
                question={currentQuestionData}
                selectedAnswer={answers[currentQuestion]}
                onSelectAnswer={handleSelectAnswer}
              />
              
              <NavigationButtons
                canGoBack={currentQuestion > 0}
                canGoForward={currentQuestion < quizQuestions.length - 1}
                isLastQuestion={isLastQuestion}
                hasAnsweredCurrent={hasAnsweredCurrent}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSubmit={handleSubmit}
              />
            </motion.div>
          ) : (
            <ResultScreen
              key="result"
              score={calculateScore()}
              totalQuestions={quizQuestions.length}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Luck Badge - Only show on first question */}
      {!isComplete && currentQuestion === 0 && <LuckBadge />}
    </div>
  );
};
