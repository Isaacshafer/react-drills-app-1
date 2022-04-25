import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import People from './pages/People';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/' >People</Link>
          </li>
          <li>
            <Link to='/details/:id' >Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<People />}/>
        <Route path='/details/:id' element={<Details />}/>
      </Routes>
    </Router>
  );
}

export default App;
