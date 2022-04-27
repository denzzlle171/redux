import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import usersReducer from './users/users.reducer';


const reducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

