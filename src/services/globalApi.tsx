import axios from 'axios';

const key = import.meta.env.VITE_RAWG_KEY;
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const getGenreList = axiosCreate.get(`/genres?key=${key}`);

const getGameListByGenreId = (id = 1) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}`);

export default { getGenreList, getGameListByGenreId };
