import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import "./Login.css";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("triggers");
    if (localStorage.getItem("auth")) navigate("/userdetails");

    if (
      username &&
      !password &&
      Object.values(JSON.parse(localStorage.getItem("userdetails"))).filter(
        (i) => i.name === username
      ).length > 0
    ) {
      alert("username correct");
    }
    if (
      Object.values(JSON.parse(localStorage.getItem("userdetails"))).filter(
        (i) => i.name === username
      )[0]?.password === password
    ) {
      localStorage.setItem("CurrentUser", username);
      setEnable(true);
    } else {
      setEnable(false);
    }
    // console.log(
    //   Object.values(JSON.parse(localStorage.getItem("userdetails"))).filter(
    //     (i) => i.name === username
    //   )[0]?.password === password
    // );
  }, [username, password]);

  const handleLogin = () => {
    const storedUserDetails = localStorage.getItem("userdetails");
    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);
      const user = userDetails.find(
        (user) => user.name === username && user.password === password
      );
      console.log("Entered username:", username);
      console.log("Entered password:", password);
      if (user) {
        localStorage.setItem("auth", true);
        console.log("Login successful!");
        navigate("/userdetails");
      } else {
        console.log("Invalid username or password");
      }
    } else {
      console.log("User details not found");
    }
  };

  return (
    <div className="login-maincon">
      <div className="login-sec">
        <Input
          type={"text"}
          placeholder={"Enter User Name"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"Enter Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="login"
          title={"Login"}
          handleClick={handleLogin}
          disabled={!enable}
        />
      </div>
    </div>
  );
};

export default Login;
