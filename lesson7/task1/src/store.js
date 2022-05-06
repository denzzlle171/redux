import { combineReducers, createStore,  compose, applyMiddleware } from 'redux';
import tasksReducer from './tasks/tasks.reducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  tasks: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store
 