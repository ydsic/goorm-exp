import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import TodoList from "../pages/todolist/TodoList";
import LearningPlan from "../pages/learning-plan/LearningPlan";
import Diary from "../pages/diary/Diary";
import DiaryPage from "../pages/diary/DiaryPage";
import DiaryAdd from "../pages/diary/DiaryAdd";
import FeedbackPage from "../pages/feedback";
import Feedback from "../pages/feedback/_components/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todolist",
        element: <TodoList />,
      },
      { path: "learning-plan", element: <LearningPlan /> },
      {
        path: "diary",
        element: <Diary />,
      },
      {
        path: "diarypage",
        element: <DiaryPage />,
      },
      {
        path: "diarypage/:id",
        element: <DiaryPage />,
      },
      { path: "diaryadd", element: <DiaryAdd /> },
      {
        path: "feedback",
        element: <FeedbackPage />,
        children: [
          {
            path: "received",
            element: <Feedback />,
          },
          {
            path: "send",
            element: <Feedback />,
          },
        ],
      },
    ],
  },
]);
export default router;
