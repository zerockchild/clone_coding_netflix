import {useEffect, useState} from "react";

function DisplayMovieRow() {
    const apiKey = '75b876ddf5ba0dcd499e9dc5ae92ba3c';
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState({});
    const getMovie = async () =>{
        const json = await(
            await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`)
        ).json()
        console.log(json.results);
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