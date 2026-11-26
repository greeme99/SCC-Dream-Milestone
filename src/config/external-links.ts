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
  downloadFileName: string;
  isConfigured: boolean;
}

const DEFAULT_LOG_FORM_URL = 'https://forms.gle/t12jNnjeY22n6DkG8';
const DEFAULT_COACH_EVAL_URL = 'https://forms.gle/9EJBCuRyVyUYH92m7';
const DEFAULT_STUDENT_EVAL_URL = 'https://forms.gle/26QZapKELpU261XS6';

const rawLogFormUrl = process.env.NEXT_PUBLIC_FORM_LOG_URL?.trim() || DEFAULT_LOG_FORM_URL;
const rawLogEntryKey = process.env.NEXT_PUBLIC_FORM_LOG_SESSION_ENTRY?.trim() || '';
const rawCoachEvalUrl = process.env.NEXT_PUBLIC_FORM_COACH_EVAL_URL?.trim() || DEFAULT_COACH_EVAL_URL;
const rawStudentEvalUrl = process.env.NEXT_PUBLIC_FORM_STUDENT_EVAL_URL?.trim() || DEFAULT_STUDENT_EVAL_URL;

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
    description: '사전 세션~5회기 전체 코치 가이드북 원문 및 운영 표준 매뉴얼',
    format: 'PDF',
    category: '가이드북 원문',
    url: '/resources/dream-milestone-full-guide.pdf',
    downloadFileName: 'Dream_Milestone_Full_Guide.pdf',
    isConfigured: true
  },
  {
    id: 'RES-02',
    order: 2,
    title: '사전 세션 준비지',
    description: '학생 사전 배포용 질문지(4대 항목) 및 1회기 경험 탐색 안내서',
    format: 'PDF',
    category: '사전 세션 양식',
    url: '/resources/pre-session-student.pdf',
    downloadFileName: '사전_세션_준비지.pdf',
    isConfigured: true
  },
  {
    id: 'RES-03',
    order: 3,
    title: '학생용 My Dream Milestone Workbook',
    description: 'My story Workbook',
    format: 'PDF',
    category: '학생 워크북',
    url: '/resources/my-story-workbook.pdf',
    downloadFileName: 'My_story_Workbook.pdf',
    isConfigured: true
  },
  {
    id: 'RES-05',
    order: 4,
    title: '코칭 질문 라이브러리',
    description: '대학생·대학원생 맞춤형 5회기 커리어 코칭 실전 질문 모음 (6대 핵심 질문 라이브러리)',
    format: 'PDF',
    category: '코칭 보조도구',
    url: '/resources/coaching-question-library.pdf',
    downloadFileName: '코칭_질문_라이브러리.pdf',
    isConfigured: true
  }
];
