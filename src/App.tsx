import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
