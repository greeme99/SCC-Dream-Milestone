/**
 * ENT-002: ProgramOverviewData
 * Tab 1 (개요) canonical data sourced from Dream_Milestone_Program_Guide.md
 */

export interface PrincipleItem {
  id: string;
  number: number;
  title: string;
  definition: string;
  coachAction: string;
  antiPattern: string;
}

export interface ShareStepItem {
  step: string;
  name: string;
  koreanName: string;
  script: string;
}

export interface SessionMatrixRow {
  order: number;
  slug: string;
  sessionLabel: string;
  themeTitle: string;
  themeDesc: string;
  coreQuestion: string;
  deliverable: string;
  formBadge: string;
}

export interface KpiItem {
  target: '학생 (멘티)' | '코치 (멘토)';
  order: number;
  metric: string;
  criteria: string;
}

export const PROGRAM_OVERVIEW = {
  eyebrow: 'TAB 1 · PROGRAM OVERVIEW',
  heroTitle: '목표와 현실의 격차를 좁히고, 나만의 커리어 로드맵과 구체적인 액션 플랜을 설계합니다.',
  heroQuote: '진로를 처방하지 않고, 학생이 행동 실험과 성찰을 통해 스스로 길을 설계하도록 돕는 과정',
  definition:
    'Dream Milestone은 대학생ㆍ대학원생을 위해 5회기로 구성한 커리어 코칭 프로그램 입니다. 자신만의 커리어 기준(Strength&Value) 수립부터 현실적인 이정표 설계, 행동(Action)을 통한 가설 검증까지 함께합니다.',
  specs: [
    { label: '주관 / 대상', value: '한국코치협회 인증코치 / 대학생·대학원생' },
    { label: '운영 형태', value: '1:1 코칭 기본 (필요 시 소그룹 보조 운영)' },
    { label: '세션 구성', value: '사전 세션(15분 Welcome Call) + 본 세션 5회기(회기당 60분)' },
    { label: '회기 간격', value: '1~2주 간격 권장 (회기 사이 30~90분 규모의 Action Experiment 수행)' }
  ],
  principles: [
    {
      id: 'PRIN-1',
      number: 1,
      title: 'Coaching First',
      definition: '학생 스스로 답과 가능성을 발견하도록 파트너링합니다.',
      coachAction: '열린 질문·경청·반영을 우선하고 학생이 자기 언어로 목표와 행동을 선택하게 합니다.',
      antiPattern: '학생의 고민을 듣자마자 해결책이나 진로를 먼저 처방함'
    },
    {
      id: 'PRIN-2',
      number: 2,
      title: 'Experience on Demand',
      definition: '학생의 요청·동의 시에만 코치의 실무 경험/정보를 보조 지원합니다.',
      coachAction: 'SHARE 프로토콜에 따라 짧게 공유한 뒤 선택권을 즉시 학생에게 반환합니다.',
      antiPattern: '코치의 경력·성공 사례를 정답처럼 강요하거나 일방적으로 훈수 둠'
    },
    {
      id: 'PRIN-3',
      number: 3,
      title: 'Action & Reflection',
      definition: '세션 내 대화와 세션 간 실제 행동·성찰을 순환시킵니다.',
      coachAction: '작고 검증 가능한 실험을 설계하고 실행·미실행 모두에서 배움을 추출합니다.',
      antiPattern: '숙제 검사처럼 미실행을 질책하거나 행동 없는 대화로만 종료함'
    },
    {
      id: 'PRIN-4',
      number: 4,
      title: 'Guide, not Script',
      definition: '대본이 아닌 코치의 전문적 판단을 지원하는 유연한 가이드입니다.',
      coachAction: '학생의 속도·정서·의제에 맞춰 질문, 순서, 코칭 도구를 유연하게 재구성합니다.',
      antiPattern: '학생의 흐름을 끊고 매뉴얼 질문을 기계적으로 순서대로 낭독함'
    }
  ] satisfies PrincipleItem[],
  shareProtocol: [
    {
      step: 'S',
      name: 'Seek Permission',
      koreanName: '동의 확인',
      script: '“질문으로 더 탐색하는 것과 제 실무 경험을 2분 정도 참고로 듣는 것 중 무엇이 도움이 될까요?”'
    },
    {
      step: 'H',
      name: 'Highlight Context',
      koreanName: '맥락 명시',
      script: '“제 경우에는 당시 산업 환경과 전공 배경이 이러했습니다 (일반화 금지).”'
    },
    {
      step: 'A',
      name: 'Add One Insight',
      koreanName: '핵심 1가지 공유',
      script: '“그때 얻은 핵심 배움 한 가지는 완벽한 준비보다 작은 프로젝트로 먼저 검증해 보는 것이었습니다.”'
    },
    {
      step: 'R',
      name: 'Return Choice',
      koreanName: '선택권 반환',
      script: '“이 이야기 중 본인 상황에 참고할 부분과 다르게 느껴지는 부분은 무엇인가요?”'
    },
    {
      step: 'E',
      name: 'Explore Action',
      koreanName: '행동 연결',
      script: '“그렇다면 이번 주 본인만의 방식으로 확인해 볼 작은 실험은 무엇일까요?”'
    }
  ] satisfies ShareStepItem[],
  sessionMatrix: [
    {
      order: 0,
      slug: '/model/pre',
      sessionLabel: '사전 세션',
      themeTitle: 'Preparation & Agreement',
      themeDesc: '라포 형성, 운영 원칙 합의, 사전 질문지 검토 및 15분 Welcome Call',
      coreQuestion: '“5회기를 마칠 때 무엇이 선명해지면 좋을까?”',
      deliverable: '사전 질문지',
      formBadge: '사전 준비'
    },
    {
      order: 1,
      slug: '/model/session-1',
      sessionLabel: '1회기',
      themeTitle: 'Discover Me',
      themeDesc: '경험·강점·가치·관심 탐색',
      coreQuestion: '“나는 어떤 순간에 몰입하며 무엇을 중요하게 여기는가?”',
      deliverable: 'My Strength & Value Map',
      formBadge: '코칭일지 1'
    },
    {
      order: 2,
      slug: '/model/session-2',
      sessionLabel: '2회기',
      themeTitle: 'Explore Possibilities',
      themeDesc: '관심 분야·직무·가능성 확장',
      coreQuestion: '“내 강점과 가치가 살아날 수 있는 분야·직무는 무엇인가?”',
      deliverable: 'Career Possibility Map',
      formBadge: '코칭일지 2'
    },
    {
      order: 3,
      slug: '/model/session-3',
      sessionLabel: '3회기',
      themeTitle: 'Find the Gap',
      themeDesc: '현재와 목표 사이 Gap 탐색',
      coreQuestion: '“원하는 미래와 현재 사이에서 무엇을 확인·보완해야 하는가?”',
      deliverable: 'Current-Future Gap Map',
      formBadge: '코칭일지 3'
    },
    {
      order: 4,
      slug: '/model/session-4',
      sessionLabel: '4회기',
      themeTitle: 'Build My Milestones',
      themeDesc: '단계별 커리어 이정표 및 대안 경로(Plan B) 설계',
      coreQuestion: '“다음 장면으로 가기 위해 밟을 현실적 이정표와 대안은?”',
      deliverable: 'Career Milestone',
      formBadge: '코칭일지 4'
    },
    {
      order: 5,
      slug: '/model/session-5',
      sessionLabel: '5회기',
      themeTitle: 'Move Forward',
      themeDesc: '실행계획 통합 및 지속 실천 시스템 구축',
      coreQuestion: '“코칭 종료 후에도 어떤 시스템으로 내 길을 이어갈 것인가?”',
      deliverable: 'Action Plan + My Dream Milestone Career Map',
      formBadge: '코치/학생 성과평가 2종'
    }
  ] satisfies SessionMatrixRow[],
  kpis: [
    {
      target: '학생 (멘티)',
      order: 1,
      metric: '1. 코칭 만족도',
      criteria: '코칭 관계의 심리적 안전감, 경청·존중 체감, 프로그램 전반 만족도'
    },
    {
      target: '학생 (멘티)',
      order: 2,
      metric: '2. 자기이해 증진',
      criteria: '강점·가치·관심·에너지 패턴 및 제약조건을 자기 언어로 설명 가능 여부'
    },
    {
      target: '학생 (멘티)',
      order: 3,
      metric: '3. 커리어 명료화',
      criteria: '탐색할 진로 방향, 선택 기준, 단계별 이정표의 구체화 정도'
    },
    {
      target: '학생 (멘티)',
      order: 4,
      metric: '4. 실제 Action 경험',
      criteria: '회기 간 Action Experiment 실행·기록·성찰을 통한 진로 가설 검증 경험'
    },
    {
      target: '학생 (멘티)',
      order: 5,
      metric: '5. 자기효능감 및 지속성',
      criteria: '막히는 상황에서도 작게 시작·조정하며 종료 후에도 지속 실천할 자신감'
    },
    {
      target: '코치 (멘토)',
      order: 1,
      metric: '1. 프로그램 운영 만족도',
      criteria: '5회기 구조, 가이드북, 워크시트의 실효성 및 운영 만족도'
    },
    {
      target: '코치 (멘토)',
      order: 2,
      metric: '2. 코칭 자신감 확보',
      criteria: '학생 주도성을 지키며 질문·경청·행동 설계를 수행하는 자신감 향상도'
    },
    {
      target: '코치 (멘토)',
      order: 3,
      metric: '3. 재참여 및 추천 의향',
      criteria: '차기 기수 코치 재참여 의향 및 동료 코치 추천 의향'
    }
  ] satisfies KpiItem[],
  ethics: [
    {
      title: '비밀보장 및 안전 예외',
      desc: '세션 내용은 학생 동의 없이 외부(학교, 지도교수, 가족 등)에 절대 공유하지 않습니다. 단, 자·타해 위험 등 중대한 안전 위기 시 기관 보호 절차를 우선합니다.'
    },
    {
      title: '명확한 역할 경계',
      desc: '코치는 심리치료사, 취업 알선자, 학업 지도교수가 아닙니다. 심각한 우울·정서 위기 징후 발견 시 전문 심리상담기관 연계를 안내합니다.'
    },
    {
      title: '비식별 최소 기록 원칙',
      desc: '코칭일지에는 실명 대신 비식별 학생 코드(예: DM-2026-001)를 사용하고, 판단적 표현을 배제한 채 사실·통찰·합의된 실험 중심으로 기록합니다.'
    }
  ]
};
