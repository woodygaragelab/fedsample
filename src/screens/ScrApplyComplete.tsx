import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-203 申込完了ページ
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="public-header">🔵 一般社団法人 日本リハビリテーション病院・施設協会</div>
    <div class="public-body">
      <div class="web-section-hdr">新規申し込み</div>
      <div style="background:#fff; border:1px solid #ddd; padding:30px; text-align:center;">
        <div style="font-size:14px; font-weight:bold; color:var(--green-dark); margin-bottom:16px;">✅ 申し込みありがとうございます。</div>
        <div style="font-size:13px; margin-bottom:10px;">受付Noは <strong style="color:var(--blue-dark);">[546-167]</strong> です。</div>
        <div style="font-size:12px; color:#555; line-height:1.8;">
          <p>ご登録いただいたメールアドレス（複数のメールアドレスをご登録された場合はすべてのアドレス）宛に受け付けました旨のメールをお送りします。</p>
          <p>（メールは15分程度で届きます）</p>
          <p>メールが届かない場合は日本リハビリテーション病院施設協会へご連絡ください。</p>
          <p style="margin-top:12px; font-size:11px; color:#888;">TEL：03-5260-6146&emsp;Mail：member@rehakyoh.jp</p>
        </div>
      </div>
    </div>
  </div>`;

export default function ScrApplyComplete(): JSX.Element {
  return (
    <div className="screen active" id="scr203">
      <ScreenTitleBar id="SCR-203" title="申込完了ページ" subtitle="WEB公開 ／ 入会申込者（一般）" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
