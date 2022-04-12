import {useScroll} from "../../hooks/useScroll";
import {Container, MenuBar} from "./style/NavBarStyle";

function NavBar() {
    const {scrollY} = useScroll()
    return(
        <Container scrollY={scrollY}>
            <a aria-label="넷플릭스"><img src="https://t1.daumcdn.net/cfile/tistory/99EE2F485ECDDF470C"/></a>
            <MenuBar>
                <li><a href="#">홈</a></li>
                <li><a href="#">시리즈</a></li>
                <li><a href="#">영화</a></li>
                <li><a href="#">NEW! 요즘 대세 콘텐츠</a></li>
                <li><a href="#">내가 찜한 콘텐츠</a></li>
            </MenuBar>
        </Container>
    )
}
export default NavBar