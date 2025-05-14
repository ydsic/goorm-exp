import { Link, useLocation } from "react-router-dom";
import { categories } from "../data";
import clsx from "clsx";
import useSearchFeedback from "../../../hooks/useSearchFeedback";

export default function FeedbackTabMenu() {
  const { category, setCategory } = useSearchFeedback();

  const getLinkClassName = (key) =>
    clsx(
      "flex items-center h-full px-5 h-[3.3rem] leading-[3.3rem] hover:bg-[#3a89ff3d] hover:text-[#1959b8] rounded-lg cursor-pointer",
      category === key
        ? "bg-[#3a89ff3d] hover:bg-[#1959b8] hover:text-white text-[#1959b8]"
        : "bg-[#6c6e7e14] opacity-90 text-[rgb(82, 84, 99)]"
    );

  return (
    <ul className="flex items-center text-2xl gap-2 mb-8">
      {categories.map((category) => (
        <li key={category.key}>
          <button
            onClick={() => setCategory(category.key)}
            className={getLinkClassName(category.key)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
