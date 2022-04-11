import catchAsync from '../common/utils/catchAsync';
import useAxios from '../common/utils/useAxios';

const { REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS } = process.env;

const apiKey= REACT_APP_TMDB_KEY;

// header에 보여줄 영화 하나
export const getVideoAPI = (headerMovieId) => catchAsync(useAxios.get(`movie/${headerMovieId}/videos${apiKey}&language=ko-KR`));

// 인기 영화
export const loadTopRatedAPI = (data) => catchAsync(useAxios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`));

// 현재 상영중인 영화
export const loadNowPlayingAPI = (data) => catchAsync(useAxios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`));

// 개봉 예정 영화
export const loadUpcomingAPI = (data) => catchAsync(useAxios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`));
