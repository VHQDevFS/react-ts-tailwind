import dayjs from 'dayjs';

const SIGNATURE = 'signature';

interface Auth {
  accessToken: string;
  expiredAt: string;
  refreshToken: string;
  email?: string;
}

export function getStoredAuth(): Auth | null {
  const storedAuth = typeof window !== 'undefined' ? localStorage.getItem(SIGNATURE) : '';
  return storedAuth ? JSON.parse(storedAuth) : null;
}

export function checkUnauthorized(): string {
  const now: number = dayjs().unix();
  const signature: Auth | null = getStoredAuth();
  const accessToken: string | null = signature ? signature.accessToken : null;
  const expiredAt: number = signature ? +signature.expiredAt : 0;
  if (!!accessToken && +now < +expiredAt) return accessToken;
  return '';
}

export function setStoredAuth(auth: Auth): void {
  localStorage.setItem(SIGNATURE, JSON.stringify(auth));
}

export function clearStoredAuth(): void {
  localStorage.removeItem(SIGNATURE);
}

// Set localStorage common
export function getLocalStored(key: string) {
  const stored = typeof window !== 'undefined' ? localStorage.getItem(key) : '';
  return stored ? JSON.parse(stored) : null;
}

export function setLocalStored(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function clearLocalStored(key: string): void {
  localStorage.removeItem(key);
}
