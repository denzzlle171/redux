export const SET_USER = 'SET/USER';
export const REMOVE_USER = 'REMOVE/USER';

export const setUser = (userName) => {
  return {
    type: SET_USER,
    payload: userName,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

// removeUser();
// setUser({ name: 'Bob' })