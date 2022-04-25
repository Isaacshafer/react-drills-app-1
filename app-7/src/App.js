import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List';
import NewTask from './components/NewTask'



function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')



  

  return (
    <div className="App">
      <h2>My to-do list:</h2>
      <NewTask tasks={tasks} setTasks={setTasks} input={input} setInput={setInput}/>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;