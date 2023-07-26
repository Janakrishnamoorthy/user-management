import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import WelcomePage from "./components/static/welcome-page/WelcomePage";
import Login from "./components/static/login-page/Login";
import UserDetails from "./components/static/user-details/UserDetails";
import AddUser from "./components/static/adduser-page/AddUser";
import { ROUTES, USER_DETAILS } from "./helpers/constants";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentUserDetails = localStorage.getItem("userdetails");
  useEffect(() => {
    console.log(pathname);
    console.log(Object.values(ROUTES));
    console.log(Object.values(ROUTES).filter((i) => i === pathname));
    localStorage.setItem("userdetails", JSON.stringify(USER_DETAILS));

    console.log(JSON.stringify(USER_DETAILS));
    if (currentUserDetails.length > 0) {
      localStorage.setItem("userdetails", currentUserDetails);
    }
    if (!Object.values(ROUTES).includes(pathname)) {
      navigate("/");
    }
  }, [currentUserDetails, pathname]);

  return (
    <>
      <Routes>
        <Route path={ROUTES.welcomePage} element={<WelcomePage />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.addUser} element={<AddUser />} />
        <Route path={ROUTES.userDetails} element={<UserDetails />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default App;
