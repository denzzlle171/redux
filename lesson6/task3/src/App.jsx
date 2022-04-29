import React from 'react';
import {Provider} from 'react-redux';
import store from './store'
import Weather from './weather/Weather';


const App = () => {

console.log(store.getState());

    return (
      <Provider store={store}>
          <Weather />
      </Provider> 
    );
}
 
export default App