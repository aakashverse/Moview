import React, { useState } from 'react';
import Header from './header';
import MovieData from './MovieData';

export default function Parent(){
    const [title,setTitle] = useState("");
    const [year,setYear] = useState("");

    return(
       
        <div>
            <Header setTitle={setTitle} setYear={setYear}/>
            <MovieData title={title} year={year}/>
        </div>
          
    );
}