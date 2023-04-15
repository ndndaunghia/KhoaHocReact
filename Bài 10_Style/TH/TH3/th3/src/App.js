import logo from './logo.svg';
import styles from './App.module.css'
import { useRef } from 'react';
import HelloWorld from './HelloWorld';

function MyComponent(){
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef);
  }
  return (
    <div>
    <input type="text" ref={inputRef} />
    <button onClick={handleClick}>Focus</button>
  </div>
  )
}

function App() {
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.title}>Login</h1>
    //   <form>
    //     <p className={styles.fieldTitle}>Nhập email:</p>
    //     <input
    //       name="email"
    //       type="text"
    //       className={styles.input}
    //     />
    //     <p className={styles.fieldTitle}>Nhập password:</p>
    //     <input
    //       name="password"
    //       type="password"
    //       className={styles.input}
    //     />
    //     <br />
    //     <label>
    //       <input
    //         className={styles.checkbox}
    //         name="isRead"
    //         type="checkbox" /> I read and accept the privacy policy:
    //     </label>

    //     <button className={styles.btnSubmit}>Submit nè</button>
    //   </form>
    // </div>
    // <MyComponent/>
    <div>
      {/* <input type="text"/> */}
      <HelloWorld/>
    </div>
  );
}

export default App;
