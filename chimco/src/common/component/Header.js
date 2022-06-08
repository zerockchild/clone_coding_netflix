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
    const [currentCategory, setCurrentCategory] = useState("");
    /*
    useState 객체 관리
    const [test, setTest] = useState({
        loading:true, playing:false
    })*/
    const {scrollY} = useScroll()

    const getVideo = async () => {
        const response = await axios.get(REACT_APP_TMDB_API_URL+props.currentCategory+'/'+props.currentMovie.id+'/videos' + REACT_APP_TMDB_KEY + REACT_APP_TMDB_LANGUAGE);
        console.log(response.data.results);
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
        console.log(playerRef.current.internalPlayer);
        /*playerRef.current.internalPlayer.pauseVideo()*/
    }
    useEffect(() => {
        setCurrentVideo(props.currentMovie)
        setCurrentCategory(props.currentCategory)
        getVideo();
    },[])

    useEffect(() =>{
        if (!loading && !playing && scrollY > 30 ) {
            playerRef.current.internalPlayer.pauseVideo();
        }else if(!loading && !playing){
            playerRef.current.internalPlayer.playVideo();
        }
    }, [loading, playing, scrollY])
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

                        <div style={video.length == 0 ? {display: 'none'} :
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