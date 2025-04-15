import Aside from "../../Aside";
import NoFeedback from "./NoFeedback";
import ModalFeedback from "./ModalFeedback";
import { useEffect, useState } from "react";
import FeedbackButton from "./FeedbackButton";

export default function Feedback() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="w-screen flex">
        <Aside />

        <div className="w-[calc(100%-300px)]">
          <nav className="py-[1.6rem] px-[3.2rem] text-[1.125rem] text-[#9395a4]">
            <span>커뮤니티 &nbsp;</span>
            <span>/ 상시 피드백 &nbsp;</span>
            <span className="text-[#adceff]">/ 받은 내용</span>
          </nav>

          <article className="w-full py-[1.6rem] px-[3.2rem] ">
            <header>
              <div className="flex justify-between items-center mb-7">
                <h3 className="font-bold text-4xl text-d">상시 피드백</h3>
                <FeedbackButton onClick={openModal} text="피드백 하기" />
              </div>

              <ul className="flex items-center text-2xl gap-2.5 mb-8">
                <li className="h-[3.3rem]">
                  <a
                    href="/feedback/received"
                    className="flex items-center h-full px-5 bg-[#448efe3d] text-[#1959b8] text-[1.4rem] rounded-lg"
                  >
                    받은 내용
                  </a>
                </li>
                <li className="h-[3.3rem]">
                  <a
                    href="/feedback/send"
                    className="flex items-center h-full px-5 bg-[#6c6e7e14] opacity-90 text-[rgb(82, 84, 99)] text-[1.4rem] rounded-lg"
                  >
                    보낸 내용
                  </a>
                </li>
              </ul>
            </header>

            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="relative">
                  <span className="block absolute top-3 left-2">
                    <img
                      src="/src/assets/svg/search-black.svg"
                      alt="피드백 리스트 검색 아이콘"
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-10 w-[33rem] h-[3.2rem] border text-lg border-[#e1e1e8] rounded-md"
                    placeholder="멤버 혹은 그룹 이름으로 검색해 주세요."
                  />
                </div>
                <button className="flex gap-3 items-center h-[3.2rem] px-6 text-2xl bg-[#e8e8ee] text-[#525463] rounded-md">
                  2025년{" "}
                  <img
                    src="/src/assets/svg/calendar-feedback.svg"
                    alt="feedback-calendar-icon"
                  />
                </button>
              </div>

              <NoFeedback onClick={openModal} />
            </div>
          </article>
        </div>
      </div>

      <ModalFeedback open={modalOpen} close={closeModal} />
    </div>
  );
}
