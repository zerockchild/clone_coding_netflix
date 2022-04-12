import {ModalFillContainer, ModalInfoLayer, ModalInfoVideo, ModalMainView, ModalMuteButton, ModalVideoContent} from "./style/ModalHeaderStyle";
import {useEffect, useRef, useState} from "react";
import requests from "../../requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import YouTube from "react-youtube";

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
        <ModalMainView>
            <ModalVideoContent>
                {loading ? <img src={'https://image.tmdb.org/t/p/original/'+currentVideo.backdrop_path}/> :
                    <YouTube
                        ref={playerRef}
                        videoId={video[0].key}
                        opts={videoOptions}
                        onEnd={videoEnd}
                    ></YouTube>
                }
            </ModalVideoContent>
            <ModalFillContainer>
                <ModalInfoLayer>
                    <ModalMuteButton onClick={loading?playVideo:muted}></ModalMuteButton>
                    <FontAwesomeIcon icon={faCoffee}/>
                    <FontAwesomeIcon icon="fa-solid fa-volume-slash" />
                </ModalInfoLayer>
            </ModalFillContainer>
        </ModalMainView>
    );
}

export default Header