import React from 'react'
import {AnimatePresence} from "framer-motion";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import '@style/common/reset.scss';
import '@style/common/common.scss';
import '@style/slick.scss';
import { ThemeProvider } from '@emotion/react'

const App = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())

  const theme = {
    colors: {
      primary: "#3589BB"
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
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default App
