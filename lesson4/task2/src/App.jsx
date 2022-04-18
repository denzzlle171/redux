import React from 'react';
import {Provider} from 'react-redux';
import  Users  from './users/Users';
import store from './store'



const App = () => {
    return (
      <Provider store={store}>
        <Users/>
      </Provider>
    );
}
 
export default App

