import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import AddUserComponent from './components/AddUserComponent';
import BenchUserComponent from './components/BenchUserComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Nav, NavLink, NavMenu }
  from "./components/NavbarElements";
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <NavMenu>
            <NavLink to="/" activeStyle>
              Genspark Attendance Dashboard
            </NavLink>
          </NavMenu>
        </Nav>
        <Routes>
          <Route exact path='/' element={< HomeComponent />}></Route>
        </Routes>
        <br />
      </div>
    </Router>
  );
}

export default App;
