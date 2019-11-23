import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TheDate from './components/TheDate/TheDate';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
    	<TheDate />
    	<Counter 
    		count={123}
    		step={5}
    	/>
    </div>
  );
}

export default App;
