import { NextRequest, NextResponse } from 'next/server';
import {
  SESSION_COOKIE_NAME,
  sanitizeNextPath,
  verifySessionToken
} from '@/lib/auth-cookie';

const PROTECTED_PREFIXES = ['/overview', '/model', '/references'];

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = await verifySessionToken(token);
  const isAuthenticated = Boolean(session);

  if (pathname === '/') {
    const target = isAuthenticated ? '/overview' : '/login';
    return NextResponse.redirect(new URL(target, request.url));
  }

  if (pathname === '/login') {
    if (isAuthenticated) {
      const nextParam = sanitizeNextPath(request.nextUrl.searchParams.get('next'));
      return NextResponse.redirect(new URL(nextParam, request.url));
    }
    return NextResponse.next();
  }

  const isProtected = PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isProtected && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/overview/:path*', '/model/:path*', '/references/:path*']
};
