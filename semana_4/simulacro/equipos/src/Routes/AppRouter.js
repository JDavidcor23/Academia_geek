import React from 'react'
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Crud from '../Pages/Crud/Crud';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/crud" element={<Crud/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
