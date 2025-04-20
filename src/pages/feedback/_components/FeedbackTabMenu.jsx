import { Link } from "react-router-dom";

export default function FeedbackTabMenu() {
  return (
    <ul className="flex items-center text-2xl gap-2.5 mb-8">
      <li className="h-[3.3rem]">
        <Link
          to={"/feedback/received"}
          className="flex items-center h-full px-5 bg-[#448efe3d] text-[#1959b8] text-[1.4rem] rounded-lg"
        >
          받은 내용
        </Link>
      </li>
      <li className="h-[3.3rem]">
        <Link
          to={"/feedback/send"}
          className="flex items-center h-full px-5 bg-[#6c6e7e14] opacity-90 text-[rgb(82, 84, 99)] text-[1.4rem] rounded-lg"
        >
          보낸 내용
        </Link>
      </li>
    </ul>
  );
}
