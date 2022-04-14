import { QueryCache, useQueryClient, useQuery } from 'react-query';
import AppLayout from '../../../src/common/components/layout/AppLayout';
import NavBar from "../../../src/common/components/navBar/NavBar";
import Header from '../../common/components/header/Header';
import MainContents from '../../common/components/mainContents/MainContents';
import { loadWeeklyTVAPI } from '../../apis/series';

const Series = () => {

    // const queryClient = useQueryClient();

    // const contentsList = queryClient.getQueryData(['contents', 'weeklyTV']);

    // console.log('queryClient', queryClient);
    // console.log('contentsList', contentsList);

    // const contentsList = queryClient.getQueryData(['contents', 'weeklyTV']);
    // console.log('contentsList', contentsList);

    const { data: contentsList } = useQuery(['contents', 'weeklyTV'], loadWeeklyTVAPI('trending/tv/week'));
    console.log('contentsList', contentsList);

    return (
        <div className='layout'>
        <NavBar />
        <AppLayout>

        </AppLayout>
        </div>
    )
}

export default Series;