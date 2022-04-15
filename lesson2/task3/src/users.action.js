

export const  ADDUSER = 'ADD/USER';
export const DELETEUSER = 'DELETE/USER';

export const addUser = (userData) => {
  return {
    type: ADDUSER,
    payload: userData,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: id,
  };
};





