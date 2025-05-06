import FeedbackItem from "./FeedbackItem";

export default function FeedbackList(
  initialValues = { username, subject, content }
) {
  console.log(initialValues);
  return (
    <ul className="flex flex-col gap-7">
      <li>
        <FeedbackItem />
      </li>
      <li>
        <FeedbackItem />
      </li>
      {}
    </ul>
  );
}
