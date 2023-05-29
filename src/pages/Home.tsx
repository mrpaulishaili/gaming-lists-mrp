import { useEffect, useState } from 'react';
import GenreList from '../components/GenreList';
import globalApi from '../services/globalApi';
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenreId from './GamesByGenreId';

const Home = () => {
  const [gameListByGenre, setGameListByGenre] = useState([]);

  useEffect(() => {
    getGameListByGenreId(4);
  }, []);

  const getGameListByGenreId = (id: number) => {
    console.log(id);

    globalApi.getGameListByGenreId(id).then((res) => {
      console.log(res.data.results);
      setGameListByGenre(res.data.results);
    });
  };

  return (
    <main className="p-6 grid grid-cols-4">
      <div className="hidden md:flex flex-col">
        <h3 className="text-3xl font-bold dark:text-white">Game Genres</h3>
        <GenreList genreId={(genreId) => getGameListByGenreId(genreId)} />
      </div>

      {gameListByGenre.length > 0 && (
        <div className="col-span-4 md:col-span-3">
          <Banner gameBanner={gameListByGenre[0]} />

          <TrendingGames gameList={gameListByGenre} />

          <GamesByGenreId gameList={gameListByGenre} />
        </div>
      )}
    </main>
  );
};

export default Home;
