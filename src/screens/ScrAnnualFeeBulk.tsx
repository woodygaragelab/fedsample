// SCR-404 費用一括設定詳細一覧（年会費等）
const html = `
<div class="ts-admin-window">
  <div class="ts-title-bar">
    <span>年会費管理システム ｜ 費用一括設定詳細一覧（年会費等）</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-blue">全選択</button>
    <button class="ts-btn ts-btn-primary">年会費請求</button>
    <button class="ts-btn ts-btn-purple">年会費請求書発行</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <!-- 検索エリア -->
    <div class="ts-group" style="margin-bottom:10px;">
      <div class="ts-group-title">検索条件</div>
      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; margin-bottom:6px;">
        <span class="ts-label" style="width:auto;">検索ワード：</span>
        <input class="ts-input" style="width:200px;" placeholder="会員名・会員番号等">
        <span class="ts-label" style="width:auto;">状態：</span>
        <select class="ts-select" style="width:110px;">
          <option>全て</option>
          <option>未請求</option>
          <option>請求済</option>
          <option>入金確認済</option>
        </select>
        <button class="ts-btn ts-btn-blue">検　索</button>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="ts-label" style="width:auto;">支払期日：</span>
        <input class="ts-input" type="date" value="2024-03-31" style="width:140px;">
        <span style="font-size:11px; color:#666;">※年会費請求書発行時に適用</span>
      </div>
    </div>

    <!-- 全選択 -->
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
      <input type="checkbox" id="selectAll">
      <label for="selectAll" style="font-weight:bold; font-size:12px;">全選択</label>
      <span style="font-size:11px; color:#666;">対象: 25件</span>
    </div>

    <table class="ts-list">
      <thead>
        <tr>
          <th style="width:40px;">選択</th>
          <th style="width:90px;">会員番号</th>
          <th>会員名</th>
          <th style="width:90px;">会員区分</th>
          <th style="width:90px; text-align:right;">費用（円）</th>
          <th style="width:90px;">状態</th>
          <th style="width:100px;">支払期日</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:center;"><input type="checkbox" checked></td>
          <td>M-0001</td>
          <td>山田 太郎</td>
          <td>正会員</td>
          <td style="text-align:right;">10,000</td>
          <td>未請求</td>
          <td></td>
        </tr>
        <tr>
          <td style="text-align:center;"><input type="checkbox" checked></td>
          <td>M-0002</td>
          <td>鈴木 花子</td>
          <td>正会員</td>
          <td style="text-align:right;">10,000</td>
          <td>未請求</td>
          <td></td>
        </tr>
        <tr>
          <td style="text-align:center;"><input type="checkbox"></td>
          <td>M-0003</td>
          <td>田中 一郎</td>
          <td>賛助会員</td>
          <td style="text-align:right;">30,000</td>
          <td>請求済</td>
          <td>2024/03/31</td>
        </tr>
        <tr>
          <td style="text-align:center;"><input type="checkbox"></td>
          <td>M-0004</td>
          <td>佐藤 次郎</td>
          <td>個人会員</td>
          <td style="text-align:right;">6,000</td>
          <td>入金確認済</td>
          <td>2024/03/31</td>
        </tr>
      </tbody>
    </table>
    <div style="background:#d4d0c8; border-top:1px solid #888; margin-top:10px; padding:2px 8px; font-size:11px; color:#444;">
      25 件表示 | 2件選択 | Mtpl-0005 自動送信: 有効
    </div>
  </div>
</div>
`;

export default function ScrAnnualFeeBulk(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
