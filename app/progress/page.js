
"use client";

import { useEffect, useState } from "react";
import { useProgress } from "../context/ProgressContext";

export default function Progress() {
  const { quizCount, averageScore } = useProgress();

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(3);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");

    if (savedScore !== null) {
      setScore(Number(savedScore));
    }

    if (savedTotal !== null) {
      setTotal(Number(savedTotal));
    }
  }, []);

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0;

  const recommendation =
    quizCount === 0
      ? {
          title: "Start Your Learning Journey!",
          message:
            "Take your first quiz to discover your current knowledge and receive guidance for your learning journey.",
          action: "Start with a quiz to begin tracking your progress.",
        }
      : percentage < 50
        ? {
            title: "Let's Strengthen Your Basics!",
            message:
              "Focus on understanding the fundamental concepts. Review your learning materials and practise quizzes to build confidence.",
            action:
              "Recommended next step: Review basic concepts and retry a quiz.",
          }
        : percentage < 80
          ? {
              title: "You're Making Progress!",
              message:
                "You're building your understanding. Continue practising and revisit topics where you make mistakes.",
              action:
                "Recommended next step: Practise another quiz to improve your score.",
            }
          : {
              title: "Excellent Work!",
              message:
                "You're performing well! Challenge yourself with advanced topics and new questions to deepen your understanding.",
              action:
                "Recommended next step: Explore advanced topics and challenge yourself.",
            };

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-6 text-gray-800 sm:p-8">
      <h1 className="text-3xl font-bold text-[#355B3D]">
        My Progress
      </h1>

      <p className="mt-2 text-gray-700">
        Track your learning journey and see how you improve.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold text-[#355B3D]">
            Quizzes Completed
          </h2>
          <p className="mt-3 text-3xl font-bold text-[#477A52]">
            {quizCount}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold text-[#355B3D]">
            Latest Score
          </h2>
          <p className="mt-3 text-3xl font-bold text-[#477A52]">
            {percentage}%
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold text-[#355B3D]">
            Learning Progress
          </h2>
          <p className="mt-3 text-3xl font-bold text-[#477A52]">
            {averageScore}%
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border-l-4 border-[#477A52] rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-[#355B3D]">
          {recommendation.title}
        </h2>

        <p className="mt-3 leading-7 text-gray-700">
          {recommendation.message}
        </p>

        <div className="mt-4 rounded-lg bg-[#FFF9E9] p-4">
          <p className="font-semibold text-[#355B3D]">
            Your Next Step
          </p>
          <p className="mt-1 text-gray-700">
            {recommendation.action}
          </p>
        </div>
      </div>
    </div>
  );
}
