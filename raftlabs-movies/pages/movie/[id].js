import { useRouter } from "next/router";
import MoviePage from "@/components/MoviePage";
import { getMovieDetails } from "@/lib/omdb";

export async function getServerSideProps(context) {
  const { id } = context.params; // get movie ID from URL
  const movie = await getMovieDetails(id);

  return {
    props: {
      movie: movie ?? null,
    },
  };
}

export default function Movie({ movie }) {
  if (!movie) return <p>Movie not found</p>;

  return <MoviePage movie={movie} />;
}
