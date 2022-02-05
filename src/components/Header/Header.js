import {MainView, VideoContainer, VideoContent} from "./style/HeaderStyle";
import videoSrc from "../Video/video.mp4"
import {useEffect, useState} from "react";
import requests from "../../requests";
import YoutubeBackground from 'react-youtube-background'
import YouTube from "react-youtube";

function Header() {
    const [loading, setLoading] = useState(true);
    const [video, setVideo] = useState({});
    const getVideo = async () => {
        const json = await (
            await fetch(requests.fetchGetVideo)
        ).json();
        setVideo(json.results);
        setLoading(false)
        console.log(video)
    }
    const videoOptions = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0
        }
    };
    const videoEnd = () => {
        console.log("asdf")
    }
    useEffect(() => {
        getVideo();
    },[])
    return(
        <MainView>
            <VideoContent>
            {loading ? null :
                <YouTube
                    videoId="bG3FmxSTwKw"
                    opts={videoOptions}
                    onEnd = {videoEnd}></YouTube>
            }
            </VideoContent>
        </MainView>
    );
}

export default Header