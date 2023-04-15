import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  var day = new Date();
  var timeNow = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds()
  const [time, setTime] = useState(timeNow);
  console.log("Giờ hiện tại:", time);
  useEffect(() => {
    const timer = setTimeout(() => {
      var day = new Date();
      var timeNow = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
      setTime(timeNow);
      console.log("Giờ sau 5 giây:", time);
    }, 5000);
    return () => clearTimeout(timer);
}, []);
  return (
   <div>
      <p>{time}</p>
   </div>
  );
}

export default App;
