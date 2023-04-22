import React, { ChangeEventHandler } from "react";

import classNames from "classnames";

import "./index.css";

interface InputProps {
  type?: string;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  value,
  error,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input_wrapper">
      <label className={classNames(error ? "error" : "")}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="input_text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
