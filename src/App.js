// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Update from './Update';
import Read from './Read';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/read/:id' element={<Read/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
