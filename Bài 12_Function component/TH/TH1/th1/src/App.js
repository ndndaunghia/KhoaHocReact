import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [age, setAge] = useState(5);
  const onChangeAge = () => {
    setAge(age + 1);
  };
  return (
    <div className='container'>
      <div>Tuổi là: {age}</div>
      <div onClick={onChangeAge}>Tăng tuổi thêm 1</div>
    </div>
  );
}

export default App;
