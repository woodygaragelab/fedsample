// SCR-301 研修会設定検索画面
const html = `
<div class="ts-admin-window">
  <div class="ts-title-bar">
    <span>研修会設定 検索画面 - システム管理者</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-primary">コピー新規</button>
    <button class="ts-btn ts-btn-blue">新　規</button>
    <button class="ts-btn">戻　る</button>
    <span style="margin-left:auto;font-size:11px;color:#555;">件数: 5件</span>
  </div>
  <div class="ts-body">
    <div class="ts-form-grid" style="max-width:480px;">
      <span class="ts-label">検索ワード</span>
      <div style="display:flex;gap:6px;">
        <input class="ts-input" value="テスト研修" style="width:280px;">
        <button class="ts-btn ts-btn-blue">検　索</button>
      </div>
    </div>
    <table class="ts-list">
      <thead>
        <tr>
          <th style="width:50px;">No</th>
          <th>研修名</th>
          <th style="width:220px;">最終日程</th>
        </tr>
      </thead>
      <tbody>
        <tr class="ts-sel">
          <td>13</td>
          <td>（テスト）テスト研修100</td>
          <td>2021年8月31日（火）13:00〜15:00</td>
        </tr>
        <tr>
          <td>14</td>
          <td>（テスト）社会管理概論 Vol002</td>
          <td>2021年8月20日（金）</td>
        </tr>
        <tr>
          <td>15</td>
          <td>（テスト）地域リリリリシステムにおけるリリリリ概論</td>
          <td>2021年8月26日（木）</td>
        </tr>
        <tr>
          <td>16</td>
          <td>（テスト）地域リリリリ概論Vol101</td>
          <td>2021年8月26日（木）（※ライブ配信）</td>
        </tr>
        <tr>
          <td>17</td>
          <td>（テスト）教育・セミナーにおけるリリリリ等々</td>
          <td>2021年9月23日（木）</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size:11px;color:#666;margin-top:6px;">※ 行をダブルクリックすると研修会設定画面(SCR-302)へ遷移します</div>
  </div>
</div>
`;

export default function ScrTrainingSearch(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
