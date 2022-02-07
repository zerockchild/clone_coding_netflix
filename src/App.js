import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";
import {MenuBar} from "./components/navBar/style/NavBarStyle";
import NavBar from "./components/navBar/NavBar";
import {createGlobalStyle} from "styled-components";

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
    }
`

export default App;
