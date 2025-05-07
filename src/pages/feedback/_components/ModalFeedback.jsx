import Select from "react-select";
import {
  subjectOptions,
  subjectPlaceholder,
  userOptions,
  userPlaceholder,
} from "../data";
import { useState } from "react";
import { saveFeedbacks } from "../../../utils/localStorage";

export default function ModalFeedback({ isOpen, close }) {
  const [username, setUsername] = useState(null);
  const [subject, setSubject] = useState(null);
  const [content, setContent] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    let id = 0;
    const feedbackData = {
      id: id + 1,
      username: username?.value || "",
      subject: subject?.value || "",
      content,
    };
    saveFeedbacks(feedbackData);
    close();
    console.log("성공", username, subject, content);
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={handleFeedbackSubmit}>
      <div
        className={`flex absolute top-0 left-0 w-full h-screen bg-black/60 items-center justify-center `}
      >
        <div className="min-w-[35rem] w-[50rem] h-[63.4rem] bg-white rounded-2xl">
          <div className="py-8 px-10 flex justify-between items-center">
            <h6 className="text-3xl">피드백하기</h6>
            <button className="text-4xl cursor-pointer" onClick={close}>
              ×
            </button>
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
                onChange={(seleted) => setUsername(seleted)}
              />
            </div>
            <div className="mb-8 text-xl">
              <label htmlFor="" className="block pb-4">
                어떤 주제로 피드백할까요?
              </label>
              <Select
                className="rounded-2xl"
                options={subjectOptions}
                onChange={(seleted) => setSubject(seleted)}
                placeholder={subjectPlaceholder}
              />
            </div>

            <div className="h-[30rem]">
              <textarea
                cols="30"
                rows="10"
                onChange={(e) => setContent(e.target.value)}
                className="p-8 w-full h-full focus:outline-1 border border-[#e1e1e8] rounded-2xl text-xl"
              ></textarea>
            </div>
          </div>
          <div className="py-5 px-10 flex gap-6 justify-end items-center text-xl border-t border-[#e1e1e8]">
            <button
              className="px-6 h-[4rem] rounded-lg text-2xl bg-[#e1e1e8] cursor-pointer"
              onClick={close}
            >
              닫기
            </button>
            <button
              type="submit"
              // disabled
              className="px-6 h-[4rem] rounded-lg text-2xl bg-[#5f9dfa] text-white"
            >
              전달하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
