import { useState,useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieData({title,year}){
    const [movieData,setmovieData] = useState(null); 
   
    useEffect(()=>{

        async function getMovieData(){
            const omdbapi = `https://www.omdbapi.com/?t=${title}&y=${year}&apikey=19cc90d0`;
            const response = await fetch(omdbapi);
            const data = await response.json();
            console.log(data);
            if(data.Response == 'True')
                setmovieData(data);
            else
                setmovieData(null);
        } 

        getMovieData();
        
    },[title,year]); 
    
    return(
        
        <>
        {
            <MovieCard key={movieData?.Title} movie={movieData}/>
        }
    
        </>
    )
}

