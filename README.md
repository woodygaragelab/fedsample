# 会員管理システム 画面モックアップ（React + TypeScript + Vite + React Router）

`会員管理システム_画面モックアップ.html` を **Vite + React + TypeScript** 化し、
**SCR-001 TopMenu を画面上部ヘッダのメニュー**として配置、
**メニューから選んだ画面を React Router で切替表示**する TypeScript プロジェクトです。

## セットアップ

```bash
cd 会員管理システム_react
npm install
npm run dev          # 開発サーバ起動 (http://localhost:5173)
npm run typecheck    # 型チェックのみ (tsc --noEmit)
npm run build        # 型チェック + 本番ビルド
npm run preview      # ビルド結果のプレビュー
```

## 画面遷移

画面上部ヘッダに以下を配置しています。

- **処理名プルダウン**（SCR-001 TopMenu と同じ役割）
  - 選択すると `useNavigate()` で該当画面に遷移
- **グループ別ナビリンク**（`NavLink`）
  - 【管理システム】【WEBマイページ】【WEB入会申込】の3系統
  - 現在の画面は `active` クラスでハイライト

## ルート一覧

| Path | SCR | 画面名 |
|---|---|---|
| `/` | SCR-001 | TopMenu |
| `/member/search` | SCR-002 | 会員検索 |
| `/member/admin` | SCR-003 | 会員管理（タブ切替を `useState` で実装） |
| `/admission` | SCR-004 | ◆入会 |
| `/fee/search` | SCR-005 | 入会費検索 |
| `/payment` | SCR-006 | 入金システム |
| `/inquiry` | SCR-007 | ◆問合せ |
| `/withdrawal` | SCR-008 | ◆退会 |
| `/web/login` | SCR-101 | ログイン |
| `/web/home` | SCR-102 | ご対応リスト |
| `/web/reginfo` | SCR-103 | 登録情報 |
| `/web/contact` | SCR-104 | 問い合わせ |
| `/web/withdraw` | SCR-105 | 退会届 |
| `/apply/form` | SCR-201 | 申込フォーム |
| `/apply/confirm` | SCR-202 | 確認ページ |
| `/apply/complete` | SCR-203 | 完了ページ |

## ディレクトリ構成

```
会員管理システム_react/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── src/
    ├── main.tsx              # エントリ (BrowserRouter でラップ)
    ├── App.tsx               # Routes/Route 定義
    ├── routes.ts             # ルート一覧と型定義 (RouteDef / ScreenGroup)
    ├── index.css             # 元モックのCSSを継承 + Header用追加スタイル
    ├── components/
    │   ├── Header.tsx        # 画面上部ヘッダ (SCR-001 TopMenu 統合)
    │   └── ScreenTitleBar.tsx
    └── screens/
        ├── ScrTopMenu.tsx        # SCR-001
        ├── ScrMemberSearch.tsx   # SCR-002
        ├── ScrMemberAdmin.tsx    # SCR-003 (タブ切替 useState<TabId>)
        ├── ScrAdmission.tsx      # SCR-004
        ├── ScrFeeSearch.tsx      # SCR-005
        ├── ScrPayment.tsx        # SCR-006
        ├── ScrInquiry.tsx        # SCR-007
        ├── ScrWithdrawal.tsx     # SCR-008
        ├── ScrWebLogin.tsx       # SCR-101
        ├── ScrWebHome.tsx        # SCR-102
        ├── ScrWebRegInfo.tsx     # SCR-103
        ├── ScrWebContact.tsx     # SCR-104
        ├── ScrWebWithdraw.tsx    # SCR-105
        ├── ScrApplyForm.tsx      # SCR-201
        ├── ScrApplyConfirm.tsx   # SCR-202
        └── ScrApplyComplete.tsx  # SCR-203
```

## TypeScript 実装ポイント

### 型定義（`src/routes.ts`）

```ts
export type ScreenGroup = '管理システム' | 'WEBマイページ' | 'WEB入会申込';

export interface RouteDef {
  path: string;
  id: string;
  label: string;
  group: ScreenGroup;
}

export interface TopMenuItem {
  label: string;
  path: string;
}
```

### Header (`src/components/Header.tsx`)

- `ChangeEvent<HTMLSelectElement>` 型でイベントハンドラを実装
- `routes.reduce<Record<ScreenGroup, RouteDef[]>>(...)` でグルーピング

### SCR-003 (`src/screens/ScrMemberAdmin.tsx`)

```ts
type TabId = 't1' | 't2' | 't3' | 't4' | 't5';
const [activeTab, setActiveTab] = useState<TabId>('t1');
```

### 各画面コンポーネント

- 全画面 `(): JSX.Element` を返す関数コンポーネント
- モック画面の HTML 構造を保持するため `dangerouslySetInnerHTML` を使用（実運用ではフォーム部品化推奨）

### `tsconfig.json`

- `strict: true`, `noUnusedLocals`, `noUnusedParameters` を有効化
- `jsx: "react-jsx"` (React 17+ 新 JSX transform)
- `moduleResolution: "bundler"` (Vite 連携)

### Vite 設定 (`vite.config.ts`)

```ts
resolve: { extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx', '.json'] }
```

`.ts`/`.tsx` を優先して解決するよう拡張子順を明示。

## ビルド検証

```
> npm run typecheck
✓ 型エラーなし

> npm run build
✓ 53 modules transformed.
✓ built in 836ms
```
