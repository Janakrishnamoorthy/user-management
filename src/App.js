import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import WelcomePage from "./components/static/welcome-page/WelcomePage";
import Login from "./components/static/login-page/Login";
import UserDetails from "./components/static/user-details/UserDetails";
import AddUser from "./components/static/adduser-page/AddUser";
import { USER_DETAILS } from "./helpers/constants";
import { useEffect } from "react";

const App = () => {
  const currentUserDetails = localStorage.getItem("userdetails");
  useEffect(() => {
    localStorage.setItem("userdetails", JSON.stringify(USER_DETAILS));
    console.log(JSON.stringify(USER_DETAILS));
    if (currentUserDetails.length > 0) {
      localStorage.setItem("userdetails", currentUserDetails);
    }
  }, [currentUserDetails]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="userdetails" element={<UserDetails />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>
  );
};

export default App;
