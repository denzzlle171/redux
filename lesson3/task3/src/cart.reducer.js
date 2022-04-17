import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initState = {
    products: []
  };
export const cartReducer = (state = initState, action) => {

  switch (action.type) {
    case ADD_PRODUCT: {
     
      return {
        ...state.cart,
        products: [...state.products, action.payload],
      };
    }
// 
    case REMOVE_PRODUCT: {
      const newList = state.products.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state.cart,
        products: newList,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
//...state,
      //  usersList: [...state.usersList.filter(el=>el.id!==action.payload)],