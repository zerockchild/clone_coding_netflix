// Style
import Routers from "../routes/Routers";
import { GlobalStyle } from "../style/global-styles";
import { QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
    
    return (
        <>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
            <Routers />
            <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default App;