import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TheDate from './components/TheDate/TheDate';
import Counter from './components/Counter/Counter';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Bomb from './components/Bomb/Bomb';
import RouletteGun from './components/RouletteGun/RouletteGun';
import Tabs from './components/Tabs/Tabs';
import Accordion from './components/Accordion/Accordion';

const tabsProp = 
  [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' }
  ];
const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

class App extends React.Component {
  render() {
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
        <Tabs 
          tabs={tabsProp}
        />
        <Accordion 
          sections={sectionsProp}
        />
      </div>
    )
  }
}

export default App;
