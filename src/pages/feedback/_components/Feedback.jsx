import Aside from "../../Aside";
import NoFeedback from "./NoFeedback";
import ModalFeedback from "./ModalFeedback";
import { useEffect, useState } from "react";
import FeedbackButton from "./FeedbackButton";
import FeedbackTabMenu from "./FeedbackTabMenu";
import FeedbackList from "./FeedbackList";
import { useOverlay } from "@toss/use-overlay";
import { loadFeedbacks, saveFeedbacks } from "../../../utils/localStorage";
import SearchInput from "./SearchInput";
import useSearchFeedback from "../../../hooks/useSearchFeedback";

export default function Feedback() {
  const { query, filteredFeedbacks, suggestions, updateQuery } =
    useSearchFeedback();

  // 모달 상태여부
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 피드백 데이터 초기로딩
  const [feedback, setFeedback] = useState(() => loadFeedbacks());

  // 피드백 데이터 갱신
  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      const updated = loadFeedbacks();
      setFeedback(updated);
    }, 60 * 1000);
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
                <SearchInput
                  query={query}
                  suggestions={suggestions}
                  onSearch={updateQuery}
                />
                <button className="flex gap-3 items-center h-[3.2rem] px-6 text-2xl bg-[#e8e8ee] text-[#525463] rounded-md">
                  2025년
                  <img
                    src="/src/assets/svg/calendar-feedback.svg"
                    alt="feedback-calendar-icon"
                  />
                </button>
              </div>

              {feedback.length === 0 ? (
                <NoFeedback onClick={handleModalEvent} />
              ) : filteredFeedbacks.length === 0 ? (
                <p className="text-xl text-gray-500 py-10">
                  검색 결과가 없습니다.
                </p>
              ) : (
                <FeedbackList initialValues={filteredFeedbacks} />
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
