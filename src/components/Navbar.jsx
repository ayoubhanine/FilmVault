import React from "react";
function Navbar(){
    return(
        <div className="flex justify-between items-center border-b border-b-cyan-950 pb-3 mb-4">
  <h1 className="text-xl font-bold text-gray-800">FilmVault</h1>

  <button className="bg-gray-200 text-black px-4 py-1 rounded-3xl font-medium hover:bg-cyan-950 transition">
    + Ajouter
  </button>
</div>
    )
}
export default Navbar