// SCR-101 ログイン画面（WEB会員マイページ）
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { webLogin } from '../auth/authService';

export default function ScrWebLogin(): JSX.Element {
  const [memberNo, setMemberNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!memberNo.trim() || !password) {
      setError('会員Noとパスワードを入力してください。');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const { token, user } = await webLogin(memberNo.trim(), password);
      login(user, token);
      navigate('/web/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログインに失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="screen active" id="scr101">
      <div className="web-page" style={{ maxWidth: 800, margin: '0 auto', border: '1px solid #ddd' }}>
        <div style={{ display: 'flex', padding: 20, gap: 20, background: '#f5f5f5' }}>
          {/* ログインフォーム */}
          <div style={{ background: '#fff', border: '1px solid #ccc', padding: 20, width: 260, flexShrink: 0 }}>
            <div style={{ fontSize: 12, marginBottom: 10, color: '#555' }}>
              ①会員Noとパスワードを入力し、ログインしてください。
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field-row" style={{ marginBottom: 8 }}>
                <input
                  type="text"
                  placeholder="会員No"
                  value={memberNo}
                  onChange={(e) => setMemberNo(e.target.value)}
                  style={{ width: '100%', height: 30, fontSize: 13, boxSizing: 'border-box' }}
                  autoComplete="username"
                  disabled={loading}
                />
              </div>
              <div className="field-row" style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', border: '1px solid #ccc', borderRadius: 2, boxSizing: 'border-box' }}>
                  <span style={{ padding: '4px 6px', fontSize: 12, color: '#888' }}>🔒</span>
                  <input
                    type="password"
                    placeholder="管理用パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ flex: 1, border: 'none', height: 28, fontSize: 13, outline: 'none' }}
                    autoComplete="current-password"
                    disabled={loading}
                  />
                </div>
              </div>
              {error && (
                <div style={{ fontSize: 11, color: '#cc0000', marginBottom: 8, textAlign: 'center' }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="web-btn"
                style={{ width: '100%', marginBottom: 8 }}
                disabled={loading}
              >
                {loading ? '処理中...' : 'ログイン'}
              </button>
            </form>
            <div style={{ fontSize: 11, textAlign: 'center' }}>
              <a href="#" style={{ color: 'var(--green-dark)' }}>管理用パスワードを忘れた方へ</a>
            </div>
          </div>
          {/* サイドパネル */}
          <div style={{ background: '#fff', border: '1px solid #ccc', padding: 16, flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 12, color: 'var(--green-dark)' }}>
              会員登録ページへようこそ
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.8, color: '#555' }}>
              <p>会費のダウンロードや研修会の申込など<br />会員専用ページをご覧になれます。</p>
              <div style={{ marginTop: 12, padding: 10, background: '#E8F5E9', borderRadius: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 6, color: 'var(--green-dark)' }}>
                  📋 会員専用ページ
                </div>
                <div style={{ fontSize: 11 }}>【会費・研修会情報】</div>
                <div style={{ fontSize: 11 }}>ご対応リスト・登録情報・各種申込</div>
              </div>
            </div>
            <div style={{ marginTop: 16, textAlign: 'right' }}>
              <a href="#" style={{ fontSize: 12, color: 'var(--green-dark)', textDecoration: 'underline' }}>
                ご入会・詳しくはこちらへ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
