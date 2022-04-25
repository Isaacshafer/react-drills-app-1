import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom'
import Details from './components/Details'
import Home from './components/Home'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/details'>Details</Link>
            </li>
            <li>
              <Link to='/signup'>SignUp</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/details' element={<Details />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
    </Router>
  );
}

export default App;
