import React from "react";

const Button = ({
  text,
  icon,
  iconPosition = "left",
  onClick,
  size = "md",
  color = "primary",
  rounded = false,
  fullWidth = false,
  className = "",
  disabled = false,
}) => {
  // 사이즈 클래스
  const sizeClass =
    size === "sm"
      ? "text-lg px-3 py-1.5 h-[32px]"
      : size === "lg"
      ? "text-xl px-4 py-2.5 h-[44px]"
      : "text-base px-4 py-2 h-[40px]";

  // 컬러 클래스
  const colorClass =
    color === "gray"
      ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
      : color === "danger"
      ? "bg-red-500 text-white hover:bg-red-600"
      : "bg-[#448efe] text-white hover:bg-[#317efe]";

  // 라운딩
  const radiusClass = rounded ? "rounded-xl" : "rounded-2xl";

  // 전체 조합
  const finalClass = `
  inline-flex items-center justify-center gap-2 transition-colors duration-200
  ${
    disabled
      ? "bg-[#cce0ff] text-white cursor-not-allowed"
      : `${colorClass} cursor-pointer`
  }

${sizeClass} ${radiusClass} ${fullWidth ? "w-full" : ""} ${className}
`;

  return (
    <button onClick={onClick} className={finalClass} disabled={disabled}>
      {icon && iconPosition === "left" && icon}
      <span>{text}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
