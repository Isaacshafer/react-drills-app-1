import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const [person, setPerson] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {
            setPerson(res.data)
        })
    }, [])
  return (
    <div>
        <h2>Name: {person.name}</h2>
        <p>Gender: {person.gender}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
    </div>
  )
}
