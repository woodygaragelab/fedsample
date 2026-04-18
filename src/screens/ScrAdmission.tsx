import { useState } from 'react';
import ScreenTitleBar from '../components/ScreenTitleBar';

// SCR-005 から移植した入会費マスタ
const FEE_LIST = [
  { id: 6,  title: '2021年度入会時年会費' },
  { id: 10, title: '2021年度入会時年会費(1/3)' },
  { id: 3,  title: '2020年度 入会時年会費' },
  { id: 1,  title: '2019年度 入会時年会費' },
];

export default function ScrAdmission(): JSX.Element {
  const [feeId, setFeeId] = useState<number>(6);

  return (
    <div className="screen active" id="scr004">
      <ScreenTitleBar id="SCR-004" title="◆入会画面" subtitle="管理システム ／ 運用管理者" />
      <div className="admin-win">
        <div className="admin-titlebar">🔵 会員 担当者1<span>✕</span></div>
        <div className="admin-toolbar">
          <button className="btn btn-green btn-sm">保　存</button>
          <button className="btn btn-gray btn-sm">戻　る</button>
          <button className="btn btn-gray btn-sm">❓</button>
          <span style={{ fontSize: 11, marginLeft: 10 }}>Id 690 / 2220</span>
        </div>
        <div className="admin-content">
          <div style={{ fontSize: 12, fontWeight: 'bold', color: 'var(--blue-dark)', marginBottom: 8 }}>◆ 入会</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {/* 左 */}
            <div className="info-grid two-col" style={{ fontSize: 11 }}>
              <div className="lbl">関連Id</div>
              <div className="val" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <select
                  value={feeId}
                  onChange={(e) => setFeeId(Number(e.target.value))}
                  style={{ width: 220 }}
                >
                  {FEE_LIST.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.id}　{f.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="lbl">内容</div><div className="val"><input type="text" defaultValue="申込" style={{ width: 150 }} /></div>
              <div className="lbl">対応状態</div>
              <div className="val">
                <select style={{ width: 100 }}>
                  <option>承認</option>
                  <option selected>請求</option>
                  <option>完了</option>
                </select>
              </div>
              <div className="lbl">期日</div><div className="val"><input type="text" style={{ width: 90 }} /></div>
              <div className="lbl">完了日</div><div className="val"><input type="text" style={{ width: 90 }} /></div>
              <div className="lbl">取消日</div><div className="val"><input type="text" style={{ width: 90 }} /></div>
              <div className="lbl">会員側備考</div><div className="val"><input type="text" style={{ width: '95%' }} defaultValue="入会受付No:530-801" /></div>
              <div className="lbl">Memo</div><div className="val"><textarea style={{ width: '95%', height: 50 }} /></div>
              <div className="lbl">表示メッセージ</div><div className="val"><input type="text" style={{ width: '95%' }} defaultValue="申込内容を確認中です。" /></div>
              <div className="lbl">通知メール設定1〜3</div><div className="val"><input type="text" style={{ width: '95%' }} /></div>
              <div className="lbl">処理フラグ</div><div className="val"><input type="checkbox" /></div>
              <div className="lbl">仮パスワード発行</div><div className="val"><input type="checkbox" /></div>
            </div>
            {/* 右 */}
            <div className="info-grid two-col" style={{ fontSize: 11 }}>
              <div className="lbl">作成日時</div>
              <div className="val">
                2021/07/14 18:28:02<br />
                <span style={{ fontSize: 10, color: '#888' }}>最終更新: 2021/07/14 19:03:24</span>
              </div>
              <div className="lbl">FilePath</div><div className="val"><input type="text" style={{ width: '95%' }} /></div>
              <div className="lbl">請求書No</div><div className="val"><input type="text" style={{ width: '95%' }} /></div>
              <div className="lbl">請求書発行回数</div><div className="val"><input type="text" defaultValue="0" style={{ width: 50 }} /></div>
              <div className="lbl">領収書No</div><div className="val"><input type="text" style={{ width: '95%' }} /></div>
              <div className="lbl">領収書発行回数</div><div className="val"><input type="text" defaultValue="0" style={{ width: 50 }} /></div>
              <div style={{ gridColumn: 'span 2', display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <button className="btn btn-blue btn-sm">請求書内容表示</button>
                <button className="btn btn-blue btn-sm">請求書表示</button>
                <button className="btn btn-blue btn-sm">領収証発行</button>
                <button className="btn btn-blue btn-sm">領収証表示</button>
              </div>
              <div className="lbl">費用</div><div className="val"><input type="text" style={{ width: 80 }} /></div>
              <div className="lbl">内消費税</div><div className="val"><input type="text" style={{ width: 80 }} /></div>
              <div className="lbl">税率</div><div className="val"><input type="text" style={{ width: 60 }} /></div>
              <div className="lbl">人数 / 副付人数</div>
              <div className="val">
                <input type="text" style={{ width: 50 }} /> / <input type="text" style={{ width: 50 }} />
              </div>
              <div className="lbl">振込元銀行支店名</div><div className="val"><input type="text" style={{ width: '95%' }} /></div>
              <div className="lbl">振込元口座名義人</div><div className="val"><input type="text" style={{ width: '95%' }} /></div>
              <div className="lbl">入金額</div><div className="val"><input type="text" style={{ width: 80 }} /></div>
              <div className="lbl">入金日</div><div className="val"><input type="text" style={{ width: 90 }} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
