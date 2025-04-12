import FormInput from "./FormInput";

import { useEffect, useState } from "react";

const CreatePlanModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // 🧠 여기에 입력 상태 추가!
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");
  const [template, setTemplate] = useState("");

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
        className={`h-full w-1/2 bg-white shadow-lg overflow-y-auto p-8 transform transition-all duration-300 ease-in-out border-l-4 border-[#dce3ed]
        ${isVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* 헤더 */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-semibold">학습 계획 만들기</h2>
          <button
            onClick={handleClose}
            className="text-2xl text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* 폼 내용 */}
        <div className="space-y-6">
          {/* 학습 계획 제목 */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              학습 계획 제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded px-4 py-2 
            
              outline-none border-l-[1px] border-[#e1e1e8] 
              focus:bg-gray-200 cursor-text"
              placeholder="예: 0기 EXP 학습 계획"
            />
          </div>

          <FormInput
            label="학습 계획 제목"
            placeholder="예: 0기 EXP 학습 계획"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <FormInput
            label="그룹"
            placeholder="그룹명을 검색하세요"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />

          <FormInput
            label="템플릿"
            placeholder="템플릿 이름으로 검색"
            value={template}
            onChange={(e) => setGroup(e.target.value)}
          />

          {/* 하단 버튼 */}
          <div className="flex justify-end mt-10">
            <button className="px-6 py-3 bg-[#448efe] text-white rounded hover:bg-[#317efe]">
              학습 계획 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlanModal;
