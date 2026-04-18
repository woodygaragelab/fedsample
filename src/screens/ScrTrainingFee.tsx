// SCR-303 研修会費設定画面（サブウィンドウ）
const html = `
<div style="background:#888;padding:40px;border-radius:4px;max-width:600px;margin:0 auto;">
  <div style="font-size:12px;color:#ccc;margin-bottom:12px;">※ 研修会設定画面(SCR-302)の上に重なって表示されるサブウィンドウ</div>
  <div class="ts-sub-window">
    <div class="ts-title-bar">
      <span>研修会費設定</span>
      <div class="ts-win-btns"><div class="ts-win-btn">×</div></div>
    </div>
    <div class="ts-toolbar">
      <button class="ts-btn">保　存</button>
      <button class="ts-btn">戻　る</button>
    </div>
    <div class="ts-body">
      <div class="ts-form-grid">
        <span class="ts-label">Id</span>
        <input class="ts-input" value="1" readonly style="background:#e0e0e0;width:60px;">
        <span class="ts-label">研修会名</span>
        <input class="ts-input" value="（テスト）テスト研修100" readonly style="background:#e0e0e0;">
        <span class="ts-label">会員区分 <span style="color:red;">*</span></span>
        <select class="ts-select" style="width:200px;">
          <option selected>正会員</option>
          <option>賛助会員</option>
          <option>個人会員</option>
          <option>非会員</option>
        </select>
        <span class="ts-label">表示タイトル</span>
        <input class="ts-input" value="正会員 参加費">
        <span class="ts-label">1名あたり参加費 <span style="color:red;">*</span></span>
        <input class="ts-input" value="7,000" style="width:120px;">
        <span class="ts-label">税率 <span style="color:red;">*</span></span>
        <input class="ts-input" value="10" type="number" style="width:80px;">
        <span class="ts-label">消費費用</span>
        <input class="ts-input" value="636" readonly style="background:#e0e0e0;width:100px;">
      </div>
    </div>
  </div>
</div>
`;

export default function ScrTrainingFee(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
