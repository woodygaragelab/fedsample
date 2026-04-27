import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes';
import type { RouteDef, ScreenGroup } from '../routes';
import { useAuth } from '../auth/AuthContext';

const GROUP_ORDER: ScreenGroup[] = ['管理者メニュー', 'WEBマイページ', 'WEB入会申込'];

const GROUP_DEFAULT_PATH: Record<ScreenGroup, string> = {
  '管理者メニュー': '/admin/login',
  'WEBマイページ': '/web/login',
  'WEB入会申込':  '/apply/form',
};

type SubMenuDef = { label: string; ids: string[]; defaultPath?: string };

const SUB_MENUS: Partial<Record<ScreenGroup, SubMenuDef[]>> = {
  '管理者メニュー': [
    { label: '会員管理', ids: ['SCR-002', 'SCR-003', 'SCR-004', 'SCR-006', 'SCR-007', 'SCR-008'], defaultPath: '/member/search' },
    { label: '研修', ids: ['SCR-301', 'SCR-302', 'SCR-303', 'SCR-304', 'SCR-311'], defaultPath: '/training/search' },
    { label: '年会費管理', ids: ['SCR-401', 'SCR-402', 'SCR-403', 'SCR-404', 'SCR-411'], defaultPath: '/annual/search' },
    { label: 'アンケート', ids: ['SCR-501'], defaultPath: '/anket/setting' },
  ],
  'WEBマイページ': [
    { label: '研修申込', ids: ['SCR-305', 'SCR-306', 'SCR-307', 'SCR-308', 'SCR-309', 'SCR-310'] },
  ],
};

const groups = routes.reduce<Record<ScreenGroup, RouteDef[]>>(
  (acc, r) => {
    (acc[r.group] ||= []).push(r);
    return acc;
  },
  { '管理者メニュー': [], 'WEBマイページ': [], 'WEB入会申込': [] }
);

function resolveGroup(pathname: string): ScreenGroup {
  const r = routes.find((r) =>
    r.path === '/' ? pathname === '/' : pathname.startsWith(r.path)
  );
  return r?.group ?? '管理者メニュー';
}

function resolveSubMenu(group: ScreenGroup, pathname: string): string | null {
  const r = routes.find((r) =>
    r.path === '/' ? pathname === '/' : pathname.startsWith(r.path)
  );
  return (SUB_MENUS[group] ?? []).find((sm) => sm.ids.includes(r?.id ?? ''))?.label ?? null;
}

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, user, logout } = useAuth();

  const [selectedGroup, setSelectedGroup] = useState<ScreenGroup>(() =>
    resolveGroup(location.pathname)
  );
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(() =>
    resolveSubMenu(resolveGroup(location.pathname), location.pathname)
  );

  // パス変化時にグループとサブメニューを追従
  useEffect(() => {
    const group = resolveGroup(location.pathname);
    const sub = resolveSubMenu(group, location.pathname);
    setSelectedGroup(group);
    if (sub !== null) setOpenSubMenu(sub); // サブメニュー項目に遷移した場合のみ展開
  }, [location.pathname]);

  const subMenuDefs = SUB_MENUS[selectedGroup] ?? [];
  const subMenuIds = new Set(subMenuDefs.flatMap((sm) => sm.ids));

  const row2Routes = groups[selectedGroup].filter(
    (r) => r.id !== 'SCR-001' && r.id !== 'SCR-101' && r.id !== 'SCR-010' && !subMenuIds.has(r.id)
  );

  const activeSubMenuDef = subMenuDefs.find((sm) => sm.label === openSubMenu);
  const row3Routes = activeSubMenuDef
    ? groups[selectedGroup].filter((r) => activeSubMenuDef.ids.includes(r.id))
    : [];

  function handleGroupClick(g: ScreenGroup) {
    setSelectedGroup(g);
    setOpenSubMenu(null);
    navigate(GROUP_DEFAULT_PATH[g]);
  }

  function handleSubMenuToggle(sm: SubMenuDef) {
    const isOpening = openSubMenu !== sm.label;
    setOpenSubMenu(isOpening ? sm.label : null);
    if (isOpening && sm.defaultPath) navigate(sm.defaultPath);
  }

  return (
    <header className="app-header">
      {/* 1段目: ブランド + グループタブ */}
      <div className="header-row1">
        <span className="brand">XXXXXシステム</span>
        <nav className="group-tabs">
          {GROUP_ORDER.map((g) => (
            <button
              key={g}
              className={'group-tab' + (selectedGroup === g ? ' active' : '')}
              onClick={() => handleGroupClick(g)}
            >
              {g}
            </button>
          ))}
        </nav>
      </div>

      {/* 2段目: サブメニューカテゴリボタン（左端）+ 処理名ナビリンク */}
      <div className="header-row2">
        {subMenuDefs.map((sm) => (
          <button
            key={sm.label}
            className={'nav-link submenu-btn' + (openSubMenu === sm.label ? ' active' : '')}
            onClick={() => handleSubMenuToggle(sm)}
          >
            {sm.label} {openSubMenu === sm.label ? '▴' : '▾'}
          </button>
        ))}
        {row2Routes.map((r) => (
          <NavLink
            key={r.path}
            to={r.path}
            end
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            title={`${r.id} ${r.label}`}
          >
            {r.label}
          </NavLink>
        ))}
        {isAuthenticated ? (
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12 }}>{user?.name}</span>
            <button
              className="nav-link"
              onClick={async () => {
                await logout();
                navigate(GROUP_DEFAULT_PATH[selectedGroup]);
              }}
            >
              ログオフ
            </button>
          </span>
        ) : (
          (() => {
            const adminLogin = groups[selectedGroup].find((r) => r.id === 'SCR-010');
            const webLogin   = groups[selectedGroup].find((r) => r.id === 'SCR-101');
            const loginRoute = adminLogin ?? webLogin;
            return loginRoute ? (
              <NavLink
                to={loginRoute.path}
                end
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                title={`${loginRoute.id} ログイン`}
                style={{ marginLeft: 'auto' }}
              >
                ログイン
              </NavLink>
            ) : null;
          })()
        )}
      </div>

      {/* 3段目: サブメニュー項目（openSubMenu が設定されているときのみ表示） */}
      {row3Routes.length > 0 && (
        <div className="header-row3">
          {row3Routes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              end
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              title={`${r.id} ${r.label}`}
            >
              {r.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
