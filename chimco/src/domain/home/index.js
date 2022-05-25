import MainContent from "../../common/component/MainContent";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "react-query";


function Home(props) {
    const { REACT_APP_TMDB_API_URL,REACT_APP_TMDB_TOP_RATE_MOVIE, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_THUMBNAIL_IMAGE_URL } = process.env;
    const [topRateMovie, setTopRateMovie] = useState("");
    const [loading, setLoading] = useState(true);
    const { isLoading, error, data, isFetching } = useQuery("topRateData", () =>
        axios.get(
            url
        ).then((res) => res.data)
    );

    const url = REACT_APP_TMDB_API_URL + REACT_APP_TMDB_TOP_RATE_MOVIE + REACT_APP_TMDB_KEY + REACT_APP_TMDB_OPTIONS

    const getMovieFromApi = async() => {
        const response = await axios.get(url);
        setTopRateMovie(url)
        setLoading(false)
    }

    useEffect(() => {
        getMovieFromApi();
    },[])
    return (
        <div>
            {loading ? null :
                <MainContent topRateMovie={topRateMovie}  title={"topRateData"}/>
            }
        </div>
    );
}

export default Home;