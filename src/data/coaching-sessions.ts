/**
 * ENT-003: CoachingSessionGuide
 * Tab 2 (코칭모델: 사전 세션 + 1~5회기 5단계 인터랙티브 프레임 + 산출물 + Between Session + 일지/성과평가)
 * Sourced from Dream_Milestone_Program_Guide.md Part 2.
 */

export type StageKey = 'intro' | 'explore' | 'deepen' | 'action' | 'close' | 'between';

export interface StageGuide {
  key: Exclude<StageKey, 'between'>;
  stepNumber: number;
  label: string;
  duration: string;
  purpose: string;
  questions: string[];
  empathyGuide: string[];
  checkpoints: { id: string; text: string }[];
}

export interface BetweenSessionGuide {
  badge: string;
  title: string;
  summary: string;
  tasks: string[];
  coachNote: string;
}

export interface CoachingSessionData {
  slug: string;
  sessionNumber: number;
  badge: string;
  title: string;
  theme: string;
  goal: string;
  coreQuestion: string;
  deliverableName: string;
  deliverableColumns: string[];
  deliverableRows?: string[];
  secondaryDeliverable?: {
    name: string;
    columns: string[];
    rows: string[];
  };
  stages: StageGuide[];
  betweenSession?: BetweenSessionGuide;
  logFields: { role: '코치 기록' | '학생 기록'; item: string; hint: string }[];
  prevLink: { href: string; label: string };
  nextLink?: { href: string; label: string };
}

export const COMMON_STAGE_FRAME = [
  { step: '1. 도입 (Intro)', time: '10분', purpose: '라포·컨디션 확인, 이전 실험 회고, 오늘의 의제·기대 결과 합의', check: '학생이 오늘의 초점과 원하는 결과를 자기 언어로 정했는가?' },
  { step: '2. 탐색 (Explore)', time: '15분', purpose: '경험·사실·감정·가치·자원을 구체적 장면 중심으로 경청', check: '코치의 해석이나 평가 없이 학생의 언어가 중심이 되었는가?' },
  { step: '3. 심화 (Deepen)', time: '15분', purpose: '반복 패턴·핵심 의미·선택 기준 자각 및 회기 산출물 구조화', check: '통찰이나 키워드를 코치가 대신 결론 내리지 않았는가?' },
  { step: '4. 실행설계 (Action)', time: '12분', purpose: '다음 회기 전 가설을 검증할 작고 현실적인 Action Experiment 설계', check: '행동이 학생 소유이며 실행 가능성(7점 이상)이 확인되었는가?' },
  { step: '5. 마무리 (Close)', time: '8분', purpose: '오늘의 핵심 통찰 한 문장 정리, 산출물·기록 방식 확인', check: '오늘 가져갈 의미와 다음 실험이 명료하게 합의되었는가?' }
];

export const PRE_SESSION_DATA = {
  badge: 'TAB 2 · PRE-SESSION',
  title: '사전 세션 (Pre-Session): 합의 및 1회기 준비',
  purpose: '첫 만남의 긴장을 낮추고 프로그램의 4대 원칙·비밀보장·역할 경계에 합의하며, 1회기에 가져올 경험 탐색 재료를 준비합니다.',
  prepCheckpoints: [
    {
      id: 'pre-prep-1',
      title: '환경 및 워크시트 점검',
      text: '조용하고 방해받지 않는 온·오프라인 코칭 공간을 확보하고, 온라인 진행 시 화상 링크·음향·산출물 워크시트를 사전 점검했다.'
    },
    {
      id: 'pre-prep-2',
      title: '코치 마인드셋 정렬 (Coaching First)',
      text: '“내가 이 학생의 진로를 해결해 주어야 한다”는 조급함을 내려놓고, “학생 안에 이미 자원과 답이 있다”는 호기심 상태로 전환했다.'
    },
    {
      id: 'pre-prep-3',
      title: '일정 및 소통 채널 확인',
      text: '1~5회기 잠정 일정과 회기 간 소통 채널(이메일, 메신저 등) 및 응답 가능 시간을 사전에 정리했다.'
    }
  ],
  preQuestionnaireMatrix: [
    {
      category: '현재 고민',
      question: '지금 나의 학업·연구·진로 상황에서 가장 자주 떠오르는 고민이나 막막한 질문 1가지는 무엇인가요?',
      coachPrinciple: '성격·직무 적합성으로 단정하지 않고 반복 단어와 정서를 포착하여 1회기 도입 의제로 그대로 되돌려 탐색합니다.'
    },
    {
      category: '기대 결과',
      question: '5회기가 끝났을 때, 나에게 어떤 변화나 결과물이 남으면 좋겠나요?',
      coachPrinciple: '취업 컨설팅·자소서 첨삭 같은 처방성 기대가 큰 경우 Welcome Call에서 Coaching First 원칙을 부드럽게 안내합니다.'
    },
    {
      category: '경험 자산',
      question: '최근 2~3년간 기억에 남는 경험 3가지와 시간 가는 줄 몰랐던 몰입 경험 1가지는 무엇인가요?',
      coachPrinciple: '사건의 크기나 스펙 가치가 아니라 학생이 부여한 의미와 에너지가 올라간 조건에 주목합니다.'
    },
    {
      category: '대화 선호 및 주의사항',
      question: '코치에게 바라는 대화 방식이나 조심해 주었으면 하는 주제가 있나요?',
      coachPrinciple: '민감 영역(가족 갈등, 휴학 사유 등)을 존중하고 심리적 안전감을 최우선으로 확보합니다.'
    }
  ],
  welcomeCallTimeline: [
    {
      time: '0~3분',
      stage: '1. 환영 및 라포 형성',
      purpose: '편안한 인사로 긴장을 풀고 프로그램 참여를 환영합니다.',
      script: '“반갑습니다. 앞으로 5회기 여정을 함께할 코치 OOO입니다. 이 시간은 서로의 역할과 진행 방식을 편하게 맞추는 짧은 만남입니다.”'
    },
    {
      time: '3~7분',
      stage: '2. 4대 원칙 및 비밀보장 합의',
      purpose: 'Coaching First와 Experience on Demand 경계, 비밀보장 원칙을 명확히 안내합니다.',
      script: '“이 과정은 제가 정답을 정해드리는 자리가 아니라, 본인만의 기준과 이정표를 찾도록 돕는 파트너십입니다. 필요 시 제 경험을 짧게 나눌 수 있지만 결정은 언제나 본인이 합니다. 모든 대화는 비밀이 보장됩니다.”'
    },
    {
      time: '7~11분',
      stage: '3. 사전 질문지 확인 및 기대 조율',
      purpose: '사전 질문지에서 인상 깊었던 키워드를 언급하고 1회기 초점을 가볍게 확인합니다.',
      script: '“사전 질문지에 적어주신 ‘___’ 부분이 인상 깊었습니다. 5회기를 마칠 때 무엇이 가장 선명해지면 좋을지 1회기에서 함께 다뤄봅시다.”'
    },
    {
      time: '11~15분',
      stage: '4. 1회기 준비 안내 및 일정 확정',
      purpose: '1회기 일시·접속 링크·연락 채널을 확정하고 가벼운 준비 과제를 안내합니다.',
      script: '“1회기 전까지 최근 기억에 남는 경험 세 가지만 편하게 떠올려 와 주세요.”'
    }
  ]
};

export const COACHING_SESSIONS: Record<string, CoachingSessionData> = {
  'session-1': {
    slug: 'session-1',
    sessionNumber: 1,
    badge: 'SESSION 01 · DISCOVER ME',
    title: '1회기: Discover Me (경험·강점·가치·관심 탐색)',
    theme: 'Discover Me: 경험·강점·가치·관심 탐색',
    goal: '과거 경험을 스토리로 재해석해 고유한 강점·가치·관심 패턴을 발견하고 커리어 질문을 명료화한다.',
    coreQuestion: '“나는 어떤 순간에 살아 있음을 느끼고, 무엇을 중요하게 여기는가?”',
    deliverableName: 'My Strength & Value Map',
    deliverableColumns: [
      '기억에 남는 경험 장면',
      '내가 한 구체적 행동',
      '에너지가 올라간 이유',
      '드러난 강점 (Strength)',
      '중요하게 여긴 가치 (Value)',
      '더 탐색할 관심 (Interest)'
    ],
    stages: [
      {
        key: 'intro',
        stepNumber: 1,
        label: '1. 도입',
        duration: '10분',
        purpose: '심리적 안전감 형성, 사전 세션 연결, 오늘 세션 의제 및 원하는 결과 합의',
        questions: [
          '오늘 1회기 자리에 어떤 마음과 컨디션으로 오셨나요?',
          'Welcome Call 이후 오늘까지 진로나 나 자신에 대해 새롭게 떠오른 생각이 있나요?',
          '오늘 60분 대화가 끝났을 때, 나에 대해 어떤 점이 조금 더 선명해지면 좋겠나요?'
        ],
        empathyGuide: [
          '처음 시작하는 자리라 막막하거나 긴장되는 마음이 드는 건 아주 자연스러운 일이에요.',
          '복잡한 머릿속을 오늘 함께 하나씩 꺼내어 정리해 보는 시간으로 삼아봅시다.'
        ],
        checkpoints: [
          { id: 's1-intro-1', text: '학생이 오늘 다루고 싶은 탐색 초점과 기대 결과를 자기 언어로 설정했는가?' },
          { id: 's1-intro-2', text: '비밀보장과 자유로운 대화 분위기를 다시 한 번 확인했는가?' }
        ]
      },
      {
        key: 'explore',
        stepNumber: 2,
        label: '2. 탐색',
        duration: '15분',
        purpose: '대학(원) 생활 및 과거의 주요 경험 2~3가지를 사실과 감정·에너지 중심으로 경청',
        questions: [
          '지금까지 살아오면서 시간 가는 줄 모르고 몰입했거나 에너지가 올랐던 경험은 언제였나요?',
          '그때 구체적으로 어떤 역할을 맡았고, 무엇이 특히 즐거웠나요?',
          '반대로 유난히 에너지가 빠지거나 “이건 나와 맞지 않는다”고 느꼈던 순간은 어떤 상황이었나요?'
        ],
        empathyGuide: [
          '그 장면에서 정말 많은 에너지를 쓰셨군요. 당시 느꼈던 생생한 몰입감(또는 답답함)이 그대로 전해집니다.',
          '작아 보일 수 있는 경험이지만 그 안에서 성실하게 버텨낸 힘이 느껴집니다.'
        ],
        checkpoints: [
          { id: 's1-explore-1', text: '경험을 스펙이나 성과로 평가하지 않고 구체적 장면(사실+감정)으로 경청했는가?' }
        ]
      },
      {
        key: 'deepen',
        stepNumber: 3,
        label: '3. 심화',
        duration: '15분',
        purpose: '탐색한 경험 속에서 반복되는 강점, 핵심 가치, 관심 패턴을 추출하여 My Strength & Value Map으로 구조화',
        questions: [
          '방금 말씀하신 여러 경험을 모아놓고 보면, 반복적으로 드러나는 본인만의 강점이나 방식은 무엇인가요?',
          '그 일이 의미 있게 느껴졌던 이유는, 그 안에 어떤 가치가 지켜졌기 때문일까요?',
          '남들의 시선이나 취업 조건을 잠시 내려놓는다면, 요즘 가장 호기심이 가는 주제나 문제는 무엇인가요?'
        ],
        empathyGuide: [
          '이야기를 듣다 보니 특정 강점과 가치 키워드가 계속 반복해서 빛나고 있네요.',
          '성과보다 본인이 중요하게 여기는 가치가 지켜질 때 눈이 반짝이는 모습이 인상적입니다.'
        ],
        checkpoints: [
          { id: 's1-deepen-1', text: '코치가 강점·가치를 임의로 명명하지 않고 학생이 직접 단어를 고르도록 도왔는가?' },
          { id: 's1-deepen-2', text: 'My Strength & Value Map에 들어갈 강점·가치·관심 키워드가 도출되었는가?' }
        ]
      },
      {
        key: 'action',
        stepNumber: 4,
        label: '4. 실행설계',
        duration: '12분',
        purpose: '일상에서 강점·가치·에너지 순간을 관찰하고 My Strength & Value Map을 보완하는 Action Experiment 설계',
        questions: [
          '오늘 발견한 강점·가치·에너지 순간을 이번 주 일상에서 어떻게 관찰하고 기록해 볼까요?',
          'My Strength & Value Map을 정리하면서 더 채워보고 싶은 빈칸은 무엇인가요?',
          '부담 없이 시작하려면 기록 방식을 얼마나 간단하게 줄이면 좋을까요?'
        ],
        empathyGuide: [
          '잘해내려는 숙제가 아니라, 이번 주 내 강점과 에너지가 언제 켜지는지 관찰하는 가벼운 실험으로 충분합니다.'
        ],
        checkpoints: [
          { id: 's1-action-1', text: '학생이 스스로 관찰 실험의 횟수·시점·기록 방식을 작고 구체적으로 선택했는가?' }
        ]
      },
      {
        key: 'close',
        stepNumber: 5,
        label: '5. 마무리',
        duration: '8분',
        purpose: '1회기 핵심 통찰 한 문장 요약 및 다음 회기 연결',
        questions: [
          '오늘 1회기를 한 문장으로 요약한다면, 내가 나 자신에 대해 새롭게 알게 된 것은 무엇인가요?',
          '초안으로 만든 My Strength & Value Map을 보면서 어떤 느낌이 드나요?'
        ],
        empathyGuide: [
          '첫 시간부터 자신의 이야기를 솔직하고 깊이 있게 펼쳐주셔서 감사합니다.'
        ],
        checkpoints: [
          { id: 's1-close-1', text: '산출물 초안과 Between Session 1 실험 계획이 명료하게 합의되었는가?' }
        ]
      }
    ],
    betweenSession: {
      badge: 'BETWEEN SESSION 1 · ACTION EXPERIMENT',
      title: '나의 에너지·강점·가치 일상 관찰 실험',
      summary: 'My Strength & Value Map을 완성하고, 1주일간 에너지가 높거나 낮았던 순간을 3회 이상 관찰·기록합니다.',
      tasks: [
        '오늘 대화에서 뽑은 강점·가치 키워드 3가지를 바탕으로 My Strength & Value Map을 마무리합니다.',
        '1주일 동안 에너지가 올라갔거나 내려갔던 순간을 3회 이상 짧게 메모합니다.',
        '기록 공식: “무엇을 했나 / 누구와 있었나 / 어떤 강점·가치가 작동했나 / 다음에도 해보고 싶은가”'
      ],
      coachNote: '목표는 잘한 일을 증명하는 것이 아니라 나에게 맞는 조건을 발견하는 것입니다. 다음 회기 도입에서 숙제 검사가 아닌 배움 탐색으로 다룹니다.'
    },
    logFields: [
      { role: '코치 기록', item: '코칭 일자', hint: '2026.10.05' },
      { role: '코치 기록', item: '학생이 가져온 의제와 기대 결과', hint: '도입 단계 합의 내용' },
      { role: '코치 기록', item: '반복된 단어·중요한 경험 장면 및 발견한 강점·가치·관심', hint: '학생의 언어 중심 기록' },
      { role: '코치 기록', item: '합의한 Between Session 1 Action Experiment', hint: '관찰 방식 및 횟수' },
      { role: '코치 기록', item: '코치 자기성찰', hint: '조언 욕구 관리, 경청 균형, 놓친 신호' }
    ],
    prevLink: { href: '/model/pre', label: '사전 세션 가이드' },
    nextLink: { href: '/model/session-2', label: '2회기 Explore Possibilities' }
  },

  'session-2': {
    slug: 'session-2',
    sessionNumber: 2,
    badge: 'SESSION 02 · EXPLORE POSSIBILITIES',
    title: '2회기: Explore Possibilities (관심 분야·직무·가능성 확장)',
    theme: 'Explore Possibilities: 관심 분야·직무·가능성 확장',
    goal: '1회기 자기이해 단서를 다양한 관심 분야·직무·역할과 연결해 탐색 가능한 커리어 지도를 넓힌다.',
    coreQuestion: '“나의 강점과 가치가 살아날 수 있는 가능성은 무엇인가?”',
    deliverableName: 'Career Possibility Map',
    deliverableColumns: [
      '가능성 영역 (분야·직무·환경)',
      '끌리는 이유 & 연결되는 강점·가치',
      '현재 알고 있는 사실',
      '검증이 필요한 가설 (우려/의문)',
      '다음 탐색 행동 (Action)'
    ],
    stages: [
      {
        key: 'intro',
        stepNumber: 1,
        label: '1. 도입',
        duration: '10분',
        purpose: 'Between Session 1 관찰 실험 회고(배움 중심) 및 2회기 가능성 확장 의제 합의',
        questions: [
          '지난주 에너지·강점 관찰 기록에서 새롭게 눈에 들어온 장면이나 패턴은 무엇인가요?',
          '(미실행 시) 기록하기 어려웠던 한 주간의 생활 리듬이 알려주는 신호는 무엇일까요?',
          '오늘 2회기에서 어떤 가능성의 문을 넓혀보면 가장 도움이 될까요?'
        ],
        empathyGuide: [
          '바쁜 일정 중에 관찰하려고 의식해 본 것 자체가 큰 시작입니다. 못 적은 날이 있었다면 그 또한 지금의 리듬을 보여주는 중요한 단서입니다.'
        ],
        checkpoints: [
          { id: 's2-intro-1', text: '지난주 실험 결과를 평가하지 않고 학생이 발견한 배움에 집중했는가?' }
        ]
      },
      {
        key: 'explore',
        stepNumber: 2,
        label: '2. 탐색',
        duration: '15분',
        purpose: '특정 직업명이나 전공 틀을 넘어 다루고 싶은 문제·대상·환경·역할로 가능성 스펙트럼 확장',
        questions: [
          '지금 머릿속에 떠오르는 진로 방향이 있다면 전공 안팎을 포함해 어떤 것들이 있나요?',
          '직업 이름 대신 “내가 다루고 싶은 문제”, “돕고 싶은 대상”, “일하고 싶은 환경”으로 표현한다면 어떤 모습일까요?',
          '1회기에서 찾은 강점과 가치를 전혀 다른 산업이나 역할에 놓는다면 어떤 일들이 가능할까요?'
        ],
        empathyGuide: [
          '전공과 꼭 같아야 한다는 생각 때문에 선택지가 좁아 보였을 수 있겠네요. 관점을 조금만 넓히니 훨씬 다양한 길이 보이기 시작합니다.'
        ],
        checkpoints: [
          { id: 's2-explore-1', text: '한 가지 정답으로 성급히 좁히지 않고 충분히 가능성을 브레인스토밍하도록 허용했는가?' }
        ]
      },
      {
        key: 'deepen',
        stepNumber: 3,
        label: '3. 심화',
        duration: '15분',
        purpose: '우선 탐색할 2~3개 가능성 후보의 매력과 검증 가설을 구분하여 Career Possibility Map 완성',
        questions: [
          '지금까지 나온 여러 가능성 중, 더 알아보고 싶은 상위 2~3가지 방향을 고른다면 무엇인가요?',
          '각 가능성에서 끌리는 이유(강점·가치 연결점)와 아직 모르는 부분(확인할 가설)은 무엇인가요?',
          '(Experience on Demand 필요 시) 현업에서 이 직무들이 실제로 어떤 일을 하는지 제가 아는 범위에서 2분 정도 참고 정보를 드려볼까요?'
        ],
        empathyGuide: [
          '지금은 평생 직업을 확정하는 단계가 아니라, 탐색해 볼 가치가 있는 가설 지도를 그리는 단계입니다.'
        ],
        checkpoints: [
          { id: 's2-deepen-1', text: '실무 정보나 경험을 공유할 때 SHARE 프로토콜(동의 확인 후 짧은 공유 및 선택권 반환)을 준수했는가?' },
          { id: 's2-deepen-2', text: 'Career Possibility Map에 2~3개 이상의 탐색 후보와 검증할 가설이 구조화되었는가?' }
        ]
      },
      {
        key: 'action',
        stepNumber: 4,
        label: '4. 실행설계',
        duration: '12분',
        purpose: '지도 위의 가설을 머릿속 고민이 아닌 현실 정보와 작은 경험으로 확인할 Action Experiment 설계',
        questions: [
          '지도에 올려둔 가능성 중 이번 주에 가장 먼저 현실을 들여다보고 싶은 분야는 어디인가요?',
          '생각이 아닌 경험·정보로 확인하기 위해 할 수 있는 가장 작은 행동은 무엇일까요? (JD 3건 비교, 현직자/선배 인터뷰, 직무 아티클 요약 등)',
          '실행을 방해할 수 있는 부담이 있다면 문턱을 어떻게 더 낮출 수 있을까요?'
        ],
        empathyGuide: [
          '누군가에게 바로 연락하기 부담스럽다면, 실제 채용공고 3건을 비교해 궁금한 질문 3개를 뽑아보는 것부터 시작해도 훌륭합니다.'
        ],
        checkpoints: [
          { id: 's2-action-1', text: '1~2주 내에 실제로 실행 가능한 구체적 검증 행동(언제·어떤 경로로·무엇을)이 정해졌는가?' }
        ]
      },
      {
        key: 'close',
        stepNumber: 5,
        label: '5. 마무리',
        duration: '8분',
        purpose: '가능성 확장 소감 정리 및 3회기(Gap 탐색) 연결',
        questions: [
          '오늘 Career Possibility Map을 그려보면서 진로를 바라보는 시야가 어떻게 달라졌나요?',
          '이번 주 탐색 실험을 통해 꼭 확인해 보고 싶은 질문 한 가지는 무엇인가요?'
        ],
        empathyGuide: [
          '막연했던 진로 고민이 구체적인 탐색 후보들로 정리되니 훨씬 주도적인 에너지가 느껴집니다.'
        ],
        checkpoints: [
          { id: 's2-close-1', text: '다음 3회기(Find the Gap)로 이어질 연결고리를 안내했는가?' }
        ]
      }
    ],
    betweenSession: {
      badge: 'BETWEEN SESSION 2 · ACTION EXPERIMENT',
      title: '관심 분야·직무 가능성 가설 검증 실험',
      summary: 'Career Possibility Map에서 선택한 1~2개 관심 분야에 대해 현실 정보를 수집하고 가설을 검증합니다.',
      tasks: [
        '채용공고·직무기술서(JD) 3건을 읽고 공통 요구 역량과 과업 정리하기',
        '관심 직무 현직자 인터뷰 또는 선배 커피챗 1회 (또는 직무 인터뷰 글·영상 2편 요약)',
        '탐색 후 “생각과 달랐던 점 / 흥미가 더 생긴 점 / 내 강점이 쓰일 지점(다음 질문)” 3가지를 기록합니다.'
      ],
      coachNote: '학생이 환상이나 막연한 두려움 대신 실제 직무 현실 데이터를 가지고 3회기에 오도록 돕습니다.'
    },
    logFields: [
      { role: '코치 기록', item: '코칭 일자', hint: '2026.10.05' },
      { role: '코치 기록', item: 'Between Session 1 회고에서 드러난 배움', hint: '에너지·강점 관찰 결과' },
      { role: '코치 기록', item: '확장된 가능성 후보(2~3개) 및 검증 가설', hint: 'Career Possibility Map 요약' },
      { role: '코치 기록', item: 'Experience on Demand 공유 여부 및 학생 동의', hint: 'SHARE 프로토콜 적용 여부' },
      { role: '코치 기록', item: '다음 탐색 행동 및 코치 자기성찰', hint: 'Between Session 2 실험 계획' }
    ],
    prevLink: { href: '/model/session-1', label: '1회기 Discover Me' },
    nextLink: { href: '/model/session-3', label: '3회기 Find the Gap' }
  },

  'session-3': {
    slug: 'session-3',
    sessionNumber: 3,
    badge: 'SESSION 03 · FIND THE GAP',
    title: '3회기: Find the Gap (현재와 목표 사이 Gap 탐색)',
    theme: 'Find the Gap: 현재와 목표 사이 Gap 탐색',
    goal: '목표 장면과 현재를 비교해 보유 자원(Have)과 앞으로 채울 요소(Gap)를 구체화한 학습 지도를 만든다.',
    coreQuestion: '“원하는 미래와 현재 사이에서 무엇을 더 알아보고, 갖추고, 경험해야 하는가?”',
    deliverableName: 'Current-Future Gap Map',
    deliverableColumns: [
      '우선 목표 장면',
      '현재 가진 자원·경험 (Have)',
      '더 확인·개발할 요소 (Gap)',
      '최우선 선정 이유',
      '활용 가능한 지원 자원 / 제약 대안',
      '다음 실험 (증거 만들기)'
    ],
    stages: [
      {
        key: 'intro',
        stepNumber: 1,
        label: '1. 도입',
        duration: '10분',
        purpose: 'Between Session 2 가능성 검증 실험 결과 회고 및 3회기 목표 합의',
        questions: [
          '지난주 관심 분야를 직접 알아본 뒤, 머릿속으로 상상하던 것과 실제 현실 사이에 어떤 차이가 보였나요?',
          '그 탐색을 거치며 더 끌리게 된 방향과 내려놓아도 되겠다고 느낀 방향은 무엇인가요?',
          '오늘 3회기에서 현재와 목표 사이의 거리를 살펴볼 때 어떤 부분이 가장 궁금하거나 걱정되나요?'
        ],
        empathyGuide: [
          '직접 찾아보니 준비할 게 많아 보여 압도될 수도 있어요. 하지만 막연한 불안보다 구체적인 현실을 마주한 지금이 훨씬 유리한 출발점입니다.'
        ],
        checkpoints: [
          { id: 's3-intro-1', text: '지난주 탐색 결과를 통해 우선 살펴볼 목표 방향(1~2순위)을 연결했는가?' }
        ]
      },
      {
        key: 'explore',
        stepNumber: 2,
        label: '2. 탐색',
        duration: '15분',
        purpose: '현재 보유한 자원·경험(Have)과 보완이 필요한 요소(Gap)를 함께 점검하고 사실과 불안 해석을 분리',
        questions: [
          '목표 장면과 관련해 현재 시점에서 이미 가지고 있는 경험·역량·자원은 무엇인가요?',
          '반대로 목표에 다가서기 위해 더 알아보고, 갖추고, 경험해야 할 빈칸(Gap)은 무엇인가요?',
          '지금 느끼는 부족함 중에서 “객관적 사실”은 무엇이고, “내가 부족할 거라는 불안한 해석”은 무엇인가요?'
        ],
        empathyGuide: [
          '부족한 점만 보면 끝이 없어 보이지만, 이미 가진 경험 자산들도 꽤 탄탄합니다. 채워진 칸과 빈칸을 나란히 놓고 보니 훨씬 균형이 잡히네요.'
        ],
        checkpoints: [
          { id: 's3-explore-1', text: '학생이 자기비판에 빠지지 않도록 사실(Fact)과 불안한 해석을 구분하도록 질문했는가?' }
        ]
      },
      {
        key: 'deepen',
        stepNumber: 3,
        label: '3. 심화',
        duration: '15분',
        purpose: '파급력이 가장 큰 최우선 핵심 Gap 1~2개를 선별하고 외부 지원 자원 및 제약 대안을 연결하여 Current-Future Gap Map 완성',
        questions: [
          '발견한 여러 Gap을 한 번에 다 채울 수 없다면, 가장 먼저 건드렸을 때 다른 영역까지 풀릴 최우선 핵심 Gap 1~2가지는 무엇일까요?',
          '그 Gap을 메우기 위해 혼자 힘으로 할 것과 학교·교수·선배·프로그램 등 외부 지원 자원을 활용할 수 있는 것은 무엇인가요?',
          '현실 제약조건이 있다면 그 영향 범위와 우회 대안은 무엇인가요?'
        ],
        empathyGuide: [
          '모든 걸 완벽히 채워야 시작할 수 있는 게 아니라, 핵심 Gap 1~2개에 집중하는 것이 가장 현실적인 전략입니다.'
        ],
        checkpoints: [
          { id: 's3-deepen-1', text: 'Current-Future Gap Map에 현재 자산(Have), 핵심 Gap, 지원 자원이 균형 있게 담겼는가?' }
        ]
      },
      {
        key: 'action',
        stepNumber: 4,
        label: '4. 실행설계',
        duration: '12분',
        purpose: '최우선 핵심 Gap을 줄이는 작은 증거 1개를 만드는 Action Experiment 설계',
        questions: [
          '선별한 핵심 Gap을 줄이기 위해 향후 1~2주 안에 작은 증거(결과물/경험)를 하나 만든다면 무엇을 해볼 수 있을까요?',
          '성공·실패 여부가 아니라 이 실험을 통해 확인하고 싶은 학습 기준은 무엇인가요?'
        ],
        empathyGuide: [
          '완벽한 결과물을 내는 게 아니라 “내가 이 Gap을 메우는 데 실제로 움직일 수 있다”는 감각을 확인하는 실험으로 잡아봅시다.'
        ],
        checkpoints: [
          { id: 's3-action-1', text: '60~90분 내에 착수 가능한 구체적인 증거 만들기 실험이 설정되었는가?' }
        ]
      },
      {
        key: 'close',
        stepNumber: 5,
        label: '5. 마무리',
        duration: '8분',
        purpose: 'Gap을 결함이 아닌 성장 과제로 전환하고 4회기 이정표 설계 연결',
        questions: [
          '오늘 Current-Future Gap Map을 완성하고 나니 막막했던 불안이 어떻게 변했나요?',
          '이 Gap 지도가 오늘 나에게 요구하는 첫 걸음은 무엇인가요?'
        ],
        empathyGuide: [
          '빈틈을 직면하는 게 쉽지 않았을 텐데, 차분하게 자원과 성장 과제로 분리해 내신 점이 정말 멋집니다.'
        ],
        checkpoints: [
          { id: 's3-close-1', text: '학생이 Gap을 결함이 아닌 성장 과제로 재해석하고 세션을 마쳤는가?' }
        ]
      }
    ],
    betweenSession: {
      badge: 'BETWEEN SESSION 3 · ACTION EXPERIMENT',
      title: '핵심 Gap 줄이기 & 작은 증거 만들기 실험',
      summary: 'Current-Future Gap Map에서 정한 최우선 Gap 1가지에 대해 60~90분 내 실행 가능한 작은 증거를 만듭니다.',
      tasks: [
        '핵심 역량의 작은 결과물 1개 만들기 (포트폴리오/이력서 1페이지 초안, 분석 메모, 튜토리얼 1개 실습 등)',
        '관심 분야의 실제 과업을 60~90분 체험하거나 지원 자원 1명에게 구체적 피드백 요청하기',
        '실행 후 “예상보다 수월했던 점 / 막혔던 지점 / 필요하다고 느낀 추가 자원”을 기록합니다.'
      ],
      coachNote: '이 실험에서 얻은 실제 속도감과 난이도 데이터가 4회기 이정표(Milestone) 설계의 현실적 기준이 됩니다.'
    },
    logFields: [
      { role: '코치 기록', item: '코칭 일자', hint: '2026.10.05' },
      { role: '코치 기록', item: '목표 장면과 현재 자원으로 확인된 강점(Have)', hint: 'Current-Future Gap Map 요약' },
      { role: '코치 기록', item: '최우선 핵심 Gap 1~2가지와 선정 이유', hint: '사실과 해석 분리 결과' },
      { role: '코치 기록', item: '현실 제약 및 활용 가능한 지원 자원', hint: '사람·제도·대안' },
      { role: '코치 기록', item: 'Between Session 3 실험의 학습 기준 및 코치 성찰', hint: '증거 만들기 계획' }
    ],
    prevLink: { href: '/model/session-2', label: '2회기 Explore Possibilities' },
    nextLink: { href: '/model/session-4', label: '4회기 Build My Milestones' }
  },

  'session-4': {
    slug: 'session-4',
    sessionNumber: 4,
    badge: 'SESSION 04 · BUILD MY MILESTONES',
    title: '4회기: Build My Milestones (단계별 커리어 이정표 설계)',
    theme: 'Build My Milestones: 단계별 커리어 이정표 설계',
    goal: 'Gap 실험 결과를 바탕으로 단기·중기·장기 커리어 이정표와 장애물 대응 대안 경로(Plan B)를 설계한다.',
    coreQuestion: '“내가 다음 장면으로 가기 위해 밟을 현실적 이정표는 무엇인가?”',
    deliverableName: 'Career Milestone',
    deliverableColumns: [
      '시점 구간',
      '이루고 싶은 장면 (Milestone)',
      '필요한 핵심 경험·역량',
      '확인 지표 (완료 증거)',
      '도움 받을 지원 자원',
      '예상 장애물 & 대안 경로 (Plan B)'
    ],
    deliverableRows: ['단기 (0~3개월)', '중기 (3~12개월)', '장기 (1~3년)'],
    stages: [
      {
        key: 'intro',
        stepNumber: 1,
        label: '1. 도입',
        duration: '10분',
        purpose: 'Between Session 3 Gap 도전 실험 회고 및 이정표 설계에 반영할 현실 조건 합의',
        questions: [
          '지난주 핵심 Gap을 직접 건드려보는 작은 도전을 해보셨는데, 예상과 달랐던 점은 무엇인가요?',
          '그 경험을 통해 “이 속도와 방식이 나에게 맞는다(또는 조정이 필요하다)”고 느낀 점은 무엇인가요?',
          '오늘 단계별 이정표를 세울 때 중요하게 반영할 현실 조건(학기 일정, 시험, 연구, 여건 등)은 무엇인가요?'
        ],
        empathyGuide: [
          '직접 부딪혀서 얻은 속도감과 피드백이 오늘 살아 있는 이정표를 만드는 최고의 재료가 될 거예요.'
        ],
        checkpoints: [
          { id: 's4-intro-1', text: '지난주 실험에서 얻은 현실 데이터(속도·난이도·에너지)를 경로 설계에 반영할 준비가 되었는가?' }
        ]
      },
      {
        key: 'explore',
        stepNumber: 2,
        label: '2. 탐색',
        duration: '15분',
        purpose: '목표 시점(1~3년)에서 역산하여 단기(0~3개월)·중기(3~12개월)·장기(1~3년) 주요 전환점과 경험 배치',
        questions: [
          '향후 1~3년 내 도달하고 싶은 장면에서 역산할 때, 그 장면에 도착하기 전 어떤 경험과 관문들이 필요할까요?',
          '단기(0~3개월), 중기(3~12개월), 장기(1~3년) 구간에 각각 어떤 경험이나 결과물이 놓이면 좋을까요?',
          '학업·연구와 병행할 때 무리하지 않고 지속 가능한 나만의 페이스와 우선순위는 무엇인가요?'
        ],
        empathyGuide: [
          '남들의 시간표를 그대로 따라가기보다, 본인의 학업·연구 일정과 에너지 리듬에 맞는 이정표를 세울 때 훨씬 오래 갑니다.'
        ],
        checkpoints: [
          { id: 's4-explore-1', text: '시간축(0~3개월 / 3~12개월 / 1~3년)별 목표와 핵심 활동이 현실적인 호흡으로 배치되었는가?' }
        ]
      },
      {
        key: 'deepen',
        stepNumber: 3,
        label: '3. 심화',
        duration: '15분',
        purpose: '각 이정표의 확인 지표(완료 증거)와 예상 장애물 대응을 위한 유연한 대안 경로(Plan B) 구체화',
        questions: [
          '지금 설계한 Career Milestone에서 각 단계가 순조롭게 진행되고 있음을 보여줄 확인 지표는 무엇인가요?',
          '계획대로 가지 못하게 만들 가장 큰 방해 요소 1~2가지는 무엇일까요? (시험 기간, 의욕 저하, 거절 경험 등)',
          '그 단계가 막히거나 방해 요소가 나타났을 때 아예 포기하지 않고 50% 수준으로 유지하거나 우회할 대안 경로(Plan B)는 무엇일까요?'
        ],
        empathyGuide: [
          '계획이 틀어지는 건 실패가 아니라 조정이 필요하다는 신호입니다. 미리 플랜 B를 정해두면 흔들려도 금방 다시 돌아올 수 있습니다.'
        ],
        checkpoints: [
          { id: 's4-deepen-1', text: 'Career Milestone 각 단계에 확인 지표(눈에 보이는 증거)와 대안 경로(Plan B)가 포함되었는가?' }
        ]
      },
      {
        key: 'action',
        stepNumber: 4,
        label: '4. 실행설계',
        duration: '12분',
        purpose: '첫 번째 단기 이정표(0~3개월)를 즉시 시작하는 파일럿 착수 행동 및 실행 가능성(0~10점) 점검',
        questions: [
          '오늘 세운 첫 번째 이정표의 첫 계단으로, 다음 5회기(종결) 전까지 캘린더에 넣을 가장 작은 행동은 무엇인가요?',
          '이번 주 어느 요일, 몇 시에 그 행동을 실행할 시간을 비워둘 수 있나요?',
          '실행 가능성을 0~10점으로 본다면 몇 점이며, 1점만 더 높이려면 무엇을 조정하면 좋을까요?'
        ],
        empathyGuide: [
          '10점 만점에 7~8점 이상이 나올 때까지 첫 걸음의 크기를 조절하는 것이 핵심입니다.'
        ],
        checkpoints: [
          { id: 's4-action-1', text: '실행 가능성 척도(7점 이상)를 확인하여 학생이 부담 없이 착수할 수준으로 조율했는가?' }
        ]
      },
      {
        key: 'close',
        stepNumber: 5,
        label: '5. 마무리',
        duration: '8분',
        purpose: '나다운 경로 한 문장 정리 및 마지막 5회기(종결·성과평가) 안내',
        questions: [
          '오늘 세운 이 경로가 “나다운 이정표”라고 느껴지는 이유는 무엇인가요?',
          '다음 5회기는 전체 여정을 통합하고 최종 Career Map을 완성하는 시간입니다. 마지막 주간을 보내며 무엇을 확인하고 오고 싶나요?'
        ],
        empathyGuide: [
          '1회기의 막막함에서 출발해 이제 나만의 살아 있는 커리어 이정표까지 세우셨네요. 이번 주 첫 걸음을 응원합니다.'
        ],
        checkpoints: [
          { id: 's4-close-1', text: '5회기 최종 Career Map 통합 및 코치/학생 성과평가 안내를 미리 예고했는가?' }
        ]
      }
    ],
    betweenSession: {
      badge: 'BETWEEN SESSION 4 · ACTION EXPERIMENT',
      title: '첫 단기 이정표 착수 & 최종 Career Map 초안 준비',
      summary: '0~3개월 단기 이정표의 첫 착수 행동을 실제 일정에 넣어 실행하고 5회기 통합 초안을 준비합니다.',
      tasks: [
        '첫 이정표의 시작 행동을 정해진 요일·시간에 실행합니다.',
        '실행 후 “무엇을 했나 / 무엇이 작동했나 / 무엇이 막혔나 / 다음에는 무엇을 조정할까”를 기록합니다.',
        '1~4회기 산출물을 한 장으로 모아볼 최종 My Dream Milestone Career Map 초안을 준비합니다.'
      ],
      coachNote: '종결 회기인 5회기에서 학생이 자신의 변화 서사를 한눈에 통합할 수 있도록 돕습니다.'
    },
    logFields: [
      { role: '코치 기록', item: '코칭 일자', hint: '2026.10.05' },
      { role: '코치 기록', item: '3회기 Gap 실험 회고 및 경로 반영 내용', hint: '속도·현실 조건 조정' },
      { role: '코치 기록', item: '단기(0~3m)·중기(3~12m)·장기(1~3y) 핵심 이정표 및 대안 경로(Plan B)', hint: 'Career Milestone 요약' },
      { role: '코치 기록', item: '첫 이정표 착수 행동과 점검 날짜', hint: '실행 가능성 점수 포함' },
      { role: '코치 기록', item: '5회기 종결을 위해 준비할 사항 및 코치 성찰', hint: '종결 준비 체크' }
    ],
    prevLink: { href: '/model/session-3', label: '3회기 Find the Gap' },
    nextLink: { href: '/model/session-5', label: '5회기 Move Forward' }
  },

  'session-5': {
    slug: 'session-5',
    sessionNumber: 5,
    badge: 'SESSION 05 · MOVE FORWARD & COMPLETION',
    title: '5회기: Move Forward & Completion (실행계획 및 지속 실천 약속)',
    theme: 'Move Forward: 실행계획 및 지속 실천 약속',
    goal: '1~4회기 여정을 통합해 Career Map과 30·60·90일 실행계획을 완성하고 자기주도 지속 시스템을 구축한다.',
    coreQuestion: '“코칭이 끝난 뒤에도 나는 어떤 방식으로 나의 길을 계속 만들 것인가?”',
    deliverableName: 'My Dream Milestone Career Map (5대 통합 구성)',
    deliverableColumns: [
      '1. Discover Me (핵심 강점·가치·관심)',
      '2. Explore Possibilities (우선 가능성 2~3개)',
      '3. Find the Gap (보유 자원 & 최우선 Gap)',
      '4. Build My Milestones (0~3m / 3~12m / 1~3y & Plan B)',
      '5. Self-Coaching Compass (자기질문 2가지 & 지원망)'
    ],
    secondaryDeliverable: {
      name: '30·60·90일 지속 실천 Action Plan',
      columns: ['시점', '꼭 실행할 핵심 행동', '완료·학습 기준', '예상 장애물', '유연한 조정 방법 (Plan B)', '점검 루틴 & 파트너'],
      rows: ['30일', '60일', '90일']
    },
    stages: [
      {
        key: 'intro',
        stepNumber: 1,
        label: '1. 도입',
        duration: '10분',
        purpose: 'Between Session 4 첫 이정표 착수 회고 및 5회기 종결 세션의 의미 합의',
        questions: [
          '지난주 첫 번째 이정표를 실제로 착수해 보셨는데, 어떤 경험이었고 무엇을 배우셨나요?',
          '어느덧 5회기 마지막 시간입니다. 오늘 이 시간을 어떻게 마무리하면 가장 의미 있을까요?'
        ],
        empathyGuide: [
          '1회기부터 지금까지 쉼 없이 자신의 이야기를 탐색하고 직접 행동까지 옮겨오신 과정 자체가 정말 큰 성취입니다.'
        ],
        checkpoints: [
          { id: 's5-intro-1', text: '마지막 회기인 만큼 전체 여정을 돌아보고 축하·인정·자립을 지원하는 분위기를 조성했는가?' }
        ]
      },
      {
        key: 'explore',
        stepNumber: 2,
        label: '2. 탐색',
        duration: '15분',
        purpose: '1~4회기 전체 여정 성찰 및 Before & After 성장 서사 확인',
        questions: [
          '처음 사전 세션·1회기를 시작할 때의 나와 지금의 나를 비교하면 가장 크게 달라진 점은 무엇인가요?',
          '1회기(Strength & Value) → 2회기(Possibility) → 3회기(Gap) → 4회기(Milestone)를 거치며 가장 기억에 남는 발견이나 전환점은 언제였나요?',
          '코칭 과정에서 “내가 이런 힘을 가진 사람이었구나” 하고 새롭게 발견한 모습은 무엇인가요?'
        ],
        empathyGuide: [
          '처음에는 막연했던 고민이 이제 본인만의 분명한 기준과 언어로 정리된 모습이 정말 인상적입니다.'
        ],
        checkpoints: [
          { id: 's5-explore-1', text: '학생이 외적 계획뿐 아니라 내면의 관점·자기효능감 변화를 스스로 언어화하도록 도왔는가?' }
        ]
      },
      {
        key: 'deepen',
        stepNumber: 3,
        label: '3. 심화',
        duration: '15분',
        purpose: 'My Dream Milestone Career Map 최종 통합 및 흔들릴 때 스스로를 지탱할 자기코칭 질문 2가지 수립',
        questions: [
          '지금까지의 모든 산출물을 한 장의 My Dream Milestone Career Map으로 합쳐놓고 보니, 변하지 않을 나만의 핵심 기준은 무엇인가요?',
          '코칭이 끝난 뒤 다시 비교 불안이 올라오거나 실행이 멈출 때, 나 자신에게 던지고 싶은 “자기코칭 질문 2가지”는 무엇인가요?',
          '앞으로 막히거나 조언이 필요할 때 연결할 수 있는 나만의 지지 자원(사람·커뮤니티·학교 프로그램)은 누구/무엇인가요?'
        ],
        empathyGuide: [
          '이제 코치가 옆에 없어도, 오늘 완성한 Career Map과 자기코칭 질문이 든든한 나침반 역할을 해줄 것입니다.'
        ],
        checkpoints: [
          { id: 's5-deepen-1', text: 'My Dream Milestone Career Map의 모든 구성 요소(강점·가치, 가능성, Gap, 이정표, 자기질문)가 일관되게 연결되었는가?' }
        ]
      },
      {
        key: 'action',
        stepNumber: 4,
        label: '4. 실행설계',
        duration: '12분',
        purpose: '코칭 종료 후 30·60·90일 지속 실천 Action Plan 및 주간/월간 자기점검 루틴 확정',
        questions: [
          '내일부터 이어갈 30·60·90일 Action Plan에서 가장 핵심이 되는 실천 약속은 무엇인가요?',
          '매주 또는 매월 스스로의 진척도를 점검할 나만의 회고 루틴(예: 매주 일요일 저녁 10분 점검)을 언제 어떻게 가져가시겠어요?',
          '90일 뒤의 나에게 미리 응원의 한마디를 남긴다면 어떤 말을 해주고 싶나요?'
        ],
        empathyGuide: [
          '완벽하게 매일 해내는 것보다, 멈췄을 때 다시 내 루틴으로 돌아오는 힘을 믿으시면 좋겠습니다.'
        ],
        checkpoints: [
          { id: 's5-action-1', text: '30·60·90일 Action Plan과 주간/월간 자기점검 루틴·점검 파트너가 구체적으로 확정되었는가?' }
        ]
      },
      {
        key: 'close',
        stepNumber: 5,
        label: '5. 마무리',
        duration: '8분',
        purpose: '코치의 진정성 있는 인정 피드백, 코치/학생 성과평가 안내 및 따뜻한 종결 인사',
        questions: [
          '미래의 나에게 남기고 싶은 약속과, 5회기 여정을 완주한 지금의 나에게 건네고 싶은 격려는 무엇인가요?'
        ],
        empathyGuide: [
          '5회기 동안 보여주신 솔직한 성찰과 작은 행동의 용기를 보며 저 역시 많이 배웠습니다. 앞으로 어떤 선택의 순간이 오더라도 본인 안의 강점과 가치를 믿고 나아가시길 진심으로 응원합니다.'
        ],
        checkpoints: [
          { id: 's5-close-1', text: '코치 성과평가 및 학생 성과평가 참여 안내를 완료했는가?' }
        ]
      }
    ],
    logFields: [
      { role: '코치 기록', item: '종결 일자', hint: '2026.10.05' },
      { role: '코치 기록', item: '1~5회기 전체를 통한 학생의 핵심 변화 (Before & After)', hint: '성장 서사 요약' },
      { role: '학생 기록', item: '흔들릴 때 나에게 던질 자기코칭 질문 2가지', hint: 'Self-Coaching Compass' },
      { role: '학생 기록', item: '코칭 종료 후 30·60·90일 핵심 Action 약속 및 점검 루틴', hint: '지속 실천 시스템' }
    ],
    prevLink: { href: '/model/session-4', label: '4회기 Build My Milestones' }
  }
};

export const PERFORMANCE_EVALUATION_SPEC = {
  coachEvaluation: {
    title: '코치(멘토) 성과평가 문항 (5점 척도 6문항 + 서술형 2문항)',
    scaleItems: [
      { area: '프로그램 운영', question: '1. Dream Milestone 5회기 구조와 가이드북·워크시트가 학생의 탐색과 실행을 돕는 데 실질적으로 도움이 되었다.' },
      { area: '코칭 자신감', question: '2. 학생 주도성을 지키면서 경청·질문·행동 설계를 수행할 자신감이 높아졌다.' },
      { area: '원칙 적용', question: '3. Coaching First와 Experience on Demand(동의 후 제한적 공유) 원칙을 균형 있게 적용했다.' },
      { area: '실행 지원', question: '4. 학생의 Action Experiment를 평가가 아닌 학습 데이터로 다루었다.' },
      { area: '재참여 의향', question: '5. 향후 Dream Milestone 코칭 프로그램에 코치로 다시 참여할 의향이 있다.' },
      { area: '추천 의향', question: '6. 동료 코치에게 본 프로그램 참여 및 가이드북 활용을 추천할 의향이 있다.' }
    ],
    essayItems: [
      '가장 효과적이었던 회기·도구 또는 코칭 순간은 무엇이었습니까?',
      '코치로서 새롭게 발견한 강점이나 다음 기수 운영을 위해 개선할 점은 무엇입니까?'
    ]
  },
  studentEvaluation: {
    title: '학생(멘티) 성과평가 문항 (5점 척도 6문항 + 서술형 3문항, 사전·사후 비교)',
    scaleItems: [
      { area: '코칭 만족도', question: '1. 코치는 내 이야기를 충분히 경청·존중해 주었으며 프로그램 전반에 만족한다.' },
      { area: '자기이해 증진', question: '2. 코칭 전보다 나의 강점·가치·관심·에너지 패턴을 내 언어로 더 잘 설명할 수 있다.' },
      { area: '커리어 명료화', question: '3. 앞으로 탐색하거나 시도할 진로 방향과 판단 기준, 단계별 이정표가 선명해졌다.' },
      { area: '실제 Action 경험', question: '4. 회기 간 Action Experiment를 통해 직접 행동으로 진로 가설을 확인하고 배움을 얻었다.' },
      { area: '자기효능감', question: '5. 막히는 상황에서도 작게 시작하고 경로를 조정할 수 있다는 자신감이 생겼다.' },
      { area: '지속 도움도', question: '6. 코칭 종료 후에도 내 커리어 맵을 점검하고 행동을 이어가는 데 지속적인 도움이 될 것이다.' }
    ],
    essayItems: [
      '5회기 코칭을 통해 발견한 가장 큰 나의 변화(생각 또는 행동)는 무엇입니까?',
      '실제로 해본 행동 실험 중 가장 기억에 남는 것과 앞으로 30일 안에 지키고 싶은 약속은 무엇입니까?',
      '프로그램에서 가장 도움이 된 부분과 보완되면 좋을 점은 무엇입니까?'
    ]
  }
};
