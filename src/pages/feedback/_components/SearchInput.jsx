import { useRef } from "react";
import { useAutoComplete } from "../../../hooks/useAutoComplete";
import AutoCompleteList from "./AutoCompleteList";
import useDebounced from "../../../hooks/useDebounced";
import { SearchIcon } from "../../../_components/icons/search";

export default function SearchInput({ suggestions, onSearch }) {
  const inputRef = useRef();
  const {
    input,
    setInput,
    isOpen,
    setIsOpen,
    filtered,
    highlightIndex,
    moveHighlight,
    selectHighlight,
  } = useAutoComplete(suggestions);

  // 디바운스 hooks
  const debouncedSearch = useDebounced(onSearch, 300, [onSearch]);

  const handleChange = (e) => {
    const newVal = e.target.value;
    setInput(newVal);
    debouncedSearch(newVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") moveHighlight("down");
    else if (e.key === "ArrowUp") moveHighlight("up");
    else if (e.key === "Enter") {
      const selected = selectHighlight();
      if (selected) {
        setInput(selected);
        onSearch(selected);
        setIsOpen(false);
      }
    }
  };

  const handleSelect = (item) => {
    setInput(item);
    onSearch(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <span className="block absolute top-3 left-2">
        <SearchIcon />
      </span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        className="pl-10 w-[33rem] h-[3.2rem] border text-xl border-[#e1e1e8] rounded-md"
        placeholder="멤버 혹은 그룹 이름으로 검색해 주세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      />

      {isOpen && filtered.length > 0 && (
        <AutoCompleteList
          items={filtered}
          highlightIndex={highlightIndex}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
