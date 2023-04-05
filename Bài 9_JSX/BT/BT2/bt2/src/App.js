import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import Greeting from "./components/Greeting";
import { useState } from "react";



function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
    <label htmlFor="">Name</label>
      <UserForm onChange ={handleChange}></UserForm>
      <Greeting>{inputValue}</Greeting>
    </div>
  );
}

export default App;
