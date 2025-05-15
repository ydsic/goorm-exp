// 카테고리 키 ↔ 라벨 매핑 객체
const categoryKeyLabelMap = {
  all: "전체",
  collaboration: "협업성",
  performance: "수행도",
  communication: "커뮤니케이션",
};

// key → label
export function getCategoryLabel(key) {
  return categoryKeyLabelMap[key] || key;
}

// label → key
export function getCategoryKey(label) {
  const entry = Object.entries(categoryKeyLabelMap).find(
    ([_, value]) => value === label
  );
  return entry?.[0] || label;
}

export const categories = Object.entries(categoryKeyLabelMap).map(
  ([key, name]) => ({
    key,
    name,
  })
);

export const categoryOptions = [
  { value: "communication", label: "커뮤니케이션" },
  { value: "collaboration", label: "협업성" },
  { value: "performance", label: "수행도" },
];
export const categoryPlaceholder = "피드백 주제 선택";

export const categoryColors = {
  communication: "bg-[#FFEFD5]", // 커뮤니케이션 - 연한 주황
  collaboration: "bg-[#E0FFFF]", // 협업성 - 연한 청록
  performance: "bg-[#F0FFF0]", // 수행도 - 연한 초록
};
