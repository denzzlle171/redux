export const SET_LANGUAGE = 'SET/LANGUAGE';


export const setLanguage = (text) => {
  return {
    type: SET_LANGUAGE,
    payload: text,
  };
};


