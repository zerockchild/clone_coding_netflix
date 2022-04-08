import React, { useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routers from '../routes/Routers';
import { ReactQueryDevtools} from 'react-query/devtools';
import { GlobalStyle } from '../style/global-styles';

const App = () => {

  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          retry: 0,
        },
    });
  }

    return (
        <>
        <GlobalStyle />
        <QueryClientProvider client={queryClientRef.current}>
            <RecoilRoot>
                <Routers />
                <ReactQueryDevtools initialIsOpen={false} />
            </RecoilRoot>
        </QueryClientProvider>
        </>
    );
}

export default App;