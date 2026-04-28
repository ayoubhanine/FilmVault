import React from "react";

function MovieCard({ movie }) {
  return (
 <div className="flex gap-4 bg-[#111827] p-4 rounded-lg mb-6">
  <img 
    src={movie.image}
    alt={movie.title}
    className="w-24 h-32 object-cover rounded-md"
  />

  <div className="p-4">
    <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
    <p className="text-gray-400">{movie.genre}</p>
    <p className="text-yellow-400">
      {"⭐".repeat(movie.rating)}
    </p>
  </div>
</div>
  );
}

export default MovieCard;