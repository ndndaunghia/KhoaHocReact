import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./store/couter";

export default function AddUser() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddUser = () => {
    if(value !== ""){
        dispatch(addUser(value));
        setValue("");
        console.log(1212);
    }
    else    
        return;
  }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" onClick={handleAddUser}>Add</button>
      </form>
    </div>
  );
}
