import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleButtonClick = (e) => {
    alert(userInput)
  }
  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="Please type somthing"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Print</button>
    </div>
  );
}

export default App;
