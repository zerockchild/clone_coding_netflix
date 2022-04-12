const apiKey = '75b876ddf5ba0dcd499e9dc5ae92ba3c';

const requests = {
    fetchTopRated:`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`,
    fetchGetVideo:`https://api.themoviedb.org/3/movie/634649/videos?api_key=${apiKey}&language=ko-KR`,
    fetchMovieGenres:`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ko-KR`,
    fetchTvGenres:`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=ko-KR`,
    fetchDiscoverMovie:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&with_genres=`,
    fetchDiscoverTv:`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=ko-KR&with_genres=`,
    fetchMovieDetail:`https://api.themoviedb.org/3/movie/634649?api_key=${apiKey}&language=ko_KR`,
}

export default requests;