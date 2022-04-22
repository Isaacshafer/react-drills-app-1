import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
const [array, setArray] = useState(['hello', 'hi', 'how are you', 'howdy'])
const [input, setInput] = useState('h')

let printList =  array.filter(e => {return e.includes(input)}).map((element, index) => {
  return <h2 key={index}>{element}</h2>
})


  return (
    <div className="App">
      <input type='text' onChange={e => {setInput(e.target.value)}} />
      {printList}
    </div>
  );
}

export default App;
