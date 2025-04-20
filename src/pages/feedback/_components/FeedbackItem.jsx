export default function FeedbackItem() {
  return (
    <div className="flex flex-col gap-7 w-full p-6 border border-[#e1e1e8] rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className=" w-[40px] h-[40px] rounded-b-full">
            <img
              src="/src/assets/img/aside_logo.png"
              alt="사용자 이미지"
              className="block w-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-0.5">
              <span className="block font-semibold text-xl text-[#dddde4]">
                조연경(프론트엔드 3회차)
              </span>
              <span className="block px-3 h-[24px] leading-[24px] text-lg text-[#fff] bg-[#3e404c29] rounded-md">
                수행도
              </span>
            </div>
            <span className="text-lg text-[#9395a4]">1분 전</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="block w-1.5 h-1.5 bg-[#e1e1e8] rounded-b-full"></span>
          <span className="block text-lg text-[#e1e1e8]">보냄</span>
        </div>
      </div>
      <p className="text-2xl text-[#dddde4]">
        테스트 테스트
        <br />
        <br /> 지금은 피드백 리스트,,
        <br /> 지금은 피드백 아이템,,
        <br />
        <br />
        테스트 중입니다.
        <br />
        <br />
        오바오바 렛츠기릿
      </p>
    </div>
  );
}
