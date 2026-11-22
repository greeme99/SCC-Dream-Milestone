# Dream Milestone Coaching Toolkit 개발계획서 (Plan.md)

## 1. 프로젝트 개요

### 1.1 프로젝트 목적 및 정의
- **프로젝트명**: Dream Milestone Coaching Toolkit Web App
- **주관 및 주체**: 삼성코칭동호회(SCC)
- **대상 사용자**: 대학생·대학원생(멘티) 및 삼성코칭동호회(SCC) 커리어 코치(멘토)
- **핵심 목표**:
  1. 삼성코칭동호회(SCC) 소속 코치가 대학생·대학원생 대상 다회기 커리어코칭을 안정적으로 수행할 수 있는 실질적 표준 가이드북 및 운영 툴킷 제공.
  2. 대학생·대학원생이 자기이해(경험·강점·가치·관심)를 바탕으로 현재와 목표 간 Gap을 규명하고, Career Milestone과 구체적 Action을 설계·실행하도록 지원.
  3. 무비용(Zero-Cost), 고성능, 모바일 반응형 웹앱 형태로 구축하여 배포 및 유지보수 비용을 최소화함.

### 1.2 벤치마크 및 참조 시스템
- **`scc-coaching.vercel.app/login`**:
  - 삼코동 브랜딩 및 프로그램 비전 제시 랜딩 페이지.
  - 코치 전용 공용 비밀번호 기반 간편 로그인 게이트.
  - 여정 시각화(산길 로드맵, 회기별 깃발, 북극성 일러스트) 및 3단계 코칭 철학 카드.
- **`dream-milestone.netlify.app`**:
  - 회기별 탭 기반 상세 가이드(진행 시간, 핵심 목적, 코칭 질문, 공감 포인트, 자가 체크리스트).
  - 직관적인 사이드바 내비게이션 및 세션 간 연계(Between Session) 구조.

---

## 2. 사이트 정보 구조 (IA) 및 3대 기능 탭

웹 애플리케이션은 **[랜딩/로그인]** 화면과 입장 후 **[사이드 메뉴 3대 탭]**으로 구성된다.

```text
[랜딩 & 코치 로그인 (/login)]
  ├── 삼코동 소개 / 프로그램 비전
  ├── 북극성 코칭 여정 로드맵
  └── 코치 공용 비밀번호 입력 → 포털 진입
          │
          ▼
[Dream Milestone 코칭 포털 (/portal)]
  ├── 탭 1: 프로그램 개요 (Overview)
  ├── 탭 2: 코칭모델 (Coaching Model Journey)
  └── 탭 3: 참조자료 (References & Downloads)
```

### 탭 1: 개요 (Program Overview)
- **프로그램 정의**: 대학생·대학원생 맞춤형 5회기 다회기 커리어 코칭 프로그램.
- **4대 운영 원칙**:
  1. `Coaching First`: 학생 스스로 답과 가능성을 발견하도록 파트너링.
  2. `Experience on Demand`: 요청 시 코치의 실무 경험/정보를 보조적 지원.
  3. `Action & Reflection`: 세션 내 대화 + 세션 간 실제 행동/성찰의 순환.
  4. `Guide, not Script`: 경직된 스크립트가 아닌 전문적 판단을 지원하는 가이드.
- **5회기 표준 운영 모델 매트릭스**:
  | 회기 | 주요 초점 (Theme) | 학생 산출물 (Deliverables) |
  | :--- | :--- | :--- |
  | **1회기** | Discover Me: 경험·강점·가치·관심 탐색 | My Strength & Value Map |
  | **2회기** | Explore Possibilities: 관심 분야·직무·가능성 확장 | Career Possibility Map |
  | **3회기** | Find the Gap: 현재와 목표 사이 Gap 탐색 | Current-Future Gap Map |
  | **4회기** | Build My Milestones: 단계별 커리어 이정표 설계 | Career Milestone |
  | **5회기** | Move Forward: 실행계획 및 지속 실천 약속 | Action Plan + My Dream Milestone Career Map |
- **기대 성과 및 성과평가 체계**:
  - 학생: 코칭 만족도, 자기이해 증진, 커리어 명료화, 실제 Action 경험, 지속 도움도.
  - 코치: 프로그램 전반 만족도, 코칭 자신감 확보, 재참여 및 추천 의향.

### 탭 2: 코칭모델 (Coaching Model)
- **프리세션 (Pre-Session)**:
  - 1회기 준비 가이드, 학생 사전 질문지 검토 요령, 15분 Welcome Call 지침.
- **1회기 (Discover Me) ~ 4회기 (Build My Milestones)**:
  - 회기별 5단계 인터랙티브 탭 (도입 → 탐색 → 심화 → 실행설계 → 마무리).
  - 단계별 권장 소요 시간, 핵심 코칭 질문, 공감 표현 가이드, 코치 체크포인트.
  - **Between Session (회기와 회기 사이)**: 학생 Action Experiment 실행 가이드.
  - **외연 연동 CTA**: 각 회기별 **[코칭일지 작성하기 (구글폼 링크)]** 버튼 제공.
- **5회기 (Move Forward & Completion)**:
  - 전체 회기 성찰, 최종 Career Map 완성 및 종결 세션 가이드.
  - **외연 연동 CTA**:
    - **[코치 성과평가 작성 (구글폼 링크)]**
    - **[학생 성과평가 링크 복사/전송 (구글폼 링크)]**

### 탭 3: 참조자료 (References & Downloads)
- 구글 드라이브(Google Drive) 공유 링크를 통한 다이렉트 다운로드/뷰어 제공:
  1. `Dream Milestone Full Guide.pdf` (전체 가이드북 원문)
  2. `프리세션 사전 준비지` (학생 사전 배포용 양식)
  3. `학생용 My Dream Milestone Workbook` (5회기 실습 워크북)
  4. `코치 사전 OT 자료 및 운영 매뉴얼`
  5. `핵심 질문 라이브러리 & 커리어 가치 카드 리소스`

---

## 3. 기술 스택 및 아키텍처

```text
[Client Layer]
  - Next.js 14+ (App Router) / React 18+
  - Tailwind CSS + DESIGN.md Unified Tokens (Light / Dark Dual-Theme)
  - Lucide React (Icons) & Headless UI
         │
         ▼
[Application Layer (Zero-Server-Cost)]
  - Stateless Architecture
  - Cookie / LocalStorage 기반 공용 비밀번호 인증 세션
  - Markdown/JSON 정적 콘텐츠 스키마 (회기별 가이드 데이터)
         │
         ▼
[External Services (No-Code Cloud)]
  - Google Forms: 1~4회기 코칭일지, 5회기 성과평가 (코치/학생용)
  - Google Drive: Full Guide PDF 및 워크시트 다운로드 스토리지
  - Hosting: Netlify 또는 Vercel (Free Tier 정적 배포)
```

- **Zero-DB 비용 최적화**: 복잡한 백엔드 DB 및 서버리스 함수 비용 없이, 정적 데이터 + 구글폼 + 구글 드라이브 조합으로 무제한 무료 운영.
- **토큰 및 디자인 정합성**: `DESIGN.md`에 명시된 시그니처 로열블루(`--color-primary`), Slate 팔레트, 18px Radius, Pill UI 엄격 적용.

---

## 4. 개발 마일스톤 및 WBS

| 단계 (Phase) | 세부 작업 내용 | 주요 산출물 |
| :--- | :--- | :--- |
| **Phase 1: 아키텍처 및 랜딩 구축** | - Next.js 프로젝트 설정 및 Tailwind 토큰 동기화<br/>- `scc-coaching` 스타일 랜딩 및 공용 비밀번호 로그인 구현<br/>- 반응형 App Shell 및 사이드바 내비게이션 셸 구현 | 랜딩 페이지, 로그인 모달/화면, 레이아웃 프레임 |
| **Phase 2: 탭 1 & 탭 3 구현** | - [탭 1: 개요] 프로그램 소개, 4대 원칙 카드, 로드맵 표<br/>- [탭 3: 참조자료] Google Drive 다운로드 링크 카드 리스트<br/>- 다크/라이트 테마 토글 및 접근성 검증 | `개요` 페이지, `참조자료` 다운로드 페이지 |
| **Phase 3: 탭 2 코칭모델 상세 구현** | - 프리세션 + 1~5회기 단계별 인터랙티브 가이드 뷰어 구현<br/>- Between Session (1~4) 액션 실험 컴포넌트 구현<br/>- 1~4회기 코칭일지(구글폼) 및 5회기 평가 구글폼 연동 CTA 배치 | 1~5회기 세부 페이지, 구글폼 링크 시스템 |
| **Phase 4: 검증 및 배포** | - 모바일/태블릿 반응형 뷰 테스트<br/>- 외부 링크(구글폼/드라이브) 정합성 확인<br/>- Netlify / Vercel 배포 파이프라인 연결 및 최종 QA | 배포 URL, 운영 가이드 |

---

## 5. 관리 및 품질 정책
1. **모바일 퍼스트 반응형**: 스마트폰으로 코칭 현장에서 일지를 작성하거나 가이드를 열람할 수 있도록 375px~1440px 완벽 반응형 대응.
2. **접근성(WCAG AA)**: Slate 500(`--color-text-muted`)의 텍스트 대비 비율 4.5:1 이상 준수.
3. **보안/접근제어**: 코치 전용 포털의 최소한의 접근 제어를 위해 공용 비밀번호 검증 미들웨어/세션 적용.
