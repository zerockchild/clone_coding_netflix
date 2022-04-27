import {FillContainer, InfoLayer, MainView, MuteButton, PlayButton, TitleInfo, VideoContent} from "./style/HeaderStyle";
import {useEffect, useRef, useState} from "react";
import YouTube from "react-youtube";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeMute, faVolumeHigh, faArrowRotateRight} from "@fortawesome/free-solid-svg-icons";
import {useScroll} from "../../hooks/useScroll";
import axios from "axios";
import {useQuery} from "react-query";

function Header(props) {
    const {REACT_APP_TMDB_ORIGINAL_IMAGE_URL, REACT_APP_TMDB_API_URL, REACT_APP_TMDB_KEY, REACT_APP_TMDB_LANGUAGE} = process.env;
    const playerRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [playing, setPlaying] = useState(false);
    const [video, setVideo] = useState({});
    const [videoMute, setVideoMute] = useState(false);
    const [currentVideo , setCurrentVideo] = useState({});
    const [currentCategory, setCurrentCategory] = useState("")
    const {scrollY} = useScroll()

    const getVideo = async () => {
        const response = await axios.get(REACT_APP_TMDB_API_URL+props.currentCategory+'/'+props.currentMovie.id+'/videos' + REACT_APP_TMDB_KEY + REACT_APP_TMDB_LANGUAGE);
        setVideo(response.data.results);
        setLoading(false);
    }
    const videoOptions = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0
        }
    };
    const onPlayerReady =() => {
        playerRef.current.internalPlayer.setVolume(0);
    };
    const videoEnd = () => {
        setPlaying(true);
    };
    const playVideo = () => {
        setPlaying(false);
        playerRef.current.internalPlayer.playVideo()
    }
    const muted = () => {
        setVideoMute(!videoMute);
        playerRef.current.internalPlayer.setVolume(videoMute?0:50)
    }
    useEffect(() => {
        setCurrentVideo(props.currentMovie)
        console.log(props.currentMovie)
        setCurrentCategory(props.currentCategory)
        getVideo();
    },[])
    return(
        <MainView>
            {loading ? null :
                <VideoContent>
                    {video.length != 0 ?
                    <div style={playing ? {display: 'none'} :
                        {}
                    }>
                        <YouTube
                            ref={playerRef}
                            videoId={video[0].key}
                            opts={videoOptions}
                            onReady={onPlayerReady}
                            onEnd={videoEnd}
                        />
                    </div> : null}


                    <img src={REACT_APP_TMDB_ORIGINAL_IMAGE_URL+currentVideo.backdrop_path}/>
                    <InfoLayer>
                        <TitleInfo>
                            {currentCategory == "movie" ? props.currentMovie.title : props.currentMovie.name}
                        </TitleInfo>

                        <div style={video.length == 0 ?{display: 'none'} :
                            {}
                        }>
                        {playing ?
                            <PlayButton onClick={playVideo}>
                                <FontAwesomeIcon icon={faArrowRotateRight} size='2x'/>
                            </PlayButton>
                            :
                            <MuteButton onClick={muted}>{videoMute==0?
                                <FontAwesomeIcon icon={faVolumeMute} size='2x'/>:
                                <FontAwesomeIcon icon={faVolumeHigh} size='2x'/>}
                            </MuteButton>
                        }
                        </div>
                    </InfoLayer>
                </VideoContent>
            }
        </MainView>
    );
}

export default Header