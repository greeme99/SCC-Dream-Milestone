'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { ChecklistGroup } from '@/components/ChecklistGroup';
import { COMMON_STAGE_FRAME, PRE_SESSION_DATA } from '@/data/coaching-sessions';

export default function PreSessionPage() {
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  return (
    <AppShell>
      {/* Hero Header */}
      <section className="bg-gradient-primary mb-6 rounded-lg p-7 text-on-primary shadow-card sm:p-8">
        <h1 className="text-h1 font-bold">{PRE_SESSION_DATA.title}</h1>
        <p className="mt-2 max-w-3xl text-body text-on-primary opacity-95">{PRE_SESSION_DATA.purpose}</p>
      </section>

      {/* Common 5-Stage Frame Overview */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">
          2.0 본 세션(1~5회기) 공통 5단계 인터랙티브 프레임 (60분 기준)
        </h2>
        <p className="mt-1 text-caption text-body">
          모든 본 세션은 아래 5단계 표준 구조를 기반으로 학생의 속도에 맞춰 유연하게 운영합니다.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-body">
            <thead>
              <tr className="border-b border-line-strong bg-subtle">
                <th className="px-4 py-3 text-caption font-bold text-main">단계</th>
                <th className="px-4 py-3 text-caption font-bold text-main">권장 시간</th>
                <th className="px-4 py-3 text-caption font-bold text-main">핵심 목적</th>
                <th className="px-4 py-3 text-caption font-bold text-main">핵심 체크포인트</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_STAGE_FRAME.map((row) => (
                <tr key={row.step} className="border-b border-line hover:bg-subtle">
                  <td className="px-4 py-3 font-semibold text-primary-hover">{row.step}</td>
                  <td className="px-4 py-3 font-medium text-main">{row.time}</td>
                  <td className="px-4 py-3 text-body">{row.purpose}</td>
                  <td className="px-4 py-3 text-caption text-body">{row.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 1. 1st Session Prep Checklist */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="mb-4 text-h2 font-semibold text-main">1) 1회기 사전 준비 체크리스트</h2>
        <ChecklistGroup
          title="프리세션 준비 점검"
          items={PRE_SESSION_DATA.prepCheckpoints}
          onResetToast={showToast}
        />
      </section>

      {/* 2. Student Pre-Questionnaire Review Matrix */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">2) 학생 사전 질문지 4대 검토 기준표</h2>
        <p className="mt-1 text-caption text-body">
          1회기 시작 최소 24시간 전까지 사전 질문지를 검토하며 단정적 진단을 피하고 탐색 단서를 포착합니다.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-body">
            <thead>
              <tr className="border-b border-line-strong bg-subtle">
                <th className="w-40 px-4 py-3 text-caption font-bold text-main">사전 질문 항목</th>
                <th className="px-4 py-3 text-caption font-bold text-main">학생 질문 내용</th>
                <th className="px-4 py-3 text-caption font-bold text-main">
                  코치 검토 및 1회기 활용 원칙
                </th>
              </tr>
            </thead>
            <tbody>
              {PRE_SESSION_DATA.preQuestionnaireMatrix.map((item) => (
                <tr key={item.category} className="border-b border-line hover:bg-subtle">
                  <td className="px-4 py-3.5 font-semibold text-main">{item.category}</td>
                  <td className="px-4 py-3.5 text-body">{item.question}</td>
                  <td className="px-4 py-3.5 text-body">{item.coachPrinciple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. 15-Minute Welcome Call Guide */}
      <section className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card">
        <h2 className="text-h2 font-semibold text-main">3) 15분 Welcome Call 타임라인 진행 가이드</h2>
        <p className="mt-1 text-caption text-body">
          1회기 본 세션 전에 15분 내외의 짧은 통화 또는 화상 미팅으로 첫 만남의 심리적 문턱을 낮춥니다.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {PRE_SESSION_DATA.welcomeCallTimeline.map((item) => (
            <article key={item.time} className="rounded-md border border-line-strong bg-subtle p-5">
              <div className="flex items-center justify-between gap-2">
                <strong className="text-h3 font-semibold text-main">{item.stage}</strong>
                <span className="rounded-pill bg-primary-light px-3 py-0.5 text-caption font-bold text-primary-hover">
                  {item.time}
                </span>
              </div>
              <p className="mt-2 text-caption font-medium text-body">{item.purpose}</p>
              <div className="mt-3 rounded-sm border-l-4 border-primary bg-surface p-3 text-body text-main">
                {item.script}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Prev / Next Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/overview"
          className="btn-press rounded-pill border border-line-strong bg-surface px-5 py-2.5 text-caption font-semibold text-body transition hover:bg-hover"
        >
          ← 프로그램 소개로
        </Link>
        <Link
          href="/model/session-1"
          className="bg-gradient-primary card-elevate btn-press rounded-pill px-6 py-2.5 text-body font-semibold text-on-primary shadow-card"
        >
          1회기 Discover Me 가이드로 이동 →
        </Link>
      </div>

      {toastMsg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 rounded-pill bg-main px-5 py-3 text-caption font-semibold text-surface shadow-hover"
        >
          {toastMsg}
        </div>
      )}
    </AppShell>
  );
}
