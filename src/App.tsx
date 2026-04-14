import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  dummyApi, MemberData, CorrRecord, CorrStatus, CorrType,
  WithdrawReason, MemberType, FacilityType,
} from './api/dummyApi';
import './App.css';

// ── Toast hook ────────────────────────────────────────────────────────────
function useToast() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const show = useCallback((message: string) => {
    setMsg(message); setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 2000);
  }, []);
  return { visible, msg, show };
}

// ── Badge helper ──────────────────────────────────────────────────────────
function corrTypeBadge(t: CorrType) {
  const map: Record<CorrType, string> = {
    '入会': 'badge-success', '研修会': 'badge-neutral',
    '問合せ': 'badge-info', '登録変更': 'badge-neutral', '退会依頼': 'badge-danger',
  };
  return <span className={`badge ${map[t] ?? 'badge-neutral'}`} style={{ fontSize: 9 }}>{t}</span>;
}
function corrStatusBadge(s: CorrStatus) {
  const map: Record<CorrStatus, string> = {
    '入金済': 'badge-success', '承諾': 'badge-success', '変更済': 'badge-success',
    '通知済': 'badge-info', '請求': 'badge-info',
    '問合せ': 'badge-warning',
  };
  return <span className={`badge ${map[s] ?? 'badge-neutral'}`} style={{ fontSize: 9 }}>{s}</span>;
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  const [data, setData] = useState<MemberData | null>(null);
  const [form, setForm] = useState<MemberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'send' | 'corr' | 'withdraw'>('corr');
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [selectedCorrId, setSelectedCorrId] = useState<number | null>(5);
  const [corrFilter, setCorrFilter] = useState('すべて');
  const { visible: toastVisible, msg: toastMsg, show: showToast } = useToast();

  useEffect(() => {
    dummyApi.fetchMember().then((d) => { setData(d); setForm(d); setLoading(false); });
  }, []);

  // ── Helpers ──
  const setHE = (k: keyof MemberData['headerEditable'], v: unknown) =>
    setForm((f) => f ? { ...f, headerEditable: { ...f.headerEditable, [k]: v } } : f);
  const setContact = (k: keyof MemberData['contact'], v: unknown) =>
    setForm((f) => f ? { ...f, contact: { ...f.contact, [k]: v } } : f);
  const setSend = (k: keyof MemberData['send'], v: unknown) =>
    setForm((f) => f ? { ...f, send: { ...f.send, [k]: v } } : f);
  const setWithdraw = (k: keyof MemberData['withdraw'], v: unknown) =>
    setForm((f) => f ? { ...f, withdraw: { ...f.withdraw, [k]: v } } : f);
  const setCorr = (id: number, k: keyof CorrRecord, v: unknown) =>
    setForm((f) => f ? { ...f, corrections: f.corrections.map((c) => c.id === id ? { ...c, [k]: v } : c) } : f);

  const selectedCorr = form?.corrections.find((c) => c.id === selectedCorrId) ?? null;
  const filteredCorr = form?.corrections.filter(
    (c) => corrFilter === 'すべて' || c.corrType === corrFilter
  ) ?? [];

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    await dummyApi.saveMember(form);
    setData(JSON.parse(JSON.stringify(form)));
    setSaving(false);
    showToast('保存完了');
  };

  if (loading) return (
    <div className="loading-state"><div className="spinner" /><span>読み込み中...</span></div>
  );
  if (!form) return null;
  const { header, headerEditable: he, contact, send, corrections, withdraw } = form;

  return (
    <div>
      {/* ── Topbar ── */}
      <div className="topbar">
        <div className="topbar-logo"><span className="dot" />JKLL</div>
        <div className="topbar-divider" />
        <div className="topbar-breadcrumb">
          <span>TopMenu</span><span className="sep">›</span>
          <span>会員</span><span className="sep">›</span>
          <span className="current">会員管理画面</span>
        </div>
        <div className="topbar-right">
          <span className="user">担当者1</span>
          <button className="topbar-btn">パスワード変更</button>
          <button className="topbar-btn">戻 る</button>
        </div>
      </div>

      <div className="main-wrap">
        <div className="window">

          {/* ── Window titlebar ── */}
          <div className="window-titlebar">
            <span className="icon" />
            会員 ／ システム管理者
          </div>

          {/* ── Toolbar ── */}
          <div className="toolbar">
            <button className="btn btn-primary" onClick={() => setShowApproveModal(true)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polyline points="10,2 5,9 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              入会承認（会員No発番）
            </button>
            <button className="btn">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="1" width="7" height="4" rx="1" /><rect x="1" y="5" width="9" height="4" rx="1" /><rect x="3" y="7" width="5" height="2" /></svg>
              登録情報印刷
            </button>
            <button className="btn">操作履歴</button>
            <div className="toolbar-sep" />
            <div className="toolbar-right">
              <button className="btn btn-success" onClick={handleSave} disabled={saving}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 2h6l1 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1z" /><rect x="3" y="2" width="4" height="2" /><rect x="3" y="6" width="5" height="3" /></svg>
                {saving ? '保存中...' : '保 存'}
              </button>
              <button className="btn">戻 る</button>
            </div>
          </div>

          {/* ── Header area ── */}
          <div className="header-area">
            <div className="header-grid">

              {/* 会員基本 */}
              <div className="header-section" style={{ paddingLeft: 6 }}>
                <div className="field-row">
                  <span className="field-label">会員No</span>
                  <div className="member-no-box">
                    <span className="no">{header.memberNo}</span>
                    <span className="label">{header.memberType}</span>
                  </div>
                </div>
                <div className="field-row">
                  <span className="field-label">会員区分</span>
                  <select className="form-input" style={{ width: 110, fontSize: 11 }}
                    value={he.memberType}
                    onChange={(e) => setHE('memberType', e.target.value as MemberType)}>
                    {(['正会員','個人会員','賛助会員','非会員'] as MemberType[]).map((v) => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div className="field-row">
                  <span className="field-label">入会日</span>
                  <span className="field-value">{header.joinDate}</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Id</span>
                  <span className="field-value muted">{header.memberId}</span>
                </div>
              </div>

              {/* 法人・施設情報 */}
              <div className="header-section">
                <div className="field-row">
                  <span className="field-label req">法人名</span>
                  <span className="field-value">{header.corporateName}</span>
                </div>
                <div className="field-row">
                  <span className="field-label" style={{ fontSize: 10, color: 'var(--gray-4)', minWidth: 70 }}>　フリガナ</span>
                  <span className="field-value muted">{header.corporateNameKana}</span>
                </div>
                <div className="field-row">
                  <span className="field-label req">施設名</span>
                  <span className="field-value">{header.facilityName}</span>
                </div>
                <div className="field-row">
                  <span className="field-label" style={{ fontSize: 10, color: 'var(--gray-4)', minWidth: 70 }}>　フリガナ</span>
                  <span className="field-value muted">{header.facilityNameKana}</span>
                </div>
                <div className="field-row">
                  <span className="field-label req">法人代表</span>
                  <span className="field-value">{header.representative}</span>
                </div>
              </div>

              {/* フラグ・施設種別 */}
              <div className="header-section">
                <div className="field-row" style={{ marginBottom: 4 }}>
                  <span className="field-label">施設種別</span>
                  <select className="form-input" style={{ width: 120, fontSize: 11 }}
                    value={he.facilityType}
                    onChange={(e) => setHE('facilityType', e.target.value as FacilityType)}>
                    <option value="">— 選択 —</option>
                    {(['病院','クリニック','老健','特養'] as FacilityType[]).map((v) => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div className="flag-row">
                  <label className="flag-item">
                    <input type="checkbox" checked={he.feeNotBilled} onChange={(e) => setHE('feeNotBilled', e.target.checked)} /> 年会費未請求
                  </label>
                  <label className="flag-item">
                    <input type="checkbox" checked={he.feeNotSent} onChange={(e) => setHE('feeNotSent', e.target.checked)} /> 年会費未送信
                  </label>
                </div>
                <div className="flag-row" style={{ marginTop: 8 }}>
                  <label className="flag-item">
                    <input type="checkbox" checked={he.isDirector} onChange={(e) => setHE('isDirector', e.target.checked)} /> 理事施設
                  </label>
                </div>
                <div className="field-row" style={{ marginTop: 8 }}>
                  <span className="field-label">マイページ<br />管理メール</span>
                  <span className="field-value muted" style={{ fontSize: 10 }}>{he.myPageEmail}</span>
                </div>
              </div>

              {/* 作成・更新 */}
              <div className="header-section">
                <div className="dates-grid">
                  <div className="date-item"><div>作成日時</div><div className="dv">{header.createdAt}</div></div>
                  <div className="date-item"><div>作成者</div><div className="dv">{header.createdBy}</div></div>
                  <div className="date-item" style={{ marginTop: 8 }}><div>最終更新日時</div><div className="dv">{header.updatedAt}</div></div>
                  <div className="date-item" style={{ marginTop: 8 }}><div>最終更新者</div><div className="dv">{header.updatedBy}</div></div>
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  {header.badges.map((b) => (
                    <span key={b} className={`badge ${b === '入金済' ? 'badge-success' : 'badge-info'}`}>{b}</span>
                  ))}
                </div>
              </div>

            </div>
            {/* 備考欄 */}
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--gray-2)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span className="field-label" style={{ paddingTop: 4 }}>備　考</span>
              <textarea className="form-input" rows={2} style={{ flex: 1, resize: 'vertical', fontSize: 11 }}
                value={he.remarks} onChange={(e) => setHE('remarks', e.target.value)} />
            </div>
          </div>

          {/* ── Tab bar ── */}
          <div className="tab-bar">
            {([['contact','①連絡先'],['send','②送付先'],['corr','③対応【年会費/研究会等】'],['withdraw','④退 会']] as const).map(([key, label]) => (
              <button key={key} className={`tab${activeTab === key ? ' active' : ''}`} onClick={() => setActiveTab(key)}>{label}</button>
            ))}
          </div>

          {/* ── ①連絡先 ── */}
          {activeTab === 'contact' && (
            <div className="tab-content">
              <div className="form-section">
                <div className="form-section-title">申込者 / 連絡担当者</div>
                <div className="form-grid form-grid-3">
                  <div className="form-row">
                    <label className="form-label">郵便番号 <span className="req">*</span></label>
                    <div className="form-inline">
                      <input className="form-input" value={contact.postalCode} onChange={(e) => setContact('postalCode', e.target.value)} />
                      <button className="btn" style={{ padding: '4px 8px', fontSize: 10 }}>住所検索</button>
                    </div>
                  </div>
                  <div className="form-row">
                    <label className="form-label">都道府県 <span className="req">*</span></label>
                    <select className="form-input" value={contact.prefecture} onChange={(e) => setContact('prefecture', e.target.value)}>
                      {['東京都','大阪府','神奈川県','愛知県','福岡県'].map((v) => <option key={v}>{v}</option>)}
                    </select>
                  </div>
                  <div className="form-row">
                    <label className="form-label">住所 <span className="req">*</span></label>
                    <input className="form-input" value={contact.address} onChange={(e) => setContact('address', e.target.value)} />
                  </div>
                  <div className="form-row">
                    <label className="form-label">TEL <span className="req">*</span></label>
                    <input className="form-input" value={contact.tel} onChange={(e) => setContact('tel', e.target.value)} />
                  </div>
                  <div className="form-row">
                    <label className="form-label">内線番号</label>
                    <input className="form-input" value={contact.extension} onChange={(e) => setContact('extension', e.target.value)} placeholder="内線番号" />
                  </div>
                  <div className="form-row">
                    <label className="form-label">FAX</label>
                    <input className="form-input" value={contact.fax} onChange={(e) => setContact('fax', e.target.value)} placeholder="FAX番号" />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="form-section-title">連絡担当者情報</div>
                <div className="form-grid form-grid-3">
                  <div className="form-row"><label className="form-label">担当者部署</label><input className="form-input" value={contact.contactDept} onChange={(e) => setContact('contactDept', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者役職</label><input className="form-input" value={contact.contactTitle} onChange={(e) => setContact('contactTitle', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者名 <span className="req">*</span></label><input className="form-input" value={contact.contactName} onChange={(e) => setContact('contactName', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者フリガナ</label><input className="form-input" value={contact.contactNameKana} onChange={(e) => setContact('contactNameKana', e.target.value)} /></div>
                  <div className="form-row" style={{ gridColumn: 'span 2' }}><label className="form-label">担当者メールアドレス <span className="req">*</span></label><input className="form-input" value={contact.contactEmail} onChange={(e) => setContact('contactEmail', e.target.value)} /></div>
                </div>
              </div>
              <div className="form-section">
                <div className="form-section-title">追加メールアドレス</div>
                <div className="form-grid form-grid-3">
                  {(['extraEmail1','extraEmail2','extraEmail3','otherEmail1','otherEmail2','otherEmail3'] as const).map((k, i) => (
                    <div key={k} className="form-row">
                      <label className="form-label">{i < 3 ? `メルアド${i+1}` : `その他メルアド${i-2}`}</label>
                      <input className="form-input" value={contact[k]} onChange={(e) => setContact(k, e.target.value)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── ②送付先 ── */}
          {activeTab === 'send' && (
            <div className="tab-content">
              <div className="form-section">
                <div className="form-section-title">会合連絡先</div>
                <div className="form-grid form-grid-3">
                  <div className="form-row"><label className="form-label">施設名</label><input className="form-input" value={send.meetingFacilityName} onChange={(e) => setSend('meetingFacilityName', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">住所</label><input className="form-input" value={send.meetingAddress} onChange={(e) => setSend('meetingAddress', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者名</label><input className="form-input" value={send.meetingContactName} onChange={(e) => setSend('meetingContactName', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者役職</label><input className="form-input" value={send.meetingContactTitle} onChange={(e) => setSend('meetingContactTitle', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">部署</label><input className="form-input" value={send.meetingDept} onChange={(e) => setSend('meetingDept', e.target.value)} /></div>
                </div>
              </div>
              <div className="form-section">
                <div className="form-section-title">請求書送付先</div>
                <div className="form-grid form-grid-3">
                  <div className="form-row"><label className="form-label">施設名</label><input className="form-input" value={send.invoiceFacilityName} onChange={(e) => setSend('invoiceFacilityName', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者名</label><input className="form-input" value={send.invoiceContactName} onChange={(e) => setSend('invoiceContactName', e.target.value)} /></div>
                  <div className="form-row"><label className="form-label">担当者メール</label><input className="form-input" value={send.invoiceContactEmail} onChange={(e) => setSend('invoiceContactEmail', e.target.value)} /></div>
                </div>
              </div>
            </div>
          )}

          {/* ── ③対応 ── */}
          {activeTab === 'corr' && (
            <div className="tab-content" style={{ padding: '10px 12px' }}>
              <div className="corr-table-wrap">
                <div className="corr-toolbar">
                  <button className="btn btn-primary" style={{ fontSize: 10, padding: '3px 10px' }}>対応新規</button>
                  <div className="toolbar-sep" />
                  <span style={{ fontSize: 10, color: 'var(--gray-5)' }}>対応種別絞込：</span>
                  <select className="form-input" style={{ width: 110, fontSize: 10, padding: '2px 5px' }}
                    value={corrFilter} onChange={(e) => setCorrFilter(e.target.value)}>
                    {['すべて','入会','研修会','問合せ','退会'].map((v) => <option key={v}>{v}</option>)}
                  </select>
                  <div className="corr-toolbar-right">
                    <button className="btn" style={{ fontSize: 10, padding: '3px 10px' }}>絞込</button>
                  </div>
                </div>
                <table className="corr-table">
                  <thead>
                    <tr>
                      <th style={{ width: 80 }}>対応</th>
                      <th style={{ width: 90 }}>日付</th>
                      <th>内容</th>
                      <th style={{ width: 80 }}>対応状態</th>
                      <th style={{ width: 90 }}>通知日</th>
                      <th style={{ width: 90 }}>完了日</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCorr.map((c) => (
                      <tr key={c.id} className={selectedCorrId === c.id ? 'selected' : ''} onClick={() => setSelectedCorrId(c.id)}>
                        <td>{corrTypeBadge(c.corrType)}</td>
                        <td>{c.date}</td>
                        <td style={{ fontSize: 10, color: c.corrType === '問合せ' ? 'var(--gray-5)' : undefined }}>{c.content}</td>
                        <td>{corrStatusBadge(c.status)}</td>
                        <td style={{ color: c.noticeDate === '—' ? 'var(--gray-4)' : undefined }}>{c.noticeDate}</td>
                        <td style={{ color: c.completedDate === '—' ? 'var(--gray-4)' : undefined }}>{c.completedDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 選択中の詳細プレビュー */}
              {selectedCorr && (
                <div style={{ marginTop: 12, border: '1px solid var(--blue-lt)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--blue)', color: '#fff', padding: '5px 12px', fontSize: 11, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>◆ {selectedCorr.corrType} — 詳細</span>
                    {corrStatusBadge(selectedCorr.status)}
                  </div>
                  <div style={{ padding: '10px 14px', background: 'var(--white)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px 16px' }}>
                      <div className="form-row">
                        <label className="form-label">関連Id</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <input className="form-input" value={selectedCorr.relatedId || ''} style={{ width: 60 }}
                            onChange={(e) => setCorr(selectedCorr.id, 'relatedId', parseInt(e.target.value) || 0)} />
                          <span style={{ fontSize: 11, color: 'var(--blue)' }}>{selectedCorr.relatedName}</span>
                        </div>
                      </div>
                      <div className="form-row">
                        <label className="form-label">内容</label>
                        <input className="form-input" value={selectedCorr.detail}
                          onChange={(e) => setCorr(selectedCorr.id, 'detail', e.target.value)} />
                      </div>
                      <div className="form-row">
                        <label className="form-label">対応状態</label>
                        <select className="form-input" value={selectedCorr.corrState}
                          onChange={(e) => setCorr(selectedCorr.id, 'corrState', e.target.value)}>
                          {['承諾','請求','入金済','問合せ','通知済','変更済'].map((v) => <option key={v}>{v}</option>)}
                        </select>
                      </div>
                      <div className="form-row">
                        <label className="form-label">期日</label>
                        <input className="form-input" value={selectedCorr.dueDate}
                          onChange={(e) => setCorr(selectedCorr.id, 'dueDate', e.target.value)} />
                      </div>
                      <div className="form-row">
                        <label className="form-label">完了日</label>
                        <input className="form-input" value={selectedCorr.completedDate}
                          onChange={(e) => setCorr(selectedCorr.id, 'completedDate', e.target.value)} />
                      </div>
                      <div className="form-row">
                        <label className="form-label">会員側備考</label>
                        <input className="form-input" value={selectedCorr.memberRemark}
                          onChange={(e) => setCorr(selectedCorr.id, 'memberRemark', e.target.value)} />
                      </div>
                      <div className="form-row">
                        <label className="form-label">請求書No</label>
                        <input className="form-input readonly" value={selectedCorr.invoiceNo} readOnly />
                      </div>
                      <div className="form-row">
                        <label className="form-label">費用（税抜）</label>
                        <input className="form-input readonly" value={selectedCorr.feeExTax} readOnly />
                      </div>
                      <div className="form-row">
                        <label className="form-label">入金額</label>
                        <input className="form-input readonly" value={selectedCorr.paidAmount} readOnly />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 8, justifyContent: 'flex-end' }}>
                      <button className="btn" style={{ fontSize: 10 }}>請求書表示</button>
                      <button className="btn" style={{ fontSize: 10 }}>領収書表示</button>
                      <button className="btn btn-success" style={{ fontSize: 10 }} onClick={handleSave}>保 存</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── ④退会 ── */}
          {activeTab === 'withdraw' && (
            <div className="tab-content">
              <div className="withdraw-section">
                <div className="field-row">
                  <label className="flag-item" style={{ fontSize: 12, gap: 8 }}>
                    <input type="checkbox" style={{ width: 16, height: 16 }}
                      checked={withdraw.withdrawRequested}
                      onChange={(e) => setWithdraw('withdrawRequested', e.target.checked)} />
                    <strong>退会届</strong>
                  </label>
                  {withdraw.withdrawRequested && (
                    <span style={{ fontSize: 10, color: 'var(--danger)', marginLeft: 10 }}>
                      ※ チェック後「保存」すると、会員宛に退会手続き通知メール（Mtpl-0021）が自動送信されます
                    </span>
                  )}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
                  <div className="form-row">
                    <label className="form-label">退会日</label>
                    <input className="form-input readonly" value={withdraw.withdrawDate || '— 退会手続き完了後に自動セット —'} readOnly />
                  </div>
                  <div className="form-row">
                    <label className="form-label">退会理由その他</label>
                    <input className="form-input" placeholder="自由記述（その他を選択した場合）"
                      value={withdraw.withdrawReasonOther}
                      onChange={(e) => setWithdraw('withdrawReasonOther', e.target.value)} />
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div className="form-label" style={{ marginBottom: 6 }}>退会理由（複数選択可）</div>
                  <div className="reason-grid">
                    {(['施設の方針変更','組織統廃合','閉院・廃止','経費削減','人員不足','魅力がない','協会数の変更・退職','その他'] as WithdrawReason[]).map((r) => (
                      <label key={r} className="reason-item">
                        <input type="checkbox"
                          checked={withdraw.withdrawReasons.includes(r)}
                          onChange={(e) => {
                            const next = e.target.checked
                              ? [...withdraw.withdrawReasons, r]
                              : withdraw.withdrawReasons.filter((x) => x !== r);
                            setWithdraw('withdrawReasons', next);
                          }} />
                        {r}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="note-row">
                <span className="icon">ℹ</span>
                <span>退会依頼を受けたら、まず「退会届」にチェックを入れて保存してください。会員宛に退会手続き通知メールが送信されます。<br />
                  会員からマイページで退会申請が完了したら、③対応タブから「退会依頼」行を開き、対応状態を「承認」に変更して保存することで退会が確定します。</span>
              </div>
            </div>
          )}

          {/* ── Status strip ── */}
          <div className="status-strip">
            <div className="item"><span className="dot" />フォームビュー</div>
            <div className="item">会員No: {header.memberNo} — {header.corporateName} / {header.facilityName}</div>
            <div style={{ marginLeft: 'auto' }} className="item">NumLock　　</div>
          </div>

        </div>
      </div>

      {/* ── 入会承認モーダル ── */}
      {showApproveModal && (
        <div className="modal-backdrop open" onClick={(e) => e.target === e.currentTarget && setShowApproveModal(false)}>
          <div className="modal">
            <div className="modal-title-bar">処理確認</div>
            <div className="modal-body">
              <p style={{ fontSize: 12, fontWeight: 'bold', color: 'var(--navy)', marginBottom: 12 }}>── 入会申込承認確認 ──</p>
              <table className="modal-table">
                <tbody>
                  <tr><td>【会員区分】</td><td>{he.memberType}</td></tr>
                  <tr><td>【法人名】</td><td>{header.corporateName}</td></tr>
                  <tr><td>【施設名】</td><td>{header.facilityName}</td></tr>
                  <tr><td>【登録者】</td><td>{header.createdBy}</td></tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => { setShowApproveModal(false); showToast('入会承認しました。'); }}>はい(Y)</button>
              <button className="btn" onClick={() => setShowApproveModal(false)}>いいえ(N)</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toastVisible && <div className="toast">{toastMsg}</div>}
    </div>
  );
}
