import { ReactNode } from 'react'
import { CommonHead } from '@component/organisms/CommonHead'
import { Header } from '@component/organisms/Header'
import { Footer } from '@component/module/Footer'
import { SpMenu } from '@component/organisms/SpMenu'
import { motion } from "framer-motion";

type Props = {
    children: ReactNode
    title: string,
    displayFlag?:boolean
}

const transition = {
  duration: .4,
  ease: "easeOut",
};

const variants= {
  hidden: {
      opacity: 0,
      translateY: 20,
  },
  visible: {
      opacity: 1,
      translateY: 0,
  },
};

export const MotionLayout = (props:Props) => (
  <div id="wrapper">
    <CommonHead title={props.title}/>
    <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={variants}
      >
        {props.children}
      </motion.div>
    <Footer />
    <SpMenu displayFlag={props.displayFlag} />
  </div>
)