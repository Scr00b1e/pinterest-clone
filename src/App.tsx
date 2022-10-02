import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
