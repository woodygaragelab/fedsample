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

// VITE_API_BASE_URL が設定されている場合は直接呼び出し、未設定時は vite proxy 経由
const BASE = import.meta.env.VITE_API_BASE_URL ?? '';

export async function searchMembers(params: MemberSearchParams): Promise<MemberSearchResponse> {
  const query = new URLSearchParams({
    keyword: params.keyword,
    excludeWithdrawal: String(params.excludeWithdrawal),
    pageSize: String(params.pageSize),
    page: String(params.page),
  });
  const res = await fetch(`${BASE}/api/members/search?${query}`);
  if (!res.ok) throw new Error(`検索に失敗しました (${res.status})`);
  return res.json() as Promise<MemberSearchResponse>;
}
