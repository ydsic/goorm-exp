import Select from "react-select";
import {
  subjectOptions,
  subjectPlaceholder,
  userOptions,
  userPlaceholder,
} from "../data";

export default function ModalFeedback(props) {
  const { open, close } = props;

  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } absolute top-0 left-0 w-full h-screen bg-black/60 items-center justify-center `}
    >
      <div className="min-w-[50rem] w-[50rem] h-[73.4rem] bg-white rounded-2xl">
        <div className="py-8 px-10 flex justify-between items-center">
          <h6 className="text-3xl">피드백하기</h6>
          <button className="text-4xl cursor-pointer" onClick={close}>
            ×
          </button>
        </div>

        <div className="py-6 px-10">
          <div className="mb-8 text-xl">
            <label htmlFor="" className="block pb-4">
              누구에게 전달할까요?
            </label>
            <Select
              className="rounded-2xl"
              options={userOptions}
              placeholder={userPlaceholder}
            />
          </div>
          <div className="mb-8 text-xl">
            <label htmlFor="" className="block pb-4">
              어떤 주제로 피드백할까요?
            </label>
            <Select
              className="rounded-2xl"
              options={subjectOptions}
              placeholder={subjectPlaceholder}
            />
          </div>

          <div className="h-[40rem]">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-8 w-full h-full focus:outline-1 border border-[#e1e1e8] rounded-2xl text-xl"
            ></textarea>
          </div>
        </div>
        <div className="py-5 px-10 flex gap-6 justify-end items-center text-xl border-t border-[#e1e1e8]">
          <button
            className="px-6 h-[4rem] rounded-lg text-2xl bg-[#e1e1e8] cursor-pointer"
            onClick={close}
          >
            닫기
          </button>
          <button
            disabled
            className="px-6 h-[4rem] rounded-lg text-2xl bg-[#5f9dfa] text-white"
          >
            전달하기
          </button>
        </div>
      </div>
    </div>
  );
}
