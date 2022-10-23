#メモ

# node 16 → 17のメモ
下記のエラーが起きた
そのため、imagemin-svgoを9系にダウングレード
https://github.com/cyrilwanner/next-optimized-images/issues/270

titleの動的出力をした際に文字と変数を組み合わせる場合はnodeを一つにしなければならない
https://b.0218.jp/202207152029.html

## 技術選定

### CSSLibrary
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

## react17の場合
emotionを使用する場合は`/** @jsxImportSource @emotion/react */`をコンポーネント毎に記述する必要あり。
今回は`preset-react`をbabel.configに記載することでやらなくてもビルドが通る

## emotion/styledとemotion/react
`emotion/react`だとSafari側でサーバー側とクラインアント側によるクラス名の違いでhydrateエラーが出ているそのため`emotion/styled`を使った方が良いかもしれない

## custom Errorを作らなかったわけ
[https://zenn.dev/nus3/scraps/3069a458562eca](https://zenn.dev/nus3/scraps/3069a458562eca)
下記も重要
> page以下のコンポーネントでイベントハンドラ以外のerrorがthorwされたらcustom error pageが表示される

