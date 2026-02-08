import Link from "next/link";

export default function MovieCard({ movie }) {
    if(!movie){
        if (!movie) {
      console.log("Rendering No Movie Found...");
    
      return (
        <div className="flex flex-col justify-center items-center mt-20 p-6 bg-white rounded-xl shadow-xl text-center relative">
          <img
            className="h-96 w-full object-cover rounded-xl shadow-lg opacity-60"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/IN-en-20250331-TRIFECTA-perspective_ed11f76a-3e10-41ea-a60d-9008d2b6c103_large.jpg"
            alt="movie-placeholder"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-gray-900 px-4 md:px-12">
            <h1 className="text-3xl font-semibold mb-4 drop-shadow-lg text-black">
            New releases, timeless classics, and everything in between – just search!
            </h1>
            <p className="text-lg mb-6 font-bold font-sans font-drop-shadow-md text-black">
              There’s a whole world of great movies waiting for you! Try searching with a title or explore by genre, year, or ratings. The next amazing movie is just a click away.
            </p>
            <p className="text-medium font-semibold italic text-white">
              Tip: Refine your search for a quicker discovery.
            </p>
          </div>
        </div>
      );
    }
}



  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <div className="relative w-full h-80">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {movie.Title}
          </h2>
          <p className="text-sm text-gray-500">{movie.Year}</p>
          <span className="inline-block mt-2 px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded">
            {movie.Type}
          </span>
        </div>
      </div>
    </Link>
  );
}
