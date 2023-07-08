import React from "react";

const Button = ({ title, handleClick, disabled }) => {
  return (
    <button
      className="login"
      onClick={(e) => handleClick(e)}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
