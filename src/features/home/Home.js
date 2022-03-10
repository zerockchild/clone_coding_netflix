import axios from "axios";
import HeaderHome from "./HeaderHome";
import Loading from "../../common/components/Loading";
import { useQuery } from 'react-query';
import Error from "../../common/components/Error";

const Home = () => {

    const { REACT_APP_TMDB_API_URL, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_IMAGE_URL } = process.env;
    const moviesKeys = ["nowPlaying", "topRated", "popular", "upcoming", "weeklyTV"];
    const urls = ["movie/now_playing", "movie/top_rated", "movie/popular", "movie/upcoming", "trending/tv/week"];

    const fetcher = async () => {

        return await Promise.all(urls.map(url => axios.get(`${REACT_APP_TMDB_API_URL}${url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)))
            .then((responses) => {
                const results = responses.map(each => each.data.results);
                return moviesKeys.reduce((acc, curr, idx) => ({ ...acc, [curr]: results[idx] }), {});
            })
    }
    const { data, isLoading, error } = useQuery('movies', fetcher, { retry: 0 });

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <>
            {/* <!-- Top --> */}
            <HeaderHome bannerMovie={data.nowPlaying[0]} />
            {/* <!-- Body --> */}
            {moviesKeys.map((keyName) => {
                return (
                    <div className="row" key={keyName}>
                        <h2>{keyName.toUpperCase()}</h2>
                        <div className="row__posters">
                            {data[keyName].map((movie, idx) =>
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