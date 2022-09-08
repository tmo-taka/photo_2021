import {FC, useEffect, useState} from "react"
import Link from 'next/link'
import Slider from "react-slick";
import { BaseLayout } from '@layout/BaseLayout';
import { Logo } from "@component/atoms/Logo"
import { SectionWrap } from '@component/module/Sectionwrap';
import styles from '@style/module/top.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
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

  const works:useQueryWrapper<apiField.WorkType[]>  = useQuery(['works'],fetchWorks,{cacheTime: Infinity});
  const tools:useQueryWrapper<apiField.ToolType[]> = useQuery(['tools'],fetchTools,{cacheTime: Infinity});
  const programings:useQueryWrapper<apiField.ProgramingType[]>  = useQuery(['programings'],fetchProgramings,{cacheTime: Infinity});

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
    <BaseLayout title={"top"} displayFlag={displayMenu(scrollY)}>
          <div className={styles.mainV}>

            <h1 className={`${styles.mainV__title} ${moveJudge ? styles.move : ''}`} >
              <div className={styles.mainV__title__in}>
                <Logo />
              </div>
            </h1>
          </div>

          <SectionWrap section={{title:'skill',emIndex:1}}>
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
          </SectionWrap>

          <SectionWrap section={{title:'works',emIndex:2}}>
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
          </SectionWrap>

          <SectionWrap section={{title:'profile',emIndex:4}}>
            <dl className={styles.profileBlockIn__box}>
              <dt>Name:</dt>
              <dd>Takahara Tomoya</dd>
              <dt>Carier:</dt>
              <dd>名城大学を卒業後、新卒として、株式会社ウェブクルーに入社</dd>
            </dl>
          </SectionWrap>
    </BaseLayout>
  )
}

export default Home;

export const getStaticProps:GetStaticProps = async () => {

  await queryClient.prefetchQuery(['works'], fetchWorks)
  await queryClient.prefetchQuery(['tools'], fetchTools)
  await queryClient.prefetchQuery(['programings'], fetchProgramings)

  const queryData= dehydrate(queryClient);

  return {
      props: {
        queryData,
      }
  }
}