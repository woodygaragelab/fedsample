// ── Data Models ────────────────────────────────────────────────────────────

export type MemberType = '正会員' | '個人会員' | '賛助会員' | '非会員';
export type FacilityType = '病院' | 'クリニック' | '老健' | '特養' | '';
export type CorrType = '入会' | '研修会' | '問合せ' | '登録変更' | '退会依頼';
export type CorrStatus = '承諾' | '請求' | '入金済' | '通知済' | '問合せ' | '変更済';
export type WithdrawReason =
  | '施設の方針変更' | '組織統廃合' | '閉院・廃止' | '経費削減'
  | '人員不足' | '魅力がない' | '協会数の変更・退職' | 'その他';

/** ヘッダー（読み取り専用） */
export interface MemberHeader {
  memberNo: string;         // A2008
  memberId: number;         // 690
  memberType: MemberType;
  joinDate: string;         // YYYY/MM/DD
  corporateName: string;
  corporateNameKana: string;
  facilityName: string;
  facilityNameKana: string;
  representative: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  badges: string[];         // ['正会員','入金済']
}

/** ヘッダー編集可能フィールド */
export interface MemberHeaderEditable {
  memberType: MemberType;
  facilityType: FacilityType;
  feeNotBilled: boolean;
  feeNotSent: boolean;
  isDirector: boolean;
  myPageEmail: string;
  remarks: string;
}

/** ①連絡先タブ */
export interface ContactInfo {
  postalCode: string;
  prefecture: string;
  address: string;
  tel: string;
  extension: string;
  fax: string;
  contactDept: string;
  contactTitle: string;
  contactName: string;
  contactNameKana: string;
  contactEmail: string;
  extraEmail1: string;
  extraEmail2: string;
  extraEmail3: string;
  otherEmail1: string;
  otherEmail2: string;
  otherEmail3: string;
}

/** ②送付先タブ */
export interface SendInfo {
  meetingFacilityName: string;
  meetingAddress: string;
  meetingContactName: string;
  meetingContactTitle: string;
  meetingDept: string;
  invoiceFacilityName: string;
  invoiceContactName: string;
  invoiceContactEmail: string;
}

/** ③対応レコード */
export interface CorrRecord {
  id: number;
  corrType: CorrType;
  date: string;
  content: string;
  status: CorrStatus;
  noticeDate: string;
  completedDate: string;
  // 詳細
  relatedId: number;
  relatedName: string;
  detail: string;
  corrState: string;
  dueDate: string;
  memberRemark: string;
  invoiceNo: string;
  feeExTax: string;
  paidAmount: string;
}

/** ④退会タブ */
export interface WithdrawInfo {
  withdrawRequested: boolean;
  withdrawDate: string;
  withdrawReasonOther: string;
  withdrawReasons: WithdrawReason[];
}

/** 会員全体 */
export interface MemberData {
  header: MemberHeader;
  headerEditable: MemberHeaderEditable;
  contact: ContactInfo;
  send: SendInfo;
  corrections: CorrRecord[];
  withdraw: WithdrawInfo;
}

// ── Dummy Data ─────────────────────────────────────────────────────────────

const DUMMY_MEMBER: MemberData = {
  header: {
    memberNo: 'A2008',
    memberId: 690,
    memberType: '正会員',
    joinDate: '2021/07/14',
    corporateName: '医療法人Aサンプル会',
    corporateNameKana: 'イリョウホウジンAサンプルカイ',
    facilityName: 'サンプルリハ病院',
    facilityNameKana: 'サンプルリハビョウイン',
    representative: '代表　芝公園 太郎',
    createdAt: '2021/07/14 18:26',
    createdBy: '担当者1',
    updatedAt: '2021/07/14 19:03',
    updatedBy: '担当者1',
    badges: ['正会員', '入金済'],
  },
  headerEditable: {
    memberType: '正会員',
    facilityType: '病院',
    feeNotBilled: false,
    feeNotSent: false,
    isDirector: true,
    myPageEmail: 'admin@sample-rehab.com',
    remarks: '',
  },
  contact: {
    postalCode: '〒 1050011',
    prefecture: '東京都',
    address: '東京都港区芝公園1－1',
    tel: '03-1111-1010',
    extension: '',
    fax: '',
    contactDept: '無し',
    contactTitle: '代表',
    contactName: '芝公園 太郎',
    contactNameKana: 'シバコウエン タロウ',
    contactEmail: 'shibakouen@aaa.com',
    extraEmail1: '', extraEmail2: '', extraEmail3: '',
    otherEmail1: '', otherEmail2: '', otherEmail3: '',
  },
  send: {
    meetingFacilityName: 'サンプルリハ病院',
    meetingAddress: '〒1050011 東京都港区芝公園1－1',
    meetingContactName: '芝公園 太郎',
    meetingContactTitle: '代表',
    meetingDept: '無し',
    invoiceFacilityName: 'サンプルリハ病院',
    invoiceContactName: '芝公園 太郎',
    invoiceContactEmail: 'shibakouen@aaa.com',
  },
  corrections: [
    {
      id: 1, corrType: '問合せ', date: '2021/07/26',
      content: 'お問合せ：具体的なお問い合わせ内容を記載します',
      status: '問合せ', noticeDate: '—', completedDate: '—',
      relatedId: 0, relatedName: '', detail: '', corrState: '問合せ',
      dueDate: '', memberRemark: '', invoiceNo: '', feeExTax: '', paidAmount: '',
    },
    {
      id: 2, corrType: '研修会', date: '2021/07/24',
      content: '【研修会】テスト研修300（正会員）',
      status: '通知済', noticeDate: '2021/08/20', completedDate: '—',
      relatedId: 5, relatedName: 'テスト研修300', detail: '申込', corrState: '通知済',
      dueDate: '2021/08/20', memberRemark: '', invoiceNo: '', feeExTax: '', paidAmount: '',
    },
    {
      id: 3, corrType: '研修会', date: '2021/07/24',
      content: '【研修会】テスト研修200（正会員）',
      status: '請求', noticeDate: '2021/08/25', completedDate: '2021/07/30',
      relatedId: 4, relatedName: 'テスト研修200', detail: '申込', corrState: '請求済',
      dueDate: '2021/08/25', memberRemark: '', invoiceNo: 'SKI-000843', feeExTax: '¥30,000', paidAmount: '',
    },
    {
      id: 4, corrType: '登録変更', date: '2021/07/15',
      content: '登録情報変更', status: '変更済',
      noticeDate: '2021/07/22', completedDate: '2021/07/19',
      relatedId: 0, relatedName: '', detail: '変更申請', corrState: '変更済',
      dueDate: '2021/07/22', memberRemark: '', invoiceNo: '', feeExTax: '', paidAmount: '',
    },
    {
      id: 5, corrType: '入会', date: '2021/07/14',
      content: '（正会員）2021年度入会時年会費',
      status: '入金済', noticeDate: '2021/07/24', completedDate: '2021/07/14',
      relatedId: 6, relatedName: '2021年度入会時年会費', detail: '申込', corrState: '入金済',
      dueDate: '2021/07/24', memberRemark: '入会受付No:530-801',
      invoiceNo: 'SKI-000844', feeExTax: '¥60,000', paidAmount: '¥60,000',
    },
  ],
  withdraw: {
    withdrawRequested: false,
    withdrawDate: '',
    withdrawReasonOther: '',
    withdrawReasons: ['経費削減'],
  },
};

// ── API ────────────────────────────────────────────────────────────────────

let _store: MemberData = JSON.parse(JSON.stringify(DUMMY_MEMBER));

function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export const dummyApi = {
  async fetchMember(): Promise<MemberData> {
    await delay(500);
    return JSON.parse(JSON.stringify(_store));
  },
  async saveMember(data: MemberData): Promise<{ ok: boolean; message: string }> {
    await delay(700);
    _store = JSON.parse(JSON.stringify(data));
    return { ok: true, message: '保存完了' };
  },
};
