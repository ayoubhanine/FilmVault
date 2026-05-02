function MovieDetail({ movie, onClose, onDelete }) {
  if (!movie) return null;

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
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;