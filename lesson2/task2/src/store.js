import {createStore} from 'redux'

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => {
    return {
      type: INCREMENT,
    };
}
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};

const initialState = {
    history:[]
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
            return {
            ...state,
          history: state.history.concat(+1),
        };

      case DECREMENT:
            return {
              ...state,
              history: state.history.concat(-1),
            };

      case RESET:
            return {
              ...state,
              history: [],
            };

      default:
        return state;
    }
}

const store = createStore(counterReducer)

export default store;