import {MenuBar, HeaderContainer, MovieListContainer, NavContainer, FooterContainer} from "./style/MainContentStyle";
import {useEffect, useState} from "react";
import DisplayMovieRow from "./DisplayMovieRow";
import ModalMovieDetails from "./ModalMovieDetails";
import requests from "../../requests";
import Header from "./Header";
import {useScroll} from "../../hooks/useScroll";

function MainContent(props) {
    const [loading, setLoading] = useState(true);
    const [movieGenList, setMovieGenList] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const [movieDefault, setMovieDefault] = useState({})
    const [category, setCategory] = useState('');
    const {scrollY} = useScroll()
    const getMovieGenList = async () => {
        const json = await (
            await fetch(requests.fetchTvGenres)
        ).json()
        setMovieGenList(json.genres)
        console.log(json.genres)
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
        console.log(props.movieDefault)
    },[])
    return(
        <>
            <NavContainer scrollY={scrollY}>
                <a aria-label="넷플릭스"><img src="https://t1.daumcdn.net/cfile/tistory/99EE2F485ECDDF470C"/></a>
                <MenuBar>
                    <li><a href="#">홈</a></li>
                    <li><a href="#">시리즈</a></li>
                    <li><a href="#">영화</a></li>
                    <li><a href="#">NEW! 요즘 대세 콘텐츠</a></li>
                    <li><a href="#">내가 찜한 콘텐츠</a></li>
                </MenuBar>
            </NavContainer>

            <HeaderContainer>
                <Header currentMovie = {props.movieDefault} currentCategory ='movie'/>
            </HeaderContainer>

            <MovieListContainer>
                <DisplayMovieRow request = {props.topRateMovie} title="Top Rate" isOpen = {modalOpen} currentMovie = {setCurrentMovie} category ={setMovieCat}/>
                <ModalMovieDetails isOpen={isOpen} isClose={setOpen} currentMovie = {movie} currentCategory = {category}/>
                {loading ? null:<div>
                {movieGenList.map((genres)=> (
                    <DisplayMovieRow request={requests.fetchDiscoverTv + genres.id} title={genres.name} isOpen = {modalOpen} currentMovie = {setCurrentMovie} category = {setTvCat}/>
                ))}</div>}
            </MovieListContainer>

            <FooterContainer/>
        </>
    )
}

export default MainContent;
