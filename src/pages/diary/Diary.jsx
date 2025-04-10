import Aside from "../Aside";
import DiaryCard from "./DiaryCard";

export default function Diary() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[300px]">
        <Aside />
      </div>
      <div className="mx-[32px] my-[20px]">
        <div className="flex">
          <p className="text-[11px] text-[#9395A4] font-[500] tracking-tighter">
            배움일기
          </p>
          <p className="mx-[6px] text-[#9395A4] text-[11px] font-[500]">/</p>
          <p className="text-[11px] text-[#ADCDFF] font-[500]">홈</p>
        </div>
        <div className="w-[61vw] mt-[40px] mb-[20px] position: relative left-[180px]">
          <div className="flex justify-between ">
            <p className="text-[23px] text-[#DDDDE4] font-[900] tracking-[-2px]">
              배움일기
            </p>
            <button className="bg-[#5F9DFA] text-white text-[12px] font-[900] px-[15px] py-[11px] rounded-2xl">
              배움일기 작성하기
            </button>
          </div>
          <div className="position: relative my-[10px]">
            <button className=" bg-[#5F9DFA3D] text-[#81B2FC] px-5 py-3 rounded-2xl text-[13px] font-[900]">
              {" "}
              홈
            </button>
            <button className="bg-[#9395A414] text-[#AAACBA] px-5 py-3 rounded-2xl ml-3 text-[13px] font-[900]">
              나의 활동
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex border-1 border-gray-700 my-[10px] w-[15vw] rounded-[7px]">
              <svg
                fill="gray"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                className="ml-[10px] mr-[7px] my-[7px]"
              >
                <path d="M6.33333 10.6667C5.12222 10.6667 4.09722 10.2472 3.25833 9.40833C2.41944 8.56944 2 7.54444 2 6.33333C2 5.12222 2.41944 4.09722 3.25833 3.25833C4.09722 2.41944 5.12222 2 6.33333 2C7.54444 2 8.56944 2.41944 9.40833 3.25833C10.2472 4.09722 10.6667 5.12222 10.6667 6.33333C10.6667 6.82222 10.5889 7.28333 10.4333 7.71667C10.2778 8.15 10.0667 8.53333 9.8 8.86667L13.5333 12.6C13.6556 12.7222 13.7167 12.8778 13.7167 13.0667C13.7167 13.2556 13.6556 13.4111 13.5333 13.5333C13.4111 13.6556 13.2556 13.7167 13.0667 13.7167C12.8778 13.7167 12.7222 13.6556 12.6 13.5333L8.86667 9.8C8.53333 10.0667 8.15 10.2778 7.71667 10.4333C7.28333 10.5889 6.82222 10.6667 6.33333 10.6667ZM6.33333 9.33333C7.16667 9.33333 7.875 9.04167 8.45833 8.45833C9.04167 7.875 9.33333 7.16667 9.33333 6.33333C9.33333 5.5 9.04167 4.79167 8.45833 4.20833C7.875 3.625 7.16667 3.33333 6.33333 3.33333C5.5 3.33333 4.79167 3.625 4.20833 4.20833C3.625 4.79167 3.33333 5.5 3.33333 6.33333C3.33333 7.16667 3.625 7.875 4.20833 8.45833C4.79167 9.04167 5.5 9.33333 6.33333 9.33333Z"></path>
              </svg>
              <input
                className="text-gray-100 font-[900] text-[12px] w-[10vw]"
                placeholder="키워드나 멤버 및 그룹으로 검색"
              />
            </div>
          </div>
          <div className="flex gap-[20px] mt-[20px]">
            <DiaryCard />
            <DiaryCard />
          </div>
          <div className="flex gap-[20px] mt-[20px]">
            <DiaryCard />
            <DiaryCard />
          </div>
          <div className="flex gap-[20px] mt-[20px]">
            <DiaryCard />
            <DiaryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
