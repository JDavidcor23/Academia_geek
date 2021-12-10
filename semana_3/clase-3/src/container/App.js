import Question from '../components/Question.jsx'
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Home from '../components/Home.js';
import About from '../components/About.js';
import Navbar from '../components/Navbar.js';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/question" element={<Question/>}/>
          <Route path="/about" element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
