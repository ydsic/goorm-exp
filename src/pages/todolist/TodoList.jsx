import React, { useState, useEffect } from "react";
import rightArrow from "../../assets/svg/right-arrow.svg";
import confettiImg from "../../assets/svg/confetti-img.svg";

import Aside from "../Aside";
import CustomNavHeader from "./_components/CustomNavHeader";
import TaskManager from "./_components/TaskManager";
import TaskHeaderBar from "./_components/TaskHeaderBar";
import TaskBacklog from "./_components/TaskBacklog";

export default function TodoList() {
  const [isEditComplete, setIsEditComplete] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEditComplete = () => {
    saveTasksToLocalStorage(tasks);
    setIsEditComplete(true);
  };

  const handleDeleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
    saveTasksToLocalStorage(updated);
  };

  return (
    <div className="w-screen h-screen flex items-start text-[1.6rem]">
      <div className="w-[30rem] h-full box-border">
        <Aside />
      </div>
      <div className="flex flex-col items-start justify-start p-[1.6rem_3.2rem] w-full h-full box-border">
        <CustomNavHeader>오늘 할 일 수정</CustomNavHeader>
        <TaskHeaderBar
          onEditComplete={handleEditComplete}
          isEditComplete={isEditComplete}
        />
        {isEditComplete ? (
          <div className="w-full h-full py-[4rem] flex flex-col justify-center items-center gap-[1.2rem] flex-1 box-border">
            <div className="w-[24rem] h-[18rem] flex justify-center items-center">
              <img
                src={confettiImg}
                alt="confetti"
                className="w-full h-auto object-contain"
              />
            </div>
            <h2 className="text-[2rem] font-bold text-center text-[#2b2d36]">
              오늘 하루도 화이팅!
            </h2>
            <p className="text-[1.6rem] font-medium text-center text-[#2b2d36]">
              오늘 할일 작성을 완료했어요!
            </p>
          </div>
        ) : (
          <div className="w-full h-full flex justify-between items-center gap-[1.2rem] flex-1 box-border">
            <div className="flex flex-col items-center gap-[2.4rem] p-[1.6rem] w-[75.5rem] h-full rounded-[0.8rem] bg-[#f7f7fa] box-border">
              <TaskBacklog />
            </div>
            <div className="w-[2rem] h-full flex justify-center items-center box-border">
              <img
                src={rightArrow}
                alt="arrow"
                className="w-full h-auto object-contain"
              />
            </div>
            <TaskManager
              tasks={tasks}
              setTasks={setTasks}
              onDelete={handleDeleteTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}
