
"use client";

import { useEffect, useState } from "react";

export default function Results() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(3);
  const [subject, setSubject] = useState("Programming Basics");
  const [review, setReview] = useState([]);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");
    const savedSubject = localStorage.getItem("quizSubject");
    const savedReview = localStorage.getItem("quizReview");

    if (savedScore !== null) setScore(Number(savedScore));
    if (savedTotal !== null) setTotal(Number(savedTotal));
    if (savedSubject !== null) setSubject(savedSubject);
    if (savedReview !== null) {
      setReview(JSON.parse(savedReview));
    }
  }, []);

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0;

  const wrongAnswers = review.filter(
    (item) => !item.isCorrect
  );

  let topicStatus = "";
  let recommendation = "";
  let nextStep = "";

  if (percentage < 50) {
    topicStatus = `${subject} needs improvement`;
    recommendation =
      "You need more practice. Review the concepts and try again.";
    nextStep = "Revise the questions you answered incorrectly.";
  } else if (percentage < 80) {
    topicStatus = `${subject} needs more practice`;
    recommendation =
      "Good effort! Keep practising to improve your score.";
    nextStep = "Practise more questions to strengthen your understanding.";
  } else {
    topicStatus = `${subject} - Good Progress!`;
    recommendation =
      "Excellent work! You are doing well. Keep learning new concepts.";
    nextStep = "Try more challenging questions.";
  }

  const quizLink =
    subject === "Mathematics"
      ? "/math-quiz"
      : subject === "Computer Science"
      ? "/cs-quiz"
      : "/quiz";

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">

        <h1 className="text-3xl font-bold text-[#355B3D]">
          Quiz Results
        </h1>

        <p className="mt-2 font-semibold text-[#477A52]">
          {subject}
        </p>

        <p className="mt-4 text-gray-600">
          Great job completing the quiz!
        </p>

        {/* Score */}
        <div className="mt-6 rounded-lg bg-[#FFF9E9] p-6 text-center">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Your Score
          </h2>

          <p className="mt-2 text-4xl font-bold text-[#477A52]">
            {score} / {total}
          </p>

          <p className="mt-2 text-gray-700">
            {percentage}%
          </p>
        </div>

        {/* Recommendation */}
        <div className="mt-6 rounded-lg border border-[#477A52] p-5">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Learning Recommendation
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

        {/* Answer Review */}
        <div className="mt-6 rounded-lg bg-[#FFF9E9] p-5">
          <h2 className="text-xl font-bold text-[#355B3D]">
            Answer Review
          </h2>

          {review.length === 0 ? (
            <p className="mt-3 text-gray-600">
              Answer review is not available for this attempt yet.
              Please take the quiz again to see your answers.
            </p>
          ) : wrongAnswers.length === 0 ? (
            <p className="mt-3 font-semibold text-[#477A52]">
              Perfect! You answered every question correctly! 🎉
            </p>
          ) : (
            <>
              <p className="mt-2 text-gray-600">
                Review the questions you answered incorrectly.
              </p>

              {wrongAnswers.map((item, index) => (
                <div
                  key={index}
                  className="mt-5 rounded-lg border border-red-200 bg-white p-4"
                >
                  <p className="font-semibold text-gray-800">
                    {index + 1}. {item.question}
                  </p>

                  <p className="mt-3 text-red-600">
                    Your answer: {item.selectedAnswer}
                  </p>

                  <p className="mt-2 font-semibold text-[#477A52]">
                    Correct answer: {item.correctAnswer}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={quizLink}
            className="rounded-lg bg-[#477A52] px-5 py-3 text-white hover:bg-[#355B3D]"
          >
            Try Again
          </a>

          <a
            href="/topics"
            className="rounded-lg border border-[#477A52] px-5 py-3 text-[#355B3D]"
          >
            Learning Topics
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
