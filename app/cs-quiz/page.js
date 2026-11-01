
"use client";

import { useState } from "react";
import { useProgress } from "../context/ProgressContext";

export default function ComputerScienceQuiz() {
  const { recordQuiz } = useProgress();

  const questions = [
    {
      question: "Which data structure follows LIFO order?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: 1,
    },
    {
      question: "Which part of the operating system manages processes?",
      options: [
        "File Manager",
        "Memory Unit",
        "Process Scheduler",
        "Compiler",
      ],
      answer: 2,
    },
    {
      question: "What does LAN stand for?",
      options: [
        "Local Area Network",
        "Large Access Network",
        "Long Area Node",
        "Local Access Number",
      ],
      answer: 0,
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
    localStorage.setItem("quizSubject", "Computer Science");
    localStorage.setItem("quizReview", JSON.stringify(review));

    recordQuiz(score, questions.length);
    window.location.href = "/results";
  }

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-[#355B3D]">
        Computer Science Quiz
      </h1>

      <p className="mt-2 text-gray-700">
        Test your knowledge of computer science basics.
      </p>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-[#477A52]">
          Data Structures, Operating Systems and Networks
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
