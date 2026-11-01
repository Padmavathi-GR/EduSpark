
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(3);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");

    if (savedScore !== null) setScore(Number(savedScore));
    if (savedTotal !== null) setTotal(Number(savedTotal));
  }, []);

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0;

  let status = "Not attempted yet";
  let recommendation = "Take your first quiz to get a learning recommendation.";

  if (localStorage.getItem("quizScore") !== null) {
    if (percentage < 50) {
      status = "Needs Improvement";
      recommendation = "Revise Python basics and practise more questions.";
    } else if (percentage < 80) {
      status = "Keep Practising";
      recommendation = "Continue practising Python to improve your score.";
    } else {
      status = "Good Progress";
      recommendation = "Great work! Try learning advanced Python Functions.";
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-[#355B3D]">
        Welcome to EduSpark!
      </h1>

      <p className="mt-3 text-gray-700">
        Learn at your own pace and improve your skills with personalised learning.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Link href="/topics" className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Learning Topics
          </h2>
          <p className="mt-2 text-gray-600">
            Explore different subjects and topics.
          </p>
        </Link>

        <Link href="/quiz" className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Take a Quiz
          </h2>
          <p className="mt-2 text-gray-600">
            Test your knowledge and check your understanding.
          </p>
        </Link>

        <Link href="/progress" className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-[#355B3D]">
            My Progress
          </h2>
          <p className="mt-2 text-gray-600">
            Track your learning performance.
          </p>
        </Link>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-[#355B3D]">
          Your Learning Recommendation
        </h2>

        <p className="mt-3 font-semibold text-[#477A52]">
          {status}
        </p>

        <p className="mt-2 text-gray-700">
          {recommendation}
        </p>

        <p className="mt-3 text-gray-600">
          Latest Score: {percentage}%
        </p>
      </div>
    </div>
  );
}
