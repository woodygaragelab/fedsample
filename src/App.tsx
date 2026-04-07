import React, { useEffect, useRef, useState, useCallback } from 'react';
import { dummyApi, MemberData } from './api/dummyApi';
import './App.css';

interface ToastItem { id: number; message: string; success: boolean }
function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const counter = useRef(0);
  const show = useCallback((message: string, success = true) => {
    const id = ++counter.current;
    setToasts((t) => [...t, { id, message, success }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800);
  }, []);
  return { toasts, show };
}

interface CardProps { badge: string; title: string; titleEn: string; headerColor?: string; children: React.ReactNode; defaultOpen?: boolean }
function CollapsibleCard({ badge, title, titleEn, headerColor = 'var(--navy)', children, defaultOpen = true }: CardProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card">
      <div className="card-header" style={{ background: headerColor }} onClick={() => setOpen(!open)}>
        <div className="card-header-left">
          <span className="card-header-badge">{badge}</span>
          <span className="card-title">{title}<span className="card-title-en">{titleEn}</span></span>
        </div>
        <span className={`card-toggle${open ? '' : ' collapsed'}`}>▼</span>
      </div>
      <div className={`card-body-wrapper${open ? '' : ' collapsed'}`}>
        {children}
      </div>
    </div>
  );
}

interface FieldProps { label: string; labelEn?: string; required?: boolean; readOnly?: boolean; children: React.ReactNode; fullWidth?: boolean }
function Field({ label, labelEn, required, readOnly, children, fullWidth }: FieldProps) {
  return (
    <div className={`field${fullWidth ? ' full-width' : ''}`}>
      <label className="field-label">
        {label}
        {labelEn && <span className="field-label-en">{labelEn}</span>}
        {required && <span className="required-badge">必須</span>}
        {readOnly && <span className="readonly-badge">READ ONLY</span>}
      </label>
      {children}
    </div>
  );
}

export default function App() {
  const [data, setData] = useState<MemberData | null>(null);
  const [form, setForm] = useState<MemberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeNav, setActiveNav] = useState('会員管理');
  const { toasts, show: showToast } = useToast();

  useEffect(() => {
    dummyApi.fetchMember().then((d) => { setData(d); setForm(d); setLoading(false); });
  }, []);

  const set = (key: keyof MemberData, value: unknown) =>
    setForm((f) => f ? { ...f, [key]: value } : f);

  const isOvertimeExpired = form ? new Date(form.overtimeAgreementExpiry) < new Date() : false;
  const isLicenseMissing = form ? !form.dispatchLicenseNo.trim() : true;
  const isLaborMethod = form?.treatmentMethod === 'labor';

  const handleUpdate = () => {
    if (isLicenseMissing) { showToast('❌ 派遣許可番号を入力してください。', false); return; }
    setShowModal(true);
  };

  const handleConfirm = async () => {
    setShowModal(false); setSaving(true);
    try { const res = await dummyApi.updateMember(form!); setData({ ...form! }); showToast('✅ ' + res.message, true); }
    finally { setSaving(false); }
  };

  const handleCancel = () => { setForm(data ? { ...data } : null); showToast('編集をキャンセルしました。', false); };

  const navItems = ['受発注', '請求・精算', '要員管理', '会員管理', '受発注マスタ', 'お知らせ'];
  const sidebarGroups = [
    { label: '会員情報', items: [{ icon: '🏢', label: '会員管理', active: true }, { icon: '🏬', label: '部門管理' }, { icon: '📊', label: '利用状況' }] },
    { label: '利用者管理', items: [{ icon: '👤', label: '利用者' }, { icon: '📋', label: '一括登録' }] },
  ];

  return (
    <div className="app-root">
      <nav className="topbar">
        <div className="topbar-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" fill="#f59e0b" opacity=".85" />
          </svg>
          Meee<span>pa</span>
        </div>
        <div className="topbar-nav">
          {navItems.map((item) => (
            <div key={item} className={`topbar-nav-item${activeNav === item ? ' active' : ''}`} onClick={() => setActiveNav(item)}>{item}</div>
          ))}
        </div>
        <div className="topbar-right">
          <div className="topbar-user">
            <div className="topbar-avatar">受注</div>
            <span>受注テスト会社</span>
          </div>
        </div>
      </nav>

      <div className="breadcrumb-bar">
        <a href="#top">会員管理</a><span className="sep">›</span>
        <a href="#top">会員情報</a><span className="sep">›</span>
        <span className="current">会員管理</span>
      </div>

      <div className="layout">
        <aside className="sidebar">
          {sidebarGroups.map((g) => (
            <div className="sidebar-group" key={g.label}>
              <div className="sidebar-group-label">{g.label}</div>
              {g.items.map((item) => (
                <div key={item.label} className={`sidebar-item${(item as any).active ? ' active' : ''}`}>
                  <span className="sidebar-icon">{item.icon}</span>{item.label}
                </div>
              ))}
            </div>
          ))}
        </aside>

        <main className="main">
          <div className="page-header">
            <div className="page-title-group">
              <div className="page-title">会員管理</div>
              <div className="page-subtitle">SCR-001 &nbsp;/&nbsp; Member Management &nbsp;|&nbsp; M_MEMBER</div>
            </div>
          </div>

          {loading ? (
            <div className="loading-state"><div className="spinner" /><span>データを読み込んでいます...</span></div>
          ) : form ? (
            <>
              {isLicenseMissing && (
                <div className="alert alert-warn">
                  <span className="alert-icon">⚠️</span>
                  <div><strong>派遣に関する項目が未設定です。</strong><br />
                    派遣契約の見積を作成する前に、下記「派遣に関する項目」セクションを設定してください。</div>
                </div>
              )}

              <CollapsibleCard badge="SEC-01" title="会員情報" titleEn="Member Info">
                <div className="card-body">
                  <div className="info-row" style={{ gridColumn: '1/-1' }}>
                    <div className="info-item"><span className="info-item-label">会員ID / Member ID</span><span className="info-item-value">{form.memberId}</span></div>
                    <div className="info-item"><span className="info-item-label">登録日 / Registration Date</span><span className="info-item-value">{form.registrationDate}</span></div>
                    <div className="info-item"><span className="info-item-label">ステータス</span><span className="info-item-value" style={{ color: 'var(--success)', fontSize: 13 }}>● 有効</span></div>
                  </div>
                </div>
              </CollapsibleCard>

              <CollapsibleCard badge="SEC-02" title="36協定に関する項目" titleEn="36-Agreement Items">
                <div className="card-body three-col">
                  <Field label="就業日外労働日数（月）" labelEn="Extra Workdays / Month">
                    <div className="input-with-unit">
                      <input type="number" className="field-input" value={form.extraWorkdaysPerMonth} min={0} max={31}
                        onChange={(e) => set('extraWorkdaysPerMonth', parseInt(e.target.value) || 0)} />
                      <span className="input-unit">日 / days</span>
                    </div>
                  </Field>
                  <Field label="最大時間外労働時間（日）" labelEn="Max OT Hours / Day">
                    <div className="input-with-unit">
                      <input type="number" className="field-input" value={form.maxOtHoursPerDay} min={0} max={24}
                        onChange={(e) => set('maxOtHoursPerDay', parseInt(e.target.value) || 0)} />
                      <span className="input-unit">h</span>
                    </div>
                  </Field>
                  <Field label="最大時間外労働時間（月）" labelEn="Max OT Hours / Month">
                    <div className="input-with-unit">
                      <input type="number" className="field-input" value={form.maxOtHoursPerMonth} min={0}
                        onChange={(e) => set('maxOtHoursPerMonth', parseInt(e.target.value) || 0)} />
                      <span className="input-unit">h</span>
                    </div>
                  </Field>
                  <Field label="最大時間外労働時間（年）" labelEn="Max OT Hours / Year">
                    <div className="input-with-unit">
                      <input type="number" className="field-input" value={form.maxOtHoursPerYear} min={0}
                        onChange={(e) => set('maxOtHoursPerYear', parseInt(e.target.value) || 0)} />
                      <span className="input-unit">h</span>
                    </div>
                  </Field>
                  <Field label="36協定有効期限" labelEn="36-Agreement Expiry">
                    <div className="date-wrapper">
                      <input type="date" className={`field-input${isOvertimeExpired ? ' warn-field' : ''}`}
                        value={form.overtimeAgreementExpiry}
                        onChange={(e) => set('overtimeAgreementExpiry', e.target.value)} />
                      <span className="date-icon">📅</span>
                    </div>
                    {isOvertimeExpired && (
                      <><span className="check-tag warn">△ 警告: 有効期限が過去の日付です</span>
                        <span className="field-hint warn">見積作成時に警告が表示されますが処理を続行できます。</span></>
                    )}
                  </Field>
                  <div />
                  <div className="divider" />
                  <Field label="36協定に関する備考" labelEn="36-Agreement Remarks" fullWidth>
                    <textarea className="field-textarea" rows={3} value={form.overtimeRemarks}
                      onChange={(e) => set('overtimeRemarks', e.target.value)} />
                  </Field>
                  <Field label="特別条項" labelEn="Special Provision" fullWidth>
                    <textarea className="field-textarea" rows={3} value={form.specialProvision}
                      onChange={(e) => set('specialProvision', e.target.value)} />
                  </Field>
                </div>
              </CollapsibleCard>

              <CollapsibleCard badge="SEC-03" title="派遣に関する項目" titleEn="Dispatch Items" headerColor="var(--blue)">
                <div className="card-body">
                  <Field label="派遣許可番号 / 届出受理番号" labelEn="Dispatch License No." required>
                    <input type="text" className={`field-input${isLicenseMissing ? ' error-field' : ''}`}
                      value={form.dispatchLicenseNo} placeholder="例：派001-1234"
                      onChange={(e) => set('dispatchLicenseNo', e.target.value)} />
                    {isLicenseMissing && <span className="field-hint error">未設定です。派遣契約の見積作成前に入力してください。</span>}
                  </Field>
                  <Field label="待遇決定方式" labelEn="Treatment Method">
                    <select className="field-select" value={form.treatmentMethod}
                      onChange={(e) => set('treatmentMethod', e.target.value)}>
                      <option value="">── 選択してください ──</option>
                      <option value="labor">労使協定方式</option>
                      <option value="equal">派遣先均等均衡方式</option>
                    </select>
                  </Field>
                  {(form.treatmentMethod === 'labor' || form.treatmentMethod === '') && (
                    <Field label="労使協定有効期限" labelEn="Labor Agreement Expiry" required={isLaborMethod}>
                      <div className="date-wrapper">
                        <input type="date" className="field-input" value={form.laborAgreementExpiry}
                          onChange={(e) => set('laborAgreementExpiry', e.target.value)} />
                        <span className="date-icon">📅</span>
                      </div>
                      <span className="field-hint">
                        {isLaborMethod ? '待遇決定方式が「労使協定方式」の場合に確認されます。' : '現在の待遇決定方式ではチェックされません。'}
                      </span>
                    </Field>
                  )}
                </div>
              </CollapsibleCard>
            </>
          ) : null}
        </main>
      </div>

      {!loading && (
        <div className="action-bar">
          <button className="btn btn-ghost" onClick={handleCancel} disabled={saving}>キャンセル</button>
          <button className="btn btn-primary" onClick={handleUpdate} disabled={saving}>
            {saving ? (<><span className="btn-spinner" />保存中...</>) : (
              <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>更新</>
            )}
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal-backdrop open" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="modal">
            <div className="modal-icon">💾</div>
            <div className="modal-title">更新します。よろしいですか？</div>
            <div className="modal-body">入力内容をM_MEMBERテーブルに保存し、<br />フレンドの協力会社マスタに連携します。</div>
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowModal(false)}>キャンセル</button>
              <button className="btn btn-primary" onClick={handleConfirm}>OK</button>
            </div>
          </div>
        </div>
      )}

      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast${t.success ? ' success' : ''}`}>{t.message}</div>
        ))}
      </div>
    </div>
  );
}
