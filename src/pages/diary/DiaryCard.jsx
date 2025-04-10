import { NavLink } from "react-router-dom";

export default function DiaryCard() {
  const card_style = {
    card: `w-[30vw] h-[17vh] border-1 border-gray-500 rounded-2xl hover:bg-[rgba(255,255,255,0.1)] cursor-pointer`,
    title: `text-[#DDDDE4] text-[15px] font-[900] mx-[20px] my-[15px] visited:text-[#DDDDE4]`,
    subtitle: `text-[#9395A4] text-[15px] font-[900] mx-[20px] h-[6vh] visited:text=[#9395A4] truncate overflow-hidden whitespace-nowrap`,
    line: `flex h-[1px] bg-[rgba(255,255,255,0.1)]`,
    footer_icon: `position: relative bottom-[2.5px] ml-[5px] mr-[7px] text-[#DDDDE4] text-[12px]`,
    footer_wall: `position: relative bottom-[4px] text-[#DDDDE4] text-[12px]`,
    footer_nickname: `text-[#9395A4] text-[11px] mt-[13px] font-[500] mr-[20px]`,
    flex: `flex`,
    justify_between: `justify-between`,
    margin: `my-[15px] ml-[25px]`,
  };

  const card_content = {
    title: `React의 Virtual DOM이란?`,
    subtitle: `Virtual DOM은 실제 DOM을 복제한 가상의 DOM이다. React는 상태가 바뀌면 Virtual DOM에서 먼저 변경을 시뮬레이션하고, 실제 DOM과 비교해 필요한 부분만 업데이트한다. 이로 인해 성능이 최적화되며, 빠른 렌더링이 가능해진다.`,
    heart: `3`,
    comment: `4`,
    name: `XXX(프론트엔드 3회차)`,
    time: `1시간 전`,
  };

  return (
    <NavLink to="/diarypage" state={card_content}>
      <div className={card_style.card}>
        <div className={card_style.title}>{card_content.title}</div>
        <div className={card_style.subtitle}>{card_content.subtitle}</div>
        <div className={card_style.line} />
        <div className={`${card_style.flex} ${card_style.justify_between}`}>
          <div className={card_style.flex}>
            <div className={`${card_style.flex} ${card_style.margin}`}>
              <svg
                fill="gray"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.00016 13.7833C7.84461 13.7833 7.68627 13.7556 7.52516 13.7C7.36405 13.6444 7.22239 13.5556 7.10016 13.4333L5.95016 12.3833C4.77239 11.3056 3.7085 10.2361 2.7585 9.175C1.8085 8.11389 1.3335 6.94444 1.3335 5.66667C1.3335 4.62222 1.6835 3.75 2.3835 3.05C3.0835 2.35 3.95572 2 5.00016 2C5.58905 2 6.14461 2.125 6.66683 2.375C7.18905 2.625 7.6335 2.96667 8.00016 3.4C8.36683 2.96667 8.81127 2.625 9.3335 2.375C9.85572 2.125 10.4113 2 11.0002 2C12.0446 2 12.9168 2.35 13.6168 3.05C14.3168 3.75 14.6668 4.62222 14.6668 5.66667C14.6668 6.94444 14.1946 8.11667 13.2502 9.18333C12.3057 10.25 11.2335 11.3222 10.0335 12.4L8.90016 13.4333C8.77794 13.5556 8.63627 13.6444 8.47516 13.7C8.31405 13.7556 8.15572 13.7833 8.00016 13.7833Z"></path>
              </svg>
              <p className={card_style.footer_icon}>{card_content.heart}</p>
              <p className={card_style.footer_wall}>|</p>
            </div>

            <div className="flex my-[15px] ml-[10px]">
              <svg
                fill="gray"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.66683 9.33301H11.3335C11.5224 9.33301 11.6807 9.26912 11.8085 9.14134C11.9363 9.01356 12.0002 8.85523 12.0002 8.66634C12.0002 8.47745 11.9363 8.31912 11.8085 8.19134C11.6807 8.06356 11.5224 7.99967 11.3335 7.99967H4.66683C4.47794 7.99967 4.31961 8.06356 4.19183 8.19134C4.06405 8.31912 4.00016 8.47745 4.00016 8.66634C4.00016 8.85523 4.06405 9.01356 4.19183 9.14134C4.31961 9.26912 4.47794 9.33301 4.66683 9.33301ZM4.66683 7.33301H11.3335C11.5224 7.33301 11.6807 7.26912 11.8085 7.14134C11.9363 7.01356 12.0002 6.85523 12.0002 6.66634C12.0002 6.47745 11.9363 6.31912 11.8085 6.19134C11.6807 6.06356 11.5224 5.99967 11.3335 5.99967H4.66683C4.47794 5.99967 4.31961 6.06356 4.19183 6.19134C4.06405 6.31912 4.00016 6.47745 4.00016 6.66634C4.00016 6.85523 4.06405 7.01356 4.19183 7.14134C4.31961 7.26912 4.47794 7.33301 4.66683 7.33301ZM4.66683 5.33301H11.3335C11.5224 5.33301 11.6807 5.26912 11.8085 5.14134C11.9363 5.01356 12.0002 4.85523 12.0002 4.66634C12.0002 4.47745 11.9363 4.31912 11.8085 4.19134C11.6807 4.06356 11.5224 3.99967 11.3335 3.99967H4.66683C4.47794 3.99967 4.31961 4.06356 4.19183 4.19134C4.06405 4.31912 4.00016 4.47745 4.00016 4.66634C4.00016 4.85523 4.06405 5.01356 4.19183 5.14134C4.31961 5.26912 4.47794 5.33301 4.66683 5.33301ZM2.66683 11.9997C2.30016 11.9997 1.98627 11.8691 1.72516 11.608C1.46405 11.3469 1.3335 11.033 1.3335 10.6663V2.66634C1.3335 2.29967 1.46405 1.98579 1.72516 1.72467C1.98627 1.46356 2.30016 1.33301 2.66683 1.33301H13.3335C13.7002 1.33301 14.0141 1.46356 14.2752 1.72467C14.5363 1.98579 14.6668 2.29967 14.6668 2.66634V13.0497C14.6668 13.3497 14.5307 13.558 14.2585 13.6747C13.9863 13.7913 13.7446 13.7441 13.5335 13.533L12.0002 11.9997H2.66683Z"></path>
              </svg>
              <p className={card_style.footer_icon}>{card_content.comment}</p>
            </div>
          </div>

          <div className={card_style.footer_nickname}>
            {card_content.name} · {card_content.time}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
