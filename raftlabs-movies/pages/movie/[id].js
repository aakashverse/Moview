import SEO from "../../components/SEO";
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
  return(
    <>
   <SEO
      title={`${movie.Title} (${movie.Year}) Review`}
      description={movie.Plot}
      image={movie.Poster}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Movie",
          name: movie.Title,
          image: movie.Poster,
          datePublished: movie.Year,
          description: movie.Plot,
        }),
      }}
    />

   <MoviePage movie={movie} />;
   </>
  )
}
