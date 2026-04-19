import { useState } from 'react';


// SCR-003 会員管理
type TabId = 't1' | 't2' | 't3' | 't4' | 't5';

const upperHtml = `<div class="admin-win">
    <div class="admin-titlebar">🔵 会員 システム管理者<span>✕</span></div>
    <div class="admin-toolbar">
      <button class="btn btn-orange btn-sm" style="background:#1565C0;">入会承認<br><span style="font-size:10px;">(会員No発番)</span></button>
      <button class="btn btn-blue btn-sm">登録情報印刷</button>
      <button class="btn btn-blue btn-sm">操作履歴</button>
      <button class="btn btn-green btn-sm">保　存</button>
      <button class="btn btn-gray btn-sm">戻　る</button>
      <button class="btn btn-gray btn-sm">❓</button>
    </div>
    <div class="admin-content">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:8px;">
        <!-- 左カラム -->
        <div>
          <div class="info-grid two-col" style="font-size:11px;">
            <div class="lbl">会員No</div><div class="val"><input type="text" style="width:80px;" value="A2008"> &nbsp; Id: <span>690</span></div>
            <div class="lbl">会員区分 ※</div><div class="val"><select style="width:100px;"><option selected>正会員</option><option>賛助会員</option><option>個人会員</option></select></div>
            <div class="lbl">入会日</div><div class="val"><input type="text" value="2021/07/14" style="width:90px;"></div>
            <div class="lbl">法人名 ※</div><div class="val"><input type="text" style="width:95%;" value="XX法人サンプル会"><br><input type="text" style="width:95%; margin-top:2px;" placeholder="フリガナ" value="イリョウホウジンサンプルカイ"></div>
            <div class="lbl">施設名 ※</div><div class="val"><input type="text" style="width:95%;" value="サンプルリリ施設"><br><input type="text" style="width:95%; margin-top:2px;" placeholder="フリガナ" value="サンプルリリビョウイン"></div>
            <div class="lbl">法人代表者役職 ※</div><div class="val"><input type="text" style="width:95%;" value="代表"><br><input type="text" style="width:95%; margin-top:2px;" placeholder="フリガナ" value="ダイヒョウ"></div>
            <div class="lbl">法人代表者名 ※</div><div class="val"><input type="text" style="width:95%;" value="志公園 太郎"><br><input type="text" style="width:95%; margin-top:2px;" placeholder="フリガナ" value="シバコウエン タロウ"></div>
          </div>
        </div>
        <!-- 右カラム -->
        <div>
          <div class="info-grid two-col" style="font-size:11px;">
            <div class="lbl">年会費未請求</div><div class="val"><input type="checkbox"></div>
            <div class="lbl">年会費未送信</div><div class="val"><input type="checkbox"></div>
            <div class="lbl">理事施設</div><div class="val"><input type="checkbox"></div>
            <div class="lbl">施設種別</div><div class="val"><select style="width:120px;"><option>（選択）</option><option>施設</option><option>クリニック</option><option>施設</option></select></div>
            <div class="lbl">マイページ管理<br>メール ※</div><div class="val"><input type="text" style="width:95%;" value="shibakouen@aaa.com"></div>
            <div class="lbl">備考</div><div class="val"><textarea style="width:95%; height:40px;"></textarea></div>
            <div class="lbl">作成日時</div><div class="val" style="font-size:11px;">2021/07/14 18:32:11<br>作成者：</div>
            <div class="lbl">最終更新日時</div><div class="val" style="font-size:11px;">2021/07/14 18:32:11<br>更新者：</div>
          </div>
        </div>
      </div>

      <!-- タブ -->
      `;
const lowerHtml = `<div class="admin-statusbar"><span>会員管理</span><span>NumLock 📊 ▣ ▣ ▣</span>`;

const tabPanels: Record<TabId, string> = {
  t1: `
          <div class="info-grid two-col" style="font-size:11px;">
            <div class="lbl">郵便番号 ※</div><div class="val"><input type="text" value="1050011" style="width:80px;"> <span style="font-size:11px; color:#555;">都道府県区分：</span><select style="width:70px;"><option selected>東京都</option></select></div>
            <div class="lbl">住所 ※</div><div class="val"><input type="text" style="width:95%;" value="東京都港区芝公園1-1"></div>
            <div class="lbl">TEL ※</div><div class="val"><input type="text" value="03-1111-1010" style="width:120px;"> 内線<input type="text" style="width:60px;"></div>
            <div class="lbl">FAX</div><div class="val"><input type="text" style="width:120px;"></div>
            <div class="lbl">メルアド1〜4</div><div class="val"><input type="text" style="width:45%;" placeholder="メルアド1"> <input type="text" style="width:45%;" placeholder="メルアド2"></div>
            <div class="lbl">連絡担当部署 ※</div><div class="val"><input type="text" style="width:95%;" value="連絡担当組織"></div>
            <div class="lbl">担当者名 ※</div><div class="val"><input type="text" style="width:45%;" value="志公園 太郎"> <input type="text" style="width:45%;" placeholder="フリガナ" value="シバコウエン タロウ"></div>
            <div class="lbl">担当連絡メール ※</div><div class="val"><input type="text" style="width:95%;" value="shibakouen@aaa.com"></div>
            <div class="lbl">その他メルアド</div><div class="val"><input type="text" style="width:45%;" placeholder="その他メルアド1"> <input type="text" style="width:45%;" placeholder="その他メルアド2"></div>
          </div>
        </div>
        <!-- タブ②送付先 --`,
  t2: `
          <div class="info-grid" style="font-size:11px;">
            <div class="lbl">郵便番号</div><div class="val"><input type="text" style="width:80px;"> <select style="width:70px;"><option>（都道府県）</option></select></div>
            <div class="lbl">住所</div><div class="val"><input type="text" style="width:320px;"></div>
            <div class="lbl">担当者名</div><div class="val"><input type="text" style="width:120px;"> <input type="text" style="width:120px;" placeholder="フリガナ"></div>
            <div class="lbl">役職</div><div class="val"><input type="text" style="width:100px;"></div>
            <div class="lbl">送付先メール</div><div class="val"><input type="text" style="width:200px;"></div>
          </div>
        </div>
        <!-- タブ③対応 --`,
  t3: `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <select style="width:80px;"><option>30件</option></select>
            <button class="btn btn-blue btn-sm">対応新規</button>
          </div>
          <table class="list-tbl" style="font-size:11px;">
            <tr><th>対応</th><th>日付</th><th>内容</th><th>対応状態</th><th>期日</th><th>完了日</th></tr>
            <tr class="selected"><td>入会</td><td>2021/07/14</td><td>【正会員】2021年度入会時年会費</td><td>請求</td><td>2021/07/24</td><td></td></tr>
            <tr><td>研修会</td><td>2021/07/24</td><td>【研修会】テスト研修100【正会員】</td><td>通知済</td><td>2021/08/20</td><td></td></tr>
            <tr><td>研修会</td><td>2021/07/24</td><td>【研修会】テスト研修100【正会員】</td><td>請求済</td><td>2021/07/30</td><td></td></tr>
          </table>
        </div>
        <!-- タブ④退会 --`,
  t4: `
          <div class="info-grid two-col" style="font-size:11px;">
            <div class="lbl">退会届</div><div class="val"><input type="checkbox"> （チェックでマイページ管理者に通知）</div>
            <div class="lbl">退会日</div><div class="val"><input type="text" style="width:100px;"></div>
            <div class="lbl">退会理由</div><div class="val"><input type="text" style="width:300px;" placeholder="退会理由の略"></div>
            <div class="lbl">退会処理その他</div><div class="val"><textarea style="width:300px; height:40px;"></textarea></div>
          </div>
        </div>
        <!-- タブ⑤退会処理 --`,
  t5: `
          <div style="color:#888; padding:20px; text-align:center;">退会手続き詳細タブ（④退会タブで退会届チェック後に操作）`,
};

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 't1', label: '①連絡先' },
  { id: 't2', label: '②送付先' },
  { id: 't3', label: '③対応【年会費/研修会等】' },
  { id: 't4', label: '④退 会' },
  { id: 't5', label: '⑤退　会' },
];

export default function ScrMemberAdmin(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabId>('t1');
  return (
    <div className="screen active" id="scr003">
      <div
        dangerouslySetInnerHTML={{
          __html: upperHtml,
        }}
      />
      <div className="admin-win" style={{ marginTop: -1 }}>
        <div className="tab-bar">
          {tabs.map((t) => (
            <div
              key={t.id}
              className={'tab' + (activeTab === t.id ? ' active' : '')}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </div>
          ))}
        </div>
        <div className="tab-content" id="tab_contact">
          <div
            className="tab-panel active"
            id={activeTab}
            dangerouslySetInnerHTML={{ __html: tabPanels[activeTab] }}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: lowerHtml }}
        />
      </div>
    </div>
  );
}
