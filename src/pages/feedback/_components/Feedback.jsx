import Aside from "../../Aside";
import NoFeedback from "./NoFeedback";
import ModalFeedback from "./ModalFeedback";
import { useEffect, useState } from "react";
import FeedbackButton from "./FeedbackButton";
import FeedbackTabMenu from "./FeedbackTabMenu";
import FeedbackList from "./FeedbackList";
import { useOverlay } from "@toss/use-overlay";
import { loadFeedbacks, saveFeedbacks } from "../../../utils/localStorage";

export default function Feedback() {
  // 모달 상태여부
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 로컬스토리지에서 피드백 불러오기
  const storedFeedbacks = loadFeedbacks();
  const [feedback, setFeedback] = useState([storedFeedbacks]);

  // 불러온 피드백 렌더링
  useEffect(() => {
    setFeedback(storedFeedbacks);
  }, []);

  // 1분마다 페이지 렌더링
  useEffect(() => {
    let interval = null;

    if (!isModalOpen) {
      interval = setInterval(() => {
        window.location.reload();
      }, 60 * 1000);
    }

    return () => clearInterval(interval);
  }, [isModalOpen]);

  // 피드백 추가 핸들러
  const addFeedbackHandle = (newFeedback) => {
    const updated = [...feedback, newFeedback];
    setFeedback(updated);
    saveFeedbacks(updated);
  };

  // 피드백 모달
  const overlay = useOverlay();
  const handleModalEvent = () => {
    setIsModalOpen(true); // 모달 열림상태 설정

    overlay.open(({ isOpen, close }) => (
      <ModalFeedback
        isOpen={isOpen}
        setIsModalOpen={false}
        close={close}
        onSubmit={(data) => {
          addFeedbackHandle(data);
          setIsModalOpen(false);
        }}
      />
    ));
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
                <FeedbackButton onClick={handleModalEvent} text="피드백 하기" />
              </div>

              <FeedbackTabMenu />
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
                    className="pl-10 w-[33rem] h-[3.2rem] border text-xl border-[#e1e1e8] rounded-md"
                    placeholder="멤버 혹은 그룹 이름으로 검색해 주세요."
                  />
                </div>
                <button className="flex gap-3 items-center h-[3.2rem] px-6 text-2xl bg-[#e8e8ee] text-[#525463] rounded-md">
                  2025년
                  <img
                    src="/src/assets/svg/calendar-feedback.svg"
                    alt="feedback-calendar-icon"
                  />
                </button>
              </div>

              {feedback.length === 0 && (
                <NoFeedback onClick={handleModalEvent} />
              )}
              {feedback && <FeedbackList initialValues={feedback} />}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
