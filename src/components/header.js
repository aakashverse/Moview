import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData";


export default function Header({setTitle,setYear}){
    const [title, setTitleInput] = useState("");
    const [year, setYearInput] = useState("");

    function handleClick(){
        setTitle(title);
        setYear(year);  
    }
    

    return (   
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white shadow-2xl rounded">
        {/* Logo Section */}
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
        <img className="h-18 w-full tracking-tight rounded-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out transform" style={{ mixBlendMode: 'multiply' }} src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-film-black-film-illustration-image_1461389.jpg"></img>
        <span className="text-3xl lg:text-4xl font-extrabold tracking-tight cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out transform hover:text-black">
            Moview
        </span>
        </div>

        {/* Search Bar Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center p-8">
        
        <div className="relative w-full sm:w-80">
        <input id="titleInput"
         className="h-12 w-full sm:w-80 pl-12 pr-3 text-lg text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-gray-600 transition-all duration-300 ease-in-out shadow-md" 
         type="text" 
         placeholder="search movie name..."
         value={title}
         onChange={(e)=>setTitleInput(e.target.value)}
         />

        <img 
        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 opacity-70"
        alt="search" 
        />
        </div>
        
        <input id="yearInput"
         className="h-12 w-full sm:w-40 pl-4 pr-4 text-lg text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-gray-600 transition-all duration-300 ease-in-out shadow-md" 
         type="number" 
         placeholder="YYYY"
         value={year}
         onChange={(e)=>setYearInput(e.target.value)}
        />

        <button onClick={()=>handleClick()} className="text-lg font-semibold ml-3 px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Search
        </button>
        </div>

        {/* Navigation Menu Section */}
        <nav className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <p className="text-lg font-medium cursor-pointer hover:text-yellow-400 hover:underline transition-all duration-200 ease-in-out">Explore</p>
        <p className="text-lg font-medium cursor-pointer hover:text-yellow-400 hover:underline transition-all duration-200 ease-in-out">Contact Us</p>
        <p className="text-lg font-medium cursor-pointer px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all duration-200 ease-in-out">Help?</p>
        </nav>
    </div>
     
    )
    
}

