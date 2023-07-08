import React from "react";
import Input from "../../common/Input";
import "./Login.css";
import Button from "../../common/Button";

const Login = () => {
  return (
    <div className="login-maincon">
      <div className="login-sec">
        <Input type={"text"} placeholder={"Enter User Name"} />
        <Input type={"password"} placeholder={"Enter Password"} />
        <Button title={"Login"} handleClick={() => {}} />
      </div>
    </div>
  );
};

export default Login;
