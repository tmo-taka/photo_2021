import React from 'react'
import {FC, useEffect, useState} from "react"
import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";
import Header from '@component/module/header'
import Menu from '@component/module/menu_sp'
import Footer from '@component/module/footer'
import styles from '@style/module/top.module.scss'
import Logo from "@component/atoms/logo"
import { SectionWrap } from '@component/module/Sectionwrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dehydrate, QueryClient, QueryClientProvider, useQuery} from 'react-query';
import { fetchTools,fetchProgramings,fetchWorks } from "./api/getData";
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import * as apiField from 'apiField';

const queryClient = new QueryClient()

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: FC<Props> = (props: Props) => {

  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    rtl: true,
  };

  //スクロール位置を取得
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const [scrollY, setScrollY] = useState<number>(0);
  const [moveJudge, setMoveFlag] = useState<boolean>(false);

  type useQueryWrapper<T> = {
    data: T
  }

  const works:useQueryWrapper<apiField.WorkType[]>  = useQuery(['works'],fetchWorks,{staleTime: Infinity});
  const tools:useQueryWrapper<apiField.ToolType[]> = useQuery(['tools'],fetchTools,{staleTime: Infinity});
  const programings:useQueryWrapper<apiField.ProgramingType[]>  = useQuery(['programings'],fetchProgramings,{staleTime: Infinity});

  // NOTE: 上位5個のみ取得
  const sortWorks = works.data.slice(-5);

  function displayMenu(scrollY:number){
    if(scrollY > 60) {
      return true
    }else {
      return false
    }
  }

  useEffect(()=>{
    setTimeout(() => setMoveFlag(!moveJudge),3000);

    document.addEventListener("scroll", handleScroll );
    return (): void => document.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <QueryClientProvider client={queryClient}>
        <div id="wrapper" className={styles.wrapper}>
          <Head>
            <title>【takaharaポートフォリオ】TOP</title>
            <meta property="og:title" content="【takaharaポートフォリオ】TOP" key="title" />
            <meta name="description" content="自身のポートフォリオ サイトを公開しています。" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          </Head>
          <Header />
          <div className={styles.mainV}>

            <h1 className={`${styles.mainV__title} ${moveJudge ? styles.move : ''}`} >
              <div className={styles.mainV__title__in}>
                <Logo />
              </div>
            </h1>
          </div>

          <SectionWrap>
            <section id="skill" className={styles.skillBlock}>
              <div className={styles.skillBlockIn}>
                <AnimationOnScroll animateIn='bounce'>
                  <h2 className={styles.skillBlockIn__title}><span>S</span>kill</h2>
                </AnimationOnScroll>
                <div className={styles.skillBlockIn__box}>
                  <div className={styles.skillBlockIn__boxIn}>
                    <h3 className={styles.skillBlockIn__boxIn__title}>programming</h3>
                    <ul className={styles.skillBlockIn__boxIn__lists}>
                      {
                        programings.data.map((list) => {
                          return (
                              <li key={list.name}>{list.name}</li>
                          );
                        })
                      }
                    </ul>
                  </div>

                  <div className={styles.skillBlockIn__boxIn}>
                    <h3 className={styles.skillBlockIn__boxIn__title}>tool</h3>
                    <ul className={styles.skillBlockIn__boxIn__lists}>
                      {
                        tools.data.map((list) => {
                          return (
                              <li key={list.name}>{list.name}</li>
                          );
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </SectionWrap>

          <SectionWrap>
            <section id="works" className={styles.worksBlock}>
              <div className={styles.worksBlockIn}>
                <AnimationOnScroll animateIn='bounce'>
                  <h2 className={styles.worksBlockIn__title}>W<span>o</span>rks</h2>
                </AnimationOnScroll>
                <div className={styles.worksBlockIn__box}>
                  <Slider {...slideSettings}>
                    {
                      sortWorks.map((list) => {
                        const path = `/work/${list.slug}/`
                        return (
                          <div className={styles.slide} key={list.id}>
                            <Link href={path} as={path}>
                              <a className={styles.slide__link}>
                                <img src={list.lead_img.url}/>
                                <div className={styles.slide__link__hover}>{list.site_name}</div>
                              </a>
                            </Link>
                          </div>
                        );
                      })
                    }
                  </Slider>
                </div>
                <div className={styles.worksBlockIn__btn}>
                <Link href="/work/">
                  <a>一覧へ</a>
                </Link>
                </div>
              </div>
            </section>
          </SectionWrap>

          <SectionWrap>
            <section id="profile" className={styles.profileBlock}>
              <div className={styles.profileBlockIn}>
                <AnimationOnScroll animateIn='bounce'>
                  <h2 className={styles.profileBlockIn__title}>Pro<span>f</span>ile</h2>
                </AnimationOnScroll>
                <dl className={styles.profileBlockIn__box}>
                  <dt>Name:</dt>
                  <dd>Takahara Tomoya</dd>
                  <dt>Carier:</dt>
                  <dd>名城大学を卒業後、新卒として、株式会社ウェブクルーに入社</dd>
                </dl>
              </div>
            </section>
          </SectionWrap>
          <Menu displayFlag={displayMenu(scrollY)} />
          <Footer />
        </div>
    </QueryClientProvider>
  )
}

export default Home;

export const getStaticProps:GetStaticProps = async () => {

  await queryClient.prefetchQuery('works', fetchWorks)
  await queryClient.prefetchQuery('tools', fetchTools)
  await queryClient.prefetchQuery('programings', fetchProgramings)

  const queryData= dehydrate(queryClient);

  return {
      props: {
        queryData,
      }
  }
}