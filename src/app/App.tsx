import React from 'react';
import '../App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../features/elearning/pages/Home';
import Detail from '../features/elearning/pages/Detail';
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
