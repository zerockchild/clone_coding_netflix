import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";
import {MenuBar} from "./components/navBar/style/NavBarStyle";
import NavBar from "./components/navBar/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <MainContent/>
            <div>asd</div>
            <Footer/>
        </div>
    );
}

export default App;
