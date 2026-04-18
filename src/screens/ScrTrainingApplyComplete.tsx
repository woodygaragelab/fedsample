// SCR-309 申込完了画面
const html = `
<div class="ts-web-frame">
  <div class="ts-web-nav">
    <span class="ts-member-name">A2008 ためし法人 様</span>
  </div>
  <div class="ts-web-body">
    <div class="ts-btn-row" style="padding-bottom:8px;">
      <button class="ts-web-btn gray">← 戻る</button>
    </div>
    <div class="ts-success" style="font-size:15px;padding:12px 16px;">
      ✓ お申し込み完了しました。ありがとうございます。
    </div>
    <div class="ts-section-title">研修会情報</div>
    <div class="ts-field-row"><div class="ts-field-label">研修会名</div><div class="ts-field-value">地域リリリリB</div></div>
    <div class="ts-field-row"><div class="ts-field-label">日程</div><div class="ts-field-value">2021年8月26日（木）</div></div>
    <div class="ts-field-row"><div class="ts-field-label">費用/人</div><div class="ts-field-value">3,300円</div></div>
    <div style="font-size:12px;color:#555;margin-top:16px;padding:8px;background:#f5f5f5;border-radius:3px;">
      後日、研修会参加費のご請求に関するメールをお送りいたしますので、<br>
      お振込みの程よろしくお申し上げます。<br>
      （Mtpl-0024「申込確定通知」が参加希望者宛に自動送信されます）
    </div>
  </div>
</div>
`;

export default function ScrTrainingApplyComplete(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
