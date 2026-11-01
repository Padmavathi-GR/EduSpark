
export default function Topics() {
  return (
    <div className="min-h-screen bg-[#FFF9E9] p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-[#355B3D]">
        Learning Topics
      </h1>

      <p className="mt-2 text-gray-700">
        Choose a subject and start learning.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-[#477A52]">
            Programming
          </h2>
          <p className="mt-2 text-gray-700">
            Learn Variables, Loops and Functions.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-[#477A52]">
            Mathematics
          </h2>
          <p className="mt-2 text-gray-700">
            Learn Algebra and Probability.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-[#477A52]">
            Computer Science
          </h2>
          <p className="mt-2 text-gray-700">
            Learn Data Structures and Operating Systems.
          </p>
        </div>
      </div>
    </div>
  );
}
