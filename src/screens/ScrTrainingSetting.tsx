// SCR-302 研修会設定画面
const html = `
<div class="ts-admin-window" style="max-width:960px;">
  <div class="ts-title-bar">
    <span>研修会設定 - システム管理者</span>
    <div class="ts-win-btns">
      <div class="ts-win-btn">_</div><div class="ts-win-btn">□</div><div class="ts-win-btn">×</div>
    </div>
  </div>
  <div class="ts-toolbar">
    <button class="ts-btn ts-btn-primary">通知・請求処理</button>
    <button class="ts-btn ts-btn-blue">申込者一覧</button>
    <button class="ts-btn">研修会費設定</button>
    <button class="ts-btn">保　存</button>
    <button class="ts-btn">戻　る</button>
  </div>
  <div class="ts-body">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="ts-group">
        <div class="ts-group-title">基本情報</div>
        <div class="ts-form-grid">
          <span class="ts-label">Id</span>
          <input class="ts-input" value="13" readonly style="background:#e0e0e0;width:60px;">
          <span class="ts-label">研修会名 <span style="color:red;">*</span></span>
          <input class="ts-input" value="（テスト）テスト研修100">
          <span class="ts-label">講師名</span>
          <input class="ts-input" value="佐藤 健太 先生">
          <span class="ts-label">研修会日時 From <span style="color:red;">*</span></span>
          <input class="ts-input" type="date" value="2021-07-12">
          <span class="ts-label">研修会日時 To <span style="color:red;">*</span></span>
          <input class="ts-input" type="date" value="2021-08-31">
          <span class="ts-label">表示用日程</span>
          <input class="ts-input" value="2021年8月31日（火）13:00〜15:00">
        </div>
      </div>
      <div class="ts-group">
        <div class="ts-group-title">申込・定員情報</div>
        <div class="ts-form-grid">
          <span class="ts-label">申込期間 From</span>
          <input class="ts-input" type="date" value="2021-07-12">
          <span class="ts-label">申込期間 To</span>
          <input class="ts-input" type="date" value="2021-08-20">
          <span class="ts-label">定員数</span>
          <input class="ts-input" value="50" style="width:80px;" type="number">
          <span class="ts-label">残定員数</span>
          <input class="ts-input" value="10" style="width:80px;" type="number">
          <span class="ts-label">表示定員数</span>
          <input class="ts-input" value="定員50名">
          <span class="ts-label">定員管理無</span>
          <div><input type="checkbox" style="margin-right:4px;"><span class="ts-label">チェックで定員管理を無効にする</span></div>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px;">
      <div class="ts-group">
        <div class="ts-group-title">URL・支払設定</div>
        <div class="ts-form-grid">
          <span class="ts-label">チラシURL</span>
          <input class="ts-input" value="https://www.example.jp/wp/public/upload/">
          <span class="ts-label">支払サイト</span>
          <select class="ts-select" style="width:100%;">
            <option>10口座締め</option>
            <option selected>30日後締め</option>
          </select>
        </div>
      </div>
      <div class="ts-group">
        <div class="ts-group-title">請求書設定</div>
        <div class="ts-form-grid">
          <span class="ts-label">対応No</span>
          <input class="ts-input" value="3" readonly style="background:#e0e0e0;width:60px;">
          <span class="ts-label">請求書パターン</span>
          <select class="ts-select" style="width:100%;">
            <option selected>研修会費標準パターン</option>
            <option>TMP-02</option>
          </select>
          <span class="ts-label">請求書出力FLD</span>
          <input class="ts-input" value="2021008_01">
        </div>
      </div>
    </div>
    <div style="margin-top:8px;font-size:11px;color:#888;display:flex;gap:16px;">
      <span>作成日時: 2021/07/12 09:15:22</span>
      <span>作成者: 運用管理者</span>
      <span>最終更新日時: 2021/07/21 13:12:42</span>
      <span>最終更新者: システム管理者</span>
    </div>
  </div>
</div>
`;

export default function ScrTrainingSetting(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
