/**
 * Dream Milestone Coaching Toolkit — Static UI Design Validation Prototype
 * Source of Truth: DESIGN.md, Dream_Milestone_Program_Guide.md, docs/development/01~05
 * Note: All credentials and sample links in this prototype are fictional.
 */
(function () {
  'use strict';

  var DEMO_PASSWORD = 'scc2026';
  var FICTIONAL_FORMS = {
    coachingLog: 'https://docs.google.com/forms/d/e/1FAIpQLSfDreamMilestoneCoachingLogDemo/viewform',
    coachEval: 'https://docs.google.com/forms/d/e/1FAIpQLSfDreamMilestoneCoachEvalDemo/viewform',
    studentEval: 'https://docs.google.com/forms/d/e/1FAIpQLSfDreamMilestoneStudentEvalDemo/viewform'
  };

  var SESSION_MATRIX = [
    { order: 1, route: 'session-1', name: '1회기', theme: 'Discover Me: 경험·강점·가치·관심 탐색', question: '나는 어떤 순간에 몰입하며 무엇을 중요하게 여기는가?', deliverable: 'My Strength & Value Map', form: '코칭일지 1 (구글폼)' },
    { order: 2, route: 'session-2', name: '2회기', theme: 'Explore Possibilities: 관심 분야·직무·가능성 확장', question: '내 강점과 가치가 살아날 수 있는 가능성은 무엇인가?', deliverable: 'Career Possibility Map', form: '코칭일지 2 (구글폼)' },
    { order: 3, route: 'session-3', name: '3회기', theme: 'Find the Gap: 현재와 목표 사이 Gap 탐색', question: '원하는 미래와 현재 사이에서 무엇을 확인·보완해야 하는가?', deliverable: 'Current-Future Gap Map', form: '코칭일지 3 (구글폼)' },
    { order: 4, route: 'session-4', name: '4회기', theme: 'Build My Milestones: 단계별 커리어 이정표 설계', question: '다음 장면으로 가기 위해 밟을 현실적 이정표와 대안은?', deliverable: 'Career Milestone', form: '코칭일지 4 (구글폼)' },
    { order: 5, route: 'session-5', name: '5회기', theme: 'Move Forward: 실행계획 및 지속 실천 약속', question: '코칭 종료 후에도 어떤 시스템으로 내 길을 이어갈 것인가?', deliverable: 'Action Plan + My Dream Milestone Career Map', form: '코치/학생 성과평가 2종' }
  ];

  var SESSIONS = {
    'session-1': {
      num: 1,
      badge: 'SESSION 01',
      title: '1회기: Discover Me (경험·강점·가치·관심 탐색)',
      goal: '과거 경험을 스펙이 아닌 스토리로 재해석하여 고유한 강점·가치·관심 패턴을 발견하고 현재의 커리어 질문을 명료화한다.',
      coreQuestion: '“나는 어떤 순간에 몰입하며 무엇을 중요하게 여기는가?”',
      deliverable: 'My Strength & Value Map',
      deliverableCols: ['기억에 남는 경험 장면', '내가 한 구체적 행동', '에너지가 올라간 이유', '드러난 강점', '중요하게 여긴 가치', '더 탐색할 관심'],
      betweenTitle: 'Between Session 1: 일상 속 에너지·강점 3회 관찰 실험',
      betweenDesc: '1주일간 에너지가 높거나 낮았던 순간을 3회 이상 짧게 기록하고(무엇을 했나 / 누구와 있었나 / 어떤 강점·가치가 작동했나) My Strength & Value Map을 보완합니다.',
      stages: {
        intro: { label: '1. 도입 (10분)', purpose: '심리적 안전감 형성, 오늘 세션 의제 및 원하는 결과 합의', questions: ['오늘 1회기 자리에 어떤 마음과 컨디션으로 오셨나요?', '오늘 60분 대화가 끝났을 때 나에 대해 무엇이 조금 더 선명해지면 좋겠나요?'], empathy: '처음이라 막막하거나 긴장되는 마음은 아주 자연스럽습니다.', checkId: 's1-intro', checkText: '학생이 오늘의 탐색 초점을 자기 언어로 직접 설정했는가?' },
        explore: { label: '2. 탐색 (15분)', purpose: '기억에 남는 경험 2~3가지를 사실과 감정 중심으로 경청', questions: ['시간 가는 줄 모르고 몰입했거나 에너지가 올랐던 순간은 언제였나요?', '그때 구체적으로 어떤 행동을 했고, 반대로 유난히 에너지가 빠졌던 순간은 언제였나요?'], empathy: '그 장면에서 당시의 생생한 에너지와 성실하게 버텨낸 힘이 전해집니다.', checkId: 's1-explore', checkText: '스펙 평가가 아닌 구체적 장면(사실+감정)으로 경청했는가?' },
        deepen: { label: '3. 심화 (15분)', purpose: '반복되는 강점·핵심 가치·관심 패턴 추출 및 산출물 구조화', questions: ['여러 경험에서 반복적으로 드러나는 나다운 방식(강점)은 무엇인가요?', '그 일이 의미 있었던 이유는 어떤 가치가 지켜졌기 때문일까요?'], empathy: '이야기 속에서 본인만의 강점과 가치 키워드가 반복해서 빛나고 있네요.', checkId: 's1-deepen', checkText: '코치가 명명하지 않고 학생이 직접 강점·가치 단어를 골랐는가?' },
        action: { label: '4. 실행설계 (12분)', purpose: '일상 속 강점·가치·에너지 순간 관찰 실험 설계', questions: ['오늘 발견한 강점·가치·에너지 순간을 이번 주 일상에서 어떻게 관찰해 볼까요?', '부담 없이 실행하려면 기록 방식을 얼마나 간단하게 만들면 좋을까요?'], empathy: '잘해내려는 숙제가 아니라 나를 관찰하는 가벼운 실험이면 충분합니다.', checkId: 's1-action', checkText: '관찰 횟수와 기록 방식이 구체적이고 작게 설계되었는가?' },
        close: { label: '5. 마무리 (8분)', purpose: '1회기 핵심 통찰 한 문장 요약 및 다음 회기 연결', questions: ['오늘 내가 나 자신에 대해 새롭게 알게 된 한 문장은 무엇인가요?', '초안으로 만든 My Strength & Value Map을 보니 어떤 느낌이 드나요?'], empathy: '첫 시간부터 자신의 이야기를 솔직하게 펼쳐주셔서 감사합니다.', checkId: 's1-close', checkText: '산출물 초안과 Between Session 1 실험이 명료하게 합의되었는가?' }
      }
    },
    'session-2': {
      num: 2,
      badge: 'SESSION 02',
      title: '2회기: Explore Possibilities (관심 분야·직무·가능성 확장)',
      goal: '1회기의 자기이해 단서를 다양한 관심 분야·직무·환경·역할과 연결하여 탐색할 만한 가능성의 지도를 넓힌다.',
      coreQuestion: '“내 강점과 가치가 살아날 수 있는 분야·직무는 무엇인가?”',
      deliverable: 'Career Possibility Map',
      deliverableCols: ['가능성 영역 (분야·직무·환경)', '끌리는 이유 & 강점·가치 연결', '현재 알고 있는 사실', '검증이 필요한 가설', '다음 탐색 행동'],
      betweenTitle: 'Between Session 2: 관심 분야·직무 현실 가설 검증 실험',
      betweenDesc: '우선 탐색 후보 1~2개에 대해 채용공고(JD) 3건 비교, 현직자/선배 인터뷰 1회, 또는 직무 콘텐츠 2편 요약 후 “생각과 달랐던 점 / 더 끌린 점 / 다음 질문”을 기록합니다.',
      stages: {
        intro: { label: '1. 도입 (10분)', purpose: 'Between Session 1 관찰 결과 회고(배움 중심) 및 2회기 의제 합의', questions: ['지난주 에너지·강점 관찰 기록에서 새롭게 눈에 들어온 장면은 무엇인가요?', '(미실행 시) 기록하기 어려웠던 한 주간의 리듬이 알려주는 신호는 무엇일까요?'], empathy: '관찰하려고 의식해 본 것 자체가 지금의 리듬을 보여주는 중요한 데이터입니다.', checkId: 's2-intro', checkText: '실행 여부를 평가하지 않고 학생이 발견한 배움에 집중했는가?' },
        explore: { label: '2. 탐색 (15분)', purpose: '직업명 틀을 넘어 문제·대상·환경·역할 중심으로 가능성 확장', questions: ['직업명 대신 다루고 싶은 문제나 일하고 싶은 환경으로 말한다면 어떤 모습인가요?', '1회기 강점과 가치를 전공 안팎의 영역에 연결한다면 어떤 후보들이 떠오르나요?'], empathy: '전공이라는 틀을 잠시 넓히니 훨씬 다양한 선택지가 보이기 시작하네요.', checkId: 's2-explore', checkText: '한 가지 정답으로 좁히지 않고 충분히 가능성을 브레인스토밍했는가?' },
        deepen: { label: '3. 심화 (15분)', purpose: '우선 탐색할 2~3개 가능성 후보와 검증 가설을 Career Possibility Map으로 구조화', questions: ['떠오른 가능성 중 우선 탐색해 보고 싶은 2~3가지는 무엇인가요?', '각 가능성에서 끌리는 이유와 아직 모르는 부분(확인할 가설)은 무엇인가요?'], empathy: '지금은 평생 직업을 확정하는 게 아니라 탐색할 가설 지도를 그리는 단계입니다.', checkId: 's2-deepen', checkText: '실무 정보 제공 시 SHARE 프로토콜(동의 후 짧은 공유)을 준수했는가?' },
        action: { label: '4. 실행설계 (12분)', purpose: '머릿속 가설을 현실 정보·경험으로 확인할 작은 탐색 실험 설계', questions: ['지도 위의 가설을 현실 정보로 확인할 가장 작은 행동은 무엇일까요?', '언제·어떤 경로(JD 분석, 현직자 대화, 아티클 분석 등)로 확인해 볼까요?'], empathy: '커피챗이 부담스럽다면 채용공고 3건을 비교해 질문 3개를 뽑는 것부터 시작해도 좋습니다.', checkId: 's2-action', checkText: '1~2주 내 즉시 실행 가능한 구체적 탐색 실험이 정해졌는가?' },
        close: { label: '5. 마무리 (8분)', purpose: '가능성 확장 소감 정리 및 3회기 Gap 탐색 연결', questions: ['Career Possibility Map을 그려보며 진로를 바라보는 시야가 어떻게 달라졌나요?', '이번 실험을 통해 가장 확인하고 싶은 질문 한 가지는 무엇인가요?'], empathy: '막연한 고민이 구체적인 탐색 후보들로 정리되니 훨씬 주도적인 에너지가 느껴집니다.', checkId: 's2-close', checkText: '3회기(Gap 탐색)와의 연결고리를 안내했는가?' }
      }
    },
    'session-3': {
      num: 3,
      badge: 'SESSION 03',
      title: '3회기: Find the Gap (현재와 목표 사이 Gap 탐색)',
      goal: '우선 목표 장면을 설정하고 현재 보유한 자원(Have)과 더 확인·개발할 요소(Gap)를 비판단적으로 분리하여 학습 지도를 완성한다.',
      coreQuestion: '“원하는 미래와 현재 사이에서 무엇을 확인·보완해야 하는가?”',
      deliverable: 'Current-Future Gap Map',
      deliverableCols: ['우선 목표 장면', '현재 가진 자원·경험 (Have)', '더 확인·개발할 요소 (Gap)', '최우선 선정 이유', '지원 자원 / 제약 대안', '다음 실험 (증거 만들기)'],
      betweenTitle: 'Between Session 3: 최우선 핵심 Gap 줄이기(증거 1개 만들기) 실험',
      betweenDesc: '최우선 Gap 1개를 줄이는 60~90분 내의 작은 증거 1개(포트폴리오 1페이지 초안, 도구 실습 메모, 지원 자원 1명 피드백 요청 등)를 실행합니다.',
      stages: {
        intro: { label: '1. 도입 (10분)', purpose: '가능성 검증 경험 회고 및 3회기 Gap 탐색 초점 합의', questions: ['지난주 가능성을 직접 알아본 뒤 상상했던 것과 현실 사이에 어떤 차이가 보였나요?', '오늘 현재와 목표 사이의 거리를 점검할 때 가장 살펴보고 싶은 부분은 어디인가요?'], empathy: '막연한 불안보다 구체적인 현실을 마주한 지금이 훨씬 유리한 출발점입니다.', checkId: 's3-intro', checkText: '지난주 탐색 결과를 바탕으로 우선 목표 방향을 연결했는가?' },
        explore: { label: '2. 탐색 (15분)', purpose: '현재 보유 자원(Have)과 보완 요소(Gap), 사실과 불안한 해석을 분리', questions: ['목표 장면과 관련해 현재 내가 이미 가지고 있는 자원·경험·강점은 무엇인가요?', '지금 느끼는 부족함 중 객관적 사실과 막연한 불안 해석을 구분해 본다면요?'], empathy: '부족한 점만 보면 압도되기 쉽지만, 이미 가진 자원들과 나란히 놓아보니 훨씬 균형이 잡히네요.', checkId: 's3-explore', checkText: '학생이 자기비판에 빠지지 않도록 사실과 해석을 분리했는가?' },
        deepen: { label: '3. 심화 (15분)', purpose: '파급력이 가장 큰 핵심 Gap 1~2개 선별 및 지원 자원 연결', questions: ['여러 Gap 중 지금 가장 먼저 건드렸을 때 파급력이 클 최우선 핵심 Gap 1~2가지는 무엇인가요?', '이 Gap을 줄이기 위해 활용할 수 있는 외부 지원 자원과 제약 대안은 무엇인가요?'], empathy: '모든 빈칸을 다 채워야 시작하는 게 아니라 핵심 Gap 1~2개에 집중하는 것이 가장 현실적인 전략입니다.', checkId: 's3-deepen', checkText: 'Current-Future Gap Map에 현재 자원과 핵심 Gap, 지원 자원이 균형 있게 담겼는가?' },
        action: { label: '4. 실행설계 (12분)', purpose: '핵심 Gap을 줄이는 구체적 증거 1개 만들기 실험 설계', questions: ['향후 1~2주 안에 이 핵심 Gap을 줄이는 작은 증거를 하나 만든다면 무엇을 해볼까요?', '성공/실패가 아니라 이 실험에서 얻고 싶은 학습 기준은 무엇인가요?'], empathy: '완벽한 결과물이 아니라 내가 이 Gap을 메우기 위해 실제로 움직일 수 있다는 감각을 만드는 실험입니다.', checkId: 's3-action', checkText: '60~90분 내 착수 가능한 구체적 증거 만들기 실험인가?' },
        close: { label: '5. 마무리 (8분)', purpose: 'Gap에 대한 관점 전환(결함 → 성장 과제) 확인', questions: ['Current-Future Gap Map을 정리하고 나니 막연했던 불안이 어떻게 바뀌었나요?', '이 Gap 지도가 오늘 나에게 요구하는 첫 걸음은 무엇인가요?'], empathy: '빈틈을 결함이 아닌 성장 과제로 전환해 내신 점이 정말 멋집니다.', checkId: 's3-close', checkText: '학생이 Gap을 성장 과제로 재해석하고 세션을 마쳤는가?' }
      }
    },
    'session-4': {
      num: 4,
      badge: 'SESSION 04',
      title: '4회기: Build My Milestones (단계별 커리어 이정표 설계)',
      goal: '확인된 방향과 Gap 실험 데이터를 바탕으로 단기(0~3개월)·중기(3~12개월)·장기(1~3년) 이정표와 대안 경로(Plan B)를 설계한다.',
      coreQuestion: '“다음 장면으로 가기 위해 밟을 현실적 이정표와 대안은?”',
      deliverable: 'Career Milestone',
      deliverableCols: ['시점 구간 (0~3m / 3~12m / 1~3y)', '이루고 싶은 장면', '필요한 핵심 경험·역량', '확인 지표 (완료 증거)', '도움 받을 지원 자원', '예상 장애물 & 대안 경로 (Plan B)'],
      betweenTitle: 'Between Session 4: 첫 단기 이정표 착수 및 최종 Career Map 초안 준비',
      betweenDesc: '0~3개월 단기 이정표의 첫 착수 행동을 실제 일정에 넣어 실행하고, 1~4회기 산출물을 한 장으로 모은 My Dream Milestone Career Map 초안을 준비합니다.',
      stages: {
        intro: { label: '1. 도입 (10분)', purpose: 'Gap 줄이기 실험 회고 및 현실 조건(학기·연구·생활) 확인', questions: ['지난주 핵심 Gap을 직접 건드려보는 실험을 해보니 예상과 달랐던 점은 무엇인가요?', '오늘 이정표를 세울 때 중요하게 반영할 현실 조건은 무엇인가요?'], empathy: '직접 부딪혀서 얻은 속도감과 피드백이 오늘 살아 있는 이정표를 만드는 최고의 재료입니다.', checkId: 's4-intro', checkText: '지난주 실험에서 얻은 현실 데이터를 경로 설계에 반영했는가?' },
        explore: { label: '2. 탐색 (15분)', purpose: '0~3개월 / 3~12개월 / 1~3년 시간축별 전환점과 경험 역산', questions: ['향후 1~3년 내 도달하고 싶은 장면에서 역산할 때 각 구간에 어떤 경험이 놓이면 좋을까요?', '학업·연구와 병행하며 지속 가능한 나만의 페이스와 우선순위는 무엇인가요?'], empathy: '남들의 시간표가 아니라 본인의 에너지와 여건에 맞는 시간표를 세울 때 끝까지 갈 수 있습니다.', checkId: 's4-explore', checkText: '단기·중기·장기 이정표가 현실적인 호흡으로 배치되었는가?' },
        deepen: { label: '3. 심화 (15분)', purpose: '확인 지표(완료 증거)와 장애물 대응 대안 경로(Plan B) 구체화', questions: ['각 단계가 진행되고 있음을 보여줄 눈에 보이는 확인 지표는 무엇인가요?', '방해 요소가 생길 때 포기하지 않고 50% 수준으로 유지할 대안 경로(Plan B)는 무엇인가요?'], empathy: '계획이 흔들리는 건 실패가 아니라 조정이 필요하다는 신호입니다. Plan B가 있으면 언제든 다시 걸을 수 있습니다.', checkId: 's4-deepen', checkText: '고정된 단일 계획이 아닌 대안 경로(Plan B)와 지원 자원이 포함되었는가?' },
        action: { label: '4. 실행설계 (12분)', purpose: '첫 번째 단기 이정표의 즉시 착수 행동 및 실행 가능성(0~10점) 점검', questions: ['첫 이정표의 착수 행동으로 다음 5회기 전까지 캘린더에 넣을 첫 발자국은 무엇인가요?', '실행 가능성은 10점 만점에 몇 점이며, 1점 더 높이려면 무엇을 조정할까요?'], empathy: '충분히 해볼 만하다고 느껴지는 7~8점 이상이 될 때까지 첫 걸음의 크기를 조절해 봅시다.', checkId: 's4-action', checkText: '실행 가능성 척도(7점 이상)와 실행 일시가 확정되었는가?' },
        close: { label: '5. 마무리 (8분)', purpose: '나다운 이정표 의미 확인 및 5회기 종결 세션 예고', questions: ['이 경로가 나다운 이정표라고 느껴지는 이유는 무엇인가요?', '다음 5회기(종결)를 앞두고 마지막 주간에 무엇을 경험하고 오고 싶나요?'], empathy: '막막했던 고민에서 출발해 이제 나만의 살아 있는 지도까지 세우셨네요.', checkId: 's4-close', checkText: '5회기 최종 Career Map 통합 및 성과평가 일정을 예고했는가?' }
      }
    },
    'session-5': {
      num: 5,
      badge: 'SESSION 05 · COMPLETION',
      title: '5회기: Move Forward & Completion (실행계획 및 지속 실천 약속)',
      goal: '1~4회기 전체 여정을 성찰하여 최종 My Dream Milestone Career Map과 30·60·90일 Action Plan을 완성하고 자기주도 지속 시스템을 구축한다.',
      coreQuestion: '“코칭 종료 후에도 어떤 시스템으로 내 길을 이어갈 것인가?”',
      deliverable: 'Action Plan + My Dream Milestone Career Map',
      deliverableCols: ['시점 (30일 / 60일 / 90일)', '꼭 실행할 핵심 행동', '완료·학습 기준', '예상 장애물', '유연한 조정 방법 (Plan B)', '점검 루틴 & 파트너'],
      betweenTitle: null,
      betweenDesc: null,
      stages: {
        intro: { label: '1. 도입 (10분)', purpose: '첫 이정표 파일럿 실행 회고 및 5회기 종결 의미 합의', questions: ['지난주 첫 이정표를 실제로 착수해 보며 무엇을 배우셨나요?', '5회기 마지막 시간입니다. 오늘 이 시간을 어떻게 마무리하면 가장 의미 있을까요?'], empathy: '1회기부터 지금까지 꾸준히 탐색하고 직접 행동으로 옮겨오신 과정 자체가 큰 성취입니다.', checkId: 's5-intro', checkText: '축하·인정·자립 지원의 종결 분위기를 조성했는가?' },
        explore: { label: '2. 탐색 (15분)', purpose: '1~4회기 전체 여정 성찰 및 Before & After 변화 인식', questions: ['프리세션·1회기의 나와 지금의 나를 비교할 때 가장 크게 달라진 점은 무엇인가요?', '1~4회기 산출물을 돌아볼 때 가장 의미 있었던 발견이나 전환점은 언제였나요?'], empathy: '처음엔 막연했던 고민이 이제 본인만의 분명한 언어와 기준으로 정리되었네요.', checkId: 's5-explore', checkText: '외적 계획뿐 아니라 내면의 관점·자기효능감 변화를 스스로 언어화했는가?' },
        deepen: { label: '3. 심화 (15분)', purpose: 'My Dream Milestone Career Map 통합 및 자기코칭 질문 2가지 수립', questions: ['한 장으로 통합한 Career Map에서 흔들리지 않을 나만의 핵심 기준은 무엇인가요?', '코칭 종료 후 비교 불안이 올라오거나 막힐 때 나 자신에게 던질 자기코칭 질문 2가지는 무엇인가요?'], empathy: '이제 코치가 옆에 없어도 이 지도와 자기질문이 든든한 나침반이 되어줄 것입니다.', checkId: 's5-deepen', checkText: '강점·가치 → 가능성 → Gap → 이정표가 일관되게 통합되었는가?' },
        action: { label: '4. 실행설계 (12분)', purpose: '30·60·90일 Action Plan 및 주간/월간 자기점검 루틴 확정', questions: ['앞으로 30일·60일·90일 동안 이어갈 핵심 행동과 주간/월간 자기점검 루틴은 어떻게 가져갈까요?', '혼자 막힐 때 도움을 요청할 점검 파트너나 지원망은 누구인가요?'], empathy: '완벽하게 매일 해내는 것보다 멈췄을 때 다시 내 루틴으로 돌아오는 힘을 믿으시면 좋겠습니다.', checkId: 's5-action', checkText: '30·60·90일 계획과 점검 리듬·지원망이 구체화되었는가?' },
        close: { label: '5. 마무리 (8분)', purpose: '코치의 진정성 있는 인정 피드백 및 코치/학생 성과평가 안내', questions: ['미래의 나에게 남기고 싶은 약속과 5회기를 완주한 지금의 나에게 건네고 싶은 격려는 무엇인가요?'], empathy: '5회기 동안 보여준 솔직한 성찰과 행동의 용기에 깊이 감사드립니다. 당신이 만든 이정표를 믿고 나아가시길 응원합니다.', checkId: 's5-close', checkText: '코치 성과평가 및 학생 성과평가(구글폼) 참여 안내를 완료했는가?' }
      }
    }
  };

  var RESOURCES = [
    { id: 1, title: 'Dream Milestone Full Guide.pdf', desc: '프리세션~5회기 전체 코치 가이드북 원문 및 운영 표준', format: 'PDF', url: 'https://drive.google.com/drive/u/0/folders/fictional-full-guide' },
    { id: 2, title: '프리세션 사전 준비지', desc: '학생 사전 배포용 질문지 및 1회기 경험 탐색 안내서', format: 'DOCX / PDF', url: 'https://drive.google.com/drive/u/0/folders/fictional-pre-sheet' },
    { id: 3, title: '학생용 My Dream Milestone Workbook', desc: '1~5회기 산출물 템플릿 5종 + Action Experiment 기록지 통합본', format: 'PDF / 노션', url: 'https://drive.google.com/drive/u/0/folders/fictional-workbook' },
    { id: 4, title: '코치 사전 OT 자료 및 운영 매뉴얼', desc: '학생/코치 모집→매칭→OT→코칭→평가 전체 운영 절차 및 역할 합의서', format: 'PDF / PPTX', url: 'https://drive.google.com/drive/u/0/folders/fictional-ot-manual' },
    { id: 5, title: '핵심 질문 라이브러리 & 커리어 가치 카드', desc: '회기별 심화 질문 모음집 및 가치·강점 탐색 카드 리소스', format: 'PDF', url: 'https://drive.google.com/drive/u/0/folders/fictional-question-cards' }
  ];

  var state = {
    authenticated: false,
    route: 'overview',
    stage: 'intro',
    matrixSortAsc: true,
    checklist: loadChecklist()
  };

  function loadChecklist() {
    try {
      var raw = localStorage.getItem('dm.checklist');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveChecklist() {
    try {
      localStorage.setItem('dm.checklist', JSON.stringify(state.checklist));
    } catch (e) {}
  }

  function showToast(msg) {
    var el = document.getElementById('toastContainer');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      el.hidden = true;
    }, 3000);
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem('scd.theme');
    } catch (e) {}
    var theme = saved === 'dark' ? 'dark' : 'light';
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('themeToggleTopBtn');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
    }
    try {
      localStorage.setItem('scd.theme', theme);
    } catch (e) {}
  }

  function setAuthView(isAuth) {
    state.authenticated = isAuth;
    var loginView = document.getElementById('loginView');
    var portalShell = document.getElementById('portalShell');
    if (isAuth) {
      loginView.hidden = true;
      portalShell.hidden = false;
      renderPortalRoute(state.route);
    } else {
      portalShell.hidden = true;
      loginView.hidden = false;
    }
  }

  function renderPortalRoute(route) {
    state.route = route;
    state.stage = 'intro';
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function (btn) {
      var active = btn.getAttribute('data-route') === route;
      btn.classList.toggle('active', active);
      if (active) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    var sidebar = document.getElementById('sidebar');
    var mobileBtn = document.getElementById('mobileMenuBtn');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    }

    var container = document.getElementById('viewContainer');
    if (!container) return;

    if (route === 'overview') {
      container.innerHTML = renderOverviewHTML();
      bindOverviewEvents();
    } else if (route === 'pre') {
      container.innerHTML = renderPreSessionHTML();
      bindChecklistEvents();
    } else if (SESSIONS[route]) {
      container.innerHTML = renderSessionHTML(route);
      bindSessionEvents(route);
    } else if (route === 'references') {
      container.innerHTML = renderReferencesHTML();
      bindChecklistEvents();
    }
  }

  function renderOverviewHTML() {
    var rows = SESSION_MATRIX.slice().sort(function (a, b) {
      return state.matrixSortAsc ? a.order - b.order : b.order - a.order;
    });
    var sortSymbol = state.matrixSortAsc ? '▲' : '▼';

    var matrixRowsHTML = rows.map(function (r) {
      return (
        '<tr class="clickable-row" data-go-route="' + r.route + '" tabindex="0" role="button" aria-label="' + r.name + ' 가이드 열기">' +
        '<td><strong>' + r.name + '</strong></td>' +
        '<td>' + r.theme + '</td>' +
        '<td>' + r.question + '</td>' +
        '<td><code>' + r.deliverable + '</code></td>' +
        '<td><span class="eyebrow-pill">' + r.form + '</span></td>' +
        '</tr>'
      );
    }).join('');

    return (
      '<div class="hero-banner">' +
        '<span class="eyebrow-pill">TAB 1 · PROGRAM OVERVIEW</span>' +
        '<h2>코칭의 흐름은 단순하게, 학생의 탐색은 충분하게</h2>' +
        '<p>삼성코칭동호회(SCC) 코치가 대학생·대학원생이 자기이해(Strength & Value)를 바탕으로 Gap을 발견하고 커리어 이정표(Milestone)와 실행계획(Action Plan)을 수립하도록 지원하는 5회기 다회기 커리어 코칭 프로그램입니다.</p>' +
      '</div>' +

      '<section class="surface-card">' +
        '<h3>1. 4대 운영 원칙 및 SHARE 프로토콜</h3>' +
        '<div class="grid-2">' +
          '<div class="sub-card"><h4>1. Coaching First</h4><p>조언보다 열린 질문·경청·반영을 우선하고 학생이 스스로 답과 가능성을 발견하도록 파트너링합니다.</p></div>' +
          '<div class="sub-card"><h4>2. Experience on Demand</h4><p>학생의 요청이나 명시적 동의가 있을 때만 코치의 실무 경험·정보를 짧게 공유하고 선택권을 돌려줍니다.</p></div>' +
          '<div class="sub-card"><h4>3. Action & Reflection</h4><p>세션 내 대화와 회기 간 실제 행동 실험(Action Experiment)·성찰을 순환하며 미실행도 배움 데이터로 다룹니다.</p></div>' +
          '<div class="sub-card"><h4>4. Guide, not Script</h4><p>경직된 대본이 아니라 학생의 속도·정서·의제에 맞춰 질문과 도구를 유연하게 재구성하는 가이드입니다.</p></div>' +
        '</div>' +
        '<div class="empathy-box" style="margin-top:16px;">' +
          '<strong>💡 Experience on Demand 5단계 (SHARE 프로토콜):</strong><br/>' +
          '1. <strong>S</strong>eek Permission (동의 확인) → 2. <strong>H</strong>ighlight Context (맥락 명시) → 3. <strong>A</strong>dd One Insight (핵심 1가지 공유) → 4. <strong>R</strong>eturn Choice (선택권 반환) → 5. <strong>E</strong>xplore Action (행동 연결)' +
        '</div>' +
      '</section>' +

      '<section class="surface-card">' +
        '<h3>2. 5회기 표준 운영 모델 매트릭스 (행 클릭 시 해당 회기 가이드로 이동)</h3>' +
        '<div class="table-wrap">' +
          '<table class="data-table">' +
            '<thead>' +
              '<tr>' +
                '<th id="sortSessionTh" class="sortable-th">회기 <span class="sort-icon-active">' + sortSymbol + '</span></th>' +
                '<th>주요 초점 (Theme) <span class="sort-icon-neutral">⇅</span></th>' +
                '<th>핵심 탐색 질문</th>' +
                '<th>학생 산출물 (Deliverables)</th>' +
                '<th>외부 연동 폼</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' + matrixRowsHTML + '</tbody>' +
          '</table>' +
        '</div>' +
      '</section>' +

      '<section class="surface-card">' +
        '<h3>3. 기대 성과지표 (KPI) 및 코칭 윤리·안전 경계</h3>' +
        '<div class="grid-2">' +
          '<div class="sub-card">' +
            '<h4>🎓 학생(멘티) 5대 성과지표</h4>' +
            '<ul><li>1. 코칭 만족도 (심리적 안전감·존중 체감)</li><li>2. 자기이해 증진 (강점·가치·관심·에너지 언어화)</li><li>3. 커리어 명료화 (방향성·선택 기준·이정표 구체화)</li><li>4. 실제 Action 경험 (회기 간 가설 검증 실험)</li><li>5. 자기효능감 및 지속성 (종료 후 자기조정 자신감)</li></ul>' +
          '</div>' +
          '<div class="sub-card">' +
            '<h4>🧑‍🏫 코치(멘토) 3대 성과지표 & 윤리 원칙</h4>' +
            '<ul><li>1. 프로그램 운영 만족도 (5회기 구조·가이드 실효성)</li><li>2. 코칭 자신감 확보 (질문·경청·행동 설계 자신감)</li><li>3. 재참여 및 동료 추천 의향</li><li><strong>비밀보장 및 기록 원칙:</strong> 코칭일지에는 실명 대신 비식별 <code>학생 코드</code>만 기록하며, 정서 위기 시 전문 상담기관 연계를 우선합니다.</li></ul>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function bindOverviewEvents() {
    var sortTh = document.getElementById('sortSessionTh');
    if (sortTh) {
      sortTh.addEventListener('click', function () {
        state.matrixSortAsc = !state.matrixSortAsc;
        renderPortalRoute('overview');
      });
    }
    var rows = document.querySelectorAll('[data-go-route]');
    rows.forEach(function (row) {
      row.addEventListener('click', function () {
        renderPortalRoute(row.getAttribute('data-go-route'));
      });
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          renderPortalRoute(row.getAttribute('data-go-route'));
        }
      });
    });
  }

  function renderPreSessionHTML() {
    return (
      '<div class="hero-banner">' +
        '<span class="eyebrow-pill">TAB 2 · PRE-SESSION</span>' +
        '<h2>프리세션: 합의 및 1회기 준비 (15분 Welcome Call)</h2>' +
        '<p>첫 만남 전의 긴장을 낮추고 프로그램 원칙·비밀보장·역할에 합의하며 1회기에 가져올 탐색 재료를 준비합니다.</p>' +
      '</div>' +

      '<section class="surface-card">' +
        '<h3>1. 1회기 사전 준비 체크리스트</h3>' +
        renderCheckbox('pre-check-1', '조용하고 방해받지 않는 온·오프라인 코칭 공간 및 워크시트(PDF/캔버스)를 사전 점검했다.') +
        renderCheckbox('pre-check-2', '“진로를 대신 해결해 주어야 한다”는 조급함을 내려놓고 Coaching First 마인드셋으로 정렬했다.') +
        renderCheckbox('pre-check-3', '1~5회기 잠정 일정과 회기 간 소통 채널을 확인했다.') +
      '</section>' +

      '<section class="surface-card">' +
        '<h3>2. 학생 사전 질문지 4대 검토 기준표</h3>' +
        '<div class="table-wrap">' +
          '<table class="data-table">' +
            '<thead><tr><th>검토 항목</th><th>학생 사전 질문</th><th>코치 해석 및 1회기 활용 원칙</th></tr></thead>' +
            '<tbody>' +
              '<tr><td><strong>현재 고민</strong></td><td>지금 학업·연구·진로에서 가장 자주 떠오르는 막막한 질문 1가지는?</td><td>반복 단어와 정서 파악 → 단정하지 않고 1회기 도입 의제로 그대로 반영</td></tr>' +
              '<tr><td><strong>기대 결과</strong></td><td>5회기가 끝났을 때 어떤 변화나 결과물이 남으면 좋겠나요?</td><td>컨설팅/자소서 첨삭 기대 시 Welcome Call에서 Coaching First 원칙 조율</td></tr>' +
              '<tr><td><strong>경험 자산</strong></td><td>최근 2~3년간 기억에 남는 경험 3가지와 몰입 경험 1가지는?</td><td>사건의 규모보다 학생이 부여한 의미와 에너지 변화에 주목</td></tr>' +
              '<tr><td><strong>대화 선호</strong></td><td>코치에게 바라는 대화 방식이나 조심할 주제가 있나요?</td><td>민감 영역 존중 및 심리적 안전감 확보</td></tr>' +
            '</tbody>' +
          '</table>' +
        '</div>' +
      '</section>' +

      '<section class="surface-card">' +
        '<h3>3. 15분 Welcome Call 타임라인 스크립트</h3>' +
        '<div class="grid-2">' +
          '<div class="sub-card"><h4>0~3분 · 환영 및 라포</h4><p>“반갑습니다. 5회기 여정을 함께할 코치 OOO입니다. 이 시간은 서로의 역할과 진행 방식을 편하게 맞추는 짧은 만남입니다.”</p></div>' +
          '<div class="sub-card"><h4>3~7분 · 원칙 및 비밀보장 합의</h4><p>“이 과정은 정답을 정해드리는 자리가 아니라 본인만의 기준과 이정표를 찾도록 돕는 파트너십입니다. 모든 대화는 비밀이 보장됩니다.”</p></div>' +
          '<div class="sub-card"><h4>7~11분 · 사전 질문지 및 기대 확인</h4><p>“사전 질문지에 적어주신 부분이 인상 깊었습니다. 5회기를 마칠 때 무엇이 가장 선명해지면 좋을지 1회기에서 함께 다뤄봅시다.”</p></div>' +
          '<div class="sub-card"><h4>11~15분 · 1회기 준비 및 일정 확정</h4><p>“1회기 전까지 기억에 남는 경험 3가지만 편하게 떠올려 와 주세요.” (일시·장소/링크 확정)</p></div>' +
        '</div>' +
        '<div style="margin-top:20px; text-align:right;">' +
          '<button type="button" class="btn-primary" onclick="window.__goRoute(\'session-1\')">1회기 Discover Me 가이드로 이동 →</button>' +
        '</div>' +
      '</section>'
    );
  }

  function renderSessionHTML(routeKey) {
    var s = SESSIONS[routeKey];
    var stageKeys = ['intro', 'explore', 'deepen', 'action', 'close'];
    var tabsHTML = stageKeys.map(function (k) {
      var st = s.stages[k];
      var activeClass = state.stage === k ? 'stage-tab-btn active' : 'stage-tab-btn';
      return '<button type="button" role="tab" class="' + activeClass + '" data-stage="' + k + '">' + st.label + '</button>';
    }).join('');

    if (s.betweenTitle) {
      var bClass = state.stage === 'between' ? 'stage-tab-btn active' : 'stage-tab-btn';
      tabsHTML += '<button type="button" role="tab" class="' + bClass + '" data-stage="between">Between Session ' + s.num + '</button>';
    }

    var activePanelHTML = '';
    if (state.stage === 'between' && s.betweenTitle) {
      activePanelHTML =
        '<div class="surface-card">' +
          '<span class="eyebrow-pill">ACTION EXPERIMENT · 회기와 회기 사이</span>' +
          '<h3>' + s.betweenTitle + '</h3>' +
          '<p>' + s.betweenDesc + '</p>' +
          '<div class="empathy-box"><strong>📌 코치 유의사항:</strong> 다음 회기 도입에서 실험 실행 여부를 숙제 검사처럼 평가하지 말고, 실행·미실행 모두에서 학생의 현실 여건과 배움을 탐색하세요.</div>' +
        '</div>';
    } else {
      var currentStage = s.stages[state.stage] || s.stages.intro;
      var qList = currentStage.questions.map(function (q) {
        return '<li>“' + q + '”</li>';
      }).join('');
      activePanelHTML =
        '<div class="surface-card">' +
          '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
            '<h3>' + currentStage.label + '</h3>' +
            '<button type="button" id="resetSessionCheckBtn" class="btn-chip">이 회기 체크 초기화</button>' +
          '</div>' +
          '<p><strong>단계 핵심 목적:</strong> ' + currentStage.purpose + '</p>' +
          '<h4>핵심 코칭 질문</h4>' +
          '<ul class="question-list">' + qList + '</ul>' +
          '<div class="empathy-box"><strong>💬 공감 표현 가이드:</strong> “' + currentStage.empathy + '”</div>' +
          '<h4>코치 체크포인트 (자동 저장)</h4>' +
          renderCheckbox(currentStage.checkId, currentStage.checkText) +
        '</div>';
    }

    var colsHTML = s.deliverableCols.map(function (c) { return '<th>' + c + '</th>'; }).join('');
    var emptyCellsHTML = s.deliverableCols.map(function () { return '<td style="color:var(--color-text-muted);">(학생 작성 영역)</td>'; }).join('');

    var externalCtaHTML = '';
    if (s.num <= 4) {
      var logUrl = FICTIONAL_FORMS.coachingLog + '?usp=pp_url&entry.session=' + encodeURIComponent(s.num + '회기');
      externalCtaHTML =
        '<div class="cta-bar">' +
          '<div>' +
            '<strong>📝 ' + s.num + '회기 코칭일지 (구글폼 연동)</strong>' +
            '<p style="margin:4px 0 0; font-size:var(--font-caption); color:var(--color-text-body);">실명 대신 비식별 학생 코드(예: DM-2026-001)를 사용하여 사실·통찰·합의된 Action Experiment를 기록합니다.</p>' +
          '</div>' +
          '<a href="' + logUrl + '" target="_blank" rel="noopener noreferrer" class="btn-primary">' + s.num + '회기 코칭일지 작성하기 (구글폼) ↗</a>' +
        '</div>';
    } else {
      externalCtaHTML =
        '<div class="surface-card" style="border:2px solid var(--color-primary);">' +
          '<h3>🏁 5회기 최종 성과평가 연동 (구글폼 2종)</h3>' +
          '<p>5회기 종결 시 코치(멘토)와 학생(멘티) 각각의 성과평가를 구글폼으로 진행합니다.</p>' +
          '<div class="grid-2">' +
            '<div class="sub-card">' +
              '<h4>🧑‍🏫 코치(멘토) 성과평가</h4>' +
              '<p>프로그램 운영 만족도, 코칭 자신감, 원칙 적용, 재참여·추천 의향 (5점 척도 6문항 + 서술형)</p>' +
              '<a href="' + FICTIONAL_FORMS.coachEval + '" target="_blank" rel="noopener noreferrer" class="btn-primary">코치 성과평가 작성하기 (구글폼) ↗</a>' +
            '</div>' +
            '<div class="sub-card">' +
              '<h4>🎓 학생(멘티) 성과평가</h4>' +
              '<p>코칭 만족도, 자기이해, 커리어 명료화, 실제 Action 경험, 자기효능감, 지속 도움도 (5점 척도 6문항 + 서술형)</p>' +
              '<div style="display:flex; flex-wrap:wrap; gap:8px;">' +
                '<a href="' + FICTIONAL_FORMS.studentEval + '" target="_blank" rel="noopener noreferrer" class="btn-primary">학생 성과평가 폼 열기 ↗</a>' +
                '<button type="button" id="copyStudentEvalBtn" class="btn-secondary">📋 학생 성과평가 링크 복사</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    return (
      '<div class="hero-banner">' +
        '<span class="eyebrow-pill">TAB 2 · ' + s.badge + '</span>' +
        '<h2>' + s.title + '</h2>' +
        '<p><strong>회기 목표:</strong> ' + s.goal + '<br/><strong>핵심 질문:</strong> ' + s.coreQuestion + ' · <strong>학생 산출물:</strong> <code>' + s.deliverable + '</code></p>' +
      '</div>' +
      '<div class="stage-tabs" role="tablist" aria-label="회기 5단계 및 Between Session 탭">' + tabsHTML + '</div>' +
      activePanelHTML +
      '<section class="surface-card">' +
        '<h3>학생 산출물 템플릿: ' + s.deliverable + '</h3>' +
        '<div class="table-wrap"><table class="data-table"><thead><tr>' + colsHTML + '</tr></thead><tbody><tr>' + emptyCellsHTML + '</tr></tbody></table></div>' +
      '</section>' +
      externalCtaHTML
    );
  }

  function bindSessionEvents(routeKey) {
    var tabBtns = document.querySelectorAll('[data-stage]');
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.stage = btn.getAttribute('data-stage');
        var container = document.getElementById('viewContainer');
        container.innerHTML = renderSessionHTML(routeKey);
        bindSessionEvents(routeKey);
      });
    });

    bindChecklistEvents();

    var resetBtn = document.getElementById('resetSessionCheckBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        var s = SESSIONS[routeKey];
        Object.keys(s.stages).forEach(function (k) {
          delete state.checklist[s.stages[k].checkId];
        });
        saveChecklist();
        var container = document.getElementById('viewContainer');
        container.innerHTML = renderSessionHTML(routeKey);
        bindSessionEvents(routeKey);
        showToast('이 회기의 체크포인트가 초기화되었습니다.');
      });
    }

    var copyBtn = document.getElementById('copyStudentEvalBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(FICTIONAL_FORMS.studentEval).then(function () {
            showToast('학생 성과평가 링크가 클립보드에 복사되었습니다.');
          }).catch(function () {
            showToast('클립보드 복사 완료: ' + FICTIONAL_FORMS.studentEval);
          });
        } else {
          showToast('클립보드 복사 완료: ' + FICTIONAL_FORMS.studentEval);
        }
      });
    }
  }

  function renderReferencesHTML() {
    var cardsHTML = RESOURCES.map(function (r) {
      return (
        '<div class="sub-card" style="display:flex; flex-direction:column; justify-content:space-between; gap:12px;">' +
          '<div>' +
            '<span class="eyebrow-pill">' + r.format + '</span>' +
            '<h4 style="margin-top:10px;">' + r.id + '. ' + r.title + '</h4>' +
            '<p style="margin:0; color:var(--color-text-body);">' + r.desc + '</p>' +
          '</div>' +
          '<a href="' + r.url + '" target="_blank" rel="noopener noreferrer" class="btn-secondary">Google Drive 공유 링크 열기 ↗</a>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="hero-banner">' +
        '<span class="eyebrow-pill">TAB 3 · REFERENCES & OPERATIONS TOOLKIT</span>' +
        '<h2>참조자료 다운로드 허브 및 코칭 도구 활용 맵</h2>' +
        '<p>프리세션~5회기 전체 Full Guide.pdf, 사전 준비지, 학생 워크시트(구글 드라이브 공유 링크) 및 선택형 코칭 도구를 제공합니다.</p>' +
      '</div>' +

      '<section class="surface-card">' +
        '<h3>1. 공식 리소스 다운로드 허브 (Google Drive 공유 주소)</h3>' +
        '<div class="grid-2">' + cardsHTML + '</div>' +
      '</section>' +

      '<section class="surface-card">' +
        '<h3>2. 회기별 선택형 코칭 도구 활용 맵 (Guide, not Script)</h3>' +
        '<div class="table-wrap">' +
          '<table class="data-table">' +
            '<thead><tr><th>적용 회기</th><th>추천 코칭 도구</th><th>핵심 활용 목적 및 프레임</th></tr></thead>' +
            '<tbody>' +
              '<tr><td><strong>1회기 (Discover Me)</strong></td><td>Life Curve / 문제 외재화 / CiT STAR™</td><td>대학(원) 삶의 에너지 변곡점 시각화 및 Story → Target → Action → Recap 대화</td></tr>' +
              '<tr><td><strong>2회기 (Explore Possibilities)</strong></td><td>D-H-B 프레임 / Career Decision 6축</td><td>직업명 대신 하고 싶은 일(Doing)·조건(Having)·존재방식(Being) 및 6축 다각도 탐색</td></tr>' +
              '<tr><td><strong>3회기 (Find the Gap)</strong></td><td>GROW (Reality) / Decision Matrix</td><td>Goal(목표) → Reality(현재 자원과 핵심 Gap 객관화) → Options → Will</td></tr>' +
              '<tr><td><strong>4회기 (Build My Milestones)</strong></td><td>BRAVE / Mandarat / Small Win</td><td>제한적 믿음 돌파: Belief → Root → Assess(사실/예외 분리) → Venture → Experiment</td></tr>' +
              '<tr><td><strong>5회기 (Move Forward)</strong></td><td>Self-Coaching 카드 / 30·60·90 플랜</td><td>종료 후 흔들릴 때 스스로를 조율하는 자기질문 루틴 및 지속 실천 시스템 정착</td></tr>' +
            '</tbody>' +
          '</table>' +
        '</div>' +
      '</section>' +

      '<section class="surface-card">' +
        '<h3>3. 코치 세션 품질 자가점검 체크리스트 (6대 기준)</h3>' +
        renderCheckbox('qa-1', '1. 학생이 매 회기 다룰 의제와 기대 결과를 자기 언어로 직접 설정했는가?') +
        renderCheckbox('qa-2', '2. 코치의 해석이나 조언보다 학생의 경험과 언어를 충분히 경청·반영했는가?') +
        renderCheckbox('qa-3', '3. 실무 경험·정보 제공 시 학생의 사전 동의를 구하고(SHARE) 선택권을 돌려주었는가?') +
        renderCheckbox('qa-4', '4. Action Experiment가 과제가 아닌 학생 소유의 작고 구체적인 가설 검증 실험으로 설계되었는가?') +
        renderCheckbox('qa-5', '5. 실험 미실행을 평가·질책하지 않고 학생의 현실 조건과 리듬을 이해하는 배움 데이터로 다루었는가?') +
        renderCheckbox('qa-6', '6. 학생이 1~5회기 산출물과 최종 My Dream Milestone Career Map을 자신의 언어로 완성했는가?') +
      '</section>'
    );
  }

  function renderCheckbox(id, labelText) {
    var checked = state.checklist[id] ? 'checked' : '';
    return (
      '<label class="checklist-item">' +
        '<input type="checkbox" data-check-id="' + id + '" ' + checked + ' />' +
        '<span>' + labelText + '</span>' +
      '</label>'
    );
  }

  function bindChecklistEvents() {
    var boxes = document.querySelectorAll('[data-check-id]');
    boxes.forEach(function (box) {
      box.addEventListener('change', function () {
        var id = box.getAttribute('data-check-id');
        state.checklist[id] = box.checked;
        saveChecklist();
      });
    });
  }

  window.__goRoute = function (routeKey) {
    renderPortalRoute(routeKey);
  };

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();

    var themeBtn = document.getElementById('themeToggleTopBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    var protoToggleBtn = document.getElementById('protoToggleAuthBtn');
    if (protoToggleBtn) {
      protoToggleBtn.addEventListener('click', function () {
        setAuthView(!state.authenticated);
      });
    }

    var loginForm = document.getElementById('loginForm');
    var pwInput = document.getElementById('passwordInput');
    var errBox = document.getElementById('loginError');

    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var val = pwInput ? pwInput.value.trim() : '';
        if (val === DEMO_PASSWORD) {
          if (errBox) errBox.hidden = true;
          setAuthView(true);
          showToast('삼코동 코칭 포털에 입장했습니다.');
        } else {
          if (errBox) {
            errBox.textContent = '비밀번호가 일치하지 않습니다. (데모 비밀번호: scc2026 또는 삼성코칭동호회(SCC) 운영진 문의)';
            errBox.hidden = false;
          }
          if (pwInput) pwInput.focus();
        }
      });
    }

    var fillDemoBtn = document.getElementById('fillDemoPwBtn');
    if (fillDemoBtn) {
      fillDemoBtn.addEventListener('click', function () {
        if (pwInput) pwInput.value = DEMO_PASSWORD;
        if (errBox) errBox.hidden = true;
        setAuthView(true);
        showToast('데모 비밀번호(scc2026)로 입장했습니다.');
      });
    }

    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        if (pwInput) pwInput.value = '';
        setAuthView(false);
        showToast('로그아웃되었습니다.');
      });
    }

    var jumpDownloadsBtn = document.getElementById('jumpDownloadsBtn');
    if (jumpDownloadsBtn) {
      jumpDownloadsBtn.addEventListener('click', function () {
        renderPortalRoute('references');
      });
    }

    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        renderPortalRoute(btn.getAttribute('data-route'));
      });
    });

    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var sidebar = document.getElementById('sidebar');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', function () {
        var isOpen = sidebar.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  });
})();
