import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#355B3D] p-5 text-white">
      <h1 className="text-2xl font-bold">EduSpark</h1>

      <div className="flex gap-6">
        <Link href="/">Dashboard</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/progress">Progress</Link>
      </div>
    </nav>
  );
}