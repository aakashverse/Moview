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

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8 bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Movie Poster */}
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
            alt={movie.Title} 
            // className="w-full md:w-1/3 object-cover"
            width={300}
            height={350}
          />

          {/* Movie Details */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{movie.Title}</h1>
              <p className="text-gray-400 mb-4">{movie.Year} • {movie.Genre} • {movie.Language}</p>

              <p className="text-gray-200 mb-4">{movie.Plot}</p>

              <div className="flex items-center gap-4">
                <p className="bg-white text-gray-900 px-3 py-1 rounded font-semibold flex items-center gap-1">
                  IMDB Rating -  {movie.imdbRating} ⭐
                </p>
                <p className="text-gray-400">{movie.Runtime}</p>
                <p className="text-gray-400">{movie.Rated}</p>
                <p className="text-gray-400">{movie.Awards}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <p className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition">
                Director: {movie.Director}
              </p>
              <p className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition">
                Actors: {movie.Actors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
