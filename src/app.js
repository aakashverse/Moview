import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './components/Parent';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';


export default function App(){
    const [title,setTitle] = useState("");
    const [year,setYear] = useState("");

    return(

        <div>
            <Parent></Parent>
            {/* <MovieCard></MovieCard> */}
            <Footer></Footer>
        </div>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);