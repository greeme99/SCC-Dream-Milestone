/**
 * ENT-001: AuthSession & Web Crypto HMAC-SHA256 Cookie Utilities
 * Works in both Next.js Edge Middleware and Route Handlers with zero external dependencies.
 */

export const SESSION_COOKIE_NAME = 'dm_session';
export const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

export interface SessionPayload {
  role: 'COACH';
  iat: number;
  exp: number;
}

function getSharedPassword(): string {
  return process.env.COACH_SHARED_PASSWORD || 'scc2026';
}

function getHmacSecret(): string {
  return process.env.SESSION_HMAC_SECRET || 'scc-dream-milestone-hmac-secret-default-2026';
}

/**
 * Constant-time string comparison to prevent timing side-channel attacks.
 */
export function verifyPasswordConstantTime(input: string, expected: string = getSharedPassword()): boolean {
  if (typeof input !== 'string' || input.length === 0 || input.length > 128) {
    return false;
  }
  const encoder = new TextEncoder();
  const a = encoder.encode(input);
  const b = encoder.encode(expected);
  const len = Math.max(a.length, b.length);
  let diff = a.length ^ b.length;
  for (let i = 0; i < len; i++) {
    diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  }
  return diff === 0;
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str: string): Uint8Array {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function signHmacSha256(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return toBase64Url(new Uint8Array(signature));
}

export async function createSessionToken(
  nowSeconds: number = Math.floor(Date.now() / 1000),
  secret: string = getHmacSecret()
): Promise<{ token: string; payload: SessionPayload }> {
  const payload: SessionPayload = {
    role: 'COACH',
    iat: nowSeconds,
    exp: nowSeconds + SESSION_TTL_SECONDS
  };
  const encoder = new TextEncoder();
  const payloadB64 = toBase64Url(encoder.encode(JSON.stringify(payload)));
  const sig = await signHmacSha256(payloadB64, secret);
  return {
    token: `${payloadB64}.${sig}`,
    payload
  };
}

export async function verifySessionToken(
  token: string | undefined | null,
  nowSeconds: number = Math.floor(Date.now() / 1000),
  secret: string = getHmacSecret()
): Promise<SessionPayload | null> {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payloadB64, sig] = parts;
  if (!payloadB64 || !sig) return null;

  try {
    const expectedSig = await signHmacSha256(payloadB64, secret);
    if (!verifyPasswordConstantTime(sig, expectedSig)) {
      return null;
    }
    const decoded = new TextDecoder().decode(fromBase64Url(payloadB64));
    const payload = JSON.parse(decoded) as SessionPayload;
    if (payload.role !== 'COACH' || typeof payload.exp !== 'number') {
      return null;
    }
    if (payload.exp <= nowSeconds) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

/**
 * Prevents open redirect vulnerabilities (TC-004): only allows internal portal paths.
 */
export function sanitizeNextPath(nextParam: string | null | undefined): string {
  if (!nextParam || typeof nextParam !== 'string') return '/overview';
  const trimmed = nextParam.trim();
  if (!trimmed.startsWith('/') || trimmed.startsWith('//') || trimmed.includes('://')) {
    return '/overview';
  }
  const allowedPrefixes = ['/overview', '/model', '/references'];
  if (allowedPrefixes.some((prefix) => trimmed === prefix || trimmed.startsWith(`${prefix}/`) || trimmed.startsWith(`${prefix}?`))) {
    return trimmed;
  }
  return '/overview';
}
