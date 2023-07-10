import React from "react";

const Button = ({ className, title, handleClick, disabled }) => {
  return (
    <button
      className={className}
      onClick={(e) => handleClick(e)}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
