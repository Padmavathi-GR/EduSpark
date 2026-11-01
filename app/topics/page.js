
import Link from "next/link";

export default function Topics() {
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Programming */}
        <div className="rounded-2xl bg-white p-7 shadow-md">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F0E5] text-3xl">
            💻
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#355B3D]">
            Programming
          </h2>

          <p className="mt-2 text-gray-600">
            Learn basic programming concepts like variables, loops and functions.
          </p>

          <div className="mt-5">
            <p className="font-semibold text-[#477A52]">Topics included</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>✓ Variables</li>
              <li>✓ Loops</li>
              <li>✓ Functions</li>
            </ul>
          </div>

          <Link href="/quiz" className="mt-6 inline-block rounded-lg bg-[#477A52] px-5 py-3 font-semibold text-white hover:bg-[#355B3D]">
            Start Learning →
          </Link>
        </div>

        {/* Mathematics */}
        <div className="rounded-2xl bg-white p-7 shadow-md">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F0E5] text-3xl">
            📐
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#355B3D]">
            Mathematics
          </h2>

          <p className="mt-2 text-gray-600">
            Practise algebra and probability with simple examples.
          </p>

          <div className="mt-5">
            <p className="font-semibold text-[#477A52]">Topics included</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>✓ Algebra</li>
              <li>✓ Probability</li>
              <li>✓ Basic calculations</li>
            </ul>
          </div>

          <Link href="/math-quiz" className="mt-6 inline-block rounded-lg bg-[#477A52] px-5 py-3 font-semibold text-white hover:bg-[#355B3D]">
            Start Learning →
          </Link>
        </div>

        {/* Computer Science */}
        <div className="rounded-2xl bg-white p-7 shadow-md">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F0E5] text-3xl">
            🖥️
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#355B3D]">
            Computer Science
          </h2>

          <p className="mt-2 text-gray-600">
            Understand data structures and operating systems.
          </p>

          <div className="mt-5">
            <p className="font-semibold text-[#477A52]">Topics included</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>✓ Data Structures</li>
              <li>✓ Operating Systems</li>
              <li>✓ Computer Networks</li>
            </ul>
          </div>

          <Link href="/cs-quiz" className="mt-6 inline-block rounded-lg bg-[#477A52] px-5 py-3 font-semibold text-white hover:bg-[#355B3D]">
            Start Learning →
          </Link>
        </div>

      </div>

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
