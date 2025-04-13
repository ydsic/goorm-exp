import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInCalendarDays } from "date-fns";

const TaskManager = ({ tasks, setTasks, onDelete }) => {
  const [calendarDropdownIndex, setCalendarDropdownIndex] = useState(null);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [statusDropdownIndex, setStatusDropdownIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    const updated = [
      ...tasks,
      { text: "", startDate: null, endDate: null, status: "pending", fixed: false },
    ];
    setTasks(updated);
    setEditingIndex(updated.length - 1);
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
    <div className="w-[75.5rem] h-full flex flex-col items-start p-[2rem_2.4rem] rounded-[0.8rem] border border-[#c9d3d8] overflow-y-auto text-[1.6rem]">
      <div className="w-full flex justify-between items-center mb-[2.4rem]">
        <h2 className="text-[1.8rem] font-semibold">할 일 <span className="text-[#3b82f6]">{tasks.length}</span></h2>
        <button
          onClick={addTask}
          className="text-[1.4rem] px-[1.2rem] py-[0.6rem] border border-[#d1d5db] rounded-[0.6rem] bg-[#f9fafb] hover:bg-[#f3f4f6]"
        >
          + 태스크 추가
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="w-full py-[8rem] flex flex-col justify-center items-center gap-[2rem] text-[#9ca3af] text-[1.6rem] font-medium">
          <p className="text-[#6b7280]">작성된 할 일이 없습니다</p>
          <button
            onClick={addTask}
            className="text-[1.4rem] px-[1.2rem] py-[0.6rem] border border-[#d1d5db] rounded-[0.6rem] bg-[#f9fafb] hover:bg-[#f3f4f6]"
          >
            + 태스크 추가
          </button>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className="w-full flex items-start gap-[1.2rem] rounded-[1.2rem] p-[1.6rem] mb-[1.6rem] relative box-border hover:bg-[#f3f4f6]"
          >
            <div className="flex flex-col mr-[0.8rem]">
              <div
                className={`p-[0.4rem] rounded-[0.8rem] ${
                  task.status === "completed" ? "bg-[rgba(4,163,126,0.16)]" :
                  task.status === "inProgress" ? "bg-[rgba(68,142,254,0.16)]" :
                  "bg-[rgba(108,110,126,0.16)]"
                }`}
              >
                <div
                  onClick={() =>
                    setStatusDropdownIndex(index === statusDropdownIndex ? null : index)
                  }
                  className={`w-[1.2rem] h-[1.2rem] rounded-full cursor-pointer ${
                    task.status === "completed" ? "bg-[#04A37E]" :
                    task.status === "inProgress" ? "bg-[#448EFE]" : "bg-[#6C6E7E]"
                  }`}
                />
              </div>
              {statusDropdownIndex === index && (
                <div className="absolute top-[3.8rem] left-[0.8rem] w-[14rem] p-[0.8rem_0] rounded-[1.2rem] bg-white border border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10">
                  {["pending", "inProgress", "completed"].map((status) => (
                    <div
                      key={status}
                      onClick={() => changeStatus(index, status)}
                      className="flex items-center gap-[0.6rem] px-[1.2rem] py-[0.6rem] text-[1.4rem] text-[#2b2d36] cursor-pointer hover:bg-[#f3f4f6]"
                    >
                      <div className={`w-[1.2rem] h-[1.2rem] rounded-full ${
                        status === "completed" ? "bg-[#04A37E]" :
                        status === "inProgress" ? "bg-[#448EFE]" : "bg-[#6C6E7E]"
                      }`} />
                      {status === "pending" ? "시작전" : status === "inProgress" ? "진행중" : "완료"}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1">
              {editingIndex === index || !task.fixed ? (
                <input
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
                  className="w-full text-[1.4rem] border-none p-[0.4rem_0] outline-none bg-transparent"
                />
              ) : (
                <div
                  className={`text-[1.4rem] ${
                    task.status === "completed" ? "line-through text-[#6b7280]" : ""
                  }`}
                >
                  {task.text}
                </div>
              )}
              <div className="text-[1.2rem] text-[#9ca3af] mt-[0.4rem]">잠죽자 팀스터디(프론트엔드 3회차)의 태스크</div>
            </div>

            <div className="relative">
              <button
                onClick={() =>
                  setCalendarDropdownIndex(index === calendarDropdownIndex ? null : index)
                }
                className="text-[1.2rem] text-[#6b7280] underline cursor-pointer bg-none border-none flex items-center gap-[0.4rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M3.5 5.5H4.5V6.5H3.5V5.5ZM3.5 7.5H4.5V8.5H3.5V7.5ZM5.5 5.5H6.5V6.5H5.5V5.5ZM5.5 7.5H6.5V8.5H5.5V7.5ZM7.5 5.5H8.5V6.5H7.5V5.5ZM7.5 7.5H8.5V8.5H7.5V7.5Z" fill="#32404C" />
                  <path d="M2.5 11H9.5C10.0515 11 10.5 10.5515 10.5 10V3C10.5 2.4485 10.0515 2 9.5 2H8.5V1H7.5V2H4.5V1H3.5V2H2.5C1.9485 2 1.5 2.4485 1.5 3V10C1.5 10.5515 1.9485 11 2.5 11ZM9.5 4L9.5005 10H2.5V4H9.5Z" fill="#32404C" />
                </svg>
                {getDday(task.endDate)}
              </button>
              {calendarDropdownIndex === index && (
                <div className="absolute top-[2.6rem] right-0 bg-white border border-[#e5e7eb] rounded-[0.8rem] p-[1.2rem] z-20 w-[24rem]">
                  <div className="text-[1.3rem] font-medium mb-[0.6rem]">시작일</div>
                  <DatePicker
                    selected={tempStartDate}
                    onChange={(date) => setTempStartDate(date)}
                    dateFormat="yyyy.MM.dd"
                    className="w-full text-[1.4rem] px-[1rem] py-[0.8rem] border border-[#d1d5db] rounded-[0.8rem] mb-[1.2rem] focus:border-[#448efe] focus:ring-2 focus:ring-[#448efe33] focus:outline-none"
                    placeholderText="날짜 선택"
                  />
                  <div className="text-[1.3rem] font-medium mb-[0.6rem]">종료일</div>
                  <DatePicker
                    selected={tempEndDate}
                    onChange={(date) => setTempEndDate(date)}
                    dateFormat="yyyy.MM.dd"
                    className="w-full text-[1.4rem] px-[1rem] py-[0.8rem] border border-[#d1d5db] rounded-[0.8rem] mb-[1.2rem] focus:border-[#448efe] focus:ring-2 focus:ring-[#448efe33] focus:outline-none"
                    placeholderText="날짜 선택"
                  />
                  <div className="flex justify-end gap-[0.8rem] mt-[1.2rem]">
                    <button
                      onClick={() => setCalendarDropdownIndex(null)}
                      className="text-[1.2rem] px-[0.8rem] py-[0.4rem] rounded-[0.6rem] bg-[#f3f4f6] text-[#374151]"
                    >
                      취소
                    </button>
                    <button
                      onClick={() => applyDates(index)}
                      className="text-[1.2rem] px-[0.8rem] py-[0.4rem] rounded-[0.6rem] bg-[#3b82f6] text-white"
                    >
                      적용
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden group-hover:flex ml-[1rem]">
              <button
                onClick={() => onDelete(index)}
                className="w-[2.4rem] h-[2.4rem] rounded-full bg-[#ef4444] text-white text-[1.6rem] font-bold flex items-center justify-center hover:bg-[#dc2626]"
              >
                −
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskManager;