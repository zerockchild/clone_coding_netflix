import AppLayout from '../../../src/common/components/layout/AppLayout';
import NavBar from "../../../src/common/components/navBar/NavBar";
import Header from '../../common/components/header/Header';
import MainContents from '../../common/components/mainContents/MainContents';

const Series = () => {
    return (
        <div className='layout'>
        <NavBar />
        <AppLayout>
            <Header />
            <MainContents />
        </AppLayout>
        </div>
    )
}

export default Series;