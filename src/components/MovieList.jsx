import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  return (
    <div className="bg-[#111827] p-6">

      <h2 className="text-white text-2xl font-bold mb-6">
        Tous les films
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelect={onSelect}
          />
        ))}
      </div>

    </div>
  );
}

export default MovieList;