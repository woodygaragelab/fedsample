// SCR-402 会費設定画面
const html = `
<div class="ts-admin-window">
  <div class="ts-title-bar">
    <span>年会費管理システム ｜ 会費設定</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-purple">請求処理</button>
    <button class="ts-btn ts-btn-blue">年会費設定</button>
    <button class="ts-btn ts-btn-green">保　存</button>
    <button class="ts-btn">戻　る</button>
    <button class="ts-btn">詳細一覧</button>
  </div>
  <div class="ts-body">
    <div class="ts-form-grid2" style="max-width:560px;">
      <span class="ts-label">Id：</span>
      <span style="font-size:12px; color:#555;">1001</span>

      <span class="ts-label">会費タイトル ※：</span>
      <input class="ts-input" value="2024年度 正会員年会費" style="width:340px;">

      <span class="ts-label">会費設定名 ※：</span>
      <select class="ts-select" style="width:160px;">
        <option selected>年会費</option>
        <option>入会費</option>
      </select>

      <span class="ts-label">年度 ※：</span>
      <input class="ts-input" type="number" value="2024" style="width:80px;">

      <span class="ts-label">支払いサイト：</span>
      <input class="ts-input" value="翌月末" style="width:120px;">

      <span class="ts-label">HRPNo：</span>
      <input class="ts-input" value="HRP-2024-001" style="width:160px;">

      <span class="ts-label">請求書パターン：</span>
      <select class="ts-select" style="width:160px;">
        <option selected>標準パターン</option>
        <option>簡易パターン</option>
      </select>

      <span class="ts-label">請求書出力FLD：</span>
      <input class="ts-input" value="C:\\output\\invoices\\2024\\" style="width:340px;">
    </div>
    <div style="background:#d4d0c8; border-top:1px solid #888; margin-top:12px; padding:2px 8px; font-size:11px; color:#444;">
      編集中 | 最終更新: 2024/01/15 09:30
    </div>
  </div>
</div>
`;

export default function ScrAnnualFeeSetting(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
