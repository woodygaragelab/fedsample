// SCR-001 TopMenu（トップメニュー）
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div style="display:flex; justify-content:center;">
    <div class="admin-win" style="width:360px;">
      <div class="admin-titlebar">
        <span>🔵 TopMenu 担当者1</span>
        <span>✕</span>
      </div>
      <div class="admin-toolbar" style="gap:8px;">
        <button class="btn btn-orange btn-sm">パスワード変更</button>
        <button class="btn btn-gray btn-sm">戻　る</button>
        <button class="btn btn-gray btn-sm">❓</button>
      </div>
      <div class="admin-content" style="padding:20px 30px;">
        <div class="field-row">
          <label style="min-width:80px;">処理名</label>
          <select style="width:200px;">
            <option>（選択してください）</option>
            <option selected>会員</option>
            <option>会費設定</option>
            <option>研修会設定</option>
            <option>入金</option>
            <option>一括メール作成</option>
            <option>送信メール</option>
            <option>通知メール設定</option>
            <option>ユーザー</option>
            <option>請求書パターン</option>
            <option>運用設定</option>
          </select>
        </div>
      </div>
    </div>
  </div>`;

export default function ScrTopMenu(): JSX.Element {
  return (
    <div className="screen active" id="scr001">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
