import { useEffect } from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList(feedbackArr) {
  const { initialValues } = feedbackArr;
  console.log(initialValues);

  return (
    <ul className="flex flex-col gap-7">
      {initialValues.map((item, idx) => (
        <li key={idx}>
          <FeedbackItem {...item} />
        </li>
      ))}
    </ul>
  );
}
