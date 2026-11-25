'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppShell } from '@/components/AppShell';
import { PROGRAM_OVERVIEW } from '@/data/program-overview';

export default function OverviewPage() {
  const router = useRouter();

  return (
    <AppShell>
      {/* Hero Banner */}
      <section className="bg-gradient-primary mb-6 rounded-lg p-7 text-on-primary shadow-card sm:p-8">
        <h1 className="text-h1 font-bold">{PROGRAM_OVERVIEW.heroTitle}</h1>
      </section>

      {/* 1. Program Definition & Standard Specs */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">프로그램 소개</h2>
        <p className="mt-2.5 leading-relaxed text-body">{PROGRAM_OVERVIEW.definition}</p>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse text-left text-body">
            <thead>
              <tr className="border-b border-line-strong bg-subtle">
                <th className="w-44 px-4 py-3 text-caption font-bold text-main">구분</th>
                <th className="px-4 py-3 text-caption font-bold text-main">내용</th>
              </tr>
            </thead>
            <tbody>
              {PROGRAM_OVERVIEW.specs.map((spec) => (
                <tr key={spec.label} className="border-b border-line hover:bg-subtle">
                  <td className="px-4 py-3 font-semibold text-main">{spec.label}</td>
                  <td className="px-4 py-3 text-body">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 5-Session Operating Model Process Flow */}
      <section className="rounded-lg border border-line bg-surface p-6 shadow-card">
        <div className="border-b border-line pb-4">
          <h2 className="text-h2 font-semibold text-main">5회기 표준 운영 모델 프로세스</h2>
          <p className="mt-1 text-caption text-muted">
            각 회기 카드를 클릭하면 해당 코칭모델 상세 가이드 화면으로 즉시 이동합니다.
          </p>
        </div>

        {/* Vertical Stepper Flow with 3D Debossed/Elevated Cards */}
        <div className="relative mt-6 space-y-4 before:absolute before:bottom-6 before:left-7 before:top-6 before:w-0.5 before:bg-line-strong">
          {PROGRAM_OVERVIEW.sessionMatrix.map((item, idx) => (
            <div
              key={item.slug}
              onClick={() => router.push(item.slug)}
              tabIndex={0}
              role="button"
              aria-label={`${item.sessionLabel} ${item.themeTitle} 가이드로 이동`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  router.push(item.slug);
                }
              }}
              className="group relative flex cursor-pointer flex-col gap-4 rounded-lg border border-line-strong bg-surface p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4 sm:items-center">
                {/* Node Step Badge */}
                <span className="relative z-10 inline-grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-primary-light text-sm font-bold text-primary-hover shadow-card transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  {idx === 0 ? 'P' : idx}
                </span>

                {/* Session Label & Theme Info */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-primary-hover">{item.sessionLabel}</span>
                    <span className="text-xs text-muted">|</span>
                    <strong className="text-main">{item.themeTitle}</strong>
                  </div>
                  <p className="mt-1 text-caption text-body">{item.themeDesc}</p>
                  <p className="mt-1.5 text-caption font-medium text-main">
                    <span className="text-muted">핵심 질문:</span> {item.coreQuestion}
                  </p>
                </div>
              </div>

              {/* Form Badge & Move Arrow */}
              <div className="flex shrink-0 items-center justify-between gap-3 border-t border-line pt-3 sm:border-0 sm:pt-0">
                <span className="inline-block rounded-pill bg-primary-light px-3 py-1 text-caption font-semibold text-primary-hover">
                  {item.formBadge}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-grid h-8 w-8 place-items-center rounded-pill bg-subtle text-muted transition group-hover:bg-primary group-hover:text-on-primary"
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
