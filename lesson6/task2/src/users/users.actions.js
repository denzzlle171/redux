export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIVED = 'USER_DATA_RECIVED';
import { getUserData } from './users.gateway';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecived = (userData) => {
  return {
    type: USER_DATA_RECIVED,
    payload: {
      userData,
    },
  };
};



export const fetchUserData = (userName) => {
  return function (dispatch) {
    
    dispatch(showSpinner());

    getUserData(userName)
      .then((userData) => {
        dispatch(userDataRecived(userData));
    });
  };
};
