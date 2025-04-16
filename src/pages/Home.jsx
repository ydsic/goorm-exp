import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Aside from "./Aside";
import DiaryData from "./diary/DirayData";
import TaskManager from "./todolist/_components/TaskManager";


export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const handleEditComplete = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleDeleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };


  return (
    <div className="w-screen h-screen flex">
      <div className="min-w-[300px]">
        <Aside />
      </div>
      <div className="w-[100%] flex flex-col items-center self-stretch overflow-y-auto overflow-x-hidden box-border">

        <div className="w-[100%] flex  items-center self-stretch px-[3.2rem] py-[1.6rem]">
          <div className="justify-center">
            <span className="text-gray-500 text-[12px] font-[500] leading-[<1.8rem>]">
              000(프론트엔드 3회차)의 대시보드 /&nbsp;
            </span>
            <span className="text-blue-600 text-[12px] font-[500]  leading-[<1.8rem>]">
              홈
            </span>
          </div>
        </div>

        <div className="w-[100%] flex flex-col px-[3.2rem] py-[1.6rem] box-border items-start gap-[2rem] self-stretch">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="justify-start text-[var(--home-title-txt-color)] text-5xl font-bold leading-[<3.6rem>]">
              잠죽자 팀스터디(프론트엔드 3회차) 님,
            </div>
            <div className="justify-start text-[var(--home-title-txt-color)] text-5xl font-bold leading-[<3.6rem>]">
              오늘도 좋은 하루 보내세요!
            </div>
          </div>

          <div className="w-[100%] flex px-[2.4rem] py-[1.6rem] justify-start items-center gap-[.8rem] bg-[var(--home-bookmark-color)] rounded-[.8rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 9V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2H7C6.45 2 6 2.45 6 3C6 3.55 6.45 4 7 4H8V9C8 10.66 6.66 12 5 12V14H10.97V21L11.97 22L12.97 21V14H19V12C17.34 12 16 10.66 16 9Z" fill="#525463" />
            </svg>

            <div className="px-3 py-[5px] bg-blue-500 rounded-[.8rem] flex justify-center items-center gap-1.5 overflow-hidden">
              <div className="w-5 h-5 relative overflow-hidden ml-[3px]">
                <svg fill="white" width="17" height="16" viewBox="0 0 17 16">
                  <path d="M7.38397 8.66634H4.0277C3.83751 8.66634 3.67809 8.60245 3.54943 8.47467C3.42077 8.3469 3.35645 8.18856 3.35645 7.99967C3.35645 7.81079 3.42077 7.65245 3.54943 7.52467C3.67809 7.3969 3.83751 7.33301 4.0277 7.33301H7.38397V3.99967C7.38397 3.81079 7.4483 3.65245 7.57695 3.52467C7.70561 3.3969 7.86503 3.33301 8.05522 3.33301C8.24541 3.33301 8.40483 3.3969 8.53349 3.52467C8.66215 3.65245 8.72648 3.81079 8.72648 3.99967V7.33301H12.0827C12.2729 7.33301 12.4324 7.3969 12.561 7.52467C12.6897 7.65245 12.754 7.81079 12.754 7.99967C12.754 8.18856 12.6897 8.3469 12.561 8.47467C12.4324 8.60245 12.2729 8.66634 12.0827 8.66634H8.72648V11.9997C8.72648 12.1886 8.66215 12.3469 8.53349 12.4747C8.40483 12.6025 8.24541 12.6663 8.05522 12.6663C7.86503 12.6663 7.70561 12.6025 7.57695 12.4747C7.4483 12.3469 7.38397 12.1886 7.38397 11.9997V8.66634Z"></path>
                </svg>
              </div>
              <div className="text-center justify-center text-white text-xl font-semibold leading-snug px-[5px] py-[3px]">
                북마크 추가
              </div>
            </div>
          </div>

          <div className="self-stretch h-[10vh] p-6 bg-[var(--home-subtitle-color)] rounded-[10px] outline-2 outline-offset-[-1px] outline-blue-400 inline-flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-center items-start m-5 gap-1">
              <div className="justify-center text-[var(--home-subtitle-txt-color)] text-3xl font-bold leading-normal">
                (3회차)React 기반 프론트엔드 개발자 취업 특화 과정{" "}
              </div>
              <div className="justify-center text-gray-600 text-xl font-medium   leading-none">
                *QR 코드는 주기적으로 업데이트됩니다.
              </div>
            </div>
            <div className="px-4 py-[5px] bg-blue-500 rounded-lg flex justify-center items-center gap-1.5 overflow-hidden">
              <div className="text-center justify-center text-white text-[13px] font-semibold px-[6px] py-[4px] leading-snug">
                학습하기
              </div>
            </div>
          </div>

          {/* 오늘 할 일 */}
          <div className="w-[100%] h-[48rem] self-stretch flex justify-between items-center box-border">
            <div className="w-[30%] h-[48rem] rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center gap-6 overflow-hidden">
              <div className="justify-start text-black text-4xl font-semibold font-['x_Variable']">
                백로그
              </div>
            </div>

            <div className="w-[2rem] h-[2rem] flex justify-center items-center overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M11.0767 10L7.24341 6.16667L7.83341 5.57667L12.2567 10L7.83341 14.4233L7.24341 13.8333L11.0767 10Z" fill="#6C6E7E" />
              </svg>
            </div>

            <div className="w-[70%] h-[480px] rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center overflow-hidden">
              <div className="w-[100%] h-[100%] flex flex-col justify-start px-[2.4rem] py-[2.4rem] overflow-y-auto">
                <TaskManager
                  tasks={tasks}
                  setTasks={setTasks}
                  onDelete={handleDeleteTask}
                  onEditComplete={handleEditComplete}
                  showEditButton={true}
                />
              </div>
            </div>
          </div>

          {/* 학습 계획 */}
          <div className="w-[100%] h-[480px] rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-center items-center overflow-hidden">
            <div className="justify-start text-black text-4xl font-semibold font-['x_Variable']">
              학습계획
            </div>
          </div>

          {/* 배움 일기 */}
          <div className="w-[100%] rounded-lg outline-1 outline-offset-[-1px] outline-gray-300">
            <div className="flex justify-between mt-[25px] mb-[10px] mx-[22px] font-[700]">
              <p className="text-[var(--catagory-txt-color)] text-[17px] ">
                최근 작성한 배움일기
              </p>
              <NavLink to="/diary">
                <p className="text-[var(--catagory-txt-color)] mr-[15px] flex text-[15px] ">
                  더보기
                  <svg
                    fill="currentColor"
                    width="18"
                    height="18"
                    className="position: relative top-[3px] ml-[10px]"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.78804 11.0903C5.5342 11.3441 5.5342 11.7557 5.78804 12.0095C6.04188 12.2634 6.45343 12.2634 6.70728 12.0095L10.18 8.53677C10.4766 8.24024 10.4766 7.75947 10.18 7.46294L6.70728 3.99019C6.45344 3.73634 6.04188 3.73634 5.78804 3.99018C5.5342 4.24403 5.5342 4.65558 5.78804 4.90942L8.87847 7.99985L5.78804 11.0903Z"></path>
                  </svg>
                </p>
              </NavLink>
            </div>
            {DiaryData.map((data, index) => (
              <NavLink key={index} to={`/diarypage/${index}`}>
                <div className="mx-[20px] font-[500] hover:bg-[#a0a0a015] rounded-[7px] py-[10px]">
                  <div className="mx-[20px] text-[17px] text-[var(--catagory-txt-color)]">
                    {data.title}{" "}
                  </div>
                  <div className="mx-[20px] text-[13px] text-[var(--catagory-sub-txt-color)]">
                    {data.time}
                  </div>
                </div>
              </NavLink>
            ))}
            ;
          </div>

          {/* 피드백 */}
          <div className="w-[100%] h-48 rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-center items-center gap-6 overflow-hidden">
            <div className="justify-start text-black text-4xl font-semibold font-['x_Variable']">
              피드백
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
