import { ADDUSER, DELETEUSER } from './users.actions';

const initState = { usersList: [] };

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };

    case DELETEUSER:
      return {
        ...state,
        usersList: [...state.usersList.filter(el=>el.id!==action.payload)],

        // usersList: usersList.filter(el=>el.id!==action.payload)
      };

    default:
      return state;
  }
};
