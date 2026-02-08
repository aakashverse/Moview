import Head from "next/head";
import Image from "next/image";

export default function MoviePage({ movie }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.Title,
    description: movie.Plot,
    image: movie.Poster,
    datePublished: movie.Year,
  };

  return (
    <>
      <Head>
        <title>{movie.Title} | Review & Details</title>
        <meta name="description" content={movie.Plot} />
        <meta property="og:title" content={movie.Title} />
        <meta property="og:description" content={movie.Plot} />
        <meta property="og:image" content={movie.Poster} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">

          {/* Poster */}
          <div className="relative w-full md:w-1/3 aspect-[2/3]">
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={`${movie.Title} poster`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Details */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                {movie.Title}
              </h1>

              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {movie.Year} • {movie.Genre} • {movie.Language}
              </p>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
                {movie.Plot}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 text-sm sm:text-base">
                <span className="bg-white text-gray-900 px-3 py-1 rounded font-semibold">
                  ⭐ {movie.imdbRating}
                </span>
                <span className="text-gray-400">{movie.Runtime}</span>
                <span className="text-gray-400">{movie.Rated}</span>
                <span className="text-gray-400 break-words">
                  {movie.Awards}
                </span>
              </div>
            </div>

            {/* Credits */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm sm:text-base">
              <p className="bg-gray-800 px-4 py-2 rounded break-words">
                Director: {movie.Director}
              </p>
              <p className="bg-gray-800 px-4 py-2 rounded break-words">
                Actors: {movie.Actors}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
