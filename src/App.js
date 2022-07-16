import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import heroes from './heroes.json';
import Hero from './components/views/Hero.js';
import Home from './components/views/Home.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [heroData, setHeroData] = useState(heroes);

  function handleHeroChange(newHeroData){
    setHeroData(newHeroData);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home heroes={heroData}/>} />
          <Route path="hero/:id" element={<Hero onHeroChange={handleHeroChange} heroes={heroData}/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
