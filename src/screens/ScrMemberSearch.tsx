// SCR-002 会員検索画面
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="admin-win">
    <div class="admin-titlebar">🔵 会員検索 システム管理者<span>✕</span></div>
    <div class="admin-toolbar">
      <button class="btn btn-blue btn-sm">新　規</button>
      <button class="btn btn-gray btn-sm">戻　る</button>
      <button class="btn btn-gray btn-sm">❓</button>
    </div>
    <div class="admin-content">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px; flex-wrap:wrap;">
        <label>検索ワード</label>
        <input type="text" style="width:200px;" placeholder="">
        <button class="btn btn-red btn-sm">検　索</button>
        <label><input type="checkbox" checked> 退会除く</label>
        <select style="width:90px;"><option>30件表示</option><option>50件表示</option><option>100件表示</option></select>
        <span style="font-size:11px; color:#555;">（ 1–30 / 647 ）</span>
        <button class="btn btn-gray btn-sm">«</button>
        <button class="btn btn-gray btn-sm">»</button>
        <button class="btn btn-blue btn-sm">CSV出力</button>
      </div>
      <table class="list-tbl">
        <tr><th>ID</th><th>会員No</th><th>会員区分</th><th>法人名等</th><th>施設名</th><th>入会日</th><th>都道府県</th></tr>
        <tr class="selected"><td>689</td><td></td><td>正会員</td><td>医療法人サンプル会</td><td>サンプルリハ病院</td><td>2021/07/14</td><td>東京都</td></tr>
        <tr><td>688</td><td></td><td>正会員</td><td>医療法人テストA</td><td>テストAリハビリ病院</td><td>2021/07/13</td><td>東京都</td></tr>
        <tr><td>685</td><td></td><td>正会員</td><td>あいうえお法人</td><td>あいうえおリハ病院</td><td>2021/07/08</td><td>東京都</td></tr>
        <tr><td>684</td><td></td><td>正会員</td><td>てすと法人</td><td>てすとリハ病院</td><td>2021/07/08</td><td>東京都</td></tr>
        <tr><td>681</td><td>B1995</td><td>個人会員</td><td>（テスト）志賀親</td><td></td><td>2021/07/06</td><td></td></tr>
        <tr><td>680</td><td>C1994</td><td>賛助会員</td><td>（テスト）株式会社 社会保険情報...</td><td></td><td>2021/07/06</td><td></td></tr>
        <tr><td>679</td><td>A1993</td><td>正会員</td><td>（テスト）医療法人 水野会</td><td>（テスト）水野出版制作即印刷業病院</td><td>2021/07/06</td><td></td></tr>
        <tr><td>677</td><td>B2004</td><td>個人会員</td><td>豊田 哲平</td><td></td><td>2021/06/29</td><td>茨城県</td></tr>
        <tr><td>676</td><td>B2003</td><td>個人会員</td><td>井会　木下三郎</td><td></td><td>2021/06/29</td><td>東京都</td></tr>
        <tr><td>675</td><td>B2002</td><td>個人会員</td><td>山田 三郎</td><td></td><td>2021/03/25</td><td>東京都</td></tr>
      </table>
    </div>
    <div class="admin-statusbar"><span>会員検索</span><span>NumLock 📊 ▣ ▣ ▣</span></div>
  </div>`;

export default function ScrMemberSearch(): JSX.Element {
  return (
    <div className="screen active" id="scr002">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
