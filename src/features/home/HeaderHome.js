import { useScroll } from "../../common/hooks/useScroll";

const HeaderHome = ({bannerMovie}) => {

    const {REACT_APP_TMDB_IMAGE_URL} = process.env;
    const bannerContexts = ["홈", "시리즈", "영화", "NEW! 요즘 대세 콘텐츠", "내가 찜한 콘텐츠"];
    const scrollY = useScroll();

    const handlePlay = () => {
        // 동영상 플레이어 logic
    };

    return (
        <>
            {/* <!-- nav --> */}
            <div id="nav" className={scrollY <= 100? "nav":"nav nav__black"}>
                <img className="nav__logo" src="images/netflix-logo.png" alt="" />
                {bannerContexts.map( (context, idx) => <a className="banner__button" href="/" key={idx}>{context}</a>)}
                <img className="nav__avatar" src="images/netflix-avatar.png" alt="" />
            </div>

            {/* <!-- header --> */}
            <header className="banner" style={ bannerMovie && {backgroundImage: `url("${REACT_APP_TMDB_IMAGE_URL}${bannerMovie.backdrop_path}")`}}>
                <div className="banner__contents">
                    <h1 className="banner__title">{bannerMovie?.original_title}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button" onClick={handlePlay}>Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">{bannerMovie?.overview}</h1>
                </div>
                <div className="banner--fadeBottom"></div>
            </header>
        </>
    )
}

export default HeaderHome;