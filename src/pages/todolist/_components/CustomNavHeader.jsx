import React from "react";

const CustomNavHeader = ({ children }) => {
  return (
    <div className="w-full h-fit flex items-center self-stretch px-0 py-[1.6rem] text-[#1d6ce0] text-[1.2rem] font-medium leading-[1.8rem] tracking-[-0.012px]">
      {children}
    </div>
  );
};

export default CustomNavHeader;
