import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function () {
const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const onSubmit = (e) => {
       e.preventDefault();
       if (username.trim() !== '' && password !== '') {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      }      
       else {
        alert("Hãy nhập gì đoá đi ")
       }
  }

  if(isLoggedIn) {
    navigate('/');
  }

  return (
    <div>
        <form action="" onSubmit={onSubmit}>
           <div>
           <label htmlFor="">Tên đăng nhập</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
           </div>
           <div>
           <label htmlFor="">Mật khẩu</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
           </div>
            <button type='submit'>Đăng nhập</button>
        </form>
    </div>
  )
}
