import React from "react";

export default function HelloWorld() {
  let name = "Nghĩa";
  const user = {
    firstName: "Dau",
    lastName: "Nghia",
  };

  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  return (
    <div>
      <div>
        Hello, {name} và {formatName(user)}
      </div>
      <div>Rất vui được gặp bạn</div>
    </div>
  );
}
