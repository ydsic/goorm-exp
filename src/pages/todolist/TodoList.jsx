import Aside from "../Aside";

export default function TodoList() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[300px]">
        <Aside />
      </div>
      <h1 className="text-2xl">
        프리텐다드 폰트 적용 완료 🎉
      </h1>
    </div>
  );
}
