import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/profile/Profile';
import Saved from './pages/saved/Saved';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/saved' element={<Saved/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
