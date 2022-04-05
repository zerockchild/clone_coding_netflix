import React from 'react';
import { useScroll } from "../../hooks/useScroll";

const NavBar = () => {
    // 홈 시리즈 영화 NEW! 요즘 대세 콘텐츠 내가 찜한 콘텐츠
    const navContexts = [{context: '홈', id: 1}, {context: '시리즈', id: 2}, {context: '영화', id: 3}, {context: '요즘 대세 콘텐츠', id: 4}, {context: '내가 찜한 콘텐츠', id: 5}];
    const scrollY = useScroll();

    return (
        <>
            {/* <!-- nav --> */}
            <div id="nav" className={scrollY <= 100? "nav":"nav nav__black"}>
                <img className="nav__logo" src="images/netflix-logo.png" alt="" />
                {navContexts.map( (navContext) => <a className="banner__button" href="/" key={navContext.id}>{navContext.context}</a>)}
                <img className="nav__avatar" src="images/netflix-avatar.png" alt="" />
            </div>
            </>
    );
};

export default NavBar;