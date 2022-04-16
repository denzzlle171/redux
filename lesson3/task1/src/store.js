import { createStore, combineReducers } from 'redux';
import  counterReducer  from './counter.reducer';
import  userReducer  from './users.reducer';


const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});


const store = createStore(appReducer);
// const store = createStore(userReducer);
// const store = createStore(countreReducer);


export default store;