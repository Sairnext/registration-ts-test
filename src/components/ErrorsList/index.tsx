import React from "react";

import "./index.css";

interface ErrorListProps {
  errors: string[];
}

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div className="error-list">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;
