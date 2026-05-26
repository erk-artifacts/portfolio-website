# Plan: デプロイされたポートフォリオサイトが空白表示になる問題の修正

## Context

https://erk-artifacts.github.io/portfolio-website/ にアクセスしても何も表示されない状態が続いている。
前回のDESIGN.md統合作業中に `docs/` を `.gitignore` に追加してgit追跡から外したことが発端。
その後 GitHub Actions ワークフローが `docs/` を再ビルド・再コミットして復旧したが、ユーザーのブラウザでは依然として空白表示。

### サーバー側調査結果（問題なし）

- GitHub Pages API: `status: "built"`, `source: main /docs`, `public: true`
- `docs/index.html`: 正しい構造、`<div id="root">` 存在
- CSS (index-Dvg8-KoG.css): Tailwind v4 全ユーティリティ + カスタムニューモフィズム変数が正しく含まれる
- JS (index-BwI4TqBr.js): React 19 + 全コンポーネントコード + `createRoot` 呼び出し確認済み
- 全アセット HTTP 200 でロード成功

### 想定される原因

1. **ブラウザキャッシュ**: 壊れた旧バージョンがキャッシュされている可能性
2. **CDN伝播**: GitHub CDNのエッジノードに旧バージョンがキャッシュされている可能性
3. **ブラウザ環境依存のJSランタイムエラー**: 特定のブラウザ/拡張機能でのみ発生するエラー

---

## Step 1: ローカルビルドと検証

依存関係をインストールし、ローカルでビルドして正常に完了するか確認。

```bash
git pull
npm ci
npm run build
```

ビルド成功後、生成された `docs/` の内容を確認:
- `docs/index.html` が存在し、アセット参照が正しいこと
- `docs/assets/` にJS/CSSファイルが存在すること
- JSファイル内に `createRoot` 呼び出しが含まれていること

**確認対象ファイル**: [vite.config.ts](vite.config.ts), [docs/index.html](docs/index.html)

## Step 2: 開発サーバーで視覚確認

```bash
npm run dev
```

開発サーバーを起動し、ブラウザで `http://localhost:5173/portfolio-website/` を開いて視覚的に確認する。
スクリーンショットを撮影して以下を検証:

- Hero セクション: プロフィール画像、名前、説明文が表示される
- Timeline セクション: キャリア履歴カードが表示される
- Works セクション: プロジェクトカードが表示される
- Contact セクション: フォームが表示される
- ニューモフィズムシャドウが正しく適用されている
- レスポンシブレイアウトが機能する

## Step 3: 問題の特定と修正

### 3a: ローカルで正常に表示される場合

コードは問題ない。デプロイ/キャッシュの問題と判断し、以下を実行:

1. `npm run build` で最新の docs/ を生成
2. docs/ をコミット・プッシュして強制的に新しいデプロイをトリガー
3. GitHub CDNのキャッシュを更新させる

**修正ファイル**: `docs/` 全体（再ビルド）

### 3b: ローカルでも表示されない場合

JavaScriptランタイムエラーを特定して修正。考えられる原因:

- **フォント未読み込み**: Inter フォントの Google Fonts `<link>` タグが `index.html` にない
  → `<link>` タグを追加してフォントを確実にロード
- **CSSクラス名の不一致**: Tailwind v4 が期待するクラスを生成していない
  → ビルド出力CSSを確認し、不足クラスがあれば `@theme` かソースを修正
- **依存パッケージの互換性**: lucide-react のバージョン問題
  → インストール済みバージョンを確認

**修正対象ファイル候補**:
- [index.html](index.html) — Google Fonts link 追加
- [src/index.css](src/index.css) — トークン確認
- [package.json](package.json) — 依存関係確認

## Step 4: プロダクションビルドで再確認

修正後、`npm run build` → `npm run preview` で本番相当のビルドを視覚確認。

## Step 5: コミット・プッシュ・デプロイ検証

1. 変更をコミット・プッシュ
2. GitHub Actions ワークフローが完了するまで待機
3. デプロイ完了後、https://erk-artifacts.github.io/portfolio-website/ にアクセスして表示確認
4. スクリーンショットを撮影して視覚的に確認

---

## 検証方法

- `npm run dev` でローカル開発サーバーの表示確認
- `npm run build && npm run preview` で本番ビルドの表示確認
- `npm run lint` でTypeScript型チェック
- デプロイ後のライブサイトでスクリーンショット撮影
