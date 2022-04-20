import React from 'react';
// import {Provider} from 'react-redux';
import UsersList from './users/UsersList';
// import store from './store'



const App = ({ users }) => {

  return <UsersList users={users} />;
};
 
export default App

