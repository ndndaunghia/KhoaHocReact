import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [mul, setMul] = useState(0);

  const handleSum = () => {
    setSum(num1 + num2);
  }

  const handleMul = () => {
    setMul(num1 * num2);
  }
  return (
  //  <div className='container'>
  //   <label htmlFor="">Num1</label>
  //   <input type="number" onChange={(e) => setNum1(+e.target.value)}/>
  //   <label htmlFor="">Num2</label>
  //   <input type="number" onChange={(e) => setNum2(+e.target.value)}/>
  //   <div className="calSum">
  //   <button onClick={handleSum}>Tính tổng</button>
  //   <h4>Tổng: {sum}</h4>
  //   </div>
  //   <div className="calMul">
  //   <button onClick={handleMul}>Tính tích</button>
  //   <h4>Tích: {mul}</h4>
  //   </div>
  //  </div>
  <div style={{width: '100vw'}}>
    <form style={{width: '200px', margin: 'auto'}}>
  <div className="mb-3">
    <label className="form-label">Nhập số đầu tiên</label>
    <input type="number" className="form-control" onChange={(e) => setNum1(+e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Nhập số thứ 2</label>
    <input type="number" className="form-control" onChange={(e) => setNum2(+e.target.value)}/>
  </div>
 <div className="calculate d-flex">
 <div className="mb-3 mx-2">
  <button type="button" className="btn btn-primary" onClick={handleSum}>Tính tổng</button>
  <div className="mt-3">
    <label htmlFor="" className='form-label'>Tổng: {sum} </label>
  </div>
  </div>
 <div className="mb-3">
 <button type="button" className="btn btn-primary" onClick={handleMul}>Tính tích</button>
  <div className="mt-3">
    <label htmlFor="" className='form-label'>Tích: {mul} </label>
  </div>
 </div>
 </div>
</form>
  </div>
   
  );
}

export default App;
