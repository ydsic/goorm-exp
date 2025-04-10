import React, { useState } from "react";
import styled from "styled-components";
import rightArrow from "../../assets/svg/right-arrow.svg";

import Aside from "../Aside";
import TaskManager from "./_components/TaskManager";
import TaskHeaderBar from "./_components/TaskHeaderBar";

export default function TodoList() {
  const [isEditComplete, setIsEditComplete] = useState(false); // 상태 추가

  return (
    <Wrapper>
      <AsideWrapper>
        <Aside />
      </AsideWrapper>
      <ContsWrapper>
        <TaskHeaderBar onEditComplete={() => setIsEditComplete(true)} />

        {isEditComplete ? (
          <CompleteMessageWrapper>
            <MessageTitle>오늘 하루도 화이팅!</MessageTitle>
            <MessageSub>오늘 할일 작성을 완료했어요!</MessageSub>
          </CompleteMessageWrapper>
        ) : (
          <TaskCardWrapper>
            <TaskBacklogWrapper></TaskBacklogWrapper>
            <TaskArrowWrapper>
              <TaskArrowIcon src={rightArrow} />
            </TaskArrowWrapper>
            <TaskManager />
          </TaskCardWrapper>
        )}
      </ContsWrapper>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const AsideWrapper = styled.div`
  width: 300px;
  height: 100%;
  box-sizing: border-box;
`;

const ContsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.6rem 3.2rem;
  box-sizing: border-box;
`;

const TaskCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  gap: 1.2rem;
  box-sizing: border-box;
`;

const TaskBacklogWrapper = styled.div`
  display: flex;
  width: 75.5rem;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  align-self: stretch;
  box-sizing: border-box;
  border-radius: 8px;
  background: #F7F7FA;  
`;

const TaskArrowWrapper = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;
`;
const TaskArrowIcon = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: contain;
`;

const CompleteMessageWrapper = styled.div`
  width: 100%;
  padding: 4rem;
  text-align: center;
`;

const MessageTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

const MessageSub = styled.p`
  font-size: 1.6rem;
  color: #6b7280;
`;