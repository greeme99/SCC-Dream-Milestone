# 삼성코칭동호회 - Dream Milestone (Coaching Toolkit)

삼성코칭동호회(SCC) 코치들을 위한 **대학생·대학원생 맞춤형 5회기 다회기 커리어 코칭 운영 웹 가이드북 및 툴킷 포털**입니다.

---

## 🌟 프로젝트 개요

Dream Milestone은 대학생·대학원생이 자기이해를 바탕으로 현재와 목표 사이의 Gap을 발견하고, 자신만의 커리어 Milestone과 Action을 설계·검증하도록 돕는 5회기 고객 주도형 커리어 코칭 프로그램입니다.

본 웹앱은 코치가 코칭 세션을 효과적이고 체계적으로 진행할 수 있도록 다음 3대 핵심 영역을 직관적으로 제공합니다:

1. **프로그램 소개 (Overview)**: 
   - 프로그램 정의 및 표준 운영 사양 (주관, 대상, 운영 형태, 세션 구성, 회기 간격)
   - 5회기 표준 운영 모델 프로세스 Flow (프리세션 및 1~5회기 타임라인 인터랙티브 카드)
2. **코칭모델 (프리세션 ~ 5회기)**:
   - **프리세션 (Welcome Call)**: 1회기 사전 준비 체크리스트, 사전 질문지 4대 검토 기준표, 15분 Welcome Call 타임라인 가이드
   - **1~5회기 공통 5단계 인터랙티브 프레임 (60분)**:
     - `도입(10m)` → `탐색(15m)` → `심화(15m)` → `실행설계(12m)` → `마무리(8m)` + `Between Session (실행 실험)`
     - 단계별 핵심 질문, 공감 표현 가이드, 로컬 저장 기반 상호작용 체크포인트
     - 1~4회기 코칭일지 및 5회기 최종 성과평가(코치/학생) 연동
3. **자료실 (References)**:
   - 공식 가이드북 PDF 및 학생용 워크북 다운로드 리소스 허브
   - 3대 검증 코칭 대화 모델 카드 (`GROW`, `CiT STAR™`, `BRAVE`)
   - Action Experiment 공통 설계 카드 및 코치 세션 품질 자가점검 체크리스트

---

## 🛠 기술 스택

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, CSS Variables (Pretendard 폰트 기반 디자인 시스템)
- **Security & Auth**: Web Crypto API 기반 HMAC-SHA256 세션 쿠키 (`dm_session`), Constant-time 비밀번호 검증, 오픈 리다이렉트 방지
- **Deployment**: Netlify (Starter Plan 호환, `netlify.toml` 보안 헤더 완비)

---

## 🚀 로컬 실행 방법

### 1. 패키지 설치
```bash
npm install
```

### 2. 환경변수 설정
`.env.example` 파일을 복사하여 `.env.local`을 생성합니다:
```bash
cp .env.example .env.local
```
- `COACH_SHARED_PASSWORD`: 코치 공용 입장 비밀번호 (기본값: `scc2026`)
- `SESSION_HMAC_SECRET`: 32자 이상의 임의 비밀키

### 3. 개발 서버 구동
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속 후 로그인합니다.

---

## 🧪 품질 및 무결성 검증

프로젝트 루트에서 디자인 린트 및 자체 자동화 테스트를 수행할 수 있습니다:

```bash
# 1. 디자인 규정 린트 (순색 차단, 무채색 토큰 준수)
npm run design:lint

# 2. 자동화 단위/통합 테스트 (TC-001 ~ TC-016)
npm test

# 3. 프로덕션 빌드 검증
npm run build
```

---

## ☁️ Netlify 배포 가이드

1. **GitHub 저장소 연결**: `https://github.com/greeme99/SCC-Dream-Milestone`
2. **빌드 설정**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. **환경변수 등록**:
   - `COACH_SHARED_PASSWORD`
   - `SESSION_HMAC_SECRET`

---

## 📄 저작권 및 라이선스

Copyright © 2026 삼성코칭동호회 (Samsung Coaching Club). All rights reserved.
