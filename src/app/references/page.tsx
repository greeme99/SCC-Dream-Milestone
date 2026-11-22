'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { ChecklistGroup } from '@/components/ChecklistGroup';
import { DRIVE_RESOURCES, DriveResourceItem } from '@/config/external-links';
import {
  ACTION_EXPERIMENT_DESIGN_CARD,
  COACH_QUALITY_CHECKLIST,
  OPTIONAL_TOOL_MAP,
  TOOL_FRAMEWORK_DETAILS
} from '@/data/references-toolkit';

export default function ReferencesPage() {
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3200);
  };

  const handleOpenResource = (res: DriveResourceItem) => {
    if (!res.isConfigured || !res.url) {
      showToast(
        `'${res.title}' 구글 드라이브 공유 주소는 삼성코칭동호회(SCC) 운영진 연결 준비 중입니다.`
      );
      return;
    }
    window.open(res.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AppShell>
      {/* Hero Banner */}
      <section className="bg-gradient-primary mb-6 rounded-lg p-7 text-on-primary shadow-card sm:p-8">
        <h1 className="text-h1 font-bold">참조자료 및 운영 툴킷 허브</h1>
      </section>

      {/* 1. Official Resources Hub */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">
          참조자료 다운로드
        </h2>
        <p className="mt-1 text-caption text-body">
          카드를 클릭하면 해당 리소스를 바로 열람·다운로드할 수 있습니다.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {DRIVE_RESOURCES.map((res) => (
            <article
              key={res.id}
              className="flex flex-col justify-between rounded-md border border-line-strong bg-subtle p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-pill bg-primary-light px-3 py-0.5 text-caption font-bold text-primary-hover">
                    {res.format}
                  </span>
                  <span className="text-xs font-semibold text-muted">{res.category}</span>
                </div>
                <h3 className="mt-2.5 text-h3 font-semibold text-main">
                  {res.title}
                </h3>
                <p className="mt-1.5 text-caption text-body">{res.description}</p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => handleOpenResource(res)}
                  className="btn-press inline-flex min-h-10 items-center gap-1.5 rounded-pill border border-primary bg-surface px-4 py-2 text-caption font-semibold text-primary transition hover:bg-primary-light"
                >
                  <span>
                    {res.order === 1 && res.url.endsWith('.pdf')
                      ? 'Full Guide PDF 열기 / 다운로드 ↗'
                      : '열기 / 다운로드 ↗'}
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. Optional Coaching Tool Map by Session */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">코칭 대화 모델</h2>

        {/* Detailed Tool Framework Cards (GROW, CiT STAR™, BRAVE) */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {TOOL_FRAMEWORK_DETAILS.map((tool) => (
            <div key={tool.id} className="rounded-md border border-line-strong bg-subtle p-5">
              <h3 className="text-h3 font-semibold text-main">{tool.name}</h3>
              <p className="mt-1 text-caption text-muted">{tool.subtitle}</p>
              <ul className="mt-3 space-y-2 text-caption">
                {tool.steps.map((st) => (
                  <li key={st.code} className="rounded-sm bg-surface p-2.5">
                    <strong className="text-primary-hover">
                      {st.code} · {st.label}:
                    </strong>{' '}
                    <span className="text-body">{st.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Action Experiment Common Design Card */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">
          Action Experiment 공통 설계 카드 (Between Session 공통)
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-body">
            <thead>
              <tr className="border-b border-line-strong bg-subtle">
                <th className="w-64 px-4 py-3 text-caption font-bold text-main">설계 항목</th>
                <th className="px-4 py-3 text-caption font-bold text-main">작성 가이드 질문</th>
              </tr>
            </thead>
            <tbody>
              {ACTION_EXPERIMENT_DESIGN_CARD.map((item) => (
                <tr key={item.order} className="border-b border-line hover:bg-subtle">
                  <td className="px-4 py-3 font-semibold text-main">{item.field}</td>
                  <td className="px-4 py-3 text-body">{item.guideQuestion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Coach Session Quality Self-Check Checklist */}
      <section className="rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="mb-4 text-h2 font-semibold text-main">
          코치 세션 품질 자가점검 체크리스트 (6대 기준)
        </h2>
        <ChecklistGroup
          title="세션 품질 자가점검"
          items={COACH_QUALITY_CHECKLIST}
          onResetToast={showToast}
        />
      </section>

      {toastMsg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-md rounded-pill bg-main px-5 py-3 text-caption font-semibold text-surface shadow-hover"
        >
          {toastMsg}
        </div>
      )}
    </AppShell>
  );
}
