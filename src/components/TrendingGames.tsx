const TrendingGames = ({ gameList }: GameListProps) => {
  return (
    <section className="py-6 hidden md:block">
      <h3 className="text-2xl font-bold">Trending Games</h3>

      <div className="hidden sm:grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-3 justify-between py-3">
        {gameList
          .filter((game) => Number(game.metacritic) < 90)
          .map(
            (game, index) =>
              index < 4 && (
                <div
                  className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 flex flex-col gap-3 cursor-pointer hover:scale-95 transition duration-300 hover:opacity-90"
                  key={index}
                >
                  <img
                    src={game.background_image}
                    alt={`${game.name} image`}
                    className="rounded-lg object-cover h-64"
                  />
                  <h3 className="font-bold text-lg leading-none">
                    {game.name}
                  </h3>
                </div>
              )
          )}
      </div>
    </section>
  );
};

export default TrendingGames;
