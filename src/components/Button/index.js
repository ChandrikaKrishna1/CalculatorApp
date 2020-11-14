import React from "react";

import "./Button.css";

const Button = ({ content, onBtnClick, type }) => {
  return (
    <div
      className={`Btn ${content === "=" ? "equal" : ""} ${type || ""}`}
      onClick={onBtnClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;
