import { useNavigate } from "react-router-dom";
import Button from "../../pages/learning-plan/_components/Button";

const SubPageHeader = ({ activeTab = "plan", onClickCreatePlan }) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* 경로 표시 부분 */}
      <div className="text-left text-xl text-gray-500 h-[56px] py-[16px] px-[32px] ">
        잠죽자 팀 스터디(프론트엔드 3회차)의 대시보드 /
        <span className="text-[#1D6CE0]  ml-1">
          {activeTab === "plan" ? "학습 계획" : "오늘 할 일"}
        </span>
      </div>

      {/* 타이틀 */}
      <div className="text-left h-[52px] px-[32px] pt-[16px]">
        <h3 className="text-4xl font-bold">
          잠죽자 팀 스터디(프론트엔드 3회차)의 개인 그룹
        </h3>
      </div>

      {/* 탭 메뉴 + 학습 계획 만들기 버튼 */}
      <div className="flex items-center justify-between h-[52px] px-[32px] text-gray-500">
        {/* 탭 메뉴 */}
        <div className="flex justify-between h-full text-2xl gap-x-4">
          {/* 탭: 오늘 할 일 */}
          <div
            className={`relative flex items-center h-full px-2 cursor-pointer hover:text-[#448efe] group transition-colors duration-200 ${
              activeTab === "today" ? "text-[#448efe]" : "hover:text-[#448efe]"
            }`}
            onClick={() => navigate("/todolist")}
          >
            <span>오늘 할 일</span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-200 ${
                activeTab === "today"
                  ? "bg-[#448efe]"
                  : "bg-transparent group-hover:bg-[#448efe]"
              }`}
            ></span>
          </div>

          {/* 탭: 학습 계획 (활성화) */}
          <div
            className={`relative flex items-center h-full px-2 cursor-pointer group transition-colors duration-200 ${
              activeTab === "plan" ? "text-[#448efe]" : "hover:text-[#448efe]"
            }`}
            onClick={() => navigate("/learningplan")}
          >
            <span>학습 계획</span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-200 ${
                activeTab === "plan"
                  ? "bg-[#448efe]"
                  : "bg-transparent group-hover:bg-[#448efe]"
              }`}
            ></span>
          </div>
        </div>

        {/* 버튼 */}

        <Button
          text={
            activeTab === "plan" ? "+ 학습 게획 만들기" : "+ 오늘 할 일 작성"
          }
          size="sm"
          color="primary"
          rounded
          onClick={() => {
            if (activeTab === "plan") {
              onClickCreatePlan();
            } else {
              console.log("오늘 할 일 버튼 실행");
            }
          }}
        />
      </div>
    </div>
  );
};

export default SubPageHeader;
