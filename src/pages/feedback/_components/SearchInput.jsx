import { useEffect, useRef, useState } from "react";

function useDebouncedValue(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

export default function SearchInput({ query, suggestions, onSearch }) {
  const [inputValue, setInputValue] = useState(query);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const inputRef = useRef(null);

  const debouncedInput = useDebouncedValue(inputValue, 200);

  useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput]);

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      if (highlightIndex >= 0 && suggestions[highlightIndex]) {
        const selected = suggestions[highlightIndex];

        setInputValue(selected);
        onSearch(selected);
        setShowSuggestions(flase);
        setHighlightIndex(-1);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <span className="block absolute top-3 left-2">
        <img
          src="/src/assets/svg/search-black.svg"
          alt="피드백 리스트 검색 아이콘"
        />
      </span>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        className="pl-10 w-[33rem] h-[3.2rem] border text-xl border-[#e1e1e8] rounded-md"
        placeholder="멤버 혹은 그룹 이름으로 검색해 주세요."
        onChange={(e) => {
          setInputValue(e.target.value);
          setHighlightIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-[3.5rem] left-0 w-full bg-white border border-[#ccc] rounded-md z-10 shadow-lg max-h-[200px] overflow-y-auto">
          {suggestions.map((suggestion, i) => (
            <li
              key={i}
              className={`px-4 py-2 cursor-pointer text-xl ${
                highlightIndex === i ? "bg-blue-100 font-semibold" : ""
              }`}
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
