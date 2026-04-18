// SCR-306 WEBマイページ ご対応リスト画面
const html = `
<div class="ts-web-frame">
  <div class="ts-web-nav">
    <span class="ts-member-name">A2008 ためし法人 様</span>
  </div>
  <div class="ts-web-body">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <span style="font-size:12px;">全て</span>
      <span style="background:#4CAF50;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
    </div>
    <div class="ts-notice">
      <a>2229 研修会のご申込を受付ました。受講後ご請求書の発行手続き中です。後ほど協会からご請求書発行メールが届きます。当マイページにご請求書が表示されますので、ダウンロードの上お振込みをお願い致します。</a><br>
      <a>2185 研修会のお申し込みありがとうございました。よろしくお願いします。</a>
    </div>
    <div style="font-weight:bold;margin-bottom:4px;color:#333;">ご対応リスト</div>
    <table class="ts-web-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>日付</th>
          <th>内容</th>
          <th>状態</th>
          <th>着手</th>
          <th>完了</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#FFF8E1;">
          <td>2243</td>
          <td>2021/07/24</td>
          <td><a style="color:#1565C0;cursor:pointer;">【研修会】テスト研修100（正会員）</a></td>
          <td><span class="ts-badge ts-badge-orange">請求書発行<br>待ち</span></td>
          <td></td>
          <td></td>
          <td><button class="ts-web-btn red" style="padding:3px 8px;font-size:11px;">取消</button></td>
        </tr>
        <tr>
          <td>2202</td>
          <td>2021/07/08</td>
          <td><a style="color:#1565C0;cursor:pointer;">【研修会】テスト研修2（正会員）</a></td>
          <td><span class="ts-badge ts-badge-green">入金済</span></td>
          <td>7/8</td>
          <td></td>
          <td>
            <button class="ts-web-btn blue" style="padding:3px 8px;font-size:11px;">請求書</button>
            <button class="ts-web-btn gray" style="padding:3px 8px;font-size:11px;">参加者追加</button>
            <button class="ts-web-btn gray" style="padding:3px 8px;font-size:11px;">表示</button>
          </td>
        </tr>
        <tr>
          <td>2188</td>
          <td>2021/07/01</td>
          <td>【研修会】[テスト]地域リリリリ概論Vol101（正会員）</td>
          <td><span class="ts-badge ts-badge-gray">取消</span></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2185</td>
          <td>2021/07/01</td>
          <td>【研修会】[テスト]地域リリリリ概論Vol101（正会員）</td>
          <td><span class="ts-badge ts-badge-gray">未着手</span></td>
          <td></td>
          <td></td>
          <td>
            <button class="ts-web-btn blue" style="padding:3px 8px;font-size:11px;">請求書</button>
            <button class="ts-web-btn gray" style="padding:3px 8px;font-size:11px;">表示</button>
          </td>
        </tr>
        <tr>
          <td>2165</td>
          <td>2021/06/25</td>
          <td><a style="color:#1565C0;cursor:pointer;">【申込会】[テスト]地域リリリリ概論Vol101（正会員）</a></td>
          <td><span class="ts-badge ts-badge-green">入金済</span></td>
          <td>7/1</td>
          <td></td>
          <td>
            <button class="ts-web-btn blue" style="padding:3px 8px;font-size:11px;">請求書</button>
            <button class="ts-web-btn gray" style="padding:3px 8px;font-size:11px;">表示</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export default function ScrTrainingContactList(): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
