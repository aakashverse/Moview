import { searchMovies } from "../lib/omdb";
import MovieCard from "../components/MovieCard";
import MoviePage from "@/components/MoviePage";

export async function getServerSideProps() {
  const movies = await searchMovies("Marvels");

  return {
    props: {
      movies: movies ?? [],
    },
  };
}

export default function Home({ movies }) {
  return (
    <>
    {/* <MoviePage/> */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
    </>
  );
}
