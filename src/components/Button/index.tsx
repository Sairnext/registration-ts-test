import React from "react";

import "./index.css";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, type }) => {
  return (
    <button type={type} onClick={onClick} className="main_button">
      {text}
    </button>
  );
};

export default Button;
