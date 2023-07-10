import React, { useState } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";

const AddUser = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [network, setNetwork] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = () => {
    const storedUserDetails = localStorage.getItem("userdetails");
    let userDetails = [];
    if (storedUserDetails) {
      userDetails = JSON.parse(storedUserDetails);
    }
    const newUser = {
      id:
        userDetails.length > 0 ? userDetails[userDetails.length - 1].id + 1 : 1,
      name: name,
      role: role,
      network: network,
      password: password,
    };

    // Retrieve existing user details from localStorage

    // Add the new user to the array
    userDetails.push(newUser);

    // Store the updated user details in localStorage
    localStorage.setItem("userdetails", JSON.stringify(userDetails));

    // Reset the input fields
    setName("");
    setRole("");
    setNetwork("");
    setPassword("");
  };

  return (
    <div>
      <h2>Add User</h2>
      <form>
        <Input
          type={"text"}
          placeholder={"Enter Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder={"Enter Role"}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder={"Enter Network"}
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"Enter Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <Button title={"Add user"} handleClick={handleAddUser} />
    </div>
  );
};

export default AddUser;
