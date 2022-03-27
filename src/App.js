import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import NavBar from "./components/navBar/NavBar";
import {createGlobalStyle} from "styled-components";
import Footer from "./components/footer/Footer";
import ModalMovieDetails from "./components/modalMovieDetails/ModalMovieDetails";
import {useEffect} from "react";

function App() {
    const movie = {
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

    return (
        <div>
            <GlobalStyle/>
            <NavBar/>
            <Header currentMovie = {movie} currentCategory ='movie'/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #000000;
        color: #fff;
    }
`

export default App;
