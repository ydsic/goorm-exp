import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInCalendarDays } from "date-fns";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [calendarDropdownIndex, setCalendarDropdownIndex] = useState(null);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [statusDropdownIndex, setStatusDropdownIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    setTasks([
      ...tasks,
      { text: "", startDate: null, endDate: null, status: "pending", fixed: false },
    ]);
    setEditingIndex(tasks.length);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const applyDates = (index) => {
    const updated = [...tasks];
    updated[index].startDate = tempStartDate;
    updated[index].endDate = tempEndDate;
    setTasks(updated);
    setCalendarDropdownIndex(null);
  };

  const getDday = (endDate) => {
    if (!endDate) return "없음";
    const daysLeft = differenceInCalendarDays(endDate, new Date());
    return `D-${daysLeft}`;
  };

  const finalizeText = (index) => {
    const updated = [...tasks];
    updated[index].fixed = true;
    setTasks(updated);
    setEditingIndex(null);
  };

  const changeStatus = (index, newStatus) => {
    const updated = [...tasks];
    updated[index].status = newStatus;
    setTasks(updated);
    setStatusDropdownIndex(null);
  };

  return (
    <Wrapper>
      <Header>
        <Title>할 일 <TitleTask>{tasks.length}</TitleTask></Title>
        <AddButton onClick={addTask}>+ 태스크 추가</AddButton>
      </Header>
      {tasks.map((task, index) => (
        <TaskCard key={index}>
          <div>
            <StatusCircle
              status={task.status}
              onClick={() =>
                setStatusDropdownIndex(
                  index === statusDropdownIndex ? null : index
                )
              }
            />
            {statusDropdownIndex === index && (
              <StatusDropdown>
                <div onClick={() => changeStatus(index, "pending")}>시작 전</div>
                <div onClick={() => changeStatus(index, "inProgress")}>진행 중</div>
                <div onClick={() => changeStatus(index, "completed")}>완료</div>
              </StatusDropdown>
            )}
          </div>

          <div style={{ flex: 1 }}>
            {editingIndex === index || !task.fixed ? (
              <TaskTextInput
                type="text"
                placeholder="태스크 이름"
                autoFocus
                value={task.text}
                onChange={(e) => {
                  const updated = [...tasks];
                  updated[index].text = e.target.value;
                  setTasks(updated);
                }}
                onBlur={() => finalizeText(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") finalizeText(index);
                }}
              />
            ) : (
              <TaskText status={task.status}>{task.text}</TaskText>
            )}
            <SubText>잠죽자 팀스터디(프론트엔드 3회차)의 태스크</SubText>
          </div>

          <CalendarWrapper>
            <CalendarButton
              onClick={() =>
                setCalendarDropdownIndex(
                  index === calendarDropdownIndex ? null : index
                )
              }
            >
              {getDday(task.endDate)}
            </CalendarButton>

            {calendarDropdownIndex === index && (
              <CalendarDropdown>
                <div style={{ fontSize: "14px", marginBottom: "6px" }}>시작일</div>
                <DatePicker
                  selected={tempStartDate}
                  onChange={(date) => setTempStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                />
                <div style={{ fontSize: "14px", marginTop: "10px", marginBottom: "6px" }}>
                  종료일
                </div>
                <DatePicker
                  selected={tempEndDate}
                  onChange={(date) => setTempEndDate(date)}
                  dateFormat="yyyy-MM-dd"
                />
                <ButtonRow>
                  <SmallButton onClick={() => setCalendarDropdownIndex(null)}>
                    취소
                  </SmallButton>
                  <SmallButton variant="confirm" onClick={() => applyDates(index)}>
                    적용
                  </SmallButton>
                </ButtonRow>
              </CalendarDropdown>
            )}
          </CalendarWrapper>

          <DeleteButton onClick={() => deleteTask(index)}>−</DeleteButton>
        </TaskCard>
      ))}
    </Wrapper>
  );
};

export default TaskManager;


const Wrapper = styled.div`
  width: 75.5rem;
  height: 100%; /* 화면 전체 높이 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 2.4rem;
  border-radius: 8px;
  border: 1px solid #C9D3D8;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;
const TitleTask = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: #3b82f6;
`;

const AddButton = styled.button`
  font-size: 1.4rem;
  padding: .6rem 1.2rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #f9fafb;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

const TaskCard = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  border-radius: 1.2rem;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #f3f4f6;
  }
`;

const StatusCircle = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 9999px;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#04A37E"
      : status === "inProgress"
      ? "#448EFE"
      : "#6C6E7E"};
  cursor: pointer;
`;

const StatusDropdown = styled.div`
  position: absolute;
  top: 3.8rem;
  left: .8rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;

  div {
    padding: .8rem 1.2rem;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      background: #f9fafb;
    }
  }
`;

const TaskTextInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  border: none;
  padding: .4rem 0;
  outline: none;
  background: transparent;
`;

const TaskText = styled.div`
  font-size: 1.4rem;
  ${({ status }) =>
    status === "completed"
      ? "text-decoration: line-through; color: #6b7280;"
      : ""}
`;

const SubText = styled.div`
  font-size: 1.2rem;
  color: #9ca3af;
  margin-top: .4rem;
`;

const CalendarWrapper = styled.div`
  position: relative;
`;

const CalendarDropdown = styled.div`
  position: absolute;
  top: 2.6rem;
  right: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: .8rem;
  padding: 1.2rem;
  z-index: 20;
`;

const CalendarButton = styled.button`
  font-size: 1.2rem;
  color: #6b7280;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
`;

const SmallButton = styled.button`
  font-size: 1.2rem;
  padding: .4rem .8rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  ${({ variant }) =>
    variant === "confirm"
      ? "background: #3b82f6; color: white;"
      : "background: #f3f4f6; color: #374151;"}
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .8rem;
  margin-top: 1.2rem;
`;

const DeleteButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 9999px;
  background-color: #ef4444;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;
