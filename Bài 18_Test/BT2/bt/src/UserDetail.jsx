import React from "react";

export default function UserDetail({ info }) {
  const { username, email, phone } = info || {};

  return (
    <div>
      <h2>User Details</h2>
      {username && <p>Username: {username}</p>}
      {email && <p>Email: {email}</p>}
      {phone && <p>Phone: {phone}</p>}
    </div>
  );
}
