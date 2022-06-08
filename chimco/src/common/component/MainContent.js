import {MenuBar, HeaderContainer, MovieListContainer, NavContainer, FooterContainer} from "./style/MainContentStyle";
import {useEffect, useState} from "react";
import DisplayMovieRow from "./DisplayMovieRow";
import ModalMovieDetails from "./ModalMovieDetails";
import requests from "../../requests";
import Header from "./Header";
import {useScroll} from "../../hooks/useScroll";
import axios from "axios";
import {useQuery} from "react-query";

function MainContent(props) {
    const [loading, setLoading] = useState(true);
    const [movieGenList, setMovieGenList] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const [category, setCategory] = useState('');
    const videoQuery = useQuery(props.title);
    const {scrollY} = useScroll()
    const getMovieGenList = async () => {
        const response = await axios.get(requests.fetchTvGenres);
        setMovieGenList(response.data.genres)
        console.log(response.data.genres)
        setLoading(false)
    }
    const modalOpen = (boolean) => {
        setOpen(boolean);
        console.log(isOpen);
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
    useEffect(() => {
        getMovieGenList();
        console.log(videoQuery.data)
    }, [])
    return (
        <>
            <NavContainer scrollY={scrollY}>
                <a href="/" aria-label="넷플릭스"><img src={`${process.env.PUBLIC_URL}/netflixlogo.png`}/></a>
                <MenuBar>
                    <li><a href="/">홈</a></li>
                    <li><a href="/series">시리즈</a></li>
                    <li><a href="/movie">영화</a></li>
                    <li><a href="/newContents">NEW! 요즘 대세 콘텐츠</a></li>
                    <li><a href="/myContents">내가 찜한 콘텐츠</a></li>
                </MenuBar>
            </NavContainer>

            <HeaderContainer>
                <Header currentMovie={videoQuery.data.results[0]} currentCategory='movie'/>
            </HeaderContainer>

            <MovieListContainer>
                <DisplayMovieRow request={props.topRateMovie} title="Top Rate" isOpen={modalOpen}
                                 currentMovie={setCurrentMovie} category={setMovieCat}/>
                <ModalMovieDetails isOpen={isOpen} isClose={setOpen} currentMovie={movie} currentCategory={category}/>
                {loading ? null : <div>
                    {movieGenList.map((genres) => (
                        <DisplayMovieRow request={requests.fetchDiscoverTv + genres.id} title={genres.name}
                                         isOpen={modalOpen} currentMovie={setCurrentMovie} category={setTvCat}/>
                    ))}</div>}
            </MovieListContainer>
            <FooterContainer/>
        </>
    )
}

export default MainContent;
