import { createStore, combineReducers } from 'redux';
import pageReducer from './page.reducer';
import userReducer from './user.reducer';


const reducer = combineReducers({
  currentPage: pageReducer,
  usersList: userReducer,
});

const store = createStore(reducer);

export default store;

