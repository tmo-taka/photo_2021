import React, {FC} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 
import Slider from "react-slick";
import Header from '@component/module/header'
import Menu from '@component/module/menu_sp'
import styles from '@style/module/top.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { listenerCount } from 'events'

const Home: FC = () => {

  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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

  const workList = [
    {name: "ズバット引越し手続き", path: '/work/1', imgPath: "/img/work/work_1.png"},
    {name: "ズバット引越し比較", path: '/work/2', imgPath: "/img/work/work_2.png"},
    {name: "デジタラボ", path: '/work/3', imgPath: "/img/work/work_3.png"}
  ]

  return (
    <div id="wrapper" className={styles.wrapper}>
      <Head>
        <title>これがポートフォリオです</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={styles.mainV}>
        <h1 className={styles.mainV__title}>俺のポートフォリオ</h1>
      </div>
      <section className={styles.skillBlock}>
        <h2 className={styles.skillBlock__title}>Skill</h2>
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
      <section className={styles.worksBlock}>
          <h2 className={styles.worksBlock__title}>Works</h2>
          <div className={styles.worksBlock__box}>
            <Slider {...slideSettings}>
              {
                workList.map((list) => {
                  return (
                    <div className={styles.slide}><Link href="/work/[id]" as={list.path}><a className={styles.slide__link}><Image src={list.imgPath} layout={'responsive'} width={320} height={180}/><div className={styles.slide__link__hover}>{list.name}</div></a></Link></div>
                  );
                })
              }
            </Slider>
          </div>
          <div className={styles.worksBlock__btn}>
          <Link href="/work/" as="workList">
            <a>一覧へ</a>
          </Link>
          </div>
      </section>
      <section className={styles.profileBlock}>
          <h2 className={styles.profileBlock__title}>Profile</h2>
          <dl className={styles.profileBlock__box}>
            <dt>Name:</dt>
            <dd>Takahara Tomoya</dd>
            <dt>Carier:</dt>
            <dd>名城大学を卒業後、新卒として、株式会社ウェブクルーに入社</dd>
          </dl>
      </section>
      <Menu />
    </div>
  )
}

export default Home;
