
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useProgress } from "./context/ProgressContext";

export default function Home() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(3);
  const [attempted, setAttempted] = useState(false);

  const { quizCount, averageScore } = useProgress();

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");

    if (savedScore !== null) {
      setScore(Number(savedScore));
      setAttempted(true);
    }

    if (savedTotal !== null) {
      setTotal(Number(savedTotal));
    }
  }, []);

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0;

  let status = "Not attempted yet";
  let recommendation =
    "Take your first quiz to receive a personalised learning recommendation.";
  let nextStep = "Start with Python Basics.";

  if (attempted) {
    if (percentage < 50) {
      status = "Needs Improvement";
      recommendation =
        "Revise Python basics and practise more questions.";
      nextStep = "Review variables, loops and comments.";
    } else if (percentage < 80) {
      status = "Keep Practising";
      recommendation =
        "Continue practising Python to improve your score.";
      nextStep = "Try more Python practice questions.";
    } else {
      status = "Good Progress";
      recommendation =
        "Great work! You are ready to explore advanced Python topics.";
      nextStep = "Start learning Python Functions.";
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-6 md:p-10 text-gray-800">

      {/* Welcome Section */}
      <div className="rounded-2xl bg-[#355B3D] p-8 text-white shadow-lg">
        <p className="text-sm font-medium text-green-100">
          YOUR PERSONAL LEARNING SPACE
        </p>

        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Welcome to EduSpark!
        </h1>

        <p className="mt-3 max-w-xl text-green-50">
          Learn at your own pace, discover your strengths
          and improve your skills with personalised learning.
        </p>

        <Link
          href="/topics"
          className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#355B3D] hover:bg-green-50"
        >
          Start Learning →
        </Link>
      </div>

      {/* Summary Cards */}
      <h2 className="mt-10 text-2xl font-bold text-[#355B3D]">
        Your Learning Overview
      </h2>

      <div className="mt-5 grid gap-5 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-600">Quizzes Completed</p>
          <h3 className="mt-3 text-3xl font-bold text-[#477A52]">
            {quizCount}
          </h3>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-600">Latest Score</p>
          <h3 className="mt-3 text-3xl font-bold text-[#477A52]">
            {attempted ? `${percentage}%` : "0%"}
          </h3>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-600">Average Score</p>
          <h3 className="mt-3 text-3xl font-bold text-[#477A52]">
            {averageScore}%
          </h3>
        </div>

      </div>

      {/* Quick Links */}
      <h2 className="mt-10 text-2xl font-bold text-[#355B3D]">
        Explore EduSpark
      </h2>

      <div className="mt-5 grid gap-5 md:grid-cols-3">

        <Link
          href="/topics"
          className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1"
        >
          <h3 className="text-xl font-bold text-[#355B3D]">
            Learning Topics
          </h3>
          <p className="mt-2 text-gray-600">
            Explore subjects and learn new concepts.
          </p>
        </Link>

        <Link
          href="/quiz"
          className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1"
        >
          <h3 className="text-xl font-bold text-[#355B3D]">
            Take a Quiz
          </h3>
          <p className="mt-2 text-gray-600">
            Test your knowledge and understanding.
          </p>
        </Link>

        <Link
          href="/progress"
          className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1"
        >
          <h3 className="text-xl font-bold text-[#355B3D]">
            My Progress
          </h3>
          <p className="mt-2 text-gray-600">
            View your learning performance.
          </p>
        </Link>

      </div>

      {/* Personalised Recommendation */}
      <div className="mt-10 rounded-xl border border-[#477A52] bg-white p-7 shadow">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#477A52]">
          Personalised For You
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#355B3D]">
          Your Learning Recommendation
        </h2>

        <p className="mt-4 font-semibold text-[#477A52]">
          {status}
        </p>

        <p className="mt-2 text-gray-700">
          {recommendation}
        </p>

        <div className="mt-4 rounded-lg bg-[#FFF9E9] p-4">
          <p className="font-semibold text-[#355B3D]">
            Suggested Next Step
          </p>
          <p className="mt-1 text-gray-700">
            {nextStep}
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Keep learning, keep growing with EduSpark! 🌱
      </p>

    </div>
  );
}
