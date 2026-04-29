import React from "react";
import MovieCard from "./MovieCard";

function TopMovies({ movies, onSelect }) {
  const top3Movies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-[#111827] p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        Top 3 Films
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {top3Movies.map((movie) => (
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

export default TopMovies;