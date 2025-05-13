# EXP WebSite clone Study

## 피드백 : 양아름

**구현 기능**

- 피드백 `Create`
- 검색기능 (자동완성 + 키보드 네비게이션 + 디바운스)
  - `SearchInput` : `UI`
  - `useAutoComplete` : 상태 및 입력/탐색 로직 담당
  - `AutoCompleteList` : 렌더링 담당
- 피드백 업로드 시간 (몇 분전, 시간) : 1분마다 렌더링
