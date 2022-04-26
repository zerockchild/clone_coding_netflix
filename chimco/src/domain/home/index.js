import MainContent from "../../common/component/MainContent";
import {useEffect, useState} from "react";
import axios from "axios";


function Home() {
    const { REACT_APP_TMDB_API_URL,REACT_APP_TMDB_TOP_RATE_MOVIE, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_THUMBNAIL_IMAGE_URL } = process.env;
    const [movieDefault, setMovieDefault]= useState({});
    const [topRateMovie, setTopRateMovie] = useState("");
    const [loading, setLoading] = useState(true);

    const url = REACT_APP_TMDB_API_URL + REACT_APP_TMDB_TOP_RATE_MOVIE + REACT_APP_TMDB_KEY + REACT_APP_TMDB_OPTIONS

    const getMovieFromApi = async() => {
        const response = await axios.get(url);
        setTopRateMovie(url)
        setMovieDefault(response.data.results[0])
        setLoading(false)
    }

    useEffect(() => {
        getMovieFromApi();
    },[])
    return (
        <div>
            {loading ? null :
                <MainContent movieDefault={movieDefault} topRateMovie={topRateMovie}/>
            }
        </div>
    );
}

export default Home;