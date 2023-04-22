import React, { ReactElement } from "react";

import "./index.css";

interface FormBoxProps {
  children: ReactElement | ReactElement[];
}

const FormBox: React.FC<FormBoxProps> = ({ children }) => {
  return <div className="box_wrapper">{children}</div>;
};

export default FormBox;
