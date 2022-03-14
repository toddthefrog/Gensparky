import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Nav, NavLink, NavMenu } from "./components/NavbarElements";
import BenchUserComponent from './components/BenchUserComponent';
import AddUserComponent from './components/AddUserComponent'
import UserComponent from './components/UserComponent';
  
function App() {
  return (
    <Router>
      <div className="App">
        <li>
          <Link to="/">User List</Link>
        </li>
        <li>
          <Link to="/adduser">Register User</Link>
        </li>

        <Routes>
          <Route exact path='/' element={< UserComponent />}>
          </Route>

          <Route exact path='/adduser' element={< AddUserComponent />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
