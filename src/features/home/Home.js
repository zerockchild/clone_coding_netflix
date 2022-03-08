import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import HeaderHome from "./HeaderHome";
import Loading from "../../common/components/Loading";

const Home = () => {

    const {REACT_APP_TMDB_API_URL, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_IMAGE_URL} = process.env;
    const [movies, setMovies] = useState(null);
    const moviesKeys = ["nowPlaying", "topRated", "popular", "upcoming", "weeklyTV"];
    
    useEffect(() => {
        const getMovie = async () => {

            let movieDatas = {};
            const urlCodes = ["movie/now_playing", "movie/top_rated", "movie/popular", "movie/upcoming", "trending/tv/week"];
            
            await Promise.all(urlCodes.map( code => axios.get(`${REACT_APP_TMDB_API_URL}${code}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)))
            .then( (responses) => {
                const results = responses.map( each => each.data.results);
                movieDatas = moviesKeys.reduce( (acc, curr, idx) => ({...acc, [curr]:results[idx]}), movieDatas); // https://ingnoh.tistory.com/133
            })
            .catch(error => {
                console.log(error);
                alert('에러');
            });
            
            console.log('movieDatas', movieDatas);
            setMovies((prev) => movieDatas);
        };
        
        getMovie();
        
    },[]);
    
    const bannerMovie = useMemo(() => movies && movies.nowPlaying[0],[movies]);

    return (
        !movies? <Loading /> :
        <>
            {/* <!-- Top --> */}
            <HeaderHome bannerMovie={bannerMovie}/>
            {/* <!-- Body --> */}
            {movies && moviesKeys.map( (keyName) => {
                return (
                    <div className="row" key={keyName}>
                            <h2>{keyName.toUpperCase()}</h2>
                            <div className="row__posters">
                                {movies && movies[keyName].map( (movie, idx) => 
                                    ( idx >= 10? null : <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`} alt="" /> )
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