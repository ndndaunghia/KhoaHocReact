import logo from './logo.svg';
import './App.css';

function App() {
  const Arr = ['1', '2', '3'];
  const Obj = { key1: '1', key2: '2', key3: '3' };

  const renderArray = Arr.map((item) => <li>{item}</li>);
  const renderObject = Object.entries(Obj).map(([key, value]) => (
    <li>
      {key}: {value}
    </li>
  ));
  return (
    <>
      <ul>{renderArray}</ul>
      <ul>{renderObject}</ul>
    </>
  );
}

export default App;
