/**
 * Automated Verification Suite for Dream Milestone Coaching Toolkit (TC-001 ~ TC-016)
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function readSrc(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

test('TC-001 ~ TC-004: Auth cookie signing, constant-time password check, and open-redirect guard', async () => {
  const authSrc = readSrc('src/lib/auth-cookie.ts');
  assert.ok(authSrc.includes('verifyPasswordConstantTime'), 'Constant-time password check exists');
  assert.ok(authSrc.includes('HMAC') && authSrc.includes('SHA-256'), 'HMAC-SHA256 signing exists');
  assert.ok(authSrc.includes('sanitizeNextPath'), 'Open-redirect sanitizer exists');

  const mwSrc = readSrc('src/middleware.ts');
  assert.ok(mwSrc.includes("'/overview'") && mwSrc.includes("'/model'") && mwSrc.includes("'/references'"), 'Protected routes guarded');

  const loginApi = readSrc('src/app/api/login/route.ts');
  assert.ok(loginApi.includes('httpOnly: true'), 'HttpOnly cookie set');
  assert.ok(loginApi.includes('status: 401'), '401 returned on invalid password');
});

test('TC-005 & TC-006: AppShell 3-tab navigation, responsive drawer, and dual-theme toggle (scd.theme)', () => {
  const shellSrc = readSrc('src/components/AppShell.tsx');
  assert.ok(shellSrc.includes('프로그램 소개'), 'Tab 1 nav group exists');
  assert.ok(shellSrc.includes('코칭모델 (프리세션~5회기)'), 'Tab 2 nav group exists');
  assert.ok(shellSrc.includes('자료실'), 'Tab 3 nav group exists');
  assert.ok(shellSrc.includes('삼성코칭동호회 - Dream Milestone'), 'Updated brand header exists');
  assert.ok(shellSrc.includes('/samkodong-logo.png'), 'Club icon logo exists');
  assert.ok(shellSrc.includes('aria-current'), 'Active nav accessibility attribute exists');

  const themeSrc = readSrc('src/components/ThemeToggle.tsx');
  assert.ok(themeSrc.includes("localStorage.setItem('scd.theme'"), 'Theme saved to scd.theme');
});

test('TC-007: Tab 1 Overview includes 4 principles, SHARE protocol, 5-session matrix, KPIs, ethics, and zero KCA mentions', () => {
  const overviewData = readSrc('src/data/program-overview.ts');
  assert.ok(overviewData.includes('Coaching First'));
  assert.ok(overviewData.includes('Experience on Demand'));
  assert.ok(overviewData.includes('Action & Reflection'));
  assert.ok(overviewData.includes('Guide, not Script'));
  assert.ok(overviewData.includes('Seek Permission'));
  assert.ok(!/\bKCA\b|한국코치협회/.test(overviewData), 'No KCA mention in overview data');
});

test('TC-008 ~ TC-013: Tab 2 Pre-session, Sessions 1~5 5-stage tabs, checklists, Coaching Log (1~4), and Performance Eval (5)', () => {
  const sessionsData = readSrc('src/data/coaching-sessions.ts');
  assert.ok(sessionsData.includes('My Strength & Value Map'), 'Session 1 deliverable');
  assert.ok(sessionsData.includes('Career Possibility Map'), 'Session 2 deliverable');
  assert.ok(sessionsData.includes('Current-Future Gap Map'), 'Session 3 deliverable');
  assert.ok(sessionsData.includes('Career Milestone'), 'Session 4 deliverable');
  assert.ok(sessionsData.includes('My Dream Milestone Career Map'), 'Session 5 deliverable');
  assert.ok(sessionsData.includes('30·60·90일'), 'Session 5 Action Plan');

  const detailView = readSrc('src/components/SessionDetailView.tsx');
  assert.ok(detailView.includes('role="tablist"'), 'ARIA tablist implemented');
  assert.ok(detailView.includes('navigator.clipboard.writeText'), 'Student eval clipboard copy implemented');
  assert.ok(detailView.includes('회기 작성하기'), 'Sessions 1~4 Google Form CTA');
  assert.ok(detailView.includes('코치 성과평가 작성하기'), 'Session 5 Coach Eval CTA');
});

test('TC-014 ~ TC-016: Tab 3 References 5 resources, optional coaching tools (GROW, STAR, BRAVE), and quality checklist', () => {
  const extLinks = readSrc('src/config/external-links.ts');
  assert.ok(extLinks.includes('Dream Milestone Full Guide.pdf'));
  assert.ok(extLinks.includes('프리세션 사전 준비지'));
  assert.ok(extLinks.includes('학생용 My Dream Milestone Workbook'));

  const refToolkit = readSrc('src/data/references-toolkit.ts');
  assert.ok(refToolkit.includes('GROW 모델'));
  assert.ok(refToolkit.includes('CiT STAR™'));
  assert.ok(refToolkit.includes('BRAVE'));

  const refPage = readSrc('src/app/references/page.tsx');
  assert.ok(refPage.includes('참조자료 다운로드'), 'Resource hub section exists');
});
