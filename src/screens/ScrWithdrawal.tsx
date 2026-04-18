// SCR-008 ◆退会画面
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="admin-win" style="max-width:600px;">
    <div class="admin-titlebar">🔵 会員 担当者1<span>✕</span></div>
    <div class="admin-toolbar">
      <button class="btn btn-green btn-sm">保　存</button>
      <button class="btn btn-gray btn-sm">戻　る</button>
      <button class="btn btn-gray btn-sm">❓</button>
      <span style="font-size:11px; margin-left:10px;">Id 090 / 2245</span>
    </div>
    <div class="admin-content">
      <div style="font-size:12px; font-weight:bold; color:var(--blue-dark); margin-bottom:8px;">◆ 退会</div>
      <div class="info-grid two-col" style="font-size:11px;">
        <div class="lbl">内容</div><div class="val"><input type="text" style="width:95%;" value="退会手続き中"></div>
        <div class="lbl">対応状態</div><div class="val"><select style="width:100px;"><option>退会依頼</option><option selected>承認</option></select></div>
        <div class="lbl">期日</div><div class="val"><input type="text" style="width:90px;"></div>
        <div class="lbl">完了日</div><div class="val"><input type="text" style="width:90px;"></div>
        <div class="lbl">取消日</div><div class="val"><input type="text" style="width:90px;"></div>
        <div class="lbl">会員側備考</div><div class="val"><textarea style="width:95%; height:50px;">チェック項目：施設の方針変更。経費削減&#13;理由：施設の方針変更に伴い退会します。</textarea></div>
        <div class="lbl">Memo</div><div class="val"><textarea style="width:95%; height:40px;"></textarea></div>
        <div class="lbl">表示メッセージ</div><div class="val"><input type="text" style="width:95%;"></div>
        <div class="lbl">通知メール設定1</div><div class="val"><input type="text" style="width:80px;" value="Mtpl-0018"></div>
        <div class="lbl">通知メール設定2</div><div class="val"><input type="text" style="width:80px;"></div>
        <div class="lbl">処理フラグ</div><div class="val"><input type="checkbox" checked></div>
      </div>
      <div style="margin-top:8px;">
        <button class="btn btn-blue btn-sm">通知メール前送信</button>
      </div>
    </div>
  </div>`;

export default function ScrWithdrawal(): JSX.Element {
  return (
    <div className="screen active" id="scr008">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
