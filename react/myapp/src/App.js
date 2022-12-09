import logo from './logo.svg';
import './App.css';
import './components/Homepage'
import TopMenu from './components/Homepage';
import About from './components/About';
import { Link, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
 
     <div>
    <ul>
        <a href="/"><li>Home</li></a>
        <a href=""><li>Contact</li></a>
        <a href="/about"><li>About</li></a>
    </ul>
    </div>
    <div className='input'>
        <h4>Search &nbsp; &nbsp;</h4>
        <input type="text" placeholder='Search' />
    </div>
    
    <Routes>
        <Route path="/" element={<TopMenu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
