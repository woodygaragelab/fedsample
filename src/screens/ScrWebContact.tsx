// SCR-104 お問い合わせページ
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="web-body">
      <div class="web-section-hdr">お問い合わせ</div>
      <p style="font-size:12px; margin-bottom:10px; color:#555;">主旨・お問合せ内容：</p>
      <table class="web-form-table">
        <tr><td>お問い合わせ内容 ※</td><td><textarea style="width:100%; height:100px;" placeholder="具体的なお問い合わせ内容を記載します"></textarea></td></tr>
        <tr><td>ご回答先（名前） ※</td><td><input type="text" style="width:200px;" value="山田 太郎"> &nbsp; 役職 <input type="text" style="width:100px;"></td></tr>
        <tr><td>ご回答先（メール） ※</td><td><input type="email" style="width:250px;" value="tameshi@aaa.com"></td></tr>
      </table>
      <div style="text-align:center; margin-top:12px;">
        <button class="web-btn">送　信</button>
      </div>
    </div>
  </div>`;

export default function ScrWebContact(): JSX.Element {
  return (
    <div className="screen active" id="scr104">

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
