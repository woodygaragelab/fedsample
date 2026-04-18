import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-103 登録情報ページ
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="web-header">
      <div class="site-name">🔵 日本リハビリテーション病院・施設協会</div>
      <div><nav style="display:inline;">
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">Home</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px; font-weight:bold; text-decoration:underline;">登録情報</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">問い合わせ</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">退会届</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">ログアウト</a>
      </nav></div>
    </div>
    <div class="web-body">
      <div class="alert-box" style="display:none;">登録完了しました。</div>
      <div class="web-section-hdr">登録情報</div>
      <table class="web-form-table" style="margin-bottom:12px;">
        <tr><td>法人名 ※</td><td><input type="text" style="width:300px;" value="ためし法人"></td></tr>
        <tr><td>法人名フリガナ</td><td><input type="text" style="width:300px;" value="タメシホウジン"></td></tr>
        <tr><td>施設名 ※</td><td><input type="text" style="width:300px;" value="ためし病院"></td></tr>
        <tr><td>施設名フリガナ</td><td><input type="text" style="width:300px;" value="タメシビョウイン"></td></tr>
        <tr><td>施設種別</td><td><select style="width:150px;"><option>病院</option><option>クリニック</option></select></td></tr>
        <tr><td>郵便番号 ※</td><td><input type="text" value="100001" style="width:80px;"></td></tr>
        <tr><td>住所 ※</td><td><input type="text" style="width:300px;" value="東京都千代田区1-1"></td></tr>
        <tr><td>TEL ※</td><td><input type="text" value="03-2222-3333" style="width:130px;"></td></tr>
        <tr><td>FAX</td><td><input type="text" style="width:130px;"></td></tr>
        <tr><td>連絡担当者名 ※</td><td><input type="text" style="width:200px;" value="試し 太郎"></td></tr>
        <tr><td>連絡担当者メール ※</td><td><input type="text" style="width:300px;" value="tameshi@aaa.com"></td></tr>
        <tr><td>マイページ管理メール ※</td><td><input type="text" style="width:300px;" value="tameshi@aaa.com"></td></tr>
      </table>
      <div style="background:#E3F2FD; border:1px solid #90CAF9; padding:10px; margin-bottom:10px; font-size:12px;">
        <div style="font-weight:bold; color:#1565C0; margin-bottom:6px;">会員専用閲覧ページ・各種研修会申込パスワード設定</div>
        <div class="field-row">
          <label>新しいパスワード</label>
          <input type="password" style="width:200px;" placeholder="半角英数字6文字以上">
          <button class="btn btn-blue btn-sm">登録</button>
        </div>
      </div>
      <div style="text-align:center;">
        <button class="web-btn">登　録</button>
      </div>
    </div>
  </div>`;

export default function ScrWebRegInfo(): JSX.Element {
  return (
    <div className="screen active" id="scr103">
      <ScreenTitleBar id="SCR-103" title="登録情報ページ" subtitle="WEB会員マイページ ／ 会員" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
