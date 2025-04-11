import React from "react";
import { NavLink } from "react-router-dom";

import LogoAside from "../assets/img/aside_logo.png";
import HomeIcon from "../assets/svg/sideIcon-home.svg";
import TodayIcon from "../assets/svg/sideIcon-todayList.svg";
import LearningPlanIcon from "../assets/svg/sideIcon-learningPlan.svg";
import DiaryIcon from "../assets/svg/sideIcon-diary.svg";
import FeedbackIcon from "../assets/svg/sideIcon-feedback.svg";
import EducationIcon from "../assets/svg/sideIcon-edu.svg";

export default function Aside() {
  return (
    <aside className="w-[30rem] h-screen flex flex-col items-start justify-start bg-[var(--aside-color)] border-r border-[var(--border-color-gray)] p-5 gap-1.5 box-border">
      {/* 상단 라벨 */}
      <div className="flex items-center gap-2 text-[1.2rem] font-medium text-[var(--gray-50)] leading-[1.6rem] tracking-tight px-1">
        <div className="w-5 h-5">
          <img
            src={EducationIcon}
            alt="aside-header-icon"
            className="w-full h-full object-contain"
          />
        </div>
        EDUCATION
      </div>

      {/* 로고 영역 */}
      <div className="w-full flex items-center gap-3 p-5">
        <div className="w-12 h-12">
          <img src={LogoAside} alt="logo" />
        </div>
        <h2 className="text-[var(--title-txt-color)] text-[2rem] font-semibold leading-[3rem] tracking-tight">
          구름톤 딥 다이브
        </h2>
      </div>

      {/* 구분선 */}
      <hr className="w-full border-t border-[var(--border-color-gray)]" />

      {/* 내비게이션 메뉴 */}
      <nav className="w-full flex flex-col gap-1.5 py-5">
        <NavItem to="/" icon={HomeIcon} label="홈" />
        <NavItem to="/todolist" icon={TodayIcon} label="오늘 할 일" />
        <NavItem to="/learningplan" icon={LearningPlanIcon} label="학습 계획" />
        <NavItem to="/diary" icon={DiaryIcon} label="배움일기" />
        <NavItem to="/feedback" icon={FeedbackIcon} label="피드백" />
      </nav>
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-full h-[4.5rem] px-4 py-3 flex items-center gap-4 text-[1.6rem] font-semibold leading-[2.4rem] rounded-xl transition-all duration-200 ${
          isActive
            ? "bg-[var(--hover-side-bg-color)] text-[var(--hover-txt-color)]"
            : "text-[var(--icon-color)] hover:bg-[var(--hover-side-bg-color)] hover:text-[var(--hover-txt-color)]"
        }`
      }
    >
      <div className="w-8 h-8">
        <img src={icon} alt={`${label}-icon`} />
      </div>
      {label}
    </NavLink>
  );
}
