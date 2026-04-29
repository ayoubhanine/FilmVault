import React from "react";

function Navbar({ onAddClick }) {
  return (
    <div className="w-full">

     
      <div className="h-1 bg-amber-300"></div>

  
      <div className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
        
       
        <h1 className="text-2xl font-bold text-amber-300 tracking-wide">
          🎬 FilmVault
        </h1>

       
        <button
          onClick={onAddClick}
          className="bg-amber-300 text-black px-5 py-2 rounded-full font-semibold 
          hover:bg-amber-400 hover:scale-105 transition duration-300 shadow-lg"
        >
          + Ajouter
        </button>

      </div>
    </div>
  );
}

export default Navbar;