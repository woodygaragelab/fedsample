// SCR-401 会費設定検索画面
const html = `
<div class="ts-admin-window">
  <div class="ts-title-bar">
    <span>年会費管理システム ｜ 会費設定検索</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-primary">コピー新規</button>
    <button class="ts-btn ts-btn-blue">新　規</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <div class="ts-form-grid" style="max-width:520px; margin-bottom:12px;">
      <span class="ts-label">検索ワード：</span>
      <div style="display:flex; gap:6px;">
        <input class="ts-input" style="width:300px;" placeholder="会費タイトル・HRPNo等">
        <button class="ts-btn ts-btn-blue">検　索</button>
      </div>
    </div>
    <table class="ts-list">
      <thead>
        <tr>
          <th style="width:44px;">選択</th>
          <th>会費タイトル</th>
          <th style="width:160px;">HRPNo</th>
          <th style="width:110px;">会費設定名</th>
          <th style="width:70px; text-align:right;">年度</th>
        </tr>
      </thead>
      <tbody>
        <tr class="ts-sel">
          <td style="text-align:center;">◎</td>
          <td>2024年度 正会員年会費</td>
          <td>HRP-2024-001</td>
          <td>年会費</td>
          <td style="text-align:right;">2024</td>
        </tr>
        <tr>
          <td style="text-align:center;">○</td>
          <td>2024年度 入会費</td>
          <td>HRP-2024-002</td>
          <td>入会費</td>
          <td style="text-align:right;">2024</td>
        </tr>
        <tr>
          <td style="text-align:center;">○</td>
          <td>2023年度 正会員年会費</td>
          <td>HRP-2023-001</td>
          <td>年会費</td>
          <td style="text-align:right;">2023</td>
        </tr>
        <tr>
          <td style="text-align:center;">○</td>
          <td>2023年度 賛助会員年会費</td>
          <td>HRP-2023-002</td>
          <td>年会費</td>
          <td style="text-align:right;">2023</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size:11px; color:#666; margin-top:6px;">
      ※ 行をダブルクリックすると会費設定画面(SCR-402)へ遷移します
    </div>
    <div style="background:#d4d0c8; border-top:1px solid #888; margin-top:12px; padding:2px 8px; font-size:11px; color:#444;">
      4 件表示 | 選択: 2024年度 正会員年会費
    </div>
  </div>
</div>
`;

export default function ScrAnnualFeeSearch(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
