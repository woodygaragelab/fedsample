// SCR-307 研修会申込確認画面
const html = `
<div class="ts-web-frame">
  <div class="ts-web-logo-bar">
    <div class="ts-web-logo">一般社団法人<br>日本リハビリテーション病院・施設協会</div>
  </div>
  <div class="ts-web-nav">
    <span class="ts-member-name">A2008 ためし法人 様</span>
    <div class="ts-nav-links">
      <a>Home</a><a>登録情報</a><a>お問い合わせ</a><a>ログアウト</a>
    </div>
  </div>
  <div class="ts-web-body">
    <div class="ts-btn-row" style="padding-bottom:8px;">
      <button class="ts-web-btn gray">← 戻る</button>
    </div>
    <div class="ts-section-title">研修会情報</div>
    <div class="ts-field-row"><div class="ts-field-label">研修会名</div><div class="ts-field-value">（テスト）テスト研修100</div></div>
    <div class="ts-field-row"><div class="ts-field-label">日程</div><div class="ts-field-value">2021年8月31日（火）13:00〜15:00</div></div>
    <div class="ts-field-row"><div class="ts-field-label">費用/人</div><div class="ts-field-value">7,700円</div></div>
    <div class="ts-section-gap"></div>
    <div class="ts-section-title">参加申請者情報（申込数: 2人）</div>
    <table class="ts-web-table">
      <thead>
        <tr><th>所属</th><th>役職</th><th>氏名</th><th>メールアドレス</th></tr>
      </thead>
      <tbody>
        <tr><td>リハビリテーション科</td><td>なし</td><td>山田 幸一</td><td>aeo@aaa.com</td></tr>
        <tr><td>リハビリテーション科</td><td>医師</td><td>山田 一</td><td>odmeds@aaa.com</td></tr>
      </tbody>
    </table>
    <div class="ts-section-gap"></div>
    <div class="ts-section-title">領収書発行方法</div>
    <div class="ts-field-row">
      <div class="ts-field-label">発行方法</div>
      <div class="ts-field-value">一括発行（割分なし）</div>
    </div>
    <div class="ts-btn-row" style="padding-top:16px;">
      <button class="ts-web-btn green">研修会申込確認</button>
    </div>
  </div>
</div>
`;

export default function ScrTrainingApplyConfirm(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
