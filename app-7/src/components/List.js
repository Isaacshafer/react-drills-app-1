import React from 'react'
import Todo from './Todo'

export default function List(props) {

    let list = props.tasks.map((element, index) => {
        return <Todo task={element} key={index} />
    })
  return (
    <div>
      {list}
    </div>
  )
}
