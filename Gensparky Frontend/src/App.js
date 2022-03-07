import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import AddUserComponent from './components/AddUserComponent';
import DeleteUserComponent from './components/DeleteUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';

function App() {
  return (
    <div className="App">
      <UserComponent />
      <AddUserComponent/>
      <UpdateUserComponent/>
    </div>
  );
}

export default App;
