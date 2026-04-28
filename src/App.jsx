import { useState } from "react";


import MovieList from "./components/MovieList";
import { movies } from "./data/movies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MovieList movies={movies} />
      
    </div>
  );
}

export default App;
