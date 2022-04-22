import React from 'react'
import {useState} from 'react'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const displayInfo = () => {
        alert(`username: ${userName} password: ${password}`)
    }

  return (
    <div>
      <input type='text' placeholder='userName' onChange={e => setUserName(e.target.value)}/>
      <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)}/>
      <button onClick={displayInfo}>Login</button>
    </div>
  )
}
