# Plan: Google DESIGN.md をポートフォリオサイトに導入する

## Context

現在のポートフォリオサイトは React 19 + Tailwind CSS v4 のニューモーフィズムデザインで構築されていますが、デザインシステムが `src/index.css` の `@theme` ブロックにのみ定義されており、構造化されたドキュメントがありません。

Google の [DESIGN.md](https://github.com/google-labs-code/design.md) は、YAML front matter（機械読み取り可能なデザイントークン）+ Markdown（人間向けの設計レーシュメ）で構成される設計システム仕様です。これを導入することで:

- デザインの意図と根拠が明文化される
- `@google/design.md` CLI によるトークンの検証・Lint が可能
- `designmd export --format css-tailwind` で Tailwind v4 CSS へ自動エクスポート可能
- AIエージェント（Claude Code等）が DESIGN.md を参照して一貫したUIを生成できる

---

## Phase 1: @google/design.md のインストールと設定

### 1.1 パッケージのインストール

```bash
npm install --save-dev @google/design.md
```

### 1.2 package.json にスクリプトを追加

- [package.json](package.json) の `scripts` に以下を追加:
  - `"design:lint": "designmd lint DESIGN.md"` — DESIGN.md の構文検証
  - `"design:export": "designmd export DESIGN.md --format=css-tailwind > src/design-tokens.css"` — Tailwind v4 CSS生成
  - `"design:check": "designmd lint DESIGN.md && designmd diff DESIGN.md DESIGN.md"` — 検証のみ

> Windows環境では `designmd` エイリアスを使用（`design.md` はファイル関連付けの問題あり）

---

## Phase 2: DESIGN.md の作成

プロジェクトルートに [DESIGN.md](DESIGN.md) を新規作成。

### YAML front matter の構成

現在の `src/index.css` のトークンを DESIGN.md 形式にマッピング:

```yaml
---
version: "alpha"
name: "Neumorphism Portfolio"
description: "Soft UI design system inspired by physical extruded plastic"

colors:
  primary: "#6D5DFC"        # アクセント（インタラクティブ要素）
  secondary: "#4A4A4A"      # メインテキスト
  tertiary: "#7A7A7A"       # サブテキスト
  neutral: "#E0E5EC"        # ベース背景色
  on-neutral: "#FFFFFF"     # ハイライト光源色
  shadow-source: "#A3B1C6"  # シャドウ源色

typography:
  h1:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: "700"
    lineHeight: "1.1"
  h2:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.625"
  label:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: "600"
    letterSpacing: "0.025em"

rounded:
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"

components:
  button-primary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: "8px 32px"
  button-icon:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: "16px"
  card:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.xl}"
  input-field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  tag:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---
```

### Markdown body セクション構成

必須セクション順（spec準拠）:

1. **Overview** — ニューモーフィズムの設計思想（物理的な押し出し/押し込みのメタファー）
2. **Colors** — 各色の役割と使用場面
3. **Typography** — Interフォントの使用理由、各サイズの適用先
4. **Layout & Spacing** — レスポンシブブレークポイント、セクション構成
5. **Elevation & Depth** — シャドウシステム（4種）の詳細（DESIGN.md YAMLでは表現不可なためproseで文書化）
   - Flat: `9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.6)`
   - Pressed: `inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8)`
   - Hover: `12px 12px 20px rgba(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.7)`
   - Small: `5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.6)`
6. **Shapes** — 角丸の階層と使用箇所
7. **Components** — 各コンポーネントのトークン適用詳細
8. **Do's and Don'ts** — デザインガイドライン

---

## Phase 3: src/index.css のリファクタリング

### 3.1 新しい構造

[src/index.css](src/index.css) を3セクション構成に再構成:

```css
@import "tailwindcss";

/* Section 1: DESIGN.md から自動生成されたトークン */
@import "./design-tokens.css";

/* Section 2: シャドウトークン（手動管理） */
@theme {
  --shadow-neu-flat: ...;
  --shadow-neu-pressed: ...;
  --shadow-neu-hover: ...;
  --shadow-neu-sm: ...;
}

/* Section 3: ベーススタイルとユーティリティ */
body { ... }
.text-shadow-neu { ... }
```

### 3.2 トークン名の互換性確認

`designmd export` が生成するCSS変数名が、現在のコンポーネントが使用するクラス名（`bg-neu-base`等）と一致するか検証。必要に応じてDESIGN.mdのYAMLキー階層を調整。

> もし自動エクスポートの命名が合わない場合は、DESIGN.mdをドキュメント・Lint用途のみとし、`@theme` ブロックは手動維持する。

---

## Phase 4: CLAUDE.md の作成

[CLAUDE.md](CLAUDE.md) を新規作成し、以下を記載:

- プロジェクト概要（React 19 + TypeScript + Vite + Tailwind CSS v4）
- デザインシステムの参照先として DESIGN.md を明記
- 開発ワークフロー（`design:lint`, `design:export`, `build`）
- トークンの流れ: DESIGN.md → export → design-tokens.css → index.css → Tailwind → Components
- シャドウトークンは index.css Section 2 で手動管理する旨の注意
- Windows環境での `designmd` エイリアス使用

---

## Phase 5: 検証とビルド

1. `npm run design:lint` — DESIGN.md の構文検証
2. `npm run design:export` — CSS生成して名前整合性確認
3. `npm run build` — プロダクションビルドが成功することを確認
4. `npm run dev` — ローカルで各セクションの表示を確認
   - Hero: プロフィール画像の二重シャドウ、アクセントカラー
   - Timeline: 押し込みグローブ、フラットドット
   - Works: インタラクティブカード、タグのsmシャドウ
   - Contact: 押し込み入力フィールド、フォーカスリング

---

## 変更対象ファイル一覧

| ファイル | 操作 | 説明 |
|---|---|---|
| `DESIGN.md` | 新規作成 | デザインシステム定義（YAML + Markdown） |
| `CLAUDE.md` | 新規作成 | 開発ガイド |
| `src/design-tokens.css` | 自動生成 | DESIGN.mdからエクスポートされたTailwind CSS |
| `src/index.css` | 編集 | design-tokens.cssのインポート追加、カラートークンを生成物に移行 |
| `package.json` | 編集 | @google/design.md 依存関係とスクリプト追加 |
