import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TodoList from "./pages/todolist/TodoList";
import LearningPlan from "./pages/learning-plan/LearningPlan";
import Diary from "./pages/diary/Diary";
import DiaryPage from "./pages/diary/DiaryPage";
import DiaryAdd from "./pages/diary/DiaryAdd";
import Feedback from "./pages/feedback/_components/Feedback";

export default function App() {
  const [darkmod, setDarkMod] = useState(false);

  return (
    <div
      className={darkmod ? "Theme_Dark" : "Theme_Light"}
      style={{ background: "var(--bg-color)", position: "relative" }}
    >
      <Outlet />
      <button
        onClick={() => setDarkMod(!darkmod)}
        className="fixed bottom-5 left-5 z-10 px-4 py-2 border rounded"
      >
        {darkmod ? "라이트모드" : "다크모드"}
      </button>
    </div>
  );
}
