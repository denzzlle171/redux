import { GET_WETHER_DATA } from './weather.actions';


const initialData = {}

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_WETHER_DATA: {
      return {
        ...state,
        cityes: action.payload,
      };
    }


    default:
      return state;
  }
};
export default weatherReducer;


