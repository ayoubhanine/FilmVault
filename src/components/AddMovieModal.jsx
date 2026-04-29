import React, { useState } from "react";

function AddMovieModal({onClose,onAdd}){
const[form,setForm]=useState({
    title:"",
    genre:"",
    rating:1,
    image:""
})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newMovie={
        id:Date.now(),
        ...form,
        rating:Number(form.rating)
    };
    onAdd(newMovie)
    onClose()
  }

    return(
       <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#111827] p-6 rounded-lg w-100">

        <h2 className="text-white text-xl mb-4">
          Ajouter un film
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            name="title"
            placeholder="Titre"
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />

          <input
            name="genre"
            placeholder="Genre"
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />

          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            placeholder="Note"
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />

          <input
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />

          <div className="flex gap-2 mt-3">

            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded text-white"
            >
              Ajouter
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 px-4 py-2 rounded text-white"
            >
              Annuler
            </button>

          </div>

        </form>
      </div>

    </div>
    )
}
export default AddMovieModal