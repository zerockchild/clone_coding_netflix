import { useScroll } from "../../common/hooks/useScroll";

const HomeHeader = ({bannerMovie}) => {

    const {REACT_APP_TMDB_ORIGINAL_IMAGE_URL} = process.env;
    const bannerContexts = [{context:"홈", id:1}, {context:"시리즈", id:2}, {context:"영화", id:3}, {context:"NEW! 요즘 대세 콘텐츠", id:4}, {context:"내가 찜한 콘텐츠", id:5}];
    const scrollY = useScroll();

    const handlePlay = () => {
        // 동영상 플레이어 logic
    };

    return (
        <>
            {/* <!-- nav --> */}
            <div id="nav" className={scrollY <= 100? "nav":"nav nav__black"}>
                <img className="nav__logo" src="images/netflix-logo.png" alt="" />
                {bannerContexts.map( (bannerContext) => <a className="banner__button" href="/" key={bannerContext.id}>{bannerContext.context}</a>)}
                <img className="nav__avatar" src="images/netflix-avatar.png" alt="" />
            </div>

            {/* <!-- header --> */}
            <header className="banner" style={ bannerMovie && {backgroundImage: `url("${REACT_APP_TMDB_ORIGINAL_IMAGE_URL}${bannerMovie.backdrop_path}")`}}>
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

export default HomeHeader;