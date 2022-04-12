import {createStore} from 'redux'




export const incrementActionCreator = () => {
  return {
    type: 'COUNTER/INCREMENT',
  };
};

export const decrementActionCreator = () => {
  return {
    type: 'COUNTER/DECREMENT',
  };
};

 const countreReducer = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(countreReducer);

store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator());

 

