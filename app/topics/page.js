
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Topics() {
  const [search, setSearch] = useState("");

  const topics = [
    {
      name: "Programming",
      icon: "💻",
      description:
        "Learn basic programming concepts like variables, loops and functions.",
      included: ["Variables", "Loops", "Functions"],
      link: "/quiz",
    },
    {
      name: "Mathematics",
      icon: "📐",
      description:
        "Practise algebra and probability with simple examples.",
      included: ["Algebra", "Probability", "Basic calculations"],
      link: "/math-quiz",
    },
    {
      name: "Computer Science",
      icon: "🖥️",
      description:
        "Understand data structures and operating systems.",
      included: [
        "Data Structures",
        "Operating Systems",
        "Computer Networks",
      ],
      link: "/cs-quiz",
    },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF9E9] p-6 md:p-10 text-gray-800">

      <div className="mb-10">
        <p className="font-semibold text-[#477A52]">
          LEARN SOMETHING NEW
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#355B3D]">
          Learning Topics
        </h1>

        <p className="mt-3 text-gray-700">
          Choose a subject and learn new things at your own pace.
        </p>
      </div>

      {/* Search Box */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search learning topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-[#477A52] bg-white p-4 outline-none focus:ring-2 focus:ring-[#477A52]"
        />
      </div>

      {/* Topic Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {filteredTopics.map((topic) => (
          <div
            key={topic.name}
            className="rounded-2xl bg-white p-7 shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F0E5] text-3xl">
              {topic.icon}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#355B3D]">
              {topic.name}
            </h2>

            <p className="mt-2 text-gray-600">
              {topic.description}
            </p>

            <div className="mt-5">
              <p className="font-semibold text-[#477A52]">
                Topics included
              </p>

              <ul className="mt-3 space-y-2 text-gray-700">
                {topic.included.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <Link
              href={topic.link}
              className="mt-6 inline-block rounded-lg bg-[#477A52] px-5 py-3 font-semibold text-white hover:bg-[#355B3D]"
            >
              Start Learning →
            </Link>
          </div>
        ))}

      </div>

      {/* No Results Message */}
      {filteredTopics.length === 0 && (
        <p className="mt-8 text-center text-lg font-semibold text-[#355B3D]">
          No topics found. Try searching for another topic!
        </p>
      )}

      <div className="mt-10 rounded-xl bg-[#E5F0E5] p-6 text-center">
        <h2 className="text-xl font-bold text-[#355B3D]">
          Keep Learning!
        </h2>

        <p className="mt-2 text-gray-700">
          Take your time, practise regularly and improve step by step.
        </p>
      </div>

    </div>
  );
}
