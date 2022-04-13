import {MenuBar, HeaderContainer, MovieListContainer, NavContainer, FooterContainer} from "./style/MainContentStyle";
import {useEffect, useState} from "react";
import DisplayMovieRow from "./DisplayMovieRow";
import ModalMovieDetails from "./ModalMovieDetails";
import requests from "../../requests";
import Header from "./Header";
import {useScroll} from "../../hooks/useScroll";

function MainContent() {
    const [loading, setLoading] = useState(true);
    const [movieGenList, setMovieGenList] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [movie, setMovie] = useState({});
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
    },[])
    const movieDefault = {
        "adult": false,
        "backdrop_path": "/iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
        "genre_ids": [16, 10751, 35, 14],
        "id": 508947,
        "original_language": "en",
        "original_title": "Turning Red",
        "overview": "엄마의 착한 딸, 아니면 미운 13살? 성적도 우수하고 친구들과 사이도 좋은 데다 부모와도 친밀한 관계를 유지하고 있는, 똑 부러지면서도 엉뚱한 매력의 소유자 메이는 요즘 질풍노도의 시기를 겪느라 고민이 많다. 이 나이에 엄마의 과잉보호를 받자니 스트레스가 이만저만이 아닌 데다, 관심사, 인간관계, 신체 등 그녀의 모든 것이 변하고 있기 때문. 그런데 이 와중에 흥분하면 거대한 레서판다로 변신하는 비밀까지 떠안게 되다니! 아침도 먹어야 하고 학교도 가야 하는데, 이 엄청난 비밀을 어떻게 숨겨야 할까?",
        "popularity": 9962.298,
        "poster_path": "/hnxhjETrcBs4Ozq6GVZlZ7TIdTR.jpg",
        "release_date": "2022-03-10",
        "title": "메이의 새빨간 비밀",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 880
    }
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
                <Header currentMovie = {movieDefault} currentCategory ='movie'/>
            </HeaderContainer>

            <MovieListContainer>
                <DisplayMovieRow request = {requests.fetchTopRated} title="Top Rate" isOpen = {modalOpen} currentMovie = {setCurrentMovie} category ={setMovieCat}/>
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
