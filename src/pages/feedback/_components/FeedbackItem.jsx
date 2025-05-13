import { memo } from "react";
import { useFormatTimeAgo } from "../../../utils/formatTimeAgo";

const FeedbackItem = memo(function FeedbackItem({
  username,
  subject,
  content,
  createdAt,
}) {
  const timeAgo = useFormatTimeAgo(createdAt);

  return (
    <div className="flex flex-col gap-7 w-full p-6 border border-[#e1e1e8] rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className=" w-[40px] h-[40px] rounded-b-full">
            <img
              src="/src/assets/img/aside_logo.png"
              alt="사용자 이미지"
              className="block w-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-0.5">
              <span className="block font-semibold text-xl text-[#9395a4]">
                {username}
              </span>
              <span className="block px-3 h-[24px] leading-[24px] text-lg text-[#fff] bg-[#3e404c29] rounded-md">
                {subject}
              </span>
            </div>
            <span className="text-lg text-[#9395a4]">{timeAgo}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="block w-1.5 h-1.5 bg-[#9395a4] rounded-b-full"></span>
          <span className="block text-lg text-[#9395a4]">보냄</span>
        </div>
      </div>
      <p className="text-xl text-[#9395a4]">{content}</p>
    </div>
  );
});
export default FeedbackItem;
