import { NextRequest, NextResponse } from 'next/server';
import {
  SESSION_COOKIE_NAME,
  SESSION_TTL_SECONDS,
  createSessionToken,
  sanitizeNextPath,
  verifyPasswordConstantTime
} from '@/lib/auth-cookie';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      password?: string;
      next?: string;
    };

    const password = typeof body.password === 'string' ? body.password : '';
    if (!password) {
      return NextResponse.json(
        {
          ok: false,
          code: 'EMPTY_PASSWORD',
          message: '공용 비밀번호를 입력해 주세요.'
        },
        { status: 400 }
      );
    }

    const isValid = verifyPasswordConstantTime(password);
    if (!isValid) {
      return NextResponse.json(
        {
          ok: false,
          code: 'INVALID_PASSWORD',
          message: '비밀번호가 일치하지 않습니다. 삼성코칭동호회(SCC) 운영진에게 문의해 주세요.'
        },
        { status: 401 }
      );
    }

    const { token } = await createSessionToken();
    const redirectTo = sanitizeNextPath(body.next);

    const response = NextResponse.json({
      ok: true,
      redirectTo
    });

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_TTL_SECONDS
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: 'INTERNAL_ERROR',
        message: '인증 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
      },
      { status: 500 }
    );
  }
}
