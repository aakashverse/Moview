import { searchMovies } from "../lib/omdb";
import SEO from "@/components/SEO";
import MovieCard from "../components/MovieCard";

export async function getServerSideProps(context) {
  const { s, y } = context.query;

  let movies = [];

  // If user searched
  if (s && s.trim() !== "") {
    movies = await searchMovies(s, y);

    // fallback if search returned empty
    if (!movies || movies.length === 0) {
      movies = await searchMovies("stranger");
    }
  } else {
    // default movies
    movies = await searchMovies("stranger");
  }

  // limit results to 10
  movies = movies.slice(0, 10);

  return {
    props: {
      movies,
      query: s ?? "",
      year: y ?? "",
    },
  };
}


export default function Home({ movies, query, year }) {
  return (
    <>
    <SEO
      title="Moview – Search Movies Online"
      description="Find movies by title and year. Discover ratings, posters, and full details instantly."
      url="https://yourdomain.vercel.app"
    />
    
    <h1 className="text-xl font-bold p-6">
        {query ? `Search Results for "${query}"` : "Popular Movies"}
    </h1>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
    </>
  );
}