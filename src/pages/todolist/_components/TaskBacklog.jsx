import React, { useState } from "react";
import noTaskImg from "../../../assets/svg/no-task.svg";
import searchIcon from "../../../assets/svg/search-icon.svg";

const TABS = ["추천", "학습 계획", "개인 태스크", "구름EDU", "깃허브"];

const TaskBacklog = () => {
  const [activeTab, setActiveTab] = useState("추천");

  return (
    <div className="flex flex-col gap-[1.6rem] w-full h-full box-border text-[1.6rem]">
      <div className="relative w-full">
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute left-[1.2rem] top-1/2 -translate-y-1/2 w-[1.6rem] h-[1.6rem] opacity-50"
        />
        <input
          type="text"
          placeholder="태스크 검색 및 추가"
          className="w-full pl-[3.6rem] pr-[1.6rem] py-[1.2rem] border border-[#e5e7eb] rounded-[0.8rem] text-[1.4rem] outline-none bg-white hover:border-[#448efe] focus:border-[#448efe]"
        />
      </div>

      <div className="flex gap-[1.6rem] px-[0.4rem] text-[1.4rem] border-b border-[#e5e7eb]">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-[1.2rem] font-medium border-b-2 ${
              activeTab === tab ? "text-[#448EFE] border-[#448EFE]" : "text-[#5C5E6B] border-transparent"
            } hover:text-[#448EFE]`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-[1.2rem] text-[#E1E1E7] text-center">
        <img
          src={noTaskImg}
          alt="no tasks"
          className="w-[16rem] h-[12rem] aspect-[4/3]"
        />
        <p className="text-[#6C6E7E] text-[1.8rem] font-semibold leading-[2.7rem]">
          관련 태스크가 없습니다
        </p>
      </div>
    </div>
  );
};

export default TaskBacklog;