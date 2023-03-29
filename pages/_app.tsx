import {AnimatePresence} from "framer-motion";
import { Hydrate, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@style/common/reset.scss';
import '@style/common/common.scss';
import '@style/slick.scss';
import { ThemeProvider ,Theme} from '@emotion/react'

const App = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  console.log(queryClient);

  const theme:Theme = {
    colors: {
      primary: "#3589BB",
      accent: "#FFB83F"
    },
    width: {
      min: "1280px",
      max: "1960px"
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.queryData}>
        <ThemeProvider theme={theme}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
