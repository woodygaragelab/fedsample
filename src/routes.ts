// ルート定義（全画面の一元管理）

export type ScreenGroup = '管理者メニュー' | 'WEBマイページ' | 'WEB入会申込';

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

export const routes: RouteDef[] = [
  // 管理者メニュー
  { path: '/',              id: 'SCR-001', label: 'TopMenu',        group: '管理者メニュー' },
  { path: '/member/search', id: 'SCR-002', label: '会員検索',         group: '管理者メニュー' },
  { path: '/member/admin',  id: 'SCR-003', label: '会員管理',         group: '管理者メニュー' },
  { path: '/admission',     id: 'SCR-004', label: '◆入会',           group: '管理者メニュー' },
  { path: '/payment',       id: 'SCR-006', label: '入金システム',     group: '管理者メニュー' },
  { path: '/inquiry',       id: 'SCR-007', label: '◆問合せ',         group: '管理者メニュー' },
  { path: '/withdrawal',    id: 'SCR-008', label: '◆退会',           group: '管理者メニュー' },
  // 研修会システム (SCR-301〜311)
  { path: '/training/search',          id: 'SCR-301', label: '研修会設定検索',    group: '管理者メニュー' },
  { path: '/training/setting',         id: 'SCR-302', label: '研修会設定',         group: '管理者メニュー' },
  { path: '/training/fee',             id: 'SCR-303', label: '研修会費設定',       group: '管理者メニュー' },
  { path: '/training/fee-detail',      id: 'SCR-304', label: '費用一括設定詳細',   group: '管理者メニュー' },
  { path: '/training/payment',         id: 'SCR-311', label: '研修会入金',         group: '管理者メニュー' },
  // WEBマイページ
  { path: '/web/home',                 id: 'SCR-102', label: 'ご対応リスト',       group: 'WEBマイページ' },
  { path: '/training/contact-list',    id: 'SCR-306', label: 'ご対応リスト(研)',   group: 'WEBマイページ' },
  { path: '/training/apply-pre',       id: 'SCR-305', label: '研修会申込(仮)',     group: 'WEBマイページ' },
  { path: '/training/apply-confirm',   id: 'SCR-307', label: '申込確認(研)',       group: 'WEBマイページ' },
  { path: '/training/apply',           id: 'SCR-308', label: '研修会申込(実行)',   group: 'WEBマイページ' },
  { path: '/training/apply-complete',  id: 'SCR-309', label: '申込完了(研)',       group: 'WEBマイページ' },
  { path: '/training/apply-cancel',    id: 'SCR-310', label: '申込取消(研)',       group: 'WEBマイページ' },
  { path: '/web/reginfo',              id: 'SCR-103', label: '登録情報',           group: 'WEBマイページ' },
  { path: '/web/contact',              id: 'SCR-104', label: '問い合わせ',         group: 'WEBマイページ' },
  { path: '/web/withdraw',             id: 'SCR-105', label: '退会届',             group: 'WEBマイページ' },
  { path: '/web/login',                id: 'SCR-101', label: 'ログイン',           group: 'WEBマイページ' },
  // WEB入会申込
  { path: '/apply/form',    id: 'SCR-201', label: '申込フォーム',     group: 'WEB入会申込' },
  { path: '/apply/confirm', id: 'SCR-202', label: '確認ページ',       group: 'WEB入会申込' },
  { path: '/apply/complete',id: 'SCR-203', label: '完了ページ',       group: 'WEB入会申込' },
];

// TopMenu プルダウン用: 処理名 → 遷移先パス
export const topMenuItems: TopMenuItem[] = [
  { label: '会員検索',       path: '/member/search' },
  { label: '会員管理',       path: '/member/admin'  },
  { label: '入会',           path: '/admission'     },
  { label: '入会費検索',     path: '/fee/search'    },
  { label: '入金',           path: '/payment'       },
  { label: '問合せ',         path: '/inquiry'       },
  { label: '退会',           path: '/withdrawal'    },
  { label: 'マイページ ログイン', path: '/web/login' },
  { label: 'マイページ ご対応リスト', path: '/web/home' },
  { label: 'WEB入会 申込フォーム', path: '/apply/form' },
];
