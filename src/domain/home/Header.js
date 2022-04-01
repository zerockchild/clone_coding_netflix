import {FillContainer, InfoLayer, MainView, MuteButton, VideoContent} from "./style/HeaderStyle";
import {useEffect, useRef, useState} from "react";
import YouTube from "react-youtube";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeMute, faVolumeHigh, faArrowRotateRight} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    const playerRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [video, setVideo] = useState({});
    const [videoMute, setVideoMute] = useState(true);
    const [currentVideo , setCurrentVideo] = useState({});
    const getVideo = async () => {
        const json = await (
            await fetch('https://api.themoviedb.org/3/'+props.currentCategory+'/'+props.currentMovie.id+'/videos?api_key=75b876ddf5ba0dcd499e9dc5ae92ba3c&language=ko-KR')
        ).json();
        console.log(json.results)
        setVideo(json.results);
        setLoading(false);
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
        setCurrentVideo(props.currentMovie)
        console.log(props.currentMovie)
        getVideo();
    },[])
    return(
        <MainView>
            <VideoContent>
                {loading ? <img src={'https://image.tmdb.org/t/p/original/'+currentVideo.backdrop_path}/> :
                    <YouTube
                        ref={playerRef}
                        videoId={video[0].key}
                        opts={videoOptions}
                        onEnd={videoEnd}
                    ></YouTube>
                }
            </VideoContent>
            <FillContainer>
                <InfoLayer>
                    <MuteButton onClick={loading?playVideo:muted}>{videoMute==0?
                        <FontAwesomeIcon icon={faVolumeMute} size='1000'/>:
                        <FontAwesomeIcon icon={faVolumeHigh} size='1000'/>}</MuteButton>
                    <FontAwesomeIcon icon={faArrowRotateRight} size='1000'/>
                </InfoLayer>
            </FillContainer>
        </MainView>
    );
}

export default Header