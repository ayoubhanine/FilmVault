
import { useState,useEffect } from "react";
function MovieDetail({ movie, onClose, onDelete,onUpdate }) {
  if (!movie) return null;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(movie);

  useEffect(() => {
    setFormData(movie);
  }, [movie]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#111827] text-white w-[90%] max-w-2xl rounded-lg overflow-hidden shadow-lg max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />

        {/* CONTENT (SCROLLABLE) */}
        <div className="p-6 space-y-3 overflow-y-auto flex-1">
            {isEditing && (
  <div className="flex flex-col gap-2 mt-4">

    <input
      value={formData.title}
      onChange={(e) =>
        setFormData({ ...formData, title: e.target.value })
      }
      className="p-2 text-white  bg-blue-400"
    />

    <input
      value={formData.Year}
      onChange={(e) =>
        setFormData({ ...formData, Year: e.target.value })
      }
    className="p-2 text-white  bg-blue-400"
    />

    <input
      value={formData.genre}
      onChange={(e) =>
        setFormData({ ...formData, genre: e.target.value })
      }
      className="p-2 text-white bg-blue-400"
    />

    <button
      onClick={() => {
        onUpdate(formData);
        setIsEditing(false);
      }}
      className="bg-green-600 px-4 py-2 rounded"
    >
      Sauvegarder
    </button>

  </div>
)}
          <h2 className="text-2xl font-bold text-amber-300">
            {movie.title}
          </h2>

          <p>
            <span className="text-gray-400">Year:</span> {movie.Year}
          </p>

          <p>
            <span className="text-gray-400">Genre:</span> {movie.genre}
          </p>

          <p>
            <span className="text-gray-400">Director:</span> {movie.director}
          </p>

          <p>
            <span className="text-gray-400">Actors:</span> {movie.actors}
          </p>

          <p className="text-gray-300">{movie.description}</p>

          <p className="text-yellow-400 font-bold">
            ⭐ {movie.rating}/5
          </p>

          {movie.trailer && (
            <a
              href={movie.trailer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Watch Trailer 🎬
            </a>
          )}
        </div>

        {/* BUTTONS (FIXED AT BOTTOM) */}
        <div className="flex gap-3.5 p-4 border-t border-gray-700">
          <button
            onClick={onClose}
            className="bg-gray-600 px-4 py-2 rounded"
          >
            Close
          </button>

          <button
            onClick={() => onDelete(movie.id)}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Supprimer
          </button>
          <button
             onClick={() => setIsEditing(true)}
             className="bg-blue-600 px-4 py-2 rounded "
          >
               Modifier
              </button>
            
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;