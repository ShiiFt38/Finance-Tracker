import React from 'react';
import LoginPage from '../src/Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/Login' element={<LoginPage/>}></Route>
    </Routes>
  )
}

export default App