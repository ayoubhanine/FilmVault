import React from "react";

function MovieCard({ movie,onSelect }) {
  return (
 <div onClick={()=>onSelect(movie)} className="flex  flex-col gap-2 bg-[#3F3737] p-4 rounded-lg mb-6 h-72">
  <img 
    src={movie.image}
    alt={movie.title}
    className="w-28 h-32 object-cover rounded-md"
  />

  <div className="p-4">
    <h3 className="text-lg text-white font-bold mt-2">{movie.title}</h3>
    <p className="text-gray-400">{movie.genre}</p>
    <p className="text-yellow-400">
      {"⭐".repeat(movie.rating)}
    </p>
  </div>
  
</div>
  );
}

export default MovieCard;