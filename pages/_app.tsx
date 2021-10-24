import React from 'react'
import {AppProps} from 'next/app';
import {AnimatePresence} from "framer-motion";
import '@style/reset.scss';
import '@style/global.scss';

const App = ({ Component, pageProps }) => {
  return　(
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
  )
}

export default App
