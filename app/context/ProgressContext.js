
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [quizCount, setQuizCount] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const savedCount = Number(
      localStorage.getItem("quizzesCompleted") || 0
    );

    let savedScore = localStorage.getItem("totalScore");

    // Include the earlier quiz result if Context was not connected yet
    if (savedScore === null && savedCount > 0) {
      savedScore = localStorage.getItem("quizScore") || 0;
      localStorage.setItem("totalScore", savedScore);
    }

    setQuizCount(savedCount);
    setTotalScore(Number(savedScore || 0));
  }, []);

  function recordQuiz(score, total) {
    const newCount = quizCount + 1;
    const newScore = totalScore + score;

    setQuizCount(newCount);
    setTotalScore(newScore);

    localStorage.setItem("quizzesCompleted", newCount);
    localStorage.setItem("totalScore", newScore);
  }

  const averageScore =
    quizCount > 0
      ? Math.round((totalScore / (quizCount * 3)) * 100)
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
