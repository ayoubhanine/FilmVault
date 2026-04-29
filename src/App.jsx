import { useState } from "react";


import MovieList from "./components/MovieList";
import { movies } from "./data/movies";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  const TopMovie=movies.reduce((max,movie)=>
  movie.rating>max.rating?movie:max);
  return (
    <div >
      <Navbar></Navbar>
      <HeroSection movie={TopMovie}/>
      <MovieList movies={movies} />
      
    </div>
  );
}

export default App;
