import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import NavBar from "./components/navBar/NavBar";
import {createGlobalStyle} from "styled-components";
import Footer from "./components/footer/Footer";
import ModalMovieDetails from "./components/modalMovieDetails/ModalMovieDetails";

function App() {
    return (
        <div>
            <GlobalStyle/>
            <NavBar/>
            <Header/>
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
