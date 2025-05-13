import { useMemo } from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ initialValues }) {
  const renderedList = useMemo(() => {
    return initialValues.map((item, idx) => (
      <li key={item.createdAt || idx}>
        <FeedbackItem {...item} />
      </li>
    ));
  }, [initialValues]);

  return <ul className="flex flex-col gap-7">{renderedList}</ul>;
}
