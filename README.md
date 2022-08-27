# 環境

node v17系

# 技術選定

## CSSLibrary
個人ブログのため可読性、保守性を考慮してCSS in JSを使用したい。今回typescriptで記載せれているため、typescriptと親和性があるものにしたい。

### 選定する上での優先順位
1. typescript,Next.jsの親和性の高さ
1. ビルド後のパフォーマンス(SSGのため)
1. 今後の伸びしろ

### 候補
 - Emotions
 - Compiled
 - vanilla-extact

 #### Emotions
 特に悪い点はない安心感がある

 ### Compiled
 [css mixin apiを作ろうとしている](https://github.com/atlassian-labs/compiled/issues/313)
 マージしているっぽいけど、[Masayuki Izumiさんのブログ](https://zenn.dev/izumin/scraps/ba7be48d8a0bf9)だとできてへんやんって感じらしい
 styleを上書きをする未来が見える...  
 bugのissueもかなりありそうですね...

 ### vanilla-extact
 そもそもCSS in JSでないw
 ただpageレベルのCSS読み込みをcss Modulesで読み込んでいるので、これに置き換えるのはあり。  
 自由度も高そう。

 **ということでEmotionを導入**