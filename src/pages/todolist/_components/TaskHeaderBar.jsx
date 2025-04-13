import React from "react";

const TaskHeaderBar = ({ onEditComplete, isEditComplete }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full flex justify-between items-center mb-[2.4rem]">
      <div className="flex items-center gap-[1rem]">
        <button
          onClick={handleBack}
          className="bg-[#f1f2f6] rounded-[0.8rem] p-[0.6rem] flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
          >
            <path
              d="M6 11L1 6M1 6L6 1M1 6H13"
              stroke="#525463"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h2 className="text-[2rem] font-bold text-[#1f2937]">
          {isEditComplete ? "오늘 할 일 제출 완료" : "오늘은 어떤 활동을 하시나요?"}
        </h2>
      </div>
      {!isEditComplete && (
        <button
          onClick={onEditComplete}
          className="bg-[#3b82f6] text-white text-[1.4rem] py-[0.6rem] px-[1.2rem] rounded-[0.8rem] border-none cursor-pointer font-medium hover:bg-[#2563eb]"
        >
          오늘 할 일 수정
        </button>
      )}
    </div>
  );
};

export default TaskHeaderBar;
