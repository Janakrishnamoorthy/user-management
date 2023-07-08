import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import WelcomePage from "./components/static/welcome-page/WelcomePage";
import Login from "./components/static/login-page/Login";
import UserDetails from "./components/static/user-details/UserDetails";
import { USER_DETAILS } from "./helpers/constants";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    localStorage.setItem("userdetails", JSON.stringify(USER_DETAILS));
    console.log(JSON.stringify(USER_DETAILS));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="userdetails" element={<UserDetails />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>
  );
};

export default App;
