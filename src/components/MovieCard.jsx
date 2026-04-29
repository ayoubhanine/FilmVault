import React from "react";

function MovieCard({ movie, onSelect }) {
  return (
    <div
      onClick={() => onSelect?.(movie)}
      className="cursor-pointer bg-[#3F3737] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg text-white font-bold">
          {movie.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {movie.genre}
        </p>

        <p className="text-yellow-400 mt-2">
          ⭐ {movie.rating}/5
        </p>
      </div>
    </div>
  );
}

export default MovieCard;