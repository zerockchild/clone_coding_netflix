import {createGlobalStyle} from "styled-components";
import Routers from "./routes/Routers";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <div>
            <GlobalStyle/>
            <QueryClientProvider client ={queryClient}>
                <Routers/>
                <ReactQueryDevtools initialIsOpen = {false}/>
            </QueryClientProvider>
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
