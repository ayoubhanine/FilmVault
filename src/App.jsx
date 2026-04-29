import { useState } from "react";
import MovieList from "./components/MovieList";
import { movies } from "./data/movies";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar";
import AddMovieModal from "./components/AddMovieModal";
import TopMovies from "./components/TopMovies";

function App() {
const[showModal,setShowModal]=useState(false)
const[allMovies,setAllMovies]=useState(movies)

const handleAddMovie = (newMovie) => {
  setAllMovies((prev) => [...prev, newMovie]);
};

  const [genre,setGenre]=useState("all")
  const[minRating,setMinRating]=useState(0)
const filtredMovies=allMovies.filter((movie)=>{
   const matcheGenre=genre==="all"||movie.genre===genre
   const  matchRating=movie.rating>=minRating
   return matcheGenre && matchRating
  
  }
)

  const TopMovie=allMovies.reduce((max,movie)=>
  movie.rating>max.rating?movie:max);
  return (
    <div >
      <Navbar  
      onAddClick={() => setShowModal(true)}
      />
      {showModal && (
  <AddMovieModal
    onClose={() => setShowModal(false)}
    onAdd={handleAddMovie}
  />
)}
      <HeroSection movie={TopMovie}/>
      
       
      <TopMovies movies={movies} />
      <FilterBar
      genre={genre}
      setGenre={setGenre}
      minRating={minRating}
      setMinRating={setMinRating}
      />
      <MovieList movies={filtredMovies} />
    </div>
  );
}

export default App;
