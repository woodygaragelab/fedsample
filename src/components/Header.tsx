import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes';
import type { RouteDef, ScreenGroup } from '../routes';

const GROUP_ORDER: ScreenGroup[] = ['管理システム', 'WEBマイページ', 'WEB入会申込'];

const GROUP_DEFAULT_PATH: Record<ScreenGroup, string> = {
  '管理システム': '/member/search',
  'WEBマイページ': '/web/login',
  'WEB入会申込':  '/apply/form',
};

export default function Header(): JSX.Element {
  const location = useLocation();

  // 現在のパスが属するグループを判定
  const activeRoute = routes.find((r) =>
    r.path === '/' ? location.pathname === '/' : location.pathname.startsWith(r.path)
  );
  const currentGroup: ScreenGroup = activeRoute?.group ?? '管理システム';

  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState<ScreenGroup>(currentGroup);

  // パス変化時にグループを自動追従
  useEffect(() => {
    setSelectedGroup(currentGroup);
  }, [currentGroup]);

  // グルーピング
  const groups = routes.reduce<Record<ScreenGroup, RouteDef[]>>(
    (acc, r) => {
      (acc[r.group] ||= []).push(r);
      return acc;
    },
    { '管理システム': [], 'WEBマイページ': [], 'WEB入会申込': [] }
  );

  return (
    <header className="app-header">
      {/* 1段目: ブランド + グループタブ */}
      <div className="header-row1">
        <span className="brand">会員管理システム</span>
        <nav className="group-tabs">
          {GROUP_ORDER.map((g) => (
            <button
              key={g}
              className={'group-tab' + (selectedGroup === g ? ' active' : '')}
              onClick={() => { setSelectedGroup(g); navigate(GROUP_DEFAULT_PATH[g]); }}
            >
              {g}
            </button>
          ))}
        </nav>
      </div>

      {/* 2段目: 選択グループの処理名（SCR-001 TopMenu は除外） */}
      <div className="header-row2">
        {groups[selectedGroup].filter((r) => r.id !== 'SCR-001').map((r) => (
          <NavLink
            key={r.path}
            to={r.path}
            end={r.path === '/'}
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            title={`${r.id} ${r.label}`}
          >
            {r.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
