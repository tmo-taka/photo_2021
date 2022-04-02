import React from 'react/index'
import {AnimatePresence} from "framer-motion";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import '@style/common/reset.scss';
import '@style/common/common.scss';
import '@style/slick.scss';

const App = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return　(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.queryData}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
