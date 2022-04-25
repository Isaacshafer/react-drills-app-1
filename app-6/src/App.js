import React from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';


function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')



  let addTask = () => {

    setTasks([...tasks, input])
    setInput('')
  }

  return (
    <div className="App">
      <h2>My to-do list:</h2>
      <input placeholder='enter new task' type='text' onChange={e => {setInput(e.target.value)}} />
      <button onClick={addTask}>Add</button>
      <Todo tasks={tasks}/>
    </div>
  );
}

export default App;
