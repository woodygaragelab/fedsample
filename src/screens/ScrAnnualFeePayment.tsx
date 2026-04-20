// SCR-411 入金システム画面（年会費等）
const html = `
<div class="ts-admin-window">
  <div class="ts-title-bar">
    <span>年会費管理システム ｜ 入金システム（年会費）</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-blue">確　認</button>
    <button class="ts-btn ts-btn-green">更新（Mtpl-0019送信）</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">

      <!-- 左ペイン: 検索・CSV取込 + 処理No一覧 -->
      <div>
        <div class="ts-group">
          <div class="ts-group-title">🔍 検索・CSV取込</div>
          <div class="ts-form-grid2" style="max-width:340px;">
            <span class="ts-label">入金日 From：</span>
            <input class="ts-input" type="date" value="2024-01-01" style="width:140px;">
            <span class="ts-label">入金日 To：</span>
            <input class="ts-input" type="date" value="2024-01-31" style="width:140px;">
            <span class="ts-label">入金口座：</span>
            <select class="ts-select" style="width:200px;">
              <option>全口座</option>
              <option selected>三菱UFJ 普通 1234567</option>
              <option>ゆうちょ 普通 2345678</option>
            </select>
            <span class="ts-label">CSV取込：</span>
            <input type="file" style="font-size:11px;">
          </div>
        </div>

        <div class="ts-group" style="margin-top:10px;">
          <div class="ts-group-title">📋 処理No一覧</div>
          <table class="ts-list">
            <thead>
              <tr>
                <th>処理No</th>
                <th>取込日時</th>
                <th style="text-align:right; width:60px;">件数</th>
              </tr>
            </thead>
            <tbody>
              <tr class="ts-sel">
                <td>P-0042</td>
                <td>2024/01/15</td>
                <td style="text-align:right;">18</td>
              </tr>
              <tr>
                <td>P-0041</td>
                <td>2024/01/10</td>
                <td style="text-align:right;">12</td>
              </tr>
              <tr>
                <td>P-0040</td>
                <td>2024/01/05</td>
                <td style="text-align:right;">9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 右ペイン: 会員検索 + 対応内容一覧 -->
      <div>
        <div class="ts-group">
          <div class="ts-group-title">👤 会員検索</div>
          <div style="display:flex; gap:6px;">
            <input class="ts-input" style="width:200px;" placeholder="会員名・会員番号">
            <button class="ts-btn ts-btn-blue">検索</button>
          </div>
        </div>

        <div class="ts-group" style="margin-top:10px;">
          <div class="ts-group-title">📋 対応内容一覧</div>
          <table class="ts-list">
            <thead>
              <tr>
                <th style="width:80px;">会員番号</th>
                <th>会員名</th>
                <th style="text-align:right; width:90px;">入金額（円）</th>
                <th style="width:50px; text-align:center;">紐付</th>
              </tr>
            </thead>
            <tbody>
              <tr class="ts-sel">
                <td>M-0001</td>
                <td>山田 太郎</td>
                <td style="text-align:right;">10,000</td>
                <td style="text-align:center; color:green; font-weight:bold;">✓</td>
              </tr>
              <tr>
                <td>M-0002</td>
                <td>鈴木 花子</td>
                <td style="text-align:right;">10,000</td>
                <td style="text-align:center; color:green; font-weight:bold;">✓</td>
              </tr>
              <tr>
                <td>M-0007</td>
                <td>（未紐付）</td>
                <td style="text-align:right;">5,000</td>
                <td style="text-align:center; color:orange; font-weight:bold;">?</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:10px; display:flex; align-items:center; gap:8px;">
            <span style="font-size:12px; font-weight:bold; color:#0A246A;">処理額：</span>
            <span style="font-size:14px; font-weight:bold; color:#0A246A;">¥ 10,000</span>
          </div>
        </div>
      </div>

    </div>
    <div style="background:#d4d0c8; border-top:1px solid #888; margin-top:10px; padding:2px 8px; font-size:11px; color:#444;">
      処理No: P-0042 | 紐付済: 15件 | 未紐付: 3件
    </div>
  </div>
</div>
`;

export default function ScrAnnualFeePayment(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
