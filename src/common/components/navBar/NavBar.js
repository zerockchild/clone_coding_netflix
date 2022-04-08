import React from 'react';
import { useScroll } from "../../hooks/useScroll";

const NavBar = () => {
    // 홈 시리즈 영화 NEW! 요즘 대세 콘텐츠 내가 찜한 콘텐츠
    const navContexts = [{context: '홈', id: 1, url: '/'}, {context: '시리즈', id: 2, url: '/series'}, {context: '영화', id: 3, url: '/movies'}, {context: '요즘 대세 콘텐츠', id: 4, url: '/popular'}, {context: '내가 찜한 콘텐츠', id: 5, url: '/mylist'}];
    const scrollY = useScroll();

    return (
        <>
            {/* <!-- nav --> */}
            <div id="nav" className={scrollY <= 100? "nav":"nav__black"}>
                <img className="nav__logo" src="images/netflix-logo.png" alt="" />
                {navContexts.map( (navContext) => <a className="banner__button" href={navContext.url} key={navContext.id}>{navContext.context}</a>)}
                <img className="nav__avatar" src="images/netflix-avatar.png" alt="" />
            </div>
            </>
    );
};

export default NavBar;