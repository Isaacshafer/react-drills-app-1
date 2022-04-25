import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'

export default function People() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setPeople(res.data.results)
    })
  }, [])

  const displayData = people.map((element, index) => {
      return <Link key={index} to={`/details/${index+1}`}>{element.name}</Link>
    })

    
  return (
    <div>
      {displayData}
    </div>
  )
}
