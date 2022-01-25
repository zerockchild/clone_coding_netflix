import {useEffect, useState} from "react";
import requests from "../../requests";

function DisplayMovieRow() {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState({});
    const getMovie = async () =>{
        const json = await(
            await fetch(requests.fetchTopRated)
        ).json()
        setMovieList(json.results)
        setLoading(false)
    }
    useEffect(() => {
        getMovie();
    }, [])
    return(
        <div>
            {loading ?null:
            <ul>
            {movieList.map((movie) => (
                <li key={movie.id}>
                    <img src={'https://www.themoviedb.org/t/p/w220_and_h330_face'+movie.poster_path}/>
                    {movie.title}
                </li>
            ))}
            </ul>}
        </div>
    )
}

export default DisplayMovieRow