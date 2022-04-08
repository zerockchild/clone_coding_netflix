import AppLayout from '../../../src/common/components/layout/AppLayout';
import NavBar from "../../../src/common/components/navBar/NavBar";
import Header from '../../common/components/header/Header';
import MainContents from '../../common/components/mainContents/MainContents';
import { useQueries } from 'react-query';
import { loadNowPlayingAPI, loadTopRatedAPI, loadUpcomingAPI, loadWeeklyTVAPI } from '../../apis/movie';
// import { useRecoilState } from 'recoil';
// import { nowPlayingMovies, popularMovies, upcomingMovies, weeklyTVMovies } from '../../common/state/index';


const Home = () => {
  
    const contentsKeys = [{ key: "nowPlaying", title: "Now Playing", url: "movie/now_playing", api: loadNowPlayingAPI },
        { key: "popular", title: "Popular", url: "movie/popular", api: loadTopRatedAPI },
        { key: "upcoming", title: "Upcoming", url: "movie/upcoming", api: loadUpcomingAPI },
        { key: "weeklyTV", title: "Weekly TV", url: "trending/tv/week", api: loadWeeklyTVAPI }
    ];

    const allContents = useQueries(contentsKeys.map(content => ({
        queryKey: ['contents', content.key],
        queryFn: () => content.api(content.url),
    })));

    return (
        <div className='layout'>
        <NavBar />
        <AppLayout>
            <Header headerContent={allContents[0]?.data?.results[0]}/>
            <MainContents contents={allContents}/>
        </AppLayout>
        </div>
    )
}

export default Home;