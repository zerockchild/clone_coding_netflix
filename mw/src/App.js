// Style
import Routers from "./routes/Routers";
import { GlobalStyle } from "./style/global-styles";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRef } from "react";

// const queryClient = new QueryClient();

const App = () => {
    
    const queryClientRef = useRef();
    if(!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    };

    return (
        <>
            <GlobalStyle />
            <QueryClientProvider client={queryClientRef.current}>
                <Routers />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default App;