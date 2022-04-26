// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './store'
// import TransferList from './options/TransferList';


const App = () => {

  return (
    <Provider store={store}>
      {/* <TransferList /> */}
    </Provider>
  );
};
 

console.log(store.getState());

export default App