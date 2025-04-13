import FormInput from "./_components/FormInput";
import Button from "./_components/Button";
import SelectSearchInput from "./_components/SelectSearchInput.jsx";

import { useEffect, useState } from "react";

const CreatePlanModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");
  const [template, setTemplate] = useState("");
  const [period, setPeriod] = useState("");
  const [manager, setManager] = useState("");
  const [participant, setParticipant] = useState("");
  const [description, setDescription] = useState("");
  const isButtonDisabled = title.trim() === "" || group.trim() === "";

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-end transition-opacity duration-300">
      <div
        className={`h-full w-9/20 bg-white shadow-[0_0_14px_rgba(0,0,0,0.15)] transform transition-all duration-300 ease-in-out   
    ${isVisible ? "translate-x-0" : "translate-x-full"}
    flex flex-col`}
      >
        {/* 상단 헤더 */}
        <div className="sticky top-0 z-10 bg-white px-8 py-5 border-b border-[#e1e1e8]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-[#2B2D36]">학습 계획 만들기</h2>
            <button
              onClick={handleClose}
              className="text-3xl text-gray-400 hover:text-black cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>

        {/*콘텐츠 영역, 폼 내용 */}
        <div className="flex-1 overflow-y-auto space-y-8 px-8 py-8">
          <div>
            <label className="text-3xl font-semibold">
              이번 학습에서는 어떤 것을 달성하실 건가요?
            </label>
          </div>

          <FormInput
            label="학습 계획 제목"
            placeholder="예) EXP 학습 계획"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <SelectSearchInput
            label="그룹"
            placeholder="그룹명을 검색하세요"
            required
            options={[
              "잠죽자(프론트엔드 3회차)의 개인 그룹",
              "잠죽자(프론트엔드 3회차)의 개인 알고리즘",
              "(3회차) React 기반 프론트엔드 개발자 취업 특화 과정",
            ]}
            value={group}
            onChange={setGroup}
          />

          <FormInput
            label="템플릿"
            placeholder="템플릿 이름으로 검색"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          />

          <FormInput
            label="기간"
            placeholder="시작일 - 종료일"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />

          <div className="flex gap-4">
            <div className="w-1/2">
              <SelectSearchInput
                label="담당자"
                options={["김호영", "양아름", "이예도", "조연경"]}
                placeholder="템플릿 이름으로 검색"
                value={manager}
                onChange={setManager}
              />
            </div>

            <div className="w-1/2">
              <SelectSearchInput
                label="참여자"
                options={["김호영", "양아름", "이예도", "조연경"]}
                placeholder="구성원 또는 그룹 이름으로 검색"
                value={participant}
                onChange={setParticipant}
              />
            </div>
          </div>

          <FormInput
            label="캠페인 설명"
            placeholder="학습 목표에 대해 상세하게 작성해 주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
          />
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-end mt-10 px-8 py-5 border-t border-[#e1e1e8]">
          <Button
            text="학습 계획 시작하기"
            size="sm"
            rounded
            color={isButtonDisabled ? "gray" : "primary"}
            onClick={() => console.log("학습 계획 버튼 클릭")}
            className={isButtonDisabled ? "cursor-not-allowed" : ""}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePlanModal;
