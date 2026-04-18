// SCR-105 退会届ページ
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
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

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
