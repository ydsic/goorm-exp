import React, { useState } from "react";
import styled from "styled-components";
import rightArrow from "../../assets/svg/right-arrow.svg";
import confettiImg from "../../assets/svg/confetti-img.svg";

import Aside from "../Aside";
import TaskManager from "./_components/TaskManager";
import TaskHeaderBar from "./_components/TaskHeaderBar";

export default function TodoList() {
  const [isEditComplete, setIsEditComplete] = useState(false);

  return (
    <Wrapper>
      <AsideWrapper>
        <Aside />
      </AsideWrapper>
      <ContsWrapper>
        <TaskHeaderBar
          onEditComplete={() => setIsEditComplete(true)}
          isEditComplete={isEditComplete}
        />
        {isEditComplete ? (
          <CompleteMessageWrapper>
            <ConfettiImgWrapper>
              <SvgWrapper src={confettiImg} />
            </ConfettiImgWrapper>
            <MessageTitle>오늘 하루도 화이팅!</MessageTitle>
            <MessageSub>오늘 할일 작성을 완료했어요!</MessageSub>
          </CompleteMessageWrapper>
        ) : (
          <TaskCardWrapper>
            <TaskBacklogWrapper></TaskBacklogWrapper>
            <TaskArrowWrapper>
              <SvgWrapper src={rightArrow} />
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
  background: #f7f7fa;
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
const SvgWrapper = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: contain;
`;
const ConfettiImgWrapper = styled.div`
  width: 24rem;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const CompleteMessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  flex: 1 0 0;
  box-sizing: border-box;
`;

const MessageTitle = styled.h2`
  color: #2b2d36;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
`;

const MessageSub = styled.p`
  color: #2b2d36;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  text-align: center;
`;
