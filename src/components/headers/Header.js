const Header = () => {

    // const nav = document.getElementById('nav');
    // window.addEventListener('scroll', () => {
    // if(window.scrollY >= 100) {
    //     nav.classNameList.add('nav__black');
    // } else {
    //     nav.classNameList.remove('nav__black');
    // }
    // });

    console.log(window.scrollY);

    return (
        <>
            {/* <!-- nav --> */}
            <div id="nav" className="nav">
                <img className="nav__logo" src="images/netflix-logo.png" alt="" />
                <a className="banner__button" href="/">홈</a>
                <a className="banner__button" href="/">시리즈</a>
                <a className="banner__button" href="/">영화</a>
                <a className="banner__button" href="/">NEW! 요즘 대세 콘텐츠</a>
                <a className="banner__button" href="/">내가 찜한 콘텐츠</a>
                <img className="nav__avatar" src="images/netflix-avatar.png" alt="" />
            </div>

            {/* <!-- header --> */}
            <header className="banner">
                <div className="banner__contents">
                    <h1 className="banner__title">Money Heist</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        To carry out the biggest heist in history, a mysterious man called The Professor recruits
                        a band of eight robbers who have a single characteristic: n...
                    </h1>
                </div>
                <div className="banner--fadeBottom"></div>
            </header>
        </>
    )
}

export default Header;