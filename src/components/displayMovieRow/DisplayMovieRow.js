import {useEffect, useState} from "react";
import requests from "../../requests";
import {Item, Row, RowContainer} from "./style/DisplayMovieRowStyle";

function DisplayMovieRow({request, title}) {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState({});
    const getMovie = async () =>{
        const json = await(
            await fetch(request)
        ).json()
        setMovieList(json.results)
        setLoading(false)
        console.log(movieList)
    }
    useEffect(() => {
        getMovie();
    }, [])
    return(
        <RowContainer>
            <div>{title}</div>
            {loading ?null:
            <Row>
            {movieList.map((movie) => (
                <Item key={movie.id}>
                    <img src={'https://www.themoviedb.org/t/p/w220_and_h330_face'+movie.poster_path}/>
                </Item>
            ))}
            </Row>}
        </RowContainer>
    )
}

export default DisplayMovieRow