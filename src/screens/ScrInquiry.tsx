import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-007 ◆問合せ画面
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="admin-win" style="max-width:600px;">
    <div class="admin-titlebar">🔵 会員 担当者1<span>✕</span></div>
    <div class="admin-toolbar">
      <button class="btn btn-green btn-sm">保　存</button>
      <button class="btn btn-gray btn-sm">戻　る</button>
      <button class="btn btn-gray btn-sm">❓</button>
      <span style="font-size:11px; margin-left:10px;">Id 999 / 3394</span>
    </div>
    <div class="admin-content">
      <div style="font-size:12px; font-weight:bold; color:var(--blue-dark); margin-bottom:8px;">◆ 問合せ</div>
      <div class="info-grid two-col" style="font-size:11px;">
        <div class="lbl">問題Id</div><div class="val"><input type="text" style="width:60px;"></div>
        <div class="lbl">内容</div><div class="val"><input type="text" style="width:95%;" value="お問い合わせ：具体的なお問い合わせ内容を記載します"></div>
        <div class="lbl">対応状態</div><div class="val"><select style="width:100px;"><option>問合せ</option><option selected>回答済</option></select></div>
        <div class="lbl">期日</div><div class="val"><input type="text" style="width:90px;"></div>
        <div class="lbl">完了日</div><div class="val"><input type="text" style="width:90px;"></div>
        <div class="lbl">取消日</div><div class="val"><input type="text" style="width:90px;"></div>
        <div class="lbl">会員側備考</div><div class="val"><textarea style="width:95%; height:50px;">名前：山田　太郎&#13;Email: tameshi@aaa.com&#13;内容：具体的なお問い合わせ内容を記載します</textarea></div>
        <div class="lbl">Memo</div><div class="val"><textarea style="width:95%; height:40px;"></textarea></div>
        <div class="lbl">表示メッセージ</div><div class="val"><input type="text" style="width:95%;" value="ご回答までしばらくお待ちください。"></div>
        <div class="lbl">通知メール設定1</div><div class="val"><input type="text" style="width:80px;" value="Mtpl-0015"></div>
        <div class="lbl">通知メール設定2</div><div class="val"><input type="text" style="width:80px;" value="Mtpl-0016"></div>
        <div class="lbl">通知メール設定3</div><div class="val"><input type="text" style="width:80px;"></div>
        <div class="lbl">処理フラグ / 入会確認</div><div class="val"><input type="checkbox" checked> 処理 &nbsp; 積算分割: <input type="text" value="1" style="width:40px;"> &nbsp; 自動: <input type="text" value="0" style="width:40px;"></div>
      </div>
      <div style="margin-top:8px;">
        <button class="btn btn-blue btn-sm">通知メール前送信</button>
      </div>
    </div>
  </div>`;

export default function ScrInquiry(): JSX.Element {
  return (
    <div className="screen active" id="scr007">
      <ScreenTitleBar id="SCR-007" title="◆問合せ画面" subtitle="管理システム ／ 運用管理者" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
