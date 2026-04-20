// SCR-501 アンケート設定画面
import { useState } from 'react';

type Screen = 'search' | 'settings';

const questions: [number, string | number, string][] = [
  [1,  1,       '1.入院施設情報'],
  [2,  '1-1',   '1-1.施設基本情報'],
  [3,  '1-1',   '%会員:施設名%'],
  [4,  '1-1',   '%会員:法人名%'],
  [5,  '1-1',   '%会員:施設名%'],
  [6,  '1-1',   '%会員:郵便番号%'],
  [7,  '1-1',   '%会員:住所1%'],
  [8,  '1-1',   '%会員:住所2%'],
  [9,  '1-1-1', '経営主体'],
  [10, '1-1-2', '経営主体その他'],
  [11, '1-2',   '1-2.入院者情報'],
  [12, '1-2-1', '役職'],
  [13, '1-2-2', '職種'],
  [14, '1-2-3', 'お名前'],
  [15, 2,       '施設をご選択の上、関連するアンケートにお答えください'],
  [16, 2,       '施設の選択'],
  [17, 3,       '3.病棟・施設に関するアンケート'],
  [18, '3-1',   '一般病床の有無'],
  [19, '3-1-1', '※一般病床がある病種数と病床数をそれぞれ入力ください'],
  [20, '3-1-1', '「急性期一般」入院料1（病床数）'],
  [21, '3-1-2', '「急性期一般」入院料1（病床数）'],
];

const searchData = [
  { id: 1, title: '令和2年度会員施設調査入力', ym: '2021/09' },
  { id: 2, title: '令和3年度会員施設基本調査', ym: '2021/09' },
  { id: 3, title: '令和4年度会員施設調査',     ym: '2022/09' },
];

const memberData = [
  ['A0001', '正会員', '社会福祉法人 やっぽ生愛会',   '生愛会病院',               '松原 保乃'],
  ['A0002', '正会員', '社会医療法人社壇',             '統計記念病院',             '置戸 渉太'],
  ['A0003', '正会員', '医療法人 ひまわり会',          '歌舞病院',                 '大沢 武夫'],
  ['A0005', '正会員', '一般財団法人 黒崎',            '弛緩者回中リハビリセンター', '岩田 学'],
  ['A0006', '正会員', '医療法人 えびす会',            'えびす病院',               '永山 亮輔'],
];

export default function ScrAnketSetting(): JSX.Element {
  const [screen,      setScreen]      = useState<Screen>('search');
  const [searched,    setSearched]    = useState(false);
  const [selected,    setSelected]    = useState<typeof searchData[0] | null>(null);
  const [showNotify,  setShowNotify]  = useState(false);
  const [notifyStep,  setNotifyStep]  = useState<1 | 2>(1);
  const [progress,    setProgress]    = useState(0);
  const [readyDone,   setReadyDone]   = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDone,    setShowDone]    = useState(false);
  const [saveToast,   setSaveToast]   = useState(false);

  function openSetting(r: typeof searchData[0]) {
    setSelected(r);
    setScreen('settings');
  }

  function handleReady() {
    setProgress(0);
    let n = 0;
    const iv = setInterval(() => {
      n++;
      setProgress(n / 3 * 100);
      if (n >= 3) { clearInterval(iv); setReadyDone(true); }
    }, 500);
  }

  function openNotify() {
    setNotifyStep(1); setProgress(0); setReadyDone(false);
    setShowNotify(true);
  }

  function handleSave() {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  }

  return (
    <div className="ank-screen">

      {/* ── 検索画面 ── */}
      {screen === 'search' && (
        <div className="ank-window">
          <div className="ank-win-title">アンケート設定 ｜ システム管理者</div>
          <div className="ank-toolbar">
            <button className="ank-btn" onClick={() => setSearched(true)}>検　索</button>
            <button className="ank-btn">コピー新規</button>
            <button className="ank-btn ank-btn-primary">新　規</button>
            <div style={{ marginLeft: 'auto' }}>
              <input className="ank-fi" placeholder="検索ワード" style={{ width: 160 }} />
            </div>
          </div>
          <div style={{ padding: '12px 14px' }}>
            {searched ? (
              <table className="ank-search-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>No</th>
                    <th>タイトル</th>
                    <th style={{ width: 100 }}>実施年月</th>
                  </tr>
                </thead>
                <tbody>
                  {searchData.map(r => (
                    <tr key={r.id} onClick={() => openSetting(r)}>
                      <td>{r.id}</td>
                      <td>{r.title}</td>
                      <td>{r.ym}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ padding: 20, color: '#8a8f99', textAlign: 'center', fontSize: 11 }}>
                「検索」ボタンをクリックするとアンケート一覧が表示されます
              </p>
            )}
          </div>
          <div className="ank-statusbar">アンケート設定検索画面</div>
        </div>
      )}

      {/* ── 設定画面 ── */}
      {screen === 'settings' && selected && (
        <div className="ank-window">
          <div className="ank-win-title">アンケート設定 ｜ システム管理者</div>
          <div className="ank-toolbar">
            <button className="ank-btn ank-btn-orange" onClick={openNotify}>
              アンケート調査依頼通知処理
            </button>
            <button className="ank-btn">CSV出力</button>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              <button className="ank-btn ank-btn-success" onClick={handleSave}>保　存</button>
              <button className="ank-btn" onClick={() => setScreen('search')}>戻　る</button>
            </div>
          </div>

          <div className="ank-split">
            {/* 左: 設定フォーム */}
            <div className="ank-left">
              <div className="ank-id-row">
                <span style={{ fontSize: 10, color: '#8a8f99' }}>Id</span>
                <span style={{ fontSize: 14, fontWeight: 'bold', color: '#1a3560' }}>{selected.id}</span>
                <div style={{ marginLeft: 'auto' }}>
                  <span className="ank-badge ank-badge-info">アンケート</span>
                </div>
              </div>

              <div className="ank-form-sec">
                <div className="ank-sec-title">基本設定</div>
                <div className="ank-form-row" style={{ marginBottom: 8 }}>
                  <label className="ank-form-label">タイトル <span style={{ color: '#b92323' }}>*</span></label>
                  <input className="ank-fi" defaultValue={selected.title} />
                </div>
                <div className="ank-form-grid2" style={{ marginBottom: 8 }}>
                  <div className="ank-form-row">
                    <label className="ank-form-label">前回</label>
                    <input className="ank-fi" placeholder="前回調査ID（省略可）" />
                  </div>
                  <div className="ank-form-row">
                    <label className="ank-form-label">対応No</label>
                    <input className="ank-fi ank-ro" defaultValue="4：アンケート" readOnly />
                  </div>
                </div>
                <div className="ank-form-row">
                  <label className="ank-form-label">説明</label>
                  <textarea className="ank-fi" rows={3} style={{ resize: 'vertical' }} />
                </div>
              </div>

              <div className="ank-form-sec">
                <div className="ank-sec-title">調査期間・対象</div>
                <div className="ank-form-grid2" style={{ marginBottom: 8 }}>
                  <div className="ank-form-row">
                    <label className="ank-form-label">実施年月 <span style={{ color: '#b92323' }}>*</span></label>
                    <input className="ank-fi" defaultValue={selected.ym} />
                  </div>
                  <div />
                </div>
                <div className="ank-form-row" style={{ marginBottom: 8 }}>
                  <label className="ank-form-label">調査期間 <span style={{ color: '#b92323' }}>*</span></label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <input className="ank-fi" defaultValue="2021/08/01" style={{ width: 120 }} />
                    <span style={{ color: '#555b66' }}>〜</span>
                    <input className="ank-fi" defaultValue="2021/10/31" style={{ width: 120 }} />
                  </div>
                </div>
                <div className="ank-form-row">
                  <label className="ank-form-label">対象会員種別</label>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                    {['正会員', '個人会員', '賛助会員', '特別会員', '非会員'].map((m, i) => (
                      <label key={m} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11 }}>
                        <input type="checkbox" defaultChecked={i < 4} style={{ accentColor: '#2e6fbd' }} /> {m}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ank-form-sec">
                <div className="ank-sec-title">記録情報</div>
                <div className="ank-form-grid2">
                  {[
                    ['作成日時',     '2020/12/04 13:40:14'],
                    ['作成者',       'システム管理者'],
                    ['最終更新日時', '2021/08/31 9:59:31'],
                    ['最終更新者',   'システム管理者'],
                  ].map(([lbl, val]) => (
                    <div className="ank-form-row" key={lbl}>
                      <label className="ank-form-label">{lbl}</label>
                      <input className="ank-fi ank-ro" defaultValue={val} readOnly />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右: 設問詳細一覧 */}
            <div className="ank-right">
              <div className="ank-right-header">
                詳細一覧：
                <span className="ank-badge ank-badge-info" style={{ marginLeft: 4 }}>設問 21件</span>
              </div>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                <table className="ank-detail-table">
                  <thead>
                    <tr>
                      <th style={{ width: 36 }}>SEQ</th>
                      <th style={{ width: 54 }}>設問No</th>
                      <th>設問内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map(([seq, no, text]) => (
                      <tr key={seq}>
                        <td style={{ textAlign: 'center', color: '#8a8f99' }}>{seq}</td>
                        <td style={{ color: '#2e6fbd', fontSize: 10 }}>{no}</td>
                        <td>{text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ank-statusbar">
            フォームビュー | Id:{selected.id} — {selected.title}
          </div>
        </div>
      )}

      {/* ── 通知モーダル ── */}
      {showNotify && (
        <div className="ank-overlay" onClick={e => { if (e.target === e.currentTarget) setShowNotify(false); }}>
          <div className="ank-modal" style={{ width: 520 }}>
            <div className="ank-modal-title">アンケート調査依頼通知処理</div>
            <div style={{ padding: '16px 18px' }}>
              {notifyStep === 1 ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 11, color: '#555b66' }}>会員状況：</span>
                    <button className="ank-btn ank-btn-primary" style={{ fontSize: 10, padding: '3px 10px' }}>✓ 未通知</button>
                    <button className="ank-btn" style={{ fontSize: 10, padding: '3px 10px' }}>回答中</button>
                    <button className="ank-btn" style={{ fontSize: 10, padding: '3px 10px' }}>回答済</button>
                    <span style={{ marginLeft: 'auto', fontSize: 10, color: '#555b66' }}>表示：<b>640</b>件</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                    <input className="ank-fi" placeholder="キーワードで絞込" style={{ flex: 1 }} />
                    <button className="ank-btn" style={{ fontSize: 10 }}>検索</button>
                    <button className="ank-btn" style={{ fontSize: 10 }}>全選択</button>
                    <button className="ank-btn" style={{ fontSize: 10 }}>選択解除</button>
                  </div>
                  <div style={{ border: '1px solid #e8e9eb', borderRadius: 3, overflow: 'hidden', maxHeight: 200, overflowY: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
                      <thead style={{ background: '#1a3560', color: '#fff', position: 'sticky', top: 0 } as React.CSSProperties}>
                        <tr>
                          <th style={{ padding: '5px 8px', width: 24 }}></th>
                          {['会員No', '会員区分', '法人名', '施設名', '登録者'].map(h => (
                            <th key={h} style={{ padding: '5px 8px', textAlign: 'left' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {memberData.map(([no, ...rest]) => (
                          <tr key={no} style={{ borderBottom: '1px solid #e8e9eb', cursor: 'pointer' }}>
                            <td style={{ padding: '4px 8px', textAlign: 'center' }}>
                              <input type="checkbox" style={{ accentColor: '#2e6fbd' }} />
                            </td>
                            {[no, ...rest].map((v, i) => (
                              <td key={i} style={{ padding: '4px 8px' }}>{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 10, color: '#555b66' }}>選択件数：0件</div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <div style={{ fontSize: 12, fontWeight: 'bold', color: readyDone ? '#1a7a45' : '#1a3560', marginBottom: 8 }}>
                    {readyDone ? '✓ 準備完了。[通知処理]をクリックしてください。' : '→ 通知準備をクリックして下さい！'}
                  </div>
                  <div style={{ fontSize: 11, color: '#555b66', marginBottom: 8 }}>調査期間：<b>2021/10/31</b></div>
                  <div style={{ fontSize: 11, color: '#555b66' }}>{Math.round(progress / 100 * 3)} / 3件</div>
                  <div style={{ height: 10, background: '#d6e8f8', borderRadius: 5, overflow: 'hidden', margin: '10px 0' }}>
                    <div style={{ height: '100%', background: '#2e6fbd', width: `${progress}%`, transition: 'width .4s' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
                    <button className="ank-btn ank-btn-primary" onClick={handleReady} disabled={readyDone}>通知準備</button>
                    <button
                      className="ank-btn"
                      onClick={() => { setShowNotify(false); setShowConfirm(true); }}
                      disabled={!readyDone}
                      style={{ opacity: readyDone ? 1 : 0.5 }}
                    >
                      通知処理
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: '10px 18px 16px', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              {notifyStep === 1 ? (
                <>
                  <button className="ank-btn ank-btn-primary" onClick={() => setNotifyStep(2)}>アンケート調査依頼通知 ›</button>
                  <button className="ank-btn" onClick={() => setShowNotify(false)}>戻　る</button>
                </>
              ) : (
                <button className="ank-btn" onClick={() => setShowNotify(false)}>閉じる</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── 確認ダイアログ ── */}
      {showConfirm && (
        <div className="ank-overlay">
          <div className="ank-modal" style={{ width: 280 }}>
            <div className="ank-modal-title">処理確認</div>
            <div style={{ padding: '16px 18px' }}>
              <p style={{ fontSize: 12, lineHeight: 1.6 }}>アンケート依頼の設定を行います。</p>
            </div>
            <div style={{ padding: '10px 18px 16px', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button className="ank-btn ank-btn-primary" onClick={() => { setShowConfirm(false); setShowDone(true); }}>はい(Y)</button>
              <button className="ank-btn" onClick={() => setShowConfirm(false)}>いいえ(N)</button>
            </div>
          </div>
        </div>
      )}

      {/* ── 完了ダイアログ ── */}
      {showDone && (
        <div className="ank-overlay">
          <div className="ank-modal" style={{ width: 240 }}>
            <div className="ank-modal-title" style={{ background: '#444' }}>Microsoft Access</div>
            <div style={{ padding: '16px 18px' }}><p style={{ fontSize: 12 }}>設定完了</p></div>
            <div style={{ padding: '10px 18px 16px', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="ank-btn ank-btn-primary" onClick={() => setShowDone(false)}>OK</button>
            </div>
          </div>
        </div>
      )}

      {/* ── 保存トースト ── */}
      {saveToast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 300, padding: '10px 20px', borderRadius: 4, fontSize: 12, fontWeight: 'bold', background: '#1a7a45', color: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,.25)' }}>
          保存完了
        </div>
      )}
    </div>
  );
}
