import React from "react";

function HelloWorld() {
  const user = {
    firstName: "Dau",
    lastName: "Nghia",
  };

  const condition = true;

  const formatUser = (user) => {
    return user.firstName + " " + user.lastName;
  };

  return (
    <div>
      <div>{formatUser(user)}</div>
      <div>{condition === true ? "Hello" : "Hi"} </div>
    </div>
  );
}

export default HelloWorld;
