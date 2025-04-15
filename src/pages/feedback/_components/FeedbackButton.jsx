export default function FeedbackButton({ text, onClick }) {
  return (
    <button
      className="px-6 h-[4rem] rounded-lg text-2xl bg-[#5f9dfa] text-white cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
