import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [vehicle, setVehicle] = useState({})

  useEffect(() => {
    axios.get('https://swapi.dev/api/vehicles/4/')
    .then(res => {setVehicle(res.data)})
    }
    , [])
  
  return (
    <div className="App">
      <h3>Name: {vehicle.name}</h3>
      <h3>Model: {vehicle.model}</h3>
      <h3>Length: {vehicle.length}</h3>
    </div>
  );
}

export default App;
