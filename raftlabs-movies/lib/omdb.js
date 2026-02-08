const baseURL = "https://www.omdbapi.com";
const API_KEY = process.env.OMDB_API_KEY;

export async function searchMovies(query = "horror") {
  try {
    const res = await fetch(
      `${baseURL}/?apikey=${API_KEY}&s=${query}`
    );

    const data = await res.json();
    // console.log('search movie data :', data);
    
    return data.Search ?? [];
} catch (error) {
    console.error("OMDb search error:", error);
    return [];
}
}

export async function getMovieDetails(id) {
    try {
        const res = await fetch(
            `${baseURL}/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        console.log('get movie data :', data);
        return data;
    } catch (error) {
    console.error("OMDb details error:", error);
    return null;
  }
}
