import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-201 新規申し込みページ（入会申込フォーム）
// 自動生成: 元モックアップHTMLをそのまま React で描画
const html = `<div class="public-page web-page" style="max-width:900px; margin:0 auto; border:1px solid #ddd;">
    <div class="public-header">
      🔵 一般社団法人 日本リハビリテーション病院・施設協会
    </div>
    <div class="public-body">
      <div class="web-section-hdr">新規申し込み</div>
      <div class="alert-box">📋 新規会員のお申込み及び下記の内容の入力をお願いいたします。<br>（会員種別・事業所・アドレスはプルダウンメニューよりお選びください）</div>
      <div class="pub-form-section">
        <div class="pub-section-title">会員区分・入会選択</div>
        <div class="pub-form-content">
          <div class="pub-row"><label>入会区分 ※</label><select style="width:200px;"><option>正会員</option><option>賛助会員</option><option>個人会員</option></select></div>
        </div>
      </div>
      <div class="pub-form-section">
        <div class="pub-section-title">法人・施設の基本情報</div>
        <div class="pub-form-content">
          <div class="pub-row"><label>法人名 ※</label><input type="text" value="医療法人サンプル会" style="width:280px;"></div>
          <div class="pub-row"><label>法人名フリガナ ※</label><input type="text" value="イショウホウジンサンプルカイ" style="width:280px;"></div>
          <div class="pub-row"><label>施設名 ※</label><input type="text" value="サンプルリハ病院" style="width:280px;"></div>
          <div class="pub-row"><label>施設名フリガナ ※</label><input type="text" value="サンプルリハビョウイン" style="width:280px;"></div>
          <div class="pub-row"><label>施設種別 ※</label><select style="width:200px;"><option selected>病院</option><option>クリニック</option><option>施設</option></select></div>
          <div class="pub-row"><label>郵便番号 ※</label><input type="text" value="1060051" style="width:80px;"> <button class="btn btn-gray btn-sm">住所検索</button></div>
          <div class="pub-row"><label>都道府県 ※</label><select style="width:100px;"><option selected>東京都</option></select></div>
          <div class="pub-row"><label>住所 ※</label><input type="text" value="東京都港区芝公園1-1" style="width:280px;"></div>
          <div class="pub-row"><label>TEL ※</label><input type="text" value="03-1111-1010" style="width:150px;"> 内線<input type="text" style="width:60px;"></div>
          <div class="pub-row"><label>FAX</label><input type="text" style="width:150px;"></div>
          <div class="pub-row"><label>法人代表者役職 ※</label><select style="width:100px;"><option>代表</option><option>理事長</option><option>院長</option></select></div>
          <div class="pub-row"><label>法人代表者名 ※</label><input type="text" value="志公園 太郎" style="width:200px;"> &nbsp;<input type="text" placeholder="フリガナ" value="シバコウエン タロウ" style="width:180px;"></div>
        </div>
      </div>
      <div class="pub-form-section">
        <div class="pub-section-title">連絡担当者</div>
        <div class="pub-form-content">
          <div class="pub-row"><label>担当者名 ※</label><input type="text" value="志公園 太郎" style="width:180px;"> &nbsp;<input type="text" placeholder="フリガナ" value="シバコウエン タロウ" style="width:180px;"></div>
          <div class="pub-row"><label>役職</label><select style="width:100px;"><option>代表</option></select></div>
          <div class="pub-row"><label>担当者メール ※</label><input type="email" value="shiba@example.com" style="width:250px;"></div>
          <div class="pub-row"><label>マイページ管理メール</label><input type="email" style="width:250px;" placeholder="未入力時は担当者メールを使用"></div>
        </div>
      </div>
      <div class="pub-form-section">
        <div class="pub-section-title">連絡担当者（予備）</div>
        <div class="pub-form-content">
          <div class="pub-row"><label>担当者名</label><input type="text" style="width:180px;"> &nbsp;<input type="text" placeholder="フリガナ" style="width:180px;"></div>
          <div class="pub-row"><label>メールアドレス</label><input type="email" style="width:250px;"></div>
        </div>
      </div>
      <div style="text-align:center; margin-top:16px;">
        <button class="web-btn">確　認</button>
      </div>
    </div>
  </div>`;

export default function ScrApplyForm(): JSX.Element {
  return (
    <div className="screen active" id="scr201">
      <ScreenTitleBar id="SCR-201" title="新規申し込みページ（入会申込フォーム）" subtitle="WEB公開 ／ 入会申込者（一般）" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
