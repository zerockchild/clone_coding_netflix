import AppLayout from '../../../src/common/components/layout/AppLayout';
import NavBar from "../../../src/common/components/navBar/NavBar";
import Header from '../../common/components/header/Header';
import DisplayMovies from '../../common/components/mainContents/DisplayMovies';

const Home = () => {
    return (
        <div className='layout'>
        <NavBar />
        <AppLayout>
            <Header />
            <Header />
            <Header />
            <DisplayMovies />
        </AppLayout>
        </div>
    )
}

export default Home;