import './App.css';
import React from 'react';
import {BrowserRouter,  Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header'
import Main from './pages/Main'
import Login from './pages/Login'
import SingleAnimePage from './pages/SingleAnime'
import UserPage from './pages/User'
import Registration from './pages/Registration'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

