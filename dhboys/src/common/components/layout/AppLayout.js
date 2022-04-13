import React from 'react';
import { useQueries, useQueryClient } from 'react-query';
import { loadNowPlayingAPI, loadTopRatedAPI, loadUpcomingAPI } from '../../../apis/movie';
import { loadWeeklyTVAPI } from '../../../apis/series';

const AppLayout = ({ children }) => {

    const contentsKeys = [{ key: 'nowPlaying', title: 'Now Playing', url: 'movie/now_playing', api: loadNowPlayingAPI },
        { key: 'popular', title: 'Popular', url: 'movie/popular', api: loadTopRatedAPI },
        { key: 'upcoming', title: 'Upcoming', url: 'movie/upcoming', api: loadUpcomingAPI },
        { key: 'weeklyTV', title: 'Weekly TV', url: 'trending/tv/week', api: loadWeeklyTVAPI }
    ];

    const allContents = useQueries(contentsKeys.map(content => ({
        queryKey: ['contents', content.key],
        queryFn: () => content.api(content.url),
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

    return (
        <>
        <div className='appLayout'>     
            {children}
        </div>
        </>
    );
};

export default AppLayout;