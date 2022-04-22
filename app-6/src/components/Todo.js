import React from 'react'

export default function Todo(props){

    let taskList = props.tasks.map((element, index) => {return <h3 key={index}>{element}</h3>})
    return(
        <div>
            {taskList}
        </div>
    )
}