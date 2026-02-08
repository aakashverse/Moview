import { useState } from "react";

export default function Header({ setTitle, setYear }) {
  const [title, setTitleInput] = useState("");
  const [year, setYearInput] = useState("");

  const handleClick = () => {
    setTitle(title);
    setYear(year);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-film-black-film-illustration-image_1461389.jpg"
            alt="logo"
            className="h-12 w-12 object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
          />
          <span className="text-2xl lg:text-3xl font-bold tracking-tight hover:text-yellow-400 transition-colors">
            Moview
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search movie..."
              value={title}
              onChange={(e) => setTitleInput(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png"
              alt="search"
              className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2 opacity-60"
            />
          </div>

          <input
            type="number"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYearInput(e.target.value)}
            className="w-full sm:w-24 h-12 px-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow"
          />

          <button
            onClick={handleClick}
            className="h-12 px-5 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400 hover:scale-105 transition-transform duration-200"
          >
            Search
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0">
          <p className="cursor-pointer hover:text-yellow-400 hover:underline transition-colors">Explore</p>
          <p className="cursor-pointer hover:text-yellow-400 hover:underline transition-colors">Contact Us</p>
          <p className="cursor-pointer px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors">
            Help?
          </p>
        </nav>
      </div>
    </header>
  );
}
