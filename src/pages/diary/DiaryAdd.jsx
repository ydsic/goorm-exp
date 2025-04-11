import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Aside from "../Aside";

export default function DiaryAdd() {
  const [title, setTitle] = useState("");
  const contentRef = useRef(null);

  const handleUpload = () => {
    const content = contentRef.current?.innerHTML || "";
    const diaryData = {
      title,
      content,
      time: new Date().toISOString(),
      hearts: 0,
      comments: 0,
    };

    let index = 0;
    while (localStorage.getItem(`diarystory${index}`)) {
      index++;
    }

    localStorage.setItem(`diarystory${index}`, JSON.stringify(diaryData));
    alert("배움일기가 저장되었습니다!");
    setTitle("");
    if (contentRef.current) contentRef.current.innerHTML = "";
  };

  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-[300px]">
          <Aside />
        </div>
        <div className="mx-[32px] my-[20px] w-[81vw]">
          <div className="flex">
            <p className="text-[11px] text-[#9395A4] font-[500] tracking-tighter">
              배움일기
            </p>
            <p className="mx-[6px] text-[#9395A4] text-[11px] font-[500]">/</p>
            <p className="text-[11px] text-[#ADCDFF] font-[500]">배움일기</p>
          </div>

          <div className="mt-[38px] flex justify-between">
            <div className="flex">
              <NavLink to="/diary">
                <button className="bg-[#3F434F] px-[8px] py-[8px] my-[2px] rounded-[7px] cursor-pointer ">
                  <svg
                    fill="#aaa"
                    width="16"
                    height="16"
                    className="vapor_components_0_24_0_icon_2de8d vapor_components_0_24_0_icon_md_2de8d"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M8.28474 3.13064C8.54411 2.87372 8.54609 2.45519 8.28917 2.19583C8.03226 1.93646 7.61373 1.93448 7.35437 2.1914L2.03416 7.46142C1.73471 7.75804 1.73471 8.24196 2.03416 8.53858L7.35437 13.8086C7.61373 14.0655 8.03226 14.0635 8.28917 13.8042C8.54609 13.5448 8.54411 13.1263 8.28474 12.8694L3.98519 8.61037H13.5145C13.8796 8.61037 14.1755 8.31442 14.1755 7.94935C14.1755 7.58428 13.8796 7.28833 13.5145 7.28833H4.08745L8.28474 3.13064Z"></path>
                  </svg>
                </button>
              </NavLink>
              <p className="text-[22px] ml-[10px] font-[700] text-[#DDDDE4]">
                배움일기 작성
              </p>
            </div>
            <div className="">
              <button className="bg-[#3F434F] px-[15px] py-[10px] text-gray-400 text-[13px] font-[700] rounded-[7px]">
                임시저장
              </button>
              <button
                onClick={handleUpload}
                className="bg-[#5F9DFA] px-[15px] py-[10px] text-white text-[13px] font-[700] rounded-[7px] ml-[10px]"
              >
                업로드
              </button>
            </div>
          </div>
          <div className="border-1 border-[#52566499] rounded-[7px] mt-[20px] h-[4.3vh]">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none text-[#C3C4CF] text-[13px] font-[500] w-[100%] h-[100%] ml-[15px]"
              placeholder="제목을 작성해 주세요."
            />
          </div>
          <div className="border-1 border-[#52566499] rounded-[7px] mt-[20px] h-[4.3vh]">
            <div className="flex text-[#757581] text-[13px] font-[500] h-[100%] mt-[10px] ml-[15px] justify-between">
              <p className="position: relative bottom-[1px]">
                글 유형을 선택해 주세요.
              </p>
              <svg
                fill="currentColor"
                width="16"
                height="16"
                className="mr-[15px]"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.90942 5.88561C4.65558 5.63177 4.24403 5.63177 3.99019 5.88561C3.73634 6.13945 3.73634 6.55101 3.99019 6.80485L7.46294 10.2776C7.75947 10.5741 8.24024 10.5741 8.53677 10.2776L12.0095 6.80485C12.2634 6.55101 12.2634 6.13945 12.0095 5.88561C11.7557 5.63177 11.3441 5.63177 11.0903 5.88561L7.99985 8.97604L4.90942 5.88561Z"></path>
              </svg>
            </div>
          </div>
          <div className="border-1 border-[#525664] rounded-[5px] mt-[20px]">
            <div className="flex gap-[10px] mt-[20px] ml-[20px]">
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.35646 13.3595C4.988 13.3595 4.67257 13.2283 4.41018 12.9659C4.1478 12.7035 4.0166 12.3881 4.0166 12.0196V3.98048C4.0166 3.61202 4.1478 3.2966 4.41018 3.03421C4.67257 2.77182 4.988 2.64062 5.35646 2.64062H8.25947C9.08894 2.64062 9.85458 2.89693 10.5564 3.40955C11.2582 3.9223 11.6091 4.63366 11.6091 5.54364C11.6091 6.17635 11.4695 6.66949 11.1904 7.02307C10.9113 7.37664 10.6476 7.63431 10.3995 7.79609C10.7221 7.94447 11.0694 8.21095 11.4416 8.59553C11.8138 8.98012 11.9999 9.5446 11.9999 10.289C11.9999 11.4179 11.5837 12.2119 10.7514 12.6709C9.91922 13.13 9.1382 13.3595 8.40835 13.3595H5.35646ZM6.37996 11.1636H8.32796C8.92742 11.1636 9.28918 11.0116 9.41324 10.7077C9.5373 10.4037 9.59933 10.1835 9.59933 10.047C9.59933 9.91058 9.5342 9.69037 9.40393 9.38642C9.27367 9.08247 8.89218 8.9305 8.25947 8.9305H6.37996V11.1636ZM6.37996 6.84628H8.1106C8.52 6.84628 8.82085 6.73773 9.01314 6.52062C9.20544 6.30351 9.30158 6.0709 9.30158 5.82278C9.30158 5.52503 9.19545 5.28312 8.98318 5.09703C8.77091 4.91093 8.49624 4.81789 8.15917 4.81789H6.37996V6.84628Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                class="yWA7of"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.4001 12.8C4.1761 12.8 3.98676 12.7228 3.8321 12.5685C3.67743 12.4142 3.6001 12.2253 3.6001 12.0018C3.6001 11.7783 3.67743 11.5888 3.8321 11.4333C3.98676 11.2777 4.1761 11.2 4.4001 11.2H6.26676L8.33343 4.79995H6.4001C6.1761 4.79995 5.98676 4.72278 5.8321 4.56845C5.67743 4.41423 5.6001 4.22534 5.6001 4.00178C5.6001 3.77834 5.67743 3.58884 5.8321 3.43328C5.98676 3.27773 6.1761 3.19995 6.4001 3.19995H11.6001C11.8241 3.19995 12.0134 3.27712 12.1681 3.43145C12.3228 3.58567 12.4001 3.77456 12.4001 3.99812C12.4001 4.22156 12.3228 4.41106 12.1681 4.56662C12.0134 4.72217 11.8241 4.79995 11.6001 4.79995H9.93343L7.86676 11.2H9.6001C9.8241 11.2 10.0134 11.2771 10.1681 11.4315C10.3228 11.5857 10.4001 11.7746 10.4001 11.9981C10.4001 12.2216 10.3228 12.4111 10.1681 12.5666C10.0134 12.7222 9.8241 12.8 9.6001 12.8H4.4001Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                class="yWA7of"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.42123 13.9999C4.24516 13.9999 4.09757 13.9407 3.97847 13.8223C3.85936 13.7038 3.7998 13.5571 3.7998 13.3821C3.7998 13.207 3.85936 13.0591 3.97847 12.9383C4.09757 12.8174 4.24516 12.757 4.42123 12.757H11.4641C11.6401 12.757 11.7877 12.8162 11.9068 12.9346C12.0259 13.0531 12.0855 13.1998 12.0855 13.3748C12.0855 13.5499 12.0259 13.6978 11.9068 13.8186C11.7877 13.9395 11.6401 13.9999 11.4641 13.9999H4.42123ZM7.94265 11.5142C6.83789 11.5142 5.98343 11.1722 5.37927 10.4883C4.7751 9.80427 4.47302 8.89773 4.47302 7.76869V3.22519C4.47302 2.99722 4.55731 2.80268 4.7259 2.64157C4.89449 2.48046 5.09301 2.3999 5.32144 2.3999C5.54987 2.3999 5.7455 2.48138 5.90834 2.64433C6.07118 2.80717 6.1526 3.00263 6.1526 3.23072V7.87347C6.1526 8.48166 6.30456 8.97581 6.60848 9.35592C6.91241 9.73602 7.35748 9.92608 7.94369 9.92608C8.5299 9.92608 8.97549 9.73585 9.28045 9.3554C9.58541 8.97506 9.73789 8.48057 9.73789 7.87191V3.22554C9.73789 2.99734 9.81844 2.80268 9.97955 2.64157C10.1407 2.48046 10.337 2.3999 10.5687 2.3999C10.8002 2.3999 10.9988 2.48126 11.1642 2.64399C11.3296 2.80659 11.4123 3.00177 11.4123 3.22951V7.76817C11.4123 8.89606 11.1102 9.80237 10.506 10.4871C9.90188 11.1718 9.04741 11.5142 7.94265 11.5142Z"></path>
              </svg>
              <div className="w-[1px] bg-gray-600 h-[30px] mx-[10px] position: relative bottom-[5px]" />
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                class="yWA7of"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75007 12.3752C6.57299 12.3752 6.42455 12.3153 6.30475 12.1955C6.18496 12.0757 6.12506 11.9272 6.12506 11.7501C6.12506 11.5731 6.18496 11.4246 6.30475 11.3048C6.42455 11.185 6.57299 11.1251 6.75007 11.1251H13.0002C13.1773 11.1251 13.3257 11.185 13.4455 11.3048C13.5653 11.4246 13.6252 11.5731 13.6252 11.7501C13.6252 11.9272 13.5653 12.0757 13.4455 12.1955C13.3257 12.3153 13.1773 12.3752 13.0002 12.3752H6.75007ZM6.75007 8.62509C6.57299 8.62509 6.42455 8.5652 6.30475 8.4454C6.18496 8.32561 6.12506 8.17717 6.12506 8.00008C6.12506 7.823 6.18496 7.67456 6.30475 7.55476C6.42455 7.43497 6.57299 7.37507 6.75007 7.37507H13.0002C13.1773 7.37507 13.3257 7.43497 13.4455 7.55476C13.5653 7.67456 13.6252 7.823 13.6252 8.00008C13.6252 8.17717 13.5653 8.32561 13.4455 8.4454C13.3257 8.5652 13.1773 8.62509 13.0002 8.62509H6.75007ZM6.75007 4.87503C6.57299 4.87503 6.42455 4.81513 6.30475 4.69534C6.18496 4.57555 6.12506 4.42711 6.12506 4.25002C6.12506 4.07293 6.18496 3.92449 6.30475 3.8047C6.42455 3.68491 6.57299 3.62501 6.75007 3.62501H13.0002C13.1773 3.62501 13.3257 3.68491 13.4455 3.8047C13.5653 3.92449 13.6252 4.07293 13.6252 4.25002C13.6252 4.42711 13.5653 4.57555 13.4455 4.69534C13.3257 4.81513 13.1773 4.87503 13.0002 4.87503H6.75007ZM3.62502 13.0002C3.28126 13.0002 2.98699 12.8778 2.74219 12.633C2.4974 12.3882 2.375 12.0939 2.375 11.7501C2.375 11.4064 2.4974 11.1121 2.74219 10.8673C2.98699 10.6225 3.28126 10.5001 3.62502 10.5001C3.96878 10.5001 4.26305 10.6225 4.50785 10.8673C4.75264 11.1121 4.87504 11.4064 4.87504 11.7501C4.87504 12.0939 4.75264 12.3882 4.50785 12.633C4.26305 12.8778 3.96878 13.0002 3.62502 13.0002ZM3.62502 9.2501C3.28126 9.2501 2.98699 9.1277 2.74219 8.88291C2.4974 8.63811 2.375 8.34384 2.375 8.00008C2.375 7.65633 2.4974 7.36205 2.74219 7.11725C2.98699 6.87246 3.28126 6.75006 3.62502 6.75006C3.96878 6.75006 4.26305 6.87246 4.50785 7.11725C4.75264 7.36205 4.87504 7.65633 4.87504 8.00008C4.87504 8.34384 4.75264 8.63811 4.50785 8.88291C4.26305 9.1277 3.96878 9.2501 3.62502 9.2501ZM3.62502 5.50004C3.28126 5.50004 2.98699 5.37764 2.74219 5.13285C2.4974 4.88805 2.375 4.59378 2.375 4.25002C2.375 3.90626 2.4974 3.61199 2.74219 3.36719C2.98699 3.1224 3.28126 3 3.62502 3C3.96878 3 4.26305 3.1224 4.50785 3.36719C4.75264 3.61199 4.87504 3.90626 4.87504 4.25002C4.87504 4.59378 4.75264 4.88805 4.50785 5.13285C4.26305 5.37764 3.96878 5.50004 3.62502 5.50004Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                class="yWA7of"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.42809 14C2.30428 14 2.2019 13.9596 2.12094 13.8786C2.03999 13.7977 1.99951 13.6953 1.99951 13.5715C1.99951 13.4477 2.03999 13.3453 2.12094 13.2643C2.2019 13.1834 2.30428 13.1429 2.42809 13.1429H3.71384V12.7143H3.28526C3.16144 12.7143 3.05906 12.6738 2.97811 12.5929C2.89715 12.5119 2.85668 12.4095 2.85668 12.2857C2.85668 12.1619 2.89715 12.0595 2.97811 11.9786C3.05906 11.8976 3.16144 11.8571 3.28526 11.8571H3.71384V11.4286H2.42809C2.30428 11.4286 2.2019 11.3881 2.12094 11.3071C2.03999 11.2262 1.99951 11.1238 1.99951 11C1.99951 10.8762 2.03999 10.7738 2.12094 10.6928C2.2019 10.6119 2.30428 10.5714 2.42809 10.5714H4.14242C4.26385 10.5714 4.36564 10.6125 4.44779 10.6946C4.52993 10.7768 4.571 10.8785 4.571 11V11.8571C4.571 11.9786 4.52993 12.0804 4.44779 12.1625C4.36564 12.2446 4.26385 12.2857 4.14242 12.2857C4.26385 12.2857 4.36564 12.3268 4.44779 12.4089C4.52993 12.4911 4.571 12.5929 4.571 12.7143V13.5715C4.571 13.6929 4.52993 13.7947 4.44779 13.8768C4.36564 13.959 4.26385 14 4.14242 14H2.42809ZM2.48167 9.71423C2.35071 9.71423 2.23761 9.66661 2.14237 9.57137C2.04713 9.47613 1.99951 9.36196 1.99951 9.22886V7.9999C1.99951 7.87847 2.04058 7.77668 2.12273 7.69454C2.20487 7.61239 2.30666 7.57132 2.42809 7.57132H3.71384V7.14274H2.42809C2.30428 7.14274 2.2019 7.10226 2.12094 7.02131C2.03999 6.94035 1.99951 6.83797 1.99951 6.71416C1.99951 6.59034 2.03999 6.48796 2.12094 6.40701C2.2019 6.32605 2.30428 6.28557 2.42809 6.28557H4.14242C4.26385 6.28557 4.36564 6.32665 4.44779 6.40879C4.52993 6.49094 4.571 6.59272 4.571 6.71416V7.9999C4.571 8.12133 4.52993 8.22312 4.44779 8.30527C4.36564 8.38741 4.26385 8.42848 4.14242 8.42848H2.85668V8.85707H4.14242C4.26623 8.85707 4.36862 8.89754 4.44957 8.9785C4.53053 9.05945 4.571 9.16184 4.571 9.28565C4.571 9.40946 4.53053 9.51184 4.44957 9.5928C4.36862 9.67375 4.26623 9.71423 4.14242 9.71423H2.48167ZM3.28526 5.42841C3.16228 5.42841 3.06061 5.38793 2.98025 5.30698C2.89977 5.22603 2.85953 5.12364 2.85953 4.99983V2.85692H2.43399C2.31101 2.85692 2.20785 2.81644 2.12451 2.73549C2.04118 2.65453 1.99951 2.55215 1.99951 2.42834C1.99951 2.30453 2.03999 2.20214 2.12094 2.12119C2.2019 2.04023 2.30428 1.99976 2.42809 1.99976H3.23168C3.36264 1.99976 3.47574 2.04738 3.57098 2.14262C3.66622 2.23786 3.71384 2.35095 3.71384 2.48191V4.99679C3.71384 5.11787 3.67336 5.22007 3.59241 5.30341C3.51145 5.38674 3.40907 5.42841 3.28526 5.42841ZM6.49962 12.2857C6.31747 12.2857 6.16479 12.2245 6.04157 12.102C5.91836 11.9795 5.85675 11.8277 5.85675 11.6466C5.85675 11.4655 5.91836 11.3125 6.04157 11.1875C6.16479 11.0625 6.31747 11 6.49962 11H13.3569C13.5391 11 13.6918 11.0612 13.815 11.1837C13.9382 11.3062 13.9998 11.458 13.9998 11.6391C13.9998 11.8202 13.9382 11.9732 13.815 12.0982C13.6918 12.2232 13.5391 12.2857 13.3569 12.2857H6.49962ZM6.49962 8.64277C6.31747 8.64277 6.16479 8.58152 6.04157 8.45902C5.91836 8.33652 5.85675 8.18473 5.85675 8.00365C5.85675 7.82258 5.91836 7.66954 6.04157 7.54453C6.16479 7.41953 6.31747 7.35703 6.49962 7.35703H13.3569C13.5391 7.35703 13.6918 7.41828 13.815 7.54078C13.9382 7.66329 13.9998 7.81508 13.9998 7.99615C13.9998 8.17723 13.9382 8.33027 13.815 8.45527C13.6918 8.58027 13.5391 8.64277 13.3569 8.64277H6.49962ZM6.49962 4.99983C6.31747 4.99983 6.16479 4.93858 6.04157 4.81607C5.91836 4.69357 5.85675 4.54178 5.85675 4.36071C5.85675 4.17963 5.91836 4.02659 6.04157 3.90159C6.16479 3.77658 6.31747 3.71408 6.49962 3.71408H13.3569C13.5391 3.71408 13.6918 3.77533 13.815 3.89784C13.9382 4.02034 13.9998 4.17213 13.9998 4.35321C13.9998 4.53428 13.9382 4.68732 13.815 4.81232C13.6918 4.93733 13.5391 4.99983 13.3569 4.99983H6.49962Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.08929 8.75L6.01786 7.69643C5.8869 7.56548 5.7381 7.5 5.57143 7.5C5.40476 7.5 5.25595 7.56548 5.125 7.69643C4.99405 7.82738 4.92857 7.97917 4.92857 8.15179C4.92857 8.32441 4.99405 8.47619 5.125 8.60714L6.64286 10.125C6.77381 10.256 6.92262 10.3214 7.08929 10.3214C7.25595 10.3214 7.40476 10.256 7.53571 10.125L10.875 6.78571C11.006 6.65476 11.0714 6.50298 11.0714 6.33036C11.0714 6.15774 11.006 6.00595 10.875 5.875C10.744 5.74405 10.5952 5.67857 10.4286 5.67857C10.2619 5.67857 10.1131 5.74405 9.98214 5.875L7.08929 8.75ZM3.28571 14C2.92857 14 2.625 13.875 2.375 13.625C2.125 13.375 2 13.0714 2 12.7143V3.28571C2 2.92857 2.125 2.625 2.375 2.375C2.625 2.125 2.92857 2 3.28571 2H12.7143C13.0714 2 13.375 2.125 13.625 2.375C13.875 2.625 14 2.92857 14 3.28571V12.7143C14 13.0714 13.875 13.375 13.625 13.625C13.375 13.875 13.0714 14 12.7143 14H3.28571Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.9999 13.5999C2.8299 13.5999 2.6874 13.5427 2.5724 13.4284C2.4574 13.3141 2.3999 13.1724 2.3999 13.0034C2.3999 12.8344 2.4574 12.6916 2.5724 12.5749C2.6874 12.4582 2.8299 12.3999 2.9999 12.3999H12.9999C13.1699 12.3999 13.3124 12.4571 13.4274 12.5714C13.5424 12.6857 13.5999 12.8274 13.5999 12.9964C13.5999 13.1654 13.5424 13.3082 13.4274 13.4249C13.3124 13.5416 13.1699 13.5999 12.9999 13.5999H2.9999ZM2.9999 11.0999C2.8299 11.0999 2.6874 11.0427 2.5724 10.9284C2.4574 10.8141 2.3999 10.6724 2.3999 10.5034C2.3999 10.3344 2.4574 10.1916 2.5724 10.0749C2.6874 9.95824 2.8299 9.8999 2.9999 9.8999H9.7999C9.9699 9.8999 10.1124 9.95707 10.2274 10.0714C10.3424 10.1857 10.3999 10.3274 10.3999 10.4964C10.3999 10.6654 10.3424 10.8082 10.2274 10.9249C10.1124 11.0416 9.9699 11.0999 9.7999 11.0999H2.9999ZM2.9999 8.5999C2.8299 8.5999 2.6874 8.54274 2.5724 8.4284C2.4574 8.31407 2.3999 8.1724 2.3999 8.0034C2.3999 7.8344 2.4574 7.69157 2.5724 7.5749C2.6874 7.45824 2.8299 7.3999 2.9999 7.3999H12.9999C13.1699 7.3999 13.3124 7.45707 13.4274 7.5714C13.5424 7.68574 13.5999 7.8274 13.5999 7.9964C13.5999 8.1654 13.5424 8.30824 13.4274 8.4249C13.3124 8.54157 13.1699 8.5999 12.9999 8.5999H2.9999ZM2.9999 6.0999C2.8299 6.0999 2.6874 6.04274 2.5724 5.9284C2.4574 5.81407 2.3999 5.6724 2.3999 5.5034C2.3999 5.3344 2.4574 5.19157 2.5724 5.0749C2.6874 4.95824 2.8299 4.8999 2.9999 4.8999H9.7999C9.9699 4.8999 10.1124 4.95707 10.2274 5.0714C10.3424 5.18574 10.3999 5.3274 10.3999 5.4964C10.3999 5.6654 10.3424 5.80824 10.2274 5.9249C10.1124 6.04157 9.9699 6.0999 9.7999 6.0999H2.9999ZM2.9999 3.5999C2.8299 3.5999 2.6874 3.54274 2.5724 3.4284C2.4574 3.31407 2.3999 3.1724 2.3999 3.0034C2.3999 2.8344 2.4574 2.69157 2.5724 2.5749C2.6874 2.45824 2.8299 2.3999 2.9999 2.3999H12.9999C13.1699 2.3999 13.3124 2.45707 13.4274 2.5714C13.5424 2.68574 13.5999 2.8274 13.5999 2.9964C13.5999 3.1654 13.5424 3.30824 13.4274 3.4249C13.3124 3.54157 13.1699 3.5999 12.9999 3.5999H2.9999Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="18"
                height="18"
                class="vapor_components_0_24_0_chevronIcon_50309"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.90942 5.88561C4.65558 5.63177 4.24403 5.63177 3.99019 5.88561C3.73634 6.13945 3.73634 6.55101 3.99019 6.80485L7.46294 10.2776C7.75947 10.5741 8.24024 10.5741 8.53677 10.2776L12.0095 6.80485C12.2634 6.55101 12.2634 6.13945 12.0095 5.88561C11.7557 5.63177 11.3441 5.63177 11.0903 5.88561L7.99985 8.97604L4.90942 5.88561Z"></path>
              </svg>
              <div className="w-[1px] bg-gray-600 h-[30px] mx-[10px] position: relative bottom-[5px]" />
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.21621 8.0166L5.79954 10.5999C5.92177 10.7222 5.98288 10.8777 5.98288 11.0666C5.98288 11.2555 5.92177 11.411 5.79954 11.5333C5.67732 11.6555 5.52177 11.7166 5.33288 11.7166C5.14399 11.7166 4.98843 11.6555 4.86621 11.5333L1.79954 8.4666C1.73288 8.39993 1.68566 8.32771 1.65788 8.24993C1.6301 8.17216 1.61621 8.08882 1.61621 7.99993C1.61621 7.91105 1.6301 7.82771 1.65788 7.74993C1.68566 7.67216 1.73288 7.59993 1.79954 7.53327L4.86621 4.4666C4.99954 4.33327 5.15788 4.2666 5.34121 4.2666C5.52454 4.2666 5.68288 4.33327 5.81621 4.4666C5.94954 4.59993 6.01621 4.75827 6.01621 4.9416C6.01621 5.12493 5.94954 5.28327 5.81621 5.4166L3.21621 8.0166ZM12.7829 7.98327L10.1995 5.39993C10.0773 5.27771 10.0162 5.12216 10.0162 4.93327C10.0162 4.74438 10.0773 4.58882 10.1995 4.4666C10.3218 4.34438 10.4773 4.28327 10.6662 4.28327C10.8551 4.28327 11.0107 4.34438 11.1329 4.4666L14.1995 7.53327C14.2662 7.59993 14.3134 7.67216 14.3412 7.74993C14.369 7.82771 14.3829 7.91105 14.3829 7.99993C14.3829 8.08882 14.369 8.17216 14.3412 8.24993C14.3134 8.32771 14.2662 8.39993 14.1995 8.4666L11.1329 11.5333C10.9995 11.6666 10.844 11.7305 10.6662 11.7249C10.4884 11.7194 10.3329 11.6499 10.1995 11.5166C10.0662 11.3833 9.99954 11.2249 9.99954 11.0416C9.99954 10.8583 10.0662 10.6999 10.1995 10.5666L12.7829 7.98327Z"></path>
              </svg>
              <svg
                fill="#A9ABBD"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.79961 12.8C2.46961 12.8 2.18711 12.6824 1.95211 12.4473C1.71711 12.2122 1.59961 11.9295 1.59961 11.5993V4.39528C1.59961 4.06506 1.71711 3.78328 1.95211 3.54995C2.18711 3.31662 2.46961 3.19995 2.79961 3.19995H13.1996C13.5296 3.19995 13.8121 3.31751 14.0471 3.55262C14.2821 3.78773 14.3996 4.0704 14.3996 4.40062V11.6046C14.3996 11.9348 14.2821 12.2166 14.0471 12.45C13.8121 12.6833 13.5296 12.8 13.1996 12.8H2.79961ZM2.79961 11.6H13.1996V5.59995H2.79961V11.6ZM5.49961 8.59995L4.56628 7.66662C4.44405 7.5444 4.38294 7.40273 4.38294 7.24162C4.38294 7.08051 4.44405 6.93617 4.56628 6.80862C4.6885 6.69173 4.83017 6.63328 4.99128 6.63328C5.15239 6.63328 5.29405 6.6944 5.41628 6.81662L6.78294 8.18328C6.90517 8.30151 6.96628 8.4394 6.96628 8.59695C6.96628 8.75451 6.90517 8.8944 6.78294 9.01662L5.41628 10.3833C5.29405 10.5055 5.15517 10.5638 4.99961 10.5583C4.84405 10.5527 4.70517 10.4888 4.58294 10.3666C4.46072 10.2444 4.39961 10.1027 4.39961 9.94162C4.39961 9.78051 4.46072 9.63884 4.58294 9.51662L5.49961 8.59995ZM8.59961 10.8C8.42961 10.8 8.28711 10.7428 8.17211 10.6285C8.05711 10.5141 7.99961 10.3725 7.99961 10.2035C7.99961 10.0345 8.05711 9.89162 8.17211 9.77495C8.28711 9.65828 8.42961 9.59995 8.59961 9.59995H11.3996C11.5696 9.59995 11.7121 9.65712 11.8271 9.77145C11.9421 9.88579 11.9996 10.0275 11.9996 10.1965C11.9996 10.3655 11.9421 10.5083 11.8271 10.625C11.7121 10.7416 11.5696 10.8 11.3996 10.8H8.59961Z"></path>
              </svg>
              <div className="w-[1px] bg-gray-600 h-[30px] mx-[10px] position: relative bottom-[5px]" />
              <svg
                fill="#A9ABBD"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.33333 14C2.96667 14 2.65278 13.8694 2.39167 13.6083C2.13056 13.3472 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13056 2.65278 2.39167 2.39167C2.65278 2.13056 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3472 2.13056 13.6083 2.39167C13.8694 2.65278 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8694 13.3472 13.6083 13.6083C13.3472 13.8694 13.0333 14 12.6667 14H3.33333ZM4.66667 11.3333H11.3333C11.4667 11.3333 11.5667 11.2722 11.6333 11.15C11.7 11.0278 11.6889 10.9111 11.6 10.8L9.76667 8.35C9.7 8.26111 9.61111 8.21667 9.5 8.21667C9.38889 8.21667 9.3 8.26111 9.23333 8.35L7.5 10.6667L6.26667 9.01667C6.2 8.92778 6.11111 8.88333 6 8.88333C5.88889 8.88333 5.8 8.92778 5.73333 9.01667L4.4 10.8C4.31111 10.9111 4.3 11.0278 4.36667 11.15C4.43333 11.2722 4.53333 11.3333 4.66667 11.3333ZM5.66667 6.66667C5.94444 6.66667 6.18056 6.56944 6.375 6.375C6.56944 6.18056 6.66667 5.94444 6.66667 5.66667C6.66667 5.38889 6.56944 5.15278 6.375 4.95833C6.18056 4.76389 5.94444 4.66667 5.66667 4.66667C5.38889 4.66667 5.15278 4.76389 4.95833 4.95833C4.76389 5.15278 4.66667 5.38889 4.66667 5.66667C4.66667 5.94444 4.76389 6.18056 4.95833 6.375C5.15278 6.56944 5.38889 6.66667 5.66667 6.66667Z"></path>
              </svg>
              <div className="text-[18px] position: relative bottom-[6px]">
                😀
              </div>
            </div>
            <div className="h-[1px] bg-[#525664] mt-[10px]" />

            <div className="text-[#C3C4CF]">
              <div
                contentEditable="true"
                ref={contentRef}
                className="h-[65vh] focus:outline-none m-[15px] text-[15px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
