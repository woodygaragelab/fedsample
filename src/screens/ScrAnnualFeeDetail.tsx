// SCR-403 会費（詳細）設定画面
const html = `
<div class="ts-admin-window">
  <div class="ts-title-bar">
    <span>年会費管理システム ｜ 会費（詳細）設定</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-green">保　存</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <!-- サブウィンドウ（入力フォーム） -->
      <div style="background:#fff; border:2px solid #888; border-radius:4px; padding:0; min-width:320px; box-shadow:4px 4px 12px rgba(0,0,0,.2);">
        <div style="background:#5b9bd5; color:#fff; padding:5px 10px; font-weight:bold; font-size:12px; display:flex; justify-content:space-between;">
          <span>会費（詳細）設定</span>
          <span style="cursor:pointer;">✕</span>
        </div>
        <div style="padding:16px;">
          <div class="ts-form-grid2" style="max-width:380px;">
            <span class="ts-label">Id：</span>
            <span style="font-size:12px; color:#555;">（自動採番）</span>

            <span class="ts-label">会費タイトル：</span>
            <span style="font-size:12px; color:#555;">2024年度 正会員年会費</span>

            <span class="ts-label">会員区分 ※：</span>
            <select class="ts-select" style="width:140px;">
              <option selected>正会員</option>
              <option>個人会員</option>
              <option>賛助会員</option>
              <option>特別会員</option>
            </select>

            <span class="ts-label">費用 ※：</span>
            <div style="display:flex; align-items:center; gap:4px;">
              <input class="ts-input" type="number" value="10000" style="width:100px;">
              <span style="font-size:12px;">円</span>
            </div>

            <span class="ts-label">表示タイトル：</span>
            <input class="ts-input" value="2024年度年会費（正会員）" style="width:240px;">
          </div>
          <div style="display:flex; gap:8px; justify-content:center; margin-top:12px;">
            <button class="ts-btn ts-btn-green">保　存</button>
            <button class="ts-btn">戻　る</button>
          </div>
        </div>
      </div>

      <!-- 一覧テーブル -->
      <div style="flex:1; min-width:360px;">
        <div class="ts-group-title" style="margin-bottom:6px;">会費詳細一覧</div>
        <table class="ts-list">
          <thead>
            <tr>
              <th>会員区分</th>
              <th style="text-align:right; width:100px;">費用（円）</th>
              <th>表示タイトル</th>
            </tr>
          </thead>
          <tbody>
            <tr class="ts-sel">
              <td>正会員</td>
              <td style="text-align:right;">10,000</td>
              <td>2024年度年会費（正会員）</td>
            </tr>
            <tr>
              <td>個人会員</td>
              <td style="text-align:right;">6,000</td>
              <td>2024年度年会費（個人）</td>
            </tr>
            <tr>
              <td>賛助会員</td>
              <td style="text-align:right;">30,000</td>
              <td>2024年度年会費（賛助）</td>
            </tr>
            <tr>
              <td>特別会員</td>
              <td style="text-align:right;">0</td>
              <td>2024年度年会費（特別）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`;

export default function ScrAnnualFeeDetail(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
