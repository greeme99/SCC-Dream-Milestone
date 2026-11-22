'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginFormCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!password.trim()) {
      setErrorMsg('공용 비밀번호를 입력해 주세요.');
      return;
    }

    setLoading(true);
    try {
      const nextParam = searchParams.get('next') || '/overview';
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, next: nextParam })
      });
      const data = (await res.json()) as {
        ok?: boolean;
        redirectTo?: string;
        message?: string;
      };

      if (!res.ok || !data.ok) {
        setErrorMsg(
          data.message || '비밀번호가 일치하지 않습니다. 삼성코칭동호회(SCC) 운영진에게 문의해 주세요.'
        );
        setLoading(false);
        return;
      }

      router.push(data.redirectTo || '/overview');
      router.refresh();
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="enter-title"
      className="rounded-lg border border-line bg-surface p-7 shadow-card sm:p-8"
    >
      <h2 id="enter-title" className="text-h2 font-bold text-main">
        삼코동 코칭 포털에 오신 것을 환영합니다
      </h2>

      <form onSubmit={handleSubmit} className="mt-7" noValidate>
        <label htmlFor="password" className="mb-2 block text-caption font-semibold text-main">
          공용 비밀번호를 입력해 주세요
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          aria-describedby={errorMsg ? 'password-error' : undefined}
          className="min-h-12 w-full rounded-md border border-line-strong bg-surface px-4 text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        />

        {errorMsg && (
          <div
            id="password-error"
            role="alert"
            aria-live="polite"
            className="mt-2.5 rounded-sm bg-[var(--color-danger-bg)] px-3.5 py-2.5 text-caption font-medium text-danger"
          >
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-primary card-elevate btn-press mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 font-semibold text-on-primary shadow-card disabled:opacity-60"
        >
          {loading ? '입장 확인 중...' : '입장하기'}
        </button>
      </form>

      <p className="mt-6 text-center text-caption text-muted">
        비밀번호는 삼성코칭동호회(SCC) 운영진에게 문의하세요.
      </p>
    </section>
  );
}

export default function LoginPage() {
  const toggledRef = useRef(false);

  useEffect(() => {
    if (toggledRef.current) return;
    toggledRef.current = true;
    try {
      const lastLoginTheme = localStorage.getItem('scd.login.lastTheme');
      const nextTheme = lastLoginTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('scd.login.lastTheme', nextTheme);
      localStorage.setItem('scd.theme', nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
    <div className="min-h-dvh bg-base text-main">
      {/* Header */}
      <header className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/samkodong-logo.png"
            alt="삼성코칭동호회 로고"
            className="h-9 w-auto shrink-0 object-contain"
          />
          <strong className="text-base font-bold text-main sm:text-lg">
            삼성코칭동호회 - Dream Milestone
          </strong>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-6 pt-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:pt-8">
        <div className="flex min-w-0 flex-col gap-5">
          <p className="self-start rounded-pill bg-primary-light px-4 py-2 text-caption font-semibold text-primary-hover">
            고객 주도형 다회기 코칭
          </p>
          <h1 className="text-[clamp(2.1rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight text-main">
            더 나은 내일로 향하는
            <br />
            <span className="text-primary">Dream Milestone 코칭 가이드</span>
          </h1>
          <p className="text-lg font-semibold text-primary-hover">
            함께, 더 멀리 — 당신의 여정을 응원합니다
          </p>
        </div>

        <Suspense
          fallback={
            <div className="rounded-lg border border-line bg-surface p-8 shadow-card">
              로그인 카드를 불러오는 중...
            </div>
          }
        >
          <LoginFormCard />
        </Suspense>
      </section>

      {/* Mountain & North Star Journey Illustration (Responsive Full-Width Fit) */}
      <div className="mx-auto max-w-[1200px] px-4 pb-8 sm:px-8 sm:pb-12">
        <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-card">
          <svg
            viewBox="0 0 1440 420"
            role="img"
            aria-label="겹겹의 산 사이로 굽은 길이 프리세션, 1~2회기, 3~4회기, 5회기 Move Forward 깃발을 지나 산 위의 북극성으로 이어지는 풍경"
            className="block h-auto w-full"
          >
            {/* North Star */}
            <path
              d="M1168 48 L1176 80 L1210 88 L1176 96 L1168 128 L1160 96 L1126 88 L1160 80 Z"
              fill="var(--color-brand-star)"
            />
            <g className="max-sm:hidden">
              <text x="1226" y="84" fontSize="20" fontWeight="700" fill="var(--color-text-main)">
                더 나은 나
              </text>
              <text x="1226" y="108" fontSize="15" fill="var(--color-text-body)">
                북극성 (Dream Milestone)
              </text>
            </g>

            {/* Mountains */}
            <path
              d="M0 290 L160 205 L300 265 L470 155 L640 245 L800 135 L980 220 L1168 145 L1320 225 L1440 190 L1440 420 L0 420 Z"
              fill="var(--color-primary-light)"
            />

            {/* Winding Path */}
            <path
              d="M160 400 Q360 335 540 310 T880 250 T1168 155"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="6"
              strokeDasharray="14 8"
            />

            {/* Flag 1: Pre-Session */}
            <g>
              <line
                x1="250"
                y1="365"
                x2="250"
                y2="315"
                stroke="var(--color-text-main)"
                strokeWidth="2.5"
              />
              <polygon points="250,315 278,323 250,331" fill="var(--color-primary)" />
              <text
                x="238"
                y="292"
                fontSize="14"
                fill="var(--color-text-body)"
                textAnchor="end"
              >
                합의 · Welcome Call
              </text>
              <text
                x="238"
                y="310"
                fontSize="17"
                fontWeight="700"
                fill="var(--color-text-main)"
                textAnchor="end"
              >
                프리세션
              </text>
            </g>

            {/* Flag 2: Sessions 1~2 */}
            <g>
              <line
                x1="560"
                y1="310"
                x2="560"
                y2="260"
                stroke="var(--color-text-main)"
                strokeWidth="2.5"
              />
              <polygon points="560,260 588,268 560,276" fill="var(--color-primary)" />
              <text
                x="548"
                y="236"
                fontSize="14"
                fill="var(--color-text-body)"
                textAnchor="end"
              >
                Discover Me · Explore
              </text>
              <text
                x="548"
                y="254"
                fontSize="17"
                fontWeight="700"
                fill="var(--color-text-main)"
                textAnchor="end"
              >
                1~2회기
              </text>
            </g>

            {/* Flag 3: Sessions 3~4 */}
            <g>
              <line
                x1="860"
                y1="255"
                x2="860"
                y2="205"
                stroke="var(--color-text-main)"
                strokeWidth="2.5"
              />
              <polygon points="860,205 888,213 860,221" fill="var(--color-primary)" />
              <text
                x="848"
                y="181"
                fontSize="14"
                fill="var(--color-text-body)"
                textAnchor="end"
              >
                Find Gap · Milestones
              </text>
              <text
                x="848"
                y="199"
                fontSize="17"
                fontWeight="700"
                fill="var(--color-text-main)"
                textAnchor="end"
              >
                3~4회기
              </text>
            </g>

            {/* Flag 4: Session 5 */}
            <g>
              <line
                x1="1085"
                y1="195"
                x2="1085"
                y2="145"
                stroke="var(--color-text-main)"
                strokeWidth="2.5"
              />
              <polygon points="1085,145 1113,153 1085,161" fill="var(--color-primary)" />
              <text
                x="1073"
                y="121"
                fontSize="14"
                fill="var(--color-text-body)"
                textAnchor="end"
              >
                Action Plan · Career Map
              </text>
              <text
                x="1073"
                y="139"
                fontSize="17"
                fontWeight="700"
                fill="var(--color-text-main)"
                textAnchor="end"
              >
                5회기 Move Forward
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* 3-Step Coaching Philosophy */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-14 sm:px-8">
          <h2 className="text-h1 font-bold text-main">준비하고, 대화하고, 성찰합니다</h2>
          <ol className="grid gap-5 md:grid-cols-3">
            <li className="flex flex-col gap-3 rounded-lg border border-line bg-base p-7">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-primary text-base font-bold text-on-primary shadow-sm"
                >
                  1
                </span>
                <strong className="text-lg font-bold text-main">코칭 전, 준비</strong>
              </div>
              <span className="leading-relaxed text-body">
                회기별 목적과 핵심 코칭 질문, 60분 5단계 시간 흐름을 코칭 가이드에서 미리 살핍니다.
              </span>
            </li>
            <li className="flex flex-col gap-3 rounded-lg border border-line bg-base p-7">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-primary text-base font-bold text-on-primary shadow-sm"
                >
                  2
                </span>
                <strong className="text-lg font-bold text-main">회기와 회기 사이</strong>
              </div>
              <span className="leading-relaxed text-body">
                대화 뒤에는 코칭일지를 남기고, 학생은 Action Experiment로 진로 가설을 확인합니다.
              </span>
            </li>
            <li className="flex flex-col gap-3 rounded-lg border border-line bg-base p-7">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-primary text-base font-bold text-on-primary shadow-sm"
                >
                  3
                </span>
                <strong className="text-lg font-bold text-main">마치며, 성찰</strong>
              </div>
              <span className="leading-relaxed text-body">
                최종 Career Map 완성 후 코치·학생 성과평가로 5회기 과정을 돌아보고 다음 걸음을 정합니다.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-[1200px] px-4 py-14 text-center sm:px-8">
        <p className="text-[clamp(1.4rem,2.6vw,2.1rem)] font-semibold leading-snug text-main">
          “좋은 질문이 좋은 대화를 만들고,
          <br />
          좋은 대화가 더 나은 변화를 만듭니다.”
        </p>
        <p className="mt-3 font-semibold text-primary-hover">삼코동이 함께합니다</p>
      </section>
    </div>
  );
}
