// SCR-005 入会費検索画面
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div style="display:flex; justify-content:center;">
    <div class="admin-win" style="width:480px;">
      <div class="admin-titlebar">🔵 入会費 検索<span>✕</span></div>
      <div class="admin-content" style="padding:12px;">
        <div style="display:flex; gap:6px; margin-bottom:10px;">
          <label>検索ワード</label>
          <input type="text" style="width:200px;">
          <button class="btn btn-blue btn-sm">検　索</button>
        </div>
        <table class="list-tbl">
          <tr><th style="width:60px;">Id</th><th>タイトル</th></tr>
          <tr class="selected"><td>6</td><td>2021年度入会時年会費</td></tr>
          <tr><td>10</td><td>2021年度入会時年会費(1/3)</td></tr>
          <tr><td>3</td><td>2020年度 入会時年会費</td></tr>
          <tr><td>1</td><td>2019年度 入会時年会費</td></tr>
        </table>
      </div>
    </div>
  </div>`;

export default function ScrFeeSearch(): JSX.Element {
  return (
    <div className="screen active" id="scr005">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
