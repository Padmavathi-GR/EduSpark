
"use client";

import { useState } from "react";
import { useProgress } from "../context/ProgressContext";

export default function Quiz() {
  const { recordQuiz } = useProgress();
  const questions = [
    {
      question: "What is a variable?",
      options: [
        "A storage location for data",
        "A type of computer",
        "A programming language",
        "An operating system",
      ],
      answer: 0,
    },
    {
      question: "Which keyword is used for a loop in Python?",
      options: ["repeat", "for", "run", "stop"],
      answer: 1,
    },
    {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: 2,
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

    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", questions.length);

    recordQuiz(score, questions.length);
    window.location.href = "/results";
  }

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-[#355B3D]">
        Take a Quiz
      </h1>

      <p className="mt-2 text-gray-700">
        Test your knowledge and improve your skills.
      </p>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-[#477A52]">
          Programming Basics
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
