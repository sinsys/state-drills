import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TheDate from './components/TheDate/TheDate';
import Counter from './components/Counter/Counter';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Bomb from './components/Bomb/Bomb';
import RouletteGun from './components/RouletteGun/RouletteGun';

function App() {
  return (
    <div className="App">
    	<TheDate />
    	<Counter 
    		count={123}
    		step={5}
    	/>
    	<HelloWorld />
        <Bomb />
        <RouletteGun />
    </div>
  );
}

export default App;
