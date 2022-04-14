import catchAsync from '../common/utils/catchAsync';
import useAxios from '../common/utils/useAxios';

const { REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS } = process.env;

const apiKey= REACT_APP_TMDB_KEY;

// 주간 인기 시리즈
export const loadWeeklyTVAPI = async (data) => await catchAsync(useAxios.get(`${data}${apiKey}${REACT_APP_TMDB_OPTIONS}`));