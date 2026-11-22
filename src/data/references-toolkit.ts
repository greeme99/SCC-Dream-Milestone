/**
 * Tab 3 (참조자료 및 운영 툴킷) canonical data sourced from Dream_Milestone_Program_Guide.md Part 3.
 */

export interface OptionalToolMapping {
  sessionOrder: number;
  sessionName: string;
  recommendedTools: string;
  purposeAndFrame: string[];
}

export interface ToolFrameworkDetail {
  id: string;
  name: string;
  subtitle: string;
  steps: { code: string; label: string; desc: string }[];
}

export const OPTIONAL_TOOL_MAP: OptionalToolMapping[] = [
  {
    sessionOrder: 1,
    sessionName: '1회기 (Discover Me)',
    recommendedTools: 'Life Curve / 문제 외재화 / 감정 알아차림 / CiT STAR™',
    purposeAndFrame: [
      'Life Curve: 대학(원) 삶의 에너지 변곡점을 시각화하여 몰입과 가치 단서 추출',
      '문제 외재화: 비교 불안·막막함과 학생 자기 자신을 분리하여 객관적 시야 확보',
      'CiT STAR™: Story(경험 이야기) → Target(본질 목표) → Action Plan → Recap'
    ]
  },
  {
    sessionOrder: 2,
    sessionName: '2회기 (Explore Possibilities)',
    recommendedTools: 'D-H-B 프레임 / Career Decision 6축',
    purposeAndFrame: [
      'D-H-B 프레임: 직업명 중심 사고에서 벗어나 하고 싶은 일(Doing)·원하는 조건(Having)·존재 방식(Being) 탐색',
      'Career Decision 6축: 흥미·가치·강점·경험·환경·현실 조건을 다각도로 확장'
    ]
  },
  {
    sessionOrder: 3,
    sessionName: '3회기 (Find the Gap)',
    recommendedTools: 'GROW (Reality) / Career Decision Matrix',
    purposeAndFrame: [
      'GROW 모델: Goal(목표 장면) → Reality(현재 자원과 핵심 Gap 객관화) → Options → Will',
      '사실과 불안한 해석을 분리하고 레버리지가 큰 최우선 핵심 Gap 1~2개 선별'
    ]
  },
  {
    sessionOrder: 4,
    sessionName: '4회기 (Build My Milestones)',
    recommendedTools: 'BRAVE / Mandarat / Small Win',
    purposeAndFrame: [
      'BRAVE (제한적 믿음 돌파): Belief(제한적 생각) → Root(맥락) → Assess(사실/예외 분리) → Venture(작은 도전) → Experiment(실험)',
      'Mandarat & Small Win: 큰 목표를 세분화하고 실패해도 복원 가능한 작은 성공 경험(Plan B 포함) 설계'
    ]
  },
  {
    sessionOrder: 5,
    sessionName: '5회기 (Move Forward)',
    recommendedTools: 'Self-Coaching 카드 / 30·60·90일 지속 플랜',
    purposeAndFrame: [
      'Self-Coaching 카드: 코칭 종료 후 흔들릴 때 스스로에게 던질 자기질문 2가지 정착',
      '30·60·90일 지속 플랜: 주간/월간 자기점검 루틴 및 지지 네트워크 연결'
    ]
  }
];

export const TOOL_FRAMEWORK_DETAILS: ToolFrameworkDetail[] = [
  {
    id: 'TOOL-GROW',
    name: 'GROW 모델',
    subtitle: '목표 설정과 현실 기반 Gap 진단·실행 설계 프레임워크',
    steps: [
      { code: 'G', label: 'Goal (목표)', desc: '오늘 세션 또는 이번 단계에서 원하는 결과는 무엇인가?' },
      { code: 'R', label: 'Reality (현실)', desc: '현재 상태, 이미 가진 자원(Have), 가장 핵심적인 Gap은 무엇인가?' },
      { code: 'O', label: 'Options (선택지)', desc: '제약이 없다면, 또는 가장 작게 시작한다면 어떤 대안과 경로가 있는가?' },
      { code: 'W', label: 'Will (실행 의지)', desc: '구체적으로 언제 무엇을 실행할 것이며 실행 가능성(0~10점)은 몇 점인가?' }
    ]
  },
  {
    id: 'TOOL-STAR',
    name: 'CiT STAR™ 코칭대화모델',
    subtitle: '학생의 고유한 이야기를 중심에 두고 본질 목표와 실행을 연결하는 4단계 대화 모델',
    steps: [
      { code: 'S', label: 'Story (이야기)', desc: '학생의 경험, 고민, 감정, 맥락을 비판단적으로 자유롭게 풀어내기' },
      { code: 'T', label: 'Target (목표)', desc: '이야기 속에서 학생이 진정으로 원하는 소목표·대목표 발견' },
      { code: 'A', label: 'Action Plan (실행계획)', desc: '강점과 자원을 활용한 구체적 행동 실험 및 장애 대응 설계' },
      { code: 'R', label: 'Recap (마무리)', desc: '오늘의 깨달음 한 문장 정리 및 실행 가능성 점검' }
    ]
  },
  {
    id: 'TOOL-BRAVE',
    name: 'BRAVE (제한적 믿음 돌파 도구)',
    subtitle: '“인턴 경험이 없어서 안 될 거야”, “전공이 달라서 불가능해” 같은 제한적 믿음을 다룰 때 활용',
    steps: [
      { code: 'B', label: 'Belief (믿음 포착)', desc: '지금 나를 붙잡고 있는 제한적 생각 한 문장 찾기' },
      { code: 'R', label: 'Root (뿌리 탐색)', desc: '그 생각이 강해진 과거 맥락이나 비교 환경 탐색' },
      { code: 'A', label: 'Assess (사실/예외 분리)', desc: '객관적 사실과 해석을 분리하고 과거 예외 경험 찾기' },
      { code: 'V', label: 'Venture (작은 모험)', desc: '완벽하지 않아도 시도할 수 있는 안전한 도전 정의' },
      { code: 'E', label: 'Experiment (행동 실험)', desc: '이번 주 실행할 Action Experiment 설계 및 관찰 기준 합의' }
    ]
  }
];

export const ACTION_EXPERIMENT_DESIGN_CARD = [
  { order: 1, field: '1. 확인하고 싶은 가설', guideQuestion: '이번 작은 행동으로 내 진로에 대해 무엇을 알아보고 싶은가?' },
  { order: 2, field: '2. 이번에 해볼 가장 작은 행동', guideQuestion: '30~90분 내에 부담 없이 실제로 해볼 수 있는 행동은 무엇인가?' },
  { order: 3, field: '3. 실행 일시·장소·협력자', guideQuestion: '언제, 어디서, 누구와(또는 어떤 자원으로) 실행할 것인가?' },
  { order: 4, field: '4. 완료 및 학습 기준', guideQuestion: '결과(성공/실패)와 무관하게 무엇을 관찰하고 기록해 올 것인가?' },
  { order: 5, field: '5. 예상 장애물과 더 작은 대안 (Plan B)', guideQuestion: '바쁘거나 막힐 때 포기하지 않고 50% 크기로 줄인 대안 행동은 무엇인가?' }
];

export const COACH_QUALITY_CHECKLIST = [
  { id: 'qa-check-1', text: '1. 학생이 매 회기 다룰 의제와 기대 결과를 자기 언어로 직접 설정했는가?' },
  { id: 'qa-check-2', text: '2. 코치의 해석이나 조언보다 학생의 경험과 언어를 충분히 경청·반영했는가?' },
  { id: 'qa-check-3', text: '3. 실무 경험·정보 제공 시 학생의 사전 동의를 구하고(SHARE) 선택권을 돌려주었는가?' },
  { id: 'qa-check-4', text: '4. Action Experiment가 과제가 아닌 ‘학생 소유의 작고 구체적인 가설 검증 실험’으로 설계되었는가?' },
  { id: 'qa-check-5', text: '5. 실험 미실행을 평가·질책하지 않고 학생의 현실 조건과 리듬을 이해하는 배움 데이터로 다루었는가?' },
  { id: 'qa-check-6', text: '6. 학생이 1~5회기 산출물과 최종 My Dream Milestone Career Map을 자신의 언어로 완성했는가?' }
];
