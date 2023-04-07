// サイト全体で使われるMenuリスト

type List = {
    name: string,
    to: string
}

export const lists = [
    {name: "Skill", to: "#skill"},
    {name: "Works", to: "#works"},
    {name: "Profile", to: "#profile"},
] as const