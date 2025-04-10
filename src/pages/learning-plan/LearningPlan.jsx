import Aside from "../Aside";

const LearningPlan = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[300px]">
        <Aside />
      </div>
      <div>
        <h1 className="text-2xl">학습계획 입니다</h1>
      </div>
    </div>
  );
};

export default LearningPlan;
