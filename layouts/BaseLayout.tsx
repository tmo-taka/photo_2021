import { ReactNode } from 'react'
import { CommonHead } from '@component/organisms/CommonHead'
import { Header } from '@component/organisms/Header'
import { Footer } from '@component/module/Footer'
import { SpMenu } from '@component/organisms/SpMenu'

type Props = {
    children: ReactNode
    title: string,
    displayFlag?:boolean
}

export const BaseLayout = (props:Props) => (
  <div id="wrapper">
    <CommonHead title={props.title}/>
    <Header />
      {props.children}
    <Footer />
    <SpMenu displayFlag={props.displayFlag}/>
  </div>
)