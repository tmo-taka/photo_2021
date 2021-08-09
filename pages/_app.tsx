import React from 'react'
import {AppProps} from 'next/app';
import { AnimateSharedLayout } from "framer-motion";
import '@style/reset.scss';
import '@style/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return　(
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default App
