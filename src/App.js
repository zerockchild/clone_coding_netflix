// <<<<<<< HEAD
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
// =======
// Style
// import Routers from "./routes/Routers";
// import { GlobalStyle } from "./style/global-styles";
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

// const queryClient = new QueryClient();

// const App = () => {

//     return (
//         <>
//             <GlobalStyle />
//             <QueryClientProvider client={queryClient}>
//                 <Routers />
//                 <ReactQueryDevtools initialIsOpen={false} />
//             </QueryClientProvider>
//         </>
//     );
// };

// export default App;
// >>>>>>> 0c9b8ac428bf36dd54b26f1c9c5c54a087903adf
