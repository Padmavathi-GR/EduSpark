
"use client";

import { useEffect, useState } from "react";

export default function Results() {
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

  const percentage = total > 0 ? (score / total) * 100 : 0;

  let recommendation = "";
  let topicStatus = "";
  let nextStep = "";

  if (percentage < 50) {
    topicStatus = "Python Basics needs improvement";
    recommendation =
      "You need more practice. Revise the basics and try another quiz.";
    nextStep = "Revise variables, loops and comments.";
  } else if (percentage < 80) {
    topicStatus = "Python Basics needs more practice";
    recommendation =
      "Good effort! Keep practising to improve your score.";
    nextStep = "Practise more questions on Python Basics.";
  } else {
    topicStatus = "Python Basics - Good Progress!";
    recommendation =
      "Excellent work! You are doing well. Try an advanced topic next.";
    nextStep = "You can now explore Python Functions.";
  }

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <div className="max-w-2xl mx-auto rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#355B3D]">
          Quiz Results
        </h1>

        <p className="mt-4 text-gray-600">
          Great job completing the quiz!
        </p>

        <div className="mt-6 rounded-lg bg-[#FFF9E9] p-6 text-center">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Your Score
          </h2>

          <p className="mt-2 text-4xl font-bold text-[#477A52]">
            {score} / {total}
          </p>

          <p className="mt-2 text-gray-700">
            {percentage.toFixed(0)}%
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-[#477A52] p-5">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Weak Topic Identification
          </h2>

          <p className="mt-3 font-semibold text-[#477A52]">
            {topicStatus}
          </p>

          <p className="mt-2 text-gray-600">
            {recommendation}
          </p>

          <p className="mt-3 text-gray-700">
            <strong>Next Step:</strong> {nextStep}
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="/quiz"
            className="rounded-lg bg-[#477A52] px-5 py-3 text-white"
          >
            Try Again
          </a>

          <a
            href="/progress"
            className="rounded-lg border border-[#477A52] px-5 py-3 text-[#355B3D]"
          >
            View Progress
          </a>
        </div>
      </div>
    </div>
  );
}
