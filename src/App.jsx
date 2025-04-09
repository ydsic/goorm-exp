import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TodoList from "./pages/todolist/TodoList";

export default function App() {
  const [darkmod, setDarkMod] = useState(false);

  return (
    <div
      className={darkmod ? "Theme_Dark" : "Theme_Light"}
      style={{ background: "var(--bg-color)" }}
    >
      <button
        onClick={() => setDarkMod(!darkmod)}
        className="px-4 py-2 border rounded btn12345"
      >
        {darkmod ? "라이트모드" : "다크모드"}
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
