import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button className="login" onClick={(e) => handleClick(e)}>
      {title}
    </button>
  );
};

export default Button;
