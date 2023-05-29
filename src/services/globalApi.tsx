import axios from 'axios';

const key = '73ad64dd6d66414293bb16ea563c9d54';
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const getGenreList = axiosCreate.get(`/genres?key=${key}`);

const getGameListByGenreId = (id = 1) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}`);

export default { getGenreList, getGameListByGenreId };
