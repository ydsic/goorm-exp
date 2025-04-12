const DiaryData = [
  {
    title: `React의 Virtual DOM이란?`,
    subtitle: `Virtual DOM은 실제 DOM을 복제한 가상의 DOM이다. React는 상태가 바뀌면 Virtual DOM에서 먼저 변경을 시뮬레이션하고, 실제 DOM과 비교해 필요한 부분만 업데이트한다. 이로 인해 성능이 최적화되며, 빠른 렌더링이 가능해진다.`,
    heart: `30`,
    comment: `0`,
    name: `XXX(프론트엔드 3회차)`,
    time: `1시간 전`,
  },
  {
    title: `자바스크립트의 이벤트 루프는 어떻게 작동할까?`,
    subtitle: `이벤트 루프는 비동기 작업을 관리하는 자바스크립트의 핵심 메커니즘이다. 콜백 큐, 호출 스택, 마이크로태스크 큐 개념을 함께 알아야 이해가 쉽다.`,
    heart: `15`,
    comment: `0`,
    name: `XXX(프론트엔드 3회차)`,
    time: `3시간 전`,
  },
  {
    title: `Git과 GitHub의 차이를 아시나요?`,
    subtitle: `Git은 버전 관리 도구이고, GitHub는 Git 저장소를 웹상에서 호스팅하는 플랫폼이다. 혼동하기 쉬운 개념이지만 역할이 명확히 다르다.`,
    heart: `51`,
    comment: `0`,
    name: `XXX(프론트엔드 3회차)`,
    time: `7시간 전`,
  },
  {
    title: `CSS Flex와 Grid 언제 써야 할까?`,
    subtitle: `Flex는 1차원 레이아웃에 적합하고, Grid는 2차원 레이아웃에 강하다. 상황에 따라 섞어 쓰는 경우도 많으니 각각의 장단점을 이해하자.`,
    heart: `18`,
    comment: `0`,
    name: `XXX(프론트엔드 3회차)`,
    time: `14시간 전`,
  },
  {
    title: `웹 성능 최적화를 위한 Lazy Loading`,
    subtitle: `Lazy Loading은 사용자에게 필요한 리소스만 먼저 불러와 페이지 로딩 속도를 개선하는 전략이다. 이미지, 컴포넌트, 데이터 등 여러 곳에 적용할 수 있다.`,
    heart: `34`,
    comment: `0`,
    name: `XXX(프론트엔드 3회차)`,
    time: `1일 전`,
  },
  {
    title: `TypeScript를 써야 하는 이유는?`,
    subtitle: `TS는 정적 타입 시스템을 제공해 코드 안정성과 개발 효율성을 높인다. 특히 규모가 큰 프로젝트나 협업 시 강력한 장점을 발휘한다.`,
    heart: `190`,
    comment: `0`,
    name: `XXX(프론트엔드 3회차)`,
    time: `2일 전`,
  },
];

export default DiaryData;
