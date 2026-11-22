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

const DEFAULT_LOG_FORM_URL = 'https://forms.gle/t12jNnjeY22n6DkG8';
const DEFAULT_COACH_EVAL_URL = 'https://forms.gle/9EJBCuRyVyUYH92m7';
const DEFAULT_STUDENT_EVAL_URL = 'https://forms.gle/26QZapKELpU261XS6';
const DEFAULT_FULL_GUIDE_URL =
  'https://drive.google.com/file/d/1oxW52eu4mn5B5KvOBi5dECHMRo5Wu8Bn/view?usp=sharing';
const DEFAULT_PRE_SHEET_URL =
  'https://drive.google.com/file/d/1KCbALO9SMYKk-eTLhPX1grv2qe8hcfhP/view?usp=sharing';
const DEFAULT_WORKBOOK_URL =
  'https://drive.google.com/file/d/1hhYsXm_-CUiD_lZHcNoqcr3vcRv9OO7B/view?usp=sharing';
const DEFAULT_QUESTION_CARDS_URL =
  'https://drive.google.com/file/d/1RBe4MmX3Ze-tG7H2dQADI97GLNi95jH5/view?usp=sharing';

const rawLogFormUrl = process.env.NEXT_PUBLIC_FORM_LOG_URL?.trim() || DEFAULT_LOG_FORM_URL;
const rawLogEntryKey = process.env.NEXT_PUBLIC_FORM_LOG_SESSION_ENTRY?.trim() || '';
const rawCoachEvalUrl = process.env.NEXT_PUBLIC_FORM_COACH_EVAL_URL?.trim() || DEFAULT_COACH_EVAL_URL;
const rawStudentEvalUrl = process.env.NEXT_PUBLIC_FORM_STUDENT_EVAL_URL?.trim() || DEFAULT_STUDENT_EVAL_URL;
const rawFullGuideUrl = process.env.NEXT_PUBLIC_DRIVE_FULL_GUIDE_URL?.trim() || DEFAULT_FULL_GUIDE_URL;
const rawPreSheetUrl = process.env.NEXT_PUBLIC_DRIVE_PRE_SHEET_URL?.trim() || DEFAULT_PRE_SHEET_URL;
const rawWorkbookUrl = process.env.NEXT_PUBLIC_DRIVE_WORKBOOK_URL?.trim() || DEFAULT_WORKBOOK_URL;
const rawQuestionCardsUrl =
  process.env.NEXT_PUBLIC_DRIVE_QUESTION_CARDS_URL?.trim() || DEFAULT_QUESTION_CARDS_URL;

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
    fallbackDemoUrl: DEFAULT_STUDENT_EVAL_URL,
    isConfigured: Boolean(rawStudentEvalUrl)
  }
};

export function getCoachingLogFormUrl(sessionNumber: number): { url: string; isConfigured: boolean } {
  const label = `${sessionNumber}회기`;
  if (!EXTERNAL_LINKS.coachingLogForm.isConfigured) {
    return { url: '', isConfigured: false };
  }
  const base = EXTERNAL_LINKS.coachingLogForm.baseUrl;
  const entryKey = EXTERNAL_LINKS.coachingLogForm.sessionEntryKey;

  // If entryKey is provided and URL is a full viewform URL, support prefilling
  if (entryKey) {
    const separator = base.includes('?') ? '&' : '?';
    return {
      url: `${base}${separator}usp=pp_url&${encodeURIComponent(entryKey)}=${encodeURIComponent(label)}`,
      isConfigured: true
    };
  }

  // Short URL (forms.gle) or direct URL
  return {
    url: base,
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
    url: rawFullGuideUrl,
    isConfigured: Boolean(rawFullGuideUrl)
  },
  {
    id: 'RES-02',
    order: 2,
    title: '프리세션 사전 준비지',
    description: '학생 사전 배포용 질문지(4대 항목) 및 1회기 경험 탐색 안내서',
    format: 'DOCX / PDF',
    category: '프리세션 양식',
    url: rawPreSheetUrl,
    isConfigured: Boolean(rawPreSheetUrl)
  },
  {
    id: 'RES-03',
    order: 3,
    title: '학생용 My Dream Milestone Workbook',
    description: '1~5회기 산출물 템플릿 5종 + Between Session Action Experiment 기록지 통합본',
    format: 'PDF',
    category: '학생 워크북',
    url: rawWorkbookUrl,
    isConfigured: Boolean(rawWorkbookUrl)
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
    title: '코칭 질문 라이브러리',
    description: '대학생·대학원생 맞춤형 5회기 커리어 코칭 실전 질문 모음 (6대 핵심 질문 라이브러리)',
    format: 'PDF',
    category: '코칭 보조도구',
    url: rawQuestionCardsUrl,
    isConfigured: Boolean(rawQuestionCardsUrl)
  }
];
