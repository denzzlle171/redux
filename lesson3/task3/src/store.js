import { createStore, combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import  userReducer  from './user.reducer';
import languageReducer from './language.reducer';

const appReducer = combineReducers({
  cart: cartReducer,
  users: userReducer,
  language: languageReducer,
});


const store = createStore(appReducer);



export default store;