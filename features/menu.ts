// サイト全体で使われるMenuリスト

const lists = [
    {name: "Skill", to: "#skill", emIndex: 1 },
    {name: "Works", to: "#works", emIndex: 2},
    {name: "Profile", to: "#profile", emIndex: 4},
] as const

type Lists = typeof lists;
export type Name = typeof lists[number]['name'];

class Menu {
    lists: Lists;

    constructor(lists:Lists){
        this.lists = lists;
    }

    getListObj(name:Name) {
        // NOTE: 対象リストを取り出す
        return this.lists.find((obj) => obj.name === name);
    }

    getIdName(name:Name):string {
        // NOTE: nameプロパティからid値を生成する
        const listObj = this.getListObj(name);
        return listObj.name.toLowerCase();
    }

    getIndex(name:Name):number {
        // NOTE: 対象リストからemIndexを取り出す
        return this.getListObj(name).emIndex;
    }
}

export const menu = new Menu(lists);