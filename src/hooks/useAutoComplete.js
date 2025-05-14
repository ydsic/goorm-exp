import { useMemo, useState } from "react";

// 검색어 로직 담당 훅
export function useAutoComplete(options, initial = "") {
  const [input, setInput] = useState(initial);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  // 디바운싱
  const filtered = useMemo(() => {
    const lower = input.toLowerCase();
    return options
      .filter((opt) => typeof opt === "string")
      .filter((opt) => opt.toLowerCase().includes(lower));
  }, [input, options]);

  const moveHighlight = (direction) => {
    setHighlightIndex((prev) => {
      if (direction === "down") {
        return prev < filtered.length - 1 ? prev + 1 : 0;
      } else {
        return prev > 0 ? prev - 1 : filtered.length - 1;
      }
    });
  };

  const selectHighlight = () => {
    if (highlightIndex >= 0 && filtered[highlightIndex]) {
      return filtered[highlightIndex];
    }
    return null;
  };

  return {
    input,
    setInput,
    isOpen,
    setIsOpen,
    filtered,
    highlightIndex,
    moveHighlight,
    selectHighlight,
  };
}
