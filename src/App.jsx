import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { movies } from "./data/movies";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar";
import AddMovieModal from "./components/AddMovieModal";
import TopMovies from "./components/TopMovies";
import MovieDetail from "./components/MovieDetails";

function App() {
const [selectedMovies,setSelectedMovies]=useState(null)


const[showModal,setShowModal]=useState(false)
const[allMovies,setAllMovies]=useState(()=>{
  const saved=localStorage.getItem("movies")
  return saved?JSON.parse(saved):movies
})

useEffect(()=>{
  localStorage.setItem("movies",JSON.stringify(allMovies))
},[allMovies])

// const handleAddMovie = (newMovie) => {
//   setAllMovies((prev) => [...prev, newMovie]);
// };
const handleAddMovie = (newMovie) => {
  const completeMovie = {
    id: Date.now(),
    // director: newMovie.director || "Unknown",
    // actors: newMovie.actors || "Unknown",
    // description: newMovie.description || "No description",
    // trailer: newMovie.trailer || "",
    ...newMovie
  };

  setAllMovies((prev) => [...prev, completeMovie]);
};

  const [genre,setGenre]=useState("all")
  const[minRating,setMinRating]=useState(0)
const filtredMovies=allMovies.filter((movie)=>{
   const matcheGenre=genre==="all"||movie.genre===genre
   const  matchRating=movie.rating>=minRating
   return matcheGenre && matchRating
  
  }
)

 const TopMovie =
  allMovies.length > 0
    ? allMovies.reduce((max, movie) =>
        movie.rating > max.rating ? movie : max
      )
    : null;

  const handleDeleteMovie=(id)=>{
    setAllMovies((prev)=>prev.filter((movie)=>movie.id!==id))
    setSelectedMovies(null)
  }

  const handleUpdateMovie = (updatedMovie) => {
  setAllMovies((prev) =>
    prev.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    )
  );
};
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
      <HeroSection movie={TopMovie} onSelect={setSelectedMovies}/>
      
       
      <TopMovies movies={allMovies}  />
      <FilterBar
      genre={genre}
      setGenre={setGenre}
      minRating={minRating}
      setMinRating={setMinRating}
      />
      <MovieList movies={filtredMovies}
      onSelect={setSelectedMovies}
      />
      {selectedMovies && (
  <MovieDetail
    movie={selectedMovies}
    onClose={() => setSelectedMovies(null)}
    onDelete={handleDeleteMovie}
    onUpdate={handleUpdateMovie}
  />
)}
    </div>
  );
}

export default App;
