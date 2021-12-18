import React from 'react'
import {AppProps} from 'next/app';
import {AnimatePresence} from "framer-motion";
import '@style/common/reset.scss';
import '@style/common/common.scss';
import '@style/slick.scss';

const App = ({ Component, pageProps }) => {
  return　(
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
  )
}

export default App
