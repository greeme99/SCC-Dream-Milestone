'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

interface NavEntry {
  href: string;
  label: string;
}

const TAB1_NAV: NavEntry[] = [
  { href: '/overview', label: '개요 (Program Overview)' }
];

const TAB2_NAV: NavEntry[] = [
  { href: '/model/pre', label: '프리세션 (Welcome Call)' },
  { href: '/model/session-1', label: '1회기 · Discover Me' },
  { href: '/model/session-2', label: '2회기 · Explore Possibilities' },
  { href: '/model/session-3', label: '3회기 · Find the Gap' },
  { href: '/model/session-4', label: '4회기 · Build My Milestones' },
  { href: '/model/session-5', label: '5회기 · Move Forward' }
];

const TAB3_NAV: NavEntry[] = [
  { href: '/references', label: '참조자료' }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  const handleToggleSidebar = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setSidebarOpen((prev) => !prev);
    } else {
      setDrawerOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  const renderNavItem = (item: NavEntry) => {
    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        className={`flex items-center rounded-md px-3.5 py-2.5 text-body transition ${
          isActive
            ? 'nav-debossed-active font-bold text-main'
            : 'nav-debossed text-body hover:text-main'
        }`}
      >
        <span className="truncate">{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-dvh bg-base text-main">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        본문으로 건너뛰기
      </a>

      {/* Topbar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line-strong bg-surface px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleToggleSidebar}
            aria-label={sidebarOpen ? '사이드바 숨기기' : '사이드바 보이기'}
            title={sidebarOpen ? '사이드바 숨기기' : '사이드바 보이기'}
            aria-expanded={sidebarOpen || drawerOpen}
            className="btn-press inline-grid h-10 w-10 place-items-center rounded-pill border border-line-strong bg-subtle text-body transition hover:bg-hover hover:text-main"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
          <Link href="/overview" className="flex items-center gap-3">
            <img
              src="/samkodong-logo.png"
              alt="삼성코칭동호회 로고"
              className="h-9 w-auto shrink-0 object-contain"
            />
            <strong className="text-base font-bold text-main sm:text-lg">
              삼성코칭동호회 - Dream Milestone
            </strong>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/references"
            className="btn-press hidden min-h-10 items-center gap-1.5 rounded-pill border border-primary bg-surface px-4 py-1.5 text-caption font-semibold text-primary transition hover:bg-primary-light sm:inline-flex"
          >
            <span aria-hidden="true">📥</span>
            <span>참조자료 다운로드</span>
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={handleLogout}
            className="btn-press min-h-10 rounded-pill border border-line-strong bg-surface px-3.5 py-1.5 text-caption font-semibold text-body transition hover:bg-hover"
          >
            로그아웃
          </button>
        </div>
      </header>

      <div
        className={`mx-auto grid max-w-[1440px] ${
          sidebarOpen ? 'lg:grid-cols-[296px_minmax(0,1fr)]' : 'lg:grid-cols-[minmax(0,1fr)]'
        }`}
      >
        {/* Mobile Backdrop */}
        {drawerOpen && (
          <div
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 top-[65px] z-30 bg-main/40 lg:hidden"
          />
        )}

        {/* 3-Section Elevated Sidebar */}
        <aside
          aria-label="포털 3대 기능 탭 내비게이션"
          className={`${
            drawerOpen
              ? 'fixed bottom-0 left-0 top-[65px] z-40 block w-[296px] overflow-y-auto shadow-hover'
              : 'hidden'
          } ${
            sidebarOpen
              ? 'lg:sticky lg:top-[65px] lg:block lg:h-[calc(100dvh-65px)] lg:overflow-y-auto'
              : 'lg:hidden'
          } border-r border-line-strong bg-subtle p-4`}
        >
          <nav className="space-y-4">
            {/* Group 1: 프로그램 소개 */}
            <section className="rounded-lg border border-line-strong bg-surface p-3.5 shadow-card">
              <div className="mb-2.5 flex items-center gap-2 border-b border-line pb-2">
                <strong className="text-caption font-bold tracking-tight text-main">
                  프로그램 소개
                </strong>
              </div>
              <div className="space-y-1.5">{TAB1_NAV.map(renderNavItem)}</div>
            </section>

            {/* Group 2: 코칭모델 (프리세션~5회기) */}
            <section className="rounded-lg border border-line-strong bg-surface p-3.5 shadow-card">
              <div className="mb-2.5 flex items-center gap-2 border-b border-line pb-2">
                <strong className="text-caption font-bold tracking-tight text-main">
                  코칭모델 (프리세션~5회기)
                </strong>
              </div>
              <div className="space-y-2">{TAB2_NAV.map(renderNavItem)}</div>
            </section>

            {/* Group 3: 자료실 */}
            <section className="rounded-lg border border-line-strong bg-surface p-3.5 shadow-card">
              <div className="mb-2.5 flex items-center gap-2 border-b border-line pb-2">
                <strong className="text-caption font-bold tracking-tight text-main">
                  자료실
                </strong>
              </div>
              <div className="space-y-1.5">{TAB3_NAV.map(renderNavItem)}</div>
            </section>
          </nav>
        </aside>

        {/* Main View Area */}
        <main id="main-content" tabIndex={-1} className="min-w-0 px-4 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto max-w-[1080px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
