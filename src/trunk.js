{
    {/* <!-- Now Playing --> */ }
    <div className="row">
        <h2>Now Playing</h2>
        <div className="row__posters">
            {movies && movies.nowPlaying.map(movie => (
                <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />
            ))}
        </div>
    </div>

    {/* <!-- Popular --> */ }
    <div className="row">
        <h2>Popular</h2>
        <div className="row__posters">
            {movies && movies.popular.map(movie => (
                <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />
            ))}
        </div>
    </div>

    {/* <!-- Top Rated --> */ }
    <div className="row">
        <h2>Top Rated</h2>
        <div className="row__posters">
            {movies && movies.topRated.map(movie => (
                <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />
            ))}
        </div>
    </div>

    {/* <!-- Upcoming --> */ }
    <div className="row">
        <h2>Upcoming</h2>
        <div className="row__posters">
            {movies && movies.upcoming.map(movie => (
                <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />
            ))}
        </div>
    </div>

    {/* <!-- Weekly TV --> */ }
    <div className="row">
        <h2>Weekly TV</h2>
        <div className="row__posters">
            {movies && movies.weeklyTV.map(movie => (
                <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />
            ))}
        </div>
    </div>
}