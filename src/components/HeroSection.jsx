function HeroSection({ movie }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-[70vh] flex items-end text-white">

      <img
        src={movie.image}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-linear-to-t from-gray-800 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 p-10 max-w-2xl">

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          {movie.title}
        </h1>

        <p className="text-gray-300 mb-2">
          Genre: <span className="text-white">{movie.genre}</span>
        </p>

        <p className="text-yellow-400 font-semibold mb-6">
                {"⭐".repeat(movie.rating)}
        </p>

        <div className="flex gap-3">
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition">
            Voir détails
          </button>

          <button className="bg-white/20 hover:bg-white/30 px-5 py-2 rounded-lg transition">
            Ajouter aux favoris
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;