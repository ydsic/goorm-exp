import Aside from "../Aside";

export default function TodoList() {
  return (
    <div className="w-screen h-screen flex items-start relative">
      <div className="w-[300px] h-full">
        <Aside />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start">
        <div className="w-full h-fit flex px-1.6rem py-3.2rem items-center gap-.8rem alight ">
          오늘 할 일 제출
        </div>
      </div>
    </div>
  );
}
