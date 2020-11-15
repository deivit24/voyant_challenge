import React, { useState } from 'react';
import DogContext from './_helpers/DogContext';
import NavBar from './components/Navbar';
import Routes from './components/Routes';
import data from './data';
import './App.css';

const App = () => {
  const [dogs, setDogs] = useState(data);
  return (
    <DogContext.Provider value={{ dogs, setDogs }}>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </DogContext.Provider>
  );
};

export default App;
