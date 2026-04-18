import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-101 ログイン画面（WEB会員マイページ）
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="web-page" style="max-width:800px; margin:0 auto; border:1px solid #ddd;">
    <div class="public-header">
      <div>🔵 一般社団法人 日本リハビリテーション病院・施設協会</div>
      <div style="font-size:11px;">協会会員ページです</div>
    </div>
    <div style="display:flex; padding:20px; gap:20px; background:#f5f5f5;">
      <!-- ログインフォーム -->
      <div style="background:#fff; border:1px solid #ccc; padding:20px; width:260px; flex-shrink:0;">
        <div style="font-size:12px; margin-bottom:10px; color:#555;">①会員Noとパスワードを入力し、ログインしてください。</div>
        <div class="field-row" style="margin-bottom:8px;">
          <input type="text" placeholder="会員No" style="width:100%; height:30px; font-size:13px;">
        </div>
        <div class="field-row" style="margin-bottom:8px;">
          <div style="display:flex; align-items:center; width:100%; border:1px solid #ccc; border-radius:2px;">
            <span style="padding:4px 6px; font-size:12px; color:#888;">🔒</span>
            <input type="password" placeholder="管理用パスワード" style="flex:1; border:none; height:28px; font-size:13px;">
          </div>
        </div>
        <button class="web-btn" style="width:100%; margin-bottom:8px;">ログイン</button>
        <div style="font-size:11px; text-align:center;">
          <a href="#" style="color:var(--green-dark);">管理用パスワードを忘れた方へ</a>
        </div>
      </div>
      <!-- サイドメニュー -->
      <div style="background:#fff; border:1px solid #ccc; padding:16px; flex:1;">
        <div style="font-size:13px; font-weight:bold; margin-bottom:12px; color:var(--green-dark);">会員登録ページへようこそ</div>
        <div style="font-size:12px; line-height:1.8; color:#555;">
          <p>会費のダウンロードや研修会の申込など<br>会員専用ページをご覧になれます。</p>
          <div style="margin-top:12px; padding:10px; background:#E8F5E9; border-radius:4px;">
            <div style="font-size:12px; font-weight:bold; margin-bottom:6px; color:var(--green-dark);">📋 会員専用ページ</div>
            <div style="font-size:11px;">【会費・研修会情報】</div>
            <div style="font-size:11px;">ご対応リスト・登録情報・各種申込</div>
          </div>
        </div>
        <div style="margin-top:16px; text-align:right;">
          <a href="#" style="font-size:12px; color:var(--green-dark); text-decoration:underline;">ご入会・詳しくはこちらへ</a>
        </div>
      </div>
    </div>
  </div>`;

export default function ScrWebLogin(): JSX.Element {
  return (
    <div className="screen active" id="scr101">
      <ScreenTitleBar id="SCR-101" title="ログイン画面（WEB会員マイページ）" subtitle="WEB会員マイページ ／ 会員" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
