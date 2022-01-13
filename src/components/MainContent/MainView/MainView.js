import "./MainView.css"
import videoSrc from "../../Video/video.mp4"

function MainView() {
    return(
        <div className="MainView">
            <video className="VideoView" muted autoPlay>
                <source src={videoSrc} type='video/mp4'/>
            </video>
        </div>
    )
}
export default MainView;