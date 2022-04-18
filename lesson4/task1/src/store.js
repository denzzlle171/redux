import { createStore } from 'redux';
import countreReducer from './counter.reducer';


 const store = createStore(countreReducer);

export default store;
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();