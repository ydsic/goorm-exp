import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TodoList from "./pages/todolist/TodoList";
import LearningPlan from "./pages/learning-plan/LearningPlan";
import Diary from "./pages/diary/Diary";
import DiaryPage from "./pages/diary/DiaryPage";
import DiaryAdd from "./pages/diary/DiaryAdd";
import Feedback from "./_components/Feedback/Feedback";

export default function App() {
  const [darkmod, setDarkMod] = useState(false);

  return (
    <div
      className={darkmod ? "Theme_Dark" : "Theme_Light"}
      style={{ background: "var(--bg-color)", position: "relative" }}
    >
      <button
        onClick={() => setDarkMod(!darkmod)}
        className="fixed bottom-5 left-5 z-10 px-4 py-2 border rounded"
      >
        {darkmod ? "라이트모드" : "다크모드"}
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/learningplan" element={<LearningPlan />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diarypage/:id" element={<DiaryPage />} />
          <Route path="/diaryadd" element={<DiaryAdd />} />
          <Route path="/feedback/received" element={<Feedback />} />
          <Route path="/feedback/send" element={<Feedback />} />
          <Route path="/diarypage" element={<DiaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
