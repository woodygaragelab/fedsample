// SCR-304 費用一括設定詳細一覧画面
const html = `
<div class="ts-admin-window" style="max-width:980px;">
  <div class="ts-title-bar">
    <span>費用一括設定詳細一覧 - テスト研修100</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-primary">研修会通知設定</button>
    <button class="ts-btn ts-btn-blue">会員一覧</button>
    <button class="ts-btn">通知準備</button>
    <button class="ts-btn ts-btn-green">通知処理</button>
    <button class="ts-btn ts-btn-purple">研修会費請求</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <div class="ts-form-grid" style="max-width:640px;">
      <span class="ts-label">検索ワード</span>
      <div style="display:flex;gap:6px;align-items:center;">
        <input class="ts-input" style="width:200px;" placeholder="会員名など">
        <span class="ts-label">状態</span>
        <select class="ts-select" style="width:120px;">
          <option>全通知</option>
          <option>未通知</option>
          <option selected>申込済</option>
          <option>請求書</option>
        </select>
        <button class="ts-btn ts-btn-blue">検　索</button>
      </div>
      <span class="ts-label">申込着手日</span>
      <input class="ts-input" type="date" value="2021-07-22" style="width:160px;">
    </div>
    <table class="ts-list">
      <thead>
        <tr>
          <th style="width:30px;"><input type="checkbox" title="全選択"></th>
          <th>会員No</th>
          <th>法人名</th>
          <th>申込日</th>
          <th>状態</th>
          <th>通知日</th>
          <th>研修会名</th>
          <th>人数</th>
        </tr>
      </thead>
      <tbody>
        <tr class="ts-sel">
          <td><input type="checkbox" checked></td>
          <td>A2008</td>
          <td>ためし法人</td>
          <td>2021/07/15</td>
          <td><span class="ts-badge ts-badge-orange">申込済</span></td>
          <td></td>
          <td>テスト研修100（正会員）</td>
          <td>2</td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>A1991</td>
          <td>うめとまとXX法人</td>
          <td>2021/07/08</td>
          <td><span class="ts-badge ts-badge-blue">通知済</span></td>
          <td>2021/07/01</td>
          <td>テスト研修100（正会員）</td>
          <td>1</td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>A2050</td>
          <td>仮会員施設</td>
          <td>2021/07/20</td>
          <td><span class="ts-badge ts-badge-gray">未通知</span></td>
          <td></td>
          <td>テスト研修100（正会員）</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size:11px;color:#666;margin-top:6px;">合計: 3件 | 申込済: 1件 | 通知済: 1件 | 未通知: 1件</div>
  </div>
</div>
`;

export default function ScrTrainingFeeDetail(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
