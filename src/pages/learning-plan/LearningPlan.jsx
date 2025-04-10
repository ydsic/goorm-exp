import Aside from "../Aside";
import SubPageHeader from "../../_components/header/SubPageHeader";

const LearningPlan = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* 왼쪽 사이드바 - 고정 */}
      <div className="w-[300px] h-screen sticky top-0 overflow-y-auto">
        <Aside />
      </div>

      {/* 오른쪽 메인 영역 */}
      <div className="flex flex-col flex-1 overflow-y-auto h-screen">
        {/* 상단 헤더 - 고정 */}
        <div className="sticky top-0 z-10 bg-white shadow">
          <SubPageHeader activeTab="plan" />
        </div>

        {/* 메인 콘텐츠 */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">학습계획 입니다</h1>
          <p>스크롤 테스트용 컨텐츠</p>
          <div className="h-[2000px] bg-gray-100 mt-4 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlan;
