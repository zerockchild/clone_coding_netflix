import './Header.css'
import {useScroll} from "../../hooks/useScroll";

function Header() {
    const {scrollY} = useScroll()
    return(
        <div className="Header" style={{background: (scrollY == 0 ? "linear-gradient( to bottom, rgb(20, 20, 20), rgba(20, 20, 20, .0) )" : "")}}>
            <a aria-label="넷플릭스"><img src="https://t1.daumcdn.net/cfile/tistory/99EE2F485ECDDF470C"/></a>
            <ul>
                <li><a href="#">홈</a></li>
                <li><a href="#">시리즈</a></li>
                <li><a href="#">영화</a></li>
                <li><a href="#">NEW! 요즘 대세 콘텐츠</a></li>
                <li><a href="#">내가 찜한 콘텐츠</a></li>
            </ul>
        </div>
    )
}

export default Header