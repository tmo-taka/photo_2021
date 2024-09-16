import { css } from '@styled-system/css'

type Props = {
    lists: ApiField.ProgrammingType[] | ApiField.ToolType[],
}

export const SkillLists = async (props: Props):JSX.Element=> {
    const createListElement = (lists: ApiField.ProgrammingType[] | ApiField.ToolType[]):JSX.Element[] => {
        if(!Array.isArray(lists)) {
            console.log(lists);
            throw new Error('配列ではありません')
        }

        const listsElement:JSX.Element[] = []
        for (const list of lists) {
            listsElement.push(
                <li key={list.name} className={css(skillList)}>
                    {list.name}
                </li>
            )
        }

        return listsElement;
    }

    return (
        <ul className={css(skillBox)}>
            {createListElement(props.lists)}
        </ul>
    )
}

const skillBox = {
    pl: '2.4%', borderLeftWidth: '1px', borderLeftColor: 'main',
    md:{ pl: '8px'}
}

const skillList = {
    lineHeight: '1.6em'
}