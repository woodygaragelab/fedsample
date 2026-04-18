import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-202 確認ページ（入会申込確認）
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="public-header">🔵 一般社団法人 日本リリリリ施設・施設協会</div>
    <div class="public-body">
      <div class="web-section-hdr">新規申し込み確認</div>
      <div class="alert-box">📋 お申し込み内容に誤りがなければ、【登録申請】ボタンを押してください。</div>
      <div style="background:#fff; border:1px solid #ddd; padding:12px; margin-bottom:12px; font-size:12px;">
        <div style="font-weight:bold; margin-bottom:8px; color:var(--blue-dark);">◆ 法人情報</div>
        <table class="web-form-table">
          <tr><td>法人名</td><td>XX法人サンプル会</td></tr>
          <tr><td>法人名フリガナ</td><td>イショウホウジンサンプルカイ</td></tr>
          <tr><td>施設名</td><td>サンプルリリ施設</td></tr>
          <tr><td>施設種別</td><td>施設</td></tr>
          <tr><td>郵便番号</td><td>〒106-0051</td></tr>
          <tr><td>住所</td><td>東京都港区芝公園1-1</td></tr>
          <tr><td>TEL</td><td>03-1111-1010</td></tr>
          <tr><td>法人代表者</td><td>代表　志公園 太郎　（シバコウエン タロウ）</td></tr>
        </table>
        <div style="font-weight:bold; margin:10px 0 8px; color:var(--blue-dark);">◆ 連絡担当者情報</div>
        <table class="web-form-table">
          <tr><td>担当者名</td><td>志公園 太郎</td></tr>
          <tr><td>役職</td><td>代表</td></tr>
          <tr><td>メールアドレス</td><td>shiba@example.com</td></tr>
        </table>
      </div>
      <div style="display:flex; justify-content:center; gap:16px;">
        <button class="web-btn-gray">入力に戻る</button>
        <button class="web-btn">登録申請</button>
      </div>
    </div>
  </div>`;

export default function ScrApplyConfirm(): JSX.Element {
  return (
    <div className="screen active" id="scr202">
      <ScreenTitleBar id="SCR-202" title="確認ページ（入会申込確認）" subtitle="WEB公開 ／ 入会申込者（一般）" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
