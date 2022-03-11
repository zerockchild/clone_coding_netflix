import axios from "axios";
import HeaderHome from "./HeaderHome";
import Loading from "../../common/components/Loading";
import { useQuery } from 'react-query';
import Error from "../../common/components/Error";

const Home = () => {

    const { REACT_APP_TMDB_API_URL, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_IMAGE_URL } = process.env;
    const movieKeys = [{ key: "nowPlaying", title: "Now Playing", url: "movie/now_playing"},
        { key: "topRated", title: "Top Rated", url: "movie/top_rated"},
        { key: "popular", title: "Popular", url: "movie/popular"},
        { key: "upcoming", title: "Upcoming", url: "movie/upcoming"},
        { key: "weeklyTV", title: "Weekly TV", url: "trending/tv/week"}
    ];

    const fetcher = async () => {
        return await Promise.all(movieKeys.map(movieKey => axios.get(`${REACT_APP_TMDB_API_URL}${movieKey.url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)))
            .then((responses) => {
                const results = responses.map(each => each.data.results);
                return movieKeys.reduce((acc, curr, idx) => ({ ...acc, [curr.key]: results[idx] }), {});
            });
    }
    
    const { data, isLoading, error } = useQuery('movies', fetcher, { retry: 0 });
    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (
        <>
            {/* <!-- Top --> */}
            <HeaderHome bannerMovie={data.nowPlaying[0]} />
            {/* <!-- Body --> */}
            {movieKeys.map((movieKey) => {
                return (
                    <div className="row" key={movieKey.key}>
                        <h2>{movieKey.title}</h2>
                        <div className="row__posters">
                            {data[movieKey.key].map((movie, idx) =>
                                (idx >= 10 && <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />)
                            )}
                        </div>
                    </div>
                )
            })
            }
        </>
    );

}

export default Home;