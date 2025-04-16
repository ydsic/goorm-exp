import { useState } from "react";

const SelectSearchInput = ({
  label,
  options,
  value,
  onChange,
  required = false,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filtered = options.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (option) => {
    onChange(option);
    setQuery(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 라벨 */}
      {label && (
        <label className="block text-[#525463] mb-3 text-2xl">
          {label} {required && <span className="text-[#D91C29]">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          value={query || value}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full border rounded-lg px-5 py-3 outline-none bg-white border-l-[1px] border-[#e1e1e8] placeholder:text-xl focus:border-[#448efe] cursor-text"
          placeholder="검색하세요"
        />

        {/* 초기화 버튼 */}
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange("");
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
          >
            초기화
          </button>
        )}

        {/* 드롭다운 아이콘 */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black cursor-pointer"
        >
          <svg
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.90942 5.88561C4.65558 5.63177 4.24403 5.63177 3.99019 5.88561C3.73634 6.13945 3.73634 6.55101 3.99019 6.80485L7.46294 10.2776C7.75947 10.5741 8.24024 10.5741 8.53677 10.2776L12.0095 6.80485C12.2634 6.55101 12.2634 6.13945 12.0095 5.88561C11.7557 5.63177 11.3441 5.63177 11.0903 5.88561L7.99985 8.97604L4.90942 5.88561Z"></path>
          </svg>
        </button>
      </div>

      {/* 드롭다운 목록 */}
      {isOpen && filtered.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md max-h-60 overflow-y-auto shadow-md border-[#e1e1e8]">
          {filtered.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 cursor-pointer text-xl"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectSearchInput;
