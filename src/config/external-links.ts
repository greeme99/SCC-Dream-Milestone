/**
 * ENT-005: ExternalLinkConfig
 * Single source of truth for Google Forms (3 types) and Google Drive resources (5 types).
 * Complies with DEC-005 & RULE-005.
 */

export interface DriveResourceItem {
  id: string;
  order: number;
  title: string;
  description: string;
  format: string;
  category: string;
  url: string;
  isConfigured: boolean;
}

const rawLogFormUrl = process.env.NEXT_PUBLIC_FORM_LOG_URL?.trim() || '';
const rawLogEntryKey = process.env.NEXT_PUBLIC_FORM_LOG_SESSION_ENTRY?.trim() || 'entry.session';
const rawCoachEvalUrl = process.env.NEXT_PUBLIC_FORM_COACH_EVAL_URL?.trim() || '';
const rawStudentEvalUrl = process.env.NEXT_PUBLIC_FORM_STUDENT_EVAL_URL?.trim() || '';

export const EXTERNAL_LINKS = {
  coachingLogForm: {
    baseUrl: rawLogFormUrl,
    sessionEntryKey: rawLogEntryKey,
    isConfigured: Boolean(rawLogFormUrl)
  },
  coachEvalForm: {
    url: rawCoachEvalUrl,
    isConfigured: Boolean(rawCoachEvalUrl)
  },
  studentEvalForm: {
    url: rawStudentEvalUrl,
    fallbackDemoUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfDreamMilestoneStudentEval/viewform',
    isConfigured: Boolean(rawStudentEvalUrl)
  }
};

export function getCoachingLogFormUrl(sessionNumber: number): { url: string; isConfigured: boolean } {
  const label = `${sessionNumber}회기`;
  if (!EXTERNAL_LINKS.coachingLogForm.isConfigured) {
    return { url: '', isConfigured: false };
  }
  const base = EXTERNAL_LINKS.coachingLogForm.baseUrl;
  const separator = base.includes('?') ? '&' : '?';
  const entryKey = EXTERNAL_LINKS.coachingLogForm.sessionEntryKey;
  return {
    url: `${base}${separator}usp=pp_url&${encodeURIComponent(entryKey)}=${encodeURIComponent(label)}`,
    isConfigured: true
  };
}

export const DRIVE_RESOURCES: DriveResourceItem[] = [
  {
    id: 'RES-01',
    order: 1,
    title: 'Dream Milestone Full Guide.pdf',
    description: '프리세션~5회기 전체 코치 가이드북 원문 및 운영 표준 매뉴얼',
    format: 'PDF',
    category: '가이드북 원문',
    url: process.env.NEXT_PUBLIC_DRIVE_FULL_GUIDE_URL?.trim() || '',
    isConfigured: Boolean(process.env.NEXT_PUBLIC_DRIVE_FULL_GUIDE_URL?.trim())
  },
  {
    id: 'RES-02',
    order: 2,
    title: '프리세션 사전 준비지',
    description: '학생 사전 배포용 질문지(4대 항목) 및 1회기 경험 탐색 안내서',
    format: 'DOCX / PDF',
    category: '프리세션 양식',
    url: process.env.NEXT_PUBLIC_DRIVE_PRE_SHEET_URL?.trim() || '',
    isConfigured: Boolean(process.env.NEXT_PUBLIC_DRIVE_PRE_SHEET_URL?.trim())
  },
  {
    id: 'RES-03',
    order: 3,
    title: '학생용 My Dream Milestone Workbook',
    description: '1~5회기 산출물 템플릿 5종 + Between Session Action Experiment 기록지 통합본',
    format: 'PDF',
    category: '학생 워크북',
    url: process.env.NEXT_PUBLIC_DRIVE_WORKBOOK_URL?.trim() || '',
    isConfigured: Boolean(process.env.NEXT_PUBLIC_DRIVE_WORKBOOK_URL?.trim())
  },
  {
    id: 'RES-04',
    order: 4,
    title: '코치 사전 OT 자료 및 프로그램 운영 매뉴얼',
    description: '학생/코치 모집 → 매칭 → OT → 코칭 → 평가 전체 운영 절차 및 역할 합의서',
    format: 'PDF / PPTX',
    category: '운영·OT 자료',
    url: process.env.NEXT_PUBLIC_DRIVE_OT_MANUAL_URL?.trim() || '',
    isConfigured: Boolean(process.env.NEXT_PUBLIC_DRIVE_OT_MANUAL_URL?.trim())
  },
  {
    id: 'RES-05',
    order: 5,
    title: '핵심 질문 라이브러리 & 커리어 가치 탐색 카드',
    description: '회기별 심화 코칭 질문 모음집 및 가치·강점 탐색 카드 리소스',
    format: 'PDF',
    category: '코칭 보조도구',
    url: process.env.NEXT_PUBLIC_DRIVE_QUESTION_CARDS_URL?.trim() || '',
    isConfigured: Boolean(process.env.NEXT_PUBLIC_DRIVE_QUESTION_CARDS_URL?.trim())
  }
];
