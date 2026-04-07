// ── Dummy API ─────────────────────────────────────────────────────────────
// Simulates async backend calls with realistic latency

export interface MemberData {
  memberId: string;
  registrationDate: string;
  status: 'active' | 'inactive';
  // SEC-02: 36協定
  extraWorkdaysPerMonth: number;
  maxOtHoursPerDay: number;
  maxOtHoursPerMonth: number;
  maxOtHoursPerYear: number;
  overtimeAgreementExpiry: string;
  overtimeRemarks: string;
  specialProvision: string;
  // SEC-03: 派遣
  dispatchLicenseNo: string;
  treatmentMethod: 'labor' | 'equal' | '';
  laborAgreementExpiry: string;
}

const INITIAL_DATA: MemberData = {
  memberId: '00000579',
  registrationDate: '2019-03-11',
  status: 'active',
  extraWorkdaysPerMonth: 2,
  maxOtHoursPerDay: 11,
  maxOtHoursPerMonth: 45,
  maxOtHoursPerYear: 360,
  overtimeAgreementExpiry: '2022-11-30',
  overtimeRemarks:
    '休日労働を行う場合は、就業させることができる法定休日は1ヶ月に2日まで、始業0:00〜終業24:00とする。',
  specialProvision:
    '突発的な仕様変更が生じた場合は年4回を限度として、1ヶ月80時間、1年間で700時間まで延長することができる。',
  dispatchLicenseNo: '',
  treatmentMethod: 'labor',
  laborAgreementExpiry: '2038-11-01',
};

let _store: MemberData = { ...INITIAL_DATA };

function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export const dummyApi = {
  async fetchMember(): Promise<MemberData> {
    await delay(600);
    return { ..._store };
  },

  async updateMember(data: MemberData): Promise<{ ok: boolean; message: string }> {
    await delay(900);
    _store = { ...data };
    return { ok: true, message: '更新しました。協力会社マスタに連携しました。' };
  },
};
