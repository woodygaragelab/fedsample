import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-102 ご対応リスト（ホーム）
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="web-header">
      <div class="site-name">🔵 一般社団法人 日本リハビリテーション病院・施設協会</div>
      <div class="web-member-name">A2008 ためし法人 様</div>
    </div>
    <div style="background:var(--green-nav);">
      <nav style="padding:0 16px; display:flex; gap:0;">
        <a href="#" class="active-nav" style="padding:6px 14px; display:inline-block;">Home</a>
        <a href="#" style="padding:6px 14px; display:inline-block; color:#fff; text-decoration:none;">登録情報</a>
        <a href="#" style="padding:6px 14px; display:inline-block; color:#fff; text-decoration:none;">問い合わせ</a>
        <a href="#" style="padding:6px 14px; display:inline-block; color:#fff; text-decoration:none;">退会届</a>
        <a href="#" style="padding:6px 14px; display:inline-block; color:#fff; text-decoration:none; margin-left:auto;">ログアウト</a>
      </nav>
    </div>
    <div class="web-body">
      <div class="alert-box">📢 2,895 ご未処理のお知らせが3件あります。ご確認ください。</div>
      <div class="web-section-hdr">ご対応リスト</div>
      <table class="tbl-list">
        <tr><th>ID</th><th>日付</th><th>内容</th><th>状態</th><th>期日</th><th>完了</th><th>件数</th><th></th></tr>
        <tr>
          <td>2246</td><td>2021/07/08</td><td>入会申込内容をご確認ください</td>
          <td><span class="badge badge-gray">完了</span></td><td></td><td>2021/07/14</td><td></td><td></td>
        </tr>
        <tr>
          <td>2255</td><td>2021/07/14</td><td>【正会員】2021年度入会時年会費</td>
          <td><span class="badge badge-red">未納</span></td><td>2021/07/24</td><td></td><td>1</td>
          <td><button class="btn btn-blue btn-sm">📄 請求書</button></td>
        </tr>
      </table>
    </div>
  </div>`;

export default function ScrWebHome(): JSX.Element {
  return (
    <div className="screen active" id="scr102">
      <ScreenTitleBar id="SCR-102" title="ご対応リスト（ホーム）" subtitle="WEB会員マイページ ／ 会員" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
