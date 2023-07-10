import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userdetails.css";
import Button from "../../common/Button";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  // const [authUser, setAuthUser] = useState("");
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/adduser");
    console.log(navigate);
  };

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/login");

    const storedUserDetails = localStorage.getItem("userdetails");
    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);
      setUserDetails(userDetails);
    }

    const storedCurrentUser = localStorage.getItem("CurrentUser");
    if (storedCurrentUser) {
      setCurrentUser(storedCurrentUser);
    }

    // const storedAuthUser = localStorage.getItem("auth");
    // if (storedAuthUser) {
    //   setAuthUser(storedAuthUser);
    // }
  }, [logout]);

  const handleLogout = (e) => {
    localStorage.removeItem("auth");
    setLogout(true);
  };

  const handleDelete = (id) => {
    const deletedUserDetails = userDetails.filter((user) => user.id !== id);
    setUserDetails(deletedUserDetails);
    localStorage.setItem("userdetails", JSON.stringify(deletedUserDetails));
  };

  return (
    <div>
      <h2>Welcome, {currentUser}</h2>
      <Button title={"Add user"} handleClick={handleNavigate} />
      <table className="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Network</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td></td>
              <td>{user.network}</td>
              <td>
                {/* <Button
                  title={"Edit"}
                  handleClick={handleEdit}
                  disabled={true}
                /> */}
                <Button
                  title={"Delete"}
                  handleClick={() => handleDelete(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button title={"Logout"} handleClick={handleLogout} />

      {/* <button
        onClick={() => {
          localStorage.setItem("value", JSON.stringify("example"));
        }}
      >
        set to local storage
      </button>
      <button
        onClick={() => {
          alert(JSON.parse(localStorage.getItem("value")));
        }}
      >
        get from local storage
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("value");
        }}
      >
        remove from local storage
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        clear local storage
      </button> */}
    </div>
  );
};

export default UserDetails;
