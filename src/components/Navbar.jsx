import React from "react";
function Navbar(){
    return(
        <div className="flex justify-between items-center border-b border-yellow-500 pb-3 mb-4">
  <h1 className="text-xl font-bold text-yellow-400">FilmVault</h1>

  <button className="bg-gray-200 text-black px-4 py-1 rounded-full font-medium hover:bg-white transition">
    + Ajouter
  </button>
</div>
    )
}
export default Navbar