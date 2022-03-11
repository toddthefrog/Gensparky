import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import AddUserComponent from './components/AddUserComponent';
import DeleteUserComponent from './components/DeleteUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
} from 'react-router-dom';
import { Nav, NavLink, NavMenu }
    from "./components/NavbarElements";

function App() {
  return (
  <Router>
    <div className="App">
          <Nav>
            <NavMenu>
              <NavLink to="/" activeStyle>
                Dashboard
              </NavLink>
              <NavLink to="/adduser" activeStyle>
                Register User
              </NavLink>
            </NavMenu>
          </Nav>
                  <Routes>
                  <Route exact path='/' element={< UserComponent />}></Route>
                  <Route exact path='/adduser' element={< AddUserComponent />}></Route>
                  </Routes>
      <br />
      {/* <UpdateUserComponent/> */}
    </div>
    </Router>
  );
}

export default App;
