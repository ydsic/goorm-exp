import Aside from "./Aside";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[300px]">
        <Aside />
      </div>
      <div>홈</div>
    </div>
  );
}
