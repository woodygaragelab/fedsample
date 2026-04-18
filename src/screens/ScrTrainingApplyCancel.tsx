// SCR-310 申込取消画面
const html = `
<div class="ts-web-frame">
  <div class="ts-web-logo-bar">
    <div class="ts-web-logo">一般社団法人<br>日本リハビリテーション病院・施設協会</div>
  </div>
  <div class="ts-web-nav">
    <span class="ts-member-name">A1991 うめとまと医療法人 様</span>
    <div class="ts-nav-links">
      <a>Home</a><a>登録情報</a><a>お問い合わせ</a><a>ログアウト</a>
    </div>
  </div>
  <div class="ts-web-body">
    <div class="ts-btn-row" style="padding-bottom:8px;">
      <button class="ts-web-btn gray">← 戻る</button>
    </div>
    <div class="ts-alert" style="font-size:14px;font-weight:bold;padding:10px 14px;">
      ⚠ 申込取消<br>
      <span style="font-size:12px;font-weight:normal;">この研修会のお申し込みを取り戻します。<br>申込み期間内の場合、申込みが可能となります。</span>
    </div>
    <div class="ts-section-title">研修会情報</div>
    <div class="ts-field-row"><div class="ts-field-label">研修会名</div><div class="ts-field-value">テスト研修100</div></div>
    <div class="ts-field-row"><div class="ts-field-label">日程</div><div class="ts-field-value">2021年8月31日（火）13:00〜15:00</div></div>
    <div class="ts-field-row"><div class="ts-field-label">費用/人</div><div class="ts-field-value">7,700円</div></div>
    <div class="ts-section-gap"></div>
    <div class="ts-section-title">申込済みの参加者情報（合計: 1人）</div>
    <table class="ts-web-table">
      <thead>
        <tr><th>部署</th><th>役職</th><th>氏名</th><th>メールアドレス</th></tr>
      </thead>
      <tbody>
        <tr><td>リハビリテーション科</td><td>なし</td><td>星野 市三</td><td>hoshino@aaa.com</td></tr>
      </tbody>
    </table>
    <div class="ts-section-gap"></div>
    <div class="ts-section-title">領収書発行方法</div>
    <div class="ts-field-row">
      <div class="ts-field-label">発行方法</div>
      <div class="ts-field-value">一括発行（割分なし）</div>
    </div>
    <div class="ts-btn-row" style="padding-top:16px;">
      <button class="ts-web-btn red" style="font-weight:bold;">申込取消</button>
    </div>
    <div style="font-size:11px;color:#666;margin-top:6px;">
      ※ 取消後、Mtpl-0025（運用管理者宛）が自動送信されます。<br>
      ※ 個人会員・非会員は申込確定後は取消ボタンが表示されません。<br>
      ※ 2022/6/23 以降、マイページ管理者による申込確定後の取消機能は削除済みです。
    </div>
  </div>
</div>
`;

export default function ScrTrainingApplyCancel(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
