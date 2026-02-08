import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    router.push(
      `/?s=${encodeURIComponent(title)}&y=${movieYear}`
    );
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6">

        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-film-black-film-illustration-image_1461389.jpg"
            alt="logo"
            className="h-12 w-12 object-cover rounded-md hover:scale-110 transition"
          />
          <span className="text-2xl lg:text-3xl font-bold hover:text-yellow-400">
            Moview
          </span>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search movie..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full sm:w-64 h-12 px-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="number"
            placeholder="YYYY"
            value={movieYear}
            onChange={(e) => setMovieYear(e.target.value)}
            className="w-full sm:w-24 h-12 px-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="h-12 px-5 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400"
          >
            Search
          </button>
        </form>

        {/* Navigation */}
        <nav className="flex gap-6">
          <p className="cursor-pointer hover:text-yellow-400">Explore</p>
          <p className="cursor-pointer hover:text-yellow-400">Contact Us</p>
        </nav>
      </div>
    </header>
  );
}
