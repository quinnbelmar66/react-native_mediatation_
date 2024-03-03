import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonTemplate from './components/Button';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/testpage' element={<TestPage />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
