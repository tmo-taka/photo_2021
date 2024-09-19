// サイト全体で使われるMenuリスト

const lists = [
    {name: "Skill", to: "#skill", emIndex: 1 },
    {name: "Works", to: "#works", emIndex: 2},
    {name: "Profile", to: "#profile", emIndex: 4},
] as const

type Lists = typeof lists;
export type ListsPropUnion<T extends (keyof Lists[0])> = typeof lists[number][T];

class Menu {
    lists: Lists;

    constructor(lists:Lists){
        this.lists = lists;
    }

    getListObj(name:ListsPropUnion<'name'>,):Lists[number] {
        // NOTE: 対象リストを取り出す
        return this.lists.find((obj) => obj.name === name) as Lists[number];
    }

    getIdFromName(name:ListsPropUnion<'name'>):string {
        // NOTE: nameプロパティからid値を生成する
        return name.toLowerCase();
    }

    getIndex(name:ListsPropUnion<'name'>):ListsPropUnion<'emIndex'> {
        // NOTE: 対象リストからemIndexを取り出す
        return this.getListObj(name).emIndex;
    }

    whereIndex(name:ListsPropUnion<'name'>):number {
        // NOTE: 対象リストからそのリストが何番目かを取り出す
        return this.lists.findIndex((obj) => obj.name === name);
    }
}

export const menu = new Menu(lists);