import { useEffect, useState } from 'react';
import globalApi from '../services/globalApi';

type GenreListProps = {
  genreId: (id: number) => void;
};

const GenreList = ({ genreId }: GenreListProps) => {
  const [genreList, setGenreList] = useState<genreProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number>(4);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    globalApi.getGenreList.then((res) => {
      const n = res.data.results;
      console.log(n);

      return setGenreList(n);
    });
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      {genreList.map((genre) => (
        <div
          className={`dark:text-white flex gap-3 items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-95 transition duration-300 hover:font-semibold p-2 rounded-lg ${
            selectedGenre == Number(genre.id)
              ? 'bg-gray-300 font-bold dark:bg-gray-800'
              : ''
          } `}
          key={Number(genre.id)}
          onClick={() => {
            setSelectedGenre(Number(genre.id));
            genreId(Number(Number(genre.id)));
          }}
        >
          <img
            src={genre.image_background}
            alt={`${genre.name} image`}
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-lg"
          />
          <span>{genre.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
