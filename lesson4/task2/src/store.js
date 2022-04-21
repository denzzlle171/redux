import { createStore, combineReducers } from 'redux';
import countreReducer from './counter/counter.reducer';
import usersReducer from './users/users.reducer';


const reducer = combineReducers({
  users: usersReducer,
  countreReducer: countreReducer,
});

const store = createStore(reducer);

export default store;

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();