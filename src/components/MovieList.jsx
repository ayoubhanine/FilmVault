import React from "react";
import MovieCard from "./MovieCard";
function MovieList({movies}){
    return(
      
            <div className="flex  flex-col gap-1.5  bg-[#111827] p-4 rounded-lg mb-6">
              <h3 className="text-cyan-50">Top 3 films</h3> <br />
      <div className="flex gap-1.5  bg-[#111827] p-4 rounded-lg mb-6"> {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}</div>
    </div>

        
    )
}
export default MovieList;