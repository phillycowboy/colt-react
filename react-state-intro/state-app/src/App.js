import React from 'react';
// import Game from './Game'
import Rando from './Rando'
// import Demo from './Demo'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Game color="purple"/> */}
      {/* <Demo animal="Bobcat" food="pineapple"/> */}
      <Rando maxNum={7}/>

    </div>
  );
}

export default App;
