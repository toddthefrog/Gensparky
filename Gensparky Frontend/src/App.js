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
        <Nav>
          <NavMenu>
            <NavLink to="/" activeStyle>
              In Training
            </NavLink>
            <NavLink to="/home" activeStyle>
              On Bench
            </NavLink>
            <NavLink to="/addUser" activeStyle>
              Add Trainee
            </NavLink>
          </NavMenu>
        </Nav>
        <Routes>
          <Route exact path='/' element={< UserComponent />}></Route>
          <Route exact path='/home' element={< BenchUserComponent />}></Route>
          <Route exact path='/addUser' element={< AddUserComponent />}></Route>
        </Routes>
        <br />
      </div>
    </Router>
  );
}

export default App;
