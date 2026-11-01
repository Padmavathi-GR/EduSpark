
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [quizCount, setQuizCount] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const savedCount = Number(
      localStorage.getItem("quizzesCompleted") || 0
    );

    const savedScore = Number(
      localStorage.getItem("totalScore") || 0
    );

    let savedQuestions = Number(
      localStorage.getItem("totalQuestions") || 0
    );

    // Fix older quiz records (all existing quizzes have 3 questions)
    if (savedQuestions < savedCount * 3) {
      savedQuestions = savedCount * 3;
      localStorage.setItem("totalQuestions", savedQuestions);
    }

    setQuizCount(savedCount);
    setTotalScore(savedScore);
    setTotalQuestions(savedQuestions);
  }, []);

  function recordQuiz(score, total) {
    const newCount = quizCount + 1;
    const newScore = totalScore + score;
    const newQuestions = totalQuestions + total;

    setQuizCount(newCount);
    setTotalScore(newScore);
    setTotalQuestions(newQuestions);

    localStorage.setItem("quizzesCompleted", newCount);
    localStorage.setItem("totalScore", newScore);
    localStorage.setItem("totalQuestions", newQuestions);
  }

  const averageScore =
    totalQuestions > 0
      ? Math.round((totalScore / totalQuestions) * 100)
      : 0;

  return (
    <ProgressContext.Provider
      value={{ quizCount, averageScore, recordQuiz }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
