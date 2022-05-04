import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useQuery } from 'react-query';
import { getVideoAPI } from '../../../apis/movie';

const Header = ({ headerContent }) => {
    console.log('headerContent', headerContent);
    const [gitTest, setGitTest] = useState('');
    console.log('git Test', gitTest);
    // react-query
    const { 
        data,
        isLoading: contentLoading,
    } = useQuery(['content', headerContent?.id], () => getVideoAPI(headerContent?.id), {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
    });

    const videoOptions = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
        }
    };
    // console.log('headerContent: ', headerContent);
    const [playLoading, setPlayLoading] = useState(true);

    const videoEnd = () => {
        setPlayLoading(false);
    }

    return (
        <>
        <div className='banner__contents'>
            {contentLoading || !playLoading? <img src={`https://image.tmdb.org/t/p/original/${headerContent?.backdrop_path}`} /> 
            :             
            <YouTube
                videoId={data?.results[0]?.key}
                opts={videoOptions}
                onEnd={videoEnd}
                title={headerContent?.title}
            >
            </YouTube>}
        </div>
        </>
    );
};

export default Header;