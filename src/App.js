// Style
import { GlobalStyle } from "./components/global-styles";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";

const App = () => {

    

    return (
        <>
            <GlobalStyle />
            <HeaderContainer/>
            <BodyContainer/>
        </>
    );
};

export default App;