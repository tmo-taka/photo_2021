import React, {FC} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import Header from '@component/module/header'
import Menu from '@component/module/menu_sp'
import Footer from '@component/module/footer'
import styles from '@style/module/top.module.scss'
import Logo from "@component/atoms/logo"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { client } from "./api/client";
import { GetServerSideProps , InferGetServerSidePropsType } from 'next';
import ScrollAnimation from 'react-animate-on-scroll';

const Home: FC = ({ work }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  function SlideNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="nextArrow"
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

  function SlidePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="prevArrow"
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

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
    responsive: [{
       breakpoint: 750, //750px以下のサイズに適用
        settings: {
          nextArrow: <SlideNextArrow/>,
          prevArrow: <SlidePrevArrow/>
        }
    }]
  };

  const skills = {
    programming: [
      {skill: "HTML5"},
      {skill: "CSS3"},
      {skill: "JavaScript"},
      {skill: "React(Next.js)"},
      {skill: "Vue(Nuxt.js)"},
      {skill: "jQuery"},
      {skill: "TypeScript"},
    ],
    tool: [
      {skill: "Adobe Illustrator"},
      {skill: "Adobe Photoshop"},
      {skill: "Adobe XD"},
      {skill: "GTM周り"},
      {skill: "CMS(Firebase / Strapi)"},
    ]
  }

  //スクロール位置を取得
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const [scrollY, setScrollY] = useState<number>(0);
  const [moveJudge,setMoveFlag] = useState<boolean>(false)

  function displayMenu(scrollY:number){
    if(scrollY > 60) {
      return true
    }else {
      return false
    }
  }
  let displayFlag: boolean = false;

  useEffect(()=>{
    setTimeout(() => setMoveFlag(!moveJudge),3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  return (
    <div id="wrapper" className={styles.wrapper}>
      <Head>
        <title>これがポートフォリオです</title>
        <meta property="og:title" content="My page title" key="title" />
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

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section id="skill" className={styles.skillBlock}>
          <ScrollAnimation animateIn='bounce'>
            <h2 className={styles.skillBlock__title}><span>S</span>kill</h2>
          </ScrollAnimation>
          <div className={styles.skillBlock__box}>
            <div className={styles.skillBlock__boxIn}>
              <h3 className={styles.skillBlock__boxIn__title}>programming</h3>
              <ul className={styles.skillBlock__boxIn__lists}>
                {
                  skills.programming.map((list) => {
                    return (
                        <li>{list.skill}</li>
                    );
                  })
                }
              </ul>
            </div>

            <div className={styles.skillBlock__boxIn}>
              <h3 className={styles.skillBlock__boxIn__title}>tool</h3>
              <ul className={styles.skillBlock__boxIn__lists}>
                {
                  skills.tool.map((list) => {
                    return (
                        <li>{list.skill}</li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section id="works" className={styles.worksBlock}>
            <ScrollAnimation animateIn='bounce'>
              <h2 className={styles.worksBlock__title}>W<span>o</span>rks</h2>
            </ScrollAnimation>
            <div className={styles.worksBlock__box}>
              <Slider {...slideSettings}>
                {
                  work.contents.map((list) => {
                    return (
                      <div className={styles.slide}>
                        <Link href={list.link_path} as={list.link_path}>
                          <a className={styles.slide__link}>
                            <Image src={list.lead_img.url} layout={'responsive'} width={320} height={180}/>
                            <div className={styles.slide__link__hover}>{list.site_name}</div>
                          </a>
                        </Link>
                      </div>
                    );
                  })
                }
              </Slider>
            </div>
            <div className={styles.worksBlock__btn}>
            <Link href="/work/">
              <a>一覧へ</a>
            </Link>
            </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section id="profile" className={styles.profileBlock}>
            <ScrollAnimation animateIn='bounce'>
              <h2 className={styles.profileBlock__title}>Pro<span>f</span>ile</h2>
            </ScrollAnimation>
            <dl className={styles.profileBlock__box}>
              <dt>Name:</dt>
              <dd>Takahara Tomoya</dd>
              <dt>Carier:</dt>
              <dd>名城大学を卒業後、新卒として、株式会社ウェブクルーに入社</dd>
            </dl>
        </section>
      </ScrollAnimation>
      <Menu displayFlag={displayMenu(scrollY)} />
      <Footer />
    </div>
  )
}

export default Home;

type WorkType = {
  id: string,
  site_name: string,
  link_path: string,
  lead_img: object,
  service_img: string,
  service_txt: string,
  create_time: string,
  create_skill: string,
  create_span: string
}

export const getServerSideProps:GetServerSideProps = async () => {
  const work:WorkType[] = await client.get({
      endpoint: "cont",
      queries: {
          limit: 5,
      }
  });
  return {
      props: {
          work,
      }
  }
}
