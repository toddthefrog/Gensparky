import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import AddUserComponent from './components/AddUserComponent';
import DeleteUserComponent from './components/DeleteUserComponent';

function App() {
  return (
    <div className="App">
      <UserComponent />
      <AddUserComponent/>
      <DeleteUserComponent/>
    </div>
  );
}

export default App;
