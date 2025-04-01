import styled from "styled-components";
const MainDiv = styled.div`
  display: grid;
  background-color: var(--message-bg-color);
`;

export default function Message() {
  return <MainDiv>테스트용 글자</MainDiv>;
}
