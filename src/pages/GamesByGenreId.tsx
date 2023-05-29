const GamesByGenreId = ({ gameList }: GameListProps) => {
  return (
    <section className="py-6">
      <h3 className="text-2xl font-bold">Popular Games</h3>
      <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-2 md:gap-3 justify-between py-3">
        {gameList.map((game, index) => (
          <div
            className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 flex flex-col gap-3 cursor-pointer hover:scale-95 transition duration-300 hover:opacity-90"
            key={index}
          >
            <img
              src={game.background_image}
              alt={`${game.name} image`}
              className="rounded-lg object-cover h-64"
            />
            <h3 className="font-bold text-lg leading-none flex items-center justify-between gap-1">
              {game.name}{' '}
              <span className="bg-blue-300 text-sm rounded-lg p-1 leading-none">
                {game.metacritic}
              </span>
            </h3>
            <div className="flex items-center justify-between">
              <h2>⭐️ {game.rating}</h2>
              <span>💬 {game.reviews_count}</span>
              <span>🔥 {game.suggestions_count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesByGenreId;
