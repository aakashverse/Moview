


export default function MovieCard({movie}){
    console.log("Movie prop:", movie); 
    
    // if(!movie){
    //   console.log("I am Renderening...")
    //     return(
    //       <div className="h-200 w-full items-center mt-20 p-6 mask-b-from-gray-800  rounded-xl shadow-lg">
    //         <h1 className="text-white font-semibold object-contain flex justify-center items-center">Find Movies that excites you, Take a look before giving your preciuous time to anything</h1>
    //         <img 
    //         className="h-180 w-full m-4 p-6 rounded-xl shadow-lg"
    //         src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/IN-en-20250331-TRIFECTA-perspective_ed11f76a-3e10-41ea-a60d-9008d2b6c103_large.jpg" alt="movie-banners">
    //         </img>
    //       </div>
    //     )
    // }

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
    
    
    // console.log("Movie prop:", movie); 
    return (
        <>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-10 px-6 md:px-12 bg-gray-100 rounded-lg shadow-xl">
            <div className="w-full lg:w-1/2 flex flex-col items-center mt-6 lg:mt-0">
              <div className="relative w-full">
                {/* left part - movie Poster  */}
                <img 
                  className="h-auto max-h-[450px] w-full object-contain rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105" 
                  src={movie?.Poster} 
                  alt={`${movie?.Title} Poster`} 
                />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 text-center mt-6">{movie?.Title} ({movie?.Year})</h1>
            </div>
             
             {/* right part - all other details*/}
            <div className="w-full lg:w-1/2 mt-6 ml-2 lg:mt-0 ">
              <h2 className="text-xl font-medium text-green-500 mt-4">IMDB Rating: {movie?.imdbRating}</h2>
              <h2 className="text-xl font-medium text-gray-700 mt-4">Released: {movie?.Released}</h2>
              <h2 className="text-xl font-medium text-gray-700 mt-4">Duration: {movie?.Runtime}</h2>
              <h2 className="text-xl font-medium text-red-500 mt-4">Genre: {movie?.Genre}</h2>
              <h2 className="text-xl font-medium text-black mt-4">Star Cast: {movie?.Actors}</h2>
              <h2 className="text-xl font-medium text-gray-900 mt-4">Director: {movie?.Director}</h2>
              <h2 className="text-xl font-medium text-gray-700 mt-4">Writer: {movie?.Writer}</h2>
              <div className="font-semibold font-sans text-lg mt-4">
                <p className="text-xl text-blue-900 shadow-lg transform transition-transform duration-300 hover:scale-105">Plot: {movie?.Plot}</p>
              </div>
              <h2 className="text-xl font-medium text-gray-700 mt-4">Language: {movie?.Language}</h2>
              <h2 className="text-xl font-medium text-gray-700 mt-4">Country: {movie?.Country}</h2>
              <h2 className="text-xl font-medium text-yellow-900 mt-4">Awards: {movie?.Awards}</h2>
              <h2 className="text-xl font-medium text-purple-900 mt-4">BoxOffice: {movie?.BoxOffice}</h2>
            </div>     
          </div>
        </>
      );     
}