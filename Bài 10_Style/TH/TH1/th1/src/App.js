import logo from './logo.svg';
import './App.css';
import photo1 from './anh1.jpg'

function App() {
  return (  
    <div className="container">
      <div>Đây là hướng dẫn dùng ảnh trong React</div>
      <img src={photo1} width='200' height='200' className='img' />
      <div className="required-title">
        Đây là ảnh dùng required
      </div>
      <img src={require('./anh1.jpg')} className='img2' width='200' height='200' />
      <div className="required-title">
        Đây là ảnh dùng link
      </div>
      <img src="https://cdn.pixabay.com/photo/2020/04/22/12/05/adventure-5077752_960_720.jpg" alt="" width='200' height='200'/>
    </div>
   
  );
}

export default App;
