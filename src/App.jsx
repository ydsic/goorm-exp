import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

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
