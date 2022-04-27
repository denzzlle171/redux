import React from 'react';
import {Provider} from 'react-redux';
import store from './store'
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';



const App = () => {
    return (
      <Provider store={store}>
        <div className='page'>
          <UserInfo />
          <SearchField/>
        </div>
      </Provider>
    );
}
 
export default App