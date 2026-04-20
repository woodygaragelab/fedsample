import { signIn, signOut, fetchAuthSession } from 'aws-amplify/auth';

export interface AuthUser {
  id: string;
  name: string;
  role: 'admin' | 'member';
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

async function buildLoginResponse(forceRefresh = false): Promise<LoginResponse> {
  const session = await fetchAuthSession({ forceRefresh });
  if (!session.tokens?.idToken) throw new Error('セッション取得に失敗しました。');

  const payload = session.tokens.idToken.payload;
  const groups = payload['cognito:groups'] as string[] | undefined;
  const role: 'admin' | 'member' = groups?.includes('admin') ? 'admin' : 'member';
  const username = (payload['cognito:username'] ?? payload.sub) as string;

  return {
    token: session.tokens.idToken.toString(),
    user: { id: username, name: username, role },
  };
}

export async function getSessionUser(): Promise<LoginResponse | null> {
  try {
    return await buildLoginResponse();
  } catch {
    return null;
  }
}

export async function adminLogin(userId: string, password: string): Promise<LoginResponse> {
  const result = await signIn({ username: userId, password });
  if (result.nextStep.signInStep !== 'DONE') {
    throw new Error('追加の認証ステップが必要です。');
  }

  const response = await buildLoginResponse(true);
  if (response.user.role !== 'admin') {
    await signOut();
    throw new Error('管理者権限がありません。');
  }
  return response;
}

export async function webLogin(memberNo: string, password: string): Promise<LoginResponse> {
  const result = await signIn({ username: memberNo, password });
  if (result.nextStep.signInStep !== 'DONE') {
    throw new Error('追加の認証ステップが必要です。');
  }

  const response = await buildLoginResponse(true);
  if (response.user.role !== 'member') {
    await signOut();
    throw new Error('会員権限がありません。');
  }
  return response;
}

export async function logoutApi(): Promise<void> {
  await signOut();
}
