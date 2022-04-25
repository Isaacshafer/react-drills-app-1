import React from 'react'

function NewTask(props) {
    


    let addTask = () => {
        props.setTasks([...props.tasks, props.input])
        props.setInput('')
      }


  return (
    <div>
      <input placeholder='enter new task' type='text' onChange={e => {props.setInput(e.target.value)}} />
      <button onClick={addTask}>Add</button>
    </div>
  )
}

export default NewTask
