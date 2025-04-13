import { CalenderIcon, EmptyIcon, SearchIcon } from "../../assets/icons/icons";
import Select from "react-select";
import Aside from "../../pages/Aside";

export default function Feedback() {
  const subjectOptions = [
    {
      value: "커뮤니케이션",
      label: "커뮤니케이션",
    },
    {
      value: "협업성",
      label: "협업성",
    },
    { value: "수행도", label: "수행도" },
  ];
  const subjectPlaceholder = "피드백 주제 선택";
  const userOptions = [
    {
      value: "권은서",
      label: "권은서",
    },
    { value: "김호영", label: "김호영" },
    { value: "조연경", label: "조연경" },
    { value: "이예도", label: "이예도" },
    { value: "양아름", label: "양아름" },
  ];
  const userPlaceholder = "학생 또는 그룹을 선택해주세요.";
  return (
    <div className="relative">
      <div className="w-screen h-screen flex">
        <Aside />

        <div className="w-[calc(100%-300px)]">
          <nav className="py-[1.6rem] px-[3.2rem] text-[1.125rem] text-[#9395a4]">
            <span>커뮤니티 &nbsp;</span>
            <span>/ 상시 피드백 &nbsp;</span>
            <span className="text-[#adceff]">/ 받은 내용</span>
          </nav>

          <article className="w-full py-[1.6rem] px-[3.2rem] ">
            <header>
              <div className="flex justify-between items-center mb-7">
                <h3 className="font-bold text-4xl text-d">상시 피드백</h3>
                <button className="px-6 h-[4rem] rounded-lg text-2xl bg-[#5f9dfa] text-white">
                  피드백하기
                </button>
              </div>

              <ul className="flex items-center text-2xl gap-2.5 mb-8">
                <li className="h-[3.3rem]">
                  <a
                    href="/feedback/received"
                    className="flex items-center h-full px-5 bg-[#448efe3d] text-[#1959b8] text-[1.4rem] rounded-lg"
                  >
                    받은 내용
                  </a>
                </li>
                <li className="h-[3.3rem]">
                  <a
                    href="/feedback/send"
                    className="flex items-center h-full px-5 bg-[#6c6e7e14] opacity-90 text-[rgb(82, 84, 99)] text-[1.4rem] rounded-lg"
                  >
                    보낸 내용
                  </a>
                </li>
              </ul>
            </header>

            <div className="h-svh">
              <div className="flex justify-between items-center mb-8">
                <div className="relative">
                  <span className="absolute top-3 left-2">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    className="pl-10 w-[33rem] h-[3.2rem] border text-lg border-[#e1e1e8] rounded-md"
                    placeholder="멤버 혹은 그룹 이름으로 검색해 주세요."
                  />
                </div>
                <button className="flex gap-3 items-center h-[3.2rem] px-6 text-2xl bg-[#e8e8ee] text-[#525463] rounded-md">
                  2025년 <CalenderIcon />
                </button>
              </div>
              <div className="flex justify-center items-center flex-col h-fit min-h-[80rem] border border-[#e1e1e8] rounded-3xl">
                <EmptyIcon />
                <h4 className="mt-6 mb-4 text-[#6c6e7e] font-bold text-4xl">
                  전달 받은 피드백이 없습니다.
                </h4>
                <p className="mb-2 text-2xl text-[#6c6e7e]">
                  먼저 피드백을 작성해 보세요
                </p>
                <button className="mt-12 px-6 h-[4rem] rounded-lg text-2xl bg-[#5f9dfa] text-white">
                  피드백하기
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="hidden absolute top-0 left-0 w-full h-full bg-black/60 items-center justify-center">
        <div className="min-w-[50rem] w-[50rem] h-[73.4rem] bg-white rounded-2xl">
          <div className="py-8 px-10 flex justify-between items-center">
            <h6 className="text-3xl">피드백하기</h6>
            <button className="text-4xl cursor-pointer">×</button>
          </div>

          <div className="py-6 px-10">
            <div className="mb-8 text-xl">
              <label htmlFor="" className="block pb-4">
                누구에게 전달할까요?
              </label>
              <Select
                className="rounded-2xl"
                options={userOptions}
                placeholder={userPlaceholder}
              />
            </div>
            <div className="mb-8 text-xl">
              <label htmlFor="" className="block pb-4">
                어떤 주제로 피드백할까요?
              </label>
              <Select
                className="rounded-2xl"
                options={subjectOptions}
                placeholder={subjectPlaceholder}
              />
            </div>

            <div className="h-[40rem]">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="p-8 w-full h-full focus:outline-1 border border-[#e1e1e8] rounded-2xl text-xl"
              ></textarea>
            </div>
          </div>
          <div className="py-5 px-10 flex gap-6 justify-end items-center text-xl border-t border-[#e1e1e8]">
            <button className="px-6 h-[4rem] rounded-lg text-2xl bg-[#e1e1e8]">
              닫기
            </button>
            <button
              disabled
              className="px-6 h-[4rem] rounded-lg text-2xl bg-[#5f9dfa] text-white"
            >
              전달하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
