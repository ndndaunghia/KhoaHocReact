import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Header from "./Header";
import React, { useEffect, useState } from "react";

const ShowAge = (props) => {
  return (
    <div>Day la tuoi {props.age}</div>
  );
};

function App() {
  const [age, setAge] = useState(0);
  const handleClick = () => {
    setAge(age + 1)
  }
  return (
    <div>
      <Header />
      <div>{age}</div>
      <div onClick={handleClick}>Tang age len 1</div>
      <ShowAge age = {age}/>
    </div>
  );
}

export default App;
