import AppLayout from '../../../src/common/components/layout/AppLayout';
import NavBar from "../../../src/common/components/navBar/NavBar";
import Header from '../../common/components/header/Header';
import MainContents from '../../common/components/mainContents/MainContents';
import { useQueries, useQueryClient } from 'react-query';
import { loadNowPlayingAPI, loadTopRatedAPI, loadUpcomingAPI } from '../../apis/movie';
import { loadWeeklyTVAPI } from '../../apis/series';

const Home = () => {
    const queryClient = useQueryClient();

    const contentsKeys = [{ key: "nowPlaying", title: "Now Playing", url: "movie/now_playing", api: loadNowPlayingAPI },
        { key: "popular", title: "Popular", url: "movie/popular", api: loadTopRatedAPI },
        { key: "upcoming", title: "Upcoming", url: "movie/upcoming", api: loadUpcomingAPI },
        { key: "weeklyTV", title: "Weekly TV", url: "trending/tv/week", api: loadWeeklyTVAPI }
    ];

    const allContents = useQueries(contentsKeys.map(content => ({
        queryKey: ['contents', content.key],
        queryFn: () => content.api(content.url),
    })), {
        defaultOptions: {
            queries: {
              refetchOnMount: true,
              refetchOnReconnect: true,
              refetchOnWindowFocus: false,
            },
            retry: 0,
          },
    });

    // const query = queryCache.find(['contents', 'weeklyTV']);
    console.log('queryClient', queryClient);


    return (
        <div className='layout'>
        <NavBar />
        <AppLayout>
            <Header headerContent={allContents[0]?.data?.results[0]}/>
            {allContents.filter((v) => v.isLoading === false ).length === allContents.length ? <MainContents contentsList={allContents}/> : null}
        </AppLayout>
        </div>
    )
}

export default Home;