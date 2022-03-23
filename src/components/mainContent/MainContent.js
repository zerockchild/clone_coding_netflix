import DisplayMovieRow from "../displayMovieRow/DisplayMovieRow";
import {Container} from "./style/MainContentStyle";
import requests from "../../requests";
import {useEffect, useState} from "react";
import ModalMovieDetails from "../modalMovieDetails/ModalMovieDetails";

function MainContent() {
    const [loading, setLoading] = useState(true);
    const [movieGenList, setMovieGenList] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const [category, setCategory] = useState('');
    const getMovieGenList = async () => {
        const json = await (
            await fetch(requests.fetchTvGenres)
        ).json()
        setMovieGenList(json.genres)
        setLoading(false)
    }
    const modalOpen = (boolean) =>{
        setOpen(boolean);
    }
    const setCurrentMovie = (currentMovie) => {
        console.log(currentMovie)
        setMovie(currentMovie)
    }
    const setMovieCat = () => {
        setCategory('movie')
    };
    const setTvCat = () => {
        setCategory('tv')
    };
    useEffect(() =>{
        getMovieGenList();
    },[])
    return(
        <Container>
            <DisplayMovieRow request = {requests.fetchTopRated} title="Top Rate" isOpen = {modalOpen} currentMovie = {setCurrentMovie} category ={setMovieCat}/>
            <ModalMovieDetails isOpen={isOpen} isClose={setOpen} currentMovie = {movie} currentCategory = {category}/>
            {loading ? null:<div>
            {movieGenList.map((genres)=> (
                <DisplayMovieRow request={requests.fetchDiscoverTv + genres.id} title={genres.name} isOpen = {modalOpen} currentMovie = {setCurrentMovie} category = {setTvCat}/>
            ))}</div>}
        </Container>
    )
}

export default MainContent;
