import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      if (!username && !password) {
        setErrorMessage("Vui lòng điền đầy đủ thông tin");
      } else if (!username) {
        setErrorMessage("Vui lòng nhập tên người dùng");
      } else {
        setErrorMessage("Vui lòng nhập mật khẩu");
      }
    } else {
      if (username === "ndnghia" && password === "12345") {
        setErrorMessage("Đăng nhập thành công");
      } else {
        setErrorMessage("Hãy kiểm tra tài khoản của bạn");
      }
    }    
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}

export default App;
