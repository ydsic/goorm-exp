import { NavLink } from "react-router-dom";
import Aside from "./Aside";

import DiaryData from "./diary/DirayData";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="min-w-[300px]">
        <Aside />
      </div>
      <div className="inline-flex flex-col justify-start items-center overflow-y-auto overflow-x-hidden">
        <div className="self-stretch mx-[12px] mt-[10px] px-8 py-4 inline-flex justify-start items-center gap-2">
          <div className="justify-center">
            <span className="text-gray-500 text-[11px] font-[700] leading-none">
              000(프론트엔드 3회차)의 대시보드
            </span>
            <span className="text-gray-500 text-[9px] font-[900] leading-none mx-[10px]">
              /
            </span>
            <span className="text-blue-600 text-[12px] font-medium leading-none">
              홈
            </span>
          </div>
        </div>
        <div className="self-stretch w-[83vw] mx-[12px] px-8 py-4 flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="justify-start text-[var(--home-title-txt-color)] text-5xl font-bold mt-[20px]">
              000(프론트엔드 3회차) 님,
            </div>
            <div className="justify-start text-[var(--home-title-txt-color)] text-5xl font-bold my-[10px]">
              오늘도 좋은 하루 보내세요!
            </div>
          </div>
          <div className="self-stretch px-6 py-4 bg-[var(--home-bookmark-color)] rounded-lg inline-flex justify-start items-center">
            <svg
              fill="#C3C4CFbb"
              width="40"
              height="40"
              viewBox="0 0 25 25"
              className="position: relative top-[7px]"
            >
              <path d="M10.6667 3.33333V8L11.8 9.13333C11.8667 9.2 11.9167 9.275 11.95 9.35833C11.9833 9.44167 12 9.52778 12 9.61667V10C12 10.1889 11.9361 10.3472 11.8083 10.475C11.6806 10.6028 11.5222 10.6667 11.3333 10.6667H8.66667V14.5667C8.66667 14.7556 8.60278 14.9139 8.475 15.0417C8.34722 15.1694 8.18889 15.2333 8 15.2333C7.81111 15.2333 7.65278 15.1694 7.525 15.0417C7.39722 14.9139 7.33333 14.7556 7.33333 14.5667V10.6667H4.66667C4.47778 10.6667 4.31944 10.6028 4.19167 10.475C4.06389 10.3472 4 10.1889 4 10V9.61667C4 9.52778 4.01667 9.44167 4.05 9.35833C4.08333 9.275 4.13333 9.2 4.2 9.13333L5.33333 8V3.33333C5.14444 3.33333 4.98611 3.26944 4.85833 3.14167C4.73056 3.01389 4.66667 2.85556 4.66667 2.66667C4.66667 2.47778 4.73056 2.31944 4.85833 2.19167C4.98611 2.06389 5.14444 2 5.33333 2H10.6667C10.8556 2 11.0139 2.06389 11.1417 2.19167C11.2694 2.31944 11.3333 2.47778 11.3333 2.66667C11.3333 2.85556 11.2694 3.01389 11.1417 3.14167C11.0139 3.26944 10.8556 3.33333 10.6667 3.33333Z"></path>
            </svg>

            <div className="px-3 py-[5px] bg-blue-500 rounded-lg flex justify-center items-center gap-1.5 overflow-hidden">
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
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="w-96 h-[480px] max-w-96 min-w-48 rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center gap-6 overflow-hidden">
              <div className="justify-start text-black text-4xl font-semibold font-['x_Variable']">
                백로그
              </div>
            </div>
            <div className="h-[480px] flex justify-center items-center overflow-hidden">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-[5.01px] h-2 left-[7.24px] top-[5.58px] absolute bg-gray-500"></div>
              </div>
            </div>
            <div className="flex-1 h-[480px] rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center overflow-hidden">
              <div className="justify-start text-black text-4xl font-semibold font-['x_Variable']">
                오늘할일
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[480px] rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-center items-center overflow-hidden">
            <div className="justify-start text-black text-4xl font-semibold font-['x_Variable']">
              학습계획
            </div>
          </div>
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
