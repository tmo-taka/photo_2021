// サイト全体で使われるMenuリスト

type List = {
    name: string,
    to: string,
    emIndex: number
}

export const lists = [
    {name: "Skill", to: "#skill", emIndex: 1 },
    {name: "Works", to: "#works", emIndex: 2},
    {name: "Profile", to: "#profile", emIndex: 4},
] as const