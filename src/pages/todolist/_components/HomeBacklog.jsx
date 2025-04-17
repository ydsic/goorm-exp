import React, { useState, useEffect } from "react";

const HomeBacklog = ({ backlogTasks, setBacklogTasks, moveToToday }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [statusDropdownIndex, setStatusDropdownIndex] = useState(null);

  const addTask = () => {
    const updated = [
      ...backlogTasks,
      { text: "", status: "pending", fixed: false },
    ];
    setBacklogTasks(updated);
    setEditingIndex(updated.length - 1);
  };

  const finalizeText = (index) => {
    const updated = [...backlogTasks];
    updated[index].fixed = true;
    setBacklogTasks(updated);
    setEditingIndex(null);
  };

  const changeStatus = (index, newStatus) => {
    const updated = [...backlogTasks];
    updated[index].status = newStatus;
    setBacklogTasks(updated);
    setStatusDropdownIndex(null);
  };

  // 드롭다운 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setStatusDropdownIndex(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  
  return (
    <>
      <div className="w-full flex justify-between items-center mb-[2.4rem] gap-[0.8rem]">
        <h2 className="text-[1.8rem] font-semibold">
          백로그 <span className="text-[#3b82f6]">{backlogTasks.length}</span>
        </h2>
        <button
          onClick={addTask}
          className="text-[1.4rem] px-[1.2rem] py-[0.6rem] border border-[#d1d5db] rounded-[0.6rem] bg-[#f9fafb] hover:bg-[#f3f4f6]"
        >
          추가
        </button>
      </div>

      {backlogTasks.map((task, index) => (
        <div
          key={index}
          className="group w-full flex items-start gap-[1.2rem] rounded-[1.2rem] p-[1.6rem] mb-[1.6rem] relative box-border hover:bg-[#f3f4f6]"
        >
          {/* 상태 원 + 드롭다운 */}
          <div className="flex flex-col mr-[0.8rem] relative">
            <div
              className={`p-[0.4rem] rounded-[0.8rem] ${
                task.status === "completed"
                  ? "bg-[rgba(4,163,126,0.16)]"
                  : task.status === "inProgress"
                  ? "bg-[rgba(68,142,254,0.16)]"
                  : "bg-[rgba(108,110,126,0.16)]"
              }`}
            >
              <div
                onClick={() =>
                  setStatusDropdownIndex(
                    statusDropdownIndex === index ? null : index
                  )
                }
                className={`w-[1.2rem] h-[1.2rem] rounded-full cursor-pointer ${
                  task.status === "completed"
                    ? "bg-[#04A37E]"
                    : task.status === "inProgress"
                    ? "bg-[#448EFE]"
                    : "bg-[#6C6E7E]"
                }`}
              />
            </div>

            {/* 상태 드롭다운 */}
            {statusDropdownIndex === index && (
              <div className="absolute top-[2.8rem] left-0 w-[14rem] p-[0.8rem_0] rounded-[1.2rem] bg-white border border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10">
                {[
                  { key: "pending", label: "시작전", color: "#6C6E7E" },
                  { key: "inProgress", label: "진행중", color: "#448EFE" },
                  { key: "completed", label: "완료", color: "#04A37E" },
                ].map(({ key, label, color }) => (
                  <div
                    key={key}
                    onClick={() => changeStatus(index, key)}
                    className="flex items-center gap-[0.6rem] px-[1.2rem] py-[0.6rem] text-[1.4rem] text-[#2b2d36] cursor-pointer hover:bg-[#f3f4f6]"
                  >
                    <div
                      className="w-[1.2rem] h-[1.2rem] rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 텍스트 영역 */}
          <div className="flex-1">
            {editingIndex === index || !task.fixed ? (
              <input
                type="text"
                placeholder="태스크 이름"
                autoFocus
                value={task.text}
                onChange={(e) => {
                  const updated = [...backlogTasks];
                  updated[index].text = e.target.value;
                  setBacklogTasks(updated);
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
          </div>

          {/* Hover 시 + 버튼 */}
          <div className="hidden group-hover:flex ml-[1rem]">
            <button
              onClick={() => moveToToday(index)}
              className="w-[2.4rem] h-[2.4rem] rounded-[.8rem] bg-[#3E404C] text-white text-[1.6rem] font-bold flex items-center justify-center hover:cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeBacklog;
