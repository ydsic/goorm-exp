import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="w-[300px] bg-[var(--aside-color)] ">
      <div className="w-72 self-stretch bg-gray-50 outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start">
        <div className="w-72 flex-1 p-3 flex flex-col justify-start items-center gap-1">
          <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
            <div className="w-44 flex justify-start items-center gap-1">
              <div className="w-4 h-4 relative overflow-hidden">
                <div className="w-3.5 h-3 left-[1.33px] top-[2px] absolute bg-gray-500"></div>
              </div>
              <div className="justify-center text-gray-500 text-xs font-medium font-['Pretendard'] leading-none">
                EDUCATION
              </div>
            </div>
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-2 h-2 left-[3.62px] top-[4.28px] absolute bg-zinc-700"></div>
            </div>
          </div>
          <div className="self-stretch p-3 inline-flex justify-start items-center gap-6 overflow-hidden">
            <div className="flex justify-start items-center gap-2">
              <img className="w-8 h-8" src="https://placehold.co/32x32" />
              <div className="flex justify-center items-center gap-2.5">
                <div className="justify-center text-gray-800 text-xl font-semibold font-['Pretendard'] leading-loose">
                  구름톤 딥 다이브
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
          <div className="self-stretch pt-3 pb-32 flex flex-col justify-start items-start gap-1">
            <NavLink to="/">
              <div className="self-stretch h-11 p-2.5 bg-zinc-300/25 rounded-[10px] flex flex-col justify-center items-start gap-2.5">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="w-5 h-5 relative overflow-hidden">
                    <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-800"></div>
                  </div>
                  <div className="justify-center text-gray-800 text-base font-semibold font-['Pretendard'] leading-normal">
                    홈
                  </div>
                </div>
              </div>
            </NavLink>
            <div className="self-stretch h-11 p-2.5 rounded-[10px] flex flex-col justify-center items-start gap-2.5">
              <NavLink to="/todolist">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="w-5 h-5 relative overflow-hidden">
                    <div className="w-3 h-3 left-[5.40px] top-[1.88px] absolute bg-gray-600"></div>
                    <div className="w-3.5 h-3.5 left-[2px] top-[3px] absolute bg-gray-600"></div>
                  </div>
                  <div className="justify-center text-gray-600 text-base font-semibold font-['Pretendard'] leading-normal">
                    오늘 할 일
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="self-stretch h-11 p-2.5 rounded-[10px] flex flex-col justify-center items-start gap-2.5">
              <NavLink to="/learningplan">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-3.5 h-4 left-[7.50px] top-[1.50px] absolute bg-gray-600"></div>
                    <div className="w-3.5 h-3.5 left-[3px] top-[7.50px] absolute bg-gray-600"></div>
                  </div>
                  <div className="justify-center text-gray-600 text-base font-semibold font-['Pretendard'] leading-normal">
                    학습 계획
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="self-stretch h-11 p-2.5 rounded-[10px] flex flex-col justify-center items-start gap-2.5">
              <NavLink to="/diary">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="w-5 h-5 relative overflow-hidden">
                    <div className="w-4 h-3.5 left-[2px] top-[3px] absolute bg-gray-600"></div>
                  </div>
                  <div className="justify-center text-gray-600 text-base font-semibold font-['Pretendard'] leading-normal">
                    배움일기
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="self-stretch h-11 p-2.5 rounded-[10px] flex flex-col justify-center items-start gap-2.5">
              <NavLink to="/feedback">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-5 h-5 left-[1.50px] top-[2.25px] absolute bg-gray-600"></div>
                  </div>
                  <div className="justify-center text-gray-600 text-base font-semibold font-['Pretendard'] leading-normal">
                    피드백
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
