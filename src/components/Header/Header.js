import {FillContainer, InfoLayer, InfoVideo, MainView, MuteButton, VideoContent} from "./style/HeaderStyle";
import {useEffect, useRef, useState} from "react";
import requests from "../../requests";
import YouTube from "react-youtube";

function Header() {
    const playerRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [video, setVideo] = useState({});
    const [videoMute, setVideoMute] = useState(true);
    const getVideo = async () => {
        const json = await (
            await fetch(requests.fetchGetVideo)
        ).json();
        setVideo(json.results);
        setLoading(false)
    }
    const videoOptions = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0
        }
    };
    const videoEnd = () => {
        setLoading(true);
    };
    const playVideo = () => {
        setLoading(false);
    }
    const muted = () => {
        setVideoMute(!videoMute);
        playerRef.current.internalPlayer.setVolume(videoMute?0:50)
    }
    useEffect(() => {
        getVideo();
    },[])
    return(
        <MainView>
            <VideoContent>
                {loading ? <img src={'https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'}/> :
                    <YouTube
                        ref={playerRef}
                        videoId="bG3FmxSTwKw"
                        opts={videoOptions}
                        onEnd={videoEnd}
                    ></YouTube>
                }
            </VideoContent>
            <FillContainer>
                <InfoLayer>
                    <MuteButton onClick={loading?playVideo:muted}>asdasdasda</MuteButton>
                </InfoLayer>
            </FillContainer>
        </MainView>
    );
}

export default Header