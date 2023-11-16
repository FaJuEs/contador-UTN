// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contador from "./contador";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Contador} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
