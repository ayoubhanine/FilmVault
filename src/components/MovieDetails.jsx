function MovieDetail({ movie, onClose }) {
  if (!movie) return null;
  console.log(movie);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#111827] text-white w-[90%] max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-bold text-amber-300">{movie.title}</h2>

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

          <p className="text-yellow-400 font-bold">⭐ {movie.rating}/5</p>

          {movie.trailer && (
            <a
              href={movie.trailer}
              target="_blank"
              className="text-blue-400 underline"
            >
              Watch Trailer 🎬
            </a>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="mt-4 bg-red-600 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
