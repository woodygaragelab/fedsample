// SCR-305 研修会申込画面（仮申込）
const html = `
<div class="ts-web-frame">
  <div class="ts-web-nav">
    <span class="ts-member-name">A2008 ためし法人 様</span>
  </div>
  <div class="ts-web-body">
    <div class="ts-info">
      ご申込のご注意をご確認ください。<br>
      ※複数人のお申し込みをされる場合は、一人ずつ「仮申込」ボタンを押して登録を行ってください。<br>
      ※仮申込後は、「マイページ管理者」が「申込確定」を実施してください。
    </div>
    <div class="ts-section-title">研修会情報</div>
    <div class="ts-field-row"><div class="ts-field-label">研修会名</div><div class="ts-field-value">（テスト）テスト研修100</div></div>
    <div class="ts-field-row"><div class="ts-field-label">日程</div><div class="ts-field-value">2021年8月31日（火）13:00〜15:00</div></div>
    <div class="ts-field-row"><div class="ts-field-label">費用/人</div><div class="ts-field-value">7,700円</div></div>
    <div class="ts-section-gap"></div>
    <div class="ts-section-title">申込者情報入力</div>
    <div style="padding:12px 0;">
      <div class="ts-form-grid2">
        <span style="font-size:12px;font-weight:bold;color:#333;">部署</span>
        <input class="ts-web-input" placeholder="部署名を入力">
        <span style="font-size:12px;font-weight:bold;color:#333;">役職</span>
        <input class="ts-web-input" placeholder="役職を入力">
        <span style="font-size:12px;font-weight:bold;color:#333;">氏名 <span style="color:red;">*</span></span>
        <input class="ts-web-input" placeholder="氏名を入力">
        <span style="font-size:12px;font-weight:bold;color:#333;">メールアドレス <span style="color:red;">*</span></span>
        <input class="ts-web-input" type="email" placeholder="例：sample@example.com">
      </div>
    </div>
    <div class="ts-btn-row">
      <button class="ts-web-btn green">仮申込</button>
      <button class="ts-web-btn gray">続いて申込</button>
      <button class="ts-web-btn gray">ログアウト</button>
    </div>
    <div style="font-size:11px;color:#666;margin-top:8px;">
      ※「仮申込」後、Mtpl-0022（参加希望者宛）と Mtpl-0023（管理者宛）が自動送信されます。
    </div>
  </div>
</div>
`;

export default function ScrTrainingApplyPre(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
