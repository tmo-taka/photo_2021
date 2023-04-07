// サイト全体で使われるMenuリスト

type List = {
    name: string,
    to: string
}

export const lists:readonly List[] = [
    {name: "Skill", to: "#skill"},
    {name: "Works", to: "#works"},
    {name: "Profile", to: "#profile"},
] as const