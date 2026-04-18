import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-105 退会届ページ
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="web-header">
      <div class="site-name">🔵 日本リハビリテーション病院・施設協会</div>
      <div><nav>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">Home</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">登録情報</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">問い合わせ</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px; font-weight:bold; text-decoration:underline;">退会届</a>
        <a href="#" style="color:#fff; margin:0 8px; font-size:12px;">ログアウト</a>
      </nav></div>
    </div>
    <div class="web-body">
      <div class="web-section-hdr">退会届</div>
      <p style="font-size:12px; margin-bottom:10px; color:#555;">退会理由により、該当するものをお選びください。</p>
      <table class="web-form-table">
        <tr>
          <td>退会理由（複数選択可） ※</td>
          <td>
            <label><input type="checkbox" checked> NGOの方が充実</label><br>
            <label><input type="checkbox"> 他施設加入</label><br>
            <label><input type="checkbox"> 閉院・廃止</label><br>
            <label><input type="checkbox" checked> 部署廃動</label><br>
            <label><input type="checkbox"> 人数不足</label><br>
            <label><input type="checkbox"> 魅力がない</label><br>
            <label><input type="checkbox"> 法規制の変更・廃院</label><br>
            <label><input type="checkbox"> その他</label>
          </td>
        </tr>
        <tr>
          <td>具体的な内容</td>
          <td><textarea style="width:100%; height:80px;" placeholder="具体的な退会理由をご記入ください"></textarea></td>
        </tr>
      </table>
      <div style="text-align:center; margin-top:12px;">
        <button class="web-btn">送　信</button>
      </div>
    </div>
  </div>`;

export default function ScrWebWithdraw(): JSX.Element {
  return (
    <div className="screen active" id="scr105">
      <ScreenTitleBar id="SCR-105" title="退会届ページ" subtitle="WEB会員マイページ ／ 会員" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
