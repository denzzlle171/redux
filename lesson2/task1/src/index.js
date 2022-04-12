import {createStore} from 'redux'


const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const incrementActionCreator = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementActionCreator = () => {
  return {
    type: DECREMENT,
  };
};

 const countreReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(countreReducer);

store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator());

 

