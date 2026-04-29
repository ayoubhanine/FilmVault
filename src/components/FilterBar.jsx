import React from "react";

function FilterBar({genre,setGenre,minRating,setMinRating}){
    return(
         <div className="bg-[#111827] p-6 flex flex-col md:flex-row gap-4 items-center">

      {/* Genre filter */}
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      >
        <option value="all">All genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>

      {/* Rating filter */}
      <div className="flex items-center gap-2 text-white">
        <span>Min rating:</span>

        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="p-2 rounded bg-gray-800"
        >
          <option value={0}>0+</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>
      </div>

    </div>
    )
}
export default FilterBar