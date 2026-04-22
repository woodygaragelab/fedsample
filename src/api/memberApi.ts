export interface MemberSearchParams {
  keyword: string;
  excludeWithdrawal: boolean;
  pageSize: number;
  page: number;
}

export interface MemberRecord {
  id: number;
  memberNo: string;
  memberType: string;
  corporateName: string;
  facilityName: string;
  joinDate: string;
  prefecture: string;
}

export interface MemberSearchResponse {
  total: number;
  members: MemberRecord[];
}

// ローカル: vite proxy 経由で /api prefix を付ける
// 本番: VITE_API_BASE_URL に API Gateway の URL を設定し /api prefix なしで呼ぶ
const BASE = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL
  : '/api';

export async function searchMembers(params: MemberSearchParams): Promise<MemberSearchResponse> {
  const query = new URLSearchParams({
    keyword: params.keyword,
    excludeWithdrawal: String(params.excludeWithdrawal),
    pageSize: String(params.pageSize),
    page: String(params.page),
  });
  const res = await fetch(`${BASE}/members/search?${query}`);
  if (!res.ok) throw new Error(`検索に失敗しました (${res.status})`);
  return res.json() as Promise<MemberSearchResponse>;
}
