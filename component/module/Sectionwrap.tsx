import { ReactNode } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const unionLength = (sectionTitle:string):readonly number[] => {
    const arr:string[] = sectionTitle.split("");
    const unionArr:number[] = []
    arr.map((i,index) => unionArr.push(index + 1))
    console.log(unionLength);
    const type = [...unionArr] as const

    return type
}

type Props = {
    children?: ReactNode,
    section: {
        title: string,
        emIndex: number,
    }
}

export const SectionWrap = (props:Props) => {
    const { title } = props.section
    const camelTitle:string[] = (title.charAt(0).toUpperCase() + title.slice(1)).split("");

    return (
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true}>
            <section id={props.section.title}>
                <div>
                    <AnimationOnScroll animateIn='bounce'>
                        <h2>
                            {
                                camelTitle.map((s:string,index:number):ReactNode => {
                                    return props.section.emIndex === (index + 1) ? <span>{s}</span> : s
                                })
                            }
                        </h2>
                    </AnimationOnScroll>
                    { props.children }
                </div>
            </section>
        </AnimationOnScroll>
    )
}