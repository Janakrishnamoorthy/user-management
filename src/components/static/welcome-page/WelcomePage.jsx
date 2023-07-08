import React from "react";
import "./welcomePage.css";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
    console.log(navigate);
  };
  return (
    <div className="welcome-page">
      <h1>Welcome to User Management System</h1>
      <Button title={"Login"} handleClick={handleNavigate} />
    </div>
  );
};

export default WelcomePage;
