import { memo } from "react";

const AutoCompleteList = memo(function AutoCompleteList({
  items,
  highlightIndex,
  onSelect,
}) {
  if (!items.length) return null;

  return (
    <ul className="absolute top-[3.5rem] left-0 w-full bg-white border border-[#ccc] rounded-md z-10 shadow-lg max-h-[200px] overflow-y-auto">
      {items.map((item, idx) => (
        <li
          key={item}
          className={`px-4 py-2 cursor-pointer text-xl ${
            highlightIndex === idx ? "bg-blue-100 font-semibold" : ""
          }`}
          onMouseDown={() => onSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
});
export default AutoCompleteList;
