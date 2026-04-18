// SCR-311 研修会入金システム画面
const html = `
<div class="ts-admin-window" style="max-width:1060px;">
  <div class="ts-title-bar">
    <span>入金 設定書1 - システム管理者</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <span class="ts-label">入金日時期：</span>
    <input class="ts-input" type="date" value="2021-07-19" style="width:130px;">
    <span class="ts-label">〜</span>
    <input class="ts-input" type="date" value="2021-07-19" style="width:130px;">
    <span class="ts-label" style="margin-left:10px;">入金口座：</span>
    <select class="ts-select" style="width:120px;">
      <option selected>みずほ銀行</option>
      <option>三菱UFJ銀行</option>
    </select>
    <button class="ts-btn ts-btn-blue" style="margin-left:6px;">更　新</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <div class="ts-two-panel">
      <div class="ts-panel-left">
        <button class="ts-btn ts-btn-blue" style="margin-bottom:6px;font-size:11px;">入金CSV取込</button>
        <table class="ts-list" style="font-size:11px;">
          <thead>
            <tr>
              <th>処理No</th>
              <th>振込口座名</th>
              <th>入金日</th>
              <th>入金額</th>
              <th>処理額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 A1901</td>
              <td>みずほ銀行</td>
              <td>2021/07/18</td>
              <td>¥11,000</td>
              <td>¥11,000</td>
            </tr>
            <tr>
              <td>2 A2008</td>
              <td>みずほ銀行</td>
              <td>2021/07/18</td>
              <td>¥80,000</td>
              <td>¥80,000</td>
            </tr>
            <tr class="ts-sel">
              <td>4 A2008</td>
              <td>みずほ銀行</td>
              <td>2021/07/18</td>
              <td>¥15,400</td>
              <td>¥0</td>
            </tr>
          </tbody>
        </table>
        <div class="ts-group" style="margin-top:10px;">
          <div class="ts-group-title">処理状況</div>
          <div class="ts-form-grid" style="font-size:11px;">
            <span class="ts-label">処理 No</span>
            <span>4</span>
            <span class="ts-label">入金日</span>
            <span>2021/07/18</span>
            <span class="ts-label">処理額</span>
            <input class="ts-input" value="¥15,400" style="width:100px;background:#e8f5e9;">
            <span class="ts-label">差額</span>
            <input class="ts-input" value="¥0" readonly style="width:80px;background:#e0e0e0;">
            <span class="ts-label">Memo</span>
            <input class="ts-input" value="">
          </div>
          <div style="margin-top:8px;text-align:right;">
            <button class="ts-btn ts-btn-primary" style="font-size:13px;">確　認</button>
          </div>
        </div>
      </div>
      <div class="ts-panel-right">
        <div class="ts-group">
          <div class="ts-group-title">会員検索</div>
          <div style="display:flex;gap:6px;">
            <input class="ts-input" value="A2008" style="width:120px;">
            <button class="ts-btn ts-btn-blue">検　索</button>
          </div>
          <div style="margin-top:8px;padding:6px;background:#f0f8e8;border:1px solid #ccc;border-radius:2px;font-size:11px;">
            <div><b>A2008 正会員 ためし法人</b></div>
            <div>ためし施設 試し 太郎</div>
          </div>
        </div>
        <div class="ts-group" style="margin-top:8px;">
          <div class="ts-group-title">対応内容一覧</div>
          <table class="ts-list" style="font-size:11px;">
            <thead>
              <tr>
                <th>内容</th>
                <th>完了日</th>
                <th>金額</th>
                <th>処理状態</th>
              </tr>
            </thead>
            <tbody>
              <tr class="ts-sel">
                <td>研修会[テスト研修100]（正会員）</td>
                <td>2021/07/14</td>
                <td>¥15,400</td>
                <td>請求書</td>
              </tr>
              <tr>
                <td>正会員2021年度入会時年会費</td>
                <td>2021/07/14</td>
                <td>¥10,000</td>
                <td>入金済</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default function ScrTrainingPayment(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
