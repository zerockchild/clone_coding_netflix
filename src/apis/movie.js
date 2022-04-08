import axios from 'axios';

const { REACT_APP_TMDB_API_URL, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS } = process.env;

axios.defaults.baseURL = REACT_APP_TMDB_API_URL;

const apiKey= REACT_APP_TMDB_KEY;

// header에 보여줄 영화 하나
export const getVideoAPI = async (headerMovieId) => {
    try {
      console.log('headerMovieId in API: ', headerMovieId);
      const responseData = await axios.get(`movie/${headerMovieId}/videos${apiKey}&language=ko-KR`).then((response) => response.data);
      console.log('getVideoAPI responseData: ', responseData);
      return responseData;
    } catch (error) {
      console.error(error);
    }
}
// 인기 영화
export const loadTopRatedAPI = async (data) => { 
    const responseData = await axios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`).then((response) => response.data);
    // console.log('loadTopRatedAPI responseData: ', responseData);
    return responseData;
};

// 현재 상영중인 영화
export const loadNowPlayingAPI = async (data) => {
    const responseData = await axios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`).then((response) => response.data);
    return responseData;
}

// 개봉 예정 영화
export const loadUpcomingAPI = async (data) => {
    const responseData = await axios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`).then((response) => response.data);
    return responseData;
}

// 주간 인기 시리즈
export const loadWeeklyTVAPI = async (data) => {
    const responseData = await axios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`).then((response) => response.data);
    return responseData;
}
