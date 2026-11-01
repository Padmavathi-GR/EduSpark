
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

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
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

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-[#477A52]">
          Keep Learning!
        </h2>
        <p className="mt-2 text-gray-700">
          Complete quizzes regularly to improve your performance.
        </p>
      </div>
    </div>
  );
}
