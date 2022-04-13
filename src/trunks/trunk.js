// map으로 대체
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

// useQuery로 대체

const [movies, setMovies] = useState(null);

useEffect(() => {

    const getMovie = async () => {

        let movieDatas = {};

        await Promise.all(urls.map(url => axios.get(`${REACT_APP_TMDB_API_URL}${url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)))
            .then((responses) => {
                const results = responses.map(each => each.data.results);
                movieDatas = moviesKeys.reduce((acc, curr, idx) => ({ ...acc, [curr]: results[idx] }), movieDatas); // https://ingnoh.tistory.com/133
            })
            .catch(error => {
                console.log(error);
                alert('에러');
            });

        // console.log('movieDatas', movieDatas);
        setMovies((prev) => movieDatas);
    };

    getMovie();

}, []);
console.log(movies);
const bannerMovie = useMemo(() => movies?.nowPlaying[0], [movies]);