// SCR-006 入金システム画面
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="admin-win">
    <div class="admin-titlebar">🔵 入金 担当者1<span>✕</span></div>
    <div class="admin-toolbar">
      <button class="btn btn-blue btn-sm">更　新</button>
      <button class="btn btn-gray btn-sm">戻　る</button>
      <button class="btn btn-gray btn-sm">❓</button>
      <span style="font-size:11px; margin-left:8px;">入金日範囲：</span>
      <input type="text" value="2021/07/14" style="width:90px;">〜<input type="text" value="2021/07/14" style="width:90px;">
      <button class="btn btn-blue btn-sm">入金処理CSV</button>
    </div>
    <div class="admin-content">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <!-- 左：入金一覧 -->
        <div>
          <div class="section-hdr">入金口座: <select style="width:100px; font-size:11px;"><option>みずほ銀行</option></select> <button class="btn btn-blue btn-sm">CSV取込</button></div>
          <table class="list-tbl" style="font-size:11px;">
            <tr><th>処理No</th><th>日付</th><th>取引内容</th><th>入金額</th></tr>
            <tr><td>1</td><td>2021/02/18</td><td>J ITOH & CO LTDE(EN)</td><td>¥45,000</td></tr>
            <tr><td>2</td><td>2021/02/18</td><td>NAKAGAWABS1(EN)</td><td>¥45,000</td></tr>
            <tr><td>3</td><td>2021/02/18</td><td>○○○○社</td><td>¥45,000</td></tr>
            <tr><td>4</td><td>2021/02/18</td><td>K A2001</td><td>¥60,000</td></tr>
            <tr class="selected"><td>5</td><td>2021/07/14</td><td>A A2FH</td><td>¥60,000</td></tr>
            <tr><td>6</td><td></td><td></td><td></td></tr>
          </table>
          <div style="font-size:11px; padding:4px; background:#f5f5f5; display:flex; gap:12px;">
            <span>件数: 5</span><span>処理数: 1</span><span>金額: ¥60,000</span><span>差額: ¥0</span>
          </div>
        </div>
        <!-- 右：照合 -->
        <div>
          <div class="section-hdr">会員照合</div>
          <div style="display:flex; gap:4px; margin-bottom:6px; font-size:11px;">
            <input type="text" placeholder="会員No" value="A2008" style="width:80px;">
            <button class="btn btn-blue btn-sm">検索</button>
          </div>
          <table class="list-tbl" style="font-size:11px; margin-bottom:6px;">
            <tr><th>会員No</th><th>法人名</th><th>施設名</th><th>登録者名</th></tr>
            <tr class="selected"><td>A2008</td><td>ためし法人</td><td>ためし病院</td><td>試し 太郎</td></tr>
          </table>
          <table class="list-tbl" style="font-size:11px; margin-bottom:6px;">
            <tr><th>内容</th><th>完了日</th><th>金額</th><th>処理状態</th></tr>
            <tr class="selected"><td>正会員2021年度入会時年会費</td><td></td><td>¥60,000</td><td>請求中</td></tr>
          </table>
          <div style="font-size:11px; background:#f0f0f0; padding:6px; display:flex; gap:12px; align-items:center;">
            <span>入金額 ¥60,000</span><span>処理額 ¥60,000</span><span>差額 ¥0</span>
            <button class="btn btn-red btn-sm">確　認</button>
          </div>
          <input type="text" placeholder="Memo" style="width:100%; margin-top:4px;">
        </div>
      </div>
    </div>
  </div>`;

export default function ScrPayment(): JSX.Element {
  return (
    <div className="screen active" id="scr006">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
