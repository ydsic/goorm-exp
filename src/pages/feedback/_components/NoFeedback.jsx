import FeedbackButton from "./button";

export default function NoFeedback({ onClick }) {
  return (
    <div className="flex justify-center items-center flex-col h-fit min-h-[80rem] mb-40 border border-[#e1e1e8] rounded-3xl">
      <img
        src="/src/assets/svg/empty.svg"
        alt="전달 받은 피드백이 없는 아이콘"
      />
      <h4 className="mt-6 mb-4 text-[#6c6e7e] font-bold text-4xl">
        전달 받은 피드백이 없습니다.
      </h4>
      <p className="mb-10 text-2xl text-[#6c6e7e]">
        먼저 피드백을 작성해 보세요
      </p>
      <FeedbackButton text="피드백 하기" onClick={onClick} />
    </div>
  );
}
