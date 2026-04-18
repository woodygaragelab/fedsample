// SCR-102 ご対応リスト（ホーム）
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">

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

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
