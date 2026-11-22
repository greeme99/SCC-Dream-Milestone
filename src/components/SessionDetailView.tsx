'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChecklistGroup } from '@/components/ChecklistGroup';
import {
  EXTERNAL_LINKS,
  getCoachingLogFormUrl
} from '@/config/external-links';
import {
  CoachingSessionData,
  PERFORMANCE_EVALUATION_SPEC,
  StageKey
} from '@/data/coaching-sessions';

const VALID_STAGES: StageKey[] = ['intro', 'explore', 'deepen', 'action', 'close', 'between'];

export function SessionDetailView({ session }: { session: CoachingSessionData }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [toastMsg, setToastMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3200);
  };

  const rawStage = searchParams.get('stage') as StageKey | null;
  // If ?stage=between, map to Stage 5 ('close') where Between Session is displayed
  const activeStage: StageKey =
    rawStage === 'between'
      ? 'close'
      : rawStage && VALID_STAGES.includes(rawStage)
        ? rawStage
        : 'intro';

  const setStage = (nextStage: StageKey) => {
    const targetStage = nextStage === 'between' ? 'close' : nextStage;
    const params = new URLSearchParams(searchParams.toString());
    params.set('stage', targetStage);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    if (typeof window !== 'undefined') {
      const el = document.getElementById('stage-guide-panel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const tabOrder: StageKey[] = ['intro', 'explore', 'deepen', 'action', 'close'];

  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = tabOrder[(idx + 1) % tabOrder.length];
      setStage(next);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = tabOrder[(idx - 1 + tabOrder.length) % tabOrder.length];
      setStage(prev);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setStage(tabOrder[0]);
    } else if (e.key === 'End') {
      e.preventDefault();
      setStage(tabOrder[tabOrder.length - 1]);
    }
  };

  const allSessionCheckpointIds = session.stages.flatMap((st) =>
    st.checkpoints.map((c) => c.id)
  );

  const stageIndex = session.stages.findIndex((st) => st.key === activeStage);
  const currentStageGuide = session.stages[stageIndex >= 0 ? stageIndex : 0];
  const prevStage = stageIndex > 0 ? session.stages[stageIndex - 1] : null;
  const nextStage =
    stageIndex >= 0 && stageIndex < session.stages.length - 1
      ? session.stages[stageIndex + 1]
      : null;

  const handleOpenCoachingLog = () => {
    const { url, isConfigured } = getCoachingLogFormUrl(session.sessionNumber);
    if (!isConfigured || !url) {
      showToast(
        `${session.sessionNumber}회기 코칭일지 구글폼 URL은 삼성코칭동호회(SCC) 운영진 연결 준비 중입니다. 하단 기록 항목 미리보기를 참조하세요.`
      );
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenCoachEval = () => {
    if (!EXTERNAL_LINKS.coachEvalForm.isConfigured || !EXTERNAL_LINKS.coachEvalForm.url) {
      showToast(
        '코치 성과평가 구글폼 URL은 삼성코칭동호회(SCC) 운영진 연결 준비 중입니다. 하단 평가 문항 표를 참조하세요.'
      );
      return;
    }
    window.open(EXTERNAL_LINKS.coachEvalForm.url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenStudentEval = () => {
    if (!EXTERNAL_LINKS.studentEvalForm.isConfigured || !EXTERNAL_LINKS.studentEvalForm.url) {
      showToast(
        '학생 성과평가 구글폼 URL은 삼성코칭동호회(SCC) 운영진 연결 준비 중입니다. 하단 평가 문항 표를 참조하세요.'
      );
      return;
    }
    window.open(EXTERNAL_LINKS.studentEvalForm.url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyStudentEvalLink = async () => {
    const linkToCopy =
      EXTERNAL_LINKS.studentEvalForm.url || EXTERNAL_LINKS.studentEvalForm.fallbackDemoUrl;
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      showToast('학생 성과평가 링크가 클립보드에 복사되었습니다.');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast(`학생 성과평가 링크: ${linkToCopy}`);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-primary mb-6 rounded-lg p-7 text-on-primary shadow-card sm:p-8">
        <h1 className="text-h1 font-bold">{session.title}</h1>
        <p className="mt-2 text-body text-on-primary opacity-95">
          <strong>목표:</strong> {session.goal}
        </p>
        <p className="mt-1.5 text-body font-semibold text-on-primary">
          핵심 질문: {session.coreQuestion}
        </p>
      </section>

      {/* Interactive 5-Stage Tab Bar */}
      <div
        role="tablist"
        aria-label={`${session.sessionNumber}회기 진행 단계 탭`}
        className="mb-4 flex flex-wrap gap-2 rounded-lg bg-subtle p-2"
      >
        {session.stages.map((st, idx) => {
          const isSelected = activeStage === st.key;
          return (
            <button
              key={st.key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setStage(st.key)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
              className={`btn-press rounded-pill px-4 py-2.5 text-caption font-semibold transition ${
                isSelected
                  ? 'bg-primary text-on-primary shadow-card'
                  : 'text-body hover:bg-hover'
              }`}
            >
              {st.label} ({st.duration})
            </button>
          );
        })}
      </div>

      {/* Stage 5 (마무리) Active Quick Anchor Bar */}
      {activeStage === 'close' && (
        <div className="mb-6 flex flex-wrap items-center gap-2 rounded-md border border-line bg-surface p-3 text-caption font-semibold">
          <span className="text-muted">마무리 단계 항목:</span>
          <a
            href="#stage-guide-panel"
            className="rounded-pill bg-subtle px-3 py-1 text-main transition hover:bg-hover"
          >
            5단계 가이드
          </a>
          {session.betweenSession && (
            <a
              href="#between-session-section"
              className="rounded-pill bg-primary-light px-3 py-1 text-primary-hover transition hover:opacity-80"
            >
              ⚡ Between Session 과제 ↓
            </a>
          )}
          {session.sessionNumber <= 4 ? (
            <a
              href="#coaching-log-section"
              className="rounded-pill bg-primary-light px-3 py-1 text-primary-hover transition hover:opacity-80"
            >
              📝 코칭일지 작성 ↓
            </a>
          ) : (
            <a
              href="#performance-eval-section"
              className="rounded-pill bg-primary-light px-3 py-1 text-primary-hover transition hover:opacity-80"
            >
              🏁 최종 성과평가 ↓
            </a>
          )}
        </div>
      )}

      {/* Active Stage Panel */}
      {currentStageGuide && (
        <section
          id="stage-guide-panel"
          role="tabpanel"
          className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
            <div>
              <span className="text-caption font-bold text-primary-hover">
                {currentStageGuide.stepNumber}단계 / 총 5단계
              </span>
              <h2 className="text-h2 font-semibold text-main">
                {currentStageGuide.label} (권장 소요 시간: {currentStageGuide.duration})
              </h2>
            </div>
            <span className="rounded-pill bg-primary-light px-3.5 py-1 text-caption font-bold text-primary-hover">
              ⏱ {currentStageGuide.duration}
            </span>
          </div>

          <p className="mt-4 text-body text-body">
            <strong className="text-main">단계 핵심 목적:</strong> {currentStageGuide.purpose}
          </p>

          {/* Core Coaching Questions */}
          <h3 className="mt-6 text-h3 font-semibold text-main">핵심 코칭 질문 (Core Questions)</h3>
          <ul className="mt-3 space-y-2.5">
            {currentStageGuide.questions.map((q) => (
              <li
                key={q}
                className="rounded-r-sm border-l-4 border-primary bg-subtle px-4 py-3 font-medium text-main"
              >
                “{q}”
              </li>
            ))}
          </ul>

          {/* Empathy Guide */}
          <div className="mt-5 rounded-md bg-primary-light p-4 text-body text-main">
            <strong className="block font-semibold text-primary-hover">
              💬 공감 표현 가이드 (Empathy Prompts)
            </strong>
            <ul className="mt-1.5 list-disc space-y-1 pl-5">
              {currentStageGuide.empathyGuide.map((emp) => (
                <li key={emp}>“{emp}”</li>
              ))}
            </ul>
          </div>

          {/* Coach Checkpoints */}
          <div className="mt-6">
            <ChecklistGroup
              title="체크포인트"
              items={currentStageGuide.checkpoints}
              resetScopeIds={allSessionCheckpointIds}
              onResetToast={showToast}
            />
          </div>

          {/* Stage-to-Stage Connection Buttons (회기 내 단계 이동: 연한 회색톤) */}
          <div className="mt-8 rounded-lg border border-line-strong bg-subtle/40 p-4">
            <div className="mb-3 flex items-center justify-between text-caption font-semibold text-muted">
              <span>
                회기 내 단계 이동
              </span>
              <span>
                {currentStageGuide.stepNumber} / 5 단계
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              {prevStage ? (
                <button
                  type="button"
                  onClick={() => setStage(prevStage.key)}
                  className="btn-stage-prev btn-press inline-flex min-h-11 items-center gap-2 px-4 py-2 text-caption font-semibold"
                >
                  <span aria-hidden="true">←</span>
                  <span>이전 단계: {prevStage.label} ({prevStage.duration})</span>
                </button>
              ) : (
                <div />
              )}

              {nextStage ? (
                <button
                  type="button"
                  onClick={() => setStage(nextStage.key)}
                  className="btn-stage-next btn-press inline-flex min-h-11 items-center gap-2 px-5 py-2 text-caption font-semibold"
                >
                  <span>다음 단계: {nextStage.label} ({nextStage.duration})</span>
                  <span aria-hidden="true">→</span>
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-subtle px-4 py-2.5 text-caption font-semibold text-muted">
                  <span>🏁 5단계 마무리 완료</span>
                  <span className="max-sm:hidden">
                    ({session.sessionNumber <= 4 ? '아래 Between Session 및 일지 작성으로 이어집니다' : '아래 최종 성과평가로 이어집니다'} ↓)
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* STAGE 5 ONLY: BETWEEN SESSION ACTION EXPERIMENT GUIDE               */}
      {/* =================================================================== */}
      {activeStage === 'close' && session.betweenSession && (
        <section
          id="between-session-section"
          className="mb-6 rounded-lg border border-line bg-surface p-6 shadow-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-block rounded-pill bg-[var(--color-warning-bg)] px-3.5 py-1 text-caption font-bold text-warning">
              {session.betweenSession.badge}
            </span>
            <span className="text-caption font-semibold text-muted">
              회기와 회기 사이 실행 과제
            </span>
          </div>
          <h2 className="mt-3 text-h2 font-semibold text-main">
            ⚡ {session.betweenSession.title}
          </h2>
          <p className="mt-2 text-body text-body">{session.betweenSession.summary}</p>

          <h3 className="mt-5 text-h3 font-semibold text-main">학생 Action Experiment 실행 안내</h3>
          <ul className="mt-3 space-y-2.5">
            {session.betweenSession.tasks.map((task) => (
              <li
                key={task}
                className="rounded-sm border-l-4 border-primary bg-subtle px-4 py-3 font-medium text-main"
              >
                {task}
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-md bg-primary-light p-4 text-body text-main">
            <strong>📌 코치 운영 포인트 (Action & Reflection):</strong>{' '}
            {session.betweenSession.coachNote}
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* STAGE 5 ONLY: SESSIONS 1~4 COACHING LOG GOOGLE FORM                */}
      {/* =================================================================== */}
      {activeStage === 'close' && session.sessionNumber <= 4 && (
        <section
          id="coaching-log-section"
          className="mb-6 rounded-lg border-2 border-primary bg-surface p-6 shadow-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-h2 font-semibold text-main">
                📝 {session.sessionNumber}회기 코칭일지
              </h2>
              <p className="mt-1 text-caption text-body">
                사실·통찰·합의된 Action Experiment 중심으로 기록합니다.
              </p>
            </div>

            <button
              type="button"
              onClick={handleOpenCoachingLog}
              className="bg-gradient-primary card-elevate btn-press inline-flex min-h-12 items-center gap-2 rounded-pill px-6 py-3 text-body font-semibold text-on-primary shadow-card"
            >
              <span>{session.sessionNumber}회기 작성하기</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-body">
              <thead>
                <tr className="border-b border-line-strong bg-subtle">
                  <th className="px-3.5 py-2.5 text-caption font-bold text-main">기록 항목</th>
                  <th className="px-3.5 py-2.5 text-caption font-bold text-main">작성 가이드</th>
                </tr>
              </thead>
              <tbody>
                {session.logFields.map((lf) => (
                  <tr key={lf.item} className="border-b border-line">
                    <td className="px-3.5 py-2.5 font-medium text-main">{lf.item}</td>
                    <td className="px-3.5 py-2.5 text-caption text-body">{lf.hint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* STAGE 5 ONLY: SESSION 5 PERFORMANCE EVALUATION                      */}
      {/* =================================================================== */}
      {activeStage === 'close' && session.sessionNumber === 5 && (
        <section
          id="performance-eval-section"
          className="mb-6 rounded-lg border-2 border-primary bg-surface p-6 shadow-card"
        >
          <h2 className="text-h2 font-semibold text-main">
            🏁 5회기 코치(멘토) 및 학생(멘티) 성과평가
          </h2>
          <p className="mt-1 text-caption text-body">
            5회기 종결 시 코치와 학생 각각의 성과평가를 제출합니다. 학생용 평가 링크는 복사하여 전달할 수 있습니다.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Coach Evaluation Card */}
            <div className="flex flex-col justify-between rounded-md border border-line-strong bg-subtle p-5">
              <div>
                <h3 className="text-h3 font-semibold text-main">🧑‍🏫 코치(멘토) 성과평가</h3>
                <p className="mt-1.5 text-caption text-body">
                  프로그램 운영 만족도, 코칭 자신감, 4대 원칙 적용, 재참여 및 동료 추천 의향 (5점 척도 6문항 + 서술형 2문항)
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleOpenCoachEval}
                  className="bg-gradient-primary card-elevate btn-press inline-flex min-h-11 items-center gap-2 rounded-pill px-5 py-2.5 text-caption font-semibold text-on-primary shadow-card"
                >
                  <span>코치 성과평가 작성하기</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>

            {/* Student Evaluation Card */}
            <div className="flex flex-col justify-between rounded-md border border-line-strong bg-subtle p-5">
              <div>
                <h3 className="text-h3 font-semibold text-main">🎓 학생(멘티) 성과평가</h3>
                <p className="mt-1.5 text-caption text-body">
                  코칭 만족도, 자기이해 증진, 커리어 명료화, 실제 Action 경험, 자기효능감, 지속 도움도 (5점 척도 6문항 + 서술형 3문항)
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={handleOpenStudentEval}
                  className="bg-gradient-primary card-elevate btn-press inline-flex min-h-11 items-center gap-2 rounded-pill px-5 py-2.5 text-caption font-semibold text-on-primary shadow-card"
                >
                  <span>학생 성과평가 폼 열기</span>
                  <span aria-hidden="true">↗</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyStudentEvalLink}
                  className="btn-press inline-flex min-h-11 items-center gap-1.5 rounded-pill border border-primary bg-surface px-4 py-2.5 text-caption font-semibold text-primary transition hover:bg-primary-light"
                >
                  <span>{copied ? '✓ 복사 완료' : '📋 학생 성과평가 링크 복사'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Evaluation Items Preview */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-line bg-base p-4">
              <h4 className="text-caption font-bold text-main">
                {PERFORMANCE_EVALUATION_SPEC.coachEvaluation.title}
              </h4>
              <ul className="mt-2 space-y-1.5 text-caption text-body">
                {PERFORMANCE_EVALUATION_SPEC.coachEvaluation.scaleItems.map((it) => (
                  <li key={it.question}>
                    <strong className="text-primary-hover">[{it.area}]</strong> {it.question}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-line bg-base p-4">
              <h4 className="text-caption font-bold text-main">
                {PERFORMANCE_EVALUATION_SPEC.studentEvaluation.title}
              </h4>
              <ul className="mt-2 space-y-1.5 text-caption text-body">
                {PERFORMANCE_EVALUATION_SPEC.studentEvaluation.scaleItems.map((it) => (
                  <li key={it.question}>
                    <strong className="text-primary-hover">[{it.area}]</strong> {it.question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Prev / Next Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={session.prevLink.href}
          className="btn-press rounded-pill border border-line-strong bg-surface px-5 py-2.5 text-caption font-semibold text-body transition hover:bg-hover"
        >
          ← 이전: {session.prevLink.label}
        </Link>
        {session.nextLink ? (
          <Link
            href={session.nextLink.href}
            className="bg-gradient-primary card-elevate btn-press rounded-pill px-6 py-2.5 text-body font-semibold text-on-primary shadow-card"
          >
            다음: {session.nextLink.label} →
          </Link>
        ) : (
          <Link
            href="/references"
            className="bg-gradient-primary card-elevate btn-press rounded-pill px-6 py-2.5 text-body font-semibold text-on-primary shadow-card"
          >
            자료실로 →
          </Link>
        )}
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-md rounded-pill bg-main px-5 py-3 text-caption font-semibold text-surface shadow-hover"
        >
          {toastMsg}
        </div>
      )}
    </div>
  );
}
