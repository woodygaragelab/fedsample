// SCR-002 会員検索画面
import { useState } from 'react';
import { searchMembers, MemberRecord } from '../api/memberApi';

const PAGE_SIZE_OPTIONS = [30, 50, 100];

export default function ScrMemberSearch(): JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [excludeWithdrawal, setExcludeWithdrawal] = useState(true);
  const [pageSize, setPageSize] = useState(30);
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState<MemberRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const totalPages = Math.ceil(total / pageSize);
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  async function handleSearch(targetPage = 1) {
    setLoading(true);
    setError(null);
    try {
      const result = await searchMembers({ keyword, excludeWithdrawal, pageSize, page: targetPage });
      setMembers(result.members);
      setTotal(result.total);
      setPage(targetPage);
      setSearched(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : '検索に失敗しました。');
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch();
  }

  return (
    <div className="screen active" id="scr002">
      <div className="admin-win">
        <div className="admin-titlebar">
          🔵 会員検索 システム管理者<span>✕</span>
        </div>
        <div className="admin-toolbar">
          <button className="btn btn-blue btn-sm">新　規</button>
          <button className="btn btn-gray btn-sm">戻　る</button>
          <button className="btn btn-gray btn-sm">❓</button>
        </div>
        <div className="admin-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
            <label>検索ワード</label>
            <input
              type="text"
              style={{ width: 200 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder=""
            />
            <button
              className="btn btn-red btn-sm"
              onClick={() => handleSearch()}
              disabled={loading}
            >
              {loading ? '検索中…' : '検　索'}
            </button>
            <label>
              <input
                type="checkbox"
                checked={excludeWithdrawal}
                onChange={(e) => setExcludeWithdrawal(e.target.checked)}
              />{' '}
              退会除く
            </label>
            <select
              style={{ width: 90 }}
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                if (searched) handleSearch(1);
              }}
            >
              {PAGE_SIZE_OPTIONS.map((n) => (
                <option key={n} value={n}>{n}件表示</option>
              ))}
            </select>
            {searched && (
              <span style={{ fontSize: 11, color: '#555' }}>
                （ {start}–{end} / {total} ）
              </span>
            )}
            <button
              className="btn btn-gray btn-sm"
              onClick={() => handleSearch(Math.max(1, page - 1))}
              disabled={!searched || page <= 1 || loading}
            >
              «
            </button>
            <button
              className="btn btn-gray btn-sm"
              onClick={() => handleSearch(Math.min(totalPages, page + 1))}
              disabled={!searched || page >= totalPages || loading}
            >
              »
            </button>
            <button className="btn btn-blue btn-sm">CSV出力</button>
          </div>

          {error && (
            <div style={{ color: 'red', fontSize: 12, marginBottom: 8 }}>{error}</div>
          )}

          <table className="list-tbl">
            <thead>
              <tr>
                <th>ID</th>
                <th>会員No</th>
                <th>会員区分</th>
                <th>法人名等</th>
                <th>施設名</th>
                <th>入会日</th>
                <th>都道府県</th>
              </tr>
            </thead>
            <tbody>
              {!searched && !loading && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', color: '#888', fontSize: 12 }}>
                    検索ワードを入力して「検索」ボタンを押してください
                  </td>
                </tr>
              )}
              {loading && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', color: '#555', fontSize: 12 }}>
                    検索中…
                  </td>
                </tr>
              )}
              {!loading && searched && members.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', color: '#888', fontSize: 12 }}>
                    該当する会員が見つかりませんでした
                  </td>
                </tr>
              )}
              {!loading && members.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.memberNo}</td>
                  <td>{m.memberType}</td>
                  <td>{m.corporateName}</td>
                  <td>{m.facilityName}</td>
                  <td>{m.joinDate}</td>
                  <td>{m.prefecture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="admin-statusbar">
          <span>会員検索</span>
          <span>NumLock 📊 ▣ ▣ ▣</span>
        </div>
      </div>
    </div>
  );
}
