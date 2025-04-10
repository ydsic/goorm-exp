import Aside from "../Aside";

export default function Feedback() {
  return (
    <div className="w-screen h-screen flex">
      <Aside />

      <div>
        <nav>
          <span>커뮤니티</span>
          <span>상시 피드백</span>
          <span>받은 내용</span>
        </nav>

        <div>
          <div>
            <h3>상시 피드백</h3>
            <button>피드백하기</button>
          </div>
          <div>
            <input type="text" />
            <button>2025년</button>
          </div>
          <div>
            <img src="" alt="" />
            <h4>전달 받은 피드백이 없습니다.</h4>
            <p>먼저 피드백을 작성해 보세요</p>
            <button>피드백하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
