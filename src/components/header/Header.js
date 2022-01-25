import {MainView} from "./style/HeaderStyle";
import videoSrc from "../Video/video.mp4"

function Header() {
    return(
        <MainView>
            <video muted autoPlay>
                <source src={videoSrc} type='video/mp4'/>
            </video>
        </MainView>
    );
}

export default Header