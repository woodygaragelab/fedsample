// SCR-010 管理者ログイン画面
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { adminLogin } from '../auth/authService';

export default function ScrAdminLogin(): JSX.Element {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userId.trim() || !password) {
      setError('ユーザーIDとパスワードを入力してください。');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const { token, user } = await adminLogin(userId.trim(), password);
      login(user, token);
      navigate('/member/search');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログインに失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="screen active" id="scr010">
      <div style={{ maxWidth: 400, margin: '60px auto' }} className="admin-win">
        <div className="admin-titlebar">🔵 管理者ログイン<span>✕</span></div>
        <div className="admin-content" style={{ padding: '32px 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 24, fontSize: 16, fontWeight: 'bold', color: '#333' }}>
            XXXXXXシステム
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px 0', fontSize: 13, whiteSpace: 'nowrap', width: 110 }}>ユーザーID</td>
                  <td style={{ padding: '8px 0' }}>
                    <input
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      style={{ width: '100%', height: 28, fontSize: 13, boxSizing: 'border-box' }}
                      autoComplete="username"
                      disabled={loading}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', fontSize: 13 }}>パスワード</td>
                  <td style={{ padding: '8px 0' }}>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: '100%', height: 28, fontSize: 13, boxSizing: 'border-box' }}
                      autoComplete="current-password"
                      disabled={loading}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {error && (
              <div style={{ marginTop: 12, color: '#cc0000', fontSize: 12, textAlign: 'center' }}>
                {error}
              </div>
            )}
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <button
                type="submit"
                className="btn btn-blue"
                style={{ width: 120, padding: '6px 0', fontSize: 13 }}
                disabled={loading}
              >
                {loading ? '処理中...' : 'ログイン'}
              </button>
            </div>
          </form>
          <div style={{ marginTop: 16, textAlign: 'center', fontSize: 11, color: '#888' }}>
            パスワードをお忘れの方はシステム管理者にお問い合わせください。
          </div>
        </div>
        <div className="admin-statusbar"><span>管理者ログイン</span><span>NumLock 📊 ▣ ▣ ▣</span></div>
      </div>
    </div>
  );
}
