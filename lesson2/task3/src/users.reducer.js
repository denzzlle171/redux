import { ADDUSER, DELETEUSER } from './users.action';

const initState = { usersList: [] };

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: [action.payload],
      };

    case DELETEUSER:
      return {
        ...state,
      usersList: usersList.filter(el=>el.id!==action.payload)
      };

    default:
      return state;
  }
};
