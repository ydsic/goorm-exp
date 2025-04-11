import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="w-[300px] bg-[#f7f7fa]  h-full">
      <div>
        <NavLink to="/">홈</NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink to="/todolist">오늘 할 일</NavLink>
        <NavLink to="/learningplan">학습 계획</NavLink>
        <NavLink to="/diary">최근 작성한 배움일기</NavLink>
        <NavLink to="/feedback">상시 피드백</NavLink>
      </div>
    </aside>
  );
}
