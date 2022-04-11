import axios from 'axios';

const { REACT_APP_TMDB_API_URL } = process.env;

const useAxios = axios.create({

  baseURL: REACT_APP_TMDB_API_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    Accept: 'application/json; charset=UTF-8',
  },
});

export default useAxios;
