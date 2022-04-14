import AppLayout from '../../../src/common/components/layout/AppLayout';
import NavBar from "../../../src/common/components/navBar/NavBar";
import Header from '../../common/components/header/Header';
import MainContents from '../../common/components/mainContents/MainContents';
import { useQueries, useQueryClient } from 'react-query';
import { loadNowPlayingAPI, loadTopRatedAPI, loadUpcomingAPI } from '../../apis/movie';
import { loadWeeklyTVAPI } from '../../apis/series';

const Home = () => {
    // const queryClient = useQueryClient();

    // console.log('queryClient', queryClient);

    // const contentsOne = queryClient.getQueryData(['contents', 'weeklyTV']);

    // console.log('contentsOne', contentsOne);

    // const allContentsKeys = [ 'nowPlaying', 'popular', 'upcoming', 'weeklyTV' ];

    // const allContentsForm = allContentsKeys.map((v) => queryClient.getQueryData(['contents', v]));

    // console.log('allContentsForm', allContentsForm);

    const contentsKeys = [{ key: "nowPlaying", title: "Now Playing", url: "movie/now_playing", api: loadNowPlayingAPI },
        { key: "popular", title: "Popular", url: "movie/popular", api: loadTopRatedAPI },
        { key: "upcoming", title: "Upcoming", url: "movie/upcoming", api: loadUpcomingAPI },
        { key: "weeklyTV", title: "Weekly TV", url: "trending/tv/week", api: loadWeeklyTVAPI }
    ];

    const allContents = useQueries(contentsKeys.map(content => ({
        queryKey: ['contents', content.key],
        queryFn: async () => await content.api(content.url),
    })), {
        defaultOptions: {
            queries: {
              refetchOnMount: false,
              refetchOnReconnect: false,
              refetchOnWindowFocus: false,
            },
            retry: 0,
          },
    });
    console.log('allContents', allContents);
    // const query = queryCache.find(['contents', 'weeklyTV']);
    
    return (
        <div className='layout'>
        <NavBar />
        <AppLayout>
        {allContents?.filter((v) => v.isSuccess !== false).length === allContents?.length ? <Header headerContent={allContents[0]?.data?.results[0]}/> : null}
        {allContents?.filter((v) => v.isSuccess !== false).length === allContents?.length ? <MainContents contentsList={allContents}/> : null}
        </AppLayout>
        </div>
    )
}

export default Home;