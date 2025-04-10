import React from 'react';
import styled from "styled-components";

const TaskHeaderBar = ({ onEditComplete }) => {
  const handleBack = () => { window.history.back(); };

  return (
    <HeaderWrapper>
      <LeftSection>
        <BackButton onClick={handleBack}>
          <ArrowIcon xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path d="M6 11L1 6M1 6L6 1M1 6H13" stroke="#525463" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </ArrowIcon>
        </BackButton>
        <HeaderTitle>오늘은 어떤 활동을 하시나요?</HeaderTitle>
      </LeftSection>
      <EditButton onClick={onEditComplete}>오늘 할 일 수정</EditButton>
    </HeaderWrapper>
  );
};

export default TaskHeaderBar;



const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.button`
  background: #f1f2f6;
  border: none;
  border-radius: 0.8rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ArrowIcon = styled.svg`
  display: block;
`;

const HeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
`;

const EditButton = styled.button`
  background: #3b82f6;
  color: white;
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #2563eb;
  }
`;
