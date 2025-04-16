const FormInput = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  type = "text",
}) => {
  return (
    <div>
      {label && (
        <label className="block text-[#525463] mb-3 text-2xl">
          {label} {required && <span className="text-[#D91C29]">*</span>}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          rows={5}
          className={`w-full border rounded-lg px-5 py-3 outline-none resize-none
        ${
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white focus:border-[#448efe] cursor-text"
        } 
        border-l-[1px] border-[#e1e1e8] placeholder:text-xl`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full border rounded-lg px-5 py-3 outline-none 
          ${
            disabled
              ? "bg-gray-100 cursor-not-allowed border-[#e1e1e8]"
              : "bg-white focus:border-[#448efe] cursor-text"
          } 
          border-l-[1px] border-[#e1e1e8] placeholder:text-xl`}
        />
      )}
    </div>
  );
};

export default FormInput;
