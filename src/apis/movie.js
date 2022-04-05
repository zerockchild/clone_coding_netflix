import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const { apiKey } = process.env;

const loadTopRatedAPI = async () => axios.get(`movie/popular?api_key=${apiKey}&language=ko-KR&page=1`).then((response) => response);