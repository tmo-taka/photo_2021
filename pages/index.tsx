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
import { client } from "./api/client";
import { GetServerSideProps , InferGetServerSidePropsType } from 'next';

const Home: FC = ({ work }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
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
      <section id="skill" className={styles.skillBlock}>
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
      <section id="works" className={styles.worksBlock}>
          <h2 className={styles.worksBlock__title}>Works</h2>
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
          <Link href="/work/" as="workList">
            <a>一覧へ</a>
          </Link>
          </div>
      </section>
      <section id="profile" className={styles.profileBlock}>
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
