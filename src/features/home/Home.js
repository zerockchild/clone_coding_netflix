import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import HeaderHome from "./HeaderHome";

const Home = () => {

    const {REACT_APP_TMDB_KEY, REACT_APP_TMDB_API_URL, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_IMAGE_URL} = process.env;
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const getMovie = async () => {

            let movieDatas = {};
            const nowPlaying = await axios.get(`${REACT_APP_TMDB_API_URL}movie/now_playing${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`);
            const topRated = await axios.get(`${REACT_APP_TMDB_API_URL}movie/top_rated${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`);
            const popular = await axios.get(`${REACT_APP_TMDB_API_URL}movie/popular${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`);
            const upcoming = await axios.get(`${REACT_APP_TMDB_API_URL}movie/upcoming${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`);
            const weeklyTV = await axios.get(`${REACT_APP_TMDB_API_URL}trending/tv/week${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`);
            movieDatas = {...movieDatas, nowPlaying: nowPlaying.data.results, topRated: topRated.data.results, popular: popular.data.results, upcoming: upcoming.data.results, weeklyTV:weeklyTV.data.results};
            
            // console.log('movieDatas', movieDatas);
            setMovies((prev) => movieDatas);
        };
        
        getMovie();
        
    },[]);
    
    // console.log('Home');
    
    const objectKeys = movies && Object.keys(movies);
    // movies && console.log('Home', Object.keys(movies));

    return (
        <>
            <HeaderHome bannerMovie={useMemo(() => movies && movies.nowPlaying[0],[movies])}/>
            {/* <!-- Body --> */}
            {movies && objectKeys.map( (keyName) => {

                    return (
                        <div className="row" key={keyName}>
                            <h2>{keyName.toUpperCase()}</h2>
                            <div className="row__posters">
                                {movies && movies[keyName].map(movie => (
                                    <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" />
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </>
    );

}

export default Home;