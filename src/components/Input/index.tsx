import React, { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input_wrapper">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="input_text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
