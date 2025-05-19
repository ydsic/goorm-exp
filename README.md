# 🚀 EXP WebSite Clone Study

React 기반의 EXP 웹사이트 클론 프로젝트입니다.  
**페이지별 담당 구현**, **컴포넌트/로직 분리**, **디렉토리 구조 정리**를 통해  
**확장성과 유지보수성**을 고려한 구조로 개발하였습니다.

## 🧩 프로젝트 특징

- **페이지별 담당 구현**
  - 각 페이지는 명확한 역할 분담을 통해 구조화하고 구현했습니다.
- **폴더 구조 분리**
  - `hooks`, `components`, `data`, `routers`, `utils` 등 기능별로 디렉토리를 나누어  
    관심사 분리가 잘 이루어진 깔끔한 구조를 유지했습니다.
- **모듈화 및 재사용성**
  - 주요 기능은 커스텀 훅(`hooks`)으로 추출하고, UI는 컴포넌트로 분리하여  
    재사용성과 유지보수성을 높였습니다.
- **확장성과 가독성 향상**
  - 디렉토리 구조와 네이밍 컨벤션에 신경 써서 프로젝트 규모가 커져도  
    관리하기 쉽도록 설계하였습니다.

<br/>

## 🛠️ 개발 환경

| 기술 스택               | 버전    |
| ----------------------- | ------- |
| `react`                 | ^18.3.1 |
| `react-dom`             | ^18.3.1 |
| `react-router-dom`      | ^7.5.0  |
| `react-datepicker`      | ^8.3.0  |
| `@supabase/supabase-js` | ^2.49.4 |

### 📦 사용 라이브러리

- **스타일링**
  - `tailwindcss`, `@tailwindcss/postcss`
  - `pretendard` (웹폰트)
- **UX 개선**
  - `@toss/use-overlay` : 모달 처리
  - `lodash.debounce` : 디바운스 처리
  - `clsx` : 조건부 클래스 처리
- **날짜 처리**
  - `date-fns` : 시간 포맷팅 및 계산

<br/>

## 📁 간략한 디렉토리 구조

```
/src
├── components        # UI 컴포넌트
│ ├── FeedbackList.jsx
│ ├── FeedbackItem.jsx
│ └── AutoCompleteList.jsx
├── hooks             # 커스텀 훅
│ └── useAutoComplete.js
├── data              # 더미 데이터 또는 Supabase 관련
│ └── feedbackData.js
├── routers           # 라우터 구성
│ └── AppRouter.jsx
├── pages             # 페이지 단위 구성
│ └── FeedbackPage.jsx
├── ui                # 공통 UI 요소
│ └── SearchInput.jsx
├── utils             # 유틸 함수 모음
│ └── formatTimeAgo.js
```

<br/>

## 💡 기능 소개

🔗 [👉 피드백 페이지 바로가기](https://goorm-exp-clone.vercel.app/feedback?category=all&q=)

### ✅ 피드백 페이지 - 주요 기능

- **피드백 생성**
  - 로컬스토리지 피드백 정보 저장
  - `@toss/use-overlay` 라이브러리를 활용한 모달 UI
- **피드백 리스트**
  - 피드백 생성시, `location.reload()`으로 강제 렌더링
- **카테고리 필터링**
  - 탭 메뉴 UI를 통한 `queryString`으로 카테고리별 필터 기능
- **검색 기능**
  - 자동완성 기능 제공
  - 키보드 네비게이션(↑ / ↓ / Enter)
  - `lodash.debounce`를 활용한 디바운스 처리
  - 검색 관련 구성 요소
    - `SearchInput` : 검색창 UI
    - `useAutoComplete` : 상태 관리 및 로직 처리
    - `AutoCompleteList` : 자동완성 리스트 렌더링
- **업로드 시간 표시**
  - `date-fns`를 활용한 `"몇 분 전"`등 형식의 시간 표시
  - `setInterval`을 이용해 1분마다 자동 업데이트

## ✨ 향후 개선 예정 기능

- [ ] 무한 스크롤 또는 페이지네이션 적용
- [ ] 피드백 수정/삭제 기능 추가
- [ ] 캘린더를 활용해 해당날짜의 피드백 리스트 보기 기능 추가
- [ ] 애니메이션 도입 (Framer Motion 등)
- [ ] E2E 테스트 및 유닛 테스트 도입

<br/>

## 🧪 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/exp-website-clone.git

# 2. 의존성 설치
cd exp-website-clone
npm install

# 3. 개발 서버 실행
npm run dev
```
