// SCR-010 管理者ログイン画面
const html = `<div class="admin-win" style="max-width:400px; margin:60px auto;">
    <div class="admin-titlebar">🔵 管理者ログイン<span>✕</span></div>
    <div class="admin-content" style="padding:32px 40px;">
      <div style="text-align:center; margin-bottom:24px; font-size:16px; font-weight:bold; color:#333;">
        XXXXXXシステム
      </div>
      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0; font-size:13px; white-space:nowrap; width:110px;">ユーザーID</td>
          <td style="padding:8px 0;">
            <input type="text" style="width:100%; height:28px; font-size:13px; box-sizing:border-box;" placeholder="">
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0; font-size:13px;">パスワード</td>
          <td style="padding:8px 0;">
            <input type="password" style="width:100%; height:28px; font-size:13px; box-sizing:border-box;" placeholder="">
          </td>
        </tr>
      </table>
      <div style="margin-top:24px; text-align:center;">
        <button class="btn btn-blue" style="width:120px; padding:6px 0; font-size:13px;">ログイン</button>
      </div>
      <div style="margin-top:16px; text-align:center; font-size:11px; color:#888;">
        パスワードをお忘れの方はシステム管理者にお問い合わせください。
      </div>
    </div>
    <div class="admin-statusbar"><span>管理者ログイン</span><span>NumLock 📊 ▣ ▣ ▣</span></div>
  </div>`;

export default function ScrAdminLogin(): JSX.Element {
  return (
    <div className="screen active" id="scr010">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
