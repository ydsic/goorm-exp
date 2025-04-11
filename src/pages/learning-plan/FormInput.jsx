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
        <label className="block font-medium text-sm text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full border rounded px-4 py-2 outline-none 
          ${
            disabled
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white focus:bg-gray-200 cursor-text"
          } 
          border-l-[1px] border-[#e1e1e8] placeholder:text-gray-400`}
      />
    </div>
  );
};

export default FormInput;
