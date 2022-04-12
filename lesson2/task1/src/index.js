import {createStore} from 'redux'


const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const incrementActionCreator = () => {
    return {
        type: INCREMENT
    }
}

const decrementActionCreator = () => {
    return {
        type: DECREMENT,
    }
  
};

const countreReducer = (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state 
    }
};

const store = createStore(countreReducer);

store.dispatch(incrementActionCreator());
store.dispatch(incrementActionCreator());
store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator());

 console.log(store.getState());