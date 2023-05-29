type genreProps = {
  id: number;
  name: string;
  image_background: string;
};

interface GameProps {
  name: string;
  background_image: string;
  metacritic: string;
  rating: number;
  reviews_count: number;
  suggestions_count: number;
}

interface GameListProps {
  gameList: GameProps[];
}

type BannerProps = { gameBanner: { name: string; background_image: string } };
