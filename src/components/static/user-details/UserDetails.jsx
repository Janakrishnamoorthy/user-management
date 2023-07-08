import React from "react";

const UserDetails = () => {
  return (
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Role</th>
    //         <th>Status</th>
    //         <th>Network</th>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //     </thead>
    //   </table>
    // </div>
    <>
      <button
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
      </button>
    </>
  );
};

export default UserDetails;
