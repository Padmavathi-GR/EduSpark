
"use client";

import { useState } from "react";
import { useProgress } from "../context/ProgressContext";

export default function MathQuiz() {
  const { recordQuiz } = useProgress();

  const questions = [
    {
      question: "Solve: x + 5 = 12",
      options: ["5", "7", "17", "6"],
      answer: 1,
    },
    {
      question: "What is the probability of getting a head when tossing a fair coin?",
      options: ["1/4", "1/2", "1", "0"],
      answer: 1,
    },
    {
      question: "What is 6 × 4?",
      options: ["20", "24", "30", "18"],
      answer: 1,
    },
  ];

  const [selected, setSelected] = useState({});

  function submitQuiz() {
    if (Object.keys(selected).length !== questions.length) {
      alert("Please answer all questions!");
      return;
    }

    const score = questions.filter(
      (q, index) => selected[index] === q.answer
    ).length;

    const review = questions.map((q, index) => ({
      question: q.question,
      selectedAnswer: q.options[selected[index]],
      correctAnswer: q.options[q.answer],
      isCorrect: selected[index] === q.answer,
    }));

    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", questions.length);
    localStorage.setItem("quizSubject", "Mathematics");
    localStorage.setItem("quizReview", JSON.stringify(review));

    recordQuiz(score, questions.length);
    window.location.href = "/results";
  }

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-[#355B3D]">
        Mathematics Quiz
      </h1>

      <p className="mt-2 text-gray-700">
        Test your knowledge of basic mathematics.
      </p>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-[#477A52]">
          Algebra and Probability
        </h2>

        {questions.map((q, index) => (
          <div key={index} className="mt-6">
            <p className="font-semibold text-gray-800">
              {index + 1}. {q.question}
            </p>

            {q.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className="mt-3 flex cursor-pointer gap-2 text-gray-800"
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  checked={selected[index] === optionIndex}
                  onChange={() =>
                    setSelected({
                      ...selected,
                      [index]: optionIndex,
                    })
                  }
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        <button
          onClick={submitQuiz}
          className="mt-8 rounded-lg bg-[#477A52] px-6 py-3 font-semibold text-white hover:bg-[#355B3D]"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}
