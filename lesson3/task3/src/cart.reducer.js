import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initState = {
  cart: {
    products: []
  }};
export const cartReducer = (state = initState, action) => {

  switch (action.type) {
    case ADD_PRODUCT: {
      console.log(state.cart.products);
      return {
        ...state.cart,
        products: [...state.cart.products, action.payload],
      };
    }
// state.cart.products.concat(action.payload),
    case REMOVE_PRODUCT: {
      // const newList = state.usersList.filter(
      //   (user) => user.id !== action.payload
      // );
      // return {
      //   ...state,
      //   usersList: newList,
      // };
    }

    default:
      return state;
  }
};

export default cartReducer;
