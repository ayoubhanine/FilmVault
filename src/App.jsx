import { useState } from "react";
import MovieList from "./components/MovieList";
import { movies } from "./data/movies";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar";

function App() {
  const [genre,setGenre]=useState("all")
  const[minRating,setMinRating]=useState(0)
const filtredMovies=movies.filter((movie)=>{
   const matcheGenre=genre==="all"||movie.genre===genre
   const  matchRating=movie.rating>=minRating
   return matcheGenre && matchRating
  
  }
)

  const TopMovie=movies.reduce((max,movie)=>
  movie.rating>max.rating?movie:max);
  return (
    <div >
      <Navbar></Navbar>
      <HeroSection movie={TopMovie}/>
      
      <MovieList movies={filtredMovies} />
      <FilterBar
      genre={genre}
      setGenre={setGenre}
      minRating={minRating}
      setMinRating={setMinRating}
      />
    </div>
  );
}

export default App;
