import React from 'react';
import LoginPage from '../src/Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import TipsTricks1 from './Pages/TipsTricks1';
import TipsTricks2 from './Pages/TipsTricks2';
import TipsTricks3 from './Pages/TipsTricks3';
import Dashboard from './Pages/Dashboard';
import Transactions from './Pages/Transactions';
import Budgets from './Pages/Budgets';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/Login' element={<LoginPage/>}></Route>
      <Route path='/SignUp' element={<SignUpPage/>}></Route>
      <Route path='/Tracking-Tips' element={<TipsTricks1/>}></Route>
      <Route path='/Dashboards-Tips' element={<TipsTricks2/>}></Route>
      <Route path='/Reports-Tips' element={<TipsTricks3/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Transactions' element={<Transactions/>}></Route>
      <Route path='/Budgets' element={<Budgets/>}></Route>
      <Route path='/Reports' element={<Reports/>}></Route>
      <Route path='/Settings' element={<Settings/>}></Route>
    </Routes>
  )
}

export default App