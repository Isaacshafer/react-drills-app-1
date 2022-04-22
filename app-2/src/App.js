import React from 'react';
import {useState } from 'react'
import './App.css';

function App() {
  const [array, setArray] = useState(['hello', 'hi', 'howdy'])

const foodsToDisplay = array.map((element, index) => {
  return <h2 key={index}>{element}</h2>
})

  return (
    <div className="App">
     {foodsToDisplay}
    </div>
  );
}

export default App;
