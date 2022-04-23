import {FillContainer, InfoLayer, MainView, MuteButton, VideoContent} from "./style/HeaderStyle";
import {useEffect, useRef, useState} from "react";
import YouTube from "react-youtube";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeMute, faVolumeHigh, faArrowRotateRight} from "@fortawesome/free-solid-svg-icons";

function Header(props) {

    const {REACT_APP_TMDB_ORIGINAL_IMAGE_URL, REACT_APP_TMDB_API_URL, REACT_APP_TMDB_KEY, REACT_APP_TMDB_LANGUAGE} = process.env;

    const playerRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [video, setVideo] = useState({});
    const [videoMute, setVideoMute] = useState(true);
    const [currentVideo , setCurrentVideo] = useState({});
    const getVideo = async () => {
        const json = await (
            await fetch(REACT_APP_TMDB_API_URL+props.currentCategory+'/'+props.currentMovie.id+'/videos' + REACT_APP_TMDB_KEY + REACT_APP_TMDB_LANGUAGE)
        ).json();
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
            <FillContainer>
                <InfoLayer>
                    <MuteButton onClick={loading?playVideo:muted}>{videoMute==0?
                        <FontAwesomeIcon icon={faVolumeMute} size='1000'/>:
                        <FontAwesomeIcon icon={faVolumeHigh} size='1000'/>}</MuteButton>
                    <FontAwesomeIcon icon={faArrowRotateRight} size='1000'/>
                </InfoLayer>
            </FillContainer>
            <VideoContent>
                {loading ? <img src={REACT_APP_TMDB_ORIGINAL_IMAGE_URL+currentVideo.backdrop_path}/> :
                    <YouTube
                        ref={playerRef}
                        videoId={video[0].key}
                        opts={videoOptions}
                        onEnd={videoEnd}
                    ></YouTube>
                }
            </VideoContent>
        </MainView>
    );
}

export default Header