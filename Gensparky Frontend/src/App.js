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
                  <Route exact path='/' element={< UserComponent />}></Route>
                  <Route exact path='/adduser' element={< AddUserComponent />}></Route>
                  </Routes>
      <br />
      <UpdateUserComponent/>
    </div>
    </Router>
  );
}

export default App;
