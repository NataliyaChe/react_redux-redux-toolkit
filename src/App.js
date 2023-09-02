import './App.css';
import React from 'react';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Main from './pages/Main'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { useSelector } from 'react-redux'


function App() {
  const isAuth = useSelector(state => state.user.currentUser)
  console.log('isAuth', isAuth);

  if(isAuth) {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

