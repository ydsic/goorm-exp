import Aside from "../Aside";

export default function DiaryPage() {
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
          <p className="text-[11px] text-[#ADCDFF] font-[500]">
            XXX(프론트엔드 3회차)님의 배움일기
          </p>
        </div>
        <div className="mt-[38px] flex">
          <button className="bg-[#3F434F] px-[8px] my-[2px] rounded-[7px]">
            <svg
              fill="#aaa"
              width="16"
              height="16"
              class="vapor_components_0_24_0_icon_2de8d vapor_components_0_24_0_icon_md_2de8d"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M8.28474 3.13064C8.54411 2.87372 8.54609 2.45519 8.28917 2.19583C8.03226 1.93646 7.61373 1.93448 7.35437 2.1914L2.03416 7.46142C1.73471 7.75804 1.73471 8.24196 2.03416 8.53858L7.35437 13.8086C7.61373 14.0655 8.03226 14.0635 8.28917 13.8042C8.54609 13.5448 8.54411 13.1263 8.28474 12.8694L3.98519 8.61037H13.5145C13.8796 8.61037 14.1755 8.31442 14.1755 7.94935C14.1755 7.58428 13.8796 7.28833 13.5145 7.28833H4.08745L8.28474 3.13064Z"></path>
            </svg>
          </button>
          <p className="text-[23px] ml-[10px] font-[900] text-[#DDDDE4] tracking-[-3px]">
            XXX(프론트엔드 3회차)님의 배움일기
          </p>
        </div>
        <div className="border-1 border-[rgba(255,255,255,0.1)] w-[80vw] mt-[20px]">
          <div className="mx-[20px] my-[20px]">
            <p className="text-[20px] text-[#DDDDE4] font-[900]">
              React의 Virtual DOM이란?
            </p>
            <p className="mt-[5px] text-[#9395A4] text-[13px] font-[900]">
              1시간 전
            </p>
            <div className="flex mt-[25px]">
              <p className="bg-[#5F9DFA29] text-[#81B2FC] px-[10px] py-[7px] rounded-[7px] text-[12px]">
                구름 EDU 강좌
              </p>
              <p className="ml-[30px] mt-[7px] text-[#9395A4] text-[11px]">
                (3회차) React 기반 프론트엔드 개발자 취업 특화 과정{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
