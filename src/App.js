import {createGlobalStyle} from "styled-components";
import Routers from "./routes/Routers";

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Routers/>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #000000;
        color: #fff;
    }
`

export default App;
