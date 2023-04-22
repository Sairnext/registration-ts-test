import React from "react";

import "./index.css";

interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="main_button">
      {text}
    </button>
  );
};

export default Button;
