import { applyMiddleware, createStore, compose } from 'redux';
import countreReducer from './counter.reducer';


const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
        console.log('next state', store.getState());
    console.groupEnd();
    return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  countreReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
