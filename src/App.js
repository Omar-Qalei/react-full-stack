import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';
import { Registration } from './pages/registration/Registration';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registration' element={<Registration />}/>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    // <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
